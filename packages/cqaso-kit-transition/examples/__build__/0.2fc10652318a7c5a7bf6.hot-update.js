webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _transition = __webpack_require__(1);

	var _css = __webpack_require__(3);

	var element = document.getElementById('box');

	// addCss(element, {
	//     translateY: 0,
	// });

	(0, _transition.transition)(element).to({ translateY: 500 }, { duration: 1000 }).to({ translateX: 500 }, { duration: 800 }).to({ translateY: 1000 }, { duration: 1000 });

/***/ }
])