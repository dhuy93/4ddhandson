var gulpset = require("./gulpset/gulpset");
var runSequence = require("run-sequence");



gulpset.confs.watch = [{
	watch: gulpset.confs.stylus.src,
	run: ["stylus", "copy"]
}, {
	watch: gulpset.confs.copy.src,
	run: ["copy"]
}];

/**
 * development build + browsersync
 */


gulpset.gulp.task("dev", function(cb) {
	runSequence(
		["copy", "stylint", "stylus" ],
		"watch",
		"browsersync",
		cb
	);
});