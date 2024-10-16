# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Employee Time Tracker

## Setup Instructions

1. Clone the repository.
2. Navigate to the project directory and run `npm install`.
3. Make sure you have `json-server` installed globally.
4. Place the `db.json` file in the root directory.
5. Start the mock API: `json-server --watch db.json --port 3001`.
6. Start the React app: `npm rub dev`.

## Features Implemented

- Dashboard with employee info and status.
- Clock In/Out functionality.
- Daily update submission and viewing of previous updates.
- Timesheet for weekly task and decided the time line

## Design Decisions

- Used Material-UI for the UI components for responsiveness and ease of use.
- Implemented context API for state management to share data between components.
- Tailwind CSS for styling purpose

## Improvements

- Add user authentication for enhanced security.


