webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _transition = __webpack_require__(1);

	var _css = __webpack_require__(3);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var element = document.getElementById('box');

	(0, _transition.transition)(element).to(_defineProperty({ rotateY: '100deg' }, 'rotateY', '100deg')).to({ translateX: '200px' });
	// .to({ translateY: '300px' }, { duration: 3000 })
	// .end(() => {
	//     console.log('transition flow end ...');
	// });

/***/ }
])