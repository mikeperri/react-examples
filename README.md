#React Examples
This project has an example build setup (bundler and test framework) and some example components. You can use it as a base for your React project.

##Get started
Run the build and start the Webpack dev server with:
```
npm start
```

As with any node project, see the package.json "scripts" key for more commands.

##Included in this project
###React
Getting started with React: https://facebook.github.io/react/docs/getting-started.html

###Bundler - Webpack
This project builds with [Webpack](https://webpack.github.io). Webpack takes all the JavaScript files in the src/ directory, performs transformations on them (ES2015 and JSX), and outputs them as one compiled JS file, bundle.js. It also provides a simple server that watches for changes and reloads the page automatically.

I also included [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) to generate the index.html file with the bare minimum elements and a script tag for the bundle.js file that Webpack created.

An alternative to Webpack would be Browserify. Read some of these links to learn about Webpack vs Browserify.

* http://blog.namangoel.com/browserify-vs-webpack-js-drama
* https://gist.github.com/substack/68f8d502be42d5cd4942
* https://www.reddit.com/r/reactjs/comments/30at04/webpack_vs_browserify_whats_best_for_react/

###Test Frameworks - Mocha & Enzyme
This project includes [mocha](https://mochajs.org/), [chai](http://chaijs.com/), and [sinon](http://sinonjs.org) for general testing, [enzyme](http://airbnb.io/enzyme/index.html) for querying React components, and [chai-enzyme](https://github.com/producthunt/chai-enzyme) for assertions about React components.

Another option would be Facebook's [Jest](https://facebook.github.io/jest/docs/tutorial-react.html), which is built on the Jasmine framework.

Further reading:
* https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha
* https://blog.algolia.com/how-we-unit-test-react-components-using-expect-jsx/
* https://discuss.reactjs.org/t/whats-the-prefered-way-to-test-react-js-components/26/4
* http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/
* http://www.toptal.com/react/how-react-components-make-ui-testing-easy

##Not included
###Server
The webpack-dev-server is included, but it is not meant for production environments.
Consider using [Hapi](http://hapijs.com) or [Express](http://expressjs.com/). Also note that React apps can be rendered on the server side to improve performance.

* https://medium.com/@tribou/serving-react-and-flux-with-hapi-and-webpack-213afacf94ea
* https://strongloop.com/strongblog/node-js-react-isomorphic-javascript-why-it-matters/

###Styles
The example components in this project have no styles. You can use stylesheets or put inline styles directly in the JSX.

* https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/
