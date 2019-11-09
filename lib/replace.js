'use strict';

const escapeRegExp = require('lodash.escaperegexp');

module.exports = function (string, manifest) {
	let newString = string;
	manifest.forEach(entry => {
		const {unreved, reved} = entry;
		const [name, ext] = unreved.split('.')
		const regexp = new RegExp(`(${name}(?:-[a-z0-9]{10})?\.${ext})`, 'g')

		newString = newString.replace(regexp, reved);
	});
	return newString;
};
