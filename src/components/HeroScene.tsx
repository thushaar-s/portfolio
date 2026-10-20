import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/* The 3D object in the hero: a point-cloud sphere with a wireframe core and an orbit ring.
   It follows the pointer slightly, pauses when off screen and stays still for reduced motion. */
export default function HeroScene({ className = '' }: { className?: string }) {
  const mount = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mount.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const styles = getComputedStyle(document.documentElement)
    const accent = new THREE.Color(styles.getPropertyValue('--accent').trim() || '#68d2ff')
    const fg = new THREE.Color(styles.getPropertyValue('--fg').trim() || '#e9edf2')

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
    } catch {
      return // no WebGL: the hero still works without the 3D object
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)
    renderer.domElement.setAttribute('aria-hidden', 'true')

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
    camera.position.set(0, 0, 7)

    const world = new THREE.Group()
    const rig = new THREE.Group() // offsets the object so it shows beside the photo
    rig.add(world)
    scene.add(rig)

    // Point cloud on a sphere (Fibonacci distribution)
    const count = 2200
    const pos = new Float32Array(count * 3)
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const t = golden * i
      pos[i * 3] = Math.cos(t) * r * 1.55
      pos[i * 3 + 1] = y * 1.55
      pos[i * 3 + 2] = Math.sin(t) * r * 1.55
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const pMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uAccent: { value: accent },
        uFg: { value: fg },
        uSize: { value: 3.0 * renderer.getPixelRatio() },
      },
      vertexShader: /* glsl */ `
        uniform float uTime; uniform float uSize;
        varying float vFront; varying float vWave;
        void main() {
          vec3 p = position;
          float wave = sin(p.y * 3.2 + uTime * 1.1) * cos(p.x * 2.4 - uTime * .7);
          p += normalize(p) * wave * .07;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vFront = clamp((mv.z + 7.5) / 2.5, 0.0, 1.0);
          vWave = wave;
          gl_PointSize = uSize * (6.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uAccent; uniform vec3 uFg;
        varying float vFront; varying float vWave;
        void main() {
          float d = length(gl_PointCoord - .5);
          if (d > .5) discard;
          vec3 c = mix(uFg, uAccent, smoothstep(.1, .9, vWave * .5 + .5));
          gl_FragColor = vec4(c, (1.0 - d * 2.0) * mix(.18, .95, vFront));
        }`,
    })
    const points = new THREE.Points(pGeo, pMat)
    world.add(points)

    // Wireframe core
    const core = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.72, 1)),
      new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.55 }),
    )
    world.add(core)

    // Orbit ring with a small satellite
    const orbit = new THREE.Group()
    orbit.rotation.set(1.15, 0.2, -0.35)
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.15, 0.004, 8, 220),
      new THREE.MeshBasicMaterial({ color: fg, transparent: true, opacity: 0.35 }),
    )
    const sat = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 16), new THREE.MeshBasicMaterial({ color: accent }))
    orbit.add(ring, sat)
    world.add(orbit)

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.003, 8, 260),
      new THREE.MeshBasicMaterial({ color: fg, transparent: true, opacity: 0.12 }),
    )
    ring2.rotation.set(1.4, -0.5, 0.4)
    world.add(ring2)

    const resize = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      rig.position.set(w > 520 ? -1.05 : -0.55, w > 520 ? -0.7 : -0.85, 0)
      if (reduce) renderer.render(scene, camera)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(el)

    const target = { x: 0, y: 0 }
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 0.6
      target.y = (e.clientY / window.innerHeight - 0.5) * 0.4
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    let visible = true
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
    io.observe(el)

    const clock = new THREE.Clock()
    let raf = 0
    const frame = () => {
      raf = requestAnimationFrame(frame)
      if (!visible) return
      const t = clock.getElapsedTime()
      pMat.uniforms.uTime.value = t
      world.rotation.y += (target.x + t * 0.08 - world.rotation.y) * 0.04
      world.rotation.x += (target.y - world.rotation.x) * 0.04
      core.rotation.x = t * 0.25
      core.rotation.z = t * 0.15
      sat.position.set(Math.cos(t * 0.6) * 2.15, Math.sin(t * 0.6) * 2.15, 0)
      renderer.render(scene, camera)
    }
    if (reduce) {
      world.rotation.set(0.15, 0.6, 0)
      sat.position.set(2.15, 0, 0)
      renderer.render(scene, camera)
    } else {
      frame()
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('pointermove', onMove)
      scene.traverse((o) => {
        const m = o as THREE.Mesh
        m.geometry?.dispose()
        const mat = m.material as THREE.Material | undefined
        mat?.dispose()
      })
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mount} className={className} />
}
