webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _transition = __webpack_require__(1);

	var _css = __webpack_require__(2);

	var element = document.getElementById('box');

	// addCss(element, {
	//     translateX: '50px',
	// })

	(0, _transition.transition)(element).to({ translateX: '100px' }).to({ translateY: '200px' }, { duration: 1000 }).end(function () {
	    console.log('transition flow end ...');
	});

/***/ }
])