const timestamp = require('timestamp');

module.exports = {
	getString: () => `${parseInt(timestamp(), 10)} Lib.getString()`
};
