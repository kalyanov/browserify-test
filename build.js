const fs = require('fs');
const pfs = require('./promises/fs');
const mkdirp = require('mkdirp');
const browserify = require('browserify');

const BUNDLE_FOLDER_NAME = 'build';
const BUNDLE_APP_PATH = `${BUNDLE_FOLDER_NAME}/app.js`;
const ENTRY = `index.js`;

/**
 * Builder class.
 */
class Builder {

	build() {
		return pfs.exists(BUNDLE_FOLDER_NAME)
			.then(isExists => !isExists ? Builder.makeDirectory(BUNDLE_FOLDER_NAME) : null)
			.then(() => this._buildApp());

	}

	_buildApp() {
		return browserify([ENTRY], {
			cache: {},
			packageCache: {},
			debug: true
		})
			.on('bundle', sourceStream => {
				const outputStream = fs.createWriteStream(BUNDLE_APP_PATH);
				sourceStream.pipe(outputStream);
			})
			.bundle()
	}
}

/**
 * Creates all necessary directories for path.
 * @param {string} dirPath Directory path.
 * @returns {Promise} Promise for nothing.
 * @static
 */
Builder.makeDirectory = dirPath => {
	return new Promise((fulfill, reject) => {
		mkdirp(dirPath, error => {
			if (error) {
				reject(error);
				return;
			}

			fulfill();
		});
	});
};

// Buld aplication
const builder = new Builder();
builder.build();











// const dep = [];
// console.log('Step 1');

// Promise.resolve()
// 	.then(() => new Promise((fulfill, reject) => browserify(['./index.js'], {
// 			cache: {},
// 			packageCache: {},
// 			debug: true
// 		})
// 			.on('file', (file) => {
// 				console.log(file);
// 				if (file.includes('node_modules')) {
// 					dep.push('file');
// 				}
// 			})
// 			.once('bundle', bundleStream => bundleStream
// 				.once('end', fulfill)
// 				.on('error', reject)
// 			)
// 			.bundle()
// 	))
// 	.then(() => {
// 		console.log('Step 2', dep);
// 	});
//
// console.log('Step 3');

// const dep = ['../node_modules/timestamp', 'app.js'];
// const app = ['index.js'];

// const depModules = ['timestamp', './app.js'];
// const appModules = ['index.js'];

// browserify(['./index.js'], {
// 	cache: {},
// 	packageCache: {},
// 	debug: true
// })
// 	.on('file', (file, id, parent) => {
// 		console.log(file, id, parent);
// 		if (file.includes('node_modules')) {
// 			depModules.push('file');
// 		} else {
// 			appModules.push('file');
// 		}
// 	})
// 	.bundle();

// Build app bundle
// browserify(appModules, {
// 	cache: {},
// 	packageCache: {},
// 	debug: true
// })
// 	.external(depModules)
// 	.on('bundle', sourceStream => {
// 		const outputStream = fs.createWriteStream('bundle_app.js');
// 		sourceStream.pipe(outputStream);
// 	})
// 	.bundle();

// browserify(['index.js'], {
// 	cache: {},
// 	packageCache: {},
// 	debug: true
// })
// 	.on('bundle', sourceStream => {
// 		const outputStream = fs.createWriteStream('bundle_dep.js');
// 		sourceStream.pipe(outputStream);
// 	})
// 	.bundle();

// // Build app bundle
// var bundlerDep = browserify(['./index.js'], {
// 	cache: {},
// 	packageCache: {},
// 	debug: true
// });
//
// bundlerDep.exclude('./index.js');
// appModules.forEach(file => {
// 	bundlerDep.exclude(file);
// });
//
// bundlerDep.require(depModules)
// 	.on('bundle', sourceStream => {
// 		const outputStream = fs.createWriteStream('bundle_dep.js');
// 		sourceStream.pipe(outputStream);
// 	})
// 	.bundle();

//
// console.log('ololo');
//
//
// bundlerDep
// 	.on('file', (file, id, parent) => {
// 		// console.log(file, id, parent);
// 		if (file.includes('node_modules')) {
// 			console.log('require', file);
// 			bundlerDep.require(file);
// 		} else {
// 			bundlerDep.exclude(file);
// 		}
// 	})
// 	.on('bundle', sourceStream => {
// 		const outputStream = fs.createWriteStream('dep.js');
// 		sourceStream.pipe(outputStream);
// 	})
// 	.on('error', error => {
// 		console.log(error);
// 	})
// 	.bundle();

//
// Promise.resolve()
// 	.then(() => new Promise((fulfill, reject) => browserify(['./index.js'], {
// 				cache: {},
// 				packageCache: {},
// 				debug: true
// 			})
// 			.on('file', (file, id, parent) => {
// 				console.log(file, id, parent);
// 				if (file.includes('node_modules')) {
// 					dep.push(file);
// 				} else {
// 					app.push(file);
// 				}
// 			})
// 			.once('error', () => {
// 				console.log('error');
// 				return reject;
// 			})
// 			.once('bundle', bundleStream => bundleStream
// 				.once('end', fulfill)
// 				.on('error', () => {
// 					console.log('error');
// 					return reject;
// 				})
// 			)
// 			.bundle()
// 		)
// 	)
// 	.then(() => {
// 		console.log('aaaaaa');
// 		console.log(dep);
// 		console.log(app);
// 	});


