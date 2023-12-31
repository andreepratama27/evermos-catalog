# How to run this project

You can visit [https://evermos-catalog.vercel.app/](https://evermos-catalog.vercel.app/) to open via browser, or if you want to run locally, run this command:
- Clone this project to your machine. Make sure you already have Node on your machine
- Install this project with command `npm install`, `yarn install`, `pnpm install` or `bun install`. For my case, I use `bun install`

## If The server cannot retrieve the API

If the server cannot retrieve the API, means you need to instal the `json-server` manually in your machine.

- For running this project locally, you need to also install `json-server`. You can visit this [https://github.com/typicode/json-server#getting-started](link) to install
- Make sure you already have `.env` file in this repo. If you don't have, please ceate file `.env.local` and add `API_URL=http://localhost:3001`
- run `json-server --port 3001 --watch db.json` in your terminal to run the mock server API
- run `npm dev`, `yarn dev`, `pnpm dev` or `bun dev` to run the client. I use `bun dev`
- Open browser and visit `http://localhost:3000` to open the webapp

# Tech Stack

For this project, the stacks that I use is:

- Next JS, as a React Library to build Server Side Web App
- Zustand, for handling state management
- CSS Module, to styling the page