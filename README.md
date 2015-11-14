#Boilerplate React app

This is intended to be a minimal boilerplate project with just what you need to get started and nothing more.
##Get started
Download the code with:
```
git clone https://github.com/mikeperri/boilerplate-react.git && cd boilerplate-react && rm -rf .git && rm README.md
```

Run the build and start the Webpack dev server with:
```
npm start
```

##Included in this project
###React
Getting started with React: https://facebook.github.io/react/docs/getting-started.html

###Webpack
This project builds with Webpack (https://webpack.github.io). Webpack takes all the JavaScript files in the src/ directory, performs transformations on them (ES2015 and JSX), and outputs them as one compiled JS file, bundle.js. It also provides a simple server that watches for changes and reloads the page automatically. 

I've also included html-webpack-plugin (https://www.npmjs.com/package/html-webpack-plugin) to generate the index.html file with the bare minimum elements and a script tag for the bundle.js file that Webpack created. 

An alternative to Webpack would be Browserify. Read some of these links to learn about Webpack vs Browserify.

http://blog.namangoel.com/browserify-vs-webpack-js-drama
https://gist.github.com/substack/68f8d502be42d5cd4942
https://www.reddit.com/r/reactjs/comments/30at04/webpack_vs_browserify_whats_best_for_react/

##Not included
###Test Frameworks
For now, I've omitted any test frameworks from this repo since they are not necessary to try out React and so you can make your own decision on which one to use.

One option is to use Facebook's Jest (https://facebook.github.io/jest/docs/tutorial-react.html), which is built on the Jasmine framework. 

However, as of October 2015, a lot of people prefer not to use Jest. Read these links about how to test React with Mocha (and why people don't like Jest).

https://blog.algolia.com/how-we-unit-test-react-components-using-expect-jsx/
https://discuss.reactjs.org/t/whats-the-prefered-way-to-test-react-js-components/26/4
http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/
http://www.toptal.com/react/how-react-components-make-ui-testing-easy

###Server
The webpack-dev-server is included, but it is not meant for production environments.
Consider using Hapi (http://hapijs.com). Also note that React apps can be rendered on the server side to improve performance.

https://medium.com/@tribou/serving-react-and-flux-with-hapi-and-webpack-213afacf94ea
https://strongloop.com/strongblog/node-js-react-isomorphic-javascript-why-it-matters/
