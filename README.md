<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/static
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/static">
    <img src="https://img.shields.io/npm/v/@rill/static.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/static">
    <img src="https://img.shields.io/npm/dm/@rill/static.svg?style=flat-square" alt="Downloads"/>
  </a>
  <!-- Gitter Chat -->
  <a href="https://gitter.im/rill-js/rill">
    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>
  </a>
</h1>

A static file server for Rill. Internally [serve-static](https://www.npmjs.com/package/serve-static) is used and all options are valid.

# Installation

#### Npm
```console
npm install @rill/static
```

# Example

```javascript
const app = require('rill')()
const static = require('@rill/static')

// Directory can be relative to where node_modules are installed or an absolute path.
// Cache time will use the `ms` module to parse time strings, otherwise use milliseconds.
app.use(static('public', { gzip: true, cache: '30 days' }))
```

# API

**static(directory, options)** - All files in the provided directory will automatically be served.

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
