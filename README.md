# HRM Documentation

This site documents the HR management and mobile application sections of the system.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This starts a local development server and opens a browser window. Most changes are reflected live without restarting the server.

## Build

```bash
yarn build
```

This generates static content into the `build` directory and can be served by any static hosting service.

## Deployment

### Option 1: Vercel
This project is optimized for [Vercel](https://vercel.com).

**Token Generation:**

```bash
npx vercel --prod --token your_new_token
```

**Manual Deployment via CLI:**

```bash
npx vercel --prod
```

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub Pages for hosting, this command builds the website and pushes to the `gh-pages` branch.
