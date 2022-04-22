# Kitabisa Campaign List

Demo: [https://kb-campaign.vercel.app/](https://kb-campaign.vercel.app/)

![App Screenshot](./docs/kitabisa-campaign-list.png)

## Tech Stack

This project was bootstrapped with:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [Jest](https://jestjs.io/)
- [Recoil](https://recoiljs.org/)
- [ESLint](https://eslint.org/)

## Available Scripts

- `npm run dev` to run the app in development mode
- `npm run test` to run unit testings using Jest
- `npm run build` to build the project into static HTML files
- `npm run preview` to run build static HTML files
- `npm run fmt` to format and prettify codes

## Code Flow

![Code Flow](./docs/code-flow.png)

### 1. React Components

Those are basically JSX components like button, input, navbar etc.

### 2. Custom Hooks

Those are used as the layer between React Component and Services to communicate. To keep the code clean, I decided to seperate theme instead of mixing every API calls and services into the components.

They usually return the service results and its calling state like `isLoading` and `error`. Custom Hooks could optionally call Store if the result of the service needs to be stored globally.

### 3. Store

Store is basically a global state manager to store states globally. Recoil is used as the global state manager in this project.
