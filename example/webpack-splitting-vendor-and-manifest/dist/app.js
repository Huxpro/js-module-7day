webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// try ES6 with React, JSX and Webpack

	var React = __webpack_require__(1);

	var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){HelloMessage[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;HelloMessage.prototype=Object.create(____SuperProtoOf____Class0);HelloMessage.prototype.constructor=HelloMessage;HelloMessage.__superConstructor__=____Class0;function HelloMessage(){"use strict";if(____Class0!==null){____Class0.apply(this,arguments);}}
	    Object.defineProperty(HelloMessage.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
	        return React.createElement("div", null, 
	          React.createElement("p", null, " Hello ", this.props.name, " "), 
	          React.createElement("p", null, " This time, the document would request 3 chunks: Runtime (a.k.a manifest), Vendor and App. ")
	        )
	    }});



	React.render(
	    React.createElement(HelloMessage, {name: "webpack"}),
	    document.body
	)




/***/ }
]);