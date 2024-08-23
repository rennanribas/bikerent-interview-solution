# Bike Rental Application - NextJS

![Next.js](https://img.shields.io/badge/next.js-14.2.5-black?style=flat-square) ![React](https://img.shields.io/badge/react-18.3.1-blue?style=flat-square) ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?style=flat-square)

This project was created for the Trio Challenge, where candidates must create a functional system to rent bikes. Originally developed with React, I migrated it to Next.js to showcase my skills for a NextJS Frontend Developer position and to leverage the advantages of server-side rendering and API routes.

## Tech Stack

- [Next.js](https://nextjs.org/) (v14.2.5)
- [React](https://reactjs.org/) (v18.3.1)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://mui.com/) (v5.10.12)
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code formatting

## Why Next.js?

Migrating from React to Next.js provided several technical advantages:

1. **API Routes**: Next.js allows us to create API routes, enabling us to securely hide sensitive information like the candidate token from the client-side code.
2. **Server-Side Rendering (SSR)**: Improved initial load time and SEO by rendering pages on the server.
3. **Static Site Generation (SSG)**: Ability to pre-render pages at build time for even faster load times.
4. **Improved Performance**: Automatic code splitting, optimized images, and font optimization.
5. **Built-in Routing**: Simplified routing system based on the file system.
6. **TypeScript Support**: Enhanced TypeScript integration out of the box.
7. **API Middleware**: Easier implementation of authentication and error handling for API routes.

These features not only improve the application's performance and security but also demonstrate proficiency in modern web development practices, aligning with the requirements of a NextJS Frontend Developer position.

## How to run it

Install node modules:

```sh
yarn
```

Runs the app in the development mode.

```sh
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## How to run the tests

```sh
yarn test
```

Or use paths to run specific component/page test

```sh
yarn test <PATH_TO_COMPONENT>
```

It launches the test runner in the interactive watch mode.

## Folder structure

## Folder structure

- src/
  - assets/
    - fonts/
  - components/
    - BikeCard/
    - BikeImageList/
    - BikeImageSelector/
    - BikeList/
    - BikeSpecs/
    - BikeType/
    - Booked/
    - Booking/
    - BookingAddressMap/
    - Header/
    - Overview/
  - context/
    - AuthContext.tsx
    - BikeContext.tsx
  - mocks/
    - Bike.ts
  - models/
    - Bike.ts
    - User.ts
  - pages/
    - BikeDetails/
    - Home/
    - Login/
    - Signup/
    - \_app.tsx
    - index.tsx
  - services/
    - bike.service.ts
  - styles/
    - global.css
    - theme.ts

## Overview

### Desktop

https://user-images.githubusercontent.com/42481884/200061794-1ec4771f-de22-4007-9952-3d36b44feed2.mp4

### Mobile

https://user-images.githubusercontent.com/42481884/200061823-e73cd233-8a32-417c-a4ef-af38f81a6824.mp4

## Test coverage

<img width="487" alt="Test Coverage" src="https://user-images.githubusercontent.com/42481884/200062093-f0dcd641-e994-4248-acef-5c24bc0bc2e6.png">

## Author

Rennan Ribas

Feel free to contact me if you have any questions or feedback about this project!
