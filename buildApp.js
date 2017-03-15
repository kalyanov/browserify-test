var dependencyTree = require('dependency-tree');
var browserify = require('browserify');
var fs = require('fs');
var path = require('path');

console.log(__dirname);

var appList = dependencyTree.toList({
	filename: 'index.js',
	directory: './',
	filter: path => path.indexOf('node_modules') === -1
})
	.map(dep => './' + path.relative(process.cwd(), dep));

var depList = dependencyTree.toList({
	filename: 'index.js',
	directory: './',
	filter: path => path.indexOf('node_modules') !== -1
})
	.filter(dep => !dep.includes('browserify-test/test/index.js'))
	.map(dep => {
		var test = dep.match(/node_modules\/(.*)j/);
		return test[1].split('/')[0];
		// path.relative(process.cwd(), dep)
	});

console.log(appList);
console.log();
console.log(depList);

browserify(['index.js'], {
	cache: {},
	packageCache: {},
	debug: true
})
	.external(depList)
	.on('bundle', sourceStream => {
		const outputStream = fs.createWriteStream('bundle_app.js');
		sourceStream.pipe(outputStream);
	})
	.bundle();

browserify()
	.require(depList)
	.on('bundle', sourceStream => {
		const outputStream = fs.createWriteStream('bundle_dep.js');
		sourceStream.pipe(outputStream);
	})
	.bundle();
