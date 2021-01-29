# ES Modules

There is more than one way to enable Node to use ES6 import and export statements.

From Node.js documentation:

> Node.js treats JavaScript code as CommonJS modules by default. Authors can tell Node.js to treat JavaScript code as ECMAScript modules via the `.mjs` file extension, the package.json `"type"` field, or the `--input-type` flag.

The documentation states that we can either use `.mjs` extentions for our modules, or use `"type": "module"`.

In this Node modules example, I demonstrate how to use `"type"` field in the `package.json` file.

If you want to test it, clone the repository and type `node app.js` in your terminal.

To know more how ES modules used in Node.js, visit [official Node.js ES modules](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html)
