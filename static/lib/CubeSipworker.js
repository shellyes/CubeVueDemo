(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CubeSipworker"] = factory();
	else
		root["CubeSipworker"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 361);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
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
/* 91 */,
/* 92 */,
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
/* 99 */,
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
/* 103 */,
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
/* 121 */,
/* 122 */,
/* 123 */,
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
/* 125 */,
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
/* 134 */,
/* 135 */,
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
/* 160 */,
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
/* 179 */,
/* 180 */,
/* 181 */,
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
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
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
/* 198 */,
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
/* 205 */,
/* 206 */,
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
/* 209 */,
/* 210 */,
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
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
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
/* 228 */,
/* 229 */,
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
/* 233 */,
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
/* 236 */,
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
/* 239 */,
/* 240 */,
/* 241 */,
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
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
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
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
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
/* 265 */,
/* 266 */,
/* 267 */,
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
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var aFunction = __webpack_require__(77);
var toObject = __webpack_require__(57);
var fails = __webpack_require__(4);
var sloppyArrayMethod = __webpack_require__(102);

var nativeSort = [].sort;
var test = [1, 2, 3];

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var SLOPPY_METHOD = sloppyArrayMethod('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var $filter = __webpack_require__(84).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(109);

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 348 */,
/* 349 */,
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var $trim = __webpack_require__(127).trim;
var forcedStringTrimMethod = __webpack_require__(351);

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);
var whitespaces = __webpack_require__(128);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),
/* 352 */
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
  _exports.CallListener = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var CallListener =
  /*#__PURE__*/
  function (_Listener) {
    _inherits(CallListener, _Listener);

    function CallListener() {
      _classCallCheck(this, CallListener);

      return _possibleConstructorReturn(this, _getPrototypeOf(CallListener).apply(this, arguments));
    }

    _createClass(CallListener, [{
      key: "onNewCall",

      /**
       * 当发起新呼叫或者收到呼叫时被回调。
       *
       * @param {CubeCallDirection} direction - 指示呼叫时呼入还是呼出。
       * @param {Session} session - 当前引擎的会话。
       * @param {boolean} video - 是否启用了视频呼叫。
       */
      value: function onNewCall(direction, session, video) {}
      /**
       * 当呼叫正在处理时被回调。
      *
       * @param {Session} session 呼叫会话
       */

    }, {
      key: "onInProgress",
      value: function onInProgress(session) {}
      /**
       * 当对方振铃时被回调。
      *
       * @param {Session} session - 当前引擎的会话。
       */

    }, {
      key: "onCallRinging",
      value: function onCallRinging(session) {}
      /**
       * 当呼叫已经接通时被回调。
       *
       * @param {Session} session - 当前引擎的会话。
       */

    }, {
      key: "onCallConnected",
      value: function onCallConnected(session) {}
      /**
       * 当视频流画面接通时
       * @param session {CubeSession} 呼叫会话
       */

    }, {
      key: "onCallAddFrame",
      value: function onCallAddFrame(session) {}
      /**
       * 当视频流接通时
       * @param session {CubeSession} 呼叫会话
       */

    }, {
      key: "onCallAddStream",
      value: function onCallAddStream(sessoin) {}
    }, {
      key: "onCallHold",
      value: function onCallHold(session) {}
      /**
       * 当呼叫结束时被回调。
      *
       * @param {Session} session - 当前引擎的会话。
       * @param {String} action - 结束方式。
       * @param {Object} state -- 响应状态。
       */

    }, {
      key: "onCallEnded",
      value: function onCallEnded(session, action, state) {}
      /**
       * 当呼叫发生错误时被回调。
       *
       * @param {Session} session - 当前引擎的会话。
       * @param {StateCode} errorCode - 错误码。
       */

    }, {
      key: "onCallFailed",
      value: function onCallFailed(session, errorCode) {}
      /**
       * 呼叫反转
       * @param session
       */

    }, {
      key: "onReverseCall",
      value: function onReverseCall(session) {}
    }]);

    return CallListener;
  }(_Listener2.Listener);

  _exports.CallListener = CallListener;
});

/***/ }),
/* 353 */,
/* 354 */
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
  _exports.CallDirection = void 0;

  /*
   * CallDirection.js
   * Cube Engine
   * 
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 音视频通话的呼叫方向定义。
   *
   * @readonly
   * @enum {String} CallDirection
   * @author Xu Jiangwei, Guan Yong
   */
  var CallDirection = {
    /** 通话呼出。 */
    Outgoing: "outgoing",

    /** 通话呼入。 */
    Incoming: "incoming"
  };
  _exports.CallDirection = CallDirection;
});

/***/ }),
/* 355 */,
/* 356 */,
/* 357 */
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
  _exports.VideoSize = void 0;

  /*
   * VideoSize.js
   * Cube Engine
   * 
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * @typedef {Object} CubeSize
   * @property {Number} width - 宽度，单位：像素。
   * @property {Number} height - 高度，单位：像素。
   */

  /**
   * 视频大小枚举。
   *
   * @readonly
   * @enum {CubeSize} VideoSize
   * @author Xu Jiangwei
   */
  var VideoSize = {
    /** 视频分辨率为 128×96 (12,288) 的尺寸设置。*/
    SQCIF: {
      width: 128,
      height: 96
    },

    /** 视频分辨率为 160×120 (19,200) 的尺寸设置。*/
    QQVGA: {
      width: 160,
      height: 120
    },

    /** 视频分辨率为 320×240 (76,800) 的尺寸设置。*/
    QVGA: {
      width: 320,
      height: 240
    },

    /** 视频分辨率为 352×288 (101,376) 的尺寸设置。*/
    CIF: {
      width: 352,
      height: 288
    },

    /** 视频分辨率为 640×480 (307,200) 的尺寸设置。*/
    VGA: {
      width: 640,
      height: 480
    },

    /** 视频分辨率为 800×600 (480,000) 的尺寸设置。*/
    SVGA: {
      width: 800,
      height: 600
    },

    /** 视频分辨率为 960×720 (691,200) 的尺寸设置。*/
    HD: {
      width: 960,
      height: 720
    },

    /** 视频分辨率为 1024×768 (786,432) 的尺寸设置。*/
    XGA: {
      width: 1024,
      height: 768
    },

    /** 视频分辨率为 1280×1024 (1,310,720) 的尺寸设置。*/
    SXGA: {
      width: 1280,
      height: 1024
    },

    /** 视频分辨率为 1600×1200 (1,920,000) 的尺寸设置。*/
    UXGA: {
      width: 1600,
      height: 1200
    },

    /** 视频分辨率为 400×240 (96,000) 的尺寸设置。*/
    WQVGA: {
      width: 400,
      height: 240
    },

    /** 视频分辨率为 512×288 (147 456) 的尺寸设置。*/
    WCIF: {
      width: 512,
      height: 288
    },

    /** 视频分辨率为 800×480 (384,000) 的尺寸设置。*/
    WVGA: {
      width: 800,
      height: 480
    },

    /** 视频分辨率为 1024×600 (614,400) 的尺寸设置。*/
    WSVGA: {
      width: 1024,
      height: 600
    },

    /** 视频分辨率为 1280×720 (921,600) 的尺寸设置。*/
    WHD: {
      width: 1280,
      height: 720
    },

    /** 视频分辨率为 1280×768 (983,040) 的尺寸设置。*/
    WXGA: {
      width: 1280,
      height: 768
    },

    /** 视频分辨率为 1920×1200 (2,304,000) 的尺寸设置。*/
    WUXGA: {
      width: 1920,
      height: 1200
    },

    /** 视频分辨率为 768×432 (331,776, a.k.a WVGA 16:9) 的尺寸设置。*/
    W432P: {
      width: 768,
      height: 432
    },

    /** 视频分辨率为 768×480 (368,640, a.k.a WVGA 16:10) 的尺寸设置。*/
    W480P: {
      width: 768,
      height: 480
    }
  };
  _exports.VideoSize = VideoSize;
});

/***/ }),
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(362), __webpack_require__(371), __webpack_require__(372), __webpack_require__(373), __webpack_require__(376)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _SIPServiceWorker, _ConferenceListener, _ConferenceType, _ConferenceServiceWorker, _ConferenceConfig) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "ServiceWorker", {
    enumerable: true,
    get: function get() {
      return _SIPServiceWorker.SIPServiceWorker;
    }
  });
  _exports.Conference = void 0;

  /*
   * Boot.js
   * Cube Engine
   *
   * Copyright (c) 2015-2017 Cube Team. All rights reserved.
   */
  var Conference = {
    Listener: _ConferenceListener.ConferenceListener,
    Type: _ConferenceType.ConferenceType,
    ServiceWorker: _ConferenceServiceWorker.ConferenceServiceWorker,
    Config: _ConferenceConfig.ConferenceConfig
  };
  _exports.Conference = Conference;
  window.CubeSIPWorker = {
    ServiceWorker: _SIPServiceWorker.SIPServiceWorker,
    Conference: Conference
  };
});

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(106);

__webpack_require__(1);

__webpack_require__(107);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(64);

__webpack_require__(139);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(227);

__webpack_require__(69);

__webpack_require__(87);

__webpack_require__(89);

__webpack_require__(196);

__webpack_require__(200);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(363), __webpack_require__(364), __webpack_require__(365), __webpack_require__(268), __webpack_require__(237), __webpack_require__(238), __webpack_require__(357), __webpack_require__(208), __webpack_require__(354)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _SipCallListener, _SipRegistrationListener, JsSIP, _Peer, _CubeError, _StateCode, _VideoSize, _SignalingState, _CallDirection) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SIPServiceWorker = void 0;
  JsSIP = _interopRequireWildcard(JsSIP);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var Logger = window.CellCloud.Logger;
  /**
   * SIP服务实现。
   */

  var SIPServiceWorker =
  /*#__PURE__*/
  function () {
    /**
     * 构造器
     */
    function SIPServiceWorker() {
      _classCallCheck(this, SIPServiceWorker);

      this.engine = null;
      this.domain = null;
      this.host = null;
      this.wsPort = 5066;
      this.wssPort = 7443;
      this.localVideo = null;
      this.remoteVideo = null;
      this.bellAudio = null;
      this.localStream = null;
      this.remoteStream = null;
      this.regListener = null;
      this.callListener = null;
      this.direction = null;
      this.videoEnabled = true;
      this.sip = null;
      this.rtcSession = null;
      this.maxVideoSize = null;
      this.maxFrameRate = 15;
      this.minFrameRate = 5; // local video ready callback

      this.localVideoReady = null; // remote video ready callback

      this.remoteVideoReady = null; // close callback

      this.videoCloseHandler = null; // RTP stream ready callback
      // this.streamReady = null;

      this._checkTerminateTimer = 0;
      this.reconnection = 0;
      this.mediaConstraints = null;
      this.isAddstream = false;
    }
    /**
     * 设置SIP连接地址
     */


    _createClass(SIPServiceWorker, [{
      key: "setAddress",
      value: function setAddress(domain, host, wsPort, wssPort) {
        this.domain = domain;
        this.host = host;
        this.wsPort = undefined !== wsPort ? wsPort : 5066;
        this.wssPort = undefined !== wssPort ? wssPort : 7443;
      }
      /**
       * 启动SIP服务
       * @param engine {CubeEngine} 引擎核心对象
       * @param localVideo {HTMLDocument} 显示本地视频的元素
       * @param remoteVideo {HTMLDocument} 显示对方视频的元素
       * @param bellAudio {HTMLDocument} 播放音频的元素
       */

    }, {
      key: "start",
      value: function start(engine, localVideo, remoteVideo, bellAudio) {
        this.engine = engine;
        this.utils = engine.getUtils();
        this.localVideo = localVideo;
        this.remoteVideo = remoteVideo;
        this.bellAudio = bellAudio;
        var self = this;
        self.localVideo.addEventListener('loadeddata', function (e) {
          if (null != self.localVideoReady) {
            self.localVideoReady.call(null, self.localVideo, self);
          }
        }, false);
        self.remoteVideo.addEventListener('loadeddata', function (e) {
          if (null != self.remoteVideoReady) {
            self.remoteVideoReady.call(null, self.remoteVideo, self);
          }
        }, false);

        if (this.utils.isIE || this.utils.isSafari) {
          navigator.getUserMedia = window.getUserMedia;
          var opt = {};
          opt.plugin = {
            isRequired: function isRequired() {
              return undefined !== window.getUserMedia;
            },
            isInstalled: function isInstalled() {
              return undefined !== window.getUserMedia;
            }
          };
          opt.plugin["interface"] = window;
          JsSIP.rtcninja(opt);
        }
      }
      /**
       * 停止SIP服务
       */

    }, {
      key: "stop",
      value: function stop() {
        this.unregister();
      }
      /**
       * 注册 SIP 帐号。
       */

    }, {
      key: "registerWith",
      value: function registerWith(name, password, displayName, regListener) {
        Logger.d("SIPServiceWorker", "registerWith");

        if (null != this.sip) {
          if (this.sip.isRegistered()) {
            return true;
          }
        }

        Logger.d("registerWith", "sip:" + name + "," + password);
        var self = this;
        var server = null;

        if (window.wx || window.location.protocol.toLowerCase().indexOf("https") >= 0) {
          server = "wss://" + self.domain + ":" + self.wssPort;
        } else {
          server = "ws://" + self.domain + ":" + self.wsPort;
        } //       let wsSocket = new JsSIP.WebSocketInterface(server);


        var configuration = {
          "ws_servers": server,
          "uri": "sip:" + name + "@" + self.domain,
          "password": password,
          "display_name": displayName,
          "register_expires": 610,
          "register": true //  "sockets": wsSocket

        };
        this.sip = new JsSIP.UA(configuration);
        if (null == this.regListener) this.regListener = new _SipRegistrationListener.SipRegistrationListener(this.engine);
        if (null == this.callListener) this.callListener = new _SipCallListener.SipCallListener(this.engine);
        this.sip.on('connected', function (e) {
          self.regListener.onRegistrationProgress(self.engine.session);

          if (undefined !== regListener) {
            regListener.onRegistrationProgress(self.engine.session);
          }
        });
        this.sip.on('disconnected', function (e) {// self.unregister();
        });
        this.sip.on('registered', function (e) {
          self.regListener.onRegistrationOk(self.engine.session);

          if (undefined !== regListener) {
            regListener.onRegistrationOk(self.engine.session);
          }
        });
        this.sip.on('unregistered', function (e) {
          // self.unregister();
          self.regListener.onRegistrationCleared(self.engine.session);

          if (undefined !== regListener) {
            regListener.onRegistrationCleared(self.engine.session);
          }
        });
        this.sip.on('registrationFailed', function (e) {
          self.regListener.onRegistrationFailed(self.engine.session);

          if (undefined !== regListener) {
            regListener.onRegistrationFailed(self.engine.session);
          }
        }); // New incoming or outgoing call event

        this.sip.on('newRTCSession', function (e) {
          self.onNewSession(e);
        }); // Start sip

        this.sip.start();
      }
      /**
       * 注销SIP
       */

    }, {
      key: "unregister",
      value: function unregister() {
        if (null != this.sip) {
          this.sip.unregister({
            all: true
          });
          this.sip.stop();
          this.sip = null;
        }

        this.clear();
        return true;
      }
      /**
       * 发起呼叫
       * @param callee {String} 收到呼叫的一方Cube号
       * @param videoEnabled {Boolean, String} 是否启用视频, 也可以是媒体流ID
       * @param isDesktop {Boolean} 是否是远程桌面
       * @return {Boolean} 返回呼叫是否成功
       */

    }, {
      key: "invite",
      value: function invite(callee, videoEnabled) {
        var _this = this;

        var isDesktop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        Logger.d("SIPServiceWorker", "invite");

        if (null == this.sip || this.engine.session.callState !== _SignalingState.SignalingState.None && this.engine.session.callState !== _SignalingState.SignalingState.End && this.engine.session.callState !== _SignalingState.SignalingState.Progress) {
          return false;
        }

        Logger.d("SIPServiceWorker", "invite.Outgoing");
        this.direction = _CallDirection.CallDirection.Outgoing;
        this.videoEnabled = videoEnabled !== false;
        var mediaConstraints = {
          audio: true,
          video: false
        },
            offerToReceiveVideo = videoEnabled || isDesktop ? 1 : 0;
        this.mediaConstraints = mediaConstraints;

        var task = function task() {
          var options = {
            mediaConstraints: mediaConstraints,
            pcConfig: {
              iceServers: _CUBE_STUN_SERVERS,
              gatheringTimeout: 2000,
              rtcpMuxPolicy: "negotiate"
            },
            rtcConstraints: {
              optional: [{
                DtlsSrtpKeyAgreement: true
              }]
            },
            rtcOfferConstraints: {
              offerToReceiveAudio: 1,
              offerToReceiveVideo: offerToReceiveVideo
            }
          };
          Logger.d("SIPServiceWorker", "invite options:" + options.toString()); // 发起呼叫

          _this.sip.call("sip:" + callee + "@" + _this.host, options);
        };

        if (this.videoEnabled) {
          var mW = _VideoSize.VideoSize.VGA.width;
          var mH = _VideoSize.VideoSize.VGA.height;

          if (this.utils.isFirefox) {
            // if (parseInt(webrtcDetectedVersion) < 43) {
            //     mediaConstraints.video = {
            //         width: {min: 160, max: mW},
            //         height: {min: 120, max: mH},
            //         frameRate: {min: this.minFrameRate, max: this.maxFrameRate},
            //         require: ["width", "height", "frameRate"]
            //     }
            // } else {
            mediaConstraints.video = {
              width: mW,
              height: mH,
              frameRate: this.minFrameRate
            }; // }
          }

          if (isDesktop) {
            if (this.utils.isFirefox) {
              mediaConstraints.video = {
                "mandatory": {
                  mozMediaSource: 'window',
                  mediaSource: 'window',
                  maxWidth: 1280,
                  maxHeight: 720,
                  maxFrameRate: 15
                }
              };
            } else {
              mediaConstraints.video = {
                "mandatory": {
                  chromeMediaSource: 'desktop',
                  maxWidth: 1920,
                  maxHeight: 1080,
                  maxFrameRate: 15
                }
              };
              if (typeof videoEnabled === 'string') mediaConstraints.video.mandatory.chromeMediaSourceId = videoEnabled;
            }

            mediaConstraints.audio = false; // 如果自己为远程桌面的发起者则不接收数据

            offerToReceiveVideo = 0;
            task();
          } else {
            mediaConstraints.video = {
              "mandatory": {
                "maxWidth": mW,
                "maxHeight": mH,
                "minWidth": _VideoSize.VideoSize.VGA.width,
                "minHeight": _VideoSize.VideoSize.VGA.height,
                "maxFrameRate": this.maxFrameRate,
                "minFrameRate": this.minFrameRate
              }
            };
            task();
          }
        } else {
          task();
        }

        return true;
      }
      /**
       * 应答
       */

    }, {
      key: "answer",
      value: function answer() {
        if (null == this.rtcSession) {
          return false;
        }

        var videoEnabled = this.videoEnabled;
        var options = {
          mediaConstraints: {
            audio: true,
            video: this.videoEnabled
          },
          pcConfig: {
            iceServers: _CUBE_STUN_SERVERS,
            gatheringTimeout: 2000,
            rtcpMuxPolicy: "negotiate"
          },
          rtcConstraints: {
            optional: [{
              DtlsSrtpKeyAgreement: true
            }]
          },
          rtcOfferConstraints: {
            offerToReceiveAudio: 1,
            offerToReceiveVideo: videoEnabled ? 1 : 0
          }
        };
        this.rtcSession.answer(options);
        return true;
      }
      /**
       * 挂断
       */

    }, {
      key: "hangup",
      value: function hangup() {
        if (null == this.rtcSession) {
          return false;
        }

        try {
          this.rtcSession.terminate();
        } catch (e) {}

        return true;
      }
    }, {
      key: "consult",
      value: function consult() {} // Nothing

      /**
       * 清除
       */

    }, {
      key: "clear",
      value: function clear() {
        if (null != this.videoCloseHandler) {
          this.videoCloseHandler.call(null, this);
        }

        try {
          if (this.utils.isIE || this.utils.isSafari) {
            this.localVideo = document.getElementById(this.localVideo.id);
            window.attachMediaStream(this.localVideo, null);
          } else {
            this.localVideo.src = "";
          }
        } catch (e) {
          Logger.w("SIPWorker#clear", e.message);
        }

        try {
          if (this.utils.isIE || this.utils.isSafari) {
            this.remoteVideo = document.getElementById(this.remoteVideo.id);
            window.attachMediaStream(this.remoteVideo, null);
          } else {
            this.remoteVideo.src = "";
          }
        } catch (e) {
          Logger.w("SIPWorker#clear", e.message);
        }

        if (null != this.localStream) {
          if (undefined != this.localStream.stop) {
            this.localStream.stop();
          }

          this.localStream = null;
        } // 屏幕共享音频流


        if (null != this.localAudioStream) {
          if (undefined != this.localAudioStream.stop) {
            this.localAudioStream.stop();
          }

          this.localAudioStream = null;
        }

        if (null != this.remoteStream) {
          try {
            this.remoteStream.getAudioTracks()[0].stop();

            if (this.remoteStream.getVideoTracks()[0]) {
              this.remoteStream.getVideoTracks()[0].stop();
            }
          } catch (e) {
            Logger.w("SIPWorker#clear", e.message);
          }

          this.remoteStream = null;
        }

        this.rtcSession = null;
        this.isAddstream = false; // 更改状态

        if (this.engine.session.callPeer && this.engine.session.callPeer.type == 'conference') {
          this.engine.session.callState = _SignalingState.SignalingState.End;
        } // this.streamReady = null;

      }
    }, {
      key: "attachMediaStream",
      value: function attachMediaStream(video, stream) {
        if ((this.utils.isIE || this.utils.isSafari) && window.attachMediaStream) {
          window.attachMediaStream(video, stream);
          return;
        }

        video.onloadedmetadata = function (e) {
          video.play();
        };

        if (window.URL) {
          // Chrome case: URL.createObjectURL() converts a MediaStream to a blob URL
          video.src = window.URL.createObjectURL(stream);
        } else {
          // Firefox and Opera: the src of the video can be set directly from the stream
          video.src = stream;
        }
      } //会议通话监听

    }, {
      key: "conferenceCallListener",
      value: function conferenceCallListener(isSuccess) {
        var conferenceService = this.engine.getConferenceService();

        if (conferenceService) {
          if (isSuccess) {// conferenceService.delegate.onConferenceCallConnected(conferenceService.curConference)
          } else {
            // call失败,服务器回滚当前会议。
            conferenceService.delegate.onConferenceCallDisConnected(conferenceService.curConference);

            if (this.engine.getConferenceService().curConference) {
              conferenceService.quit(conferenceService.curConference.conferenceId);
            }
          }
        }
      } // sip重连

    }, {
      key: "sipReconnection",
      value: function sipReconnection() {
        var _this2 = this;

        Logger.d("SIPWorker", "sip reconnection");
        var confService = this.engine.getConferenceService();
        var curConference = confService.curConference;
        this.hangup();
        this.unregister();
        this.reconnection++;
        confService.confStatus = 0;
        confService.flagTerminated = false;

        if (this.reconnection < 5) {
          setTimeout(function () {
            if (confService.curConference && confService.curConference.member[_this2.engine.accName]) {
              confService.join(curConference.conferenceId, curConference.member[_this2.engine.accName].videoEnabled, true);
            } else {
              _this2.reconnection = 0;
            }
          }, this.reconnection * 2000);
        } else {
          this.reconnection = 0;

          if (curConference && curConference.member[this.engine.accName]) {
            confService.delegate.onConferenceFailed(new _CubeError.CubeError(_StateCode.StateCode.ConferenceTimeout, 'ConferenceTimeout!'), curConference.conferenceId);
          }
        }
      }
    }, {
      key: "addStream",
      value: function addStream(videoEnable, isDesktop, cb) {
        var _this3 = this;

        var mediaConstraints = {
          audio: true,
          video: videoEnable
        };

        if (isDesktop && videoEnable) {
          mediaConstraints.audio = false; // 如果自己为远程桌面的发起者则不接收数据

          mediaConstraints.video = {
            "mandatory": {
              chromeMediaSource: 'desktop',
              maxWidth: 1920,
              maxHeight: 1080,
              maxFrameRate: 15
            }
          };
          if (typeof videoEnable === 'string') mediaConstraints.video.mandatory.chromeMediaSourceId = videoEnable;
        }

        var getMedia = function getMedia() {
          navigator.getUserMedia(mediaConstraints, function (stream) {
            _this3.localStream = stream;

            _this3.rtcSession.connection.addStream(stream);

            _this3.attachMediaStream(_this3.localVideo, stream);

            if (cb) cb.call(stream);
          }, function () {
            var confService = _this3.engine.getConferenceService();

            confService.delegate.onConferenceFailed(new _CubeError.CubeError(_StateCode.StateCode.MicphoneOpenFailed, 'Missing device!'));
          });
        };

        if (videoEnable) {
          if (isDesktop) {
            // 屏幕共享单独添加音频流
            navigator.getUserMedia({
              video: false,
              audio: true
            }, function (stream) {
              _this3.rtcSession.connection.addStream(stream);

              _this3.localAudioStream = stream;
              getMedia();
            });
          }
        } else {
          getMedia();
        }
      }
    }, {
      key: "removeStream",
      value: function removeStream() {
        if (null != this.rtcSession && null != this.localStream) {
          this.rtcSession.connection.removeStream(this.localStream);
        }

        if (null != this.rtcSession && null != this.localAudioStream) {
          this.rtcSession.connection.removeStream(this.localAudioStream);
        }

        try {
          if (this.utils.isIE || this.utils.isSafari) {
            this.localVideo = document.getElementById(this.localVideo.id);
            window.attachMediaStream(this.localVideo, null);
            console.log("SIPWorker#removeStream", this.localVideo);
          } else {
            this.localVideo.src = "";
          }
        } catch (e) {
          Logger.w("SIPWorker#clear", e.message);
        }

        if (null != this.localStream) {
          if (undefined != this.localStream.stop) {
            this.localStream.stop();
          }

          this.localStream = null;
        }

        if (null != this.localStream) {
          if (undefined != this.localStream.stop) {
            this.localStream.stop();
          }

          this.localAudioStream = null;
        }
      }
    }, {
      key: "renegotiate",
      value: function renegotiate(videoEnable, cb) {
        var _this4 = this;

        if (null == this.rtcSession) {
          return false;
        }

        if (this.rtcSession.isReadyToReOffer()) {
          this.rtcSession.renegotiate({
            useUpdate: false,
            pcConfig: {
              iceServers: _CUBE_STUN_SERVERS
            },
            rtcConstraints: {
              optional: [{
                DtlsSrtpKeyAgreement: true
              }]
            },
            rtcOfferConstraints: {
              offerToReceiveAudio: 1,
              offerToReceiveVideo: videoEnable
            }
          }, function () {
            Logger.d('CubeConferenceService', "renegotiate success");
            if (null != cb) cb.call(true);
          });
        } else {
          setTimeout(function () {
            _this4.renegotiate(videoEnable, cb);
          }, 200);
        }
      }
    }, {
      key: "_checkTerminate",
      value: function _checkTerminate() {
        if (null != this.engine.getConferenceService()) {
          // 如果已经被标记为终止，则加入终止操作
          Logger.d('如果已经被标记为终止，则加入终止操作', this.engine.getConferenceService().flagTerminated);

          if (this.engine.getConferenceService().flagTerminated) {
            if (this._checkTerminateTimer > 0) {
              return;
            }

            var self = this;
            this._checkTerminateTimer = setTimeout(function () {
              clearTimeout(self._checkTerminateTimer);
              self._checkTerminateTimer = 0;
              self.hangup();
            }, 500);
          }
        }
      }
    }, {
      key: "onNewSession",
      value: function onNewSession(e) {
        // 检测是否被终止
        this._checkTerminate();

        var request = e.request;
        var call = e.session;
        var uri = call.remote_identity.uri.toString();
        var conferenceService = this.engine.getConferenceService();
        this.rtcSession = call;

        if (null == this.engine.session.callPeer) {
          var peer = new _Peer.Peer(call.remote_identity.uri.user, 'conference');
          this.engine.session.setCallPeer(peer);
        }

        this.engine.session.callPeer.name = call.remote_identity.uri.user;
        this.engine.session.callPeer.displayName = call.remote_identity.display_name || call.remote_identity.uri.user;

        if (call.direction === "incoming") {
          this.direction = _CallDirection.CallDirection.Incoming;
        } else {
          this.direction = _CallDirection.CallDirection.Outgoing;
        }

        var self = this;
        call.on('connecting', function (e) {
          self._checkTerminate();

          var sL = call.connection.getLocalStreams().length;

          if (sL > 0) {
            if (sL == 1) {
              self.localStream = call.connection.getLocalStreams()[0];
            } else if (sL == 2) {
              // 远程桌面 音视频流分开
              self.localAudioStream = call.connection.getLocalStreams()[0];
              self.localStream = call.connection.getLocalStreams()[1];
            }

            self.attachMediaStream(self.localVideo, self.localStream);
            self.localVideo.volume = 0;
          }

          if (self.direction == _CallDirection.CallDirection.Outgoing) {
            self.callListener.onNewCall(self.direction, self.engine.session, self.videoEnabled);
          }
        }); // Progress

        call.on('progress', function (e) {
          if (e.originator === 'remote') {// 被叫
          }
        }); // Confirmed

        call.on('confirmed', function (e) {
          Logger.d("SIPServiceWorker", "confirmed");

          self._checkTerminate();

          self.conferenceCallListener(true);

          if (e.originator === 'local') {
            // 通话建立
            var _conferenceService = self.engine.getConferenceService();

            _conferenceService.onInCall(function () {
              self.callListener.onCallConnected(self.engine.session);
            });
          } else {
            // 通话建立
            self.callListener.onCallConnected(self.engine.session);
          }
        }); // Started

        call.on('accepted', function (e) {
          self._checkTerminate();

          Logger.d("SIPServiceWorker", "accepted"); // Attach the streams to the views if it exists.

          if (call.connection.getLocalStreams().length > 0 && null == self.localStream) {
            self.localStream = call.connection.getLocalStreams()[0]; //JsSIP.rtcninja.attachMediaStream(self.localVideo, self.localStream);

            self.attachMediaStream(self.localVideo, self.localStream);

            if ((self.utils.isIE || self.utils.isSafari) && self.localVideo.tagName.toLowerCase() == "video") {
              self.localVideo = document.getElementById(self.localVideo.id);
            }

            self.localVideo.volume = 0;
          }

          if (e.originator === 'remote') {
            if (e.response.getHeader('X-Can-Renegotiate') === 'false') {
              call.data.remoteCanRenegotiateRTC = false;
            } else {
              call.data.remoteCanRenegotiateRTC = true;
            } // answered

          }

          if (self.direction == _CallDirection.CallDirection.Outgoing) {
            self.callListener.onCallRinging(self.engine.session);
          }
        });
        call.on('addstream', function (e) {
          //Logger.d('', 'Tryit: addstream()');
          self.remoteStream = e.stream;
          self.reconnection = 0; //JsSIP.rtcninja.attachMediaStream(self.remoteVideo, self.remoteStream);

          self.attachMediaStream(self.remoteVideo, self.remoteStream);
          self.isAddstream = true;
          Logger.d("SIPServiceWorker", "addstream");

          if ((self.utils.isIE || self.utils.isSafari) && self.remoteVideo.tagName.toLowerCase() == "video") {
            self.remoteVideo = document.getElementById(self.remoteVideo.id);
          }

          self.callListener.onCallAddStream(self.engine.session);
          var addTimer = setTimeout(function () {
            conferenceService.stopWatchRTCStats();
            self.callListener.onCallAddFrame(self.engine.session);
          }, 8000);
          var lastPacket = 0;
          conferenceService.startWatchRTCStats(function (decodedFPS, decodedFPSAvg, stats) {
            if (stats.packetsReceived - lastPacket > 40) {
              clearTimeout(addTimer);
              conferenceService.stopWatchRTCStats();
              self.callListener.onCallAddFrame(self.engine.session);
            }

            lastPacket = stats.packetsReceived;
          });
          self.remoteVideo.volume = 1; // if (null != self.streamReady) {
          //     self.streamReady.call(null, self);
          // }
        }); // Failed

        call.on('failed', function (e) {
          var cause = e.cause,
              response = e.response;

          if (e.originator === 'remote' && cause.match("SIP;cause=200", "i")) {
            cause = 'answered_elsewhere';
          }

          Logger.d("SIPWorker", "Failed: " + cause);

          if (cause == JsSIP.C.causes.BYE || cause == JsSIP.C.causes.CANCELED) {
            // sip 重连
            self.sipReconnection();
            return;
          } else if (cause == JsSIP.C.causes.CONNECTION_ERROR) {
            self.callListener.onCallFailed(self.engine.session, _StateCode.StateCode.ConnectionFailed);
          } else if (cause == JsSIP.C.causes.REQUEST_TIMEOUT) {
            self.callListener.onCallFailed(self.engine.session, _StateCode.StateCode.RequestTimeout);
          } else if (cause == JsSIP.C.causes.INTERNAL_ERROR) {
            self.callListener.onCallFailed(self.engine.session, _StateCode.StateCode.WorkerStateException);
          } else {
            self.callListener.onCallFailed(self.engine.session, _StateCode.StateCode.Unknown);
          }

          self.clear();
          self.conferenceCallListener(false);
        }); // NewDTMF

        call.on('newDTMF', function (e) {
          if (e.originator === 'remote') {
            /*sound_file = e.dtmf.tone;
             soundPlayer.setAttribute("src", "sounds/dialpad/" + sound_file + ".ogg");
             soundPlayer.play();*/
          }
        });
        /*call.on('hold',function(e) {
         soundPlayer.setAttribute("src", "sounds/dialpad/pound.ogg");
         soundPlayer.play();
           GUI.setCallSessionStatus(session, 'hold', e.originator);
         });*/

        /*call.on('unhold',function(e) {
         soundPlayer.setAttribute("src", "sounds/dialpad/pound.ogg");
         soundPlayer.play();
           GUI.setCallSessionStatus(session, 'unhold', e.originator);
         });*/
        // Ended

        call.on('ended', function (e) {
          var cause = e.cause;

          if (e.originator === 'remote' && e.message.method == 'BYE') {
            try {
              this.rtcSession.terminate();
            } catch (e) {
              conferenceService.delegate.onConferenceFailed(new _CubeError.CubeError(_StateCode.StateCode.ConferenceDisconnection), 'Conference Disconnection');
              console.log(e);
            }

            if (conferenceService.curConference) {
              conferenceService.quit(conferenceService.curConference.conferenceId);
            }
          }

          self.clear();
          self.callListener.onCallEnded(self.engine.session);
        }); // received UPDATE

        /*call.on('update', function(e) {
         var request = e.request;
           if (! request.body) { return; }
           if (! localCanRenegotiateRTC() || ! call.data.remoteCanRenegotiateRTC) {
         console.warn('Tryit: UPDATE received, resetting PeerConnection');
         call.connection.reset();
         call.connection.addStream(localStream);
         }
         });*/
        // received reINVITE

        /*call.on('reinvite', function(e) {
         var request = e.request;
           if (! request.body) { return; }
           if (! localCanRenegotiateRTC() || ! call.data.remoteCanRenegotiateRTC) {
         console.warn('Tryit: reINVITE received, resetting PeerConnection');
         call.connection.reset();
         call.connection.addStream(localStream);
         }
         });*/

        if (self.direction == _CallDirection.CallDirection.Incoming) {
          self.callListener.onNewCall(self.direction, self.engine.session, self.videoEnabled);
        }
      }
    }]);

    return SIPServiceWorker;
  }();

  _exports.SIPServiceWorker = SIPServiceWorker;
});

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(120);

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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(208), __webpack_require__(352), __webpack_require__(237)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _SignalingState, _CallListener, _CubeError) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SipCallListener = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var Logger = window.CellCloud.Logger;

  var SipCallListener =
  /*#__PURE__*/
  function (_CubeCallListener) {
    _inherits(SipCallListener, _CubeCallListener);

    /**
     * 构造器
     * @param engine {CubeEngine} 引擎核心对象
     */
    function SipCallListener(engine) {
      var _this;

      _classCallCheck(this, SipCallListener);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SipCallListener).call(this));
      _this.engine = engine;
      return _this;
    }
    /**
     * 当发起新呼叫或者收到呼叫时被回调
     * @param direction {CubeCallDirection} 指示呼叫时呼入还是呼出
     * @param session {CubeSession} 呼叫会话
     * @param video {Boolean} 是否启用了视频呼叫
     */


    _createClass(SipCallListener, [{
      key: "onNewCall",
      value: function onNewCall(direction, session, video) {
        Logger.d('CallListener', 'onNewCall'); // 更新呼叫方向

        session.callDirection = direction;
        session.callState = _SignalingState.SignalingState.Invite;
        this.engine.sipService.localVideo.style.visibility = 'visible';
      }
      /**
       * 当呼叫正在处理时被回调
       * @param session {CubeSession} 呼叫会话
       */

    }, {
      key: "onInProgress",
      value: function onInProgress(session) {
        Logger.d('CallListener', 'onInProgress');
        session.callState = _SignalingState.SignalingState.Progress;
      }
      /**
       * 当对方振铃时被回调
       * @param session {CubeSession} 呼叫会话
       */

    }, {
      key: "onCallRinging",
      value: function onCallRinging(session) {
        Logger.d('CallListener', 'onCallRinging');
        session.callState = _SignalingState.SignalingState.Ringing;
      }
      /**
       * 当呼叫已经接通时被回调
       * @param session {CubeSession} 呼叫会话
       */

    }, {
      key: "onCallConnected",
      value: function onCallConnected(session) {
        Logger.d('CallListener', 'onCallConnected');
        session.callState = _SignalingState.SignalingState.Incall;
        var confService = this.engine.getConferenceService();

        if (null !== confService) {
          confService.delegate.onConferenceConnected(confService.getConference());
        }

        this.engine.sipService.remoteVideo.style.visibility = 'visible';

        if (null !== confService && session.callPeer.name.length <= 4) {
          // 截图
          var ms = this.engine.getMediaService();
          var self = this;
          setTimeout(function () {
            if (!self.engine.sipService.videoEnabled) {
              // 未使用视频
              return;
            } //  ms._startAutoCapture(session.name);

          }, 2000);
        }
      }
      /**
       * 当呼叫结束时被回调
       * @param session {CubeSession} 呼叫会话
       * @param action {String} 结束方式
       */

    }, {
      key: "onCallEnded",
      value: function onCallEnded(session) {
        Logger.d('CallListener', 'onCallEnded');
        session.callState = _SignalingState.SignalingState.End;
        this.engine.sipService.localVideo.style.visibility = 'hidden';
        this.engine.sipService.remoteVideo.style.visibility = 'hidden';
        var confService = this.engine.getConferenceService();

        if (null !== confService) {
          confService.delegate.onConferenceSipEnd(confService.curConference);
          confService.curConference = null;
          confService.flagTerminated = false;
          confService.confStatus = 0;
        }

        var ms = this.engine.getMediaService();

        ms._stopAutoCapture();
      }
      /**
       * 当视频流画面接通时
       * @param session {CubeSession} 呼叫会话
       */

    }, {
      key: "onCallAddFrame",
      value: function onCallAddFrame(session) {
        Logger.d('CallListener', 'onCallAddFrame');
        var confService = this.engine.getConferenceService();

        if (null !== confService) {
          confService.delegate.onConferenceAddFrame(confService.getConference());
        }

        this.engine.sipService.remoteVideo.style.visibility = 'visible';
      }
      /**
       * 当视频流接通时
       * @param session {CubeSession} 呼叫会话
       */

    }, {
      key: "onCallAddStream",
      value: function onCallAddStream(session) {
        Logger.d('CallListener', 'onCallAddStream');
        var confService = this.engine.getConferenceService();

        if (null !== confService) {
          confService.delegate.onConferenceAddStream(confService.getConference());
        }

        this.engine.sipService.remoteVideo.style.visibility = 'visible';
      }
      /**
       * 当呼叫过程发送错误时被回调
       * @param session {CubeSession} 呼叫会话
       * @param errorCode {CubeStateCode} 错误信息对象
       */

    }, {
      key: "onCallFailed",
      value: function onCallFailed(session, errorCode) {
        Logger.d('CallListener', 'onCallFailed');
        this.engine.sipService.localVideo.style.visibility = 'hidden';
        this.engine.sipService.remoteVideo.style.visibility = 'hidden';
        var confService = this.engine.getConferenceService();

        if (null !== confService) {
          var conference = confService.getConference();

          if (null !== conference) {
            confService.quit(conference.conferenceId);
          }

          confService.confStatus = 0;
          confService.curConference = null;
          confService.flagTerminated = false;
          confService.delegate.onConferenceFailed(new _CubeError.CubeError(errorCode, 'Call Conference Error'), conference);
        }

        session.callState = _SignalingState.SignalingState.None;
        var ms = this.engine.getMediaService();

        ms._stopAutoCapture();
      }
    }]);

    return SipCallListener;
  }(_CallListener.CallListener);

  _exports.SipCallListener = SipCallListener;
});

/***/ }),
/* 364 */
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
  _exports.SipRegistrationListener = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /*
   * SipRegistrationListener.js
   * Cube Engine
   * 
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * SIP注册监听器的实现。
   */
  var Logger = window.CellCloud.Logger;

  var SipRegistrationListener =
  /*#__PURE__*/
  function () {
    /**
     * 构造器
     * @param engine {CubeEngine} 引擎核心对象
     */
    function SipRegistrationListener(engine) {
      _classCallCheck(this, SipRegistrationListener);

      this.engine = engine;
    }
    /**
     * 当注册流程正在处理时此方法被回调
     * @param session {CubeSession} 会话对象
     */


    _createClass(SipRegistrationListener, [{
      key: "onRegistrationProgress",
      value: function onRegistrationProgress(session) {
        Logger.d('SipRegistrationListener', 'onRegistrationProgress');
      }
      /**
       * 当注册成功时此方法被回调
       * @param session {CubeSession} 会话对象
       */

    }, {
      key: "onRegistrationOk",
      value: function onRegistrationOk(session) {
        Logger.d('SipRegistrationListener', 'onRegistrationOk');
      }
      /**
       * 当注册状态被清除时此方法被回调
       * @param session {CubeSession} 会话对象
       */

    }, {
      key: "onRegistrationCleared",
      value: function onRegistrationCleared(session) {
        Logger.d('SipRegistrationListener', 'onRegistrationCleared');
      }
      /**
       * 当注册流程发生错误时此方法被回调
       * @param session {CubeSession} 会话对象
       */

    }, {
      key: "onRegistrationFailed",
      value: function onRegistrationFailed(session) {
        Logger.d('SipRegistrationListener', 'onRegistrationFailed');
      }
    }]);

    return SipRegistrationListener;
  }();

  _exports.SipRegistrationListener = SipRegistrationListener;
});

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;__webpack_require__(93);__webpack_require__(97);__webpack_require__(98);__webpack_require__(199);__webpack_require__(366);__webpack_require__(347);__webpack_require__(100);__webpack_require__(106);__webpack_require__(257);__webpack_require__(1);__webpack_require__(107);__webpack_require__(211);__webpack_require__(367);__webpack_require__(258);__webpack_require__(212);__webpack_require__(300);__webpack_require__(108);__webpack_require__(110);__webpack_require__(117);__webpack_require__(118);__webpack_require__(120);__webpack_require__(126);__webpack_require__(129);__webpack_require__(263);__webpack_require__(62);__webpack_require__(63);__webpack_require__(232);__webpack_require__(264);__webpack_require__(64);__webpack_require__(242);__webpack_require__(132);__webpack_require__(136);__webpack_require__(139);__webpack_require__(141);__webpack_require__(67);__webpack_require__(227);__webpack_require__(142);__webpack_require__(146);__webpack_require__(350);__webpack_require__(368);__webpack_require__(147);__webpack_require__(152);__webpack_require__(154);__webpack_require__(155);__webpack_require__(156);__webpack_require__(157);__webpack_require__(158);__webpack_require__(159);__webpack_require__(161);__webpack_require__(162);__webpack_require__(163);__webpack_require__(164);__webpack_require__(165);__webpack_require__(167);__webpack_require__(168);__webpack_require__(170);__webpack_require__(171);__webpack_require__(172);__webpack_require__(173);__webpack_require__(174);__webpack_require__(175);__webpack_require__(176);__webpack_require__(177);__webpack_require__(178);__webpack_require__(195);__webpack_require__(89);__webpack_require__(196);__webpack_require__(200);(function(global,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else { var mod; }})(this,function(){"use strict";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/*
 * JsSIP v2.0.6
 * the Javascript SIP library
 * Copyright: 2012-2016 JosĂŠ Luis MillĂĄn <jmillan@aliax.net> (https://github.com/jmillan)
 * Homepage: http://jssip.net
 * License: MIT
 */(function(f){if(( false?undefined:_typeof(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else{ var g; }})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(require,module,exports){var pkg=require('../package.json');var C={USER_AGENT:pkg.title+' '+pkg.version,// SIP scheme
SIP:'sip',SIPS:'sips',// End and Failure causes
causes:{// Generic error causes
CONNECTION_ERROR:'Connection Error',REQUEST_TIMEOUT:'Request Timeout',SIP_FAILURE_CODE:'SIP Failure Code',INTERNAL_ERROR:'Internal Error',// SIP error causes
BUSY:'Busy',REJECTED:'Rejected',REDIRECTED:'Redirected',UNAVAILABLE:'Unavailable',NOT_FOUND:'Not Found',ADDRESS_INCOMPLETE:'Address Incomplete',INCOMPATIBLE_SDP:'Incompatible SDP',MISSING_SDP:'Missing SDP',AUTHENTICATION_ERROR:'Authentication Error',// Session error causes
BYE:'Terminated',WEBRTC_ERROR:'WebRTC Error',CANCELED:'Canceled',NO_ANSWER:'No Answer',EXPIRES:'Expires',NO_ACK:'No ACK',DIALOG_ERROR:'Dialog Error',USER_DENIED_MEDIA_ACCESS:'User Denied Media Access',BAD_MEDIA_DESCRIPTION:'Bad Media Description',RTP_TIMEOUT:'RTP Timeout'},SIP_ERROR_CAUSES:{REDIRECTED:[300,301,302,305,380],BUSY:[486,600],REJECTED:[403,603],NOT_FOUND:[404,604],UNAVAILABLE:[480,410,408,430],ADDRESS_INCOMPLETE:[484,424],INCOMPATIBLE_SDP:[488,606],AUTHENTICATION_ERROR:[401,407]},// SIP Methods
ACK:'ACK',BYE:'BYE',CANCEL:'CANCEL',INFO:'INFO',INVITE:'INVITE',MESSAGE:'MESSAGE',NOTIFY:'NOTIFY',OPTIONS:'OPTIONS',REGISTER:'REGISTER',REFER:'REFER',UPDATE:'UPDATE',SUBSCRIBE:'SUBSCRIBE',/* SIP Response Reasons
         * DOC: http://www.iana.org/assignments/sip-parameters
         * Copied from https://github.com/versatica/OverSIP/blob/master/lib/oversip/sip/constants.rb#L7
         */REASON_PHRASE:{100:'Trying',180:'Ringing',181:'Call Is Being Forwarded',182:'Queued',183:'Session Progress',199:'Early Dialog Terminated',// draft-ietf-sipcore-199
200:'OK',202:'Accepted',// RFC 3265
204:'No Notification',//RFC 5839
300:'Multiple Choices',301:'Moved Permanently',302:'Moved Temporarily',305:'Use Proxy',380:'Alternative Service',400:'Bad Request',401:'Unauthorized',402:'Payment Required',403:'Forbidden',404:'Not Found',405:'Method Not Allowed',406:'Not Acceptable',407:'Proxy Authentication Required',408:'Request Timeout',410:'Gone',412:'Conditional Request Failed',// RFC 3903
413:'Request Entity Too Large',414:'Request-URI Too Long',415:'Unsupported Media Type',416:'Unsupported URI Scheme',417:'Unknown Resource-Priority',// RFC 4412
420:'Bad Extension',421:'Extension Required',422:'Session Interval Too Small',// RFC 4028
423:'Interval Too Brief',424:'Bad Location Information',// RFC 6442
428:'Use Identity Header',// RFC 4474
429:'Provide Referrer Identity',// RFC 3892
430:'Flow Failed',// RFC 5626
433:'Anonymity Disallowed',// RFC 5079
436:'Bad Identity-Info',// RFC 4474
437:'Unsupported Certificate',// RFC 4744
438:'Invalid Identity Header',// RFC 4744
439:'First Hop Lacks Outbound Support',// RFC 5626
440:'Max-Breadth Exceeded',// RFC 5393
469:'Bad Info Package',// draft-ietf-sipcore-info-events
470:'Consent Needed',// RFC 5360
478:'Unresolvable Destination',// Custom code copied from Kamailio.
480:'Temporarily Unavailable',481:'Call/Transaction Does Not Exist',482:'Loop Detected',483:'Too Many Hops',484:'Address Incomplete',485:'Ambiguous',486:'Busy Here',487:'Request Terminated',488:'Not Acceptable Here',489:'Bad Event',// RFC 3265
491:'Request Pending',493:'Undecipherable',494:'Security Agreement Required',// RFC 3329
500:'JsSIP Internal Error',501:'Not Implemented',502:'Bad Gateway',503:'Service Unavailable',504:'Server Time-out',505:'Version Not Supported',513:'Message Too Large',580:'Precondition Failure',// RFC 3312
600:'Busy Everywhere',603:'Decline',604:'Does Not Exist Anywhere',606:'Not Acceptable'},ALLOWED_METHODS:'INVITE,ACK,CANCEL,BYE,UPDATE,MESSAGE,OPTIONS,REFER,INFO',ACCEPTED_BODY_TYPES:'application/sdp, application/dtmf-relay',MAX_FORWARDS:69,SESSION_EXPIRES:180,MIN_SESSION_EXPIRES:60};module.exports=C;},{"../package.json":40}],2:[function(require,module,exports){module.exports=Dialog;var C={// Dialog states
STATUS_EARLY:1,STATUS_CONFIRMED:2};/**
             * Expose C object.
             */Dialog.C=C;/**
             * Dependencies.
             */var debug=require('debug')('JsSIP:Dialog');var SIPMessage=require('./SIPMessage');var JsSIP_C=require('./Constants');var Transactions=require('./Transactions');var Dialog_RequestSender=require('./Dialog/RequestSender');// RFC 3261 12.1
function Dialog(owner,message,type,state){var contact;this.uac_pending_reply=false;this.uas_pending_reply=false;if(!message.hasHeader('contact')){return{error:'unable to create a Dialog without Contact header field'};}if(message instanceof SIPMessage.IncomingResponse){state=message.status_code<200?C.STATUS_EARLY:C.STATUS_CONFIRMED;}else{// Create confirmed dialog if state is not defined
state=state||C.STATUS_CONFIRMED;}contact=message.parseHeader('contact');// RFC 3261 12.1.1
if(type==='UAS'){this.id={call_id:message.call_id,local_tag:message.to_tag,remote_tag:message.from_tag,toString:function toString(){return this.call_id+this.local_tag+this.remote_tag;}};this.state=state;this.remote_seqnum=message.cseq;this.local_uri=message.parseHeader('to').uri;this.remote_uri=message.parseHeader('from').uri;this.remote_target=contact.uri;this.route_set=message.getHeaders('record-route');}// RFC 3261 12.1.2
else if(type==='UAC'){this.id={call_id:message.call_id,local_tag:message.from_tag,remote_tag:message.to_tag,toString:function toString(){return this.call_id+this.local_tag+this.remote_tag;}};this.state=state;this.local_seqnum=message.cseq;this.local_uri=message.parseHeader('from').uri;this.remote_uri=message.parseHeader('to').uri;this.remote_target=contact.uri;this.route_set=message.getHeaders('record-route').reverse();}this.owner=owner;owner.ua.dialogs[this.id.toString()]=this;debug('new '+type+' dialog created with status '+(this.state===C.STATUS_EARLY?'EARLY':'CONFIRMED'));}Dialog.prototype={update:function update(message,type){this.state=C.STATUS_CONFIRMED;debug('dialog '+this.id.toString()+'  changed to CONFIRMED state');if(type==='UAC'){// RFC 3261 13.2.2.4
this.route_set=message.getHeaders('record-route').reverse();}},terminate:function terminate(){debug('dialog '+this.id.toString()+' deleted');delete this.owner.ua.dialogs[this.id.toString()];},// RFC 3261 12.2.1.1
createRequest:function createRequest(method,extraHeaders,body){var cseq,request;extraHeaders=extraHeaders&&extraHeaders.slice()||[];if(!this.local_seqnum){this.local_seqnum=Math.floor(Math.random()*10000);}cseq=method===JsSIP_C.CANCEL||method===JsSIP_C.ACK?this.local_seqnum:this.local_seqnum+=1;request=new SIPMessage.OutgoingRequest(method,this.remote_target,this.owner.ua,{'cseq':cseq,'call_id':this.id.call_id,'from_uri':this.local_uri,'from_tag':this.id.local_tag,'to_uri':this.remote_uri,'to_tag':this.id.remote_tag,'route_set':this.route_set},extraHeaders,body);request.dialog=this;return request;},// RFC 3261 12.2.2
checkInDialogRequest:function checkInDialogRequest(request){var self=this;if(!this.remote_seqnum){this.remote_seqnum=request.cseq;}else if(request.cseq<this.remote_seqnum){//Do not try to reply to an ACK request.
if(request.method!==JsSIP_C.ACK){request.reply(500);}return false;}else if(request.cseq>this.remote_seqnum){this.remote_seqnum=request.cseq;}// RFC3261 14.2 Modifying an Existing Session -UAS BEHAVIOR-
if(request.method===JsSIP_C.INVITE||request.method===JsSIP_C.UPDATE&&request.body){if(this.uac_pending_reply===true){request.reply(491);}else if(this.uas_pending_reply===true){var retryAfter=(Math.random()*10|0)+1;request.reply(500,null,['Retry-After:'+retryAfter]);return false;}else{this.uas_pending_reply=true;request.server_transaction.on('stateChanged',function stateChanged(){if(this.state===Transactions.C.STATUS_ACCEPTED||this.state===Transactions.C.STATUS_COMPLETED||this.state===Transactions.C.STATUS_TERMINATED){request.server_transaction.removeListener('stateChanged',stateChanged);self.uas_pending_reply=false;}});}// RFC3261 12.2.2 Replace the dialog`s remote target URI if the request is accepted
if(request.hasHeader('contact')){request.server_transaction.on('stateChanged',function(){if(this.state===Transactions.C.STATUS_ACCEPTED){self.remote_target=request.parseHeader('contact').uri;}});}}else if(request.method===JsSIP_C.NOTIFY){// RFC6665 3.2 Replace the dialog`s remote target URI if the request is accepted
if(request.hasHeader('contact')){request.server_transaction.on('stateChanged',function(){if(this.state===Transactions.C.STATUS_COMPLETED){self.remote_target=request.parseHeader('contact').uri;}});}}return true;},sendRequest:function sendRequest(applicant,method,options){options=options||{};var extraHeaders=options.extraHeaders&&options.extraHeaders.slice()||[],body=options.body||null,request=this.createRequest(method,extraHeaders,body),request_sender=new Dialog_RequestSender(this,applicant,request);request_sender.send();// Return the instance of OutgoingRequest
return request;},receiveRequest:function receiveRequest(request){//Check in-dialog request
if(!this.checkInDialogRequest(request)){return;}this.owner.receiveRequest(request);}};},{"./Constants":1,"./Dialog/RequestSender":3,"./SIPMessage":18,"./Transactions":21,"debug":33}],3:[function(require,module,exports){module.exports=DialogRequestSender;/**
             * Dependencies.
             */var JsSIP_C=require('../Constants');var Transactions=require('../Transactions');var RTCSession=require('../RTCSession');var RequestSender=require('../RequestSender');function DialogRequestSender(dialog,applicant,request){this.dialog=dialog;this.applicant=applicant;this.request=request;// RFC3261 14.1 Modifying an Existing Session. UAC Behavior.
this.reattempt=false;this.reattemptTimer=null;}DialogRequestSender.prototype={send:function send(){var self=this,request_sender=new RequestSender(this,this.dialog.owner.ua);request_sender.send();// RFC3261 14.2 Modifying an Existing Session -UAC BEHAVIOR-
if((this.request.method===JsSIP_C.INVITE||this.request.method===JsSIP_C.UPDATE&&this.request.body)&&request_sender.clientTransaction.state!==Transactions.C.STATUS_TERMINATED){this.dialog.uac_pending_reply=true;request_sender.clientTransaction.on('stateChanged',function stateChanged(){if(this.state===Transactions.C.STATUS_ACCEPTED||this.state===Transactions.C.STATUS_COMPLETED||this.state===Transactions.C.STATUS_TERMINATED){request_sender.clientTransaction.removeListener('stateChanged',stateChanged);self.dialog.uac_pending_reply=false;}});}},onRequestTimeout:function onRequestTimeout(){this.applicant.onRequestTimeout();},onTransportError:function onTransportError(){this.applicant.onTransportError();},receiveResponse:function receiveResponse(response){var self=this;// RFC3261 12.2.1.2 408 or 481 is received for a request within a dialog.
if(response.status_code===408||response.status_code===481){this.applicant.onDialogError(response);}else if(response.method===JsSIP_C.INVITE&&response.status_code===491){if(this.reattempt){this.applicant.receiveResponse(response);}else{this.request.cseq.value=this.dialog.local_seqnum+=1;this.reattemptTimer=setTimeout(function(){if(self.applicant.owner.status!==RTCSession.C.STATUS_TERMINATED){self.reattempt=true;self.request_sender.send();}},1000);}}else{this.applicant.receiveResponse(response);}}};},{"../Constants":1,"../RTCSession":11,"../RequestSender":17,"../Transactions":21}],4:[function(require,module,exports){module.exports=DigestAuthentication;/**
             * Dependencies.
             */var debug=require('debug')('JsSIP:DigestAuthentication');var debugerror=require('debug')('JsSIP:ERROR:DigestAuthentication');debugerror.log=console.warn.bind(console);var Utils=require('./Utils');function DigestAuthentication(credentials){this.credentials=credentials;this.cnonce=null;this.nc=0;this.ncHex='00000000';this.algorithm=null;this.realm=null;this.nonce=null;this.opaque=null;this.stale=null;this.qop=null;this.method=null;this.uri=null;this.ha1=null;this.response=null;}DigestAuthentication.prototype.get=function(parameter){switch(parameter){case'realm':return this.realm;case'ha1':return this.ha1;default:debugerror('get() | cannot get "%s" parameter',parameter);return undefined;}};/**
             * Performs Digest authentication given a SIP request and the challenge
             * received in a response to that request.
             * Returns true if auth was successfully generated, false otherwise.
             */DigestAuthentication.prototype.authenticate=function(request,challenge){var ha2,hex;this.algorithm=challenge.algorithm;this.realm=challenge.realm;this.nonce=challenge.nonce;this.opaque=challenge.opaque;this.stale=challenge.stale;if(this.algorithm){if(this.algorithm!=='MD5'){debugerror('authenticate() | challenge with Digest algorithm different than "MD5", authentication aborted');return false;}}else{this.algorithm='MD5';}if(!this.nonce){debugerror('authenticate() | challenge without Digest nonce, authentication aborted');return false;}if(!this.realm){debugerror('authenticate() | challenge without Digest realm, authentication aborted');return false;}// If no plain SIP password is provided.
if(!this.credentials.password){// If ha1 is not provided we cannot authenticate.
if(!this.credentials.ha1){debugerror('authenticate() | no plain SIP password nor ha1 provided, authentication aborted');return false;}// If the realm does not match the stored realm we cannot authenticate.
if(this.credentials.realm!==this.realm){debugerror('authenticate() | no plain SIP password, and stored `realm` does not match the given `realm`, cannot authenticate [stored:"%s", given:"%s"]',this.credentials.realm,this.realm);return false;}}// 'qop' can contain a list of values (Array). Let's choose just one.
if(challenge.qop){if(challenge.qop.indexOf('auth')>-1){this.qop='auth';}else if(challenge.qop.indexOf('auth-int')>-1){this.qop='auth-int';}else{// Otherwise 'qop' is present but does not contain 'auth' or 'auth-int', so abort here.
debugerror('authenticate() | challenge without Digest qop different than "auth" or "auth-int", authentication aborted');return false;}}else{this.qop=null;}// Fill other attributes.
this.method=request.method;this.uri=request.ruri;this.cnonce=Utils.createRandomToken(12);this.nc+=1;hex=Number(this.nc).toString(16);this.ncHex='00000000'.substr(0,8-hex.length)+hex;// nc-value = 8LHEX. Max value = 'FFFFFFFF'.
if(this.nc===4294967296){this.nc=1;this.ncHex='00000001';}// Calculate the Digest "response" value.
// If we have plain SIP password then regenerate ha1.
if(this.credentials.password){// HA1 = MD5(A1) = MD5(username:realm:password)
this.ha1=Utils.calculateMD5(this.credentials.username+':'+this.realm+':'+this.credentials.password);//
// Otherwise reuse the stored ha1.
}else{this.ha1=this.credentials.ha1;}if(this.qop==='auth'){// HA2 = MD5(A2) = MD5(method:digestURI)
ha2=Utils.calculateMD5(this.method+':'+this.uri);// response = MD5(HA1:nonce:nonceCount:credentialsNonce:qop:HA2)
this.response=Utils.calculateMD5(this.ha1+':'+this.nonce+':'+this.ncHex+':'+this.cnonce+':auth:'+ha2);}else if(this.qop==='auth-int'){// HA2 = MD5(A2) = MD5(method:digestURI:MD5(entityBody))
ha2=Utils.calculateMD5(this.method+':'+this.uri+':'+Utils.calculateMD5(this.body?this.body:''));// response = MD5(HA1:nonce:nonceCount:credentialsNonce:qop:HA2)
this.response=Utils.calculateMD5(this.ha1+':'+this.nonce+':'+this.ncHex+':'+this.cnonce+':auth-int:'+ha2);}else if(this.qop===null){// HA2 = MD5(A2) = MD5(method:digestURI)
ha2=Utils.calculateMD5(this.method+':'+this.uri);// response = MD5(HA1:nonce:HA2)
this.response=Utils.calculateMD5(this.ha1+':'+this.nonce+':'+ha2);}debug('authenticate() | response generated');return true;};/**
             * Return the Proxy-Authorization or WWW-Authorization header value.
             */DigestAuthentication.prototype.toString=function(){var auth_params=[];if(!this.response){throw new Error('response field does not exist, cannot generate Authorization header');}auth_params.push('algorithm='+this.algorithm);auth_params.push('username="'+this.credentials.username+'"');auth_params.push('realm="'+this.realm+'"');auth_params.push('nonce="'+this.nonce+'"');auth_params.push('uri="'+this.uri+'"');auth_params.push('response="'+this.response+'"');if(this.opaque){auth_params.push('opaque="'+this.opaque+'"');}if(this.qop){auth_params.push('qop='+this.qop);auth_params.push('cnonce="'+this.cnonce+'"');auth_params.push('nc='+this.ncHex);}return'Digest '+auth_params.join(', ');};},{"./Utils":25,"debug":33}],5:[function(require,module,exports){/**
             * @namespace Exceptions
             * @memberOf JsSIP
             */var Exceptions={/**
                 * Exception thrown when a valid parameter is given to the JsSIP.UA constructor.
                 * @class ConfigurationError
                 * @memberOf JsSIP.Exceptions
                 */ConfigurationError:function(){var exception=function exception(parameter,value){this.code=1;this.name='CONFIGURATION_ERROR';this.parameter=parameter;this.value=value;this.message=!this.value?'Missing parameter: '+this.parameter:'Invalid value '+JSON.stringify(this.value)+' for parameter "'+this.parameter+'"';};exception.prototype=new Error();return exception;}(),InvalidStateError:function(){var exception=function exception(status){this.code=2;this.name='INVALID_STATE_ERROR';this.status=status;this.message='Invalid status: '+status;};exception.prototype=new Error();return exception;}(),NotSupportedError:function(){var exception=function exception(message){this.code=3;this.name='NOT_SUPPORTED_ERROR';this.message=message;};exception.prototype=new Error();return exception;}(),NotReadyError:function(){var exception=function exception(message){this.code=4;this.name='NOT_READY_ERROR';this.message=message;};exception.prototype=new Error();return exception;}()};module.exports=Exceptions;},{}],6:[function(require,module,exports){module.exports=function(){/*
         * Generated by PEG.js 0.7.0.
         *
         * http://pegjs.majda.cz/
         */function quote(s){/*
             * ECMA-262, 5th ed., 7.8.4: All characters may appear literally in a
             * string literal except for the closing quote character, backslash,
             * carriage return, line separator, paragraph separator, and line feed.
             * Any character may appear in the form of an escape sequence.
             *
             * For portability, we also escape escape all control and non-ASCII
             * characters. Note that "\0" and "\v" escape sequences are not used
             * because JSHint does not like the first and IE the second.
             */return'"'+s.replace(/\\/g,'\\\\')// backslash
.replace(/"/g,'\\"')// closing quote character
.replace(/\x08/g,'\\b')// backspace
.replace(/\t/g,'\\t')// horizontal tab
.replace(/\n/g,'\\n')// line feed
.replace(/\f/g,'\\f')// form feed
.replace(/\r/g,'\\r')// carriage return
.replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"';}var result={/*
             * Parses the input with a generated parser. If the parsing is successfull,
             * returns a value explicitly or implicitly specified by the grammar from
             * which the parser was generated (see |PEG.buildParser|). If the parsing is
             * unsuccessful, throws |PEG.parser.SyntaxError| describing the error.
             */parse:function parse(input,startRule){var parseFunctions={"CRLF":parse_CRLF,"DIGIT":parse_DIGIT,"ALPHA":parse_ALPHA,"HEXDIG":parse_HEXDIG,"WSP":parse_WSP,"OCTET":parse_OCTET,"DQUOTE":parse_DQUOTE,"SP":parse_SP,"HTAB":parse_HTAB,"alphanum":parse_alphanum,"reserved":parse_reserved,"unreserved":parse_unreserved,"mark":parse_mark,"escaped":parse_escaped,"LWS":parse_LWS,"SWS":parse_SWS,"HCOLON":parse_HCOLON,"TEXT_UTF8_TRIM":parse_TEXT_UTF8_TRIM,"TEXT_UTF8char":parse_TEXT_UTF8char,"UTF8_NONASCII":parse_UTF8_NONASCII,"UTF8_CONT":parse_UTF8_CONT,"LHEX":parse_LHEX,"token":parse_token,"token_nodot":parse_token_nodot,"separators":parse_separators,"word":parse_word,"STAR":parse_STAR,"SLASH":parse_SLASH,"EQUAL":parse_EQUAL,"LPAREN":parse_LPAREN,"RPAREN":parse_RPAREN,"RAQUOT":parse_RAQUOT,"LAQUOT":parse_LAQUOT,"COMMA":parse_COMMA,"SEMI":parse_SEMI,"COLON":parse_COLON,"LDQUOT":parse_LDQUOT,"RDQUOT":parse_RDQUOT,"comment":parse_comment,"ctext":parse_ctext,"quoted_string":parse_quoted_string,"quoted_string_clean":parse_quoted_string_clean,"qdtext":parse_qdtext,"quoted_pair":parse_quoted_pair,"SIP_URI_noparams":parse_SIP_URI_noparams,"SIP_URI":parse_SIP_URI,"uri_scheme":parse_uri_scheme,"uri_scheme_sips":parse_uri_scheme_sips,"uri_scheme_sip":parse_uri_scheme_sip,"userinfo":parse_userinfo,"user":parse_user,"user_unreserved":parse_user_unreserved,"password":parse_password,"hostport":parse_hostport,"host":parse_host,"hostname":parse_hostname,"domainlabel":parse_domainlabel,"toplabel":parse_toplabel,"IPv6reference":parse_IPv6reference,"IPv6address":parse_IPv6address,"h16":parse_h16,"ls32":parse_ls32,"IPv4address":parse_IPv4address,"dec_octet":parse_dec_octet,"port":parse_port,"uri_parameters":parse_uri_parameters,"uri_parameter":parse_uri_parameter,"transport_param":parse_transport_param,"user_param":parse_user_param,"method_param":parse_method_param,"ttl_param":parse_ttl_param,"maddr_param":parse_maddr_param,"lr_param":parse_lr_param,"other_param":parse_other_param,"pname":parse_pname,"pvalue":parse_pvalue,"paramchar":parse_paramchar,"param_unreserved":parse_param_unreserved,"headers":parse_headers,"header":parse_header,"hname":parse_hname,"hvalue":parse_hvalue,"hnv_unreserved":parse_hnv_unreserved,"Request_Response":parse_Request_Response,"Request_Line":parse_Request_Line,"Request_URI":parse_Request_URI,"absoluteURI":parse_absoluteURI,"hier_part":parse_hier_part,"net_path":parse_net_path,"abs_path":parse_abs_path,"opaque_part":parse_opaque_part,"uric":parse_uric,"uric_no_slash":parse_uric_no_slash,"path_segments":parse_path_segments,"segment":parse_segment,"param":parse_param,"pchar":parse_pchar,"scheme":parse_scheme,"authority":parse_authority,"srvr":parse_srvr,"reg_name":parse_reg_name,"query":parse_query,"SIP_Version":parse_SIP_Version,"INVITEm":parse_INVITEm,"ACKm":parse_ACKm,"OPTIONSm":parse_OPTIONSm,"BYEm":parse_BYEm,"CANCELm":parse_CANCELm,"REGISTERm":parse_REGISTERm,"SUBSCRIBEm":parse_SUBSCRIBEm,"NOTIFYm":parse_NOTIFYm,"REFERm":parse_REFERm,"Method":parse_Method,"Status_Line":parse_Status_Line,"Status_Code":parse_Status_Code,"extension_code":parse_extension_code,"Reason_Phrase":parse_Reason_Phrase,"Allow_Events":parse_Allow_Events,"Call_ID":parse_Call_ID,"Contact":parse_Contact,"contact_param":parse_contact_param,"name_addr":parse_name_addr,"display_name":parse_display_name,"contact_params":parse_contact_params,"c_p_q":parse_c_p_q,"c_p_expires":parse_c_p_expires,"delta_seconds":parse_delta_seconds,"qvalue":parse_qvalue,"generic_param":parse_generic_param,"gen_value":parse_gen_value,"Content_Disposition":parse_Content_Disposition,"disp_type":parse_disp_type,"disp_param":parse_disp_param,"handling_param":parse_handling_param,"Content_Encoding":parse_Content_Encoding,"Content_Length":parse_Content_Length,"Content_Type":parse_Content_Type,"media_type":parse_media_type,"m_type":parse_m_type,"discrete_type":parse_discrete_type,"composite_type":parse_composite_type,"extension_token":parse_extension_token,"x_token":parse_x_token,"m_subtype":parse_m_subtype,"m_parameter":parse_m_parameter,"m_value":parse_m_value,"CSeq":parse_CSeq,"CSeq_value":parse_CSeq_value,"Expires":parse_Expires,"Event":parse_Event,"event_type":parse_event_type,"From":parse_From,"from_param":parse_from_param,"tag_param":parse_tag_param,"Max_Forwards":parse_Max_Forwards,"Min_Expires":parse_Min_Expires,"Name_Addr_Header":parse_Name_Addr_Header,"Proxy_Authenticate":parse_Proxy_Authenticate,"challenge":parse_challenge,"other_challenge":parse_other_challenge,"auth_param":parse_auth_param,"digest_cln":parse_digest_cln,"realm":parse_realm,"realm_value":parse_realm_value,"domain":parse_domain,"URI":parse_URI,"nonce":parse_nonce,"nonce_value":parse_nonce_value,"opaque":parse_opaque,"stale":parse_stale,"algorithm":parse_algorithm,"qop_options":parse_qop_options,"qop_value":parse_qop_value,"Proxy_Require":parse_Proxy_Require,"Record_Route":parse_Record_Route,"rec_route":parse_rec_route,"Reason":parse_Reason,"reason_param":parse_reason_param,"reason_cause":parse_reason_cause,"Require":parse_Require,"Route":parse_Route,"route_param":parse_route_param,"Subscription_State":parse_Subscription_State,"substate_value":parse_substate_value,"subexp_params":parse_subexp_params,"event_reason_value":parse_event_reason_value,"Subject":parse_Subject,"Supported":parse_Supported,"To":parse_To,"to_param":parse_to_param,"Via":parse_Via,"via_param":parse_via_param,"via_params":parse_via_params,"via_ttl":parse_via_ttl,"via_maddr":parse_via_maddr,"via_received":parse_via_received,"via_branch":parse_via_branch,"response_port":parse_response_port,"sent_protocol":parse_sent_protocol,"protocol_name":parse_protocol_name,"transport":parse_transport,"sent_by":parse_sent_by,"via_host":parse_via_host,"via_port":parse_via_port,"ttl":parse_ttl,"WWW_Authenticate":parse_WWW_Authenticate,"Session_Expires":parse_Session_Expires,"s_e_expires":parse_s_e_expires,"s_e_params":parse_s_e_params,"s_e_refresher":parse_s_e_refresher,"extension_header":parse_extension_header,"header_value":parse_header_value,"message_body":parse_message_body,"uuid_URI":parse_uuid_URI,"uuid":parse_uuid,"hex4":parse_hex4,"hex8":parse_hex8,"hex12":parse_hex12,"Refer_To":parse_Refer_To,"Replaces":parse_Replaces,"call_id":parse_call_id,"replaces_param":parse_replaces_param,"to_tag":parse_to_tag,"from_tag":parse_from_tag,"early_flag":parse_early_flag};if(startRule!==undefined){if(parseFunctions[startRule]===undefined){throw new Error("Invalid rule name: "+quote(startRule)+".");}}else{startRule="CRLF";}var pos=0;var reportFailures=0;var rightmostFailuresPos=0;var rightmostFailuresExpected=[];function padLeft(input,padding,length){var result=input;var padLength=length-input.length;for(var i=0;i<padLength;i++){result=padding+result;}return result;}function escape(ch){var charCode=ch.charCodeAt(0);var escapeChar;var length;if(charCode<=0xFF){escapeChar='x';length=2;}else{escapeChar='u';length=4;}return'\\'+escapeChar+padLeft(charCode.toString(16).toUpperCase(),'0',length);}function matchFailed(failure){if(pos<rightmostFailuresPos){return;}if(pos>rightmostFailuresPos){rightmostFailuresPos=pos;rightmostFailuresExpected=[];}rightmostFailuresExpected.push(failure);}function parse_CRLF(){var result0;if(input.substr(pos,2)==="\r\n"){result0="\r\n";pos+=2;}else{result0=null;if(reportFailures===0){matchFailed("\"\\r\\n\"");}}return result0;}function parse_DIGIT(){var result0;if(/^[0-9]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[0-9]");}}return result0;}function parse_ALPHA(){var result0;if(/^[a-zA-Z]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[a-zA-Z]");}}return result0;}function parse_HEXDIG(){var result0;if(/^[0-9a-fA-F]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[0-9a-fA-F]");}}return result0;}function parse_WSP(){var result0;result0=parse_SP();if(result0===null){result0=parse_HTAB();}return result0;}function parse_OCTET(){var result0;if(/^[\0-\xFF]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[\\0-\\xFF]");}}return result0;}function parse_DQUOTE(){var result0;if(/^["]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[\"]");}}return result0;}function parse_SP(){var result0;if(input.charCodeAt(pos)===32){result0=" ";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\" \"");}}return result0;}function parse_HTAB(){var result0;if(input.charCodeAt(pos)===9){result0="\t";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"\\t\"");}}return result0;}function parse_alphanum(){var result0;if(/^[a-zA-Z0-9]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[a-zA-Z0-9]");}}return result0;}function parse_reserved(){var result0;if(input.charCodeAt(pos)===59){result0=";";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\";\"");}}if(result0===null){if(input.charCodeAt(pos)===47){result0="/";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"/\"");}}if(result0===null){if(input.charCodeAt(pos)===63){result0="?";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"?\"");}}if(result0===null){if(input.charCodeAt(pos)===58){result0=":";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\":\"");}}if(result0===null){if(input.charCodeAt(pos)===64){result0="@";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"@\"");}}if(result0===null){if(input.charCodeAt(pos)===38){result0="&";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"&\"");}}if(result0===null){if(input.charCodeAt(pos)===61){result0="=";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result0===null){if(input.charCodeAt(pos)===43){result0="+";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result0===null){if(input.charCodeAt(pos)===36){result0="$";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"$\"");}}if(result0===null){if(input.charCodeAt(pos)===44){result0=",";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\",\"");}}}}}}}}}}}return result0;}function parse_unreserved(){var result0;result0=parse_alphanum();if(result0===null){result0=parse_mark();}return result0;}function parse_mark(){var result0;if(input.charCodeAt(pos)===45){result0="-";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result0===null){if(input.charCodeAt(pos)===95){result0="_";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"_\"");}}if(result0===null){if(input.charCodeAt(pos)===46){result0=".";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\".\"");}}if(result0===null){if(input.charCodeAt(pos)===33){result0="!";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"!\"");}}if(result0===null){if(input.charCodeAt(pos)===126){result0="~";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"~\"");}}if(result0===null){if(input.charCodeAt(pos)===42){result0="*";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"*\"");}}if(result0===null){if(input.charCodeAt(pos)===39){result0="'";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"'\"");}}if(result0===null){if(input.charCodeAt(pos)===40){result0="(";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"(\"");}}if(result0===null){if(input.charCodeAt(pos)===41){result0=")";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\")\"");}}}}}}}}}}return result0;}function parse_escaped(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.charCodeAt(pos)===37){result0="%";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"%\"");}}if(result0!==null){result1=parse_HEXDIG();if(result1!==null){result2=parse_HEXDIG();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,escaped){return escaped.join('');}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_LWS(){var result0,result1,result2;var pos0,pos1,pos2;pos0=pos;pos1=pos;pos2=pos;result0=[];result1=parse_WSP();while(result1!==null){result0.push(result1);result1=parse_WSP();}if(result0!==null){result1=parse_CRLF();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos2;}}else{result0=null;pos=pos2;}result0=result0!==null?result0:"";if(result0!==null){result2=parse_WSP();if(result2!==null){result1=[];while(result2!==null){result1.push(result2);result2=parse_WSP();}}else{result1=null;}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return" ";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_SWS(){var result0;result0=parse_LWS();result0=result0!==null?result0:"";return result0;}function parse_HCOLON(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;result0=[];result1=parse_SP();if(result1===null){result1=parse_HTAB();}while(result1!==null){result0.push(result1);result1=parse_SP();if(result1===null){result1=parse_HTAB();}}if(result0!==null){if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_SWS();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return':';}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_TEXT_UTF8_TRIM(){var result0,result1,result2,result3;var pos0,pos1,pos2;pos0=pos;pos1=pos;result1=parse_TEXT_UTF8char();if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_TEXT_UTF8char();}}else{result0=null;}if(result0!==null){result1=[];pos2=pos;result2=[];result3=parse_LWS();while(result3!==null){result2.push(result3);result3=parse_LWS();}if(result2!==null){result3=parse_TEXT_UTF8char();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}while(result2!==null){result1.push(result2);pos2=pos;result2=[];result3=parse_LWS();while(result3!==null){result2.push(result3);result3=parse_LWS();}if(result2!==null){result3=parse_TEXT_UTF8char();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_TEXT_UTF8char(){var result0;if(/^[!-~]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[!-~]");}}if(result0===null){result0=parse_UTF8_NONASCII();}return result0;}function parse_UTF8_NONASCII(){var result0;if(/^[\x80-\uFFFF]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[\\x80-\\uFFFF]");}}return result0;}function parse_UTF8_CONT(){var result0;if(/^[\x80-\xBF]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[\\x80-\\xBF]");}}return result0;}function parse_LHEX(){var result0;result0=parse_DIGIT();if(result0===null){if(/^[a-f]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[a-f]");}}}return result0;}function parse_token(){var result0,result1;var pos0;pos0=pos;result1=parse_alphanum();if(result1===null){if(input.charCodeAt(pos)===45){result1="-";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result1===null){if(input.charCodeAt(pos)===46){result1=".";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\".\"");}}if(result1===null){if(input.charCodeAt(pos)===33){result1="!";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"!\"");}}if(result1===null){if(input.charCodeAt(pos)===37){result1="%";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"%\"");}}if(result1===null){if(input.charCodeAt(pos)===42){result1="*";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"*\"");}}if(result1===null){if(input.charCodeAt(pos)===95){result1="_";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"_\"");}}if(result1===null){if(input.charCodeAt(pos)===43){result1="+";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result1===null){if(input.charCodeAt(pos)===96){result1="`";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"`\"");}}if(result1===null){if(input.charCodeAt(pos)===39){result1="'";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"'\"");}}if(result1===null){if(input.charCodeAt(pos)===126){result1="~";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"~\"");}}}}}}}}}}}}if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_alphanum();if(result1===null){if(input.charCodeAt(pos)===45){result1="-";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result1===null){if(input.charCodeAt(pos)===46){result1=".";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\".\"");}}if(result1===null){if(input.charCodeAt(pos)===33){result1="!";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"!\"");}}if(result1===null){if(input.charCodeAt(pos)===37){result1="%";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"%\"");}}if(result1===null){if(input.charCodeAt(pos)===42){result1="*";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"*\"");}}if(result1===null){if(input.charCodeAt(pos)===95){result1="_";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"_\"");}}if(result1===null){if(input.charCodeAt(pos)===43){result1="+";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result1===null){if(input.charCodeAt(pos)===96){result1="`";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"`\"");}}if(result1===null){if(input.charCodeAt(pos)===39){result1="'";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"'\"");}}if(result1===null){if(input.charCodeAt(pos)===126){result1="~";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"~\"");}}}}}}}}}}}}}}else{result0=null;}if(result0!==null){result0=function(offset){return input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_token_nodot(){var result0,result1;var pos0;pos0=pos;result1=parse_alphanum();if(result1===null){if(input.charCodeAt(pos)===45){result1="-";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result1===null){if(input.charCodeAt(pos)===33){result1="!";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"!\"");}}if(result1===null){if(input.charCodeAt(pos)===37){result1="%";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"%\"");}}if(result1===null){if(input.charCodeAt(pos)===42){result1="*";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"*\"");}}if(result1===null){if(input.charCodeAt(pos)===95){result1="_";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"_\"");}}if(result1===null){if(input.charCodeAt(pos)===43){result1="+";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result1===null){if(input.charCodeAt(pos)===96){result1="`";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"`\"");}}if(result1===null){if(input.charCodeAt(pos)===39){result1="'";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"'\"");}}if(result1===null){if(input.charCodeAt(pos)===126){result1="~";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"~\"");}}}}}}}}}}}if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_alphanum();if(result1===null){if(input.charCodeAt(pos)===45){result1="-";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result1===null){if(input.charCodeAt(pos)===33){result1="!";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"!\"");}}if(result1===null){if(input.charCodeAt(pos)===37){result1="%";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"%\"");}}if(result1===null){if(input.charCodeAt(pos)===42){result1="*";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"*\"");}}if(result1===null){if(input.charCodeAt(pos)===95){result1="_";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"_\"");}}if(result1===null){if(input.charCodeAt(pos)===43){result1="+";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result1===null){if(input.charCodeAt(pos)===96){result1="`";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"`\"");}}if(result1===null){if(input.charCodeAt(pos)===39){result1="'";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"'\"");}}if(result1===null){if(input.charCodeAt(pos)===126){result1="~";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"~\"");}}}}}}}}}}}}}else{result0=null;}if(result0!==null){result0=function(offset){return input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_separators(){var result0;if(input.charCodeAt(pos)===40){result0="(";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"(\"");}}if(result0===null){if(input.charCodeAt(pos)===41){result0=")";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\")\"");}}if(result0===null){if(input.charCodeAt(pos)===60){result0="<";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"<\"");}}if(result0===null){if(input.charCodeAt(pos)===62){result0=">";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\">\"");}}if(result0===null){if(input.charCodeAt(pos)===64){result0="@";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"@\"");}}if(result0===null){if(input.charCodeAt(pos)===44){result0=",";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\",\"");}}if(result0===null){if(input.charCodeAt(pos)===59){result0=";";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\";\"");}}if(result0===null){if(input.charCodeAt(pos)===58){result0=":";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\":\"");}}if(result0===null){if(input.charCodeAt(pos)===92){result0="\\";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"\\\\\"");}}if(result0===null){result0=parse_DQUOTE();if(result0===null){if(input.charCodeAt(pos)===47){result0="/";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"/\"");}}if(result0===null){if(input.charCodeAt(pos)===91){result0="[";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"[\"");}}if(result0===null){if(input.charCodeAt(pos)===93){result0="]";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"]\"");}}if(result0===null){if(input.charCodeAt(pos)===63){result0="?";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"?\"");}}if(result0===null){if(input.charCodeAt(pos)===61){result0="=";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result0===null){if(input.charCodeAt(pos)===123){result0="{";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"{\"");}}if(result0===null){if(input.charCodeAt(pos)===125){result0="}";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"}\"");}}if(result0===null){result0=parse_SP();if(result0===null){result0=parse_HTAB();}}}}}}}}}}}}}}}}}}return result0;}function parse_word(){var result0,result1;var pos0;pos0=pos;result1=parse_alphanum();if(result1===null){if(input.charCodeAt(pos)===45){result1="-";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result1===null){if(input.charCodeAt(pos)===46){result1=".";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\".\"");}}if(result1===null){if(input.charCodeAt(pos)===33){result1="!";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"!\"");}}if(result1===null){if(input.charCodeAt(pos)===37){result1="%";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"%\"");}}if(result1===null){if(input.charCodeAt(pos)===42){result1="*";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"*\"");}}if(result1===null){if(input.charCodeAt(pos)===95){result1="_";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"_\"");}}if(result1===null){if(input.charCodeAt(pos)===43){result1="+";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result1===null){if(input.charCodeAt(pos)===96){result1="`";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"`\"");}}if(result1===null){if(input.charCodeAt(pos)===39){result1="'";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"'\"");}}if(result1===null){if(input.charCodeAt(pos)===126){result1="~";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"~\"");}}if(result1===null){if(input.charCodeAt(pos)===40){result1="(";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"(\"");}}if(result1===null){if(input.charCodeAt(pos)===41){result1=")";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\")\"");}}if(result1===null){if(input.charCodeAt(pos)===60){result1="<";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"<\"");}}if(result1===null){if(input.charCodeAt(pos)===62){result1=">";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\">\"");}}if(result1===null){if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1===null){if(input.charCodeAt(pos)===92){result1="\\";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"\\\\\"");}}if(result1===null){result1=parse_DQUOTE();if(result1===null){if(input.charCodeAt(pos)===47){result1="/";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"/\"");}}if(result1===null){if(input.charCodeAt(pos)===91){result1="[";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"[\"");}}if(result1===null){if(input.charCodeAt(pos)===93){result1="]";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"]\"");}}if(result1===null){if(input.charCodeAt(pos)===63){result1="?";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"?\"");}}if(result1===null){if(input.charCodeAt(pos)===123){result1="{";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"{\"");}}if(result1===null){if(input.charCodeAt(pos)===125){result1="}";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"}\"");}}}}}}}}}}}}}}}}}}}}}}}}}if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_alphanum();if(result1===null){if(input.charCodeAt(pos)===45){result1="-";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result1===null){if(input.charCodeAt(pos)===46){result1=".";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\".\"");}}if(result1===null){if(input.charCodeAt(pos)===33){result1="!";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"!\"");}}if(result1===null){if(input.charCodeAt(pos)===37){result1="%";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"%\"");}}if(result1===null){if(input.charCodeAt(pos)===42){result1="*";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"*\"");}}if(result1===null){if(input.charCodeAt(pos)===95){result1="_";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"_\"");}}if(result1===null){if(input.charCodeAt(pos)===43){result1="+";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result1===null){if(input.charCodeAt(pos)===96){result1="`";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"`\"");}}if(result1===null){if(input.charCodeAt(pos)===39){result1="'";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"'\"");}}if(result1===null){if(input.charCodeAt(pos)===126){result1="~";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"~\"");}}if(result1===null){if(input.charCodeAt(pos)===40){result1="(";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"(\"");}}if(result1===null){if(input.charCodeAt(pos)===41){result1=")";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\")\"");}}if(result1===null){if(input.charCodeAt(pos)===60){result1="<";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"<\"");}}if(result1===null){if(input.charCodeAt(pos)===62){result1=">";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\">\"");}}if(result1===null){if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1===null){if(input.charCodeAt(pos)===92){result1="\\";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"\\\\\"");}}if(result1===null){result1=parse_DQUOTE();if(result1===null){if(input.charCodeAt(pos)===47){result1="/";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"/\"");}}if(result1===null){if(input.charCodeAt(pos)===91){result1="[";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"[\"");}}if(result1===null){if(input.charCodeAt(pos)===93){result1="]";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"]\"");}}if(result1===null){if(input.charCodeAt(pos)===63){result1="?";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"?\"");}}if(result1===null){if(input.charCodeAt(pos)===123){result1="{";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"{\"");}}if(result1===null){if(input.charCodeAt(pos)===125){result1="}";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"}\"");}}}}}}}}}}}}}}}}}}}}}}}}}}}else{result0=null;}if(result0!==null){result0=function(offset){return input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_STAR(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_SWS();if(result0!==null){if(input.charCodeAt(pos)===42){result1="*";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"*\"");}}if(result1!==null){result2=parse_SWS();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return"*";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_SLASH(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_SWS();if(result0!==null){if(input.charCodeAt(pos)===47){result1="/";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"/\"");}}if(result1!==null){result2=parse_SWS();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return"/";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_EQUAL(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_SWS();if(result0!==null){if(input.charCodeAt(pos)===61){result1="=";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result1!==null){result2=parse_SWS();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return"=";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_LPAREN(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_SWS();if(result0!==null){if(input.charCodeAt(pos)===40){result1="(";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"(\"");}}if(result1!==null){result2=parse_SWS();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return"(";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_RPAREN(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_SWS();if(result0!==null){if(input.charCodeAt(pos)===41){result1=")";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\")\"");}}if(result1!==null){result2=parse_SWS();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return")";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_RAQUOT(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;if(input.charCodeAt(pos)===62){result0=">";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\">\"");}}if(result0!==null){result1=parse_SWS();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return">";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_LAQUOT(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_SWS();if(result0!==null){if(input.charCodeAt(pos)===60){result1="<";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"<\"");}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return"<";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_COMMA(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_SWS();if(result0!==null){if(input.charCodeAt(pos)===44){result1=",";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\",\"");}}if(result1!==null){result2=parse_SWS();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return",";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_SEMI(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_SWS();if(result0!==null){if(input.charCodeAt(pos)===59){result1=";";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\";\"");}}if(result1!==null){result2=parse_SWS();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return";";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_COLON(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_SWS();if(result0!==null){if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_SWS();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return":";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_LDQUOT(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_SWS();if(result0!==null){result1=parse_DQUOTE();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return"\"";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_RDQUOT(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_DQUOTE();if(result0!==null){result1=parse_SWS();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return"\"";}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_comment(){var result0,result1,result2;var pos0;pos0=pos;result0=parse_LPAREN();if(result0!==null){result1=[];result2=parse_ctext();if(result2===null){result2=parse_quoted_pair();if(result2===null){result2=parse_comment();}}while(result2!==null){result1.push(result2);result2=parse_ctext();if(result2===null){result2=parse_quoted_pair();if(result2===null){result2=parse_comment();}}}if(result1!==null){result2=parse_RPAREN();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_ctext(){var result0;if(/^[!-']/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[!-']");}}if(result0===null){if(/^[*-[]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[*-[]");}}if(result0===null){if(/^[\]-~]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[\\]-~]");}}if(result0===null){result0=parse_UTF8_NONASCII();if(result0===null){result0=parse_LWS();}}}}return result0;}function parse_quoted_string(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_SWS();if(result0!==null){result1=parse_DQUOTE();if(result1!==null){result2=[];result3=parse_qdtext();if(result3===null){result3=parse_quoted_pair();}while(result3!==null){result2.push(result3);result3=parse_qdtext();if(result3===null){result3=parse_quoted_pair();}}if(result2!==null){result3=parse_DQUOTE();if(result3!==null){result0=[result0,result1,result2,result3];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_quoted_string_clean(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_SWS();if(result0!==null){result1=parse_DQUOTE();if(result1!==null){result2=[];result3=parse_qdtext();if(result3===null){result3=parse_quoted_pair();}while(result3!==null){result2.push(result3);result3=parse_qdtext();if(result3===null){result3=parse_quoted_pair();}}if(result2!==null){result3=parse_DQUOTE();if(result3!==null){result0=[result0,result1,result2,result3];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return input.substring(pos-1,offset+1);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_qdtext(){var result0;result0=parse_LWS();if(result0===null){if(input.charCodeAt(pos)===33){result0="!";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"!\"");}}if(result0===null){if(/^[#-[]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[#-[]");}}if(result0===null){if(/^[\]-~]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[\\]-~]");}}if(result0===null){result0=parse_UTF8_NONASCII();}}}}return result0;}function parse_quoted_pair(){var result0,result1;var pos0;pos0=pos;if(input.charCodeAt(pos)===92){result0="\\";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"\\\\\"");}}if(result0!==null){if(/^[\0-\t]/.test(input.charAt(pos))){result1=input.charAt(pos);pos++;}else{result1=null;if(reportFailures===0){matchFailed("[\\0-\\t]");}}if(result1===null){if(/^[\x0B-\f]/.test(input.charAt(pos))){result1=input.charAt(pos);pos++;}else{result1=null;if(reportFailures===0){matchFailed("[\\x0B-\\f]");}}if(result1===null){if(/^[\x0E-]/.test(input.charAt(pos))){result1=input.charAt(pos);pos++;}else{result1=null;if(reportFailures===0){matchFailed("[\\x0E-]");}}}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_SIP_URI_noparams(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_uri_scheme();if(result0!==null){if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_userinfo();result2=result2!==null?result2:"";if(result2!==null){result3=parse_hostport();if(result3!==null){result0=[result0,result1,result2,result3];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){try{data.uri=new URI(data.scheme,data.user,data.host,data.port);delete data.scheme;delete data.user;delete data.host;delete data.host_type;delete data.port;}catch(e){data=-1;}}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_SIP_URI(){var result0,result1,result2,result3,result4,result5;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_uri_scheme();if(result0!==null){if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_userinfo();result2=result2!==null?result2:"";if(result2!==null){result3=parse_hostport();if(result3!==null){result4=parse_uri_parameters();if(result4!==null){result5=parse_headers();result5=result5!==null?result5:"";if(result5!==null){result0=[result0,result1,result2,result3,result4,result5];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){var header;try{data.uri=new URI(data.scheme,data.user,data.host,data.port,data.uri_params,data.uri_headers);delete data.scheme;delete data.user;delete data.host;delete data.host_type;delete data.port;delete data.uri_params;if(startRule==='SIP_URI'){data=data.uri;}}catch(e){data=-1;}}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_uri_scheme(){var result0;result0=parse_uri_scheme_sips();if(result0===null){result0=parse_uri_scheme_sip();}return result0;}function parse_uri_scheme_sips(){var result0;var pos0;pos0=pos;if(input.substr(pos,4).toLowerCase()==="sips"){result0=input.substr(pos,4);pos+=4;}else{result0=null;if(reportFailures===0){matchFailed("\"sips\"");}}if(result0!==null){result0=function(offset,scheme){data.scheme=scheme.toLowerCase();}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_uri_scheme_sip(){var result0;var pos0;pos0=pos;if(input.substr(pos,3).toLowerCase()==="sip"){result0=input.substr(pos,3);pos+=3;}else{result0=null;if(reportFailures===0){matchFailed("\"sip\"");}}if(result0!==null){result0=function(offset,scheme){data.scheme=scheme.toLowerCase();}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_userinfo(){var result0,result1,result2;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_user();if(result0!==null){pos2=pos;if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_password();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){if(input.charCodeAt(pos)===64){result2="@";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"@\"");}}if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){data.user=decodeURIComponent(input.substring(pos-1,offset));}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_user(){var result0,result1;result1=parse_unreserved();if(result1===null){result1=parse_escaped();if(result1===null){result1=parse_user_unreserved();}}if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_unreserved();if(result1===null){result1=parse_escaped();if(result1===null){result1=parse_user_unreserved();}}}}else{result0=null;}return result0;}function parse_user_unreserved(){var result0;if(input.charCodeAt(pos)===38){result0="&";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"&\"");}}if(result0===null){if(input.charCodeAt(pos)===61){result0="=";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result0===null){if(input.charCodeAt(pos)===43){result0="+";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result0===null){if(input.charCodeAt(pos)===36){result0="$";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"$\"");}}if(result0===null){if(input.charCodeAt(pos)===44){result0=",";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\",\"");}}if(result0===null){if(input.charCodeAt(pos)===59){result0=";";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\";\"");}}if(result0===null){if(input.charCodeAt(pos)===63){result0="?";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"?\"");}}if(result0===null){if(input.charCodeAt(pos)===47){result0="/";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"/\"");}}}}}}}}}return result0;}function parse_password(){var result0,result1;var pos0;pos0=pos;result0=[];result1=parse_unreserved();if(result1===null){result1=parse_escaped();if(result1===null){if(input.charCodeAt(pos)===38){result1="&";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"&\"");}}if(result1===null){if(input.charCodeAt(pos)===61){result1="=";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result1===null){if(input.charCodeAt(pos)===43){result1="+";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result1===null){if(input.charCodeAt(pos)===36){result1="$";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"$\"");}}if(result1===null){if(input.charCodeAt(pos)===44){result1=",";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\",\"");}}}}}}}}while(result1!==null){result0.push(result1);result1=parse_unreserved();if(result1===null){result1=parse_escaped();if(result1===null){if(input.charCodeAt(pos)===38){result1="&";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"&\"");}}if(result1===null){if(input.charCodeAt(pos)===61){result1="=";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result1===null){if(input.charCodeAt(pos)===43){result1="+";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result1===null){if(input.charCodeAt(pos)===36){result1="$";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"$\"");}}if(result1===null){if(input.charCodeAt(pos)===44){result1=",";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\",\"");}}}}}}}}}if(result0!==null){result0=function(offset){data.password=input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_hostport(){var result0,result1,result2;var pos0,pos1;pos0=pos;result0=parse_host();if(result0!==null){pos1=pos;if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_port();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos1;}}else{result1=null;pos=pos1;}result1=result1!==null?result1:"";if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_host(){var result0;var pos0;pos0=pos;result0=parse_hostname();if(result0===null){result0=parse_IPv4address();if(result0===null){result0=parse_IPv6reference();}}if(result0!==null){result0=function(offset){data.host=input.substring(pos,offset).toLowerCase();return data.host;}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_hostname(){var result0,result1,result2;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=[];pos2=pos;result1=parse_domainlabel();if(result1!==null){if(input.charCodeAt(pos)===46){result2=".";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\".\"");}}if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}while(result1!==null){result0.push(result1);pos2=pos;result1=parse_domainlabel();if(result1!==null){if(input.charCodeAt(pos)===46){result2=".";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\".\"");}}if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}}if(result0!==null){result1=parse_toplabel();if(result1!==null){if(input.charCodeAt(pos)===46){result2=".";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\".\"");}}result2=result2!==null?result2:"";if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){data.host_type='domain';return input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_domainlabel(){var result0,result1,result2;var pos0;pos0=pos;result0=parse_alphanum();if(result0!==null){result1=[];result2=parse_alphanum();if(result2===null){if(input.charCodeAt(pos)===45){result2="-";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result2===null){if(input.charCodeAt(pos)===95){result2="_";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"_\"");}}}}while(result2!==null){result1.push(result2);result2=parse_alphanum();if(result2===null){if(input.charCodeAt(pos)===45){result2="-";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result2===null){if(input.charCodeAt(pos)===95){result2="_";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"_\"");}}}}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_toplabel(){var result0,result1,result2;var pos0;pos0=pos;result0=parse_ALPHA();if(result0!==null){result1=[];result2=parse_alphanum();if(result2===null){if(input.charCodeAt(pos)===45){result2="-";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result2===null){if(input.charCodeAt(pos)===95){result2="_";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"_\"");}}}}while(result2!==null){result1.push(result2);result2=parse_alphanum();if(result2===null){if(input.charCodeAt(pos)===45){result2="-";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result2===null){if(input.charCodeAt(pos)===95){result2="_";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"_\"");}}}}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_IPv6reference(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.charCodeAt(pos)===91){result0="[";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"[\"");}}if(result0!==null){result1=parse_IPv6address();if(result1!==null){if(input.charCodeAt(pos)===93){result2="]";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"]\"");}}if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){data.host_type='IPv6';return input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_IPv6address(){var result0,result1,result2,result3,result4,result5,result6,result7,result8,result9,result10,result11,result12;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_h16();if(result0!==null){if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_h16();if(result2!==null){if(input.charCodeAt(pos)===58){result3=":";pos++;}else{result3=null;if(reportFailures===0){matchFailed("\":\"");}}if(result3!==null){result4=parse_h16();if(result4!==null){if(input.charCodeAt(pos)===58){result5=":";pos++;}else{result5=null;if(reportFailures===0){matchFailed("\":\"");}}if(result5!==null){result6=parse_h16();if(result6!==null){if(input.charCodeAt(pos)===58){result7=":";pos++;}else{result7=null;if(reportFailures===0){matchFailed("\":\"");}}if(result7!==null){result8=parse_h16();if(result8!==null){if(input.charCodeAt(pos)===58){result9=":";pos++;}else{result9=null;if(reportFailures===0){matchFailed("\":\"");}}if(result9!==null){result10=parse_h16();if(result10!==null){if(input.charCodeAt(pos)===58){result11=":";pos++;}else{result11=null;if(reportFailures===0){matchFailed("\":\"");}}if(result11!==null){result12=parse_ls32();if(result12!==null){result0=[result0,result1,result2,result3,result4,result5,result6,result7,result8,result9,result10,result11,result12];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;if(input.substr(pos,2)==="::"){result0="::";pos+=2;}else{result0=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result0!==null){result1=parse_h16();if(result1!==null){if(input.charCodeAt(pos)===58){result2=":";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\":\"");}}if(result2!==null){result3=parse_h16();if(result3!==null){if(input.charCodeAt(pos)===58){result4=":";pos++;}else{result4=null;if(reportFailures===0){matchFailed("\":\"");}}if(result4!==null){result5=parse_h16();if(result5!==null){if(input.charCodeAt(pos)===58){result6=":";pos++;}else{result6=null;if(reportFailures===0){matchFailed("\":\"");}}if(result6!==null){result7=parse_h16();if(result7!==null){if(input.charCodeAt(pos)===58){result8=":";pos++;}else{result8=null;if(reportFailures===0){matchFailed("\":\"");}}if(result8!==null){result9=parse_h16();if(result9!==null){if(input.charCodeAt(pos)===58){result10=":";pos++;}else{result10=null;if(reportFailures===0){matchFailed("\":\"");}}if(result10!==null){result11=parse_ls32();if(result11!==null){result0=[result0,result1,result2,result3,result4,result5,result6,result7,result8,result9,result10,result11];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;if(input.substr(pos,2)==="::"){result0="::";pos+=2;}else{result0=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result0!==null){result1=parse_h16();if(result1!==null){if(input.charCodeAt(pos)===58){result2=":";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\":\"");}}if(result2!==null){result3=parse_h16();if(result3!==null){if(input.charCodeAt(pos)===58){result4=":";pos++;}else{result4=null;if(reportFailures===0){matchFailed("\":\"");}}if(result4!==null){result5=parse_h16();if(result5!==null){if(input.charCodeAt(pos)===58){result6=":";pos++;}else{result6=null;if(reportFailures===0){matchFailed("\":\"");}}if(result6!==null){result7=parse_h16();if(result7!==null){if(input.charCodeAt(pos)===58){result8=":";pos++;}else{result8=null;if(reportFailures===0){matchFailed("\":\"");}}if(result8!==null){result9=parse_ls32();if(result9!==null){result0=[result0,result1,result2,result3,result4,result5,result6,result7,result8,result9];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;if(input.substr(pos,2)==="::"){result0="::";pos+=2;}else{result0=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result0!==null){result1=parse_h16();if(result1!==null){if(input.charCodeAt(pos)===58){result2=":";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\":\"");}}if(result2!==null){result3=parse_h16();if(result3!==null){if(input.charCodeAt(pos)===58){result4=":";pos++;}else{result4=null;if(reportFailures===0){matchFailed("\":\"");}}if(result4!==null){result5=parse_h16();if(result5!==null){if(input.charCodeAt(pos)===58){result6=":";pos++;}else{result6=null;if(reportFailures===0){matchFailed("\":\"");}}if(result6!==null){result7=parse_ls32();if(result7!==null){result0=[result0,result1,result2,result3,result4,result5,result6,result7];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;if(input.substr(pos,2)==="::"){result0="::";pos+=2;}else{result0=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result0!==null){result1=parse_h16();if(result1!==null){if(input.charCodeAt(pos)===58){result2=":";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\":\"");}}if(result2!==null){result3=parse_h16();if(result3!==null){if(input.charCodeAt(pos)===58){result4=":";pos++;}else{result4=null;if(reportFailures===0){matchFailed("\":\"");}}if(result4!==null){result5=parse_ls32();if(result5!==null){result0=[result0,result1,result2,result3,result4,result5];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;if(input.substr(pos,2)==="::"){result0="::";pos+=2;}else{result0=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result0!==null){result1=parse_h16();if(result1!==null){if(input.charCodeAt(pos)===58){result2=":";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\":\"");}}if(result2!==null){result3=parse_ls32();if(result3!==null){result0=[result0,result1,result2,result3];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;if(input.substr(pos,2)==="::"){result0="::";pos+=2;}else{result0=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result0!==null){result1=parse_ls32();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;if(input.substr(pos,2)==="::"){result0="::";pos+=2;}else{result0=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result0!==null){result1=parse_h16();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;result0=parse_h16();if(result0!==null){if(input.substr(pos,2)==="::"){result1="::";pos+=2;}else{result1=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result1!==null){result2=parse_h16();if(result2!==null){if(input.charCodeAt(pos)===58){result3=":";pos++;}else{result3=null;if(reportFailures===0){matchFailed("\":\"");}}if(result3!==null){result4=parse_h16();if(result4!==null){if(input.charCodeAt(pos)===58){result5=":";pos++;}else{result5=null;if(reportFailures===0){matchFailed("\":\"");}}if(result5!==null){result6=parse_h16();if(result6!==null){if(input.charCodeAt(pos)===58){result7=":";pos++;}else{result7=null;if(reportFailures===0){matchFailed("\":\"");}}if(result7!==null){result8=parse_h16();if(result8!==null){if(input.charCodeAt(pos)===58){result9=":";pos++;}else{result9=null;if(reportFailures===0){matchFailed("\":\"");}}if(result9!==null){result10=parse_ls32();if(result10!==null){result0=[result0,result1,result2,result3,result4,result5,result6,result7,result8,result9,result10];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;result0=parse_h16();if(result0!==null){pos2=pos;if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_h16();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){if(input.substr(pos,2)==="::"){result2="::";pos+=2;}else{result2=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result2!==null){result3=parse_h16();if(result3!==null){if(input.charCodeAt(pos)===58){result4=":";pos++;}else{result4=null;if(reportFailures===0){matchFailed("\":\"");}}if(result4!==null){result5=parse_h16();if(result5!==null){if(input.charCodeAt(pos)===58){result6=":";pos++;}else{result6=null;if(reportFailures===0){matchFailed("\":\"");}}if(result6!==null){result7=parse_h16();if(result7!==null){if(input.charCodeAt(pos)===58){result8=":";pos++;}else{result8=null;if(reportFailures===0){matchFailed("\":\"");}}if(result8!==null){result9=parse_ls32();if(result9!==null){result0=[result0,result1,result2,result3,result4,result5,result6,result7,result8,result9];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;result0=parse_h16();if(result0!==null){pos2=pos;if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_h16();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){pos2=pos;if(input.charCodeAt(pos)===58){result2=":";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\":\"");}}if(result2!==null){result3=parse_h16();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}result2=result2!==null?result2:"";if(result2!==null){if(input.substr(pos,2)==="::"){result3="::";pos+=2;}else{result3=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result3!==null){result4=parse_h16();if(result4!==null){if(input.charCodeAt(pos)===58){result5=":";pos++;}else{result5=null;if(reportFailures===0){matchFailed("\":\"");}}if(result5!==null){result6=parse_h16();if(result6!==null){if(input.charCodeAt(pos)===58){result7=":";pos++;}else{result7=null;if(reportFailures===0){matchFailed("\":\"");}}if(result7!==null){result8=parse_ls32();if(result8!==null){result0=[result0,result1,result2,result3,result4,result5,result6,result7,result8];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;result0=parse_h16();if(result0!==null){pos2=pos;if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_h16();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){pos2=pos;if(input.charCodeAt(pos)===58){result2=":";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\":\"");}}if(result2!==null){result3=parse_h16();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}result2=result2!==null?result2:"";if(result2!==null){pos2=pos;if(input.charCodeAt(pos)===58){result3=":";pos++;}else{result3=null;if(reportFailures===0){matchFailed("\":\"");}}if(result3!==null){result4=parse_h16();if(result4!==null){result3=[result3,result4];}else{result3=null;pos=pos2;}}else{result3=null;pos=pos2;}result3=result3!==null?result3:"";if(result3!==null){if(input.substr(pos,2)==="::"){result4="::";pos+=2;}else{result4=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result4!==null){result5=parse_h16();if(result5!==null){if(input.charCodeAt(pos)===58){result6=":";pos++;}else{result6=null;if(reportFailures===0){matchFailed("\":\"");}}if(result6!==null){result7=parse_ls32();if(result7!==null){result0=[result0,result1,result2,result3,result4,result5,result6,result7];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;result0=parse_h16();if(result0!==null){pos2=pos;if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_h16();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){pos2=pos;if(input.charCodeAt(pos)===58){result2=":";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\":\"");}}if(result2!==null){result3=parse_h16();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}result2=result2!==null?result2:"";if(result2!==null){pos2=pos;if(input.charCodeAt(pos)===58){result3=":";pos++;}else{result3=null;if(reportFailures===0){matchFailed("\":\"");}}if(result3!==null){result4=parse_h16();if(result4!==null){result3=[result3,result4];}else{result3=null;pos=pos2;}}else{result3=null;pos=pos2;}result3=result3!==null?result3:"";if(result3!==null){pos2=pos;if(input.charCodeAt(pos)===58){result4=":";pos++;}else{result4=null;if(reportFailures===0){matchFailed("\":\"");}}if(result4!==null){result5=parse_h16();if(result5!==null){result4=[result4,result5];}else{result4=null;pos=pos2;}}else{result4=null;pos=pos2;}result4=result4!==null?result4:"";if(result4!==null){if(input.substr(pos,2)==="::"){result5="::";pos+=2;}else{result5=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result5!==null){result6=parse_ls32();if(result6!==null){result0=[result0,result1,result2,result3,result4,result5,result6];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;result0=parse_h16();if(result0!==null){pos2=pos;if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_h16();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){pos2=pos;if(input.charCodeAt(pos)===58){result2=":";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\":\"");}}if(result2!==null){result3=parse_h16();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}result2=result2!==null?result2:"";if(result2!==null){pos2=pos;if(input.charCodeAt(pos)===58){result3=":";pos++;}else{result3=null;if(reportFailures===0){matchFailed("\":\"");}}if(result3!==null){result4=parse_h16();if(result4!==null){result3=[result3,result4];}else{result3=null;pos=pos2;}}else{result3=null;pos=pos2;}result3=result3!==null?result3:"";if(result3!==null){pos2=pos;if(input.charCodeAt(pos)===58){result4=":";pos++;}else{result4=null;if(reportFailures===0){matchFailed("\":\"");}}if(result4!==null){result5=parse_h16();if(result5!==null){result4=[result4,result5];}else{result4=null;pos=pos2;}}else{result4=null;pos=pos2;}result4=result4!==null?result4:"";if(result4!==null){pos2=pos;if(input.charCodeAt(pos)===58){result5=":";pos++;}else{result5=null;if(reportFailures===0){matchFailed("\":\"");}}if(result5!==null){result6=parse_h16();if(result6!==null){result5=[result5,result6];}else{result5=null;pos=pos2;}}else{result5=null;pos=pos2;}result5=result5!==null?result5:"";if(result5!==null){if(input.substr(pos,2)==="::"){result6="::";pos+=2;}else{result6=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result6!==null){result7=parse_h16();if(result7!==null){result0=[result0,result1,result2,result3,result4,result5,result6,result7];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){pos1=pos;result0=parse_h16();if(result0!==null){pos2=pos;if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_h16();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){pos2=pos;if(input.charCodeAt(pos)===58){result2=":";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\":\"");}}if(result2!==null){result3=parse_h16();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}result2=result2!==null?result2:"";if(result2!==null){pos2=pos;if(input.charCodeAt(pos)===58){result3=":";pos++;}else{result3=null;if(reportFailures===0){matchFailed("\":\"");}}if(result3!==null){result4=parse_h16();if(result4!==null){result3=[result3,result4];}else{result3=null;pos=pos2;}}else{result3=null;pos=pos2;}result3=result3!==null?result3:"";if(result3!==null){pos2=pos;if(input.charCodeAt(pos)===58){result4=":";pos++;}else{result4=null;if(reportFailures===0){matchFailed("\":\"");}}if(result4!==null){result5=parse_h16();if(result5!==null){result4=[result4,result5];}else{result4=null;pos=pos2;}}else{result4=null;pos=pos2;}result4=result4!==null?result4:"";if(result4!==null){pos2=pos;if(input.charCodeAt(pos)===58){result5=":";pos++;}else{result5=null;if(reportFailures===0){matchFailed("\":\"");}}if(result5!==null){result6=parse_h16();if(result6!==null){result5=[result5,result6];}else{result5=null;pos=pos2;}}else{result5=null;pos=pos2;}result5=result5!==null?result5:"";if(result5!==null){pos2=pos;if(input.charCodeAt(pos)===58){result6=":";pos++;}else{result6=null;if(reportFailures===0){matchFailed("\":\"");}}if(result6!==null){result7=parse_h16();if(result7!==null){result6=[result6,result7];}else{result6=null;pos=pos2;}}else{result6=null;pos=pos2;}result6=result6!==null?result6:"";if(result6!==null){if(input.substr(pos,2)==="::"){result7="::";pos+=2;}else{result7=null;if(reportFailures===0){matchFailed("\"::\"");}}if(result7!==null){result0=[result0,result1,result2,result3,result4,result5,result6,result7];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}}}}}}}}}}}}}}if(result0!==null){result0=function(offset){data.host_type='IPv6';return input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_h16(){var result0,result1,result2,result3;var pos0;pos0=pos;result0=parse_HEXDIG();if(result0!==null){result1=parse_HEXDIG();result1=result1!==null?result1:"";if(result1!==null){result2=parse_HEXDIG();result2=result2!==null?result2:"";if(result2!==null){result3=parse_HEXDIG();result3=result3!==null?result3:"";if(result3!==null){result0=[result0,result1,result2,result3];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_ls32(){var result0,result1,result2;var pos0;pos0=pos;result0=parse_h16();if(result0!==null){if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_h16();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}if(result0===null){result0=parse_IPv4address();}return result0;}function parse_IPv4address(){var result0,result1,result2,result3,result4,result5,result6;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_dec_octet();if(result0!==null){if(input.charCodeAt(pos)===46){result1=".";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\".\"");}}if(result1!==null){result2=parse_dec_octet();if(result2!==null){if(input.charCodeAt(pos)===46){result3=".";pos++;}else{result3=null;if(reportFailures===0){matchFailed("\".\"");}}if(result3!==null){result4=parse_dec_octet();if(result4!==null){if(input.charCodeAt(pos)===46){result5=".";pos++;}else{result5=null;if(reportFailures===0){matchFailed("\".\"");}}if(result5!==null){result6=parse_dec_octet();if(result6!==null){result0=[result0,result1,result2,result3,result4,result5,result6];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){data.host_type='IPv4';return input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_dec_octet(){var result0,result1,result2;var pos0;pos0=pos;if(input.substr(pos,2)==="25"){result0="25";pos+=2;}else{result0=null;if(reportFailures===0){matchFailed("\"25\"");}}if(result0!==null){if(/^[0-5]/.test(input.charAt(pos))){result1=input.charAt(pos);pos++;}else{result1=null;if(reportFailures===0){matchFailed("[0-5]");}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}if(result0===null){pos0=pos;if(input.charCodeAt(pos)===50){result0="2";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"2\"");}}if(result0!==null){if(/^[0-4]/.test(input.charAt(pos))){result1=input.charAt(pos);pos++;}else{result1=null;if(reportFailures===0){matchFailed("[0-4]");}}if(result1!==null){result2=parse_DIGIT();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}if(result0===null){pos0=pos;if(input.charCodeAt(pos)===49){result0="1";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"1\"");}}if(result0!==null){result1=parse_DIGIT();if(result1!==null){result2=parse_DIGIT();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}if(result0===null){pos0=pos;if(/^[1-9]/.test(input.charAt(pos))){result0=input.charAt(pos);pos++;}else{result0=null;if(reportFailures===0){matchFailed("[1-9]");}}if(result0!==null){result1=parse_DIGIT();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}if(result0===null){result0=parse_DIGIT();}}}}return result0;}function parse_port(){var result0,result1,result2,result3,result4;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_DIGIT();result0=result0!==null?result0:"";if(result0!==null){result1=parse_DIGIT();result1=result1!==null?result1:"";if(result1!==null){result2=parse_DIGIT();result2=result2!==null?result2:"";if(result2!==null){result3=parse_DIGIT();result3=result3!==null?result3:"";if(result3!==null){result4=parse_DIGIT();result4=result4!==null?result4:"";if(result4!==null){result0=[result0,result1,result2,result3,result4];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,port){port=parseInt(port.join(''));data.port=port;return port;}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_uri_parameters(){var result0,result1,result2;var pos0;result0=[];pos0=pos;if(input.charCodeAt(pos)===59){result1=";";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\";\"");}}if(result1!==null){result2=parse_uri_parameter();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos0;}}else{result1=null;pos=pos0;}while(result1!==null){result0.push(result1);pos0=pos;if(input.charCodeAt(pos)===59){result1=";";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\";\"");}}if(result1!==null){result2=parse_uri_parameter();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos0;}}else{result1=null;pos=pos0;}}return result0;}function parse_uri_parameter(){var result0;result0=parse_transport_param();if(result0===null){result0=parse_user_param();if(result0===null){result0=parse_method_param();if(result0===null){result0=parse_ttl_param();if(result0===null){result0=parse_maddr_param();if(result0===null){result0=parse_lr_param();if(result0===null){result0=parse_other_param();}}}}}}return result0;}function parse_transport_param(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,10).toLowerCase()==="transport="){result0=input.substr(pos,10);pos+=10;}else{result0=null;if(reportFailures===0){matchFailed("\"transport=\"");}}if(result0!==null){if(input.substr(pos,3).toLowerCase()==="udp"){result1=input.substr(pos,3);pos+=3;}else{result1=null;if(reportFailures===0){matchFailed("\"udp\"");}}if(result1===null){if(input.substr(pos,3).toLowerCase()==="tcp"){result1=input.substr(pos,3);pos+=3;}else{result1=null;if(reportFailures===0){matchFailed("\"tcp\"");}}if(result1===null){if(input.substr(pos,4).toLowerCase()==="sctp"){result1=input.substr(pos,4);pos+=4;}else{result1=null;if(reportFailures===0){matchFailed("\"sctp\"");}}if(result1===null){if(input.substr(pos,3).toLowerCase()==="tls"){result1=input.substr(pos,3);pos+=3;}else{result1=null;if(reportFailures===0){matchFailed("\"tls\"");}}if(result1===null){result1=parse_token();}}}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,transport){if(!data.uri_params)data.uri_params={};data.uri_params['transport']=transport.toLowerCase();}(pos0,result0[1]);}if(result0===null){pos=pos0;}return result0;}function parse_user_param(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,5).toLowerCase()==="user="){result0=input.substr(pos,5);pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"user=\"");}}if(result0!==null){if(input.substr(pos,5).toLowerCase()==="phone"){result1=input.substr(pos,5);pos+=5;}else{result1=null;if(reportFailures===0){matchFailed("\"phone\"");}}if(result1===null){if(input.substr(pos,2).toLowerCase()==="ip"){result1=input.substr(pos,2);pos+=2;}else{result1=null;if(reportFailures===0){matchFailed("\"ip\"");}}if(result1===null){result1=parse_token();}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,user){if(!data.uri_params)data.uri_params={};data.uri_params['user']=user.toLowerCase();}(pos0,result0[1]);}if(result0===null){pos=pos0;}return result0;}function parse_method_param(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,7).toLowerCase()==="method="){result0=input.substr(pos,7);pos+=7;}else{result0=null;if(reportFailures===0){matchFailed("\"method=\"");}}if(result0!==null){result1=parse_Method();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,method){if(!data.uri_params)data.uri_params={};data.uri_params['method']=method;}(pos0,result0[1]);}if(result0===null){pos=pos0;}return result0;}function parse_ttl_param(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,4).toLowerCase()==="ttl="){result0=input.substr(pos,4);pos+=4;}else{result0=null;if(reportFailures===0){matchFailed("\"ttl=\"");}}if(result0!==null){result1=parse_ttl();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,ttl){if(!data.params)data.params={};data.params['ttl']=ttl;}(pos0,result0[1]);}if(result0===null){pos=pos0;}return result0;}function parse_maddr_param(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,6).toLowerCase()==="maddr="){result0=input.substr(pos,6);pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"maddr=\"");}}if(result0!==null){result1=parse_host();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,maddr){if(!data.uri_params)data.uri_params={};data.uri_params['maddr']=maddr;}(pos0,result0[1]);}if(result0===null){pos=pos0;}return result0;}function parse_lr_param(){var result0,result1,result2;var pos0,pos1,pos2;pos0=pos;pos1=pos;if(input.substr(pos,2).toLowerCase()==="lr"){result0=input.substr(pos,2);pos+=2;}else{result0=null;if(reportFailures===0){matchFailed("\"lr\"");}}if(result0!==null){pos2=pos;if(input.charCodeAt(pos)===61){result1="=";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result1!==null){result2=parse_token();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){if(!data.uri_params)data.uri_params={};data.uri_params['lr']=undefined;}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_other_param(){var result0,result1,result2;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_pname();if(result0!==null){pos2=pos;if(input.charCodeAt(pos)===61){result1="=";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result1!==null){result2=parse_pvalue();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,param,value){if(!data.uri_params)data.uri_params={};if(typeof value==='undefined'){value=undefined;}else{value=value[1];}data.uri_params[param.toLowerCase()]=value;}(pos0,result0[0],result0[1]);}if(result0===null){pos=pos0;}return result0;}function parse_pname(){var result0,result1;var pos0;pos0=pos;result1=parse_paramchar();if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_paramchar();}}else{result0=null;}if(result0!==null){result0=function(offset,pname){return pname.join('');}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_pvalue(){var result0,result1;var pos0;pos0=pos;result1=parse_paramchar();if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_paramchar();}}else{result0=null;}if(result0!==null){result0=function(offset,pvalue){return pvalue.join('');}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_paramchar(){var result0;result0=parse_param_unreserved();if(result0===null){result0=parse_unreserved();if(result0===null){result0=parse_escaped();}}return result0;}function parse_param_unreserved(){var result0;if(input.charCodeAt(pos)===91){result0="[";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"[\"");}}if(result0===null){if(input.charCodeAt(pos)===93){result0="]";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"]\"");}}if(result0===null){if(input.charCodeAt(pos)===47){result0="/";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"/\"");}}if(result0===null){if(input.charCodeAt(pos)===58){result0=":";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\":\"");}}if(result0===null){if(input.charCodeAt(pos)===38){result0="&";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"&\"");}}if(result0===null){if(input.charCodeAt(pos)===43){result0="+";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result0===null){if(input.charCodeAt(pos)===36){result0="$";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"$\"");}}}}}}}}return result0;}function parse_headers(){var result0,result1,result2,result3,result4;var pos0,pos1;pos0=pos;if(input.charCodeAt(pos)===63){result0="?";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"?\"");}}if(result0!==null){result1=parse_header();if(result1!==null){result2=[];pos1=pos;if(input.charCodeAt(pos)===38){result3="&";pos++;}else{result3=null;if(reportFailures===0){matchFailed("\"&\"");}}if(result3!==null){result4=parse_header();if(result4!==null){result3=[result3,result4];}else{result3=null;pos=pos1;}}else{result3=null;pos=pos1;}while(result3!==null){result2.push(result3);pos1=pos;if(input.charCodeAt(pos)===38){result3="&";pos++;}else{result3=null;if(reportFailures===0){matchFailed("\"&\"");}}if(result3!==null){result4=parse_header();if(result4!==null){result3=[result3,result4];}else{result3=null;pos=pos1;}}else{result3=null;pos=pos1;}}if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_header(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_hname();if(result0!==null){if(input.charCodeAt(pos)===61){result1="=";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result1!==null){result2=parse_hvalue();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,hname,hvalue){hname=hname.join('').toLowerCase();hvalue=hvalue.join('');if(!data.uri_headers)data.uri_headers={};if(!data.uri_headers[hname]){data.uri_headers[hname]=[hvalue];}else{data.uri_headers[hname].push(hvalue);}}(pos0,result0[0],result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_hname(){var result0,result1;result1=parse_hnv_unreserved();if(result1===null){result1=parse_unreserved();if(result1===null){result1=parse_escaped();}}if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_hnv_unreserved();if(result1===null){result1=parse_unreserved();if(result1===null){result1=parse_escaped();}}}}else{result0=null;}return result0;}function parse_hvalue(){var result0,result1;result0=[];result1=parse_hnv_unreserved();if(result1===null){result1=parse_unreserved();if(result1===null){result1=parse_escaped();}}while(result1!==null){result0.push(result1);result1=parse_hnv_unreserved();if(result1===null){result1=parse_unreserved();if(result1===null){result1=parse_escaped();}}}return result0;}function parse_hnv_unreserved(){var result0;if(input.charCodeAt(pos)===91){result0="[";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"[\"");}}if(result0===null){if(input.charCodeAt(pos)===93){result0="]";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"]\"");}}if(result0===null){if(input.charCodeAt(pos)===47){result0="/";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"/\"");}}if(result0===null){if(input.charCodeAt(pos)===63){result0="?";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"?\"");}}if(result0===null){if(input.charCodeAt(pos)===58){result0=":";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\":\"");}}if(result0===null){if(input.charCodeAt(pos)===43){result0="+";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result0===null){if(input.charCodeAt(pos)===36){result0="$";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"$\"");}}}}}}}}return result0;}function parse_Request_Response(){var result0;result0=parse_Status_Line();if(result0===null){result0=parse_Request_Line();}return result0;}function parse_Request_Line(){var result0,result1,result2,result3,result4;var pos0;pos0=pos;result0=parse_Method();if(result0!==null){result1=parse_SP();if(result1!==null){result2=parse_Request_URI();if(result2!==null){result3=parse_SP();if(result3!==null){result4=parse_SIP_Version();if(result4!==null){result0=[result0,result1,result2,result3,result4];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_Request_URI(){var result0;result0=parse_SIP_URI();if(result0===null){result0=parse_absoluteURI();}return result0;}function parse_absoluteURI(){var result0,result1,result2;var pos0;pos0=pos;result0=parse_scheme();if(result0!==null){if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1!==null){result2=parse_hier_part();if(result2===null){result2=parse_opaque_part();}if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_hier_part(){var result0,result1,result2;var pos0,pos1;pos0=pos;result0=parse_net_path();if(result0===null){result0=parse_abs_path();}if(result0!==null){pos1=pos;if(input.charCodeAt(pos)===63){result1="?";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"?\"");}}if(result1!==null){result2=parse_query();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos1;}}else{result1=null;pos=pos1;}result1=result1!==null?result1:"";if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_net_path(){var result0,result1,result2;var pos0;pos0=pos;if(input.substr(pos,2)==="//"){result0="//";pos+=2;}else{result0=null;if(reportFailures===0){matchFailed("\"//\"");}}if(result0!==null){result1=parse_authority();if(result1!==null){result2=parse_abs_path();result2=result2!==null?result2:"";if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_abs_path(){var result0,result1;var pos0;pos0=pos;if(input.charCodeAt(pos)===47){result0="/";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"/\"");}}if(result0!==null){result1=parse_path_segments();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_opaque_part(){var result0,result1,result2;var pos0;pos0=pos;result0=parse_uric_no_slash();if(result0!==null){result1=[];result2=parse_uric();while(result2!==null){result1.push(result2);result2=parse_uric();}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_uric(){var result0;result0=parse_reserved();if(result0===null){result0=parse_unreserved();if(result0===null){result0=parse_escaped();}}return result0;}function parse_uric_no_slash(){var result0;result0=parse_unreserved();if(result0===null){result0=parse_escaped();if(result0===null){if(input.charCodeAt(pos)===59){result0=";";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\";\"");}}if(result0===null){if(input.charCodeAt(pos)===63){result0="?";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"?\"");}}if(result0===null){if(input.charCodeAt(pos)===58){result0=":";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\":\"");}}if(result0===null){if(input.charCodeAt(pos)===64){result0="@";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"@\"");}}if(result0===null){if(input.charCodeAt(pos)===38){result0="&";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"&\"");}}if(result0===null){if(input.charCodeAt(pos)===61){result0="=";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result0===null){if(input.charCodeAt(pos)===43){result0="+";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result0===null){if(input.charCodeAt(pos)===36){result0="$";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"$\"");}}if(result0===null){if(input.charCodeAt(pos)===44){result0=",";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\",\"");}}}}}}}}}}}}return result0;}function parse_path_segments(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_segment();if(result0!==null){result1=[];pos1=pos;if(input.charCodeAt(pos)===47){result2="/";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"/\"");}}if(result2!==null){result3=parse_segment();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;if(input.charCodeAt(pos)===47){result2="/";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"/\"");}}if(result2!==null){result3=parse_segment();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_segment(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=[];result1=parse_pchar();while(result1!==null){result0.push(result1);result1=parse_pchar();}if(result0!==null){result1=[];pos1=pos;if(input.charCodeAt(pos)===59){result2=";";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\";\"");}}if(result2!==null){result3=parse_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;if(input.charCodeAt(pos)===59){result2=";";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\";\"");}}if(result2!==null){result3=parse_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_param(){var result0,result1;result0=[];result1=parse_pchar();while(result1!==null){result0.push(result1);result1=parse_pchar();}return result0;}function parse_pchar(){var result0;result0=parse_unreserved();if(result0===null){result0=parse_escaped();if(result0===null){if(input.charCodeAt(pos)===58){result0=":";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\":\"");}}if(result0===null){if(input.charCodeAt(pos)===64){result0="@";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"@\"");}}if(result0===null){if(input.charCodeAt(pos)===38){result0="&";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"&\"");}}if(result0===null){if(input.charCodeAt(pos)===61){result0="=";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result0===null){if(input.charCodeAt(pos)===43){result0="+";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result0===null){if(input.charCodeAt(pos)===36){result0="$";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"$\"");}}if(result0===null){if(input.charCodeAt(pos)===44){result0=",";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\",\"");}}}}}}}}}}return result0;}function parse_scheme(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_ALPHA();if(result0!==null){result1=[];result2=parse_ALPHA();if(result2===null){result2=parse_DIGIT();if(result2===null){if(input.charCodeAt(pos)===43){result2="+";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result2===null){if(input.charCodeAt(pos)===45){result2="-";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result2===null){if(input.charCodeAt(pos)===46){result2=".";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\".\"");}}}}}}while(result2!==null){result1.push(result2);result2=parse_ALPHA();if(result2===null){result2=parse_DIGIT();if(result2===null){if(input.charCodeAt(pos)===43){result2="+";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"+\"");}}if(result2===null){if(input.charCodeAt(pos)===45){result2="-";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result2===null){if(input.charCodeAt(pos)===46){result2=".";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\".\"");}}}}}}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){data.scheme=input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_authority(){var result0;result0=parse_srvr();if(result0===null){result0=parse_reg_name();}return result0;}function parse_srvr(){var result0,result1;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_userinfo();if(result0!==null){if(input.charCodeAt(pos)===64){result1="@";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"@\"");}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}result0=result0!==null?result0:"";if(result0!==null){result1=parse_hostport();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}result0=result0!==null?result0:"";return result0;}function parse_reg_name(){var result0,result1;result1=parse_unreserved();if(result1===null){result1=parse_escaped();if(result1===null){if(input.charCodeAt(pos)===36){result1="$";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"$\"");}}if(result1===null){if(input.charCodeAt(pos)===44){result1=",";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\",\"");}}if(result1===null){if(input.charCodeAt(pos)===59){result1=";";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\";\"");}}if(result1===null){if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1===null){if(input.charCodeAt(pos)===64){result1="@";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"@\"");}}if(result1===null){if(input.charCodeAt(pos)===38){result1="&";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"&\"");}}if(result1===null){if(input.charCodeAt(pos)===61){result1="=";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result1===null){if(input.charCodeAt(pos)===43){result1="+";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"+\"");}}}}}}}}}}}if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_unreserved();if(result1===null){result1=parse_escaped();if(result1===null){if(input.charCodeAt(pos)===36){result1="$";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"$\"");}}if(result1===null){if(input.charCodeAt(pos)===44){result1=",";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\",\"");}}if(result1===null){if(input.charCodeAt(pos)===59){result1=";";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\";\"");}}if(result1===null){if(input.charCodeAt(pos)===58){result1=":";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\":\"");}}if(result1===null){if(input.charCodeAt(pos)===64){result1="@";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"@\"");}}if(result1===null){if(input.charCodeAt(pos)===38){result1="&";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"&\"");}}if(result1===null){if(input.charCodeAt(pos)===61){result1="=";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"=\"");}}if(result1===null){if(input.charCodeAt(pos)===43){result1="+";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"+\"");}}}}}}}}}}}}}else{result0=null;}return result0;}function parse_query(){var result0,result1;result0=[];result1=parse_uric();while(result1!==null){result0.push(result1);result1=parse_uric();}return result0;}function parse_SIP_Version(){var result0,result1,result2,result3,result4,result5;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,3).toLowerCase()==="sip"){result0=input.substr(pos,3);pos+=3;}else{result0=null;if(reportFailures===0){matchFailed("\"SIP\"");}}if(result0!==null){if(input.charCodeAt(pos)===47){result1="/";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"/\"");}}if(result1!==null){result3=parse_DIGIT();if(result3!==null){result2=[];while(result3!==null){result2.push(result3);result3=parse_DIGIT();}}else{result2=null;}if(result2!==null){if(input.charCodeAt(pos)===46){result3=".";pos++;}else{result3=null;if(reportFailures===0){matchFailed("\".\"");}}if(result3!==null){result5=parse_DIGIT();if(result5!==null){result4=[];while(result5!==null){result4.push(result5);result5=parse_DIGIT();}}else{result4=null;}if(result4!==null){result0=[result0,result1,result2,result3,result4];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){data.sip_version=input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_INVITEm(){var result0;if(input.substr(pos,6)==="INVITE"){result0="INVITE";pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"INVITE\"");}}return result0;}function parse_ACKm(){var result0;if(input.substr(pos,3)==="ACK"){result0="ACK";pos+=3;}else{result0=null;if(reportFailures===0){matchFailed("\"ACK\"");}}return result0;}function parse_OPTIONSm(){var result0;if(input.substr(pos,7)==="OPTIONS"){result0="OPTIONS";pos+=7;}else{result0=null;if(reportFailures===0){matchFailed("\"OPTIONS\"");}}return result0;}function parse_BYEm(){var result0;if(input.substr(pos,3)==="BYE"){result0="BYE";pos+=3;}else{result0=null;if(reportFailures===0){matchFailed("\"BYE\"");}}return result0;}function parse_CANCELm(){var result0;if(input.substr(pos,6)==="CANCEL"){result0="CANCEL";pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"CANCEL\"");}}return result0;}function parse_REGISTERm(){var result0;if(input.substr(pos,8)==="REGISTER"){result0="REGISTER";pos+=8;}else{result0=null;if(reportFailures===0){matchFailed("\"REGISTER\"");}}return result0;}function parse_SUBSCRIBEm(){var result0;if(input.substr(pos,9)==="SUBSCRIBE"){result0="SUBSCRIBE";pos+=9;}else{result0=null;if(reportFailures===0){matchFailed("\"SUBSCRIBE\"");}}return result0;}function parse_NOTIFYm(){var result0;if(input.substr(pos,6)==="NOTIFY"){result0="NOTIFY";pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"NOTIFY\"");}}return result0;}function parse_REFERm(){var result0;if(input.substr(pos,5)==="REFER"){result0="REFER";pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"REFER\"");}}return result0;}function parse_Method(){var result0;var pos0;pos0=pos;result0=parse_INVITEm();if(result0===null){result0=parse_ACKm();if(result0===null){result0=parse_OPTIONSm();if(result0===null){result0=parse_BYEm();if(result0===null){result0=parse_CANCELm();if(result0===null){result0=parse_REGISTERm();if(result0===null){result0=parse_SUBSCRIBEm();if(result0===null){result0=parse_NOTIFYm();if(result0===null){result0=parse_REFERm();if(result0===null){result0=parse_token();}}}}}}}}}if(result0!==null){result0=function(offset){data.method=input.substring(pos,offset);return data.method;}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_Status_Line(){var result0,result1,result2,result3,result4;var pos0;pos0=pos;result0=parse_SIP_Version();if(result0!==null){result1=parse_SP();if(result1!==null){result2=parse_Status_Code();if(result2!==null){result3=parse_SP();if(result3!==null){result4=parse_Reason_Phrase();if(result4!==null){result0=[result0,result1,result2,result3,result4];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_Status_Code(){var result0;var pos0;pos0=pos;result0=parse_extension_code();if(result0!==null){result0=function(offset,status_code){data.status_code=parseInt(status_code.join(''));}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_extension_code(){var result0,result1,result2;var pos0;pos0=pos;result0=parse_DIGIT();if(result0!==null){result1=parse_DIGIT();if(result1!==null){result2=parse_DIGIT();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_Reason_Phrase(){var result0,result1;var pos0;pos0=pos;result0=[];result1=parse_reserved();if(result1===null){result1=parse_unreserved();if(result1===null){result1=parse_escaped();if(result1===null){result1=parse_UTF8_NONASCII();if(result1===null){result1=parse_UTF8_CONT();if(result1===null){result1=parse_SP();if(result1===null){result1=parse_HTAB();}}}}}}while(result1!==null){result0.push(result1);result1=parse_reserved();if(result1===null){result1=parse_unreserved();if(result1===null){result1=parse_escaped();if(result1===null){result1=parse_UTF8_NONASCII();if(result1===null){result1=parse_UTF8_CONT();if(result1===null){result1=parse_SP();if(result1===null){result1=parse_HTAB();}}}}}}}if(result0!==null){result0=function(offset){data.reason_phrase=input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_Allow_Events(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_event_type();if(result0!==null){result1=[];pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_event_type();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_event_type();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_Call_ID(){var result0,result1,result2;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_word();if(result0!==null){pos2=pos;if(input.charCodeAt(pos)===64){result1="@";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"@\"");}}if(result1!==null){result2=parse_word();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){data=input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_Contact(){var result0,result1,result2,result3;var pos0,pos1,pos2;pos0=pos;result0=parse_STAR();if(result0===null){pos1=pos;result0=parse_contact_param();if(result0!==null){result1=[];pos2=pos;result2=parse_COMMA();if(result2!==null){result3=parse_contact_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}while(result2!==null){result1.push(result2);pos2=pos;result2=parse_COMMA();if(result2!==null){result3=parse_contact_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}if(result0!==null){result0=function(offset){var idx,length;length=data.multi_header.length;for(idx=0;idx<length;idx++){if(data.multi_header[idx].parsed===null){data=null;break;}}if(data!==null){data=data.multi_header;}else{data=-1;}}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_contact_param(){var result0,result1,result2,result3;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_SIP_URI_noparams();if(result0===null){result0=parse_name_addr();}if(result0!==null){result1=[];pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_contact_params();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}while(result2!==null){result1.push(result2);pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_contact_params();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){var header;if(!data.multi_header)data.multi_header=[];try{header=new NameAddrHeader(data.uri,data.display_name,data.params);delete data.uri;delete data.display_name;delete data.params;}catch(e){header=null;}data.multi_header.push({'possition':pos,'offset':offset,'parsed':header});}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_name_addr(){var result0,result1,result2,result3;var pos0;pos0=pos;result0=parse_display_name();result0=result0!==null?result0:"";if(result0!==null){result1=parse_LAQUOT();if(result1!==null){result2=parse_SIP_URI();if(result2!==null){result3=parse_RAQUOT();if(result3!==null){result0=[result0,result1,result2,result3];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_display_name(){var result0,result1,result2,result3;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_token();if(result0!==null){result1=[];pos2=pos;result2=parse_LWS();if(result2!==null){result3=parse_token();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}while(result2!==null){result1.push(result2);pos2=pos;result2=parse_LWS();if(result2!==null){result3=parse_token();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0===null){result0=parse_quoted_string();}if(result0!==null){result0=function(offset,display_name){display_name=input.substring(pos,offset).trim();if(display_name[0]==='\"'){display_name=display_name.substring(1,display_name.length-1);}data.display_name=display_name;}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_contact_params(){var result0;result0=parse_c_p_q();if(result0===null){result0=parse_c_p_expires();if(result0===null){result0=parse_generic_param();}}return result0;}function parse_c_p_q(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,1).toLowerCase()==="q"){result0=input.substr(pos,1);pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"q\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_qvalue();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,q){if(!data.params)data.params={};data.params['q']=q;}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_c_p_expires(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,7).toLowerCase()==="expires"){result0=input.substr(pos,7);pos+=7;}else{result0=null;if(reportFailures===0){matchFailed("\"expires\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_delta_seconds();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,expires){if(!data.params)data.params={};data.params['expires']=expires;}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_delta_seconds(){var result0,result1;var pos0;pos0=pos;result1=parse_DIGIT();if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_DIGIT();}}else{result0=null;}if(result0!==null){result0=function(offset,delta_seconds){return parseInt(delta_seconds.join(''));}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_qvalue(){var result0,result1,result2,result3,result4;var pos0,pos1,pos2;pos0=pos;pos1=pos;if(input.charCodeAt(pos)===48){result0="0";pos++;}else{result0=null;if(reportFailures===0){matchFailed("\"0\"");}}if(result0!==null){pos2=pos;if(input.charCodeAt(pos)===46){result1=".";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\".\"");}}if(result1!==null){result2=parse_DIGIT();result2=result2!==null?result2:"";if(result2!==null){result3=parse_DIGIT();result3=result3!==null?result3:"";if(result3!==null){result4=parse_DIGIT();result4=result4!==null?result4:"";if(result4!==null){result1=[result1,result2,result3,result4];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){return parseFloat(input.substring(pos,offset));}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_generic_param(){var result0,result1,result2;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_token();if(result0!==null){pos2=pos;result1=parse_EQUAL();if(result1!==null){result2=parse_gen_value();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,param,value){if(!data.params)data.params={};if(typeof value==='undefined'){value=undefined;}else{value=value[1];}data.params[param.toLowerCase()]=value;}(pos0,result0[0],result0[1]);}if(result0===null){pos=pos0;}return result0;}function parse_gen_value(){var result0;result0=parse_token();if(result0===null){result0=parse_host();if(result0===null){result0=parse_quoted_string();}}return result0;}function parse_Content_Disposition(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_disp_type();if(result0!==null){result1=[];pos1=pos;result2=parse_SEMI();if(result2!==null){result3=parse_disp_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;result2=parse_SEMI();if(result2!==null){result3=parse_disp_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_disp_type(){var result0;if(input.substr(pos,6).toLowerCase()==="render"){result0=input.substr(pos,6);pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"render\"");}}if(result0===null){if(input.substr(pos,7).toLowerCase()==="session"){result0=input.substr(pos,7);pos+=7;}else{result0=null;if(reportFailures===0){matchFailed("\"session\"");}}if(result0===null){if(input.substr(pos,4).toLowerCase()==="icon"){result0=input.substr(pos,4);pos+=4;}else{result0=null;if(reportFailures===0){matchFailed("\"icon\"");}}if(result0===null){if(input.substr(pos,5).toLowerCase()==="alert"){result0=input.substr(pos,5);pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"alert\"");}}if(result0===null){result0=parse_token();}}}}return result0;}function parse_disp_param(){var result0;result0=parse_handling_param();if(result0===null){result0=parse_generic_param();}return result0;}function parse_handling_param(){var result0,result1,result2;var pos0;pos0=pos;if(input.substr(pos,8).toLowerCase()==="handling"){result0=input.substr(pos,8);pos+=8;}else{result0=null;if(reportFailures===0){matchFailed("\"handling\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){if(input.substr(pos,8).toLowerCase()==="optional"){result2=input.substr(pos,8);pos+=8;}else{result2=null;if(reportFailures===0){matchFailed("\"optional\"");}}if(result2===null){if(input.substr(pos,8).toLowerCase()==="required"){result2=input.substr(pos,8);pos+=8;}else{result2=null;if(reportFailures===0){matchFailed("\"required\"");}}if(result2===null){result2=parse_token();}}if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_Content_Encoding(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_token();if(result0!==null){result1=[];pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_token();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_token();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_Content_Length(){var result0,result1;var pos0;pos0=pos;result1=parse_DIGIT();if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_DIGIT();}}else{result0=null;}if(result0!==null){result0=function(offset,length){data=parseInt(length.join(''));}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_Content_Type(){var result0;var pos0;pos0=pos;result0=parse_media_type();if(result0!==null){result0=function(offset){data=input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_media_type(){var result0,result1,result2,result3,result4,result5;var pos0,pos1;pos0=pos;result0=parse_m_type();if(result0!==null){result1=parse_SLASH();if(result1!==null){result2=parse_m_subtype();if(result2!==null){result3=[];pos1=pos;result4=parse_SEMI();if(result4!==null){result5=parse_m_parameter();if(result5!==null){result4=[result4,result5];}else{result4=null;pos=pos1;}}else{result4=null;pos=pos1;}while(result4!==null){result3.push(result4);pos1=pos;result4=parse_SEMI();if(result4!==null){result5=parse_m_parameter();if(result5!==null){result4=[result4,result5];}else{result4=null;pos=pos1;}}else{result4=null;pos=pos1;}}if(result3!==null){result0=[result0,result1,result2,result3];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_m_type(){var result0;result0=parse_discrete_type();if(result0===null){result0=parse_composite_type();}return result0;}function parse_discrete_type(){var result0;if(input.substr(pos,4).toLowerCase()==="text"){result0=input.substr(pos,4);pos+=4;}else{result0=null;if(reportFailures===0){matchFailed("\"text\"");}}if(result0===null){if(input.substr(pos,5).toLowerCase()==="image"){result0=input.substr(pos,5);pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"image\"");}}if(result0===null){if(input.substr(pos,5).toLowerCase()==="audio"){result0=input.substr(pos,5);pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"audio\"");}}if(result0===null){if(input.substr(pos,5).toLowerCase()==="video"){result0=input.substr(pos,5);pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"video\"");}}if(result0===null){if(input.substr(pos,11).toLowerCase()==="application"){result0=input.substr(pos,11);pos+=11;}else{result0=null;if(reportFailures===0){matchFailed("\"application\"");}}if(result0===null){result0=parse_extension_token();}}}}}return result0;}function parse_composite_type(){var result0;if(input.substr(pos,7).toLowerCase()==="message"){result0=input.substr(pos,7);pos+=7;}else{result0=null;if(reportFailures===0){matchFailed("\"message\"");}}if(result0===null){if(input.substr(pos,9).toLowerCase()==="multipart"){result0=input.substr(pos,9);pos+=9;}else{result0=null;if(reportFailures===0){matchFailed("\"multipart\"");}}if(result0===null){result0=parse_extension_token();}}return result0;}function parse_extension_token(){var result0;result0=parse_token();if(result0===null){result0=parse_x_token();}return result0;}function parse_x_token(){var result0,result1;var pos0;pos0=pos;if(input.substr(pos,2).toLowerCase()==="x-"){result0=input.substr(pos,2);pos+=2;}else{result0=null;if(reportFailures===0){matchFailed("\"x-\"");}}if(result0!==null){result1=parse_token();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_m_subtype(){var result0;result0=parse_extension_token();if(result0===null){result0=parse_token();}return result0;}function parse_m_parameter(){var result0,result1,result2;var pos0;pos0=pos;result0=parse_token();if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_m_value();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_m_value(){var result0;result0=parse_token();if(result0===null){result0=parse_quoted_string();}return result0;}function parse_CSeq(){var result0,result1,result2;var pos0;pos0=pos;result0=parse_CSeq_value();if(result0!==null){result1=parse_LWS();if(result1!==null){result2=parse_Method();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_CSeq_value(){var result0,result1;var pos0;pos0=pos;result1=parse_DIGIT();if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_DIGIT();}}else{result0=null;}if(result0!==null){result0=function(offset,cseq_value){data.value=parseInt(cseq_value.join(''));}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_Expires(){var result0;var pos0;pos0=pos;result0=parse_delta_seconds();if(result0!==null){result0=function(offset,expires){data=expires;}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_Event(){var result0,result1,result2,result3;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_event_type();if(result0!==null){result1=[];pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_generic_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}while(result2!==null){result1.push(result2);pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_generic_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,event_type){data.event=event_type.join('').toLowerCase();}(pos0,result0[0]);}if(result0===null){pos=pos0;}return result0;}function parse_event_type(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_token_nodot();if(result0!==null){result1=[];pos1=pos;if(input.charCodeAt(pos)===46){result2=".";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\".\"");}}if(result2!==null){result3=parse_token_nodot();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;if(input.charCodeAt(pos)===46){result2=".";pos++;}else{result2=null;if(reportFailures===0){matchFailed("\".\"");}}if(result2!==null){result3=parse_token_nodot();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_From(){var result0,result1,result2,result3;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_SIP_URI_noparams();if(result0===null){result0=parse_name_addr();}if(result0!==null){result1=[];pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_from_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}while(result2!==null){result1.push(result2);pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_from_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){var tag=data.tag;try{data=new NameAddrHeader(data.uri,data.display_name,data.params);if(tag){data.setParam('tag',tag);}}catch(e){data=-1;}}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_from_param(){var result0;result0=parse_tag_param();if(result0===null){result0=parse_generic_param();}return result0;}function parse_tag_param(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,3).toLowerCase()==="tag"){result0=input.substr(pos,3);pos+=3;}else{result0=null;if(reportFailures===0){matchFailed("\"tag\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_token();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,tag){data.tag=tag;}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_Max_Forwards(){var result0,result1;var pos0;pos0=pos;result1=parse_DIGIT();if(result1!==null){result0=[];while(result1!==null){result0.push(result1);result1=parse_DIGIT();}}else{result0=null;}if(result0!==null){result0=function(offset,forwards){data=parseInt(forwards.join(''));}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_Min_Expires(){var result0;var pos0;pos0=pos;result0=parse_delta_seconds();if(result0!==null){result0=function(offset,min_expires){data=min_expires;}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_Name_Addr_Header(){var result0,result1,result2,result3,result4,result5,result6;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=[];result1=parse_display_name();while(result1!==null){result0.push(result1);result1=parse_display_name();}if(result0!==null){result1=parse_LAQUOT();if(result1!==null){result2=parse_SIP_URI();if(result2!==null){result3=parse_RAQUOT();if(result3!==null){result4=[];pos2=pos;result5=parse_SEMI();if(result5!==null){result6=parse_generic_param();if(result6!==null){result5=[result5,result6];}else{result5=null;pos=pos2;}}else{result5=null;pos=pos2;}while(result5!==null){result4.push(result5);pos2=pos;result5=parse_SEMI();if(result5!==null){result6=parse_generic_param();if(result6!==null){result5=[result5,result6];}else{result5=null;pos=pos2;}}else{result5=null;pos=pos2;}}if(result4!==null){result0=[result0,result1,result2,result3,result4];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){try{data=new NameAddrHeader(data.uri,data.display_name,data.params);}catch(e){data=-1;}}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_Proxy_Authenticate(){var result0;result0=parse_challenge();return result0;}function parse_challenge(){var result0,result1,result2,result3,result4,result5;var pos0,pos1;pos0=pos;if(input.substr(pos,6).toLowerCase()==="digest"){result0=input.substr(pos,6);pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"Digest\"");}}if(result0!==null){result1=parse_LWS();if(result1!==null){result2=parse_digest_cln();if(result2!==null){result3=[];pos1=pos;result4=parse_COMMA();if(result4!==null){result5=parse_digest_cln();if(result5!==null){result4=[result4,result5];}else{result4=null;pos=pos1;}}else{result4=null;pos=pos1;}while(result4!==null){result3.push(result4);pos1=pos;result4=parse_COMMA();if(result4!==null){result5=parse_digest_cln();if(result5!==null){result4=[result4,result5];}else{result4=null;pos=pos1;}}else{result4=null;pos=pos1;}}if(result3!==null){result0=[result0,result1,result2,result3];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}if(result0===null){result0=parse_other_challenge();}return result0;}function parse_other_challenge(){var result0,result1,result2,result3,result4,result5;var pos0,pos1;pos0=pos;result0=parse_token();if(result0!==null){result1=parse_LWS();if(result1!==null){result2=parse_auth_param();if(result2!==null){result3=[];pos1=pos;result4=parse_COMMA();if(result4!==null){result5=parse_auth_param();if(result5!==null){result4=[result4,result5];}else{result4=null;pos=pos1;}}else{result4=null;pos=pos1;}while(result4!==null){result3.push(result4);pos1=pos;result4=parse_COMMA();if(result4!==null){result5=parse_auth_param();if(result5!==null){result4=[result4,result5];}else{result4=null;pos=pos1;}}else{result4=null;pos=pos1;}}if(result3!==null){result0=[result0,result1,result2,result3];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_auth_param(){var result0,result1,result2;var pos0;pos0=pos;result0=parse_token();if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_token();if(result2===null){result2=parse_quoted_string();}if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_digest_cln(){var result0;result0=parse_realm();if(result0===null){result0=parse_domain();if(result0===null){result0=parse_nonce();if(result0===null){result0=parse_opaque();if(result0===null){result0=parse_stale();if(result0===null){result0=parse_algorithm();if(result0===null){result0=parse_qop_options();if(result0===null){result0=parse_auth_param();}}}}}}}return result0;}function parse_realm(){var result0,result1,result2;var pos0;pos0=pos;if(input.substr(pos,5).toLowerCase()==="realm"){result0=input.substr(pos,5);pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"realm\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_realm_value();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_realm_value(){var result0;var pos0;pos0=pos;result0=parse_quoted_string_clean();if(result0!==null){result0=function(offset,realm){data.realm=realm;}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_domain(){var result0,result1,result2,result3,result4,result5,result6;var pos0,pos1;pos0=pos;if(input.substr(pos,6).toLowerCase()==="domain"){result0=input.substr(pos,6);pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"domain\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_LDQUOT();if(result2!==null){result3=parse_URI();if(result3!==null){result4=[];pos1=pos;result6=parse_SP();if(result6!==null){result5=[];while(result6!==null){result5.push(result6);result6=parse_SP();}}else{result5=null;}if(result5!==null){result6=parse_URI();if(result6!==null){result5=[result5,result6];}else{result5=null;pos=pos1;}}else{result5=null;pos=pos1;}while(result5!==null){result4.push(result5);pos1=pos;result6=parse_SP();if(result6!==null){result5=[];while(result6!==null){result5.push(result6);result6=parse_SP();}}else{result5=null;}if(result5!==null){result6=parse_URI();if(result6!==null){result5=[result5,result6];}else{result5=null;pos=pos1;}}else{result5=null;pos=pos1;}}if(result4!==null){result5=parse_RDQUOT();if(result5!==null){result0=[result0,result1,result2,result3,result4,result5];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_URI(){var result0;result0=parse_absoluteURI();if(result0===null){result0=parse_abs_path();}return result0;}function parse_nonce(){var result0,result1,result2;var pos0;pos0=pos;if(input.substr(pos,5).toLowerCase()==="nonce"){result0=input.substr(pos,5);pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"nonce\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_nonce_value();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_nonce_value(){var result0;var pos0;pos0=pos;result0=parse_quoted_string_clean();if(result0!==null){result0=function(offset,nonce){data.nonce=nonce;}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_opaque(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,6).toLowerCase()==="opaque"){result0=input.substr(pos,6);pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"opaque\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_quoted_string_clean();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,opaque){data.opaque=opaque;}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_stale(){var result0,result1,result2;var pos0,pos1;pos0=pos;if(input.substr(pos,5).toLowerCase()==="stale"){result0=input.substr(pos,5);pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"stale\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){pos1=pos;if(input.substr(pos,4).toLowerCase()==="true"){result2=input.substr(pos,4);pos+=4;}else{result2=null;if(reportFailures===0){matchFailed("\"true\"");}}if(result2!==null){result2=function(offset){data.stale=true;}(pos1);}if(result2===null){pos=pos1;}if(result2===null){pos1=pos;if(input.substr(pos,5).toLowerCase()==="false"){result2=input.substr(pos,5);pos+=5;}else{result2=null;if(reportFailures===0){matchFailed("\"false\"");}}if(result2!==null){result2=function(offset){data.stale=false;}(pos1);}if(result2===null){pos=pos1;}}if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_algorithm(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,9).toLowerCase()==="algorithm"){result0=input.substr(pos,9);pos+=9;}else{result0=null;if(reportFailures===0){matchFailed("\"algorithm\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){if(input.substr(pos,3).toLowerCase()==="md5"){result2=input.substr(pos,3);pos+=3;}else{result2=null;if(reportFailures===0){matchFailed("\"MD5\"");}}if(result2===null){if(input.substr(pos,8).toLowerCase()==="md5-sess"){result2=input.substr(pos,8);pos+=8;}else{result2=null;if(reportFailures===0){matchFailed("\"MD5-sess\"");}}if(result2===null){result2=parse_token();}}if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,algorithm){data.algorithm=algorithm.toUpperCase();}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_qop_options(){var result0,result1,result2,result3,result4,result5,result6;var pos0,pos1,pos2;pos0=pos;if(input.substr(pos,3).toLowerCase()==="qop"){result0=input.substr(pos,3);pos+=3;}else{result0=null;if(reportFailures===0){matchFailed("\"qop\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_LDQUOT();if(result2!==null){pos1=pos;result3=parse_qop_value();if(result3!==null){result4=[];pos2=pos;if(input.charCodeAt(pos)===44){result5=",";pos++;}else{result5=null;if(reportFailures===0){matchFailed("\",\"");}}if(result5!==null){result6=parse_qop_value();if(result6!==null){result5=[result5,result6];}else{result5=null;pos=pos2;}}else{result5=null;pos=pos2;}while(result5!==null){result4.push(result5);pos2=pos;if(input.charCodeAt(pos)===44){result5=",";pos++;}else{result5=null;if(reportFailures===0){matchFailed("\",\"");}}if(result5!==null){result6=parse_qop_value();if(result6!==null){result5=[result5,result6];}else{result5=null;pos=pos2;}}else{result5=null;pos=pos2;}}if(result4!==null){result3=[result3,result4];}else{result3=null;pos=pos1;}}else{result3=null;pos=pos1;}if(result3!==null){result4=parse_RDQUOT();if(result4!==null){result0=[result0,result1,result2,result3,result4];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_qop_value(){var result0;var pos0;pos0=pos;if(input.substr(pos,8).toLowerCase()==="auth-int"){result0=input.substr(pos,8);pos+=8;}else{result0=null;if(reportFailures===0){matchFailed("\"auth-int\"");}}if(result0===null){if(input.substr(pos,4).toLowerCase()==="auth"){result0=input.substr(pos,4);pos+=4;}else{result0=null;if(reportFailures===0){matchFailed("\"auth\"");}}if(result0===null){result0=parse_token();}}if(result0!==null){result0=function(offset,qop_value){data.qop||(data.qop=[]);data.qop.push(qop_value.toLowerCase());}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_Proxy_Require(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_token();if(result0!==null){result1=[];pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_token();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_token();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_Record_Route(){var result0,result1,result2,result3;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_rec_route();if(result0!==null){result1=[];pos2=pos;result2=parse_COMMA();if(result2!==null){result3=parse_rec_route();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}while(result2!==null){result1.push(result2);pos2=pos;result2=parse_COMMA();if(result2!==null){result3=parse_rec_route();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){var idx,length;length=data.multi_header.length;for(idx=0;idx<length;idx++){if(data.multi_header[idx].parsed===null){data=null;break;}}if(data!==null){data=data.multi_header;}else{data=-1;}}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_rec_route(){var result0,result1,result2,result3;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_name_addr();if(result0!==null){result1=[];pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_generic_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}while(result2!==null){result1.push(result2);pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_generic_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){var header;if(!data.multi_header)data.multi_header=[];try{header=new NameAddrHeader(data.uri,data.display_name,data.params);delete data.uri;delete data.display_name;delete data.params;}catch(e){header=null;}data.multi_header.push({'possition':pos,'offset':offset,'parsed':header});}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_Reason(){var result0,result1,result2,result3;var pos0,pos1,pos2;pos0=pos;pos1=pos;if(input.substr(pos,3).toLowerCase()==="sip"){result0=input.substr(pos,3);pos+=3;}else{result0=null;if(reportFailures===0){matchFailed("\"SIP\"");}}if(result0===null){result0=parse_token();}if(result0!==null){result1=[];pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_reason_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}while(result2!==null){result1.push(result2);pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_reason_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,protocol){data.protocol=protocol.toLowerCase();if(!data.params)data.params={};if(data.params.text&&data.params.text[0]==='"'){var text=data.params.text;data.text=text.substring(1,text.length-1);delete data.params.text;}}(pos0,result0[0]);}if(result0===null){pos=pos0;}return result0;}function parse_reason_param(){var result0;result0=parse_reason_cause();if(result0===null){result0=parse_generic_param();}return result0;}function parse_reason_cause(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,5).toLowerCase()==="cause"){result0=input.substr(pos,5);pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"cause\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result3=parse_DIGIT();if(result3!==null){result2=[];while(result3!==null){result2.push(result3);result3=parse_DIGIT();}}else{result2=null;}if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,cause){data.cause=parseInt(cause.join(''));}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_Require(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_token();if(result0!==null){result1=[];pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_token();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_token();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_Route(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_route_param();if(result0!==null){result1=[];pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_route_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_route_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_route_param(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_name_addr();if(result0!==null){result1=[];pos1=pos;result2=parse_SEMI();if(result2!==null){result3=parse_generic_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;result2=parse_SEMI();if(result2!==null){result3=parse_generic_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_Subscription_State(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_substate_value();if(result0!==null){result1=[];pos1=pos;result2=parse_SEMI();if(result2!==null){result3=parse_subexp_params();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;result2=parse_SEMI();if(result2!==null){result3=parse_subexp_params();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_substate_value(){var result0;var pos0;pos0=pos;if(input.substr(pos,6).toLowerCase()==="active"){result0=input.substr(pos,6);pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"active\"");}}if(result0===null){if(input.substr(pos,7).toLowerCase()==="pending"){result0=input.substr(pos,7);pos+=7;}else{result0=null;if(reportFailures===0){matchFailed("\"pending\"");}}if(result0===null){if(input.substr(pos,10).toLowerCase()==="terminated"){result0=input.substr(pos,10);pos+=10;}else{result0=null;if(reportFailures===0){matchFailed("\"terminated\"");}}if(result0===null){result0=parse_token();}}}if(result0!==null){result0=function(offset){data.state=input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_subexp_params(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,6).toLowerCase()==="reason"){result0=input.substr(pos,6);pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"reason\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_event_reason_value();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,reason){if(typeof reason!=='undefined')data.reason=reason;}(pos0,result0[2]);}if(result0===null){pos=pos0;}if(result0===null){pos0=pos;pos1=pos;if(input.substr(pos,7).toLowerCase()==="expires"){result0=input.substr(pos,7);pos+=7;}else{result0=null;if(reportFailures===0){matchFailed("\"expires\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_delta_seconds();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,expires){if(typeof expires!=='undefined')data.expires=expires;}(pos0,result0[2]);}if(result0===null){pos=pos0;}if(result0===null){pos0=pos;pos1=pos;if(input.substr(pos,11).toLowerCase()==="retry_after"){result0=input.substr(pos,11);pos+=11;}else{result0=null;if(reportFailures===0){matchFailed("\"retry_after\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_delta_seconds();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,retry_after){if(typeof retry_after!=='undefined')data.retry_after=retry_after;}(pos0,result0[2]);}if(result0===null){pos=pos0;}if(result0===null){result0=parse_generic_param();}}}return result0;}function parse_event_reason_value(){var result0;if(input.substr(pos,11).toLowerCase()==="deactivated"){result0=input.substr(pos,11);pos+=11;}else{result0=null;if(reportFailures===0){matchFailed("\"deactivated\"");}}if(result0===null){if(input.substr(pos,9).toLowerCase()==="probation"){result0=input.substr(pos,9);pos+=9;}else{result0=null;if(reportFailures===0){matchFailed("\"probation\"");}}if(result0===null){if(input.substr(pos,8).toLowerCase()==="rejected"){result0=input.substr(pos,8);pos+=8;}else{result0=null;if(reportFailures===0){matchFailed("\"rejected\"");}}if(result0===null){if(input.substr(pos,7).toLowerCase()==="timeout"){result0=input.substr(pos,7);pos+=7;}else{result0=null;if(reportFailures===0){matchFailed("\"timeout\"");}}if(result0===null){if(input.substr(pos,6).toLowerCase()==="giveup"){result0=input.substr(pos,6);pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"giveup\"");}}if(result0===null){if(input.substr(pos,10).toLowerCase()==="noresource"){result0=input.substr(pos,10);pos+=10;}else{result0=null;if(reportFailures===0){matchFailed("\"noresource\"");}}if(result0===null){if(input.substr(pos,9).toLowerCase()==="invariant"){result0=input.substr(pos,9);pos+=9;}else{result0=null;if(reportFailures===0){matchFailed("\"invariant\"");}}if(result0===null){result0=parse_token();}}}}}}}return result0;}function parse_Subject(){var result0;result0=parse_TEXT_UTF8_TRIM();result0=result0!==null?result0:"";return result0;}function parse_Supported(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_token();if(result0!==null){result1=[];pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_token();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_token();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}result0=result0!==null?result0:"";return result0;}function parse_To(){var result0,result1,result2,result3;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_SIP_URI_noparams();if(result0===null){result0=parse_name_addr();}if(result0!==null){result1=[];pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_to_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}while(result2!==null){result1.push(result2);pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_to_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){var tag=data.tag;try{data=new NameAddrHeader(data.uri,data.display_name,data.params);if(tag){data.setParam('tag',tag);}}catch(e){data=-1;}}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_to_param(){var result0;result0=parse_tag_param();if(result0===null){result0=parse_generic_param();}return result0;}function parse_Via(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_via_param();if(result0!==null){result1=[];pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_via_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;result2=parse_COMMA();if(result2!==null){result3=parse_via_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_via_param(){var result0,result1,result2,result3,result4,result5;var pos0,pos1;pos0=pos;result0=parse_sent_protocol();if(result0!==null){result1=parse_LWS();if(result1!==null){result2=parse_sent_by();if(result2!==null){result3=[];pos1=pos;result4=parse_SEMI();if(result4!==null){result5=parse_via_params();if(result5!==null){result4=[result4,result5];}else{result4=null;pos=pos1;}}else{result4=null;pos=pos1;}while(result4!==null){result3.push(result4);pos1=pos;result4=parse_SEMI();if(result4!==null){result5=parse_via_params();if(result5!==null){result4=[result4,result5];}else{result4=null;pos=pos1;}}else{result4=null;pos=pos1;}}if(result3!==null){result0=[result0,result1,result2,result3];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_via_params(){var result0;result0=parse_via_ttl();if(result0===null){result0=parse_via_maddr();if(result0===null){result0=parse_via_received();if(result0===null){result0=parse_via_branch();if(result0===null){result0=parse_response_port();if(result0===null){result0=parse_generic_param();}}}}}return result0;}function parse_via_ttl(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,3).toLowerCase()==="ttl"){result0=input.substr(pos,3);pos+=3;}else{result0=null;if(reportFailures===0){matchFailed("\"ttl\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_ttl();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,via_ttl_value){data.ttl=via_ttl_value;}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_via_maddr(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,5).toLowerCase()==="maddr"){result0=input.substr(pos,5);pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"maddr\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_host();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,via_maddr){data.maddr=via_maddr;}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_via_received(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,8).toLowerCase()==="received"){result0=input.substr(pos,8);pos+=8;}else{result0=null;if(reportFailures===0){matchFailed("\"received\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_IPv4address();if(result2===null){result2=parse_IPv6address();}if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,via_received){data.received=via_received;}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_via_branch(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,6).toLowerCase()==="branch"){result0=input.substr(pos,6);pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"branch\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_token();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,via_branch){data.branch=via_branch;}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_response_port(){var result0,result1,result2,result3;var pos0,pos1,pos2;pos0=pos;pos1=pos;if(input.substr(pos,5).toLowerCase()==="rport"){result0=input.substr(pos,5);pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"rport\"");}}if(result0!==null){pos2=pos;result1=parse_EQUAL();if(result1!==null){result2=[];result3=parse_DIGIT();while(result3!==null){result2.push(result3);result3=parse_DIGIT();}if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){if(typeof response_port!=='undefined')data.rport=response_port.join('');}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_sent_protocol(){var result0,result1,result2,result3,result4;var pos0;pos0=pos;result0=parse_protocol_name();if(result0!==null){result1=parse_SLASH();if(result1!==null){result2=parse_token();if(result2!==null){result3=parse_SLASH();if(result3!==null){result4=parse_transport();if(result4!==null){result0=[result0,result1,result2,result3,result4];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_protocol_name(){var result0;var pos0;pos0=pos;if(input.substr(pos,3).toLowerCase()==="sip"){result0=input.substr(pos,3);pos+=3;}else{result0=null;if(reportFailures===0){matchFailed("\"SIP\"");}}if(result0===null){result0=parse_token();}if(result0!==null){result0=function(offset,via_protocol){data.protocol=via_protocol;}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_transport(){var result0;var pos0;pos0=pos;if(input.substr(pos,3).toLowerCase()==="udp"){result0=input.substr(pos,3);pos+=3;}else{result0=null;if(reportFailures===0){matchFailed("\"UDP\"");}}if(result0===null){if(input.substr(pos,3).toLowerCase()==="tcp"){result0=input.substr(pos,3);pos+=3;}else{result0=null;if(reportFailures===0){matchFailed("\"TCP\"");}}if(result0===null){if(input.substr(pos,3).toLowerCase()==="tls"){result0=input.substr(pos,3);pos+=3;}else{result0=null;if(reportFailures===0){matchFailed("\"TLS\"");}}if(result0===null){if(input.substr(pos,4).toLowerCase()==="sctp"){result0=input.substr(pos,4);pos+=4;}else{result0=null;if(reportFailures===0){matchFailed("\"SCTP\"");}}if(result0===null){result0=parse_token();}}}}if(result0!==null){result0=function(offset,via_transport){data.transport=via_transport;}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_sent_by(){var result0,result1,result2;var pos0,pos1;pos0=pos;result0=parse_via_host();if(result0!==null){pos1=pos;result1=parse_COLON();if(result1!==null){result2=parse_via_port();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos1;}}else{result1=null;pos=pos1;}result1=result1!==null?result1:"";if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_via_host(){var result0;var pos0;pos0=pos;result0=parse_IPv4address();if(result0===null){result0=parse_IPv6reference();if(result0===null){result0=parse_hostname();}}if(result0!==null){result0=function(offset){data.host=input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_via_port(){var result0,result1,result2,result3,result4;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_DIGIT();result0=result0!==null?result0:"";if(result0!==null){result1=parse_DIGIT();result1=result1!==null?result1:"";if(result1!==null){result2=parse_DIGIT();result2=result2!==null?result2:"";if(result2!==null){result3=parse_DIGIT();result3=result3!==null?result3:"";if(result3!==null){result4=parse_DIGIT();result4=result4!==null?result4:"";if(result4!==null){result0=[result0,result1,result2,result3,result4];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,via_sent_by_port){data.port=parseInt(via_sent_by_port.join(''));}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_ttl(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_DIGIT();if(result0!==null){result1=parse_DIGIT();result1=result1!==null?result1:"";if(result1!==null){result2=parse_DIGIT();result2=result2!==null?result2:"";if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,ttl){return parseInt(ttl.join(''));}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_WWW_Authenticate(){var result0;result0=parse_challenge();return result0;}function parse_Session_Expires(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_s_e_expires();if(result0!==null){result1=[];pos1=pos;result2=parse_SEMI();if(result2!==null){result3=parse_s_e_params();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;result2=parse_SEMI();if(result2!==null){result3=parse_s_e_params();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_s_e_expires(){var result0;var pos0;pos0=pos;result0=parse_delta_seconds();if(result0!==null){result0=function(offset,expires){data.expires=expires;}(pos0,result0);}if(result0===null){pos=pos0;}return result0;}function parse_s_e_params(){var result0;result0=parse_s_e_refresher();if(result0===null){result0=parse_generic_param();}return result0;}function parse_s_e_refresher(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,9).toLowerCase()==="refresher"){result0=input.substr(pos,9);pos+=9;}else{result0=null;if(reportFailures===0){matchFailed("\"refresher\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){if(input.substr(pos,3).toLowerCase()==="uac"){result2=input.substr(pos,3);pos+=3;}else{result2=null;if(reportFailures===0){matchFailed("\"uac\"");}}if(result2===null){if(input.substr(pos,3).toLowerCase()==="uas"){result2=input.substr(pos,3);pos+=3;}else{result2=null;if(reportFailures===0){matchFailed("\"uas\"");}}}if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,s_e_refresher_value){data.refresher=s_e_refresher_value.toLowerCase();}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_extension_header(){var result0,result1,result2;var pos0;pos0=pos;result0=parse_token();if(result0!==null){result1=parse_HCOLON();if(result1!==null){result2=parse_header_value();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_header_value(){var result0,result1;result0=[];result1=parse_TEXT_UTF8char();if(result1===null){result1=parse_UTF8_CONT();if(result1===null){result1=parse_LWS();}}while(result1!==null){result0.push(result1);result1=parse_TEXT_UTF8char();if(result1===null){result1=parse_UTF8_CONT();if(result1===null){result1=parse_LWS();}}}return result0;}function parse_message_body(){var result0,result1;result0=[];result1=parse_OCTET();while(result1!==null){result0.push(result1);result1=parse_OCTET();}return result0;}function parse_uuid_URI(){var result0,result1;var pos0;pos0=pos;if(input.substr(pos,5)==="uuid:"){result0="uuid:";pos+=5;}else{result0=null;if(reportFailures===0){matchFailed("\"uuid:\"");}}if(result0!==null){result1=parse_uuid();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_uuid(){var result0,result1,result2,result3,result4,result5,result6,result7,result8;var pos0,pos1;pos0=pos;pos1=pos;result0=parse_hex8();if(result0!==null){if(input.charCodeAt(pos)===45){result1="-";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result1!==null){result2=parse_hex4();if(result2!==null){if(input.charCodeAt(pos)===45){result3="-";pos++;}else{result3=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result3!==null){result4=parse_hex4();if(result4!==null){if(input.charCodeAt(pos)===45){result5="-";pos++;}else{result5=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result5!==null){result6=parse_hex4();if(result6!==null){if(input.charCodeAt(pos)===45){result7="-";pos++;}else{result7=null;if(reportFailures===0){matchFailed("\"-\"");}}if(result7!==null){result8=parse_hex12();if(result8!==null){result0=[result0,result1,result2,result3,result4,result5,result6,result7,result8];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,uuid){data=input.substring(pos+5,offset);}(pos0,result0[0]);}if(result0===null){pos=pos0;}return result0;}function parse_hex4(){var result0,result1,result2,result3;var pos0;pos0=pos;result0=parse_HEXDIG();if(result0!==null){result1=parse_HEXDIG();if(result1!==null){result2=parse_HEXDIG();if(result2!==null){result3=parse_HEXDIG();if(result3!==null){result0=[result0,result1,result2,result3];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_hex8(){var result0,result1;var pos0;pos0=pos;result0=parse_hex4();if(result0!==null){result1=parse_hex4();if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_hex12(){var result0,result1,result2;var pos0;pos0=pos;result0=parse_hex4();if(result0!==null){result1=parse_hex4();if(result1!==null){result2=parse_hex4();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_Refer_To(){var result0,result1,result2,result3;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_SIP_URI_noparams();if(result0===null){result0=parse_name_addr();}if(result0!==null){result1=[];pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_generic_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}while(result2!==null){result1.push(result2);pos2=pos;result2=parse_SEMI();if(result2!==null){result3=parse_generic_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos2;}}else{result2=null;pos=pos2;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){try{data=new NameAddrHeader(data.uri,data.display_name,data.params);}catch(e){data=-1;}}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_Replaces(){var result0,result1,result2,result3;var pos0,pos1;pos0=pos;result0=parse_call_id();if(result0!==null){result1=[];pos1=pos;result2=parse_SEMI();if(result2!==null){result3=parse_replaces_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}while(result2!==null){result1.push(result2);pos1=pos;result2=parse_SEMI();if(result2!==null){result3=parse_replaces_param();if(result3!==null){result2=[result2,result3];}else{result2=null;pos=pos1;}}else{result2=null;pos=pos1;}}if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos0;}}else{result0=null;pos=pos0;}return result0;}function parse_call_id(){var result0,result1,result2;var pos0,pos1,pos2;pos0=pos;pos1=pos;result0=parse_word();if(result0!==null){pos2=pos;if(input.charCodeAt(pos)===64){result1="@";pos++;}else{result1=null;if(reportFailures===0){matchFailed("\"@\"");}}if(result1!==null){result2=parse_word();if(result2!==null){result1=[result1,result2];}else{result1=null;pos=pos2;}}else{result1=null;pos=pos2;}result1=result1!==null?result1:"";if(result1!==null){result0=[result0,result1];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset){data.call_id=input.substring(pos,offset);}(pos0);}if(result0===null){pos=pos0;}return result0;}function parse_replaces_param(){var result0;result0=parse_to_tag();if(result0===null){result0=parse_from_tag();if(result0===null){result0=parse_early_flag();if(result0===null){result0=parse_generic_param();}}}return result0;}function parse_to_tag(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,6)==="to-tag"){result0="to-tag";pos+=6;}else{result0=null;if(reportFailures===0){matchFailed("\"to-tag\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_token();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,to_tag){data.to_tag=to_tag;}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_from_tag(){var result0,result1,result2;var pos0,pos1;pos0=pos;pos1=pos;if(input.substr(pos,8)==="from-tag"){result0="from-tag";pos+=8;}else{result0=null;if(reportFailures===0){matchFailed("\"from-tag\"");}}if(result0!==null){result1=parse_EQUAL();if(result1!==null){result2=parse_token();if(result2!==null){result0=[result0,result1,result2];}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}}else{result0=null;pos=pos1;}if(result0!==null){result0=function(offset,from_tag){data.from_tag=from_tag;}(pos0,result0[2]);}if(result0===null){pos=pos0;}return result0;}function parse_early_flag(){var result0;var pos0;pos0=pos;if(input.substr(pos,10)==="early-only"){result0="early-only";pos+=10;}else{result0=null;if(reportFailures===0){matchFailed("\"early-only\"");}}if(result0!==null){result0=function(offset){data.early_only=true;}(pos0);}if(result0===null){pos=pos0;}return result0;}function cleanupExpected(expected){expected.sort();var lastExpected=null;var cleanExpected=[];for(var i=0;i<expected.length;i++){if(expected[i]!==lastExpected){cleanExpected.push(expected[i]);lastExpected=expected[i];}}return cleanExpected;}function computeErrorPosition(){/*
                     * The first idea was to use |String.split| to break the input up to the
                     * error position along newlines and derive the line and column from
                     * there. However IE's |split| implementation is so broken that it was
                     * enough to prevent it.
                     */var line=1;var column=1;var seenCR=false;for(var i=0;i<Math.max(pos,rightmostFailuresPos);i++){var ch=input.charAt(i);if(ch==="\n"){if(!seenCR){line++;}column=1;seenCR=false;}else if(ch==="\r"||ch==="\u2028"||ch==="\u2029"){line++;column=1;seenCR=true;}else{column++;seenCR=false;}}return{line:line,column:column};}var URI=require('./URI');var NameAddrHeader=require('./NameAddrHeader');var data={};var result=parseFunctions[startRule]();/*
                 * The parser is now in one of the following three states:
                 *
                 * 1. The parser successfully parsed the whole input.
                 *
                 *    - |result !== null|
                 *    - |pos === input.length|
                 *    - |rightmostFailuresExpected| may or may not contain something
                 *
                 * 2. The parser successfully parsed only a part of the input.
                 *
                 *    - |result !== null|
                 *    - |pos < input.length|
                 *    - |rightmostFailuresExpected| may or may not contain something
                 *
                 * 3. The parser did not successfully parse any part of the input.
                 *
                 *   - |result === null|
                 *   - |pos === 0|
                 *   - |rightmostFailuresExpected| contains at least one failure
                 *
                 * All code following this comment (including called functions) must
                 * handle these states.
                 */if(result===null||pos!==input.length){var offset=Math.max(pos,rightmostFailuresPos);var found=offset<input.length?input.charAt(offset):null;var errorPosition=computeErrorPosition();new this.SyntaxError(cleanupExpected(rightmostFailuresExpected),found,offset,errorPosition.line,errorPosition.column);return-1;}return data;},/* Returns the parser source code. */toSource:function toSource(){return this._source;}};/* Thrown when a parser encounters a syntax error. */result.SyntaxError=function(expected,found,offset,line,column){function buildMessage(expected,found){var expectedHumanized,foundHumanized;switch(expected.length){case 0:expectedHumanized="end of input";break;case 1:expectedHumanized=expected[0];break;default:expectedHumanized=expected.slice(0,expected.length-1).join(", ")+" or "+expected[expected.length-1];}foundHumanized=found?quote(found):"end of input";return"Expected "+expectedHumanized+" but "+foundHumanized+" found.";}this.name="SyntaxError";this.expected=expected;this.found=found;this.message=buildMessage(expected,found);this.offset=offset;this.line=line;this.column=column;};result.SyntaxError.prototype=Error.prototype;return result;}();},{"./NameAddrHeader":9,"./URI":24}],7:[function(require,module,exports){/**
             * Dependencies.
             */var debug=require('debug')('JsSIP');var pkg=require('../package.json');debug('version %s',pkg.version);var rtcninja=require('rtcninja');var C=require('./Constants');var Exceptions=require('./Exceptions');var Utils=require('./Utils');var UA=require('./UA');var URI=require('./URI');var NameAddrHeader=require('./NameAddrHeader');var Grammar=require('./Grammar');var WebSocketInterface=require('./WebSocketInterface');/**
             * Expose the JsSIP module.
             */var JsSIP=module.exports={C:C,Exceptions:Exceptions,Utils:Utils,UA:UA,URI:URI,NameAddrHeader:NameAddrHeader,WebSocketInterface:WebSocketInterface,Grammar:Grammar,// Expose the debug module.
debug:require('debug'),// Expose the rtcninja module.
rtcninja:rtcninja};Object.defineProperties(JsSIP,{name:{get:function get(){return pkg.title;}},version:{get:function get(){return pkg.version;}}});},{"../package.json":40,"./Constants":1,"./Exceptions":5,"./Grammar":6,"./NameAddrHeader":9,"./UA":23,"./URI":24,"./Utils":25,"./WebSocketInterface":26,"debug":33,"rtcninja":43}],8:[function(require,module,exports){module.exports=Message;/**
             * Dependencies.
             */var util=require('util');var events=require('events');var JsSIP_C=require('./Constants');var SIPMessage=require('./SIPMessage');var Utils=require('./Utils');var RequestSender=require('./RequestSender');var Transactions=require('./Transactions');var Exceptions=require('./Exceptions');function Message(ua){this.ua=ua;// Custom message empty object for high level use
this.data={};events.EventEmitter.call(this);}util.inherits(Message,events.EventEmitter);Message.prototype.send=function(target,body,options){var request_sender,event,contentType,eventHandlers,extraHeaders,originalTarget=target;if(target===undefined||body===undefined){throw new TypeError('Not enough arguments');}// Check target validity
target=this.ua.normalizeTarget(target);if(!target){throw new TypeError('Invalid target: '+originalTarget);}// Get call options
options=options||{};extraHeaders=options.extraHeaders&&options.extraHeaders.slice()||[];eventHandlers=options.eventHandlers||{};contentType=options.contentType||'text/plain';this.content_type=contentType;// Set event handlers
for(event in eventHandlers){this.on(event,eventHandlers[event]);}this.closed=false;this.ua.applicants[this]=this;extraHeaders.push('Content-Type: '+contentType);this.request=new SIPMessage.OutgoingRequest(JsSIP_C.MESSAGE,target,this.ua,null,extraHeaders);if(body){this.request.body=body;this.content=body;}else{this.content=null;}request_sender=new RequestSender(this,this.ua);this.newMessage('local',this.request);request_sender.send();};Message.prototype.receiveResponse=function(response){var cause;if(this.closed){return;}switch(true){case /^1[0-9]{2}$/.test(response.status_code):// Ignore provisional responses.
break;case /^2[0-9]{2}$/.test(response.status_code):delete this.ua.applicants[this];this.emit('succeeded',{originator:'remote',response:response});break;default:delete this.ua.applicants[this];cause=Utils.sipErrorCause(response.status_code);this.emit('failed',{originator:'remote',response:response,cause:cause});break;}};Message.prototype.onRequestTimeout=function(){if(this.closed){return;}this.emit('failed',{originator:'system',cause:JsSIP_C.causes.REQUEST_TIMEOUT});};Message.prototype.onTransportError=function(){if(this.closed){return;}this.emit('failed',{originator:'system',cause:JsSIP_C.causes.CONNECTION_ERROR});};Message.prototype.close=function(){this.closed=true;delete this.ua.applicants[this];};Message.prototype.init_incoming=function(request){var transaction;this.request=request;this.content_type=request.getHeader('Content-Type');if(request.body){this.content=request.body;}else{this.content=null;}this.newMessage('remote',request);transaction=this.ua.transactions.nist[request.via_branch];if(transaction&&(transaction.state===Transactions.C.STATUS_TRYING||transaction.state===Transactions.C.STATUS_PROCEEDING)){request.reply(200);}};/**
             * Accept the incoming Message
             * Only valid for incoming Messages
             */Message.prototype.accept=function(options){options=options||{};var extraHeaders=options.extraHeaders&&options.extraHeaders.slice()||[],body=options.body;if(this.direction!=='incoming'){throw new Exceptions.NotSupportedError('"accept" not supported for outgoing Message');}this.request.reply(200,null,extraHeaders,body);};/**
             * Reject the incoming Message
             * Only valid for incoming Messages
             */Message.prototype.reject=function(options){options=options||{};var status_code=options.status_code||480,reason_phrase=options.reason_phrase,extraHeaders=options.extraHeaders&&options.extraHeaders.slice()||[],body=options.body;if(this.direction!=='incoming'){throw new Exceptions.NotSupportedError('"reject" not supported for outgoing Message');}if(status_code<300||status_code>=700){throw new TypeError('Invalid status_code: '+status_code);}this.request.reply(status_code,reason_phrase,extraHeaders,body);};/**
             * Internal Callbacks
             */Message.prototype.newMessage=function(originator,request){if(originator==='remote'){this.direction='incoming';this.local_identity=request.to;this.remote_identity=request.from;}else if(originator==='local'){this.direction='outgoing';this.local_identity=request.from;this.remote_identity=request.to;}this.ua.newMessage({originator:originator,message:this,request:request});};},{"./Constants":1,"./Exceptions":5,"./RequestSender":17,"./SIPMessage":18,"./Transactions":21,"./Utils":25,"events":28,"util":32}],9:[function(require,module,exports){module.exports=NameAddrHeader;/**
             * Dependencies.
             */var URI=require('./URI');var Grammar=require('./Grammar');function NameAddrHeader(uri,display_name,parameters){var param;// Checks
if(!uri||!(uri instanceof URI)){throw new TypeError('missing or invalid "uri" parameter');}// Initialize parameters
this.uri=uri;this.parameters={};for(param in parameters){this.setParam(param,parameters[param]);}Object.defineProperties(this,{display_name:{get:function get(){return display_name;},set:function set(value){display_name=value===0?'0':value;}}});}NameAddrHeader.prototype={setParam:function setParam(key,value){if(key){this.parameters[key.toLowerCase()]=typeof value==='undefined'||value===null?null:value.toString();}},getParam:function getParam(key){if(key){return this.parameters[key.toLowerCase()];}},hasParam:function hasParam(key){if(key){return this.parameters.hasOwnProperty(key.toLowerCase())&&true||false;}},deleteParam:function deleteParam(parameter){var value;parameter=parameter.toLowerCase();if(this.parameters.hasOwnProperty(parameter)){value=this.parameters[parameter];delete this.parameters[parameter];return value;}},clearParams:function clearParams(){this.parameters={};},clone:function clone(){return new NameAddrHeader(this.uri.clone(),this.display_name,JSON.parse(JSON.stringify(this.parameters)));},toString:function toString(){var body,parameter;body=this.display_name||this.display_name===0?'"'+this.display_name+'" ':'';body+='<'+this.uri.toString()+'>';for(parameter in this.parameters){body+=';'+parameter;if(this.parameters[parameter]!==null){body+='='+this.parameters[parameter];}}return body;}};/**
             * Parse the given string and returns a NameAddrHeader instance or undefined if
             * it is an invalid NameAddrHeader.
             */NameAddrHeader.parse=function(name_addr_header){name_addr_header=Grammar.parse(name_addr_header,'Name_Addr_Header');if(name_addr_header!==-1){return name_addr_header;}else{return undefined;}};},{"./Grammar":6,"./URI":24}],10:[function(require,module,exports){var Parser={};module.exports=Parser;/**
             * Dependencies.
             */var debugerror=require('debug')('JsSIP:ERROR:Parser');debugerror.log=console.warn.bind(console);var Grammar=require('./Grammar');var SIPMessage=require('./SIPMessage');/**
             * Extract and parse every header of a SIP message.
             */function getHeader(data,headerStart){var// 'start' position of the header.
start=headerStart,// 'end' position of the header.
end=0,// 'partial end' position of the header.
partialEnd=0;//End of message.
if(data.substring(start,start+2).match(/(^\r\n)/)){return-2;}while(end===0){// Partial End of Header.
partialEnd=data.indexOf('\r\n',start);// 'indexOf' returns -1 if the value to be found never occurs.
if(partialEnd===-1){return partialEnd;}if(!data.substring(partialEnd+2,partialEnd+4).match(/(^\r\n)/)&&data.charAt(partialEnd+2).match(/(^\s+)/)){// Not the end of the message. Continue from the next position.
start=partialEnd+2;}else{end=partialEnd;}}return end;}function parseHeader(message,data,headerStart,headerEnd){var header,idx,length,parsed,hcolonIndex=data.indexOf(':',headerStart),headerName=data.substring(headerStart,hcolonIndex).trim(),headerValue=data.substring(hcolonIndex+1,headerEnd).trim();// If header-field is well-known, parse it.
switch(headerName.toLowerCase()){case'via':case'v':message.addHeader('via',headerValue);if(message.getHeaders('via').length===1){parsed=message.parseHeader('Via');if(parsed){message.via=parsed;message.via_branch=parsed.branch;}}else{parsed=0;}break;case'from':case'f':message.setHeader('from',headerValue);parsed=message.parseHeader('from');if(parsed){message.from=parsed;message.from_tag=parsed.getParam('tag');}break;case'to':case't':message.setHeader('to',headerValue);parsed=message.parseHeader('to');if(parsed){message.to=parsed;message.to_tag=parsed.getParam('tag');}break;case'record-route':parsed=Grammar.parse(headerValue,'Record_Route');if(parsed===-1){parsed=undefined;}length=parsed.length;for(idx=0;idx<length;idx++){header=parsed[idx];message.addHeader('record-route',headerValue.substring(header.possition,header.offset));message.headers['Record-Route'][message.getHeaders('record-route').length-1].parsed=header.parsed;}break;case'call-id':case'i':message.setHeader('call-id',headerValue);parsed=message.parseHeader('call-id');if(parsed){message.call_id=headerValue;}break;case'contact':case'm':parsed=Grammar.parse(headerValue,'Contact');if(parsed===-1){parsed=undefined;}length=parsed.length;for(idx=0;idx<length;idx++){header=parsed[idx];message.addHeader('contact',headerValue.substring(header.possition,header.offset));message.headers.Contact[message.getHeaders('contact').length-1].parsed=header.parsed;}break;case'content-length':case'l':message.setHeader('content-length',headerValue);parsed=message.parseHeader('content-length');break;case'content-type':case'c':message.setHeader('content-type',headerValue);parsed=message.parseHeader('content-type');break;case'cseq':message.setHeader('cseq',headerValue);parsed=message.parseHeader('cseq');if(parsed){message.cseq=parsed.value;}if(message instanceof SIPMessage.IncomingResponse){message.method=parsed.method;}break;case'max-forwards':message.setHeader('max-forwards',headerValue);parsed=message.parseHeader('max-forwards');break;case'www-authenticate':message.setHeader('www-authenticate',headerValue);parsed=message.parseHeader('www-authenticate');break;case'proxy-authenticate':message.setHeader('proxy-authenticate',headerValue);parsed=message.parseHeader('proxy-authenticate');break;case'session-expires':case'x':message.setHeader('session-expires',headerValue);parsed=message.parseHeader('session-expires');if(parsed){message.session_expires=parsed.expires;message.session_expires_refresher=parsed.refresher;}break;case'refer-to':case'r':message.setHeader('refer-to',headerValue);parsed=message.parseHeader('refer-to');if(parsed){message.refer_to=parsed;}break;case'replaces':message.setHeader('replaces',headerValue);parsed=message.parseHeader('replaces');if(parsed){message.replaces=parsed;}break;case'event':case'o':message.setHeader('event',headerValue);parsed=message.parseHeader('event');if(parsed){message.event=parsed;}break;default:// Do not parse this header.
message.setHeader(headerName,headerValue);parsed=0;}if(parsed===undefined){return{error:'error parsing header "'+headerName+'"'};}else{return true;}}/**
             * Parse SIP Message
             */Parser.parseMessage=function(data,ua){var message,firstLine,contentLength,bodyStart,parsed,headerStart=0,headerEnd=data.indexOf('\r\n');if(headerEnd===-1){debugerror('parseMessage() | no CRLF found, not a SIP message');return;}// Parse first line. Check if it is a Request or a Reply.
firstLine=data.substring(0,headerEnd);parsed=Grammar.parse(firstLine,'Request_Response');if(parsed===-1){debugerror('parseMessage() | error parsing first line of SIP message: "'+firstLine+'"');return;}else if(!parsed.status_code){message=new SIPMessage.IncomingRequest(ua);message.method=parsed.method;message.ruri=parsed.uri;}else{message=new SIPMessage.IncomingResponse();message.status_code=parsed.status_code;message.reason_phrase=parsed.reason_phrase;}message.data=data;headerStart=headerEnd+2;/* Loop over every line in data. Detect the end of each header and parse
         * it or simply add to the headers collection.
         */while(true){headerEnd=getHeader(data,headerStart);// The SIP message has normally finished.
if(headerEnd===-2){bodyStart=headerStart+2;break;}// data.indexOf returned -1 due to a malformed message.
else if(headerEnd===-1){debugerror('parseMessage() | malformed message');return;}parsed=parseHeader(message,data,headerStart,headerEnd);if(parsed!==true){debugerror('parseMessage() |',parsed.error);return;}headerStart=headerEnd+2;}/* RFC3261 18.3.
         * If there are additional bytes in the transport packet
         * beyond the end of the body, they MUST be discarded.
         */if(message.hasHeader('content-length')){contentLength=message.getHeader('content-length');message.body=data.substr(bodyStart,contentLength);}else{message.body=data.substring(bodyStart);}return message;};},{"./Grammar":6,"./SIPMessage":18,"debug":33}],11:[function(require,module,exports){module.exports=RTCSession;var C={// RTCSession states
STATUS_NULL:0,STATUS_INVITE_SENT:1,STATUS_1XX_RECEIVED:2,STATUS_INVITE_RECEIVED:3,STATUS_WAITING_FOR_ANSWER:4,STATUS_ANSWERED:5,STATUS_WAITING_FOR_ACK:6,STATUS_CANCELED:7,STATUS_TERMINATED:8,STATUS_CONFIRMED:9};/**
             * Expose C object.
             */RTCSession.C=C;/**
             * Dependencies.
             */var util=require('util');var events=require('events');var debug=require('debug')('JsSIP:RTCSession');var debugerror=require('debug')('JsSIP:ERROR:RTCSession');debugerror.log=console.warn.bind(console);var rtcninja=require('rtcninja');var sdp_transform=require('sdp-transform');var JsSIP_C=require('./Constants');var Exceptions=require('./Exceptions');var Transactions=require('./Transactions');var Utils=require('./Utils');var Timers=require('./Timers');var SIPMessage=require('./SIPMessage');var Dialog=require('./Dialog');var RequestSender=require('./RequestSender');var RTCSession_Request=require('./RTCSession/Request');var RTCSession_DTMF=require('./RTCSession/DTMF');var RTCSession_ReferNotifier=require('./RTCSession/ReferNotifier');var RTCSession_ReferSubscriber=require('./RTCSession/ReferSubscriber');/**
             * Local variables.
             */var holdMediaTypes=['audio','video'];function RTCSession(ua){debug('new');this.ua=ua;this.status=C.STATUS_NULL;this.dialog=null;this.earlyDialogs={};this.connection=null;// The rtcninja.RTCPeerConnection instance (public attribute).
// RTCSession confirmation flag
this.is_confirmed=false;// is late SDP being negotiated
this.late_sdp=false;// Default rtcOfferConstraints and rtcAnswerConstrainsts (passed in connect() or answer()).
this.rtcOfferConstraints=null;this.rtcAnswerConstraints=null;// Local MediaStream.
this.localMediaStream=null;this.localMediaStreamLocallyGenerated=false;// Flag to indicate PeerConnection ready for new actions.
this.rtcReady=true;// SIP Timers
this.timers={ackTimer:null,expiresTimer:null,invite2xxTimer:null,userNoAnswerTimer:null};// Session info
this.direction=null;this.local_identity=null;this.remote_identity=null;this.start_time=null;this.end_time=null;this.tones=null;// Mute/Hold state
this.audioMuted=false;this.videoMuted=false;this.localHold=false;this.remoteHold=false;// Session Timers (RFC 4028)
this.sessionTimers={enabled:this.ua.configuration.session_timers,defaultExpires:JsSIP_C.SESSION_EXPIRES,currentExpires:null,running:false,refresher:false,timer:null// A setTimeout.
};// Map of ReferSubscriber instances indexed by the REFER's CSeq number
this.referSubscribers={};// Custom session empty object for high level use
this.data={};events.EventEmitter.call(this);}util.inherits(RTCSession,events.EventEmitter);/**
             * User API
             */RTCSession.prototype.isInProgress=function(){switch(this.status){case C.STATUS_NULL:case C.STATUS_INVITE_SENT:case C.STATUS_1XX_RECEIVED:case C.STATUS_INVITE_RECEIVED:case C.STATUS_WAITING_FOR_ANSWER:return true;default:return false;}};RTCSession.prototype.isEstablished=function(){switch(this.status){case C.STATUS_ANSWERED:case C.STATUS_WAITING_FOR_ACK:case C.STATUS_CONFIRMED:return true;default:return false;}};RTCSession.prototype.isEnded=function(){switch(this.status){case C.STATUS_CANCELED:case C.STATUS_TERMINATED:return true;default:return false;}};RTCSession.prototype.isMuted=function(){return{audio:this.audioMuted,video:this.videoMuted};};RTCSession.prototype.isOnHold=function(){return{local:this.localHold,remote:this.remoteHold};};/**
             * Check if RTCSession is ready for an outgoing re-INVITE or UPDATE with SDP.
             */RTCSession.prototype.isReadyToReOffer=function(){if(!this.rtcReady){debug('isReadyToReOffer() | internal WebRTC status not ready');return false;}// No established yet.
if(!this.dialog){debug('isReadyToReOffer() | session not established yet');return false;}// Another INVITE transaction is in progress
if(this.dialog.uac_pending_reply===true||this.dialog.uas_pending_reply===true){debug('isReadyToReOffer() | there is another INVITE/UPDATE transaction in progress');return false;}return true;};RTCSession.prototype.connect=function(target,options,initCallback){debug('connect()');options=options||{};var event,requestParams,originalTarget=target,eventHandlers=options.eventHandlers||{},extraHeaders=options.extraHeaders&&options.extraHeaders.slice()||[],mediaConstraints=options.mediaConstraints||{audio:true,video:true},mediaStream=options.mediaStream||null,pcConfig=options.pcConfig||{iceServers:[]},rtcConstraints=options.rtcConstraints||null,rtcOfferConstraints=options.rtcOfferConstraints||null;this.rtcOfferConstraints=rtcOfferConstraints;this.rtcAnswerConstraints=options.rtcAnswerConstraints||null;// Session Timers.
if(this.sessionTimers.enabled){if(Utils.isDecimal(options.sessionTimersExpires)){if(options.sessionTimersExpires>=JsSIP_C.MIN_SESSION_EXPIRES){this.sessionTimers.defaultExpires=options.sessionTimersExpires;}else{this.sessionTimers.defaultExpires=JsSIP_C.SESSION_EXPIRES;}}}this.data=options.data||this.data;if(target===undefined){throw new TypeError('Not enough arguments');}// Check WebRTC support.
if(!rtcninja.hasWebRTC()){throw new Exceptions.NotSupportedError('WebRTC not supported');}// Check target validity
target=this.ua.normalizeTarget(target);if(!target){throw new TypeError('Invalid target: '+originalTarget);}// Check Session Status
if(this.status!==C.STATUS_NULL){throw new Exceptions.InvalidStateError(this.status);}// Set event handlers
for(event in eventHandlers){this.on(event,eventHandlers[event]);}// Session parameter initialization
this.from_tag=Utils.newTag();// Set anonymous property
this.anonymous=options.anonymous||false;// OutgoingSession specific parameters
this.isCanceled=false;requestParams={from_tag:this.from_tag};this.contact=this.ua.contact.toString({anonymous:this.anonymous,outbound:true});if(this.anonymous){requestParams.from_display_name='Anonymous';requestParams.from_uri='sip:anonymous@anonymous.invalid';extraHeaders.push('P-Preferred-Identity: '+this.ua.configuration.uri.toString());extraHeaders.push('Privacy: id');}extraHeaders.push('Contact: '+this.contact);extraHeaders.push('Content-Type: application/sdp');if(this.sessionTimers.enabled){extraHeaders.push('Session-Expires: '+this.sessionTimers.defaultExpires);}this.request=new SIPMessage.OutgoingRequest(JsSIP_C.INVITE,target,this.ua,requestParams,extraHeaders);this.id=this.request.call_id+this.from_tag;// Create a new rtcninja.RTCPeerConnection instance.
createRTCConnection.call(this,pcConfig,rtcConstraints);// Save the session into the ua sessions collection.
this.ua.sessions[this.id]=this;// Set internal properties
this.direction='outgoing';this.local_identity=this.request.from;this.remote_identity=this.request.to;// User explicitly provided a newRTCSession callback for this session
if(initCallback){initCallback(this);}else{newRTCSession.call(this,'local',this.request);}sendInitialRequest.call(this,mediaConstraints,rtcOfferConstraints,mediaStream);};RTCSession.prototype.init_incoming=function(request,initCallback){debug('init_incoming()');var expires,self=this,contentType=request.getHeader('Content-Type');// Check body and content type
if(request.body&&contentType!=='application/sdp'){request.reply(415);return;}// Session parameter initialization
this.status=C.STATUS_INVITE_RECEIVED;this.from_tag=request.from_tag;this.id=request.call_id+this.from_tag;this.request=request;this.contact=this.ua.contact.toString();// Save the session into the ua sessions collection.
this.ua.sessions[this.id]=this;// Get the Expires header value if exists
if(request.hasHeader('expires')){expires=request.getHeader('expires')*1000;}/* Set the to_tag before
         * replying a response code that will create a dialog.
         */request.to_tag=Utils.newTag();// An error on dialog creation will fire 'failed' event
if(!createDialog.call(this,request,'UAS',true)){request.reply(500,'Missing Contact header field');return;}if(request.body){this.late_sdp=false;}else{this.late_sdp=true;}this.status=C.STATUS_WAITING_FOR_ANSWER;// Set userNoAnswerTimer
this.timers.userNoAnswerTimer=setTimeout(function(){request.reply(408);failed.call(self,'local',null,JsSIP_C.causes.NO_ANSWER);},this.ua.configuration.no_answer_timeout);/* Set expiresTimer
         * RFC3261 13.3.1
         */if(expires){this.timers.expiresTimer=setTimeout(function(){if(self.status===C.STATUS_WAITING_FOR_ANSWER){request.reply(487);failed.call(self,'system',null,JsSIP_C.causes.EXPIRES);}},expires);}// Set internal properties
this.direction='incoming';this.local_identity=request.to;this.remote_identity=request.from;// A init callback was specifically defined
if(initCallback){initCallback(this);// Fire 'newRTCSession' event.
}else{newRTCSession.call(this,'remote',request);}// The user may have rejected the call in the 'newRTCSession' event.
if(this.status===C.STATUS_TERMINATED){return;}// Reply 180.
request.reply(180,null,['Contact: '+self.contact]);// Fire 'progress' event.
// TODO: Document that 'response' field in 'progress' event is null for
// incoming calls.
progress.call(self,'local',null);};/**
             * Answer the call.
             */RTCSession.prototype.answer=function(options){debug('answer()');options=options||{};var idx,length,sdp,tracks,peerHasAudioLine=false,peerHasVideoLine=false,peerOffersFullAudio=false,peerOffersFullVideo=false,self=this,request=this.request,extraHeaders=options.extraHeaders&&options.extraHeaders.slice()||[],mediaConstraints=options.mediaConstraints||{},mediaStream=options.mediaStream||null,pcConfig=options.pcConfig||{iceServers:[]},rtcConstraints=options.rtcConstraints||null,rtcAnswerConstraints=options.rtcAnswerConstraints||null;this.rtcAnswerConstraints=rtcAnswerConstraints;this.rtcOfferConstraints=options.rtcOfferConstraints||null;// Session Timers.
if(this.sessionTimers.enabled){if(Utils.isDecimal(options.sessionTimersExpires)){if(options.sessionTimersExpires>=JsSIP_C.MIN_SESSION_EXPIRES){this.sessionTimers.defaultExpires=options.sessionTimersExpires;}else{this.sessionTimers.defaultExpires=JsSIP_C.SESSION_EXPIRES;}}}this.data=options.data||this.data;// Check Session Direction and Status
if(this.direction!=='incoming'){throw new Exceptions.NotSupportedError('"answer" not supported for outgoing RTCSession');}else if(this.status!==C.STATUS_WAITING_FOR_ANSWER){throw new Exceptions.InvalidStateError(this.status);}this.status=C.STATUS_ANSWERED;// An error on dialog creation will fire 'failed' event
if(!createDialog.call(this,request,'UAS')){request.reply(500,'Error creating dialog');return;}clearTimeout(this.timers.userNoAnswerTimer);extraHeaders.unshift('Contact: '+self.contact);// Determine incoming media from incoming SDP offer (if any).
sdp=request.parseSDP();// Make sure sdp.media is an array, not the case if there is only one media
if(!Array.isArray(sdp.media)){sdp.media=[sdp.media];}// Go through all medias in SDP to find offered capabilities to answer with
idx=sdp.media.length;while(idx--){var m=sdp.media[idx];if(m.type==='audio'){peerHasAudioLine=true;if(!m.direction||m.direction==='sendrecv'){peerOffersFullAudio=true;}}if(m.type==='video'){peerHasVideoLine=true;if(!m.direction||m.direction==='sendrecv'){peerOffersFullVideo=true;}}}// Remove audio from mediaStream if suggested by mediaConstraints
if(mediaStream&&mediaConstraints.audio===false){tracks=mediaStream.getAudioTracks();length=tracks.length;for(idx=0;idx<length;idx++){mediaStream.removeTrack(tracks[idx]);}}// Remove video from mediaStream if suggested by mediaConstraints
if(mediaStream&&mediaConstraints.video===false){tracks=mediaStream.getVideoTracks();length=tracks.length;for(idx=0;idx<length;idx++){mediaStream.removeTrack(tracks[idx]);}}// Set audio constraints based on incoming stream if not supplied
if(!mediaStream&&mediaConstraints.audio===undefined){mediaConstraints.audio=peerOffersFullAudio;}// Set video constraints based on incoming stream if not supplied
if(!mediaStream&&mediaConstraints.video===undefined){mediaConstraints.video=peerOffersFullVideo;}// Don't ask for audio if the incoming offer has no audio section
if(!mediaStream&&!peerHasAudioLine){mediaConstraints.audio=false;}// Don't ask for video if the incoming offer has no video section
if(!mediaStream&&!peerHasVideoLine){mediaConstraints.video=false;}// Create a new rtcninja.RTCPeerConnection instance.
// TODO: This may throw an error, should react.
createRTCConnection.call(this,pcConfig,rtcConstraints);// If a local MediaStream is given use it.
if(mediaStream){userMediaSucceeded(mediaStream);// If at least audio or video is requested prompt getUserMedia.
}else if(mediaConstraints.audio||mediaConstraints.video){self.localMediaStreamLocallyGenerated=true;rtcninja.getUserMedia(mediaConstraints,userMediaSucceeded,userMediaFailed);// Otherwise don't prompt getUserMedia.
}else{userMediaSucceeded(null);}// User media succeeded
function userMediaSucceeded(stream){if(self.status===C.STATUS_TERMINATED){return;}self.localMediaStream=stream;if(stream){self.connection.addStream(stream);}// If it's an incoming INVITE without SDP notify the app with the
// RTCPeerConnection so it can do stuff on it before generating the offer.
if(!self.request.body){self.emit('peerconnection',{peerconnection:self.connection});}if(!self.late_sdp){var e={originator:'remote',type:'offer',sdp:request.body};self.emit('sdp',e);self.connection.setRemoteDescription(new rtcninja.RTCSessionDescription({type:'offer',sdp:e.sdp}),// success
remoteDescriptionSucceededOrNotNeeded,// failure
function(){request.reply(488);failed.call(self,'system',null,JsSIP_C.causes.WEBRTC_ERROR);});}else{remoteDescriptionSucceededOrNotNeeded();}}// User media failed
function userMediaFailed(){if(self.status===C.STATUS_TERMINATED){return;}request.reply(480);failed.call(self,'local',null,JsSIP_C.causes.USER_DENIED_MEDIA_ACCESS);}function remoteDescriptionSucceededOrNotNeeded(){connecting.call(self,request);if(!self.late_sdp){createLocalDescription.call(self,'answer',rtcSucceeded,rtcFailed,rtcAnswerConstraints);}else{createLocalDescription.call(self,'offer',rtcSucceeded,rtcFailed,self.rtcOfferConstraints);}}function rtcSucceeded(desc){if(self.status===C.STATUS_TERMINATED){return;}// run for reply success callback
function replySucceeded(){self.status=C.STATUS_WAITING_FOR_ACK;setInvite2xxTimer.call(self,request,desc);setACKTimer.call(self);accepted.call(self,'local');}// run for reply failure callback
function replyFailed(){failed.call(self,'system',null,JsSIP_C.causes.CONNECTION_ERROR);}handleSessionTimersInIncomingRequest.call(self,request,extraHeaders);request.reply(200,null,extraHeaders,desc,replySucceeded,replyFailed);}function rtcFailed(){if(self.status===C.STATUS_TERMINATED){return;}request.reply(500);failed.call(self,'system',null,JsSIP_C.causes.WEBRTC_ERROR);}};/**
             * Terminate the call.
             */RTCSession.prototype.terminate=function(options){debug('terminate()');options=options||{};var cancel_reason,dialog,cause=options.cause||JsSIP_C.causes.BYE,status_code=options.status_code,reason_phrase=options.reason_phrase,extraHeaders=options.extraHeaders&&options.extraHeaders.slice()||[],body=options.body,self=this;// Check Session Status
if(this.status===C.STATUS_TERMINATED){throw new Exceptions.InvalidStateError(this.status);}switch(this.status){// - UAC -
case C.STATUS_NULL:case C.STATUS_INVITE_SENT:case C.STATUS_1XX_RECEIVED:debug('canceling session');if(status_code&&(status_code<200||status_code>=700)){throw new TypeError('Invalid status_code: '+status_code);}else if(status_code){reason_phrase=reason_phrase||JsSIP_C.REASON_PHRASE[status_code]||'';cancel_reason='SIP ;cause='+status_code+' ;text="'+reason_phrase+'"';}// Check Session Status
if(this.status===C.STATUS_NULL){this.isCanceled=true;this.cancelReason=cancel_reason;}else if(this.status===C.STATUS_INVITE_SENT){this.isCanceled=true;this.cancelReason=cancel_reason;}else if(this.status===C.STATUS_1XX_RECEIVED){this.request.cancel(cancel_reason);}this.status=C.STATUS_CANCELED;failed.call(this,'local',null,JsSIP_C.causes.CANCELED);break;// - UAS -
case C.STATUS_WAITING_FOR_ANSWER:case C.STATUS_ANSWERED:debug('rejecting session');status_code=status_code||480;if(status_code<300||status_code>=700){throw new TypeError('Invalid status_code: '+status_code);}this.request.reply(status_code,reason_phrase,extraHeaders,body);failed.call(this,'local',null,JsSIP_C.causes.REJECTED);break;case C.STATUS_WAITING_FOR_ACK:case C.STATUS_CONFIRMED:debug('terminating session');reason_phrase=options.reason_phrase||JsSIP_C.REASON_PHRASE[status_code]||'';if(status_code&&(status_code<200||status_code>=700)){throw new TypeError('Invalid status_code: '+status_code);}else if(status_code){extraHeaders.push('Reason: SIP ;cause='+status_code+'; text="'+reason_phrase+'"');}/* RFC 3261 section 15 (Terminating a session):
                 *
                 * "...the callee's UA MUST NOT send a BYE on a confirmed dialog
                 * until it has received an ACK for its 2xx response or until the server
                 * transaction times out."
                 */if(this.status===C.STATUS_WAITING_FOR_ACK&&this.direction==='incoming'&&this.request.server_transaction.state!==Transactions.C.STATUS_TERMINATED){// Save the dialog for later restoration
dialog=this.dialog;// Send the BYE as soon as the ACK is received...
this.receiveRequest=function(request){if(request.method===JsSIP_C.ACK){sendRequest.call(this,JsSIP_C.BYE,{extraHeaders:extraHeaders,body:body});dialog.terminate();}};// .., or when the INVITE transaction times out
this.request.server_transaction.on('stateChanged',function(){if(this.state===Transactions.C.STATUS_TERMINATED){sendRequest.call(self,JsSIP_C.BYE,{extraHeaders:extraHeaders,body:body});dialog.terminate();}});ended.call(this,'local',null,cause);// Restore the dialog into 'this' in order to be able to send the in-dialog BYE :-)
this.dialog=dialog;// Restore the dialog into 'ua' so the ACK can reach 'this' session
this.ua.dialogs[dialog.id.toString()]=dialog;}else{sendRequest.call(this,JsSIP_C.BYE,{extraHeaders:extraHeaders,body:body});ended.call(this,'local',null,cause);}}};RTCSession.prototype.close=function(){debug('close()');var idx;if(this.status===C.STATUS_TERMINATED){return;}// Terminate RTC.
if(this.connection){try{this.connection.close();}catch(error){debugerror('close() | error closing the RTCPeerConnection: %o',error);}}// Close local MediaStream if it was not given by the user.
if(this.localMediaStream&&this.localMediaStreamLocallyGenerated){debug('close() | closing local MediaStream');rtcninja.closeMediaStream(this.localMediaStream);}// Terminate signaling.
// Clear SIP timers
for(idx in this.timers){clearTimeout(this.timers[idx]);}// Clear Session Timers.
clearTimeout(this.sessionTimers.timer);// Terminate confirmed dialog
if(this.dialog){this.dialog.terminate();delete this.dialog;}// Terminate early dialogs
for(idx in this.earlyDialogs){this.earlyDialogs[idx].terminate();delete this.earlyDialogs[idx];}this.status=C.STATUS_TERMINATED;delete this.ua.sessions[this.id];};RTCSession.prototype.sendDTMF=function(tones,options){debug('sendDTMF() | tones: %s',tones);var duration,interToneGap,position=0,self=this;options=options||{};duration=options.duration||null;interToneGap=options.interToneGap||null;if(tones===undefined){throw new TypeError('Not enough arguments');}// Check Session Status
if(this.status!==C.STATUS_CONFIRMED&&this.status!==C.STATUS_WAITING_FOR_ACK){throw new Exceptions.InvalidStateError(this.status);}// Convert to string
if(typeof tones==='number'){tones=tones.toString();}// Check tones
if(!tones||typeof tones!=='string'||!tones.match(/^[0-9A-D#*,]+$/i)){throw new TypeError('Invalid tones: '+tones);}// Check duration
if(duration&&!Utils.isDecimal(duration)){throw new TypeError('Invalid tone duration: '+duration);}else if(!duration){duration=RTCSession_DTMF.C.DEFAULT_DURATION;}else if(duration<RTCSession_DTMF.C.MIN_DURATION){debug('"duration" value is lower than the minimum allowed, setting it to '+RTCSession_DTMF.C.MIN_DURATION+' milliseconds');duration=RTCSession_DTMF.C.MIN_DURATION;}else if(duration>RTCSession_DTMF.C.MAX_DURATION){debug('"duration" value is greater than the maximum allowed, setting it to '+RTCSession_DTMF.C.MAX_DURATION+' milliseconds');duration=RTCSession_DTMF.C.MAX_DURATION;}else{duration=Math.abs(duration);}options.duration=duration;// Check interToneGap
if(interToneGap&&!Utils.isDecimal(interToneGap)){throw new TypeError('Invalid interToneGap: '+interToneGap);}else if(!interToneGap){interToneGap=RTCSession_DTMF.C.DEFAULT_INTER_TONE_GAP;}else if(interToneGap<RTCSession_DTMF.C.MIN_INTER_TONE_GAP){debug('"interToneGap" value is lower than the minimum allowed, setting it to '+RTCSession_DTMF.C.MIN_INTER_TONE_GAP+' milliseconds');interToneGap=RTCSession_DTMF.C.MIN_INTER_TONE_GAP;}else{interToneGap=Math.abs(interToneGap);}if(this.tones){// Tones are already queued, just add to the queue
this.tones+=tones;return;}this.tones=tones;// Send the first tone
_sendDTMF();function _sendDTMF(){var tone,timeout;if(self.status===C.STATUS_TERMINATED||!self.tones||position>=self.tones.length){// Stop sending DTMF
self.tones=null;return;}tone=self.tones[position];position+=1;if(tone===','){timeout=2000;}else{var dtmf=new RTCSession_DTMF(self);options.eventHandlers={failed:function failed(){self.tones=null;}};dtmf.send(tone,options);timeout=duration+interToneGap;}// Set timeout for the next tone
setTimeout(_sendDTMF,timeout);}};/**
             * Mute
             */RTCSession.prototype.mute=function(options){debug('mute()');options=options||{audio:true,video:false};var audioMuted=false,videoMuted=false;if(this.audioMuted===false&&options.audio){audioMuted=true;this.audioMuted=true;toogleMuteAudio.call(this,true);}if(this.videoMuted===false&&options.video){videoMuted=true;this.videoMuted=true;toogleMuteVideo.call(this,true);}if(audioMuted===true||videoMuted===true){onmute.call(this,{audio:audioMuted,video:videoMuted});}};/**
             * Unmute
             */RTCSession.prototype.unmute=function(options){debug('unmute()');options=options||{audio:true,video:true};var audioUnMuted=false,videoUnMuted=false;if(this.audioMuted===true&&options.audio){audioUnMuted=true;this.audioMuted=false;if(this.localHold===false){toogleMuteAudio.call(this,false);}}if(this.videoMuted===true&&options.video){videoUnMuted=true;this.videoMuted=false;if(this.localHold===false){toogleMuteVideo.call(this,false);}}if(audioUnMuted===true||videoUnMuted===true){onunmute.call(this,{audio:audioUnMuted,video:videoUnMuted});}};/**
             * Hold
             */RTCSession.prototype.hold=function(options,done){debug('hold()');options=options||{};var self=this,eventHandlers;if(this.status!==C.STATUS_WAITING_FOR_ACK&&this.status!==C.STATUS_CONFIRMED){return false;}if(this.localHold===true){return false;}if(!this.isReadyToReOffer()){return false;}this.localHold=true;onhold.call(this,'local');eventHandlers={succeeded:function succeeded(){if(done){done();}},failed:function failed(){self.terminate({cause:JsSIP_C.causes.WEBRTC_ERROR,status_code:500,reason_phrase:'Hold Failed'});}};if(options.useUpdate){sendUpdate.call(this,{sdpOffer:true,eventHandlers:eventHandlers,extraHeaders:options.extraHeaders});}else{sendReinvite.call(this,{eventHandlers:eventHandlers,extraHeaders:options.extraHeaders});}return true;};RTCSession.prototype.unhold=function(options,done){debug('unhold()');options=options||{};var self=this,eventHandlers;if(this.status!==C.STATUS_WAITING_FOR_ACK&&this.status!==C.STATUS_CONFIRMED){return false;}if(this.localHold===false){return false;}if(!this.isReadyToReOffer()){return false;}this.localHold=false;onunhold.call(this,'local');eventHandlers={succeeded:function succeeded(){if(done){done();}},failed:function failed(){self.terminate({cause:JsSIP_C.causes.WEBRTC_ERROR,status_code:500,reason_phrase:'Unhold Failed'});}};if(options.useUpdate){sendUpdate.call(this,{sdpOffer:true,eventHandlers:eventHandlers,extraHeaders:options.extraHeaders});}else{sendReinvite.call(this,{eventHandlers:eventHandlers,extraHeaders:options.extraHeaders});}return true;};RTCSession.prototype.renegotiate=function(options,done){debug('renegotiate()');options=options||{};var self=this,eventHandlers,rtcOfferConstraints=options.rtcOfferConstraints||null;if(this.status!==C.STATUS_WAITING_FOR_ACK&&this.status!==C.STATUS_CONFIRMED){return false;}if(!this.isReadyToReOffer()){return false;}eventHandlers={succeeded:function succeeded(){if(done){done();}},failed:function failed(){self.terminate({cause:JsSIP_C.causes.WEBRTC_ERROR,status_code:500,reason_phrase:'Media Renegotiation Failed'});}};setLocalMediaStatus.call(this);if(options.useUpdate){sendUpdate.call(this,{sdpOffer:true,eventHandlers:eventHandlers,rtcOfferConstraints:rtcOfferConstraints,extraHeaders:options.extraHeaders});}else{sendReinvite.call(this,{eventHandlers:eventHandlers,rtcOfferConstraints:rtcOfferConstraints,extraHeaders:options.extraHeaders});}return true;};/**
             * Refer
             */RTCSession.prototype.refer=function(target,options){debug('refer()');var self=this,originalTarget=target,referSubscriber,id;if(this.status!==C.STATUS_WAITING_FOR_ACK&&this.status!==C.STATUS_CONFIRMED){return false;}// Check target validity
target=this.ua.normalizeTarget(target);if(!target){throw new TypeError('Invalid target: '+originalTarget);}referSubscriber=new RTCSession_ReferSubscriber(this);referSubscriber.sendRefer(target,options);// Store in the map
id=referSubscriber.outgoingRequest.cseq;this.referSubscribers[id]=referSubscriber;// Listen for ending events so we can remove it from the map
referSubscriber.on('requestFailed',function(){delete self.referSubscribers[id];});referSubscriber.on('accepted',function(){delete self.referSubscribers[id];});referSubscriber.on('failed',function(){delete self.referSubscribers[id];});return referSubscriber;};/**
             * In dialog Request Reception
             */RTCSession.prototype.receiveRequest=function(request){debug('receiveRequest()');var contentType,self=this;if(request.method===JsSIP_C.CANCEL){/* RFC3261 15 States that a UAS may have accepted an invitation while a CANCEL
             * was in progress and that the UAC MAY continue with the session established by
             * any 2xx response, or MAY terminate with BYE. JsSIP does continue with the
             * established session. So the CANCEL is processed only if the session is not yet
             * established.
             */ /*
             * Terminate the whole session in case the user didn't accept (or yet send the answer)
             * nor reject the request opening the session.
             */if(this.status===C.STATUS_WAITING_FOR_ANSWER||this.status===C.STATUS_ANSWERED){this.status=C.STATUS_CANCELED;this.request.reply(487);failed.call(this,'remote',request,JsSIP_C.causes.CANCELED);}}else{// Requests arriving here are in-dialog requests.
switch(request.method){case JsSIP_C.ACK:if(this.status!==C.STATUS_WAITING_FOR_ACK){return;}// Update signaling status.
this.status=C.STATUS_CONFIRMED;clearTimeout(this.timers.ackTimer);clearTimeout(this.timers.invite2xxTimer);if(this.late_sdp){if(!request.body){this.terminate({cause:JsSIP_C.causes.MISSING_SDP,status_code:400});break;}var e={originator:'remote',type:'answer',sdp:request.body};this.emit('sdp',e);this.connection.setRemoteDescription(new rtcninja.RTCSessionDescription({type:'answer',sdp:e.sdp}),// success
function(){if(!self.is_confirmed){confirmed.call(self,'remote',request);}},// failure
function(){self.terminate({cause:JsSIP_C.causes.BAD_MEDIA_DESCRIPTION,status_code:488});});}else{if(!this.is_confirmed){confirmed.call(this,'remote',request);}}break;case JsSIP_C.BYE:if(this.status===C.STATUS_CONFIRMED){request.reply(200);ended.call(this,'remote',request,JsSIP_C.causes.BYE);}else if(this.status===C.STATUS_INVITE_RECEIVED){request.reply(200);this.request.reply(487,'BYE Received');ended.call(this,'remote',request,JsSIP_C.causes.BYE);}else{request.reply(403,'Wrong Status');}break;case JsSIP_C.INVITE:if(this.status===C.STATUS_CONFIRMED){if(request.hasHeader('replaces')){receiveReplaces.call(this,request);}else{receiveReinvite.call(this,request);}}else{request.reply(403,'Wrong Status');}break;case JsSIP_C.INFO:if(this.status===C.STATUS_CONFIRMED||this.status===C.STATUS_WAITING_FOR_ACK||this.status===C.STATUS_INVITE_RECEIVED){contentType=request.getHeader('content-type');if(contentType&&contentType.match(/^application\/dtmf-relay/i)){new RTCSession_DTMF(this).init_incoming(request);}else{request.reply(415);}}else{request.reply(403,'Wrong Status');}break;case JsSIP_C.UPDATE:if(this.status===C.STATUS_CONFIRMED){receiveUpdate.call(this,request);}else{request.reply(403,'Wrong Status');}break;case JsSIP_C.REFER:if(this.status===C.STATUS_CONFIRMED){receiveRefer.call(this,request);}else{request.reply(403,'Wrong Status');}break;case JsSIP_C.NOTIFY:if(this.status===C.STATUS_CONFIRMED){receiveNotify.call(this,request);}else{request.reply(403,'Wrong Status');}break;default:request.reply(501);}}};/**
             * Session Callbacks
             */RTCSession.prototype.onTransportError=function(){debugerror('onTransportError()');if(this.status!==C.STATUS_TERMINATED){this.terminate({status_code:500,reason_phrase:JsSIP_C.causes.CONNECTION_ERROR,cause:JsSIP_C.causes.CONNECTION_ERROR});}};RTCSession.prototype.onRequestTimeout=function(){debug('onRequestTimeout');if(this.status!==C.STATUS_TERMINATED){this.terminate({status_code:408,reason_phrase:JsSIP_C.causes.REQUEST_TIMEOUT,cause:JsSIP_C.causes.REQUEST_TIMEOUT});}};RTCSession.prototype.onDialogError=function(){debugerror('onDialogError()');if(this.status!==C.STATUS_TERMINATED){this.terminate({status_code:500,reason_phrase:JsSIP_C.causes.DIALOG_ERROR,cause:JsSIP_C.causes.DIALOG_ERROR});}};// Called from DTMF handler.
RTCSession.prototype.newDTMF=function(data){debug('newDTMF()');this.emit('newDTMF',data);};RTCSession.prototype.resetLocalMedia=function(){debug('resetLocalMedia()');// Reset all but remoteHold.
this.localHold=false;this.audioMuted=false;this.videoMuted=false;setLocalMediaStatus.call(this);};/**
             * Private API.
             */ /**
             * RFC3261 13.3.1.4
             * Response retransmissions cannot be accomplished by transaction layer
             *  since it is destroyed when receiving the first 2xx answer
             */function setInvite2xxTimer(request,body){var self=this,timeout=Timers.T1;this.timers.invite2xxTimer=setTimeout(function invite2xxRetransmission(){if(self.status!==C.STATUS_WAITING_FOR_ACK){return;}request.reply(200,null,['Contact: '+self.contact],body);if(timeout<Timers.T2){timeout=timeout*2;if(timeout>Timers.T2){timeout=Timers.T2;}}self.timers.invite2xxTimer=setTimeout(invite2xxRetransmission,timeout);},timeout);}/**
             * RFC3261 14.2
             * If a UAS generates a 2xx response and never receives an ACK,
             *  it SHOULD generate a BYE to terminate the dialog.
             */function setACKTimer(){var self=this;this.timers.ackTimer=setTimeout(function(){if(self.status===C.STATUS_WAITING_FOR_ACK){debug('no ACK received, terminating the session');clearTimeout(self.timers.invite2xxTimer);sendRequest.call(self,JsSIP_C.BYE);ended.call(self,'remote',null,JsSIP_C.causes.NO_ACK);}},Timers.TIMER_H);}function createRTCConnection(pcConfig,rtcConstraints){var self=this;this.connection=new rtcninja.RTCPeerConnection(pcConfig,rtcConstraints);this.connection.onaddstream=function(event,stream){self.emit('addstream',{stream:stream});};this.connection.onremovestream=function(event,stream){self.emit('removestream',{stream:stream});};this.connection.oniceconnectionstatechange=function(event,state){self.emit('iceconnectionstatechange',{state:state});// TODO: Do more with different states.
if(state==='failed'){self.terminate({cause:JsSIP_C.causes.RTP_TIMEOUT,status_code:200,reason_phrase:JsSIP_C.causes.RTP_TIMEOUT});}};}function createLocalDescription(type,onSuccess,onFailure,constraints){debug('createLocalDescription()');var self=this;var connection=this.connection;this.rtcReady=false;if(type==='offer'){connection.createOffer(// success
createSucceeded,// failure
function(error){self.rtcReady=true;if(onFailure){onFailure(error);}},// constraints
constraints);}else if(type==='answer'){connection.createAnswer(// success
createSucceeded,// failure
function(error){self.rtcReady=true;if(onFailure){onFailure(error);}},// constraints
constraints);}else{throw new Error('createLocalDescription() | type must be "offer" or "answer", but "'+type+'" was given');}// createAnswer or createOffer succeeded
function createSucceeded(desc){connection.onicecandidate=function(event,candidate){if(!candidate){connection.onicecandidate=null;self.rtcReady=true;if(onSuccess){var e={originator:'local',type:type,sdp:connection.localDescription.sdp};self.emit('sdp',e);onSuccess(e.sdp);}onSuccess=null;}};connection.setLocalDescription(desc,// success
function(){if(connection.iceGatheringState==='complete'){self.rtcReady=true;if(onSuccess){var e={originator:'local',type:type,sdp:connection.localDescription.sdp};self.emit('sdp',e);onSuccess(e.sdp);}onSuccess=null;}},// failure
function(error){self.rtcReady=true;if(onFailure){onFailure(error);}});}}/**
             * Dialog Management
             */function createDialog(message,type,early){var dialog,early_dialog,local_tag=type==='UAS'?message.to_tag:message.from_tag,remote_tag=type==='UAS'?message.from_tag:message.to_tag,id=message.call_id+local_tag+remote_tag;early_dialog=this.earlyDialogs[id];// Early Dialog
if(early){if(early_dialog){return true;}else{early_dialog=new Dialog(this,message,type,Dialog.C.STATUS_EARLY);// Dialog has been successfully created.
if(early_dialog.error){debug(early_dialog.error);failed.call(this,'remote',message,JsSIP_C.causes.INTERNAL_ERROR);return false;}else{this.earlyDialogs[id]=early_dialog;return true;}}}// Confirmed Dialog
else{this.from_tag=message.from_tag;this.to_tag=message.to_tag;// In case the dialog is in _early_ state, update it
if(early_dialog){early_dialog.update(message,type);this.dialog=early_dialog;delete this.earlyDialogs[id];return true;}// Otherwise, create a _confirmed_ dialog
dialog=new Dialog(this,message,type);if(dialog.error){debug(dialog.error);failed.call(this,'remote',message,JsSIP_C.causes.INTERNAL_ERROR);return false;}else{this.dialog=dialog;return true;}}}/**
             * In dialog INVITE Reception
             */function receiveReinvite(request){debug('receiveReinvite()');var sdp,idx,direction,m,self=this,contentType=request.getHeader('Content-Type'),hold=false,rejected=false,data={request:request,callback:undefined,reject:reject.bind(this)};function reject(options){options=options||{};rejected=true;var status_code=options.status_code||403,reason_phrase=options.reason_phrase||'',extraHeaders=options.extraHeaders&&options.extraHeaders.slice()||[];if(this.status!==C.STATUS_CONFIRMED){return false;}if(status_code<300||status_code>=700){throw new TypeError('Invalid status_code: '+status_code);}request.reply(status_code,reason_phrase,extraHeaders);}// Emit 'reinvite'.
this.emit('reinvite',data);if(rejected){return;}if(request.body){this.late_sdp=false;if(contentType!=='application/sdp'){debug('invalid Content-Type');request.reply(415);return;}sdp=request.parseSDP();for(idx=0;idx<sdp.media.length;idx++){m=sdp.media[idx];if(holdMediaTypes.indexOf(m.type)===-1){continue;}direction=m.direction||sdp.direction||'sendrecv';if(direction==='sendonly'||direction==='inactive'){hold=true;}// If at least one of the streams is active don't emit 'hold'.
else{hold=false;break;}}var e={originator:'remote',type:'offer',sdp:request.body};this.emit('sdp',e);this.connection.setRemoteDescription(new rtcninja.RTCSessionDescription({type:'offer',sdp:e.sdp}),// success
answer,// failure
function(){request.reply(488);});}else{this.late_sdp=true;answer();}function answer(){createSdp(// onSuccess
function(sdp){var extraHeaders=['Contact: '+self.contact];handleSessionTimersInIncomingRequest.call(self,request,extraHeaders);if(self.late_sdp){sdp=mangleOffer.call(self,sdp);}request.reply(200,null,extraHeaders,sdp,function(){self.status=C.STATUS_WAITING_FOR_ACK;setInvite2xxTimer.call(self,request,sdp);setACKTimer.call(self);});// If callback is given execute it.
if(typeof data.callback==='function'){data.callback();}},// onFailure
function(){request.reply(500);});}function createSdp(onSuccess,onFailure){if(!self.late_sdp){if(self.remoteHold===true&&hold===false){self.remoteHold=false;onunhold.call(self,'remote');}else if(self.remoteHold===false&&hold===true){self.remoteHold=true;onhold.call(self,'remote');}createLocalDescription.call(self,'answer',onSuccess,onFailure,self.rtcAnswerConstraints);}else{createLocalDescription.call(self,'offer',onSuccess,onFailure,self.rtcOfferConstraints);}}}/**
             * In dialog UPDATE Reception
             */function receiveUpdate(request){debug('receiveUpdate()');var sdp,idx,direction,m,self=this,contentType=request.getHeader('Content-Type'),rejected=false,hold=false,data={request:request,callback:undefined,reject:reject.bind(this)};function reject(options){options=options||{};rejected=true;var status_code=options.status_code||403,reason_phrase=options.reason_phrase||'',extraHeaders=options.extraHeaders&&options.extraHeaders.slice()||[];if(this.status!==C.STATUS_CONFIRMED){return false;}if(status_code<300||status_code>=700){throw new TypeError('Invalid status_code: '+status_code);}request.reply(status_code,reason_phrase,extraHeaders);}// Emit 'update'.
this.emit('update',data);if(rejected){return;}if(!request.body){var extraHeaders=[];handleSessionTimersInIncomingRequest.call(this,request,extraHeaders);request.reply(200,null,extraHeaders);return;}if(contentType!=='application/sdp'){debug('invalid Content-Type');request.reply(415);return;}sdp=request.parseSDP();for(idx=0;idx<sdp.media.length;idx++){m=sdp.media[idx];if(holdMediaTypes.indexOf(m.type)===-1){continue;}direction=m.direction||sdp.direction||'sendrecv';if(direction==='sendonly'||direction==='inactive'){hold=true;}// If at least one of the streams is active don't emit 'hold'.
else{hold=false;break;}}var e={originator:'remote',type:'offer',sdp:request.body};this.emit('sdp',e);this.connection.setRemoteDescription(new rtcninja.RTCSessionDescription({type:'offer',sdp:e.sdp}),// success
function(){if(self.remoteHold===true&&hold===false){self.remoteHold=false;onunhold.call(self,'remote');}else if(self.remoteHold===false&&hold===true){self.remoteHold=true;onhold.call(self,'remote');}createLocalDescription.call(self,'answer',// success
function(sdp){var extraHeaders=['Contact: '+self.contact];handleSessionTimersInIncomingRequest.call(self,request,extraHeaders);request.reply(200,null,extraHeaders,sdp);// If callback is given execute it.
if(typeof data.callback==='function'){data.callback();}},// failure
function(){request.reply(500);});},// failure
function(){request.reply(488);},// Constraints.
this.rtcAnswerConstraints);}/**
             * In dialog Refer Reception
             */function receiveRefer(request){debug('receiveRefer()');var notifier,self=this;function _accept(initCallback,options){var session,replaces;options=options||{};initCallback=typeof initCallback==='function'?initCallback:null;if(this.status!==C.STATUS_WAITING_FOR_ACK&&this.status!==C.STATUS_CONFIRMED){return false;}session=new RTCSession(this.ua);session.on('progress',function(e){notifier.notify(e.response.status_code,e.response.reason_phrase);});session.on('accepted',function(e){notifier.notify(e.response.status_code,e.response.reason_phrase);});session.on('failed',function(e){if(e.message){notifier.notify(e.message.status_code,e.message.reason_phrase);}else{notifier.notify(487,e.cause);}});// Consider the Replaces header present in the Refer-To URI
if(request.refer_to.uri.hasHeader('replaces')){replaces=decodeURIComponent(request.refer_to.uri.getHeader('replaces'));options.extraHeaders=options.extraHeaders||[];options.extraHeaders.push('Replaces: '+replaces);}session.connect(request.refer_to.uri.toAor(),options,initCallback);}function _reject(){notifier.notify(603);}if(_typeof(request.refer_to)===undefined){debug('no Refer-To header field present in REFER');request.reply(400);return;}if(request.refer_to.uri.scheme!==JsSIP_C.SIP){debug('Refer-To header field points to a non-SIP URI scheme');request.reply(416);return;}// reply before the transaction timer expires
request.reply(202);notifier=new RTCSession_ReferNotifier(this,request.cseq);// Emit 'refer'.
this.emit('refer',{request:request,accept:function accept(initCallback,options){_accept.call(self,initCallback,options);},reject:function reject(){_reject.call(self);}});}/**
             * In dialog Notify Reception
             */function receiveNotify(request){debug('receiveNotify()');if(_typeof(request.event)===undefined){request.reply(400);}switch(request.event.event){case'refer':{var id=request.event.params.id;var referSubscriber=this.referSubscribers[id];if(!referSubscriber){request.reply(481,'Subscription does not exist');return;}referSubscriber.receiveNotify(request);request.reply(200);break;}default:{request.reply(489);}}}/**
             * INVITE with Replaces Reception
             */function receiveReplaces(request){debug('receiveReplaces()');var self=this;function _accept2(initCallback){var session;if(this.status!==C.STATUS_WAITING_FOR_ACK&&this.status!==C.STATUS_CONFIRMED){return false;}session=new RTCSession(this.ua);// terminate the current session when the new one is confirmed
session.on('confirmed',function(){self.terminate();});session.init_incoming(request,initCallback);}function _reject2(){debug('Replaced INVITE rejected by the user');request.reply(486);}// Emit 'replace'.
this.emit('replaces',{request:request,accept:function accept(initCallback){_accept2.call(self,initCallback);},reject:function reject(){_reject2.call(self);}});}/**
             * Initial Request Sender
             */function sendInitialRequest(mediaConstraints,rtcOfferConstraints,mediaStream){var self=this;var request_sender=new RequestSender(self,this.ua);this.receiveResponse=function(response){receiveInviteResponse.call(self,response);};// If a local MediaStream is given use it.
if(mediaStream){// Wait a bit so the app can set events such as 'peerconnection' and 'connecting'.
setTimeout(function(){userMediaSucceeded(mediaStream);});// If at least audio or video is requested prompt getUserMedia.
}else if(mediaConstraints.audio||mediaConstraints.video){this.localMediaStreamLocallyGenerated=true;/**
                     * @author GuanYong
                     * Change By 2018/7/25. Support Remote Desktop.
                     */if(mediaConstraints.video&&mediaConstraints.video.mandatory&&mediaConstraints.video.mandatory.chromeMediaSource==='desktop'){// 添加语音流
rtcninja.getUserMedia({video:false,audio:true},function(stream){self.connection.addStream(stream);rtcninja.getUserMedia(mediaConstraints,userMediaSucceeded,userMediaFailed);},userMediaFailed);}else{rtcninja.getUserMedia(mediaConstraints,userMediaSucceeded,userMediaFailed);}// Otherwise don't prompt getUserMedia.
}else{userMediaSucceeded(null);}// User media succeeded
function userMediaSucceeded(stream){if(self.status===C.STATUS_TERMINATED){return;}self.localMediaStream=stream;if(stream){self.connection.addStream(stream);}// Notify the app with the RTCPeerConnection so it can do stuff on it
// before generating the offer.
self.emit('peerconnection',{peerconnection:self.connection});connecting.call(self,self.request);createLocalDescription.call(self,'offer',rtcSucceeded,rtcFailed,rtcOfferConstraints);}// User media failed
function userMediaFailed(){if(self.status===C.STATUS_TERMINATED){return;}failed.call(self,'local',null,JsSIP_C.causes.USER_DENIED_MEDIA_ACCESS);}function rtcSucceeded(desc){if(self.isCanceled||self.status===C.STATUS_TERMINATED){return;}self.request.body=desc;self.status=C.STATUS_INVITE_SENT;// Emit 'sending' so the app can mangle the body before the request
// is sent.
self.emit('sending',{request:self.request});request_sender.send();}function rtcFailed(){if(self.status===C.STATUS_TERMINATED){return;}failed.call(self,'system',null,JsSIP_C.causes.WEBRTC_ERROR);}}/**
             * Reception of Response for Initial INVITE
             */function receiveInviteResponse(response){debug('receiveInviteResponse()');var cause,dialog,e,self=this;// Handle 2XX retransmissions and responses from forked requests
if(this.dialog&&response.status_code>=200&&response.status_code<=299){/*
             * If it is a retransmission from the endpoint that established
             * the dialog, send an ACK
             */if(this.dialog.id.call_id===response.call_id&&this.dialog.id.local_tag===response.from_tag&&this.dialog.id.remote_tag===response.to_tag){sendRequest.call(this,JsSIP_C.ACK);return;}// If not, send an ACK  and terminate
else{dialog=new Dialog(this,response,'UAC');if(dialog.error!==undefined){debug(dialog.error);return;}dialog.sendRequest({owner:{status:C.STATUS_TERMINATED},onRequestTimeout:function onRequestTimeout(){},onTransportError:function onTransportError(){},onDialogError:function onDialogError(){},receiveResponse:function receiveResponse(){}},JsSIP_C.ACK);dialog.sendRequest({owner:{status:C.STATUS_TERMINATED},onRequestTimeout:function onRequestTimeout(){},onTransportError:function onTransportError(){},onDialogError:function onDialogError(){},receiveResponse:function receiveResponse(){}},JsSIP_C.BYE);return;}}// Proceed to cancellation if the user requested.
if(this.isCanceled){// Remove the flag. We are done.
this.isCanceled=false;if(response.status_code>=100&&response.status_code<200){this.request.cancel(this.cancelReason);}else if(response.status_code>=200&&response.status_code<299){acceptAndTerminate.call(this,response);}return;}if(this.status!==C.STATUS_INVITE_SENT&&this.status!==C.STATUS_1XX_RECEIVED){return;}switch(true){case /^100$/.test(response.status_code):this.status=C.STATUS_1XX_RECEIVED;break;case /^1[0-9]{2}$/.test(response.status_code):// Do nothing with 1xx responses without To tag.
if(!response.to_tag){debug('1xx response received without to tag');break;}// Create Early Dialog if 1XX comes with contact
if(response.hasHeader('contact')){// An error on dialog creation will fire 'failed' event
if(!createDialog.call(this,response,'UAC',true)){break;}}this.status=C.STATUS_1XX_RECEIVED;progress.call(this,'remote',response);if(!response.body){break;}e={originator:'remote',type:'pranswer',sdp:response.body};this.emit('sdp',e);this.connection.setRemoteDescription(new rtcninja.RTCSessionDescription({type:'pranswer',sdp:e.sdp}),// success
null,// failure
null);break;case /^2[0-9]{2}$/.test(response.status_code):this.status=C.STATUS_CONFIRMED;if(!response.body){acceptAndTerminate.call(this,response,400,JsSIP_C.causes.MISSING_SDP);failed.call(this,'remote',response,JsSIP_C.causes.BAD_MEDIA_DESCRIPTION);break;}// An error on dialog creation will fire 'failed' event
if(!createDialog.call(this,response,'UAC')){break;}e={originator:'remote',type:'answer',sdp:response.body};this.emit('sdp',e);this.connection.setRemoteDescription(new rtcninja.RTCSessionDescription({type:'answer',sdp:e.sdp}),// success
function(){// Handle Session Timers.
handleSessionTimersInIncomingResponse.call(self,response);accepted.call(self,'remote',response);sendRequest.call(self,JsSIP_C.ACK);confirmed.call(self,'local',null);},// failure
function(){acceptAndTerminate.call(self,response,488,'Not Acceptable Here');failed.call(self,'remote',response,JsSIP_C.causes.BAD_MEDIA_DESCRIPTION);});break;default:cause=Utils.sipErrorCause(response.status_code);failed.call(this,'remote',response,cause);}}/**
             * Send Re-INVITE
             */function sendReinvite(options){debug('sendReinvite()');options=options||{};var self=this,extraHeaders=options.extraHeaders||[],eventHandlers=options.eventHandlers||{},rtcOfferConstraints=options.rtcOfferConstraints||this.rtcOfferConstraints||null,succeeded=false;extraHeaders.push('Contact: '+this.contact);extraHeaders.push('Content-Type: application/sdp');// Session Timers.
if(this.sessionTimers.running){extraHeaders.push('Session-Expires: '+this.sessionTimers.currentExpires+';refresher='+(this.sessionTimers.refresher?'uac':'uas'));}createLocalDescription.call(this,'offer',// success
function(sdp){sdp=mangleOffer.call(self,sdp);var request=new RTCSession_Request(self,JsSIP_C.INVITE);request.send({extraHeaders:extraHeaders,body:sdp,eventHandlers:{onSuccessResponse:function onSuccessResponse(response){onSucceeded(response);succeeded=true;},onErrorResponse:function onErrorResponse(response){onFailed(response);},onTransportError:function onTransportError(){self.onTransportError();// Do nothing because session ends.
},onRequestTimeout:function onRequestTimeout(){self.onRequestTimeout();// Do nothing because session ends.
},onDialogError:function onDialogError(){self.onDialogError();// Do nothing because session ends.
}}});},// failure
function(){onFailed();},// RTC constraints.
rtcOfferConstraints);function onSucceeded(response){if(self.status===C.STATUS_TERMINATED){return;}sendRequest.call(self,JsSIP_C.ACK);// If it is a 2XX retransmission exit now.
if(succeeded){return;}// Handle Session Timers.
handleSessionTimersInIncomingResponse.call(self,response);// Must have SDP answer.
if(!response.body){onFailed();return;}else if(response.getHeader('Content-Type')!=='application/sdp'){onFailed();return;}var e={originator:'remote',type:'answer',sdp:response.body};self.emit('sdp',e);self.connection.setRemoteDescription(new rtcninja.RTCSessionDescription({type:'answer',sdp:e.sdp}),// success
function(){if(eventHandlers.succeeded){eventHandlers.succeeded(response);}},// failure
function(){onFailed();});}function onFailed(response){if(eventHandlers.failed){eventHandlers.failed(response);}}}/**
             * Send UPDATE
             */function sendUpdate(options){debug('sendUpdate()');options=options||{};var self=this,extraHeaders=options.extraHeaders||[],eventHandlers=options.eventHandlers||{},rtcOfferConstraints=options.rtcOfferConstraints||this.rtcOfferConstraints||null,sdpOffer=options.sdpOffer||false,succeeded=false;extraHeaders.push('Contact: '+this.contact);// Session Timers.
if(this.sessionTimers.running){extraHeaders.push('Session-Expires: '+this.sessionTimers.currentExpires+';refresher='+(this.sessionTimers.refresher?'uac':'uas'));}if(sdpOffer){extraHeaders.push('Content-Type: application/sdp');createLocalDescription.call(this,'offer',// success
function(sdp){sdp=mangleOffer.call(self,sdp);var request=new RTCSession_Request(self,JsSIP_C.UPDATE);request.send({extraHeaders:extraHeaders,body:sdp,eventHandlers:{onSuccessResponse:function onSuccessResponse(response){onSucceeded(response);succeeded=true;},onErrorResponse:function onErrorResponse(response){onFailed(response);},onTransportError:function onTransportError(){self.onTransportError();// Do nothing because session ends.
},onRequestTimeout:function onRequestTimeout(){self.onRequestTimeout();// Do nothing because session ends.
},onDialogError:function onDialogError(){self.onDialogError();// Do nothing because session ends.
}}});},// failure
function(){onFailed();},// RTC constraints.
rtcOfferConstraints);}// No SDP.
else{var request=new RTCSession_Request(self,JsSIP_C.UPDATE);request.send({extraHeaders:extraHeaders,eventHandlers:{onSuccessResponse:function onSuccessResponse(response){onSucceeded(response);},onErrorResponse:function onErrorResponse(response){onFailed(response);},onTransportError:function onTransportError(){self.onTransportError();// Do nothing because session ends.
},onRequestTimeout:function onRequestTimeout(){self.onRequestTimeout();// Do nothing because session ends.
},onDialogError:function onDialogError(){self.onDialogError();// Do nothing because session ends.
}}});}function onSucceeded(response){if(self.status===C.STATUS_TERMINATED){return;}// If it is a 2XX retransmission exit now.
if(succeeded){return;}// Handle Session Timers.
handleSessionTimersInIncomingResponse.call(self,response);// Must have SDP answer.
if(sdpOffer){if(!response.body){onFailed();return;}else if(response.getHeader('Content-Type')!=='application/sdp'){onFailed();return;}var e={originator:'remote',type:'answer',sdp:response.body};self.emit('sdp',e);self.connection.setRemoteDescription(new rtcninja.RTCSessionDescription({type:'answer',sdp:e.sdp}),// success
function(){if(eventHandlers.succeeded){eventHandlers.succeeded(response);}},// failure
function(){onFailed();});}// No SDP answer.
else{if(eventHandlers.succeeded){eventHandlers.succeeded(response);}}}function onFailed(response){if(eventHandlers.failed){eventHandlers.failed(response);}}}function acceptAndTerminate(response,status_code,reason_phrase){debug('acceptAndTerminate()');var extraHeaders=[];if(status_code){reason_phrase=reason_phrase||JsSIP_C.REASON_PHRASE[status_code]||'';extraHeaders.push('Reason: SIP ;cause='+status_code+'; text="'+reason_phrase+'"');}// An error on dialog creation will fire 'failed' event
if(this.dialog||createDialog.call(this,response,'UAC')){sendRequest.call(this,JsSIP_C.ACK);sendRequest.call(this,JsSIP_C.BYE,{extraHeaders:extraHeaders});}// Update session status.
this.status=C.STATUS_TERMINATED;}/**
             * Send a generic in-dialog Request
             */function sendRequest(method,options){debug('sendRequest()');var request=new RTCSession_Request(this,method);request.send(options);}/**
             * Correctly set the SDP direction attributes if the call is on local hold
             */function mangleOffer(sdp){var idx,length,m;if(!this.localHold&&!this.remoteHold){return sdp;}sdp=sdp_transform.parse(sdp);// Local hold.
if(this.localHold&&!this.remoteHold){debug('mangleOffer() | me on hold, mangling offer');length=sdp.media.length;for(idx=0;idx<length;idx++){m=sdp.media[idx];if(holdMediaTypes.indexOf(m.type)===-1){continue;}if(!m.direction){m.direction='sendonly';}else if(m.direction==='sendrecv'){m.direction='sendonly';}else if(m.direction==='recvonly'){m.direction='inactive';}}}// Local and remote hold.
else if(this.localHold&&this.remoteHold){debug('mangleOffer() | both on hold, mangling offer');length=sdp.media.length;for(idx=0;idx<length;idx++){m=sdp.media[idx];if(holdMediaTypes.indexOf(m.type)===-1){continue;}m.direction='inactive';}}// Remote hold.
else if(this.remoteHold){debug('mangleOffer() | remote on hold, mangling offer');length=sdp.media.length;for(idx=0;idx<length;idx++){m=sdp.media[idx];if(holdMediaTypes.indexOf(m.type)===-1){continue;}if(!m.direction){m.direction='recvonly';}else if(m.direction==='sendrecv'){m.direction='recvonly';}else if(m.direction==='recvonly'){m.direction='inactive';}}}return sdp_transform.write(sdp);}function setLocalMediaStatus(){var enableAudio=true,enableVideo=true;if(this.localHold||this.remoteHold){enableAudio=false;enableVideo=false;}if(this.audioMuted){enableAudio=false;}if(this.videoMuted){enableVideo=false;}toogleMuteAudio.call(this,!enableAudio);toogleMuteVideo.call(this,!enableVideo);}/**
             * Handle SessionTimers for an incoming INVITE or UPDATE.
             * @param  {IncomingRequest} request
             * @param  {Array} responseExtraHeaders  Extra headers for the 200 response.
             */function handleSessionTimersInIncomingRequest(request,responseExtraHeaders){if(!this.sessionTimers.enabled){return;}var session_expires_refresher;if(request.session_expires&&request.session_expires>=JsSIP_C.MIN_SESSION_EXPIRES){this.sessionTimers.currentExpires=request.session_expires;session_expires_refresher=request.session_expires_refresher||'uas';}else{this.sessionTimers.currentExpires=this.sessionTimers.defaultExpires;session_expires_refresher='uas';}responseExtraHeaders.push('Session-Expires: '+this.sessionTimers.currentExpires+';refresher='+session_expires_refresher);this.sessionTimers.refresher=session_expires_refresher==='uas';runSessionTimer.call(this);}/**
             * Handle SessionTimers for an incoming response to INVITE or UPDATE.
             * @param  {IncomingResponse} response
             */function handleSessionTimersInIncomingResponse(response){if(!this.sessionTimers.enabled){return;}var session_expires_refresher;if(response.session_expires&&response.session_expires>=JsSIP_C.MIN_SESSION_EXPIRES){this.sessionTimers.currentExpires=response.session_expires;session_expires_refresher=response.session_expires_refresher||'uac';}else{this.sessionTimers.currentExpires=this.sessionTimers.defaultExpires;session_expires_refresher='uac';}this.sessionTimers.refresher=session_expires_refresher==='uac';runSessionTimer.call(this);}function runSessionTimer(){var self=this;var expires=this.sessionTimers.currentExpires;this.sessionTimers.running=true;clearTimeout(this.sessionTimers.timer);// I'm the refresher.
if(this.sessionTimers.refresher){this.sessionTimers.timer=setTimeout(function(){if(self.status===C.STATUS_TERMINATED){return;}debug('runSessionTimer() | sending session refresh request');sendUpdate.call(self,{eventHandlers:{succeeded:function succeeded(response){handleSessionTimersInIncomingResponse.call(self,response);}}});},expires*500);// Half the given interval (as the RFC states).
}// I'm not the refresher.
else{this.sessionTimers.timer=setTimeout(function(){if(self.status===C.STATUS_TERMINATED){return;}debugerror('runSessionTimer() | timer expired, terminating the session');self.terminate({cause:JsSIP_C.causes.REQUEST_TIMEOUT,status_code:408,reason_phrase:'Session Timer Expired'});},expires*1100);}}function toogleMuteAudio(mute){var streamIdx,trackIdx,streamsLength,tracksLength,tracks,localStreams=this.connection.getLocalStreams();streamsLength=localStreams.length;for(streamIdx=0;streamIdx<streamsLength;streamIdx++){tracks=localStreams[streamIdx].getAudioTracks();tracksLength=tracks.length;for(trackIdx=0;trackIdx<tracksLength;trackIdx++){tracks[trackIdx].enabled=!mute;}}}function toogleMuteVideo(mute){var streamIdx,trackIdx,streamsLength,tracksLength,tracks,localStreams=this.connection.getLocalStreams();streamsLength=localStreams.length;for(streamIdx=0;streamIdx<streamsLength;streamIdx++){tracks=localStreams[streamIdx].getVideoTracks();tracksLength=tracks.length;for(trackIdx=0;trackIdx<tracksLength;trackIdx++){tracks[trackIdx].enabled=!mute;}}}function newRTCSession(originator,request){debug('newRTCSession');this.ua.newRTCSession({originator:originator,session:this,request:request});}function connecting(request){debug('session connecting');this.emit('connecting',{request:request});}function progress(originator,response){debug('session progress');this.emit('progress',{originator:originator,response:response||null});}function accepted(originator,message){debug('session accepted');this.start_time=new Date();this.emit('accepted',{originator:originator,response:message||null});}function confirmed(originator,ack){debug('session confirmed');this.is_confirmed=true;this.emit('confirmed',{originator:originator,ack:ack||null});}function ended(originator,message,cause){debug('session ended');this.end_time=new Date();this.close();this.emit('ended',{originator:originator,message:message||null,cause:cause});}function failed(originator,message,cause){debug('session failed');this.close();this.emit('failed',{originator:originator,message:message||null,cause:cause});}function onhold(originator){debug('session onhold');setLocalMediaStatus.call(this);this.emit('hold',{originator:originator});}function onunhold(originator){debug('session onunhold');setLocalMediaStatus.call(this);this.emit('unhold',{originator:originator});}function onmute(options){debug('session onmute');setLocalMediaStatus.call(this);this.emit('muted',{audio:options.audio,video:options.video});}function onunmute(options){debug('session onunmute');setLocalMediaStatus.call(this);this.emit('unmuted',{audio:options.audio,video:options.video});}},{"./Constants":1,"./Dialog":2,"./Exceptions":5,"./RTCSession/DTMF":12,"./RTCSession/ReferNotifier":13,"./RTCSession/ReferSubscriber":14,"./RTCSession/Request":15,"./RequestSender":17,"./SIPMessage":18,"./Timers":20,"./Transactions":21,"./Utils":25,"debug":33,"events":28,"rtcninja":43,"sdp-transform":37,"util":32}],12:[function(require,module,exports){module.exports=DTMF;var C={MIN_DURATION:70,MAX_DURATION:6000,DEFAULT_DURATION:100,MIN_INTER_TONE_GAP:50,DEFAULT_INTER_TONE_GAP:500};/**
             * Expose C object.
             */DTMF.C=C;/**
             * Dependencies.
             */var debug=require('debug')('JsSIP:RTCSession:DTMF');var debugerror=require('debug')('JsSIP:ERROR:RTCSession:DTMF');debugerror.log=console.warn.bind(console);var JsSIP_C=require('../Constants');var Exceptions=require('../Exceptions');var RTCSession=require('../RTCSession');function DTMF(session){this.owner=session;this.direction=null;this.tone=null;this.duration=null;}DTMF.prototype.send=function(tone,options){var extraHeaders,body;if(tone===undefined){throw new TypeError('Not enough arguments');}this.direction='outgoing';// Check RTCSession Status
if(this.owner.status!==RTCSession.C.STATUS_CONFIRMED&&this.owner.status!==RTCSession.C.STATUS_WAITING_FOR_ACK){throw new Exceptions.InvalidStateError(this.owner.status);}// Get DTMF options
options=options||{};extraHeaders=options.extraHeaders?options.extraHeaders.slice():[];this.eventHandlers=options.eventHandlers||{};// Check tone type
if(typeof tone==='string'){tone=tone.toUpperCase();}else if(typeof tone==='number'){tone=tone.toString();}else{throw new TypeError('Invalid tone: '+tone);}// Check tone value
if(!tone.match(/^[0-9A-D#*]$/)){throw new TypeError('Invalid tone: '+tone);}else{this.tone=tone;}// Duration is checked/corrected in RTCSession
this.duration=options.duration;extraHeaders.push('Content-Type: application/dtmf-relay');body='Signal='+this.tone+'\r\n';body+='Duration='+this.duration;this.owner.newDTMF({originator:'local',dtmf:this,request:this.request});this.owner.dialog.sendRequest(this,JsSIP_C.INFO,{extraHeaders:extraHeaders,body:body});};DTMF.prototype.receiveResponse=function(response){switch(true){case /^1[0-9]{2}$/.test(response.status_code):// Ignore provisional responses.
break;case /^2[0-9]{2}$/.test(response.status_code):debug('onSuccessResponse');if(this.eventHandlers.onSuccessResponse){this.eventHandlers.onSuccessResponse(response);}break;default:if(this.eventHandlers.onErrorResponse){this.eventHandlers.onErrorResponse(response);}break;}};DTMF.prototype.onRequestTimeout=function(){debugerror('onRequestTimeout');if(this.eventHandlers.onRequestTimeout){this.eventHandlers.onRequestTimeout();}};DTMF.prototype.onTransportError=function(){debugerror('onTransportError');if(this.eventHandlers.onTransportError){this.eventHandlers.onTransportError();}};DTMF.prototype.onDialogError=function(){debugerror('onDialogError');if(this.eventHandlers.onDialogError){this.eventHandlers.onDialogError();}};DTMF.prototype.init_incoming=function(request){var body,reg_tone=/^(Signal\s*?=\s*?)([0-9A-D#*]{1})(\s)?.*/,reg_duration=/^(Duration\s?=\s?)([0-9]{1,4})(\s)?.*/;this.direction='incoming';this.request=request;request.reply(200);if(request.body){body=request.body.split('\n');if(body.length>=1){if(reg_tone.test(body[0])){this.tone=body[0].replace(reg_tone,'$2');}}if(body.length>=2){if(reg_duration.test(body[1])){this.duration=parseInt(body[1].replace(reg_duration,'$2'),10);}}}if(!this.duration){this.duration=C.DEFAULT_DURATION;}if(!this.tone){debug('invalid INFO DTMF received, discarded');}else{this.owner.newDTMF({originator:'remote',dtmf:this,request:request});}};},{"../Constants":1,"../Exceptions":5,"../RTCSession":11,"debug":33}],13:[function(require,module,exports){module.exports=ReferNotifier;var C={event_type:'refer',body_type:'message/sipfrag;version=2.0',expires:300};/**
             * Dependencies.
             */var debug=require('debug')('JsSIP:RTCSession:ReferNotifier');var JsSIP_C=require('../Constants');var RTCSession_Request=require('./Request');function ReferNotifier(session,id,expires){this.session=session;this.id=id;this.expires=expires||C.expires;this.active=true;// The creation of a Notifier results in an immediate NOTIFY
this.notify(100);}ReferNotifier.prototype.notify=function(code,reason){debug('notify()');var state,self=this;if(this.active===false){return;}reason=reason||JsSIP_C.REASON_PHRASE[code]||'';if(code>=200){state='terminated;reason=noresource';}else{state='active;expires='+this.expires;}// put this in a try/catch block
var request=new RTCSession_Request(this.session,JsSIP_C.NOTIFY);request.send({extraHeaders:['Event: '+C.event_type+';id='+self.id,'Subscription-State: '+state,'Content-Type: '+C.body_type],body:'SIP/2.0 '+code+' '+reason,eventHandlers:{// if a negative response is received, subscription is canceled
onErrorResponse:function onErrorResponse(){self.active=false;}}});};},{"../Constants":1,"./Request":15,"debug":33}],14:[function(require,module,exports){module.exports=ReferSubscriber;var C={expires:120};/**
             * Dependencies.
             */var util=require('util');var events=require('events');var debug=require('debug')('JsSIP:RTCSession:ReferSubscriber');var JsSIP_C=require('../Constants');var Grammar=require('../Grammar');var RTCSession_Request=require('./Request');function ReferSubscriber(session){this.session=session;this.timer=null;// Instance of REFER OutgoingRequest
this.outgoingRequest=null;events.EventEmitter.call(this);}util.inherits(ReferSubscriber,events.EventEmitter);ReferSubscriber.prototype.sendRefer=function(target,options){debug('sendRefer()');var extraHeaders,eventHandlers,referTo,replaces=null,self=this;// Get REFER options
options=options||{};extraHeaders=options.extraHeaders?options.extraHeaders.slice():[];eventHandlers=options.eventHandlers||{};// Set event handlers
for(var event in eventHandlers){this.on(event,eventHandlers[event]);}// Replaces URI header field
if(options.replaces){replaces=options.replaces.request.call_id;replaces+=';to-tag='+options.replaces.to_tag;replaces+=';from-tag='+options.replaces.from_tag;replaces=encodeURIComponent(replaces);}// Refer-To header field
referTo='Refer-To: <'+target+(replaces?'?Replaces='+replaces:'')+'>';extraHeaders.push(referTo);var request=new RTCSession_Request(this.session,JsSIP_C.REFER);this.timer=setTimeout(function(){removeSubscriber.call(self);},C.expires*1000);request.send({extraHeaders:extraHeaders,eventHandlers:{onSuccessResponse:function onSuccessResponse(response){self.emit('requestSucceeded',{response:response});},onErrorResponse:function onErrorResponse(response){self.emit('requestFailed',{response:response,cause:JsSIP_C.causes.REJECTED});},onTransportError:function onTransportError(){removeSubscriber.call(self);self.emit('requestFailed',{response:null,cause:JsSIP_C.causes.CONNECTION_ERROR});},onRequestTimeout:function onRequestTimeout(){removeSubscriber.call(self);self.emit('requestFailed',{response:null,cause:JsSIP_C.causes.REQUEST_TIMEOUT});},onDialogError:function onDialogError(){removeSubscriber.call(self);self.emit('requestFailed',{response:null,cause:JsSIP_C.causes.DIALOG_ERROR});}}});this.outgoingRequest=request.outgoingRequest;};ReferSubscriber.prototype.receiveNotify=function(request){debug('receiveNotify()');var status_line;if(!request.body){return;}status_line=Grammar.parse(request.body,'Status_Line');if(status_line===-1){debug('receiveNotify() | error parsing NOTIFY body: "'+request.body+'"');return;}switch(true){case /^100$/.test(status_line.status_code):this.emit('trying',{request:request,status_line:status_line});break;case /^1[0-9]{2}$/.test(status_line.status_code):this.emit('progress',{request:request,status_line:status_line});break;case /^2[0-9]{2}$/.test(status_line.status_code):removeSubscriber.call(this);this.emit('accepted',{request:request,status_line:status_line});break;default:removeSubscriber.call(this);this.emit('failed',{request:request,status_line:status_line});break;}};// remove refer subscriber from the session
function removeSubscriber(){console.log('removeSubscriber()');clearTimeout(this.timer);this.session.referSubscriber=null;}},{"../Constants":1,"../Grammar":6,"./Request":15,"debug":33,"events":28,"util":32}],15:[function(require,module,exports){module.exports=Request;/**
             * Dependencies.
             */var debug=require('debug')('JsSIP:RTCSession:Request');var debugerror=require('debug')('JsSIP:ERROR:RTCSession:Request');debugerror.log=console.warn.bind(console);var JsSIP_C=require('../Constants');var Exceptions=require('../Exceptions');var RTCSession=require('../RTCSession');function Request(session,method){debug('new | %s',method);this.session=session;this.method=method;// Instance of OutgoingRequest
this.outgoingRequest=null;// Check RTCSession Status
if(this.session.status!==RTCSession.C.STATUS_1XX_RECEIVED&&this.session.status!==RTCSession.C.STATUS_WAITING_FOR_ANSWER&&this.session.status!==RTCSession.C.STATUS_WAITING_FOR_ACK&&this.session.status!==RTCSession.C.STATUS_CONFIRMED&&this.session.status!==RTCSession.C.STATUS_TERMINATED){throw new Exceptions.InvalidStateError(this.session.status);}/*
         * Allow sending BYE in TERMINATED status since the RTCSession
         * could had been terminated before the ACK had arrived.
         * RFC3261 Section 15, Paragraph 2
         */else if(this.session.status===RTCSession.C.STATUS_TERMINATED&&method!==JsSIP_C.BYE){throw new Exceptions.InvalidStateError(this.session.status);}}Request.prototype.send=function(options){options=options||{};var extraHeaders=options.extraHeaders&&options.extraHeaders.slice()||[],body=options.body||null;this.eventHandlers=options.eventHandlers||{};this.outgoingRequest=this.session.dialog.sendRequest(this,this.method,{extraHeaders:extraHeaders,body:body});};Request.prototype.receiveResponse=function(response){switch(true){case /^1[0-9]{2}$/.test(response.status_code):debug('onProgressResponse');if(this.eventHandlers.onProgressResponse){this.eventHandlers.onProgressResponse(response);}break;case /^2[0-9]{2}$/.test(response.status_code):debug('onSuccessResponse');if(this.eventHandlers.onSuccessResponse){this.eventHandlers.onSuccessResponse(response);}break;default:debug('onErrorResponse');if(this.eventHandlers.onErrorResponse){this.eventHandlers.onErrorResponse(response);}break;}};Request.prototype.onRequestTimeout=function(){debugerror('onRequestTimeout');if(this.eventHandlers.onRequestTimeout){this.eventHandlers.onRequestTimeout();}};Request.prototype.onTransportError=function(){debugerror('onTransportError');if(this.eventHandlers.onTransportError){this.eventHandlers.onTransportError();}};Request.prototype.onDialogError=function(){debugerror('onDialogError');if(this.eventHandlers.onDialogError){this.eventHandlers.onDialogError();}};},{"../Constants":1,"../Exceptions":5,"../RTCSession":11,"debug":33}],16:[function(require,module,exports){module.exports=Registrator;/**
             * Dependecies
             */var debug=require('debug')('JsSIP:Registrator');var Utils=require('./Utils');var JsSIP_C=require('./Constants');var SIPMessage=require('./SIPMessage');var RequestSender=require('./RequestSender');function Registrator(ua,transport){var reg_id=1;//Force reg_id to 1.
this.ua=ua;this.transport=transport;this.registrar=ua.configuration.registrar_server;this.expires=ua.configuration.register_expires;// Call-ID and CSeq values RFC3261 10.2
this.call_id=Utils.createRandomToken(22);this.cseq=0;// this.to_uri
this.to_uri=ua.configuration.uri;this.registrationTimer=null;// Set status
this.registered=false;// Contact header
this.contact=this.ua.contact.toString();// sip.ice media feature tag (RFC 5768)
this.contact+=';+sip.ice';// Custom headers for REGISTER and un-REGISTER.
this.extraHeaders=[];// Custom Contact header params for REGISTER and un-REGISTER.
this.extraContactParams='';if(reg_id){this.contact+=';reg-id='+reg_id;this.contact+=';+sip.instance="<urn:uuid:'+this.ua.configuration.instance_id+'>"';}}Registrator.prototype={setExtraHeaders:function setExtraHeaders(extraHeaders){if(!Array.isArray(extraHeaders)){extraHeaders=[];}this.extraHeaders=extraHeaders.slice();},setExtraContactParams:function setExtraContactParams(extraContactParams){if(!(extraContactParams instanceof Object)){extraContactParams={};}// Reset it.
this.extraContactParams='';for(var param_key in extraContactParams){var param_value=extraContactParams[param_key];this.extraContactParams+=';'+param_key;if(param_value){this.extraContactParams+='='+param_value;}}},register:function register(){var request_sender,cause,extraHeaders,self=this;extraHeaders=this.extraHeaders.slice();extraHeaders.push('Contact: '+this.contact+';expires='+this.expires+this.extraContactParams);extraHeaders.push('Expires: '+this.expires);this.request=new SIPMessage.OutgoingRequest(JsSIP_C.REGISTER,this.registrar,this.ua,{'to_uri':this.to_uri,'call_id':this.call_id,'cseq':this.cseq+=1},extraHeaders);request_sender=new RequestSender(this,this.ua);this.receiveResponse=function(response){var contact,expires,contacts=response.getHeaders('contact').length;// Discard responses to older REGISTER/un-REGISTER requests.
if(response.cseq!==this.cseq){return;}// Clear registration timer
if(this.registrationTimer!==null){clearTimeout(this.registrationTimer);this.registrationTimer=null;}switch(true){case /^1[0-9]{2}$/.test(response.status_code):// Ignore provisional responses.
break;case /^2[0-9]{2}$/.test(response.status_code):if(response.hasHeader('expires')){expires=response.getHeader('expires');}// Search the Contact pointing to us and update the expires value accordingly.
if(!contacts){debug('no Contact header in response to REGISTER, response ignored');break;}while(contacts--){contact=response.parseHeader('contact',contacts);if(contact.uri.user===this.ua.contact.uri.user){expires=contact.getParam('expires');break;}else{contact=null;}}if(!contact){debug('no Contact header pointing to us, response ignored');break;}if(!expires){expires=this.expires;}// Re-Register before the expiration interval has elapsed.
// For that, decrease the expires value. ie: 3 seconds
this.registrationTimer=setTimeout(function(){self.registrationTimer=null;self.register();},expires*1000-3000);//Save gruu values
if(contact.hasParam('temp-gruu')){this.ua.contact.temp_gruu=contact.getParam('temp-gruu').replace(/"/g,'');}if(contact.hasParam('pub-gruu')){this.ua.contact.pub_gruu=contact.getParam('pub-gruu').replace(/"/g,'');}if(!this.registered){this.registered=true;this.ua.registered({response:response});}break;// Interval too brief RFC3261 10.2.8
case /^423$/.test(response.status_code):if(response.hasHeader('min-expires')){// Increase our registration interval to the suggested minimum
this.expires=response.getHeader('min-expires');// Attempt the registration again immediately
this.register();}else{//This response MUST contain a Min-Expires header field
debug('423 response received for REGISTER without Min-Expires');this.registrationFailure(response,JsSIP_C.causes.SIP_FAILURE_CODE);}break;default:cause=Utils.sipErrorCause(response.status_code);this.registrationFailure(response,cause);}};this.onRequestTimeout=function(){this.registrationFailure(null,JsSIP_C.causes.REQUEST_TIMEOUT);};this.onTransportError=function(){this.registrationFailure(null,JsSIP_C.causes.CONNECTION_ERROR);};request_sender.send();},unregister:function unregister(options){var extraHeaders;if(!this.registered){debug('already unregistered');return;}options=options||{};this.registered=false;// Clear the registration timer.
if(this.registrationTimer!==null){clearTimeout(this.registrationTimer);this.registrationTimer=null;}extraHeaders=this.extraHeaders.slice();if(options.all){extraHeaders.push('Contact: *'+this.extraContactParams);extraHeaders.push('Expires: 0');this.request=new SIPMessage.OutgoingRequest(JsSIP_C.REGISTER,this.registrar,this.ua,{'to_uri':this.to_uri,'call_id':this.call_id,'cseq':this.cseq+=1},extraHeaders);}else{extraHeaders.push('Contact: '+this.contact+';expires=0'+this.extraContactParams);extraHeaders.push('Expires: 0');this.request=new SIPMessage.OutgoingRequest(JsSIP_C.REGISTER,this.registrar,this.ua,{'to_uri':this.to_uri,'call_id':this.call_id,'cseq':this.cseq+=1},extraHeaders);}var request_sender=new RequestSender(this,this.ua);this.receiveResponse=function(response){var cause;switch(true){case /^1[0-9]{2}$/.test(response.status_code):// Ignore provisional responses.
break;case /^2[0-9]{2}$/.test(response.status_code):this.unregistered(response);break;default:cause=Utils.sipErrorCause(response.status_code);this.unregistered(response,cause);}};this.onRequestTimeout=function(){this.unregistered(null,JsSIP_C.causes.REQUEST_TIMEOUT);};this.onTransportError=function(){this.unregistered(null,JsSIP_C.causes.CONNECTION_ERROR);};request_sender.send();},registrationFailure:function registrationFailure(response,cause){this.ua.registrationFailed({response:response||null,cause:cause});if(this.registered){this.registered=false;this.ua.unregistered({response:response||null,cause:cause});}},unregistered:function unregistered(response,cause){this.registered=false;this.ua.unregistered({response:response||null,cause:cause||null});},onTransportClosed:function onTransportClosed(){if(this.registrationTimer!==null){clearTimeout(this.registrationTimer);this.registrationTimer=null;}if(this.registered){this.registered=false;this.ua.unregistered({});}},close:function close(){if(this.registered){this.unregister();}}};},{"./Constants":1,"./RequestSender":17,"./SIPMessage":18,"./Utils":25,"debug":33}],17:[function(require,module,exports){module.exports=RequestSender;/**
             * Dependencies.
             */var debug=require('debug')('JsSIP:RequestSender');var JsSIP_C=require('./Constants');var UA=require('./UA');var DigestAuthentication=require('./DigestAuthentication');var Transactions=require('./Transactions');function RequestSender(applicant,ua){this.ua=ua;this.applicant=applicant;this.method=applicant.request.method;this.request=applicant.request;this.auth=null;this.challenged=false;this.staled=false;// If ua is in closing process or even closed just allow sending Bye and ACK
if(ua.status===UA.C.STATUS_USER_CLOSED&&(this.method!==JsSIP_C.BYE||this.method!==JsSIP_C.ACK)){this.onTransportError();}}/**
             * Create the client transaction and send the message.
             */RequestSender.prototype={send:function send(){switch(this.method){case'INVITE':this.clientTransaction=new Transactions.InviteClientTransaction(this,this.request,this.ua.transport);break;case'ACK':this.clientTransaction=new Transactions.AckClientTransaction(this,this.request,this.ua.transport);break;default:this.clientTransaction=new Transactions.NonInviteClientTransaction(this,this.request,this.ua.transport);}this.clientTransaction.send();},/**
                 * Callback fired when receiving a request timeout error from the client transaction.
                 * To be re-defined by the applicant.
                 */onRequestTimeout:function onRequestTimeout(){this.applicant.onRequestTimeout();},/**
                 * Callback fired when receiving a transport error from the client transaction.
                 * To be re-defined by the applicant.
                 */onTransportError:function onTransportError(){this.applicant.onTransportError();},/**
                 * Called from client transaction when receiving a correct response to the request.
                 * Authenticate request if needed or pass the response back to the applicant.
                 */receiveResponse:function receiveResponse(response){var cseq,challenge,authorization_header_name,status_code=response.status_code;/*
             * Authentication
             * Authenticate once. _challenged_ flag used to avoid infinite authentications.
             */if((status_code===401||status_code===407)&&(this.ua.configuration.password!==null||this.ua.configuration.ha1!==null)){// Get and parse the appropriate WWW-Authenticate or Proxy-Authenticate header.
if(response.status_code===401){challenge=response.parseHeader('www-authenticate');authorization_header_name='authorization';}else{challenge=response.parseHeader('proxy-authenticate');authorization_header_name='proxy-authorization';}// Verify it seems a valid challenge.
if(!challenge){debug(response.status_code+' with wrong or missing challenge, cannot authenticate');this.applicant.receiveResponse(response);return;}if(!this.challenged||!this.staled&&challenge.stale===true){if(!this.auth){this.auth=new DigestAuthentication({username:this.ua.configuration.authorization_user,password:this.ua.configuration.password,realm:this.ua.configuration.realm,ha1:this.ua.configuration.ha1});}// Verify that the challenge is really valid.
if(!this.auth.authenticate(this.request,challenge)){this.applicant.receiveResponse(response);return;}this.challenged=true;// Update ha1 and realm in the UA.
this.ua.set('realm',this.auth.get('realm'));this.ua.set('ha1',this.auth.get('ha1'));if(challenge.stale){this.staled=true;}if(response.method===JsSIP_C.REGISTER){cseq=this.applicant.cseq+=1;}else if(this.request.dialog){cseq=this.request.dialog.local_seqnum+=1;}else{cseq=this.request.cseq+1;}this.request=this.applicant.request=this.request.clone();this.request.cseq=cseq;this.request.setHeader('cseq',cseq+' '+this.method);this.request.setHeader(authorization_header_name,this.auth.toString());this.send();}else{this.applicant.receiveResponse(response);}}else{this.applicant.receiveResponse(response);}}};},{"./Constants":1,"./DigestAuthentication":4,"./Transactions":21,"./UA":23,"debug":33}],18:[function(require,module,exports){module.exports={OutgoingRequest:OutgoingRequest,IncomingRequest:IncomingRequest,IncomingResponse:IncomingResponse};/**
             * Dependencies.
             */var debug=require('debug')('JsSIP:SIPMessage');var sdp_transform=require('sdp-transform');var JsSIP_C=require('./Constants');var Utils=require('./Utils');var NameAddrHeader=require('./NameAddrHeader');var Grammar=require('./Grammar');/**
             * -param {String} method request method
             * -param {String} ruri request uri
             * -param {UA} ua
             * -param {Object} params parameters that will have priority over ua.configuration parameters:
             * <br>
             *  - cseq, call_id, from_tag, from_uri, from_display_name, to_uri, to_tag, route_set
             * -param {Object} [headers] extra headers
             * -param {String} [body]
             */function OutgoingRequest(method,ruri,ua,params,extraHeaders,body){var to,from,call_id,cseq;params=params||{};// Mandatory parameters check
if(!method||!ruri||!ua){return null;}this.ua=ua;this.headers={};this.method=method;this.ruri=ruri;this.body=body;this.extraHeaders=extraHeaders&&extraHeaders.slice()||[];// Fill the Common SIP Request Headers
// Route
if(params.route_set){this.setHeader('route',params.route_set);}else if(ua.configuration.use_preloaded_route){this.setHeader('route','<'+ua.transport.sip_uri+';lr>');}// Via
// Empty Via header. Will be filled by the client transaction.
this.setHeader('via','');// Max-Forwards
this.setHeader('max-forwards',JsSIP_C.MAX_FORWARDS);// To
to=params.to_display_name||params.to_display_name===0?'"'+params.to_display_name+'" ':'';to+='<'+(params.to_uri||ruri)+'>';to+=params.to_tag?';tag='+params.to_tag:'';this.to=new NameAddrHeader.parse(to);this.setHeader('to',to);// From
if(params.from_display_name||params.from_display_name===0){from='"'+params.from_display_name+'" ';}else if(ua.configuration.display_name){from='"'+ua.configuration.display_name+'" ';}else{from='';}from+='<'+(params.from_uri||ua.configuration.uri)+'>;tag=';from+=params.from_tag||Utils.newTag();this.from=new NameAddrHeader.parse(from);this.setHeader('from',from);// Call-ID
call_id=params.call_id||ua.configuration.jssip_id+Utils.createRandomToken(15);this.call_id=call_id;this.setHeader('call-id',call_id);// CSeq
cseq=params.cseq||Math.floor(Math.random()*10000);this.cseq=cseq;this.setHeader('cseq',cseq+' '+method);}OutgoingRequest.prototype={/**
                 * Replace the the given header by the given value.
                 * -param {String} name header name
                 * -param {String | Array} value header value
                 */setHeader:function setHeader(name,value){var regexp,idx;// Remove the header from extraHeaders if present.
regexp=new RegExp('^\\s*'+name+'\\s*:','i');for(idx=0;idx<this.extraHeaders.length;idx++){if(regexp.test(this.extraHeaders[idx])){this.extraHeaders.splice(idx,1);}}this.headers[Utils.headerize(name)]=Array.isArray(value)?value:[value];},/**
                 * Get the value of the given header name at the given position.
                 * -param {String} name header name
                 * -returns {String|undefined} Returns the specified header, null if header doesn't exist.
                 */getHeader:function getHeader(name){var regexp,idx,length=this.extraHeaders.length,header=this.headers[Utils.headerize(name)];if(header){if(header[0]){return header[0];}}else{regexp=new RegExp('^\\s*'+name+'\\s*:','i');for(idx=0;idx<length;idx++){header=this.extraHeaders[idx];if(regexp.test(header)){return header.substring(header.indexOf(':')+1).trim();}}}return;},/**
                 * Get the header/s of the given name.
                 * -param {String} name header name
                 * -returns {Array} Array with all the headers of the specified name.
                 */getHeaders:function getHeaders(name){var idx,length,regexp,header=this.headers[Utils.headerize(name)],result=[];if(header){length=header.length;for(idx=0;idx<length;idx++){result.push(header[idx]);}return result;}else{length=this.extraHeaders.length;regexp=new RegExp('^\\s*'+name+'\\s*:','i');for(idx=0;idx<length;idx++){header=this.extraHeaders[idx];if(regexp.test(header)){result.push(header.substring(header.indexOf(':')+1).trim());}}return result;}},/**
                 * Verify the existence of the given header.
                 * -param {String} name header name
                 * -returns {boolean} true if header with given name exists, false otherwise
                 */hasHeader:function hasHeader(name){var regexp,idx,length=this.extraHeaders.length;if(this.headers[Utils.headerize(name)]){return true;}else{regexp=new RegExp('^\\s*'+name+'\\s*:','i');for(idx=0;idx<length;idx++){if(regexp.test(this.extraHeaders[idx])){return true;}}}return false;},/**
                 * Parse the current body as a SDP and store the resulting object
                 * into this.sdp.
                 * -param {Boolean} force: Parse even if this.sdp already exists.
                 *
                 * Returns this.sdp.
                 */parseSDP:function parseSDP(force){if(!force&&this.sdp){return this.sdp;}else{this.sdp=sdp_transform.parse(this.body||'');return this.sdp;}},toString:function toString(){var msg='',header,length,idx,supported=[];msg+=this.method+' '+this.ruri+' SIP/2.0\r\n';for(header in this.headers){length=this.headers[header].length;for(idx=0;idx<length;idx++){msg+=header+': '+this.headers[header][idx]+'\r\n';}}length=this.extraHeaders.length;for(idx=0;idx<length;idx++){msg+=this.extraHeaders[idx].trim()+'\r\n';}// Supported
switch(this.method){case JsSIP_C.REGISTER:supported.push('path','gruu');break;case JsSIP_C.INVITE:if(this.ua.configuration.session_timers){supported.push('timer');}if(this.ua.contact.pub_gruu||this.ua.contact.temp_gruu){supported.push('gruu');}supported.push('ice','replaces');break;case JsSIP_C.UPDATE:if(this.ua.configuration.session_timers){supported.push('timer');}supported.push('ice');break;}supported.push('outbound');// Allow
msg+='Allow: '+JsSIP_C.ALLOWED_METHODS+'\r\n';msg+='Supported: '+supported+'\r\n';msg+='User-Agent: '+JsSIP_C.USER_AGENT+'\r\n';if(this.body){length=Utils.str_utf8_length(this.body);msg+='Content-Length: '+length+'\r\n\r\n';msg+=this.body;}else{msg+='Content-Length: 0\r\n\r\n';}return msg;},clone:function clone(){var request=new OutgoingRequest(this.method,this.ruri,this.ua);Object.keys(this.headers).forEach(function(name){request.headers[name]=this.headers[name].slice();},this);request.body=this.body;request.extraHeaders=this.extraHeaders&&this.extraHeaders.slice()||[];request.to=this.to;request.from=this.from;request.call_id=this.call_id;request.cseq=this.cseq;return request;}};function IncomingMessage(){this.data=null;this.headers=null;this.method=null;this.via=null;this.via_branch=null;this.call_id=null;this.cseq=null;this.from=null;this.from_tag=null;this.to=null;this.to_tag=null;this.body=null;this.sdp=null;}IncomingMessage.prototype={/**
                 * Insert a header of the given name and value into the last position of the
                 * header array.
                 */addHeader:function addHeader(name,value){var header={raw:value};name=Utils.headerize(name);if(this.headers[name]){this.headers[name].push(header);}else{this.headers[name]=[header];}},/**
                 * Get the value of the given header name at the given position.
                 */getHeader:function getHeader(name){var header=this.headers[Utils.headerize(name)];if(header){if(header[0]){return header[0].raw;}}else{return;}},/**
                 * Get the header/s of the given name.
                 */getHeaders:function getHeaders(name){var idx,length,header=this.headers[Utils.headerize(name)],result=[];if(!header){return[];}length=header.length;for(idx=0;idx<length;idx++){result.push(header[idx].raw);}return result;},/**
                 * Verify the existence of the given header.
                 */hasHeader:function hasHeader(name){return this.headers[Utils.headerize(name)]?true:false;},/**
                 * Parse the given header on the given index.
                 * -param {String} name header name
                 * -param {Number} [idx=0] header index
                 * -returns {Object|undefined} Parsed header object, undefined if the header is not present or in case of a parsing error.
                 */parseHeader:function parseHeader(name,idx){var header,value,parsed;name=Utils.headerize(name);idx=idx||0;if(!this.headers[name]){debug('header "'+name+'" not present');return;}else if(idx>=this.headers[name].length){debug('not so many "'+name+'" headers present');return;}header=this.headers[name][idx];value=header.raw;if(header.parsed){return header.parsed;}//substitute '-' by '_' for grammar rule matching.
parsed=Grammar.parse(value,name.replace(/-/g,'_'));if(parsed===-1){this.headers[name].splice(idx,1);//delete from headers
debug('error parsing "'+name+'" header field with value "'+value+'"');return;}else{header.parsed=parsed;return parsed;}},/**
                 * Message Header attribute selector. Alias of parseHeader.
                 * -param {String} name header name
                 * -param {Number} [idx=0] header index
                 * -returns {Object|undefined} Parsed header object, undefined if the header is not present or in case of a parsing error.
                 *
                 * -example
                 * message.s('via',3).port
                 */s:function s(name,idx){return this.parseHeader(name,idx);},/**
                 * Replace the value of the given header by the value.
                 * -param {String} name header name
                 * -param {String} value header value
                 */setHeader:function setHeader(name,value){var header={raw:value};this.headers[Utils.headerize(name)]=[header];},/**
                 * Parse the current body as a SDP and store the resulting object
                 * into this.sdp.
                 * -param {Boolean} force: Parse even if this.sdp already exists.
                 *
                 * Returns this.sdp.
                 */parseSDP:function parseSDP(force){if(!force&&this.sdp){return this.sdp;}else{this.sdp=sdp_transform.parse(this.body||'');return this.sdp;}},toString:function toString(){return this.data;}};function IncomingRequest(ua){this.ua=ua;this.headers={};this.ruri=null;this.transport=null;this.server_transaction=null;}IncomingRequest.prototype=new IncomingMessage();/**
             * Stateful reply.
             * -param {Number} code status code
             * -param {String} reason reason phrase
             * -param {Object} headers extra headers
             * -param {String} body body
             * -param {Function} [onSuccess] onSuccess callback
             * -param {Function} [onFailure] onFailure callback
             */IncomingRequest.prototype.reply=function(code,reason,extraHeaders,body,onSuccess,onFailure){var rr,vias,length,idx,response,supported=[],to=this.getHeader('To'),r=0,v=0;code=code||null;reason=reason||null;// Validate code and reason values
if(!code||code<100||code>699){throw new TypeError('Invalid status_code: '+code);}else if(reason&&typeof reason!=='string'&&!(reason instanceof String)){throw new TypeError('Invalid reason_phrase: '+reason);}reason=reason||JsSIP_C.REASON_PHRASE[code]||'';extraHeaders=extraHeaders&&extraHeaders.slice()||[];response='SIP/2.0 '+code+' '+reason+'\r\n';if(this.method===JsSIP_C.INVITE&&code>100&&code<=200){rr=this.getHeaders('record-route');length=rr.length;for(r;r<length;r++){response+='Record-Route: '+rr[r]+'\r\n';}}vias=this.getHeaders('via');length=vias.length;for(v;v<length;v++){response+='Via: '+vias[v]+'\r\n';}if(!this.to_tag&&code>100){to+=';tag='+Utils.newTag();}else if(this.to_tag&&!this.s('to').hasParam('tag')){to+=';tag='+this.to_tag;}response+='To: '+to+'\r\n';response+='From: '+this.getHeader('From')+'\r\n';response+='Call-ID: '+this.call_id+'\r\n';response+='CSeq: '+this.cseq+' '+this.method+'\r\n';length=extraHeaders.length;for(idx=0;idx<length;idx++){response+=extraHeaders[idx].trim()+'\r\n';}// Supported
switch(this.method){case JsSIP_C.INVITE:if(this.ua.configuration.session_timers){supported.push('timer');}if(this.ua.contact.pub_gruu||this.ua.contact.temp_gruu){supported.push('gruu');}supported.push('ice','replaces');break;case JsSIP_C.UPDATE:if(this.ua.configuration.session_timers){supported.push('timer');}if(body){supported.push('ice');}supported.push('replaces');}supported.push('outbound');// Allow and Accept
if(this.method===JsSIP_C.OPTIONS){response+='Allow: '+JsSIP_C.ALLOWED_METHODS+'\r\n';response+='Accept: '+JsSIP_C.ACCEPTED_BODY_TYPES+'\r\n';}else if(code===405){response+='Allow: '+JsSIP_C.ALLOWED_METHODS+'\r\n';}else if(code===415){response+='Accept: '+JsSIP_C.ACCEPTED_BODY_TYPES+'\r\n';}response+='Supported: '+supported+'\r\n';if(body){length=Utils.str_utf8_length(body);response+='Content-Type: application/sdp\r\n';response+='Content-Length: '+length+'\r\n\r\n';response+=body;}else{response+='Content-Length: '+0+'\r\n\r\n';}this.server_transaction.receiveResponse(code,response,onSuccess,onFailure);};/**
             * Stateless reply.
             * -param {Number} code status code
             * -param {String} reason reason phrase
             */IncomingRequest.prototype.reply_sl=function(code,reason){var to,response,v=0,vias=this.getHeaders('via'),length=vias.length;code=code||null;reason=reason||null;// Validate code and reason values
if(!code||code<100||code>699){throw new TypeError('Invalid status_code: '+code);}else if(reason&&typeof reason!=='string'&&!(reason instanceof String)){throw new TypeError('Invalid reason_phrase: '+reason);}reason=reason||JsSIP_C.REASON_PHRASE[code]||'';response='SIP/2.0 '+code+' '+reason+'\r\n';for(v;v<length;v++){response+='Via: '+vias[v]+'\r\n';}to=this.getHeader('To');if(!this.to_tag&&code>100){to+=';tag='+Utils.newTag();}else if(this.to_tag&&!this.s('to').hasParam('tag')){to+=';tag='+this.to_tag;}response+='To: '+to+'\r\n';response+='From: '+this.getHeader('From')+'\r\n';response+='Call-ID: '+this.call_id+'\r\n';response+='CSeq: '+this.cseq+' '+this.method+'\r\n';response+='Content-Length: '+0+'\r\n\r\n';this.transport.send(response);};function IncomingResponse(){this.headers={};this.status_code=null;this.reason_phrase=null;}IncomingResponse.prototype=new IncomingMessage();},{"./Constants":1,"./Grammar":6,"./NameAddrHeader":9,"./Utils":25,"debug":33,"sdp-transform":37}],19:[function(require,module,exports){module.exports=Socket;/**
             * Interface documentation: http://jssip.net/documentation/$last_version/api/socket/
             *
             * interface Socket {
 *  attribute String via_transport
 *  attribute String url
 *  attribute String sip_uri
 *
 *  method connect();
 *  method disconnect();
 *  method send(data);
 *
 *  attribute EventHandler onconnect
 *  attribute EventHandler ondisconnect
 *  attribute EventHandler ondata
 * }
             *
             */ /**
             * Dependencies.
             */var Utils=require('./Utils');var Grammar=require('./Grammar');var debugerror=require('debug')('JsSIP:ERROR:Socket');debugerror.log=console.warn.bind(console);function Socket(){}Socket.isSocket=function(socket){// Ignore if an array is given
if(Array.isArray(socket)){return false;}if(typeof socket==='undefined'){debugerror('undefined JsSIP.Socket instance');return false;}// Check Properties
try{if(!Utils.isString(socket.url)){debugerror('missing or invalid JsSIP.Socket url property');throw new Error();}if(!Utils.isString(socket.via_transport)){debugerror('missing or invalid JsSIP.Socket via_transport property');throw new Error();}if(Grammar.parse(socket.sip_uri,'SIP_URI')===-1){debugerror('missing or invalid JsSIP.Socket sip_uri property');throw new Error();}}catch(e){return false;}// Check Methods
try{['connect','disconnect','send'].forEach(function(method){if(!Utils.isFunction(socket[method])){debugerror('missing or invalid JsSIP.Socket method: '+method);throw new Error();}});}catch(e){return false;}return true;};},{"./Grammar":6,"./Utils":25,"debug":33}],20:[function(require,module,exports){var T1=500,T2=4000,T4=5000;var Timers={T1:T1,T2:T2,T4:T4,TIMER_B:64*T1,TIMER_D:0*T1,TIMER_F:64*T1,TIMER_H:64*T1,TIMER_I:0*T1,TIMER_J:0*T1,TIMER_K:0*T4,TIMER_L:64*T1,TIMER_M:64*T1,PROVISIONAL_RESPONSE_INTERVAL:60000// See RFC 3261 Section 13.3.1.1
};module.exports=Timers;},{}],21:[function(require,module,exports){module.exports={C:null,NonInviteClientTransaction:NonInviteClientTransaction,InviteClientTransaction:InviteClientTransaction,AckClientTransaction:AckClientTransaction,NonInviteServerTransaction:NonInviteServerTransaction,InviteServerTransaction:InviteServerTransaction,checkTransaction:checkTransaction};var C={// Transaction states
STATUS_TRYING:1,STATUS_PROCEEDING:2,STATUS_CALLING:3,STATUS_ACCEPTED:4,STATUS_COMPLETED:5,STATUS_TERMINATED:6,STATUS_CONFIRMED:7,// Transaction types
NON_INVITE_CLIENT:'nict',NON_INVITE_SERVER:'nist',INVITE_CLIENT:'ict',INVITE_SERVER:'ist'};/**
             * Expose C object.
             */module.exports.C=C;/**
             * Dependencies.
             */var util=require('util');var events=require('events');var debugnict=require('debug')('JsSIP:NonInviteClientTransaction');var debugict=require('debug')('JsSIP:InviteClientTransaction');var debugact=require('debug')('JsSIP:AckClientTransaction');var debugnist=require('debug')('JsSIP:NonInviteServerTransaction');var debugist=require('debug')('JsSIP:InviteServerTransaction');var JsSIP_C=require('./Constants');var Timers=require('./Timers');function NonInviteClientTransaction(request_sender,request,transport){var via;this.type=C.NON_INVITE_CLIENT;this.transport=transport;this.id='z9hG4bK'+Math.floor(Math.random()*10000000);this.request_sender=request_sender;this.request=request;via='SIP/2.0/'+transport.via_transport;via+=' '+request_sender.ua.configuration.via_host+';branch='+this.id;this.request.setHeader('via',via);this.request_sender.ua.newTransaction(this);events.EventEmitter.call(this);}util.inherits(NonInviteClientTransaction,events.EventEmitter);NonInviteClientTransaction.prototype.stateChanged=function(state){this.state=state;this.emit('stateChanged');};NonInviteClientTransaction.prototype.send=function(){var tr=this;this.stateChanged(C.STATUS_TRYING);this.F=setTimeout(function(){tr.timer_F();},Timers.TIMER_F);if(!this.transport.send(this.request)){this.onTransportError();}};NonInviteClientTransaction.prototype.onTransportError=function(){debugnict('transport error occurred, deleting transaction '+this.id);clearTimeout(this.F);clearTimeout(this.K);this.stateChanged(C.STATUS_TERMINATED);this.request_sender.ua.destroyTransaction(this);this.request_sender.onTransportError();};NonInviteClientTransaction.prototype.timer_F=function(){debugnict('Timer F expired for transaction '+this.id);this.stateChanged(C.STATUS_TERMINATED);this.request_sender.ua.destroyTransaction(this);this.request_sender.onRequestTimeout();};NonInviteClientTransaction.prototype.timer_K=function(){this.stateChanged(C.STATUS_TERMINATED);this.request_sender.ua.destroyTransaction(this);};NonInviteClientTransaction.prototype.receiveResponse=function(response){var tr=this,status_code=response.status_code;if(status_code<200){switch(this.state){case C.STATUS_TRYING:case C.STATUS_PROCEEDING:this.stateChanged(C.STATUS_PROCEEDING);this.request_sender.receiveResponse(response);break;}}else{switch(this.state){case C.STATUS_TRYING:case C.STATUS_PROCEEDING:this.stateChanged(C.STATUS_COMPLETED);clearTimeout(this.F);if(status_code===408){this.request_sender.onRequestTimeout();}else{this.request_sender.receiveResponse(response);}this.K=setTimeout(function(){tr.timer_K();},Timers.TIMER_K);break;case C.STATUS_COMPLETED:break;}}};function InviteClientTransaction(request_sender,request,transport){var via,tr=this;this.type=C.INVITE_CLIENT;this.transport=transport;this.id='z9hG4bK'+Math.floor(Math.random()*10000000);this.request_sender=request_sender;this.request=request;via='SIP/2.0/'+transport.via_transport;via+=' '+request_sender.ua.configuration.via_host+';branch='+this.id;this.request.setHeader('via',via);this.request_sender.ua.newTransaction(this);// TODO: Adding here the cancel() method is a hack that must be fixed.
// Add the cancel property to the request.
//Will be called from the request instance, not the transaction itself.
this.request.cancel=function(reason){tr.cancel_request(tr,reason);};events.EventEmitter.call(this);}util.inherits(InviteClientTransaction,events.EventEmitter);InviteClientTransaction.prototype.stateChanged=function(state){this.state=state;this.emit('stateChanged');};InviteClientTransaction.prototype.send=function(){var tr=this;this.stateChanged(C.STATUS_CALLING);this.B=setTimeout(function(){tr.timer_B();},Timers.TIMER_B);if(!this.transport.send(this.request)){this.onTransportError();}};InviteClientTransaction.prototype.onTransportError=function(){clearTimeout(this.B);clearTimeout(this.D);clearTimeout(this.M);if(this.state!==C.STATUS_ACCEPTED){debugict('transport error occurred, deleting transaction '+this.id);this.request_sender.onTransportError();}this.stateChanged(C.STATUS_TERMINATED);this.request_sender.ua.destroyTransaction(this);};// RFC 6026 7.2
InviteClientTransaction.prototype.timer_M=function(){debugict('Timer M expired for transaction '+this.id);if(this.state===C.STATUS_ACCEPTED){clearTimeout(this.B);this.stateChanged(C.STATUS_TERMINATED);this.request_sender.ua.destroyTransaction(this);}};// RFC 3261 17.1.1
InviteClientTransaction.prototype.timer_B=function(){debugict('Timer B expired for transaction '+this.id);if(this.state===C.STATUS_CALLING){this.stateChanged(C.STATUS_TERMINATED);this.request_sender.ua.destroyTransaction(this);this.request_sender.onRequestTimeout();}};InviteClientTransaction.prototype.timer_D=function(){debugict('Timer D expired for transaction '+this.id);clearTimeout(this.B);this.stateChanged(C.STATUS_TERMINATED);this.request_sender.ua.destroyTransaction(this);};InviteClientTransaction.prototype.sendACK=function(response){var tr=this;this.ack='ACK '+this.request.ruri+' SIP/2.0\r\n';this.ack+='Via: '+this.request.headers.Via.toString()+'\r\n';if(this.request.headers.Route){this.ack+='Route: '+this.request.headers.Route.toString()+'\r\n';}this.ack+='To: '+response.getHeader('to')+'\r\n';this.ack+='From: '+this.request.headers.From.toString()+'\r\n';this.ack+='Call-ID: '+this.request.headers['Call-ID'].toString()+'\r\n';this.ack+='CSeq: '+this.request.headers.CSeq.toString().split(' ')[0];this.ack+=' ACK\r\n';this.ack+='Content-Length: 0\r\n\r\n';this.D=setTimeout(function(){tr.timer_D();},Timers.TIMER_D);this.transport.send(this.ack);};InviteClientTransaction.prototype.cancel_request=function(tr,reason){var request=tr.request;this.cancel=JsSIP_C.CANCEL+' '+request.ruri+' SIP/2.0\r\n';this.cancel+='Via: '+request.headers.Via.toString()+'\r\n';if(this.request.headers.Route){this.cancel+='Route: '+request.headers.Route.toString()+'\r\n';}this.cancel+='To: '+request.headers.To.toString()+'\r\n';this.cancel+='From: '+request.headers.From.toString()+'\r\n';this.cancel+='Call-ID: '+request.headers['Call-ID'].toString()+'\r\n';this.cancel+='CSeq: '+request.headers.CSeq.toString().split(' ')[0]+' CANCEL\r\n';if(reason){this.cancel+='Reason: '+reason+'\r\n';}this.cancel+='Content-Length: 0\r\n\r\n';// Send only if a provisional response (>100) has been received.
if(this.state===C.STATUS_PROCEEDING){this.transport.send(this.cancel);}};InviteClientTransaction.prototype.receiveResponse=function(response){var tr=this,status_code=response.status_code;if(status_code>=100&&status_code<=199){switch(this.state){case C.STATUS_CALLING:this.stateChanged(C.STATUS_PROCEEDING);this.request_sender.receiveResponse(response);break;case C.STATUS_PROCEEDING:this.request_sender.receiveResponse(response);break;}}else if(status_code>=200&&status_code<=299){switch(this.state){case C.STATUS_CALLING:case C.STATUS_PROCEEDING:this.stateChanged(C.STATUS_ACCEPTED);this.M=setTimeout(function(){tr.timer_M();},Timers.TIMER_M);this.request_sender.receiveResponse(response);break;case C.STATUS_ACCEPTED:this.request_sender.receiveResponse(response);break;}}else if(status_code>=300&&status_code<=699){switch(this.state){case C.STATUS_CALLING:case C.STATUS_PROCEEDING:this.stateChanged(C.STATUS_COMPLETED);this.sendACK(response);this.request_sender.receiveResponse(response);break;case C.STATUS_COMPLETED:this.sendACK(response);break;}}};function AckClientTransaction(request_sender,request,transport){var via;this.transport=transport;this.id='z9hG4bK'+Math.floor(Math.random()*10000000);this.request_sender=request_sender;this.request=request;via='SIP/2.0/'+transport.via_transport;via+=' '+request_sender.ua.configuration.via_host+';branch='+this.id;this.request.setHeader('via',via);events.EventEmitter.call(this);}util.inherits(AckClientTransaction,events.EventEmitter);AckClientTransaction.prototype.send=function(){if(!this.transport.send(this.request)){this.onTransportError();}};AckClientTransaction.prototype.onTransportError=function(){debugact('transport error occurred for transaction '+this.id);this.request_sender.onTransportError();};function NonInviteServerTransaction(request,ua){this.type=C.NON_INVITE_SERVER;this.id=request.via_branch;this.request=request;this.transport=request.transport;this.ua=ua;this.last_response='';request.server_transaction=this;this.state=C.STATUS_TRYING;ua.newTransaction(this);events.EventEmitter.call(this);}util.inherits(NonInviteServerTransaction,events.EventEmitter);NonInviteServerTransaction.prototype.stateChanged=function(state){this.state=state;this.emit('stateChanged');};NonInviteServerTransaction.prototype.timer_J=function(){debugnist('Timer J expired for transaction '+this.id);this.stateChanged(C.STATUS_TERMINATED);this.ua.destroyTransaction(this);};NonInviteServerTransaction.prototype.onTransportError=function(){if(!this.transportError){this.transportError=true;debugnist('transport error occurred, deleting transaction '+this.id);clearTimeout(this.J);this.stateChanged(C.STATUS_TERMINATED);this.ua.destroyTransaction(this);}};NonInviteServerTransaction.prototype.receiveResponse=function(status_code,response,onSuccess,onFailure){var tr=this;if(status_code===100){/* RFC 4320 4.1
             * 'A SIP element MUST NOT
             * send any provisional response with a
             * Status-Code other than 100 to a non-INVITE request.'
             */switch(this.state){case C.STATUS_TRYING:this.stateChanged(C.STATUS_PROCEEDING);if(!this.transport.send(response)){this.onTransportError();}break;case C.STATUS_PROCEEDING:this.last_response=response;if(!this.transport.send(response)){this.onTransportError();if(onFailure){onFailure();}}else if(onSuccess){onSuccess();}break;}}else if(status_code>=200&&status_code<=699){switch(this.state){case C.STATUS_TRYING:case C.STATUS_PROCEEDING:this.stateChanged(C.STATUS_COMPLETED);this.last_response=response;this.J=setTimeout(function(){tr.timer_J();},Timers.TIMER_J);if(!this.transport.send(response)){this.onTransportError();if(onFailure){onFailure();}}else if(onSuccess){onSuccess();}break;case C.STATUS_COMPLETED:break;}}};function InviteServerTransaction(request,ua){this.type=C.INVITE_SERVER;this.id=request.via_branch;this.request=request;this.transport=request.transport;this.ua=ua;this.last_response='';request.server_transaction=this;this.state=C.STATUS_PROCEEDING;ua.newTransaction(this);this.resendProvisionalTimer=null;request.reply(100);events.EventEmitter.call(this);}util.inherits(InviteServerTransaction,events.EventEmitter);InviteServerTransaction.prototype.stateChanged=function(state){this.state=state;this.emit('stateChanged');};InviteServerTransaction.prototype.timer_H=function(){debugist('Timer H expired for transaction '+this.id);if(this.state===C.STATUS_COMPLETED){debugist('ACK not received, dialog will be terminated');}this.stateChanged(C.STATUS_TERMINATED);this.ua.destroyTransaction(this);};InviteServerTransaction.prototype.timer_I=function(){this.stateChanged(C.STATUS_TERMINATED);};// RFC 6026 7.1
InviteServerTransaction.prototype.timer_L=function(){debugist('Timer L expired for transaction '+this.id);if(this.state===C.STATUS_ACCEPTED){this.stateChanged(C.STATUS_TERMINATED);this.ua.destroyTransaction(this);}};InviteServerTransaction.prototype.onTransportError=function(){if(!this.transportError){this.transportError=true;debugist('transport error occurred, deleting transaction '+this.id);if(this.resendProvisionalTimer!==null){clearInterval(this.resendProvisionalTimer);this.resendProvisionalTimer=null;}clearTimeout(this.L);clearTimeout(this.H);clearTimeout(this.I);this.stateChanged(C.STATUS_TERMINATED);this.ua.destroyTransaction(this);}};InviteServerTransaction.prototype.resend_provisional=function(){if(!this.transport.send(this.last_response)){this.onTransportError();}};// INVITE Server Transaction RFC 3261 17.2.1
InviteServerTransaction.prototype.receiveResponse=function(status_code,response,onSuccess,onFailure){var tr=this;if(status_code>=100&&status_code<=199){switch(this.state){case C.STATUS_PROCEEDING:if(!this.transport.send(response)){this.onTransportError();}this.last_response=response;break;}}if(status_code>100&&status_code<=199&&this.state===C.STATUS_PROCEEDING){// Trigger the resendProvisionalTimer only for the first non 100 provisional response.
if(this.resendProvisionalTimer===null){this.resendProvisionalTimer=setInterval(function(){tr.resend_provisional();},Timers.PROVISIONAL_RESPONSE_INTERVAL);}}else if(status_code>=200&&status_code<=299){switch(this.state){case C.STATUS_PROCEEDING:this.stateChanged(C.STATUS_ACCEPTED);this.last_response=response;this.L=setTimeout(function(){tr.timer_L();},Timers.TIMER_L);if(this.resendProvisionalTimer!==null){clearInterval(this.resendProvisionalTimer);this.resendProvisionalTimer=null;}/* falls through */case C.STATUS_ACCEPTED:// Note that this point will be reached for proceeding tr.state also.
if(!this.transport.send(response)){this.onTransportError();if(onFailure){onFailure();}}else if(onSuccess){onSuccess();}break;}}else if(status_code>=300&&status_code<=699){switch(this.state){case C.STATUS_PROCEEDING:if(this.resendProvisionalTimer!==null){clearInterval(this.resendProvisionalTimer);this.resendProvisionalTimer=null;}if(!this.transport.send(response)){this.onTransportError();if(onFailure){onFailure();}}else{this.stateChanged(C.STATUS_COMPLETED);this.H=setTimeout(function(){tr.timer_H();},Timers.TIMER_H);if(onSuccess){onSuccess();}}break;}}};/**
             * INVITE:
             *  _true_ if retransmission
             *  _false_ new request
             *
             * ACK:
             *  _true_  ACK to non2xx response
             *  _false_ ACK must be passed to TU (accepted state)
             *          ACK to 2xx response
             *
             * CANCEL:
             *  _true_  no matching invite transaction
             *  _false_ matching invite transaction and no final response sent
             *
             * OTHER:
             *  _true_  retransmission
             *  _false_ new request
             */function checkTransaction(ua,request){var tr;switch(request.method){case JsSIP_C.INVITE:tr=ua.transactions.ist[request.via_branch];if(tr){switch(tr.state){case C.STATUS_PROCEEDING:tr.transport.send(tr.last_response);break;// RFC 6026 7.1 Invite retransmission
//received while in C.STATUS_ACCEPTED state. Absorb it.
case C.STATUS_ACCEPTED:break;}return true;}break;case JsSIP_C.ACK:tr=ua.transactions.ist[request.via_branch];// RFC 6026 7.1
if(tr){if(tr.state===C.STATUS_ACCEPTED){return false;}else if(tr.state===C.STATUS_COMPLETED){tr.state=C.STATUS_CONFIRMED;tr.I=setTimeout(function(){tr.timer_I();},Timers.TIMER_I);return true;}}// ACK to 2XX Response.
else{return false;}break;case JsSIP_C.CANCEL:tr=ua.transactions.ist[request.via_branch];if(tr){request.reply_sl(200);if(tr.state===C.STATUS_PROCEEDING){return false;}else{return true;}}else{request.reply_sl(481);return true;}break;default:// Non-INVITE Server Transaction RFC 3261 17.2.2
tr=ua.transactions.nist[request.via_branch];if(tr){switch(tr.state){case C.STATUS_TRYING:break;case C.STATUS_PROCEEDING:case C.STATUS_COMPLETED:tr.transport.send(tr.last_response);break;}return true;}break;}}},{"./Constants":1,"./Timers":20,"debug":33,"events":28,"util":32}],22:[function(require,module,exports){module.exports=Transport;/**
             * Dependencies.
             */var Socket=require('./Socket');var debug=require('debug')('JsSIP:Transport');var debugerror=require('debug')('JsSIP:ERROR:Transport');/**
             * Constants
             */var C={// Transport status
STATUS_CONNECTED:0,STATUS_CONNECTING:1,STATUS_DISCONNECTED:2,// Socket status
SOCKET_STATUS_READY:0,SOCKET_STATUS_ERROR:1,// Recovery options
recovery_options:{min_interval:2,// minimum interval in seconds between recover attempts
max_interval:30// maximum interval in seconds between recover attempts
}};/*
     * Manages one or multiple JsSIP.Socket instances.
     * Is reponsible for transport recovery logic among all socket instances.
     *
     * @socket JsSIP::Socket instance
     */function Transport(sockets,recovery_options){debug('new()');this.status=C.STATUS_DISCONNECTED;// current socket
this.socket=null;// socket collection
this.sockets=[];this.recovery_options=recovery_options||C.recovery_options;this.recover_attempts=0;this.recovery_timer=null;this.close_requested=false;if(typeof sockets==='undefined'){throw new TypeError('Invalid argument.'+' undefined \'sockets\' argument');}if(!(sockets instanceof Array)){sockets=[sockets];}sockets.forEach(function(socket){if(!Socket.isSocket(socket.socket)){throw new TypeError('Invalid argument.'+' invalid \'JsSIP.Socket\' instance');}if(socket.weight&&!Number(socket.weight)){throw new TypeError('Invalid argument.'+' \'weight\' attribute is not a number');}this.sockets.push({socket:socket.socket,weight:socket.weight||0,status:C.SOCKET_STATUS_READY});},this);// read only properties
Object.defineProperties(this,{via_transport:{get:function get(){return this.socket.via_transport;}},url:{get:function get(){return this.socket.url;}},sip_uri:{get:function get(){return this.socket.sip_uri;}}});// get the socket with higher weight
getSocket.call(this);}/**
             * Instance Methods
             */Transport.prototype.connect=function(){debug('connect()');if(this.isConnected()){debug('Transport is already connected');return;}else if(this.isConnecting()){debug('Transport is connecting');return;}this.close_requested=false;this.status=C.STATUS_CONNECTING;this.onconnecting({socket:this.socket,attempts:this.recover_attempts});if(!this.close_requested){// bind socket event callbacks
this.socket.onconnect=onConnect.bind(this);this.socket.ondisconnect=onDisconnect.bind(this);this.socket.ondata=onData.bind(this);this.socket.connect();}return;};Transport.prototype.disconnect=function(){debug('close()');this.close_requested=true;this.recover_attempts=0;this.status=C.STATUS_DISCONNECTED;// clear recovery_timer
if(this.recovery_timer!==null){clearTimeout(this.recovery_timer);this.recovery_timer=null;}// unbind socket event callbacks
this.socket.onconnect=function(){};this.socket.ondisconnect=function(){};this.socket.ondata=function(){};this.socket.disconnect();this.ondisconnect();};Transport.prototype.send=function(data){debug('send()');if(!this.isConnected()){debugerror('unable to send message, transport is not connected');return false;}var message=data.toString();debug('sending message:\n\n'+message+'\n');return this.socket.send(message);};Transport.prototype.isConnected=function(){return this.status===C.STATUS_CONNECTED;};Transport.prototype.isConnecting=function(){return this.status===C.STATUS_CONNECTING;};/**
             * Socket Event Handlers
             */function onConnect(){this.recover_attempts=0;this.status=C.STATUS_CONNECTED;// clear recovery_timer
if(this.recovery_timer!==null){clearTimeout(this.recovery_timer);this.recovery_timer=null;}this.onconnect({socket:this});}function onDisconnect(error,code,reason){this.status=C.STATUS_DISCONNECTED;this.ondisconnect({socket:this.socket,error:error,code:code,reason:reason});if(this.close_requested){return;}// update socket status
if(error){this.socket.status=C.SOCKET_STATUS_ERROR;}reconnect.call(this,error);}function onData(data){// CRLF Keep Alive response from server. Ignore it.
if(data==='\r\n'){debug('received message with CRLF Keep Alive response');return;}// binary message.
else if(typeof data!=='string'){try{data=String.fromCharCode.apply(null,new Uint8Array(data));}catch(evt){debug('received binary message failed to be converted into string,'+' message discarded');return;}debug('received binary message:\n\n'+data+'\n');}// text message.
else{debug('received text message:\n\n'+data+'\n');}this.ondata({transport:this,message:data});}function reconnect(){var k,self=this;this.recover_attempts+=1;k=Math.floor(Math.random()*Math.pow(2,this.recover_attempts)+1);if(k<this.recovery_options.min_interval){k=this.recovery_options.min_interval;}else if(k>this.recovery_options.max_interval){k=this.recovery_options.max_interval;}debug('reconnection attempt: '+this.recover_attempts+'. next connection attempt in '+k+' seconds');this.recovery_timer=setTimeout(function(){if(!self.close_requested&&!(self.isConnected()||self.isConnecting())){// get the next available socket with higher weight
getSocket.call(self);// connect the socket
self.connect();}},k*1000);}/**
             * get the next available socket with higher weight
             */function getSocket(){var candidates=[];this.sockets.forEach(function(socket){if(socket.status===C.SOCKET_STATUS_ERROR){return;// continue the array iteration
}else if(candidates.length===0){candidates.push(socket);}else if(socket.weight>candidates[0].weight){candidates=[socket];}else if(socket.weight===candidates[0].weight){candidates.push(socket);}});if(candidates.length===0){// all sockets have failed. reset sockets status
this.sockets.forEach(function(socket){socket.status=C.SOCKET_STATUS_READY;});// get next available socket
getSocket.call(this);return;}var idx=Math.floor(Math.random()*candidates.length);this.socket=candidates[idx].socket;}},{"./Socket":19,"debug":33}],23:[function(require,module,exports){module.exports=UA;var C={// UA status codes
STATUS_INIT:0,STATUS_READY:1,STATUS_USER_CLOSED:2,STATUS_NOT_READY:3,// UA error codes
CONFIGURATION_ERROR:1,NETWORK_ERROR:2};/**
             * Expose C object.
             */UA.C=C;/**
             * Dependencies.
             */var util=require('util');var events=require('events');var debug=require('debug')('JsSIP:UA');var debugerror=require('debug')('JsSIP:ERROR:UA');debugerror.log=console.warn.bind(console);var rtcninja=require('rtcninja');var JsSIP_C=require('./Constants');var Registrator=require('./Registrator');var RTCSession=require('./RTCSession');var Message=require('./Message');var Transactions=require('./Transactions');var Transport=require('./Transport');var WebSocketInterface=require('./WebSocketInterface');var Socket=require('./Socket');var Utils=require('./Utils');var Exceptions=require('./Exceptions');var URI=require('./URI');var Grammar=require('./Grammar');var Parser=require('./Parser');var SIPMessage=require('./SIPMessage');var sanityCheck=require('./sanityCheck');/**
             * The User-Agent class.
             * @class JsSIP.UA
             * @param {Object} configuration Configuration parameters.
             * @throws {JsSIP.Exceptions.ConfigurationError} If a configuration parameter is invalid.
             * @throws {TypeError} If no configuration is given.
             */function UA(configuration){debug('new() [configuration:%o]',configuration);this.cache={credentials:{}};this.configuration={};this.dynConfiguration={};this.dialogs={};//User actions outside any session/dialog (MESSAGE)
this.applicants={};this.sessions={};this.transport=null;this.contact=null;this.status=C.STATUS_INIT;this.error=null;this.transactions={nist:{},nict:{},ist:{},ict:{}};// Custom UA empty object for high level use
this.data={};Object.defineProperties(this,{transactionsCount:{get:function get(){var type,transactions=['nist','nict','ist','ict'],count=0;for(type in transactions){count+=Object.keys(this.transactions[transactions[type]]).length;}return count;}},nictTransactionsCount:{get:function get(){return Object.keys(this.transactions.nict).length;}},nistTransactionsCount:{get:function get(){return Object.keys(this.transactions.nist).length;}},ictTransactionsCount:{get:function get(){return Object.keys(this.transactions.ict).length;}},istTransactionsCount:{get:function get(){return Object.keys(this.transactions.ist).length;}}});/**
                 * Load configuration
                 */if(configuration===undefined){throw new TypeError('Not enough arguments');}try{this.loadConfig(configuration);}catch(e){this.status=C.STATUS_NOT_READY;this.error=C.CONFIGURATION_ERROR;throw e;}// Initialize registrator
this._registrator=new Registrator(this);events.EventEmitter.call(this);// Initialize rtcninja if not yet done.
if(!rtcninja.called){rtcninja();}}util.inherits(UA,events.EventEmitter);//=================
//  High Level API
//=================
/**
             * Connect to the server if status = STATUS_INIT.
             * Resume UA after being closed.
             */UA.prototype.start=function(){debug('start()');var self=this;function connect(){debug('restarting UA');self.status=C.STATUS_READY;self.transport.connect();}if(this.status===C.STATUS_INIT){this.transport.connect();}else if(this.status===C.STATUS_USER_CLOSED){if(!this.isConnected()){connect();}else{this.once('disconnected',connect);}}else if(this.status===C.STATUS_READY){debug('UA is in READY status, not restarted');}else{debug('ERROR: connection is down, Auto-Recovery system is trying to reconnect');}// Set dynamic configuration.
this.dynConfiguration.register=this.configuration.register;};/**
             * Register.
             */UA.prototype.register=function(){debug('register()');this.dynConfiguration.register=true;this._registrator.register();};/**
             * Unregister.
             */UA.prototype.unregister=function(options){debug('unregister()');this.dynConfiguration.register=false;this._registrator.unregister(options);};/**
             * Get the Registrator instance.
             */UA.prototype.registrator=function(){return this._registrator;};/**
             * Registration state.
             */UA.prototype.isRegistered=function(){if(this._registrator.registered){return true;}else{return false;}};/**
             * Connection state.
             */UA.prototype.isConnected=function(){return this.transport.isConnected();};/**
             * Make an outgoing call.
             *
             * -param {String} target
             * -param {Object} views
             * -param {Object} [options]
             *
             * -throws {TypeError}
             *
             */UA.prototype.call=function(target,options){debug('call()');var session;session=new RTCSession(this);session.connect(target,options);return session;};/**
             * Send a message.
             *
             * -param {String} target
             * -param {String} body
             * -param {Object} [options]
             *
             * -throws {TypeError}
             *
             */UA.prototype.sendMessage=function(target,body,options){debug('sendMessage()');var message;message=new Message(this);message.send(target,body,options);return message;};/**
             * Terminate ongoing sessions.
             */UA.prototype.terminateSessions=function(options){debug('terminateSessions()');for(var idx in this.sessions){if(!this.sessions[idx].isEnded()){this.sessions[idx].terminate(options);}}};/**
             * Gracefully close.
             *
             */UA.prototype.stop=function(){debug('stop()');var session;var applicant;var num_sessions;var ua=this;// Remove dynamic settings.
this.dynConfiguration={};if(this.status===C.STATUS_USER_CLOSED){debug('UA already closed');return;}// Close registrator
this._registrator.close();// If there are session wait a bit so CANCEL/BYE can be sent and their responses received.
num_sessions=Object.keys(this.sessions).length;// Run  _terminate_ on every Session
for(session in this.sessions){debug('closing session '+session);try{this.sessions[session].terminate();}catch(error){}}// Run  _close_ on every applicant
for(applicant in this.applicants){try{this.applicants[applicant].close();}catch(error){}}this.status=C.STATUS_USER_CLOSED;if(this.nistTransactionsCount===0&&this.nictTransactionsCount===0&&this.ictTransactionsCount===0&&this.istTransactionsCount===0&&num_sessions===0){ua.transport.disconnect();}else{setTimeout(function(){ua.transport.disconnect();},2000);}};/**
             * Normalice a string into a valid SIP request URI
             * -param {String} target
             * -returns {JsSIP.URI|undefined}
             */UA.prototype.normalizeTarget=function(target){return Utils.normalizeTarget(target,this.configuration.hostport_params);};/**
             * Allow retrieving configuration and autogenerated fields in runtime.
             */UA.prototype.get=function(parameter){switch(parameter){case'realm':return this.configuration.realm;case'ha1':return this.configuration.ha1;default:debugerror('get() | cannot get "%s" parameter in runtime',parameter);return undefined;}return true;};/**
             * Allow configuration changes in runtime.
             * Returns true if the parameter could be set.
             */UA.prototype.set=function(parameter,value){switch(parameter){case'password':{this.configuration.password=String(value);break;}case'realm':{this.configuration.realm=String(value);break;}case'ha1':{this.configuration.ha1=String(value);// Delete the plain SIP password.
this.configuration.password=null;break;}case'display_name':{if(Grammar.parse('"'+value+'"','display_name')===-1){debugerror('set() | wrong "display_name"');return false;}this.configuration.display_name=value;break;}default:debugerror('set() | cannot set "%s" parameter in runtime',parameter);return false;}return true;};//===============================
//  Private (For internal use)
//===============================
// UA.prototype.saveCredentials = function(credentials) {
//   this.cache.credentials[credentials.realm] = this.cache.credentials[credentials.realm] || {};
//   this.cache.credentials[credentials.realm][credentials.uri] = credentials;
// };
// UA.prototype.getCredentials = function(request) {
//   var realm, credentials;
//   realm = request.ruri.host;
//   if (this.cache.credentials[realm] && this.cache.credentials[realm][request.ruri]) {
//     credentials = this.cache.credentials[realm][request.ruri];
//     credentials.method = request.method;
//   }
//   return credentials;
// };
//==========================
// Event Handlers
//==========================
/**
             * new Transaction
             */UA.prototype.newTransaction=function(transaction){this.transactions[transaction.type][transaction.id]=transaction;this.emit('newTransaction',{transaction:transaction});};/**
             * Transaction destroyed.
             */UA.prototype.destroyTransaction=function(transaction){delete this.transactions[transaction.type][transaction.id];this.emit('transactionDestroyed',{transaction:transaction});};/**
             *  new Message
             */UA.prototype.newMessage=function(data){this.emit('newMessage',data);};/**
             * new RTCSession
             */UA.prototype.newRTCSession=function(data){this.emit('newRTCSession',data);};/**
             * Registered
             */UA.prototype.registered=function(data){this.emit('registered',data);};/**
             * Unregistered
             */UA.prototype.unregistered=function(data){this.emit('unregistered',data);};/**
             * Registration Failed
             */UA.prototype.registrationFailed=function(data){this.emit('registrationFailed',data);};//=========================
// receiveRequest
//=========================
/**
             * Request reception
             */UA.prototype.receiveRequest=function(request){var dialog,session,message,replaces,method=request.method;// Check that request URI points to us
if(request.ruri.user!==this.configuration.uri.user&&request.ruri.user!==this.contact.uri.user){debug('Request-URI does not point to us');if(request.method!==JsSIP_C.ACK){request.reply_sl(404);}return;}// Check request URI scheme
if(request.ruri.scheme===JsSIP_C.SIPS){request.reply_sl(416);return;}// Check transaction
if(Transactions.checkTransaction(this,request)){return;}// Create the server transaction
if(method===JsSIP_C.INVITE){new Transactions.InviteServerTransaction(request,this);}else if(method!==JsSIP_C.ACK&&method!==JsSIP_C.CANCEL){new Transactions.NonInviteServerTransaction(request,this);}/* RFC3261 12.2.2
         * Requests that do not change in any way the state of a dialog may be
         * received within a dialog (for example, an OPTIONS request).
         * They are processed as if they had been received outside the dialog.
         */if(method===JsSIP_C.OPTIONS){request.reply(200);}else if(method===JsSIP_C.MESSAGE){if(this.listeners('newMessage').length===0){request.reply(405);return;}message=new Message(this);message.init_incoming(request);}else if(method===JsSIP_C.INVITE){// Initial INVITE
if(!request.to_tag&&this.listeners('newRTCSession').length===0){request.reply(405);return;}}// Initial Request
if(!request.to_tag){switch(method){case JsSIP_C.INVITE:if(rtcninja.hasWebRTC()){if(request.hasHeader('replaces')){replaces=request.replaces;dialog=this.findDialog(replaces.call_id,replaces.from_tag,replaces.to_tag);if(dialog){session=dialog.owner;if(!session.isEnded()){session.receiveRequest(request);}else{request.reply(603);}}else{request.reply(481);}}else{session=new RTCSession(this);session.init_incoming(request);}}else{debug('INVITE received but WebRTC is not supported');request.reply(488);}break;case JsSIP_C.BYE:// Out of dialog BYE received
request.reply(481);break;case JsSIP_C.CANCEL:session=this.findSession(request);if(session){session.receiveRequest(request);}else{debug('received CANCEL request for a non existent session');}break;case JsSIP_C.ACK:/* Absorb it.
                     * ACK request without a corresponding Invite Transaction
                     * and without To tag.
                     */break;default:request.reply(405);break;}}// In-dialog request
else{dialog=this.findDialog(request.call_id,request.from_tag,request.to_tag);if(dialog){dialog.receiveRequest(request);}else if(method===JsSIP_C.NOTIFY){session=this.findSession(request);if(session){session.receiveRequest(request);}else{debug('received NOTIFY request for a non existent subscription');request.reply(481,'Subscription does not exist');}}/* RFC3261 12.2.2
             * Request with to tag, but no matching dialog found.
             * Exception: ACK for an Invite request for which a dialog has not
             * been created.
             */else{if(method!==JsSIP_C.ACK){request.reply(481);}}}};//=================
// Utils
//=================
/**
             * Get the session to which the request belongs to, if any.
             */UA.prototype.findSession=function(request){var sessionIDa=request.call_id+request.from_tag,sessionA=this.sessions[sessionIDa],sessionIDb=request.call_id+request.to_tag,sessionB=this.sessions[sessionIDb];if(sessionA){return sessionA;}else if(sessionB){return sessionB;}else{return null;}};/**
             * Get the dialog to which the request belongs to, if any.
             */UA.prototype.findDialog=function(call_id,from_tag,to_tag){var id=call_id+from_tag+to_tag,dialog=this.dialogs[id];if(dialog){return dialog;}else{id=call_id+to_tag+from_tag;dialog=this.dialogs[id];if(dialog){return dialog;}else{return null;}}};UA.prototype.loadConfig=function(configuration){// Settings and default values
var parameter,value,checked_value,hostport_params,registrar_server,settings={/* Host address
                 * Value to be set in Via sent_by and host part of Contact FQDN
                 */via_host:Utils.createRandomToken(12)+'.invalid',// SIP Contact URI
contact_uri:null,// SIP authentication password
password:null,// SIP authentication realm
realm:null,// SIP authentication HA1 hash
ha1:null,// Registration parameters
register_expires:600,register:true,registrar_server:null,use_preloaded_route:false,// Session parameters
no_answer_timeout:60,session_timers:true};// Pre-Configuration
// Check Mandatory parameters
for(parameter in UA.configuration_check.mandatory){if(!configuration.hasOwnProperty(parameter)){throw new Exceptions.ConfigurationError(parameter);}else{value=configuration[parameter];checked_value=UA.configuration_check.mandatory[parameter].call(this,value);if(checked_value!==undefined){settings[parameter]=checked_value;}else{throw new Exceptions.ConfigurationError(parameter,value);}}}// Check Optional parameters
for(parameter in UA.configuration_check.optional){if(configuration.hasOwnProperty(parameter)){value=configuration[parameter];/* If the parameter value is null, empty string, undefined, empty array
                 * or it's a number with NaN value, then apply its default value.
                 */if(Utils.isEmpty(value)){continue;}checked_value=UA.configuration_check.optional[parameter].call(this,value,configuration);if(checked_value!==undefined){settings[parameter]=checked_value;}else{throw new Exceptions.ConfigurationError(parameter,value);}}}// Post Configuration Process
// Allow passing 0 number as display_name.
if(settings.display_name===0){settings.display_name='0';}// Instance-id for GRUU.
if(!settings.instance_id){settings.instance_id=Utils.newUUID();}// jssip_id instance parameter. Static random tag of length 5.
settings.jssip_id=Utils.createRandomToken(5);// String containing settings.uri without scheme and user.
hostport_params=settings.uri.clone();hostport_params.user=null;settings.hostport_params=hostport_params.toString().replace(/^sip:/i,'');// Transport
var sockets=[];if(settings.ws_servers&&Array.isArray(settings.ws_servers)){sockets=sockets.concat(settings.ws_servers);}if(settings.sockets&&Array.isArray(settings.sockets)){sockets=sockets.concat(settings.sockets);}if(sockets.length===0){throw new Exceptions.ConfigurationError('sockets');}try{this.transport=new Transport(sockets,{/* recovery options */max_interval:settings.connection_recovery_max_interval,min_interval:settings.connection_recovery_min_interval});// Transport event callbacks
this.transport.onconnecting=onTransportConnecting.bind(this);this.transport.onconnect=onTransportConnect.bind(this);this.transport.ondisconnect=onTransportDisconnect.bind(this);this.transport.ondata=onTransportData.bind(this);// transport options not needed here anymore
delete settings.connection_recovery_max_interval;delete settings.connection_recovery_min_interval;delete settings.ws_servers;delete settings.sockets;}catch(e){debugerror(e);throw new Exceptions.ConfigurationError('sockets',sockets);}// Check whether authorization_user is explicitly defined.
// Take 'settings.uri.user' value if not.
if(!settings.authorization_user){settings.authorization_user=settings.uri.user;}// If no 'registrar_server' is set use the 'uri' value without user portion and
// without URI params/headers.
if(!settings.registrar_server){registrar_server=settings.uri.clone();registrar_server.user=null;registrar_server.clearParams();registrar_server.clearHeaders();settings.registrar_server=registrar_server;}// User no_answer_timeout.
settings.no_answer_timeout=settings.no_answer_timeout*1000;// Via Host
if(settings.contact_uri){settings.via_host=settings.contact_uri.host;}// Contact URI
else{settings.contact_uri=new URI('sip',Utils.createRandomToken(8),settings.via_host,null,{transport:'ws'});}this.contact={pub_gruu:null,temp_gruu:null,uri:settings.contact_uri,toString:function toString(options){options=options||{};var anonymous=options.anonymous||null,outbound=options.outbound||null,contact='<';if(anonymous){contact+=this.temp_gruu||'sip:anonymous@anonymous.invalid;transport=ws';}else{contact+=this.pub_gruu||this.uri.toString();}if(outbound&&(anonymous?!this.temp_gruu:!this.pub_gruu)){contact+=';ob';}contact+='>';return contact;}};// Fill the value of the configuration_skeleton
for(parameter in settings){UA.configuration_skeleton[parameter].value=settings[parameter];}Object.defineProperties(this.configuration,UA.configuration_skeleton);// Clean UA.configuration_skeleton
for(parameter in settings){UA.configuration_skeleton[parameter].value='';}debug('configuration parameters after validation:');for(parameter in settings){switch(parameter){case'uri':case'registrar_server':debug('- '+parameter+': '+settings[parameter]);break;case'password':case'ha1':debug('- '+parameter+': '+'NOT SHOWN');break;default:debug('- '+parameter+': '+JSON.stringify(settings[parameter]));}}return;};/**
             * Configuration Object skeleton.
             */UA.configuration_skeleton=function(){var idx,parameter,writable,skeleton={},parameters=[// Internal parameters
'jssip_id','hostport_params',// Mandatory user configurable parameters
'uri',// Optional user configurable parameters
'authorization_user','contact_uri','display_name','instance_id','no_answer_timeout',// 30 seconds
'session_timers',// true
'password','realm','ha1','register_expires',// 600 seconds
'registrar_server','sockets','use_preloaded_route','ws_servers',// Post-configuration generated parameters
'via_core_value','via_host'];var writable_parameters=['password','realm','ha1','display_name'];for(idx in parameters){parameter=parameters[idx];if(writable_parameters.indexOf(parameter)!==-1){writable=true;}else{writable=false;}skeleton[parameter]={value:'',writable:writable,configurable:false};}skeleton.register={value:'',writable:true,configurable:false};return skeleton;}();/**
             * Configuration checker.
             */UA.configuration_check={mandatory:{uri:function uri(_uri){var parsed;if(!/^sip:/i.test(_uri)){_uri=JsSIP_C.SIP+':'+_uri;}parsed=URI.parse(_uri);if(!parsed){return;}else if(!parsed.user){return;}else{return parsed;}}},optional:{authorization_user:function authorization_user(_authorization_user){if(Grammar.parse('"'+_authorization_user+'"','quoted_string')===-1){return;}else{return _authorization_user;}},connection_recovery_max_interval:function connection_recovery_max_interval(_connection_recovery_max_interval){var value;if(Utils.isDecimal(_connection_recovery_max_interval)){value=Number(_connection_recovery_max_interval);if(value>0){return value;}}},connection_recovery_min_interval:function connection_recovery_min_interval(_connection_recovery_min_interval){var value;if(Utils.isDecimal(_connection_recovery_min_interval)){value=Number(_connection_recovery_min_interval);if(value>0){return value;}}},contact_uri:function contact_uri(_contact_uri){if(typeof _contact_uri==='string'){var uri=Grammar.parse(_contact_uri,'SIP_URI');if(uri!==-1){return uri;}}},display_name:function display_name(_display_name){if(Grammar.parse('"'+_display_name+'"','display_name')===-1){return;}else{return _display_name;}},instance_id:function instance_id(_instance_id){if(/^uuid:/i.test(_instance_id)){_instance_id=_instance_id.substr(5);}if(Grammar.parse(_instance_id,'uuid')===-1){return;}else{return _instance_id;}},no_answer_timeout:function no_answer_timeout(_no_answer_timeout){var value;if(Utils.isDecimal(_no_answer_timeout)){value=Number(_no_answer_timeout);if(value>0){return value;}}},session_timers:function session_timers(_session_timers){if(typeof _session_timers==='boolean'){return _session_timers;}},password:function password(_password){return String(_password);},realm:function realm(_realm){return String(_realm);},ha1:function ha1(_ha){return String(_ha);},register:function register(_register){if(typeof _register==='boolean'){return _register;}},register_expires:function register_expires(_register_expires){var value;if(Utils.isDecimal(_register_expires)){value=Number(_register_expires);if(value>0){return value;}}},registrar_server:function registrar_server(_registrar_server){var parsed;if(!/^sip:/i.test(_registrar_server)){_registrar_server=JsSIP_C.SIP+':'+_registrar_server;}parsed=URI.parse(_registrar_server);if(!parsed){return;}else if(parsed.user){return;}else{return parsed;}},sockets:function sockets(_sockets){var idx,length;/* Allow defining sockets parameter as:
                 *  Socket: socket
                 *  Array of Socket: [socket1, socket2]
                 *  Array of Objects: [{socket: socket1, weight:1}, {socket: Socket2, weight:0}]
                 *  Array of Objects and Socket: [{socket: socket1}, socket2]
                 */if(Socket.isSocket(_sockets)){_sockets=[{socket:_sockets}];}else if(Array.isArray(_sockets)&&_sockets.length){length=_sockets.length;for(idx=0;idx<length;idx++){if(Socket.isSocket(_sockets[idx])){_sockets[idx]={socket:_sockets[idx]};}}}else{return;}return _sockets;},use_preloaded_route:function use_preloaded_route(_use_preloaded_route){if(typeof _use_preloaded_route==='boolean'){return _use_preloaded_route;}},ws_servers:function ws_servers(_ws_servers){var idx,length,sockets=[];/* Allow defining ws_servers parameter as:
                 *  String: "host"
                 *  Array of Strings: ["host1", "host2"]
                 *  Array of Objects: [{ws_uri:"host1", weight:1}, {ws_uri:"host2", weight:0}]
                 *  Array of Objects and Strings: [{ws_uri:"host1"}, "host2"]
                 */if(typeof _ws_servers==='string'){_ws_servers=[{ws_uri:_ws_servers}];}else if(Array.isArray(_ws_servers)&&_ws_servers.length){length=_ws_servers.length;for(idx=0;idx<length;idx++){if(typeof _ws_servers[idx]==='string'){_ws_servers[idx]={ws_uri:_ws_servers[idx]};}}}else{return;}length=_ws_servers.length;for(idx=0;idx<length;idx++){try{sockets.push({socket:new WebSocketInterface(_ws_servers[idx].ws_uri),weight:_ws_servers[idx].weight||0});}catch(e){debugerror(e);return;}}return sockets;}}};/**
             * Transport event handlers
             */ // Transport connecting event
function onTransportConnecting(data){this.emit('connecting',data);}// Transport connected event.
function onTransportConnect(data){if(this.status===C.STATUS_USER_CLOSED){return;}this.status=C.STATUS_READY;this.error=null;this.emit('connected',data);if(this.dynConfiguration.register){this._registrator.register();}}// Transport disconnected event.
function onTransportDisconnect(data){// Run _onTransportError_ callback on every client transaction using _transport_
var type,idx,length,client_transactions=['nict','ict','nist','ist'];length=client_transactions.length;for(type=0;type<length;type++){for(idx in this.transactions[client_transactions[type]]){this.transactions[client_transactions[type]][idx].onTransportError();}}this.emit('disconnected',data);// Call registrator _onTransportClosed_
this._registrator.onTransportClosed();if(this.status!==C.STATUS_USER_CLOSED){this.status=C.STATUS_NOT_READY;this.error=C.NETWORK_ERROR;}}// Transport data event
function onTransportData(data){var transaction,transport=data.transport,message=data.message;message=Parser.parseMessage(message,this);if(!message){return;}if(this.status===UA.C.STATUS_USER_CLOSED&&message instanceof SIPMessage.IncomingRequest){return;}// Do some sanity check
if(!sanityCheck(message,this,transport)){return;}if(message instanceof SIPMessage.IncomingRequest){message.transport=transport;this.receiveRequest(message);}else if(message instanceof SIPMessage.IncomingResponse){/* Unike stated in 18.1.2, if a response does not match
             * any transaction, it is discarded here and no passed to the core
             * in order to be discarded there.
             */switch(message.method){case JsSIP_C.INVITE:transaction=this.transactions.ict[message.via_branch];if(transaction){transaction.receiveResponse(message);}break;case JsSIP_C.ACK:// Just in case ;-)
break;default:transaction=this.transactions.nict[message.via_branch];if(transaction){transaction.receiveResponse(message);}break;}}}},{"./Constants":1,"./Exceptions":5,"./Grammar":6,"./Message":8,"./Parser":10,"./RTCSession":11,"./Registrator":16,"./SIPMessage":18,"./Socket":19,"./Transactions":21,"./Transport":22,"./URI":24,"./Utils":25,"./WebSocketInterface":26,"./sanityCheck":27,"debug":33,"events":28,"rtcninja":43,"util":32}],24:[function(require,module,exports){module.exports=URI;/**
             * Dependencies.
             */var JsSIP_C=require('./Constants');var Utils=require('./Utils');var Grammar=require('./Grammar');/**
             * -param {String} [scheme]
             * -param {String} [user]
             * -param {String} host
             * -param {String} [port]
             * -param {Object} [parameters]
             * -param {Object} [headers]
             *
             */function URI(scheme,user,host,port,parameters,headers){var param,header;// Checks
if(!host){throw new TypeError('missing or invalid "host" parameter');}// Initialize parameters
scheme=scheme||JsSIP_C.SIP;this.parameters={};this.headers={};for(param in parameters){this.setParam(param,parameters[param]);}for(header in headers){this.setHeader(header,headers[header]);}Object.defineProperties(this,{scheme:{get:function get(){return scheme;},set:function set(value){scheme=value.toLowerCase();}},user:{get:function get(){return user;},set:function set(value){user=value;}},host:{get:function get(){return host;},set:function set(value){host=value.toLowerCase();}},port:{get:function get(){return port;},set:function set(value){port=value===0?value:parseInt(value,10)||null;}}});}URI.prototype={setParam:function setParam(key,value){if(key){this.parameters[key.toLowerCase()]=typeof value==='undefined'||value===null?null:value.toString();}},getParam:function getParam(key){if(key){return this.parameters[key.toLowerCase()];}},hasParam:function hasParam(key){if(key){return this.parameters.hasOwnProperty(key.toLowerCase())&&true||false;}},deleteParam:function deleteParam(parameter){var value;parameter=parameter.toLowerCase();if(this.parameters.hasOwnProperty(parameter)){value=this.parameters[parameter];delete this.parameters[parameter];return value;}},clearParams:function clearParams(){this.parameters={};},setHeader:function setHeader(name,value){this.headers[Utils.headerize(name)]=Array.isArray(value)?value:[value];},getHeader:function getHeader(name){if(name){return this.headers[Utils.headerize(name)];}},hasHeader:function hasHeader(name){if(name){return this.headers.hasOwnProperty(Utils.headerize(name))&&true||false;}},deleteHeader:function deleteHeader(header){var value;header=Utils.headerize(header);if(this.headers.hasOwnProperty(header)){value=this.headers[header];delete this.headers[header];return value;}},clearHeaders:function clearHeaders(){this.headers={};},clone:function clone(){return new URI(this.scheme,this.user,this.host,this.port,JSON.parse(JSON.stringify(this.parameters)),JSON.parse(JSON.stringify(this.headers)));},toString:function toString(){var header,parameter,idx,uri,headers=[];uri=this.scheme+':';if(this.user){uri+=Utils.escapeUser(this.user)+'@';}uri+=this.host;if(this.port||this.port===0){uri+=':'+this.port;}for(parameter in this.parameters){uri+=';'+parameter;if(this.parameters[parameter]!==null){uri+='='+this.parameters[parameter];}}for(header in this.headers){for(idx=0;idx<this.headers[header].length;idx++){headers.push(header+'='+this.headers[header][idx]);}}if(headers.length>0){uri+='?'+headers.join('&');}return uri;},toAor:function toAor(show_port){var aor;aor=this.scheme+':';if(this.user){aor+=Utils.escapeUser(this.user)+'@';}aor+=this.host;if(show_port&&(this.port||this.port===0)){aor+=':'+this.port;}return aor;}};/**
             * Parse the given string and returns a JsSIP.URI instance or undefined if
             * it is an invalid URI.
             */URI.parse=function(uri){uri=Grammar.parse(uri,'SIP_URI');if(uri!==-1){return uri;}else{return undefined;}};},{"./Constants":1,"./Grammar":6,"./Utils":25}],25:[function(require,module,exports){var Utils={};module.exports=Utils;/**
             * Dependencies.
             */var JsSIP_C=require('./Constants');var URI=require('./URI');var Grammar=require('./Grammar');Utils.str_utf8_length=function(string){return unescape(encodeURIComponent(string)).length;};Utils.isFunction=function(fn){if(fn!==undefined){return Object.prototype.toString.call(fn)==='[object Function]'?true:false;}else{return false;}};Utils.isString=function(str){if(str!==undefined){return Object.prototype.toString.call(str)==='[object String]'?true:false;}else{return false;}};Utils.isDecimal=function(num){return!isNaN(num)&&parseFloat(num)===parseInt(num,10);};Utils.isEmpty=function(value){if(value===null||value===''||value===undefined||Array.isArray(value)&&value.length===0||typeof value==='number'&&isNaN(value)){return true;}};Utils.hasMethods=function(obj/*, method list as strings */){var i=1,methodName;while(methodName=arguments[i++]){if(this.isFunction(obj[methodName])){return false;}}return true;};Utils.createRandomToken=function(size,base){var i,r,token='';base=base||32;for(i=0;i<size;i++){r=Math.random()*base|0;token+=r.toString(base);}return token;};Utils.newTag=function(){return Utils.createRandomToken(10);};// http://stackoverflow.com/users/109538/broofa
Utils.newUUID=function(){var UUID='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c==='x'?r:r&0x3|0x8;return v.toString(16);});return UUID;};Utils.hostType=function(host){if(!host){return;}else{host=Grammar.parse(host,'host');if(host!==-1){return host.host_type;}}};/**
             * Normalize SIP URI.
             * NOTE: It does not allow a SIP URI without username.
             * Accepts 'sip', 'sips' and 'tel' URIs and convert them into 'sip'.
             * Detects the domain part (if given) and properly hex-escapes the user portion.
             * If the user portion has only 'tel' number symbols the user portion is clean of 'tel' visual separators.
             */Utils.normalizeTarget=function(target,domain){var uri,target_array,target_user,target_domain;// If no target is given then raise an error.
if(!target){return;// If a URI instance is given then return it.
}else if(target instanceof URI){return target;// If a string is given split it by '@':
// - Last fragment is the desired domain.
// - Otherwise append the given domain argument.
}else if(typeof target==='string'){target_array=target.split('@');switch(target_array.length){case 1:if(!domain){return;}target_user=target;target_domain=domain;break;case 2:target_user=target_array[0];target_domain=target_array[1];break;default:target_user=target_array.slice(0,target_array.length-1).join('@');target_domain=target_array[target_array.length-1];}// Remove the URI scheme (if present).
target_user=target_user.replace(/^(sips?|tel):/i,'');// Remove 'tel' visual separators if the user portion just contains 'tel' number symbols.
if(/^[\-\.\(\)]*\+?[0-9\-\.\(\)]+$/.test(target_user)){target_user=target_user.replace(/[\-\.\(\)]/g,'');}// Build the complete SIP URI.
target=JsSIP_C.SIP+':'+Utils.escapeUser(target_user)+'@'+target_domain;// Finally parse the resulting URI.
if(uri=URI.parse(target)){return uri;}else{return;}}else{return;}};/**
             * Hex-escape a SIP URI user.
             */Utils.escapeUser=function(user){// Don't hex-escape ':' (%3A), '+' (%2B), '?' (%3F"), '/' (%2F).
return encodeURIComponent(decodeURIComponent(user)).replace(/%3A/ig,':').replace(/%2B/ig,'+').replace(/%3F/ig,'?').replace(/%2F/ig,'/');};Utils.headerize=function(string){var exceptions={'Call-Id':'Call-ID','Cseq':'CSeq','Www-Authenticate':'WWW-Authenticate'},name=string.toLowerCase().replace(/_/g,'-').split('-'),hname='',parts=name.length,part;for(part=0;part<parts;part++){if(part!==0){hname+='-';}hname+=name[part].charAt(0).toUpperCase()+name[part].substring(1);}if(exceptions[hname]){hname=exceptions[hname];}return hname;};Utils.sipErrorCause=function(status_code){var cause;for(cause in JsSIP_C.SIP_ERROR_CAUSES){if(JsSIP_C.SIP_ERROR_CAUSES[cause].indexOf(status_code)!==-1){return JsSIP_C.causes[cause];}}return JsSIP_C.causes.SIP_FAILURE_CODE;};/**
             * Generate a random Test-Net IP (http://tools.ietf.org/html/rfc5735)
             */Utils.getRandomTestNetIP=function(){function getOctet(from,to){return Math.floor(Math.random()*(to-from+1)+from);}return'192.0.2.'+getOctet(1,254);};// MD5 (Message-Digest Algorithm) http://www.webtoolkit.info
Utils.calculateMD5=function(string){function rotateLeft(lValue,iShiftBits){return lValue<<iShiftBits|lValue>>>32-iShiftBits;}function addUnsigned(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=lX&0x80000000;lY8=lY&0x80000000;lX4=lX&0x40000000;lY4=lY&0x40000000;lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4){return lResult^0x80000000^lX8^lY8;}if(lX4|lY4){if(lResult&0x40000000){return lResult^0xC0000000^lX8^lY8;}else{return lResult^0x40000000^lX8^lY8;}}else{return lResult^lX8^lY8;}}function doF(x,y,z){return x&y|~x&z;}function doG(x,y,z){return x&z|y&~z;}function doH(x,y,z){return x^y^z;}function doI(x,y,z){return y^(x|~z);}function doFF(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(doF(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);}function doGG(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(doG(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);}function doHH(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(doH(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);}function doII(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(doI(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);}function convertToWordArray(string){var lWordCount;var lMessageLength=string.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-lNumberOfWords_temp1%64)/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=new Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-lByteCount%4)/4;lBytePosition=lByteCount%4*8;lWordArray[lWordCount]=lWordArray[lWordCount]|string.charCodeAt(lByteCount)<<lBytePosition;lByteCount++;}lWordCount=(lByteCount-lByteCount%4)/4;lBytePosition=lByteCount%4*8;lWordArray[lWordCount]=lWordArray[lWordCount]|0x80<<lBytePosition;lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray;}function wordToHex(lValue){var wordToHexValue='',wordToHexValue_temp='',lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=lValue>>>lCount*8&255;wordToHexValue_temp='0'+lByte.toString(16);wordToHexValue=wordToHexValue+wordToHexValue_temp.substr(wordToHexValue_temp.length-2,2);}return wordToHexValue;}function utf8Encode(string){string=string.replace(/\r\n/g,'\n');var utftext='';for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}else if(c>127&&c<2048){utftext+=String.fromCharCode(c>>6|192);utftext+=String.fromCharCode(c&63|128);}else{utftext+=String.fromCharCode(c>>12|224);utftext+=String.fromCharCode(c>>6&63|128);utftext+=String.fromCharCode(c&63|128);}}return utftext;}var x=[];var k,AA,BB,CC,DD,a,b,c,d;var S11=7,S12=12,S13=17,S14=22;var S21=5,S22=9,S23=14,S24=20;var S31=4,S32=11,S33=16,S34=23;var S41=6,S42=10,S43=15,S44=21;string=utf8Encode(string);x=convertToWordArray(string);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=doFF(a,b,c,d,x[k+0],S11,0xD76AA478);d=doFF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=doFF(c,d,a,b,x[k+2],S13,0x242070DB);b=doFF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=doFF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=doFF(d,a,b,c,x[k+5],S12,0x4787C62A);c=doFF(c,d,a,b,x[k+6],S13,0xA8304613);b=doFF(b,c,d,a,x[k+7],S14,0xFD469501);a=doFF(a,b,c,d,x[k+8],S11,0x698098D8);d=doFF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=doFF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=doFF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=doFF(a,b,c,d,x[k+12],S11,0x6B901122);d=doFF(d,a,b,c,x[k+13],S12,0xFD987193);c=doFF(c,d,a,b,x[k+14],S13,0xA679438E);b=doFF(b,c,d,a,x[k+15],S14,0x49B40821);a=doGG(a,b,c,d,x[k+1],S21,0xF61E2562);d=doGG(d,a,b,c,x[k+6],S22,0xC040B340);c=doGG(c,d,a,b,x[k+11],S23,0x265E5A51);b=doGG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=doGG(a,b,c,d,x[k+5],S21,0xD62F105D);d=doGG(d,a,b,c,x[k+10],S22,0x2441453);c=doGG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=doGG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=doGG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=doGG(d,a,b,c,x[k+14],S22,0xC33707D6);c=doGG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=doGG(b,c,d,a,x[k+8],S24,0x455A14ED);a=doGG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=doGG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=doGG(c,d,a,b,x[k+7],S23,0x676F02D9);b=doGG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=doHH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=doHH(d,a,b,c,x[k+8],S32,0x8771F681);c=doHH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=doHH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=doHH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=doHH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=doHH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=doHH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=doHH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=doHH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=doHH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=doHH(b,c,d,a,x[k+6],S34,0x4881D05);a=doHH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=doHH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=doHH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=doHH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=doII(a,b,c,d,x[k+0],S41,0xF4292244);d=doII(d,a,b,c,x[k+7],S42,0x432AFF97);c=doII(c,d,a,b,x[k+14],S43,0xAB9423A7);b=doII(b,c,d,a,x[k+5],S44,0xFC93A039);a=doII(a,b,c,d,x[k+12],S41,0x655B59C3);d=doII(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=doII(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=doII(b,c,d,a,x[k+1],S44,0x85845DD1);a=doII(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=doII(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=doII(c,d,a,b,x[k+6],S43,0xA3014314);b=doII(b,c,d,a,x[k+13],S44,0x4E0811A1);a=doII(a,b,c,d,x[k+4],S41,0xF7537E82);d=doII(d,a,b,c,x[k+11],S42,0xBD3AF235);c=doII(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=doII(b,c,d,a,x[k+9],S44,0xEB86D391);a=addUnsigned(a,AA);b=addUnsigned(b,BB);c=addUnsigned(c,CC);d=addUnsigned(d,DD);}var temp=wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);return temp.toLowerCase();};},{"./Constants":1,"./Grammar":6,"./URI":24}],26:[function(require,module,exports){module.exports=WebSocketInterface;/**
             * Dependencies.
             */var Grammar=require('./Grammar');var debug=require('debug')('JsSIP:WebSocketInterface');var debugerror=require('debug')('JsSIP:ERROR:WebSocketInterface');debugerror.log=console.warn.bind(console);function WebSocketInterface(url){debug('new() [url:"%s"]',url);var sip_uri=null;var via_transport=null;this.ws=null;// setting the 'scheme' alters the sip_uri too (used in SIP Route header field)
Object.defineProperties(this,{via_transport:{get:function get(){return via_transport;},set:function set(transport){via_transport=transport.toUpperCase();}},sip_uri:{get:function get(){return sip_uri;}},url:{get:function get(){return url;}}});var parsed_url=Grammar.parse(url,'absoluteURI');if(parsed_url===-1){debugerror('invalid WebSocket URI: '+url);throw new TypeError('Invalid argument: '+url);}else if(parsed_url.scheme!=='wss'&&parsed_url.scheme!=='ws'){debugerror('invalid WebSocket URI scheme: '+parsed_url.scheme);throw new TypeError('Invalid argument: '+url);}else{sip_uri='sip:'+parsed_url.host+(parsed_url.port?':'+parsed_url.port:'')+';transport=ws';this.via_transport=parsed_url.scheme;}}WebSocketInterface.prototype.connect=function(){debug('connect()');if(this.isConnected()){debug('WebSocket '+this.url+' is already connected');return;}else if(this.isConnecting()){debug('WebSocket '+this.url+' is connecting');return;}if(this.ws){this.ws.close();}debug('connecting to WebSocket '+this.url);try{this.ws=new WebSocket(this.url,'sip');this.ws.binaryType='arraybuffer';this.ws.onopen=onOpen.bind(this);this.ws.onclose=onClose.bind(this);this.ws.onmessage=onMessage.bind(this);this.ws.onerror=onError.bind(this);}catch(e){onError.call(this,e);}};WebSocketInterface.prototype.disconnect=function(){debug('disconnect()');if(this.ws){this.ws.close();this.ws=null;}};WebSocketInterface.prototype.send=function(message){debug('send()');if(this.isConnected()){this.ws.send(message);return true;}else{debugerror('unable to send message, WebSocket is not open');return false;}};WebSocketInterface.prototype.isConnected=function(){return this.ws&&this.ws.readyState===this.ws.OPEN;};WebSocketInterface.prototype.isConnecting=function(){return this.ws&&this.ws.readyState===this.ws.CONNECTING;};/**
             * WebSocket Event Handlers
             */function onOpen(){debug('WebSocket '+this.url+' connected');this.onconnect();}function onClose(e){debug('WebSocket '+this.url+' closed');if(e.wasClean===false){debug('WebSocket abrupt disconnection');}this.ondisconnect(e.wasClean,e.code,e.reason);}function onMessage(e){debug('received WebSocket message');this.ondata(e.data);}function onError(e){debugerror('WebSocket '+this.url+' error: '+e);}},{"./Grammar":6,"debug":33}],27:[function(require,module,exports){module.exports=sanityCheck;/**
             * Dependencies.
             */var debug=require('debug')('JsSIP:sanityCheck');var JsSIP_C=require('./Constants');var SIPMessage=require('./SIPMessage');var Utils=require('./Utils');var message,ua,transport,requests=[],responses=[],all=[];requests.push(rfc3261_8_2_2_1);requests.push(rfc3261_16_3_4);requests.push(rfc3261_18_3_request);requests.push(rfc3261_8_2_2_2);responses.push(rfc3261_8_1_3_3);responses.push(rfc3261_18_3_response);all.push(minimumHeaders);function sanityCheck(m,u,t){var len,pass;message=m;ua=u;transport=t;len=all.length;while(len--){pass=all[len](message);if(pass===false){return false;}}if(message instanceof SIPMessage.IncomingRequest){len=requests.length;while(len--){pass=requests[len](message);if(pass===false){return false;}}}else if(message instanceof SIPMessage.IncomingResponse){len=responses.length;while(len--){pass=responses[len](message);if(pass===false){return false;}}}//Everything is OK
return true;}/*
     * Sanity Check for incoming Messages
     *
     * Requests:
     *  - _rfc3261_8_2_2_1_ Receive a Request with a non supported URI scheme
     *  - _rfc3261_16_3_4_ Receive a Request already sent by us
     *   Does not look at via sent-by but at jssip_id, which is inserted as
     *   a prefix in all initial requests generated by the ua
     *  - _rfc3261_18_3_request_ Body Content-Length
     *  - _rfc3261_8_2_2_2_ Merged Requests
     *
     * Responses:
     *  - _rfc3261_8_1_3_3_ Multiple Via headers
     *  - _rfc3261_18_3_response_ Body Content-Length
     *
     * All:
     *  - Minimum headers in a SIP message
     */ // Sanity Check functions for requests
function rfc3261_8_2_2_1(){if(message.s('to').uri.scheme!=='sip'){reply(416);return false;}}function rfc3261_16_3_4(){if(!message.to_tag){if(message.call_id.substr(0,5)===ua.configuration.jssip_id){reply(482);return false;}}}function rfc3261_18_3_request(){var len=Utils.str_utf8_length(message.body),contentLength=message.getHeader('content-length');if(len<contentLength){reply(400);return false;}}function rfc3261_8_2_2_2(){var tr,idx,fromTag=message.from_tag,call_id=message.call_id,cseq=message.cseq;// Accept any in-dialog request.
if(message.to_tag){return;}// INVITE request.
if(message.method===JsSIP_C.INVITE){// If the branch matches the key of any IST then assume it is a retransmission
// and ignore the INVITE.
// TODO: we should reply the last response.
if(ua.transactions.ist[message.via_branch]){return false;}// Otherwise check whether it is a merged request.
else{for(idx in ua.transactions.ist){tr=ua.transactions.ist[idx];if(tr.request.from_tag===fromTag&&tr.request.call_id===call_id&&tr.request.cseq===cseq){reply(482);return false;}}}}// Non INVITE request.
else{// If the branch matches the key of any NIST then assume it is a retransmission
// and ignore the request.
// TODO: we should reply the last response.
if(ua.transactions.nist[message.via_branch]){return false;}// Otherwise check whether it is a merged request.
else{for(idx in ua.transactions.nist){tr=ua.transactions.nist[idx];if(tr.request.from_tag===fromTag&&tr.request.call_id===call_id&&tr.request.cseq===cseq){reply(482);return false;}}}}}// Sanity Check functions for responses
function rfc3261_8_1_3_3(){if(message.getHeaders('via').length>1){debug('more than one Via header field present in the response, dropping the response');return false;}}function rfc3261_18_3_response(){var len=Utils.str_utf8_length(message.body),contentLength=message.getHeader('content-length');if(len<contentLength){debug('message body length is lower than the value in Content-Length header field, dropping the response');return false;}}// Sanity Check functions for requests and responses
function minimumHeaders(){var mandatoryHeaders=['from','to','call_id','cseq','via'],idx=mandatoryHeaders.length;while(idx--){if(!message.hasHeader(mandatoryHeaders[idx])){debug('missing mandatory header field : '+mandatoryHeaders[idx]+', dropping the response');return false;}}}// Reply
function reply(status_code){var to,response='SIP/2.0 '+status_code+' '+JsSIP_C.REASON_PHRASE[status_code]+'\r\n',vias=message.getHeaders('via'),length=vias.length,idx=0;for(idx;idx<length;idx++){response+='Via: '+vias[idx]+'\r\n';}to=message.getHeader('To');if(!message.to_tag){to+=';tag='+Utils.newTag();}response+='To: '+to+'\r\n';response+='From: '+message.getHeader('From')+'\r\n';response+='Call-ID: '+message.call_id+'\r\n';response+='CSeq: '+message.cseq+' '+message.method+'\r\n';response+='\r\n';transport.send(response);}},{"./Constants":1,"./SIPMessage":18,"./Utils":25,"debug":33}],28:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter(){this._events=this._events||{};this._maxListeners=this._maxListeners||undefined;}module.exports=EventEmitter;// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=undefined;EventEmitter.prototype._maxListeners=undefined;// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners=10;// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||n<0||isNaN(n))throw TypeError('n must be a positive number');this._maxListeners=n;return this;};EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(!this._events)this._events={};// If there is no 'error' event listener then throw.
if(type==='error'){if(!this._events.error||isObject(this._events.error)&&!this._events.error.length){er=arguments[1];if(er instanceof Error){throw er;// Unhandled 'error' event
}else{// At least give some kind of context to the user
var err=new Error('Uncaught, unspecified "error" event. ('+er+')');err.context=er;throw err;}}}handler=this._events[type];if(isUndefined(handler))return false;if(isFunction(handler)){switch(arguments.length){// fast cases
case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;// slower
default:args=Array.prototype.slice.call(arguments,1);handler.apply(this,args);}}else if(isObject(handler)){args=Array.prototype.slice.call(arguments,1);listeners=handler.slice();len=listeners.length;for(i=0;i<len;i++){listeners[i].apply(this,args);}}return true;};EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError('listener must be a function');if(!this._events)this._events={};// To avoid recursion in the case that type === "newListener"! Before
// adding it to the listeners, first emit "newListener".
if(this._events.newListener)this.emit('newListener',type,isFunction(listener.listener)?listener.listener:listener);if(!this._events[type])// Optimize the case of one listener. Don't need the extra array object.
this._events[type]=listener;else if(isObject(this._events[type]))// If we've already got an array, just append.
this._events[type].push(listener);else// Adding the second element, need to change to array.
this._events[type]=[this._events[type],listener];// Check for listener leak
if(isObject(this._events[type])&&!this._events[type].warned){if(!isUndefined(this._maxListeners)){m=this._maxListeners;}else{m=EventEmitter.defaultMaxListeners;}if(m&&m>0&&this._events[type].length>m){this._events[type].warned=true;console.error('(node) warning: possible EventEmitter memory '+'leak detected. %d listeners added. '+'Use emitter.setMaxListeners() to increase limit.',this._events[type].length);if(typeof console.trace==='function'){// not supported in IE 10
console.trace();}}}return this;};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.once=function(type,listener){if(!isFunction(listener))throw TypeError('listener must be a function');var fired=false;function g(){this.removeListener(type,g);if(!fired){fired=true;listener.apply(this,arguments);}}g.listener=listener;this.on(type,g);return this;};// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError('listener must be a function');if(!this._events||!this._events[type])return this;list=this._events[type];length=list.length;position=-1;if(list===listener||isFunction(list.listener)&&list.listener===listener){delete this._events[type];if(this._events.removeListener)this.emit('removeListener',type,listener);}else if(isObject(list)){for(i=length;i-->0;){if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break;}}if(position<0)return this;if(list.length===1){list.length=0;delete this._events[type];}else{list.splice(position,1);}if(this._events.removeListener)this.emit('removeListener',type,listener);}return this;};EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;// not listening for removeListener, no need to emit
if(!this._events.removeListener){if(arguments.length===0)this._events={};else if(this._events[type])delete this._events[type];return this;}// emit removeListener for all listeners on all events
if(arguments.length===0){for(key in this._events){if(key==='removeListener')continue;this.removeAllListeners(key);}this.removeAllListeners('removeListener');this._events={};return this;}listeners=this._events[type];if(isFunction(listeners)){this.removeListener(type,listeners);}else if(listeners){// LIFO order
while(listeners.length){this.removeListener(type,listeners[listeners.length-1]);}}delete this._events[type];return this;};EventEmitter.prototype.listeners=function(type){var ret;if(!this._events||!this._events[type])ret=[];else if(isFunction(this._events[type]))ret=[this._events[type]];else ret=this._events[type].slice();return ret;};EventEmitter.prototype.listenerCount=function(type){if(this._events){var evlistener=this._events[type];if(isFunction(evlistener))return 1;else if(evlistener)return evlistener.length;}return 0;};EventEmitter.listenerCount=function(emitter,type){return emitter.listenerCount(type);};function isFunction(arg){return typeof arg==='function';}function isNumber(arg){return typeof arg==='number';}function isObject(arg){return _typeof(arg)==='object'&&arg!==null;}function isUndefined(arg){return arg===void 0;}},{}],29:[function(require,module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};},{}],30:[function(require,module,exports){if(typeof Object.create==='function'){// implementation from standard node.js 'util' module
module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}});};}else{// old school shim for old browsers
module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function TempCtor(){};TempCtor.prototype=superCtor.prototype;ctor.prototype=new TempCtor();ctor.prototype.constructor=ctor;};}},{}],31:[function(require,module,exports){module.exports=function isBuffer(arg){return arg&&_typeof(arg)==='object'&&typeof arg.copy==='function'&&typeof arg.fill==='function'&&typeof arg.readUInt8==='function';};},{}],32:[function(require,module,exports){(function(process,global){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp=/%[sdj%]/g;exports.format=function(f){if(!isString(f)){var objects=[];for(var i=0;i<arguments.length;i++){objects.push(inspect(arguments[i]));}return objects.join(' ');}var i=1;var args=arguments;var len=args.length;var str=String(f).replace(formatRegExp,function(x){if(x==='%%')return'%';if(i>=len)return x;switch(x){case'%s':return String(args[i++]);case'%d':return Number(args[i++]);case'%j':try{return JSON.stringify(args[i++]);}catch(_){return'[Circular]';}default:return x;}});for(var x=args[i];i<len;x=args[++i]){if(isNull(x)||!isObject(x)){str+=' '+x;}else{str+=' '+inspect(x);}}return str;};// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate=function(fn,msg){// Allow for deprecating things in the process of starting up.
if(isUndefined(global.process)){return function(){return exports.deprecate(fn,msg).apply(this,arguments);};}if(process.noDeprecation===true){return fn;}var warned=false;function deprecated(){if(!warned){if(process.throwDeprecation){throw new Error(msg);}else if(process.traceDeprecation){console.trace(msg);}else{console.error(msg);}warned=true;}return fn.apply(this,arguments);}return deprecated;};var debugs={};var debugEnviron;exports.debuglog=function(set){if(isUndefined(debugEnviron))debugEnviron=process.env.NODE_DEBUG||'';set=set.toUpperCase();if(!debugs[set]){if(new RegExp('\\b'+set+'\\b','i').test(debugEnviron)){var pid=process.pid;debugs[set]=function(){var msg=exports.format.apply(exports,arguments);console.error('%s %d: %s',set,pid,msg);};}else{debugs[set]=function(){};}}return debugs[set];};/**
                 * Echos the value of a value. Trys to print the value out
                 * in the best way possible given the different types.
                 *
                 * @param {Object} obj The object to print out.
                 * @param {Object} opts Optional options object that alters the output.
                 */ /* legacy: obj, showHidden, depth, colors*/function inspect(obj,opts){// default options
var ctx={seen:[],stylize:stylizeNoColor};// legacy...
if(arguments.length>=3)ctx.depth=arguments[2];if(arguments.length>=4)ctx.colors=arguments[3];if(isBoolean(opts)){// legacy...
ctx.showHidden=opts;}else if(opts){// got an "options" object
exports._extend(ctx,opts);}// set default options
if(isUndefined(ctx.showHidden))ctx.showHidden=false;if(isUndefined(ctx.depth))ctx.depth=2;if(isUndefined(ctx.colors))ctx.colors=false;if(isUndefined(ctx.customInspect))ctx.customInspect=true;if(ctx.colors)ctx.stylize=stylizeWithColor;return formatValue(ctx,obj,ctx.depth);}exports.inspect=inspect;// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors={'bold':[1,22],'italic':[3,23],'underline':[4,24],'inverse':[7,27],'white':[37,39],'grey':[90,39],'black':[30,39],'blue':[34,39],'cyan':[36,39],'green':[32,39],'magenta':[35,39],'red':[31,39],'yellow':[33,39]};// Don't use 'blue' not visible on cmd.exe
inspect.styles={'special':'cyan','number':'yellow','boolean':'yellow','undefined':'grey','null':'bold','string':'green','date':'magenta',// "name": intentionally not styling
'regexp':'red'};function stylizeWithColor(str,styleType){var style=inspect.styles[styleType];if(style){return"\x1B["+inspect.colors[style][0]+'m'+str+"\x1B["+inspect.colors[style][1]+'m';}else{return str;}}function stylizeNoColor(str,styleType){return str;}function arrayToHash(array){var hash={};array.forEach(function(val,idx){hash[val]=true;});return hash;}function formatValue(ctx,value,recurseTimes){// Provide a hook for user-specified inspect functions.
// Check that value is an object with an inspect function on it
if(ctx.customInspect&&value&&isFunction(value.inspect)&&// Filter out the util module, it's inspect function is special
value.inspect!==exports.inspect&&// Also filter out any prototype objects using the circular check.
!(value.constructor&&value.constructor.prototype===value)){var ret=value.inspect(recurseTimes,ctx);if(!isString(ret)){ret=formatValue(ctx,ret,recurseTimes);}return ret;}// Primitive types cannot have properties
var primitive=formatPrimitive(ctx,value);if(primitive){return primitive;}// Look up the keys of the object.
var keys=Object.keys(value);var visibleKeys=arrayToHash(keys);if(ctx.showHidden){keys=Object.getOwnPropertyNames(value);}// IE doesn't make error fields non-enumerable
// http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
if(isError(value)&&(keys.indexOf('message')>=0||keys.indexOf('description')>=0)){return formatError(value);}// Some type of object without properties can be shortcutted.
if(keys.length===0){if(isFunction(value)){var name=value.name?': '+value.name:'';return ctx.stylize('[Function'+name+']','special');}if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),'regexp');}if(isDate(value)){return ctx.stylize(Date.prototype.toString.call(value),'date');}if(isError(value)){return formatError(value);}}var base='',array=false,braces=['{','}'];// Make Array say that they are Array
if(isArray(value)){array=true;braces=['[',']'];}// Make functions say that they are functions
if(isFunction(value)){var n=value.name?': '+value.name:'';base=' [Function'+n+']';}// Make RegExps say that they are RegExps
if(isRegExp(value)){base=' '+RegExp.prototype.toString.call(value);}// Make dates with properties first say the date
if(isDate(value)){base=' '+Date.prototype.toUTCString.call(value);}// Make error with message first say the error
if(isError(value)){base=' '+formatError(value);}if(keys.length===0&&(!array||value.length==0)){return braces[0]+base+braces[1];}if(recurseTimes<0){if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),'regexp');}else{return ctx.stylize('[Object]','special');}}ctx.seen.push(value);var output;if(array){output=formatArray(ctx,value,recurseTimes,visibleKeys,keys);}else{output=keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array);});}ctx.seen.pop();return reduceToSingleString(output,base,braces);}function formatPrimitive(ctx,value){if(isUndefined(value))return ctx.stylize('undefined','undefined');if(isString(value)){var simple='\''+JSON.stringify(value).replace(/^"|"$/g,'').replace(/'/g,"\\'").replace(/\\"/g,'"')+'\'';return ctx.stylize(simple,'string');}if(isNumber(value))return ctx.stylize(''+value,'number');if(isBoolean(value))return ctx.stylize(''+value,'boolean');// For some reason typeof null is "object", so special case here.
if(isNull(value))return ctx.stylize('null','null');}function formatError(value){return'['+Error.prototype.toString.call(value)+']';}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){var output=[];for(var i=0,l=value.length;i<l;++i){if(hasOwnProperty(value,String(i))){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,String(i),true));}else{output.push('');}}keys.forEach(function(key){if(!key.match(/^\d+$/)){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,true));}});return output;}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str,desc;desc=Object.getOwnPropertyDescriptor(value,key)||{value:value[key]};if(desc.get){if(desc.set){str=ctx.stylize('[Getter/Setter]','special');}else{str=ctx.stylize('[Getter]','special');}}else{if(desc.set){str=ctx.stylize('[Setter]','special');}}if(!hasOwnProperty(visibleKeys,key)){name='['+key+']';}if(!str){if(ctx.seen.indexOf(desc.value)<0){if(isNull(recurseTimes)){str=formatValue(ctx,desc.value,null);}else{str=formatValue(ctx,desc.value,recurseTimes-1);}if(str.indexOf('\n')>-1){if(array){str=str.split('\n').map(function(line){return'  '+line;}).join('\n').substr(2);}else{str='\n'+str.split('\n').map(function(line){return'   '+line;}).join('\n');}}}else{str=ctx.stylize('[Circular]','special');}}if(isUndefined(name)){if(array&&key.match(/^\d+$/)){return str;}name=JSON.stringify(''+key);if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){name=name.substr(1,name.length-2);name=ctx.stylize(name,'name');}else{name=name.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");name=ctx.stylize(name,'string');}}return name+': '+str;}function reduceToSingleString(output,base,braces){var numLinesEst=0;var length=output.reduce(function(prev,cur){numLinesEst++;if(cur.indexOf('\n')>=0)numLinesEst++;return prev+cur.replace(/\u001b\[\d\d?m/g,'').length+1;},0);if(length>60){return braces[0]+(base===''?'':base+'\n ')+' '+output.join(',\n  ')+' '+braces[1];}return braces[0]+base+' '+output.join(', ')+' '+braces[1];}// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar){return Array.isArray(ar);}exports.isArray=isArray;function isBoolean(arg){return typeof arg==='boolean';}exports.isBoolean=isBoolean;function isNull(arg){return arg===null;}exports.isNull=isNull;function isNullOrUndefined(arg){return arg==null;}exports.isNullOrUndefined=isNullOrUndefined;function isNumber(arg){return typeof arg==='number';}exports.isNumber=isNumber;function isString(arg){return typeof arg==='string';}exports.isString=isString;function isSymbol(arg){return _typeof(arg)==='symbol';}exports.isSymbol=isSymbol;function isUndefined(arg){return arg===void 0;}exports.isUndefined=isUndefined;function isRegExp(re){return isObject(re)&&objectToString(re)==='[object RegExp]';}exports.isRegExp=isRegExp;function isObject(arg){return _typeof(arg)==='object'&&arg!==null;}exports.isObject=isObject;function isDate(d){return isObject(d)&&objectToString(d)==='[object Date]';}exports.isDate=isDate;function isError(e){return isObject(e)&&(objectToString(e)==='[object Error]'||e instanceof Error);}exports.isError=isError;function isFunction(arg){return typeof arg==='function';}exports.isFunction=isFunction;function isPrimitive(arg){return arg===null||typeof arg==='boolean'||typeof arg==='number'||typeof arg==='string'||_typeof(arg)==='symbol'||// ES6 symbol
typeof arg==='undefined';}exports.isPrimitive=isPrimitive;exports.isBuffer=require('./support/isBuffer');function objectToString(o){return Object.prototype.toString.call(o);}function pad(n){return n<10?'0'+n.toString(10):n.toString(10);}var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];// 26 Feb 16:19:34
function timestamp(){var d=new Date();var time=[pad(d.getHours()),pad(d.getMinutes()),pad(d.getSeconds())].join(':');return[d.getDate(),months[d.getMonth()],time].join(' ');}// log is just a thin wrapper to console.log that prepends a timestamp
exports.log=function(){console.log('%s - %s',timestamp(),exports.format.apply(exports,arguments));};/**
                 * Inherit the prototype methods from one constructor into another.
                 *
                 * The Function.prototype.inherits from lang.js rewritten as a standalone
                 * function (not on Function.prototype). NOTE: If this file is to be loaded
                 * during bootstrapping this function needs to be rewritten using some native
                 * functions as prototype setup using normal JavaScript does not work as
                 * expected during bootstrapping (see mirror.js in r114903).
                 *
                 * @param {function} ctor Constructor function which needs to inherit the
                 *     prototype.
                 * @param {function} superCtor Constructor function to inherit prototype from.
                 */exports.inherits=require('inherits');exports._extend=function(origin,add){// Don't do anything if add isn't an object
if(!add||!isObject(add))return origin;var keys=Object.keys(add);var i=keys.length;while(i--){origin[keys[i]]=add[keys[i]];}return origin;};function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);}}).call(this,require('_process'),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./support/isBuffer":31,"_process":29,"inherits":30}],33:[function(require,module,exports){/**
             * This is the web browser implementation of `debug()`.
             *
             * Expose `debug()` as the module.
             */exports=module.exports=require('./debug');exports.log=log;exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;exports.storage='undefined'!=typeof chrome&&'undefined'!=typeof chrome.storage?chrome.storage.local:localstorage();/**
             * Colors.
             */exports.colors=['lightseagreen','forestgreen','goldenrod','dodgerblue','darkorchid','crimson'];/**
             * Currently only WebKit-based Web Inspectors, Firefox >= v31,
             * and the Firebug extension (any Firefox version) are known
             * to support "%c" CSS customizations.
             *
             * TODO: add a `localStorage` variable to explicitly enable/disable colors
             */function useColors(){// is webkit? http://stackoverflow.com/a/16459606/376773
return'WebkitAppearance'in document.documentElement.style||// is firebug? http://stackoverflow.com/a/398120/376773
window.console&&(console.firebug||console.exception&&console.table)||// is firefox >= v31?
// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31;}/**
             * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
             */exports.formatters.j=function(v){return JSON.stringify(v);};/**
             * Colorize log arguments if enabled.
             *
             * @api public
             */function formatArgs(){var args=arguments;var useColors=this.useColors;args[0]=(useColors?'%c':'')+this.namespace+(useColors?' %c':' ')+args[0]+(useColors?'%c ':' ')+'+'+exports.humanize(this.diff);if(!useColors)return args;var c='color: '+this.color;args=[args[0],c,'color: inherit'].concat(Array.prototype.slice.call(args,1));// the final "%c" is somewhat tricky, because there could be other
// arguments passed either before or after the %c, so we need to
// figure out the correct index to insert the CSS into
var index=0;var lastC=0;args[0].replace(/%[a-z%]/g,function(match){if('%%'===match)return;index++;if('%c'===match){// we only are interested in the *last* %c
// (the user may have provided their own)
lastC=index;}});args.splice(lastC,0,c);return args;}/**
             * Invokes `console.log()` when available.
             * No-op when `console.log` is not a "function".
             *
             * @api public
             */function log(){// this hackery is required for IE8/9, where
// the `console.log` function doesn't have 'apply'
return'object'===(typeof console==="undefined"?"undefined":_typeof(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments);}/**
             * Save `namespaces`.
             *
             * @param {String} namespaces
             * @api private
             */function save(namespaces){try{if(null==namespaces){exports.storage.removeItem('debug');}else{exports.storage.debug=namespaces;}}catch(e){}}/**
             * Load `namespaces`.
             *
             * @return {String} returns the previously persisted debug modes
             * @api private
             */function load(){var r;try{r=exports.storage.debug;}catch(e){}return r;}/**
             * Enable namespaces listed in `localStorage.debug` initially.
             */exports.enable(load());/**
             * Localstorage attempts to return the localstorage.
             *
             * This is necessary because safari throws
             * when a user disables cookies/localstorage
             * and you attempt to access it.
             *
             * @return {LocalStorage}
             * @api private
             */function localstorage(){try{return window.localStorage;}catch(e){}}},{"./debug":34}],34:[function(require,module,exports){/**
             * This is the common logic for both the Node.js and web browser
             * implementations of `debug()`.
             *
             * Expose `debug()` as the module.
             */exports=module.exports=debug;exports.coerce=coerce;exports.disable=disable;exports.enable=enable;exports.enabled=enabled;exports.humanize=require('ms');/**
             * The currently active debug mode names, and names to skip.
             */exports.names=[];exports.skips=[];/**
             * Map of special "%n" handling functions, for the debug "format" argument.
             *
             * Valid key names are a single, lowercased letter, i.e. "n".
             */exports.formatters={};/**
             * Previously assigned color.
             */var prevColor=0;/**
             * Previous log timestamp.
             */var prevTime;/**
             * Select a color.
             *
             * @return {Number}
             * @api private
             */function selectColor(){return exports.colors[prevColor++%exports.colors.length];}/**
             * Create a debugger with the given `namespace`.
             *
             * @param {String} namespace
             * @return {Function}
             * @api public
             */function debug(namespace){// define the `disabled` version
function disabled(){}disabled.enabled=false;// define the `enabled` version
function enabled(){var self=enabled;// set `diff` timestamp
var curr=+new Date();var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr;// add the `color` if not set
if(null==self.useColors)self.useColors=exports.useColors();if(null==self.color&&self.useColors)self.color=selectColor();var args=Array.prototype.slice.call(arguments);args[0]=exports.coerce(args[0]);if('string'!==typeof args[0]){// anything else let's inspect with %o
args=['%o'].concat(args);}// apply any `formatters` transformations
var index=0;args[0]=args[0].replace(/%([a-z%])/g,function(match,format){// if we encounter an escaped % then don't increase the array index
if(match==='%%')return match;index++;var formatter=exports.formatters[format];if('function'===typeof formatter){var val=args[index];match=formatter.call(self,val);// now we need to remove `args[index]` since it's inlined in the `format`
args.splice(index,1);index--;}return match;});if('function'===typeof exports.formatArgs){args=exports.formatArgs.apply(self,args);}var logFn=enabled.log||exports.log||console.log.bind(console);logFn.apply(self,args);}enabled.enabled=true;var fn=exports.enabled(namespace)?enabled:disabled;fn.namespace=namespace;return fn;}/**
             * Enables a debug mode by namespaces. This can include modes
             * separated by a colon and wildcards.
             *
             * @param {String} namespaces
             * @api public
             */function enable(namespaces){exports.save(namespaces);var split=(namespaces||'').split(/[\s,]+/);var len=split.length;for(var i=0;i<len;i++){if(!split[i])continue;// ignore empty strings
namespaces=split[i].replace(/\*/g,'.*?');if(namespaces[0]==='-'){exports.skips.push(new RegExp('^'+namespaces.substr(1)+'$'));}else{exports.names.push(new RegExp('^'+namespaces+'$'));}}}/**
             * Disable debug output.
             *
             * @api public
             */function disable(){exports.enable('');}/**
             * Returns true if the given mode name is enabled, false otherwise.
             *
             * @param {String} name
             * @return {Boolean}
             * @api public
             */function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++){if(exports.skips[i].test(name)){return false;}}for(i=0,len=exports.names.length;i<len;i++){if(exports.names[i].test(name)){return true;}}return false;}/**
             * Coerce `val`.
             *
             * @param {Mixed} val
             * @return {Mixed}
             * @api private
             */function coerce(val){if(val instanceof Error)return val.stack||val.message;return val;}},{"ms":35}],35:[function(require,module,exports){/**
             * Helpers.
             */var s=1000;var m=s*60;var h=m*60;var d=h*24;var y=d*365.25;/**
             * Parse or format the given `val`.
             *
             * Options:
             *
             *  - `long` verbose formatting [false]
             *
             * @param {String|Number} val
             * @param {Object} options
             * @return {String|Number}
             * @api public
             */module.exports=function(val,options){options=options||{};if('string'==typeof val)return parse(val);return options["long"]?_long(val):_short(val);};/**
             * Parse the given `str` and return milliseconds.
             *
             * @param {String} str
             * @return {Number}
             * @api private
             */function parse(str){str=''+str;if(str.length>10000)return;var match=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);var type=(match[2]||'ms').toLowerCase();switch(type){case'years':case'year':case'yrs':case'yr':case'y':return n*y;case'days':case'day':case'd':return n*d;case'hours':case'hour':case'hrs':case'hr':case'h':return n*h;case'minutes':case'minute':case'mins':case'min':case'm':return n*m;case'seconds':case'second':case'secs':case'sec':case's':return n*s;case'milliseconds':case'millisecond':case'msecs':case'msec':case'ms':return n;}}/**
             * Short format for `ms`.
             *
             * @param {Number} ms
             * @return {String}
             * @api private
             */function _short(ms){if(ms>=d)return Math.round(ms/d)+'d';if(ms>=h)return Math.round(ms/h)+'h';if(ms>=m)return Math.round(ms/m)+'m';if(ms>=s)return Math.round(ms/s)+'s';return ms+'ms';}/**
             * Long format for `ms`.
             *
             * @param {Number} ms
             * @return {String}
             * @api private
             */function _long(ms){return plural(ms,d,'day')||plural(ms,h,'hour')||plural(ms,m,'minute')||plural(ms,s,'second')||ms+' ms';}/**
             * Pluralization helper.
             */function plural(ms,n,name){if(ms<n)return;if(ms<n*1.5)return Math.floor(ms/n)+' '+name;return Math.ceil(ms/n)+' '+name+'s';}},{}],36:[function(require,module,exports){var grammar=module.exports={v:[{name:'version',reg:/^(\d*)$/}],o:[{//o=- 20518 0 IN IP4 203.0.113.1
// NB: sessionId will be a String in most cases because it is huge
name:'origin',reg:/^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,names:['username','sessionId','sessionVersion','netType','ipVer','address'],format:"%s %s %d %s IP%d %s"}],// default parsing of these only (though some of these feel outdated)
s:[{name:'name'}],i:[{name:'description'}],u:[{name:'uri'}],e:[{name:'email'}],p:[{name:'phone'}],z:[{name:'timezones'}],// TODO: this one can actually be parsed properly..
r:[{name:'repeats'}],// TODO: this one can also be parsed properly
//k: [{}], // outdated thing ignored
t:[{//t=0 0
name:'timing',reg:/^(\d*) (\d*)/,names:['start','stop'],format:"%d %d"}],c:[{//c=IN IP4 10.47.197.26
name:'connection',reg:/^IN IP(\d) (\S*)/,names:['version','ip'],format:"IN IP%d %s"}],b:[{//b=AS:4000
push:'bandwidth',reg:/^(TIAS|AS|CT|RR|RS):(\d*)/,names:['type','limit'],format:"%s:%s"}],m:[{//m=video 51744 RTP/AVP 126 97 98 34 31
// NB: special - pushes to session
// TODO: rtp/fmtp should be filtered by the payloads found here?
reg:/^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,names:['type','port','protocol','payloads'],format:"%s %d %s %s"}],a:[{//a=rtpmap:110 opus/48000/2
push:'rtp',reg:/^rtpmap:(\d*) ([\w\-\.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,names:['payload','codec','rate','encoding'],format:function format(o){return o.encoding?"rtpmap:%d %s/%s/%s":o.rate?"rtpmap:%d %s/%s":"rtpmap:%d %s";}},{//a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
//a=fmtp:111 minptime=10; useinbandfec=1
push:'fmtp',reg:/^fmtp:(\d*) ([\S| ]*)/,names:['payload','config'],format:"fmtp:%d %s"},{//a=control:streamid=0
name:'control',reg:/^control:(.*)/,format:"control:%s"},{//a=rtcp:65179 IN IP4 193.84.77.194
name:'rtcp',reg:/^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,names:['port','netType','ipVer','address'],format:function format(o){return o.address!=null?"rtcp:%d %s IP%d %s":"rtcp:%d";}},{//a=rtcp-fb:98 trr-int 100
push:'rtcpFbTrrInt',reg:/^rtcp-fb:(\*|\d*) trr-int (\d*)/,names:['payload','value'],format:"rtcp-fb:%d trr-int %d"},{//a=rtcp-fb:98 nack rpsi
push:'rtcpFb',reg:/^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,names:['payload','type','subtype'],format:function format(o){return o.subtype!=null?"rtcp-fb:%s %s %s":"rtcp-fb:%s %s";}},{//a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
//a=extmap:1/recvonly URI-gps-string
push:'ext',reg:/^extmap:([\w_\/]*) (\S*)(?: (\S*))?/,names:['value','uri','config'],// value may include "/direction" suffix
format:function format(o){return o.config!=null?"extmap:%s %s %s":"extmap:%s %s";}},{//a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
push:'crypto',reg:/^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,names:['id','suite','config','sessionConfig'],format:function format(o){return o.sessionConfig!=null?"crypto:%d %s %s %s":"crypto:%d %s %s";}},{//a=setup:actpass
name:'setup',reg:/^setup:(\w*)/,format:"setup:%s"},{//a=mid:1
name:'mid',reg:/^mid:([^\s]*)/,format:"mid:%s"},{//a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
name:'msid',reg:/^msid:(.*)/,format:"msid:%s"},{//a=ptime:20
name:'ptime',reg:/^ptime:(\d*)/,format:"ptime:%d"},{//a=maxptime:60
name:'maxptime',reg:/^maxptime:(\d*)/,format:"maxptime:%d"},{//a=sendrecv
name:'direction',reg:/^(sendrecv|recvonly|sendonly|inactive)/},{//a=ice-lite
name:'icelite',reg:/^(ice-lite)/},{//a=ice-ufrag:F7gI
name:'iceUfrag',reg:/^ice-ufrag:(\S*)/,format:"ice-ufrag:%s"},{//a=ice-pwd:x9cml/YzichV2+XlhiMu8g
name:'icePwd',reg:/^ice-pwd:(\S*)/,format:"ice-pwd:%s"},{//a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
name:'fingerprint',reg:/^fingerprint:(\S*) (\S*)/,names:['type','hash'],format:"fingerprint:%s %s"},{//a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
//a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0
//a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0
//a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0
//a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0
push:'candidates',reg:/^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?/,names:['foundation','component','transport','priority','ip','port','type','raddr','rport','tcptype','generation'],format:function format(o){var str="candidate:%s %d %s %d %s %d typ %s";str+=o.raddr!=null?" raddr %s rport %d":"%v%v";// NB: candidate has three optional chunks, so %void middles one if it's missing
str+=o.tcptype!=null?" tcptype %s":"%v";if(o.generation!=null){str+=" generation %d";}return str;}},{//a=end-of-candidates (keep after the candidates line for readability)
name:'endOfCandidates',reg:/^(end-of-candidates)/},{//a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
name:'remoteCandidates',reg:/^remote-candidates:(.*)/,format:"remote-candidates:%s"},{//a=ice-options:google-ice
name:'iceOptions',reg:/^ice-options:(\S*)/,format:"ice-options:%s"},{//a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
push:"ssrcs",reg:/^ssrc:(\d*) ([\w_]*):(.*)/,names:['id','attribute','value'],format:"ssrc:%d %s:%s"},{//a=ssrc-group:FEC 1 2
push:"ssrcGroups",reg:/^ssrc-group:(\w*) (.*)/,names:['semantics','ssrcs'],format:"ssrc-group:%s %s"},{//a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
name:"msidSemantic",reg:/^msid-semantic:\s?(\w*) (\S*)/,names:['semantic','token'],format:"msid-semantic: %s %s"// space after ":" is not accidental
},{//a=group:BUNDLE audio video
push:'groups',reg:/^group:(\w*) (.*)/,names:['type','mids'],format:"group:%s %s"},{//a=rtcp-mux
name:'rtcpMux',reg:/^(rtcp-mux)/},{//a=rtcp-rsize
name:'rtcpRsize',reg:/^(rtcp-rsize)/},{//a=sctpmap:5000 webrtc-datachannel 1024
name:'sctpmap',reg:/^sctpmap:([\w_\/]*) (\S*)(?: (\S*))?/,names:['sctpmapNumber','app','maxMessageSize'],format:function format(o){return o.maxMessageSize!=null?"sctpmap:%s %s %s":"sctpmap:%s %s";}},{// any a= that we don't understand is kepts verbatim on media.invalid
push:'invalid',names:["value"]}]};// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function(key){var objs=grammar[key];objs.forEach(function(obj){if(!obj.reg){obj.reg=/(.*)/;}if(!obj.format){obj.format="%s";}});});},{}],37:[function(require,module,exports){var parser=require('./parser');var writer=require('./writer');exports.write=writer;exports.parse=parser.parse;exports.parseFmtpConfig=parser.parseFmtpConfig;exports.parsePayloads=parser.parsePayloads;exports.parseRemoteCandidates=parser.parseRemoteCandidates;},{"./parser":38,"./writer":39}],38:[function(require,module,exports){var toIntIfInt=function toIntIfInt(v){return String(Number(v))===v?Number(v):v;};var attachProperties=function attachProperties(match,location,names,rawName){if(rawName&&!names){location[rawName]=toIntIfInt(match[1]);}else{for(var i=0;i<names.length;i+=1){if(match[i+1]!=null){location[names[i]]=toIntIfInt(match[i+1]);}}}};var parseReg=function parseReg(obj,location,content){var needsBlank=obj.name&&obj.names;if(obj.push&&!location[obj.push]){location[obj.push]=[];}else if(needsBlank&&!location[obj.name]){location[obj.name]={};}var keyLocation=obj.push?{}:// blank object that will be pushed
needsBlank?location[obj.name]:location;// otherwise, named location or root
attachProperties(content.match(obj.reg),keyLocation,obj.names,obj.name);if(obj.push){location[obj.push].push(keyLocation);}};var grammar=require('./grammar');var validLine=RegExp.prototype.test.bind(/^([a-z])=(.*)/);exports.parse=function(sdp){var session={},media=[],location=session;// points at where properties go under (one of the above)
// parse lines we understand
sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function(l){var type=l[0];var content=l.slice(2);if(type==='m'){media.push({rtp:[],fmtp:[]});location=media[media.length-1];// point at latest media line
}for(var j=0;j<(grammar[type]||[]).length;j+=1){var obj=grammar[type][j];if(obj.reg.test(content)){return parseReg(obj,location,content);}}});session.media=media;// link it up
return session;};var fmtpReducer=function fmtpReducer(acc,expr){var s=expr.split(/=(.+)/,2);if(s.length===2){acc[s[0]]=toIntIfInt(s[1]);}return acc;};exports.parseFmtpConfig=function(str){return str.split(/\;\s?/).reduce(fmtpReducer,{});};exports.parsePayloads=function(str){return str.split(' ').map(Number);};exports.parseRemoteCandidates=function(str){var candidates=[];var parts=str.split(' ').map(toIntIfInt);for(var i=0;i<parts.length;i+=3){candidates.push({component:parts[i],ip:parts[i+1],port:parts[i+2]});}return candidates;};},{"./grammar":36}],39:[function(require,module,exports){var grammar=require('./grammar');// customized util.format - discards excess arguments and can void middle ones
var formatRegExp=/%[sdv%]/g;var format=function format(formatStr){var i=1;var args=arguments;var len=args.length;return formatStr.replace(formatRegExp,function(x){if(i>=len){return x;// missing argument
}var arg=args[i];i+=1;switch(x){case'%%':return'%';case'%s':return String(arg);case'%d':return Number(arg);case'%v':return'';}});// NB: we discard excess arguments - they are typically undefined from makeLine
};var makeLine=function makeLine(type,obj,location){var str=obj.format instanceof Function?obj.format(obj.push?location:location[obj.name]):obj.format;var args=[type+'='+str];if(obj.names){for(var i=0;i<obj.names.length;i+=1){var n=obj.names[i];if(obj.name){args.push(location[obj.name][n]);}else{// for mLine and push attributes
args.push(location[obj.names[i]]);}}}else{args.push(location[obj.name]);}return format.apply(null,args);};// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder=['v','o','s','i','u','e','p','c','b','t','r','z','a'];var defaultInnerOrder=['i','c','b','a'];module.exports=function(session,opts){opts=opts||{};// ensure certain properties exist
if(session.version==null){session.version=0;// "v=0" must be there (only defined version atm)
}if(session.name==null){session.name=" ";// "s= " must be there if no meaningful name set
}session.media.forEach(function(mLine){if(mLine.payloads==null){mLine.payloads="";}});var outerOrder=opts.outerOrder||defaultOuterOrder;var innerOrder=opts.innerOrder||defaultInnerOrder;var sdp=[];// loop through outerOrder for matching properties on session
outerOrder.forEach(function(type){grammar[type].forEach(function(obj){if(obj.name in session&&session[obj.name]!=null){sdp.push(makeLine(type,obj,session));}else if(obj.push in session&&session[obj.push]!=null){session[obj.push].forEach(function(el){sdp.push(makeLine(type,obj,el));});}});});// then for each media line, follow the innerOrder
session.media.forEach(function(mLine){sdp.push(makeLine('m',grammar.m[0],mLine));innerOrder.forEach(function(type){grammar[type].forEach(function(obj){if(obj.name in mLine&&mLine[obj.name]!=null){sdp.push(makeLine(type,obj,mLine));}else if(obj.push in mLine&&mLine[obj.push]!=null){mLine[obj.push].forEach(function(el){sdp.push(makeLine(type,obj,el));});}});});});return sdp.join('\r\n')+'\r\n';};},{"./grammar":36}],40:[function(require,module,exports){module.exports={"name":"jssip","title":"JsSIP","description":"the Javascript SIP library","version":"2.0.6","homepage":"http://jssip.net","author":"JosĂŠ Luis MillĂĄn <jmillan@aliax.net> (https://github.com/jmillan)","contributors":["IĂąaki Baz Castillo <ibc@aliax.net> (https://github.com/ibc)","SaĂşl Ibarra CorretgĂŠ <saghul@gmail.com> (https://github.com/saghul)"],"main":"lib/JsSIP.js","keywords":["sip","websocket","webrtc","node","browser","library"],"license":"MIT","repository":{"type":"git","url":"https://github.com/versatica/JsSIP.git"},"bugs":{"url":"https://github.com/versatica/JsSIP/issues"},"dependencies":{"debug":"^2.2.0","rtcninja":"^0.7.0","sdp-transform":"^1.6.2"},"devDependencies":{"browserify":"^13.1.0","gulp":"git+https://github.com/gulpjs/gulp.git#4.0","gulp-expect-file":"0.0.7","gulp-header":"1.8.8","gulp-jshint":"^2.0.1","gulp-nodeunit-runner":"^0.2.2","gulp-rename":"^1.2.2","gulp-uglify":"^2.0.0","gulp-util":"^3.0.7","jshint":"^2.9.3","jshint-stylish":"^2.2.1","pegjs":"0.7.0","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.1.0"},"scripts":{"test":"gulp test"}};},{}],41:[function(require,module,exports){(function(global){'use strict';// Expose the Adapter function/object.
module.exports=Adapter;// Dependencies
var browser=require('bowser'),debug=require('debug')('rtcninja:Adapter'),debugerror=require('debug')('rtcninja:ERROR:Adapter'),// Internal vars
getUserMedia=null,mediaDevices=null,RTCPeerConnection=null,RTCSessionDescription=null,RTCIceCandidate=null,MediaStreamTrack=null,getMediaDevices=null,attachMediaStream=null,canRenegotiate=false,oldSpecRTCOfferOptions=false,browserVersion=Number(browser.version)||0,isDesktop=!!(!browser.mobile&&(!browser.tablet||browser.msie&&browserVersion>=10)),hasWebRTC=false,// Dirty trick to get this library working in a Node-webkit env with browserified libs
virtGlobal=global.window||global,// Don't fail in Node
virtNavigator=virtGlobal.navigator||{};debugerror.log=console.warn.bind(console);// Constructor.
function Adapter(options){// Chrome desktop, Chrome Android, Opera desktop, Opera Android, Android native browser
// or generic Webkit browser.
if(isDesktop&&browser.chrome&&browserVersion>=32||browser.android&&browser.chrome&&browserVersion>=39||isDesktop&&browser.opera&&browserVersion>=27||browser.android&&browser.opera&&browserVersion>=24||browser.android&&browser.webkit&&!browser.chrome&&browserVersion>=37||virtNavigator.webkitGetUserMedia&&virtGlobal.webkitRTCPeerConnection){hasWebRTC=true;getUserMedia=virtNavigator.webkitGetUserMedia.bind(virtNavigator);mediaDevices=virtNavigator.mediaDevices;RTCPeerConnection=virtGlobal.webkitRTCPeerConnection;RTCSessionDescription=virtGlobal.RTCSessionDescription;RTCIceCandidate=virtGlobal.RTCIceCandidate;MediaStreamTrack=virtGlobal.MediaStreamTrack;if(MediaStreamTrack&&MediaStreamTrack.getSources){getMediaDevices=MediaStreamTrack.getSources.bind(MediaStreamTrack);}else if(virtNavigator.getMediaDevices){getMediaDevices=virtNavigator.getMediaDevices.bind(virtNavigator);}attachMediaStream=function attachMediaStream(element,stream){element.src=URL.createObjectURL(stream);return element;};canRenegotiate=true;oldSpecRTCOfferOptions=false;// Old Firefox desktop, old Firefox Android.
}else if(browser.firefox&&browserVersion<47||virtNavigator.mozGetUserMedia&&virtGlobal.mozRTCPeerConnection){hasWebRTC=true;getUserMedia=virtNavigator.mozGetUserMedia.bind(virtNavigator);mediaDevices=virtNavigator.mediaDevices;RTCPeerConnection=virtGlobal.mozRTCPeerConnection;RTCSessionDescription=virtGlobal.mozRTCSessionDescription;RTCIceCandidate=virtGlobal.mozRTCIceCandidate;MediaStreamTrack=virtGlobal.MediaStreamTrack;attachMediaStream=function attachMediaStream(element,stream){element.src=URL.createObjectURL(stream);return element;};canRenegotiate=false;oldSpecRTCOfferOptions=false;// Modern Firefox desktop, modern Firefox Android.
}else if((browser.firefox||browser.gecko)&&browserVersion>=47){hasWebRTC=true;getUserMedia=virtNavigator.mozGetUserMedia.bind(virtNavigator);mediaDevices=virtNavigator.mediaDevices;RTCPeerConnection=virtGlobal.RTCPeerConnection;RTCSessionDescription=virtGlobal.RTCSessionDescription;RTCIceCandidate=virtGlobal.RTCIceCandidate;MediaStreamTrack=virtGlobal.MediaStreamTrack;attachMediaStream=function attachMediaStream(element,stream){element.src=URL.createObjectURL(stream);return element;};canRenegotiate=false;oldSpecRTCOfferOptions=false;// WebRTC plugin required. For example IE or Safari with the Temasys plugin.
}else if(options.plugin&&typeof options.plugin.isRequired==='function'&&options.plugin.isRequired()&&typeof options.plugin.isInstalled==='function'&&options.plugin.isInstalled()){var pluginiface=options.plugin["interface"];hasWebRTC=true;getUserMedia=pluginiface.getUserMedia;mediaDevices=pluginiface.mediaDevices;RTCPeerConnection=pluginiface.RTCPeerConnection;RTCSessionDescription=pluginiface.RTCSessionDescription;RTCIceCandidate=pluginiface.RTCIceCandidate;MediaStreamTrack=pluginiface.MediaStreamTrack;if(MediaStreamTrack&&MediaStreamTrack.getSources){getMediaDevices=MediaStreamTrack.getSources.bind(MediaStreamTrack);}else if(virtNavigator.getMediaDevices){getMediaDevices=virtNavigator.getMediaDevices.bind(virtNavigator);}attachMediaStream=pluginiface.attachMediaStream;canRenegotiate=pluginiface.canRenegotiate;oldSpecRTCOfferOptions=true;// Best effort (may be adater.js is loaded).
}else if(virtNavigator.getUserMedia&&virtGlobal.RTCPeerConnection){hasWebRTC=true;getUserMedia=virtNavigator.getUserMedia.bind(virtNavigator);mediaDevices=virtNavigator.mediaDevices;RTCPeerConnection=virtGlobal.RTCPeerConnection;RTCSessionDescription=virtGlobal.RTCSessionDescription;RTCIceCandidate=virtGlobal.RTCIceCandidate;MediaStreamTrack=virtGlobal.MediaStreamTrack;if(MediaStreamTrack&&MediaStreamTrack.getSources){getMediaDevices=MediaStreamTrack.getSources.bind(MediaStreamTrack);}else if(virtNavigator.getMediaDevices){getMediaDevices=virtNavigator.getMediaDevices.bind(virtNavigator);}attachMediaStream=virtGlobal.attachMediaStream||function(element,stream){element.src=URL.createObjectURL(stream);return element;};canRenegotiate=true;oldSpecRTCOfferOptions=false;}function throwNonSupported(item){return function(){throw new Error('rtcninja: WebRTC not supported, missing '+item+' [browser: '+browser.name+' '+browser.version+']');};}// Public API.
// Expose a WebRTC checker.
Adapter.hasWebRTC=function(){return hasWebRTC;};// Expose getUserMedia.
if(getUserMedia){Adapter.getUserMedia=function(constraints,successCallback,errorCallback){debug('getUserMedia() | constraints: %o',constraints);try{getUserMedia(constraints,function(stream){debug('getUserMedia() | success');if(successCallback){successCallback(stream);}},function(error){debug('getUserMedia() | error:',error);if(errorCallback){errorCallback(error);}});}catch(error){debugerror('getUserMedia() | error:',error);if(errorCallback){errorCallback(error);}}};}else{Adapter.getUserMedia=function(constraints,successCallback,errorCallback){debugerror('getUserMedia() | WebRTC not supported');if(errorCallback){errorCallback(new Error('rtcninja: WebRTC not supported, missing '+'getUserMedia [browser: '+browser.name+' '+browser.version+']'));}else{throwNonSupported('getUserMedia');}};}// Expose mediaDevices.
Adapter.mediaDevices=mediaDevices;// Expose RTCPeerConnection.
Adapter.RTCPeerConnection=RTCPeerConnection||throwNonSupported('RTCPeerConnection');// Expose RTCSessionDescription.
Adapter.RTCSessionDescription=RTCSessionDescription||throwNonSupported('RTCSessionDescription');// Expose RTCIceCandidate.
Adapter.RTCIceCandidate=RTCIceCandidate||throwNonSupported('RTCIceCandidate');// Expose MediaStreamTrack.
Adapter.MediaStreamTrack=MediaStreamTrack||throwNonSupported('MediaStreamTrack');// Expose getMediaDevices.
Adapter.getMediaDevices=getMediaDevices;// Expose MediaStreamTrack.
Adapter.attachMediaStream=attachMediaStream||throwNonSupported('attachMediaStream');// Expose canRenegotiate attribute.
Adapter.canRenegotiate=canRenegotiate;// Expose closeMediaStream.
Adapter.closeMediaStream=function(stream){if(!stream){return;}// Latest spec states that MediaStream has no stop() method and instead must
// call stop() on every MediaStreamTrack.
try{debug('closeMediaStream() | calling stop() on all the MediaStreamTrack');var tracks,i,len;if(stream.getTracks){tracks=stream.getTracks();for(i=0,len=tracks.length;i<len;i+=1){tracks[i].stop();}}else{tracks=stream.getAudioTracks();for(i=0,len=tracks.length;i<len;i+=1){tracks[i].stop();}tracks=stream.getVideoTracks();for(i=0,len=tracks.length;i<len;i+=1){tracks[i].stop();}}}catch(error){// Deprecated by the spec, but still in use.
// NOTE: In Temasys IE plugin stream.stop is a callable 'object'.
if(typeof stream.stop==='function'||_typeof(stream.stop)==='object'){debug('closeMediaStream() | calling stop() on the MediaStream');stream.stop();}}};// Expose fixPeerConnectionConfig.
Adapter.fixPeerConnectionConfig=function(pcConfig){var i,len,iceServer,hasUrls,hasUrl;if(!Array.isArray(pcConfig.iceServers)){pcConfig.iceServers=[];}for(i=0,len=pcConfig.iceServers.length;i<len;i+=1){iceServer=pcConfig.iceServers[i];hasUrls=iceServer.hasOwnProperty('urls');hasUrl=iceServer.hasOwnProperty('url');if(_typeof(iceServer)==='object'){// Has .urls but not .url, so add .url with a single string value.
if(hasUrls&&!hasUrl){iceServer.url=Array.isArray(iceServer.urls)?iceServer.urls[0]:iceServer.urls;// Has .url but not .urls, so add .urls with same value.
}else if(!hasUrls&&hasUrl){iceServer.urls=Array.isArray(iceServer.url)?iceServer.url.slice():iceServer.url;}// Ensure .url is a single string.
if(hasUrl&&Array.isArray(iceServer.url)){iceServer.url=iceServer.url[0];}}}};// Expose fixRTCOfferOptions.
Adapter.fixRTCOfferOptions=function(options){options=options||{};// New spec.
if(!oldSpecRTCOfferOptions){if(options.mandatory&&options.mandatory.hasOwnProperty('OfferToReceiveAudio')){options.offerToReceiveAudio=options.mandatory.OfferToReceiveAudio?1:0;}if(options.mandatory&&options.mandatory.hasOwnProperty('OfferToReceiveVideo')){options.offerToReceiveVideo=options.mandatory.OfferToReceiveVideo?1:0;}delete options.mandatory;// Old spec.
}else{if(options.hasOwnProperty('offerToReceiveAudio')){options.mandatory=options.mandatory||{};options.mandatory.OfferToReceiveAudio=options.offerToReceiveAudio?true:false;}if(options.hasOwnProperty('offerToReceiveVideo')){options.mandatory=options.mandatory||{};options.mandatory.OfferToReceiveVideo=options.offerToReceiveVideo?true:false;}}};return Adapter;}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"bowser":45,"debug":46}],42:[function(require,module,exports){'use strict';// Expose the RTCPeerConnection class.
module.exports=RTCPeerConnection;// Dependencies.
var merge=require('merge'),debug=require('debug')('rtcninja:RTCPeerConnection'),debugerror=require('debug')('rtcninja:ERROR:RTCPeerConnection'),Adapter=require('./Adapter'),// Internal constants.
C={REGEXP_NORMALIZED_CANDIDATE:new RegExp(/^candidate:/i),REGEXP_FIX_CANDIDATE:new RegExp(/(^a=|\r|\n)/gi),REGEXP_RELAY_CANDIDATE:new RegExp(/ relay /i),REGEXP_SDP_CANDIDATES:new RegExp(/^a=candidate:.*\r\n/igm),REGEXP_SDP_NON_RELAY_CANDIDATES:new RegExp(/^a=candidate:(.(?!relay ))*\r\n/igm)},// Internal variables.
VAR={normalizeCandidate:null};debugerror.log=console.warn.bind(console);// Constructor
function RTCPeerConnection(pcConfig,pcConstraints){debug('new | [pcConfig:%o, pcConstraints:%o]',pcConfig,pcConstraints);// Set this.pcConfig and this.options.
setConfigurationAndOptions.call(this,pcConfig);// NOTE: Deprecated pcConstraints argument.
this.pcConstraints=pcConstraints;// Own version of the localDescription.
this.ourLocalDescription=null;// Latest values of PC attributes to avoid events with same value.
this.ourSignalingState=null;this.ourIceConnectionState=null;this.ourIceGatheringState=null;// Timer for options.gatheringTimeout.
this.timerGatheringTimeout=null;// Timer for options.gatheringTimeoutAfterRelay.
this.timerGatheringTimeoutAfterRelay=null;// Flag to ignore new gathered ICE candidates.
this.ignoreIceGathering=false;// Flag set when closed.
this.closed=false;// Set RTCPeerConnection.
setPeerConnection.call(this);// Set properties.
setProperties.call(this);}// Public API.
RTCPeerConnection.prototype.createOffer=function(successCallback,failureCallback,options){debug('createOffer()');var self=this;Adapter.fixRTCOfferOptions(options);this.pc.createOffer(function(offer){/**
                         * @author Li WenKai
                         * Change By 2019/2/26. Support VP8/VP9/H264.
                         */offer.sdp=window.cube._setCodec(offer.sdp);if(isClosed.call(self)){return;}debug('createOffer() | success');if(successCallback){successCallback(offer);}},function(error){if(isClosed.call(self)){return;}debugerror('createOffer() | error:',error);if(failureCallback){failureCallback(error);}},options);};RTCPeerConnection.prototype.createAnswer=function(successCallback,failureCallback,options){debug('createAnswer()');var self=this;this.pc.createAnswer(function(answer){/**
                         * @author Li WenKai
                         * Change By 2019/2/26. Support VP8/VP9/H264.
                         */answer.sdp=window.cube._setCodec(answer.sdp);if(isClosed.call(self)){return;}debug('createAnswer() | success');if(successCallback){successCallback(answer);}},function(error){if(isClosed.call(self)){return;}debugerror('createAnswer() | error:',error);if(failureCallback){failureCallback(error);}},options);};RTCPeerConnection.prototype.setLocalDescription=function(description,successCallback,failureCallback){debug('setLocalDescription()');var self=this;this.pc.setLocalDescription(description,// success.
function(){if(isClosed.call(self)){return;}debug('setLocalDescription() | success');// Clear gathering timers.
clearTimeout(self.timerGatheringTimeout);delete self.timerGatheringTimeout;clearTimeout(self.timerGatheringTimeoutAfterRelay);delete self.timerGatheringTimeoutAfterRelay;runTimerGatheringTimeout();if(successCallback){successCallback();}},// failure
function(error){if(isClosed.call(self)){return;}debugerror('setLocalDescription() | error:',error);if(failureCallback){failureCallback(error);}});// Enable (again) ICE gathering.
this.ignoreIceGathering=false;// Handle gatheringTimeout.
function runTimerGatheringTimeout(){if(typeof self.options.gatheringTimeout!=='number'){return;}// If setLocalDescription was already called, it may happen that
// ICE gathering is not needed, so don't run this timer.
if(self.pc.iceGatheringState==='complete'){return;}debug('setLocalDescription() | ending gathering in %d ms (gatheringTimeout option)',self.options.gatheringTimeout);self.timerGatheringTimeout=setTimeout(function(){if(isClosed.call(self)){return;}debug('forced end of candidates after gatheringTimeout timeout');// Clear gathering timers.
delete self.timerGatheringTimeout;clearTimeout(self.timerGatheringTimeoutAfterRelay);delete self.timerGatheringTimeoutAfterRelay;// Ignore new candidates.
self.ignoreIceGathering=true;if(self.onicecandidate){self.onicecandidate({candidate:null},null);}},self.options.gatheringTimeout);}};RTCPeerConnection.prototype.setRemoteDescription=function(description,successCallback,failureCallback){debug('setRemoteDescription()');var self=this;/**
                 * @author Li WenKai
                 * Change By 2019/8/6. Support VP8/VP9/H264.
                 */description.sdp=window.cube._setCodec(description.sdp);console.log(description.sdp,'===============1');this.pc.setRemoteDescription(description,function(){if(isClosed.call(self)){return;}debug('setRemoteDescription() | success');if(successCallback){successCallback();}},function(error){if(isClosed.call(self)){return;}debugerror('setRemoteDescription() | error:',error);if(failureCallback){failureCallback(error);}});};RTCPeerConnection.prototype.updateIce=function(pcConfig){debug('updateIce() | pcConfig: %o',pcConfig);// Update this.pcConfig and this.options.
setConfigurationAndOptions.call(this,pcConfig);this.pc.updateIce(this.pcConfig);// Enable (again) ICE gathering.
this.ignoreIceGathering=false;};RTCPeerConnection.prototype.addIceCandidate=function(candidate,successCallback,failureCallback){debug('addIceCandidate() | candidate: %o',candidate);var self=this;this.pc.addIceCandidate(candidate,function(){if(isClosed.call(self)){return;}debug('addIceCandidate() | success');if(successCallback){successCallback();}},function(error){if(isClosed.call(self)){return;}debugerror('addIceCandidate() | error:',error);if(failureCallback){failureCallback(error);}});};RTCPeerConnection.prototype.getConfiguration=function(){debug('getConfiguration()');return this.pc.getConfiguration();};RTCPeerConnection.prototype.getLocalStreams=function(){debug('getLocalStreams()');return this.pc.getLocalStreams();};RTCPeerConnection.prototype.getRemoteStreams=function(){debug('getRemoteStreams()');return this.pc.getRemoteStreams();};RTCPeerConnection.prototype.getStreamById=function(streamId){debug('getStreamById() | streamId: %s',streamId);return this.pc.getStreamById(streamId);};RTCPeerConnection.prototype.addStream=function(stream){debug('addStream() | stream: %s',stream);this.pc.addStream(stream);};RTCPeerConnection.prototype.removeStream=function(stream){debug('removeStream() | stream: %o',stream);this.pc.removeStream(stream);};RTCPeerConnection.prototype.close=function(){debug('close()');this.closed=true;// Clear gathering timers.
clearTimeout(this.timerGatheringTimeout);delete this.timerGatheringTimeout;clearTimeout(this.timerGatheringTimeoutAfterRelay);delete this.timerGatheringTimeoutAfterRelay;this.pc.close();};RTCPeerConnection.prototype.createDataChannel=function(){debug('createDataChannel()');return this.pc.createDataChannel.apply(this.pc,arguments);};RTCPeerConnection.prototype.createDTMFSender=function(track){debug('createDTMFSender()');if(this.pc.createDTMFSender){return this.pc.createDTMFSender(track);}else{return null;}};RTCPeerConnection.prototype.getStats=function(){debug('getStats()');return this.pc.getStats.apply(this.pc,arguments);};RTCPeerConnection.prototype.setIdentityProvider=function(){debug('setIdentityProvider()');return this.pc.setIdentityProvider.apply(this.pc,arguments);};RTCPeerConnection.prototype.getIdentityAssertion=function(){debug('getIdentityAssertion()');return this.pc.getIdentityAssertion();};RTCPeerConnection.prototype.reset=function(pcConfig){debug('reset() | pcConfig: %o',pcConfig);var pc=this.pc;// Remove events in the old PC.
pc.onnegotiationneeded=null;pc.onicecandidate=null;pc.onaddstream=null;pc.onremovestream=null;pc.ondatachannel=null;pc.onsignalingstatechange=null;pc.oniceconnectionstatechange=null;pc.onicegatheringstatechange=null;pc.onidentityresult=null;pc.onpeeridentity=null;pc.onidpassertionerror=null;pc.onidpvalidationerror=null;// Clear gathering timers.
clearTimeout(this.timerGatheringTimeout);delete this.timerGatheringTimeout;clearTimeout(this.timerGatheringTimeoutAfterRelay);delete this.timerGatheringTimeoutAfterRelay;// Silently close the old PC.
debug('reset() | closing current peerConnection');pc.close();// Set this.pcConfig and this.options.
setConfigurationAndOptions.call(this,pcConfig);// Create a new PC.
setPeerConnection.call(this);};// Private Helpers.
function setConfigurationAndOptions(pcConfig){// Clone pcConfig.
this.pcConfig=merge(true,pcConfig);// Fix pcConfig.
Adapter.fixPeerConnectionConfig(this.pcConfig);this.options={iceTransportsRelay:this.pcConfig.iceTransports==='relay',iceTransportsNone:this.pcConfig.iceTransports==='none',gatheringTimeout:this.pcConfig.gatheringTimeout,gatheringTimeoutAfterRelay:this.pcConfig.gatheringTimeoutAfterRelay};// Remove custom rtcninja.RTCPeerConnection options from pcConfig.
delete this.pcConfig.gatheringTimeout;delete this.pcConfig.gatheringTimeoutAfterRelay;debug('setConfigurationAndOptions | processed pcConfig: %o',this.pcConfig);}function isClosed(){return this.closed||this.pc&&this.pc.iceConnectionState==='closed';}function setEvents(){var self=this,pc=this.pc;pc.onnegotiationneeded=function(event){if(isClosed.call(self)){return;}debug('onnegotiationneeded()');if(self.onnegotiationneeded){self.onnegotiationneeded(event);}};pc.onicecandidate=function(event){var candidate,isRelay,newCandidate;if(isClosed.call(self)){return;}if(self.ignoreIceGathering){return;}// Ignore any candidate (event the null one) if iceTransports:'none' is set.
if(self.options.iceTransportsNone){return;}candidate=event.candidate;if(candidate){isRelay=C.REGEXP_RELAY_CANDIDATE.test(candidate.candidate);// Ignore if just relay candidates are requested.
if(self.options.iceTransportsRelay&&!isRelay){return;}// Handle gatheringTimeoutAfterRelay.
if(isRelay&&!self.timerGatheringTimeoutAfterRelay&&typeof self.options.gatheringTimeoutAfterRelay==='number'){debug('onicecandidate() | first relay candidate found, ending gathering in %d ms',self.options.gatheringTimeoutAfterRelay);self.timerGatheringTimeoutAfterRelay=setTimeout(function(){if(isClosed.call(self)){return;}debug('forced end of candidates after timeout');// Clear gathering timers.
delete self.timerGatheringTimeoutAfterRelay;clearTimeout(self.timerGatheringTimeout);delete self.timerGatheringTimeout;// Ignore new candidates.
self.ignoreIceGathering=true;if(self.onicecandidate){self.onicecandidate({candidate:null},null);}},self.options.gatheringTimeoutAfterRelay);}newCandidate=new Adapter.RTCIceCandidate({sdpMid:candidate.sdpMid,sdpMLineIndex:candidate.sdpMLineIndex,candidate:candidate.candidate});// Force correct candidate syntax (just check it once).
if(VAR.normalizeCandidate===null){if(C.REGEXP_NORMALIZED_CANDIDATE.test(candidate.candidate)){VAR.normalizeCandidate=false;}else{debug('onicecandidate() | normalizing ICE candidates syntax (remove "a=" and "\\r\\n")');VAR.normalizeCandidate=true;}}if(VAR.normalizeCandidate){newCandidate.candidate=candidate.candidate.replace(C.REGEXP_FIX_CANDIDATE,'');}debug('onicecandidate() | m%d(%s) %s',newCandidate.sdpMLineIndex,newCandidate.sdpMid||'no mid',newCandidate.candidate);if(self.onicecandidate){self.onicecandidate(event,newCandidate);}// Null candidate (end of candidates).
}else{debug('onicecandidate() | end of candidates');// Clear gathering timers.
clearTimeout(self.timerGatheringTimeout);delete self.timerGatheringTimeout;clearTimeout(self.timerGatheringTimeoutAfterRelay);delete self.timerGatheringTimeoutAfterRelay;if(self.onicecandidate){self.onicecandidate(event,null);}}};pc.onaddstream=function(event){if(isClosed.call(self)){return;}debug('onaddstream() | stream: %o',event.stream);if(self.onaddstream){self.onaddstream(event,event.stream);}};pc.onremovestream=function(event){if(isClosed.call(self)){return;}debug('onremovestream() | stream: %o',event.stream);if(self.onremovestream){self.onremovestream(event,event.stream);}};pc.ondatachannel=function(event){if(isClosed.call(self)){return;}debug('ondatachannel() | datachannel: %o',event.channel);if(self.ondatachannel){self.ondatachannel(event,event.channel);}};pc.onsignalingstatechange=function(event){if(pc.signalingState===self.ourSignalingState){return;}debug('onsignalingstatechange() | signalingState: %s',pc.signalingState);self.ourSignalingState=pc.signalingState;if(self.onsignalingstatechange){self.onsignalingstatechange(event,pc.signalingState);}};pc.oniceconnectionstatechange=function(event){if(pc.iceConnectionState===self.ourIceConnectionState){return;}debug('oniceconnectionstatechange() | iceConnectionState: %s',pc.iceConnectionState);self.ourIceConnectionState=pc.iceConnectionState;if(self.oniceconnectionstatechange){self.oniceconnectionstatechange(event,pc.iceConnectionState);}};pc.onicegatheringstatechange=function(event){if(isClosed.call(self)){return;}if(pc.iceGatheringState===self.ourIceGatheringState){return;}debug('onicegatheringstatechange() | iceGatheringState: %s',pc.iceGatheringState);self.ourIceGatheringState=pc.iceGatheringState;if(self.onicegatheringstatechange){self.onicegatheringstatechange(event,pc.iceGatheringState);}};pc.onidentityresult=function(event){if(isClosed.call(self)){return;}debug('onidentityresult()');if(self.onidentityresult){self.onidentityresult(event);}};pc.onpeeridentity=function(event){if(isClosed.call(self)){return;}debug('onpeeridentity()');if(self.onpeeridentity){self.onpeeridentity(event);}};pc.onidpassertionerror=function(event){if(isClosed.call(self)){return;}debug('onidpassertionerror()');if(self.onidpassertionerror){self.onidpassertionerror(event);}};pc.onidpvalidationerror=function(event){if(isClosed.call(self)){return;}debug('onidpvalidationerror()');if(self.onidpvalidationerror){self.onidpvalidationerror(event);}};}function setPeerConnection(){// Create a RTCPeerConnection.
if(!this.pcConstraints){this.pc=new Adapter.RTCPeerConnection(this.pcConfig);}else{// NOTE: Deprecated.
this.pc=new Adapter.RTCPeerConnection(this.pcConfig,this.pcConstraints);}// Set RTC events.
setEvents.call(this);}function getLocalDescription(){var pc=this.pc,options=this.options,sdp=null;if(!pc.localDescription){this.ourLocalDescription=null;return null;}// Mangle the SDP string.
if(options.iceTransportsRelay){sdp=pc.localDescription.sdp.replace(C.REGEXP_SDP_NON_RELAY_CANDIDATES,'');}else if(options.iceTransportsNone){sdp=pc.localDescription.sdp.replace(C.REGEXP_SDP_CANDIDATES,'');}this.ourLocalDescription=new Adapter.RTCSessionDescription({type:pc.localDescription.type,sdp:sdp||pc.localDescription.sdp});return this.ourLocalDescription;}function setProperties(){var self=this;Object.defineProperties(this,{peerConnection:{get:function get(){return self.pc;}},signalingState:{get:function get(){return self.pc.signalingState;}},iceConnectionState:{get:function get(){return self.pc.iceConnectionState;}},iceGatheringState:{get:function get(){return self.pc.iceGatheringState;}},localDescription:{get:function get(){return getLocalDescription.call(self);}},remoteDescription:{get:function get(){return self.pc.remoteDescription;}},peerIdentity:{get:function get(){return self.pc.peerIdentity;}}});}},{"./Adapter":41,"debug":46,"merge":49}],43:[function(require,module,exports){'use strict';module.exports=rtcninja;// Dependencies.
var browser=require('bowser'),debug=require('debug')('rtcninja'),debugerror=require('debug')('rtcninja:ERROR'),version=require('./version'),Adapter=require('./Adapter'),RTCPeerConnection=require('./RTCPeerConnection'),// Internal vars.
called=false;debugerror.log=console.warn.bind(console);debug('version %s',version);debug('detected browser: %s %s [mobile:%s, tablet:%s, android:%s, ios:%s]',browser.name,browser.version,!!browser.mobile,!!browser.tablet,!!browser.android,!!browser.ios);// Constructor.
function rtcninja(options){// Load adapter
var iface=Adapter(options||{});// jshint ignore:line
called=true;// Expose RTCPeerConnection class.
rtcninja.RTCPeerConnection=RTCPeerConnection;// Expose WebRTC API and utils.
rtcninja.getUserMedia=iface.getUserMedia;rtcninja.mediaDevices=iface.mediaDevices;rtcninja.RTCSessionDescription=iface.RTCSessionDescription;rtcninja.RTCIceCandidate=iface.RTCIceCandidate;rtcninja.MediaStreamTrack=iface.MediaStreamTrack;rtcninja.getMediaDevices=iface.getMediaDevices;rtcninja.attachMediaStream=iface.attachMediaStream;rtcninja.closeMediaStream=iface.closeMediaStream;rtcninja.canRenegotiate=iface.canRenegotiate;// Log WebRTC support.
if(iface.hasWebRTC()){debug('WebRTC supported');return true;}else{debugerror('WebRTC not supported');return false;}}// Public API.
// If called without calling rtcninja(), call it.
rtcninja.hasWebRTC=function(){if(!called){rtcninja();}return Adapter.hasWebRTC();};// Expose version property.
Object.defineProperty(rtcninja,'version',{get:function get(){return version;}});// Expose called property.
Object.defineProperty(rtcninja,'called',{get:function get(){return called;}});// Exposing stuff.
rtcninja.debug=require('debug');rtcninja.browser=browser;},{"./Adapter":41,"./RTCPeerConnection":42,"./version":44,"bowser":45,"debug":46}],44:[function(require,module,exports){'use strict';// Expose the 'version' field of package.json.
module.exports=require('../package.json').version;},{"../package.json":50}],45:[function(require,module,exports){/*!
     * Bowser - a browser detector
     * https://github.com/ded/bowser
     * MIT License | (c) Dustin Diaz 2015
     */!function(name,definition){if(typeof module!='undefined'&&module.exports)module.exports=definition();else if(typeof define=='function'&&define.amd)define(name,definition);else this[name]=definition();}('bowser',function(){/**
                 * See useragents.js for examples of navigator.userAgent
                 */var t=true;function detect(ua){function getFirstMatch(regex){var match=ua.match(regex);return match&&match.length>1&&match[1]||'';}function getSecondMatch(regex){var match=ua.match(regex);return match&&match.length>1&&match[2]||'';}var iosdevice=getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),likeAndroid=/like android/i.test(ua),android=!likeAndroid&&/android/i.test(ua),nexusMobile=/nexus\s*[0-6]\s*/i.test(ua),nexusTablet=!nexusMobile&&/nexus\s*[0-9]+/i.test(ua),chromeos=/CrOS/.test(ua),silk=/silk/i.test(ua),sailfish=/sailfish/i.test(ua),tizen=/tizen/i.test(ua),webos=/(web|hpw)os/i.test(ua),windowsphone=/windows phone/i.test(ua),samsungBrowser=/SamsungBrowser/i.test(ua),windows=!windowsphone&&/windows/i.test(ua),mac=!iosdevice&&!silk&&/macintosh/i.test(ua),linux=!android&&!sailfish&&!tizen&&!webos&&/linux/i.test(ua),edgeVersion=getFirstMatch(/edge\/(\d+(\.\d+)?)/i),versionIdentifier=getFirstMatch(/version\/(\d+(\.\d+)?)/i),tablet=/tablet/i.test(ua),mobile=!tablet&&/[^-]mobi/i.test(ua),xbox=/xbox/i.test(ua),result;if(/opera/i.test(ua)){//  an old Opera
result={name:'Opera',opera:t,version:versionIdentifier||getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)};}else if(/opr|opios/i.test(ua)){// a new Opera
result={name:'Opera',opera:t,version:getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||versionIdentifier};}else if(/SamsungBrowser/i.test(ua)){result={name:'Samsung Internet for Android',samsungBrowser:t,version:versionIdentifier||getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)};}else if(/coast/i.test(ua)){result={name:'Opera Coast',coast:t,version:versionIdentifier||getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)};}else if(/yabrowser/i.test(ua)){result={name:'Yandex Browser',yandexbrowser:t,version:versionIdentifier||getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)};}else if(/ucbrowser/i.test(ua)){result={name:'UC Browser',ucbrowser:t,version:getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/mxios/i.test(ua)){result={name:'Maxthon',maxthon:t,version:getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/epiphany/i.test(ua)){result={name:'Epiphany',epiphany:t,version:getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/puffin/i.test(ua)){result={name:'Puffin',puffin:t,version:getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)};}else if(/sleipnir/i.test(ua)){result={name:'Sleipnir',sleipnir:t,version:getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/k-meleon/i.test(ua)){result={name:'K-Meleon',kMeleon:t,version:getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)};}else if(windowsphone){result={name:'Windows Phone',windowsphone:t};if(edgeVersion){result.msedge=t;result.version=edgeVersion;}else{result.msie=t;result.version=getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);}}else if(/msie|trident/i.test(ua)){result={name:'Internet Explorer',msie:t,version:getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)};}else if(chromeos){result={name:'Chrome',chromeos:t,chromeBook:t,chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)};}else if(/chrome.+? edge/i.test(ua)){result={name:'Microsoft Edge',msedge:t,version:edgeVersion};}else if(/vivaldi/i.test(ua)){result={name:'Vivaldi',vivaldi:t,version:getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i)||versionIdentifier};}else if(sailfish){result={name:'Sailfish',sailfish:t,version:getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)};}else if(/seamonkey\//i.test(ua)){result={name:'SeaMonkey',seamonkey:t,version:getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)};}else if(/firefox|iceweasel|fxios/i.test(ua)){result={name:'Firefox',firefox:t,version:getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)};if(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)){result.firefoxos=t;}}else if(silk){result={name:'Amazon Silk',silk:t,version:getFirstMatch(/silk\/(\d+(\.\d+)?)/i)};}else if(/phantom/i.test(ua)){result={name:'PhantomJS',phantom:t,version:getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)};}else if(/slimerjs/i.test(ua)){result={name:'SlimerJS',slimer:t,version:getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)};}else if(/blackberry|\bbb\d+/i.test(ua)||/rim\stablet/i.test(ua)){result={name:'BlackBerry',blackberry:t,version:versionIdentifier||getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)};}else if(webos){result={name:'WebOS',webos:t,version:versionIdentifier||getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};/touchpad\//i.test(ua)&&(result.touchpad=t);}else if(/bada/i.test(ua)){result={name:'Bada',bada:t,version:getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)};}else if(tizen){result={name:'Tizen',tizen:t,version:getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||versionIdentifier};}else if(/qupzilla/i.test(ua)){result={name:'QupZilla',qupzilla:t,version:getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||versionIdentifier};}else if(/chromium/i.test(ua)){result={name:'Chromium',chromium:t,version:getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||versionIdentifier};}else if(/chrome|crios|crmo/i.test(ua)){result={name:'Chrome',chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)};}else if(android){result={name:'Android',version:versionIdentifier};}else if(/safari|applewebkit/i.test(ua)){result={name:'Safari',safari:t};if(versionIdentifier){result.version=versionIdentifier;}}else if(iosdevice){result={name:iosdevice=='iphone'?'iPhone':iosdevice=='ipad'?'iPad':'iPod'};// WTF: version is not part of user agent in web apps
if(versionIdentifier){result.version=versionIdentifier;}}else if(/googlebot/i.test(ua)){result={name:'Googlebot',googlebot:t,version:getFirstMatch(/googlebot\/(\d+(\.\d+))/i)||versionIdentifier};}else{result={name:getFirstMatch(/^(.*)\/(.*) /),version:getSecondMatch(/^(.*)\/(.*) /)};}// set webkit or gecko flag for browsers based on these engines
if(!result.msedge&&/(apple)?webkit/i.test(ua)){if(/(apple)?webkit\/537\.36/i.test(ua)){result.name=result.name||"Blink";result.blink=t;}else{result.name=result.name||"Webkit";result.webkit=t;}if(!result.version&&versionIdentifier){result.version=versionIdentifier;}}else if(!result.opera&&/gecko\//i.test(ua)){result.name=result.name||"Gecko";result.gecko=t;result.version=result.version||getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);}// set OS flags for platforms that have multiple browsers
if(!result.msedge&&(android||result.silk)){result.android=t;}else if(iosdevice){result[iosdevice]=t;result.ios=t;}else if(mac){result.mac=t;}else if(xbox){result.xbox=t;}else if(windows){result.windows=t;}else if(linux){result.linux=t;}// OS version extraction
var osVersion='';if(result.windowsphone){osVersion=getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);}else if(iosdevice){osVersion=getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);osVersion=osVersion.replace(/[_\s]/g,'.');}else if(android){osVersion=getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);}else if(result.webos){osVersion=getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);}else if(result.blackberry){osVersion=getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);}else if(result.bada){osVersion=getFirstMatch(/bada\/(\d+(\.\d+)*)/i);}else if(result.tizen){osVersion=getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);}if(osVersion){result.osversion=osVersion;}// device type extraction
var osMajorVersion=osVersion.split('.')[0];if(tablet||nexusTablet||iosdevice=='ipad'||android&&(osMajorVersion==3||osMajorVersion>=4&&!mobile)||result.silk){result.tablet=t;}else if(mobile||iosdevice=='iphone'||iosdevice=='ipod'||android||nexusMobile||result.blackberry||result.webos||result.bada){result.mobile=t;}// Graded Browser Support
// http://developer.yahoo.com/yui/articles/gbs
if(result.msedge||result.msie&&result.version>=10||result.yandexbrowser&&result.version>=15||result.vivaldi&&result.version>=1.0||result.chrome&&result.version>=20||result.samsungBrowser&&result.version>=4||result.firefox&&result.version>=20.0||result.safari&&result.version>=6||result.opera&&result.version>=10.0||result.ios&&result.osversion&&result.osversion.split(".")[0]>=6||result.blackberry&&result.version>=10.1||result.chromium&&result.version>=20){result.a=t;}else if(result.msie&&result.version<10||result.chrome&&result.version<20||result.firefox&&result.version<20.0||result.safari&&result.version<6||result.opera&&result.version<10.0||result.ios&&result.osversion&&result.osversion.split(".")[0]<6||result.chromium&&result.version<20){result.c=t;}else result.x=t;return result;}var bowser=detect(typeof navigator!=='undefined'?navigator.userAgent||'':'');bowser.test=function(browserList){for(var i=0;i<browserList.length;++i){var browserItem=browserList[i];if(typeof browserItem==='string'){if(browserItem in bowser){return true;}}}return false;};/**
                 * Get version precisions count
                 *
                 * @example
                 *   getVersionPrecision("1.10.3") // 3
                 *
                 * @param  {string} version
                 * @return {number}
                 */function getVersionPrecision(version){return version.split(".").length;}/**
                 * Array::map polyfill
                 *
                 * @param  {Array} arr
                 * @param  {Function} iterator
                 * @return {Array}
                 */function map(arr,iterator){var result=[],i;if(Array.prototype.map){return Array.prototype.map.call(arr,iterator);}for(i=0;i<arr.length;i++){result.push(iterator(arr[i]));}return result;}/**
                 * Calculate browser version weight
                 *
                 * @example
                 *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
                 *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
                 *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
                 *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
                 *
                 * @param  {Array<String>} versions versions to compare
                 * @return {Number} comparison result
                 */function compareVersions(versions){// 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
var precision=Math.max(getVersionPrecision(versions[0]),getVersionPrecision(versions[1]));var chunks=map(versions,function(version){var delta=precision-getVersionPrecision(version);// 2) "9" -> "9.0" (for precision = 2)
version=version+new Array(delta+1).join(".0");// 3) "9.0" -> ["000000000"", "000000009"]
return map(version.split("."),function(chunk){return new Array(20-chunk.length).join("0")+chunk;}).reverse();});// iterate in reverse order by reversed chunks array
while(--precision>=0){// 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
if(chunks[0][precision]>chunks[1][precision]){return 1;}else if(chunks[0][precision]===chunks[1][precision]){if(precision===0){// all version chunks are same
return 0;}}else{return-1;}}}/**
                 * Check if browser is unsupported
                 *
                 * @example
                 *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
                 *
                 * @param  {Object}  minVersions map of minimal version to browser
                 * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
                 * @param  {String}  [ua] user agent string
                 * @return {Boolean}
                 */function isUnsupportedBrowser(minVersions,strictMode,ua){var _bowser=bowser;// make strictMode param optional with ua param usage
if(typeof strictMode==='string'){ua=strictMode;strictMode=void 0;}if(strictMode===void 0){strictMode=false;}if(ua){_bowser=detect(ua);}var version=""+_bowser.version;for(var browser in minVersions){if(minVersions.hasOwnProperty(browser)){if(_bowser[browser]){// browser version and min supported version.
return compareVersions([version,minVersions[browser]])<0;}}}return strictMode;// not found
}/**
                 * Check if browser is supported
                 *
                 * @param  {Object} minVersions map of minimal version to browser
                 * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
                 * @param  {String}  [ua] user agent string
                 * @return {Boolean}
                 */function check(minVersions,strictMode,ua){return!isUnsupportedBrowser(minVersions,strictMode,ua);}bowser.isUnsupportedBrowser=isUnsupportedBrowser;bowser.compareVersions=compareVersions;bowser.check=check;/*
         * Set our detect method to the main bowser object so we can
         * reuse it to test other user agents.
         * This is needed to implement future tests.
         */bowser._detect=detect;return bowser;});},{}],46:[function(require,module,exports){arguments[4][33][0].apply(exports,arguments);},{"./debug":47,"dup":33}],47:[function(require,module,exports){arguments[4][34][0].apply(exports,arguments);},{"dup":34,"ms":48}],48:[function(require,module,exports){arguments[4][35][0].apply(exports,arguments);},{"dup":35}],49:[function(require,module,exports){/*!
     * @name JavaScript/NodeJS Merge v1.2.0
     * @author yeikos
     * @repository https://github.com/yeikos/js.merge

     * Copyright 2014 yeikos - MIT license
     * https://raw.github.com/yeikos/js.merge/master/LICENSE
     */;(function(isNode){/**
                 * Merge one or more objects
                 * @param bool? clone
                 * @param mixed,... arguments
                 * @return object
                 */var Public=function Public(clone){return merge(clone===true,false,arguments);},publicName='merge';/**
                 * Merge two or more objects recursively
                 * @param bool? clone
                 * @param mixed,... arguments
                 * @return object
                 */Public.recursive=function(clone){return merge(clone===true,true,arguments);};/**
                 * Clone the input removing any reference
                 * @param mixed input
                 * @return mixed
                 */Public.clone=function(input){var output=input,type=typeOf(input),index,size;if(type==='array'){output=[];size=input.length;for(index=0;index<size;++index){output[index]=Public.clone(input[index]);}}else if(type==='object'){output={};for(index in input){output[index]=Public.clone(input[index]);}}return output;};/**
                 * Merge two objects recursively
                 * @param mixed input
                 * @param mixed extend
                 * @return mixed
                 */function merge_recursive(base,extend){if(typeOf(base)!=='object')return extend;for(var key in extend){if(typeOf(base[key])==='object'&&typeOf(extend[key])==='object'){base[key]=merge_recursive(base[key],extend[key]);}else{base[key]=extend[key];}}return base;}/**
                 * Merge two or more objects
                 * @param bool clone
                 * @param bool recursive
                 * @param array argv
                 * @return object
                 */function merge(clone,recursive,argv){var result=argv[0],size=argv.length;if(clone||typeOf(result)!=='object')result={};for(var index=0;index<size;++index){var item=argv[index],type=typeOf(item);if(type!=='object')continue;for(var key in item){var sitem=clone?Public.clone(item[key]):item[key];if(recursive){result[key]=merge_recursive(result[key],sitem);}else{result[key]=sitem;}}}return result;}/**
                 * Get type of variable
                 * @param mixed input
                 * @return string
                 *
                 * @see http://jsperf.com/typeofvar
                 */function typeOf(input){return{}.toString.call(input).slice(8,-1).toLowerCase();}if(isNode){module.exports=Public;}else{window[publicName]=Public;}})(_typeof(module)==='object'&&module&&_typeof(module.exports)==='object'&&module.exports);},{}],50:[function(require,module,exports){module.exports={"name":"rtcninja","version":"0.7.0","description":"WebRTC API wrapper to deal with different browsers","author":"IĂąaki Baz Castillo <inaki.baz@eface2face.com> (http://eface2face.com)","contributors":["JesĂşs PĂŠrez <jesus.perez@eface2face.com>"],"license":"MIT","main":"lib/rtcninja.js","homepage":"https://github.com/eface2face/rtcninja.js","repository":{"type":"git","url":"https://github.com/eface2face/rtcninja.js.git"},"keywords":["webrtc"],"engines":{"node":">=0.12.0"},"dependencies":{"bowser":"^1.4.6","debug":"^2.2.0","merge":"^1.2.0"},"devDependencies":{"browserify":"^13.1.0","gulp":"git+https://github.com/gulpjs/gulp.git#4.0","gulp-expect-file":"0.0.7","gulp-filelog":"^0.4.1","gulp-header":"^1.8.8","gulp-jscs":"^3.0.2","gulp-jscs-stylish":"^1.4.0","gulp-jshint":"^2.0.1","gulp-rename":"^1.2.2","gulp-uglify":"^1.5.4","jshint":"^2.9.3","jshint-stylish":"^2.2.1","vinyl-source-stream":"^1.1.0"}};},{}]},{},[7])(7);});});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var fill = __webpack_require__(114);
var addToUnscopables = __webpack_require__(7);

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var $reduce = __webpack_require__(169).left;
var sloppyArrayMethod = __webpack_require__(102);

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var createHTML = __webpack_require__(369);
var forcedStringHTMLMethod = __webpack_require__(370);

// `String.prototype.blink` method
// https://tc39.github.io/ecma262/#sec-string.prototype.blink
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('blink') }, {
  blink: function blink() {
    return createHTML(this, 'blink', '', '');
  }
});


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(6);

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(4);

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),
/* 371 */
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
  _exports.ConferenceListener = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  /**
   * @typedef {Object} CubeConferenceMemberStatus
   * @property {boolean} joined - 是否已经加入会议。
   * @property {boolean} videoEnabled - 是否使用视频参会。
   * @property {boolean} hasFloor - 是否是当前发言人/主讲人。
   * @property {boolean} canSpeak - 是否可在会议中发言。
   * @property {boolean} canHear - 是否可在会议中听到他人发言。
   * @property {boolean} canWatch - 是否可以在会议中被他人看到。
   * @property {boolean} kicked - 是否被踢出会议。
   * @property {Number} joinTime - 本次加入会议的时间戳。
   * @property {Number} quitTime - 本次退出会议的时间戳。
   */

  /**
   * @typedef {Object} CubeConference
   * @property {String} group - 会议所属群组的 Cube 号。
   * @property {String} id - 会议的 ID 。
   * @property {String} founder - 会议创建人。
   * @property {Array.<String>} presenters - 会议主持人列表。
   * @property {Number} created - 会议的创建时间戳。
   * @property {Number} expired - 会议的有效时长，单位：秒。
   * @property {Number} closed - 会议的关闭时间戳。
   * @property {boolean} hasGuest - 会议成员里是否有访客。
   * @property {Object.<String, CubeConferenceMemberStatus>} status - 所有会议成员的状态映射。
   */

  /**
   * 会议监听器接口。
   *
   * @interface ConferenceListener
   * @author Xu Jiangwei, Guan Yong
   */
  var ConferenceListener =
  /*#__PURE__*/
  function (_Listener) {
    _inherits(ConferenceListener, _Listener);

    function ConferenceListener() {
      _classCallCheck(this, ConferenceListener);

      return _possibleConstructorReturn(this, _getPrototypeOf(ConferenceListener).apply(this, arguments));
    }

    _createClass(ConferenceListener, [{
      key: "onConferenceApplied",

      /**
       * 当有会议申请成功时且自己是其中成员时发生。
       *
       * @param {Conference} conference - 会议对象实例
       */
      value: function onConferenceApplied(conference) {}
      /**
       * 当自己加入会议成功后回调
       *
       * @param {Conference} conference - 会议对象实例
       */

    }, {
      key: "onConferenceJoined",
      value: function onConferenceJoined(conference) {}
      /**
       * 当有会议被取消时发生且自己是其中成员时发生。
       *
       * @param {Conference} conference - 会议对象实例
       */

    }, {
      key: "onConferenceClosed",
      value: function onConferenceClosed(conference) {}
      /**
       * 当自己加入会议,会议音视频流连接成功时回调
       * @param {Conference} conference 会议对象实例
       */

    }, {
      key: "onConferenceConnected",
      value: function onConferenceConnected(conference) {}
      /**
       * 会议音视频流连接失败
       * @param {Conference} conference 会议对象实例
       */

    }, {
      key: "onConferenceCallDisConnected",
      value: function onConferenceCallDisConnected() {}
      /**
       * 当会议连接成功时回调
       * @param {Conference} conference 会议对象实例
       */

    }, {
      key: "onConferenceCallConnected",
      value: function onConferenceCallConnected() {}
      /**
       * 被邀请入会回调
       * @param {Conference} conference 会议对象实例
       * @param {String} fromCubeId 邀请人 Cube 号
       */

    }, {
      key: "onConferenceInvite",
      value: function onConferenceInvite(conference, fromCubeId) {}
      /**
       * 邀请入会(仅自己终端)
       *
       * @param {Conference} conference - 会议对象实例
       * @param {Array} success - 被成功邀请集合。
       * @param {Array} failure - 邀请失败的集合（失败原因可能人数超限制，可能被邀请者不在线直接失败）。
       */

    }, {
      key: "onConferenceInviteResponded",
      value: function onConferenceInviteResponded(conference, success, failure) {}
      /**
       * 当加入会议时回调
       * @param {Conference} conference 会议对象实例
       * @param {String} joinCubeId 加入的 Cube 号
       */

    }, {
      key: "onConferenceJoining",
      value: function onConferenceJoining(conference, joinCubeId) {}
      /**
       * 当自己拒绝会议时回调
       * @param {Conference} conference 会议对象实例
       * @param {String} fromCubeId 拒绝的 Cube 号
       */

    }, {
      key: "onConferenceReject",
      value: function onConferenceReject(rejectCubeId, fromCubeId) {}
      /**
       * 当自己退出会议时回调
       * @param {Conference} conference 会议对象实例
       * @param {String} quitCubeId 退出的 Cube 号
       */

    }, {
      key: "onConferenceQuited",
      value: function onConferenceQuited(conference, quitCubeId) {}
      /**
       * 当自己所在的会议有变更时发生。
       *
       * @param {Conference} conference - 会控动作
       * @param {String} MemberAction - 引发更新操作的会议命令。
       */

    }, {
      key: "onConferenceUpdated",
      value: function onConferenceUpdated(conference, MemberAction) {}
      /**
       * 当自己所在的会议视频流接通时。
       *
       * @param {Conference} conference - 会控动作
       */

    }, {
      key: "onConferenceAddStream",
      value: function onConferenceAddStream(conference) {}
      /**
       * 当自己所在的会议视频流画面接通时。
       *
       * @param {Conference} conference - 会控动作
       */

    }, {
      key: "onConferenceAddFrame",
      value: function onConferenceAddFrame(conference) {}
      /**
       * 当sip监听end时发生。
       *
       * @param {Conference} conference - 会控动作
       */

    }, {
      key: "onConferenceSipEnd",
      value: function onConferenceSipEnd(conference) {}
      /**
       * 当有错误时被调用。
       *
       * @param {StateCode} errorCode - 错误码。
       * @param {string} conferenceId - 出错会议。
       */

    }, {
      key: "onConferenceFailed",
      value: function onConferenceFailed(Error, conferenceId) {}
    }]);

    return ConferenceListener;
  }(_Listener2.Listener);

  _exports.ConferenceListener = ConferenceListener;
});

/***/ }),
/* 372 */
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
  _exports.ConferenceType = void 0;

  /*
  * Conference.js
  * Cube Engine
  *
  * Copyright (c) 2015-2019 Cube Team. All rights reserved.
  */

  /**
   * 会议类型枚举。
   *
   * @readonly
   * @enum {String}
   * @author Li wenkai
   */
  var ConferenceType = {
    /** 未知类型。 */
    UnKnown: "UnKnown",

    /** 多人音频。 */
    VoiceCall: "voice-call",

    /** 多人视频。 */
    VideoCall: "video-call",

    /** 多人语音会议。 */
    VoiceConference: "voice-conference",

    /** 多人视频会议。 */
    VideoConference: "video-conference",
    VoiceDeskTop: "voice-desktop",

    /** 屏幕分享会议 */
    ShareScreen: 'share-screen',

    /** 思科语音会议 */
    VoiceCiscoConference: "voice-cisco-conference",

    /** 思科视频会议 */
    VideoCiscoConference: "video-cisco-conference"
  };
  _exports.ConferenceType = ConferenceType;
});

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(100);

__webpack_require__(106);

__webpack_require__(1);

__webpack_require__(107);

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

__webpack_require__(195);

__webpack_require__(89);

__webpack_require__(196);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(371), __webpack_require__(374), __webpack_require__(375), __webpack_require__(376), __webpack_require__(207), __webpack_require__(237), __webpack_require__(268), __webpack_require__(238), __webpack_require__(235), __webpack_require__(208), __webpack_require__(372)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _ConferenceListener, _ConferenceService2, _ControlAction, _ConferenceConfig, _CELLET, _CubeError, _Peer, _StateCode, _ActionConst, _SignalingState, _ConferenceType) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ConferenceServiceWorker = void 0;

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
      HashMap = _window$CellCloud.HashMap,
      ActionDialect = _window$CellCloud.ActionDialect,
      Logger = _window$CellCloud.Logger;
  /**
   * 会议服务接口的实现。
   *
   * @class ConferenceServiceWorker
   */

  var ConferenceServiceWorker =
  /*#__PURE__*/
  function (_ConferenceService) {
    _inherits(ConferenceServiceWorker, _ConferenceService);

    function ConferenceServiceWorker(engine) {
      var _this;

      _classCallCheck(this, ConferenceServiceWorker);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ConferenceServiceWorker).call(this, engine, _ConferenceListener.ConferenceListener, _CELLET.CELLET.Signaling));
      _this.callbackMap = new HashMap();
      _this.curConference = null;
      _this.flagTerminated = false; // 会议状态 0 - 空闲, 1 - 正在加入, 2 - 会议中, 3 - 正在退出

      _this.confStatus = 0;
      _this.applyJoinCallback = null;
      _this.queryAllCallback = null; // 用于检测 RTC 状态的定时器

      _this.watchRTCStatsTimer = null; // 创建、加入超时

      _this.crateTimeout = null;
      _this.joinTimeout = null;
      return _this;
    }

    _createClass(ConferenceServiceWorker, [{
      key: "getConference",
      value: function getConference() {
        return this.curConference;
      }
      /**
       * 申请会议
       */

    }, {
      key: "applyConference",
      value: function applyConference(conferenceConfig) {
        var _this2 = this;

        if ((arguments.length <= 1 ? 0 : arguments.length - 1) > 0) {
          var config = new _ConferenceConfig.ConferenceConfig(conferenceConfig, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3], arguments.length <= 4 ? undefined : arguments[4], arguments.length <= 5 ? undefined : arguments[5], arguments.length <= 6 ? undefined : arguments[6], arguments.length <= 7 ? undefined : arguments[7], arguments.length <= 8 ? undefined : arguments[8], arguments.length <= 10 ? undefined : arguments[10]);
          conferenceConfig = config;
        } // 针对司派UI问题处理


        this.engine.session.callState = _SignalingState.SignalingState.Progress;
        this.crateTimeout = setTimeout(function () {
          _this2.engine.session.callState = _SignalingState.SignalingState.None;

          _this2.delegate.onConferenceFailed(new _CubeError.CubeError(null, '创建超时'), conferenceId);
        }, 50000);
        conferenceConfig = conferenceConfig ? conferenceConfig : new _ConferenceConfig.ConferenceConfig();

        var task = function task() {
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionApplyConference);
          var param = {
            "token": window.cube._MSTR_TOKEN,
            "force": conferenceConfig.force,
            "conference": {
              "expired": conferenceConfig.expired,
              "isMux": conferenceConfig.isMux,
              "maxMember": conferenceConfig.maxMember,
              "type": conferenceConfig.conferenceType,
              "number": conferenceConfig.number
            }
          };
          conferenceConfig.cubeIds ? param.cubeIds = conferenceConfig.cubeIds : '';
          conferenceConfig.groupId ? param.bindGroup = conferenceConfig.groupId.toString() : '';
          conferenceConfig.custom ? param.conference.custom = conferenceConfig.custom.toString() : '';
          dialect.appendParam("param", param);
          return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
        }; // this.utils.getUserMedia(false, true, (err, stream) => {
        //     if (err) {
        //         this.engine.session.callState = CubeSignalingState.None;
        //         this.delegate.onConferenceFailed(new CubeError(CubeStateCode.MicphoneOpenFailed), 'Join Conference Failed!');
        //         return false;
        //     }


        task(); // })
        // //  检测设备
        // navigator.getUserMedia({"audio": true, "video": false},
        //     (e) => {
        //         task();
        //     },
        //     (e) => {
        //         this.delegate.onConferenceFailed(new CubeError(CubeStateCode.MicphoneOpenFailed), 'Join Conference Failed!');
        //     });
      }
      /**
       * 关闭会议
       */

    }, {
      key: "closeConference",
      value: function closeConference(conferenceId) {
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionCloseConference);
        dialect.appendParam("param", {
          "token": window.cube._MSTR_TOKEN,
          "conferenceId": conferenceId
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
      }
      /**
       * 加入会议
       */

    }, {
      key: "join",
      value: function join(conferenceId, videoEnabled, callback, isRestart) {
        var _this3 = this;

        if (this.confStatus > 0) {
          return false;
        }

        this.confStatus = 1;
        this.engine.sipService.unregister();
        clearTimeout(this.inviteTimer);
        clearTimeout(this.joinTimeout); // 查询会议信息

        return this.queryConferenceCmd(conferenceId, function (code, conference) {
          if (code === 200) {
            if (_this3.flagTerminated) {
              // 呼叫已经被终止
              _this3.engine.session.callState = _SignalingState.SignalingState.None;

              _this3.delegate.didEnd(_this3, conferenceId, "cancel");

              return;
            }

            _this3.delegate.onConferenceJoining(conference, _this3.engine.accName);

            var task = Date.now() + '';

            _this3.callbackMap.put(task, function (code, conference, cmd) {
              if (code !== 200) {
                // 服务器拒绝呼入会议，中断CubeHttpServer
                //  this.terminateCall();
                // code == 1400 ? this.hangup() : this.quit(conferenceId);
                if (code == 1400) {
                  _this3.hangup();
                } else {
                  Logger.w('quit conference from join');

                  _this3.quit(conferenceId);
                } // 回调错误


                _this3.engine.session.callState = _SignalingState.SignalingState.None;

                _this3.delegate.onConferenceFailed(new _CubeError.CubeError(code, 'Join Conference Failed!'), conferenceId);
              } else {
                _this3.confStatus = 2;
                _this3.engine.session.callState = _SignalingState.SignalingState.Progress;

                if (!isRestart) {
                  _this3._setConferenceState(1);

                  _this3._sendHeart();

                  _this3.delegate.onConferenceJoined(conference, conference.name);
                }

                _this3.startSip(conference, videoEnabled);
              }

              if (typeof callback === 'function') {
                callback(code, conference, cmd);
              }
            });

            var member = _this3.engine.session.name;
            var request = {
              "cmd": _ControlAction.ControlAction.Join,
              "task": task,
              "conferenceId": conferenceId.toString(),
              "member": member.toString(),
              "video": videoEnabled !== false
            };
            var dialect = new ActionDialect();
            dialect.setAction(_ActionConst.ActionConst.ActionConference);
            dialect.appendParam("param", request);
            window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
          } else {
            _this3.confStatus = 0;
            _this3.engine.session.callState = _SignalingState.SignalingState.None;

            _this3.engine.sipService.hangup();

            _this3.delegate.onConferenceFailed(new _CubeError.CubeError(code, 'Join Conference Failed!'), conferenceId);
          }
        });
      }
      /**
       * 启动 SIP
       */

    }, {
      key: "startSip",
      value: function startSip(conference, videoEnabled) {
        // 设置为当前会议
        this.curConference = conference; // 设置访问地址和端口

        this.engine.sipService.setAddress(undefined !== conference.domain ? conference.domain : conference.host, conference.host, conference.wsPort, conference.wssPort); // 使用 SIP Number 属性进行注册

        this.engine.sipService.registerWith(conference.sipNumber[this.engine.accName], conference.sipPassword[this.engine.accName], this.engine.accDisplayName); // 创建 Peer

        this.engine.session.setCallPeer(new _Peer.Peer(conference.id, 'conference', conference)); // 判断是否为桌面共享，只有主讲者才开启开启视频流

        var isDesktop = conference.type === _ConferenceType.ConferenceType.ShareScreen;

        if (isDesktop && conference.founder != this.engine.accName) {
          videoEnabled = false; // let isFirst = true;
          // for (let member in conference.member) {
          //     if (conference.member[conference.founder].joined && conference.member[member].joined && member != conference.founder) {
          //         isFirst = false;
          //         break;
          //     }
          // }
          //
          // 创建者第一次加入 则开起本地桌面流 并且设置为主讲人
          // videoEnabled = isFirst && conference.founder == this.engine.accName;
        }

        this.desektopEnabled = videoEnabled && isDesktop; // 进行会议呼叫

        var ret = this.engine.sipService.invite(conference.number, videoEnabled, isDesktop);

        if (!ret) {
          this.engine.sipService.hangup();
          this.delegate.onConferenceFailed(new _CubeError.CubeError(_StateCode.StateCode.ConferenceSipInviteFailed, 'sip invite Failed!'), conference.conferenceId);
        } else {
          // 成功发起邀请
          return true;
        }
      }
      /**
       * 陌生人参会
       */

    }, {
      key: "applyJoin",
      value: function applyJoin(conferenceId, videoEnabled, callback) {
        var _this4 = this;

        var self = this;
        this.engine.session.callState = _SignalingState.SignalingState.Progress; // 加入超时状态置换

        this.joinTimeout = setTimeout(function () {
          _this4.engine.session.callState = _SignalingState.SignalingState.None;

          _this4.delegate.onConferenceFailed(new _CubeError.CubeError(null, '加入超时'), conferenceId);
        }, 50000);

        this.applyJoinCallback = function () {
          clearTimeout(_this4.joinTimeout);

          _this4.join(conferenceId, videoEnabled, callback);
        };

        this.applyJoinOrder = function () {
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionJoinConference);
          dialect.appendParam("param", {
            "token": window.cube._MSTR_TOKEN,
            "conferenceId": conferenceId.toString()
          });
          return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
        };

        var task = function task(haveDevice) {
          return _this4.queryConferenceCmd(conferenceId, function (code, conference) {
            if (code == 200) {
              if (conference.member[self.engine.accName] && haveDevice) {
                clearTimeout(_this4.joinTimeout);
                return _this4.join(conferenceId, videoEnabled, callback);
              } else if (conference.member[self.engine.accName] && !haveDevice) {
                clearTimeout(_this4.joinTimeout);

                _this4.reject(conferenceId);
              } else if (haveDevice) {
                //陌生入会
                return _this4.applyJoinOrder();
              }
            } else {
              self.delegate.onConferenceFailed(new _CubeError.CubeError(code, 'queryConferenceCmd failed!'), conferenceId);
            }
          });
        }; // 设备检测


        this.utils.getUserMedia(videoEnabled, true, function (err, stream) {
          if (err) {
            task(false);

            _this4.delegate.onConferenceFailed(new _CubeError.CubeError(_StateCode.StateCode.MicphoneOpenFailed, 'Missing device!'), conferenceId);

            return false;
          }

          if (videoEnabled) {
            var mediaStreamTrack = typeof stream.stop === 'function' ? stream : stream.getTracks()[1];
            mediaStreamTrack.stop();
          }

          task(true);
        }); // navigator.getUserMedia({"audio": true, "video": videoEnabled},
        //     (stream) => {
        //         if (videoEnabled) {
        //             let mediaStreamTrack = typeof stream.stop === 'function' ? stream : stream.getTracks()[1];
        //             mediaStreamTrack.stop();
        //         }
        //         task(true);
        //     },
        //     (e) => {
        //         task(false);
        //         this.delegate.onConferenceFailed(new CubeError(CubeStateCode.MicphoneOpenFailed, 'Missing device!'), conferenceId);
        //     });
      }
      /**
       * 拒绝会议
       */

    }, {
      key: "reject",
      value: function reject(conferenceId) {
        clearTimeout(this.joinTimeout);
        clearTimeout(this.inviteTimer);
        this.engine.session.callState = _SignalingState.SignalingState.None;
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionRejectConference);
        dialect.appendParam("param", {
          "token": window.cube._MSTR_TOKEN,
          "conferenceId": conferenceId.toString()
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
      }
      /**
       * 退出会议
       */

    }, {
      key: "quit",
      value: function quit(conferenceId, callback, isRestart) {
        var _this5 = this;

        // 如果会议状态不是正在加入或进行中, 就无法退出会议
        if (this.confStatus !== 1 && this.confStatus !== 2) {
          return false;
        }

        this.confStatus = 3;
        this.flagTerminated = false;

        if (null !== this.engine.session.callPeer && this.engine.session.callPeer.type == "conference" && null !== this.engine.sipService) {
          var task = Date.now() + '';
          this.callbackMap.put(task, function (code, conference, cmd) {
            _this5.confStatus = 0;

            if (code !== 200) {
              // 退出失败, 回调错误
              _this5.delegate.onConferenceFailed(new _CubeError.CubeError(code, 'Quit Conference Failed!'), conferenceId);
            }

            if (typeof callback === 'function') {
              callback(code, conference, cmd);
            }

            if (!isRestart) {
              _this5._setConferenceState(0);

              _this5.delegate.onConferenceQuited(conference, _this5.engine.accName);
            }

            _this5.hangup();
          });
          var member = this.engine.session.name;
          var request = {
            "cmd": _ControlAction.ControlAction.Quit,
            "task": task,
            "conferenceId": conferenceId.toString(),
            "member": member.toString()
          };
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionConference);
          dialect.appendParam("param", request);
          window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
          return this.engine.sipService.hangup();
        }

        return false;
      }
      /**
       * 添加会议主持人
       * @param conferenceId {String} 会议的群组号
       * @param memberName {String} 会议成员名
       */

    }, {
      key: "addPresenter",
      value: function addPresenter(conferenceId, memberName, callback) {
        var task = new String(Date.now());

        if (undefined !== callback) {
          this.callbackMap.put(task, callback);
        }

        var request = {
          "cmd": _ControlAction.ControlAction.Presenter,
          "task": task,
          "conferenceId": conferenceId.toString(),
          "member": memberName.toString(),
          "presenter": true
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionConference);
        dialect.appendParam("param", request);
        return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
      }
      /**
       * 删除会议主持人
       * @param conferenceId {String} 会议的群组号
       * @param memberName {String} 会议成员名
       */

    }, {
      key: "removePresenter",
      value: function removePresenter(conferenceId, memberName, callback) {
        var task = new String(Date.now());

        if (undefined !== callback) {
          this.callbackMap.put(task, callback);
        }

        var request = {
          "cmd": _ControlAction.ControlAction.Presenter,
          "task": task,
          "conferenceId": conferenceId.toString(),
          "member": memberName.toString(),
          "presenter": false
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionConference);
        dialect.appendParam("param", request);
        return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
      }
      /**
       * 改变主讲人
       * @param conferenceId {String} 会议的群组号
       * @param memberName {String} 需要设为主讲人的用户号
       * @param callback {Function} 操作应答回调
       * @param clear {Function} 清除主持人
       */

    }, {
      key: "changeSpeaker",
      value: function changeSpeaker(conferenceId, memberName, callback, clear) {
        var task = new String(Date.now());

        if (undefined !== callback) {
          this.callbackMap.put(task, callback);
        }

        var request = {
          "cmd": _ControlAction.ControlAction.Speaker,
          "task": task,
          "conferenceId": conferenceId.toString(),
          "member": memberName.toString()
        };
        request.clear = clear ? "true" : "false";
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionConference);
        dialect.appendParam("param", request);

        if (!window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect)) {
          this.callbackMap.remove(task);
          return false;
        }

        return true;
      }
      /**
       * 设置成员禁听
       * @param conferenceId {String} 会议的群组号
       * @param memberName {String} 需要设置的成员用户号
       * @param deaf {Boolean} 是否禁听
       * @param callback {Function} 操作应答回调
       */

    }, {
      key: "setMemberDeaf",
      value: function setMemberDeaf(conferenceId, memberName, deaf, callback) {
        var task = new String(Date.now());

        if (undefined !== callback) {
          this.callbackMap.put(task, callback);
        }

        var request = {
          "cmd": _ControlAction.ControlAction.Hear,
          "task": task,
          "conferenceId": conferenceId.toString(),
          "member": memberName.toString(),
          "deaf": deaf
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionConference);
        dialect.appendParam("param", request);

        if (!window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect)) {
          this.callbackMap.remove(task);
          return false;
        }

        return true;
      }
      /**
       * 设置成员静音
       * @param conferenceId {String} 会议的群组号
       * @param memberName {String} 需要设置的成员的Cube号
       * @param mute {Boolean} 是否不可听
       * @param callback {Function} 操作应答回调
       */

    }, {
      key: "setMemberMute",
      value: function setMemberMute(conferenceId, memberName, mute, callback) {
        var task = new String(Date.now());

        if (undefined !== callback) {
          this.callbackMap.put(task, callback);
        }

        var request = {
          "cmd": _ControlAction.ControlAction.Mute,
          "task": task,
          "conferenceId": conferenceId.toString(),
          "member": memberName.toString(),
          "mute": mute
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionConference);
        dialect.appendParam("param", request);

        if (!window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect)) {
          this.callbackMap.remove(task);
          return false;
        }

        return true;
      }
      /**
       * 设置成员可视
       * @param conferenceId {String} 会议的群组号
       * @param memberName {String} 需要设置的成员用户号
       * @param watch {Boolean} 是否可视
       * @param callback {Function} 操作应答回调
       */

    }, {
      key: "setMemberWatch",
      value: function setMemberWatch(conferenceId, memberName, watch, callback) {
        var _this6 = this;

        var task = new String(Date.now()),
            sipService = this.engine.sipService;

        if (undefined !== callback) {
          this.callbackMap.put(task, callback);
        }

        var item = function item() {
          var request = {
            "cmd": _ControlAction.ControlAction.Vmute,
            "task": task,
            "conferenceId": conferenceId.toString(),
            "member": memberName.toString(),
            "vmute": !watch
          };
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionConference);
          dialect.appendParam("param", request);

          if (!window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect)) {
            _this6.callbackMap.remove(task);

            return false;
          }
        }; // 判断是否为桌面共享，只有主讲者才控制视频流
        // let isDesktop = this.curConference && (this.curConference.type === CubeConferenceType.ShareScreen);
        //
        // if (isDesktop) {
        //     sipService.removeStream();
        //     if (watch) {
        //         // 添加屏幕共享流, 重新协商
        //         sipService.addStream(watch, 'isDesktop', () => {
        //             sipService.renegotiate(false);
        //             this.changeSpeaker(conferenceId, memberName,()=>{
        //                 item();
        //             });
        //         });
        //     } else {
        //         sipService.renegotiate(true);
        //         this.changeSpeaker(conferenceId, memberName,()=>{
        //             item();
        //         },true);
        //     }
        // }else {


        item(); // }

        return true;
      }
      /**
       * 动态设置成员画布位置
       * @param conferenceId {String} 会议的群组号
       * @param memberName {String} 需要设置的成员用户号
       * @param res {number} 0:清除位置 1,2,3,4,5,6融屏位置
       * @param callback {Function} 操作应答回调
       */

    }, {
      key: "setRes",
      value: function setRes(conferenceId, memberName, res, callback) {
        var task = new String(Date.now());

        if (undefined !== callback) {
          this.callbackMap.put(task, callback);
        }

        var request = {
          "cmd": _ControlAction.ControlAction.Res,
          "task": task,
          "conferenceId": conferenceId.toString(),
          "member": memberName.toString(),
          "res": res
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionConference);
        dialect.appendParam("param", request);

        if (!window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect)) {
          this.callbackMap.remove(task);
          return false;
        }

        return true;
      }
      /**
       * 开启/关闭 远程桌面
       * @param conferenceId {String} 会议的群组号
       * @param memberName {String} 需要设置的成员用户号
       * @param enable {Boolean} 开启/关闭
       * @param callback {Function} 操作应答回调
       */

    }, {
      key: "setDesktopEnable",
      value: function setDesktopEnable(conferenceId, enable, cb) {
        var _this7 = this;

        // if (this.curConference && conferenceId == this.curConference.conferenceId) {
        //     let sipService = this.engine.sipService;
        //     // 移除本地音视频流 重新添加音频 屏幕共享流, 重新协商
        //     this.changeSpeaker(conferenceId, this.engine.accName, (code, conference) => {
        //         if (code == 200) {
        //             sipService.removeStream();
        //             sipService.addStream(enable, true, () => {
        //                 sipService.renegotiate(!enable, () => {
        //                     this.setMemberWatch(conferenceId, this.engine.accName, enable, cb);
        //                 });
        //             });
        //         } else {
        //             cb(code, conference)
        //         }
        //     }, !enable);
        // }
        var sipService = this.engine.sipService,
            isOpen = enable ? true : false;

        if (this.renegotiating || this.desektopEnabled == isOpen || !sipService.isAddstream) {
          cb(_StateCode.StateCode.ConferenceRenegotiating, this.curConference);
          return false;
        }

        this.desektopEnabled = isOpen;
        this.renegotiating = true; // 移除本地音视频流 重新添加音频 屏幕共享流, 重新协商

        this.changeSpeaker(conferenceId, this.engine.accName, function (code, conference) {
          if (code == 200) {
            _this7.setRes(conferenceId, _this7.engine.accName, "clear", function (code) {
              sipService.removeStream();
              sipService.addStream(enable, true, function () {
                sipService.renegotiate(!enable, function () {
                  _this7.setMemberWatch(conferenceId, _this7.engine.accName, enable, function () {
                    if (!enable) {
                      _this7.setRes(conferenceId, _this7.engine.accName, "clear", function (code) {});
                    }

                    _this7.renegotiating = false;
                    cb(code, conference);
                  });
                });
              });
            });
          } else {
            _this7.desektopEnabled = false;
            _this7.renegotiating = false;
            cb(code, conference);
          }
        }, !enable);
      }
      /**
       * 将成员踢出会议
       * @instance
       * @memberof CubeConferenceService
       * @param conferenceId {String} 会议的群组号
       * @param memberName {String} 需要踢出的成员用户号
       * @param callback {Function} 操作应答回调
       */

    }, {
      key: "kickMember",
      value: function kickMember(conferenceId, memberName, callback) {
        var task = new String(Date.now());

        if (undefined !== callback) {
          this.callbackMap.put(task, callback);
        }

        var request = {
          "cmd": _ControlAction.ControlAction.Kick,
          "task": task,
          "conferenceId": conferenceId.toString(),
          "member": memberName.toString()
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionConference);
        dialect.appendParam("param", request);

        if (!window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect)) {
          this.callbackMap.remove(task);
          return false;
        }

        return true;
      }
      /**
       * 获取指定成员的当前画面地址
       * @param names {Array<String>} 需要查询的用户
       * @return {Array<Object>}  [{cube: 10001, url: "", thumbUrl: ""}]
       */

    }, {
      key: "getCapturedCameraImages",
      value: function getCapturedCameraImages(names, raw) {
        var ret = [];

        if (undefined !== raw && raw) {
          for (var i = 0; i < names.length; i++) {
            ret[i] = {
              cube: names[i],
              name: names[i],
              url: window.cube._CUBE_CONF_CAPTURE_SERVICE + names[i] + "/cube_captured_camera.jpg",
              thumbUrl: window.cube._CUBE_CONF_CAPTURE_SERVICE + names[i] + "/cube_captured_camera_small.jpg"
            };
          }
        } else {
          var src = this.utils.isSecure ? window.cube._CUBE_HTTPS_SERVICE : window.cube._CUBE_HTTP_SERVICE;
          src += "/conference/capture/get?";

          for (var i = 0; i < names.length; i++) {
            ret[i] = {
              cube: names[i],
              name: names[i],
              url: src + "name=" + names[i] + "&small=false",
              thumbUrl: src + "name=" + names[i] + "&small=true"
            };
          }
        }

        return ret;
      }
      /*listConferences: function(callback) {
       var task = new String(Date.now());
       this.callbackMap.put(task, callback);
         var request = {
       "cmd": "list",
       "task": task
       };
         var dialect = new ActionDialect();
       dialect.setAction(CubeConst.ActionConference);
       dialect.appendParam("request", request);
       if (!window.nucleus.talkService.talk(CELLET.Signaling, dialect)) {
       this.callbackMap.remove(task);
       return false;
       }
         return true;
       },*/

      /**
       * 会议中查询会议信息。
       * @param conferenceId {String} 会议的群组号
       * @param callback {Function} 操作应答回调
       */

    }, {
      key: "queryConferenceCmd",
      value: function queryConferenceCmd(conferenceId, callback) {
        var task = new String(Date.now());

        if (undefined !== callback) {
          this.callbackMap.put(task, callback);
        }

        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionConference);
        dialect.appendParam("param", {
          "cmd": _ControlAction.ControlAction.Get,
          "task": task,
          "conferenceId": conferenceId.toString()
        });

        if (!window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect)) {
          this.callbackMap.remove(task);
          return false;
        }

        return true;
      }
      /**
       * 查询会议信息。
       * @param conferenceId {String} 会议的群组号
       * @param callback {Function} 操作应答回调
       */

    }, {
      key: "queryConference",
      value: function queryConference(groupName, callback, errorCallback) {
        this.queryConferenceCb = callback;

        if (undefined !== errorCallback) {
          this.queryConferenceErrorCb = errorCallback;
        }

        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionQueryConference);
        dialect.appendParam("param", {
          "token": window.cube._MSTR_TOKEN,
          "group": groupName
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
      }
      /**
       * 查询所有会议信息。
       * @param cubeId {String} 需要查询的 cube 号
       * @param types [Array] 会议的类型
       * @param callback {Function} 操作应答回调
       */

    }, {
      key: "queryAllConference",
      value: function queryAllConference(cubeId, types, callback) {
        if (undefined !== callback) {
          this.queryAllCallback = callback;
        }

        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionQueryAllConference);
        dialect.appendParam("param", {
          "token": window.cube._MSTR_TOKEN,
          "name": cubeId,
          "types": types
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
      }
      /**
       * 请求一张会议快照图像。
       * @param completion {Function} 生成完成回调。
       * @return {Boolean} 如果成功发出请求返回 true，否则返回 false 。
       */

    }, {
      key: "snapshoot",
      value: function snapshoot(completion) {
        if (null == this.curConference) {
          return false;
        }

        if (undefined === completion || null == completion) {
          return false;
        }

        var members = new Array();
        var status = this.curConference.status;

        for (var name in status) {
          var ms = status[name];

          if (ms.joined) {
            members.push(name);
          }
        }

        if (members.length < 2) {
          return false;
        }

        var src = this.utils.isSecure ? window.cube._CUBE_HTTPS_SERVICE : window.cube._CUBE_HTTP_SERVICE;
        src += "/conference/composite?names=";

        for (var i = 0; i < members.length; ++i) {
          var m = members[i];
          src += m;

          if (i != members.length - 1) {
            src += ";";
          }
        }

        var image = new Image();

        image.onload = function () {
          completion.call(null, members, image);
        };

        image.onerror = function () {
          completion.call(null, members, null);
        };

        image.src = src;
        return true;
      }
      /**
       * 邀请入会
       */

    }, {
      key: "inviteConference",
      value: function inviteConference(conferenceId, cubeIds) {
        // TODO
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionInviteConference);
        dialect.appendParam("param", {
          "token": window.cube._MSTR_TOKEN,
          "conferenceId": conferenceId.toString(),
          "invited": cubeIds
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
      }
    }, {
      key: "queryConferenceInvite",
      value: function queryConferenceInvite() {
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionTryReInviteConference);
        dialect.appendParam("param", {});
        return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
      }
    }, {
      key: "onInCall",
      value: function onInCall(callback) {
        var _this8 = this;

        var task = new String(Date.now());
        var member = this.engine.session.name;
        this.callbackMap.put(task, function (code, conference, cmd) {
          if (code == 200) {
            if (typeof callback === 'function') {
              callback(code, conference, cmd);
            }
          }

          _this8.delegate.onConferenceCallConnected(conference, conference.name);
        });
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionConference);
        dialect.appendParam("param", {
          "cmd": _ControlAction.ControlAction.Call,
          "task": task,
          "conferenceId": this.curConference.conferenceId,
          "member": member.toString()
        });

        if (!window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect)) {
          this.callbackMap.remove(task);
          return false;
        }

        return true;
      }
    }, {
      key: "terminateCall",
      value: function terminateCall() {
        if (this.curConference) {
          this.quit(this.curConference.conferenceId);
        }
      }
    }, {
      key: "hangup",
      value: function hangup() {
        this.confStatus = 0;
        this.curConference = null;
        this.engine.sipService.hangup();
      }
    }, {
      key: "onRegisterStateChanged",
      value: function onRegisterStateChanged(session) {
        this.session = session;

        if (this.engine.registered) {
          // 查询是否有会议邀请
          this.queryConferenceInvite();

          this._setConferenceState(0);
        } else {
          this.curConference = null;
          this.confStatus = 0;
          this.flagTerminated = false; // 更改状态

          if (this.engine.session.callPeer && this.engine.session.callPeer.type == 'conference') {
            this.engine.session.callState = _SignalingState.SignalingState.End;
          }
        }
      }
    }, {
      key: "onDialogue",
      value: function onDialogue(action, dialect) {
        if (action == _ActionConst.ActionConst.ActionApplyConference) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionApplyConference);

          this._processApplyConference(dialect);
        } else if (action == _ActionConst.ActionConst.ActionApplyConferenceAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionApplyConferenceAck);

          this._processApplyConference(dialect);
        } else if (action == _ActionConst.ActionConst.ActionCloseConference) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionCloseConference);

          this._processCloseConference(dialect);
        } else if (action == _ActionConst.ActionConst.ActionCloseConferenceAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionCloseConferenceAck);

          this._processRejectConference(dialect);
        } else if (action == _ActionConst.ActionConst.ActionRejectConference) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionRejectConference);

          this._processRejectConference(dialect);
        } else if (action == _ActionConst.ActionConst.ActionRejectConferenceAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionRejectConferenceAck);

          this._processRejectConference(dialect);
        } else if (action == _ActionConst.ActionConst.ActionInviteConference) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionInviteConference);

          this._processInviteConference(dialect);
        } else if (action == _ActionConst.ActionConst.ActionInviteConferenceAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionInviteConferenceAck);

          this._processInviteConferenceAck(dialect);
        } else if (action == _ActionConst.ActionConst.ActionConference) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionConference);

          this._processConference(dialect);
        } else if (action == _ActionConst.ActionConst.ActionConferenceAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionConferenceAck);

          this._processConferenceAck(dialect);
        } else if (action == _ActionConst.ActionConst.ActionJoinConferenceAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionJoinConferenceAck);

          this._processJoinConference(dialect);
        } else if (action == _ActionConst.ActionConst.ActionQueryConferenceAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionQueryConferenceAck);

          this._processQueryConference(dialect);
        } else if (action == _ActionConst.ActionConst.ActionQueryAllConferenceAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionQueryAllConference);

          this._processQueryAllConference(dialect);
        }
      }
    }, {
      key: "onConfigure",
      value: function onConfigure(config) {
        this.engine.sipService.maxVideoSize = config.videoSize;
        this.engine.sipService.minFrameRate = config.frameRate.min;
        this.engine.sipService.maxFrameRate = config.frameRate.max;
      }
    }, {
      key: "_processApplyConference",
      value: function _processApplyConference(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");
        var conference = data ? data.conference : null;
        var conferenceId = data ? data.conferenceId : dialect.getParam("conferenceId");
        clearTimeout(this.crateTimeout);

        if (state.code == 200) {
          this.delegate.onConferenceApplied(conference);
        } else {
          this.delegate.onConferenceFailed(new _CubeError.CubeError(state.code, 'Apply Conference Failed!'), conference || conferenceId);
        }
      }
    }, {
      key: "_processCloseConference",
      value: function _processCloseConference(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");
        var conference = data ? data.conference : '';
        var conferenceId = data ? data.conferenceId : dialect.getParam("conferenceId");

        if (state.code == 200) {
          if (this.curConference && conference.bindGroup == this.curConference.bindGroup) {
            this._setConferenceState(0);

            this.hangup();
          }

          if (null == this.curConference) clearTimeout(this.inviteTimer);
          this.delegate.onConferenceClosed(conference);
        } else {
          this.delegate.onConferenceFailed(new _CubeError.CubeError(state.code, 'Close Conference Failed!'), conference || conferenceId);
        }
      }
    }, {
      key: "_processRejectConference",
      value: function _processRejectConference(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");
        var conference = data ? data.conference : null;
        var conferenceId = data ? data.conferenceId : dialect.getParam("conferenceId");

        if (state.code == 200) {
          this.delegate.onConferenceReject(conference, data.fromCubeId);
        } else {
          this.delegate.onConferenceFailed(new _CubeError.CubeError(state.code, 'Reject Conference Failed!'), conference || conferenceId);
        }
      }
    }, {
      key: "_processInviteConference",
      value: function _processInviteConference(dialect) {
        var _this9 = this;

        var state = dialect.getParam("state");
        var data = dialect.getParam("data");
        var conference = data ? data.conference : null;
        var conferenceId = conference ? conference.conferenceId : dialect.getParam("conferenceId");

        if (state.code == 200) {
          this.delegate.onConferenceInvite(conference, data.from);
          this.inviteTimer = setTimeout(function () {
            clearTimeout(_this9.inviteTimer);

            _this9.delegate.onConferenceUpdated(conference, [{
              cmd: ['quit'],
              name: _this9.engine.accName,
              reason: {}
            }]);
          }, 50000);
        } else {
          this.delegate.onConferenceFailed(new _CubeError.CubeError(state.code, 'Invite Conference Failed!'), conference || conferenceId);
        }
      }
    }, {
      key: "_processInviteConferenceAck",
      value: function _processInviteConferenceAck(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");
        var conference = data ? data.conference : null;
        var conferenceId = data ? data.conferenceId : dialect.getParam("conferenceId");

        if (state.code == 200) {
          this.delegate.onConferenceInviteResponded(conference, data.success, data.failure);
        } else {
          this.delegate.onConferenceFailed(new _CubeError.CubeError(state.code, 'Invite Conference Failed!'), conference || conferenceId);
        }
      }
    }, {
      key: "_processQueryConference",
      value: function _processQueryConference(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");

        if (state.code == 200) {
          if (null != this.queryConferenceCb) {
            if (data.conference !== undefined) {
              this.queryConferenceCb.call(null, data.conference);
              this.queryConferenceCb = null;
            } else if (null != this.queryConferenceErrorCb) {
              this.queryConferenceErrorCb.call(null, _StateCode.StateCode.NotFoundConference);
              this.queryConferenceErrorCb = null;
            }
          }
        } else {
          if (null != this.queryConferenceErrorCb) {
            this.queryConferenceErrorCb.call(null, state.code);
            this.queryConferenceErrorCb = null;
          }
        }
      }
    }, {
      key: "_processQueryAllConference",
      value: function _processQueryAllConference(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");
        var conference = data ? data.conference : null;
        var conferenceId = data ? data.conferenceId : dialect.getParam("conferenceId");

        if (state.code == 200) {
          this.queryAllCallback(state.code, data.conferences);
        } else {
          this.delegate.onConferenceFailed(new _CubeError.CubeError(state.code, 'Query Conference Failed!'), conference || conferenceId);
        }
      }
    }, {
      key: "_processJoinConference",
      value: function _processJoinConference(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");
        var conference = data ? data.conference : null;
        var conferenceId = state.code != 200 ? data ? data.conferenceId : dialect.getParam("conferenceId") : '';

        if (state.code == 200) {
          this.applyJoinCallback();
        } else {
          this.delegate.onConferenceFailed(new _CubeError.CubeError(state.code, 'Join Failed!'), conference || conferenceId);
        }
      }
    }, {
      key: "_processConferenceAck",
      value: function _processConferenceAck(dialect) {
        var state = dialect.getParam("state");
        var task = dialect.getParam("task");
        var data = dialect.getParam("data");

        if (state.code == 200) {
          var cb = this.callbackMap.get(task);
          var memberActions = dialect.getParam("memberActions");

          if (null != cb) {
            cb.call(null, state.code, data.conference, data.cmd);
            this.callbackMap.remove(task);
          }
        } else {
          // 状态异常
          Logger.w("CubeConferenceUA", "Ack state: " + state.code);

          var _cb = this.callbackMap.get(task);

          if (null != _cb) {
            _cb.call(null, state.code, data);

            this.callbackMap.remove(task);
          }
        }
      }
    }, {
      key: "_processConference",
      value: function _processConference(dialect) {
        // 收到来自会议状态变更通知
        var data = dialect.getParam("data");
        var target = data.memberActions[0].name;

        if (data.conference == null || this.curConference && data.conference.bindGroup == this.curConference.bindGroup) {
          this.curConference = data.conference;
        } // 处理 kick


        if (data.memberActions[0].cmd[0] == _ControlAction.ControlAction.Kick && target) {
          if (target === this.engine.accName) {
            this.quit(data.conference.conferenceId);
          }
        }

        if (data.memberActions[0].cmd[0] == _ControlAction.ControlAction.join) {
          if (this.curConference && data.conference.bindGroup == this.curConference.bindGroup && this.engine.accName == target) {
            this.hangup();
          }
        }

        if (data.memberActions[0].cmd[0] == _ControlAction.ControlAction.Quit && this.engine.accName == target) {
          clearTimeout(this.inviteTimer);
        }

        this.delegate.onConferenceUpdated(data.conference, data.memberActions);
      }
    }, {
      key: "_setConferenceState",
      value: function _setConferenceState(state) {
        localStorage.setItem('CubeConferenceState_' + this.session.name, state);
      }
    }, {
      key: "_sendHeart",
      value: function _sendHeart() {
        var self = this;

        var task = function task() {
          if (self.confStatus != 0) {
            var dialect = new ActionDialect();
            dialect.setAction(_ActionConst.ActionConst.ActionHeartConference);
            window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
            setTimeout(function () {
              task();
            }, 5000);
          }
        };

        task();
      }
    }, {
      key: "startCheckSignal",
      value: function startCheckSignal() {
        var _this10 = this;

        var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

        if (!this.curConference) {
          return false;
        }

        var sip = this.engine.sipService,
            mediaType = 'video';

        if (this.curConference.type.indexOf("video") == -1) {
          mediaType = 'audio';
        }

        var get = function get(cb) {
          // 获取当前状态
          sip.rtcSession.connection.getStats(sip.remoteStream.getVideoTracks()[0]).then(function (report) {
            report.forEach(function (value, key) {
              if (value.type === 'candidate-pair') {
                cb(value.currentRoundTripTime);
              }
            });
          });
        };

        this.watchSignalTimer = setInterval(function () {
          if (sip.rtcSession) {
            get(function (tripTime) {
              if (tripTime <= 0.03) {
                callback(1);
              } else if (tripTime <= 0.1) {
                callback(0.75);
              } else if (tripTime <= 0.5) {
                callback(0.5);
              } else if (tripTime >= 1) {
                callback(0.25);
              }
            });
          } else {
            _this10.stopCheckSignal();
          }
        }, 5000);
      }
    }, {
      key: "stopCheckSignal",
      value: function stopCheckSignal() {
        clearInterval(this.watchSignalTimer);
      }
    }, {
      key: "startWatchRTCStats",
      value: function startWatchRTCStats(callback) {
        var _this11 = this;

        var sip = this.engine.sipService,
            codec = null;

        var get = function get(cb) {
          // 获取当前状态
          sip.rtcSession.connection.getStats(sip.remoteStream.getVideoTracks()[0]).then(function (report) {
            report.forEach(function (value, key) {
              if (value.type === 'inbound-rtp' && value.mediaType === 'video') {
                if (null === codec) codec = report.get(value.codecId);
                value.codec = codec;
                cb(value);
              }
            });
          });
        };

        get(function (value) {
          var decodedFrames = value.framesDecoded,
              deltaFrames = decodedFrames;
          var startTime = Date.now(),
              initialTime = startTime;
          _this11.watchRTCStatsTimer = setInterval(function () {
            if (sip.rtcSession) {
              get(function (stats) {
                var currentTime = Date.now();
                var deltaTime = (currentTime - startTime) / 1000;
                var totalTime = (currentTime - initialTime) / 1000;
                startTime = currentTime;
                var decodedFPS = (stats.framesDecoded - decodedFrames) / deltaTime;
                var decodedFPSAvg = (stats.framesDecoded - deltaFrames) / totalTime;
                decodedFrames = stats.framesDecoded;
                callback(decodedFPS, decodedFPSAvg, stats);
              });
            } else {
              _this11.stopWatchRTCStats();
            }
          }, 1000);
        });
      }
    }, {
      key: "stopWatchRTCStats",
      value: function stopWatchRTCStats() {
        clearInterval(this.watchRTCStatsTimer);
      }
    }]);

    return ConferenceServiceWorker;
  }(_ConferenceService2.ConferenceService);

  _exports.ConferenceServiceWorker = ConferenceServiceWorker;
});

/***/ }),
/* 374 */
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
  _exports.ConferenceService = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  /**
   * 会控指令操作回调。
   *
   * @callback ConferenceCallback
   * @param {CubeStateCode} state - 操作状态码。
   * @param {CubeConference} [conference] - 会议数据。
   * @param {String} [cmd] - 当前操作的会控指令。
   */

  /**
   * 会议服务接口。
   *
   * @interface ConferenceService
   * @author Xu Jiangwei, Guan Yong
   */
  var ConferenceService =
  /*#__PURE__*/
  function (_Service) {
    _inherits(ConferenceService, _Service);

    function ConferenceService() {
      _classCallCheck(this, ConferenceService);

      return _possibleConstructorReturn(this, _getPrototypeOf(ConferenceService).apply(this, arguments));
    }

    _createClass(ConferenceService, [{
      key: "applyConference",

      /**
       * 申请会议。
       *
      * @param {ConferenceConfig} conferenceConfig - 会议配置对象 参考ConferenceConfig
       */
      value: function applyConference(conferenceConfig) {}
      /**
       * 关闭会议。
       *
       * @param {String} conferenceId - 需要关闭的会议ID。
       */

    }, {
      key: "closeConference",
      value: function closeConference(conferenceId) {}
      /**
          * 加入会议。
          *
       * @private
          * @param {String} conferenceId - 需要关闭的会议ID。
       * @param {Boolean, String} videoEnabled - 是否使用视频参会, 可以是视频媒体流ID
          */

    }, {
      key: "join",
      value: function join(conferenceId, videoEnabled) {}
      /**
       * 拒绝会议邀请。
       *
       * @param {String} conferenceId - 需要拒绝会议的会议ID。
       */

    }, {
      key: "reject",
      value: function reject(conferenceId) {}
      /**
       * 退出会议。
       *
       * @param {String} conferenceId - 会议的群组 Cube 号。
      * @param {ConferenceCallback} callback - 操作回调。
       */

    }, {
      key: "quit",
      value: function quit(conferenceId, callback) {}
      /**
       * 添加会议主持人。
       *
          * @param {String} conferenceId - 会议的群组号。
       * @param {String} memberName - 会议成员名。
       * @param {ConferenceCallback} callback - 操作应答回调。
       */

    }, {
      key: "addPresenter",
      value: function addPresenter(conferenceId, memberName, callback) {}
      /**
       * 移除会议主持人。
       *
          * @param {String} conferenceId - 会议的群组号。
       * @param {String} memberName - 会议成员名。
       * @param {ConferenceCallback} callback - 操作应答回调。
       */

    }, {
      key: "removePresenter",
      value: function removePresenter(conferenceId, memberName, callback) {}
      /**
       * 变更主讲人。每个会议中，有且仅有一个主讲人。
       *
       * @param {String} conferenceId - 会议的群组号。
       * @param {String} memberName - 需要设为主讲人的用户 Cube 号。
       * @param {ConferenceCallback} callback - 操作应答回调。
       */

    }, {
      key: "changeSpeaker",
      value: function changeSpeaker(conferenceId, memberName, callback, clear) {}
      /**
       * 设置成员禁听。
       *
       * @param {String} conferenceId - 会议的群组号。
       * @param {String} memberName - 需要设置的成员用户号。
       * @param {boolean} deaf - 是否禁听。
       * @param {ConferenceCallback} callback - 操作应答回调。
       */

    }, {
      key: "setMemberDeaf",
      value: function setMemberDeaf(conferenceId, memberName, deaf, callback) {}
      /**
       * 设置成员静音。
       *
       * @param {String} conferenceId - 会议的群组号。
       * @param {String} memberName - 需要设置的成员用户 Cube 号。
       * @param {boolean} mute - 是否静音。
       * @param {ConferenceCallback} callback - 操作应答回调
       */

    }, {
      key: "setMemberMute",
      value: function setMemberMute(conferenceId, memberName, mute, callback) {}
      /**
       * 设置成员可视。
       *
       * @param {String} conferenceId - 会议的群组号。
       * @param {String} memberName - 需要设置的成员用户号。
       * @param {boolean} watch - 是否可视。
       * @param {ConferenceCallback} callback - 操作应答回调。
       */

    }, {
      key: "setMemberWatch",
      value: function setMemberWatch(conferenceId, memberName, watch, callback) {}
      /**
          * 将成员踢出会议。
          *
          * @param {String} conferenceId - 会议的群组号。
          * @param {String} memberName - 需要踢出的成员用户号。
          * @param {ConferenceCallback} callback - 操作应答回调。
          */

    }, {
      key: "kickMember",
      value: function kickMember(conferenceId, memberName, callback) {}
      /**
       * 获取指定成员的当前画面地址。
       * 
       * @param names {Array<.String>} - 需要查询的用户 Cube 号数组。
       * @returns {Array.<Object>} - 存储格式：[{cube: number, url: string, thumbUrl: string}]
       */

    }, {
      key: "getCapturedCameraImages",
      value: function getCapturedCameraImages(names) {}
      /**
       * 查询会议信息。
          *
          * @param {String} conferenceId - 会议的群组号。
       * @param {ConferenceCallback} callback - 操作应答回调。
       */

    }, {
      key: "queryConference",
      value: function queryConference(conferenceId, callback) {}
      /**
       * 查询所在账号所有会议信息。
       *
       * @param {String} cubeId -  自己的cube号。
       * @param {Array} types - 需要查询的会议类型数组 参考conferenceType.js。
       * @param {ConferenceCallback} callback - 操作应答回调。
       */

    }, {
      key: "queryAllConference",
      value: function queryAllConference(cubeId, types, callback) {}
      /**
       * 请求一张会议快照图像。
       *
       * @param completion {Function} 生成完成回调。
       * @return {Boolean} 如果成功发出请求返回 true，否则返回 false 。
       */

    }, {
      key: "snapshoot",
      value: function snapshoot(completion) {}
      /**
       * 返回当前会议。
       *
       * @returns {CubeConference} 会议数据实例。如果没有会议数据返回 <code>null</code> 。
       */

    }, {
      key: "getConference",
      value: function getConference() {}
      /**
      * 邀请入会
      *
       * @param {String} conferenceId
       * @param {Array<String>} cubeIds
       */

    }, {
      key: "inviteConference",
      value: function inviteConference(conferenceId, cubeIds) {}
    }]);

    return ConferenceService;
  }(_Service2.Service);

  _exports.ConferenceService = ConferenceService;
});

/***/ }),
/* 375 */
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
  _exports.ControlAction = void 0;

  /*
   * ControlAction.js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 会议控制类型枚举。
   *
   * @readonly
   * @enum {String}
   * @author Li wenkai
   */
  var ControlAction = {
    /** 获取会议信息 */
    Get: "get",

    /** 禁听。 */
    Hear: "deaf",

    /** 禁视。 */
    Vmute: "vmute",

    /** 禁言。 */
    Mute: "mute",

    /** 加入会议 */
    Join: "join",

    /** 退出会议。 */
    Quit: "quit",

    /** 踢出会议。 */
    Kick: "kick",

    /** 主讲人变更。 */
    Speaker: "floor",

    /** 主持人变更。 */
    Presenter: "presenter",

    /** 拒绝会议。 */
    Reject: "reject",

    /** 邀请会议。 */
    Invite: "invite",

    /** 未知动作。 */
    Unknown: "unknown",

    /** 连接会议成功 */
    Call: "call",

    /** 正在说话 */
    Talk: "talk",

    /** 画布位置*/
    Res: "res"
  };
  _exports.ControlAction = ControlAction;
});

/***/ }),
/* 376 */
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
  _exports.ConferenceConfig = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  /*
   * ConferenceConfig .js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */
  var ConferenceConfig =
  /**
   * @constructs
   * @param groupId {String} 依赖群组
   * @param cubeIds {String|Array<String>} 参会人员
   * @param conferenceType {ConferenceType } 会议类型
   * @param maxMember {Number} 最大人数
   * @param isMux {Boolean} 是否容屏
   * @param expired {String} 有效时间
   * @param force {Boolean} 强制覆盖依赖群组下关联的上一个会议
   * @param number {String} 会议号(如果是Cisco等传统会议类型，同时会议号不为空，则需要以会员号为key来生成conferenceId，并且将申请者加入到conferenceId组中)
   */
  function ConferenceConfig(cubeIds, conferenceType) {
    var groupId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var maxMember = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
    var isMux = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var expired = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 7200;
    var custom = arguments.length > 6 ? arguments[6] : undefined;
    var force = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
    var number = arguments.length > 8 ? arguments[8] : undefined;

    _classCallCheck(this, ConferenceConfig);

    this.groupId = groupId;
    this.cubeIds = cubeIds;
    this.conferenceType = conferenceType;
    this.maxMember = maxMember;
    this.isMux = isMux;
    this.expired = expired;
    this.force = force;
    this.number = number;
    this.custom = custom;
  };

  _exports.ConferenceConfig = ConferenceConfig;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=CubeSipworker.js.map