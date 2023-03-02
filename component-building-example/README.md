# Example for compile `.vue` file into `.js` for browser

This package is the example for building .js file from .vue file for loading by nuxt.js runtime environment.
Additionally, the package provides http server for publishing the .js file.


## How to

1. Intall dependencies.
   ~~~
   npm install
   ~~~

2. Compile `src/*.vue` files and output `public/*.umd.js`.  
   Acutal building process was implemented in `build.js`.
   ~~~
   npm run build
   ~~~

3. Publish `public/.umd.js` files.
   ~~~
   npm start
   ~~~

Then, the compiled `.vue` files can be donwloaded from http://localhost:30001/xxxx.umd.js.
You can use these files from Vue applications.
[How to use it](../component-loading-example)

