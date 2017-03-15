(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./lib":2,"timestamp":3}],2:[function(require,module,exports){
const timestamp = require('timestamp');

module.exports = {
	getString: () => `${parseInt(timestamp(), 10)} Lib.getString()`
};

},{"timestamp":3}],3:[function(require,module,exports){
var _last = 0
var _count = 1
var LAST

module.exports = 
function () {
  var t = Date.now()
  var _t = t
  if(_last == t) {
    _t += ((_count++)/1000) 
  } 
  else _count = 1 

  _last = t

  if(_t === LAST)
    throw new Error('LAST:' + LAST + ',' + _t)
  LAST = _t
  return _t
}


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi5qcyIsIm5vZGVfbW9kdWxlcy90aW1lc3RhbXAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgdGltZXN0YW1wID0gcmVxdWlyZSgndGltZXN0YW1wJyk7XG5jb25zdCBsaWIgPSByZXF1aXJlKCcuL2xpYicpO1xuXG5jb25zdCBsb2cgPSBbXTtcblxubG9nLnB1c2goYCR7cGFyc2VJbnQodGltZXN0YW1wKCksIDEwKX0gQXBwbGljYXRpb24gaXMgc3RhcnRlZCFgKTtcbmxvZy5wdXNoKGxpYi5nZXRTdHJpbmcoKSk7XG5cbmxvZy5mb3JFYWNoKChlbnRyeSwgaW5kZXgpID0+IHtcblx0Y29uc29sZS5sb2coYCR7aW5kZXggKyAxfTogJHtlbnRyeX1gKTtcbn0pO1xuXG5jb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmlmIChpc0Jyb3dzZXIpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdFx0Y29uc3QgbG9nTGlzdCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbG9nLWxpc3QnKTtcblxuXHRcdGxvZy5mb3JFYWNoKGVudHJ5ID0+IHtcblx0XHRcdGlmIChpc0Jyb3dzZXIpIHtcblx0XHRcdFx0bGV0IGl0ZW0gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRcdFx0aXRlbS5pbm5lclRleHQgPSBlbnRyeTtcblx0XHRcdFx0bG9nTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59IiwiY29uc3QgdGltZXN0YW1wID0gcmVxdWlyZSgndGltZXN0YW1wJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRnZXRTdHJpbmc6ICgpID0+IGAke3BhcnNlSW50KHRpbWVzdGFtcCgpLCAxMCl9IExpYi5nZXRTdHJpbmcoKWBcbn07XG4iLCJ2YXIgX2xhc3QgPSAwXG52YXIgX2NvdW50ID0gMVxudmFyIExBU1RcblxubW9kdWxlLmV4cG9ydHMgPSBcbmZ1bmN0aW9uICgpIHtcbiAgdmFyIHQgPSBEYXRlLm5vdygpXG4gIHZhciBfdCA9IHRcbiAgaWYoX2xhc3QgPT0gdCkge1xuICAgIF90ICs9ICgoX2NvdW50KyspLzEwMDApIFxuICB9IFxuICBlbHNlIF9jb3VudCA9IDEgXG5cbiAgX2xhc3QgPSB0XG5cbiAgaWYoX3QgPT09IExBU1QpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdMQVNUOicgKyBMQVNUICsgJywnICsgX3QpXG4gIExBU1QgPSBfdFxuICByZXR1cm4gX3Rcbn1cblxuIl19
