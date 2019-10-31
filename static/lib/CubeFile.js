(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CubeFile"] = factory();
	else
		root["CubeFile"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 270);
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
/* 104 */,
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
/* 118 */,
/* 119 */,
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
/* 126 */,
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
/* 136 */,
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
/* 142 */,
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
/* 182 */,
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
/* 196 */,
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(37);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
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
/* 235 */,
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
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
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
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
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
/* 268 */,
/* 269 */,
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(271), __webpack_require__(272), __webpack_require__(275), __webpack_require__(276), __webpack_require__(284), __webpack_require__(279)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _FileManagerServiceWorker, _FileManagerListener, _FileInfo, _FileType, _FilePermission, _FileStatusListener) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Info", {
    enumerable: true,
    get: function get() {
      return _FileInfo.FileInfo;
    }
  });
  Object.defineProperty(_exports, "Type", {
    enumerable: true,
    get: function get() {
      return _FileType.FileType;
    }
  });
  Object.defineProperty(_exports, "Permission", {
    enumerable: true,
    get: function get() {
      return _FilePermission.FilePermission;
    }
  });
  Object.defineProperty(_exports, "StatusListener", {
    enumerable: true,
    get: function get() {
      return _FileStatusListener.FileStatusListener;
    }
  });
  _exports.Manager = void 0;

  /*
   * Boot.js
   * Cube Engine
   *
   * Copyright (c) 2015-2017 Cube Team. All rights reserved.
   */
  var Manager = {
    ServiceWorker: _FileManagerServiceWorker.FileManagerServiceWorker,
    Listener: _FileManagerListener.FileManagerListener
  };
  _exports.Manager = Manager;
});

/***/ }),
/* 271 */
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

__webpack_require__(264);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(272), __webpack_require__(273), __webpack_require__(280), __webpack_require__(281), __webpack_require__(275), __webpack_require__(282), __webpack_require__(236)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _FileManagerListener, _DBFileManagerService, _FileManagerService2, _FileAction, _FileInfo, _fileUpload, _Request) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.FileManagerServiceWorker = void 0;
  _fileUpload = _interopRequireDefault(_fileUpload);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
  /**
   * 文件管理服务实现
   *
   * @class FileManagerServiceWorker
   * @author Xu Jiangwei, Guan Yong
   * @param engine {CubeEngine}
   */

  var FileManagerServiceWorker =
  /*#__PURE__*/
  function (_FileManagerService) {
    _inherits(FileManagerServiceWorker, _FileManagerService);

    function FileManagerServiceWorker(engine, nodeFileUpload) {
      var _this;

      _classCallCheck(this, FileManagerServiceWorker);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FileManagerServiceWorker).call(this, engine, _FileManagerListener.FileManagerListener));
      _this.session = null; // this.uploadProcessFiles = new HashMap();

      _this.dbService = new _DBFileManagerService.DBFileManagerService(engine);
      _this.fileUploadWorker = nodeFileUpload ? new nodeFileUpload() : new _fileUpload["default"]();
      _this.isNode = nodeFileUpload ? true : false;
      _this.file = null;
      _this.listener = null;
      _this.pendingFileMessageList = {};
      _this.downloadFileList = {};
      _this.isUpload = false;
      _this.lastSessionName = null;
      return _this;
    }
    /**
     * 获取上传中的文件
     */


    _createClass(FileManagerServiceWorker, [{
      key: "getUploadProcessFiles",
      value: function getUploadProcessFiles() {
        return this.uploadProcessFiles.values;
      }
      /**
       * 取消上传
       * @param identifier {identifier} - 需要取消上传的文件的唯一标识
       * @returns {Boolean} - 返回取消动作是否成功发送
       */

    }, {
      key: "cancelMessage",
      value: function cancelMessage(identifier) {
        var self = this;

        if (self.pendingFileMessageList[identifier]) {
          var file = self.pendingFileMessageList[identifier];

          if (!file.getListener) {
            self.errorFn(file);
            return false;
          }

          var listener = file.getListener(); // if (
          //   undefined !== file._cancelUpload &&
          //   typeof file._cancelUpload == "function"
          // ) {

          var cancelParam = {
            token: this.engine.accToken,
            fileId: file.fileId,
            "fileId-copy": file.fileId
          };
          self.fileUploadWorker.cancelUpload(self.isNode ? this.engine._CUBE_FILE_SERVER + _FileAction.FileAction.blockCancel : _FileAction.FileAction.blockCancel, cancelParam, file, function (err, res) {
            if (err) {
              console.log("取消了文件上传失败");
              return false;
            }

            console.log("取消了文件上传");
            listener.onCanceled(file);
            self.delegate.onCanceled(file);
            file.status = "cancel";

            try {
              self.dbService.storageFileInfo(file);
            } catch (err) {
              console.log("文件存储失败", err);
              self.errorFn(file);
              return false;
            }

            self._removePendingFileMessage(file.identifier);

            self._checkPendingFileList();

            return true;
          });
        } // }
        // return false;

      }
      /**
       * 暂停上传
       * @param identifier {identifier}-需要暂停的文件的唯一标识
       * @returns {*}
       */

    }, {
      key: "pauseUpload",
      value: function pauseUpload(identifier) {
        var self = this;

        if (self.pendingFileMessageList[identifier]) {
          var file = self.pendingFileMessageList[identifier];

          if (file.status == "pending") {
            self.fileUploadWorker.pauseUpload(file, function (err, res) {
              // var task = ()=>{
              //   setTimeout(()=>{
              //     if(self.isUpload){
              if (res) {
                file.status = "paused";

                try {
                  self.dbService.storageFileInfo(file);
                } catch (err) {
                  console.log("文件存储失败", err);
                  self.errorFn(file);
                  return false;
                }

                self._removePendingFileMessage(identifier);

                self.file = null;

                self._checkPendingFileList();

                console.log("文件暂停上传");
              } else {
                self.errorFn(file);
                console.log('文件暂停失败1');
              } //     }else{
              //       task()
              //     }
              //   },0)
              // }
              // task()

            });
          } else {
            try {
              self.dbService.storageFileInfo(file);
            } catch (err) {
              console.log("文件存储失败", err);
              self.errorFn(file);
              return false;
            }

            self._removePendingFileMessage(identifier);

            self._checkPendingFileList();
          }
        }

        return false;
      }
      /**
       * 继续上传
       * @param identifier {identifier}-继续上传的文件的唯一标识
       * @returns {*}
       */

    }, {
      key: "resumeUpload",
      value: function resumeUpload(identifier, fileInfo) {
        var self = this,
            file = {};

        try {
          self.dbService.queryFileInfoById([identifier], function (err, res) {
            if (!err && res && res.length > 0) {
              if (self.pendingFileMessageList[identifier]) {
                file = self.pendingFileMessageList[identifier];
              } else {
                self.pendingFileMessageList[identifier] = fileInfo;
                file = fileInfo;
              }

              file.status = res[0].status;
              file.blockChunks = res[0].blockChunks;
              file.blockCurrentChunk = res[0].blockCurrentChunk;
              file.sparkList = res[0].sparkList;
              file.fileId = res[0].fileId;
              file.file.md5 = res[0].md5;
              file.file.directoryPath = res[0].directoryPath ? res[0].directoryPath : "";
              file.file.size = res[0].size;
              file.size = res[0].size;

              if (file.fileId) {
                file.file.key = res[0].fileId;
                file.status = file.status == "create" ? "create" : "resume";
              } else {
                file.status = "create";
              }
            } else {
              file = fileInfo;
              self.pendingFileMessageList[identifier] = fileInfo;
            }

            var num = 0;

            for (var i = 0; i < Object.keys(self.pendingFileMessageList).length; i++) {
              var item = self.pendingFileMessageList[Object.keys(self.pendingFileMessageList)[i]];

              if (!item) {
                delete self.pendingFileMessageList[Object.keys(self.pendingFileMessageList)[i]];
                return false;
              }

              if (item.status == "pending") {
                num++;
              } else if (num < 1 && (item.status == "create" || item.status == "resume")) {
                num++;
                self.fileUploadWorker.resumeUpload(file, function (err, res) {
                  self._checkPendingFileList();
                });
              }
            }
          });
        } catch (e) {
          self.errorFn(fileInfo);
        }

        return false;
      }
      /**
       * 下载文件
       * @param identifier {identifier} - 需要下载的文件的唯一标识
       * @param url {url} - 需要下载的文件的url
       */

    }, {
      key: "download",
      value: function download(identifier, url) {
        // let url = this.getDownloadUrl(file);
        var el = document.createElement("a"); // el.setAttribute("download", file.getName());

        el.setAttribute("href", url);
        el.setAttribute("target", "_blank");
        el.style.display = "none";
        document.body.appendChild(el);

        if (el.click) {
          el.click();
        } else {
          var e = document.createEvent("MouseEvents");
          e.initEvent("click", true, true);
          el.dispatchEvent(e);
        }

        document.body.removeChild(el);
      }
      /**
       * 获取文件下载地址(1分钟内有效)
       * @param file {FileInfo} - 需要下载的文件
       */

    }, {
      key: "getDownloadUrl",
      value: function getDownloadUrl(file) {
        return this.server.domain + _FileAction.FileAction.DownloadFile + "?account=" + encodeURIComponent(this.engine.accName) + "&sn=" + file.getSn();
      }
      /**
       * 删除文件
       * @param files {Array<FileInfo>} - 需要删除的文件
       */

    }, {
      key: "del",
      value: function del(files) {
        var _this2 = this;

        var postData = {
          account: this.engine.accName,
          sns: []
        };

        for (var i = 0; i < files.length; i++) {
          postData.sns.push(files[i].getSn());
        }

        this.server.send(_FileAction.FileAction.DeleteFiles, postData, function (err, data) {
          if (err) {
            Logger.w("FileManagerService#del", "delete failed! error code is " + err.status);
            return false;
          }

          if (data.state == 200) {
            _this2.delegate.onFileDeleted(files, files[0].getParent());
          } else {
            Logger.w("FileManagerService#del", "delete failed! error code is " + data.state);
          }
        });
      }
      /**
       * 复制文件
       * @param file {FileInfo} - 需要复制的文件
       * @param newFile {FileInfo} - 复制后的文件
       * @TODO 开发中
       */

    }, {
      key: "copy",
      value: function copy(file, newFile) {
        var _this3 = this;

        var postData = {
          account: this.engine.accName,
          sn: file.getSn(),
          cpName: "copy_"
        };
        this.server.send(_FileAction.FileAction.CopyFile, postData, function (err, data) {
          if (err) {
            Logger.w("FileManagerService#copy", "copy failed! error copy is" + err.status);
            return false;
          }

          if (data.state() == 200) {
            var d = data.data;
            newFile = new _FileInfo.FileInfo(d.name, d.size, d.type, null, d.sn, d.icon, d.createTime, d.parentFileInfo, d.permission);

            _this3.dbService.storageFileInfo(newFile);

            _this3.delegate.onFileAdded([_FileInfo.FileInfo], newFile);
          } else {
            Logger.w("FileManagerService#copy", "copy failed! error code is " + data.state);
          }
        });
      }
      /**
       * 移动文件
       * @param file {FileInfo} - 需要移动的文件
       * @param parentFile {FileInfo} - 移动后文件所在目录
       */

    }, {
      key: "move",
      value: function move(file, parentFile) {
        var _this4 = this;

        var postData = {
          account: this.engine.accName,
          fromSN: file.getSn()
        };

        if (null != parentFile && parentFile instanceof _FileInfo.FileInfo) {
          postData.toSN = parentFile.getSn();
        }

        this.server.send(_FileAction.FileAction.MoveFile, postData, function (err, data) {
          if (err) {
            Logger.w("FileManagerService#move", "move failed! error code is " + err.status);
            return false;
          }

          if (data.state == 200) {
            _this4.delegate.onFileMove(file, parentFile);
          } else {
            Logger.w("FileManagerService#move", "move failed! error code is " + data.state);
          }
        });
      }
      /**
       * 重命名
       * @param file {FileInfo} - 需要重命名的文件
       * @param newFile {FileInfo} - 重命名后的文件
       */

    }, {
      key: "rename",
      value: function rename(file, newFile) {
        var _this5 = this;

        var postData = {
          account: this.engine.accName,
          sn: file.getSn(),
          name: newFile.getName()
        };
        this.server.send(_FileAction.FileAction.RenameFile, postData, function (err, data) {
          if (err) {
            Logger.w("FileManagerService#rename", "rename failed! error code is " + err.status);
            return false;
          }

          if (data.state == 200) {
            var f = data.data;
            newFile = new _FileInfo.FileInfo(f.name, f.size, f.type, null, f.sn, f.icon, f.createTime, file.getParent(), f.permission);

            _this5.dbService.storageFileInfo(newFile);

            _this5.delegate.onFileRename(file, newFile);
          } else {
            Logger.w("FileManagerService#rename", "rename failed! error code is " + data.state);
          }
        });
      }
      /**
       * 创建目录
       * @param dir {String} - 目录名称
       * @param parentFile {FileInfo} - 父目录
       */

    }, {
      key: "mkdir",
      value: function mkdir(dir, parentFile) {
        var _this6 = this;

        var postData = {
          account: this.engine.accName,
          name: dir
        };

        if (null != parentFile && parentFile instanceof _FileInfo.FileInfo) {
          postData.parentSN = parentFile.getSn();
        }

        this.server.send(_FileAction.FileAction.Mkdir, postData, function (err, data) {
          if (err) {
            Logger.w("FileManagerService#mkdir", "mkdir failed! error code is " + err.status);
            return false;
          }

          if (data.state == 200) {
            var f = data.data;
            var file = new _FileInfo.FileInfo(f.name, f.size, f.type, null, f.sn, f.icon, f.createTime, parentFile, f.permission);

            _this6.dbService.storageFileInfo(file);

            _this6.delegate.onFileAdded([file], parentFile);
          } else {
            Logger.w("FileManagerService#mkdir", "mkdir failed! error code is " + data.state);
          }
        });
      }
      /**
       * 查找文件
       * @param name {String} - 需要搜索的文件名称
       * @TODO 开发中
       */

    }, {
      key: "search",
      value: function search(name) {
        var postData = {
          account: this.engine.accName
        };
      }
      /**
       * 根据目录获取该目录下的文件列表信息(含目录)
       * @param parentFile {FileInfo|null} - 需要获取的目录
       * @param callback {CubeFileListCallback} - 数据回调
       */

    }, {
      key: "list",
      value: function list(parentFile, callback) {
        var _this7 = this;

        var postData = {
          account: this.engine.accName
        };

        if (null != parentFile && parentFile instanceof _FileInfo.FileInfo) {
          postData.sn = parentFile.getSn();
        } else {
          parentFile = null;
        }

        this.server.send(_FileAction.FileAction.FileList, postData, function (err, data) {
          if (err) {
            Logger.w("FileManagerService#list", "get list failed! error code is " + err.status);
            return false;
          }

          if (data.state == 200) {
            var list = data.data.files;

            if (null != list) {
              for (var i = 0; i < list.length; i++) {
                var f = list[i];
                list[i] = new _FileInfo.FileInfo(f.name, f.size, f.type, null, f.sn, f.icon, f.createTime, parentFile, f.permission);

                _this7.dbService.storageFileInfo(list[i]);
              }
            }

            callback(list);
          } else {
            Logger.w("FileManagerService#list", "get list failed! error code is " + data.state);
          }
        });
      }
      /**
       * 设置访问Token
       * @param token {String} - 需要设置的Token
       * @TODO 开发中
       */

    }, {
      key: "setAccessToken",
      value: function setAccessToken(token) {}
      /**
       * 分享文件给其它用户
       * @param file {FileInfo} - 需要分享的文件
       * @param cube {String} - 被分享人的Cube号
       * @param callback {CubeShareFileCallback} - 分享回调
       */

    }, {
      key: "share",
      value: function share(file, cube, callback) {
        var postData = {
          sn: file.getSn(),
          from: this.engine.accName,
          to: cube
        };
        this.server.send(_FileAction.FileAction.ShareFile, postData, function (err, data) {
          if (err) {
            Logger.w("FileManagerService#share", "share file failed! error code is " + err.status);
            callback({
              code: err.status
            });
            return false;
          }

          if (data.state == 200) {
            callback();
          } else {
            Logger.w("FileManagerService#share", "share file failed! error code is " + data.state);
            callback({
              code: data.state
            });
          }
        });
      }
      /**
       * 保存文件
       * @param sn {String} 需要保存的文件的sn
       * @param name {String} 保存后的文件名
       * @param parentSN {String | Number | null} 需要保存到目录的sn(传入空或0则代表根目录)
       * @param callback {CubeSaveFileCallback} - 保存回调
       */

    }, {
      key: "save",
      value: function save(sn, name, parentSN, callback) {
        var postData = {
          sn: sn,
          account: this.engine.accName,
          newFileName: name
        };

        if (null != parentSN && 0 != parentSN && "0" != parentSN) {
          postData.parentSN = parentSN;
        }

        this.server.send(_FileAction.FileAction.SaveFile, postData, function (err, data) {
          if (err) {
            Logger.w("FileManagerService#save", "save file failed! error code is " + err.status);
            callback({
              code: err.status
            });
            return false;
          }

          if (data.state == 200) {
            callback();
          } else {
            Logger.w("FileManagerService#save", "save file failed! error code is " + data.state);
            callback({
              code: data.state
            });
          }
        });
      }
      /**
       * 根据sn查询文件
       * @param sn {String} 需要保存的文件的sn
       * @param callback {CubeQueryFileCallback} - 查询回调
       */

    }, {
      key: "queryBySN",
      value: function queryBySN(sn, callback) {
        var _this8 = this;

        this.dbService.queryFileInfoBySn(sn, function (err, ret) {
          if (!err && null != ret) {
            callback(false, ret);
          } else {
            var postData = {
              sn: sn,
              account: _this8.engine.accName
            };

            _this8.server.send(_FileAction.FileAction.FileInfo, postData, function (err, data) {
              if (err) {
                Logger.w("FileManagerService#queryBySN", "query file failed! error code is " + err.status);
                callback({
                  code: err.status
                });
                return false;
              }

              if (data.state == 200) {
                var f = data.data;
                var fileInfo = new _FileInfo.FileInfo(f.name, f.size, f.type, null, f.sn, f.icon, f.createTime, null, f.permission);

                _this8.dbService.storageFileInfo(fileInfo);

                callback(false, fileInfo);
              } else {
                Logger.w("FileManagerService#queryBySN", "query file failed! error code is " + data.state);
                callback({
                  code: data.state
                });
              }
            });
          }
        });
      }
    }, {
      key: "onRegisterStateChanged",
      value: function onRegisterStateChanged(session) {
        this.session = session;
        this.lastSessionName = this.session.name;
        var self = this; // 发送消息队列中的消息

        if (this.engine.registered) {
          this.dbService.startup();
          this.server = new _Request.Request(this.engine._CUBE_SERVICE); //断网文件发送过程,测试通过即可放开
          // if (null == this.lastSessionName || this.lastSessionName == this.session.name) {
          //   this.dbService.queryFileInfoByStatus(["pending", "create", "resume", 'failed'], function (err, res) {
          //     if (res && res.length > 0) {
          //       res.forEach(function (item) {
          //         self.resumeUpload(item.identifier, item);
          //       });
          //     }
          //   });
          // this.dbService.queryDownloadFileByStatus(["downloading", "create","failed"], function (err, res) {
          //   if (res && res.length > 0) {
          //     res.forEach(function (item) {
          //       self.downloadFileBlock(item.identifier, item.file.url, {}, item.file.path, item.file.name, item.file.directoryPath);
          //     });
          //   }
          // });
          // }
        } else {
          this.downloadFileList = {};
          this.pendingFileMessageList = {};

          if (this.file && this.file.status != "complated" && this.file.status != "paused" && this.file.status != "special") {
            this.file.code = 1219;
            this.errorFn(this.file);
          }

          this.server = null;
          this.dbService.shutdown();
        }
      }
    }, {
      key: "_getWidthAndHeight",
      value: function _getWidthAndHeight(file, callback) {
        var reader = new FileReader();
        var obj = {};

        reader.onload = function (e) {
          var data = e.target.result; //加载图片获取图片真实宽度和高度

          var image = new Image();

          image.onload = function () {
            obj.width = image.width;
            obj.height = image.height;
            callback(obj);
          };

          image.src = data;
        };

        reader.readAsDataURL(file);
      } //压缩文件

    }, {
      key: "zipFolder",
      value: function zipFolder(filePath, savePath, callback) {
        this.fileUploadWorker.zipFolder(filePath, savePath, callback);
      } //解压文件

    }, {
      key: "unzipFile",
      value: function unzipFile(filePath, savePath, callback) {
        this.fileUploadWorker.unzipFile(filePath, savePath, callback);
      } //删除压缩文件

    }, {
      key: "deleteFile",
      value: function deleteFile(savePath, callback) {
        this.fileUploadWorker.deleteFile(savePath, callback);
      }
      /**
      * @@param identifier {identifier} - 文件的唯一标识
      * @param file {FileInfo} - 需要上传的文件
      * @param parentFile {FileInfo|String} - 文件的上级目录或文件夹名称
      */
      //文件上传

    }, {
      key: "upload",
      value: function upload(identifier, file) {
        this._checkPendingFileList(identifier, file);
      } //分块下载文件

    }, {
      key: "downloadFileBlock",
      value: function downloadFileBlock(sn, url, options, path, filename, directoryPath) {
        var _this9 = this;

        var self = this;

        if (sn) {
          self.downloadFileList[sn] = {
            sn: sn,
            url: url,
            options: options,
            path: path,
            filename: filename,
            status: "create",
            directoryPath: directoryPath ? directoryPath : ''
          };
        }

        if (Object.keys(self.downloadFileList).length > 0) {
          var num = 0;

          for (var i = 0; i < Object.keys(self.downloadFileList).length; i++) {
            var item = self.downloadFileList[Object.keys(self.downloadFileList)[i]];

            if (item.status == "downloading") {
              num++;
            } else if (num < 1 && item.status == "create") {
              var file;

              (function () {
                file = self.downloadFileList[Object.keys(self.downloadFileList)[i]];
                file.status = "downloading";
                num++;
                var logContent = {};

                try {
                  if (!_this9.dbService) {
                    throw '数据库连接失败';
                  }

                  _this9.dbService.queryFileInfoById([file.sn], function (err, res) {
                    if (res && res.length > 0) {
                      logContent = res[0].logContent ? res[0].logContent : {};
                    } else {
                      var downloadFile = new _FileInfo.FileInfo(file.sn);
                      downloadFile.status = "create";
                      downloadFile.sn = file.sn;
                      downloadFile.file = {};
                      downloadFile.file["directoryPath"] = directoryPath;
                      downloadFile.file["path"] = path;
                      downloadFile.file["url"] = url;
                      downloadFile.name = filename;
                      downloadFile.isDown = true;
                      downloadFile.createTime = Date.now();
                      self.dbService.storageFileInfo(downloadFile, true);
                    }

                    file.options["onUpload"] = function (sn, logContents) {
                      _this9.dbService.queryFileInfoById([sn], function (err, res) {
                        if (res && res.length > 0) {
                          res[0].status = logContents.status ? logContents.status : 'create';
                          res[0].logContent = logContents;
                          res[0].file = {};
                          res[0].file["directoryPath"] = directoryPath;
                          res[0].file["path"] = path;
                          res[0].file["url"] = url;
                          res[0].name = filename;
                          res[0].isDown = true;
                          res[0].createTime = Date.now();

                          _this9.dbService.storageFileInfo(res[0], true);
                        }
                      });
                    };

                    file.options["onFinish"] = function (sn, logContent) {
                      delete self.downloadFileList[logContent.sn];
                      self.downloadFileBlock();
                    };

                    logContent.status = "downloading";

                    _this9.fileUploadWorker.startDownload(file.sn, file.url, file.options, file.path, file.filename, logContent, file.directoryPath);
                  });
                } catch (e) {
                  self.delegate.onError({
                    sn: sn
                  });
                }
              })();
            }
          }
        }
      } //取消分块下载文件

    }, {
      key: "cancelFileBlock",
      value: function cancelFileBlock(identifier) {
        var _this10 = this;

        // if (this.downloadFileList[identifier]) {
        delete this.downloadFileList[identifier];
        this.fileUploadWorker.cancelDownload(identifier, function () {
          _this10.downloadFileBlock();
        }); // } else {
        //   console.log("取消的文件已完成下载");
        // }
      }
    }, {
      key: "_checkPendingFileList",
      value: function _checkPendingFileList(identifier, fileInfo) {
        var self = this;

        try {
          if (identifier && fileInfo) {
            self.pendingFileMessageList[identifier] = fileInfo;
            self.dbService.storageFileInfo(fileInfo);
          }

          if (Object.keys(self.pendingFileMessageList).length > 0) {
            var num = 0;

            for (var i = 0; i < Object.keys(self.pendingFileMessageList).length; i++) {
              var item = self.pendingFileMessageList[Object.keys(self.pendingFileMessageList)[i]];

              if (!item) {
                delete self.pendingFileMessageList[Object.keys(self.pendingFileMessageList)[i]];
                return false;
              }

              if (item.status == "pending") {
                num++;
              } else if (num < 1 && (item.status == "create" || item.status == "resume")) {
                var file;
                var listener;

                var _ret = function () {
                  file = self.pendingFileMessageList[Object.keys(self.pendingFileMessageList)[i]];
                  file.status = file.status == "resume" ? "resume" : "pending";
                  self.file = file;

                  if (!file.getListener) {
                    self.delegate.onError(file);

                    self._removePendingFileMessage(file.identifier);

                    self._checkPendingFileList();

                    return {
                      v: false
                    };
                  }

                  num++;
                  listener = file.getListener();

                  try {
                    self.dbService.storageFileInfo(file);
                  } catch (err) {
                    console.log("文件存储失败", err);
                    self.errorFn(file);
                    return {
                      v: false
                    };
                  }

                  var sendBlockUploadFn = function sendBlockUploadFn(file) {
                    self.isUpload = false;
                    self.fileUploadWorker.sendBlockUpload(self.isNode ? self.engine._CUBE_FILE_SERVER + _FileAction.FileAction.blockUpload : _FileAction.FileAction.blockUpload, {}, file, function (err, res) {
                      self.isUpload = true;

                      if (file.status == "complated") {
                        return false;
                      }

                      if (err) {
                        self.errorFn(res);
                        return false;
                      }

                      file = res;
                      self.fileUploadWorker.progressTask(function (file, progress, total) {
                        console.log("文件进度");

                        if (file.status == 'pending') {
                          listener.onProgress(file, progress, total);
                          self.delegate.onProgress(file, progress, total);
                        }
                      });

                      if (file.blockCurrentChunk < file.blockChunks && file.blockChunks != 0) {
                        console.log("文件分块上传成功");

                        try {
                          self.dbService.storageFileInfo(file);
                        } catch (err) {
                          console.log("文件存储失败", err);
                          self.errorFn(file);
                          return false;
                        }

                        if (file.status != "pending") {
                          return false;
                        }

                        sendBlockUploadFn(file);
                      } else {
                        if (file.status != "pending") {
                          return false;
                        }

                        var createParam = {
                          token: self.engine.accToken,
                          fileId: file.fileId,
                          blockMd5s: JSON.stringify(file.sparkList)
                        };
                        self.fileUploadWorker.sendBlockCreate(self.isNode ? self.engine._CUBE_FILE_SERVER + _FileAction.FileAction.blockCreate : _FileAction.FileAction.blockCreate, createParam, function (err, res) {
                          self.isUpload = true;

                          if (err) {
                            self.errorFn(res);
                            console.log("文件上传失败");
                            return false;
                          }

                          file = res;
                          file.status = "complated";
                          listener.onCompleted(file);
                          self.delegate.onCompleted(file);
                          console.log("文件上传成功");
                          console.log(err, res);

                          self._removePendingFileMessage(file.identifier);

                          try {
                            self.dbService.storageFileInfo(file);
                            self.file = null;
                          } catch (err) {
                            console.log("文件存储失败", err);
                            self.errorFn(file);
                            return false;
                          }

                          self._checkPendingFileList();
                        });
                        return true;
                      }
                    });
                  };

                  if (file.status == "resume") {
                    file.status = 'pending';
                    listener.onStarted(file);
                    self.delegate.onStarted(file);
                    sendBlockUploadFn(file);
                    return {
                      v: false
                    };
                  }

                  self.fileUploadWorker.preCreate(self.isNode ? self.engine._CUBE_FILE_SERVER + _FileAction.FileAction.preCreateFile : _FileAction.FileAction.preCreateFile, {}, file, function (err, res) {
                    self.isUpload = true;

                    if (err) {
                      file.code = res.state ? res.state.code : 1219;
                      self.errorFn(file);

                      self._removePendingFileMessage(file.identifier);

                      self._checkPendingFileList();

                      return false;
                    }

                    file = res;
                    listener.onStarted(file);
                    self.delegate.onStarted(file);

                    try {
                      self.dbService.storageFileInfo(file);
                    } catch (err) {
                      console.log("文件存储失败", err);
                      self.errorFn(file);
                      return false;
                    }

                    if (res.secondUpload) {
                      file.status = "completed";
                      listener.onProgress(file, file.size, file.size);
                      listener.onCompleted(file);
                      self.delegate.onProgress(file, file.size, file.size);
                      self.delegate.onCompleted(file);

                      self._removePendingFileMessage(file.identifier);

                      self._checkPendingFileList();

                      self.file = null;

                      try {
                        self.dbService.storageFileInfo(file);
                      } catch (err) {
                        console.log("文件存储失败", err);
                        self.errorFn(file);
                        return false;
                      }
                    } else {
                      sendBlockUploadFn(file);
                    }
                  }); // if (fileInfo) {
                  //   let isHave = false;
                  //   if (self.pendingFileMessageList.length > 0) {
                  //     for (let i = 0; i < self.pendingFileMessageList.length; i++) {
                  //       if (self.pendingFileMessageList[i].identifier == identifier) {
                  //         self.pendingFileMessageList[i].fileInfo.status = "create";
                  //         isHave = true;
                  //       }
                  //     }
                  //   }
                  //   if (!isHave) {
                  //     self.pendingFileMessageList.push({ identifier, fileInfo });
                  //     self.dbService.storageFileInfo(fileInfo);
                  //   }
                  // }
                  // if (self.pendingFileMessageList.length > 0) {
                  //   var num = 0;
                  //   for (let i = 0; i < self.pendingFileMessageList.length; i++) {
                  //     var item = self.pendingFileMessageList[i].fileInfo;
                  //     if (item.status == "pending") {
                  //       num++;
                  //     } else if (num < 1 && item.status == "create") {
                  //       var file = self.pendingFileMessageList[i].fileInfo;
                  //       if (!file.getListener) {
                  //         self.delegate.onError(file);
                  //         self._removePendingFileMessage(file.identifier);
                  //         self._checkPendingFileList();
                  //         return false;
                  //       }
                  //       num++;
                  //       var listener = file.getListener();
                  //       listener.onStarted(file);
                  //       self.delegate.onStarted(file);
                  //       file.status = "pending";
                  //       self.dbService.storageFileInfo(file);
                  //       var currentChunk = 0;
                  //       // read in chunks of 1MB
                  //       var chunkSize = 1048576;
                  //       var chunks = 1;
                  //       self.fileUploadWorker.preCreate(
                  //         self.isNode
                  //           ? cube._CUBE_FILE_SERVER + FileAction.preCreateFile
                  //           : FileAction.preCreateFile,
                  //         {},
                  //         file,
                  //         (err, res) => {
                  //           console.log(err, res);
                  //           if (err) {
                  //             self.errorFn(file);
                  //             self._removePendingFileMessage(file.identifier);
                  //             self._checkPendingFileList();
                  //             return false;
                  //           }
                  //           file = res;
                  //           chunks = file.blockChunks;
                  //           if (res.secondUpload) {
                  //             listener.onProgress(file, file.size, file.size);
                  //             listener.onCompleted(file);
                  //             self.delegate.onProgress(file, file.size, file.size);
                  //             self.delegate.onCompleted(file);
                  //             self._removePendingFileMessage(file.identifier);
                  //             file.status = "completed";
                  //             self.dbService.storageFileInfo(file);
                  //             self._checkPendingFileList();
                  //           } else {
                  //             let sendBlockUploadFn = function() {
                  //               self.fileUploadWorker.loadNext(file, (err, res) => {
                  //                 if (!err) {
                  //                   self.fileUploadWorker.sendBlockUpload(
                  //                     self.isNode
                  //                       ? cube._CUBE_FILE_SERVER + FileAction.blockUpload
                  //                       : FileAction.blockUpload,
                  //                     {},
                  //                     (err, res) => {
                  //                       if (file.status != "pending") {
                  //                         return false;
                  //                       }
                  //                       if (err) {
                  //                         self.errorFn(res);
                  //                         return false;
                  //                       }
                  //                       file = res;
                  //                       //  let chunks = file.blockChunks,
                  //                       currentChunk = file.blockCurrentChunk;
                  //                       // currentChunk++
                  //                       if (currentChunk < chunks) {
                  //                         console.log("文件分块上传成功");
                  //                         file.status = "pending";
                  //                         self.dbService.storageFileInfo(file);
                  //                         sendBlockUploadFn();
                  //                       } else {
                  //                         let createParam = {
                  //                           token: cube.accToken,
                  //                           fileId: file.fileId,
                  //                           blockMd5s: JSON.stringify(file.sparkList)
                  //                         };
                  //                         self.fileUploadWorker.sendBlockCreate(
                  //                           self.isNode
                  //                             ? cube._CUBE_FILE_SERVER + FileAction.blockCreate
                  //                             : FileAction.blockCreate,
                  //                           createParam,
                  //                           (err, res) => {
                  //                             if(err){
                  //                               self.errorFn(res);
                  //                               console.log("文件上传失败");
                  //                               return false;
                  //                             }
                  //                             file = res;
                  //                             listener.onCompleted(file);
                  //                             self.delegate.onCompleted(file);
                  //                             console.log("文件上传成功");
                  //                             console.log(err, res);
                  //                             self._removePendingFileMessage(file.identifier);
                  //                             file.status = "complated";
                  //                             self.dbService.storageFileInfo(file);
                  //                             self._checkPendingFileList();
                  //                           }
                  //                         );
                  //                         return true;
                  //                       }
                  //                     }
                  //                   );
                  //                 }
                  //               });
                  //             };
                  //             sendBlockUploadFn();
                  //             // 两秒后开始查询进度
                  //             setTimeout(() => {
                  //               self.fileUploadWorker.progressTask(
                  //                 (file, progress, total) => {
                  //                   console.log("文件进度");
                  //                   listener.onProgress(file, progress, total);
                  //                   self.delegate.onProgress(file, progress, total);
                  //                 }
                  //               );
                  //             }, 1000);
                  //           }
                  //         }
                  //       );
                  //     }
                  //   }
                  // }
                }();

                if (_typeof(_ret) === "object") return _ret.v;
              }
            }
          }
        } catch (err) {
          console.log("文件存储失败", err);
          self.errorFn(self.file);
          return false;
        }
      } //错误处理

    }, {
      key: "errorFn",
      value: function errorFn(fileInfo) {
        if (!fileInfo) return false;
        var self = this;
        fileInfo.createTime = Date.now();

        if (!fileInfo.getListener) {
          fileInfo.status = fileInfo.status == 'create' ? 'create' : "failed";

          try {
            self.dbService.storageFileInfo(fileInfo, true);
            self.delegate.onError(fileInfo);
          } catch (err) {
            self.delegate.onError(fileInfo);
          }

          self._removePendingFileMessage(fileInfo.identifier);

          self._checkPendingFileList();

          return false;
        }

        var listener = fileInfo.getListener();
        fileInfo.status = fileInfo.status == 'create' ? 'create' : "failed";

        try {
          self.dbService.storageFileInfo(fileInfo, true);
          listener.onFail(fileInfo);
          self.delegate.onError(fileInfo);
        } catch (err) {
          listener.onFail(fileInfo);
          self.delegate.onError(fileInfo);
        }

        self._removePendingFileMessage(fileInfo.identifier);

        self._checkPendingFileList();
      }
    }, {
      key: "_removePendingFileMessage",
      value: function _removePendingFileMessage(identifier) {
        delete this.pendingFileMessageList[identifier];
      }
    }, {
      key: "CusTomPrecreateFile",
      value: function CusTomPrecreateFile(err, fn) {
        var self = this;
        self.CusTomPrecreateFileParam = {
          data: {
            token: null,
            name: null,
            md5: null,
            size: null
          },
          action: new _Request.Request(self.engine._CUBE_FILE_SERVER).domain + _FileAction.FileAction.preCreateFile
        };
        self.CusTomPrecreateFile(self.CusTomPrecreateFileParam, function (err, res) {
          if (!err) {}
        });
      }
    }]);

    return FileManagerServiceWorker;
  }(_FileManagerService2.FileManagerService);

  _exports.FileManagerServiceWorker = FileManagerServiceWorker;
});

/***/ }),
/* 272 */
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
  _exports.FileManagerListener = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var FileManagerListener =
  /*#__PURE__*/
  function (_Listener) {
    _inherits(FileManagerListener, _Listener);

    function FileManagerListener() {
      _classCallCheck(this, FileManagerListener);

      return _possibleConstructorReturn(this, _getPrototypeOf(FileManagerListener).apply(this, arguments));
    }

    _createClass(FileManagerListener, [{
      key: "onFileAdded",

      /**
       * 当有文件新增时回调
       * @param files {Array<FileInfo>} 新增的文件信息
       * @param parentFile {FileInfo} 父目录信息
       */
      value: function onFileAdded(files, parentFile) {}
      /**
       * 当有文件被删除时回调
       * @param files {Array<FileInfo>} 被删除的文件信息
       * @param parentFile {FileInfo} 父目录信息
       */

    }, {
      key: "onFileDeleted",
      value: function onFileDeleted(files, parentFile) {}
      /**
       * 当有文件被移动时回调
       * @param file {FileInfo} 被移动的文件
       * @param parentFile {FileInfo} 移动文件所在的新目录
       */

    }, {
      key: "onFileMove",
      value: function onFileMove(file, parentFile) {}
      /**
       * 当有文件重命名时回调
       * @param file {FileInfo} 被重命名的文件
       * @param newFile {FileInfo} 重命名后的文件
       */

    }, {
      key: "onFileRename",
      value: function onFileRename(file, newFile) {}
      /**
       * 文件错误回调
       * @param error {Object} 错误信息
       */

    }, {
      key: "onError",
      value: function onError(error) {}
      /**
      * 当文件开始上传时回调
      * @param file {FileInfo} - 开始上传的文件
      */

    }, {
      key: "onStarted",
      value: function onStarted(file) {}
      /**
       * 当收到文件进度时回调
       * @param file {FileInfo} - 收到进度信息的文件
       * @param processed {Number} - 已完成的字节数
       * @param total {Number} - 文件总字节数
       */

    }, {
      key: "onProgress",
      value: function onProgress(file, processed, total) {}
      /**
       * 当文件上传完成时回调
       * @param file {FileInfo} - 上传完成的文件
       */

    }, {
      key: "onCompleted",
      value: function onCompleted(file) {}
      /**
       * 当文件取消上传时完成
       * @param file {FileInfo} - 取消上传的文件
       */

    }, {
      key: "onCanceled",
      value: function onCanceled(file) {}
    }]);

    return FileManagerListener;
  }(_Listener2.Listener);

  _exports.FileManagerListener = FileManagerListener;
});

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(100);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(62);

__webpack_require__(64);

__webpack_require__(141);

__webpack_require__(195);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(274), __webpack_require__(275), __webpack_require__(279)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _DBFile, _FileInfo, _FileStatusListener) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DBFileManagerService = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var DB = window.CubeCore.DB;

  var DBFileManagerService =
  /*#__PURE__*/
  function () {
    function DBFileManagerService(engine) {
      _classCallCheck(this, DBFileManagerService);

      this.engine = engine;
      this.dbm = null;
    }

    _createClass(DBFileManagerService, [{
      key: "startup",
      value: function startup() {
        this.dbm = this.engine.getDataBaseService();
        this.dbm.version = '5';
        this.dbm.toString = false;
        this.dbm.loadEntity(_DBFile.CubeDBFile);
        this.dbm.open('CubeFileManagerDataBase_' + this.engine.accName, function () {});
      }
    }, {
      key: "shutdown",
      value: function shutdown() {
        if (this.dbm) {
          this.dbm.close(function () {});
        }

        this.dbm = null;
      }
    }, {
      key: "storageFileInfo",
      value: function storageFileInfo(fileInfo, offline) {
        var self = this;

        if (!this.dbm && !offline) {
          return;
        }

        var task = function task() {
          var parentId = fileInfo.parentId ? fileInfo.parentId : null;
          var entity = new _DBFile.CubeDBFile(fileInfo.identifier, fileInfo.name, fileInfo.size, fileInfo.type, fileInfo.md5 ? fileInfo.md5 : null, fileInfo.identifier, fileInfo.fileId, fileInfo.status, fileInfo.blockCurrentChunk, fileInfo.blockChunks, fileInfo.sparkList, fileInfo.secondUpload, fileInfo.createTime, fileInfo.icon, fileInfo.permission, parentId, fileInfo.logContent, fileInfo.blockChunkSize, fileInfo.file.directoryPath, JSON.stringify(fileInfo.file), fileInfo.peer, fileInfo.groupTotal, fileInfo.isDown);
          self.dbm.setEntity(_DBFile.CubeDBFile, [entity], function (err) {});
        };

        if (this.engine.registered) {
          task();
        } else {
          this.offline(task);
        }
      }
    }, {
      key: "queryFileInfoById",
      value: function queryFileInfoById(id, callback) {
        var con = new DB.DBCondition();
        con.add('id', id);
        this.dbm.query(_DBFile.CubeDBFile, con, function (err, ret) {
          if (err) {
            callback && callback(err);
          } else {
            if (ret.length > 0) {
              // let fileInfo = new FileInfo(ret[0].name, ret[0].size, ret[0].type, ret[0].md5, ret[0].sn, ret[0].icon,
              //     ret[0].createTime, null, ret[0].permission, ret[0].status);
              // if (ret.parentId) {
              //     let parentFile = new FileInfo();
              //     parentFile.setSn(ret.parentId);
              //     fileInfo.setParent(parentFile);
              // }
              callback && callback(false, ret);
            } else {
              callback && callback(false, null);
            }
          }
        });
      }
    }, {
      key: "queryFileInfoByStatus",
      value: function queryFileInfoByStatus(status, callback) {
        var con = new DB.DBCondition();
        con.add('status', status);
        this.dbm.query(_DBFile.CubeDBFile, con, function (err, ret) {
          if (err) {
            callback && callback(err);
          } else {
            if (ret.length > 0) {
              var dateTime = Date.now(),
                  retList = [];
              ret.forEach(function (item) {
                if (dateTime - item.createTime < 180000 && item.peer) {
                  var fileInfo = new _FileInfo.FileInfo(item.identifier, item.name, item.size, item.type, item.md5, item.fileId, item.status, item.blockCurrentChunk, item.blockChunks, item.sparkList, item.createTime, item.icon, item.parentFileInfo, item.permission, item.blockChunkSize, JSON.parse(item.file), item.peer, item.groupTotal, item.isDown);
                  fileInfo.setListener(new _FileStatusListener.FileStatusListener());
                  retList.push(fileInfo);
                }
              });
              callback && callback(false, retList);
            } else {
              callback && callback(false, null);
            }
          }
        });
      }
    }, {
      key: "queryDownloadFileByStatus",
      value: function queryDownloadFileByStatus(status, callback) {
        var con = new DB.DBCondition();
        con.add('status', status);
        this.dbm.query(_DBFile.CubeDBFile, con, function (err, ret) {
          if (err) {
            callback && callback(err);
          } else {
            if (ret.length > 0) {
              var dateTime = Date.now(),
                  retList = [];
              ret.forEach(function (item) {
                if (dateTime - item.createTime < 180000 && item.isDown) {
                  var fileInfo = new _FileInfo.FileInfo(item.identifier, item.name, item.size, item.type, item.md5, item.fileId, item.status, item.blockCurrentChunk, item.blockChunks, item.sparkList, item.createTime, item.icon, item.parentFileInfo, item.permission, item.blockChunkSize, JSON.parse(item.file), item.peer, item.groupTotal, item.isDown);
                  retList.push(fileInfo);
                }
              });
              callback && callback(false, retList);
            } else {
              callback && callback(false, null);
            }
          }
        });
      }
    }, {
      key: "offline",
      value: function offline(task) {
        var _this = this;

        // 离线模式执行后 关闭
        this.startup(function () {
          task(function () {
            //2019.03.06如果是登录状态就不关闭数据库
            if (!_this.engine.registered) {
              _this.shutdown();
            }
          });
        });
      }
    }]);

    return DBFileManagerService;
  }();

  _exports.DBFileManagerService = DBFileManagerService;
});

/***/ }),
/* 274 */
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
  _exports.CubeDBFile = void 0;

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
   * 消息持久化表。
   *
   * @class CubeDBFile
   * @author Guan Yong
   *  id 
   *  name 文件名字
   *  size 文件大小
   *  type 
   *  md5 
   *  identifier 文件标识
   *  fileId  文件id
   *  status 文件状态 create:创建, pending:上传中,canceled:取消,paused:暂停,completed:完成 failed:失败
   *  blockCurrentChunk 当前分块上传成功的块数
   *  blockChunks 分块上传总块数
   *  createTime 创建时间
   *  icon
   *  permission
   *  parentId
   */
  var CubeDB = window.CubeCore.DB;

  var CubeDBFile =
  /*#__PURE__*/
  function (_CubeDB$DBEntity) {
    _inherits(CubeDBFile, _CubeDB$DBEntity);

    function CubeDBFile(id, name, size, type, md5, identifier, fileId, status, blockCurrentChunk, blockChunks, sparkList, secondUpload, createTime, icon, permission, parentId, logContent, blockChunkSize, directoryPath, file, peer, groupTotal, isDown, updateTime) {
      var _this;

      _classCallCheck(this, CubeDBFile);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CubeDBFile).call(this, id, 'CubeDBFile'));
      _this.name = name;
      _this.size = size;
      _this.type = type;
      _this.md5 = md5;
      _this.identifier = identifier;
      _this.fileId = fileId;
      _this.blockCurrentChunk = blockCurrentChunk;
      _this.blockChunks = blockChunks;
      _this.sparkList = sparkList;
      _this.secondUpload = secondUpload;
      _this.icon = icon ? icon : null;
      _this.createTime = createTime;
      _this.parentId = parentId ? parentId : null;
      _this.permission = permission ? permission : null;
      _this.status = status;
      _this.logContent = logContent;
      _this.blockChunkSize = blockChunkSize;
      _this.directoryPath = directoryPath;
      _this.file = file;
      _this.peer = peer;
      _this.groupTotal = groupTotal;
      _this.isDown = isDown ? isDown : true;
      _this.updateTime = updateTime;
      return _this;
    }

    _createClass(CubeDBFile, null, [{
      key: "onChange",
      value: function onChange(version, table) {
        try {
          if (version < 6) {
            table.append('identifier');
            table.append('fileId');
            table.append('blockCurrentChunk');
            table.append('blockChunks');
            table.append('sparkList');
            table.append('secondUpload');
            table.append('status');
            table.append('logContent');
            table.append('blockChunkSize');
            table.append('directoryPath');
            table.append('file');
            table.append('peer');
            table.append('groupTotal');
            table.append('isDown');
            table.append('updateTime');
          }
        } catch (e) {}
      }
    }]);

    return CubeDBFile;
  }(CubeDB.DBEntity);

  _exports.CubeDBFile = CubeDBFile;
});

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(212);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(64);

__webpack_require__(139);

__webpack_require__(67);

__webpack_require__(146);

__webpack_require__(69);

__webpack_require__(87);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(276), __webpack_require__(277)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _FileType, md5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.FileInfo = void 0;
  md5 = _interopRequireWildcard(md5);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /**
   * 文件信息实体
   *
   * @class FileInfo
   * @author Xu Jiangwei, Guan Yong
   */
  var FileInfo =
  /*#__PURE__*/
  function () {
    /**
     * @constructs FileInfo
     * @param [name] {String} - 文件名
     * @param [size] {Number} - 文件大小
     * @param [type] {FileType} - 文件类型
     * @param [md5] {String} - 文件MD5码
     * @param [identifier] {String} - 文件标识
     * @param [fileId] {String} - 文件id
     * @param [status] {String} - 文件状态create:创建, pending:上传中,canceled:取消,paused:暂停,completed:完成 failed:失败
     * @param [blockCurrentChunk] {Number} - 当前分块上传成功的块数
     * @param [blockChunks] {Number} -  分块上传总块数
     * @param [icon] {String} - 文件ICON图标
     * @param [createTime] {Number} - 文件创建时间
     * @param [parentFileInfo] {FileInfo} - 父目录对象
     * @param [permission] {FilePermission} - 文件权限
     */
    function FileInfo(identifier, name, size, type, md5, fileId, status, blockCurrentChunk, blockChunks, sparkList, createTime, icon, parentFileInfo, permission, blockChunkSize) {
      var file = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : {};
      var peer = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : '';
      var groupTotal = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : null;
      var isDown = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : false;

      _classCallCheck(this, FileInfo);

      this.name = name;
      this.size = size;
      this.type = type;
      this.md5 = md5;
      this.identifier = identifier ? identifier : Date.now();
      this.fileId = fileId;
      this.status = status ? status : 'create';
      this.secondUpload = false;
      this.blockCurrentChunk = blockCurrentChunk ? blockCurrentChunk : 0;
      this.blockChunks = blockChunks ? blockChunks : 0;
      this.blockChunkSize = blockChunkSize ? blockChunkSize : 1048576;
      this.sparkList = sparkList ? sparkList : [];
      this.createTime = createTime ? createTime : Date.now();
      this.icon = icon;
      this.parentFileInfo = parentFileInfo;
      this.permission = permission;
      this.accept = '';
      /* 存放form表单的元素ID */

      this.domId = null;
      /**
       * 用于以FormData方式发送表单的File对象
       * 用于以FormData方式发送表单的File对象
       * @type File
       */

      this.formFile = null;
      /** 
      * 自定义发送方法。
      * 如果该方法被重写, 在发送此消息时该方法被调用, 且引擎不会 POST 数据到引擎服务器。
      *
      * @type {customPrePostMethod}
      */

      this.customUploadPostMethod = null;
      this.customUploadPostParam = {};
      this.file = file;
      this.peer = peer;
      this.groupTotal = groupTotal;
      this.isDown = isDown;
    }
    /**
     * 设置文件
     * @param file {HTMLElement} 存放文件的input file DOM节点
     */


    _createClass(FileInfo, [{
      key: "setFile",
      value: function setFile(file) {
        if (file instanceof HTMLElement && undefined !== file.files) {
          this.file = file;

          if (null == this.name) {
            this.name = file.files[0].name;
          }

          this.size = file.files[0].size;
        } else {
          throw new Error('FileInfo#setFile Must be a input file HTMLElement.');
        }
      }
      /**
       * 获取文件
       * @returns {HTMLElement} 获取文件的input file DOM节点
       */

    }, {
      key: "getFile",
      value: function getFile() {
        return this.file;
      }
      /**
       * 设置文件名称
       * @param name {String} - 文件名称
       */

    }, {
      key: "setName",
      value: function setName(name) {
        this.name = name;
      }
      /**
       * 获取文件名称
       * @returns {String} - 文件名称
       */

    }, {
      key: "getName",
      value: function getName() {
        return this.name;
      }
      /**
       * 设置文件大小
       * @param size {Number} - 文件大小
       */

    }, {
      key: "setSize",
      value: function setSize(size) {
        this.size = size;
      }
      /**
       * 获取文件大小
       * @returns {Number} - 文件大小
       */

    }, {
      key: "getSize",
      value: function getSize() {
        return this.size;
      }
      /**
       * 设置文件类型
       * @param type {FileType} - 文件类型
       */

    }, {
      key: "setType",
      value: function setType(type) {
        this.type = type;
      }
      /**
       * 获取文件类型
       * @returns {FileType} - 文件类型
       */

    }, {
      key: "getType",
      value: function getType() {
        if (!this.type) {
          var sf = this.name.split('.');

          if (sf.length > 0) {
            var sfArr = sf[sf.length - 1];

            if (sfArr === '') {
              // 返回文件夹类型
              this.type = _FileType.FileType.Folder;
            } else if (sfArr === 'png' || sfArr === 'jpeg' || sfArr === 'jpg' || sfArr === 'gif') {
              // 返回图片类型
              this.type = _FileType.FileType.Image;
            } else if (sfArr === 'doc' || sfArr === 'docx') {
              // 返回文档类型
              this.type = _FileType.FileType.Word;
            } else if (sfArr === 'mp3' || sfArr === 'wma' || sfArr === 'wav') {
              // 返回音频类型
              this.type = _FileType.FileType.Audio;
            } else if (sfArr === 'avi' || sfArr === 'rmvb' || sfArr === 'rm') {
              // 返回视频类型
              this.type = _FileType.FileType.Video;
            } else if (sfArr === 'exe' || sfArr === 'com' || sfArr === 'app') {
              // 返回应用类型
              this.type = _FileType.FileType.App;
            } else if (sfArr === 'rar' || sfArr === 'zip') {
              // 返回压缩类型
              this.type = _FileType.FileType.Zip;
            } else {
              this.type = _FileType.FileType.Other;
            }
          }
        }

        return this.type;
      }
      /**
       * 设置MD5码
       * @param md5 {String} - MD5码
       */

    }, {
      key: "setMd5",
      value: function setMd5(md5) {
        this.md5 = md5;
      }
      /**
       * 获取MD5码
       * @returns {String} - MD5码
       */

    }, {
      key: "getMd5",
      value: function getMd5() {
        return this.md5;
      }
      /**
       * 设置identifier
       * @param identifier {String} - snidentifier文件标识
       */

    }, {
      key: "setIdentifier",
      value: function setIdentifier(identifier) {
        this.identifier = identifier;
      }
      /**
       * 获取SN
       * @returns {String} - sn
       */

    }, {
      key: "getIdentifier",
      value: function getIdentifier() {
        return this.identifier;
      }
      /**
       * 设置ICON
       * @param icon {String} - icon路径
       */

    }, {
      key: "setIcon",
      value: function setIcon(icon) {
        this.icon = icon;
      }
      /**
       * 获取ICON
       * @returns {String} - icon路径
       */

    }, {
      key: "getIcon",
      value: function getIcon() {
        return this.icon;
      }
      /**
       * 设置创建时间
       * @param createTime {Number} - 创建时间戳
       */

    }, {
      key: "setCreateTime",
      value: function setCreateTime(createTime) {
        this.createTime = createTime;
      }
      /**
       * 获取创建时间
       * @returns {Number} - 创建时间戳
       */

    }, {
      key: "getCreateTime",
      value: function getCreateTime() {
        return this.createTime;
      }
      /**
       * 设置父级目录
       * @param parentFileInfo {FileInfo} - 父级目录
       */

    }, {
      key: "setParent",
      value: function setParent(parentFileInfo) {
        this.parentFileInfo = parentFileInfo;
      }
      /**
       * 获取父级目录
       * @returns {FileInfo} - 父级目录
       */

    }, {
      key: "getParent",
      value: function getParent() {
        return this.parentFileInfo;
      }
      /**
       * 设置文件权限
       * @param permission {FilePermission} - 权限
       */

    }, {
      key: "setPermission",
      value: function setPermission(permission) {
        this.permission = permission;
      }
      /**
       * 获取父级目录
       * @returns {FilePermission} - 父级目录
       */

    }, {
      key: "getPermission",
      value: function getPermission() {
        return this.permission;
      }
      /**
       * 设置状态监听器
       * @param listener {FileStatusListener} - 状态监听器
       */

    }, {
      key: "setListener",
      value: function setListener(listener) {
        this.listener = listener;
      }
      /**
       * 获取状态监听器
       * @returns {FileStatusListener} - 状态监听器
       */

    }, {
      key: "getListener",
      value: function getListener() {
        return this.listener;
      }
      /**
       * 设置状态
       */

    }, {
      key: "setStatus",
      value: function setStatus(status) {
        this.status = status;
      }
      /**
       * 获取状态
       */

    }, {
      key: "getStatus",
      value: function getStatus() {
        return this.Status;
      }
    }, {
      key: "setfileInfo",
      value: function setfileInfo(fileInfo) {
        this.fileInfo = fileInfo;
      }
    }, {
      key: "getFileInfo",
      value: function getFileInfo() {
        return this.fileInfo;
      }
      /**
      * @typedef FileInfo
      * @type {Object}
      * @property {String} name - 文件名。
      * @property {Number} size - 文件的大小，单位：字节。
      * @property {Number} modified - 绝对时间形式的文件的最后修改时间。
      * @property {String} url - 文件的访问 URL 。
      */

      /**
       * 打开一个文件对话框选择需要发送的文件。
       *
       * @param {(Function | null)} fn - 选择成功后回调函数。
       */

    }, {
      key: "chooseFile",
      value: function chooseFile(fn) {
        var self = this;

        var el = this._buildForm();

        el.onchange = function () {
          if (el.files != null && el.files.length > 0) {
            var file = el.files[0];
            self.formFile = file;
            self.calculate(file, function (md5) {
              self.name = file.name;
              self.size = file.size;
              self.md5 = md5;
              self.file = {
                modified: 0,
                name: file.name,
                size: file.size,
                md5: md5
              };

              if (null != fn) {
                fn(file, el);
              }
            });
          }
        };

        el.click();
      } // 创建文件操作的 Form

    }, {
      key: "_buildForm",
      value: function _buildForm() {
        // 生成表单ID
        this.domId = '_cube_file_msg_' + this.customData;
        var container = document.createElement('div');
        container.id = this.domId;
        container.style.display = 'none';
        container.innerHTML = '<form id="_form' + this.domId + '" method="POST" enctype="multipart/form-data" target="_frame' + this.domId + '">' + '<input type="hidden" name="size" value=""/>' + '<input type="hidden" name="md5" value=""/>' + '<input type="file" name="file" accept="' + this.accept + '"/>' + '</form>' + '<iframe name="_frame' + this.domId + '"></iframe>';
        document.body.appendChild(container);
        return container.getElementsByTagName("input")[2];
      }
    }, {
      key: "calculate",
      value: function calculate(file, callback) {
        var fileReader = new FileReader(),
            blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,
            chunkSize = 2097152,
            // read in chunks of 2MB
        chunks = Math.ceil(file.size / chunkSize),
            currentChunk = 0,
            spark = new md5["default"]();

        fileReader.onload = function (e) {
          spark.appendBinary(e.target.result); // append binary string

          currentChunk++;

          if (currentChunk < chunks) {
            loadNext();
          } else {
            callback(spark.end());
          }
        };

        function loadNext() {
          var start = currentChunk * chunkSize,
              end = start + chunkSize >= file.size ? file.size : start + chunkSize;
          fileReader.readAsBinaryString(blobSlice.call(file, start, end));
        }

        ;
        loadNext();
      }
      /*
      * 获取文件表单信息（用于发送给服务器的表单数据）
      * @private
      * @returns {{data: {tracker: string, type: *, name: *, file: null}, action: *}}
      */

    }, {
      key: "_getFileFormInfo",
      value: function _getFileFormInfo() {
        return this.customPrePostParam;
      }
      /**
       * 解析文件
       * */

    }], [{
      key: "parse",
      value: function parse(strJson) {
        if (null == strJson || _typeof(strJson) != 'object') {
          window.nucleus.getLogger().e('CubeFileInfo#parse', 'Error of parameters');
        }

        var fileInfo = new FileInfo();

        for (var item in strJson) {
          if (fileInfo.hasOwnProperty(item)) {
            fileInfo[item] = strJson[item];
          }
        }

        fileInfo.getType();
        return fileInfo;
      }
    }]);

    return FileInfo;
  }();

  _exports.FileInfo = FileInfo;
});

/***/ }),
/* 276 */
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
  _exports.FileType = void 0;

  /**
   * 文件类型枚举。
   *
   * @readonly
   * @enum {Number}
   * @author Xu Jiangwei, Guan Yong
   */
  var FileType = {
    /** 应用。 */
    App: 15,

    /** 音频。 */
    Audio: 14,

    /** 文件。 */
    File: 99,

    /** 目录。 */
    Folder: 1,

    /** 图片。 */
    Image: 11,

    /** 视频。 */
    Video: 13,

    /** 白板。 */
    Whiteboard: 20,

    /** 文档。 */
    Word: 12,

    /** 压缩文件。 */
    Zip: 16,

    /** 其它。 */
    Other: 100
  };
  _exports.FileType = FileType;
});

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(107);

__webpack_require__(212);

__webpack_require__(278);

__webpack_require__(110);

__webpack_require__(117);

__webpack_require__(64);

__webpack_require__(132);

__webpack_require__(139);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(227);

__webpack_require__(147);

__webpack_require__(152);

__webpack_require__(154);

__webpack_require__(155);

__webpack_require__(156);

__webpack_require__(157);

__webpack_require__(158);

__webpack_require__(159);

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

__webpack_require__(89);

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

  (function (factory) {
    if (( false ? undefined : _typeof(exports)) === "object") {
      module.exports = factory();
    } else if (true) {
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var glob; }
  })(function (undefined) {
    "use strict";

    var add32 = function add32(a, b) {
      return a + b & 4294967295;
    },
        hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
      a = add32(add32(a, q), add32(x, t));
      return add32(a << s | a >>> 32 - s, b);
    }

    function md5cycle(x, k) {
      var a = x[0],
          b = x[1],
          c = x[2],
          d = x[3];
      a += (b & c | ~b & d) + k[0] - 680876936 | 0;
      a = (a << 7 | a >>> 25) + b | 0;
      d += (a & b | ~a & c) + k[1] - 389564586 | 0;
      d = (d << 12 | d >>> 20) + a | 0;
      c += (d & a | ~d & b) + k[2] + 606105819 | 0;
      c = (c << 17 | c >>> 15) + d | 0;
      b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
      b = (b << 22 | b >>> 10) + c | 0;
      a += (b & c | ~b & d) + k[4] - 176418897 | 0;
      a = (a << 7 | a >>> 25) + b | 0;
      d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
      d = (d << 12 | d >>> 20) + a | 0;
      c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
      c = (c << 17 | c >>> 15) + d | 0;
      b += (c & d | ~c & a) + k[7] - 45705983 | 0;
      b = (b << 22 | b >>> 10) + c | 0;
      a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
      a = (a << 7 | a >>> 25) + b | 0;
      d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
      d = (d << 12 | d >>> 20) + a | 0;
      c += (d & a | ~d & b) + k[10] - 42063 | 0;
      c = (c << 17 | c >>> 15) + d | 0;
      b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
      b = (b << 22 | b >>> 10) + c | 0;
      a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
      a = (a << 7 | a >>> 25) + b | 0;
      d += (a & b | ~a & c) + k[13] - 40341101 | 0;
      d = (d << 12 | d >>> 20) + a | 0;
      c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
      c = (c << 17 | c >>> 15) + d | 0;
      b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
      b = (b << 22 | b >>> 10) + c | 0;
      a += (b & d | c & ~d) + k[1] - 165796510 | 0;
      a = (a << 5 | a >>> 27) + b | 0;
      d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
      d = (d << 9 | d >>> 23) + a | 0;
      c += (d & b | a & ~b) + k[11] + 643717713 | 0;
      c = (c << 14 | c >>> 18) + d | 0;
      b += (c & a | d & ~a) + k[0] - 373897302 | 0;
      b = (b << 20 | b >>> 12) + c | 0;
      a += (b & d | c & ~d) + k[5] - 701558691 | 0;
      a = (a << 5 | a >>> 27) + b | 0;
      d += (a & c | b & ~c) + k[10] + 38016083 | 0;
      d = (d << 9 | d >>> 23) + a | 0;
      c += (d & b | a & ~b) + k[15] - 660478335 | 0;
      c = (c << 14 | c >>> 18) + d | 0;
      b += (c & a | d & ~a) + k[4] - 405537848 | 0;
      b = (b << 20 | b >>> 12) + c | 0;
      a += (b & d | c & ~d) + k[9] + 568446438 | 0;
      a = (a << 5 | a >>> 27) + b | 0;
      d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
      d = (d << 9 | d >>> 23) + a | 0;
      c += (d & b | a & ~b) + k[3] - 187363961 | 0;
      c = (c << 14 | c >>> 18) + d | 0;
      b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
      b = (b << 20 | b >>> 12) + c | 0;
      a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
      a = (a << 5 | a >>> 27) + b | 0;
      d += (a & c | b & ~c) + k[2] - 51403784 | 0;
      d = (d << 9 | d >>> 23) + a | 0;
      c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
      c = (c << 14 | c >>> 18) + d | 0;
      b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
      b = (b << 20 | b >>> 12) + c | 0;
      a += (b ^ c ^ d) + k[5] - 378558 | 0;
      a = (a << 4 | a >>> 28) + b | 0;
      d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
      d = (d << 11 | d >>> 21) + a | 0;
      c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
      c = (c << 16 | c >>> 16) + d | 0;
      b += (c ^ d ^ a) + k[14] - 35309556 | 0;
      b = (b << 23 | b >>> 9) + c | 0;
      a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
      a = (a << 4 | a >>> 28) + b | 0;
      d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
      d = (d << 11 | d >>> 21) + a | 0;
      c += (d ^ a ^ b) + k[7] - 155497632 | 0;
      c = (c << 16 | c >>> 16) + d | 0;
      b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
      b = (b << 23 | b >>> 9) + c | 0;
      a += (b ^ c ^ d) + k[13] + 681279174 | 0;
      a = (a << 4 | a >>> 28) + b | 0;
      d += (a ^ b ^ c) + k[0] - 358537222 | 0;
      d = (d << 11 | d >>> 21) + a | 0;
      c += (d ^ a ^ b) + k[3] - 722521979 | 0;
      c = (c << 16 | c >>> 16) + d | 0;
      b += (c ^ d ^ a) + k[6] + 76029189 | 0;
      b = (b << 23 | b >>> 9) + c | 0;
      a += (b ^ c ^ d) + k[9] - 640364487 | 0;
      a = (a << 4 | a >>> 28) + b | 0;
      d += (a ^ b ^ c) + k[12] - 421815835 | 0;
      d = (d << 11 | d >>> 21) + a | 0;
      c += (d ^ a ^ b) + k[15] + 530742520 | 0;
      c = (c << 16 | c >>> 16) + d | 0;
      b += (c ^ d ^ a) + k[2] - 995338651 | 0;
      b = (b << 23 | b >>> 9) + c | 0;
      a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
      a = (a << 6 | a >>> 26) + b | 0;
      d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
      d = (d << 10 | d >>> 22) + a | 0;
      c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
      c = (c << 15 | c >>> 17) + d | 0;
      b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
      b = (b << 21 | b >>> 11) + c | 0;
      a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
      a = (a << 6 | a >>> 26) + b | 0;
      d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
      d = (d << 10 | d >>> 22) + a | 0;
      c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
      c = (c << 15 | c >>> 17) + d | 0;
      b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
      b = (b << 21 | b >>> 11) + c | 0;
      a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
      a = (a << 6 | a >>> 26) + b | 0;
      d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
      d = (d << 10 | d >>> 22) + a | 0;
      c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
      c = (c << 15 | c >>> 17) + d | 0;
      b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
      b = (b << 21 | b >>> 11) + c | 0;
      a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
      a = (a << 6 | a >>> 26) + b | 0;
      d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
      d = (d << 10 | d >>> 22) + a | 0;
      c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
      c = (c << 15 | c >>> 17) + d | 0;
      b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
      b = (b << 21 | b >>> 11) + c | 0;
      x[0] = a + x[0] | 0;
      x[1] = b + x[1] | 0;
      x[2] = c + x[2] | 0;
      x[3] = d + x[3] | 0;
    }

    function md5blk(s) {
      var md5blks = [],
          i;

      for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
      }

      return md5blks;
    }

    function md5blk_array(a) {
      var md5blks = [],
          i;

      for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
      }

      return md5blks;
    }

    function md51(s) {
      var n = s.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;

      for (i = 64; i <= n; i += 64) {
        md5cycle(state, md5blk(s.substring(i - 64, i)));
      }

      s = s.substring(i - 64);
      length = s.length;
      tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
      }

      tail[i >> 2] |= 128 << (i % 4 << 3);

      if (i > 55) {
        md5cycle(state, tail);

        for (i = 0; i < 16; i += 1) {
          tail[i] = 0;
        }
      }

      tmp = n * 8;
      tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
      lo = parseInt(tmp[2], 16);
      hi = parseInt(tmp[1], 16) || 0;
      tail[14] = lo;
      tail[15] = hi;
      md5cycle(state, tail);
      return state;
    }

    function md51_array(a) {
      var n = a.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;

      for (i = 64; i <= n; i += 64) {
        md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
      }

      a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
      length = a.length;
      tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= a[i] << (i % 4 << 3);
      }

      tail[i >> 2] |= 128 << (i % 4 << 3);

      if (i > 55) {
        md5cycle(state, tail);

        for (i = 0; i < 16; i += 1) {
          tail[i] = 0;
        }
      }

      tmp = n * 8;
      tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
      lo = parseInt(tmp[2], 16);
      hi = parseInt(tmp[1], 16) || 0;
      tail[14] = lo;
      tail[15] = hi;
      md5cycle(state, tail);
      return state;
    }

    function rhex(n) {
      var s = "",
          j;

      for (j = 0; j < 4; j += 1) {
        s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
      }

      return s;
    }

    function hex(x) {
      var i;

      for (i = 0; i < x.length; i += 1) {
        x[i] = rhex(x[i]);
      }

      return x.join("");
    }

    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
      add32 = function add32(x, y) {
        var lsw = (x & 65535) + (y & 65535),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 65535;
      };
    }

    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
      (function () {
        function clamp(val, length) {
          val = val | 0 || 0;

          if (val < 0) {
            return Math.max(val + length, 0);
          }

          return Math.min(val, length);
        }

        ArrayBuffer.prototype.slice = function (from, to) {
          var length = this.byteLength,
              begin = clamp(from, length),
              end = length,
              num,
              target,
              targetArray,
              sourceArray;

          if (to !== undefined) {
            end = clamp(to, length);
          }

          if (begin > end) {
            return new ArrayBuffer(0);
          }

          num = end - begin;
          target = new ArrayBuffer(num);
          targetArray = new Uint8Array(target);
          sourceArray = new Uint8Array(this, begin, num);
          targetArray.set(sourceArray);
          return target;
        };
      })();
    }

    function toUtf8(str) {
      if (/[\u0080-\uFFFF]/.test(str)) {
        str = unescape(encodeURIComponent(str));
      }

      return str;
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
      var length = str.length,
          buff = new ArrayBuffer(length),
          arr = new Uint8Array(buff),
          i;

      for (i = 0; i < length; i += 1) {
        arr[i] = str.charCodeAt(i);
      }

      return returnUInt8Array ? arr : buff;
    }

    function arrayBuffer2Utf8Str(buff) {
      return String.fromCharCode.apply(null, new Uint8Array(buff));
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
      var result = new Uint8Array(first.byteLength + second.byteLength);
      result.set(new Uint8Array(first));
      result.set(new Uint8Array(second), first.byteLength);
      return returnUInt8Array ? result : result.buffer;
    }

    function hexToBinaryString(hex) {
      var bytes = [],
          length = hex.length,
          x;

      for (x = 0; x < length - 1; x += 2) {
        bytes.push(parseInt(hex.substr(x, 2), 16));
      }

      return String.fromCharCode.apply(String, bytes);
    }

    function SparkMD5() {
      this.reset();
    }

    SparkMD5.prototype.append = function (str) {
      this.appendBinary(toUtf8(str));
      return this;
    };

    SparkMD5.prototype.appendBinary = function (contents) {
      this._buff += contents;
      this._length += contents.length;
      var length = this._buff.length,
          i;

      for (i = 64; i <= length; i += 64) {
        md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
      }

      this._buff = this._buff.substring(i - 64);
      return this;
    };

    SparkMD5.prototype.end = function (raw) {
      var buff = this._buff,
          length = buff.length,
          i,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ret;

      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
      }

      this._finish(tail, length);

      ret = hex(this._hash);

      if (raw) {
        ret = hexToBinaryString(ret);
      }

      this.reset();
      return ret;
    };

    SparkMD5.prototype.reset = function () {
      this._buff = "";
      this._length = 0;
      this._hash = [1732584193, -271733879, -1732584194, 271733878];
      return this;
    };

    SparkMD5.prototype.getState = function () {
      return {
        buff: this._buff,
        length: this._length,
        hash: this._hash
      };
    };

    SparkMD5.prototype.setState = function (state) {
      this._buff = state.buff;
      this._length = state.length;
      this._hash = state.hash;
      return this;
    };

    SparkMD5.prototype.destroy = function () {
      delete this._hash;
      delete this._buff;
      delete this._length;
    };

    SparkMD5.prototype._finish = function (tail, length) {
      var i = length,
          tmp,
          lo,
          hi;
      tail[i >> 2] |= 128 << (i % 4 << 3);

      if (i > 55) {
        md5cycle(this._hash, tail);

        for (i = 0; i < 16; i += 1) {
          tail[i] = 0;
        }
      }

      tmp = this._length * 8;
      tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
      lo = parseInt(tmp[2], 16);
      hi = parseInt(tmp[1], 16) || 0;
      tail[14] = lo;
      tail[15] = hi;
      md5cycle(this._hash, tail);
    };

    SparkMD5.hash = function (str, raw) {
      return SparkMD5.hashBinary(toUtf8(str), raw);
    };

    SparkMD5.hashBinary = function (content, raw) {
      var hash = md51(content),
          ret = hex(hash);
      return raw ? hexToBinaryString(ret) : ret;
    };

    SparkMD5.ArrayBuffer = function () {
      this.reset();
    };

    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
      var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
          length = buff.length,
          i;
      this._length += arr.byteLength;

      for (i = 64; i <= length; i += 64) {
        md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
      }

      this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
      return this;
    };

    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
      var buff = this._buff,
          length = buff.length,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          i,
          ret;

      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= buff[i] << (i % 4 << 3);
      }

      this._finish(tail, length);

      ret = hex(this._hash);

      if (raw) {
        ret = hexToBinaryString(ret);
      }

      this.reset();
      return ret;
    };

    SparkMD5.ArrayBuffer.prototype.reset = function () {
      this._buff = new Uint8Array(0);
      this._length = 0;
      this._hash = [1732584193, -271733879, -1732584194, 271733878];
      return this;
    };

    SparkMD5.ArrayBuffer.prototype.getState = function () {
      var state = SparkMD5.prototype.getState.call(this);
      state.buff = arrayBuffer2Utf8Str(state.buff);
      return state;
    };

    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
      state.buff = utf8Str2ArrayBuffer(state.buff, true);
      return SparkMD5.prototype.setState.call(this, state);
    };

    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
      var hash = md51_array(new Uint8Array(arr)),
          ret = hex(hash);
      return raw ? hexToBinaryString(ret) : ret;
    };

    return SparkMD5;
  });
});

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var global = __webpack_require__(9);
var arrayBufferModule = __webpack_require__(111);
var setSpecies = __webpack_require__(124);

var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = global[ARRAY_BUFFER];

// `ArrayBuffer` constructor
// https://tc39.github.io/ecma262/#sec-arraybuffer-constructor
$({ global: true, forced: NativeArrayBuffer !== ArrayBuffer }, {
  ArrayBuffer: ArrayBuffer
});

setSpecies(ARRAY_BUFFER);


/***/ }),
/* 279 */
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
  _exports.FileStatusListener = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var FileStatusListener =
  /*#__PURE__*/
  function (_Listener) {
    _inherits(FileStatusListener, _Listener);

    function FileStatusListener() {
      _classCallCheck(this, FileStatusListener);

      return _possibleConstructorReturn(this, _getPrototypeOf(FileStatusListener).apply(this, arguments));
    }

    _createClass(FileStatusListener, [{
      key: "onStarted",

      /**
       * 当文件开始上传时回调
       * @param file {FileInfo} - 开始上传的文件
       */
      value: function onStarted(file) {}
      /**
       * 当收到文件进度时回调
       * @param file {FileInfo} - 收到进度信息的文件
       * @param processed {Number} - 已完成的字节数
       * @param total {Number} - 文件总字节数
       */

    }, {
      key: "onProgress",
      value: function onProgress(file, processed, total) {}
      /**
       * 当文件上传完成时回调
       * @param file {FileInfo} - 上传完成的文件
       */

    }, {
      key: "onCompleted",
      value: function onCompleted(file) {}
      /**
       * 当文件取消上传时完成
       * @param file {FileInfo} - 取消上传的文件
       */

    }, {
      key: "onCanceled",
      value: function onCanceled(file) {}
      /**
       * 当文件暂停上传时完成
       * @param file {FileInfo} - 暂停上传的文件
       */

    }, {
      key: "onPause",
      value: function onPause(file) {}
      /**
       * 当文件失败时回调
       * @param error {Object} - 错误信息
       */

    }, {
      key: "onFail",
      value: function onFail(error) {}
    }]);

    return FileStatusListener;
  }(_Listener2.Listener);

  _exports.FileStatusListener = FileStatusListener;
});

/***/ }),
/* 280 */
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
  _exports.FileManagerService = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var FileManagerService =
  /*#__PURE__*/
  function (_Service) {
    _inherits(FileManagerService, _Service);

    function FileManagerService() {
      _classCallCheck(this, FileManagerService);

      return _possibleConstructorReturn(this, _getPrototypeOf(FileManagerService).apply(this, arguments));
    }

    _createClass(FileManagerService, [{
      key: "upload",

      /**
       * 上传文件
       * @param identifier {FileInfoSn} - 需要取消上传的文件的唯一标识
       * @param file {FileInfo} - 需要上传的文件
       * @param parentFile {FileInfo|String} - 文件的上级目录或文件夹名称
       */
      value: function upload(identifier, file, parentFile) {}
      /**
       * 获取上传中的文件
       */

    }, {
      key: "getUploadProcessFiles",
      value: function getUploadProcessFiles() {}
      /**
       * 取消上传
       * @param identifier {FileInfoSn} - 需要取消上传的文件的唯一标识
       * @param file {FileInfo} - 需要取消上传的文件
       * @returns {Boolean} - 返回取消动作是否成功发送(不同于取消成功, 取消成功详见 {@link FileStatusListener#onCanceled})
       */

    }, {
      key: "cancelUpload",
      value: function cancelUpload(identifier) {}
      /**
       * 暂停上传
       * @param identifier {FileInfoSn} - 文件的唯一标识
       * @TODO 验证中
       */

    }, {
      key: "pauseUpload",
      value: function pauseUpload(identifier) {}
      /**
       * 继续上传
       * @param identifier {FileInfoSn} - 文件的唯一标识
       * @TODO 验证中
       */

    }, {
      key: "resumeUpload",
      value: function resumeUpload(identifier) {}
      /**
       * 下载文件
       * @param identifier {FileInfoSn} - 文件的唯一标识
       * @param url {FileInfoUrl} - 文件下载地址
       */

    }, {
      key: "download",
      value: function download(identifier, url) {}
      /**
       * 获取文件下载地址
       * @param file {FileInfo} - 需要下载的文件
       * @returns {String} - 下载地址
       */

    }, {
      key: "getDownloadUrl",
      value: function getDownloadUrl(file) {}
      /**
       * 删除文件
       * @param files {FileInfo} - 需要删除的文件
       */

    }, {
      key: "del",
      value: function del(files) {}
      /**
       * 复制文件
       * @param file {FileInfo} - 需要复制的文件
       * @param newFile {FileInfo} - 复制后的文件
       * @TODO 开发中
       */

    }, {
      key: "copy",
      value: function copy(file, newFile) {}
      /**
       * 移动文件
       * @param file {FileInfo} - 需要移动的文件
       * @param parentFile {FileInfo} - 移动后文件所在目录
       */

    }, {
      key: "move",
      value: function move(file, parentFile) {}
      /**
       * 重命名
       * @param file {FileInfo} - 需要重命名的文件
       * @param newFile {FileInfo} - 重命名后的文件
       */

    }, {
      key: "rename",
      value: function rename(file, newFile) {}
      /**
       * 创建目录
       * @param dir {String} - 目录名称
       * @param parentFile {FileInfo} - 父目录
       */

    }, {
      key: "mkdir",
      value: function mkdir(dir, parentFile) {}
      /**
       * 查找文件
       * @param name {String} - 需要搜索的文件名称
       * @TODO 开发中
       */

    }, {
      key: "search",
      value: function search(name) {}
      /**
       * 根据目录获取该目录下的文件列表信息(含目录)
       * @param parentFile {FileInfo|null} - 需要获取的目录
       * @param callback {CubeFileListCallback} - 数据回调
       */

    }, {
      key: "list",
      value: function list(parentFile, callback) {}
      /**
       * This is a description of the callback function
       * @callback CubeFileListCallback
       * @param files {Array<FileInfo>} - 获取到的文件列表
       */

      /**
       * 设置访问Token
       * @param token {String} - 需要设置的Token
       * @TODO 开发中
       */

    }, {
      key: "setAccessToken",
      value: function setAccessToken(token) {}
      /**
       * 分享文件给其它用户
       * @param file {FileInfo} - 需要分享的文件
       * @param cube {String} - 被分享人的Cube号
       * @param callback {CubeShareFileCallback} - 分享回调
       */

    }, {
      key: "share",
      value: function share(file, cube, callback) {}
      /**
       * This is a description of the callback function
       * @callback CubeShareFileCallback
       * @param error {{Code: {Number}} | null} - 是否发生错误
       */

      /**
       * 保存文件
       * @param sn {String} 需要保存的文件的sn
       * @param name {String} 保存后的文件名
       * @param parentSN {String | Number | null} 需要保存到目录的sn(传入空或0则代表根目录)
       * @param callback {CubeSaveFileCallback} - 保存回调
       */

    }, {
      key: "save",
      value: function save(sn, name, parentSN, callback) {}
      /**
       * This is a description of the callback function
       * @callback CubeSaveFileCallback
       * @param error {{Code: {Number}} | null} - 是否发生错误
       */

      /**
       * 根据sn查询文件
       * @param sn {String} 需要保存的文件的sn
       * @param callback {CubeQueryFileCallback} - 查询回调
       */

    }, {
      key: "queryBySN",
      value: function queryBySN(sn, callback) {}
      /**
       * This is a description of the callback function
       * @callback CubeQueryFileCallback
       * @param error {{Code: {Number}} | null} - 是否发生错误
       * @param files {FileInfo | null} - 获取到的文件信息
       */

      /**
       * 暂停下载文件
       *
       * @param identifier
       */

    }, {
      key: "pauseDownload",
      value: function pauseDownload(identifier) {}
      /**
       * 恢复下载文件
       *
       * @param identifier
       */

    }, {
      key: "resumeDownload",
      value: function resumeDownload(identifier) {}
      /**
       * 取消下载
       *
       * @param identifier
       */

    }, {
      key: "cancelDownload",
      value: function cancelDownload(identifier) {}
    }]);

    return FileManagerService;
  }(_Service2.Service);

  _exports.FileManagerService = FileManagerService;
});

/***/ }),
/* 281 */
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
  _exports.FileAction = void 0;

  /**
  * 文件数据动作枚举。
  *
  * @readonly
  * @enum {String}
  * @author Xu Jiangwei, Guan Yong
  */
  var FileAction = {
    GetToken: '/app/token',
    Uploader: '/file/uploader',
    UploaderPart: '/file/uploader/part',
    FileList: '/file/list',
    Mkdir: '/file/mkdir',
    DeleteFiles: '/file/delete/batch',
    CopyFile: '/file/copy',
    MoveFile: '/file/move',
    RenameFile: '/file/rename',
    DownloadFile: '/file/downloader',
    ShareFile: '/storage/sharing/message',
    SaveFile: '/file/new',
    FileInfo: '/file/info',
    searchFile: '/file/search',
    preCreateFile: '/v2.5/file/block/precreate',
    blockUpload: '/v2.5/file/block/upload',
    blockCreate: "/v2.5/file/block/create",
    blockCancel: '/v2.5/file/block/cancel'
  };
  _exports.FileAction = FileAction;
});

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(106);

__webpack_require__(1);

__webpack_require__(212);

__webpack_require__(120);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(64);

__webpack_require__(216);

__webpack_require__(67);

__webpack_require__(69);

__webpack_require__(87);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(283), __webpack_require__(277), __webpack_require__(236)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _runtime, md5, _Request) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  md5 = _interopRequireWildcard(md5);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var CellCloud = window.CellCloud;

  var _default =
  /*#__PURE__*/
  function () {
    function _default(domain) {
      _classCallCheck(this, _default);

      this.server = null;
      this.fileReader = new FileReader();
      this.spark = new md5["default"]();
      this.listener = null;
      this.completed = false; // 用来表示文件是否上传成功

      this.canceled = false; // 用来表示文件是否取消

      this.paused = false; // 用来表示文件是否暂停

      this.cancel = false; // 用来表示文件是否正在取消

      this.failed = false; //文件是否上传失败

      this.blockCurrentChunk = 0;
      this.blockChunks = 1;
      this.blockChunkSize = 1048576;
      this.sparkList = [];
      this.fileId = "";
      this.blockMd5 = "";
      this.currentChunk = 0; // read in chunks of 1MB

      this.chunkSize = 1048576;
      this.chunks = 1;
      this.secondUpload = false;
      this.blobSlice = null;
      this.file = null;
      this.formFile = null;
    } //错误处理


    _createClass(_default, [{
      key: "errorFn",
      value: function errorFn(file) {
        var self = this;
        self.file.status = "failed";
        self.listener.onFail(file);
        self.failed = true;
      }
    }, {
      key: "loadNext",
      value: function loadNext(file, callback) {
        var self = this;
        return new Promise(function (resolve, reject) {
          var start = file.blockCurrentChunk * file.blockChunkSize,
              end = start + file.blockChunkSize >= file.file.size ? file.file.size : start + file.blockChunkSize;
          self.blobSlice = self.formFile.slice(start, end);
          self.fileReader.readAsBinaryString(self.blobSlice);

          self.fileReader.onload = function (e) {
            self.spark.appendBinary(e.target.result);
            self.blockMd5 = self.spark.end();
            if (typeof callback == "function") callback(false, true);
            return resolve();
          };

          self.fileReader.onerror = function (e) {
            console.log(e);
            self.failed = true;
          };
        });
      } // 两秒后开始查询进度

    }, {
      key: "progressTask",
      value: function progressTask(callback) {
        var self = this;

        if (self.file.status == "pending") {
          var processed = self.file.blockCurrentChunk * self.file.blockChunkSize,
              total = self.file.file.size;
          processed = processed > total ? total : processed;
          var randomLength = processed - Math.round(Math.random() * self.file.blockChunkSize);
          randomLength = randomLength <= 0 ? processed : randomLength;

          if (self.file.blockCurrentChunk < self.file.blockChunks) {
            if (typeof callback == "function") callback(self.file, randomLength, self.file.file.size);
          } else {
            if (typeof callback == "function") callback(self.file, self.file.file.size, self.file.file.size);
          }
        }
      } //预创建

    }, {
      key: "preCreate",
      value: function preCreate(action, param, file, callback) {
        var _this = this;

        this.server = null;
        this.fileReader = new FileReader();
        this.spark = new md5["default"]();
        this.listener = null;
        this.completed = false; // 用来表示文件是否上传成功

        this.canceled = false; // 用来表示文件是否取消

        this.paused = false; // 用来表示文件是否暂停

        this.cancel = false; // 用来表示文件是否正在取消

        this.failed = false; //文件是否上传失败

        this.blockCurrentChunk = 0;
        this.blockChunks = 1;
        this.blockChunkSize = 1048576;
        this.sparkList = [];
        this.fileId = "";
        this.blockMd5 = "";
        this.currentChunk = 0; // read in chunks of 1MB

        this.chunkSize = 1048576;
        this.chunks = 1;
        this.secondUpload = false;
        this.blobSlice = null;
        this.file = null;
        this.formFile = null;

        if (!file) {
          return false;
        }

        var self = this;
        self.file = file;
        self.server = new _Request.Request(window.cube._CUBE_FILE_SERVER);
        self.listener = self.file.getListener();
        self.formFile = self.file.formFile;
        self.blobSlice = self.formFile.slice(0, self.file.size);
        self.blobSlice["name"] = self.file.name;

        var precreateFile = function precreateFile() {
          self.spark.appendBinary(self.fileReader.result);
          self.blockMd5 = self.spark.end();
          param = {
            token: window.cube.accToken,
            name: self.file.name,
            md5: self.blockMd5,
            //文件MD5
            size: self.file.size //文件大小

          };

          if (self.formFile.type.indexOf("image") > -1) {
            var imageFile = new FileReader();
            imageFile.readAsDataURL(self.blobSlice);

            imageFile.onload = function () {
              var image = new Image();
              image.src = imageFile.result;

              image.onload = function () {
                self.file.file.width = image.width;
                self.file.file.height = image.height;
                setFileInfo();
              };

              image.onerror = function (e) {
                console.log(e);
              };
            };
          } else {
            setFileInfo();
          }
        };

        var setFileInfo = function setFileInfo() {
          self.server.sendFile(action, {}, param, function (err, res) {
            if (res && res.state.code == 200) {
              self.file.file.key = res.data.fileInfo.fileId;
              self.file.file.url = res.data.fileInfo.url;
              self.file.file.md5 = res.data.fileInfo.md5;
              self.file.blockCurrentChunk = 0;
              self.file.blockChunks = Math.ceil(self.file.size / res.data.pcBlockSize);
              self.file.blockChunkSize = res.data.pcBlockSize;
              self.file.createTime = res.data.fileInfo.createTime;
              self.file.fileId = res.data.fileInfo.fileId;
              self.file.secondUpload = res.data.fileInfo.secondUpload;
              self.sparkList = [];
              self.file.sparkList = [];
              if (typeof callback == "function") callback(err, self.file);
            } else {
              if (typeof callback == "function") callback(true, res);
            }
          });
        };

        self.fileReader.onload = function (e) {
          precreateFile();
          return true;
        };

        self.fileReader.readAsBinaryString(self.blobSlice); // 增加取消方法

        self.file._cancelUpload = function (action, param, callback) {
          if (self.canceled) {
            return false;
          }

          self.server.sendFile(action, {}, param, function (err, res) {
            if (err) {
              self.errorFn(self.file);
              CellCloud.Logger.w("FileManagerService#cancelUpload", "Cancel upload failed! error code is " + err.status);
              return false;
            }

            if (res.state.code == 200) {
              self.canceled = true;
              self.file._cancelUpload = undefined;
              delete self.file._cancelUpload;
              self.file.status = "cancel";
              self.file.blockCurrentChunk = 0;
              self.blockCurrentChunk = 0;
              if (typeof callback == "function") callback(err, true);
            }
          });
          return true;
        }; //暂停方法


        self.file._pauseUpload = function (callback) {
          var self = _this;

          if (self.paused) {
            if (typeof callback == "function") callback(false, false);
            return false;
          }

          self.paused = true;
          self.file.status = "paused";
          if (typeof callback == "function") callback(false, true);
        }; //继续上传


        self.file._resumeUpload = function (callback) {
          _this.paused = false;
          self.file.status = "create";
          if (typeof callback == "function") callback(false, true);
        };
      } // 分块上传

    }, {
      key: "sendBlockUpload",
      value: function () {
        var _sendBlockUpload = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(action, param, fileInfo, callback) {
          var self, uploadParam;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  self = this;
                  self.file = fileInfo;

                  if (action) {
                    _context.next = 5;
                    break;
                  }

                  if (typeof callback == "function") callback(true, self.file);
                  return _context.abrupt("return", false);

                case 5:
                  if (!(self.file.blockCurrentChunk >= self.file.blockChunks)) {
                    _context.next = 8;
                    break;
                  }

                  if (typeof callback == "function") callback(false, self.file);
                  return _context.abrupt("return", false);

                case 8:
                  _context.next = 10;
                  return self.loadNext(self.file, function () {});

                case 10:
                  uploadParam = {
                    token: window.cube.accToken,
                    fileId: self.file.fileId,
                    blockMd5: self.blockMd5,
                    blockFile: self.blobSlice
                  };
                  this.server.sendFile(action, {}, uploadParam, function (err, res) {
                    if (res.state.code == 200) {
                      if (!self.completed && !self.canceled && !self.paused && self.currentChunk < self.chunks) {
                        self.sparkList = self.file.sparkList;
                        self.sparkList.push(res.data.blockMd5);
                        self.file.sparkList = self.sparkList;
                        var blockCurrentChunk = self.file.blockCurrentChunk;
                        blockCurrentChunk = blockCurrentChunk + 1;
                        self.file.blockCurrentChunk = blockCurrentChunk;
                        if (typeof callback == "function") callback(err, self.file);
                      }
                    }
                  });

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function sendBlockUpload(_x, _x2, _x3, _x4) {
          return _sendBlockUpload.apply(this, arguments);
        }

        return sendBlockUpload;
      }() //整合所有分块的MD5上传

    }, {
      key: "sendBlockCreate",
      value: function sendBlockCreate(action, param, callback) {
        var self = this;

        if (!action || !param) {
          return false;
        }

        this.server.sendFile(action, {}, param, function (err, res) {
          if (res.state.code == 200) {
            self.file._cancelUpload = undefined;
            delete self.file._cancelUpload;
            self.file.file.url = res.data.fileInfo.url; // self.blockCurrentChunk = 0;

            self.file.status = "completed";
            if (typeof callback == "function") callback(err, self.file);
            self.completed = true;
          } else {
            self.file.status = "failed";
            self.file.sparkList = [];
            self.file.blockCurrentChunk = 0;
            self.file.fileId = "";
            self.file.code = 1219;
            if (typeof callback == "function") callback(true, self.file);
          }
        });
      } // 取消上传

    }, {
      key: "cancelUpload",
      value: function cancelUpload(action, param, file, callback) {
        var self = this;

        if (!action || !param) {
          return false;
        }

        if (self.canceled) {
          return false;
        }

        self.file = file;

        if (self.canceled) {
          return false;
        }

        self.server.sendFile(action, {}, param, function (err, res) {
          if (err) {
            self.errorFn(self.file);
            CellCloud.Logger.w("FileManagerService#cancelUpload", "Cancel upload failed! error code is " + err.status);
            return false;
          }

          if (res.state.code == 200) {
            self.canceled = true;
            self.file._cancelUpload = undefined;
            delete self.file._cancelUpload;
            self.file.status = "cancel";
            self.file.blockCurrentChunk = 0;
            self.blockCurrentChunk = 0;
            if (typeof callback == "function") callback(err, true);
          }
        }); // self.file._cancelUpload(action, param, callback)
      } // 暂停上传

    }, {
      key: "pauseUpload",
      value: function pauseUpload(file, callback) {
        var self = this;
        self.file = file; // if (!file) {
        //   return false;
        // }
        // self.file._pauseUpload(callback)

        if (self.paused) {
          if (typeof callback == "function") callback(false, false);
          return false;
        }

        self.paused = true;
        self.file.status = "paused";
        if (typeof callback == "function") callback(false, true);
      } // 继续上传

    }, {
      key: "resumeUpload",
      value: function resumeUpload(file, callback) {
        var self = this;
        self.file = file;
        self.paused = false;
        if (callback && typeof callback == 'function') callback(false, true); // self.file._resumeUpload(callback)
      }
    }]);

    return _default;
  }();

  _exports["default"] = _default;
});

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 284 */
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
  _exports.FilePermission = void 0;

  /**
   * 文件权限枚举。
   *
   * @readonly
   * @enum {Number}
   * @author Xu Jiangwei, Guan Yong
   */
  var FilePermission = {
    /** 读取。 */
    READ: 1 << 0,

    /** 新建文件。 */
    NEW_FILE: 1 << 1,

    /** 新建目录。 */
    NEW_FOLDER: 1 << 2,

    /** 移动。 */
    MOVE: 1 << 3,

    /** 重命名。 */
    RENAME: 1 << 4,

    /** 删除。 */
    DELETE: 1 << 5,

    /** 下载。 */
    DOWNLOAD: 1 << 6,

    /** 分享。 */
    SHARE: 1 << 7
  };
  _exports.FilePermission = FilePermission;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=CubeFile.js.map