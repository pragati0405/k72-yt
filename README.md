 # K72 YT

A responsive, animation-rich recreation of a creative agency's website — built to practice advanced frontend concepts like scroll-based animations, dynamic routing, and production deployment workflows.

🔗 **Live Demo:** [k72-yt-gamma.vercel.app](https://k72-yt-gamma.vercel.app/)

## About

This project is inspired by K72, a well-known creative digital agency, and recreates its visual identity — bold typography, smooth transitions, and an immersive portfolio showcase — using React.

## Tech Stack

- **React** – Component-based UI
- **Vite** – Fast build tool & dev server
- **Tailwind CSS** – Utility-first styling
- **GSAP** – Scroll and stair-transition animations
- **React Router** – Client-side routing
- **Vercel** – Deployment & hosting

## Features

- Smooth GSAP-powered page transitions and animations
- Fully responsive layout across devices
- Dynamic project showcase with image/video thumbnails
- Client-side routing with proper SPA rewrite handling

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/pragati0405/k72-yt.git
cd k72-yt
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deployment

This project is deployed on [Vercel](https://vercel.com/) with SPA routing handled via a `vercel.json` rewrite rule.

## Learnings

Building this project involved solving real-world frontend challenges, including:
- Case-sensitive import paths across OS environments
- Correct static asset handling with Vite's `public/` directory
- Fixing GSAP animation overlays blocking click events
- Configuring SPA rewrites for client-side routing on Vercel

## Author

**Pragati Verma**
[GitHub](https://github.com/pragati0405) · [LinkedIn](https://www.linkedin.com/in/pragati-verma-a57251399/)

## License

This project is for educational purposes only, built as a learning exercise in frontend development.
