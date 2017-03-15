const timestamp = require('timestamp');
const lib = require('./lib');

const log = [];

log.push(`${parseInt(timestamp(), 10)} Application is started!`);
log.push(lib.getString());

log.forEach((entry, index) => {
	console.log(`${index + 1}: ${entry}`);
});

const isBrowser = typeof window !== 'undefined';
if (isBrowser) {
	window.addEventListener('load', () => {
		const logList = window.document.getElementById('js-log-list');

		log.forEach(entry => {
			if (isBrowser) {
				let item = window.document.createElement('li');
				item.innerText = entry;
				logList.appendChild(item);
			}
		});
	});
}