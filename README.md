# Welcome to my Schiphol Flights App

This is a demo app for showing and searching flights at Schiphol Airport. I have had fun working on this assignment so I did a few things that are not part of the assignment. As I know Schiphol is working with Remix, I decided to use Remix for this assignment. Even though I am more experienced with NextJS, I wanted to try something new. Also Schiphol is working with Remix, so I thought it would be a good fit. Have fun reading this and checking out the codebase ;)

## Table of contents

- [Original Assignment](#original-assignment)
- [Features](#features)
- [Components](#components)
- [Styling](#styling)
- [Future recommendations](#future-recommendations)
- [Resources](#resources)
- [Running the app](#running-the-app)

### Original Assignment

Please see the [assignment](app/docs/assignment.md) file for the original assignment.

### Features

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

### Components

In other projects I have used accessible and unstyled components from component libraries like [Shadcn](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/primitives) which I like to work with. Now the assignment states that we should use a minimum amount of third party UI libraries. The components I have made are inspired by these libraries.

### Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Tailwind makes it easy to style your components with classes and to set up the design system with design tokens such as colors, fonts, spacing, etc. In my personal projects I also use Tailwind and if this was a real project, I would have used it as well.

### Deployment

This app is deployed using [Vercel](https://vercel.com/) because it's simply lovely to work with.

### Future recommendations

- [ ] Add more e2e and unit tests
- [ ] Split up to even more components for reusability
- [ ] Make a flight detail page
- [ ] Combine ZOD schema with front-end and back-end
- [ ] Autocomplete search
- [ ] Use local storage to safe preferences for sorting and limit
- [ ] Extending Tailwind configuration

### Resources

- [Remix](https://remix.run/)
- [Vercel](https://vercel.com/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/)

## Running the app

### Requirements

- [Node.js](https://nodejs.org/) version 20 or higher
- [pnpm](https://pnpm.io/)

### Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server with HMR:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Create a production build:

```bash
pnpm build
```

### Run tests

**Run the unit tests:**

```bash
pnpm test
```

**Run the e2e:**

```bash
pnpm e2e
```

Or e2e with ui:

```bash
pnpm e2e:ui
```

---

Built with ❤️ using Remix by Fons Hettema.
