# Thushaar S Portfolio

A personal portfolio site built with React, TypeScript, Tailwind CSS and Three.js. It uses a dark theme, a 3D hero object, video samples and a Google Drive link.

## Run it on your computer

1. Install Node.js 18 or newer from nodejs.org.
2. Open a terminal in this folder and run:
   ```
   npm install
   npm run dev
   ```
3. Open the address it prints (usually http://localhost:5173).

## Folder structure

```
thushaar-portfolio/
├─ index.html              Page title, SEO and social sharing tags
├─ public/
│  ├─ images/profile.jpg   Your photo
│  ├─ resume.pdf           Your resume (the Download Resume buttons open this)
│  └─ videos/              Video samples (.mp4) and their still frames (.jpg)
├─ src/
│  ├─ data/portfolio.ts    ALL text, links, skills, projects, jobs and certificates
│  ├─ components/          One file per section (Hero, About, Skills, Work, ...)
│  ├─ App.tsx              Section order
│  └─ index.css            Colours, fonts and shared styles
├─ tailwind.config.js
└─ vite.config.ts
```

## Change the text

Open `src/data/portfolio.ts`. Every word on the site comes from this file.

- **Hero:** edit `profile` (name, title, headline, intro, email, phone).
- **Results strip:** edit `stats`. Use real numbers only.
- **About:** edit `about.paragraphs`, `about.goals` and `about.facts`.
- **Skills:** edit `skillGroups`. `level` is 1 to 5 and sets the dots. Set each one to your real level.
- **Experience:** edit `experience`. Each job has `points` (bullets) and optional `highlights` (small chips).
- **Education and certificates:** edit `education` and `certifications`. Add a `date` or a verification `url` when you have one.
- **Social links:** edit `socials`. Any link left as `'#'` is hidden until you add a real URL.

## Add, edit or remove projects

In `src/data/portfolio.ts`, replace the line that makes 6 placeholders:

```ts
export const projects: Project[] = Array.from({ length: 6 }, () => ({ ...placeholderProject }))
```

with your own list:

```ts
export const projects: Project[] = [
  {
    title: 'Your project name',
    description: 'What the brief was, what you made and the result.',
    tools: ['CapCut', 'Meta Ads', 'Instagram'],
    image: asset('images/project-1.jpg'),   // put the image in public/images
    detailsUrl: 'https://...',
    codeUrl: 'https://...',
  },
]
```

To delete a project, remove its block. To rename the card buttons, edit `projectButtons`.

## Add or change videos

1. Put the video in `public/videos/` as an `.mp4` (H.264). Vertical 9:16 looks best.
2. Add a still frame with the same name and `.jpg`.
3. Add a block to `videos` in `src/data/portfolio.ts`.

Keep each video under about 10 MB so the page loads fast. To convert a phone video, you can run:

```
ffmpeg -i input.mov -vf "scale=720:-2,fps=30" -c:v libx264 -crf 27 -c:a aac -b:a 96k -movflags +faststart output.mp4
ffmpeg -ss 1.5 -i output.mp4 -frames:v 1 output.jpg
```

The "View more on Drive" button uses `videoLinks.drive`.

## Change your photo or resume

Replace `public/images/profile.jpg` or `public/resume.pdf` with a new file of the same name.

## Contact section

The Contact section shows your email, UAE phone, India phone, location and social links, each with a Copy button. Edit them in `src/data/portfolio.ts` (`profile.email`, `profile.phone`, `profile.phoneIndia`, `profile.location`). There is no message form, so nothing needs to be set up.

## Change colours or fonts

Colours are at the top of `src/index.css` (`--accent` is the blue). Fonts load from Google Fonts in `index.html` and are named in `tailwind.config.js`.

## Deploy to Vercel (free)

1. Create a GitHub account and upload this folder as a new repository (skip `node_modules` and `dist`).
2. Go to vercel.com, sign in with GitHub and click **Add New → Project**.
3. Pick the repository. Vercel detects Vite. Keep the defaults (build command `npm run build`, output folder `dist`) and click **Deploy**.
4. After a minute you get a live link such as `thushaar-portfolio.vercel.app`. Every change you push to GitHub redeploys the site.

Netlify works the same way: build command `npm run build`, publish directory `dist`.

You can also run `npm run build` and drag the `dist` folder onto app.netlify.com/drop to publish without GitHub.
