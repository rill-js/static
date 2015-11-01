var path    = require("path");
var Server  = require("node-static").Server;
var noop    = function() { return Promise.resolve(); };
var baseDir = path.join(__dirname, "/../../../../");

module.exports = function (dir, options) {
	options = options || {};

	if (!path.isAbsolute(dir)) dir = path.join(baseDir, dir);

	var defer      = options.defer;
	var fileServer = new Server(dir, options);

	return function serveStatic (req, res, next) {
		var self    = this;
		var handler = defer ? next : noop;
		next        = defer ? noop : next;

		return handler().then(function () {
			if (req.method !== "GET" && req.method !== "HEAD") return next();
			if (res.body != null || res.status !== 404) return next();

			return new Promise(function (resolve) {
				fileServer.serve(self.req, self.res, function () {
					resolve(self.res.headersSent ? undefined : next());
				});
			});
		});
	};
};