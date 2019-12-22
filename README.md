# Javascript-From-Scratch

## How to run
- Clone the repository onto your computer
- Run ``` npm i ``` to download the all packages and libraries 
- Run ``` npm start ``` to generate the bundled code. 2 bundles will be created in the /dist directory,
***main.js*** and ***minor.js***
- Open the ``` index.html ``` page in the /dist folder in your browser

## File setup
- 4 javascript files - 1 typescript, 2 javascript and 1 react
- Webpack makes 2 bundles. It bundles the react app and one of the javascript apps
- There are 2 webpack configurations
- The name of the react app bundle is ***main.js***
- The name of the standalone javascript app bundle is ***minor.js***
- Babel is used as a loader in webpack to ***pre-process*** the files ie. ***apply changes to the
files before they are bundled***
- Using options from babel, envName and env, webpack has been customised to apply certain
babel presets or transformations depending on the envName set
 

## Babel
- Babel transpiles ES6+ code into ES5. Most browsers don't support ES6, so being able to
transpile ES6 to ES5 means javascript applications are more widely supported and compatible to run on most
browsers
- Some browsers may not support some of the new features from ES6+ simply because they
are outdated e.g. windows update updates your computer. If you decide not to update,
your system will be behind on the latest features. In the same way, when ES6, ES7 comes 
out, they release new features, requiring the browsers (and developers) to update themselves
- ES6 came shipped with new built-in methods, such as startsWith method for Strings. 
This is not fully supported by all browsers e.g. IE11 and it can't be transpiled into ES5.
You can transpile arrow functions into normal functions, but there is no equivalent or 
alternative method in ES5 for startsWith method (brand new method for strings shipped with
 ES6). In order to get it working on older browsers, you can use a polyfill
- Polyfill is a way of implementing custom solutions for built-in ES6 methods that are not
yet supported. E.g. by adding a polyfill option that comes with babel, methods that are not
yet supported in IE11 can be implemented in. A custom solution is added to the global
namespace, making the same method available. E.g. if the browser
does not have this method, add this custom solution (method) to the global namespace, so
when the method is needed, it will use this custom solution 

## Webpack
- Webpack packages all the modules needed to run your application into one file or bundle
- E.g. Instead of writing one big application, you can split your application into 
separate files called modules. Modules are small chunks of code needed to run your application.
- When starting your application, you need to load all the modules needed to run your 
application. Webpack combines all the modules your application needs to run into one file
or bundle


