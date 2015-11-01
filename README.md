# Rill Static
A static file server for Rill. Internally [node-static](https://www.npmjs.com/package/node-static) is used and all options are valid.

# Installation

#### Npm
```console
npm install @rill/static
```

# Example

```javascript
const rill = require("rill");
const app  = rill();
const static = require("@rill/static");

// Directory can be relative to where node_modules are installed or an absolute path.
app.use(static("public", { gzip: true, cache: 6.048e8 }));
```

# API

**static(directory, options)** - All files in the provided directory will automatically be served.

**options.defer** - Use the defer option to have the requested ended after the rest of the middleware completes (By default if a file is found it will not run other middleware).

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
