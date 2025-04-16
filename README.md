# Colours App
This is the main application for the project. The important code is organised into the following directories:

- `/app`: Contains the core application logic, including components, API endpoints, and the main application frame.
- `/tests`: Contains the test files.
- `/public`: Contains configuration files for the frames (inside /public/lib), images, and other static assets used by the application.
- `/lib`: Contains the MongoDB database integration.

## WARNING
As good software engineering practice you should never commit your .env.local, and other files to GitHub - if the project is cloned from there (https://github.com/lcornwall/colours-app), as a result, the application backend will not work (lack of API keys) and tests may not pass. However, these files are included in this folder as it is not publicly available.

The deployed version exists at: https://colours-app-prod.vercel.app/

## Getting Started

Follow the steps below to set up and run the application.

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [pnpm](https://pnpm.io/) (Package manager)

### Installation

1. Install the dependencies using pnpm:
- pnpm install

### Running the Development Server (either command, pnpm preferred)
Make sure you are in the `/app` directory before running the server.

- pnpm dev 
- bun dev

### Running the Tests

Make sure your local development server is started before running the tests.
Once the server is running, you can run tests in headless (no web tab opens) or headed mode (a tab opens and you watch the interaction).

For headed mode:
- npx playwright test

For headless mode:
   - npx playwright test --headless
