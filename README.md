# Welcome to my Schiphol Flights App

This is a demo app for showing and searching flights at Schiphol Airport. I have had a little fun working on this assignment so I did a few things that are not part of the assignment. Have fun reading this and checking out the codebase ;)

## Index

- [Features](#features)
- [Deployment](#deployment)
- [Styling](#styling)
- [Original Assignment](#original-assignment)
- [Resources](#resources)
- [Future recommendations](#future-recommendations)
- [Running the app](#running-the-app)

## Features

- [x] Search flights by destination airport (max 5 results)
- [x] Use JSON data from an API endpoint
- [x] Sort the flights by date and time

**Extra features:**

- [x] Used Remix and Tailwind CSS as Schiphol works with this
- [x] Search flights by flight number
- [x] Added navigation bar
- [x] Added Playwright tests
- [x] Added some unit tests
- [x] Added ZOD schema validation
- [x] Display all flights on an All Flights page
- [x] Limit the number of flights displayed (added a dropdown)
- [x] Randomized delayed response
- [x] Deployed with Vercel on https://schiphol-fe.vercel.app/

### Deployment

This app is deployed using [Vercel](https://vercel.com/) because it's simply lovely to work with.

### Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Tailwind makes it easy to style your components with classes.

### Original Assignment

Please see the [assignment](app/docs/assignment.md) file for the original assignment.

### Resources

- [Remix](https://remix.run/)
- [Vercel](https://vercel.com/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/)

### Future recommendations

- [ ] Add more e2e and unit tests
- [ ] Make even more components
- [ ] Make a flight detail page
- [ ] Combine ZOD schema with front-end and back-end
- [ ] Autocomplete search

## Running the app

### Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Create a production build:

```bash
pnpm run build
```

---

Built with ❤️ using Remix by Fons Hettema.
