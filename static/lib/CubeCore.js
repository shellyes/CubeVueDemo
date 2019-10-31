(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CubeCore"] = factory();
	else
		root["CubeCore"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(1);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(69);

__webpack_require__(87);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(91), __webpack_require__(198), __webpack_require__(230), __webpack_require__(234), __webpack_require__(235), __webpack_require__(236), __webpack_require__(237), __webpack_require__(207), __webpack_require__(238), __webpack_require__(231), __webpack_require__(268), __webpack_require__(205), __webpack_require__(233), __webpack_require__(248), __webpack_require__(206), __webpack_require__(269), __webpack_require__(247), __webpack_require__(239), __webpack_require__(244), __webpack_require__(254), __webpack_require__(256)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, CellCloud, _CubeEngine, _Service, _Listener, _ActionConst, _Request, _CubeError, _CELLET, _StateCode, _Delegate, _Peer, _Session, _AccountListener, _GroupContext, _RegistrationState, _Permission, _GroupListener, _DeviceListener, _EngineState, _CodecType, _cubeDatabase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Service", {
    enumerable: true,
    get: function get() {
      return _Service.Service;
    }
  });
  Object.defineProperty(_exports, "Listener", {
    enumerable: true,
    get: function get() {
      return _Listener.Listener;
    }
  });
  Object.defineProperty(_exports, "ActionConst", {
    enumerable: true,
    get: function get() {
      return _ActionConst.ActionConst;
    }
  });
  Object.defineProperty(_exports, "Request", {
    enumerable: true,
    get: function get() {
      return _Request.Request;
    }
  });
  Object.defineProperty(_exports, "CubeError", {
    enumerable: true,
    get: function get() {
      return _CubeError.CubeError;
    }
  });
  Object.defineProperty(_exports, "CELLET", {
    enumerable: true,
    get: function get() {
      return _CELLET.CELLET;
    }
  });
  Object.defineProperty(_exports, "StateCode", {
    enumerable: true,
    get: function get() {
      return _StateCode.StateCode;
    }
  });
  Object.defineProperty(_exports, "Delegate", {
    enumerable: true,
    get: function get() {
      return _Delegate.Delegate;
    }
  });
  Object.defineProperty(_exports, "Peer", {
    enumerable: true,
    get: function get() {
      return _Peer.Peer;
    }
  });
  Object.defineProperty(_exports, "Session", {
    enumerable: true,
    get: function get() {
      return _Session.Session;
    }
  });
  Object.defineProperty(_exports, "AccountListener", {
    enumerable: true,
    get: function get() {
      return _AccountListener.AccountListener;
    }
  });
  Object.defineProperty(_exports, "GroupContext", {
    enumerable: true,
    get: function get() {
      return _GroupContext.GroupContext;
    }
  });
  Object.defineProperty(_exports, "RegistrationState", {
    enumerable: true,
    get: function get() {
      return _RegistrationState.RegistrationState;
    }
  });
  Object.defineProperty(_exports, "Permission", {
    enumerable: true,
    get: function get() {
      return _Permission.Permission;
    }
  });
  Object.defineProperty(_exports, "GroupListener", {
    enumerable: true,
    get: function get() {
      return _GroupListener.GroupListener;
    }
  });
  Object.defineProperty(_exports, "DeviceListener", {
    enumerable: true,
    get: function get() {
      return _DeviceListener.DeviceListener;
    }
  });
  Object.defineProperty(_exports, "EngineState", {
    enumerable: true,
    get: function get() {
      return _EngineState.EngineState;
    }
  });
  Object.defineProperty(_exports, "CodecType", {
    enumerable: true,
    get: function get() {
      return _CodecType.CodecType;
    }
  });
  Object.defineProperty(_exports, "DB", {
    enumerable: true,
    get: function get() {
      return _cubeDatabase["default"];
    }
  });
  _exports.CellCloud = _exports.cube = void 0;
  CellCloud = _interopRequireWildcard(CellCloud);
  _exports.CellCloud = CellCloud;
  _cubeDatabase = _interopRequireDefault(_cubeDatabase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  /*
   * Boot.js
   * Cube Engine
   *
   * Copyright (c) 2015-2017 Cube Team. All rights reserved.
   */

  /**
   * 引导程序, 负责引擎的初始化工作。
   *
   * @author Guan Yong
   */
  var cube = window.cube = new _CubeEngine.CubeEngine();
  _exports.cube = cube;
  window.CubeCore = {
    Service: _Service.Service,
    Listener: _Listener.Listener,
    ActionConst: _ActionConst.ActionConst,
    Request: _Request.Request,
    CubeError: _CubeError.CubeError,
    CELLET: _CELLET.CELLET,
    StateCode: _StateCode.StateCode,
    Delegate: _Delegate.Delegate,
    Peer: _Peer.Peer,
    Session: _Session.Session,
    AccountListener: _AccountListener.AccountListener,
    GroupContext: _GroupContext.GroupContext,
    RegistrationState: _RegistrationState.RegistrationState,
    Permission: _Permission.Permission,
    GroupListener: _GroupListener.GroupListener,
    DeviceListener: _DeviceListener.DeviceListener,
    EngineState: _EngineState.EngineState,
    CodecType: _CodecType.CodecType,
    DB: _cubeDatabase["default"],
    CellCloud: CellCloud,
    cube: cube
  };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(2);
var addToUnscopables = __webpack_require__(7);
var Iterators = __webpack_require__(40);
var InternalStateModule = __webpack_require__(41);
var defineIterator = __webpack_require__(44);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(3);
var requireObjectCoercible = __webpack_require__(6);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);
var classof = __webpack_require__(5);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);
var create = __webpack_require__(25);
var hide = __webpack_require__(13);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  hide(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var shared = __webpack_require__(11);
var uid = __webpack_require__(23);
var NATIVE_SYMBOL = __webpack_require__(24);

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var setGlobal = __webpack_require__(12);
var IS_PURE = __webpack_require__(22);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.2.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var hide = __webpack_require__(13);

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var definePropertyModule = __webpack_require__(15);
var createPropertyDescriptor = __webpack_require__(21);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(16);
var anObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(20);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var fails = __webpack_require__(4);
var createElement = __webpack_require__(17);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var isObject = __webpack_require__(18);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var defineProperties = __webpack_require__(26);
var enumBugKeys = __webpack_require__(35);
var hiddenKeys = __webpack_require__(34);
var html = __webpack_require__(36);
var documentCreateElement = __webpack_require__(17);
var sharedKey = __webpack_require__(39);
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var definePropertyModule = __webpack_require__(15);
var anObject = __webpack_require__(19);
var objectKeys = __webpack_require__(27);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(28);
var enumBugKeys = __webpack_require__(35);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(29);
var toIndexedObject = __webpack_require__(2);
var indexOf = __webpack_require__(30).indexOf;
var hiddenKeys = __webpack_require__(34);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(2);
var toLength = __webpack_require__(31);
var toAbsoluteIndex = __webpack_require__(33);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(37);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(38);
var global = __webpack_require__(9);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(11);
var uid = __webpack_require__(23);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(42);
var global = __webpack_require__(9);
var isObject = __webpack_require__(18);
var hide = __webpack_require__(13);
var objectHas = __webpack_require__(29);
var sharedKey = __webpack_require__(39);
var hiddenKeys = __webpack_require__(34);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var nativeFunctionToString = __webpack_require__(43);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(11);

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var createIteratorConstructor = __webpack_require__(54);
var getPrototypeOf = __webpack_require__(56);
var setPrototypeOf = __webpack_require__(60);
var setToStringTag = __webpack_require__(59);
var hide = __webpack_require__(13);
var redefine = __webpack_require__(48);
var wellKnownSymbol = __webpack_require__(8);
var IS_PURE = __webpack_require__(22);
var Iterators = __webpack_require__(40);
var IteratorsCore = __webpack_require__(55);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var getOwnPropertyDescriptor = __webpack_require__(46).f;
var hide = __webpack_require__(13);
var redefine = __webpack_require__(48);
var setGlobal = __webpack_require__(12);
var copyConstructorProperties = __webpack_require__(49);
var isForced = __webpack_require__(53);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var propertyIsEnumerableModule = __webpack_require__(47);
var createPropertyDescriptor = __webpack_require__(21);
var toIndexedObject = __webpack_require__(2);
var toPrimitive = __webpack_require__(20);
var has = __webpack_require__(29);
var IE8_DOM_DEFINE = __webpack_require__(16);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var shared = __webpack_require__(11);
var hide = __webpack_require__(13);
var has = __webpack_require__(29);
var setGlobal = __webpack_require__(12);
var nativeFunctionToString = __webpack_require__(43);
var InternalStateModule = __webpack_require__(41);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(29);
var ownKeys = __webpack_require__(50);
var getOwnPropertyDescriptorModule = __webpack_require__(46);
var definePropertyModule = __webpack_require__(15);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(37);
var getOwnPropertyNamesModule = __webpack_require__(51);
var getOwnPropertySymbolsModule = __webpack_require__(52);
var anObject = __webpack_require__(19);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(28);
var enumBugKeys = __webpack_require__(35);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(55).IteratorPrototype;
var create = __webpack_require__(25);
var createPropertyDescriptor = __webpack_require__(21);
var setToStringTag = __webpack_require__(59);
var Iterators = __webpack_require__(40);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(56);
var hide = __webpack_require__(13);
var has = __webpack_require__(29);
var wellKnownSymbol = __webpack_require__(8);
var IS_PURE = __webpack_require__(22);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(29);
var toObject = __webpack_require__(57);
var sharedKey = __webpack_require__(39);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(58);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(6);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(15).f;
var has = __webpack_require__(29);
var wellKnownSymbol = __webpack_require__(8);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var aPossiblePrototype = __webpack_require__(61);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var DESCRIPTORS = __webpack_require__(14);
var objectDefinePropertyModile = __webpack_require__(15);

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var fails = __webpack_require__(4);
var toIndexedObject = __webpack_require__(2);
var nativeGetOwnPropertyDescriptor = __webpack_require__(46).f;
var DESCRIPTORS = __webpack_require__(14);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(48);
var toString = __webpack_require__(65);

var ObjectPrototype = Object.prototype;

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (toString !== ObjectPrototype.toString) {
  redefine(ObjectPrototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(66);
var wellKnownSymbol = __webpack_require__(8);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(8);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(68).charAt;
var InternalStateModule = __webpack_require__(41);
var defineIterator = __webpack_require__(44);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var requireObjectCoercible = __webpack_require__(6);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var redefineAll = __webpack_require__(70);
var InternalMetadataModule = __webpack_require__(71);
var collection = __webpack_require__(73);
var collectionWeak = __webpack_require__(83);
var isObject = __webpack_require__(18);
var enforceIternalState = __webpack_require__(41).enforce;
var NATIVE_WEAK_MAP = __webpack_require__(42);

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var isExtensible = Object.isExtensible;
var InternalWeakMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.github.io/ecma262/#sec-weakmap-constructor
var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak, true, true);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.REQUIRED = true;
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = WeakMapPrototype['delete'];
  var nativeHas = WeakMapPrototype.has;
  var nativeGet = WeakMapPrototype.get;
  var nativeSet = WeakMapPrototype.set;
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete.call(this, key) || state.frozen['delete'](key);
      } return nativeDelete.call(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) || state.frozen.has(key);
      } return nativeHas.call(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
      } return nativeGet.call(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceIternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
      } else nativeSet.call(this, key, value);
      return this;
    }
  });
}


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(48);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(34);
var isObject = __webpack_require__(18);
var has = __webpack_require__(29);
var defineProperty = __webpack_require__(15).f;
var uid = __webpack_require__(23);
var FREEZING = __webpack_require__(72);

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var global = __webpack_require__(9);
var isForced = __webpack_require__(53);
var redefine = __webpack_require__(48);
var InternalMetadataModule = __webpack_require__(71);
var iterate = __webpack_require__(74);
var anInstance = __webpack_require__(80);
var isObject = __webpack_require__(18);
var fails = __webpack_require__(4);
var checkCorrectnessOfIteration = __webpack_require__(81);
var setToStringTag = __webpack_require__(59);
var inheritIfRequired = __webpack_require__(82);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var ADDER = IS_MAP ? 'set' : 'add';
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var isArrayIteratorMethod = __webpack_require__(75);
var toLength = __webpack_require__(31);
var bind = __webpack_require__(76);
var getIteratorMethod = __webpack_require__(78);
var callWithSafeIterationClosing = __webpack_require__(79);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  while (!(step = iterator.next()).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);
var Iterators = __webpack_require__(40);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(77);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(66);
var Iterators = __webpack_require__(40);
var wellKnownSymbol = __webpack_require__(8);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var setPrototypeOf = __webpack_require__(60);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(70);
var getWeakData = __webpack_require__(71).getWeakData;
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(18);
var anInstance = __webpack_require__(80);
var iterate = __webpack_require__(74);
var ArrayIterationModule = __webpack_require__(84);
var $has = __webpack_require__(29);
var InternalStateModule = __webpack_require__(41);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) this.entries.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && $has(data, state.id) && delete data[state.id];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && $has(data, state.id);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // 23.4.3.1 WeakSet.prototype.add(value)
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return C;
  }
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(76);
var IndexedObject = __webpack_require__(3);
var toObject = __webpack_require__(57);
var toLength = __webpack_require__(31);
var arraySpeciesCreate = __webpack_require__(85);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var isArray = __webpack_require__(86);
var wellKnownSymbol = __webpack_require__(8);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(5);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var collectionDeleteAll = __webpack_require__(88);

// `WeakMap.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'WeakMap', proto: true, real: true, forced: IS_PURE }, {
  deleteAll: function deleteAll(/* ...elements */) {
    return collectionDeleteAll.apply(this, arguments);
  }
});


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(19);
var aFunction = __webpack_require__(77);

// https://github.com/tc39/collection-methods
module.exports = function (/* ...elements */) {
  var collection = anObject(this);
  var remover = aFunction(collection['delete']);
  var allDeleted = true;
  var wasDeleted;
  for (var k = 0, len = arguments.length; k < len; k++) {
    wasDeleted = remover.call(collection, arguments[k]);
    allDeleted = allDeleted && wasDeleted;
  }
  return !!allDeleted;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var DOMIterables = __webpack_require__(90);
var ArrayIteratorMethods = __webpack_require__(1);
var hide = __webpack_require__(13);
var wellKnownSymbol = __webpack_require__(8);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      hide(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) hide(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        hide(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(99);

__webpack_require__(100);

__webpack_require__(103);

__webpack_require__(106);

__webpack_require__(1);

__webpack_require__(107);

__webpack_require__(108);

__webpack_require__(110);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(118);

__webpack_require__(120);

__webpack_require__(121);

__webpack_require__(122);

__webpack_require__(125);

__webpack_require__(126);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(132);

__webpack_require__(134);

__webpack_require__(135);

__webpack_require__(136);

__webpack_require__(139);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(142);

__webpack_require__(146);

__webpack_require__(147);

__webpack_require__(152);

__webpack_require__(154);

__webpack_require__(155);

__webpack_require__(156);

__webpack_require__(157);

__webpack_require__(158);

__webpack_require__(159);

__webpack_require__(160);

__webpack_require__(161);

__webpack_require__(162);

__webpack_require__(163);

__webpack_require__(164);

__webpack_require__(165);

__webpack_require__(167);

__webpack_require__(168);

__webpack_require__(170);

__webpack_require__(171);

__webpack_require__(172);

__webpack_require__(173);

__webpack_require__(174);

__webpack_require__(175);

__webpack_require__(176);

__webpack_require__(177);

__webpack_require__(178);

__webpack_require__(179);

__webpack_require__(180);

__webpack_require__(183);

__webpack_require__(184);

__webpack_require__(185);

__webpack_require__(186);

__webpack_require__(188);

__webpack_require__(189);

__webpack_require__(190);

__webpack_require__(191);

__webpack_require__(192);

__webpack_require__(193);

__webpack_require__(194);

__webpack_require__(195);

__webpack_require__(89);

__webpack_require__(196);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  (function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? undefined : _typeof2(exports)) === 'object' && ( false ? undefined : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
  })(window, function () {
    return (
      /******/
      function (modules) {
        // webpackBootstrap

        /******/
        // The module cache

        /******/
        var installedModules = {};
        /******/

        /******/
        // The require function

        /******/

        function __webpack_require__(moduleId) {
          /******/

          /******/
          // Check if module is in cache

          /******/
          if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
          }
          /******/
          // Create a new module (and put it into the cache)

          /******/


          var module = installedModules[moduleId] = {
            /******/
            i: moduleId,

            /******/
            l: false,

            /******/
            exports: {}
            /******/

          };
          /******/

          /******/
          // Execute the module function

          /******/

          modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          /******/

          /******/
          // Flag the module as loaded

          /******/

          module.l = true;
          /******/

          /******/
          // Return the exports of the module

          /******/

          return module.exports;
          /******/
        }
        /******/

        /******/

        /******/
        // expose the modules object (__webpack_modules__)

        /******/


        __webpack_require__.m = modules;
        /******/

        /******/
        // expose the module cache

        /******/

        __webpack_require__.c = installedModules;
        /******/

        /******/
        // define getter function for harmony exports

        /******/

        __webpack_require__.d = function (exports, name, getter) {
          /******/
          if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
              enumerable: true,
              get: getter
            });
            /******/
          }
          /******/

        };
        /******/

        /******/
        // define __esModule on exports

        /******/


        __webpack_require__.r = function (exports) {
          /******/
          if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/


          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/

        /******/
        // create a fake namespace object

        /******/
        // mode & 1: value is a module id, require it

        /******/
        // mode & 2: merge all properties of value into the ns

        /******/
        // mode & 4: return value when already ns object

        /******/
        // mode & 8|1: behave like require

        /******/


        __webpack_require__.t = function (value, mode) {
          /******/
          if (mode & 1) value = __webpack_require__(value);
          /******/

          if (mode & 8) return value;
          /******/

          if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
          /******/

          var ns = Object.create(null);
          /******/

          __webpack_require__.r(ns);
          /******/


          Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
          });
          /******/

          if (mode & 2 && typeof value != 'string') for (var key in value) {
            __webpack_require__.d(ns, key, function (key) {
              return value[key];
            }.bind(null, key));
          }
          /******/

          return ns;
          /******/
        };
        /******/

        /******/
        // getDefaultExport function for compatibility with non-harmony modules

        /******/


        __webpack_require__.n = function (module) {
          /******/
          var getter = module && module.__esModule ?
          /******/
          function getDefault() {
            return module['default'];
          } :
          /******/
          function getModuleExports() {
            return module;
          };
          /******/

          __webpack_require__.d(getter, 'a', getter);
          /******/


          return getter;
          /******/
        };
        /******/

        /******/
        // Object.prototype.hasOwnProperty.call

        /******/


        __webpack_require__.o = function (object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/

        /******/
        // __webpack_public_path__

        /******/


        __webpack_require__.p = "";
        /******/

        /******/

        /******/
        // Load entry module and return exports

        /******/

        return __webpack_require__(__webpack_require__.s = 0);
        /******/
      }(
      /************************************************************************/

      /******/
      [
      /* 0 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _utils_UUID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "UUID", function () {
          return _utils_UUID__WEBPACK_IMPORTED_MODULE_0__["UUID"];
        });
        /* harmony import */


        var js_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
        /* harmony import */


        var js_base64__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/
        __webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Base64", function () {
          return js_base64__WEBPACK_IMPORTED_MODULE_1__["Base64"];
        });
        /* harmony import */


        var _utils_HashMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "HashMap", function () {
          return _utils_HashMap__WEBPACK_IMPORTED_MODULE_2__["HashMap"];
        });
        /* harmony import */


        var _utils_Ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Ajax", function () {
          return _utils_Ajax__WEBPACK_IMPORTED_MODULE_3__["Ajax"];
        });
        /* harmony import */


        var _utils_InetAddress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "InetAddress", function () {
          return _utils_InetAddress__WEBPACK_IMPORTED_MODULE_4__["InetAddress"];
        });
        /* harmony import */


        var _utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Utils", function () {
          return _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"];
        });
        /* harmony import */


        var _extras_Console__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Console", function () {
          return _extras_Console__WEBPACK_IMPORTED_MODULE_6__["Console"];
        });
        /* harmony import */


        var _Logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Logger", function () {
          return _Logger__WEBPACK_IMPORTED_MODULE_7__["Logger"];
        });
        /* harmony import */


        var _Service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Service", function () {
          return _Service__WEBPACK_IMPORTED_MODULE_8__["Service"];
        });
        /* harmony import */


        var _TalkListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "TalkListener", function () {
          return _TalkListener__WEBPACK_IMPORTED_MODULE_9__["TalkListener"];
        });
        /* harmony import */


        var _TalkService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "TalkService", function () {
          return _TalkService__WEBPACK_IMPORTED_MODULE_10__["TalkService"];
        });
        /* harmony import */


        var _Nucleus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "nucleus", function () {
          return _Nucleus__WEBPACK_IMPORTED_MODULE_11__["nucleus"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Nucleus", function () {
          return _Nucleus__WEBPACK_IMPORTED_MODULE_11__["Nucleus"];
        });
        /* harmony import */


        var _dialect_ActionDialect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "ActionDialect", function () {
          return _dialect_ActionDialect__WEBPACK_IMPORTED_MODULE_12__["ActionDialect"];
        });

        window.CellCloud = {
          UUID: _utils_UUID__WEBPACK_IMPORTED_MODULE_0__["UUID"],
          Base64: js_base64__WEBPACK_IMPORTED_MODULE_1__["Base64"],
          HashMap: _utils_HashMap__WEBPACK_IMPORTED_MODULE_2__["HashMap"],
          Ajax: _utils_Ajax__WEBPACK_IMPORTED_MODULE_3__["Ajax"],
          InetAddress: _utils_InetAddress__WEBPACK_IMPORTED_MODULE_4__["InetAddress"],
          Utils: _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"],
          Console: _extras_Console__WEBPACK_IMPORTED_MODULE_6__["Console"],
          Logger: _Logger__WEBPACK_IMPORTED_MODULE_7__["Logger"],
          Service: _Service__WEBPACK_IMPORTED_MODULE_8__["Service"],
          TalkListener: _TalkListener__WEBPACK_IMPORTED_MODULE_9__["TalkListener"],
          TalkService: _TalkService__WEBPACK_IMPORTED_MODULE_10__["TalkService"],
          nucleus: _Nucleus__WEBPACK_IMPORTED_MODULE_11__["nucleus"],
          Nucleus: _Nucleus__WEBPACK_IMPORTED_MODULE_11__["Nucleus"],
          ActionDialect: _dialect_ActionDialect__WEBPACK_IMPORTED_MODULE_12__["ActionDialect"]
        };
        window.nucleus = _Nucleus__WEBPACK_IMPORTED_MODULE_11__["nucleus"];
        /***/
      },
      /* 1 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "UUID", function () {
          return UUID;
        });
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2015 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */


        var UUID = {
          v4: function v4() {
            var chars = '0123456789abcdef'.split('');
            var uuid = [],
                rnd = Math.random,
                r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4'; // version 4

            for (var i = 0; i < 36; i++) {
              if (!uuid[i]) {
                r = 0 | rnd() * 16;
                uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r & 0xf];
              }
            }

            return uuid.join('');
          }
        };
        /* harmony default export */

        __webpack_exports__["default"] = UUID;
        /***/
      },
      /* 2 */

      /***/
      function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function (global) {
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

          var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

          function _typeof(obj) {
            if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
              _typeof = function _typeof(obj) {
                return _typeof2(obj);
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
              };
            }

            return _typeof(obj);
          }
          /*
           *  base64.js
           *
           *  Licensed under the BSD 3-Clause License.
           *    http://opensource.org/licenses/BSD-3-Clause
           *
           *  References:
           *    http://en.wikipedia.org/wiki/Base64
           */


          ;

          (function (global, factory) {
            (false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(global) : true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
          })(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this, function (global) {
            'use strict'; // existing version for noConflict()

            global = global || {};
            var _Base64 = global.Base64;
            var version = "2.5.1"; // if node.js and NOT React Native, we use Buffer

            var buffer;

            if ( true && module.exports) {
              try {
                buffer = eval("require('buffer').Buffer");
              } catch (err) {
                buffer = undefined;
              }
            } // constants


            var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

            var b64tab = function (bin) {
              var t = {};

              for (var i = 0, l = bin.length; i < l; i++) {
                t[bin.charAt(i)] = i;
              }

              return t;
            }(b64chars);

            var fromCharCode = String.fromCharCode; // encoder stuff

            var cb_utob = function cb_utob(c) {
              if (c.length < 2) {
                var cc = c.charCodeAt(0);
                return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
              } else {
                var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
                return fromCharCode(0xf0 | cc >>> 18 & 0x07) + fromCharCode(0x80 | cc >>> 12 & 0x3f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
              }
            };

            var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;

            var utob = function utob(u) {
              return u.replace(re_utob, cb_utob);
            };

            var cb_encode = function cb_encode(ccc) {
              var padlen = [0, 2, 1][ccc.length % 3],
                  ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
                  chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
              return chars.join('');
            };

            var btoa = global.btoa ? function (b) {
              return global.btoa(b);
            } : function (b) {
              return b.replace(/[\s\S]{1,3}/g, cb_encode);
            };

            var _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (u) {
              return (u.constructor === buffer.constructor ? u : buffer.from(u)).toString('base64');
            } : function (u) {
              return (u.constructor === buffer.constructor ? u : new buffer(u)).toString('base64');
            } : function (u) {
              return btoa(utob(u));
            };

            var encode = function encode(u, urisafe) {
              return !urisafe ? _encode(String(u)) : _encode(String(u)).replace(/[+\/]/g, function (m0) {
                return m0 == '+' ? '-' : '_';
              }).replace(/=/g, '');
            };

            var encodeURI = function encodeURI(u) {
              return encode(u, true);
            }; // decoder stuff


            var re_btou = new RegExp(['[\xC0-\xDF][\x80-\xBF]', '[\xE0-\xEF][\x80-\xBF]{2}', '[\xF0-\xF7][\x80-\xBF]{3}'].join('|'), 'g');

            var cb_btou = function cb_btou(cccc) {
              switch (cccc.length) {
                case 4:
                  var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3),
                      offset = cp - 0x10000;
                  return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);

                case 3:
                  return fromCharCode((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));

                default:
                  return fromCharCode((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
              }
            };

            var btou = function btou(b) {
              return b.replace(re_btou, cb_btou);
            };

            var cb_decode = function cb_decode(cccc) {
              var len = cccc.length,
                  padlen = len % 4,
                  n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
                  chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 0xff), fromCharCode(n & 0xff)];
              chars.length -= [0, 0, 2, 1][padlen];
              return chars.join('');
            };

            var _atob = global.atob ? function (a) {
              return global.atob(a);
            } : function (a) {
              return a.replace(/\S{1,4}/g, cb_decode);
            };

            var atob = function atob(a) {
              return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
            };

            var _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (a) {
              return (a.constructor === buffer.constructor ? a : buffer.from(a, 'base64')).toString();
            } : function (a) {
              return (a.constructor === buffer.constructor ? a : new buffer(a, 'base64')).toString();
            } : function (a) {
              return btou(_atob(a));
            };

            var decode = function decode(a) {
              return _decode(String(a).replace(/[-_]/g, function (m0) {
                return m0 == '-' ? '+' : '/';
              }).replace(/[^A-Za-z0-9\+\/]/g, ''));
            };

            var noConflict = function noConflict() {
              var Base64 = global.Base64;
              global.Base64 = _Base64;
              return Base64;
            }; // export Base64


            global.Base64 = {
              VERSION: version,
              atob: atob,
              btoa: btoa,
              fromBase64: decode,
              toBase64: encode,
              utob: utob,
              encode: encode,
              encodeURI: encodeURI,
              btou: btou,
              decode: decode,
              noConflict: noConflict,
              __buffer__: buffer
            }; // if ES5 is available, make Base64.extendString() available

            if (typeof Object.defineProperty === 'function') {
              var noEnum = function noEnum(v) {
                return {
                  value: v,
                  enumerable: false,
                  writable: true,
                  configurable: true
                };
              };

              global.Base64.extendString = function () {
                Object.defineProperty(String.prototype, 'fromBase64', noEnum(function () {
                  return decode(this);
                }));
                Object.defineProperty(String.prototype, 'toBase64', noEnum(function (urisafe) {
                  return encode(this, urisafe);
                }));
                Object.defineProperty(String.prototype, 'toBase64URI', noEnum(function () {
                  return encode(this, true);
                }));
              };
            } //
            // export Base64 to the namespace
            //


            if (global['Meteor']) {
              // Meteor.js
              Base64 = global.Base64;
            } // module.exports and AMD are mutually exclusive.
            // module.exports has precedence.


            if ( true && module.exports) {
              module.exports.Base64 = global.Base64;
            } else if (true) {
              // AMD. Register as an anonymous module.
              !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return global.Base64;
              }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } // that's it!


            return {
              Base64: global.Base64
            };
          });
          /* WEBPACK VAR INJECTION */

        }).call(this, __webpack_require__(3));
        /***/
      },
      /* 3 */

      /***/
      function (module, exports) {
        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        var g; // This works in non-strict mode

        g = function () {
          return this;
        }();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function("return this")();
        } catch (e) {
          // This works if the window reference is available
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
        } // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}


        module.exports = g;
        /***/
      },
      /* 4 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "HashMap", function () {
          return HashMap;
        });

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _get(target, property, receiver) {
          if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);

              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);

              if (desc.get) {
                return desc.get.call(receiver);
              }

              return desc.value;
            };
          }

          return _get(target, property, receiver || target);
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }

          return object;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _wrapNativeSuper(Class) {
          var _cache = typeof Map === "function" ? new Map() : undefined;

          _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;

            if (typeof Class !== "function") {
              throw new TypeError("Super expression must either be null or a function");
            }

            if (typeof _cache !== "undefined") {
              if (_cache.has(Class)) return _cache.get(Class);

              _cache.set(Class, Wrapper);
            }

            function Wrapper() {
              return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }

            Wrapper.prototype = Object.create(Class.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            return _setPrototypeOf(Wrapper, Class);
          };

          return _wrapNativeSuper(Class);
        }

        function isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;

          try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }

        function _construct(Parent, args, Class) {
          if (isNativeReflectConstruct()) {
            _construct = Reflect.construct;
          } else {
            _construct = function _construct(Parent, args, Class) {
              var a = [null];
              a.push.apply(a, args);
              var Constructor = Function.bind.apply(Parent, a);
              var instance = new Constructor();
              if (Class) _setPrototypeOf(instance, Class.prototype);
              return instance;
            };
          }

          return _construct.apply(null, arguments);
        }

        function _isNativeFunction(fn) {
          return Function.toString.call(fn).indexOf("[native code]") !== -1;
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * HashMap 封装。
         */


        var HashMap =
        /*#__PURE__*/
        function (_Map) {
          _inherits(HashMap, _Map);

          function HashMap() {
            _classCallCheck(this, HashMap);

            return _possibleConstructorReturn(this, _getPrototypeOf(HashMap).call(this));
          }
          /**
           * 判断 Map 是否为空
           */


          _createClass(HashMap, [{
            key: "isEmpty",
            value: function isEmpty() {
              return this.size === 0;
            }
            /**
             * 判断对象中是否包含给定 Key
             */

          }, {
            key: "containsKey",
            value: function containsKey(key) {
              return this.has(key);
            }
            /**
             * 判断对象中是否包含给定的 Value
             */

          }, {
            key: "containsValue",
            value: function containsValue(value) {
              var rst = false;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = this.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var v = _step.value;
                  if (v === value) rst = true;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              return rst;
            }
            /**
             * 向 Map 中添加数据
             */

          }, {
            key: "put",
            value: function put(key, value) {
              return this.set(key, value);
            }
            /**
             * 根据给定的 Key 删除一个值
             */

          }, {
            key: "remove",
            value: function remove(key) {
              return this["delete"](key);
            }
            /**
             * 获得 Map 中的所有 Key
             */

          }, {
            key: "keySet",
            value: function keySet() {
              return Array.from(this.keys());
            }
          }, {
            key: "values",
            value: function values() {
              return Array.from(_get(_getPrototypeOf(HashMap.prototype), "values", this).call(this));
            }
          }]);

          return HashMap;
        }(_wrapNativeSuper(Map));
        /* harmony default export */


        __webpack_exports__["default"] = HashMap;
        /***/
      },
      /* 5 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "HttpMethod", function () {
          return HttpMethod;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "HttpErrorCode", function () {
          return HttpErrorCode;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "AjaxResponse", function () {
          return AjaxResponse;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "AjaxRequest", function () {
          return AjaxRequest;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "AjaxCrossDomainRequest", function () {
          return AjaxCrossDomainRequest;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Ajax", function () {
          return Ajax;
        });
        /* harmony import */


        var _HashMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
        /* harmony import */


        var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /*eslint no-redeclare: 0*/

        /**
         * HTTP 方法
         */


        var HttpMethod = {
          // GET
          GET: "GET",
          // POST
          POST: "POST"
        };
        var HttpErrorCode = {
          // 网络错误
          NETWORK_FAILED: 1000,
          // 访问状态错误
          STATUS_ERROR: 1100
        };
        /**
         * AJAX 响应数据封装。
         * @author Jiangwei Xu
         */

        var AjaxResponse =
        /*#__PURE__*/
        function () {
          function AjaxResponse(status, data) {
            _classCallCheck(this, AjaxResponse);

            this.status = status;
            this.data = data;
          }

          _createClass(AjaxResponse, [{
            key: "getStatus",
            value: function getStatus() {
              return this.status;
            }
          }, {
            key: "getData",
            value: function getData() {
              return this.data;
            }
          }]);

          return AjaxResponse;
        }();
        /**
         * AJAX 请求操作封装。
         * @author Jiangwei Xu
         */


        var AjaxRequest =
        /*#__PURE__*/
        function () {
          function AjaxRequest(xmlhttp, url) {
            _classCallCheck(this, AjaxRequest);

            this._xmlhttp = xmlhttp;
            this._url = url;
            this._method = "GET";
            this._headers = null;
            this._content = null;
          }

          _createClass(AjaxRequest, [{
            key: "method",
            value: function method(value) {
              this._method = value;
              return this;
            }
          }, {
            key: "header",
            value: function header(name, value) {
              if (null == this._headers) this._headers = new _HashMap__WEBPACK_IMPORTED_MODULE_0__["default"]();

              this._headers.put(name, value);

              return this;
            }
          }, {
            key: "content",
            value: function content(value) {
              this._content = value;
              return this;
            }
          }, {
            key: "send",
            value: function send(responseCallback) {
              // 打开 AJAX 请求
              this._xmlhttp.open(this._method, this._url, true);

              var params; //如果content是JSON对象, 即把content转换成表单类型以POST传输

              if (null != this._content && _typeof(this._content) == "object") {
                for (var item in this._content) {
                  if (params == null) {
                    params = item + '=' + encodeURIComponent(this._content[item]);
                  } else {
                    params += '&' + item + '=' + encodeURIComponent(this._content[item]);
                  }
                }

                this._xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
              } else {
                params = this._content;

                this._xmlhttp.setRequestHeader("Content-Type", "application/json");
              } // 处理请求头数据


              if (null != this._headers) {
                var keySet = this._headers.keySet();

                for (var i = 0; i < keySet.length; ++i) {
                  var key = keySet[i];

                  var value = this._headers.get(key); // 设置请求头


                  this._xmlhttp.setRequestHeader(key, value);
                }
              }

              if (undefined !== responseCallback) {
                var _xh = this._xmlhttp;

                _xh.onreadystatechange = function () {
                  if (_xh.readyState == 4) {
                    var reponse = new AjaxResponse(_xh.status, _xh.responseText);
                    responseCallback.call(null, reponse);
                  }
                };
              } // 发送请求


              if (null == params) {
                this._xmlhttp.send();
              } else {
                this._xmlhttp.send(params);
              }
            }
          }]);

          return AjaxRequest;
        }();
        /**
         * AJAX 跨域访问。
         */


        var AjaxCrossDomainRequest =
        /*#__PURE__*/
        function () {
          function AjaxCrossDomainRequest(address, port) {
            _classCallCheck(this, AjaxCrossDomainRequest);

            this._address = address;
            this._port = port;
            this._uri = "";
            this._method = "GET";
            this._cookie = null;
            this._headers = null;
            this._content = null;
            this._error = null;
            this._errorContext = null;
            this._protocol = window.location.protocol.toLowerCase().indexOf("https") >= 0 ? "https://" : "http://"; // 请求数据是否完成

            this._completed = false; // 时间戳

            this._timestamp = new Date();
          }

          _createClass(AjaxCrossDomainRequest, [{
            key: "uri",
            value: function uri(value) {
              this._uri = value;
              return this;
            }
          }, {
            key: "method",
            value: function method(value) {
              this._method = value;
              return this;
            }
          }, {
            key: "content",
            value: function content(value) {
              this._content = value;
              return this;
            }
          }, {
            key: "cookie",
            value: function cookie(value) {
              this._cookie = value;
              return this;
            }
          }, {
            key: "error",
            value: function error(value, ctx) {
              this._error = value;
              this._errorContext = ctx !== undefined ? ctx : null;
              return this;
            }
          }, {
            key: "send",
            value: function send(responseCallback) {
              AjaxController.execute(this, responseCallback);
              return this;
            }
          }, {
            key: "_execute",
            value: function _execute(responseCallback) {
              var time = this._timestamp.getTime();

              var param = ["?u=", this._uri, "&m=", this._method, "&c=_cc_ajax_cb", "&t=", time]; // 添加 Content

              if (this._content != null) {
                var jsonstr = null;

                if (typeof this._content == "string") {
                  jsonstr = this._content;
                } else {
                  jsonstr = JSON.stringify(this._content);
                } // 添加 Body 数据


                param.push("&b=", escape(jsonstr));
              } // 添加 Cookie


              if (this._cookie != null) {
                param.push("&_cookie=", escape(this._cookie));
              } // URL


              var src = this._protocol + this._address + ":" + this._port + "/cccd.js" + param.join("");
              var self = this;

              if (undefined !== responseCallback) {
                _cc_ajax_map.put(time, {
                  request: self,
                  callback: responseCallback
                });
              }

              var scriptDom = document.getElementById("cccd");

              if (scriptDom != null) {
                document.body.removeChild(scriptDom);
                scriptDom = null;
              }

              if (null == scriptDom) {
                scriptDom = document.createElement("script");
                scriptDom.setAttribute("type", "text/javascript");
                scriptDom.setAttribute("id", "cccd");

                if (scriptDom.addEventListener) {
                  scriptDom.addEventListener("error", function (e) {
                    self._onError(e);
                  }, false);
                  scriptDom.addEventListener("load", function (e) {
                    self._onLoad(e);
                  }, false);
                } else if (scriptDom.attachEvent) {
                  scriptDom.attachEvent("onerror", function (e) {
                    self._onError(e);
                  });
                  scriptDom.attachEvent("onload", function (e) {
                    self._onLoad(e);
                  });
                }

                scriptDom.src = src;
                document.body.appendChild(scriptDom);
              }

              return this;
            }
          }, {
            key: "_onLoad",
            value: function _onLoad(e) {
              AjaxController.notifyCompleted(this);
            }
          }, {
            key: "_onError",
            value: function _onError(e) {
              if (null != this._error) {
                if (e !== undefined) {
                  this._error.call(this._errorContext, this, HttpErrorCode.NETWORK_FAILED);
                } else {
                  this._error.call(this._errorContext, this, HttpErrorCode.STATUS_ERROR);
                }
              } // 标记为完成


              this._completed = true; // 清理 Map

              _cc_ajax_map.remove(this._timestamp.getTime());

              AjaxController.notifyCompleted(this);
            }
          }]);

          return AjaxCrossDomainRequest;
        }(); // Key : timestamp, Value : {request, callback}


        var _cc_ajax_map = new _HashMap__WEBPACK_IMPORTED_MODULE_0__["default"]();

        var _cc_ajax_cb = function _cc_ajax_cb(time, response, cookie) {
          if (undefined !== cookie) {
            // 新 Cookie
            _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].i("Ajax", "default ajax callback, cookie: " + cookie);
          } else {// 没有新 Cookie
            //Logger.i("Ajax", "default ajax callback, no cookie");
          }

          var obj = _cc_ajax_map.get(time);

          if (null != obj) {
            var r = obj.request;
            var cb = obj.callback;
            cb.call(null, response, cookie);

            _cc_ajax_map.remove(time); // 标记为完成


            r._completed = true;
            AjaxController.notifyCompleted(r);
          }
        };
        /**
         * 跨域请求数据中心。
         */


        var AjaxController = {
          timer: 0,
          lastRequest: null,
          requestQueue: [],
          callbackQueue: [],
          // 浏览器完成事件调用的“完成”通知
          notifyCompleted: function notifyCompleted(request) {// TODO
          },
          execute: function execute(request, responseCallback) {
            this.requestQueue.push(request);
            this.callbackQueue.push(responseCallback);
          }
        }; // 启动定时器

        AjaxController.timer = setInterval(function () {
          var requestQueue = AjaxController.requestQueue;

          if (requestQueue.length > 0) {
            var callbackQueue = AjaxController.callbackQueue; // 根据上一次请求判断

            if (null != AjaxController.lastRequest) {
              // 判断是否完成
              if (AjaxController.lastRequest._completed) {
                // 出队
                var r = requestQueue.shift();
                var cb = callbackQueue.shift();
                AjaxController.lastRequest = r; // 执行

                r._execute(cb);
              }
            } else {
              // 出队
              var r = requestQueue.shift();
              var cb = callbackQueue.shift();
              AjaxController.lastRequest = r; // 执行

              r._execute(cb);
            }
          }
        }, 500);
        /**
         * AJAX
         */

        var Ajax = {
          newRequest: function newRequest(url) {
            var xmlhttp = null;

            if (window.XMLHttpRequest) {
              // code for IE7+, Firefox, Chrome, Opera, Safari
              xmlhttp = new XMLHttpRequest();
            } else {
              // code for IE6, IE5

              /*eslint no-undef: 0*/
              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }

            var request = new AjaxRequest(xmlhttp, url);
            return request;
          },
          newCrossDomain: function newCrossDomain(address, port) {
            var request = new AjaxCrossDomainRequest(address, port);
            return request;
          }
        };
        /* harmony default export */

        __webpack_exports__["default"] = Ajax;
        /***/
      },
      /* 6 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Logger", function () {
          return Logger;
        });
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /*eslint no-global-assign: 0*/


        if (undefined === console) {
          console = {
            error: function error() {},
            warn: function warn() {},
            info: function info() {},
            log: function log() {}
          };
        } else {
          if (undefined === console.error) {
            console.error = console.log;
          }

          if (undefined === console.warn) {
            console.warn = console.log;
          }

          if (undefined === console.info) {
            console.info = console.log;
          }
        }

        var Logger = {
          // 是否激活
          enabled: true,
          d: function d(tag, text) {
            if (!Logger.enabled) {
              return;
            }

            console.log(Logger._printTime() + " [DEBUG] " + tag + " - " + text);
          },
          i: function i(tag, text) {
            if (!Logger.enabled) {
              return;
            }

            console.info(Logger._printTime() + " [INFO]  " + tag + " - " + text);
          },
          w: function w(tag, text) {
            if (!Logger.enabled) {
              return;
            }

            console.warn(Logger._printTime() + " [WARN]  " + tag + " - " + text);
          },
          e: function e(tag, text) {
            if (!Logger.enabled) {
              return;
            }

            console.error(Logger._printTime() + " [ERROR] " + tag + " - " + text);
          },
          _printTime: function _printTime() {
            var date = new Date();
            var ret = [date.getHours(), ":", date.getMinutes(), ":", date.getSeconds(), ".", date.getMilliseconds()];
            date = null;
            return ret.join('');
          }
        };
        /* harmony default export */

        __webpack_exports__["default"] = Logger;
        /***/
      },
      /* 7 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "InetAddress", function () {
          return InetAddress;
        });

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 网络地址描述类。
         * 
         * @author Jiangwei Xu
         */


        var InetAddress =
        /*#__PURE__*/
        function () {
          function InetAddress(address, port) {
            _classCallCheck(this, InetAddress);

            this.address = address;
            this.port = port;
          }

          _createClass(InetAddress, [{
            key: "getAddress",
            value: function getAddress() {
              return this.address;
            }
          }, {
            key: "getPort",
            value: function getPort() {
              return this.port;
            }
          }]);

          return InetAddress;
        }();
        /* harmony default export */


        __webpack_exports__["default"] = InetAddress;
        /***/
      },
      /* 8 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Utils", function () {
          return Utils;
        });
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 实用函数库。
         *
         * @author Xu Jiangwei
         */


        var Utils = {
          /** 简单加密操作。密钥长度为 8 位。
           */
          simpleEncrypt: function simpleEncrypt(aPlaintext, aKey) {
            var plaintext = [];

            for (var _i = 0; _i < aPlaintext.length; ++_i) {
              plaintext.push(aPlaintext.charCodeAt(_i) - 256);
            }

            var key = [];

            for (var _i2 = 0; _i2 < aKey.length; ++_i2) {
              key.push(aKey.charCodeAt(_i2) - 256);
            }

            if (key.length != 8) return null; // 运算密钥

            var keyCode = 11 + key[0];
            keyCode -= key[1];
            keyCode += key[2];
            keyCode -= key[3];
            keyCode += key[4];
            keyCode -= key[5];
            keyCode += key[6];
            keyCode -= key[7]; // 评价

            var cc = keyCode % 8;
            var parity = keyCode % 2 == 0 ? 2 : 1;
            var length = plaintext.length;
            var out = new Array();

            for (var i = 0; i < length; ++i) {
              var c = plaintext[i] ^ parity;
              var v = c ^ cc;

              if (v < 0) {
                v += 256;
              }

              out[i] = v;
            }

            return out;
          },

          /** 简单解密操作。密钥长度为 8 位。
           */
          simpleDecrypt: function simpleDecrypt(aCiphertext, aKey) {
            var ciphertext = [];

            for (var i = 0; i < aCiphertext.length; ++i) {
              ciphertext.push(aCiphertext.charCodeAt(i) - 256);
            }

            var key = [];

            for (var _i3 = 0; _i3 < aKey.length; ++_i3) {
              key.push(aKey.charCodeAt(_i3) - 256);
            }

            if (key.length != 8) return null; // 运算密钥

            var keyCode = 11 + key[0];
            keyCode -= key[1];
            keyCode += key[2];
            keyCode -= key[3];
            keyCode += key[4];
            keyCode -= key[5];
            keyCode += key[6];
            keyCode -= key[7]; // 评价

            var cc = keyCode % 8;
            var parity = keyCode % 2 == 0 ? 2 : 1;
            var length = ciphertext.length;
            var out = new Array();

            for (var _i4 = 0; _i4 < length; ++_i4) {
              var c = ciphertext[_i4] ^ cc;
              var v = c ^ parity;

              if (v < 0) {
                v += 256;
              }

              out[_i4] = v;
            }

            return out;
          }
        };
        /* harmony default export */

        __webpack_exports__["default"] = Utils;
        /***/
      },
      /* 9 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Console", function () {
          return Console;
        });

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /**
         * Web Console
         * @author Jiangwei Xu
         *
         * 快捷键：
         * Ctrl + ~
         *
         * 控制台命令对象格式：
         * {
         *   name: "version",
         *   shortName: "ver",
         *   desc: "Print console version.",
         *   usage: "version|ver",
         *   exec: function(console, name, args) { console.println("v1.0"); }
         * }
         */

        /** 控制台。
         */


        var Console =
        /*#__PURE__*/
        function () {
          function Console() {
            _classCallCheck(this, Console);

            this.version = "1.1";
            this.dom = null;
            this.viewDom = null;
            this.inputDom = null;
            this.markDom = null;
            this.keyDownFun = null;
            this.keyUpFun = null;
            this.resizeFun = null;
            this.hotKeyCtrl = false; // 原始 console

            this.rawConsole = window.console; // 字符数

            this.charCounts = 0; // 最大允许字符数

            this.maxCharCounts = 5000;
            this.prompt = '&gt; '; // 命令列表

            this.cmdNameMap = {};
            this.cmdShortMap = {}; // 内置命令

            this._buildIn(); // 大小重置定时器


            this._resizeTimer = 0;
          }
          /** 启动控制台。
           */


          _createClass(Console, [{
            key: "start",
            value: function start() {
              var that = this;

              this.keyDownFun = function (event) {
                that._onKeyDown(event);
              };

              this.keyUpFun = function (event) {
                that._onKeyUp(event);
              };

              this.resizeFun = function (event) {
                that._onResize(event);
              };

              document.addEventListener('keydown', this.keyDownFun, false);
              document.addEventListener('keyup', this.keyUpFun, false);
              window.addEventListener('resize', this.resizeFun, false);

              if (null == this.dom) {
                var el = document.createElement("div");
                el.id = "_console";
                var ta = ['<div class="window container">', '<div class="title"><div class="text">Console</div><a id="_console_close" href="#" class="close">X</a></div>', '<div id="_console_view" class="view"><p>Console 1.1 (author Ambrose Xu, updated 20140409)</p><p>Enter the "help" for more information.</p><p><br/></p></div>', '<div class="cmd-input">&gt; <input type="text" name="_console_cmd" id="_console_cmd" maxlength="256"></div>', '</div>'];
                el.innerHTML = ta.join('');
                document.body.appendChild(el);
                el.style.visibility = 'hidden';
                this.dom = el;
              }

              if (null == this.viewDom) {
                this.viewDom = document.getElementById('_console_view');
              }

              if (null == this.inputDom) {
                this.inputDom = document.getElementById('_console_cmd');
              }

              var btnClose = document.getElementById('_console_close');
              btnClose.addEventListener('click', function () {
                that.close();
              }, false);

              if (typeof console === "undefined" || typeof console.log === "undefined") {
                var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
                window.console = {};

                for (var i = 0; i < names.length; ++i) {
                  window.console[names[i]] = function () {};
                }
              }

              window.console = this;
            }
            /** 停用控制台。
             */

          }, {
            key: "stop",
            value: function stop() {
              document.removeEventListener('keydown', this.keyDownFun, false);
              document.removeEventListener('keyup', this.keyUpFun, false);
              window.removeEventListener('resize', this.resizeFun, false);
              window.console = this.rawConsole;
            }
            /** 开启控制台界面。
             */

          }, {
            key: "open",
            value: function open() {
              if (!this.isClosed()) {
                return;
              }

              this._resize();

              this.dom.style.visibility = 'visible'; // 刷新角标

              this._refreshMark();
            }
            /** 关闭控制台界面。
             */

          }, {
            key: "close",
            value: function close() {
              if (this.isClosed()) {
                return;
              }

              this.dom.style.visibility = 'hidden'; // 刷新角标

              this._refreshMark();
            }
            /** 设置是否显示角标。
             */

          }, {
            key: "mark",
            value: function mark(value) {
              if (value) {
                if (null == this.markDom) {
                  var el = document.createElement("div");
                  el.innerHTML = '<button class="_console_mark">Console</button>';
                  this.markDom = el;
                  document.body.appendChild(this.markDom);
                  var that = this;
                  this.markDom.addEventListener('click', function () {
                    that.open();
                  }, false);
                }

                this._refreshMark();
              } else {
                if (null != this.markDom) {
                  document.body.removeChild(this.markDom);
                  this.markDom = null;
                }
              }
            }
            /** 控制台是否已显示。
             */

          }, {
            key: "isClosed",
            value: function isClosed() {
              return null == this.dom || this.dom.style.visibility != 'visible' ? true : false;
            }
            /** 打印指定文本信息到控制台界面。
             */

          }, {
            key: "log",
            value: function log(text) {
              this.rawConsole.log(text);
              this.println(text);
            }
            /** 打印指定文本信息到控制台界面。
             */

          }, {
            key: "info",
            value: function info(text) {
              this.rawConsole.info(text);
              this.println(text);
            }
            /** 打印指定文本信息到控制台界面。
             */

          }, {
            key: "warn",
            value: function warn(text) {
              this.rawConsole.warn(text);
              this.println(text);
            }
            /** 打印指定文本信息到控制台界面。
             */

          }, {
            key: "error",
            value: function error(text) {
              this.rawConsole.error(text);
              this.println(text);
            }
            /** 打印文本内容并换行。
             */

          }, {
            key: "println",
            value: function println(content) {
              if (typeof content != 'string') {
                content = content.toString();
              }

              if (null != this.viewDom) {
                this._precheckCharCounts(content);

                var el = document.createElement('p');
                el.innerHTML = content.length > 0 ? content : '<br/>';
                this.viewDom.appendChild(el);
                this.viewDom.scrollTop = this.viewDom.scrollHeight;
              }
            }
            /** 清空打印信息。
             */

          }, {
            key: "clear",
            value: function clear() {
              this.viewDom.innerHTML = "";
              this.charCounts = 0;
            }
            /** 注册控制台命令。
             */

          }, {
            key: "register",
            value: function register(cmd) {
              this.cmdNameMap[cmd.name] = cmd;
              this.cmdShortMap[cmd.shortName] = cmd;
            }
            /** 内置命令。
             */

          }, {
            key: "_buildIn",
            value: function _buildIn() {
              // help
              this.register({
                name: "help",
                shortName: "help",
                desc: "打印控制台帮助信息及命令清单。",
                usage: "help",
                exec: function exec(console, name, args) {
                  console.println(console.prompt + name);
                  console.println("控制台显示/隐藏快捷键：Ctrl + ~");
                  console.println("控制台命令清单：");

                  for (var n in console.cmdNameMap) {
                    if (typeof n == 'string') {
                      var cmd = console.cmdNameMap[n];
                      console.println(n + "  -  " + cmd.desc);
                    }
                  }

                  console.println("");
                }
              }); // version/ver

              this.register({
                name: "version",
                shortName: "ver",
                desc: "打印控制台版本信息。",
                usage: "version|ver",
                exec: function exec(console, name, args) {
                  console.println(console.prompt + name);
                  console.log("Console version " + console.version + ", author 'Ambrose Xu'");
                  console.println("");
                }
              }); // clear/cls

              this.register({
                name: "clear",
                shortName: "cls",
                desc: "清空控制台界面内的所有打印信息。",
                usage: "clear|cls",
                exec: function exec(console, name, args) {
                  console.clear();
                }
              });
            }
          }, {
            key: "_precheckCharCounts",
            value: function _precheckCharCounts(content) {
              var chars = content.length;
              this.charCounts += chars;

              if (this.charCounts >= this.maxCharCounts) {
                this.viewDom.innerHTML = "";
                this.charCounts = chars;
              }
            }
          }, {
            key: "_processInput",
            value: function _processInput() {
              var text = this.inputDom.value;

              if (text.length <= 0) {
                return;
              } // 分拆命令


              var name = null;
              var args = "";
              var index = text.indexOf(" ");

              if (index == 0) {
                return;
              } else if (index < 0) {
                name = text;
              } else {
                name = text.substr(0, index);
                args = text.substr(index + 1, text.length - index);
              } // 清空输入框


              this.inputDom.value = "";
              var cmd = this.cmdNameMap[name];
              if (undefined === cmd || null == cmd) cmd = this.cmdShortMap[name];

              if (null == cmd) {
                this.println("Unknown command: " + name);
                this.println("");
                return;
              } // 执行命令


              cmd.exec(this, name, args);
            }
          }, {
            key: "_resize",
            value: function _resize() {
              if (null == this.dom) return;
              var w = parseInt(document.body.clientWidth);
              this.dom.style.width = w + "px";
              var h = parseInt(document.body.clientHeight);
              if (h > 200) this.dom.style.height = h + "px";
              this.inputDom.style.width = w - 60 + "px";
            }
          }, {
            key: "_refreshMark",
            value: function _refreshMark() {
              if (null == this.markDom) {
                return;
              }

              if (this.isClosed()) {
                this.markDom.style.visibility = 'visible';
              } else {
                this.markDom.style.visibility = 'hidden';
              }
            }
          }, {
            key: "_onKeyDown",
            value: function _onKeyDown(event) {
              if (event.keyCode == 17) this.hotKeyCtrl = true;
            }
          }, {
            key: "_onKeyUp",
            value: function _onKeyUp(event) {
              // C - 67，~ - 192
              if (event.keyCode == 192 && this.hotKeyCtrl) {
                if (this.dom.style.visibility == 'visible') this.close();else this.open();
              } else if (event.keyCode == 17) {
                this.hotKeyCtrl = false;
              } else if (event.keyCode == 13) {
                // 回车
                this._processInput();
              }
            }
          }, {
            key: "_onResize",
            value: function _onResize(event) {
              if (this._resizeTimer > 0) {
                clearTimeout(this._resizeTimer);
                this._resizeTimer = 0;
              }

              var that = this;
              this._resizeTimer = setTimeout(function () {
                clearTimeout(that._resizeTimer);
                that._resizeTimer = 0;

                that._resize();
              }, 600);
            }
          }]);

          return Console;
        }();
        /* harmony default export */


        __webpack_exports__["default"] = Console;
        /***/
      },
      /* 10 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Service", function () {
          return Service;
        });

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 系统服务定义。
         * @author Jiangwei Xu
         */


        var Service =
        /*#__PURE__*/
        function () {
          function Service() {
            _classCallCheck(this, Service);
          }

          _createClass(Service, [{
            key: "startup",
            value: function startup() {
              return false;
            }
          }, {
            key: "shutdown",
            value: function shutdown() {}
          }]);

          return Service;
        }();
        /* harmony default export */


        __webpack_exports__["default"] = Service;
        /***/
      },
      /* 11 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TalkListener", function () {
          return TalkListener;
        });

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 会话监听器。
         *
         * @author Jiangwei Xu
         */


        var TalkListener =
        /*#__PURE__*/
        function () {
          function TalkListener() {
            _classCallCheck(this, TalkListener);
          }
          /** 与内核进行会话。
           */


          _createClass(TalkListener, [{
            key: "dialogue",
            value: function dialogue(identifier, primitive) {}
            /** 与对端内核建立会话。
             */

          }, {
            key: "contacted",
            value: function contacted(identifier, tag) {}
            /** 与对端内核断开会话。
             */

          }, {
            key: "quitted",
            value: function quitted(identifier, tag) {}
            /** 发生错误。
             */

          }, {
            key: "failed",
            value: function failed(tag, failure) {}
          }]);

          return TalkListener;
        }();
        /* harmony default export */


        __webpack_exports__["default"] = TalkListener;
        /***/
      },
      /* 12 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "_DelegateProxy", function () {
          return _DelegateProxy;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TalkService", function () {
          return TalkService;
        });
        /* harmony import */


        var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
        /* harmony import */


        var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
        /* harmony import */


        var _dialect_ActionDialectFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
        /* harmony import */


        var _utils_HashMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
        /* harmony import */


        var _dialect_DialectEnumerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
        /* harmony import */


        var _SpeakerDelegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
        /* harmony import */


        var _Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2016 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /*eslint no-redeclare: 0*/

        /** 委派的代理
         */


        var _DelegateProxy =
        /*#__PURE__*/
        function (_SpeakerDelegate) {
          _inherits(_DelegateProxy, _SpeakerDelegate);

          function _DelegateProxy(service) {
            var _this;

            _classCallCheck(this, _DelegateProxy);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(_DelegateProxy).call(this));
            _this.service = service;
            return _this;
          }

          _createClass(_DelegateProxy, [{
            key: "onDialogue",
            value: function onDialogue(speaker, celletIdentifier, primitive) {
              var listeners = this.service.listeners;

              for (var i = 0; i < listeners.length; ++i) {
                listeners[i].dialogue(celletIdentifier, primitive);
              }
            }
          }, {
            key: "onContacted",
            value: function onContacted(speaker, celletIdentifier) {
              var listeners = this.service.listeners;

              for (var i = 0; i < listeners.length; ++i) {
                listeners[i].contacted(celletIdentifier, speaker.remoteTag);
              }
            }
          }, {
            key: "onQuitted",
            value: function onQuitted(speaker, celletIdentifier) {
              var listeners = this.service.listeners;

              for (var i = 0; i < listeners.length; ++i) {
                listeners[i].quitted(celletIdentifier, speaker.remoteTag);
              }
            }
          }, {
            key: "onFailed",
            value: function onFailed(speaker, failure) {
              var listeners = this.service.listeners;

              for (var i = 0; i < listeners.length; ++i) {
                listeners[i].failed(speaker.remoteTag, failure);
              }
            }
          }]);

          return _DelegateProxy;
        }(_SpeakerDelegate__WEBPACK_IMPORTED_MODULE_5__["default"]);
        /**
         * 会话服务。
         *
         * @author Jiangwei Xu
         */


        var TalkService =
        /*#__PURE__*/
        function (_Service) {
          _inherits(TalkService, _Service);

          function TalkService(worker) {
            var _this2;

            _classCallCheck(this, TalkService);

            _this2 = _possibleConstructorReturn(this, _getPrototypeOf(TalkService).call(this));
            TalkService.instance = _assertThisInitialized(_this2);
            _this2.worker = worker;
            _this2.daemonTimer = 0;
            _this2.recallTimer = 0;
            _this2.listeners = new Array();
            _this2.speakers = new Array();
            _this2.speakerMap = new _utils_HashMap__WEBPACK_IMPORTED_MODULE_3__["default"]();
            _this2.delegateProxy = new _DelegateProxy(_assertThisInitialized(_this2)); // 默认 10 秒一次 tick

            _this2.tickTime = 10000; // 存放待发送数据

            _this2.talkList = [];
            return _this2;
          }

          _createClass(TalkService, [{
            key: "startup",
            value: function startup() {
              // 添加方言工厂
              var adf = new _dialect_ActionDialectFactory__WEBPACK_IMPORTED_MODULE_2__["default"]();

              _dialect_DialectEnumerator__WEBPACK_IMPORTED_MODULE_4__["default"].getInstance().addFactory(adf); // 启动定时任务


              _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].i("TalkService", "Tick period is " + this.tickTime + " ms");

              this._tickFunction();

              return true;
            }
          }, {
            key: "shutdown",
            value: function shutdown() {
              if (this.daemonTimer > 0) {
                clearTimeout(this.daemonTimer);
                this.daemonTimer = 0;
              }

              if (this.recallTimer > 0) {
                clearTimeout(this.recallTimer);
                this.recallTimer = 0;
              }
            }
          }, {
            key: "addListener",
            value: function addListener(listener) {
              var index = this.listeners.indexOf(listener);
              if (index >= 0) return;
              this.listeners.push(listener);
            }
          }, {
            key: "removeListener",
            value: function removeListener(listener) {
              var index = this.listeners.indexOf(listener);

              if (index >= 0) {
                this.listeners.splice(index, 1);
              }
            }
          }, {
            key: "hasListener",
            value: function hasListener(listener) {
              return this.listeners.indexOf(listener) >= 0;
            }
          }, {
            key: "isWebSocketSupported",
            value: function isWebSocketSupported() {
              return undefined !== window.WebSocket;
            }
            /** 重置心跳周期。
             */

          }, {
            key: "resetHeartbeat",
            value: function resetHeartbeat(identifier, heartbeat) {
              if (heartbeat < 2000) {
                _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].w("TalkService", "Reset '" + identifier + "' heartbeat Failed.");

                return false;
              } //		if (this.isWebSocketSupported() && heartbeat < 10000) {
              //			Logger.w("TalkService", "Reset '"+ identifier +"' heartbeat Failed.");
              //			return false;
              //		}
              // 如果心跳小于 5 秒，则缩短 tick 间隔


              if (heartbeat <= 5000) {
                this.tickTime = 5000;
              } else {
                this.tickTime = 10000;
              }

              clearTimeout(this.daemonTimer);
              this.daemonTimer = 0; // 重置 Speaker 心跳

              var speaker = this.speakerMap.get(identifier);

              if (null != speaker) {
                speaker.heartbeat = heartbeat;
              } else {
                _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].e("TalkService", "Reset '" + identifier + "' heartbeat Failed. Retrying after 5 seconds ...");

                var self = this;
                setTimeout(function () {
                  var speaker = self.speakerMap.get(identifier);

                  if (null != speaker) {
                    speaker.heartbeat = heartbeat;
                  }
                }, 5000);
              }

              _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].i("TalkService", "Reset '" + identifier + "' heartbeat period is " + heartbeat + " ms"); // 启动执行


              this._tickFunction();

              return true;
            }
          }, {
            key: "call",
            value: function call(identifiers, address, socketEnabled) {
              for (var i = 0; i < identifiers.length; ++i) {
                var identifier = identifiers[i];

                if (this.speakerMap.containsKey(identifier)) {
                  return false;
                }
              } // 创建新的 Speaker


              var speaker = new _Speaker__WEBPACK_IMPORTED_MODULE_1__["default"](address, this.delegateProxy, socketEnabled, this.worker);
              this.speakers.push(speaker);

              for (var i = 0; i < identifiers.length; ++i) {
                var identifier = identifiers[i];
                this.speakerMap.put(identifier, speaker);
              }

              if (!socketEnabled) {
                this.resetHeartbeat(identifiers[0], 5000);
              }

              return speaker.call(identifiers);
            }
          }, {
            key: "tryRecall",
            value: function tryRecall() {
              if (this.speakers.length == 0) {
                return false;
              } // 判断socket连接是否真正的关闭了, 如果未真正关闭, 无须重连


              var relist = [];

              for (var i = 0; i < this.speakers.length; ++i) {
                var speaker = this.speakers[i];

                if (speaker.state != _Speaker__WEBPACK_IMPORTED_MODULE_1__["TalkState"].HANGUP) {
                  continue;
                }

                relist.push(speaker);
              }

              if (relist.length == 0) {
                return false;
              }

              if (this.recallTimer > 0) {
                clearTimeout(this.recallTimer);
                this.recallTimer = 0;
              }

              var self = this;
              this.recallTimer = setTimeout(function () {
                clearTimeout(self.recallTimer);
                self.recallTimer = 0;

                if (relist.length == self.speakers.length) {
                  self.worker._resetTag();
                }

                for (var i = 0; i < relist.length; ++i) {
                  var speaker = relist[i];

                  if (speaker.state != _Speaker__WEBPACK_IMPORTED_MODULE_1__["TalkState"].CALLED) {
                    // call without ids
                    speaker.call(null);
                  }
                }
              }, 5000);
              return true;
            }
          }, {
            key: "recall",
            value: function recall() {
              if (this.speakers.length == 0) {
                return false;
              }

              if (this.recallTimer > 0) {
                clearTimeout(this.recallTimer);
                this.recallTimer = 0;
              }

              for (var i = 0; i < this.speakers.length; ++i) {
                var speaker = this.speakers[i];

                if (speaker.state != _Speaker__WEBPACK_IMPORTED_MODULE_1__["TalkState"].CALLED) {
                  // hang up old speaker
                  speaker.destroySocketEvent();
                  speaker.hangUp();
                }
              }

              var self = this;
              this.recallTimer = setTimeout(function () {
                clearTimeout(self.recallTimer);
                self.recallTimer = 0;

                window.nucleus._resetTag();

                for (var i = 0; i < self.speakers.length; ++i) {
                  var speaker = self.speakers[i];

                  if (speaker.state != _Speaker__WEBPACK_IMPORTED_MODULE_1__["TalkState"].CALLED) {
                    // call without ids
                    speaker.call(null);
                  }
                }
              }, 5000);
              return true;
            }
          }, {
            key: "hangUp",
            value: function hangUp(identifier, force) {
              var speaker = this.speakerMap.get(identifier);

              if (null != speaker) {
                for (var i = 0, size = speaker.identifiers.length; i < size; ++i) {
                  var id = speaker.identifiers[i];
                  this.speakerMap.remove(id);
                }

                if (force) {
                  speaker.destroySocketEvent();
                } // 执行 hang up


                speaker.hangUp();
                var index = -1;

                if ((index = this.speakers.indexOf(speaker)) >= 0) {
                  this.speakers.splice(index, 1);
                }
              }
            } // callback - 数据被发送时回调

          }, {
            key: "talk",
            value: function talk(identifier, mix, callback) {
              if (!this.isCalled(identifier)) {
                this.talkList.push({
                  identifier: identifier,
                  mix: mix,
                  callback: callback
                });
                return;
              }

              if (typeof callback === 'function') callback();
              var speaker = this.speakerMap.get(identifier);

              if (null != speaker) {
                if (undefined !== mix.translate) {
                  // 方言转原语
                  var primitive = mix.translate();

                  if (null != primitive) {
                    return speaker.speak(identifier, primitive);
                  } else {
                    _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].e("TalkService", "Failed translates dialect to primitive.");

                    return false;
                  }
                } else {
                  // 直接操作原语
                  return speaker.speak(identifier, mix);
                }
              } else {
                _Logger__WEBPACK_IMPORTED_MODULE_0__["default"].w("TalkService", "Can not find '" + identifier + "' cellet in speaker.");
              }

              return false;
            }
            /**
            * 将 talk 队列中的数据重新发送
             */

          }, {
            key: "reTalk",
            value: function reTalk() {
              var self = this;
              var list = this.talkList;
              this.talkList = [];
              list.forEach(function (value) {
                self.talk(value.identifier, value.mix, value.callback);
              });
            }
            /**
            * 清除 talk 队列
             */

          }, {
            key: "clearTalkList",
            value: function clearTalkList() {
              this.talkList = [];
            }
          }, {
            key: "getTalkState",
            value: function getTalkState(identifier) {
              var speaker = this.speakerMap.get(identifier);

              if (null != speaker) {
                return speaker.state;
              }

              return _Speaker__WEBPACK_IMPORTED_MODULE_1__["TalkState"].HANGUP;
            }
          }, {
            key: "isCalled",
            value: function isCalled(identifier, timeout) {
              var speaker = this.speakerMap.get(identifier);

              if (null != speaker) {
                if (speaker.state == _Speaker__WEBPACK_IMPORTED_MODULE_1__["TalkState"].CALLED) {
                  if (undefined !== timeout && timeout > 0) {
                    if (speaker.hbSendTime > 0 && speaker.hbReceiveTime > 0) {
                      var d = speaker.hbReceiveTime - speaker.hbSendTime;
                      return d > 0 && d <= timeout;
                    }
                  }

                  return true;
                }
              }

              return false;
            }
          }, {
            key: "getPingPongTime",
            value: function getPingPongTime(identifier) {
              var speaker = this.speakerMap.get(identifier);

              if (null != speaker) {
                return speaker.pingPong;
              }

              return -1;
            }
          }, {
            key: "_tickFunction",
            value: function _tickFunction() {
              var self = this;

              if (self.daemonTimer > 0) {
                clearTimeout(self.daemonTimer);
              }

              self.daemonTimer = setTimeout(function () {
                clearTimeout(self.daemonTimer);
                self.daemonTimer = 0; // 执行任务

                self._exeDaemonTask(); // 循环执行


                self._tickFunction();
              }, self.tickTime);
            }
          }, {
            key: "_exeDaemonTask",
            value: function _exeDaemonTask() {
              // 驱动 Speaker 进行心跳
              if (this.speakers.length > 0) {
                for (var i = 0; i < this.speakers.length; ++i) {
                  this.speakers[i].tick();
                }
              }
            } // 返回单例

          }], [{
            key: "getInstance",
            value: function getInstance() {
              return TalkService.instance;
            }
          }]);

          return TalkService;
        }(_Service__WEBPACK_IMPORTED_MODULE_6__["default"]); // 实例


        TalkService.instance = null;
        /* harmony default export */

        __webpack_exports__["default"] = TalkService;
        /***/
      },
      /* 13 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TalkState", function () {
          return TalkState;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "SpeakerTPT", function () {
          return SpeakerTPT;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Speaker", function () {
          return Speaker;
        });
        /* harmony import */


        var _utils_Ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
        /* harmony import */


        var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
        /* harmony import */


        var _stuff_PrimitiveSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
        /* harmony import */


        var _TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
        /* harmony import */


        var _stuff_Primitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
        /* harmony import */


        var js_base64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
        /* harmony import */


        var js_base64__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/
        __webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */


        var _utils_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
        /* harmony import */


        var _TalkService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2016 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 会话状态。
         */


        var WebSocket = window.WebSocket;
        var TalkState = {
          /** 无对话。 */
          HANGUP: 1,

          /** 正在请求服务。 */
          CALLING: 2,

          /** 已经请求服务。 */
          CALLED: 3
        };
        /**
         * Talk 协议包类型标签。
         */

        var SpeakerTPT = {
          /** 询问。 */
          TPT_INTERROGATE: "interrogate",

          /** 快速握手。 */
          TPT_QUICK: "quick",

          /** 进行原语对话。 */
          TPT_DIALOGUE: "dialogue",

          /** 心跳。 */
          TPT_HEARTBEAT: "hb"
        };
        /**
         * 会话器。
         *
         * @class Speaker
         * @author Jiangwei Xu
         */

        var Speaker =
        /*#__PURE__*/
        function () {
          function Speaker(address, delegate, socketEnabled, worker) {
            _classCallCheck(this, Speaker);

            this.address = address;
            this.delegate = delegate;
            this.identifiers = [];
            this.worker = worker; // 是否使用 WebSocket

            this.wsEnabled = socketEnabled === true; // WebSocket

            this.socket = null; // WebSocket 的发送定时器

            this.sockTimer = 0;
            this.sockSendQueue = []; // 状态

            this.state = TalkState.HANGUP; // 是否授权可访问

            this.authenticated = false; // Ajax 请求句柄

            this.request = null; // Cookie

            this.cookie = null; // 是否采用安全连接

            this.secure = window.location.protocol.toLowerCase().indexOf("https") >= 0; // 密钥

            this.secretKey = null; // 远程服务器 Tag

            this.remoteTag = null; // tick 时间戳

            this.tickTime = new Date(); // 使用 Socket 的心跳间隔是 60 秒，使用 HTTP 的心跳间隔是 10 秒

            this.heartbeat = this.wsEnabled && undefined !== window.WebSocket ? 60 * 1000 : 10 * 1000; // 心跳时间戳

            this.hbSendTime = 0;
            this.hbReceiveTime = 0; // 记录响应时长

            this.ping = 0;
            this.pong = 0;
            this.pingPong = 0;
          }
          /**
           *
           * @memberof Speaker
           * @instance
           */


          _createClass(Speaker, [{
            key: "call",
            value: function call(identifiers) {
              if (this.state !== TalkState.HANGUP) {
                return false;
              }

              if (identifiers) {
                for (var i = 0; i < identifiers.length; ++i) {
                  var identifier = identifiers[i];

                  if (this.identifiers.indexOf(identifier) >= 0) {
                    continue;
                  }

                  this.identifiers.push(identifier);
                }
              }

              if (this.identifiers.length === 0) {
                _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].e("Speaker", "Can not find any cellets to call in param 'identifiers'.");

                return false;
              }

              this.state = TalkState.CALLING;
              this.hbSendTime = 0;
              this.hbReceiveTime = 0;

              if (this.wsEnabled) {
                if (null != this.socket) {
                  this.destroySocketEvent();

                  try {
                    this.socket.close(1000, "Speaker#close");
                  } catch (e) {// Nothing
                  }
                } // WebSocket 的端口号是 HTTP 服务端口号 +1， WebSocket Secure 端口号是 HTTPS 服务端口号 +1


                this.socket = this._createSocket(this.address.getAddress(), this.address.getPort() + 1);
              }

              if (null == this.socket) {
                var self = this;
                this.request = _utils_Ajax__WEBPACK_IMPORTED_MODULE_0__["default"].newCrossDomain(this.address.getAddress(), this.address.getPort()).uri("/talk/int").method("GET").error(self._fireFailed, self).send(function (data, cookie) {
                  self.cookie = cookie;

                  if (undefined !== data.ver && (data.ver == "1.1" || data.ver == "2.0")) {
                    self._respondQuick(data);
                  } else {
                    self._processInterrogation(data);
                  }
                });
              }

              return true;
            }
          }, {
            key: "hangUp",
            value: function hangUp() {
              // TODO 发送 hang up 到服务器
              if (this.sockTimer > 0) {
                clearTimeout(this.sockTimer);
                this.sockTimer = 0;
              }

              if (null != this.socket) {
                try {
                  this.socket.close(1000, "Speaker#close");
                } catch (e) {
                  _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].e("Speaker", "Close socket has exception.");
                }

                this.socket = null;
                this.sockSendQueue = [];
              }

              this.state = TalkState.HANGUP;
              this.remoteTag = null;
              this.hbSendTime = 0;
              this.hbReceiveTime = 0;

              _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].d("Speaker", "Hang up call.");
            }
          }, {
            key: "speak",
            value: function speak(identifier, primitive) {
              if (this.state != TalkState.CALLED) {
                return false;
              }

              if (this.identifiers.indexOf(identifier) < 0) {
                // 没有找到对应请求的 Cellet
                return false;
              }

              var self = this; // 原语 JSON

              var primJSON = {}; // 将原语写入 JSON 对象

              _stuff_PrimitiveSerializer__WEBPACK_IMPORTED_MODULE_2__["default"].write(primJSON, primitive);

              var content = {
                "tag": this.worker.tag.toString(),
                "identifier": identifier,
                "primitive": primJSON
              };

              if (null != this.socket) {
                var data = {
                  "tpt": SpeakerTPT.TPT_DIALOGUE,
                  "packet": content
                }; // 将数据写入队列

                this.sockSendQueue.push(JSON.stringify(data)); // 如果没有发送任务，则启动发送任务。

                if (this.sockTimer == 0) {
                  this.sockTimer = setTimeout(function () {
                    self._sockHandleSend();
                  }, 20);
                } //this.socket.send(JSON.stringify(data));


                if (this.ping == 0) {
                  this.ping = Date.now();
                }
              } else {
                self.request = _utils_Ajax__WEBPACK_IMPORTED_MODULE_0__["default"].newCrossDomain(self.address.getAddress(), self.address.getPort()).uri("/talk/dialogue").method("POST").cookie(self.cookie).content(content).error(self._fireFailed, self).send(function (data) {
                  /* 数据样本:
                  {"primitives":
                     [
                  	 {
                  	   "primitive": {"stuffs":[{"value":"This is a test.","type":"sub","literal":"string"}], "version":"1.0"}
                  	   , "identifier": "DummeyCellet"
                  	 }
                     ]
                  }
                  */
                  var primitives = data.primitives;

                  if (undefined !== primitives) {
                    // 解析数据
                    for (var i = 0; i < primitives.length; ++i) {
                      var item = primitives[i];

                      self._doDialogue(item.identifier, item.primitive);
                    }
                  } else if (parseInt(data.queue) > 0) {
                    self.tick();
                  }

                  if (self.pong == 0) {
                    self.pong = Date.now();

                    if (self.ping > 0) {
                      self.pingPong = self.pong - self.ping;
                    }
                  }
                });

                if (self.ping == 0) {
                  self.ping = Date.now();
                }
              }

              return true;
            }
          }, {
            key: "tick",
            value: function tick() {
              if (this.state !== TalkState.CALLED) {
                return;
              }

              var self = this;
              var time = new Date();

              if (time.getTime() - self.tickTime.getTime() < self.heartbeat) {
                return;
              } // 重置 ping-pong


              if (this.ping > 0) {
                this.ping = 0;
                this.pong = 0;
              }

              self.tickTime = time;

              if (null !== self.socket) {
                var data = {
                  tpt: SpeakerTPT.TPT_HEARTBEAT
                }; // 记录心跳发送时间

                self.hbSendTime = time.getTime();

                _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].i("Speaker", "Heartbeat to keep alive");

                self.socket.send(JSON.stringify(data)); // 5秒后如果还未收到心跳回包, 则尝试再次发送, 若依旧失败, 则直接关闭连接

                var tickCheck = function tickCheck(times) {
                  setTimeout(function () {
                    if (self.hbReceiveTime <= time.getTime()) {
                      if (times > 0) {
                        self.destroySocketEvent();
                        self.hangUp();

                        self._onSocketError(self.socket);

                        self._onSocketClose(self.socket);
                      } else {
                        self.socket && self.socket.send(JSON.stringify(data));
                        tickCheck(++times);
                      }
                    }
                  }, 5000);
                };

                tickCheck(0);
              } else {
                // 记录心跳发送时间
                self.hbSendTime = time.getTime(); // 请求心跳

                self.request = _utils_Ajax__WEBPACK_IMPORTED_MODULE_0__["default"].newCrossDomain(self.address.getAddress(), self.address.getPort()).uri("/talk/hb").method("GET").cookie(self.cookie).error(self._fireFailed, self).send(function (data) {
                  /* 数据样本:
                  {"primitives":
                     [
                  	 {
                  	   "primitive": {"stuffs":[{"value":"This is a test.","type":"sub","literal":"string"}], "version":"1.0"}
                  	   , "identifier": "DummeyCellet"
                  	 }
                     ]
                  }
                  */
                  self.hbReceiveTime = Date.now();
                  var primitives = data.primitives;

                  if (undefined !== primitives) {
                    // 解析数据
                    for (var i = 0; i < primitives.length; ++i) {
                      var item = primitives[i];

                      self._doDialogue(item.identifier, item.primitive);
                    }
                  }
                });
              }
            }
          }, {
            key: "_createSocket",
            value: function _createSocket(address, port) {
              // 微信代码, 暂时保存
              // let WebSocket = null;
              // if (window.WebSocket) {
              //     WebSocket = window.WebSocket;
              // }else if(window.wx){
              //     WebSocket = function (url, protocols) {
              //         if (typeof protocols === 'string') protocols = [protocols];
              //         wx.connectSocket({
              //             url: url,
              //             protocols: protocols
              //         });
              //         wx.onSocketOpen(function (event) {
              //             self._onSocketOpen(WebSocket, event);
              //         });
              //         wx.onSocketMessage(function (event) {
              //             self._onSocketMessage(WebSocket, event);
              //         });
              //         wx.onSocketClose(function (event) {
              //             self._onSocketClose(WebSocket, event);
              //         });
              //         wx.onSocketError(function (event) {
              //             self._onSocketError(WebSocket, event);
              //         });
              //     };
              //     WebSocket.prototype.onclose = function () { };
              //     WebSocket.prototype.onerror = function () { };
              //     WebSocket.prototype.onmessage = function () { };
              //     WebSocket.prototype.onopen = function () { };
              //     WebSocket.prototype.close = function (code, reason) {
              //         wx.closeSocket({
              //             code: code,
              //             reason: reason
              //         });
              //     };
              //     WebSocket.prototype.send = function (data) {
              //         wx.sendSocketMessage({
              //             data: data,
              //             success: function () { },
              //             fail: this.onerror
              //         });
              //     };
              // }else {
              //     return null;
              // }
              var self = this;
              var socket = null;

              if (self.secure) {
                socket = new WebSocket("wss://" + "test-license.shixincube.cn" + ":" + 7443 + "/wss", "cell");
              } else {
                socket = new WebSocket("wss://" + "test-license.shixincube.cn" + ":" + 7443 + "/wss", "cell");
              }

              // if (self.secure) {
              //   if (port) {
              //     socket = new WebSocket("wss://" + address + ":" + port + "/wss/", "cell");
              //   } else {
              //     socket = new WebSocket("wss://" + address + "/wss/", "cell");
              //   }
              // } else {
              //   if (port) {
              //     socket = new WebSocket("ws://" + address + ":" + port + "/ws/", "cell");
              //   } else {
              //     socket = new WebSocket("ws://" + address + "/ws/", "cell");
              //   }
              // }

              socket.onopen = function (e) {
                return self._onSocketOpen(socket, e);
              };

              socket.onclose = function (e) {
                return self._onSocketClose(socket, e);
              };

              socket.onerror = function (e) {
                return self._onSocketError(socket, e);
              };

              socket.onmessage = function (e) {
                return self._onSocketMessage(socket, e);
              };

              return socket;
            } // 用于销毁当前 socket 事件 (避免旧socket影响新的socket)

          }, {
            key: "destroySocketEvent",
            value: function destroySocketEvent() {
              this.socket = null;
              this.socket.onopen = null;
              this.socket.onclose = null;
              this.socket.onmessage = null;
              this.socket.onerror = null;
            }
          }, {
            key: "_onSocketOpen",
            value: function _onSocketOpen(socket, event) {
              _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].d('Speaker', '_onSocketOpen');
            }
          }, {
            key: "_onSocketClose",
            value: function _onSocketClose(socket, event) {
              _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].d('Speaker', '_onSocketClose');

              if (this.state === TalkState.CALLED) {
                for (var i = 0; i < this.identifiers.length; ++i) {
                  this._fireQuitted(this.identifiers[i]);
                }
              } else {
                this._fireFailed(this.socket, _utils_Ajax__WEBPACK_IMPORTED_MODULE_0__["HttpErrorCode"].STATUS_ERROR);
              }

              this.state = TalkState.HANGUP;
              this.remoteTag = null;
            }
          }, {
            key: "_onSocketMessage",
            value: function _onSocketMessage(socket, event) {
              //Logger.d('Speaker', '_onSocketMessage: ' + event.data);
              var data = JSON.parse(event.data);

              if (data.tpt === SpeakerTPT.TPT_DIALOGUE) {
                // 记录 pong
                if (this.pong == 0) {
                  this.pong = Date.now();

                  if (this.ping > 0) {
                    this.pingPong = this.pong - this.ping;
                  }
                }

                if (undefined !== data.packet.primitive) {
                  this._doDialogue(data.packet.identifier, data.packet.primitive);
                } else if (undefined !== data.packet.primitives) {
                  // 解析数据
                  for (var i = 0, size = data.packet.primitives.length; i < size; ++i) {
                    var item = data.packet.primitives[i];

                    this._doDialogue(item.identifier, item.primitive);
                  }
                }
              } else if (data.tpt === SpeakerTPT.TPT_QUICK) {
                this._doQuick(data.packet);
              } else if (data.tpt === SpeakerTPT.TPT_HEARTBEAT) {
                this.hbReceiveTime = Date.now();
              } else if (data.tpt === SpeakerTPT.TPT_INTERROGATE) {
                if (undefined !== data.ver && (data.ver == "1.1" || data.ver == "2.0")) {
                  this._respondQuick(data.packet);
                } else {
                  this._processInterrogation(data.packet);
                }
              } else if (data.tpt === "request") {
                this._doRequest(data.packet);
              } else if (data.tpt === "check") {
                this.remoteTag = data.packet.tag;

                this._requestCellets();
              } else if (data.tpt === "cb") {//TODO
              } else {
                _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].e('Speaker', 'Unknown message received');
              }
            }
          }, {
            key: "_onSocketError",
            value: function _onSocketError(socket, event) {
              _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].d('Speaker', '_onSocketError');

              this._fireFailed(this.socket, _utils_Ajax__WEBPACK_IMPORTED_MODULE_0__["HttpErrorCode"].NETWORK_FAILED);
            }
          }, {
            key: "_sockHandleSend",
            value: function _sockHandleSend() {
              clearTimeout(this.sockTimer);
              this.sockTimer = 0;

              if (this.sockSendQueue.length === 0 || null === this.socket) {
                return;
              } // 取出第一个数据进行发送


              var data = this.sockSendQueue.shift(); // 发送

              this.socket.send(data);

              if (this.sockSendQueue.length > 0) {
                var self = this;
                this.sockTimer = setTimeout(function () {
                  self._sockHandleSend();
                }, 20);
              }
            }
          }, {
            key: "_processInterrogation",
            value: function _processInterrogation(data) {
              var ciphertextBase64 = data.ciphertext; // string

              var key = data.key; // string

              var ciphertext = js_base64__WEBPACK_IMPORTED_MODULE_5__["Base64"].decode(ciphertextBase64); // string - bytes
              // 记录密钥

              this.secretKey = key; // 请求 Check

              this._requestCheck(ciphertext, key);
            }
          }, {
            key: "_requestCheck",
            value: function _requestCheck(ciphertext, key) {
              // 解密
              var plaintext = _utils_Utils__WEBPACK_IMPORTED_MODULE_6__["default"].simpleDecrypt(ciphertext, key); // array - string
              // 将解密之后的数组转为字符串形式


              var text = [];

              for (var i = 0; i < plaintext.length; ++i) {
                text.push(String.fromCharCode(plaintext[i]));
              }

              text = text.join('');
              var tag = window.nucleus.tag;
              var content = {
                "plaintext": text,
                "tag": tag
              };

              if (null !== this.socket) {
                var data = {
                  tpt: "check",
                  packet: content
                };
                this.socket.send(JSON.stringify(data));
              } else {
                var self = this;
                self.request = _utils_Ajax__WEBPACK_IMPORTED_MODULE_0__["default"].newCrossDomain(self.address.getAddress(), self.address.getPort()).uri("/talk/check").method("POST").cookie(self.cookie).content(content).error(self._fireFailed, self).send(function (data) {
                  // Tag
                  self.remoteTag = data.tag;

                  self._requestCellets();
                });
              }
            }
          }, {
            key: "_respondQuick",
            value: function _respondQuick(data) {
              _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].d('Speaker', "Use 'QUICK' handshake");

              var ciphertextBase64 = data.ciphertext; // string

              var key = data.key; // string

              var ciphertext = js_base64__WEBPACK_IMPORTED_MODULE_5__["Base64"].decode(ciphertextBase64); // string - bytes
              // 记录密钥

              this.secretKey = key; // 解密

              var plaintext = _utils_Utils__WEBPACK_IMPORTED_MODULE_6__["default"].simpleDecrypt(ciphertext, key); // array - string
              // 将解密之后的数组转为字符串形式


              var text = [];

              for (var i = 0; i < plaintext.length; ++i) {
                text.push(String.fromCharCode(plaintext[i]));
              }

              text = text.join('');
              var tag = this.worker.tag.toString(); // 生成 Cellet 标识数组

              var idArray = [];

              for (var _i = 0; _i < this.identifiers.length; ++_i) {
                var identifier = this.identifiers[_i];
                idArray.push(identifier.toString());
              } // 明文，源标签，CelletIdentifiers


              var content = {
                "plaintext": text,
                "tag": tag,
                "identifiers": idArray
              };

              if (null !== this.socket) {
                var d = {
                  tpt: "quick",
                  packet: content
                };
                this.socket.send(JSON.stringify(d));
              } else {
                var self = this;
                self.request = _utils_Ajax__WEBPACK_IMPORTED_MODULE_0__["default"].newCrossDomain(self.address.getAddress(), self.address.getPort()).uri("/talk/quick").method("POST").cookie(self.cookie).content(content).error(self._fireFailed, self).send(function (data) {
                  self._doQuick(data);
                });
              }
            }
          }, {
            key: "_requestCellets",
            value: function _requestCellets() {
              var tag = this.worker.tag.toString();

              for (var i = 0; i < this.identifiers.length; ++i) {
                var identifier = this.identifiers[i];
                var content = {
                  "identifier": identifier.toString(),
                  "tag": tag
                };

                if (null !== this.socket) {
                  var data = {
                    tpt: "request",
                    packet: content
                  };
                  this.socket.send(JSON.stringify(data));
                } else {
                  var self = this;
                  self.request = _utils_Ajax__WEBPACK_IMPORTED_MODULE_0__["default"].newCrossDomain(self.address.getAddress(), self.address.getPort()).uri("/talk/request").method("POST").cookie(self.cookie).content(content).error(self._fireFailed, self).send(function (data) {
                    self._doRequest(data);
                  });
                }
              }
            }
          }, {
            key: "_doRequest",
            value: function _doRequest(data) {
              if (undefined !== data.error) {
                // 回调失败
                var failure = new _TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["default"](_TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["TalkFailureCode"].NOTFOUND_CELLET, "Speaker");
                failure.setSourceDescription("Can not find cellet '" + data.identifier + "'");
                failure.setSourceCelletIdentifiers(this.identifiers);
                this.state = TalkState.HANGUP; // 更新状态
                // 回调失败

                this.delegate.onFailed(this, failure);
              } else {
                if (this.state === TalkState.HANGUP) {
                  // 已经有失败的请求，则不再记录成功的请求
                  return;
                }

                _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].i("Speaker", "Cellet '" + data.identifier + "' has called at " + this.address.getAddress() + ":" + (this.address.getPort() + (null !== this.socket ? this.secure ? 7 : 1 : 0))); // 更新状态


                this.state = TalkState.CALLED; // 回调事件

                this._fireContacted(data.identifier);
              }
            }
          }, {
            key: "_doQuick",
            value: function _doQuick(data) {
              if (this.state === TalkState.HANGUP) {
                // 已经有失败的请求，则不再记录成功的请求
                return;
              } // tag


              var tag = data.tag; // identifiers

              var identifiers = data.identifiers; // 判断是否错误

              if (undefined === data.error) {
                // 记录 tag
                this.remoteTag = tag.toString(); // 更新状态

                this.state = TalkState.CALLED; // 将 talk 队列立即处理

                _TalkService__WEBPACK_IMPORTED_MODULE_7__["default"].instance.reTalk();

                for (var i = 0; i < identifiers.length; ++i) {
                  var identifier = identifiers[i];

                  _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].i("Speaker", "Cellet '" + identifier + "' has called at " + this.address.getAddress() + ":" + (this.address.getPort() + (null !== this.socket ? this.secure ? 7 : 1 : 0))); // 回调事件


                  this._fireContacted(identifier);
                }
              } else {
                // 回调失败
                var failure = new _TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["default"](_TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["TalkFailureCode"].NOTFOUND_CELLET, "Speaker");
                failure.setSourceDescription("Can not find cellet '" + identifiers.toString() + "'");
                failure.setSourceCelletIdentifiers(this.identifiers);
                this.state = TalkState.HANGUP; // 更新状态
                // 回调失败

                this.delegate.onFailed(this, failure);
              }
            }
          }, {
            key: "_doDialogue",
            value: function _doDialogue(identifier, primitiveJson) {
              // 创建原语
              var primitive = new _stuff_Primitive__WEBPACK_IMPORTED_MODULE_4__["default"](this.remoteTag);
              primitive.setCelletIdentifier(identifier); // 读取数据

              _stuff_PrimitiveSerializer__WEBPACK_IMPORTED_MODULE_2__["default"].read(primitive, primitiveJson);

              this._fireDialogue(identifier, primitive);
            }
          }, {
            key: "_fireDialogue",
            value: function _fireDialogue(identifier, primitive) {
              this.delegate.onDialogue(this, identifier, primitive);
            }
          }, {
            key: "_fireContacted",
            value: function _fireContacted(identifier) {
              var self = this;
              var celletIdentifier = identifier.toString();
              var t = setTimeout(function () {
                clearTimeout(t);
                self.delegate.onContacted(self, celletIdentifier);
              }, 60);
            }
          }, {
            key: "_fireQuitted",
            value: function _fireQuitted(identifier) {
              this.delegate.onQuitted(this, identifier);
            }
          }, {
            key: "_fireFailed",
            value: function _fireFailed(handler, code) {
              var failure = null;

              if (code == _utils_Ajax__WEBPACK_IMPORTED_MODULE_0__["HttpErrorCode"].NETWORK_FAILED) {
                if (this.state === TalkState.CALLING) {
                  failure = new _TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["default"](_TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["TalkFailureCode"].CALL_FAILED, "Speaker");
                  failure.setSourceDescription("Attempt to connect to host timed out");
                } else {
                  failure = new _TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["default"](_TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["TalkFailureCode"].TALK_LOST, "Speaker");
                  failure.setSourceDescription("Attempt to connect to host timed out");
                } // 更新状态


                this.state = TalkState.HANGUP;
              } else if (code == _utils_Ajax__WEBPACK_IMPORTED_MODULE_0__["HttpErrorCode"].STATUS_ERROR) {
                if (this.state === TalkState.CALLING) {
                  failure = new _TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["default"](_TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["TalkFailureCode"].CALL_FAILED, "Speaker");
                  failure.setSourceDescription("Http status error");
                } else {
                  failure = new _TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["default"](_TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["TalkFailureCode"].TALK_LOST, "Speaker");
                  failure.setSourceDescription("Http status error");
                } // 更新状态


                this.state = TalkState.HANGUP;
              } else {
                failure = new _TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["default"](_TalkServiceFailure__WEBPACK_IMPORTED_MODULE_3__["TalkFailureCode"].UNKNOWN, "Speaker");
                failure.setSourceDescription("Unknown"); // 更新状态

                this.state = TalkState.HANGUP;
              } // 设置 cellet identifier


              failure.setSourceCelletIdentifiers(this.identifiers);
              this.delegate.onFailed(this, failure);
            }
          }]);

          return Speaker;
        }();
        /* harmony default export */


        __webpack_exports__["default"] = Speaker;
        /***/
      },
      /* 14 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "PrimitiveSerializer", function () {
          return PrimitiveSerializer;
        });
        /* harmony import */


        var _Stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
        /* harmony import */


        var _SubjectStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
        /* harmony import */


        var _PredicateStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
        /* harmony import */


        var _ObjectiveStuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
        /* harmony import */


        var _AdverbialStuff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
        /* harmony import */


        var _AttributiveStuff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
        /* harmony import */


        var _ComplementStuff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
        /* harmony import */


        var _dialect_DialectEnumerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
        /* harmony import */


        var _Logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /*eslint no-redeclare: 0*/

        /**
         * 原语序列化器。
         *
         * @author Jiangwei Xu
         */


        var PrimitiveSerializer = {
          STUFFTYPE_SUBJECT: "sub",
          STUFFTYPE_PREDICATE: "pre",
          STUFFTYPE_OBJECTIVE: "obj",
          STUFFTYPE_ADVERBIAL: "adv",
          STUFFTYPE_ATTRIBUTIVE: "att",
          STUFFTYPE_COMPLEMENT: "com",
          LITERALBASE_STRING: "string",
          LITERALBASE_INT: "int",
          LITERALBASE_UINT: "uint",
          LITERALBASE_LONG: "long",
          LITERALBASE_ULONG: "ulong",
          LITERALBASE_FLOAT: "float",
          LITERALBASE_BOOL: "bool",
          LITERALBASE_JSON: "json",
          LITERALBASE_XML: "xml",
          KEY_VERSION: "version",
          KEY_STUFFS: "stuffs",
          KEY_STUFFTYPE: "type",
          KEY_STUFFVALUE: "value",
          KEY_LITERALBASE: "literal",
          KEY_DIALECT: "dialect",
          KEY_NAME: "name",
          KEY_TRACKER: "tracker",
          read: function read(output, json) {
            var stuffs = json[this.KEY_STUFFS];

            for (var i = 0; i < stuffs.length; ++i) {
              var stuffJSON = stuffs[i];
              var type = stuffJSON[this.KEY_STUFFTYPE];

              if (type == this.STUFFTYPE_SUBJECT) {
                var subject = new _SubjectStuff__WEBPACK_IMPORTED_MODULE_1__["default"]();

                this._readValue(subject, stuffJSON);

                output.commit(subject);
              } else if (type == this.STUFFTYPE_PREDICATE) {
                var predicate = new _PredicateStuff__WEBPACK_IMPORTED_MODULE_2__["default"]();

                this._readValue(predicate, stuffJSON);

                output.commit(predicate);
              } else if (type == this.STUFFTYPE_OBJECTIVE) {
                var objective = new _ObjectiveStuff__WEBPACK_IMPORTED_MODULE_3__["default"]();

                this._readValue(objective, stuffJSON);

                output.commit(objective);
              } else if (type == this.STUFFTYPE_ADVERBIAL) {
                var adverbial = new _AdverbialStuff__WEBPACK_IMPORTED_MODULE_4__["default"]();

                this._readValue(adverbial, stuffJSON);

                output.commit(adverbial);
              } else if (type == this.STUFFTYPE_ATTRIBUTIVE) {
                var attributive = new _AttributiveStuff__WEBPACK_IMPORTED_MODULE_5__["default"]();

                this._readValue(attributive, stuffJSON);

                output.commit(attributive);
              } else if (type == this.STUFFTYPE_COMPLEMENT) {
                var complement = new _ComplementStuff__WEBPACK_IMPORTED_MODULE_6__["default"]();

                this._readValue(complement, stuffJSON);

                output.commit(complement);
              }
            } // 解析方言


            var dialect = json[this.KEY_DIALECT];

            if (dialect !== undefined) {
              var dialectName = dialect[this.KEY_NAME];
              var tracker = dialect[this.KEY_TRACKER]; // 创建方言

              var dialect1 = _dialect_DialectEnumerator__WEBPACK_IMPORTED_MODULE_7__["default"].getInstance().createDialect(dialectName, tracker);

              if (null != dialect1) {
                // 关联
                output.capture(dialect1); // 构建数据

                dialect1.build(output);
              } else {
                _Logger__WEBPACK_IMPORTED_MODULE_8__["default"].w("PrimitiveSerializer", "Can't create '" + dialectName + "' dialect.");
              }
            }
          },
          write: function write(output, primitive) {
            output[this.KEY_VERSION] = "1.0";
            var stuffs = [];
            var subjects = primitive.subjects();

            if (null != subjects) {
              for (var i = 0; i < subjects.length; ++i) {
                var s = {};
                s[this.KEY_STUFFTYPE] = this.STUFFTYPE_SUBJECT; // 写入值

                this._writeValue(s, subjects[i]);

                stuffs.push(s);
              }
            }

            var predicates = primitive.predicates();

            if (null != predicates) {
              for (var i = 0; i < predicates.length; ++i) {
                var p = {};
                p[this.KEY_STUFFTYPE] = this.STUFFTYPE_PREDICATE; // 写入值

                this._writeValue(p, predicates[i]);

                stuffs.push(p);
              }
            }

            var objectives = primitive.objectives();

            if (null != objectives) {
              for (var i = 0; i < objectives.length; ++i) {
                var o = {};
                o[this.KEY_STUFFTYPE] = this.STUFFTYPE_OBJECTIVE; // 写入值

                this._writeValue(o, objectives[i]);

                stuffs.push(o);
              }
            }

            var adverbials = primitive.adverbials();

            if (null != adverbials) {
              for (var i = 0; i < adverbials.length; ++i) {
                var a = {};
                a[this.KEY_STUFFTYPE] = this.STUFFTYPE_ADVERBIAL; // 写入值

                this._writeValue(a, adverbials[i]);

                stuffs.push(a);
              }
            }

            var attributives = primitive.attributives();

            if (null != attributives) {
              for (var i = 0; i < attributives.length; ++i) {
                var a = {};
                a[this.KEY_STUFFTYPE] = this.STUFFTYPE_ATTRIBUTIVE; // 写入值

                this._writeValue(a, attributives[i]);

                stuffs.push(a);
              }
            }

            var complements = primitive.complements();

            if (null != complements) {
              for (var i = 0; i < complements.length; ++i) {
                var c = {};
                c[this.KEY_STUFFTYPE] = this.STUFFTYPE_COMPLEMENT; // 写入值

                this._writeValue(c, complements[i]);

                stuffs.push(c);
              }
            } // 输出语素数组


            output[this.KEY_STUFFS] = stuffs; // 方言

            var dialect = primitive.getDialect();

            if (null != dialect) {
              var obj = {};
              obj[this.KEY_NAME] = dialect.getName();
              obj[this.KEY_TRACKER] = dialect.getTracker(); // 添加方言数据

              output[this.KEY_DIALECT] = obj;
            }
          },
          _readValue: function _readValue(output, json) {
            output.setValue(json[this.KEY_STUFFVALUE]);
            var literal = json[this.KEY_LITERALBASE];

            if (literal == this.LITERALBASE_STRING) {
              output.setLiteralBase(_Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].STRING);
            } else if (literal == this.LITERALBASE_INT || literal == this.LITERALBASE_UINT) {
              output.setLiteralBase(_Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].INT);
            } else if (literal == this.LITERALBASE_LONG || literal == this.LITERALBASE_ULONG) {
              output.setLiteralBase(_Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].LONG);
            } else if (literal == this.LITERALBASE_BOOL) {
              output.setLiteralBase(_Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].BOOL);
            } else if (literal == this.LITERALBASE_FLOAT) {
              output.setLiteralBase(_Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].FLOAT);
            } else if (literal == this.LITERALBASE_JSON) {
              output.setLiteralBase(_Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].JSON);
            } else if (literal == this.LITERALBASE_XML) {
              output.setLiteralBase(_Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].XML);
            }
          },
          _writeValue: function _writeValue(output, stuff) {
            // 值
            output[this.KEY_STUFFVALUE] = stuff.value; // 字面义

            switch (stuff.literalBase) {
              case _Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].STRING:
                output[this.KEY_LITERALBASE] = this.LITERALBASE_STRING;
                break;

              case _Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].INT:
                output[this.KEY_LITERALBASE] = this.LITERALBASE_INT;
                break;

              case _Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].LONG:
                output[this.KEY_LITERALBASE] = this.LITERALBASE_LONG;
                break;

              case _Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].FLOAT:
                output[this.KEY_LITERALBASE] = this.LITERALBASE_FLOAT;
                break;

              case _Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].BOOL:
                output[this.KEY_LITERALBASE] = this.LITERALBASE_BOOL;
                break;

              case _Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].JSON:
                output[this.KEY_LITERALBASE] = this.LITERALBASE_JSON;
                break;

              case _Stuff__WEBPACK_IMPORTED_MODULE_0__["LiteralBase"].XML:
                output[this.KEY_LITERALBASE] = this.LITERALBASE_XML;
                break;

              default:
                break;
            }
          }
        };
        /* harmony default export */

        __webpack_exports__["default"] = PrimitiveSerializer;
        /***/
      },
      /* 15 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "StuffType", function () {
          return StuffType;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "LiteralBase", function () {
          return LiteralBase;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Stuff", function () {
          return Stuff;
        });

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 语素类型。
         * @author Jiangwei Xu
         */


        var StuffType = {
          /** 主语 */
          SUBJECT: 1,

          /** 谓语 */
          PREDICATE: 2,

          /** 宾语 */
          OBJECTIVE: 3,

          /** 定语 */
          ATTRIBUTIVE: 4,

          /** 状语 */
          ADVERBIAL: 5,

          /** 补语 */
          COMPLEMENT: 6
        };
        /**
         * 变量字面意义。
         * @author Jiangwei Xu
         */

        var LiteralBase = {
          /** 字符串型。*/
          STRING: 1,

          /** 整数型。*/
          INT: 2,

          /** 长整数型。*/
          LONG: 3,

          /** 浮点类型。*/
          FLOAT: 4,

          /** 布尔型。*/
          BOOL: 5,

          /** JSON 类型。*/
          JSON: 6,

          /** XML 类型。*/
          XML: 7
        };
        /**
         */

        var Stuff =
        /*#__PURE__*/
        function () {
          function Stuff(type, value, literalBase) {
            _classCallCheck(this, Stuff);

            this.type = type;
            this.value = null;
            this.literalBase = null;

            if (value !== undefined) {
              this.value = value;

              if (literalBase === undefined) {
                var vt = _typeof(value);

                if (vt == 'string') {
                  this.literalBase = LiteralBase.STRING;
                } else if (vt == 'number') {
                  var reg = /^-?\d+$/;

                  if (reg.test(value.toString())) {
                    this.literalBase = LiteralBase.LONG;
                  } else {
                    this.literalBase = LiteralBase.FLOAT;
                  }
                } else if (vt == 'boolean') {
                  this.literalBase = LiteralBase.BOOL;
                } else if (vt == 'object') {
                  this.literalBase = LiteralBase.JSON;
                }
              }
            }

            if (literalBase !== undefined) {
              this.literalBase = literalBase;
            }
          } // 抽象方法，子类必须覆盖


          _createClass(Stuff, [{
            key: "clone",
            value: function clone(target) {// Nothing
            }
          }, {
            key: "getType",
            value: function getType() {
              return this.type;
            }
          }, {
            key: "getValue",
            value: function getValue() {
              return this.value;
            }
          }, {
            key: "getValueAsString",
            value: function getValueAsString() {
              if (typeof this.value == 'string') {
                return this.value;
              } else {
                return this.value.toString();
              }
            }
          }, {
            key: "getValueAsNumber",
            value: function getValueAsNumber() {
              return Number(this.value);
            }
          }, {
            key: "getValueAsBool",
            value: function getValueAsBool() {
              return Boolean(this.value);
            }
          }, {
            key: "getLiteralBase",
            value: function getLiteralBase() {
              return this.literalBase;
            }
          }, {
            key: "setValue",
            value: function setValue(value) {
              this.value = value;
            }
          }, {
            key: "setLiteralBase",
            value: function setLiteralBase(literalBase) {
              this.literalBase = literalBase;
            }
          }]);

          return Stuff;
        }();
        /* harmony default export */


        __webpack_exports__["default"] = Stuff;
        /***/
      },
      /* 16 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "SubjectStuff", function () {
          return SubjectStuff;
        });
        /* harmony import */


        var _Stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 主语语素。
         * @author Jiangwei Xu
         */


        var SubjectStuff =
        /*#__PURE__*/
        function (_Stuff) {
          _inherits(SubjectStuff, _Stuff);

          function SubjectStuff(value, literalBase) {
            _classCallCheck(this, SubjectStuff);

            return _possibleConstructorReturn(this, _getPrototypeOf(SubjectStuff).call(this, _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].SUBJECT, value, literalBase));
          }

          _createClass(SubjectStuff, [{
            key: "clone",
            value: function clone(target) {
              if (target.type == _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].SUBJECT) {
                target.value = this.value;
                target.literalBase = this.literalBase;
              }
            }
          }]);

          return SubjectStuff;
        }(_Stuff__WEBPACK_IMPORTED_MODULE_0__["default"]);
        /* harmony default export */


        __webpack_exports__["default"] = SubjectStuff;
        /***/
      },
      /* 17 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "PredicateStuff", function () {
          return PredicateStuff;
        });
        /* harmony import */


        var _Stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 谓语语素。
         * @author Jiangwei Xu
         */


        var PredicateStuff =
        /*#__PURE__*/
        function (_Stuff) {
          _inherits(PredicateStuff, _Stuff);

          function PredicateStuff(value, literalBase) {
            _classCallCheck(this, PredicateStuff);

            return _possibleConstructorReturn(this, _getPrototypeOf(PredicateStuff).call(this, _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].PREDICATE, value, literalBase));
          }

          _createClass(PredicateStuff, [{
            key: "clone",
            value: function clone(target) {
              if (target.type == _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].PREDICATE) {
                target.value = this.value;
                target.literalBase = this.literalBase;
              }
            }
          }]);

          return PredicateStuff;
        }(_Stuff__WEBPACK_IMPORTED_MODULE_0__["default"]);
        /* harmony default export */


        __webpack_exports__["default"] = PredicateStuff;
        /***/
      },
      /* 18 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ObjectiveStuff", function () {
          return ObjectiveStuff;
        });
        /* harmony import */


        var _Stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 宾语语素。
         * @author Jiangwei Xu
         */


        var ObjectiveStuff =
        /*#__PURE__*/
        function (_Stuff) {
          _inherits(ObjectiveStuff, _Stuff);

          function ObjectiveStuff(value, literalBase) {
            _classCallCheck(this, ObjectiveStuff);

            return _possibleConstructorReturn(this, _getPrototypeOf(ObjectiveStuff).call(this, _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].OBJECTIVE, value, literalBase));
          }

          _createClass(ObjectiveStuff, [{
            key: "clone",
            value: function clone(target) {
              if (target.type == _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].OBJECTIVE) {
                target.value = this.value;
                target.literalBase = this.literalBase;
              }
            }
          }]);

          return ObjectiveStuff;
        }(_Stuff__WEBPACK_IMPORTED_MODULE_0__["default"]);
        /* harmony default export */


        __webpack_exports__["default"] = ObjectiveStuff;
        /***/
      },
      /* 19 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "AdverbialStuff", function () {
          return AdverbialStuff;
        });
        /* harmony import */


        var _Stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 状语语素。
         * @author Jiangwei Xu
         */


        var AdverbialStuff =
        /*#__PURE__*/
        function (_Stuff) {
          _inherits(AdverbialStuff, _Stuff);

          function AdverbialStuff(value, literalBase) {
            _classCallCheck(this, AdverbialStuff);

            return _possibleConstructorReturn(this, _getPrototypeOf(AdverbialStuff).call(this, _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].ADVERBIAL, value, literalBase));
          }

          _createClass(AdverbialStuff, [{
            key: "clone",
            value: function clone(target) {
              if (target.type == _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].ADVERBIAL) {
                target.value = this.value;
                target.literalBase = this.literalBase;
              }
            }
          }]);

          return AdverbialStuff;
        }(_Stuff__WEBPACK_IMPORTED_MODULE_0__["default"]);
        /* harmony default export */


        __webpack_exports__["default"] = AdverbialStuff;
        /***/
      },
      /* 20 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "AttributiveStuff", function () {
          return AttributiveStuff;
        });
        /* harmony import */


        var _Stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 定语语素。
         * @author Jiangwei Xu
         */


        var AttributiveStuff =
        /*#__PURE__*/
        function (_Stuff) {
          _inherits(AttributiveStuff, _Stuff);

          function AttributiveStuff(value, literalBase) {
            _classCallCheck(this, AttributiveStuff);

            return _possibleConstructorReturn(this, _getPrototypeOf(AttributiveStuff).call(this, _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].ATTRIBUTIVE, value, literalBase));
          }

          _createClass(AttributiveStuff, [{
            key: "clone",
            value: function clone(target) {
              if (target.type == _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].ATTRIBUTIVE) {
                target.value = this.value;
                target.literalBase = this.literalBase;
              }
            }
          }]);

          return AttributiveStuff;
        }(_Stuff__WEBPACK_IMPORTED_MODULE_0__["default"]);
        /* harmony default export */


        __webpack_exports__["default"] = AttributiveStuff;
        /***/
      },
      /* 21 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ComplementStuff", function () {
          return ComplementStuff;
        });
        /* harmony import */


        var _Stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 补语语素。
         * @author Jiangwei Xu
         */


        var ComplementStuff =
        /*#__PURE__*/
        function (_Stuff) {
          _inherits(ComplementStuff, _Stuff);

          function ComplementStuff(value, literalBase) {
            _classCallCheck(this, ComplementStuff);

            return _possibleConstructorReturn(this, _getPrototypeOf(ComplementStuff).call(this, _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].COMPLEMENT, value, literalBase));
          }

          _createClass(ComplementStuff, [{
            key: "clone",
            value: function clone(target) {
              if (target.type == _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].COMPLEMENT) {
                target.value = this.value;
                target.literalBase = this.literalBase;
              }
            }
          }]);

          return ComplementStuff;
        }(_Stuff__WEBPACK_IMPORTED_MODULE_0__["default"]);
        /* harmony default export */


        __webpack_exports__["default"] = ComplementStuff;
        /***/
      },
      /* 22 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DialectEnumerator", function () {
          return DialectEnumerator;
        });
        /* harmony import */


        var _utils_HashMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 方言枚举器。
         * 
         * @author Jiangwei Xu
         */


        var DialectEnumerator =
        /*#__PURE__*/
        function () {
          function DialectEnumerator() {
            _classCallCheck(this, DialectEnumerator);

            this.factories = new _utils_HashMap__WEBPACK_IMPORTED_MODULE_0__["default"]();
          }

          _createClass(DialectEnumerator, [{
            key: "createDialect",
            value: function createDialect(name, tracker) {
              var fact = this.factories.get(name);

              if (null != fact) {
                return fact.create(tracker);
              }

              return null;
            }
          }, {
            key: "addFactory",
            value: function addFactory(fact) {
              this.factories.put(fact.getMetaData().name, fact);
            }
          }, {
            key: "removeFactory",
            value: function removeFactory(fact) {
              this.factories.remove(fact.getMetaData().name);
            }
          }, {
            key: "getFactory",
            value: function getFactory(name) {
              return this.factories.get(name);
            }
          }]);

          return DialectEnumerator;
        }();

        DialectEnumerator.instance = new DialectEnumerator();

        DialectEnumerator.getInstance = function () {
          return DialectEnumerator.instance;
        };
        /* harmony default export */


        __webpack_exports__["default"] = DialectEnumerator;
        /***/
      },
      /* 23 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TalkFailureCode", function () {
          return TalkFailureCode;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TalkServiceFailure", function () {
          return TalkServiceFailure;
        });

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 会话故障码。
         *
         * @author Jiangwei Xu
         */


        var TalkFailureCode = {
          /** 未找到指定的 Cellet 。 */
          NOTFOUND_CELLET: 100,

          /** Call 一般性失败。 */
          CALL_FAILED: 200,

          /** 连接超时，丢失会话。 */
          TALK_LOST: 300,

          /** 未知故障。 */
          UNKNOWN: 900
        };
        /**
         * 服务故障描述类。
         * 
         * @author Jiangwei Xu
         */

        var TalkServiceFailure =
        /*#__PURE__*/
        function () {
          function TalkServiceFailure(code, clazz) {
            _classCallCheck(this, TalkServiceFailure);

            this.code = code;
            this.reason = "Error in " + clazz; // 描述错误

            this.description = "Unknown";

            switch (code) {
              case TalkFailureCode.NOTFOUND_CELLET:
                this.description = "Server can not find specified cellet";
                break;

              case TalkFailureCode.CALL_FAILED:
                this.description = "Network connecting timeout";
                break;

              case TalkFailureCode.TALK_LOST:
                this.description = "Lost talk connection";
                break;

              default:
                break;
            }

            this.sourceDescription = "";
            this.sourceCelletIdentifiers = null;
          }

          _createClass(TalkServiceFailure, [{
            key: "getCode",
            value: function getCode() {
              return this.code;
            }
          }, {
            key: "getReason",
            value: function getReason() {
              return this.reason;
            }
          }, {
            key: "getDescription",
            value: function getDescription() {
              return this.description;
            }
          }, {
            key: "getSourceDescription",
            value: function getSourceDescription() {
              return this.sourceDescription;
            }
          }, {
            key: "setSourceDescription",
            value: function setSourceDescription(desc) {
              this.sourceDescription = desc;
            }
          }, {
            key: "getSourceCelletIdentifiers",
            value: function getSourceCelletIdentifiers() {
              return this.sourceCelletIdentifiers;
            }
          }, {
            key: "setSourceCelletIdentifiers",
            value: function setSourceCelletIdentifiers(celletIdentifierList) {
              this.sourceCelletIdentifiers = celletIdentifierList;
            }
          }]);

          return TalkServiceFailure;
        }();
        /* harmony default export */


        __webpack_exports__["default"] = TalkServiceFailure;
        /***/
      },
      /* 24 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Primitive", function () {
          return Primitive;
        });
        /* harmony import */


        var _Stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 原语。
         * @author Jiangwei Xu
         */


        var Primitive =
        /*#__PURE__*/
        function () {
          function Primitive(param) {
            _classCallCheck(this, Primitive);

            if (typeof param == 'string') {
              this.ownerTag = param;
              this.dialect = null;
            } else {
              this.dialect = param;
              this.ownerTag = null;
            }

            this.celletIdentifier = null;
            this.subjectList = null;
            this.predicateList = null;
            this.objectiveList = null;
            this.attributiveList = null;
            this.adverbialList = null;
            this.complementList = null;
          }

          _createClass(Primitive, [{
            key: "getOwnerTag",
            value: function getOwnerTag() {
              return this.ownerTag;
            }
          }, {
            key: "setCelletIdentifier",
            value: function setCelletIdentifier(celletIdentifier) {
              this.celletIdentifier = celletIdentifier;

              if (null != this.dialect) {
                this.dialect.setCelletIdentifier(celletIdentifier);
              }
            }
          }, {
            key: "getCelletIdentifier",
            value: function getCelletIdentifier() {
              return this.celletIdentifier;
            }
          }, {
            key: "isDialectal",
            value: function isDialectal() {
              return null != this.dialect;
            }
          }, {
            key: "getDialect",
            value: function getDialect() {
              return this.dialect;
            }
            /**
             * 设置关联方言。
             */

          }, {
            key: "capture",
            value: function capture(dialect) {
              this.dialect = dialect;
              this.dialect.setOwnerTag(this.ownerTag);
              this.dialect.setCelletIdentifier(this.celletIdentifier);
            }
            /**
             * 提交语素。
             */

          }, {
            key: "commit",
            value: function commit(stuff) {
              switch (stuff.type) {
                case _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].SUBJECT:
                  if (null == this.subjectList) this.subjectList = [stuff];else this.subjectList.push(stuff);
                  break;

                case _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].PREDICATE:
                  if (null == this.predicateList) this.predicateList = [stuff];else this.predicateList.push(stuff);
                  break;

                case _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].OBJECTIVE:
                  if (null == this.objectiveList) this.objectiveList = [stuff];else this.objectiveList.push(stuff);
                  break;

                case _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].ATTRIBUTIVE:
                  if (null == this.attributiveList) this.attributiveList = [stuff];else this.attributiveList.push(stuff);
                  break;

                case _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].ADVERBIAL:
                  if (null == this.adverbialList) this.adverbialList = [stuff];else this.adverbialList.push(stuff);
                  break;

                case _Stuff__WEBPACK_IMPORTED_MODULE_0__["StuffType"].COMPLEMENT:
                  if (null == this.complementList) this.complementList = [stuff];else this.complementList.push(stuff);
                  break;

                default:
                  break;
              }
            }
          }, {
            key: "subjects",
            value: function subjects() {
              return this.subjectList;
            }
          }, {
            key: "predicates",
            value: function predicates() {
              return this.predicateList;
            }
          }, {
            key: "objectives",
            value: function objectives() {
              return this.objectiveList;
            }
          }, {
            key: "attributives",
            value: function attributives() {
              return this.attributiveList;
            }
          }, {
            key: "adverbials",
            value: function adverbials() {
              return this.adverbialList;
            }
          }, {
            key: "complements",
            value: function complements() {
              return this.complementList;
            }
          }]);

          return Primitive;
        }();
        /* harmony default export */


        __webpack_exports__["default"] = Primitive;
        /***/
      },
      /* 25 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ActionDialectFactory", function () {
          return ActionDialectFactory;
        });
        /* harmony import */


        var _DialectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
        /* harmony import */


        var _ActionDialect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 动作方言工厂。
         * 
         * @author Jiangwei Xu
         */


        var ActionDialectFactory =
        /*#__PURE__*/
        function (_DialectFactory) {
          _inherits(ActionDialectFactory, _DialectFactory);

          function ActionDialectFactory() {
            var _this;

            _classCallCheck(this, ActionDialectFactory);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(ActionDialectFactory).call(this));
            _this.metaData = new _DialectFactory__WEBPACK_IMPORTED_MODULE_0__["DialectMetaData"](_ActionDialect__WEBPACK_IMPORTED_MODULE_1__["default"].DIALECT_NAME, "Action Dialect");
            return _this;
          }

          _createClass(ActionDialectFactory, [{
            key: "getMetaData",
            value: function getMetaData() {
              return this.metaData;
            }
          }, {
            key: "create",
            value: function create(tracker) {
              return new _ActionDialect__WEBPACK_IMPORTED_MODULE_1__["default"](tracker);
            }
          }]);

          return ActionDialectFactory;
        }(_DialectFactory__WEBPACK_IMPORTED_MODULE_0__["default"]);
        /* harmony default export */


        __webpack_exports__["default"] = ActionDialectFactory;
        /***/
      },
      /* 26 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DialectMetaData", function () {
          return DialectMetaData;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DialectFactory", function () {
          return DialectFactory;
        });

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 方言元数据。
         *
         * @author Jiangwei Xu
         */


        var DialectMetaData = function DialectMetaData(name, description) {
          _classCallCheck(this, DialectMetaData);

          this.name = name;
          this.description = description;
        };
        /**
         * 方言工厂。
         * 
         * @author Jiangwei Xu
         */


        var DialectFactory =
        /*#__PURE__*/
        function () {
          function DialectFactory() {
            _classCallCheck(this, DialectFactory);
          }

          _createClass(DialectFactory, [{
            key: "getMetaData",
            value: function getMetaData() {
              return null;
            }
          }, {
            key: "create",
            value: function create(tracker) {
              return null;
            }
          }]);

          return DialectFactory;
        }();
        /* harmony default export */


        __webpack_exports__["default"] = DialectFactory;
        /***/
      },
      /* 27 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ActionDialect", function () {
          return ActionDialect;
        });
        /* harmony import */


        var _Dialect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
        /* harmony import */


        var _stuff_Primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
        /* harmony import */


        var _stuff_SubjectStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
        /* harmony import */


        var _stuff_ObjectiveStuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
        /* harmony import */


        var _stuff_PredicateStuff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
        /* harmony import */


        var _utils_HashMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /** 动作方言。
         * 
         * @author Jiangwei Xu
         */


        var ActionDialect =
        /*#__PURE__*/
        function (_Dialect) {
          _inherits(ActionDialect, _Dialect);

          function ActionDialect(tracker, action) {
            var _this;

            _classCallCheck(this, ActionDialect);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(ActionDialect).call(this, ActionDialect.DIALECT_NAME, tracker));
            if (action !== undefined) _this.action = action;else _this.action = null;
            _this.params = new _utils_HashMap__WEBPACK_IMPORTED_MODULE_5__["default"]();
            return _this;
          }

          _createClass(ActionDialect, [{
            key: "setAction",
            value: function setAction(value) {
              this.action = value;
            }
          }, {
            key: "getAction",
            value: function getAction() {
              return this.action;
            }
          }, {
            key: "translate",
            value: function translate() {
              if (null == this.action) {
                return null;
              }

              var primitive = new _stuff_Primitive__WEBPACK_IMPORTED_MODULE_1__["default"](this);
              var list = this.params.keySet();

              for (var i = 0; i < list.length; i++) {
                var name = list[i];
                var value = this.params.get(name);
                var nameStuff = new _stuff_SubjectStuff__WEBPACK_IMPORTED_MODULE_2__["default"](name);
                var valueStuff = new _stuff_ObjectiveStuff__WEBPACK_IMPORTED_MODULE_3__["default"](value);
                primitive.commit(nameStuff);
                primitive.commit(valueStuff);
              }

              var actionStuff = new _stuff_PredicateStuff__WEBPACK_IMPORTED_MODULE_4__["default"](this.action);
              primitive.commit(actionStuff);
              return primitive;
            }
          }, {
            key: "build",
            value: function build(primitive) {
              this.action = primitive.predicates()[0].getValueAsString();
              var subjects = primitive.subjects();

              if (null != subjects) {
                var names = subjects;
                var values = primitive.objectives();

                for (var i = 0; i < names.length; i++) {
                  this.params.put(names[i].getValueAsString(), values[i].getValue());
                }
              }
            }
            /**
             * 添加动作参数键值对。
             */

          }, {
            key: "appendParam",
            value: function appendParam(name, value) {
              this.params.put(name, value);
            }
          }, {
            key: "getParam",
            value: function getParam(name) {
              // The ld way of the getParam method of Hashmap's implementation will return null if a key does not exist, 
              // and it will be parsed using JSON.parse, which will cause a parse error if return value is undefined.
              return this.params.get(name) || null;
            }
          }, {
            key: "existParam",
            value: function existParam(name) {
              return this.params.containsKey(name);
            }
          }, {
            key: "act",
            value: function act(delegate) {
              var self = this;
              var tid = setTimeout(function () {
                clearTimeout(tid);
                delegate.call(null, self);
              }, 0);
            }
          }]);

          return ActionDialect;
        }(_Dialect__WEBPACK_IMPORTED_MODULE_0__["default"]); // 方言名称


        ActionDialect.DIALECT_NAME = "ActionDialect";
        /* harmony default export */

        __webpack_exports__["default"] = ActionDialect;
        /***/
      },
      /* 28 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Dialect", function () {
          return Dialect;
        });

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /** 原语方言。
         * 
         * @author Jiangwei Xu
         */


        var Dialect =
        /*#__PURE__*/
        function () {
          function Dialect(name, tracker) {
            _classCallCheck(this, Dialect);

            this.name = name;
            if (tracker !== undefined) this.tracker = tracker;else this.tracker = "none";
            this.tag = null;
            this.celletIdentifier = null;
          }

          _createClass(Dialect, [{
            key: "getName",
            value: function getName() {
              return this.name;
            }
          }, {
            key: "getTracker",
            value: function getTracker() {
              return this.tracker;
            }
          }, {
            key: "setOwnerTag",
            value: function setOwnerTag(tag) {
              this.tag = tag;
            }
          }, {
            key: "getOwnerTag",
            value: function getOwnerTag() {
              return this.tag;
            }
          }, {
            key: "setCelletIdentifier",
            value: function setCelletIdentifier(identifier) {
              this.celletIdentifier = identifier;
            }
          }, {
            key: "getCelletIdentifier",
            value: function getCelletIdentifier() {
              return this.celletIdentifier;
            }
            /**
             * 翻译原语为方言。
             */

          }, {
            key: "translate",
            value: function translate() {
              // Nothing
              return null;
            }
            /**
             * 从原语构建方言。
             */

          }, {
            key: "build",
            value: function build(primitive) {// Nothing
            }
          }]);

          return Dialect;
        }();
        /* harmony default export */


        __webpack_exports__["default"] = Dialect;
        /***/
      },
      /* 29 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "SpeakerDelegate", function () {
          return SpeakerDelegate;
        });

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * Speaker 事件委派。
         *
         * @author Jiangwei Xu
         */


        var SpeakerDelegate =
        /*#__PURE__*/
        function () {
          function SpeakerDelegate() {
            _classCallCheck(this, SpeakerDelegate);
          }

          _createClass(SpeakerDelegate, [{
            key: "onDialogue",
            value: function onDialogue(speaker, identifier, primitive) {// Nothing
            }
          }, {
            key: "onContacted",
            value: function onContacted(speaker, identifier) {// Nothing
            }
          }, {
            key: "onQuitted",
            value: function onQuitted(speaker, identifier) {// Nothing
            }
          }, {
            key: "onFailed",
            value: function onFailed(speaker, failure) {// Nothing
            }
          }]);

          return SpeakerDelegate;
        }();
        /* harmony default export */


        __webpack_exports__["default"] = SpeakerDelegate;
        /***/
      },
      /* 30 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Nucleus", function () {
          return Nucleus;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "nucleus", function () {
          return nucleus;
        });
        /* harmony import */


        var _TalkService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
        /* harmony import */


        var _Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
        /* harmony import */


        var _utils_UUID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
        /* harmony import */


        var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }
        /*
        -----------------------------------------------------------------------------
        This source file is part of Cell Cloud.
        
        Copyright (c) 2009-2016 Cell Cloud Team (www.cellcloud.net)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        THE SOFTWARE.
        -----------------------------------------------------------------------------
        */

        /**
         * 核心类。
         */


        var Nucleus =
        /*#__PURE__*/
        function (_Service) {
          _inherits(Nucleus, _Service); // 版本信息


          function Nucleus() {
            var _this;

            _classCallCheck(this, Nucleus);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(Nucleus).call(this));
            _this.tag = _utils_UUID__WEBPACK_IMPORTED_MODULE_2__["default"].v4().toString();
            _this.talkService = {
              isCalled: function isCalled() {
                return false;
              }
            };
            _this.ts = _this.talkService;
            return _this;
          }

          _createClass(Nucleus, [{
            key: "_resetTag",
            value: function _resetTag() {
              this.tag = _utils_UUID__WEBPACK_IMPORTED_MODULE_2__["default"].v4().toString();
            }
          }, {
            key: "startup",
            value: function startup() {
              var version = this.constructor.version;

              _Logger__WEBPACK_IMPORTED_MODULE_3__["default"].i("Nucleus", "Cell Cloud " + version.major + "." + version.minor + "." + version.revision + " (Build JavaScript/Web - " + version.name + ")");

              _Logger__WEBPACK_IMPORTED_MODULE_3__["default"].i("Nucleus", "Cell Initializing");

              this.talkService = new _TalkService__WEBPACK_IMPORTED_MODULE_0__["default"](this);
              this.ts = this.talkService;
              this.talkService.startup();
              window.service = this.talkService;
              return true;
            }
          }, {
            key: "shutdown",
            value: function shutdown() {
              if (null != this.talkService) {
                this.talkService.shutdown();
                this.talkService = null;
                this.ts = null;
              }
            }
          }]);

          return Nucleus;
        }(_Service__WEBPACK_IMPORTED_MODULE_1__["default"]);

        Nucleus.version = {
          major: 1,
          minor: 6,
          revision: 3,
          name: "Xi"
        }; // 创建 Nucleus 单例

        var nucleus = new Nucleus();
        /* harmony default export */

        __webpack_exports__["default"] = nucleus;
        /***/
      }
      /******/
      ])
    );
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(92)(module)))

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var global = __webpack_require__(9);
var IS_PURE = __webpack_require__(22);
var DESCRIPTORS = __webpack_require__(14);
var NATIVE_SYMBOL = __webpack_require__(24);
var fails = __webpack_require__(4);
var has = __webpack_require__(29);
var isArray = __webpack_require__(86);
var isObject = __webpack_require__(18);
var anObject = __webpack_require__(19);
var toObject = __webpack_require__(57);
var toIndexedObject = __webpack_require__(2);
var toPrimitive = __webpack_require__(20);
var createPropertyDescriptor = __webpack_require__(21);
var nativeObjectCreate = __webpack_require__(25);
var objectKeys = __webpack_require__(27);
var getOwnPropertyNamesModule = __webpack_require__(51);
var getOwnPropertyNamesExternal = __webpack_require__(94);
var getOwnPropertySymbolsModule = __webpack_require__(52);
var getOwnPropertyDescriptorModule = __webpack_require__(46);
var definePropertyModule = __webpack_require__(15);
var propertyIsEnumerableModule = __webpack_require__(47);
var hide = __webpack_require__(13);
var redefine = __webpack_require__(48);
var shared = __webpack_require__(11);
var sharedKey = __webpack_require__(39);
var hiddenKeys = __webpack_require__(34);
var uid = __webpack_require__(23);
var wellKnownSymbol = __webpack_require__(8);
var wrappedWellKnownSymbolModule = __webpack_require__(95);
var defineWellKnownSymbol = __webpack_require__(96);
var setToStringTag = __webpack_require__(59);
var InternalStateModule = __webpack_require__(41);
var $forEach = __webpack_require__(84).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var JSON = global.JSON;
var nativeJSONStringify = JSON && JSON.stringify;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
JSON && $({ target: 'JSON', stat: true, forced: !NATIVE_SYMBOL || fails(function () {
  var symbol = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  return nativeJSONStringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || nativeJSONStringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || nativeJSONStringify(Object(symbol)) != '{}';
}) }, {
  stringify: function stringify(it) {
    var args = [it];
    var index = 1;
    var replacer, $replacer;
    while (arguments.length > index) args.push(arguments[index++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return nativeJSONStringify.apply(JSON, args);
  }
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(2);
var nativeGetOwnPropertyNames = __webpack_require__(51).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(8);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(38);
var has = __webpack_require__(29);
var wrappedWellKnownSymbolModule = __webpack_require__(95);
var defineProperty = __webpack_require__(15).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(45);
var DESCRIPTORS = __webpack_require__(14);
var global = __webpack_require__(9);
var has = __webpack_require__(29);
var isObject = __webpack_require__(18);
var defineProperty = __webpack_require__(15).f;
var copyConstructorProperties = __webpack_require__(49);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(96);

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(96);

// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var forEach = __webpack_require__(101);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(84).forEach;
var sloppyArrayMethod = __webpack_require__(102);

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(4);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var from = __webpack_require__(104);
var checkCorrectnessOfIteration = __webpack_require__(81);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(76);
var toObject = __webpack_require__(57);
var callWithSafeIterationClosing = __webpack_require__(79);
var isArrayIteratorMethod = __webpack_require__(75);
var toLength = __webpack_require__(31);
var createProperty = __webpack_require__(105);
var getIteratorMethod = __webpack_require__(78);

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    result = new C();
    for (;!(step = iterator.next()).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(20);
var definePropertyModule = __webpack_require__(15);
var createPropertyDescriptor = __webpack_require__(21);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var $indexOf = __webpack_require__(30).indexOf;
var sloppyArrayMethod = __webpack_require__(102);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IndexedObject = __webpack_require__(3);
var toIndexedObject = __webpack_require__(2);
var sloppyArrayMethod = __webpack_require__(102);

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var SLOPPY_METHOD = sloppyArrayMethod('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var toAbsoluteIndex = __webpack_require__(33);
var toInteger = __webpack_require__(32);
var toLength = __webpack_require__(31);
var toObject = __webpack_require__(57);
var arraySpeciesCreate = __webpack_require__(85);
var createProperty = __webpack_require__(105);
var arrayMethodHasSpeciesSupport = __webpack_require__(109);

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('splice') }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);
var wellKnownSymbol = __webpack_require__(8);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  return !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var fails = __webpack_require__(4);
var ArrayBufferModule = __webpack_require__(111);
var anObject = __webpack_require__(19);
var toAbsoluteIndex = __webpack_require__(33);
var toLength = __webpack_require__(31);
var speciesConstructor = __webpack_require__(115);

var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var nativeArrayBufferSlice = ArrayBuffer.prototype.slice;

var INCORRECT_SLICE = fails(function () {
  return !new ArrayBuffer(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-arraybuffer.prototype.slice
$({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice !== undefined && end === undefined) {
      return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
    }
    var length = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new (speciesConstructor(this, ArrayBuffer))(toLength(fin - first));
    var viewSource = new DataView(this);
    var viewTarget = new DataView(result);
    var index = 0;
    while (first < fin) {
      viewTarget.setUint8(index++, viewSource.getUint8(first++));
    } return result;
  }
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(14);
var NATIVE_ARRAY_BUFFER = __webpack_require__(112).NATIVE_ARRAY_BUFFER;
var hide = __webpack_require__(13);
var redefineAll = __webpack_require__(70);
var fails = __webpack_require__(4);
var anInstance = __webpack_require__(80);
var toInteger = __webpack_require__(32);
var toLength = __webpack_require__(31);
var toIndex = __webpack_require__(113);
var getOwnPropertyNames = __webpack_require__(51).f;
var defineProperty = __webpack_require__(15).f;
var arrayFill = __webpack_require__(114);
var setToStringTag = __webpack_require__(59);
var InternalStateModule = __webpack_require__(41);

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = 1 / 0;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function (number, mantissaLength, bytes) {
  var buffer = new Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    if (number * (c = pow(2, -exponent)) < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpackIEEE754 = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
};

var get = function (view, count, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = bytes.slice(start, start + count);
  return isLittleEndian ? pack : pack.reverse();
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: arrayFill.call(new Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) this.byteLength = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new NativeArrayBuffer(); // eslint-disable-line no-new
    new NativeArrayBuffer(1.5); // eslint-disable-line no-new
    new NativeArrayBuffer(NaN); // eslint-disable-line no-new
    return NativeArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new NativeArrayBuffer(toIndex(length));
    };
    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, NativeArrayBuffer[key]);
    }
    ArrayBufferPrototype.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var nativeSetInt8 = $DataView[PROTOTYPE].setInt8;
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(14);
var global = __webpack_require__(9);
var isObject = __webpack_require__(18);
var has = __webpack_require__(29);
var classof = __webpack_require__(66);
var hide = __webpack_require__(13);
var redefine = __webpack_require__(48);
var defineProperty = __webpack_require__(15).f;
var getPrototypeOf = __webpack_require__(56);
var setPrototypeOf = __webpack_require__(60);
var wellKnownSymbol = __webpack_require__(8);
var uid = __webpack_require__(23);

var DataView = global.DataView;
var DataViewPrototype = DataView && DataView.prototype;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var isPrototypeOf = ObjectPrototype.isPrototypeOf;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var NATIVE_ARRAY_BUFFER = !!(global.ArrayBuffer && DataView);
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var isView = function isView(it) {
  var klass = classof(it);
  return klass === 'DataView' || has(TypedArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  return isObject(it) && has(TypedArrayConstructorsList, classof(it));
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (setPrototypeOf) {
    if (isPrototypeOf.call(TypedArray, C)) return C;
  } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
      return C;
    }
  } throw TypeError('Target is not a typed array constructor');
};

var exportProto = function (KEY, property, forced) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
      delete TypedArrayConstructor.prototype[KEY];
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
  }
};

var exportStatic = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
        delete TypedArrayConstructor[KEY];
      }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
  } });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    hide(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

// WebKit bug - the same parent prototype for typed arrays and data view
if (NATIVE_ARRAY_BUFFER && setPrototypeOf && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
  setPrototypeOf(DataViewPrototype, ObjectPrototype);
}

module.exports = {
  NATIVE_ARRAY_BUFFER: NATIVE_ARRAY_BUFFER,
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportProto: exportProto,
  exportStatic: exportStatic,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var toLength = __webpack_require__(31);

// `ToIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(57);
var toAbsoluteIndex = __webpack_require__(33);
var toLength = __webpack_require__(31);

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var aFunction = __webpack_require__(77);
var wellKnownSymbol = __webpack_require__(8);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);

// `Date.now` method
// https://tc39.github.io/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(48);

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var bind = __webpack_require__(119);

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(77);
var isObject = __webpack_require__(18);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var defineProperty = __webpack_require__(15).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var setToStringTag = __webpack_require__(59);

// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(73);
var collectionStrong = __webpack_require__(123);

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (get) {
  return function Map() { return get(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong, true);


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(15).f;
var create = __webpack_require__(25);
var redefineAll = __webpack_require__(70);
var bind = __webpack_require__(76);
var anInstance = __webpack_require__(80);
var iterate = __webpack_require__(74);
var defineIterator = __webpack_require__(44);
var setSpecies = __webpack_require__(124);
var DESCRIPTORS = __webpack_require__(14);
var fastKey = __webpack_require__(71).fastKey;
var InternalStateModule = __webpack_require__(41);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(37);
var definePropertyModule = __webpack_require__(15);
var wellKnownSymbol = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(14);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var setToStringTag = __webpack_require__(59);

// Math[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(14);
var global = __webpack_require__(9);
var isForced = __webpack_require__(53);
var redefine = __webpack_require__(48);
var has = __webpack_require__(29);
var classof = __webpack_require__(5);
var inheritIfRequired = __webpack_require__(82);
var toPrimitive = __webpack_require__(20);
var fails = __webpack_require__(4);
var create = __webpack_require__(25);
var getOwnPropertyNames = __webpack_require__(51).f;
var getOwnPropertyDescriptor = __webpack_require__(46).f;
var defineProperty = __webpack_require__(15).f;
var trim = __webpack_require__(127).trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(6);
var whitespaces = __webpack_require__(128);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 128 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var DESCRIPTORS = __webpack_require__(14);
var create = __webpack_require__(25);

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var fails = __webpack_require__(4);
var toObject = __webpack_require__(57);
var nativeGetPrototypeOf = __webpack_require__(56);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(58);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var setPrototypeOf = __webpack_require__(60);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var parseIntImplementation = __webpack_require__(133);

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var trim = __webpack_require__(127).trim;
var whitespaces = __webpack_require__(128);

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var getBuiltIn = __webpack_require__(37);
var aFunction = __webpack_require__(77);
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(18);
var create = __webpack_require__(25);
var bind = __webpack_require__(119);
var fails = __webpack_require__(4);

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.github.io/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var isObject = __webpack_require__(18);
var anObject = __webpack_require__(19);
var has = __webpack_require__(29);
var getOwnPropertyDescriptorModule = __webpack_require__(46);
var getPrototypeOf = __webpack_require__(56);

// `Reflect.get` method
// https://tc39.github.io/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value')
    ? descriptor.value
    : descriptor.get === undefined
      ? undefined
      : descriptor.get.call(receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var global = __webpack_require__(9);
var isForced = __webpack_require__(53);
var inheritIfRequired = __webpack_require__(82);
var defineProperty = __webpack_require__(15).f;
var getOwnPropertyNames = __webpack_require__(51).f;
var isRegExp = __webpack_require__(137);
var getFlags = __webpack_require__(138);
var redefine = __webpack_require__(48);
var fails = __webpack_require__(4);
var setSpecies = __webpack_require__(124);
var wellKnownSymbol = __webpack_require__(8);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    return !thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined ? pattern
      : inheritIfRequired(CORRECT_NEW
        ? new NativeRegExp(patternIsRegExp && !flagsAreUndefined ? pattern.source : pattern, flags)
        : NativeRegExp((patternIsRegExp = pattern instanceof RegExpWrapper)
          ? pattern.source
          : pattern, patternIsRegExp && flagsAreUndefined ? getFlags.call(pattern) : flags)
      , thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var classof = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(8);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(19);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var exec = __webpack_require__(140);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(138);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(48);
var anObject = __webpack_require__(19);
var fails = __webpack_require__(4);
var flags = __webpack_require__(138);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(143);
var anObject = __webpack_require__(19);
var toObject = __webpack_require__(57);
var toLength = __webpack_require__(31);
var toInteger = __webpack_require__(32);
var requireObjectCoercible = __webpack_require__(6);
var advanceStringIndex = __webpack_require__(144);
var regExpExec = __webpack_require__(145);

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(13);
var redefine = __webpack_require__(48);
var fails = __webpack_require__(4);
var wellKnownSymbol = __webpack_require__(8);
var regexpExec = __webpack_require__(140);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(68).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(5);
var regexpExec = __webpack_require__(140);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(143);
var isRegExp = __webpack_require__(137);
var anObject = __webpack_require__(19);
var requireObjectCoercible = __webpack_require__(6);
var speciesConstructor = __webpack_require__(115);
var advanceStringIndex = __webpack_require__(144);
var toLength = __webpack_require__(31);
var callRegExpExec = __webpack_require__(145);
var regexpExec = __webpack_require__(140);
var fails = __webpack_require__(4);

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var typedArrayConstructor = __webpack_require__(148);

// `Uint8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
typedArrayConstructor('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var global = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(14);
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(149);
var ArrayBufferViewCore = __webpack_require__(112);
var ArrayBufferModule = __webpack_require__(111);
var anInstance = __webpack_require__(80);
var createPropertyDescriptor = __webpack_require__(21);
var hide = __webpack_require__(13);
var toLength = __webpack_require__(31);
var toIndex = __webpack_require__(113);
var toOffset = __webpack_require__(150);
var toPrimitive = __webpack_require__(20);
var has = __webpack_require__(29);
var classof = __webpack_require__(66);
var isObject = __webpack_require__(18);
var create = __webpack_require__(25);
var setPrototypeOf = __webpack_require__(60);
var getOwnPropertyNames = __webpack_require__(51).f;
var typedArrayFrom = __webpack_require__(151);
var forEach = __webpack_require__(84).forEach;
var setSpecies = __webpack_require__(124);
var definePropertyModule = __webpack_require__(15);
var getOwnPropertyDescriptorModule = __webpack_require__(46);
var InternalStateModule = __webpack_require__(41);

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, { get: function () {
    return getInternalState(this)[key];
  } });
};

var isArrayBuffer = function (it) {
  var klass;
  return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && typeof key != 'symbol'
    && key in target
    && String(+key) == String(key);
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  return isTypedArrayIndex(target, key = toPrimitive(key, true))
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  if (isTypedArrayIndex(target, key = toPrimitive(key, true))
    && isObject(descriptor)
    && has(descriptor, 'value')
    && !has(descriptor, 'get')
    && !has(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!has(descriptor, 'writable') || descriptor.writable)
    && (!has(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  // eslint-disable-next-line max-statements
  module.exports = function (TYPE, BYTES, wrapper, CLAMPED) {
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
        if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
        if (isArrayBuffer(data)) return $length !== undefined
          ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
          : typedArrayOffset !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
            : new NativeTypedArrayConstructor(data);
        if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
        return typedArrayFrom.call(TypedArrayConstructor, data);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) hide(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      hide(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    if (TYPED_ARRAY_TAG) hide(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({
      global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
    }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      hide(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      hide(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-new */
var global = __webpack_require__(9);
var fails = __webpack_require__(4);
var checkCorrectnessOfIteration = __webpack_require__(81);
var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__(112).NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari 11 bug
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);

module.exports = function (it, BYTES) {
  var offset = toInteger(it);
  if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset');
  return offset;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(57);
var toLength = __webpack_require__(31);
var getIteratorMethod = __webpack_require__(78);
var isArrayIteratorMethod = __webpack_require__(75);
var bind = __webpack_require__(76);
var aTypedArrayConstructor = __webpack_require__(112).aTypedArrayConstructor;

module.exports = function from(source /* , mapfn, thisArg */) {
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, step, iterator;
  if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = iteratorMethod.call(O);
    O = [];
    while (!(step = iterator.next()).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2], 2);
  }
  length = toLength(O.length);
  result = new (aTypedArrayConstructor(this))(length);
  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }
  return result;
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $copyWithin = __webpack_require__(153);

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.copywithin
ArrayBufferViewCore.exportProto('copyWithin', function copyWithin(target, start /* , end */) {
  return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(57);
var toAbsoluteIndex = __webpack_require__(33);
var toLength = __webpack_require__(31);

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $every = __webpack_require__(84).every;

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.every` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every
ArrayBufferViewCore.exportProto('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $fill = __webpack_require__(114);

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
// eslint-disable-next-line no-unused-vars
ArrayBufferViewCore.exportProto('fill', function fill(value /* , start, end */) {
  return $fill.apply(aTypedArray(this), arguments);
});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $filter = __webpack_require__(84).filter;
var speciesConstructor = __webpack_require__(115);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;

// `%TypedArray%.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.filter
ArrayBufferViewCore.exportProto('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $find = __webpack_require__(84).find;

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.find` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.find
ArrayBufferViewCore.exportProto('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $findIndex = __webpack_require__(84).findIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex
ArrayBufferViewCore.exportProto('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $forEach = __webpack_require__(84).forEach;

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.foreach
ArrayBufferViewCore.exportProto('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(149);
var ArrayBufferViewCore = __webpack_require__(112);
var typedArrayFrom = __webpack_require__(151);

// `%TypedArray%.from` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.from
ArrayBufferViewCore.exportStatic('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $includes = __webpack_require__(30).includes;

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes
ArrayBufferViewCore.exportProto('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $indexOf = __webpack_require__(30).indexOf;

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.indexof
ArrayBufferViewCore.exportProto('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var ArrayBufferViewCore = __webpack_require__(112);
var ArrayIterators = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(8);

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = ArrayIterators.values;
var arrayKeys = ArrayIterators.keys;
var arrayEntries = ArrayIterators.entries;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportProto = ArrayBufferViewCore.exportProto;
var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];

var CORRECT_ITER_NAME = !!nativeTypedArrayIterator
  && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

var typedArrayValues = function values() {
  return arrayValues.call(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.entries
exportProto('entries', function entries() {
  return arrayEntries.call(aTypedArray(this));
});
// `%TypedArray%.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.keys
exportProto('keys', function keys() {
  return arrayKeys.call(aTypedArray(this));
});
// `%TypedArray%.prototype.values` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.values
exportProto('values', typedArrayValues, !CORRECT_ITER_NAME);
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator
exportProto(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var $join = [].join;

// `%TypedArray%.prototype.join` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
// eslint-disable-next-line no-unused-vars
ArrayBufferViewCore.exportProto('join', function join(separator) {
  return $join.apply(aTypedArray(this), arguments);
});


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $lastIndexOf = __webpack_require__(166);

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.lastindexof
// eslint-disable-next-line no-unused-vars
ArrayBufferViewCore.exportProto('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  return $lastIndexOf.apply(aTypedArray(this), arguments);
});


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(2);
var toInteger = __webpack_require__(32);
var toLength = __webpack_require__(31);
var sloppyArrayMethod = __webpack_require__(102);

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('lastIndexOf');

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof
module.exports = (NEGATIVE_ZERO || SLOPPY_METHOD) ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : nativeLastIndexOf;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $map = __webpack_require__(84).map;
var speciesConstructor = __webpack_require__(115);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;

// `%TypedArray%.prototype.map` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map
ArrayBufferViewCore.exportProto('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
  });
});


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $reduce = __webpack_require__(169).left;

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduce
ArrayBufferViewCore.exportProto('reduce', function reduce(callbackfn /* , initialValue */) {
  return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(77);
var toObject = __webpack_require__(57);
var IndexedObject = __webpack_require__(3);
var toLength = __webpack_require__(31);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $reduceRight = __webpack_require__(169).right;

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.reduceRicht` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduceright
ArrayBufferViewCore.exportProto('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse
ArrayBufferViewCore.exportProto('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var toLength = __webpack_require__(31);
var toOffset = __webpack_require__(150);
var toObject = __webpack_require__(57);
var fails = __webpack_require__(4);

var aTypedArray = ArrayBufferViewCore.aTypedArray;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).set({});
});

// `%TypedArray%.prototype.set` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.set
ArrayBufferViewCore.exportProto('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var length = this.length;
  var src = toObject(arrayLike);
  var len = toLength(src.length);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, FORCED);


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var speciesConstructor = __webpack_require__(115);
var fails = __webpack_require__(4);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var $slice = [].slice;

var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
ArrayBufferViewCore.exportProto('slice', function slice(start, end) {
  var list = $slice.call(aTypedArray(this), start, end);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var $some = __webpack_require__(84).some;

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.some` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
ArrayBufferViewCore.exportProto('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var $sort = [].sort;

// `%TypedArray%.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort
ArrayBufferViewCore.exportProto('sort', function sort(comparefn) {
  return $sort.call(aTypedArray(this), comparefn);
});


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(112);
var toLength = __webpack_require__(31);
var toAbsoluteIndex = __webpack_require__(33);
var speciesConstructor = __webpack_require__(115);

var aTypedArray = ArrayBufferViewCore.aTypedArray;

// `%TypedArray%.prototype.subarray` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.subarray
ArrayBufferViewCore.exportProto('subarray', function subarray(begin, end) {
  var O = aTypedArray(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  return new (speciesConstructor(O, O.constructor))(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
  );
});


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var ArrayBufferViewCore = __webpack_require__(112);
var fails = __webpack_require__(4);

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var $toLocaleString = [].toLocaleString;
var $slice = [].slice;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring
ArrayBufferViewCore.exportProto('toLocaleString', function toLocaleString() {
  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
}, FORCED);


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var ArrayBufferViewCore = __webpack_require__(112);
var fails = __webpack_require__(4);

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype;
var arrayToString = [].toString;
var arrayJoin = [].join;

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return arrayJoin.call(this);
  };
}

// `%TypedArray%.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tostring
ArrayBufferViewCore.exportProto('toString', arrayToString, (Uint8ArrayPrototype || {}).toString != arrayToString);


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var collectionDeleteAll = __webpack_require__(88);

// `Map.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  deleteAll: function deleteAll(/* ...elements */) {
    return collectionDeleteAll.apply(this, arguments);
  }
});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var anObject = __webpack_require__(19);
var bind = __webpack_require__(76);
var getMapIterator = __webpack_require__(181);
var iterate = __webpack_require__(74);

// `Map.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  every: function every(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return !iterate(iterator, function (key, value) {
      if (!boundFunction(value, key, map)) return iterate.stop();
    }, undefined, true, true).stopped;
  }
});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(22);
var getIterator = __webpack_require__(182);

module.exports = IS_PURE ? getIterator : function (it) {
  // eslint-disable-next-line no-undef
  return Map.prototype.entries.call(it);
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var getIteratorMethod = __webpack_require__(78);

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var getBuiltIn = __webpack_require__(37);
var anObject = __webpack_require__(19);
var aFunction = __webpack_require__(77);
var bind = __webpack_require__(76);
var speciesConstructor = __webpack_require__(115);
var getMapIterator = __webpack_require__(181);
var iterate = __webpack_require__(74);

// `Map.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
    var setter = aFunction(newMap.set);
    iterate(iterator, function (key, value) {
      if (boundFunction(value, key, map)) setter.call(newMap, key, value);
    }, undefined, true, true);
    return newMap;
  }
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var anObject = __webpack_require__(19);
var bind = __webpack_require__(76);
var getMapIterator = __webpack_require__(181);
var iterate = __webpack_require__(74);

// `Map.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  find: function find(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate(iterator, function (key, value) {
      if (boundFunction(value, key, map)) return iterate.stop(value);
    }, undefined, true, true).result;
  }
});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var anObject = __webpack_require__(19);
var bind = __webpack_require__(76);
var getMapIterator = __webpack_require__(181);
var iterate = __webpack_require__(74);

// `Map.prototype.findKey` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  findKey: function findKey(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate(iterator, function (key, value) {
      if (boundFunction(value, key, map)) return iterate.stop(key);
    }, undefined, true, true).result;
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var anObject = __webpack_require__(19);
var getMapIterator = __webpack_require__(181);
var sameValueZero = __webpack_require__(187);
var iterate = __webpack_require__(74);

// `Map.prototype.includes` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  includes: function includes(searchElement) {
    return iterate(getMapIterator(anObject(this)), function (key, value) {
      if (sameValueZero(value, searchElement)) return iterate.stop();
    }, undefined, true, true).stopped;
  }
});


/***/ }),
/* 187 */
/***/ (function(module, exports) {

// `SameValueZero` abstract operation
// https://tc39.github.io/ecma262/#sec-samevaluezero
module.exports = function (x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y || x != x && y != y;
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var anObject = __webpack_require__(19);
var getMapIterator = __webpack_require__(181);
var iterate = __webpack_require__(74);

// `Map.prototype.includes` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  keyOf: function keyOf(searchElement) {
    return iterate(getMapIterator(anObject(this)), function (key, value) {
      if (value === searchElement) return iterate.stop(key);
    }, undefined, true, true).result;
  }
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var getBuiltIn = __webpack_require__(37);
var anObject = __webpack_require__(19);
var aFunction = __webpack_require__(77);
var bind = __webpack_require__(76);
var speciesConstructor = __webpack_require__(115);
var getMapIterator = __webpack_require__(181);
var iterate = __webpack_require__(74);

// `Map.prototype.mapKeys` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  mapKeys: function mapKeys(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
    var setter = aFunction(newMap.set);
    iterate(iterator, function (key, value) {
      setter.call(newMap, boundFunction(value, key, map), value);
    }, undefined, true, true);
    return newMap;
  }
});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var getBuiltIn = __webpack_require__(37);
var anObject = __webpack_require__(19);
var aFunction = __webpack_require__(77);
var bind = __webpack_require__(76);
var speciesConstructor = __webpack_require__(115);
var getMapIterator = __webpack_require__(181);
var iterate = __webpack_require__(74);

// `Map.prototype.mapValues` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  mapValues: function mapValues(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
    var setter = aFunction(newMap.set);
    iterate(iterator, function (key, value) {
      setter.call(newMap, key, boundFunction(value, key, map));
    }, undefined, true, true);
    return newMap;
  }
});


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var anObject = __webpack_require__(19);
var aFunction = __webpack_require__(77);
var iterate = __webpack_require__(74);

// `Map.prototype.merge` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  // eslint-disable-next-line no-unused-vars
  merge: function merge(iterable /* ...iterbles */) {
    var map = anObject(this);
    var setter = aFunction(map.set);
    var i = 0;
    while (i < arguments.length) {
      iterate(arguments[i++], setter, map, true);
    }
    return map;
  }
});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var anObject = __webpack_require__(19);
var aFunction = __webpack_require__(77);
var getMapIterator = __webpack_require__(181);
var iterate = __webpack_require__(74);

// `Map.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var accumulator, step;
    aFunction(callbackfn);
    if (arguments.length > 1) accumulator = arguments[1];
    else {
      step = iterator.next();
      if (step.done) throw TypeError('Reduce of empty map with no initial value');
      accumulator = step.value[1];
    }
    iterate(iterator, function (key, value) {
      accumulator = callbackfn(accumulator, value, key, map);
    }, undefined, true, true);
    return accumulator;
  }
});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var anObject = __webpack_require__(19);
var bind = __webpack_require__(76);
var getMapIterator = __webpack_require__(181);
var iterate = __webpack_require__(74);

// `Set.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  some: function some(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate(iterator, function (key, value) {
      if (boundFunction(value, key, map)) return iterate.stop();
    }, undefined, true, true).stopped;
  }
});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var anObject = __webpack_require__(19);
var aFunction = __webpack_require__(77);

// `Set.prototype.update` method
// https://github.com/tc39/proposal-collection-methods
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  update: function update(key, callback /* , thunk */) {
    var map = anObject(this);
    var length = arguments.length;
    aFunction(callback);
    var isPresentInMap = map.has(key);
    if (!isPresentInMap && length < 3) {
      throw TypeError('Updating absent value');
    }
    var value = isPresentInMap ? map.get(key) : aFunction(length > 2 ? arguments[2] : undefined)(key, map);
    map.set(key, callback(value, key, map));
    return map;
  }
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var DOMIterables = __webpack_require__(90);
var forEach = __webpack_require__(101);
var hide = __webpack_require__(13);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    hide(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var global = __webpack_require__(9);
var userAgent = __webpack_require__(197);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(37);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(199);

__webpack_require__(1);

__webpack_require__(107);

__webpack_require__(108);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(118);

__webpack_require__(62);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(132);

__webpack_require__(134);

__webpack_require__(139);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(142);

__webpack_require__(89);

__webpack_require__(200);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(205), __webpack_require__(209), __webpack_require__(228), __webpack_require__(245), __webpack_require__(249), __webpack_require__(237), __webpack_require__(238), __webpack_require__(207), __webpack_require__(251), __webpack_require__(231), __webpack_require__(252), __webpack_require__(244), __webpack_require__(253), __webpack_require__(254), __webpack_require__(255), __webpack_require__(256)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Session, _Utils, _AccountServiceWorker, _GroupServiceWorker, _NetworkListener, _CubeError, _StateCode, _CELLET, _Responder, _Delegate, _CubeEngineListener, _EngineState, _CubeServer, _CodecType, _CubeConfig, _cubeDatabase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CubeEngine = void 0;
  _cubeDatabase = _interopRequireDefault(_cubeDatabase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var _window$CellCloud = window.CellCloud,
      HashMap = _window$CellCloud.HashMap,
      Logger = _window$CellCloud.Logger;
  /**
   * 魔方引擎类。
   * <p>
   * 魔方引擎类是为应用层提供接口的基础类，包括通话控制、获取白板对象实例、获取媒体控制器实例等。
   * </p>
   *
   * @class CubeEngine
   * @author Xu Jiangwei, Guan Yong
   */

  var CubeEngine =
  /*#__PURE__*/
  function () {
    function CubeEngine() {
      _classCallCheck(this, CubeEngine);

      // 引擎版本信息
      this.version = '2.5.53'; // 通用工具

      this.utils = _Utils.Utils; // 会话管理器

      this.session = new _Session.Session(); // 用户账号

      this.accName = null; // 用户昵称

      this.accDisplayName = null; // 用户密码

      this.accPassword = null; // 用户令牌

      this.accToken = null;
      this.hostAddress = null; // 配置信息

      this.config = new _CubeConfig.CubeConfig(); // 所有服务

      this.services = new HashMap(); // 媒体服务

      this.sspMediaService = null; // 会议媒体服务

      this.sipMediaService = null; // sip服务

      this.sipService = null; // 是否正在重连

      this.isReconnecting = false; // 是否正在注册

      this.isBeingRegister = false; // 尝试加载授权数据的次数

      this.loadLicenseCounts = 0; // 资源路径

      this.resourcePath = './assets'; // 是否终止

      this.isShutdown = false; // 应答机

      this.responder = new _Responder.Responder(this.session); // 引擎注册状态

      this.registered = false; // 应用授权信息

      this.appLicense = null; // 设备信息

      this.deviceInfo = null; // 授权文件加载完成状态

      this.isLicenseLoaded = false;
      this._cube_timestamp = Date.now(); // 初始化全局token信息

      var timestamp = this._cube_timestamp + '';
      this._cube_token = timestamp.substr(timestamp.length - 6, 6); // 定义引擎当前的状态

      this.cubeState = _EngineState.EngineState.Stop; // 定义当前网络是否正常

      this.networkConnected = true; //关联状态监听器

      this.delegate = new _Delegate.Delegate(_CubeEngineListener.CubeEngineListener);
      this.celletMembers = new HashMap(); // 引擎服务器地址配置信息

      this.server = new _CubeServer.CubeServer(this);
      this.autoTest = false;
      this._CUBE_DOMAIN = null;
      this._CUBE_CONF_CAPTURE_SERVICE = null;
      this._MSTR_TOKEN = "CubeTeam@2015";
      this._CUBE_PORT = null;
      this._CUBE_HTTP_SERVICE = null; // 格式： http://ex.shixinyun.com:8018

      this._CUBE_HTTPS_SERVICE = null; // 格式： https://ex.shixinyun.com:9543

      this._CUBE_HTTP_SERVICES = null; // 格式： https://ex.shixinyun.com:9543

      this._CUBE_SERVICE = null; // 根据当前协议自动识别的服务器地址

      this._CUBE_HTTP_FILE_SERVICE = null; // 格式： http://ex.shixinyun.com:8018

      this._CUBE_HTTPS_FILE_SERVICE = null; // 格式： https://ex.shixinyun.com:9543

      this._CUBE_HTTP_STORAGE_SERVICE = null; // 格式： http://ex.shixinyun.com:8018

      this._CUBE_HTTPS_STORAGE_SERVICE = null; // 格式： https://ex.shixinyun.com:9543

      this._CUBE_STUN_SERVERS = null;
      this._CUBE_ICE_SERVERS = null;
      this._CUBE_LOGIN_TIME = 0;
      this._VALID_CELLETS = [];
    } // 调试选项


    _createClass(CubeEngine, [{
      key: "_adjust",
      value: function _adjust(param) {
        if (undefined !== param.host) {
          this._CUBE_DOMAIN = param.host.toString();
        }

        if (undefined !== param.port) {
          this._CUBE_PORT = parseInt(param.port);
        }
      }
      /**
       * This is a description of the device info
       * @class DeviceInfo
       * @property name {String} 名称
       * @property version {String} 版本号
       * @property platform {String} 平台信息
       * @property deviceId {String} 设备ID
       */

      /**
       * @typedef {Object} EngineConfig
       * @property {Object} videoSize - 指定默认视频画面大小。
       * @property {Object} frameRate - 指定帧率范围。
       * @property {Object} bandwidth - 指定默认音/视频数据传输带宽。
       */

      /**
       * 配置引擎工作参数。参数包括视频大小、建议帧率等。
       *
       * @example
       * window.cube.configure({
      *     "videoSize": { "width": 640, "height": 480 },
      *     "frameRate": { "min": 5, "max": 18 },
      *     "bandwidth": { "audio": 60, "video": 256 },
      *     "appid": "8d6148f92531438480e684a3203651f5",
      *     "appkey": "6f0ba0b2f904426ba9c4c9f05dc89152",
      * });
       *
       * @param {EngineConfig} config - 指定配置数据对象。
       * @see CubeVideoSize
       * @memberof CubeEngine
       * @instance
       */

    }, {
      key: "configure",
      value: function configure(config) {
        for (var item in this.config) {
          if (this.config.hasOwnProperty(item) && config.hasOwnProperty(item)) {
            if (item === 'frameRate') {
              var min = parseInt(config.frameRate.min);
              var max = parseInt(config.frameRate.max);
              this.config.frameRate = {
                min: min > 10 ? 10 : min < 2 ? 2 : min,
                max: max > 30 ? 30 : max < 6 ? 6 : max
              };
            }

            this.config[item] = config[item];
          }
        }

        var services = this.services.values();

        for (var i = 0; i < services.length; i++) {
          services[i].onConfigure(this.config);
        }
      }
      /**
       * 初始化并启动引擎。
       *
       * @param {StartupEngineCallback} callback - 指定引擎启动完成的回调方法。
       * @returns {boolean} 如果引擎正确进入启动流程返回 <code>true</code> ，否则返回 <code>false</code> 。<b>注：返回值不表示引擎是否启动成功。</b>
       */

    }, {
      key: "startup",
      value: function startup(callback) {
        var _this = this;

        Logger.i("CubeEngine", "Cube Engine for HTML5/JavaScript v" + this.version);
        this.isShutdown = false;
        this._cube_token = this.utils.randomNumber(100000, 999999) + '';

        var task = function task() {
          // 启动 nucleus
          if (window.nucleus.startup()) {
            // 添加监听器
            window.nucleus.talkService.addListener(new _NetworkListener.NetworkListener(_this)); // 加载账号模块

            _this.loadAccount(); // 加载群组模块


            _this.loadGroup(); // 回调启动完成


            callback(false);

            _this.delegate.onStarted();

            _this.triggerCubeEngineState(_EngineState.EngineState.Start);

            return true;
          } else {
            // this.delegate.onError();
            callback(new _CubeError.CubeError(_StateCode.StateCode.InitFailed, 'Cube Engine initialization failed!'));
            return false;
          }
        }; // if (this.utils.isIE9) {
        //     window.WEB_SOCKET_FORCE_FLASH = true;
        //     window.nucleus.activateWSPlugin(this._CUBE_DOMAIN.indexOf("192") >= 0 ? "libs/ws" : "http://" + this._CUBE_DOMAIN + "/libs/ws", function () {
        //         task();
        //     });
        // } else {


        task(); // }

        return true;
      }
      /**
       * 启动引擎回调函数。
       *
       * @callback StartupEngineCallback
       * @param error {CubeError|boolean} 启动发生错误
       */

      /**
       * 关闭引擎并关闭所有子模块。
       */

    }, {
      key: "shutdown",
      value: function shutdown() {
        this.isShutdown = true;
        window.nucleus.shutdown(); // 终止各个模块

        var services = this.services.values();

        for (var i = 0; i < services.length; i++) {
          services[i].shutdown();
        }

        this.services.clear();
        this.server = new _CubeServer.CubeServer(this);
        this.delegate.onStopped();
        this.triggerCubeEngineState(_EngineState.EngineState.Stop);
      }
      /**
       * 返回引擎状态
       */

    }, {
      key: "getCubeEngineState",
      value: function getCubeEngineState() {
        return this.cubeState;
      }
    }, {
      key: "triggerCubeEngineState",
      value: function triggerCubeEngineState(state) {
        this.cubeState = state;
        this.delegate.onStateChange(state);
      }
      /**
       * 添加监听器
       * @param {Listener} listener 监听器实例
       */

    }, {
      key: "addListener",
      value: function addListener(listener) {
        this.delegate.addListener(listener);
      }
      /**
       * 移除监听器
       * @param {Listener} listener 监听器实例
       */

    }, {
      key: "removeListener",
      value: function removeListener(listener) {
        this.delegate.addListener(listener);
      }
      /**
       * 返回引擎当前使用的会话实例。
       *
       * @returns {Session} 会话对象的实例。
       */

    }, {
      key: "getSession",
      value: function getSession() {
        return this.session;
      }
    }, {
      key: "loadService",
      value: function loadService(name, serviceInstance) {
        if (typeof serviceInstance === 'function') {
          for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }

          if (name === 'Whiteboard' && args.length > 1 && typeof args[1] === 'string') {
            name = 'Whiteboard' + args[1];
          }

          if (!this.services.containsKey(name)) {
            var service = _construct(serviceInstance, [this].concat(args));

            service.startup();
            this.services.put(name, service);
          }

          return true;
        }

        return false;
      }
    }, {
      key: "loadAccount",
      value: function loadAccount() {
        return this.loadService('Account', _AccountServiceWorker.AccountServiceWorker);
      }
      /**
       * 加载群组模块。
       * 群组模块为基础模块, 引擎启动成功后就会调用。
       *
       * @returns {boolean} 返回是否加载成功。
       */

    }, {
      key: "loadGroup",
      value: function loadGroup() {
        return this.loadService('Group', _GroupServiceWorker.GroupServiceWorker);
      }
      /**
       * 加载消息服务模块。
       *
       * @returns {boolean} 返回是否加载成功。
       */

    }, {
      key: "loadMessager",
      value: function loadMessager(worker) {
        return this.loadService('Message', worker || window.CubeMessage.ServiceWorker);
      }
      /**
       * 加载文件管理模块。
       *
       * @returns {boolean} 返回是否加载成功
       */

    }, {
      key: "loadFileManager",
      value: function loadFileManager(worker) {
        return this.loadService('Cloud', worker || window.CubeFile.Manager.ServiceWorker);
      }
      /**
       * 加载指令模块。
       *
       * @returns {boolean} 返回是否加载成功
       */

    }, {
      key: "loadInstruction",
      value: function loadInstruction() {
        return this.loadService('Instruction', window.CubeInstruction.ServiceWorker);
      }
      /**
       * 加载音视频通话模块。
       *
       * @param {String} localVideo - 指定字符串形式的用于展示本地视频的 DOM 元素 ID 。
       * @param {String} remoteVideo - 指定字符串形式的用于展示对方视频的 DOM 元素 ID 。
       * @param {String} bellAudio - 指定用于播放响铃音频的 DOM 元素 ID 。
       * @returns {boolean} 返回是否加载成功。
       */

    }, {
      key: "loadSignaling",
      value: function loadSignaling(worker, localVideo, remoteVideo, bellAudio) {
        var ret = this.loadService('Call', worker || window.CubeSignaling.CallServiceWorker, document.getElementById(localVideo), document.getElementById(remoteVideo), bellAudio !== undefined ? document.getElementById(bellAudio) : null);

        if (ret) {
          // 判断 WebSocket 是否可用
          if (!window.nucleus.ts.isWebSocketSupported()) {
            Logger.i("CubeEngine", "Adapter WebSocket");
            window.nucleus.ts.resetHeartbeat(_CELLET.CELLET.Signaling, 2000);
          }
        }

        return ret;
      }
      /**
       * 加载远程桌面模块。
       *
       * @returns {boolean} 返回是否加载成功
       */

    }, {
      key: "loadRemoteDesktop",
      value: function loadRemoteDesktop(remoteDesktopLib, viewDom) {
        return this.loadService('RemoteDesktop', window.CubeRemoteDesktop.ServiceWorker, remoteDesktopLib, viewDom);
      }
      /**
       * 加载会议模块。
       *
       * @param {String} localVideo - 指定字符串形式的用于显示本地视频的 DOM 元素 ID 。
       * @param {String} remoteVideo - 指定字符串形式的用于显示主讲人视频的 DOM 元素 ID 。
       * @param {String} bellAudio - 指定字符串形式的用于播放响铃的音频的 DOM 元素 ID 。
       * @param {String} localCanvas - 本地画布的元素ID 。
       * @returns {boolean} 返回是否加载成功
       */

    }, {
      key: "loadConference",
      value: function loadConference(worker, localVideo, remoteVideo, bellAudio, localCanvas) {
        var ret = this.loadService('Conference',worker ||  window.CubeSIPWorker.Conference.ServiceWorker);

        if (ret) {
          this.sipService = new window.CubeSIPWorker.ServiceWorker();
          this.sipService.start(this, document.getElementById(localVideo), document.getElementById(remoteVideo), bellAudio !== undefined ? document.getElementById(bellAudio) : null); // 创建媒体控制器

          this.sipMediaService = new window.CubeSignaling.MediaServiceWorker(this.sipService, localCanvas);
        }

        return ret;
      }
      /**
       * 加载白板服务模块。
       *
       * @param {String} domId - 指定白板画布容器 DOM 节点的 ID 。
       * @param {String} name - 指定白板名称。
       * @returns {WhiteboardService} 白板服务实例。
       */

    }, {
      key: "loadWhiteboard",
      value: function loadWhiteboard(worker,domId, name) {
        return this.loadService('Whiteboard', worker || window.CubeWhiteboard.ServiceWorker, domId, name);
      }
      /**
       * 加载直播模块。
       * @param {Object} liveCore - 直播核心库
       * @param {HTMLElement} viewDom - 需要显示直播画面的视图元素
       * @returns {boolean} 返回是否加载成功
       */

    }, {
      key: "loadLive",
      value: function loadLive(liveCore, viewDom) {
        return this.loadService('Live', window.CubeLive.ServiceWorker, window.CubeliveCore, viewDom);
      }
      /**
       * 返回数据库服务对象
       * @returns {null| IndexedDBWorker | WebDatabaseWorker}
       */

    }, {
      key: "getDataBaseService",
      value: function getDataBaseService() {
        return _cubeDatabase["default"].getInstance();
      }
      /**
       * 返回账号管理服务对象
       * @returns {null|AccountService}
       */

    }, {
      key: "getAccountService",
      value: function getAccountService() {
        return this.services.get('Account');
      }
      /**
       * 返回群组服务实例。
       *
       * @returns {null|GroupService} 群组服务对象。
       */

    }, {
      key: "getGroupService",
      value: function getGroupService() {
        return this.services.get('Group');
      }
      /**
       * 返回消息服务的实例。
       *
       * @returns {null|MessageService} 消息服务实例。
       */

    }, {
      key: "getMessageService",
      value: function getMessageService() {
        return this.services.get('Message');
      }
      /**
       * 返回音视频通话服务的实例。
       *
       * @returns {null|CallService} 音视频服务实例。
       */

    }, {
      key: "getCallService",
      value: function getCallService() {
        return this.services.get('Call');
      }
      /**
       * 返回引擎中用户操作媒体设备的媒体控制器对象实例。
       *
       * @returns {null|MediaService} 返回媒体控制器对象实例。
       */

    }, {
      key: "getMediaService",
      value: function getMediaService() {
        if (null != this.session.callPeer) {
          if (this.session.callPeer.type == 'conference' && null != this.sipService) {
            return this.sipMediaService;
          } else {
            return this.sspMediaService;
          }
        } else {
          return this.sspMediaService;
        }
      }
      /**
       * 添加媒体探针
       */

    }, {
      key: "addMediaProbe",
      value: function addMediaProbe(probe) {
        if (this.sipMediaService) {
          this.sipMediaService.addMediaProbe(probe);
        }

        if (this.sspMediaService) {
          this.sspMediaService.addMediaProbe(probe);
        }
      }
      /**
       * 移除媒体探针
       */

    }, {
      key: "removeMediaProbe",
      value: function removeMediaProbe(probe) {
        if (this.sipMediaService) {
          this.sipMediaService.removeMediaProbe(probe);
        }

        if (this.sspMediaService) {
          this.sspMediaService.removeMediaProbe(probe);
        }
      }
      /**
       * 返回白板服务对象实例。
       *
       * @param {String} boardName - 指定白板服务的名称，如果不填写该参数，则返回第一个白板服务。
       * @returns {null|WhiteboardService} 白板服务对象实例。
       */

    }, {
      key: "getWhiteboardService",
      value: function getWhiteboardService(boardName) {
        if (typeof boardName === 'string') {
          return this.services.get('Whiteboard' + boardName);
        }

        return this.services.get('Whiteboard');
      }
      /**
       * 返回会议服务的实例。
       *
       * @returns {null|ConferenceService} 会议服务实例。
       */

    }, {
      key: "getConferenceService",
      value: function getConferenceService() {
        return this.services.get('Conference');
      }
      /**
       * 返回文件管理服务实例。
       *
       * @returns {null|FileManagerService} 文件管理服务实例。
       */

    }, {
      key: "getFileManagerService",
      value: function getFileManagerService() {
        return this.services.get('Cloud');
      }
      /**
       * 返回指令服务的实例。
       *
       * @returns {null|InstructionService} 指令服务实例。
       */

    }, {
      key: "getInstructionService",
      value: function getInstructionService() {
        return this.services.get('Instruction');
      }
      /**
       * 返回远程桌面服务的实例。
       *
       * @returns {null|RemoteDesktopService} 指令服务实例。
       */

    }, {
      key: "getRemoteDesktopService",
      value: function getRemoteDesktopService() {
        return this.services.get('RemoteDesktop');
      }
      /**
       * 返回直播服务的实例。
       *
       * @returns {null|LiveService} 指令服务实例。
       */

    }, {
      key: "getLiveService",
      value: function getLiveService() {
        return this.services.get('Live');
      }
    }, {
      key: "getDeviceInfo",
      value: function getDeviceInfo() {
        if (null == this.deviceInfo) {
          var deviceName = null != this.config && this.config.deviceName ? this.config.deviceName : navigator.appName;
          this.deviceInfo = {
            name: deviceName,
            version: navigator.appVersion,
            platform: navigator.platform,
            deviceId: this.utils.getLocalUUID()
          };
        }

        return this.deviceInfo;
      }
    }, {
      key: "getUtils",
      value: function getUtils() {
        return this.utils;
      }
    }, {
      key: "getAutoTest",
      value: function getAutoTest() {
        return this.autoTest;
      }
    }, {
      key: "_parseICEServers",
      value: function _parseICEServers(servers) {
        var stunUrls = [],
            ret = [],
            iceServers = JSON.parse(servers);

        for (var i = 0; i < iceServers.length; i++) {
          var _iceServers$i = iceServers[i],
              Username = _iceServers$i.Username,
              Password = _iceServers$i.Password,
              Host = _iceServers$i.Host,
              Port = _iceServers$i.Port;

          if (null != Username && null != Password) {
            ret.push({
              urls: "turn:" + Host + ':' + Port,
              username: Username,
              credential: Password
            });
          }

          stunUrls.push("stun:" + Host + ':' + Port);
        }

        if (stunUrls.length > 0) {
          ret.push({
            urls: stunUrls
          });
        }

        return ret;
      }
      /**
       * 设置资源路径, 资源路径包含引擎依赖的声音文件和图片文件, 资源目录应和引擎提供的资源目录结构相同。
       *
       * @default "./assets"
       * @param {String} path - 资源根目录
       */

    }, {
      key: "setResourcePath",
      value: function setResourcePath(path) {
        this.resourcePath = path;

        if (window.CubeWhiteboard.ServiceWorker) {
          var services = this.services.values();

          for (var i = 0; i < services.length; i++) {
            var service = services[i];

            if (service instanceof window.CubeWhiteboard.ServiceWorker) {
              service.core.updateResourcePath();
            }
          }
        }
      }
    }, {
      key: "addCelletMember",
      value: function addCelletMember(cellet, member) {
        var members = this.celletMembers.get(cellet);

        if (members instanceof Array) {
          members.push(member);
        } else {
          members = [member]; // 记录被激活的有效数据通道

          this._VALID_CELLETS.push(cellet);
        }

        this.celletMembers.put(cellet, members);
      }
    }, {
      key: "removeCelletMember",
      value: function removeCelletMember(cellet, member) {
        var members = this.celletMembers.get(cellet);

        if (members instanceof Array) {
          for (var i = 0; i < members.length; i++) {
            if (members[i] === member) {
              members.splice(i, 1);
            }
          }

          this.celletMembers.put(cellet, members);
        }
      }
    }, {
      key: "onDialogue",
      value: function onDialogue(cellet, action, dialect) {
        if (cellet === _CELLET.CELLET.Responder) {
          this.responder.fireDialogue(action, dialect);
        } else {
          var members = this.celletMembers.get(cellet);

          if (action == "query-device-ack") {
            this.celletMembers.get("CubeMaster")[0].onDialogue(action, dialect);
          }

          if (members instanceof Array) {
            for (var i = 0; i < members.length; i++) {
              members[i].onDialogue(action, dialect);
            }
          }
        }
      }
    }, {
      key: "_setCodec",
      value: function _setCodec(sdp) {
        var codec = this.config.videoCodec,
            curConference = this.getConferenceService() && this.getConferenceService().curConference;

        if (curConference && curConference.type == CubeConferenceType.ShareScreen) {
          // 屏幕分享 花屏问题 升级VP9;
          codec = _CodecType.CodecType.VP9;
          sdp = sdp.replace(102400, 1024);
        }

        switch (this.config.videoCodec) {
          case _CodecType.CodecType.H264:
            sdp = this.utils.isFirefox ? sdp.replace(/SAVPF 96/g, 'SAVPF 126') : sdp.replace(/SAVPF 96 97 98 99 100/g, 'SAVPF 100 96 97 98 99');
            sdp = this.utils.isFirefox ? sdp.replace(/SAVPF 96/g, 'SAVPF 126') : sdp.replace(/SAVPF  96 98 100 102/g, 'SAVPF 100 96 98 102');
            break;

          case _CodecType.CodecType.VP9:
            sdp = sdp.replace(/SAVPF 96 97 98/g, 'SAVPF 98 96 97');
            sdp = sdp.replace(/SAVPF 96 98/g, 'SAVPF 98 96');
            break;

          default:
            break;
        }

        return sdp;
      } // 暖车测试

    }, {
      key: "warmUp",
      value: function warmUp(yesCb, noCb) {
        var _this2 = this;

        if (null == this.getCallService()) {
          if (undefined !== noCb) {
            noCb();
          }

          return;
        }

        var getUserMedia = navigator.getUserMedia || window.getUserMedia;

        if (undefined === getUserMedia || null == getUserMedia) {
          if (undefined !== noCb) {
            noCb();
          }

          return;
        }

        var overflow = document.body.style.overflow;
        var w = window.innerWidth;
        var h = window.innerHeight;
        document.body.style.overflow = "hidden";
        var vx = parseInt((w - 480) * 0.5);
        var vy = parseInt((h - 480) * 0.5) - 40;
        var bx = parseInt((w - 200 - 200 - 40) * 0.5);
        var by = parseInt(vy + 480 + 10);
        var mask = ['<div style="position:absolute;float:left;left:0px;top:0px;opacity:0.7;-moz-opacity:0.7;-webkit-opacity:0.7;background:#000;', 'width:', w, 'px;height:', h, 'px"></div>', '<video id="_cube_warmup_video" width="480" height="480" style="position:absolute;float:left;left:', vx, 'px;top:', vy, 'px;background:#101010;" autoplay></video>', '<button id="_cube_warmup_yes" style="width:200px;height:30px;position:absolute;float:left;left:', bx, 'px;top:', by, 'px;">我看到了视频</button>', '<button id="_cube_warmup_no" style="width:200px;height:30px;position:absolute;float:left;left:', bx + 240, 'px;top:', by, 'px;">我没有看到视频</button>'];
        var c = document.createElement("div");
        c.style.position = "absolute";
        c.style.styleFloat = "left";
        c.style.cssFloat = "left";
        c.style.left = "0px";
        c.style.top = "0px";
        c.style.width = w + "px";
        c.style.height = h + "px";
        c.style.zIndex = 9998;
        c.innerHTML = mask.join('');
        document.body.appendChild(c);
        var video = document.getElementById('_cube_warmup_video');
        var localStream = null;

        if (this.utils.isIE || this.utils.isSafari) {
          navigator.getUserMedia = window.getUserMedia;
        }

        navigator.getUserMedia({
          "audio": true,
          "video": true
        }, function (stream) {
          localStream = stream;

          if (_this2.utils.isIE || _this2.utils.isSafari) {
            window.attachMediaStream(video, stream);
            video = document.getElementById('_cube_warmup_video');
            video.style.position = "absolute";
            video.style.styleFloat = "left";
            video.style.cssFloat = "left";
            video.style.left = vx + "px";
            video.style.top = vy + "px";
            video.style.zIndex = 9999;
            return;
          }

          if (window.URL) {
            // Chrome case: URL.createObjectURL() converts a MediaStream to a blob URL
            video.src = window.URL.createObjectURL(localStream);
          } else {
            // Firefox and Opera: the src of the video can be set directly from the stream
            video.src = localStream;
          }

          video.onloadedmetadata = function (e) {
            video.play();
          };
        }, function (error) {
          //alert('发生错误: ' + JSON.stringify(error));
          document.body.removeChild(c);
          document.body.style.overflow = overflow;

          if (undefined !== noCb) {
            noCb();
          }
        });

        var closeFun = function closeFun() {
          if (_this2.utils.isIE || _this2.utils.isSafari) {
            window.attachMediaStream(document.getElementById('_cube_warmup_video'), null);
          } else {
            video.src = "";
          }

          if (null != localStream) {
            localStream.stop();
            localStream = null;
          }

          document.body.removeChild(c);
          document.body.style.overflow = overflow;
        };

        var btn = document.getElementById('_cube_warmup_yes');
        btn.addEventListener('click', function (e) {
          closeFun();

          if (undefined !== yesCb) {
            yesCb.call(null);
          }
        }, false);
        btn = document.getElementById('_cube_warmup_no');
        btn.addEventListener('click', function (e) {
          closeFun();

          if (undefined !== noCb) {
            noCb();
          }
        }, false);
      }
    }]);

    return CubeEngine;
  }();

  _exports.CubeEngine = CubeEngine;
});

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var fails = __webpack_require__(4);
var isArray = __webpack_require__(86);
var isObject = __webpack_require__(18);
var toObject = __webpack_require__(57);
var toLength = __webpack_require__(31);
var createProperty = __webpack_require__(105);
var arraySpeciesCreate = __webpack_require__(85);
var arrayMethodHasSpeciesSupport = __webpack_require__(109);
var wellKnownSymbol = __webpack_require__(8);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(67);
var $ = __webpack_require__(45);
var DESCRIPTORS = __webpack_require__(14);
var USE_NATIVE_URL = __webpack_require__(201);
var global = __webpack_require__(9);
var defineProperties = __webpack_require__(26);
var redefine = __webpack_require__(48);
var anInstance = __webpack_require__(80);
var has = __webpack_require__(29);
var assign = __webpack_require__(202);
var arrayFrom = __webpack_require__(104);
var codeAt = __webpack_require__(68).codeAt;
var toASCII = __webpack_require__(203);
var setToStringTag = __webpack_require__(59);
var URLSearchParamsModule = __webpack_require__(204);
var InternalStateModule = __webpack_require__(41);

var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[A-Za-z]/;
var ALPHANUMERIC = /[\d+\-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
// eslint-disable-next-line no-control-regex
var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = input.split('.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.pop();
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && part.charAt(0) == '0') {
      radix = HEX_START.test(part) ? 16 : 8;
      part = part.slice(radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
      number = parseInt(part, radix);
    }
    numbers.push(number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = numbers.pop();
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function () {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (char()) {
    if (pieceIndex == 8) return;
    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }
    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (char()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!DIGIT.test(char())) return;
        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      result.unshift(host % 256);
      host = floor(host / 256);
    } return result.join('.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[index].toString(16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (char, set) {
  var code = codeAt(char, 0);
  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return has(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
    string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function (segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride && (
            (isSpecial(url) != has(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || (char == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;
          else if (char == ']') seenBracket = false;
          buffer += char;
        } break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += char;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        } break;

      case PATH:
        if (
          char == EOF || char == '/' ||
          (char == '\\' && isSpecial(url)) ||
          (!stateOverride && (char == '?' || char == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }
            url.path.push(buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';
          else if (char == '#') url.query += '%23';
          else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);
    else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URL(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);
var wellKnownSymbol = __webpack_require__(8);
var IS_PURE = __webpack_require__(22);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?e=1', 'http://a');
  var searchParams = url.searchParams;
  url.pathname = 'c%20d';
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?e=1'
    || searchParams.get('e') !== '1'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1';
});


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(14);
var fails = __webpack_require__(4);
var objectKeys = __webpack_require__(27);
var getOwnPropertySymbolsModule = __webpack_require__(52);
var propertyIsEnumerableModule = __webpack_require__(47);
var toObject = __webpack_require__(57);
var IndexedObject = __webpack_require__(3);

var nativeAssign = Object.assign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !nativeAssign || fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line  max-statements
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return output.join('');
};

module.exports = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
  }
  return encoded.join('.');
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(1);
var $ = __webpack_require__(45);
var USE_NATIVE_URL = __webpack_require__(201);
var redefine = __webpack_require__(48);
var redefineAll = __webpack_require__(70);
var setToStringTag = __webpack_require__(59);
var createIteratorConstructor = __webpack_require__(54);
var InternalStateModule = __webpack_require__(41);
var anInstance = __webpack_require__(80);
var hasOwn = __webpack_require__(29);
var bind = __webpack_require__(76);
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(18);
var getIterator = __webpack_require__(182);
var getIteratorMethod = __webpack_require__(78);
var wellKnownSymbol = __webpack_require__(8);

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

var serialize = function (it) {
  return encodeURIComponent(it).replace(find, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = query.split('&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, step, entryIterator, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        while (!(step = iterator.next()).done) {
          entryIterator = getIterator(anObject(step.value));
          if (
            (first = entryIterator.next()).done ||
            (second = entryIterator.next()).done ||
            !entryIterator.next().done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.appent` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(120);

__webpack_require__(62);

__webpack_require__(132);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(206), __webpack_require__(207), __webpack_require__(208)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _RegistrationState, _CELLET, _SignalingState) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Session = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /**
   * 协作交互时通信会话对象。
   * <p>
   * 每个会话表示一个可被管理的端到端的状态描述。
   * 可以从会话对象中获取关于本次会话相关的信息。
   * </p>
   *
   * @class Session
   * @author Xu Jiangwei, Guan Yong
   */
  var Session =
  /*#__PURE__*/
  function () {
    function Session() {
      _classCallCheck(this, Session);

      this.name = null;
      this.displayName = null;
      this.regState = _RegistrationState.RegistrationState.None;
      this.callPeer = null;
      this.callDirection = null;
      this.callState = null;
      this.latency = -1;
      this.callTime = 0;
    }
    /**
     * 返回己方（本地端）的注册名。
     *
     * @returns {String} 返回字符串形式的己方名称。
     */


    _createClass(Session, [{
      key: "getName",
      value: function getName() {
        return this.name;
      }
      /**
       * 返回己方（本地端）的显示名。
       *
       * @returns {String} 返回字符串形式的己方显示名称。
       */

    }, {
      key: "getDisplayName",
      value: function getDisplayName() {
        return this.displayName;
      }
      /**
       * 返回会话是否已经注册。
       *
       * @returns {boolean} 如果已经注册则返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "hasRegistered",
      value: function hasRegistered() {
        return this.regState == _RegistrationState.RegistrationState.Ok;
      }
      /**
       * 返回己方的注册状态。
       *
       * @returns {RegistrationState} 返回注册状态枚举。
       */

    }, {
      key: "getRegState",
      value: function getRegState() {
        return this.regState;
      }
    }, {
      key: "setCallPeer",
      value: function setCallPeer(peer) {
        this.callPeer = peer;
      }
      /**
       * 返回音/视频通话对端对象。
       *
       * @returns {Peer} 返回正在使用的音/视频通话对端对象实例。
       */

    }, {
      key: "getCallPeer",
      value: function getCallPeer() {
        return this.callPeer;
      }
      /**
       * 返回音/视频通话是呼叫方向。
       *
       * @returns {CallDirection} 返回正在使用的音/视频通话对端对象实例。
       */

    }, {
      key: "getCallDirection",
      value: function getCallDirection() {
        return this.callDirection;
      }
      /**
       * 返回当前会话是否正在进行音/视频通话。
       *
       * @returns {boolean} 如果正在通话返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "isCalling",
      value: function isCalling() {
        //如果音视频模块未加载则直接返回false
        if (null == window.cube.getCallService()) {
          return false;
        }

        return this.callState == _SignalingState.SignalingState.Invite || this.callState == _SignalingState.SignalingState.Incall || this.callState == _SignalingState.SignalingState.Progress || this.callState == _SignalingState.SignalingState.Ringing || this.callState == _SignalingState.SignalingState.OtherCall;
      }
      /**
       * 返回当前呼叫是否是会议呼叫。
       *
       * @returns {boolean} 如果是会议呼叫返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "isConferenceCall",
      value: function isConferenceCall() {
        if (null != this.callPeer && null != this.callPeer.name) {
          if (this.callPeer.name.length <= 4) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "isShareDesktop",
      value: function isShareDesktop() {
        if (null != this.callPeer && null != this.callPeer.conference) {
          if (this.callPeer.conference.type == 'ShareScreen') {
            return true;
          }
        }

        return false;
      }
      /**
       * 返回当前网络的媒体访问行程指标。
       *
       * @returns {Number} 返回单位为毫秒的，网络数据通信的行程。该值越小表示网络延迟越小。
       */

    }, {
      key: "getLatency",
      value: function getLatency() {
        if (this.isCalling()) {
          return this.latency;
        }

        return this.getMainLatency();
      }
      /**
       * 返回当前网络的主服务节点访问行程指标。
       *
       * @returns {Number} 返回单位为毫秒的，网络数据通信的行程。该值越小表示网络延迟越小。
       */

    }, {
      key: "getMainLatency",
      value: function getMainLatency() {
        var sv = -1;

        if (window.nucleus.talkService.isCalled(_CELLET.CELLET.Signaling)) {
          sv = window.nucleus.talkService.getPingPongTime(_CELLET.CELLET.Signaling);
        }

        var mv = -1;

        if (window.nucleus.talkService.isCalled(_CELLET.CELLET.Messaging)) {
          mv = window.nucleus.talkService.getPingPongTime(_CELLET.CELLET.Messaging);
        }

        var wv = -1;

        if (window.nucleus.talkService.isCalled(_CELLET.CELLET.Whiteboard)) {
          wv = window.nucleus.talkService.getPingPongTime(_CELLET.CELLET.Whiteboard);
        } //Math.max(Math.max(sv, mv), wv);


        var c = 0;
        var sum = 0;

        if (sv > 0) {
          sum += sv;
          ++c;
        }

        if (mv > 0) {
          sum += mv;
          ++c;
        }

        if (wv > 0) {
          sum += wv;
          ++c;
        }

        return c > 0 ? parseInt(Math.round(sum / c)) : -1;
      }
      /**
       * 返回通话时间
       *
       * @returns {Number} 返回通话时间戳。
       * @memberof CubeSession
       * @instance
       */

    }, {
      key: "getCallTime",
      value: function getCallTime() {
        return this.callTime;
      }
    }]);

    return Session;
  }();

  _exports.Session = Session;
});

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.RegistrationState = void 0;

  /**
   * Created by GuanYong on 2017/4/25.
   */
  var RegistrationState = {
    /** 引擎初始化时使用的状态，表示没有执行过注册流程。*/
    None: "None",

    /** 正在处理注册状态。*/
    Progress: "Progress",

    /** 注册成功状态。*/
    Ok: "Ok",

    /** 成功清理注册状态。*/
    Cleared: "Cleared",

    /** 注册失败。*/
    Failed: "Failed"
  };
  _exports.RegistrationState = RegistrationState;
});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CELLET = void 0;

  /**
   * Created by GuanYong on 2017/4/26.
   */

  /**
   * CELLET枚举
   *
   * @enum
   * @author GuanYong
   */
  var CELLET = {
    Master: 'CubeMaster',
    Responder: 'CubeResponder',
    Instruction: 'CubeInstruction',
    Messaging: 'CubeMessaging',
    Signaling: 'CubeSignaling',
    Whiteboard: 'CubeWhiteboard',
    RemoteDesktop: 'CubeRDServer',
    Live: 'CubeLive',
    Setting: 'CubeSetting'
  };
  _exports.CELLET = CELLET;
});

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SignalingState = void 0;

  /*
   * SignalingState.js
   * Cube Engine
   * 
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 信令状态。
   *
   * @readonly
   * @enum {Number} SignalingState
   * @author Xu Jiangwei
   */
  var SignalingState = {
    /** 空状态。信令停止工作状态。 */
    None: 0,

    /** 正在处理状态。 */
    Progress: 1,

    /** 发起呼叫邀请状态。 */
    Invite: 2,

    /** 对方振铃状态。 */
    Ringing: 3,

    /** 呼叫进行中状态。 */
    Incall: 4,

    /** 呼叫结束状态。 */
    End: 5,

    /** 其他端正在呼叫 */
    OtherCall: 6
  };
  _exports.SignalingState = SignalingState;
});

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(210);

__webpack_require__(106);

__webpack_require__(211);

__webpack_require__(212);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(126);

__webpack_require__(213);

__webpack_require__(62);

__webpack_require__(64);

__webpack_require__(132);

__webpack_require__(216);

__webpack_require__(139);

__webpack_require__(141);

__webpack_require__(224);

__webpack_require__(227);

__webpack_require__(142);

__webpack_require__(146);

__webpack_require__(196);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Utils = void 0;

  /*
   * Utils.js
   * Cube Engine
   *
   * Created by Ambrose Xu on 15/4/5.
   * Copyright (c) 2015 Cube Team. All rights reserved.
   */
  var Logger = window.CellCloud.Logger; // 归一 indexedDB

  if (!window.indexedDB) {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
  }

  window.addEventListener("error", function (e) {
    if (Logger.e) {
      Logger.e("Error", e.error);
    }
  }, false);
  var ua = navigator.userAgent.toLowerCase();
  var isIPad = ua.match(/ipad/i) == "ipad";
  var isIPhoneOs = ua.match(/iphone os/i) == "iphone os";
  var isMidp = ua.match(/midp/i) == "midp"; //let isUc7 = ua.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  //let isUc = ua.match(/ucweb/i) == "ucweb";

  var isAndroid = ua.match(/android/i) == "android";
  var isCE = ua.match(/windows ce/i) == "windows ce";
  var isWM = ua.match(/windows mobile/i) == "windows mobile";
  var isStrict = document.compatMode == "CSS1Compat"; // 是否定义 DOCUMENT 类型

  var isOpera = ua.indexOf("opera") > -1; // Opera

  var isChrome = ua.indexOf("chrome") > -1; // Chrome

  var isFirefox = ua.indexOf("firefox") > -1; // Firefox

  var isSafari = !isChrome && !isAndroid && /webkit|khtml/.test(ua); // Safari
  //let isSafari3 = isSafari && ua.indexOf("webkit/5") != -1;	// Safari3

  var isIE = "ActiveXObject" in window; // IE

  var isIE6 = isIE && !window.XMLHttpRequest; // IE6

  var isIE7 = isIE && window.XMLHttpRequest && !document.documentMode; // IE7

  var isIE8 = isIE && !-[1] && document.documentMode; // IE8

  var isIE9 = navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i) == "9."; // IE9

  var isIE10 = isIE && /10\.0/.test(ua); // IE10

  var isIE11 = isIE && ua.indexOf("rv:11.0") > -1; // IE11

  var isGecko = !isSafari && !isChrome && ua.indexOf("gecko") > -1; // Gecko 内核

  var isGecko3 = isGecko && ua.indexOf("rv:1.9") > -1; // Gecko3 内核
  //let isBorderBox = isIE && !isStrict; // 使用盒模型

  var isWindows = ua.indexOf("windows") != -1 || ua.indexOf("win32") != -1; // 是 Windows 系统

  var isMac = ua.indexOf("macintosh") != -1 || ua.indexOf("mac os x") != -1; // 是 MacOS 系统

  var isAir = ua.indexOf("adobeair") != -1; // 是用 Adobe Air 浏览

  var isLinux = ua.indexOf("linux") != -1; // 是 Linux 系统

  var isSecure = window.location.href.toLowerCase().indexOf("https") === 0; // 是SSL浏览

  var regularEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  var curMediaDevice = {};
  var Utils = {
    isIPad: isIPad,
    isIPhone: isIPhoneOs,
    isAndroid: isAndroid,
    isPhone: isIPhoneOs || isAndroid,
    isDesktop: !isIPhoneOs && !isAndroid && !isIPad,
    isWindows: isWindows,
    isMac: isMac,
    isLinux: isLinux,
    isChrome: isChrome,
    isFirefox: isFirefox,
    isIE: isIE,
    isIE9: isIE9,
    isIE11: isIE11,
    isSafari: isSafari,
    isSecure: isSecure,
    curMediaDevice: curMediaDevice,
    randomNumber: function randomNumber(begin, end) {
      return Math.floor(Math.random() * (end - begin)) + begin;
    } // 向上检索 DOM 节点指定的 Class
    ,
    retrievalDomClass: function retrievalDomClass(node, className) {
      var cstring = null;

      try {
        cstring = node.getAttribute('class');
      } catch (e) {
        return null;
      }

      if (cstring != null && cstring.indexOf(className) >= 0) {
        return node;
      }

      var pn = node.parentNode;

      if (pn != null && pn !== undefined) {
        // 递归
        return global.utils.retrievalDomClass(pn, className);
      } else {
        return null;
      }
    },
    formatDuration: function formatDuration(time) {
      var s = time / 1000.0;
      var ns = parseInt(s);

      if (ns < 60) {
        return "00:" + (ns < 10 ? "0" + ns : ns);
      }

      var m = s / 60.0;
      var nm = parseInt(Math.floor(m));
      var ss = parseInt(ns % 60);
      return (nm < 10 ? "0" + nm : nm) + ":" + (ss < 10 ? "0" + ss : ss);
    },
    getUrlParams: function getUrlParams() {
      var vars = [],
          hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

      for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }

      return vars;
    },
    getUrlParam: function getUrlParam(name) {
      var ret = this.getUrlParams()[name];
      return undefined === ret ? null : ret;
    },
    getCookieVal: function getCookieVal(offset) {
      var endstr = document.cookie.indexOf(";", offset);

      if (endstr == -1) {
        endstr = document.cookie.length;
      }

      return unescape(document.cookie.substring(offset, endstr));
    } // get cookie value
    ,
    getCookie: function getCookie(name) {
      var arg = name + "=";
      var alen = arg.length;
      var clen = document.cookie.length;
      var i = 0;

      while (i < clen) {
        var j = i + alen;

        if (document.cookie.substring(i, j) == arg) {
          return this.getCookieVal(j);
        }

        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
      }

      return null;
    } // store cookie value with optional details as needed
    ,
    setCookie: function setCookie(name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) + (expires ? "; expires=" + expires : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "; secure" : "");
    } // remove the cookie by setting ancient expiration date
    ,
    deleteCookie: function deleteCookie(name, path, domain) {
      if (this.getCookie(name)) {
        document.cookie = name + "=" + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-1970 00:00:01 GMT";
      }
    } // 获取元素子节点
    ,
    getElementChildren: function getElementChildren(el) {
      if (!!el.children) {
        return el.children;
      } else {
        var arr = [];
        var nodeList = el.childNodes;

        for (var i = 0; i < nodeList.length; ++i) {
          if (nodeList[i].nodeType == 1) {
            arr.push(nodeList[i]);
          }
        }

        return arr;
      }
    },
    getDrawPosition: function getDrawPosition(dom, event) {
      var pos = event.touches === undefined ? this.getMousePos(event) : this.getTouchPos(event);
      var dx = this.getX(dom);
      var dy = this.getY(dom);
      return {
        x: pos.x - dx,
        y: pos.y - dy
      };
    },
    getCursorPosition: function getCursorPosition(event) {
      if (event.touches === undefined) {
        var x = event.clientX || event.pageX;
        var y = event.clientY || event.pageY;
        return {
          x: x,
          y: y
        };
      } else if (event.touches.length > 0) {
        var _x = event.touches[0].pageX || event.touches[0].clientX || event.clientX;

        var _y = event.touches[0].pageY || event.touches[0].clientY || event.clientY;

        return {
          x: _x,
          y: _y
        };
      } else {
        var _x2 = event.changedTouches[0].clientX;
        var _y2 = event.changedTouches[0].clientY;
        return {
          x: _x2,
          y: _y2
        };
      }
    },
    getMousePos: function getMousePos(event) {
      var e = event || window.event;
      var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      var x = e.pageX || e.clientX + scrollX;
      var y = e.pageY || e.clientY + scrollY;
      return {
        x: x,
        y: y
      };
    },
    getTouchPos: function getTouchPos(event) {
      var e = event || window.event;
      var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      var x = e.touches[0].pageX || e.clientX + scrollX;
      var y = e.touches[0].pageY || e.clientY + scrollY;
      return {
        x: x,
        y: y
      };
    },
    getX: function getX(obj) {
      var left = obj.offsetLeft;
      var parObj = obj;

      while ((parObj = parObj.offsetParent) != null) {
        left += parObj.offsetLeft;
      }

      return left;
    },
    getY: function getY(obj) {
      var top = obj.offsetTop;
      var parObj = obj;

      while ((parObj = parObj.offsetParent) != null) {
        top += parObj.offsetTop;
      }

      return top;
    } // 对齐数字，修正浮点数精度，返回 Number 型
    ,
    fixNumber: function fixNumber(number) {
      var num = new Number(number);
      return Number(num.toFixed(2));
    } // 对齐数字，修正浮点数精度，返回 String 型
    ,
    fixNumberToString: function fixNumberToString(number) {
      var num = new Number(number);
      return num.toFixed(2);
    },
    unselectable: function unselectable(node) {
      node.setAttribute("unselectable", "on");

      node.onmousedown = function () {
        return false;
      };

      var s = node.style;
      s.userSelect = "none";
      s.webkitUserSelect = "none";
      s.MozUserSelect = "-moz-none";
    },
    verifyEmail: function verifyEmail(email) {
      return regularEmail.test(email);
    },
    isSocketSupported: function isSocketSupported() {
      return undefined !== window.WebSocket;
    },
    isSVGSupported: function isSVGSupported() {
      var SVG_NS = "http://www.w3.org/2000/svg";
      return !!document.createElementNS && !!document.createElementNS(SVG_NS, 'svg').createSVGRect;
    },
    isDBSupported: function isDBSupported() {
      return undefined !== window.indexedDB;
    },
    isRecorderSupported: function isRecorderSupported() {
      var r = window.StereoRecorder || window.MediaStreamRecorder || window.WhammyRecorder || window.GifRecorder || window.CanvasRecorder;
      return undefined !== r;
    },
    isVideoSupported: function isVideoSupported() {
      return !!document.createElement('video').canPlayType;
    },
    isUserMediaSupported: function isUserMediaSupported() {
      if (isSafari && null == navigator.getUserMedia) {
        return false;
      } // 对使用 Chrome 内核，但是版本过低的浏览器不能通过测试


      var index = navigator.userAgent.indexOf("Chrome/");

      if (index > 0) {
        var str = navigator.userAgent.substr(index + 7);
        var ni = str.indexOf(".");

        if (ni > 0) {
          str = str.substring(0, ni);
          var v = parseInt(str);

          if (v < 37) {
            return false;
          }
        }
      }

      return undefined !== navigator.getUserMedia || undefined !== window.getUserMedia;
    },
    measureBandwidth: function measureBandwidth(fast, result, error, host) {
      var downloadSize = fast ? 1054738 : 10561396;
      var startTime = 0;
      var endTime = 0;
      var bandwidth = 0;
      var timeoutTimer = 0;
      var img = new Image();

      img.onload = function () {
        clearTimeout(timeoutTimer);
        timeoutTimer = 0;
        endTime = Date.now();
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var bwbps = (bitsLoaded / duration).toFixed(2);
        var bwKbps = (bwbps / 1024).toFixed(2);
        var bwMbps = (bwKbps / 1024).toFixed(2);
        result.call(null, bwbps, bwKbps, bwMbps);
      };

      img.onerror = function (err, msg) {
        error.call(null, err);
      };

      startTime = Date.now();
      var cacheBuster = "?t=" + startTime;
      var src = "assets/bandwidth/" + (fast ? "bandwidth-1m.jpg" : "bandwidth-10m.jpg") + cacheBuster;

      if (host !== undefined) {
        src = "http://" + host + "/" + src;
      }

      img.src = src;
      timeoutTimer = setTimeout(function () {
        clearTimeout(timeoutTimer);
        timeoutTimer = 0;
        error.call(null);
      }, 30000);
    },
    requestGet: function requestGet(url, success, error) {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState == 4) {
          if (request.status == 200) {
            success.call(null, JSON.parse(request.responseText));
          } else {
            error.call(null, request.status);
          }
        }
      };

      request.open("GET", url);
      request.send(null);
    },
    parseXml: function parseXml(xmlString) {
      var xmlDoc = null;

      if (!window.DOMParser && window.ActiveXObject) {
        var xmlDomVersions = ['MSXML.2.DOMDocument.6.0', 'MSXML.2.DOMDocument.3.0', 'Microsoft.XMLDOM'];

        for (var i = 0; i < xmlDomVersions.length; i++) {
          try {
            xmlDoc = new ActiveXObject(xmlDomVersions[i]);
            xmlDoc.async = false;
            xmlDoc.loadXML(xmlString);
            break;
          } catch (e) {}
        }
      } //支持Mozilla浏览器
      else if (window.DOMParser && document.implementation && document.implementation.createDocument) {
          try {
            var domParser = new DOMParser();
            xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
          } catch (e) {}
        } else {
          return null;
        }

      return xmlDoc;
    },
    hasMedia: function hasMedia() {
      return new Promise(function (resolve, reject) {
        navigator.mediaDevices.enumerateDevices().then(function (devices) {
          if (null != devices) {
            var video = false,
                audio = false;
            devices.map(function (device) {
              if (device.kind == "videoinput") {
                video = true;
              }

              if (device.kind == "audioinput") {
                audio = true;
              }
            });
            resolve([video, audio]);
          }
        });
      });
    },
    getUserMedia: function getUserMedia(videoEnable, audioEnable, callback) {
      var _this2 = this;

      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || window.getUserMedia;
      var constraints = {
        video: videoEnable,
        audio: audioEnable
      };

      var _this = this;

      if (navigator.getUserMedia) {
        navigator.getUserMedia(constraints, function (stream) {
          _this2.curMediaDevice = {};

          _this2.getDeviceIdByTrack(stream.getTracks(), function (devices) {
            _this2.curMediaDevice[devices.deviceId] = devices;
          });

          callback(false, stream);
        }, function (err) {
          callback(err);
        });
      } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
          _this2.curMediaDevice = {};

          _this2.getDeviceIdByTrack(stream.getTracks(), function (devices) {
            _this2.curMediaDevice[devices.deviceId] = devices;
          });

          callback(false, stream);
        })['catch'](function (err) {
          callback(err);
        });
      } else {
        callback({
          code: window.CubeCore.StateCode.NotSupportUserMedia
        });
      }
    },
    getDeviceIdByTrack: function getDeviceIdByTrack(tracks, callback) {
      if (null != tracks) {
        tracks.map(function (track) {
          var groupId = track.getCapabilities().groupId;
          navigator.mediaDevices.enumerateDevices().then(function (devices) {
            devices.map(function (item) {
              if (item.kind.includes(track.kind) && groupId == item.groupId && item.deviceId.length > 20) {
                callback && callback(item);
              }
            });
          });
        });
      }
    },
    getLocalUUID: function getLocalUUID() {
      var localKey = 'CUBE_LOCAL_UUID';
      var uid = localStorage.getItem(localKey);

      if (null == uid) {
        uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0,
              v = c == 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
        localStorage.setItem(localKey, uid);
      }

      return uid;
    },
    closeMediaStream: function closeMediaStream(stream) {
      if (typeof stream.stop === 'function') {
        stream.stop();
      } else {
        var trackList = [stream.getAudioTracks(), stream.getVideoTracks()];

        for (var i = 0; i < trackList.length; i++) {
          var tracks = trackList[i];

          if (tracks && tracks.length > 0) {
            for (var j = 0; j < tracks.length; j++) {
              var track = tracks[j];

              if (typeof track.stop === 'function') {
                track.stop();
              }
            }
          }
        }
      }
    },
    getBytesLength: function getBytesLength(str) {
      /// <summary>获得字符串实际长度，中文2，英文1</summary>
      /// <param name="str">要获得长度的字符串</param>
      var realLength = 0,
          len = str.length,
          charCode = -1;

      for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;else realLength += 2;
      }

      return realLength;
    },
    extractVersion: function extractVersion(uastring, expr, pos) {
      var match = uastring.match(expr);
      return match && match.length >= pos && parseInt(match[pos]);
    }
  }; // 封装 window.localStorage
  // ;(function (window) {
  //     // 准备模拟对象、空函数等
  //     let LS, noop = function () {
  //         }, document = window.document,
  //         notSupport = {set: noop, get: noop, remove: noop, clear: noop, each: noop, obj: noop, length: 0};
  //
  //     // 优先探测userData是否支持，如果支持，则直接使用userData，而不使用localStorage
  //     // 以防止IE浏览器关闭localStorage功能或提高安全级别(*_* 万恶的IE)
  //     // 万恶的IE9(9.0.11）)，使用userData也会出现类似seesion一样的效果，刷新页面后设置的东西就没有了...
  //     // 只好优先探测本地存储，不能用再尝试使用userData
  //     (function () {
  //         // 先探测本地存储
  //         // 防止IE10早期版本安全设置有问题导致的脚本访问权限错误
  //         if ("localStorage" in window) {
  //             try {
  //                 LS = window.localStorage;
  //                 return;
  //             } catch (e) {
  //                 //如果报错，说明浏览器已经关闭了本地存储或者提高了安全级别
  //                 //则尝试使用userData
  //             }
  //         }
  //
  //         //继续探测userData
  //         let o = document.getElementsByTagName("head")[0], hostKey = window.location.hostname || "localStorage",
  //             d = new Date(), doc, agent;
  //
  //         // typeof o.addBehavior 在IE6下是object，在IE10下是function，因此这里直接用!判断
  //         // 如果不支持userData则跳出使用原生localStorage，如果原生localStorage报错，则放弃本地存储
  //         if (!o.addBehavior) {
  //             try {
  //                 LS = window.localStorage;
  //             } catch (e) {
  //                 LS = null;
  //             }
  //             return;
  //         }
  //
  //         try {
  //             // 尝试创建iframe代理，以解决跨目录存储的问题
  //             agent = new ActiveXObject('htmlfile');
  //             agent.open();
  //             agent.write('<s' + 'cript>document.w=window;</s' + 'cript><iframe src="/favicon.ico"></iframe>');
  //             agent.close();
  //             doc = agent.w.frames[0].document;
  //             // 这里通过代理document创建head，可以使存储数据垮文件夹访问
  //             o = doc.createElement('head');
  //             doc.appendChild(o);
  //         } catch (e) {
  //             // 不处理跨路径问题，直接使用当前页面元素处理
  //             // 不能跨路径存储，也能满足多数的本地存储需求
  //             o = document.getElementsByTagName("head")[0];
  //         }
  //
  //         // 初始化userData
  //         try {
  //             d.setDate(d.getDate() + 36500);
  //             o.addBehavior("#default#userData");
  //             o.expires = d.toUTCString();
  //             o.load(hostKey);
  //             o.save(hostKey);
  //         } catch (e) {
  //             // 防止部分外壳浏览器的bug出现导致后续js无法运行
  //             // 如果有错，放弃本地存储
  //             return;
  //         }
  //         // 开始处理userData
  //         // 以下代码感谢瑞星的刘瑞明友情支持，做了大量的兼容测试和修改
  //         // 并处理了userData设置的key不能以数字开头的问题
  //         let root, attrs;
  //         try {
  //             root = o.XMLDocument.documentElement;
  //             attrs = root.attributes;
  //         } catch (e) {
  //             //防止部分外壳浏览器的bug出现导致后续js无法运行
  //             //如果有错，放弃本地存储
  //             return;
  //         }
  //         let prefix = "p__hack_", spfix = "m-_-c",
  //             reg1 = new RegExp("^" + prefix),
  //             reg2 = new RegExp(spfix, "g"),
  //             encode = function (key) {
  //                 return encodeURIComponent(prefix + key).replace(/%/g, spfix);
  //             },
  //             decode = function (key) {
  //                 return decodeURIComponent(key.replace(reg2, "%")).replace(reg1, "");
  //             };
  //
  //         // 创建模拟对象
  //         LS = {
  //             length: attrs.length,
  //             isVirtualObject: true,
  //             getItem: function (key) {
  //                 // IE9中 通过o.getAttribute(name);取不到值，所以才用了下面比较复杂的方法。
  //                 return (attrs.getNamedItem(encode(key)) || {nodeValue: null}).nodeValue || root.getAttribute(encode(key));
  //             },
  //             setItem: function (key, value) {
  //                 //IE9中无法通过 o.setAttribute(name, value); 设置#userData值，而用下面的方法却可以。
  //                 try {
  //                     root.setAttribute(encode(key), value);
  //                     o.save(hostKey);
  //                     this.length = attrs.length;
  //                 } catch (e) {
  //                     // 这里IE9经常报没权限错误,但是不影响数据存储
  //                 }
  //             },
  //             removeItem: function (key) {
  //                 //IE9中无法通过 o.removeAttribute(name); 删除#userData值，而用下面的方法却可以。
  //                 try {
  //                     root.removeAttribute(encode(key));
  //                     o.save(hostKey);
  //                     this.length = attrs.length;
  //                 } catch (e) {
  //                     // 这里IE9经常报没权限错误,但是不影响数据存储
  //                 }
  //             },
  //             clear: function () {
  //                 while (attrs.length) {
  //                     this.removeItem(attrs[0].nodeName);
  //                 }
  //                 this.length = 0;
  //             },
  //             key: function (i) {
  //                 return attrs[i] ? decode(attrs[i].nodeName) : undefined;
  //             }
  //         };
  //
  //         // 提供模拟的"localStorage"接口
  //         if (!("localStorage" in window))
  //             window['localStorage'] = LS;
  //     })();
  //
  //     // 二次包装接口
  //     window.LS = !LS ? notSupport : {
  //         set: function (key, value) {
  //             // fixed iPhone/iPad 'QUOTA_EXCEEDED_ERR' bug
  //             if (this.get(key) !== undefined)
  //                 this.remove(key);
  //             LS.setItem(key, value);
  //             this.length = LS.length;
  //         },
  //         // 查询不存在的key时，有的浏览器返回null，这里统一返回undefined
  //         get: function (key) {
  //             let v = LS.getItem(key);
  //             return v === null ? undefined : v;
  //         },
  //         remove: function (key) {
  //             LS.removeItem(key);
  //             this.length = LS.length;
  //         },
  //         clear: function () {
  //             LS.clear();
  //             this.length = 0;
  //         },
  //         // 本地存储数据遍历，callback接受两个参数 key 和 value，如果返回false则终止遍历
  //         each: function (callback) {
  //             let list = this.obj(), fn = callback || function () {
  //             }, key;
  //             for (key in list)
  //                 if (fn.call(this, key, this.get(key)) === false)
  //                     break;
  //         },
  //         // 返回一个对象描述的localStorage副本
  //         obj: function () {
  //             let list = {}, i = 0, n, key;
  //             if (LS.isVirtualObject) {
  //                 list = LS.key(-1);
  //             }
  //             else {
  //                 n = LS.length;
  //                 for (; i < n; i++) {
  //                     key = LS.key(i);
  //                     list[key] = this.get(key);
  //                 }
  //             }
  //             return list;
  //         },
  //         length: LS.length
  //     };
  //     // 如果有jQuery，则同样扩展到jQuery
  //     if (window.jQuery) window.jQuery.LS = window.LS;
  // })(window);

  _exports.Utils = Utils;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var $includes = __webpack_require__(30).includes;
var addToUnscopables = __webpack_require__(7);

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var $map = __webpack_require__(84).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(109);

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var isObject = __webpack_require__(18);
var isArray = __webpack_require__(86);
var toAbsoluteIndex = __webpack_require__(33);
var toLength = __webpack_require__(31);
var toIndexedObject = __webpack_require__(2);
var createProperty = __webpack_require__(105);
var arrayMethodHasSpeciesSupport = __webpack_require__(109);
var wellKnownSymbol = __webpack_require__(8);

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var toInteger = __webpack_require__(32);
var thisNumberValue = __webpack_require__(214);
var repeat = __webpack_require__(215);
var fails = __webpack_require__(4);

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(5);

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(32);
var requireObjectCoercible = __webpack_require__(6);

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var IS_PURE = __webpack_require__(22);
var global = __webpack_require__(9);
var path = __webpack_require__(38);
var NativePromise = __webpack_require__(217);
var redefine = __webpack_require__(48);
var redefineAll = __webpack_require__(70);
var setToStringTag = __webpack_require__(59);
var setSpecies = __webpack_require__(124);
var isObject = __webpack_require__(18);
var aFunction = __webpack_require__(77);
var anInstance = __webpack_require__(80);
var classof = __webpack_require__(5);
var iterate = __webpack_require__(74);
var checkCorrectnessOfIteration = __webpack_require__(81);
var speciesConstructor = __webpack_require__(115);
var task = __webpack_require__(218).set;
var microtask = __webpack_require__(219);
var promiseResolve = __webpack_require__(220);
var hostReportErrors = __webpack_require__(222);
var newPromiseCapabilityModule = __webpack_require__(221);
var perform = __webpack_require__(223);
var userAgent = __webpack_require__(197);
var InternalStateModule = __webpack_require__(41);
var isForced = __webpack_require__(53);
var wellKnownSymbol = __webpack_require__(8);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = global.fetch;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  // correct subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var empty = function () { /* empty */ };
  var FakePromise = (promise.constructor = {})[SPECIES] = function (exec) {
    exec(empty, empty);
  };
  // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !((IS_NODE || typeof PromiseRejectionEvent == 'function')
    && (!IS_PURE || promise['finally'])
    && promise.then(empty) instanceof FakePromise
    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0
    && userAgent.indexOf('Chrome/66') === -1);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = path[PROMISE];

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);

module.exports = global.Promise;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var fails = __webpack_require__(4);
var classof = __webpack_require__(5);
var bind = __webpack_require__(76);
var html = __webpack_require__(36);
var createElement = __webpack_require__(17);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var getOwnPropertyDescriptor = __webpack_require__(46).f;
var classof = __webpack_require__(5);
var macrotask = __webpack_require__(218).set;
var userAgent = __webpack_require__(197);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var isObject = __webpack_require__(18);
var newPromiseCapability = __webpack_require__(221);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(77);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var notARegExp = __webpack_require__(225);
var requireObjectCoercible = __webpack_require__(6);
var correctIsRegExpLogic = __webpack_require__(226);

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(137);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(8);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(143);
var anObject = __webpack_require__(19);
var toLength = __webpack_require__(31);
var requireObjectCoercible = __webpack_require__(6);
var advanceStringIndex = __webpack_require__(144);
var regExpExec = __webpack_require__(145);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(196);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(229), __webpack_require__(233), __webpack_require__(207), __webpack_require__(206), __webpack_require__(235), __webpack_require__(236), __webpack_require__(237), __webpack_require__(238), __webpack_require__(239), __webpack_require__(231), __webpack_require__(240), __webpack_require__(241), __webpack_require__(244)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _AccountService2, _AccountListener, _CELLET, _RegistrationState, _ActionConst, _Request, _CubeError, _StateCode, _DeviceListener, _Delegate, _AccountAction, _LicenseManager, _EngineState) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AccountServiceWorker = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var _window$CellCloud = window.CellCloud,
      Logger = _window$CellCloud.Logger,
      ActionDialect = _window$CellCloud.ActionDialect,
      InetAddress = _window$CellCloud.InetAddress;
  /**
   * 账号服务实现
   *
   * @class AccountServiceWorker
   * @author Guan Yong
   */

  var AccountServiceWorker =
  /*#__PURE__*/
  function (_AccountService) {
    _inherits(AccountServiceWorker, _AccountService);

    /**
     * @constructs
     * @param {CubeEngine} engine 引擎实例
     */
    function AccountServiceWorker(engine) {
      var _this;

      _classCallCheck(this, AccountServiceWorker);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AccountServiceWorker).call(this, engine, _AccountListener.AccountListener, _CELLET.CELLET.Master)); // 设备上线监听器

      _this.deviceListener = new _Delegate.Delegate(_DeviceListener.DeviceListener); // 查询账号信息回调

      _this.queryCallback = null; // 查询在线设备回调

      _this.queryDeviceCallback = null; // 查询在线设备详情回调

      _this.queryDeviceByIdCallback = null; // 授权管理工具

      _this.licenseManager = null;
      return _this;
    }
    /**
     * 登录账号。
     * <p>
     * 在魔方引擎中每个终端通过注册一个唯一账号来进行终端识别。
     * </p>
     *
     * @param {String} cubeId - 指定注册的账号名。
     * @param {String} cubePwd - 指定账号对应的密码。
     * @param {String} licenseToken - 账号令牌
     * @param {String} [nickname] - 指定账号对应的显示名。
     * @param {boolean} [force] - 强制使用远程license。
     * @returns {boolean} 如果正确启动注册流程返回 <code>true</code>，否则返回 <code>false</code> 。
     */


    _createClass(AccountServiceWorker, [{
      key: "login",
      value: function login(cubeId, cubePwd, licenseToken, nickname, force) {
        var _this2 = this;

        console.log('[Cube#AccountService] login to ' + cubeId + ', ' + cubePwd + ', ' + licenseToken + ', ' + nickname);

        if (typeof cubeId !== 'string') {
          return false;
        }

        this.engine.accName = cubeId;
        this.engine.accPassword = cubePwd;

        if (typeof nickname !== 'string') {
          this.engine.accDisplayName = cubeId;
        } else {
          this.engine.accDisplayName = nickname;
        }

        this.engine.accToken = licenseToken;
        this.engine.session.name = cubeId;
        this.engine.session.displayName = this.engine.accDisplayName;
        var license = localStorage.getItem('CUBE_LICENSE_KEY_' + this.engine.config.appid);
        this.appLicense = license ? JSON.parse(license) : null;
        var lastTokenTime = localStorage.getItem('CUBE_LICENSE_KEY_TOKEN_VALID_TIME_' + this.engine.accName) || 0;
        var lastLogin = localStorage.getItem('CubeLastLoginTime_' + this.engine.accName);

        if (!lastLogin) {// TODO 第一次登陆 不校验token
        } else if (Date.now() - lastTokenTime > 259200000 && this.engine.session.regState != _RegistrationState.RegistrationState.Failed) {
          // 检测本地license 有效期是否超过三天 是则需要要获取token
          Logger.i("AccountService", "invalid token");
          this.engine.isLicenseLoaded = false; // 断开引擎连接

          window.nucleus.talkService.hangUp(this.engine._VALID_CELLETS[0], true);
          localStorage.setItem('CUBE_LICENSE_KEY_' + this.engine.config.appid, null);

          this._fireRegistrationState(_RegistrationState.RegistrationState.Failed);

          return false;
        }

        if (this.engine.isLicenseLoaded) {
          this._handleRegister(cubeId, cubePwd, nickname, licenseToken, 0); //  更新最新license


          this.licenseManager.checkAndUpdate(null, function (err, update, license) {
            if (_this2.appLicense) {
              license ? _this2.engine._appLicense = license : null;
              license ? _this2.engine.server.update(license) : null; //  this._updateLicense(license || this.appLicense,true)
            }
          });
        } else {
          // 回调注册正在处理
          this._fireRegistrationState(_RegistrationState.RegistrationState.Progress); // 初始化授权信息


          this.loadLicense(licenseToken, function (error, license) {
            if (error) {
              _this2._fireRegistrationState(_RegistrationState.RegistrationState.Failed);
            } else {
              _this2._handleRegister(cubeId, cubePwd, _this2.engine.accDisplayName, licenseToken, 0);
            }
          }, force);
        }

        return true;
      }
    }, {
      key: "logout",
      value: function logout() {
        console.log('[Cube#AccountService] logout current account');

        if (typeof this.engine.accName !== 'string') {
          return false;
        }

        if (this.engine.session.isCalling()) {
          this.engine.getCallService().terminateCall();
        }

        if (null != this.engine.getConferenceService()) {
          this.engine.getConferenceService().terminateCall();
        }

        if (null != this.engine.sipService) {
          this.engine.sipService.unregister();
        }

        if (window.nucleus.talkService.isCalled(_CELLET.CELLET.Master)) {
          var deviceName = null != this.engine.config && undefined !== this.engine.config.deviceName ? this.engine.config.deviceName : navigator.appName;
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionLogout);
          dialect.appendParam("param", {
            name: this.engine.accName,
            password: this.engine.accPassword,
            version: this.engine.version,
            device: {
              name: deviceName,
              version: navigator.appVersion,
              platform: navigator.platform,
              userAgent: navigator.userAgent
            }
          });
          window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect);
        }

        this.engine.accName = null;
        this.engine.accDisplayName = null;
        this.engine.accPassword = null;
        this.engine.session.name = null;
        this.engine.session.displayName = null;
        return true;
      }
    }, {
      key: "queryAccounts",
      value: function queryAccounts(accounts, callback) {
        if (this.engine.registered && typeof callback === 'function') {
          this.queryCallback = callback;
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionQuery);
          dialect.appendParam("param", {
            "list": accounts
          });
          window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect);
          return true;
        }

        return false;
      }
      /**
       * 添加设备上下线监听器。
       *
       * @param {DeviceListener} listener - 指定待添加的注册监听器。
       */

    }, {
      key: "addDeviceListener",
      value: function addDeviceListener(listener) {
        this.deviceListener.addListener(listener);
      }
      /**
       * 移除设备上下线监听器。
       *
       * @param {DeviceListener} listener - 指定待移除的注册监听器。
       */

    }, {
      key: "removeDeviceListener",
      value: function removeDeviceListener(listener) {
        this.deviceListener.removeListener(listener);
      }
      /**查询在线设备列表*
       *
       * @property cubeId  {String} cube账号
       * @property callback 回调函数
       *  */

    }, {
      key: "queryOnlineDevice",
      value: function queryOnlineDevice(cubeId, callback) {
        if (this.engine.registered && typeof callback == 'function') {
          this.queryDeviceCallback = callback;
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionQueryDevice);
          dialect.appendParam("param", {
            "name": cubeId
          });
          window.nucleus.talkService.talk(_CELLET.CELLET.Messaging, dialect);
          return true;
        }

        return false;
      }
      /**查询在线设备详情*
       *
       * @property deviceId {String} 设备ID
       * @property callback 回调函数
       *  */

    }, {
      key: "queryOnlineDeviceById",
      value: function queryOnlineDeviceById(deviceId, callback) {
        if (this.engine.registered && typeof callback == 'function') {
          this.queryDeviceByIdCallback = callback;
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionQueryByIdDevice);
          dialect.appendParam("param", {
            "deviceId": deviceId
          });
          window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect);
          return true;
        }

        return false;
      }
      /**
       * 处理注册
       * @private
       */

    }, {
      key: "_handleRegister",
      value: function _handleRegister(name, password, displayName, token, requests) {
        var _this3 = this;

        if (this.engine.isLicenseLoaded) {
          this.engine.isBeingRegister = true; // 清除待发送队列

          window.nucleus.talkService.clearTalkList(); // 回调注册正在处理

          this._fireRegistrationState(_RegistrationState.RegistrationState.Progress);

          var deviceInfo = this.engine.getDeviceInfo();
          deviceInfo.userAgent = navigator.userAgent;
          var param = {
            name: name,
            displayName: this.engine.accDisplayName,
            password: password,
            version: this.engine.version,
            device: deviceInfo
          };

          if (null != this.engine.accToken) {
            param.token = this.engine.accToken;
          }

          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionLogin);
          dialect.appendParam("param", param);
          window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect, function () {// 清除 10 秒验证
            // clearTimeout(timer);
            // 如果 15 秒后未登陆成功, 则尝试再次登陆
            // setTimeout(() => {
            //     if (this.engine.isBeingRegister && !this.engine.registered) this._handleRegister(name, password, displayName, token, requests++);
            // }, 15000);
          }); // 如果 6 秒后未登陆成功, 则尝试重新获取license 重新登陆

          setTimeout(function () {
            if (_this3.engine.isBeingRegister && !_this3.engine.registered && !_this3.engine.isReconnecting) {
              //   this._handleRegister(name, password, displayName, token, requests++);
              _this3.licenseManager.checkAndUpdate(null, function (err, update, license) {
                if (_this3.appLicense) {
                  license ? _this3.engine._appLicense = license : null;
                  license ? _this3.engine.server.update(license) : null;

                  _this3._updateLicense(license || _this3.appLicense, true);
                }
              });
            } else {
              _this3.engine.isBeingRegister = false;
            }
          }, 6000);
        }
      }
      /**
       * 加载授权数据回调函数。
       *
       * @callback LoadLicenseCallback
       * @param error {Boolean|CubeError} 是否加载失败
       * @param [license] {Object} - 授权信息。
       */

      /**
       * 加载授权文件。
       *
       * @param {String} token - 指定授权密钥。
       * @param {LoadLicenseCallback} callback - 加载授权数据回调函数。
       * @private
       */

    }, {
      key: "loadLicense",
      value: function loadLicense(token, callback, force) {
        var _this4 = this;

        this.licenseManager = new _LicenseManager.LicenseManager(this.engine, token, this.engine.config.appid);

        var task = function task(license) {
          _this4.engine._appLicense = license;
          _this4.engine.isLicenseLoaded = true;

          _this4.engine.server.update(license);

          if (window.wsServer) {
            _this4.engine.hostAddress = new InetAddress(window.wsServer.host, window.wsServer.port);
            _this4.engine._CUBE_DOMAIN = window.wsServer.host;
            _this4.engine._CUBE_PORT = window.wsServer.port;
          } else {
            _this4.engine.hostAddress = new InetAddress(_this4.engine._CUBE_DOMAIN, _this4.engine._CUBE_PORT);
          } // 兼容对时cc连接 5秒重置tag


          if (_this4.engine.isResponder) {
            setTimeout(function () {
              window.nucleus.talkService.call(_this4.engine._VALID_CELLETS, _this4.engine.hostAddress, _this4.engine.config.socketEnabled);
            }, 6000);
          } else {
            window.nucleus.talkService.call(_this4.engine._VALID_CELLETS, _this4.engine.hostAddress, _this4.engine.config.socketEnabled);
          }

          callback(false, license);
        };

        if (this.appLicense && !force) {
          task(this.appLicense);
        }

        this.licenseManager.checkAndUpdate(null, function (err, update, license) {
          if (_this4.appLicense && !force) {
            license ? _this4.engine._appLicense = license : null;
            license ? _this4.engine.server.update(license) : null;
          } else if (err) {
            callback(err);
          } else {
            task(license);
          }
        });
      } // 调用注册状态变化

    }, {
      key: "_fireRegistrationState",
      value: function _fireRegistrationState(state, error) {
        if (state !== this.engine.session.regState) {
          this.engine.session.regState = state;
          var callback;

          if (state === _RegistrationState.RegistrationState.Progress) {
            this.engine.registered = false;
          } else {
            if (state === _RegistrationState.RegistrationState.Ok) {
              this.engine.registered = true;
              callback = 'onLogined';
            } else if (state === _RegistrationState.RegistrationState.Cleared) {
              this.engine.registered = false;
              callback = 'onLogouted'; // 终止呼叫

              if (this.engine.session.isCalling()) {
                this.engine.getCallService().terminateCall();
              } // 终止sip


              if (null != this.engine.sipService) {
                this.engine.sipService.unregister();
              }
            } else if (state === _RegistrationState.RegistrationState.Failed) {
              this.engine.registered = false;
              callback = 'onFailed';
            }
          }

          var services = this.engine.services.values();

          for (var i = 0; i < services.length; i++) {
            var service = services[i];

            if (typeof service.onRegisterStateChanged === 'function') {
              try {
                service.onRegisterStateChanged(this.engine.session);
              } catch (e) {
                Logger.w("AccountService#RegistrationState", e.message);
              }
            }
          }

          if (typeof callback === 'string') {
            if (callback === 'onFailed') {
              if (!error) {
                error = new _CubeError.CubeError(_StateCode.StateCode.BadRequest, 'Handle Failed');
              }

              this.delegate[callback](error, this.engine.session);
            } else {
              this.delegate[callback](this.engine.session);
            }
          }
        }
      }
    }, {
      key: "_processLogin",
      value: function _processLogin(dialect) {
        var data = dialect.getParam("device");

        if (null != data) {
          this.deviceListener.onDeviceOnline(data.fromDevice, data.onlineDevices);
        }
      }
    }, {
      key: "_processLogout",
      value: function _processLogout(dialect) {
        var data = dialect.getParam("device");

        if (null != data) {
          this.deviceListener.onDeviceOffline(data.fromDevice, data.onlineDevices);
        }
      }
    }, {
      key: "_processLoginAck",
      value: function _processLoginAck(dialect) {
        var _this5 = this;

        this.engine.isBeingRegister = false;
        var state = dialect.getParam("state");

        if (state.code === 200) {
          var token = dialect.getParam("token");

          if (null != token && undefined !== token) {
            this.engine._cube_token = token.toString();
          }

          var iceServers = dialect.getParam('ICEServers');
          var loginTimestamp = dialect.getParam('timestamp');
          var FSServer = JSON.parse(dialect.getParam("FSServer"));

          if (null != iceServers) {
            this.engine._CUBE_ICE_SERVERS = iceServers;
            this.engine._CUBE_STUN_SERVERS = this.engine._parseICEServers(iceServers);
          }

          if (null != loginTimestamp) {
            this.engine._CUBE_LOGIN_TIME = loginTimestamp;
          }

          if (FSServer && this.engine.sipService) {
            // 设置访问地址和端口
            var Host = FSServer.Host,
                WSPort = FSServer.WSPort,
                wssPort = FSServer.wssPort,
                Prefix = FSServer.Prefix;
            this.engine.sipService.setAddress(Host, Host, WSPort, wssPort);
            this.engine.cisco = {
              prefix: Prefix
            }; // 使用 SIP Number 属性进行注册

            this.engine.sipService.registerWith(this.engine.accName, 123456, this.engine.accDisplayName); // 创建 Peer
            // this.engine.session.setCallPeer(new CubePeer(conference.id));
            // this.engine.session.callState = CubeSignalingState.Progress;
            // 进行会议呼叫
            // let ret = this.engine.sipService.invite(conference.number, conference.member[this.engine.accName].videoEnabled);
          } // 默认token有效期小于三天 如果大于三天或不存在 ack成功说明当前token有效 且更新有效期


          var lastTokenTime = localStorage.getItem('CUBE_LICENSE_KEY_TOKEN_VALID_TIME_' + this.engine.accName) || 0;

          if (!lastTokenTime || Date.now() - lastTokenTime > 259200000) {
            localStorage.setItem('CUBE_LICENSE_KEY_TOKEN_VALID_TIME_' + this.engine.accName, Date.now());
          } // 如果一直在线 两天后凌晨5点自动返回应用层错误 让应用层重新获取token 重新登陆


          var time = new Date(new Date().setHours(0, 0, 0, 0)).getTime() + 86400000 * 3 + 18000000 - Date.now();
          clearTimeout(this.licenseOutDateTimer);
          this.licenseOutDateTimer = setTimeout(function () {
            if (_this5.engine.registered) {
              Logger.i("AccountService", "invalid token");
              _this5.engine.isLicenseLoaded = false;
              localStorage.setItem('CUBE_LICENSE_KEY_' + _this5.engine.config.appid, null); // 断开引擎连接

              window.nucleus.talkService.hangUp(_this5.engine._VALID_CELLETS[0], true);

              _this5._fireRegistrationState(_RegistrationState.RegistrationState.Failed);
            }
          }, time);

          this._fireRegistrationState(_RegistrationState.RegistrationState.Ok);

          this.engine.triggerCubeEngineState(_EngineState.EngineState.Ready);
        } else {
          Logger.w("CubeEngine", "login failed");

          this._fireRegistrationState(_RegistrationState.RegistrationState.Failed); //登陆失败，引擎回到初始化状态


          this.engine.triggerCubeEngineState(_EngineState.EngineState.Start);
        }
      }
    }, {
      key: "_processLogoutAck",
      value: function _processLogoutAck(dialect) {
        var state = dialect.getParam("state");
        this.engine.triggerCubeEngineState(_EngineState.EngineState.Start);

        if (state.code === 200) {
          this._fireRegistrationState(_RegistrationState.RegistrationState.Cleared);
        } else {
          Logger.w("CubeEngine", "logout failed");

          this._fireRegistrationState(_RegistrationState.RegistrationState.Failed);
        }
      }
    }, {
      key: "_processQueryAck",
      value: function _processQueryAck(dialect) {
        if (null != this.queryCallback) {
          var data = dialect.getParam("data");

          if (null != data) {
            this.queryCallback(data.list);
          }

          this.queryCallback = null;
        }
      }
    }, {
      key: "_processQueryDeviceAck",
      value: function _processQueryDeviceAck(dialect) {
        if (null != this.queryDeviceCallback) {
          var data = dialect.getParam("device");

          if (null != data) {
            this.queryDeviceCallback(data);
          } //   this.queryDeviceCallback = null;

        }
      }
    }, {
      key: "_processQueryDeviceByIdAck",
      value: function _processQueryDeviceByIdAck(dialect) {
        if (null != this.queryDeviceByIdCallback) {
          var data = dialect.getParam("data");

          if (null != data) {
            this.queryDeviceByIdCallback(data);
          }

          this.queryDeviceByIdCallback = null;
        }
      }
    }, {
      key: "_processLicense",
      value: function _processLicense(dialect) {
        var _this6 = this;

        var data = dialect.getParam("data");

        if (data) {
          var license = data.license,
              crypUrl = data.crypUrl,
              num = data.num;

          if (license && crypUrl) {
            var server = new _Request.Request('');
            var post = {
              license: license,
              number: num
            };
            server.send(crypUrl, post, function (err, d) {
              if (err || d.state !== 200) {
                Logger.w('CubeEngine', ' license Failed! ' + err);
              }

              if (d.state === 200) {
                var _license = d.data;

                _this6.engine.server.update(_license);

                _this6._updateLicense(_license, true);
              }
            });
          } else {
            // wait 毫秒后更新授权信息
            setTimeout(function () {
              _this6.licenseManager.checkAndUpdate(data.server, function (err, update, license) {
                if (err) {
                  Logger.w('CubeEngine', 'Update license Failed! ' + err.message);
                  return;
                }

                _this6.engine.server.update(license);

                _this6._updateLicense(license, update);
              }, true);
            }, 5000);
          }
        }
      }
    }, {
      key: "_updateLicense",
      value: function _updateLicense(license, update) {
        var _this7 = this;

        if (update) {
          this.engine.server.update(license);
          this.engine._appLicense = license;
          this.engine.isLicenseLoaded = true;
          this.engine.hostAddress = new InetAddress(this.engine._CUBE_DOMAIN, this.engine._CUBE_PORT); // 断开引擎连接

          window.nucleus.talkService.hangUp(this.engine._VALID_CELLETS[0], true); // 通知 responder 退出

          this.engine.responder.fireQuitted();

          if (this.engine.getCallService()) {
            if (this.engine.session.isCalling()) {
              this.engine.getCallService().terminateCall();
            }
          }

          if (this.engine.registered) {
            // 回调注销
            this._fireRegistrationState(_RegistrationState.RegistrationState.Cleared);
          }

          if (this.engine.sipService) {
            this.engine.sipService.unregister();
          } // 兼容对时cc连接 5秒重置tag


          if (this.engine.isResponder) {
            setTimeout(function () {
              window.nucleus.talkService.call(_this7.engine._VALID_CELLETS, _this7.engine.hostAddress, _this7.engine.config.socketEnabled);
            }, 6000);
          } else {
            // 重新 call
            window.nucleus.talkService.call(this.engine._VALID_CELLETS, this.engine.hostAddress, this.engine.config.socketEnabled);
          } // 重新登录


          if (typeof this.engine.accName === 'string' && typeof this.engine.accPassword === 'string' && !this.engine.isBeingRegister) {//  this.login(this.engine.accName, this.engine.accPassword, this.engine.accToken, this.engine.accDisplayName, true);
          }
        }
      }
    }, {
      key: "onDialogue",
      value: function onDialogue(action, dialect) {
        if (action === _ActionConst.ActionConst.ActionLogin) {
          this._processLogin(dialect);
        } else if (action === _ActionConst.ActionConst.ActionLogout) {
          this._processLogout(dialect);
        } else if (action === _ActionConst.ActionConst.ActionLoginAck) {
          this._processLoginAck(dialect);
        } else if (action === _ActionConst.ActionConst.ActionLogoutAck) {
          this._processLogoutAck(dialect);
        } else if (action === _ActionConst.ActionConst.ActionQueryAck) {
          this._processQueryAck(dialect);
        } else if (action === _ActionConst.ActionConst.ActionQueryDeviceAck) {
          this._processQueryDeviceAck(dialect);
        } else if (action === _ActionConst.ActionConst.ActionQueryByIdDeviceAck) {
          this._processQueryDeviceByIdAck(dialect);
        } else if (action === _AccountAction.AccountAction.ActionLicense) {
          this._processLicense(dialect);
        }
      }
    }]);

    return AccountServiceWorker;
  }(_AccountService2.AccountService);

  _exports.AccountServiceWorker = AccountServiceWorker;
});

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(230)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Service2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AccountService = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var AccountService =
  /*#__PURE__*/
  function (_Service) {
    _inherits(AccountService, _Service);

    function AccountService() {
      _classCallCheck(this, AccountService);

      return _possibleConstructorReturn(this, _getPrototypeOf(AccountService).apply(this, arguments));
    }

    _createClass(AccountService, [{
      key: "login",

      /**
       * 登录
       * @param {String} cubeId 登录账号
       * @param {String} cubePwd 登录密码
       * @param {String} licenseToken 授权令牌
       * @param {String} nickname 账号昵称
       * @returns {Boolean} 操作是否成功, 返回 <code>true</code> 不代表登录成功
       */
      value: function login(cubeId, cubePwd, licenseToken, nickname) {}
      /**
       * 注销
       * @returns {Boolean} 操作是否成功, 返回 <code>true</code> 不代表注销成功
       */

    }, {
      key: "logout",
      value: function logout() {}
      /**
       * 查询账号基本信息和实时状态
       * @param {Array<String>} accounts 指定待查询账号列表
       * @param {QueryAccountsCallback} callback 指定查询回调函数
       */

    }, {
      key: "queryAccounts",
      value: function queryAccounts(accounts, callback) {}
      /**
       * 查询帐号信息回调函数
       * @callback QueryAccountsCallback
       * @param {Array} list - 查询到的用户数据列表。
       */

    }]);

    return AccountService;
  }(_Service2.Service);

  _exports.AccountService = AccountService;
});

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(231)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Delegate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Service = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var Service =
  /*#__PURE__*/
  function () {
    /**
     * @constructs
     * @param {CubeEngine} engine 引擎实例
     * @param {Listener} [listener] 关联监听器静态实例
     * @param {CELLET} [cellet] 关联的引擎层数据通道名
     */
    function Service(engine, listener, cellet) {
      _classCallCheck(this, Service);

      this.engine = engine;
      this.utils = engine.getUtils();
      this._cellet = cellet;

      if (typeof listener === 'function') {
        this.delegate = new _Delegate.Delegate(listener);
      }
    }
    /**
     * 添加监听器
     * @param {Listener} listener 监听器实例
     */


    _createClass(Service, [{
      key: "addListener",
      value: function addListener(listener) {
        this.delegate.addListener(listener);
      }
      /**
       * 移除监听器
       * @param {Listener} listener 监听器实例
       */

    }, {
      key: "removeListener",
      value: function removeListener(listener) {
        this.delegate.removeListener(listener);
      }
    }, {
      key: "startup",
      value: function startup() {
        if (typeof this._cellet === 'string') {
          this.engine.addCelletMember(this._cellet, this);
        }

        this.onStartup();
      }
    }, {
      key: "shutdown",
      value: function shutdown() {
        if (typeof this._cellet === 'string') {
          this.engine.removeCelletMember(this._cellet, this);
        }

        this.onShutdown();
      }
    }, {
      key: "onStartup",
      value: function onStartup() {}
    }, {
      key: "onShutdown",
      value: function onShutdown() {}
    }, {
      key: "onConfigure",
      value: function onConfigure(config) {}
      /**
       * 当收到数据时回调
       * @param {String} action - 接口名
       * @param {ActionDialect} dialect - 数据对象
       */

    }, {
      key: "onDialogue",
      value: function onDialogue(action, dialect) {}
      /**
       * 注册状态变更
       * @param session {Session}
       */

    }, {
      key: "onRegisterStateChanged",
      value: function onRegisterStateChanged(session) {}
    }]);

    return Service;
  }();

  _exports.Service = Service;
});

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(108);

__webpack_require__(62);

__webpack_require__(232);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Delegate = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /**
   * 通用委派类。一般的，其他委派对象都从此对象进行继承。
   *
   * @class Delegate
   * @author Guan Yong, Xu Jiangwei
   */
  var Delegate =
  /*#__PURE__*/
  function () {
    /**
     * @constructs
     * @param {Object} listenerInterface 监听器接口对象引用
     */
    function Delegate(listenerInterface) {
      _classCallCheck(this, Delegate);

      this.listeners = null;
      this.init(listenerInterface);
    }
    /**
     * 初始化委派管理
     * @param {Object} listenerInterface
     */


    _createClass(Delegate, [{
      key: "init",
      value: function init(listenerInterface) {
        var _this = this;

        this.listeners = [];
        var methodNames = Object.getOwnPropertyNames(listenerInterface.prototype);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var methodName = _step.value;
            if (methodName === 'constructor') return "continue";

            _this[methodName] = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              _this.did(methodName, args);
            };
          };

          for (var _iterator = methodNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      /**
       * 添加监听器
       * @param {Object} listener 指定待添加的监听器对象
       */

    }, {
      key: "addListener",
      value: function addListener(listener) {
        this.listeners.push(listener);
      }
      /**
       * 移除监听器
       * @param {Object} listener 指定待移除的监听器对象
       */

    }, {
      key: "removeListener",
      value: function removeListener(listener) {
        for (var i = 0; i < this.listeners.length; ++i) {
          var l = this.listeners[i];

          if (l === listener) {
            this.listeners.splice(i, 1);
            break;
          }
        }
      }
      /**
       * 执行监听器方法
       * @param {String} methodName
       * @param {Object} args
       */

    }, {
      key: "did",
      value: function did(methodName, args) {
        for (var i = 0; i < this.listeners.length; i++) {
          var listener = this.listeners[i];

          if (listener && typeof listener[methodName] === 'function') {
            listener[methodName].apply(listener, args);
          }
        }
      }
    }]);

    return Delegate;
  }();

  _exports.Delegate = Delegate;
});

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var fails = __webpack_require__(4);
var nativeGetOwnPropertyNames = __webpack_require__(94).f;

var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: nativeGetOwnPropertyNames
});


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(234)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Listener2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AccountListener = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var AccountListener =
  /*#__PURE__*/
  function (_Listener) {
    _inherits(AccountListener, _Listener);

    function AccountListener() {
      _classCallCheck(this, AccountListener);

      return _possibleConstructorReturn(this, _getPrototypeOf(AccountListener).apply(this, arguments));
    }

    _createClass(AccountListener, [{
      key: "onLogined",

      /**
       * 账号登录成功回调
       * @param session {Session}
       */
      value: function onLogined(session) {}
      /**
       * 账号注销成功回调
       * @param session {Session}
       */

    }, {
      key: "onLogouted",
      value: function onLogouted(session) {}
    }, {
      key: "onFailed",
      value: function onFailed(error) {}
    }]);

    return AccountListener;
  }(_Listener2.Listener);

  _exports.AccountListener = AccountListener;
});

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Listener = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /**
   * Created by GuanYong on 2017/4/26.
   */
  var Listener =
  /*#__PURE__*/
  function () {
    function Listener() {
      _classCallCheck(this, Listener);
    }

    _createClass(Listener, [{
      key: "onFailed",
      value: function onFailed(error) {}
    }]);

    return Listener;
  }();

  _exports.Listener = Listener;
});

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ActionConst = void 0;

  /*
   * CubeConst.js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 全局常量定义。
   *
   * @author Xu Jiangwei
   */
  var ActionConst = {
    //设备指令
    ActionLogin: "login",
    ActionLoginAck: "login-ack",
    ActionLogout: "logout",
    ActionLogoutAck: "logout-ack",
    ActionQuery: "query",
    ActionQueryAck: "query-ack",
    ActionQueryDevice: "query-device",
    ActionQueryDeviceAck: "query-device-ack",
    ActionQueryByIdDevice: "query-device-by-id",
    ActionQueryByIdDeviceAck: "query-device-by-id-ack",
    //消息指令
    ActionPush: "push",
    ActionPushAck: "push-ack",
    ActionPull: "pull",
    ActionPullAck: "pull-ack",
    ActionNotify: "notify",
    ActionRecall: "recall",
    ActionRecallAck: "recall-ack",
    ActionReceipt: "receipt",
    ActionReceiptAck: "receipt-ack",
    ActionReceiptAll: "receipt-all",
    ActionReceiptAllAck: "receipt-all-ack",
    ActionReceiptOffline: "receipt-offline",
    ActionReceiptOfflineAck: "receipt-offline-ack",
    ActionForward: "forward",
    ActionForwardAck: "forward-ack",
    ActionHistory: "history",
    ActionHistoryAck: "history-ack",
    ActionSearchMsg: "search-msg",
    ActionSearchMsgAck: "search-msg-ack",
    ActionSearchMsgs: "search-msgs",
    ActionSearchMsgsAck: "search-msgs-ack",
    ActionSync: "sync",
    ActionSyncAck: "sync-ack",
    ActionUpdateTop: "update-top",
    ActionUpdateTopAck: "update-top-ack",
    ActionPredictorNotify: "predictor-notify",
    //音视频
    ActionInvite: "invite",
    ActionInviteAck: "invite-ack",
    ActionAnswer: "answer",
    ActionAnswerAck: "answer-ack",
    ActionCancel: "cancel",
    ActionCancelAck: "cancel-ack",
    ActionBye: "bye",
    ActionByeAck: "bye-ack",
    ActionCandidate: "candidate",
    ActionCandidateAck: "candidate-ack",
    ActionConsult: "consult",
    ActionConsultAck: "consult-ack",
    ActionReply: "reply",
    ActionReplyAck: "reply-ack",
    ActionTryReInvite: "try-reinvite",
    ActionTryReInviteAck: "try-reinvite-ack",
    ActionReverseCall: "reverse-call",
    ActionSignalingHeartbeat: "signaling-heartbeat",
    ActionNegotiate: "negotiate",
    ActionNegotiateAck: "negotiate-ack",
    // 远程指令
    ActionShare: "share",
    ActionShareAck: "share-ack",
    ActionRevoke: "revoke",
    ActionRevokeAck: "revoke-ack",
    ActionVGCmd: "vg-cmd",
    ActionVGCmdAck: "vg-cmd-ack",
    ActionRestrain: "restrain",
    ActionRestrainAck: "restrain-ack",
    ActionQueryWB: "query-wb",
    ActionQueryWBAck: "query-wb-ack",
    ActionQueryShared: "query-shared",
    ActionQuerySharedAck: "query-shared-ack",
    ActionInviteWB: "invite-wb",
    ActionInviteWBAck: "invite-wb-ack",
    ActionRejectWE: "reject-wb",
    ActionRejectWEAck: "reject-wb-ack",
    //群组指令
    ActionCreateGroup: "create-group",
    ActionCreateGroupAck: "create-group-ack",
    ActionDeleteGroup: "delete-group",
    ActionDeleteGroupAck: "delete-group-ack",
    ActionAddMember: "add-member",
    ActionAddMemberAck: "add-member-ack",
    ActionRemoveMember: "remove-member",
    ActionRemoveMemberAck: "remove-member-ack",
    ActionQueryGroups: "query-groups",
    ActionQueryGroupsAck: "query-groups-ack",
    ActionGetGroup: "get-group",
    ActionGetGroupAck: "get-group-ack",
    ActionAddMaster: "add-master",
    ActionAddMasterAck: "add-master-ack",
    ActionRemoveMaster: "remove-master",
    ActionRemoveMasterAck: "remove-master-ack",
    ActionChangeGroupName: "set-grp-dn",
    ActionChangeGroupNameAck: "set-grp-dn-ack",
    // 会议指令
    ActionConference: "conference",
    ActionConferenceAck: "conference-ack",
    ActionQueryConference: "query-conference",
    ActionQueryConferenceAck: "query-conference-ack",
    ActionQueryAllConference: "query-all-conference",
    ActionQueryAllConferenceAck: "query-all-conference-ack",
    ActionJoinConference: "apply-join-conference",
    ActionJoinConferenceAck: "apply-join-conference-ack",
    ActionApplyConference: "apply-conference",
    ActionApplyConferenceAck: "apply-conference-ack",
    ActionCloseConference: "close-conference",
    ActionCloseConferenceAck: "close-conference-ack",
    ActionRejectConference: "reject-conference",
    ActionRejectConferenceAck: "reject-conference-ack",
    ActionInviteConference: "invite-conference",
    ActionInviteConferenceAck: "invite-conference-ack",
    ActionTryReInviteConference: "try-reinvite-conference",
    ActionTryReInviteConferenceAck: "try-reinvite-conference-ack",
    ActionHeartConference: "heart-conference",
    ActionAccept: "accept",
    ActionAcceptAck: "accept-ack",
    ActionTime: "time",
    ActionTimeAck: "time-ack",
    ActionRespond: "respond",
    ActionRespondAck: "respond-ack",
    ActionQueryRespond: "query-respond",
    ActionQueryRespondAck: "query-respond-ack",
    ActionGo: "go",
    ActionGoAck: "go-ack",
    ActionPrepare: "prepare",
    ActionPrepareAck: "prepare-ack",
    ActionFeedback: "feedback",
    ActionFeedbackAck: "feedback-ack",
    ActionLast: "last",
    ActionLastAck: "last-ack",
    ActionSubscribeInstructiont: "subscribe-instruction",
    ActionSubscribeInstructiontAck: "subscribe-instruction-ack",
    ActionCancleSubscribe: "cancle-subscribe",
    ActionCancleSubscribeAck: "cancle-subscribe-ack",
    Unknown: "unknown"
  };
  _exports.ActionConst = ActionConst;
});

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(120);

__webpack_require__(62);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Request = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /**
   * 通用会话请求类
   *
   * @class CubeRequest
   * @author Guan Yong, Xu Jiangwei
   *
   */
  var Ajax = window.CellCloud.Ajax;

  var Request =
  /*#__PURE__*/
  function () {
    /**
     * @constructs
     * @param domain {String} - 会话地址
     */
    function Request(domain, method) {
      _classCallCheck(this, Request);

      this.domain = domain;
      this.method = method || "POST";
    }

    _createClass(Request, [{
      key: "send",
      value: function send(action, data, callback) {
        for (var item in data) {
          if (_typeof(data[item]) === 'object') {
            data[item] = JSON.stringify(data[item]);
          }
        }

        Ajax.newRequest(this.domain + action).method(this.method).content(data).send(function (response) {
          var status = response.getStatus();

          if (status === 200) {
            var rd;

            try {
              rd = JSON.parse(response.getData());
            } catch (e) {
              rd = response.getData();
            }

            callback(false, rd);
          } else {
            callback({
              status: status
            });
          }
        });
      }
      /**
       * 发送文件
       * @param action {String} - 接口地址
       * @param file {{name: {String}, value: {HTMLElement|Blob}} 需要发送的文件
       * @param data {Object} 需要发送的其它数据
       * @param callback {Function} 数据回调
       */

    }, {
      key: "sendFile",
      value: function sendFile(action, file, data, callback) {
        if (window.FormData) {
          var formData = new FormData();

          for (var item in data) {
            formData.append(item, data[item]);
          }

          if (file.value instanceof HTMLElement) {
            var f = file.value.files[0];
            formData.append(file.name, f, f.name);
          } else if (file.value instanceof Blob) {
            formData.append(file.name, file.value, file.value.name);
          }

          var xhr = new XMLHttpRequest();
          xhr.open("post", this.domain + action, true);
          xhr.send(formData);

          xhr.onload = function () {
            if (xhr.status === 200) {
              var rd;

              try {
                rd = JSON.parse(xhr.responseText);
              } catch (e) {
                rd = xhr.responseText;
              }

              callback(false, rd);
            } else {
              callback({
                status: xhr.status
              });
            }
          };
        }
      }
    }]);

    return Request;
  }();

  _exports.Request = Request;
});

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CubeError = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /**
   * CubeEngine 通用错误对象
   *
   * @class CubeError
   * @author Guan Yong
   */
  var CubeError =
  /**
   * @constructs
   * @param code {StateCode} 状态码
   * @param message {String} 描述信息
   */
  function CubeError(code, message) {
    _classCallCheck(this, CubeError);

    this.code = code;
    this.message = message;
  };

  _exports.CubeError = CubeError;
});

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.StateCode = void 0;

  /*
   * StateCode.js
   * Cube Engine
   *
   * Created by Ambrose Xu on 15/4/5.
   * Copyright (c) 2015 Cube Team. All rights reserved.
   */

  /**
   * 引擎状态代码枚举。
   *
   * @readonly
   * @enum {Number}
   * @author Xu Jiangwei, Guan Yong
   */
  var StateCode = {
    /** 成功 */
    Ok: 200,

    /**请求被处理, 请等待 **/
    Accepted: 202,

    /**已接收到请求，不需要返回数据**/
    NoContent: 204,

    /** 请求无效。 */
    BadRequest: 400,

    /** 未授权请求。 */
    Unauthorized: 401,

    /** 被保留的错误码。 */
    PaymentRequired: 402,

    /** 服务器无法识别请求。 */
    Forbidden: 403,

    /** 服务器没有找到对应的请求 URI 。 */
    NotFound: 404,

    /** 请求指定的方法服务器不允许执行。 */
    MethodNotAllowed: 405,

    /** 访问内容不被授权。 */
    NotAcceptable: 406,

    /** 代理需要授权。 */
    ProxyAuthenticationRequired: 407,

    /** 对端离线，请求超时。 */
    RequestTimeout: 408,

    /** 有冲突的请求。 */
    Gone: 410,

    /** 长度必须满足。 */
    LengthRequired: 411,

    /** 前提条件失败。 */
    PreconditionFailed: 412,

    /** 负载数据过长。 */
    PayloadTooLarge: 413,

    /** 不支持的媒体类型。 */
    UnsupportedMediaType: 415,

    /* */
    ExpectationFailed: 417,

    /*访问频率超过限制*/
    TooManyRequests: 429,

    /** 请求数据发送失败。 */
    RequestSendFailed: 477,

    /** 暂时失效的访问。 */
    TemporarilyUnavailable: 480,

    /** 对方正忙 */
    BusyHere: 486,

    /** 对方未接听。 */
    RequestTerminated: 487,

    /** 服务器内部错误。 */
    ServerInternalError: 500,

    /** 网关超时。 */
    GatewayTimeout: 504,

    /** 获取License失败 */
    GetLicenseFail: 500,

    /** 对方忙, 免打扰 */
    BusyEverywhere: 600,

    /** 不正确的重复登录。 */
    Declined: 603,

    /** 不存在的呼叫。 */
    DoesNotExistAnywhere: 604,

    /** 连接失败。 */
    ConnectionFailed: 700,

    /** 信令启动错误。 */
    SignalingStartError: 701,

    /** 信令链路传输数据错误。 */
    TransportError: 702,

    /** ICE 连接失败。 */
    ICEConnectionFailed: 703,

    /** 参数错误 */
    ParamError: 704,

    /** 创建 SDP 失败。 */
    CreateSessionDescriptionFailed: 705,

    /** 设置 SDP 失败。 */
    SetSessionDescriptionFailed: 706,

    /** RTC 初始化失败。 */
    RTCInitializeFailed: 707,

    /** 正在呼叫时，新呼叫进入。 */
    DuplicationException: 710,

    /** 工作机状态异常。 */
    WorkerStateException: 711,

    /** 呼叫超时。 */
    CallTimeout: 712,

    /** 未查询到会议信息 **/
    NotFoundConference: 713,

    /** 意外取消 **/
    UnexpectedCanceled: 714,

    /** 一对一没有应答 **/
    NoAnswer: 717,

    /** 不正确的状态。 */
    IncorrectState: 801,

    /** 网络不可达。 */
    NetworkNotReachable: 809,

    /** 内容长度越界。 */
    ContentTooLong: 810,

    /** 消息缓存块大小超限。 */
    BlockOversize: 811,

    /** 消息格式错误。 */
    FormatError: 812,

    /** 消息内容错误。 */
    ContentError: 813,

    /** 消息内容参数越限，比如文件大小越限。 */
    OutOfLimit: 814,

    /** 消息没有接收人。 */
    NoReceiver: 815,

    /**同一消息重复发送*/
    RecallTimeout: 816,

    /** 空消息 */
    NullMessage: 817,

    /** 过期的消息 */
    MessageExpire: 818,

    /** 丢失资源文件。 */
    LostAssets: 820,

    /** 上传文件失败。 */
    UploadFailed: 823,

    /** 处理文件失败。 */
    ProcessFailed: 825,

    /** 文件加载失败。 */
    LoadFileFailed: 828,

    /*其他终端接听*/
    AnswerByOther: 900,

    /*其他终端取消*/
    CancelByOther: 901,

    /** 未知错误。 */
    Unknown: 0,
    //////////////////////////////////////////////////////// Account  1000~1100 ////////////////////////////////////////////////////////

    /** 引擎初始化失败 */
    InitFailed: 1001,

    /** 加载授权信息失败 */
    LoadLicenseFailed: 1002,

    /** 授权过期 */
    LicenseOutDate: 1003,

    /** 未注册 */
    UnRegister: 1004,

    /** 授权服务器错误 */
    LicenseServerError: 1005,

    /** 授权信息更新错误 */
    LicenseUpdateError: 1006,

    /** 账号重新登录超时 */
    ReLoginTimeout: 1007,
    //////////////////////////////////////////////////////// Message  1100~1200 ////////////////////////////////////////////////////////

    /** 撤回错误 */
    RecallError: 1100,

    /** 转发错误 */
    ForwardError: 1101,

    /** 语音录制太短 */
    VoiceClipTooShort: 1102,

    /** 视频录制太短 */
    VideoClipTooShort: 1103,

    /** 消息不存在 */
    MessageNotExist: 1104,

    /** 语音录制太短 */
    MessageTimeout: 1105,

    /**  消息回执错误 */
    ReceiptError: 1106,

    /**  消息不存在 */
    QueryNOData: 1107,

    /**  消息分发失败 */
    DispatchFailed: 1108,

    /**  过期的消息，消息超过5分钟不能撤回 */
    OutDateMessage: 1109,

    /**  文件下载失败 */
    FileMessageDownloadFailed: 1110,

    /**  文件消息下载超时失败 */
    FileMessageDownloadTimeout: 1111,

    /**  没有发现离线绘制消息 */
    NotFoundReceiptMessage: 1114,

    /**  消息置顶错误 */
    SetTopError: 1117,

    /**  同步离线消息超时 */
    SyncMessageTimeout: 1118,

    /**  进度查询错误 */
    FileProgressFailed: 1119,

    /** 消息敏感词 */
    MessageSensitiveWord: 1121,
    //////////////////////////////////////////////////////// FileManager  1200~1300 ////////////////////////////////////////////////////////

    /** 服务器不存在此文件 */
    FileNotExistOnServer: 1200,

    /** 云盘文件上传错误 */
    FileUploadError: 1201,

    /** 云盘文件数据格式错误 */
    FileDataFormatError: 1202,

    /**  文件重命名失败失败 */
    RenamedFailed: 1203,

    /**   文件加载失败 */
    CubeStateLoadFileFailed: 1204,

    /**  文件删除失败 */
    DeleteFailed: 1205,

    /**  创建文件夹失败 */
    MkdirFailed: 1206,

    /**  文件被占用 */
    FileUsedByOther: 1207,
    PathNotFound: 1208,
    //////////////////////////////////////////////////////// Group  1300~1400 ////////////////////////////////////////////////////////

    /**  添加管理员失败 */
    GroupAddMasterFailed: 1300,

    /**  删除管理员失败 */
    GroupRemoveMasterFailed: 1301,

    /**  群组已销毁 */
    GroupDestory: 1302,

    /**  群组不存在 */
    GroupNotExist: 1303,
    //////////////////////////////////////////////////////// Call  1400~1500 ////////////////////////////////////////////////////////
    // 当前正在呼叫
    AlreadyInCalling: 1400,
    // 响铃超时自动挂断
    RingingTimeoutTerminal: 1401,
    //////////////////////////////////////////////////////// Conference  1500~1600 ////////////////////////////////////////////////////////

    /**会议已经存在*/
    ConferenceExist: 1500,

    /**会议人数已达上限*/
    OverMaxNumber: 1501,

    /**会议被其他终端拒绝*/
    ConferenceRejectByOther: 1502,

    /**您已在其他终端参会*/
    ConferenceJoinFromOther: 1503,

    /**您已在其他终端参会*/
    ConferenceJoinFailed: 1506,

    /**拒绝失败*/
    ConferenceRejectFailed: 1507,

    /**会议已经结束*/
    ConferenceClosed: 1508,

    /**会议sip邀请失败*/
    ConferenceSipInviteFailed: 1551,

    /*会议正在重新协商中*/
    ConferenceRenegotiating: 1552,

    /*连接会议超时*/
    ConferenceTimeout: 1598,

    /*连接异常断开*/
    ConferenceDisconnection: 1599,
    //////////////////////////////////////////////////////// Whiteboard  1600~1700 ////////////////////////////////////////////////////////

    /**  导出白板错误 */
    ExportWhiteboardFailed: 1600,

    /**  导入白板错误 */
    ImportWhiteboardFailed: 1601,

    /** 白板不存在 */
    WhiteboardNotExist: 1602,

    /** 白板上传失败 */
    WhiteboardUploadFailed: 1603,

    /** 白板转换失败 */
    WhiteboardConvertFailed: 1604,
    //////////////////////////////////////////////////////// Media  1700~1800 ////////////////////////////////////////////////////////

    /**  摄像头开启失败 */
    CameraOpenFailed: 1700,

    /**  激活音频失败 */
    ActiveAudioSessionFailed: 1701,

    /**  麦克风开启失败 */
    MicphoneOpenFailed: 1702,

    /**  录制视频转换失败 */
    VideoConvertFailed: 1703,

    /**  音频录制初始化失败 */
    AudioRecorderInitialFailed: 1704,

    /**  音频准备录制失败 */
    AudioRecorderPrepareFailed: 1705,

    /**  解码出错 */
    AudioPlayDecodeFailed: 1706,

    /**  不支持操作用户媒体设备 */
    NotSupportUserMedia: 1707,
    //////////////////////////////////////////////////////// Live  1800~1900 ////////////////////////////////////////////////////////

    /** 直播启动失败 */
    LiveStartFailed: 1800,

    /** 直播不存在 */
    LiveNotExist: 1801,
    //////////////////////////////////////////////////////// Instruction  1900~2000 ////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////// RemoteDesk  2000~2100 ////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////// Other  10000~Max ////////////////////////////////////////////////////////
    NotHavePermission: 10000 // 没有此操作的权限

  };
  _exports.StateCode = StateCode;
});

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(234)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Listener2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DeviceListener = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var DeviceListener =
  /*#__PURE__*/
  function (_Listener) {
    _inherits(DeviceListener, _Listener);

    function DeviceListener() {
      _classCallCheck(this, DeviceListener);

      return _possibleConstructorReturn(this, _getPrototypeOf(DeviceListener).apply(this, arguments));
    }

    _createClass(DeviceListener, [{
      key: "onDeviceOnline",

      /**
       * 设备上线通知
       * @param {loginDevice} 登陆设备信息
       * @param {onlineDevices} 在线设备信息
       */
      value: function onDeviceOnline(loginDevice, onlineDevices) {}
      /**
       * 设备下线通知
       * @param {logoutDevice} 登出设备信息
       * @param {onlineDevices} 在线设备信息
       */

    }, {
      key: "onDeviceOffline",
      value: function onDeviceOffline(logoutDevice, onlineDevices) {}
    }]);

    return DeviceListener;
  }(_Listener2.Listener);

  _exports.DeviceListener = DeviceListener;
});

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AccountAction = void 0;

  /*
   * AccountAction.js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 账号服务指令
   *
   * @author Guan Yong
   */
  var AccountAction = {
    ActionLicense: 'license',
    ActionLicenseAck: 'license-ack'
  };
  _exports.AccountAction = AccountAction;
});

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(62);

__webpack_require__(242);

__webpack_require__(196);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(236), __webpack_require__(237), __webpack_require__(238)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Request, _CubeError, _StateCode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.LicenseManager = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var LicenseManager =
  /*#__PURE__*/
  function () {
    function LicenseManager(engine, token, appid) {
      _classCallCheck(this, LicenseManager);

      this.storageKey = 'CUBE_LICENSE_KEY_' + appid;
      this.address = engine.config.licenseServer; // this.address = 'http://125.208.1.67:9000/auth/license/get';
      // this.address = 'https://zbrest.shixinyun.com/auth/license/get';

      this.licenseVersion = '2.5.1';
      this.engine = engine;
      this.token = token;
      this.appid = appid;
      var license = localStorage.getItem(this.storageKey);
      this.appLicense = license ? JSON.parse(license) : null;
    }

    _createClass(LicenseManager, [{
      key: "checkAndUpdate",
      value: function checkAndUpdate(address, callback, force) {
        var _this = this;

        var server = new _Request.Request('');
        var connect = false;
        var time = 15000;
        var postData = {
          token: this.token,
          appid: this.appid,
          version: this.licenseVersion,
          type: 'json'
        };

        if (this.appLicense) {
          postData.lastUpdateTime = this.appLicense.UpdateTime;
        }

        server.send(address ? address : this.address, postData, function (err, data) {
          connect = true;

          if (err) {
            if (_this.appLicense && !force) {
              _this.engine.server.update(_this.appLicense);

              callback(false, false, _this.appLicense);
            } else {
              callback(new _CubeError.CubeError(_StateCode.StateCode.LoadLicenseFailed, 'Network error.'));
            }

            return;
          }

          if (data.state === 200) {
            /** @type {object} */
            var license = data.data.license;
            /* license.CubeServer.Host = '182.150.24.10';
             license.CubeServer.HTTPPort = 11070;*/

            var version = parseFloat(license.ConfigVersion);

            if (version < 1.8 || version > 2.0) {
              callback(new _CubeError.CubeError(_StateCode.StateCode.LoadLicenseFailed, 'License version version is too old!'));
              return;
            }

            if (Date.now() > license.EndDate) {
              callback(new _CubeError.CubeError(_StateCode.StateCode.LoadLicenseFailed, 'License has expired!'));
              return;
            }

            localStorage.setItem(_this.storageKey, JSON.stringify(license)); //  this.engine.server.update(license);

            callback(false, true, license);
          } else if (data.state === 201) {
            callback(false, false, _this.appLicense);
          } else {
            callback(new _CubeError.CubeError(data.state, 'Incorrect access.'));
          }
        });
        setTimeout(function () {
          if (!connect) {
            if (_this.appLicense) {
              callback(false, false, _this.appLicense);
            } else {
              _this.checkAndUpdate(address, callback);
            }
          }
        }, 15000);
      }
    }]);

    return LicenseManager;
  }();

  _exports.LicenseManager = LicenseManager;
});

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var parseFloatImplementation = __webpack_require__(243);

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var trim = __webpack_require__(127).trim;
var whitespaces = __webpack_require__(128);

var nativeParseFloat = global.parseFloat;
var FORCED = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = nativeParseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : nativeParseFloat;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.EngineState = void 0;

  /*
   * CubeState.js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 引擎状态枚举
   *
   * @enum
   * @author Zhou Chong
   */
  var EngineState = {
    /**启动引擎
     * 所有模块初始化完成后的状态
     */
    Start: "Start",

    /**
     * 暂停
     * 没有网络时,启动后无法工作
     */
    Pause: "Pause",

    /**
     * 就绪
     * 引擎注册成功，可以收发数据的状态
     * 引擎断网或者引擎无法收发数据时会回到Start状态
     */
    Ready: "Ready",

    /**
     * 工作中
     * 当有超过一条消息需要接受处理时，处理数据过程中处于此状态
     * 数据收发完成时回到Ready状态
     */
    Busy: "Busy",

    /**
     * 停止
     * 默认值或引擎shutdown之后的状态
     */
    Stop: "Stop"
  };
  _exports.EngineState = EngineState;
});

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(246), __webpack_require__(247), __webpack_require__(235), __webpack_require__(207), __webpack_require__(248)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _GroupService2, _GroupListener, _ActionConst, _CELLET, _GroupContext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.GroupServiceWorker = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var ActionDialect = window.CellCloud.ActionDialect;
  /**
   * 群组服务实现。
   *
   * @class GroupServiceWorker
   * @author Xu Jiangwei, Guan Yong
   */

  var GroupServiceWorker =
  /*#__PURE__*/
  function (_GroupService) {
    _inherits(GroupServiceWorker, _GroupService);

    function GroupServiceWorker(engine) {
      var _this;

      _classCallCheck(this, GroupServiceWorker);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GroupServiceWorker).call(this, engine, _GroupListener.GroupListener, _CELLET.CELLET.Master));
      _this.engine = engine;
      _this.queryGroupsCb = null;
      _this.queryGroupsErrorCb = null;
      _this.queryGroupDetailsCb = null;
      _this.queryGroupDetailsErrorCb = null;
      return _this;
    }
    /**
     * 创建群组。
     */


    _createClass(GroupServiceWorker, [{
      key: "createGroup",
      value: function createGroup(displayName, members, conference) {
        var group = {
          "displayName": displayName.toString()
        };

        if (undefined !== members && null != members) {
          group.members = members;
        }

        if (conference !== undefined) {
          group.conference = conference;
        }

        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionCreateGroup);
        dialect.appendParam("param", {
          "token": this.engine._MSTR_TOKEN,
          "group": group
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect);
      }
      /**
       * 删除群组。
       */

    }, {
      key: "deleteGroup",
      value: function deleteGroup(groupId) {
        var group = {
          "name": groupId.toString()
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionDeleteGroup);
        dialect.appendParam('param', {
          "token": this.engine._MSTR_TOKEN,
          "group": group
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect);
      }
      /**
       * 添加成员。
       */

    }, {
      key: "addMembers",
      value: function addMembers(groupId, members) {
        var group = {
          "name": groupId.toString(),
          "members": members
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionAddMember);
        dialect.appendParam("param", {
          "token": this.engine._MSTR_TOKEN,
          "group": group
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect);
      }
      /**
       * 删除成员。
       */

    }, {
      key: "removeMembers",
      value: function removeMembers(groupId, members) {
        var group = {
          "name": groupId.toString(),
          "members": members
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionRemoveMember);
        dialect.appendParam("param", {
          "token": this.engine._MSTR_TOKEN,
          "group": group
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect);
      }
      /**
       * 查询群组。
       */

    }, {
      key: "queryGroups",
      value: function queryGroups(callback, errorCallback) {
        this.queryGroupsCb = callback;

        if (undefined !== errorCallback) {
          this.queryGroupsErrorCb = errorCallback;
        }

        var name = this.engine.session.name;
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionQueryGroups);
        dialect.appendParam("param", {
          "token": this.engine._MSTR_TOKEN,
          "name": name.toString()
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect);
      }
      /**
       * 查询群组详情。
       */

    }, {
      key: "queryGroupDetails",
      value: function queryGroupDetails(groupId, callback, errorCallback) {
        this.queryGroupDetailsCb = callback;

        if (undefined !== errorCallback) {
          this.queryGroupDetailsErrorCb = errorCallback;
        }

        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionGetGroup);
        dialect.appendParam("param", {
          "token": this.engine._MSTR_TOKEN,
          "group": groupId
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect);
      }
      /**
       * 添加管理员
       */

    }, {
      key: "addMaster",
      value: function addMaster(groupId, master) {
        var group = {
          "name": groupId.toString(),
          "master": master
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionAddMaster);
        dialect.appendParam("param", {
          "token": this.engine._MSTR_TOKEN,
          "group": group
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect);
      }
      /**
       * 删除管理员
       */

    }, {
      key: "removeMaster",
      value: function removeMaster(groupId, master) {
        var group = {
          "name": groupId.toString(),
          "master": master
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionRemoveMaster);
        dialect.appendParam("param", {
          "token": this.engine._MSTR_TOKEN,
          "group": group
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect);
      }
      /**
       * 修改群组昵称
       */

    }, {
      key: "changeGroupName",
      value: function changeGroupName(groupId, nickname) {
        var group = {
          "name": groupId.toString(),
          "displayName": nickname
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionChangeGroupName);
        dialect.appendParam("param", {
          "token": this.engine._MSTR_TOKEN,
          "name": groupId,
          "group": group
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Master, dialect);
      }
    }, {
      key: "onDialogue",
      value: function onDialogue(action, dialect) {
        var state = dialect.getParam("state");

        if (action == _ActionConst.ActionConst.ActionQueryGroupsAck) {
          if (state.code == 200) {
            if (null != this.queryGroupsCb) {
              var data = dialect.getParam('data');
              this.queryGroupsCb.call(null, dialect.getParam("data").groups);
              data.ackCount == data.ackIndex ? this.queryGroupsCb = null : '';
            }
          } else {
            if (null != this.queryGroupsErrorCb) {
              this.queryGroupsErrorCb.call(null, state.code);
              this.queryGroupsErrorCb = null;
            }
          }
        } else if (action == _ActionConst.ActionConst.ActionGetGroupAck) {
          if (state.code == 200) {
            if (null != this.queryGroupDetailsCb) {
              this.queryGroupDetailsCb.call(null, dialect.getParam("group"));
              this.queryGroupDetailsCb = null;
            }
          } else {
            if (null != this.queryGroupDetailsErrorCb) {
              this.queryGroupDetailsErrorCb.call(null, state.code);
              this.queryGroupDetailsErrorCb = null;
            }
          }
        } else if (action == _ActionConst.ActionConst.ActionCreateGroupAck) {
          if (null != this.delegate) {
            if (state.code == 200) {
              this.delegate.onGroupCreated(new _GroupContext.GroupContext(dialect.getParam("group")), dialect.getParam("customId"));
            } else {
              this.delegate.onFailed(state.code);
            }
          }
        } else if (action == _ActionConst.ActionConst.ActionDeleteGroupAck) {
          if (null != this.delegate) {
            if (state.code == 200) {
              this.delegate.onGroupDeleted(new _GroupContext.GroupContext(dialect.getParam("group")));
            } else {
              this.delegate.onFailed(state.code);
            }
          }
        } else if (action == _ActionConst.ActionConst.ActionAddMemberAck) {
          if (null != this.delegate) {
            if (state.code == 200) {
              var group = dialect.getParam("group");
              this.delegate.onMemberAdded(new _GroupContext.GroupContext(group), group.members, group.addedMembers);
            } else {
              this.delegate.onFailed(state.code);
            }
          }
        } else if (action == _ActionConst.ActionConst.ActionRemoveMemberAck) {
          if (null != this.delegate) {
            if (state.code == 200) {
              var _group = dialect.getParam("group");

              this.delegate.onMemberRemoved(new _GroupContext.GroupContext(_group), _group.members, _group.removedMembers);
            } else {
              this.delegate.onFailed(state.code);
            }
          }
        } else if (action == _ActionConst.ActionConst.ActionCreateGroup) {
          // 有成员将你加到指定组
          if (null != this.delegate) {
            this.delegate.onGroupCreated(new _GroupContext.GroupContext(dialect.getParam("group")));
          }
        } else if (action == _ActionConst.ActionConst.ActionDeleteGroup) {
          if (null != this.delegate) {
            this.delegate.onGroupDeleted(new _GroupContext.GroupContext(dialect.getParam("group")));
          }
        } else if (action == _ActionConst.ActionConst.ActionAddMember) {
          if (null != this.delegate) {
            var _group2 = dialect.getParam("group");

            this.delegate.onMemberAdded(new _GroupContext.GroupContext(_group2), _group2.members, _group2.addedMembers);
          }
        } else if (action == _ActionConst.ActionConst.ActionRemoveMember) {
          if (null != this.delegate) {
            var _group3 = dialect.getParam("group");

            this.delegate.onMemberRemoved(new _GroupContext.GroupContext(_group3), _group3.members, _group3.removedMembers);
          }
        } else if (action == _ActionConst.ActionConst.ActionAddMasterAck) {
          if (null != this.delegate) {
            if (state.code == 200) {
              var _group4 = dialect.getParam("group");

              this.delegate.onMasterAdded(new _GroupContext.GroupContext(_group4), _group4.addedMaster);
            } else {
              this.delegate.onFailed(state.code);
            }
          }
        } else if (action == _ActionConst.ActionConst.ActionRemoveMasterAck) {
          if (null != this.delegate) {
            if (state.code == 200) {
              var _group5 = dialect.getParam("group");

              this.delegate.onMasterRemoved(new _GroupContext.GroupContext(_group5), _group5.removedMaster);
            } else {
              this.delegate.onFailed(state.code);
            }
          }
        } else if (action == _ActionConst.ActionConst.ActionChangeGroupNameAck) {
          if (null != this.delegate) {
            if (state.code == 200) {
              var _group6 = dialect.getParam("group");

              this.delegate.onGroupNameChanged(new _GroupContext.GroupContext(_group6));
            } else {
              this.delegate.onFailed(state.code);
            }
          }
        }
      }
    }]);

    return GroupServiceWorker;
  }(_GroupService2.GroupService);

  _exports.GroupServiceWorker = GroupServiceWorker;
});

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(230)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Service2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.GroupService = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var GroupService =
  /*#__PURE__*/
  function (_Service) {
    _inherits(GroupService, _Service);

    function GroupService() {
      _classCallCheck(this, GroupService);

      return _possibleConstructorReturn(this, _getPrototypeOf(GroupService).apply(this, arguments));
    }

    _createClass(GroupService, [{
      key: "createGroup",

      /**
       * 创建新群组。
       *
       * @param {String} displayName - 指定新群组的显示名称。
       * @param {Array.<String>} members - 指定新群组成员的 Cube 号。
       * @param {CreateGroupConferenceConfig} [conference] - 指定新群组的会议参数。
       * @returns {boolean} 该操作的指令是否被正确发出。
       */
      value: function createGroup(displayName, members, conference) {}
      /**
       * @typedef {Object} CreateGroupConferenceConfig
       * @property {Number} maxNumMember - 指定会议最大成员数量。
       * @property {Number} expired - 指定以秒为单位的会议最大时长。
       */

      /**
       * 删除已存在的群组。
       *
       * @param groupId {String} - 指定需要删除的群组 Cube 号。
       * @returns {boolean} 该操作的指令是否被正确发出。
       */

    }, {
      key: "deleteGroup",
      value: function deleteGroup(groupId) {}
      /**
       * 添加新的群组成员。
       *
       * @param groupId {String} - 指定需要添加成员的群组 Cube 号。
       * @param members {Array.<String>} - 指定需要添加的成员 Cube 号。
       * @returns {boolean} 该操作的指令是否被正确发出。
       */

    }, {
      key: "addMembers",
      value: function addMembers(groupId, members) {}
      /**
       * 删除已存在的群组成员。
       *
       * @param groupId {String} - 指定需要删除成员的群组 Cube 号。
       * @param members {Array.<String>} - 指定需要删除的成员 Cube 号。
       * @returns {boolean} 该操作的指令是否被正确发出。
       */

    }, {
      key: "removeMembers",
      value: function removeMembers(groupId, members) {}
      /**
       * 查询当前账号所在的所有群组的 Cube 号列表。
       *
       * @param {Function} callback - 指定查询成功回调。
       * @param {Function} errorCallback - 指定错误及异常回调。
       * @returns {boolean} 该操作的指令是否被正确发出。
       */

    }, {
      key: "queryGroups",
      value: function queryGroups(callback, errorCallback) {}
      /**
       * 查询指定群组的详情数据。
       *
       * @param groupId {String} - 指定需要查询的群组 Cube 号。
       * @param callback {Function} - 指定查询成功回调。
       * @param errorCallback {Function} - 指定查询错误回调。
       * @returns {boolean} 该操作的指令是否被正确发出。
       */

    }, {
      key: "queryGroupDetails",
      value: function queryGroupDetails(groupId, callback, errorCallback) {}
      /**
       * 添加管理员
       * @param groupId {String} - 指定需要设置管理员的群组 Cube 号
       * @param master {String} - 需要设置为管理员的群成员 Cube 号
       */

    }, {
      key: "addMaster",
      value: function addMaster(groupId, master) {}
      /**
       * 删除管理员
       * @param groupId {String} - 指定需要删除管理员的群组 Cube 号
       * @param master {String} - 需要删除的管理员的 Cube 号
       */

    }, {
      key: "removeMaster",
      value: function removeMaster(groupId, master) {}
      /**
       * 修改群组昵称
       * @param groupId {String} - 指定需要修改昵称的群组 Cube 号
       * @param nickname {String} - 新的昵称
       */

    }, {
      key: "changeGroupName",
      value: function changeGroupName(groupId, nickname) {}
    }]);

    return GroupService;
  }(_Service2.Service);

  _exports.GroupService = GroupService;
});

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(234)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Listener2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.GroupListener = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var GroupListener =
  /*#__PURE__*/
  function (_Listener) {
    _inherits(GroupListener, _Listener);

    function GroupListener() {
      _classCallCheck(this, GroupListener);

      return _possibleConstructorReturn(this, _getPrototypeOf(GroupListener).apply(this, arguments));
    }

    _createClass(GroupListener, [{
      key: "onGroupCreated",

      /**
       * 当有群组被创建且自己是其中成员时被调用。
       *
       * @param {GroupContext} groupContext - 群组上下文对象。
       * @param {String} customId - 自定义字段。
       */
      value: function onGroupCreated(groupContext, customId) {}
      /**
       * 当有群组被删除且自己是其中成员时被调用。
       *
       * @param {GroupContext} groupContext - 群组上下文对象。
       */

    }, {
      key: "onGroupDeleted",
      value: function onGroupDeleted(groupContext) {}
      /**
       * 当自己所在的群组有新增成员时被调用。
       *
       * @param {GroupContext} groupContext - 群组上下文对象。
       * @param {Array.<String>} members - 新增后群组中所有成员的数组。
       * @param {Array.<String>} addedMembers - 本次新增的成员数组。
       */

    }, {
      key: "onMemberAdded",
      value: function onMemberAdded(groupContext, members, addedMembers) {}
      /**
       * 当自己所在的群组被删除时被调用。
       *
       * @param {GroupContext} groupContext - 群组上下文对象。
       * @param {Array.<String>} members - 删除后群组中所有成员的数组。
       * @param {Array.<String>} removedMembers - 被删除的成员数组。
       */

    }, {
      key: "onMemberRemoved",
      value: function onMemberRemoved(groupContext, members, removedMembers) {}
      /**
       * 当自己所在的群组有新增管理员时调用。
       *
       * @param {GroupContext} groupContext - 群组上下文对象。
       * @param {String} addedMaster - 新增的群组管理员 Cube 号
       */

    }, {
      key: "onMasterAdded",
      value: function onMasterAdded(groupContext, addedMaster) {}
      /**
       * 当自己所在的群组有管理员被移除时调用。
       *
       * @param {GroupContext} groupContext - 群组上下文对象。
       * @param {String} removedMaster - 被移除的管理员 Cube 号
       */

    }, {
      key: "onMasterRemoved",
      value: function onMasterRemoved(groupContext, removedMaster) {}
      /**
       * 当自己所在的群组昵称变更时调用。
       *
       * @param {GroupContext} groupContext - 群组上下文对象。
       */

    }, {
      key: "onGroupNameChanged",
      value: function onGroupNameChanged(groupContext) {}
      /**
       * 当有错误时被调用。
       *
       * @param {StateCode} errorCode - 错误码。
       */

    }, {
      key: "onFailed",
      value: function onFailed(errorCode) {}
    }]);

    return GroupListener;
  }(_Listener2.Listener);

  _exports.GroupListener = GroupListener;
});

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(120);

__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.GroupContext = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /*
   * GroupContext.js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 群组对象数据上下文。
   *
   * @class GroupContext
   * @author Xu Jiangwei, Guan Yong
   */
  var GroupContext =
  /*#__PURE__*/
  function () {
    function GroupContext(data) {
      _classCallCheck(this, GroupContext);

      this.data = data;
    }

    _createClass(GroupContext, [{
      key: "getName",
      value: function getName() {
        return this.data.name;
      }
      /**
       * 返回群组 ID 。群组 ID 唯一表示一个群组。
       *
       * @returns {String} 群组 ID 。
       */

    }, {
      key: "getId",
      value: function getId() {
        return this.data.name;
      }
      /**
       * 返回群组的显示名称。
       *
       * @returns {String} 群组显示名。
       */

    }, {
      key: "getDisplayName",
      value: function getDisplayName() {
        return this.data.displayName;
      }
      /**
       * 返回群组创建人。
       *
       * @returns {String} 群组创建人的 Cube 号。
       */

    }, {
      key: "getFounder",
      value: function getFounder() {
        return this.data.founder;
      }
      /**
       * 返回群组创建的绝对时间。
       *
       * @returns {Number} 群组创建时的时间戳。
       */

    }, {
      key: "getCreated",
      value: function getCreated() {
        return this.data.created;
      }
      /**
       * 返回群组的所有成员。
       *
       * @returns {Array} 群组内的所有成员的 Cube 号数组。
       */

    }, {
      key: "getMembers",
      value: function getMembers() {
        return this.data.members;
      }
      /**
       * 返回群组的所有管理员。
       *
       * @returns {Array} 群组内的所有管理员的 Cube 号数组。
       */

    }, {
      key: "getMasters",
      value: function getMasters() {
        return this.data.masters;
      }
      /**
       * 返回群组的所有来宾成员。
       *
       * @returns {Array} 群组内的所有来宾的 Cube 号数组。如果没有来宾成员则返回 <code>null</code> 。
       */

    }, {
      key: "getGuests",
      value: function getGuests() {
        if (undefined === this.data.guests) {
          return null;
        }

        return this.data.guests;
      }
      /**
       * 返回群组是否是开放式群组。
       *
       * @returns {Boolean} 如果是开放群组返回 <code>true</code> 。
       */

    }, {
      key: "isOpen",
      value: function isOpen() {
        return this.data.open;
      }
      /**
       * 返回群组已经申请的会议实例。
       *
       * @returns {CubeConference} 返回会议对象实例。如果群组没有关联的会议则返回 <code>null</code> 。
       */

    }, {
      key: "getConference",
      value: function getConference() {
        if (this.data.attachment) {
          if (undefined !== this.data.attachment.conference) {
            return this.data.attachment.conference;
          }
        } else if (undefined !== this.data.conference) {
          return this.data.conference;
        }

        return null;
      }
    }]);

    return GroupContext;
  }();

  _exports.GroupContext = GroupContext;
});

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(196);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(250), __webpack_require__(207), __webpack_require__(206), __webpack_require__(237), __webpack_require__(238), __webpack_require__(244)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _NetworkDetection, _CELLET, _RegistrationState, _CubeError, _StateCode, _EngineState) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.NetworkListener = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var CellCloud = window.CellCloud;
  /**
   * 网络状态监听器。
   *
   * @author Xu Jiangwei, Guan Yong
   */

  var NetworkListener =
  /*#__PURE__*/
  function (_CellCloud$TalkListen) {
    _inherits(NetworkListener, _CellCloud$TalkListen);

    function NetworkListener(engine) {
      var _this;

      _classCallCheck(this, NetworkListener);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NetworkListener).call(this));
      _this.engine = engine;
      _this.isQuitted = false;
      _this.maxReconnectTime = 180000;
      _this.reConnectTime = 3000;
      _this.recallTimer = 0;

      _NetworkDetection.NetworkDetection.startup({
        connect: function connect() {
          _this.engine.networkConnected = true;

          if (typeof _this.engine.accName === 'string' && typeof _this.engine.accPassword === 'string') {
            if (!_this.isReconnecting) {
              if (_this.recallTimer > 0) {
                clearTimeout(_this.recallTimer);
                _this.recallTimer = 0;
              } // 加速重连


              _this.reConnect();
            }

            _this.reConnectTime = 0;
          }
        },
        disconnect: function disconnect() {
          _this.engine.networkConnected = false;

          _this.engine.triggerCubeEngineState(_EngineState.EngineState.Start);

          if (_this.engine.registered) {
            _this.engine.getAccountService()._fireRegistrationState(_RegistrationState.RegistrationState.Cleared);
          }
        }
      });

      return _this;
    }

    _createClass(NetworkListener, [{
      key: "dialogue",
      value: function dialogue(identifier, primitive) {
        if (primitive.isDialectal()) {
          var dialect = primitive.getDialect();

          if (CellCloud.ActionDialect.DIALECT_NAME === dialect.getName()) {
            this.engine.onDialogue(identifier, dialect.getAction(), dialect);
          }
        }
      }
    }, {
      key: "contacted",
      value: function contacted(identifier, tag) {
        CellCloud.Logger.d("CubeEngine", "*** contacted: " + identifier);

        if (identifier === _CELLET.CELLET.Responder) {
          this.isResponder();
          this.engine.responder.fireContacted();
          return;
        }

        this.isQuitted = false;
        this.engine.isReconnecting = false;
        this.count = 0;
        this.reConnectTime = 3000;

        if (typeof this.engine.accName === 'string' && typeof this.engine.accPassword === 'string' && !this.engine.isBeingRegister && identifier == _CELLET.CELLET.Master) {
          this.reLogin(0);
        }
      }
    }, {
      key: "quitted",
      value: function quitted(identifier, tag) {
        CellCloud.Logger.d("CubeEngine", "*** quitted: " + identifier);

        if (identifier == _CELLET.CELLET.Responder) {
          this.isResponder();
          this.engine.responder.fireQuitted();
          return;
        }

        this.isQuitted = true;

        if (identifier == 'CubeMaster') {
          this._reConnect();
        }
      }
    }, {
      key: "failed",
      value: function failed(tag, failure) {
        CellCloud.Logger.d("CubeEngine", "*** failed: " + tag + " - " + failure.getDescription());
        var list = failure.getSourceCelletIdentifiers();

        if (null != list && list.length == 1 && list[0] == _CELLET.CELLET.Responder) {
          this.isResponder();
          this.engine.responder.fireFailed(failure);
          return;
        }

        this.isQuitted = true;

        this._reConnect();
      }
    }, {
      key: "isResponder",
      value: function isResponder() {
        var _this2 = this;

        // 兼容对时cc连接 5秒重置tag
        clearTimeout(this.responderTimer);
        this.engine.isResponder = true;
        this.responderTimer = setTimeout(function () {
          _this2.engine.isResponder = false;
        }, 5000);
      }
      /**
       * 重新连接
       */

    }, {
      key: "reConnect",
      value: function reConnect() {
        var _this3 = this;

        this.engine.isReconnecting = true;
        this.isBeingRegister = false; // 获取licence失败 重新call

        var accountService = this.engine.getAccountService();
        accountService.licenseManager.checkAndUpdate(null, function (error, update, license) {
          if (_this3.engine.isReconnecting && !_this3.engine.registered) {
            if (_this3.recallTimer > 0) {
              clearTimeout(_this3.recallTimer);
              _this3.recallTimer = 0;
            }

            _this3.engine.isReconnecting = false;

            if (error) {
              // 获取 License 失败 回调应用层 清除本地信息 重新登录；
              if (error.code != 1002) {
                _this3.engine.isLicenseLoaded = false; // 断开引擎连接

                _this3.engine.CellCloud.nucleus.talkService.talkService.hangUp(window.cube._VALID_CELLETS[0], true);

                accountService._fireRegistrationState(_RegistrationState.RegistrationState.Failed, new _CubeError.CubeError(_StateCode.StateCode.GetLicenseFail, 'GetLicense Failed'));
              } else {
                // 如果ws未断开 则强制获取license更新
                if (_this3.isQuitted) {
                  _this3.recallTimer = nucleus.talkService.tryRecall(_this3.reConnectTime);
                } else {
                  setTimeout(function () {
                    _this3.reConnect();
                  }, _this3.reConnectTime);
                }
              }
            } else {
              if (!_this3.engine.registered) {
                accountService._updateLicense(license, true);
              }
            }
          }
        }, true);

        if (this.reConnectTime < this.maxReconnectTime) {
          this.reConnectTime += 1000;
        }
      }
    }, {
      key: "reLogin",

      /**
       * 重新登录
       */
      value: function reLogin(times) {
        var _this4 = this;

        if (times < 5) {
          //  this.engine.getAccountService().login(this.engine.accName, this.engine.accPassword, this.engine.accToken, this.engine.accDisplayName);
          this.engine.getAccountService()._handleRegister(this.engine.accName, this.engine.accPassword, this.engine.accToken, this.engine.accDisplayName);

          setTimeout(function () {
            if (!_this4.engine.registered && _this4.engine.isBeingRegister && typeof _this4.engine.accName === 'string' && typeof _this4.engine.accPassword === 'string') {
              _this4.reLogin(times++);
            }
          }, 10000);
        } else {
          this.engine.getAccountService()._fireRegistrationState(_RegistrationState.RegistrationState.Failed, new _CubeError.CubeError(_StateCode.StateCode.ReLoginTimeout, 'auto re login failed'));
        }
      }
    }, {
      key: "_reConnect",
      value: function _reConnect() {
        if (this.engine.registered) {
          // 回调注销
          this.engine.getAccountService()._fireRegistrationState(_RegistrationState.RegistrationState.Cleared);
        } // 如果不是正常终止, 则尝试重新连接


        if (!this.engine.isShutdown) {
          this.reConnect();
        } // if (null != this.engine.getCallService()) {
        //     if (this.engine.session.isCalling()) {
        //         this.engine.getCallService().terminateCall();
        //     }
        // }
        // if (null != this.engine.sipService) {
        //     this.engine.sipService.unregister();
        // }

      }
    }]);

    return NetworkListener;
  }(CellCloud.TalkListener);

  _exports.NetworkListener = NetworkListener;
});

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.NetworkDetection = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /**
   * Created by GuanYong on 2017/4/26.
   */

  /**
   * 网络检测工具。
   *
   * @author Guan Yong
   */
  var NetworkDetection =
  /*#__PURE__*/
  function () {
    function NetworkDetection(options) {
      var _this = this;

      _classCallCheck(this, NetworkDetection);

      this.options = options;

      this.online = function () {
        if (null != _this.options) {
          _this.options.connect();
        }
      };

      this.offline = function () {
        if (null != _this.options) {
          _this.options.disconnect();
        }
      };
    }

    _createClass(NetworkDetection, [{
      key: "startup",
      value: function startup() {
        window.addEventListener('online', this.online, false);
        window.addEventListener('offline', this.offline, false);
      }
    }, {
      key: "shutdown",
      value: function shutdown() {
        window.removeEventListener('online', this.online, false);
        window.removeEventListener('offline', this.offline, false);
      }
    }], [{
      key: "startup",
      value: function startup(options) {
        if (this.detection != null) {
          this.detection.shutdown();
        }

        this.detection = new NetworkDetection(options);
        this.detection.startup();
      }
    }, {
      key: "shutdown",
      value: function shutdown() {
        if (this.detection != null) {
          this.detection.shutdown();
          this.detection = null;
        }
      }
    }]);

    return NetworkDetection;
  }();

  _exports.NetworkDetection = NetworkDetection;
});

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(62);

__webpack_require__(64);

__webpack_require__(141);

__webpack_require__(196);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(235), __webpack_require__(238), __webpack_require__(207)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _ActionConst, _StateCode, _CELLET) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Responder = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var _window$CellCloud = window.CellCloud,
      InetAddress = _window$CellCloud.InetAddress,
      ActionDialect = _window$CellCloud.ActionDialect,
      Logger = _window$CellCloud.Logger;

  var Responder =
  /*#__PURE__*/
  function () {
    function Responder(session) {
      _classCallCheck(this, Responder);

      this.session = session;
      this.timer = 0;
      this.lastTimestamp = null;
      this.query = false;
    }

    _createClass(Responder, [{
      key: "start",
      value: function start(host, query, socketEnabled) {
        if (undefined === query) {
          this.query = false;
        } else {
          this.query = query;
        }

        if (undefined === socketEnabled) {
          socketEnabled = true;
        }

        var address = new InetAddress(host, 4005);

        if (window.nucleus.talkService.call([_CELLET.CELLET.Responder], address, socketEnabled, true)) {
          var self = this;
          this.timer = setTimeout(function () {
            self._timerHandler();
          }, 10000);
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.timer > 0) {
          clearTimeout(this.timer);
          this.timer = 0;
        }

        this.session.latency = -1;

        if (null != this.session.callPeer) {
          this.session.callPeer.latency = -1;
        }

        window.nucleus.talkService.hangUp(_CELLET.CELLET.Responder);
      }
    }, {
      key: "_timerHandler",
      value: function _timerHandler() {
        clearTimeout(this.timer);
        this.timer = 0;

        if (window.nucleus.talkService.isCalled(_CELLET.CELLET.Responder)) {
          // 启动对时
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionTime);
          dialect.appendParam("timestamp", {
            "originate": Date.now()
          });
          window.nucleus.talkService.talk(_CELLET.CELLET.Responder, dialect);
        }

        var self = this;
        this.timer = setTimeout(function () {
          self._timerHandler();
        }, 60000);
      }
    }, {
      key: "fireDialogue",
      value: function fireDialogue(action, dialect) {
        if (action == _ActionConst.ActionConst.ActionTimeAck) {
          // 处理 time-ack
          var state = dialect.getParam("state");

          if (state.code == _StateCode.StateCode.Ok) {
            // 获取服务器回包
            this.lastTimestamp = dialect.getParam("timestamp"); // 添加 arrive 字段

            this.lastTimestamp.arrive = Date.now();
            var data = {
              "name": this.session.name.toString(),
              "timestamp": this.lastTimestamp
            }; // 计算行程

            var latency = this.lastTimestamp.arrive - this.lastTimestamp.originate - (this.lastTimestamp.transmit - this.lastTimestamp.receive);
            this.session.latency = latency; // 上报

            var response = new ActionDialect();
            response.setAction(_ActionConst.ActionConst.ActionRespond);
            response.appendParam("data", data);
            window.nucleus.talkService.talk(_CELLET.CELLET.Responder, response);
          } else {
            Logger.e("CubeResponder", "Error '" + action + "' : " + state.code + " : " + state.desc);
          }
        } else if (action == _ActionConst.ActionConst.ActionRespondAck) {
          // 处理 respond-ack
          var _state = dialect.getParam("state");

          if (_state.code == _StateCode.StateCode.Ok) {
            if (this.query) {
              // 进行查询
              var peer = this.session.callPeer.name;

              if (null != peer) {
                var queryDialect = new ActionDialect();
                queryDialect.setAction(_ActionConst.ActionConst.ActionQueryRespond);
                queryDialect.appendParam("name", peer.toString());
                window.nucleus.talkService.talk(_CELLET.CELLET.Responder, queryDialect);
              }
            }
          } else {
            Logger.e("CubeResponder", "Error '" + action + "' : " + _state.code + " : " + _state.desc);
          }
        } else if (action == _ActionConst.ActionConst.ActionQueryRespondAck) {
          // 处理 query-respond-ack
          var _state2 = dialect.getParam("state");

          if (_state2.code == _StateCode.StateCode.Ok) {
            var _data = dialect.getParam("data");

            if (_data.name == this.session.callPeer.name) {
              var timestamp = _data.timestamp;

              var _latency = timestamp.arrive - timestamp.originate - (timestamp.transmit - timestamp.receive);

              this.session.callPeer.latency = _latency;
            }
          }
        }
      }
    }, {
      key: "fireContacted",
      value: function fireContacted() {}
    }, {
      key: "fireQuitted",
      value: function fireQuitted() {}
    }, {
      key: "fireFailed",
      value: function fireFailed(failure) {
        if (this.timer > 0) {
          clearTimeout(this.timer);
          this.timer = 0;
        }
      }
    }]);

    return Responder;
  }();

  _exports.Responder = Responder;
});

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(234)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Listener2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CubeEngineListener = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var CubeEngineListener =
  /*#__PURE__*/
  function (_Listener) {
    _inherits(CubeEngineListener, _Listener);

    function CubeEngineListener() {
      _classCallCheck(this, CubeEngineListener);

      return _possibleConstructorReturn(this, _getPrototypeOf(CubeEngineListener).apply(this, arguments));
    }

    _createClass(CubeEngineListener, [{
      key: "onStarted",

      /**
       * 引擎启动完成时回调
       */
      value: function onStarted() {}
      /**
       * 引擎状态变化时回调
       * @param state
       */

    }, {
      key: "onStateChange",
      value: function onStateChange(state) {}
      /**
       * 引擎停止时回调
       */

    }, {
      key: "onStopped",
      value: function onStopped() {}
      /**
       * 引擎错误时回调
       * @param error {Object} 错误信息
       */

    }, {
      key: "onFailed",
      value: function onFailed(error) {}
    }]);

    return CubeEngineListener;
  }(_Listener2.Listener);

  _exports.CubeEngineListener = CubeEngineListener;
});

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CubeServer = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var CubeServer =
  /*#__PURE__*/
  function () {
    function CubeServer(engine) {
      _classCallCheck(this, CubeServer);

      this.engine = engine;
      this.host = null;
      this.port = null;
      this.httpHost = null;
      this.httpPort = null;
      this.ssl = location.protocol === 'https:';
    }

    _createClass(CubeServer, [{
      key: "update",

      /**
       *
       * @param license {{
       *      CubeServer: {Host: String, Port: Number},
       *      CubeHttpServer: {Host: String, HTTPPort: Number, SSLPort: Number},
       *      Conference: {HTTPCapture: String, SSLCapture: String}
       *  }}
       */
      value: function update(license) {
        var CubeServer = license.CubeServer,
            CubeHttpServer = license.CubeHttpServer,
            Conference = license.Conference,
            StorageServer = license.StorageServer;
        this.host = this.engine._CUBE_DOMAIN = CubeServer.Host;
        this.engine._CUBE_STORAGE_DOMAIN = StorageServer.Host;
        this.httpHost = CubeHttpServer.Host;
        this.engine._CUBE_FILE_SERVER = 'http://' + StorageServer.Host + ":" + StorageServer.HTTPPort;
        this.engine._CUBE_HTTP_SERVICE = "https://" + CubeHttpServer.Host + ":" + CubeHttpServer.HTTPPort;
        this.engine._CUBE_HTTPS_SERVICE = "https://" + CubeHttpServer.Host + ":" + CubeHttpServer.SSLPort;

        if (this.ssl) {
          this.port = this.engine._CUBE_PORT = CubeServer.HTTPPort + 10;
          this.httpPort = CubeHttpServer.SSLPort;
          this.engine._CUBE_CONF_CAPTURE_SERVICE = Conference.SSLCapture;
          this.engine._CUBE_STORAGE_PORT = StorageServer.SSLPort;
        } else {
          this.engine._CUBE_STORAGE_PORT = StorageServer.HTTPPort;
          this.port = this.engine._CUBE_PORT = CubeServer.HTTPPort;
          this.httpPort = CubeHttpServer.HTTPPort;
          this.engine._CUBE_CONF_CAPTURE_SERVICE = Conference.HTTPCapture;
        } //  this.engine._CUBE_DOMAIN ='192.168.1.6',  this.engine._CUBE_PORT =7070;


        this.engine._CUBE_SERVICE = this.http;
      }
    }, {
      key: "socket",
      get: function get() {
        return (this.ssl ? 'wss://' : 'ws://') + this.host + ':' + this.port;
      }
    }, {
      key: "http",
      get: function get() {
        return (this.ssl ? 'https://' : 'http://') + this.httpHost + ':' + this.httpPort;
      }
    }]);

    return CubeServer;
  }();

  _exports.CubeServer = CubeServer;
});

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CodecType = void 0;

  /*
   * CodecType.js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 视频通信格式枚举
   *
   * @enum
   * @author Li WenKai
   */
  var CodecType = {
    /**
     * VP8格式
     */
    VP8: "VP8",

    /**
     * VP9格式
     */
    VP9: "VP9",

    /**
     * H264格式
     */
    H264: "H264"
  };
  _exports.CodecType = CodecType;
});

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(209)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CubeConfig = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var CubeConfig =
  /*#__PURE__*/
  function () {
    /**
     * @constructs
     */
    function CubeConfig() {
      _classCallCheck(this, CubeConfig);

      /** AppKey */
      this.appKey = '';
      /** AppId */

      this.appid = '';
      /** 授权服务器地址 */

      this.licenseServer = (_Utils.Utils.isSecure ? "https" : "http") + '://license.getcube.cn/auth/license/get';
      /*文件传输协议 1 HTTP*/

      this.transportProtocol = 1;
      /**是否支持SIP协议*/

      this.isSupportSip = true;
      /**是否保持在线*/

      this.isAlwaysOnline = true;
      /**是否自动重发失败消息*/

      this.autoSendFailedMsg = true;
      /**是否在登录后自动同步消息*/

      this.autoSyncMsg = true;
      /**是否更新授权信息*/

      this.isUpdateLicense = true;
      /**是否为调试模式*/

      this.isDebug = false;
      /**应用数据存储目录*/

      this.resourceDir = './assets';
      /**是否启用硬件解码*/

      this.isHardwareDecoding = true;
      /**默认使用摄像头配置 1 前置 0 后置*/

      this.cameraId = 1;
      /**音频编解码配置[opus,ISAC]*/

      this.audioCodec = "opus";
      /**视频编解码配置[VP8,VP9,H264 High]*/

      this.videoCodec = "VP8";
      /**视频宽度*/

      this.videoWidth = 1280;
      /**视频高度*/

      this.videoHeight = 720;
      /**视频帧率*/

      this.videoFps = 18;
      /**最大视频宽带*/

      this.videoMaxBitrate = 0;
      /**最小音频宽带*/

      this.audioMinBitrate = 0;
      /**设备类型*/

      this.deviceName = null;
      /*是否显示一对一遮罩*/

      this.showCallMask = true;
      this.socketEnabled = true, this.frameRate = {
        min: 5,
        max: 18
      };
      this.bandwidth = {
        audio: 70,
        video: 512
      };
      this.videoSize = {
        width: 640,
        height: 480
      };
    }
    /**
     * 设置应用Id。
     *
     * @param {String} appId - appId。
     */


    _createClass(CubeConfig, [{
      key: "setAppId",
      value: function setAppId(appId) {
        this.appid = appId;
      }
      /**
       * 设置应用密钥。
       *
       * @param {String} appKey - appKey。
       */

    }, {
      key: "setAppKey",
      value: function setAppKey(appKey) {
        this.appkey = appKey;
      }
      /**
       * 启动时是否同步最近历史消息。
       *
       * @param {Boolean} isSync - true false。
       */

    }, {
      key: "setAutoSyncMsg",
      value: function setAutoSyncMsg(isSync) {
        this.autoSyncMsg = isSync;
      }
      /**
       * App数据，聊天，拍照等文件数据存放目录
       *
       * @param {String} dir - dir 。
       */

    }, {
      key: "setResourceDir",
      value: function setResourceDir(dir) {
        this.resourceDir = dir;
      }
      /**
       * 是否为debug
       *
       * @param {Boolean} isDebug -
       */

    }, {
      key: "setDebug",
      value: function setDebug(isDebug) {
        this.debug = isDebug;
      }
      /**
       * 视频分辨率
       *
       * @param {number} width  - 宽度。
       * @param {number} height - 高度。
       */

    }, {
      key: "setVideoSize",
      value: function setVideoSize(width, height) {
        this.videoSize = {
          width: width,
          height: height
        };
      }
      /**
       * 音频通信格式Opus
       *
       * @param {String} audioCodec -  。
       */

    }, {
      key: "setAudioCodec",
      value: function setAudioCodec(audioCodec) {
        this.audioCodec = audioCodec;
      }
      /**
       * 视频通信格式VP8/VP9
       *
       * @param {String} videoCodec - dir 。
       */

    }, {
      key: "setVideoCodec",
      value: function setVideoCodec(videoCodec) {
        this.videoCodec = videoCodec;
      }
      /**
       * 授权服务器地址
       *
       * @param {String} licenseServer  。
       */

    }, {
      key: "setLicenseServer",
      value: function setLicenseServer(licenseServer) {
        this.licenseServer = licenseServer;
      }
      /**
       * App数据，聊天，拍照等文件数据存放目录
       *
       * @param {String} min - dir 。
       * @param {String} max - dir 。
       */

    }, {
      key: "setFrameRate",
      value: function setFrameRate(min, max) {
        this.frameRate = {
          min: min,
          max: max
        };
      }
      /**
       *App数据，聊天，拍照等文件数据存放目录
       *
       * @param {String} audio - dir 。
       * @param {String} video - dir 。
       */

    }, {
      key: "setBandwidth",
      value: function setBandwidth(audio, video) {
        this.bandwidth = {
          audio: audio,
          video: video
        };
      }
    }, {
      key: "getLicenseServer",
      value: function getLicenseServer() {
        return this.licenseServer;
      }
    }]);

    return CubeConfig;
  }();

  _exports.CubeConfig = CubeConfig;
});

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(99);

__webpack_require__(199);

__webpack_require__(100);

__webpack_require__(106);

__webpack_require__(257);

__webpack_require__(1);

__webpack_require__(107);

__webpack_require__(258);

__webpack_require__(212);

__webpack_require__(108);

__webpack_require__(259);

__webpack_require__(262);

__webpack_require__(117);

__webpack_require__(118);

__webpack_require__(120);

__webpack_require__(121);

__webpack_require__(125);

__webpack_require__(129);

__webpack_require__(263);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(232);

__webpack_require__(130);

__webpack_require__(264);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(136);

__webpack_require__(139);

__webpack_require__(265);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(227);

__webpack_require__(142);

__webpack_require__(146);

__webpack_require__(266);

__webpack_require__(195);

__webpack_require__(89);

__webpack_require__(200);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  !function (t, e) {
    "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
  }(window, function () {
    return function (t) {
      var e = {};

      function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: r
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var o in t) {
          n.d(r, o, function (e) {
            return t[e];
          }.bind(null, o));
        }
        return r;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t["default"];
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 94);
    }([function (t, e, n) {
      (function (e) {
        var n = "object",
            r = function r(t) {
          return t && t.Math == Math && t;
        };

        t.exports = r((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == n && globalThis) || r((typeof window === "undefined" ? "undefined" : _typeof(window)) == n && window) || r((typeof self === "undefined" ? "undefined" : _typeof(self)) == n && self) || r(_typeof(e) == n && e) || Function("return this")();
      }).call(this, n(68));
    }, function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    }, function (t, e, n) {
      var r = n(0),
          o = n(30).f,
          i = n(7),
          u = n(11),
          a = n(33),
          c = n(46),
          f = n(71);

      t.exports = function (t, e) {
        var n,
            s,
            l,
            p,
            y,
            v = t.target,
            h = t.global,
            d = t.stat;
        if (n = h ? r : d ? r[v] || a(v, {}) : (r[v] || {}).prototype) for (s in e) {
          if (p = e[s], l = t.noTargetGet ? (y = o(n, s)) && y.value : n[s], !f(h ? s : v + (d ? "." : "#") + s, t.forced) && void 0 !== l) {
            if (_typeof(p) == _typeof(l)) continue;
            c(p, l);
          }

          (t.sham || l && l.sham) && i(p, "sham", !0), u(n, s, p, t);
        }
      };
    }, function (t, e) {
      var n = {}.hasOwnProperty;

      t.exports = function (t, e) {
        return n.call(t, e);
      };
    }, function (t, e, n) {
      var r = n(0),
          o = n(15),
          i = n(34),
          u = n(53),
          a = r.Symbol,
          c = o("wks");

      t.exports = function (t) {
        return c[t] || (c[t] = u && a[t] || (u ? a : i)("Symbol." + t));
      };
    }, function (t, e, n) {
      var r = n(1);
      t.exports = !r(function () {
        return 7 != Object.defineProperty({}, "a", {
          get: function get() {
            return 7;
          }
        }).a;
      });
    }, function (t, e, n) {
      var r = n(5),
          o = n(43),
          i = n(9),
          u = n(14),
          a = Object.defineProperty;
      e.f = r ? a : function (t, e, n) {
        if (i(t), e = u(e, !0), i(n), o) try {
          return a(t, e, n);
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t;
      };
    }, function (t, e, n) {
      var r = n(5),
          o = n(6),
          i = n(13);
      t.exports = r ? function (t, e, n) {
        return o.f(t, e, i(1, n));
      } : function (t, e, n) {
        return t[e] = n, t;
      };
    }, function (t, e) {
      t.exports = function (t) {
        return "object" == _typeof(t) ? null !== t : "function" == typeof t;
      };
    }, function (t, e, n) {
      var r = n(8);

      t.exports = function (t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    }, function (t, e, n) {
      var r = n(42),
          o = n(32);

      t.exports = function (t) {
        return r(o(t));
      };
    }, function (t, e, n) {
      var r = n(0),
          o = n(15),
          i = n(7),
          u = n(3),
          a = n(33),
          c = n(45),
          f = n(20),
          s = f.get,
          l = f.enforce,
          p = String(c).split("toString");
      o("inspectSource", function (t) {
        return c.call(t);
      }), (t.exports = function (t, e, n, o) {
        var c = !!o && !!o.unsafe,
            f = !!o && !!o.enumerable,
            s = !!o && !!o.noTargetGet;
        "function" == typeof n && ("string" != typeof e || u(n, "name") || i(n, "name", e), l(n).source = p.join("string" == typeof e ? e : "")), t !== r ? (c ? !s && t[e] && (f = !0) : delete t[e], f ? t[e] = n : i(t, e, n)) : f ? t[e] = n : a(e, n);
      })(Function.prototype, "toString", function () {
        return "function" == typeof this && s(this).source || c.call(this);
      });
    }, function (t, e, n) {
      var r = n(32);

      t.exports = function (t) {
        return Object(r(t));
      };
    }, function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        };
      };
    }, function (t, e, n) {
      var r = n(8);

      t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function (t, e, n) {
      var r = n(0),
          o = n(33),
          i = n(19),
          u = r["__core-js_shared__"] || o("__core-js_shared__", {});
      (t.exports = function (t, e) {
        return u[t] || (u[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.2.1",
        mode: i ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(10),
          o = n(79),
          i = n(39),
          u = n(20),
          a = n(60),
          c = u.set,
          f = u.getterFor("Array Iterator");
      t.exports = a(Array, "Array", function (t, e) {
        c(this, {
          type: "Array Iterator",
          target: r(t),
          index: 0,
          kind: e
        });
      }, function () {
        var t = f(this),
            e = t.target,
            n = t.kind,
            r = t.index++;
        return !e || r >= e.length ? (t.target = void 0, {
          value: void 0,
          done: !0
        }) : "keys" == n ? {
          value: r,
          done: !1
        } : "values" == n ? {
          value: e[r],
          done: !1
        } : {
          value: [r, e[r]],
          done: !1
        };
      }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
    }, function (t, e, n) {
      var r = n(2),
          o = n(5);
      r({
        target: "Object",
        stat: !0,
        forced: !o,
        sham: !o
      }, {
        defineProperty: n(6).f
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(2),
          o = n(0),
          i = n(19),
          u = n(5),
          a = n(53),
          c = n(1),
          f = n(3),
          s = n(54),
          l = n(8),
          p = n(9),
          y = n(12),
          v = n(10),
          h = n(14),
          d = n(13),
          g = n(24),
          b = n(55),
          m = n(35),
          S = n(74),
          O = n(52),
          w = n(30),
          x = n(6),
          k = n(41),
          j = n(7),
          _ = n(11),
          P = n(15),
          D = n(21),
          T = n(22),
          I = n(34),
          E = n(4),
          C = n(56),
          A = n(57),
          N = n(38),
          L = n(20),
          B = n(75).forEach,
          R = D("hidden"),
          M = E("toPrimitive"),
          q = L.set,
          F = L.getterFor("Symbol"),
          G = Object.prototype,
          _J = o.Symbol,
          V = o.JSON,
          K = V && V.stringify,
          z = w.f,
          U = x.f,
          Y = S.f,
          H = k.f,
          W = P("symbols"),
          $ = P("op-symbols"),
          Q = P("string-to-symbol-registry"),
          X = P("symbol-to-string-registry"),
          Z = P("wks"),
          tt = o.QObject,
          et = !tt || !tt.prototype || !tt.prototype.findChild,
          nt = u && c(function () {
        return 7 != g(U({}, "a", {
          get: function get() {
            return U(this, "a", {
              value: 7
            }).a;
          }
        })).a;
      }) ? function (t, e, n) {
        var r = z(G, e);
        r && delete G[e], U(t, e, n), r && t !== G && U(G, e, r);
      } : U,
          rt = function rt(t, e) {
        var n = W[t] = g(_J.prototype);
        return q(n, {
          type: "Symbol",
          tag: t,
          description: e
        }), u || (n.description = e), n;
      },
          ot = a && "symbol" == _typeof(_J.iterator) ? function (t) {
        return "symbol" == _typeof(t);
      } : function (t) {
        return Object(t) instanceof _J;
      },
          it = function it(t, e, n) {
        t === G && it($, e, n), p(t);
        var r = h(e, !0);
        return p(n), f(W, r) ? (n.enumerable ? (f(t, R) && t[R][r] && (t[R][r] = !1), n = g(n, {
          enumerable: d(0, !1)
        })) : (f(t, R) || U(t, R, d(1, {})), t[R][r] = !0), nt(t, r, n)) : U(t, r, n);
      },
          ut = function ut(t, e) {
        p(t);
        var n = v(e),
            r = b(n).concat(st(n));
        return B(r, function (e) {
          u && !at.call(n, e) || it(t, e, n[e]);
        }), t;
      },
          at = function at(t) {
        var e = h(t, !0),
            n = H.call(this, e);
        return !(this === G && f(W, e) && !f($, e)) && (!(n || !f(this, e) || !f(W, e) || f(this, R) && this[R][e]) || n);
      },
          ct = function ct(t, e) {
        var n = v(t),
            r = h(e, !0);

        if (n !== G || !f(W, r) || f($, r)) {
          var o = z(n, r);
          return !o || !f(W, r) || f(n, R) && n[R][r] || (o.enumerable = !0), o;
        }
      },
          ft = function ft(t) {
        var e = Y(v(t)),
            n = [];
        return B(e, function (t) {
          f(W, t) || f(T, t) || n.push(t);
        }), n;
      },
          st = function st(t) {
        var e = t === G,
            n = Y(e ? $ : v(t)),
            r = [];
        return B(n, function (t) {
          !f(W, t) || e && !f(G, t) || r.push(W[t]);
        }), r;
      };

      a || (_((_J = function J() {
        if (this instanceof _J) throw TypeError("Symbol is not a constructor");

        var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            e = I(t),
            n = function n(t) {
          this === G && n.call($, t), f(this, R) && f(this[R], e) && (this[R][e] = !1), nt(this, e, d(1, t));
        };

        return u && et && nt(G, e, {
          configurable: !0,
          set: n
        }), rt(e, t);
      }).prototype, "toString", function () {
        return F(this).tag;
      }), k.f = at, x.f = it, w.f = ct, m.f = S.f = ft, O.f = st, u && (U(_J.prototype, "description", {
        configurable: !0,
        get: function get() {
          return F(this).description;
        }
      }), i || _(G, "propertyIsEnumerable", at, {
        unsafe: !0
      })), C.f = function (t) {
        return rt(E(t), t);
      }), r({
        global: !0,
        wrap: !0,
        forced: !a,
        sham: !a
      }, {
        Symbol: _J
      }), B(b(Z), function (t) {
        A(t);
      }), r({
        target: "Symbol",
        stat: !0,
        forced: !a
      }, {
        "for": function _for(t) {
          var e = String(t);
          if (f(Q, e)) return Q[e];

          var n = _J(e);

          return Q[e] = n, X[n] = e, n;
        },
        keyFor: function keyFor(t) {
          if (!ot(t)) throw TypeError(t + " is not a symbol");
          if (f(X, t)) return X[t];
        },
        useSetter: function useSetter() {
          et = !0;
        },
        useSimple: function useSimple() {
          et = !1;
        }
      }), r({
        target: "Object",
        stat: !0,
        forced: !a,
        sham: !u
      }, {
        create: function create(t, e) {
          return void 0 === e ? g(t) : ut(g(t), e);
        },
        defineProperty: it,
        defineProperties: ut,
        getOwnPropertyDescriptor: ct
      }), r({
        target: "Object",
        stat: !0,
        forced: !a
      }, {
        getOwnPropertyNames: ft,
        getOwnPropertySymbols: st
      }), r({
        target: "Object",
        stat: !0,
        forced: c(function () {
          O.f(1);
        })
      }, {
        getOwnPropertySymbols: function getOwnPropertySymbols(t) {
          return O.f(y(t));
        }
      }), V && r({
        target: "JSON",
        stat: !0,
        forced: !a || c(function () {
          var t = _J();

          return "[null]" != K([t]) || "{}" != K({
            a: t
          }) || "{}" != K(Object(t));
        })
      }, {
        stringify: function stringify(t) {
          for (var e, n, r = [t], o = 1; arguments.length > o;) {
            r.push(arguments[o++]);
          }

          if (n = e = r[1], (l(e) || void 0 !== t) && !ot(t)) return s(e) || (e = function e(t, _e) {
            if ("function" == typeof n && (_e = n.call(this, t, _e)), !ot(_e)) return _e;
          }), r[1] = e, K.apply(V, r);
        }
      }), _J.prototype[M] || j(_J.prototype, M, _J.prototype.valueOf), N(_J, "Symbol"), T[R] = !0;
    }, function (t, e) {
      t.exports = !1;
    }, function (t, e, n) {
      var r,
          o,
          i,
          u = n(69),
          a = n(0),
          c = n(8),
          f = n(7),
          s = n(3),
          l = n(21),
          p = n(22),
          y = a.WeakMap;

      if (u) {
        var v = new y(),
            h = v.get,
            d = v.has,
            g = v.set;
        r = function r(t, e) {
          return g.call(v, t, e), e;
        }, o = function o(t) {
          return h.call(v, t) || {};
        }, i = function i(t) {
          return d.call(v, t);
        };
      } else {
        var b = l("state");
        p[b] = !0, r = function r(t, e) {
          return f(t, b, e), e;
        }, o = function o(t) {
          return s(t, b) ? t[b] : {};
        }, i = function i(t) {
          return s(t, b);
        };
      }

      t.exports = {
        set: r,
        get: o,
        has: i,
        enforce: function enforce(t) {
          return i(t) ? o(t) : r(t, {});
        },
        getterFor: function getterFor(t) {
          return function (e) {
            var n;
            if (!c(e) || (n = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
            return n;
          };
        }
      };
    }, function (t, e, n) {
      var r = n(15),
          o = n(34),
          i = r("keys");

      t.exports = function (t) {
        return i[t] || (i[t] = o(t));
      };
    }, function (t, e) {
      t.exports = {};
    }, function (t, e) {
      var n = Math.ceil,
          r = Math.floor;

      t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
      };
    }, function (t, e, n) {
      var r = n(9),
          o = n(72),
          i = n(37),
          u = n(22),
          a = n(73),
          c = n(44),
          f = n(21)("IE_PROTO"),
          s = function s() {},
          _l = function l() {
        var t,
            e = c("iframe"),
            n = i.length;

        for (e.style.display = "none", a.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _l = t.F; n--;) {
          delete _l.prototype[i[n]];
        }

        return _l();
      };

      t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (s.prototype = r(t), n = new s(), s.prototype = null, n[f] = t) : n = _l(), void 0 === e ? n : o(n, e);
      }, u[f] = !0;
    }, function (t, e, n) {
      "use strict";

      var r = n(2),
          o = n(5),
          i = n(0),
          u = n(3),
          a = n(8),
          c = n(6).f,
          f = n(46),
          s = i.Symbol;

      if (o && "function" == typeof s && (!("description" in s.prototype) || void 0 !== s().description)) {
        var l = {},
            p = function p() {
          var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
              e = this instanceof p ? new s(t) : void 0 === t ? s() : s(t);
          return "" === t && (l[e] = !0), e;
        };

        f(p, s);
        var y = p.prototype = s.prototype;
        y.constructor = p;
        var v = y.toString,
            h = "Symbol(test)" == String(s("test")),
            d = /^Symbol\((.*)\)[^)]+$/;
        c(y, "description", {
          configurable: !0,
          get: function get() {
            var t = a(this) ? this.valueOf() : this,
                e = v.call(t);
            if (u(l, t)) return "";
            var n = h ? e.slice(7, -1) : e.replace(d, "$1");
            return "" === n ? void 0 : n;
          }
        }), r({
          global: !0,
          forced: !0
        }, {
          Symbol: p
        });
      }
    }, function (t, e, n) {
      n(57)("iterator");
    }, function (t, e, n) {
      var r = n(11),
          o = n(87),
          i = Object.prototype;
      o !== i.toString && r(i, "toString", o, {
        unsafe: !0
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(91).charAt,
          o = n(20),
          i = n(60),
          u = o.set,
          a = o.getterFor("String Iterator");
      i(String, "String", function (t) {
        u(this, {
          type: "String Iterator",
          string: String(t),
          index: 0
        });
      }, function () {
        var t,
            e = a(this),
            n = e.string,
            o = e.index;
        return o >= n.length ? {
          value: void 0,
          done: !0
        } : (t = r(n, o), e.index += t.length, {
          value: t,
          done: !1
        });
      });
    }, function (t, e, n) {
      var r = n(0),
          o = n(92),
          i = n(16),
          u = n(7),
          a = n(4),
          c = a("iterator"),
          f = a("toStringTag"),
          s = i.values;

      for (var l in o) {
        var p = r[l],
            y = p && p.prototype;

        if (y) {
          if (y[c] !== s) try {
            u(y, c, s);
          } catch (t) {
            y[c] = s;
          }
          if (y[f] || u(y, f, l), o[l]) for (var v in i) {
            if (y[v] !== i[v]) try {
              u(y, v, i[v]);
            } catch (t) {
              y[v] = i[v];
            }
          }
        }
      }
    }, function (t, e, n) {
      var r = n(5),
          o = n(41),
          i = n(13),
          u = n(10),
          a = n(14),
          c = n(3),
          f = n(43),
          s = Object.getOwnPropertyDescriptor;
      e.f = r ? s : function (t, e) {
        if (t = u(t), e = a(e, !0), f) try {
          return s(t, e);
        } catch (t) {}
        if (c(t, e)) return i(!o.f.call(t, e), t[e]);
      };
    }, function (t, e) {
      var n = {}.toString;

      t.exports = function (t) {
        return n.call(t).slice(8, -1);
      };
    }, function (t, e) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    }, function (t, e, n) {
      var r = n(0),
          o = n(7);

      t.exports = function (t, e) {
        try {
          o(r, t, e);
        } catch (n) {
          r[t] = e;
        }

        return e;
      };
    }, function (t, e) {
      var n = 0,
          r = Math.random();

      t.exports = function (t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36);
      };
    }, function (t, e, n) {
      var r = n(49),
          o = n(37).concat("length", "prototype");

      e.f = Object.getOwnPropertyNames || function (t) {
        return r(t, o);
      };
    }, function (t, e, n) {
      var r = n(23),
          o = Math.min;

      t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    }, function (t, e) {
      t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }, function (t, e, n) {
      var r = n(6).f,
          o = n(3),
          i = n(4)("toStringTag");

      t.exports = function (t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, {
          configurable: !0,
          value: e
        });
      };
    }, function (t, e) {
      t.exports = {};
    }, function (t, e, n) {
      var r = n(3),
          o = n(12),
          i = n(21),
          u = n(62),
          a = i("IE_PROTO"),
          c = Object.prototype;
      t.exports = u ? Object.getPrototypeOf : function (t) {
        return t = o(t), r(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null;
      };
    }, function (t, e, n) {
      "use strict";

      var r = {}.propertyIsEnumerable,
          o = Object.getOwnPropertyDescriptor,
          i = o && !r.call({
        1: 2
      }, 1);
      e.f = i ? function (t) {
        var e = o(this, t);
        return !!e && e.enumerable;
      } : r;
    }, function (t, e, n) {
      var r = n(1),
          o = n(31),
          i = "".split;
      t.exports = r(function () {
        return !Object("z").propertyIsEnumerable(0);
      }) ? function (t) {
        return "String" == o(t) ? i.call(t, "") : Object(t);
      } : Object;
    }, function (t, e, n) {
      var r = n(5),
          o = n(1),
          i = n(44);
      t.exports = !r && !o(function () {
        return 7 != Object.defineProperty(i("div"), "a", {
          get: function get() {
            return 7;
          }
        }).a;
      });
    }, function (t, e, n) {
      var r = n(0),
          o = n(8),
          i = r.document,
          u = o(i) && o(i.createElement);

      t.exports = function (t) {
        return u ? i.createElement(t) : {};
      };
    }, function (t, e, n) {
      var r = n(15);
      t.exports = r("native-function-to-string", Function.toString);
    }, function (t, e, n) {
      var r = n(3),
          o = n(70),
          i = n(30),
          u = n(6);

      t.exports = function (t, e) {
        for (var n = o(e), a = u.f, c = i.f, f = 0; f < n.length; f++) {
          var s = n[f];
          r(t, s) || a(t, s, c(e, s));
        }
      };
    }, function (t, e, n) {
      var r = n(48),
          o = n(0),
          i = function i(t) {
        return "function" == typeof t ? t : void 0;
      };

      t.exports = function (t, e) {
        return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][e] || o[t] && o[t][e];
      };
    }, function (t, e, n) {
      t.exports = n(0);
    }, function (t, e, n) {
      var r = n(3),
          o = n(10),
          i = n(50).indexOf,
          u = n(22);

      t.exports = function (t, e) {
        var n,
            a = o(t),
            c = 0,
            f = [];

        for (n in a) {
          !r(u, n) && r(a, n) && f.push(n);
        }

        for (; e.length > c;) {
          r(a, n = e[c++]) && (~i(f, n) || f.push(n));
        }

        return f;
      };
    }, function (t, e, n) {
      var r = n(10),
          o = n(36),
          i = n(51),
          u = function u(t) {
        return function (e, n, u) {
          var a,
              c = r(e),
              f = o(c.length),
              s = i(u, f);

          if (t && n != n) {
            for (; f > s;) {
              if ((a = c[s++]) != a) return !0;
            }
          } else for (; f > s; s++) {
            if ((t || s in c) && c[s] === n) return t || s || 0;
          }

          return !t && -1;
        };
      };

      t.exports = {
        includes: u(!0),
        indexOf: u(!1)
      };
    }, function (t, e, n) {
      var r = n(23),
          o = Math.max,
          i = Math.min;

      t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? o(n + e, 0) : i(n, e);
      };
    }, function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    }, function (t, e, n) {
      var r = n(1);
      t.exports = !!Object.getOwnPropertySymbols && !r(function () {
        return !String(Symbol());
      });
    }, function (t, e, n) {
      var r = n(31);

      t.exports = Array.isArray || function (t) {
        return "Array" == r(t);
      };
    }, function (t, e, n) {
      var r = n(49),
          o = n(37);

      t.exports = Object.keys || function (t) {
        return r(t, o);
      };
    }, function (t, e, n) {
      e.f = n(4);
    }, function (t, e, n) {
      var r = n(48),
          o = n(3),
          i = n(56),
          u = n(6).f;

      t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = {});
        o(e, t) || u(e, t, {
          value: i.f(t)
        });
      };
    }, function (t, e, n) {
      var r = n(8),
          o = n(54),
          i = n(4)("species");

      t.exports = function (t, e) {
        var n;
        return o(t) && ("function" != typeof (n = t.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === e ? 0 : e);
      };
    }, function (t, e, n) {
      "use strict";

      var r = n(2),
          o = n(50).indexOf,
          i = n(78),
          u = [].indexOf,
          a = !!u && 1 / [1].indexOf(1, -0) < 0,
          c = i("indexOf");
      r({
        target: "Array",
        proto: !0,
        forced: a || c
      }, {
        indexOf: function indexOf(t) {
          return a ? u.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(2),
          o = n(80),
          i = n(40),
          u = n(63),
          a = n(38),
          c = n(7),
          f = n(11),
          s = n(4),
          l = n(19),
          p = n(39),
          y = n(61),
          v = y.IteratorPrototype,
          h = y.BUGGY_SAFARI_ITERATORS,
          d = s("iterator"),
          g = function g() {
        return this;
      };

      t.exports = function (t, e, n, s, y, b, m) {
        o(n, e, s);

        var S,
            O,
            w,
            x = function x(t) {
          if (t === y && D) return D;
          if (!h && t in _) return _[t];

          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new n(this, t);
              };
          }

          return function () {
            return new n(this);
          };
        },
            k = e + " Iterator",
            j = !1,
            _ = t.prototype,
            P = _[d] || _["@@iterator"] || y && _[y],
            D = !h && P || x(y),
            T = "Array" == e && _.entries || P;

        if (T && (S = i(T.call(new t())), v !== Object.prototype && S.next && (l || i(S) === v || (u ? u(S, v) : "function" != typeof S[d] && c(S, d, g)), a(S, k, !0, !0), l && (p[k] = g))), "values" == y && P && "values" !== P.name && (j = !0, D = function D() {
          return P.call(this);
        }), l && !m || _[d] === D || c(_, d, D), p[e] = D, y) if (O = {
          values: x("values"),
          keys: b ? D : x("keys"),
          entries: x("entries")
        }, m) for (w in O) {
          !h && !j && w in _ || f(_, w, O[w]);
        } else r({
          target: e,
          proto: !0,
          forced: h || j
        }, O);
        return O;
      };
    }, function (t, e, n) {
      "use strict";

      var r,
          o,
          i,
          u = n(40),
          a = n(7),
          c = n(3),
          f = n(4),
          s = n(19),
          l = f("iterator"),
          p = !1;
      [].keys && ("next" in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (r = o) : p = !0), null == r && (r = {}), s || c(r, l) || a(r, l, function () {
        return this;
      }), t.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: p
      };
    }, function (t, e, n) {
      var r = n(1);
      t.exports = !r(function () {
        function t() {}

        return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
      });
    }, function (t, e, n) {
      var r = n(9),
          o = n(81);
      t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var t,
            e = !1,
            n = {};

        try {
          (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array;
        } catch (t) {}

        return function (n, i) {
          return r(n), o(i), e ? t.call(n, i) : n.__proto__ = i, n;
        };
      }() : void 0);
    }, function (t, e, n) {
      var r = n(5),
          o = n(6).f,
          i = Function.prototype,
          u = i.toString,
          a = /^\s*function ([^ (]*)/;
      !r || "name" in i || o(i, "name", {
        configurable: !0,
        get: function get() {
          try {
            return u.call(this).match(a)[1];
          } catch (t) {
            return "";
          }
        }
      });
    }, function (t, e, n) {
      n(2)({
        target: "Object",
        stat: !0,
        sham: !n(5)
      }, {
        create: n(24)
      });
    }, function (t, e, n) {
      var r = n(2),
          o = n(1),
          i = n(12),
          u = n(40),
          a = n(62);
      r({
        target: "Object",
        stat: !0,
        forced: o(function () {
          u(1);
        }),
        sham: !a
      }, {
        getPrototypeOf: function getPrototypeOf(t) {
          return u(i(t));
        }
      });
    }, function (t, e, n) {
      n(2)({
        target: "Object",
        stat: !0
      }, {
        setPrototypeOf: n(63)
      });
    }, function (t, e) {
      var n;

      n = function () {
        return this;
      }();

      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
      }

      t.exports = n;
    }, function (t, e, n) {
      var r = n(0),
          o = n(45),
          i = r.WeakMap;
      t.exports = "function" == typeof i && /native code/.test(o.call(i));
    }, function (t, e, n) {
      var r = n(47),
          o = n(35),
          i = n(52),
          u = n(9);

      t.exports = r("Reflect", "ownKeys") || function (t) {
        var e = o.f(u(t)),
            n = i.f;
        return n ? e.concat(n(t)) : e;
      };
    }, function (t, e, n) {
      var r = n(1),
          o = /#|\.prototype\./,
          i = function i(t, e) {
        var n = a[u(t)];
        return n == f || n != c && ("function" == typeof e ? r(e) : !!e);
      },
          u = i.normalize = function (t) {
        return String(t).replace(o, ".").toLowerCase();
      },
          a = i.data = {},
          c = i.NATIVE = "N",
          f = i.POLYFILL = "P";

      t.exports = i;
    }, function (t, e, n) {
      var r = n(5),
          o = n(6),
          i = n(9),
          u = n(55);
      t.exports = r ? Object.defineProperties : function (t, e) {
        i(t);

        for (var n, r = u(e), a = r.length, c = 0; a > c;) {
          o.f(t, n = r[c++], e[n]);
        }

        return t;
      };
    }, function (t, e, n) {
      var r = n(47);
      t.exports = r("document", "documentElement");
    }, function (t, e, n) {
      var r = n(10),
          o = n(35).f,
          i = {}.toString,
          u = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

      t.exports.f = function (t) {
        return u && "[object Window]" == i.call(t) ? function (t) {
          try {
            return o(t);
          } catch (t) {
            return u.slice();
          }
        }(t) : o(r(t));
      };
    }, function (t, e, n) {
      var r = n(76),
          o = n(42),
          i = n(12),
          u = n(36),
          a = n(58),
          c = [].push,
          f = function f(t) {
        var e = 1 == t,
            n = 2 == t,
            f = 3 == t,
            s = 4 == t,
            l = 6 == t,
            p = 5 == t || l;
        return function (y, v, h, d) {
          for (var g, b, m = i(y), S = o(m), O = r(v, h, 3), w = u(S.length), x = 0, k = d || a, j = e ? k(y, w) : n ? k(y, 0) : void 0; w > x; x++) {
            if ((p || x in S) && (b = O(g = S[x], x, m), t)) if (e) j[x] = b;else if (b) switch (t) {
              case 3:
                return !0;

              case 5:
                return g;

              case 6:
                return x;

              case 2:
                c.call(j, g);
            } else if (s) return !1;
          }

          return l ? -1 : f || s ? s : j;
        };
      };

      t.exports = {
        forEach: f(0),
        map: f(1),
        filter: f(2),
        some: f(3),
        every: f(4),
        find: f(5),
        findIndex: f(6)
      };
    }, function (t, e, n) {
      var r = n(77);

      t.exports = function (t, e, n) {
        if (r(t), void 0 === e) return t;

        switch (n) {
          case 0:
            return function () {
              return t.call(e);
            };

          case 1:
            return function (n) {
              return t.call(e, n);
            };

          case 2:
            return function (n, r) {
              return t.call(e, n, r);
            };

          case 3:
            return function (n, r, o) {
              return t.call(e, n, r, o);
            };
        }

        return function () {
          return t.apply(e, arguments);
        };
      };
    }, function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t;
      };
    }, function (t, e, n) {
      "use strict";

      var r = n(1);

      t.exports = function (t, e) {
        var n = [][t];
        return !n || !r(function () {
          n.call(null, e || function () {
            throw 1;
          }, 1);
        });
      };
    }, function (t, e, n) {
      var r = n(4),
          o = n(24),
          i = n(7),
          u = r("unscopables"),
          a = Array.prototype;
      null == a[u] && i(a, u, o(null)), t.exports = function (t) {
        a[u][t] = !0;
      };
    }, function (t, e, n) {
      "use strict";

      var r = n(61).IteratorPrototype,
          o = n(24),
          i = n(13),
          u = n(38),
          a = n(39),
          c = function c() {
        return this;
      };

      t.exports = function (t, e, n) {
        var f = e + " Iterator";
        return t.prototype = o(r, {
          next: i(1, n)
        }), u(t, f, !1, !0), a[f] = c, t;
      };
    }, function (t, e, n) {
      var r = n(8);

      t.exports = function (t) {
        if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        return t;
      };
    }, function (t, e, n) {
      "use strict";

      var r = n(2),
          o = n(51),
          i = n(23),
          u = n(36),
          a = n(12),
          c = n(58),
          f = n(83),
          s = n(84),
          l = Math.max,
          p = Math.min;
      r({
        target: "Array",
        proto: !0,
        forced: !s("splice")
      }, {
        splice: function splice(t, e) {
          var n,
              r,
              s,
              y,
              v,
              h,
              d = a(this),
              g = u(d.length),
              b = o(t, g),
              m = arguments.length;
          if (0 === m ? n = r = 0 : 1 === m ? (n = 0, r = g - b) : (n = m - 2, r = p(l(i(e), 0), g - b)), g + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");

          for (s = c(d, r), y = 0; y < r; y++) {
            (v = b + y) in d && f(s, y, d[v]);
          }

          if (s.length = r, n < r) {
            for (y = b; y < g - r; y++) {
              h = y + n, (v = y + r) in d ? d[h] = d[v] : delete d[h];
            }

            for (y = g; y > g - r + n; y--) {
              delete d[y - 1];
            }
          } else if (n > r) for (y = g - r; y > b; y--) {
            h = y + n - 1, (v = y + r - 1) in d ? d[h] = d[v] : delete d[h];
          }

          for (y = 0; y < n; y++) {
            d[y + b] = arguments[y + 2];
          }

          return d.length = g - r + n, s;
        }
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(14),
          o = n(6),
          i = n(13);

      t.exports = function (t, e, n) {
        var u = r(e);
        u in t ? o.f(t, u, i(0, n)) : t[u] = n;
      };
    }, function (t, e, n) {
      var r = n(1),
          o = n(4)("species");

      t.exports = function (t) {
        return !r(function () {
          var e = [];
          return (e.constructor = {})[o] = function () {
            return {
              foo: 1
            };
          }, 1 !== e[t](Boolean).foo;
        });
      };
    }, function (t, e, n) {
      "use strict";

      var r = n(2),
          o = n(1),
          i = n(12),
          u = n(14);
      r({
        target: "Date",
        proto: !0,
        forced: o(function () {
          return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function toISOString() {
              return 1;
            }
          });
        })
      }, {
        toJSON: function toJSON(t) {
          var e = i(this),
              n = u(e);
          return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
        }
      });
    }, function (t, e, n) {
      var r = n(11),
          o = Date.prototype,
          i = o.toString,
          u = o.getTime;
      new Date(NaN) + "" != "Invalid Date" && r(o, "toString", function () {
        var t = u.call(this);
        return t == t ? i.call(this) : "Invalid Date";
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(88),
          o = {};
      o[n(4)("toStringTag")] = "z", t.exports = "[object z]" !== String(o) ? function () {
        return "[object " + r(this) + "]";
      } : o.toString;
    }, function (t, e, n) {
      var r = n(31),
          o = n(4)("toStringTag"),
          i = "Arguments" == r(function () {
        return arguments;
      }());

      t.exports = function (t) {
        var e, n, u;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
          try {
            return t[e];
          } catch (t) {}
        }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u;
      };
    }, function (t, e, n) {
      "use strict";

      var r = n(11),
          o = n(9),
          i = n(1),
          u = n(90),
          a = RegExp.prototype,
          c = a.toString,
          f = i(function () {
        return "/a/b" != c.call({
          source: "a",
          flags: "b"
        });
      }),
          s = "toString" != c.name;
      (f || s) && r(RegExp.prototype, "toString", function () {
        var t = o(this),
            e = String(t.source),
            n = t.flags;
        return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in a) ? u.call(t) : n);
      }, {
        unsafe: !0
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(9);

      t.exports = function () {
        var t = r(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
      };
    }, function (t, e, n) {
      var r = n(23),
          o = n(32),
          i = function i(t) {
        return function (e, n) {
          var i,
              u,
              a = String(o(e)),
              c = r(n),
              f = a.length;
          return c < 0 || c >= f ? t ? "" : void 0 : (i = a.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === f || (u = a.charCodeAt(c + 1)) < 56320 || u > 57343 ? t ? a.charAt(c) : i : t ? a.slice(c, c + 2) : u - 56320 + (i - 55296 << 10) + 65536;
        };
      };

      t.exports = {
        codeAt: i(!1),
        charAt: i(!0)
      };
    }, function (t, e) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    }, function (t, e, n) {
      "use strict";

      n(2)({
        target: "URL",
        proto: !0,
        enumerable: !0
      }, {
        toJSON: function toJSON() {
          return URL.prototype.toString.call(this);
        }
      });
    }, function (t, e, n) {
      "use strict";

      n.r(e);
      n(18), n(25), n(26), n(59), n(16), n(82), n(85), n(86), n(64), n(65), n(17), n(66), n(67), n(27), n(89), n(28), n(29), n(93);

      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      var o = function () {
        function t() {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.version = "4", this.tables = [], this.db = null, this.isConnect = !1, this.tasks = [], this.entityList = [], window.indexedDB || (window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB), window.openDatabase = window.openDatabase || window.mozOpenDatabase || window.webkitOpenDatabase || window.msOpenDatabase;
        }

        var e, n, o;
        return e = t, (n = [{
          key: "loadTable",
          value: function value(t, e) {
            this.tables.push({
              name: t,
              columns: e
            });
          }
        }]) && r(e.prototype, n), o && r(e, o), t;
      }();

      function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      function u(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      function a(t, e) {
        return !e || "object" !== i(e) && "function" != typeof e ? function (t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }(t) : e;
      }

      function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
      }

      function f(t, e) {
        return (f = Object.setPrototypeOf || function (t, e) {
          return t.__proto__ = e, t;
        })(t, e);
      }

      var s = function (t) {
        function e() {
          return function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, e), a(this, c(e).apply(this, arguments));
        }

        var n, r, i;
        return function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && f(t, e);
        }(e, o), n = e, (r = [{
          key: "loadEntity",
          value: function value(t) {}
        }, {
          key: "open",
          value: function value(t, e) {}
        }, {
          key: "close",
          value: function value() {}
        }, {
          key: "deleteDB",
          value: function value(t, e) {}
        }, {
          key: "clear",
          value: function value(t, e) {}
        }, {
          key: "setEntity",
          value: function value(t, e, n) {}
        }, {
          key: "delEntity",
          value: function value(t, e, n) {}
        }, {
          key: "queryOfCursor",
          value: function value(t, e) {
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments.length > 4 && void 0 !== arguments[4] && arguments[4], arguments.length > 5 && arguments[5];
          }
        }, {
          key: "query",
          value: function value(t, e) {
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments.length > 4 && void 0 !== arguments[4] && arguments[4], arguments.length > 5 && arguments[5];
          }
        }, {
          key: "queryCount",
          value: function value(t, e, n) {}
        }, {
          key: "queryAll",
          value: function value(t, e) {}
        }]) && u(n.prototype, r), i && u(n, i), e;
      }();

      function l(t) {
        return (l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      function p(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      var y = function () {
        function t() {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.id = null, this._values = [];
        }

        var e, n, r;
        return e = t, r = [{
          key: "like",
          value: function value(t) {
            return this._convert("like", t);
          }
        }, {
          key: "between",
          value: function value(t, e) {
            return this._convert("between", {
              min: t,
              max: e
            });
          }
        }, {
          key: "gt",
          value: function value(t) {
            return this._convert("gt", t);
          }
        }, {
          key: "lt",
          value: function value(t) {
            return this._convert("lt", t);
          }
        }, {
          key: "gte",
          value: function value(t) {
            return this._convert("gte", t);
          }
        }, {
          key: "lte",
          value: function value(t) {
            return this._convert("lte", t);
          }
        }, {
          key: "_convert",
          value: function value(t, e) {
            return {
              _DBCONDITIONTYPE: t,
              _DBCONDITIONVALUE: e
            };
          }
        }, {
          key: "_format",
          value: function value(t) {
            var e = [];
            if ("eq" === t.type) e.push(IDBKeyRange.only(t.value));else if ("gt" === t.type) e.push(IDBKeyRange.lowerBound(t.value, !0));else if ("gte" === t.type) e.push(IDBKeyRange.lowerBound(t.value, !1));else if ("lt" === t.type) e.push(IDBKeyRange.upperBound(t.value, !0));else if ("lte" === t.type) e.push(IDBKeyRange.upperBound(t.value, !1));else if ("between" === t.type) e.push(IDBKeyRange.bound(t.value.min, t.value.max));else if ("includes" === t.type) {
              var n = !0,
                  r = !1,
                  o = void 0;

              try {
                for (var i, u = t.value[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                  var a = i.value;
                  e.push(IDBKeyRange.only(a));
                }
              } catch (t) {
                r = !0, o = t;
              } finally {
                try {
                  n || null == u["return"] || u["return"]();
                } finally {
                  if (r) throw o;
                }
              }
            } else "like" === t.type && e.push(IDBKeyRange.bound(t.value, t.value + "￿"));
            return e;
          }
        }], (n = [{
          key: "add",
          value: function value(t, e) {
            var n = !1;
            if (e instanceof Array && (e.length > 1 ? n = !0 : e = e[0]), "id" === t && -1 !== ["number", "string"].indexOf(l(e))) this.id = e;else {
              var r = "eq";

              if (n) {
                r = "includes";

                for (var o = 0; o < e.length; o++) {
                  var i = e[o];
                  "boolean" == typeof i && (e[o] = i ? 1 : 0);
                }
              } else e && "object" === l(e) && "string" == typeof e._DBCONDITIONTYPE ? (r = e._DBCONDITIONTYPE, e = e._DBCONDITIONVALUE) : "boolean" == typeof e && (e = e ? 1 : 0);

              this._values.push({
                key: t,
                value: e,
                type: r
              });
            }
          }
        }, {
          key: "values",
          value: function value() {
            var t = this,
                e = 0;
            return {
              next: function next() {
                return e < t._values.length ? t._values[e++] : null;
              },
              length: this._values.length
            };
          }
        }, {
          key: "check",
          value: function value(t) {
            var e,
                n = this.values();
            n.next();

            for (var r = !0; e = n.next();) {
              if (t.hasOwnProperty(e.key)) {
                var o = t[e.key];
                "eq" === e.type ? r = e.value === o : "gt" === e.type ? r = e.value > o : "gte" === e.type ? r = e.value >= o : "lt" === e.type ? r = e.value < o : "lte" === e.type ? r = e.value <= o : "between" === e.type ? r = o >= e.value.min && o <= e.value.max : "includes" === e.type ? r = -1 !== e.value.indexOf(o) : "like" === e.type && (r = -1 !== o.indexOf(e.value));
              } else r = !1;

              if (!r) break;
            }

            return r;
          }
        }]) && p(e.prototype, n), r && p(e, r), t;
      }();

      function v(t) {
        return (v = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      var d = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.id = e;

          for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) {
            r[o - 1] = arguments[o];
          }

          this._uniques = r, this.tableName = (this instanceof t ? this.constructor : void 0) ? (this instanceof t ? this.constructor : void 0).name : r[r.length - 1];
        }

        var e, n, r;
        return e = t, r = [{
          key: "parse",
          value: function value(t, e) {
            var n = new t();
            return n.setDataByJson(e), n;
          }
        }, {
          key: "onChange",
          value: function value(t, e) {
            e.reset();
          }
        }], (n = [{
          key: "toJSON",
          value: function value(t) {
            var e = {};

            for (var n in this) {
              this.hasOwnProperty(n) && "_uniques" !== n && "tableName" !== n && "function" != typeof this[n] && ("object" === v(this[n]) && t ? e[n] = JSON.stringify(this[n]) : "boolean" == typeof this[n] ? e[n] = this[n] ? 1 : 0 : e[n] = this[n]);
            }

            return e;
          }
        }, {
          key: "toColumns",
          value: function value() {
            var t = [];

            for (var e in this) {
              this.hasOwnProperty(e) && "_uniques" !== e && "tableName" !== e && "function" != typeof this[e] && t.push(e);
            }

            return t;
          }
        }, {
          key: "setDataByJson",
          value: function value(t) {
            for (var e in t) {
              t.hasOwnProperty(e) && (this[e] = t[e]);
            }
          }
        }]) && h(e.prototype, n), r && h(e, r), t;
      }();

      function g(t) {
        return (g = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      function b(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      function m(t, e) {
        return !e || "object" !== g(e) && "function" != typeof e ? function (t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }(t) : e;
      }

      function S(t) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
      }

      function O(t, e) {
        return (O = Object.setPrototypeOf || function (t, e) {
          return t.__proto__ = e, t;
        })(t, e);
      }

      var w = function (t) {
        function e(t) {
          var n;
          return function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, e), (n = m(this, S(e).call(this))).version = t, n.toString = !0, n;
        }

        var n, r, o;
        return function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && O(t, e);
        }(e, s), n = e, (r = [{
          key: "open",
          value: function value(t, e) {
            var n = this,
                r = window.indexedDB.open(t, this.version);
            r.onerror = function (t) {
              e(t.target.error);
            }, r.onsuccess = function (t) {
              if (n.isConnect = !0, n.db = r.result, e(!1), n.tasks.length > 0) {
                var o = !0,
                    i = !1,
                    u = void 0;

                try {
                  for (var a, c = n.tasks[Symbol.iterator](); !(o = (a = c.next()).done); o = !0) {
                    var f = a.value;
                    n[f.action].apply(n, f.args);
                  }
                } catch (t) {
                  i = !0, u = t;
                } finally {
                  try {
                    o || null == c["return"] || c["return"]();
                  } finally {
                    if (i) throw u;
                  }
                }
              }

              n.tasks = [];
            }, r.onupgradeneeded = function (t) {
              for (var e = t.currentTarget.result, o = 0; o < n.entityList.length; o++) {
                var i = n.entityList[o];
                !function (n, o) {
                  var i,
                      u = new n(),
                      a = {
                    remove: function remove(t) {
                      i.deleteIndex(t);
                    },
                    append: function append(t) {
                      i.createIndex(t, t, {
                        unique: -1 !== u._uniques.indexOf(t)
                      });
                    },
                    reset: function reset() {
                      o && e.deleteObjectStore(n.name);

                      for (var t = e.createObjectStore(n.name, {
                        keyPath: "id"
                      }), r = u.toColumns(), i = 0; i < r.length; i++) {
                        var a = r[i];
                        t.createIndex(a, a, {
                          unique: -1 !== u._uniques.indexOf(a)
                        });
                      }
                    }
                  };
                  o ? (i = r.transaction.objectStore(n.name), n.onChange(t.oldVersion, a)) : a.reset();
                }(i, e.objectStoreNames.contains(i.name));
              }
            };
          }
        }, {
          key: "close",
          value: function value() {
            this.isConnect = !1, this.db && "function" == typeof this.db.close && this.db.close();
          }
        }, {
          key: "deleteDB",
          value: function value(t, e) {
            var n = window.indexedDB.deleteDatabase(t);
            n.onerror = e, n.onsuccess = function (t) {
              e(!1);
            };
          }
        }, {
          key: "setEntity",
          value: function value(t, e, n) {
            if (this.isConnect) {
              if (e instanceof Array || (e = [e]), e.length > 0) for (var r = this.db.transaction(t.name, "readwrite"), o = r.objectStore(t.name), i = 0, u = !1, a = [], _c = function c() {
                r = null, _c = null, "function" == typeof n && n(u, a);
              }, f = function f(n) {
                var r = o.put(n);
                r.onsuccess = function () {
                  ++i >= e.length && _c();
                }, r.onerror = function (r) {
                  console.error("[DBCore] Storage data (" + JSON.stringify(n) + ") to <" + t.name + "> failed!"), i++, u = r.target.error, a.push(n), i >= e.length && _c();
                };
              }, s = 0; s < e.length; s++) {
                var l = e[s];
                f(l.toJSON(this.toString));
              } else n(new Error("parameter is incorrect"));
            } else this.tasks.push({
              action: "setEntity",
              args: arguments
            });
          }
        }, {
          key: "delEntity",
          value: function value(t, e, n) {
            if (this.isConnect) {
              var r = this.db.transaction(t.name, "readwrite"),
                  o = r.objectStore(t.name),
                  i = 0,
                  u = 0,
                  a = !1,
                  c = function c(t) {
                var e = o["delete"](t);
                e.onerror = n, e.onsuccess = function (t) {
                  i++, a && i === u && n(!1);
                };
              };

              null !== e.id || e.values().length > 0 ? this.queryOfCursor(o, e, 0, null, !1, function (t, e) {
                t ? (r.abort(), n(t)) : null !== e ? (u++, c(e.id)) : i === u ? n(!1) : a = !0;
              }) : this._clear(o, n);
            } else this.tasks.push({
              action: "delEntity",
              args: arguments
            });
          }
        }, {
          key: "queryOfCursor",
          value: function value(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                i = arguments.length > 5 ? arguments[5] : void 0;

            if (this.isConnect) {
              if (!(t instanceof IDBObjectStore)) {
                var u = this.db.transaction(t.name, "readwrite");
                t = u.objectStore(t.name);
              }

              var a = e.values();

              if (null !== e.id) {
                var c = t.get(e.id);
                return c.onerror = i, void (c.onsuccess = function (t) {
                  var n = t.target.result;
                  n && e.check(n) && i(!1, n), i(!1, null);
                });
              }

              var f = a.next();
              if (null !== f) !function () {
                var u = t.index(f.key),
                    c = y._format(f),
                    s = 0;

                if (null === r) {
                  var l = !0,
                      p = !1,
                      v = void 0;

                  try {
                    for (var h, d = c[Symbol.iterator](); !(l = (h = d.next()).done); l = !0) {
                      var g = h.value,
                          b = u.getAll(g);
                      b.onerror = i, b.onsuccess = function (t) {
                        s++;
                        var n = t.target.result;
                        if (o) for (var r = n.length - 1; r >= 0; r--) {
                          var u = n[r];
                          e.check(u) && i(!1, u);
                        } else {
                          var a = !0,
                              f = !1,
                              l = void 0;

                          try {
                            for (var p, y = n[Symbol.iterator](); !(a = (p = y.next()).done); a = !0) {
                              var v = p.value;
                              e.check(v) && i(!1, v);
                            }
                          } catch (t) {
                            f = !0, l = t;
                          } finally {
                            try {
                              a || null == y["return"] || y["return"]();
                            } finally {
                              if (f) throw l;
                            }
                          }
                        }
                        s === c.length && i(!1, null);
                      };
                    }
                  } catch (t) {
                    p = !0, v = t;
                  } finally {
                    try {
                      l || null == d["return"] || d["return"]();
                    } finally {
                      if (p) throw v;
                    }
                  }
                } else {
                  var m = 0 === n,
                      S = 0;
                  !function t(f) {
                    var s = c[f],
                        l = u.openCursor(s, o ? "prev" : "next");
                    l.onerror = i, l.onsuccess = function (o) {
                      var u = o.target.result;
                      if (u) {
                        if (m) S < r ? (e.check(u.value) && (S++, i(!1, u.value)), u["continue"]()) : i(!1, null);else {
                          if (1 === a.length) return m = !0, void u.advance(n);
                          e.check(u.value) && ++S === n && (S = 0, m = !0), u["continue"]();
                        }
                      } else f + 1 === c.length ? i(!1, null) : t(f + 1);
                    };
                  }(0);
                }
              }();else if (0 === n && null === r) {
                var s = t.getAll();
                s.onerror = i, s.onsuccess = function (t) {
                  var e = t.target.result;
                  if (o) for (var n = e.length - 1; n >= 0; n--) {
                    i(!1, e[n]);
                  } else {
                    var r = !0,
                        u = !1,
                        a = void 0;

                    try {
                      for (var c, f = e[Symbol.iterator](); !(r = (c = f.next()).done); r = !0) {
                        var s = c.value;
                        i(!1, s);
                      }
                    } catch (t) {
                      u = !0, a = t;
                    } finally {
                      try {
                        r || null == f["return"] || f["return"]();
                      } finally {
                        if (u) throw a;
                      }
                    }
                  }
                  i(!1, null);
                };
              } else {
                var l = 0 === n,
                    p = 0,
                    v = t.openCursor(null, o ? "prev" : "next");
                v.onerror = i, v.onsuccess = function (t) {
                  var e = t.target.result;
                  !l && e ? (l = !0, e.advance(n)) : e && (p < r || null === r) ? (p++, i(!1, e.value), e["continue"]()) : i(!1, null);
                };
              }
            } else this.tasks.push({
              action: "queryOfCursor",
              args: arguments
            });
          }
        }, {
          key: "query",
          value: function value(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                i = arguments.length > 5 ? arguments[5] : void 0;

            if (this.isConnect) {
              "function" == typeof n ? (i = n, n = 0) : "function" == typeof r ? (i = r, r = null) : "function" == typeof o && (i = o, o = !1);
              var u = this.db.transaction(t.name, "readwrite"),
                  a = u.objectStore(t.name);

              if (null !== e.id || e.values().length > 0 || n > 1e4 || null !== r) {
                var c = [];
                this.queryOfCursor(a, e, n, r, o, function (t, e) {
                  t ? (u.abort(), i(t)) : null !== e ? c.push(e) : i(!1, c);
                });
              } else {
                var f = a.getAll();
                f.onerror = i, f.onsuccess = function (t) {
                  var e = t.target.result;
                  o && e.reverse(), n > 0 && e.splice(0, n), i(!1, e);
                };
              }
            } else this.tasks.push({
              action: "query",
              args: arguments
            });
          }
        }, {
          key: "queryCount",
          value: function value(t, e, n) {
            if (this.isConnect) {
              var r = this.db.transaction(t.name, "readwrite"),
                  o = r.objectStore(t.name);

              if (null !== e.id || e.values().length > 0) {
                var i = e.values();

                if (null !== e.id) {
                  var u = o.get(e.id);
                  return u.onerror = n, void (u.onsuccess = function (t) {
                    var r = t.target.result;
                    n(!1, r && e.check(r) ? 1 : 0);
                  });
                }

                var a = i.next();
                null !== a && function () {
                  var t = o.index(a.key),
                      u = y._format(a),
                      c = 0;

                  if (1 === u.length && 1 === i.length) {
                    var f = t.count(u[0]);
                    f.onerror = n, f.onsuccess = function (t) {
                      n(!1, t.target.result);
                    };
                  } else !function () {
                    var o = 0,
                        i = !0,
                        a = !1,
                        f = void 0;

                    try {
                      for (var s, l = u[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                        var p = s.value,
                            y = t.getAll(p);
                        y.onerror = function (t) {
                          r.abort(), n(t);
                        }, y.onsuccess = function (t) {
                          c++;
                          var r = t.target.result,
                              i = !0,
                              a = !1,
                              f = void 0;

                          try {
                            for (var s, l = r[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                              var p = s.value;
                              e.check(p) && o++;
                            }
                          } catch (t) {
                            a = !0, f = t;
                          } finally {
                            try {
                              i || null == l["return"] || l["return"]();
                            } finally {
                              if (a) throw f;
                            }
                          }

                          c === u.length && n(!1, o);
                        };
                      }
                    } catch (t) {
                      a = !0, f = t;
                    } finally {
                      try {
                        i || null == l["return"] || l["return"]();
                      } finally {
                        if (a) throw f;
                      }
                    }
                  }();
                }();
              } else {
                var c = o.count();
                c.onerror = n, c.onsuccess = function (t) {
                  n(!1, t.target.result);
                };
              }
            } else this.tasks.push({
              action: "queryCount",
              args: arguments
            });
          }
        }, {
          key: "queryAll",
          value: function value(t, e) {
            if (this.isConnect) {
              var n = this.db.transaction(t.name, "readwrite"),
                  r = n.objectStore(t.name),
                  o = r.getAll();
              o.onerror = e, o.onsuccess = function (t) {
                e(!1, t.target.result);
              };
            } else this.tasks.push({
              action: "queryAll",
              args: arguments
            });
          }
        }, {
          key: "_clear",
          value: function value(t, e) {
            var n = t.clear();
            n.onerror = e, n.onsuccess = function () {
              "function" == typeof e && e();
            };
          }
        }, {
          key: "clear",
          value: function value(t, e) {
            this.isConnect ? this._clear(this.db.transaction(t.name, "readwrite").objectStore(t.name), e) : this.tasks.push({
              action: "clear",
              args: arguments
            });
          }
        }, {
          key: "loadEntity",
          value: function value(t) {
            this.entityList.push(t);
          }
        }]) && b(n.prototype, r), o && b(n, o), e;
      }();

      n.d(e, "DB", function () {
        return x;
      });
      var x = {
        getInstance: function getInstance() {
          if (window.indexedDB) return new w();
        },
        DBCondition: y,
        DBEntity: d
      };
      e["default"] = x;
    }]);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(92)(module)))

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var isArray = __webpack_require__(86);

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var isArray = __webpack_require__(86);

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var toISOString = __webpack_require__(260);

// `Date.prototype.toISOString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
$({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== toISOString }, {
  toISOString: toISOString
});


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(4);
var padStart = __webpack_require__(261).start;

var abs = Math.abs;
var DatePrototype = Date.prototype;
var getTime = DatePrototype.getTime;
var nativeDateToISOString = DatePrototype.toISOString;

// `Date.prototype.toISOString` method implementation
// https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
module.exports = (fails(function () {
  return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  nativeDateToISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var date = this;
  var year = date.getUTCFullYear();
  var milliseconds = date.getUTCMilliseconds();
  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
  return sign + padStart(abs(year), sign ? 6 : 4, 0) +
    '-' + padStart(date.getUTCMonth() + 1, 2, 0) +
    '-' + padStart(date.getUTCDate(), 2, 0) +
    'T' + padStart(date.getUTCHours(), 2, 0) +
    ':' + padStart(date.getUTCMinutes(), 2, 0) +
    ':' + padStart(date.getUTCSeconds(), 2, 0) +
    '.' + padStart(milliseconds, 3, 0) +
    'Z';
} : nativeDateToISOString;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(31);
var repeat = __webpack_require__(215);
var requireObjectCoercible = __webpack_require__(6);

var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = String(requireObjectCoercible($this));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = toLength(maxLength);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var fails = __webpack_require__(4);
var toObject = __webpack_require__(57);
var toPrimitive = __webpack_require__(20);

var FORCED = fails(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
});

// `Date.prototype.toJSON` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tojson
$({ target: 'Date', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var DESCRIPTORS = __webpack_require__(14);
var defineProperties = __webpack_require__(26);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var toObject = __webpack_require__(57);
var nativeKeys = __webpack_require__(27);
var fails = __webpack_require__(4);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var objectDefinePropertyModule = __webpack_require__(15);
var regExpFlags = __webpack_require__(138);

// `RegExp.prototype.flags` getter
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
if (DESCRIPTORS && /./g.flags != 'g') {
  objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: regExpFlags
  });
}


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var global = __webpack_require__(9);

// `globalThis` object
// https://github.com/tc39/proposal-global
$({ global: true }, {
  globalThis: global
});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return URL.prototype.toString.call(this);
  }
});


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(120);

__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Peer = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /*
   * Peer.js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 用于描述视频、语音通话对端的 Peer 类。
   *
   * @class Peer
   * @author Xu Jiangwei, Guan Yong
   */
  var Peer =
  /*#__PURE__*/
  function () {
    function Peer(name) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var conference = arguments.length > 2 ? arguments[2] : undefined;

      _classCallCheck(this, Peer);

      this.name = name;
      this.displayName = null;
      this.latency = -1;
      this.type = type;
      this.conference = conference;
    }
    /**
     * 返回 Peer 的注册名。
     *
     * @returns {String} 返回字符串形式的注册 Cube 号。
     */


    _createClass(Peer, [{
      key: "getName",
      value: function getName() {
        return this.name;
      }
      /**
       * 返回 Peer 的显示名。
       *
       * @returns {String} 返回字符串形式的显示名称。
       */

    }, {
      key: "getDisplayName",
      value: function getDisplayName() {
        return this.displayName;
      }
      /**
       * 返回 Peer 的网络行程。
       *
       * @returns {String} 返回数字型的行程数据，单位：毫秒。
       */

    }, {
      key: "getLatency",
      value: function getLatency() {
        return this.latency;
      }
    }]);

    return Peer;
  }();

  _exports.Peer = Peer;
});

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Permission = void 0;

  /*
   * Permission.js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 权限枚举。
   *
   * @readonly
   * @enum {String}
   * @author Guan Yong
   */
  var Permission = {
    /**
     * 权限限定为只读。
     */
    READ: "read",

    /**
     * 权限限定为可读写。
     */
    WRITE: "write"
  };
  _exports.Permission = Permission;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=CubeCore.js.map