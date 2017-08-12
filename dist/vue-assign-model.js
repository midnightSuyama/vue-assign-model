(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueAssignModel"] = factory();
	else
		root["VueAssignModel"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _es5DotProp = __webpack_require__(1);

var _es5DotProp2 = _interopRequireDefault(_es5DotProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var VueAssignModel = {
  data: function data() {
    var root = typeof this.$options.el === 'string' ? document.querySelector(this.$options.el) : this.$options.el;
    if (!root) return {};

    var data = function () {
      var data = {};
      if (root.hasAttribute('data-vue-model')) {
        data = Object.assign(data, JSON.parse(root.dataset.vueModel));
      }
      var elements = root.querySelectorAll('[data-vue-model]');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var e = _step.value;

          data = Object.assign(data, JSON.parse(e.dataset.vueModel));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return data;
    }();

    var modelAttributes = ['v-model', 'v-model.lazy', 'v-model.number', 'v-model.trim'];

    var getModel = function getModel(e) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = modelAttributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var attr = _step2.value;

          var model = e.getAttribute(attr);
          // Disable: prefix _ and method
          if (model !== null && /^(?!_|.+\(.?\)$).+/.test(model)) return model;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    };

    var multipleCheckboxes = null;
    var isMultipleCheckboxes = function isMultipleCheckboxes(model) {
      if (!multipleCheckboxes) {
        var _elements = root.querySelectorAll('input[type=checkbox]');
        var models = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var e = _step3.value;

            var _model = getModel(e);
            if (_model) models.push(_model);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        multipleCheckboxes = models.filter(function (v, i, self) {
          return self.indexOf(v) === i && self.lastIndexOf(v) !== i;
        });
      }
      return multipleCheckboxes.includes(model);
    };

    var elements = root.querySelectorAll(modelAttributes.map(function (attr) {
      return ('[' + attr + ']').replace('.', '\\.');
    }).join(','));
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      var _loop = function _loop() {
        var e = _step4.value;

        var model = getModel(e);
        if (!model) return 'continue';

        var tag = e.tagName.toLowerCase();
        var type = function () {
          var type = e.getAttribute('type');
          return typeof type === 'string' ? type.toLowerCase() : type;
        }();

        if (tag === 'select') {
          if (e.multiple) {
            _es5DotProp2.default.set(data, model, [].concat(_toConsumableArray(e.selectedOptions)).map(function (option) {
              return option.value;
            }));
          } else {
            _es5DotProp2.default.set(data, model, e.value);
          }
        } else if (tag === 'input' && type === 'checkbox') {
          if (isMultipleCheckboxes(model)) {
            if (e.checked) {
              _es5DotProp2.default.set(data, model, [].concat(_toConsumableArray(_es5DotProp2.default.get(data, model, [])), [e.value]));
            } else if (!_es5DotProp2.default.has(data, model)) {
              _es5DotProp2.default.set(data, model, []);
            }
          } else {
            _es5DotProp2.default.set(data, model, e.checked);
          }
        } else if (tag === 'input' && type === 'radio') {
          if (e.checked) {
            _es5DotProp2.default.set(data, model, e.value);
          } else if (!_es5DotProp2.default.has(data, model)) {
            _es5DotProp2.default.set(data, model, null);
          }
        } else if (tag === 'input' || tag === 'textarea') {
          _es5DotProp2.default.set(data, model, e.value);
        }
      };

      for (var _iterator4 = elements[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _ret = _loop();

        if (_ret === 'continue') continue;
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    return data;
  }
};

exports.default = {
  install: function install(Vue, options) {
    Vue.mixin(VueAssignModel);
  }
};
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObj = __webpack_require__(2);

function getPathSegments(path) {
	var pathArr = path.split('.');
	var parts = [];

	for (var i = 0; i < pathArr.length; i++) {
		var p = pathArr[i];

		while (p[p.length - 1] === '\\' && pathArr[i + 1] !== undefined) {
			p = p.slice(0, -1) + '.';
			p += pathArr[++i];
		}

		parts.push(p);
	}

	return parts;
}

module.exports = {
	get: function (obj, path, value) {
		if (!isObj(obj) || typeof path !== 'string') {
			return value === undefined ? obj : value;
		}

		var pathArr = getPathSegments(path);

		for (var i = 0; i < pathArr.length; i++) {
			if (!Object.prototype.propertyIsEnumerable.call(obj, pathArr[i])) {
				return value;
			}

			obj = obj[pathArr[i]];

			if (obj === undefined || obj === null) {
				// `obj` is either `undefined` or `null` so we want to stop the loop, and
				// if this is not the last bit of the path, and
				// if it did't return `undefined`
				// it would return `null` if `obj` is `null`
				// but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
				if (i !== pathArr.length - 1) {
					return value;
				}

				break;
			}
		}

		return obj;
	},

	set: function (obj, path, value) {
		if (!isObj(obj) || typeof path !== 'string') {
			return;
		}

		var pathArr = getPathSegments(path);

		for (var i = 0; i < pathArr.length; i++) {
			var p = pathArr[i];

			if (!isObj(obj[p])) {
				obj[p] = {};
			}

			if (i === pathArr.length - 1) {
				obj[p] = value;
			}

			obj = obj[p];
		}
	},

	delete: function (obj, path) {
		if (!isObj(obj) || typeof path !== 'string') {
			return;
		}

		var pathArr = getPathSegments(path);

		for (var i = 0; i < pathArr.length; i++) {
			var p = pathArr[i];

			if (i === pathArr.length - 1) {
				delete obj[p];
				return;
			}

			obj = obj[p];

			if (!isObj(obj)) {
				return;
			}
		}
	},

	has: function (obj, path) {
		if (!isObj(obj) || typeof path !== 'string') {
			return false;
		}

		var pathArr = getPathSegments(path);

		for (var i = 0; i < pathArr.length; i++) {
			if (isObj(obj)) {
				if (!(pathArr[i] in obj)) {
					return false;
				}

				obj = obj[pathArr[i]];
			} else {
				return false;
			}
		}

		return true;
	}
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};


/***/ })
/******/ ]);
});