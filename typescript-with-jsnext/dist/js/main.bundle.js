webpackJsonp([2],{

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var App = (function () {
	    function App() {
	        console.log('what?');
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: "\n    <h1>Hi</h1>\n    <div>Hellow World</div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
	exports.App = App;


/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(126);
	var app_1 = __webpack_require__(314);
	platform_browser_dynamic_1.bootstrap(app_1.App, []);


/***/ }

},[590]);
//# sourceMappingURL=main.map