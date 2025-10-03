# Frontend for Ticket System with AI Agent

This is the frontend for a Ticket System with an AI Agent, built with React, Vite, and TypeScript.

## Features

- User authentication with JWT.
- Protected routes for authenticated users.
- Create, view, and manage tickets.
- Admin panel for user management.
- Displays AI-generated ticket analysis, including summary, priority, and related skills.

## Pages

- **`/`**: The main page, which displays the list of tickets.
- **`/tickets/:id`**: Displays the details of a specific ticket.
- **`/login`**: The login page.
- **`/signup`**: The signup page.
- **`/admin`**: The admin panel for managing users.

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Avaneesh-Chopdekar/ticket-ai-agent-frontend
    ```
2.  Navigate to the frontend directory:
    ```bash
    cd ticket-ai-agent-frontend
    ```
3.  Install the dependencies using pnpm:
    ```bash
    pnpm install
    ```
4.  Create a `.env` file in the `ticket-ai-agent-frontend` directory and add the following environment variable:
    ```
    VITE_SERVER_URL=<your-backend-server-url>
    ```

## Usage

To run the development server, use:

```bash
pnpm run dev
```

To build the project for production, use:

```bash
pnpm run build
```

To preview the production build, use:

```bash
pnpm run preview
```

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `lint`: Lints the code using ESLint.
- `preview`: Previews the production build.

## Dependencies

- [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite): A Vite plugin for Tailwind CSS.
- [react](https://reactjs.org/): A JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): A package for working with the DOM in React.
- [react-markdown](https://www.npmjs.com/package/react-markdown): A React component to render Markdown.
- [react-router-dom](https://reactrouter.com/): A collection of navigational components for React.
- [tailwindcss](https://tailwindcss.com/): A utility-first CSS framework.

## Dev Dependencies

- [@eslint/js](https://www.npmjs.com/package/@eslint/js): The core ESLint library.
- [@types/node](https://www.npmjs.com/package/@types/node): Type definitions for Node.js.
- [@types/react](https://www.npmjs.com/package/@types/react): Type definitions for React.
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): Type definitions for React DOM.
- [@vitejs/plugin-react-swc](https://www.npmjs.com/package/@vitejs/plugin-react-swc): A Vite plugin for SWC.
- [daisyui](https://daisyui.com/): A Tailwind CSS component library.
- [eslint](https://eslint.org/): A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): An ESLint plugin for React Hooks.
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): An ESLint plugin for React Refresh.
- [globals](https://www.npmjs.com/package/globals): A package with global variables for ESLint.
- [typescript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [typescript-eslint](https://typescript-eslint.io/): A tool for using TypeScript with ESLint.
- [vite](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects.
