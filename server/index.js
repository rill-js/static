'use strict'

var ms = require('ms')
var path = require('path')
var Server = require('node-static').Server
var noop = function () { return Promise.resolve() }
var baseDir = path.join(__dirname, '/../../../../')

module.exports = function (dir, options) {
  options = options || {}

  if (!path.isAbsolute(dir)) dir = path.join(baseDir, dir)
  if (typeof options.cache === 'string') options.cache = ms(options.cache)

  var defer = options.defer
  var fileServer = new Server(dir, options)

  return function serveStatic (ctx, next) {
    var req = ctx.req
    var res = ctx.res
    var handler = defer ? next : noop
    next = defer ? noop : next

    return handler().then(function () {
      if (req.method !== 'GET' && req.method !== 'HEAD') return next()
      if (res.body != null || res.status !== 404) return next()

      return new Promise(function (resolve) {
        // Update req url based on rill mount path.
        var url = req.matchPath || req.pathname
        var originalUrl = req.original.url
        req.original.url = url

        // Send out files from directory.
        fileServer.serve(req.original, res.original, function (err) {
          // Revert url change.
          req.original.url = originalUrl

          // Run next middleware if no matches found.
          if (err && err.status === 404 && !res.original.headersSent) {
            resolve(next())
          } else {
            resolve()
          }
        })
      })
    })
  }
}
