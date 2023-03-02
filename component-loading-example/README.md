# Nuxt.js example application for loading external `.vue` modules at runtime

This application is an example for loading an external-downloadable-component which is compiled from `.vue` file.

## How to run

Install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

Before you access the application in a browser,
run the server [Component building example](../component-building-example) for publishing external-component.

In a browser window, you can chose external modules.
The selected module , external-component, is loaded and will be displayed at the time.


## Production

Build the application for production and run it:

```bash
npm run build
node .output/server/index.mjs
```

