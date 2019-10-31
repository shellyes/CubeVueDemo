(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CubeWhiteboard"] = factory();
	else
		root["CubeWhiteboard"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 377);
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
/* 200 */,
/* 201 */,
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
/* 203 */,
/* 204 */,
/* 205 */,
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
/* 208 */,
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
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
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
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
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
/* 268 */,
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

/***/ }),
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
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
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var assign = __webpack_require__(202);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */
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
  _exports.MessageType = void 0;

  /*
   * MessageType.js
   * Cube Engine
   * 
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 消息类型枚举。
   *
   * @readonly
   * @enum {String}
   * @author Xu Jiangwei, Guan Yong
   */
  var MessageType = {
    /** 文本消息。 */
    Text: "text",

    /** 自定义消息。 */
    Custom: "custom",

    /** 文件消息。 */
    File: "file",

    /** 图片消息。 */
    Image: "image",

    /** 语音消息。 */
    Voice: "voice",

    /** 短视频消息。 */
    Video: "video",

    /** 白板消息。 */
    Whiteboard: "whiteboard",

    /** 白板剪辑消息。 */
    WhiteboardClip: "whiteboardclip",

    /*卡片消息*/
    Card: "card",

    /*历史消息*/
    History: "history",

    /*位置消息*/
    Location: "location",

    /*富文本消息*/
    RichContent: "richcontent",

    /** 回复消息 */
    Reply: "reply",

    /* 未知类型的消息*/
    UnKnown: "unKnown"
  };
  _exports.MessageType = MessageType;
});

/***/ }),
/* 308 */
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
  _exports.MessageDirection = void 0;

  /*
   * MessageDirection.js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 消息方向枚举。
   *
   * @readonly
   * @enum {String}
   * @author Guan Yong
   */
  var MessageDirection = {
    /** 初始化。 */
    None: "none",

    /** 收取。 */
    Received: "received",

    /** 发出。 */
    Sent: "sent"
  };
  _exports.MessageDirection = MessageDirection;
});

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(262);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(310), __webpack_require__(307)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MessageEntity2, _MessageType) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.TextMessage = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var TextMessage =
  /*#__PURE__*/
  function (_MessageEntity) {
    _inherits(TextMessage, _MessageEntity);

    /**
     * @constructs TextMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     * @param {String} content - 指定消息的文本内容。
     */
    function TextMessage(receiver, content) {
      var _this;

      _classCallCheck(this, TextMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TextMessage).call(this, _MessageType.MessageType.Text));
      _this.receiver = {
        "name": receiver
      };
      _this.content = null;

      if (undefined !== content) {
        _this.content = content;
      }

      return _this;
    }
    /**
     * 返回文本消息内容。
     *
     * @returns {String} 消息内容。
     */


    _createClass(TextMessage, [{
      key: "getContent",
      value: function getContent() {
        return this.content;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);

        json.content = this.content;
        json.contentKey = this.contentKey;
        return json;
      }
    }], [{
      key: "parse",
      value: function parse(json) {
        // 创建消息实例
        var msg = new TextMessage(json.to.name, json.content);
        msg.receiver.displayName = json.to.displayName;
        msg.sender = {
          "name": json.from.name,
          "displayName": json.from.displayName
        };

        if (undefined !== json.group) {
          msg.group = json.group;
          msg.groupName = json.group.name;
        }

        msg.sendTime = json.time.send;
        msg.receiveTime = json.time.receive;
        msg.timestamp = json.time.timestamp;
        msg.sn = json.sn;
        msg.pulled = json.pulled;
        msg.fromDevice = json.device ? json.device : "";
        msg.receivedDevices = json.pulledDevices ? json.pulledDevices : ""; // TODO

        msg.receipted = json.receipted;
        return msg;
      }
    }]);

    return TextMessage;
  }(_MessageEntity2.MessageEntity);

  _exports.TextMessage = TextMessage;
});

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(107);

__webpack_require__(108);

__webpack_require__(117);

__webpack_require__(126);

__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(311), __webpack_require__(307), __webpack_require__(308)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MessageStatus, _MessageType, _MessageDirection) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.MessageEntity = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var CellCloud = window.CellCloud;
  /**
   * 消息实体。
   *
   * @class MessageEntity
   * @author Xu Jiangwei, Guan Yong
   */

  var MessageEntity =
  /*#__PURE__*/
  function () {
    function MessageEntity(type) {
      _classCallCheck(this, MessageEntity);

      this.sn = MessageEntity.generateSerialNumber();
      this.type = type; // 消息的自定义数据。注：此属性不会作为消息内容进行传输。

      this.customData = window.cube._CUBE_LOGIN_TIME++;
      this.status = _MessageStatus.MessageStatus.CREATE;
      this.direction = _MessageDirection.MessageDirection.None;
      this.receipted = false;
      this.receiver = null;
      this.sender = null;
      this.group = null;
      this.sendTime = 0;
      this.receiveTime = 0;
      this.timestamp = 0;
      this.pulled = false;
      this.traceless = false;
      this.fromDevice = null;
      this.receivedDevices = null;
      this.receiptedDevices = null;
      this.anonymous = false;
      this.sync = 0;
      this.tos = null;
      this.header = new CellCloud.HashMap();
    }
    /**
     * 设置消息的头域数据。
     *
     * @param {String} name - 头域数据名。
     * @param {Object} value - 头域数据值。
     */


    _createClass(MessageEntity, [{
      key: "setHeader",
      value: function setHeader(name, value) {
        this.header.put(name, value);
      }
      /**
       * 根据头域数据返回对应的数据值。
       *
       * @param {String} name - 指定头域数据名。
       * @returns {Object} 返回对应的值。
       */

    }, {
      key: "getHeader",
      value: function getHeader(name) {
        return this.header.get(name);
      }
      /**
       * 返回消息的 SN （唯一序列号）。
       *
       * @returns {Number} 长整型形式的消息唯一序列号。
       */

    }, {
      key: "getSN",
      value: function getSN() {
        return this.sn;
      }
      /**
       * 返回消息类型。
       *
       * @returns {MessageType} 消息类型。
       */

    }, {
      key: "getType",
      value: function getType() {
        return this.type;
      }
      /**
       * 返回消息接收人。
       *
       * @returns {Receiver} 此消息的接收人。
       */

    }, {
      key: "getReceiver",
      value: function getReceiver() {
        return this.receiver;
      }
      /**
       * @typedef {Object|null} Receiver
       * @property {String} name - 接收人的 Cube 号。
       * @property {String} [displayName] - 接收人的显示名。
       */

      /**
       * 返回消息发送人。
       *
       * @returns {Sender} 此消息的发送人。
       */

    }, {
      key: "getSender",
      value: function getSender() {
        return this.sender;
      }
      /**
       * @typedef {Object|null} Sender
       * @type {Object}
       * @property {String} name - 发送人的 Cube 号。
       * @property {String} [displayName] - 发送人的显示名。
       */

      /**
       * 返回绝对时间形式的消息发送时间。对于同一终端，发送时间是唯一的。
       *
       * @returns {Number} 绝对时间形式的发送时间。
       */

    }, {
      key: "getSendTime",
      value: function getSendTime() {
        return this.sendTime;
      }
      /**
       * 返回绝对时间形式的消息接收时间。
       *
       * @returns {Number} 绝对时间形式的接收时间。
       */

    }, {
      key: "getReceiveTime",
      value: function getReceiveTime() {
        return this.receiveTime;
      }
      /**
       * 返回绝对时间形式的消息的时间戳。
       *
       * @returns {Number} 绝对时间形式的时间戳。
       */

    }, {
      key: "getTimestamp",
      value: function getTimestamp() {
        return this.timestamp;
      }
      /**
       * 返回消息是否已被其他终端接收。
       *
       * @returns {boolean} 如果已被其他终端接收过返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "hasPulled",
      value: function hasPulled() {
        return this.pulled;
      }
      /**
       * 返回是否是群组内消息。
       *
       * @returns {boolean} 如果是群组内消息返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "isGroupMessage",
      value: function isGroupMessage() {
        return null != this.group;
      }
      /**
       * 设置为无痕消息
       *
       * @param {boolean} traceless
       */

    }, {
      key: "setTraceless",
      value: function setTraceless(traceless) {
        this.traceless = traceless;
      }
      /**
       * 返回当前消息是否为无痕消息
       *
       * @returns {boolean}
       */

    }, {
      key: "getTraceless",
      value: function getTraceless() {
        return this.traceless;
      }
      /**
       * 返回当前消息状态
       * @returns {MessageStatus}
       */

    }, {
      key: "getStatus",
      value: function getStatus() {
        return this.status;
      }
      /**
       * 获取消息发送终端的信息
       * @returns {{name: string, platform: string, version: string}|null}
       */

    }, {
      key: "getFromDevice",
      value: function getFromDevice() {
        return this.fromDevice;
      }
      /**
       * 获取收取了当前消息所有终端设备信息
       * @returns {Array<{name: string, platform: string, version: string}>}
       */

    }, {
      key: "getReceivedDevices",
      value: function getReceivedDevices() {
        return this.receivedDevices;
      }
      /**
       * 获取消息方向
       * @returns {MessageDirection|String}
       */

    }, {
      key: "getDirection",
      value: function getDirection() {
        return this.direction;
      }
      /**
       * 获取当前消息是否已经回执
       * @returns {boolean}
       */

    }, {
      key: "isReceipted",
      value: function isReceipted() {
        return this.receipted;
      }
      /**
       * 设置为匿名消息
       *
       * @param {boolean} anonymous
       */

    }, {
      key: "setAnonymous",
      value: function setAnonymous(anonymous) {
        this.anonymous = anonymous;
      }
      /**
       * 设置为匿名昵称
       *
       * @param {string} displayName
       */

    }, {
      key: "setDisplayName",
      value: function setDisplayName(displayName) {
        this.sender.displayName = displayName;
      }
      /**
       * 设置消息同步类型
       *
       *   @param {string} type -- 0(都同步) -- 1(仅发送者) --  2(仅接受者),
       */

    }, {
      key: "setSyncType",
      value: function setSyncType(type) {
        this.sync = type;
      }
      /**
       * 发送群消息时设置可以收到消息的人，默认不设置就是所有人
       * @param {Array} receivers -- 群消息可以设置此属性，表示只有此列表的人才能收到，不设置没有此属性
       */

    }, {
      key: "setOnlyReceivers",
      value: function setOnlyReceivers(receivers) {
        this.tos = receivers;
      }
      /**
       * @param str   字符串
       * @returns {number} 字节大小
       * @private
       */

    }, {
      key: "_getBytesLength",
      value: function _getBytesLength(str) {
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
      } // 消息转为 JSON 格式

    }, {
      key: "toJSON",
      value: function toJSON() {
        // 消息头
        var header = {};
        var keys = this.header.keySet();

        for (var i = 0; i < keys.length; ++i) {
          var name = keys[i];
          var value = this.header.get(name);

          if (null != value) {
            header[name] = value;
          }
        }

        var json = {
          "sn": this.sn,
          "type": this.type,
          "from": this.sender,
          "to": this.receiver,
          "header": header,
          "sync": this.sync,
          "traceless": this.traceless,
          "time": {
            "send": this.sendTime,
            "receive": this.receiveTime,
            "timestamp": this.timestamp
          },
          "anonymous": this.anonymous
        };

        if (this.tos) {
          json.tos = this.tos;
        }

        return json;
      } // 消息 SN 生成函数

    }], [{
      key: "generateSerialNumber",
      value: function generateSerialNumber() {
        if (null == this.gCounts || this.gCounts >= 99) {
          this.gCounts = 0;
        }

        ++this.gCounts;
        var buf = [];
        var date = new Date();
        var dd = date.getDate();
        var hh = date.getHours();
        var mm = date.getMinutes();
        var ss = date.getSeconds();
        buf.push(window.cube._cube_token);
        buf.push(dd > 9 ? dd : "0" + dd);
        buf.push(hh > 9 ? hh : "0" + hh);
        buf.push(mm > 9 ? mm : "0" + mm);
        buf.push(ss > 9 ? ss : "0" + ss);
        buf.push(this.gCounts > 9 ? this.gCounts : "0" + this.gCounts);
        var ret = buf.join('');
        buf.splice(0, buf.length);
        buf = null;
        ret = Number(ret);
        return ret;
      }
    }]);

    return MessageEntity;
  }();

  _exports.MessageEntity = MessageEntity;
});

/***/ }),
/* 311 */
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
  _exports.MessageStatus = void 0;

  /*
   * MessageStatus.js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 消息状态枚举。
   *
   * @readonly
   * @enum {String}
   * @author Guan Yong
   */
  var MessageStatus = {
    /** 创建。 */
    CREATE: "create",

    /** 失败。 */
    FAIL: "fail",

    /** 处理中。 */
    INPROGRESS: "inprogress",

    /** 撤回。 */
    RECALL: "recall",

    /** 成功。 */
    SUCCESS: "success"
  };
  _exports.MessageStatus = MessageStatus;
});

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(106);

__webpack_require__(1);

__webpack_require__(212);

__webpack_require__(116);

__webpack_require__(262);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(132);

__webpack_require__(67);

__webpack_require__(69);

__webpack_require__(87);

__webpack_require__(89);

__webpack_require__(196);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(310), __webpack_require__(307), __webpack_require__(313), __webpack_require__(314), __webpack_require__(315), __webpack_require__(236), __webpack_require__(238), __webpack_require__(237)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MessageEntity2, _MessageType, _FileMessageStatus, _FileAction, md5, _Request, _StateCode, _CubeError) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.FileMessage = void 0;
  md5 = _interopRequireWildcard(md5);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
   * 文件消息。
   *
   * @class FileMessage
   * @extends MessageEntity
   * @author Xu Jiangwei, Guan Yong
   */

  var FileMessage =
  /*#__PURE__*/
  function (_MessageEntity) {
    _inherits(FileMessage, _MessageEntity);

    /**
     * @constructs FileMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     */
    function FileMessage(receiver) {
      var _this;

      _classCallCheck(this, FileMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FileMessage).call(this, _MessageType.MessageType.File));
      _this.file = null;
      /* 存放form表单的元素ID */

      _this.domId = null;
      /**
       * 用于以FormData方式发送表单的File对象
       * 用于以FormData方式发送表单的File对象
       * @type File
       */

      _this.formFile = null;
      _this.accept = '';
      /**
       * 自定义发送方法。
       * 如果该方法被重写, 在发送此消息时该方法被调用, 且引擎不会 POST 数据到引擎服务器。
       *
       * @type {CubeCustomPostMethod}
       */

      _this.customPostMethod = null;
      _this.customPostParam = {};
      _this.pause = false;
      _this.receiver = {
        "name": receiver
      };
      _this.fileStatus = _FileMessageStatus.FileMessageStatus.None;
      _this.key = null;
      _this.server = new _Request.Request((window.cube.utils.isSecure ? "https" : "http") + '://' + window.cube._CUBE_DOMAIN + ':' + window.cube._CUBE_PORT); //标记是否是文件夹

      _this.fileType = 0; //0:文件 1:文件夹

      _this.compressType = 1; //压缩类型 1:zip

      _this.compressPath = ''; //压缩路径

      return _this;
    }
    /**
     * @typedef {Function} CubeCustomPostMethod
     * @param {{tracker: string, type: *, name: *, file: null}} data
     * @param {String} action
     */

    /**
     * 返回当前文件消息状态
     * @returns {FileMessageStatus}
     */


    _createClass(FileMessage, [{
      key: "getFileStatus",
      value: function getFileStatus() {
        return this.fileStatus;
      }
      /**
       * 文件基本信息。
       *
       * @returns {FileInfo} 文件信息对象。
       */

    }, {
      key: "getFile",
      value: function getFile() {
        return this.file;
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
              self.file = {
                modified: 0,
                name: file.name,
                size: file.size,
                md5: md5
              };

              if (null != fn) {
                fn(file);
              }
            });
          }
        };

        el.click();
      }
      /**
       * 根据已有的 FileList 设置需要发送的文件。
       *
       * @param files {FileList} - 需要发送的 FileList
       * @returns {boolean} 返回是否设置成功。
       */

    }, {
      key: "setFileByFileList",
      value: function setFileByFileList(files) {
        var self = this;

        if (files != null && files.length > 0) {
          var el = this._buildForm();

          el.files = files;
          var file = files[0];
          self.calculate(file, function (md5) {
            self.file = {
              modified: 0,
              name: file.name,
              size: file.size,
              md5: md5
            };
          });
          return true;
        }

        return false;
      }
      /**
       * 设置表单文件
       * @param file {File} - 需要发送的文件
       * @returns {boolean} 返回设置是否成功
       */

    }, {
      key: "setFormFile",
      value: function setFormFile(file, fn) {
        var self = this;

        if (window.FormData) {
          this.formFile = file;
          self.calculate(file, function (md5) {
            self.file = {
              modified: 0,
              name: file.name,
              size: file.size,
              md5: md5
            };
            self.formFile.md5 = md5;

            if (null != fn) {
              fn(file);
            }

            return true;
          });
        }

        return false;
      }
      /**
       * 设置文件Md5
       * @param Md5 {Md5} - 需要发送的文件的md5
       * @returns {boolean} 返回设置是否成功
       */

    }, {
      key: "setMd5",
      value: function setMd5(md5) {
        this.file.md5 = md5;
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
      } // 创建文件操作的 Form

    }, {
      key: "_buildForm",
      value: function _buildForm() {
        // 生成表单ID
        this.domId = '_cube_file_msg_' + this.customData;
        this.customPostParam = {
          data: {
            sn: this.sn,
            cube: this.receiver.name,
            file: null
          },
          action: this._getServerAction(_FileAction.FileAction.StartUpload)
        };

        var formInfo = this._getFileFormInfo(); // 生成数据


        var data = formInfo.data;
        var container = document.createElement('div');
        container.id = this.domId;
        container.style.display = 'none';
        container.innerHTML = '<form id="_form' + this.domId + '" method="POST" enctype="multipart/form-data" action="' + formInfo.action + '" target="_frame' + this.domId + '">' + '<input type="hidden" name="size" value=""/>' + '<input type="hidden" name="md5" value=""/>' + '<input type="hidden" name="cube" value="' + data.cube + '"/>' + '<input type="hidden" name="sn" value="' + data.sn + '"/>' + '<input type="file" name="file" accept="' + this.accept + '"/>' + '</form>' + '<iframe name="_frame' + this.domId + '"></iframe>';
        document.body.appendChild(container);
        return container.getElementsByTagName("input")[4];
      } // 取消文件发送

    }, {
      key: "_cancel",
      value: function _cancel() {
        this._canceled = true;

        if (null != this.domId) {
          var container = document.getElementById(this.domId);

          if (null != container) {
            // 删除iFrame元素以终止文件发送
            document.body.removeChild(container);
            return true;
          }
        }

        return false;
      } // 向服务器发送文件数据

    }, {
      key: "_postData",
      value: function _postData(msg, fn, isRichContent) {
        var _this2 = this;

        // 富文本文件上传
        if (msg.type == _MessageType.MessageType.Image && isRichContent) {
          if (null != this.customPostMethod && typeof this.customPostMethod == 'function') {
            this.customPostMethod(this._getFileRichFormInfo(msg), function (err, res) {
              if (typeof fn == 'function') {
                fn(err, res);
              }

              if (err) throw err;
            });
          } else {
            var _server = new _Request.Request('');

            var formInfo = this._getFileRichFormInfo(msg);

            delete formInfo.data.file;

            _server.sendFile(formInfo.action, {
              name: 'file',
              value: this.formFile
            }, formInfo.data, function (err, nData) {
              if (typeof fn == 'function') {
                fn(err, nData);
              }

              if (err) throw err;
            });
          }

          return true;
        }

        var self = this;
        var server = this.server;
        var param = {
          sn: msg.sn,
          cube: msg.receiver.name,
          fileName: msg.file.name
        };
        self.pause = false;
        self.key = msg.file.key;
        self.customPostParam = {
          data: {
            sn: this.sn,
            cube: this.receiver.name,
            size: msg.file.size,
            md5: msg.file.md5,
            file: null
          },
          action: this._getServerAction(_FileAction.FileAction.StartUpload)
        };

        if (msg.file.key) {
          self.customPostParam.data = {
            sn: this.sn,
            cube: this.receiver.name,
            size: msg.file.size,
            md5: msg.file.md5,
            key: msg.file.key,
            file: null
          };
          param.key = msg.file.key;
        } // 断点上传 , 先获取进度 , 200走恢复上传, 404走新文件上传,


        server.sendFile(_FileAction.FileAction.GetProgress, {}, param, function (nErr, nData) {
          var code = nData.state.code;
          var data = {
            md5: msg.file.md5,
            cube: msg.receiver.name,
            sn: msg.sn,
            size: msg.file.size
          };

          if (nErr) {
            CellCloud.Logger.e('FileMessage#GetProgress', ' File GetProgress Message Error');
          }

          if (code == 200) {
            if (null != _this2.customPostMethod && typeof _this2.customPostMethod == 'function') {
              _this2.customPostParam.start = nData.data.current;
              _this2.customPostParam.end = nData.data.total;
              _this2.customPostParam.action = _this2._getServerAction(_FileAction.FileAction.ResumeUpload);

              _this2.customPostMethod(_this2._getFileFormInfo(), function (err, res) {
                if (typeof fn == 'function') {
                  fn(err, res);
                }

                if (err) throw err;
              });
            } else {
              var f = _this2.formFile;
              var start = nData.data.current;
              var end = nData.data.total;
              var blob = f.slice(start, end);
              blob.name = f.name;
              var reader = new FileReader();
              reader.readAsBinaryString(blob);

              reader.onload = function (e) {
                server.sendFile(_FileAction.FileAction.ResumeUpload, {
                  name: 'file',
                  value: blob
                }, data, function (nErr, nData) {
                  if (nErr) throw nErr;
                });
              };
            }

            var messageService = window.cube.getMessageService();
            messageService.delegate.onResumed(msg);
          } else if (code == 404) {
            self._customPostMethod(fn);
          }
        });
      }
    }, {
      key: "_customPostMethod",
      value: function _customPostMethod(fn) {
        if (null != this.customPostMethod && typeof this.customPostMethod == 'function') {
          this.customPostMethod(this._getFileFormInfo(), function (err, res) {
            if (typeof fn == 'function') {
              fn(err, res);
            }

            if (err) throw err;
          });
        } else if (null != this.formFile) {
          var server = new _Request.Request('');

          var formInfo = this._getFileFormInfo();

          delete formInfo.data.file;
          server.sendFile(formInfo.action, {
            name: 'file',
            value: this.formFile
          }, formInfo.data, function (err, ndata) {
            if (err) throw err;
            fn && fn(err, ndata);
          });
        } else {
          var data = this._getFileFormInfo().data;

          var form = document.getElementById('_form' + this.domId);

          if (null != form) {
            form.action = this._getFileFormInfo().action;
            form.getElementsByTagName("input")[0].value = data.size;
            form.getElementsByTagName("input")[1].value = data.md5;
            form.submit();
          } else {
            CellCloud.Logger.e('FileMessage#_postData', 'Send File Message Error, No files selected');
          }
        }
      }
    }, {
      key: "_getServerAction",
      value: function _getServerAction(url) {
        var protocol = window.location.protocol;

        if (protocol.indexOf("http") != 0) {
          protocol = "http:";
        }

        return protocol + '//' + window.cube._CUBE_DOMAIN + ':' + window.cube._CUBE_PORT + url;
      }
      /*
       * 获取文件表单信息（用于发送给服务器的表单数据）
       * @private
       * @returns {{data: {tracker: string, type: *, name: *, file: null}, action: *}}
       */

    }, {
      key: "_getFileFormInfo",
      value: function _getFileFormInfo() {
        return this.customPostParam;
      }
    }, {
      key: "_getFileRichFormInfo",
      value: function _getFileRichFormInfo(msg) {
        return {
          data: {
            receiver: window.cube.accName + ',' + msg.file.md5,
            file: null
          },
          action: this._getServerAction(_FileAction.FileAction.RichMessageUpload)
        };
      }
    }, {
      key: "_notifyAck",
      value: function _notifyAck(callback) {
        // 查询进度
        var completed = false;
        var httpError = -1;
        var start = Date.now();
        var processed = 0;
        var total = 0;
        var processedRepeatNum = 0; // 进度连续相同次数

        var errorNum = 0;
        var self = this;

        var tick = function tick() {
          // 执行了取消或暂停操作
          if (self._canceled || self.pause) {
            return;
          }

          if (!window.cube.registered && !completed) {
            callback(new _CubeError.CubeError(_StateCode.StateCode.FileProgressFailed, 'Upload file get progress failed'));

            if (null != self.domId) {
              // 删除 DOM 节点
              var container = document.getElementById(self.domId);

              if (null != container) {
                document.body.removeChild(container);
              }
            } else if (null != self.formFile) {
              self.formFile = null;
            } // 结束


            return;
          }

          var dt = Date.now() - start;

          if (!completed && dt < 60000) {
            setTimeout(function () {
              tick();
            }, 5000);
          }

          if (completed) {
            if (null != self.domId) {
              // 删除 DOM 节点
              var _container = document.getElementById(self.domId);

              if (null != _container) {
                document.body.removeChild(_container);
              }
            } else if (null != self.formFile) {
              self.formFile = null;
            } // 结束


            return;
          } else if (dt >= 60000) {
            // 没有完成，并且超时
            if (httpError > 0) {
              callback(new _CubeError.CubeError(httpError, 'Upload file timeout'));

              if (null != self.domId) {
                // 删除 DOM 节点
                var _container2 = document.getElementById(self.domId);

                if (null != _container2) {
                  document.body.removeChild(_container2);
                }
              } else if (null != self.formFile) {
                self.formFile = null;
              } // 结束


              return;
            } else {
              // 没有错误发生
              start = Date.now(); // 继续进行进度查询

              setTimeout(function () {
                tick();
              }, 5000);
            }
          }

          var param = {
            sn: self.sn,
            cube: self.receiver.name,
            fileName: self.file.name
          };
          self.file.key ? param.key = self.file.key : "";
          self.server.sendFile(_FileAction.FileAction.GetProgress, {}, param, function (nErr, nData) {
            if (nErr) {}

            if (nData.state.code == 200) {
              var sdata = nData.data;
              errorNum = 0;

              if (processed !== parseInt(sdata.current)) {
                processedRepeatNum = 0;
                processed = parseInt(sdata.current);
              } else {
                processedRepeatNum++;
              }

              total = parseInt(sdata.total);

              if (processed === total) {
                callback(false, processed, total);
                completed = true;
              } else {
                // 如果进度连续相同次数超过60次，就认为上传失败
                if (processedRepeatNum > 36) {
                  callback(new _CubeError.CubeError(_StateCode.StateCode.RequestTimeout, 'Upload file timeout'));
                  httpError = _StateCode.StateCode.RequestTimeout;

                  self._cancel();
                } else {
                  callback(false, processed, total);
                }
              }
            } else {
              errorNum++;

              if (errorNum > 3) {
                callback(new _CubeError.CubeError(nData.state.code, nData.state.dec));
                httpError = nData.state.code;

                self._cancel();
              }
            }
          });
        };

        setTimeout(function () {
          tick();
        }, 2000);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);

        json.file = this.file;
        return json;
      }
    }], [{
      key: "parse",
      value: function parse(json) {
        var msg = new FileMessage(json.to.name);
        msg.receiver.displayName = json.to.displayName;
        msg.sender = {
          "name": json.from.name,
          "displayName": json.from.displayName
        };

        if (undefined !== json.group) {
          msg.group = json.group;
          msg.groupName = json.group.name;
        }

        msg.sendTime = json.time.send;
        msg.receiveTime = json.time.receive;
        msg.timestamp = json.time.timestamp;
        msg.file = json.file;
        msg.sn = json.sn;
        msg.pulled = json.pulled;
        msg.fromDevice = json.device;
        msg.receivedDevices = json.pulledDevices; // TODO

        msg.receipted = json.receipted;
        return msg;
      }
    }]);

    return FileMessage;
  }(_MessageEntity2.MessageEntity);

  _exports.FileMessage = FileMessage;
});

/***/ }),
/* 313 */
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
  _exports.FileMessageStatus = void 0;

  /*
   * FileMessageStatus.js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 文件消息状态枚举。
   *
   * @readonly
   * @enum {String}
   * @author Guan Yong
   */
  var FileMessageStatus = {
    /** 初始化。 */
    None: "none",

    /** 下载中。 */
    Downloading: "downloading",

    /** 上传中。 */
    Uploading: "uploading",

    /** 成功。 */
    Succeed: "succeed",

    /** 失败。 */
    Failed: "failed"
  };
  _exports.FileMessageStatus = FileMessageStatus;
});

/***/ }),
/* 314 */
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
   * 文件消息数据动作枚举。
   *
   * @readonly
   * @enum {String}
   * @author Xu Jiangwei, Guan Yong
   */
  var FileAction = {
    PrepareUpload: '/message/file/broken/prepare/',
    StartUpload: '/message/file/broken/upload/',
    PauseUpload: '/message/file/broken/pause/',
    ResumeUpload: '/message/file/broken/resume/',
    GetProgress: '/message/file/broken/progress/',
    RichMessageUpload: '/richmessage/file/upload/'
  };
  _exports.FileAction = FileAction;
});

/***/ }),
/* 315 */
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
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(106);

__webpack_require__(1);

__webpack_require__(116);

__webpack_require__(262);

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

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(310), __webpack_require__(307)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MessageEntity2, _MessageType) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.WhiteboardMessage = void 0;

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
   * 文本消息。
   *
   * @class WhiteboardMessage
   * @extends MessageEntity
   * @author Xu Jiangwei, Guan Yong
   */

  var WhiteboardMessage =
  /*#__PURE__*/
  function (_MessageEntity) {
    _inherits(WhiteboardMessage, _MessageEntity);

    /**
     * @constructs WhiteboardMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     */
    function WhiteboardMessage(receiver) {
      var _this;

      _classCallCheck(this, WhiteboardMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WhiteboardMessage).call(this, _MessageType.MessageType.Whiteboard));
      _this.receiver = {
        "name": receiver
      };
      _this.content = null;
      _this.domId = null;
      _this.file = null;
      _this.finish = null;
      _this.completeCb = null;
      return _this;
    }
    /**
     * 填充消息内容。
     *
     * @param {Object} content - 白板的内容 JSON 数据。
     */


    _createClass(WhiteboardMessage, [{
      key: "fillContent",
      value: function fillContent(content) {
        this.content = JSON.stringify(content);
        this.file = {
          modified: 0,
          name: Date.now() + ".cwb",
          size: this.content.length
        };
      }
    }, {
      key: "getFile",
      value: function getFile() {
        return this.file;
      } // 创建操作表单

    }, {
      key: "_buildForm",
      value: function _buildForm() {
        // 生成表单ID
        this.domId = '_cube_wb_msg_' + this.customData;
        var container = document.createElement('div');
        container.id = this.domId;
        container.style.display = 'none';
        container.innerHTML = '<form id="_form' + this.domId + '" method="POST" enctype="multipart/form-data" action="' + this._getServerAction() + '" target="_frame' + this.domId + '">' + '<input type="hidden" name="filename" value="' + this.file.name + '"/>' + '<input type="hidden" name="receiver" value="' + this.receiver.name + '"/>' + '<input type="hidden" name="sender" value="' + this.sender.name + '"/>' + '<input type="hidden" name="sendTime" value="' + this.sendTime + '"/>' + '<input type="hidden" name="content" value=\'' + this.content + '\'/>' + '</form>' + '<iframe name="_frame' + this.domId + '"></iframe>';
        document.body.appendChild(container);
        return container;
      }
    }, {
      key: "_postData",
      value: function _postData() {
        // 构建表单
        var el = this._buildForm(); // 建立监听


        var iframe = el.getElementsByTagName("iframe")[0];
        var self = this;

        iframe.onload = function () {
          setTimeout(function () {
            self.finish = true;

            if (null != self.completeCb) {
              self.completeCb(false, self.content.length, self.content.length);
            }

            self._clear();
          }, 1000);
        };

        var form = document.getElementById('_form' + this.domId);

        if (null != form) {
          form.submit();
        } else {
          CellCloud.Logger.e('CubeWhiteboardMessage#_postData', 'Send content error');
        }
      }
    }, {
      key: "_notifyAck",
      value: function _notifyAck(callback) {
        if (this.finish) {
          callback(false, this.content.length, this.content.length);
        } else {
          this.completeCb = callback;
        }
      } // 从服务器请求白板数据内容。

    }, {
      key: "_fetchData",
      value: function _fetchData(success, error) {
        var p = window.cube.utils.isSecure ? "https" : "http"; // 查询进度

        var url = p + '://' + window.cube._CUBE_DOMAIN + ':' + window.cube._CUBE_PORT + '/message/read/cwb/?receiver=' + this.receiver.name + '&sn=' + this.sn;
        var self = this; // 发送请求

        CellCloud.Ajax.newRequest(url).method("GET").send(function (reponse) {
          if (reponse.getStatus() == 200) {
            self.content = reponse.getData().toString();
            success.call(null, self);
          } else {
            error.call(null, self, reponse.getStatus());
          }
        });
      }
    }, {
      key: "_getServerAction",
      value: function _getServerAction() {
        var protocol = window.location.protocol;

        if (protocol.indexOf("http") != 0) {
          protocol = "http:";
        }

        return protocol + '//' + window.cube._CUBE_DOMAIN + ':' + window.cube._CUBE_PORT + '/message/submit/'; //return "http://localhost:8080/live/submit/";
      }
    }, {
      key: "_clear",
      value: function _clear() {
        this.completeCb = null;

        if (null != this.domId) {
          var container = document.getElementById(this.domId);

          if (null != container) {
            // 删除 iframe 元素以终止 Post 发送
            document.body.removeChild(container);
            return true;
          }
        }

        return false;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);

        json.file = this.file;
        return json;
      }
    }], [{
      key: "parse",
      value: function parse(json) {
        var msg = new WhiteboardMessage(json.to.name);
        msg.receiver.displayName = json.to.displayName;
        msg.sender = {
          "name": json.from.name,
          "displayName": json.from.displayName
        };

        if (undefined !== json.group) {
          msg.group = json.group;
          msg.groupName = json.group.name;
        }

        msg.sendTime = json.time.send;
        msg.receiveTime = json.time.receive;
        msg.timestamp = json.time.timestamp;
        msg.file = undefined !== json.file ? json.file : null;
        msg.sn = json.sn;
        msg.pulled = json.pulled;
        msg.fromDevice = json.device;
        msg.receivedDevices = json.pulledDevices; // TODO

        msg.receipted = json.receipted;
        return msg;
      }
    }]);

    return WhiteboardMessage;
  }(_MessageEntity2.MessageEntity);

  _exports.WhiteboardMessage = WhiteboardMessage;
});

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(262);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(139);

__webpack_require__(67);

__webpack_require__(146);

__webpack_require__(89);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(312), __webpack_require__(307), __webpack_require__(310)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _FileMessage2, _MessageType, _MessageEntity) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ImageMessage = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var ImageMessage =
  /*#__PURE__*/
  function (_FileMessage) {
    _inherits(ImageMessage, _FileMessage);

    /**
     * @constructs ImageMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     */
    function ImageMessage(receiver) {
      var _this;

      _classCallCheck(this, ImageMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageMessage).call(this, receiver));
      _this.type = _MessageType.MessageType.Image;
      _this.accept = '.jpeg, .jpg, .png, .bmp, .gif';
      return _this;
    }
    /**
     * 根据已有的 FileList 设置需要发送的图片。
     *
     * @param {FileList} files - 指定需要发送的 FileList
     * @returns {boolean} 返回是否设置成功。
     */


    _createClass(ImageMessage, [{
      key: "setFileByFileList",
      value: function setFileByFileList(files) {
        if (files != null && files.length > 0) {
          var file = files[0];

          var _f = file.name.split(".");

          var _type = _f[_f.length - 1].toLowerCase(); // 判断后缀是否是图片格式


          if (_type == 'jpeg' || _type == 'jpg' || _type == 'png' || _type == 'bmp' || _type == 'gif') {
            var el = this._buildForm();

            el.files = files;
            this.file = {
              modified: 0,
              name: file.name,
              size: file.size
            };
            return true;
          }
        }

        return false;
      }
      /**
       * 返回图片文件基本信息。
      *
      * @returns {ImageFileInfo} 图片文件信息对象。
      * @memberof CubeImageMessage
      * @instance
       */

    }, {
      key: "getFile",
      value: function getFile() {
        return this.file;
      }
      /**
       * @typedef {Object} ImageFileInfo
       * @property {String} name - 文件名。
       * @property {Number} size - 文件的大小，单位：字节。
       * @property {Number} modified - 绝对时间形式的文件的最后修改时间。
       * @property {String} url - 文件的访问 URL 。
       * @property {Number} width - 图片的宽度。
       * @property {Number} height - 图片的高度。
       * @property {String} thumb - 图片缩略图的 URL 。
       */

    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = _MessageEntity.MessageEntity.prototype.toJSON.call(this);

        json.file = this.file;
        return json;
      }
    }], [{
      key: "parse",
      value: function parse(json) {
        var msg = new ImageMessage(json.to.name);
        msg.receiver.displayName = json.to.displayName;
        msg.sender = {
          "name": json.from.name,
          "displayName": json.from.displayName
        };

        if (undefined !== json.group) {
          msg.group = json.group;
          msg.groupName = json.group.name;
        }

        msg.sendTime = json.time.send;
        msg.receiveTime = json.time.receive;
        msg.timestamp = json.time.timestamp;
        msg.file = undefined !== json.file ? json.file : null;
        msg.sn = json.sn;
        msg.pulled = json.pulled;
        msg.fromDevice = json.device;
        msg.receivedDevices = json.pulledDevices; // TODO

        msg.receipted = json.receipted;
        return msg;
      }
    }]);

    return ImageMessage;
  }(_FileMessage2.FileMessage);

  _exports.ImageMessage = ImageMessage;
});

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(116);

__webpack_require__(262);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(312), __webpack_require__(307), __webpack_require__(310)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _FileMessage2, _MessageType, _MessageEntity) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.VoiceMessage = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var VoiceMessage =
  /*#__PURE__*/
  function (_FileMessage) {
    _inherits(VoiceMessage, _FileMessage);

    /**
     * @constructs VoiceMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     */
    function VoiceMessage(receiver) {
      var _this;

      _classCallCheck(this, VoiceMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(VoiceMessage).call(this, receiver));
      _this.type = _MessageType.MessageType.Voice;
      _this.stopCallback = null;
      return _this;
    }
    /**
     * 返回语音文件基本信息。
    *
    * @returns {VoiceFileInfo} 语音文件信息对象。
     */


    _createClass(VoiceMessage, [{
      key: "getFile",
      value: function getFile() {
        return this.file;
      }
      /**
       * @typedef {Object} VoiceFileInfo
       * @property {String} name - 文件名。
       * @property {Number} size - 文件的大小，单位：字节。
       * @property {Number} modified - 绝对时间形式的文件的最后修改时间。
       * @property {String} url - 文件的访问 URL 。
       * @property {Number} duration - 语音时长，单位：秒。
       * @property {String} mp3 - 语音 MP3 格式文件的 URL 。
       * @property {String} ogg - 语音 OGG 格式文件的 URL 。
       */

      /**
       * 开始录制
       *
       * @param callback {CubeBaseCallback} - 开始录制的回调
       */

    }, {
      key: "startRecord",
      value: function startRecord(callback) {
        var self = this;
        window.cube.utils.getUserMedia(false, true, function (err, stream) {
          if (err) {
            callback(err);
          } else {
            self.recorder = new MediaRecorder(stream);
            self.audioTrack = stream.getAudioTracks()[0];
            var chunks = [],
                startTime = 0;

            self.recorder.ondataavailable = function (e) {
              chunks.push(e.data);
            };

            self.recorder.onstop = function (e) {
              var duration = (Date.now() - startTime) / 1000;

              if (!self.canceledRecord) {
                var file = new File(chunks, 'cube_clip_voice' + Date.now() + '.ogg', {
                  'type': 'audio/ogg; codecs=opus'
                });
                self.setFormFile(file, function () {
                  self.file.duration = Math.round(duration);

                  if (typeof self.stopCallback == 'function') {
                    self.stopCallback(file);
                  }
                });
              }

              chunks = [];
              self.canceledRecord = false;
            };

            self.recorder.start();
            startTime = Date.now();
            callback();
          }
        });
      }
      /**
       * This is a description of the callback function
       * @callback CubeBaseCallback
       * @param error {{Code: {Number}} | null} - 是否发生错误
       */

      /**
       * 停止录制
       */

    }, {
      key: "stopRecord",
      value: function stopRecord(callback) {
        if (null != this.recorder && null != this.audioTrack) {
          this.stopCallback = callback;
          this.recorder.stop();
          this.audioTrack.stop();
          this.recorder = null;
          this.audioTrack = null;
        }
      }
      /**
       * 取消录制
       */

    }, {
      key: "cancelRecord",
      value: function cancelRecord() {
        this.canceledRecord = true;
        this.stopRecord();
      }
      /**
       * 返回已经录制的语音文件对象
       * @returns {File} - 文件对象
       */

    }, {
      key: "getVoiceFile",
      value: function getVoiceFile() {
        return this.formFile;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = _MessageEntity.MessageEntity.prototype.toJSON.call(this);

        json.file = this.file;
        return json;
      }
    }], [{
      key: "parse",
      value: function parse(json) {
        var msg = new VoiceMessage(json.to.name);
        msg.receiver.displayName = json.to.displayName;
        msg.sender = {
          "name": json.from.name,
          "displayName": json.from.displayName
        };

        if (undefined !== json.group) {
          msg.group = json.group;
          msg.groupName = json.group.name;
        }

        msg.sendTime = json.time.send;
        msg.receiveTime = json.time.receive;
        msg.timestamp = json.time.timestamp;
        msg.file = undefined !== json.file ? json.file : null;
        msg.sn = json.sn;
        msg.pulled = json.pulled;
        msg.fromDevice = json.device;
        msg.receivedDevices = json.pulledDevices; // TODO

        msg.receipted = json.receipted;
        return msg;
      }
    }]);

    return VoiceMessage;
  }(_FileMessage2.FileMessage);

  _exports.VoiceMessage = VoiceMessage;
});

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(262);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(312), __webpack_require__(307), __webpack_require__(310)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _FileMessage2, _MessageType, _MessageEntity) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.VideoMessage = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var VideoMessage =
  /*#__PURE__*/
  function (_FileMessage) {
    _inherits(VideoMessage, _FileMessage);

    /**
     * @constructs VideoMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     */
    function VideoMessage(receiver) {
      var _this;

      _classCallCheck(this, VideoMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoMessage).call(this, receiver));
      _this.type = _MessageType.MessageType.Video;
      return _this;
    }
    /**
     * 返回视频文件基本信息。
    *
    * @returns {VideoFileInfo} 视频文件信息对象。
     */


    _createClass(VideoMessage, [{
      key: "getFile",
      value: function getFile() {
        return this.file;
      }
      /**
       * @typedef {Object} VideoFileInfo
       * @property {String} name - 文件名。
       * @property {Number} size - 文件的大小，单位：字节。
       * @property {Number} modified - 绝对时间形式的文件的最后修改时间。
       * @property {String} url - 文件的访问 URL 。
       * @property {Number} duration - 视频时长，单位：秒。
       * @property {Number} width - 视频的宽度。
       * @property {Number} height - 视频的高度。
       * @property {String} thumb - 视频静态缩略图 URL 。
       * @property {String} webm - 视频 WebM 格式文件的 URL 。
       */

    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = _MessageEntity.MessageEntity.prototype.toJSON.call(this);

        json.file = this.file;
        return json;
      }
    }], [{
      key: "parse",
      value: function parse(json) {
        var msg = new VideoMessage(json.to.name);
        msg.receiver.displayName = json.to.displayName;
        msg.sender = {
          "name": json.from.name,
          "displayName": json.from.displayName
        };

        if (undefined !== json.group) {
          msg.group = json.group;
          msg.groupName = json.group.name;
        }

        msg.sendTime = json.time.send;
        msg.receiveTime = json.time.receive;
        msg.timestamp = json.time.timestamp;
        msg.file = undefined !== json.file ? json.file : null;
        msg.sn = json.sn;
        msg.pulled = json.pulled;
        msg.fromDevice = json.device;
        msg.receivedDevices = json.pulledDevices; // TODO

        msg.receipted = json.receipted;
        return msg;
      }
    }]);

    return VideoMessage;
  }(_FileMessage2.FileMessage);

  _exports.VideoMessage = VideoMessage;
});

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(262);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(312), __webpack_require__(307), __webpack_require__(310)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _FileMessage, _MessageType, _MessageEntity2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CardMessage = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var CardMessage =
  /*#__PURE__*/
  function (_MessageEntity) {
    _inherits(CardMessage, _MessageEntity);

    /**
     * @constructs CardMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     * @param {String} title - 卡片消息标题
     * @param {String} icon - 卡片消息链接
     * @param {String} desc - 卡片消息描述
     */
    function CardMessage(receiver, title, icon, content, desc) {
      var _this;

      _classCallCheck(this, CardMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CardMessage).call(this, receiver));
      _this.type = _MessageType.MessageType.Card;
      _this.receiver = {
        "name": receiver
      };
      _this.title = title;
      _this.icon = icon;
      _this.content = content;
      _this.cardContents = [];
      _this.traceless = false;
      _this.pulled = false;
      _this.secret = false;
      _this.device = window.cube.deviceInfo;
      return _this;
    }
    /**
     * 设置卡片消息集合。
     *
     * @param {Array}  cardContents - 卡片消息集合。
     */


    _createClass(CardMessage, [{
      key: "setCardContents",
      value: function setCardContents(cardContents) {
        this.cardContents = cardContents;
      }
      /**
       * 设置卡片消息内容。
       *
       * @param {String}  name - 卡片消息名字。
       * @param {String} icon - 卡片消息头像。
       * @param {String} url - 卡片消息Url。
       * @param {String} desc - 卡片消息描述desc。
       */

    }, {
      key: "setCardContent",
      value: function setCardContent(name, icon, url, desc) {
        this.cardContents.push({
          "name": name,
          "icon": icon,
          "url": url,
          "desc": desc
        });
      }
      /**
       * 返回卡片消息内容。
       *
       * @returns {String} 消息内容。
       */

    }, {
      key: "getCardContent",
      value: function getCardContent() {
        return this.cardContents[0];
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this); // 消息头


        json.content = this.content;
        json.cardContents = this.cardContents;
        json.title = this.title;
        json.icon = this.icon;
        json.traceless = this.traceless;
        json.pulled = this.pulled;
        json.secret = this.secret;
        json.group = this.group;
        json.device = this.device;
        return json;
      }
    }], [{
      key: "parse",
      value: function parse(json) {
        // 创建消息实例
        var msg = new CardMessage(json.to.name, json.title, json.icon, json.content, json.desc);
        msg.receiver.displayName = json.to.displayName;
        msg.sender = {
          "name": json.from.name,
          "displayName": json.from.displayName
        };

        if (undefined !== json.group) {
          msg.group = json.group;
          msg.groupName = json.group.name;
        }

        msg.sendTime = json.time.send;
        msg.receiveTime = json.time.receive;
        msg.timestamp = json.time.timestamp;
        msg.sn = json.sn;
        msg.pulled = json.pulled;
        msg.device = json.device;
        msg.receipted = json.receipted;
        msg.cardContents = json.cardContent ? [json.cardContent] : json.cardContents;
        return msg;
      }
    }]);

    return CardMessage;
  }(_MessageEntity2.MessageEntity);

  _exports.CardMessage = CardMessage;
});

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(262);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(310), __webpack_require__(307)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MessageEntity2, _MessageType) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CustomMessage = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var CustomMessage =
  /*#__PURE__*/
  function (_MessageEntity) {
    _inherits(CustomMessage, _MessageEntity);

    /**
     * @constructs CustomMessage
     * @param {String} receiver - 指定消息接收人的 Cube 号。
     */
    function CustomMessage(receiver) {
      var _this;

      _classCallCheck(this, CustomMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomMessage).call(this, _MessageType.MessageType.Custom));
      _this.receiver = {
        "name": receiver
      };
      _this.body = null;
      _this.expires = 0;
      return _this;
    }
    /**
     * 设置消息体数据。
    *
     * @param {Object} body - 指定需要设置的内容。
     */


    _createClass(CustomMessage, [{
      key: "setBody",
      value: function setBody(body) {
        this.body = body;
      }
      /**
       * 返回消息体数据。
       *
       * @returns {Object} 返回自定义消息体内容。
       */

    }, {
      key: "getBody",
      value: function getBody() {
        return this.body;
      }
      /**
       * 设置消息超期时间。
       *
          * @param {Number} expires 指定以秒为单位的消息超期时间。
       */

    }, {
      key: "setExpires",
      value: function setExpires(expires) {
        this.expires = expires;
      }
      /**
          * 返回消息的超期时间。
       *
          * @returns {Number} 返回消息的超期时间（单位：秒）。
          */

    }, {
      key: "getExpires",
      value: function getExpires() {
        return this.expires;
      } // 消息转 JSON

    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);

        json.expires = this.expires; // 消息体

        if (null != this.body) {
          json.body = this.body;
        }

        return json;
      }
    }], [{
      key: "parse",
      value: function parse(json) {
        // 创建消息实例
        var msg = new CustomMessage(json.to.name);
        msg.receiver.displayName = json.to.displayName;
        msg.sender = {
          "name": json.from.name,
          "displayName": json.from.displayName
        };

        if (undefined !== json.group) {
          msg.group = json.group;
          msg.groupName = json.group.name;
        }

        msg.sendTime = json.time.send;
        msg.receiveTime = json.time.receive;
        msg.timestamp = json.time.timestamp;
        msg.sn = json.sn;
        msg.pulled = json.pulled;

        if (undefined !== json.header) {
          for (var key in json.header) {
            msg.setHeader(key, json.header[key]);
          }
        }

        if (undefined !== json.body) {
          msg.setBody(json.body);
        }

        msg.fromDevice = json.device;
        msg.receivedDevices = json.pulledDevices; // TODO

        msg.receipted = json.receipted;
        return msg;
      }
    }]);

    return CustomMessage;
  }(_MessageEntity2.MessageEntity);

  _exports.CustomMessage = CustomMessage;
});

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(262);

__webpack_require__(120);

__webpack_require__(301);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(310), __webpack_require__(307)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MessageEntity2, _MessageType) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ReplyMessage = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var ReplyMessage =
  /*#__PURE__*/
  function (_MessageEntity) {
    _inherits(ReplyMessage, _MessageEntity);

    /**
     * @constructs ReplyMessage
     * @param {String} receiver - 指定对应消息的Cube号
     * @param {MessageEntity} reply - 回复内容
     * @param {MessageEntity} source - 回复内容
     */
    function ReplyMessage(receiver, reply, source) {
      var _this;

      _classCallCheck(this, ReplyMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ReplyMessage).call(this, _MessageType.MessageType.Reply));
      _this.receiver = {
        "name": receiver
      };
      _this.reply = reply;
      reply.sn = _this.sn;
      _this.source = source;
      return _this;
    }

    _createClass(ReplyMessage, [{
      key: "setSource",
      value: function setSource(source) {
        this.source = {
          "type": source.type,
          "content": source.content,
          "from": source.sender,
          "sn": source.sn,
          "to": source.receiver,
          "time": {
            "receive": source.receiveTime,
            "send": source.sendTime,
            "timestamp": source.timestamp
          }
        };
        this.source = Object.assign(this.source, source);

        if (null != source.tos) {
          this.source.tos = source.tos;
        }

        if (null != source.group) {
          this.source.group = source.group.name;
        }

        if (source.type == _MessageType.MessageType.Reply) {
          this.source.content = source.reply.content;
        }
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        if (null != this.reply) {
          this.reply.sender = this.sender;
        }

        var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);

        json.source = this.source instanceof _MessageEntity2.MessageEntity ? this.source.toJSON() : this.source;
        json.reply = this.reply instanceof _MessageEntity2.MessageEntity ? this.reply.toJSON() : this.reply;
        return json;
      }
    }], [{
      key: "parse",
      value: function parse(json) {
        // 创建消息实例
        var msg = new ReplyMessage(json.to.name, json.reply, json.source);
        json.source && msg.setSource(json.source);
        msg.receiver.displayName = json.to.displayName;
        msg.sender = {
          "name": json.from.name,
          "displayName": json.from.displayName
        };

        if (undefined !== json.group) {
          msg.group = json.group;
          msg.groupName = json.group.name;
        }

        if (null != msg.reply) {
          msg.reply.sn = json.sn;
          msg.reply.from = json.from;
          msg.reply.time = json.time;
          msg.reply.sendTime = json.time.send;
          msg.reply.receiveTime = json.time.receive;
          msg.reply.timestamp = json.time.timestamp;
        }

        msg.sendTime = json.time.send;
        msg.receiveTime = json.time.receive;
        msg.timestamp = json.time.timestamp;
        msg.sn = json.sn;
        msg.pulled = json.pulled;
        msg.fromDevice = json.device ? json.device : "";
        msg.receivedDevices = json.pulledDevices ? json.pulledDevices : ""; // TODO

        msg.receipted = json.receipted;
        return msg;
      }
    }]);

    return ReplyMessage;
  }(_MessageEntity2.MessageEntity);

  _exports.ReplyMessage = ReplyMessage;
});

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(211);

__webpack_require__(262);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(216);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(307), __webpack_require__(310), __webpack_require__(236)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MessageType, _MessageEntity2, _Request) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.HistoryMessage = void 0;

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
   * 历史消息。
   *
   * @class HistoryMessage
   * @extends MessageEntity
   * @author Li Wenkai
   */
  var HistoryMessage =
  /*#__PURE__*/
  function (_MessageEntity) {
    _inherits(HistoryMessage, _MessageEntity);

    /**
     * @constructs HistoryMessage
     * @param {String} receiver - 指定消息对应的 Cube 号。z
     * @param {Array<String>} sns - 消息sn数组
     */
    function HistoryMessage(receiver, sns, messages) {
      var _this;

      _classCallCheck(this, HistoryMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HistoryMessage).call(this, _MessageType.MessageType.History));
      _this.receiver = {
        "name": receiver
      };
      _this.sns = sns || null;
      _this.messages = messages || [];
      _this.async = true;
      _this.url = null;
      return _this;
    }
    /**
     * 设置历史消息内容。
     *
     * @messages {{Array<String>} 历史消息内容。
     */


    _createClass(HistoryMessage, [{
      key: "setMessages",
      value: function setMessages(messages) {
        this.messages = messages;
      }
      /**
       * 返回消息sns。
       *
       * @returns {Array<String>} 历史消息内容。
       */

    }, {
      key: "getSns",
      value: function getSns() {
        return this.sns;
      }
      /**
       * 设置消息Sns。
       *
       * @messages {{Array<String>} 历史消息内容。
       */

    }, {
      key: "setSns",
      value: function setSns(sns) {
        var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        this.sns = sns;
        this.async = async;
      }
    }, {
      key: "_async",
      value: function _async(worker) {
        var _this2 = this;

        var server = new _Request.Request((window.cube.utils.isSecure ? "https" : "http") + '://' + window.cube._CUBE_STORAGE_DOMAIN + ':' + window.cube._CUBE_STORAGE_PORT); // 异步查询组装消息实体 超过TCP包限制转化为url

        return new Promise(function (resolve, reject) {
          if (null != _this2.sns) {
            worker.dbService.queryMessageBySns(_this2.sns, function (err, msgs) {
              if (!err && msgs) {
                var messages = [];
                msgs.map(function (msg) {
                  messages.push(msg);
                });

                if (_this2._getBytesLength(JSON.stringify(messages)) > 30 * 1024) {
                  var formData = new File(new String(JSON.stringify(messages)), _this2.sn + '.json');
                  var param = {
                    token: 'dispatcher',
                    fileName: _this2.sn + '.json'
                  };
                  server.sendFile("/file/uploadFile", {
                    name: 'file',
                    value: formData
                  }, param, function (err, data) {
                    if (!err && data.state.code == 200) {
                      _this2.url = data.data.url;
                      resolve(data);
                    } else {
                      reject(data);
                    }
                  });
                } else {
                  _this2.messages = messages;
                  resolve(msgs);
                }
              } else {
                reject(false);
              }
            });
          } else {
            reject(false);
          }
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);

        this.url ? json.url = this.url : null;
        this.messages && this.messages.length ? json.messages = this.messages : null;
        !json.messages && !json.url ? json.sns = this.sns : null;
        return json;
      }
      /**
       * 返回历史消息内容。
       *
       * @returns {HistoryEntity} 历史消息实体。
       */

    }], [{
      key: "getMessages",
      value: function getMessages(entity) {
        return new Promise(function (resolve, reject) {
          if (entity.url) {
            var server = new _Request.Request('', 'GET');
            server.send(entity.url, null, function (err, data) {
              if (!err && data) {
                resolve(data);
              } else {
                reject(false);
              }
            });
          } else {
            resolve(entity.messages);
          }
        });
      }
    }, {
      key: "parse",
      value: function parse(json) {
        // 创建消息实例
        var msg = new HistoryMessage(json.to.name, json.sns, json.messages);
        msg.receiver.displayName = json.to.displayName;
        msg.sender = {
          "name": json.from.name,
          "displayName": json.from.displayName
        };

        if (undefined !== json.group) {
          msg.group = json.group;
          msg.groupName = json.group.name;
        }

        msg.sendTime = json.time.send;
        msg.receiveTime = json.time.receive;
        msg.timestamp = json.time.timestamp;
        msg.sn = json.sn;
        json.sns ? msg.sns = msg.sns : delete msg.sns;
        json.messages ? msg.messages = json.messages : delete msg.messages;
        json.url ? msg.url = json.url : null;
        msg.pulled = json.pulled;
        msg.device = json.device; // TODO

        msg.receipted = json.receipted;
        return msg;
      }
    }]);

    return HistoryMessage;
  }(_MessageEntity2.MessageEntity);

  _exports.HistoryMessage = HistoryMessage;
});

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(262);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(307), __webpack_require__(310)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MessageType, _MessageEntity2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.LocationMessage = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var LocationMessage =
  /*#__PURE__*/
  function (_MessageEntity) {
    _inherits(LocationMessage, _MessageEntity);

    /**
     * @constructs HistoryMessage
     * @param {String} receiver - 指定消息对应的 Cube 号。z
     * @param {Number} lat - 纬度
     * @param {Number} lng - 经度
     * @param {String} address - 地理名字
     */
    function LocationMessage(receiver, lat, lng, address) {
      var _this;

      _classCallCheck(this, LocationMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LocationMessage).call(this, _MessageType.MessageType.Location));
      _this.receiver = {
        "name": receiver
      };
      _this.lat = lat;
      _this.lng = lng;
      _this.address = address;
      return _this;
    }

    _createClass(LocationMessage, [{
      key: "toJSON",
      value: function toJSON() {
        var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);

        json.lat = this.lat;
        json.lng = this.lng;
        json.address = this.address;
        return json;
      }
    }, {
      key: "setLat",
      value: function setLat(lat) {
        this.lat = lat;
      }
    }, {
      key: "setLng",
      value: function setLng(lng) {
        this.lng = lng;
      }
    }, {
      key: "setAddress",
      value: function setAddress(address) {
        this.address = address;
      }
    }, {
      key: "getLat",
      value: function getLat() {
        return this.lat;
      }
    }, {
      key: "getLng",
      value: function getLng() {
        return this.lng;
      }
    }, {
      key: "getAddress",
      value: function getAddress() {
        return this.address;
      }
    }], [{
      key: "parse",
      value: function parse(json) {
        // 创建消息实例
        var msg = new LocationMessage(json.receiver, json.lat, json.lng, json.address);
        msg.receiver.displayName = json.to.displayName;
        msg.sender = {
          "name": json.from.name,
          "displayName": json.from.displayName
        };

        if (undefined !== json.group) {
          msg.group = json.group;
          msg.groupName = json.group.name;
        }

        msg.sn = json.sn;
        msg.sendTime = json.time.send;
        msg.receiveTime = json.time.receive;
        msg.timestamp = json.time.timestamp;
        msg.histories = json.histories;
        msg.pulled = json.pulled;
        msg.device = json.device; // TODO

        msg.receipted = json.receipted;
        return msg;
      }
    }]);

    return LocationMessage;
  }(_MessageEntity2.MessageEntity);

  _exports.LocationMessage = LocationMessage;
});

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(108);

__webpack_require__(262);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(196);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(307), __webpack_require__(310), __webpack_require__(309), __webpack_require__(317), __webpack_require__(308)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MessageType, _MessageEntity2, _TextMessage, _ImageMessage, _MessageDirection) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.RichContentMessage = void 0;

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
   * 富文本消息。
   *
   * @class RichContent
   * @extends MessageEntity
   * @author Li Wenkai
   */
  var RichContentMessage =
  /*#__PURE__*/
  function (_MessageEntity) {
    _inherits(RichContentMessage, _MessageEntity);

    /**
     * @constructs RichContent
     * @param {String} receiver - 指定消息对应的 Cube 号。
     */
    function RichContentMessage(receiver) {
      var _this;

      _classCallCheck(this, RichContentMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RichContentMessage).call(this, _MessageType.MessageType.RichContent));
      _this.receiver = {
        "name": receiver
      };
      _this.messages = new Array();
      _this.md5 = 0;
      return _this;
    }

    _createClass(RichContentMessage, [{
      key: "addMessage",
      value: function addMessage(message) {
        this.messages.push(message);
      }
    }, {
      key: "removeMessage",
      value: function removeMessage(message) {
        for (var i = 0; i < this.messages.length; i++) {
          if (this.messages[i] == message) {
            this.messages.splice(i, 1);
            break;
          }
        }
      }
    }, {
      key: "addText",
      value: function addText(text) {
        var msg = {
          type: 'text',
          content: text
        };
        this.messages.push(msg);
      }
    }, {
      key: "addImage",
      value: function addImage(image) {
        var self = this;
        this.md5++;
        var i = new _ImageMessage.ImageMessage(this.receiver.name);
        i.setFormFile(image, function () {
          self.md5--;
        });
        this.messages.push(i);
      }
      /**
       * 返回历史消息内容。
       *
       * @returns {Array<String>} 历史消息内容。
       */

    }, {
      key: "getMessages",
      value: function getMessages() {
        return this.sns;
      }
      /**
       * 设置历史消息内容。
       *
       * @messages {{Array<String>} 历史消息内容。
       */

    }, {
      key: "setMessages",
      value: function setMessages(sns) {
        this.sns = sns;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = _MessageEntity2.MessageEntity.prototype.toJSON.call(this);

        json.contents = this.messages;
        return json;
      } // 上传文件

    }], [{
      key: "upload",
      value: function upload(mix, content) {
        var self = this;
        var post = 0;

        var _loop = function _loop(i) {
          if (content.messages[i].type == 'image') {
            post++;

            if (content.md5 > 0) {
              self.md5Time = setInterval(function () {
                RichContentMessage.upload(mix, content);
              }, 500);
              return {
                v: void 0
              };
            } else {
              clearInterval(self.md5Time);

              content.messages[i]._postData(content.messages[i], function (err, data) {
                var image = data.data.file;
                var param = {
                  type: 'image',
                  file: {
                    url: image.url,
                    width: image.width,
                    height: image.height
                  }
                };
                post--;
                content.messages.splice(i, 1, param);

                if (post == 0) {
                  window.cube.getMessageService().sendMessage(mix, content);
                }
              }, true);
            }
          }
        };

        for (var i = 0; i < content.messages.length; i++) {
          var _ret = _loop(i);

          if (_typeof(_ret) === "object") return _ret.v;
        }
      }
    }, {
      key: "parse",
      value: function parse(json) {
        // 创建消息实例
        var msg = new RichContentMessage(json.to.name);
        msg.receiver.displayName = json.to.displayName;
        msg.anonymous = json.anonymous;
        msg.sender = {
          "name": json.from.name,
          "displayName": json.from.displayName
        };

        if (undefined !== json.group) {
          msg.group = json.group;
          msg.groupName = json.group.name;
        }

        msg.sendTime = json.time.send;
        msg.receiveTime = json.time.receive;
        msg.timestamp = json.time.timestamp;
        msg.sn = json.sn;
        msg.pulled = json.pulled;
        msg.device = json.device; // TODO

        msg.receipted = json.receipted;
        msg.messages = json.contents;
        delete msg.md5;
        return msg;
      }
    }]);

    return RichContentMessage;
  }(_MessageEntity2.MessageEntity);

  _exports.RichContentMessage = RichContentMessage;
});

/***/ }),
/* 326 */,
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(317), __webpack_require__(319), __webpack_require__(318), __webpack_require__(320), __webpack_require__(321), __webpack_require__(312), __webpack_require__(309), __webpack_require__(322), __webpack_require__(316), __webpack_require__(323), __webpack_require__(325), __webpack_require__(324)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _ImageMessage, _VideoMessage, _VoiceMessage, _CardMessage, _CustomMessage, _FileMessage, _TextMessage, _ReplyMessage, _WhiteboardMessage, _HistoryMessage, _RichContentMessage, _LocationMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Image", {
    enumerable: true,
    get: function get() {
      return _ImageMessage.ImageMessage;
    }
  });
  Object.defineProperty(_exports, "Video", {
    enumerable: true,
    get: function get() {
      return _VideoMessage.VideoMessage;
    }
  });
  Object.defineProperty(_exports, "Voice", {
    enumerable: true,
    get: function get() {
      return _VoiceMessage.VoiceMessage;
    }
  });
  Object.defineProperty(_exports, "Card", {
    enumerable: true,
    get: function get() {
      return _CardMessage.CardMessage;
    }
  });
  Object.defineProperty(_exports, "Custom", {
    enumerable: true,
    get: function get() {
      return _CustomMessage.CustomMessage;
    }
  });
  Object.defineProperty(_exports, "File", {
    enumerable: true,
    get: function get() {
      return _FileMessage.FileMessage;
    }
  });
  Object.defineProperty(_exports, "Text", {
    enumerable: true,
    get: function get() {
      return _TextMessage.TextMessage;
    }
  });
  Object.defineProperty(_exports, "Reply", {
    enumerable: true,
    get: function get() {
      return _ReplyMessage.ReplyMessage;
    }
  });
  Object.defineProperty(_exports, "Whiteboard", {
    enumerable: true,
    get: function get() {
      return _WhiteboardMessage.WhiteboardMessage;
    }
  });
  Object.defineProperty(_exports, "History", {
    enumerable: true,
    get: function get() {
      return _HistoryMessage.HistoryMessage;
    }
  });
  Object.defineProperty(_exports, "RichContent", {
    enumerable: true,
    get: function get() {
      return _RichContentMessage.RichContentMessage;
    }
  });
  Object.defineProperty(_exports, "Location", {
    enumerable: true,
    get: function get() {
      return _LocationMessage.LocationMessage;
    }
  });
});

/***/ }),
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
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
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
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(1);

__webpack_require__(62);

__webpack_require__(64);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(378), __webpack_require__(379), __webpack_require__(381)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _WhiteboardListener, _WhiteboardServiceWorker, _Whiteboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Listener", {
    enumerable: true,
    get: function get() {
      return _WhiteboardListener.WhiteboardListener;
    }
  });
  Object.defineProperty(_exports, "ServiceWorker", {
    enumerable: true,
    get: function get() {
      return _WhiteboardServiceWorker.WhiteboardServiceWorker;
    }
  });
  Object.defineProperty(_exports, "Whiteboard", {
    enumerable: true,
    get: function get() {
      return _Whiteboard.Whiteboard;
    }
  });

  /*
   * Boot.js
   * Cube Engine
   *
   * Copyright (c) 2015-2017 Cube Team. All rights reserved.
   */

  /**
   * 引导程序, 负责模块的初始化工作。
   *
   * @author Guan Yong
   */
  // 回调白板 onReady
  if (window && window.addEventListener) {
    window.addEventListener('load', function () {
      var services = window.cube.services.values();

      for (var i = 0; i < services.length; i++) {
        var service = services[i];

        if (service instanceof _WhiteboardServiceWorker.WhiteboardServiceWorker) {
          service.delegate.onReady(service);
        }
      }
    }, false);
  }
});

/***/ }),
/* 378 */
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
  _exports.WhiteboardListener = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var WhiteboardListener =
  /*#__PURE__*/
  function (_Listener) {
    _inherits(WhiteboardListener, _Listener);

    function WhiteboardListener() {
      _classCallCheck(this, WhiteboardListener);

      return _possibleConstructorReturn(this, _getPrototypeOf(WhiteboardListener).apply(this, arguments));
    }

    _createClass(WhiteboardListener, [{
      key: "onReady",

      /**
       * 当白板就绪时被回调。
       *
       * @param {WhiteboardService} whiteboard - 白板服务实例。
       */
      value: function onReady(whiteboard) {}
      /**
       * 当分享白板时被回调。
       *
       * @param {WhiteboardService} whiteboard - 白板服务实例。
       * @param  from - 分享目标。
       */

    }, {
      key: "onShared",
      value: function onShared(whiteboard, from) {}
      /**
       * 当接收到分享白板时被回调。
       *
       * @param {WhiteboardService} whiteboard - 白板服务实例。
       * @param from
       */

    }, {
      key: "onPassiveShared",
      value: function onPassiveShared(whiteboard, from) {}
      /**
       * 分享被取消时回调。
       *
       * @param {WhiteboardService} whiteboard - 白板服务实例。
       */

    }, {
      key: "onRevoked",
      value: function onRevoked(whiteboard, from) {}
      /**
       * 当文件正在上传和处理时回调。
       *
       * @param {WhiteboardService} whiteboard - 白板服务实例。
       * @param {WhiteboardFile} file - 白板文件对象。
       */

    }, {
      key: "onFileProgress",
      value: function onFileProgress(whiteboard, file) {}
      /**
       * 当文件被分享时回调。
       *
       * @param {WhiteboardService} whiteboard - 白板服务实例。
       * @param {WhiteboardFile} file - 被分享的白板文件对象。
       */

    }, {
      key: "onFileShared",
      value: function onFileShared(whiteboard, file) {}
      /**
       * 当白板内有幻灯片操作时回调。
       *
       * @param {WhiteboardService} whiteboard - 白板服务实例。
       * @param {SlideEntity} slide - 幻灯片实体。
       */

    }, {
      key: "onSlide",
      value: function onSlide(whiteboard, slide) {}
      /**
       * 当白板被清空时调用。
       *
       * @param {WhiteboardService} whiteboard - 白板服务实例。
       */

    }, {
      key: "onCleanup",
      value: function onCleanup(whiteboard) {}
      /**
       * 当白板操作发生错误时回调。
       *
       * @param {WhiteboardService} whiteboard - 白板服务实例。
       * @param {CubeStateCode} errorCode - 错误码。
       */

    }, {
      key: "onFailed",
      value: function onFailed(whiteboard, errorCode) {}
      /**
       *  创建白板成功
       * @param {Whiteboard} whiteboard
       */

    }, {
      key: "onCreate",
      value: function onCreate(whiteboard) {}
      /**
       * 邀请白板回调
       * @param whiteboard
       * @param success{Array<String>}
       * @param failure {Array<String>}
       */

    }, {
      key: "onWhiteboardInviteResponded",
      value: function onWhiteboardInviteResponded(whiteboard, success, failure) {}
      /**
       * 被邀请者回调
       * @param whiteboard
       * @param from
       */

    }, {
      key: "onWhiteboardInvite",
      value: function onWhiteboardInvite(whiteboard, from) {}
      /**
       * 拒绝共享
       * @param whiteboard
       * @param from
       */

    }, {
      key: "onReject",
      value: function onReject(whiteboard, from) {}
      /**
       * 删除白板
       * @param whiteboard
       */

    }, {
      key: "onRemove",
      value: function onRemove(whiteboard) {}
      /**
       * 根据id查询白板回调
       * @param whiteboard
       */

    }, {
      key: "onQueryById",
      value: function onQueryById(whiteboard) {}
    }]);

    return WhiteboardListener;
  }(_Listener2.Listener);

  _exports.WhiteboardListener = WhiteboardListener;
});

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(106);

__webpack_require__(1);

__webpack_require__(108);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(69);

__webpack_require__(87);

__webpack_require__(89);

__webpack_require__(196);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(380), __webpack_require__(378), __webpack_require__(381), __webpack_require__(386), __webpack_require__(237), __webpack_require__(238), __webpack_require__(207), __webpack_require__(269), __webpack_require__(235), __webpack_require__(206), __webpack_require__(327)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _WhiteboardService2, _WhiteboardListener, _Whiteboard, _Action, _CubeError, _StateCode, _CELLET, _Permission, _ActionConst, _RegistrationState, Entity) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.WhiteboardServiceWorker = void 0;
  Entity = _interopRequireWildcard(Entity);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var CubeWhiteboardMessage = Entity.Whiteboard;
  var _window$CellCloud = window.CellCloud,
      HashMap = _window$CellCloud.HashMap,
      Logger = _window$CellCloud.Logger,
      ActionDialect = _window$CellCloud.ActionDialect,
      Ajax = _window$CellCloud.Ajax;
  /**
   * 白板服务实现。
   *
   * @class WhiteboardServiceWorker
   * @author Xu Jiangwei, Guan Yong
   */

  var WhiteboardServiceWorker =
  /*#__PURE__*/
  function (_WhiteboardService) {
    _inherits(WhiteboardServiceWorker, _WhiteboardService);

    function WhiteboardServiceWorker(engine, id, name) {
      var _this;

      _classCallCheck(this, WhiteboardServiceWorker);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WhiteboardServiceWorker).call(this, engine, _WhiteboardListener.WhiteboardListener, _CELLET.CELLET.Whiteboard));
      _this.session = engine.session; // 白板权限为默认读写都具备

      _this.permission = _Permission.Permission.WRITE; // 离线模式

      _this.offline = false; // 查询数据回调

      _this.queryWBCallback = null;
      _this.queryWBErrorCallback = null;
      _this.querySharedCallback = null;
      _this.querySharedErrorCallback = null;
      _this.sharedList = null;
      _this.inviteName = null; // 当前远端

      _this.remoteSizeName = null;
      _this.passiveList = [];
      _this.currentWhiteboard = new HashMap();
      _this.choiceFileInfoMap = new HashMap();
      return _this;
    }
    /**
     * @private
     */


    _createClass(WhiteboardServiceWorker, [{
      key: "updateResourcePath",
      value: function updateResourcePath() {
        this.core.setResourcePath(this.engine.resourcePath + '/whiteboard');
      } //创建白板

    }, {
      key: "createWhiteboard",
      value: function createWhiteboard(domId, name, wbId) {
        var whiteboard = new _Whiteboard.Whiteboard(this.engine, name, domId, wbId, this); //只含有中文，英文或者数字 -- 中文：^[\u4e00-\u9fa5]{0,}$

        var a = /^[\u4e00-\u9fa5a-zA-Z0-9]*$/;

        if (a.test(name)) {
          whiteboard.whiteboardId = whiteboard.whiteboardId.toString();
          whiteboard.name = name;
          whiteboard.isShared = false;
          this.currentWhiteboard.put(whiteboard.whiteboardId, whiteboard);
          this.delegate.onCreate(whiteboard, domId); //加载白板

          this.load(whiteboard);
        } else {
          Logger.e("CubeWhiteboard#createWhiteboard", "create Whiteboard failed!");
        }

        return whiteboard;
      } //删除白板

    }, {
      key: "removeWhiteboard",
      value: function removeWhiteboard(wbId) {
        if (this.currentWhiteboard.containsKey(wbId)) {
          var whiteboard = this.currentWhiteboard.get(wbId);
          whiteboard.isShared = false;
          whiteboard.shares = [];
          this.sharedList = null;
          this.currentWhiteboard.remove(wbId);
          this.delegate.onRemove(whiteboard);
          whiteboard.core.unload(whiteboard);
        } else {
          Logger.d('CubeWhiteboard', 'Whiteboard is Exist or already removed ');
        }
      }
    }, {
      key: "load",
      value: function load(whiteboard, width, height) {
        whiteboard.core.load(width, height);
      }
      /**
       * 设置白板是否透明。
       */

    }, {
      key: "setTransparency",
      value: function setTransparency(whiteboard, transparent) {
        whiteboard.core.setTransparency(transparent);
      }
      /**
       * 矫正画布大小跟随容器大小。
       */

    }, {
      key: "adjustSize",
      value: function adjustSize(whiteboard) {
        whiteboard.core.adjustSize();
      }
    }, {
      key: "_syncSize",
      value: function _syncSize(whiteboard) {
        whiteboard.core._syncSize();
      }
    }, {
      key: "_processSyncSize",
      value: function _processSyncSize(whiteboard, paperSize, boardSize) {
        whiteboard.core.syncBoardSize(boardSize);
      }
      /**
       * 重置白板大小。
       */

    }, {
      key: "resize",
      value: function resize(whiteboard, width, height) {
        whiteboard.core.resize(width, height);
      }
      /**
       * 分享白板。
       */

    }, {
      key: "shareWith",
      value: function shareWith(whiteboardId) {
        // 判断用户是否注册
        if (null == this.session || null == this.session.name) {
          return false;
        }

        if (!window.nucleus.talkService.isCalled(_CELLET.CELLET.Whiteboard)) {
          return false;
        }

        if (this.offline) {
          return;
        }

        var whiteboard = this.currentWhiteboard.get(whiteboardId); // 重置对端尺寸

        whiteboard.core.setRemoteSize(-1, -1);
        var shareName = null;
        console.log('Share is whiteboardId ===>' + whiteboardId);

        if (null !== whiteboardId.name) {
          shareName = whiteboard.name.toString();
          console.log('Share is whiteboardName ===>' + shareName);
        }

        var data = {
          "whiteboardId": whiteboardId,
          "name": shareName
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionShare);
        dialect.appendParam('param', data);
        return window.nucleus.talkService.talk(_CELLET.CELLET.Whiteboard, dialect);
      }
      /**
       * 邀请白板
       */

    }, {
      key: "inviteWhiteboard",
      value: function inviteWhiteboard(whiteboardId, cubeIds) {
        //规定 cubeIds 为数字
        var a = /^[0-9]*$/;

        for (var _i = 0; _i < cubeIds.length; _i++) {
          if (!a.test(cubeIds[_i])) {
            Logger.e("CubeWhiteboard#createWhiteboard", "Invited  can only be Number types!");
            return;
          }
        } // 判断用户是否注册


        if (null == this.session || null == this.session.name) {
          return false;
        }

        var whiteboard = this.currentWhiteboard.get(whiteboardId);
        var self = this;
        self.sharedList = cubeIds; //禁止邀请自己

        for (var i = 0; i < self.sharedList.length; i++) {
          if (self.sharedList[i] == self.session.name) {
            return false;
          }
        } //用户是否共享


        if (!self.offline && self.isSharing(whiteboardId)) {
          if (window.nucleus.talkService.isCalled(_CELLET.CELLET.Whiteboard)) {
            self.adjustSize(whiteboard);
            var param = {
              "whiteboardId": whiteboardId,
              "invited": self.sharedList
            };
            var dialect = new ActionDialect();
            dialect.setAction(_ActionConst.ActionConst.ActionInviteWB);
            dialect.appendParam('param', param);
            return window.nucleus.talkService.talk(_CELLET.CELLET.Whiteboard, dialect);
          }
        } else {
          Logger.e("CubeWhiteboard#inviteWhiteboard", "Don't Share,InviteWhiteboard failed!");
        }
      }
      /**
       * 拒绝邀请
       */

    }, {
      key: "rejectWhiteboard",
      value: function rejectWhiteboard(whiteboardId) {
        if (this.offline) {
          return;
        }

        this.inviteName = null;
        var cubeId = this.engine.session.name;
        var param = {
          'whiteboardId': whiteboardId,
          'from': cubeId
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionRejectWE);
        dialect.appendParam('param', param);
        return window.nucleus.talkService.talk(_CELLET.CELLET.Whiteboard, dialect);
      }
      /**
       * 停止分享。
       */

    }, {
      key: "revokeSharing",
      value: function revokeSharing(whiteboardId) {
        if (this.offline) {
          return;
        }

        var whiteboard = this.currentWhiteboard.get(whiteboardId);
        whiteboard.isShared = false;
        this.sharedList = null;
        this.inviteName = null;
        this.currentWhiteboard.put(whiteboardId, whiteboard); // 重置对端尺寸

        whiteboard.core.setRemoteSize(-1, -1); // 还原白板读写权限
        //this.permission = CubePermission.WRITE;

        var data = {
          "whiteboardId": whiteboardId
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionRevoke);
        dialect.appendParam("param", data);
        return window.nucleus.talkService.talk(_CELLET.CELLET.Whiteboard, dialect);
      }
      /**
       * 根据ID查询白板信息
       * @param whireboardId
       */

    }, {
      key: "queryById",
      value: function queryById(whireboardId) {
        if (null == this.session) {
          return;
        }

        var self = this;
        var whiteboard = null;

        if (self.currentWhiteboard.containsKey(whireboardId)) {
          whiteboard = this.currentWhiteboard.get(whireboardId);
          self.delegate.onQueryById(whiteboard);
        } else {
          Logger.d('CubeWhiteboard', 'Whiteboard is Exist');
        }

        return whiteboard;
      }
      /**
       * 设置白板权限
       */

    }, {
      key: "setPermission",
      value: function setPermission(permission) {
        this.permission = permission;
      }
      /**
       * 查询当前白板是否分享成功。
       */

    }, {
      key: "isSharing",
      value: function isSharing(whiteboardId) {
        var whiteboard = this.currentWhiteboard.get(whiteboardId);
        return window.nucleus.talkService.isCalled(_CELLET.CELLET.Whiteboard) && null != this.session && null != whiteboardId && whiteboard.isShared;
      }
      /**
       * 查询当前白板的主动分享数据。
       */

    }, {
      key: "queryRecords",
      value: function queryRecords(whiteboardId, startTime, callback, error) {
        // let whiteboard = this.currentWhiteboard.get(whiteboardId);
        var data = {
          "whiteboardId": whiteboardId,
          "start": startTime
        };
        this.queryWBCallback = callback;

        if (undefined !== error) {
          this.queryWBErrorCallback = error;
        }

        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionQueryWB);
        dialect.appendParam("param", data);
        return window.nucleus.talkService.talk(_CELLET.CELLET.Whiteboard, dialect);
      }
      /**
       * 查询其他白板分享到当前白板的数据。
       */

    }, {
      key: "querySharedRecords",
      value: function querySharedRecords(whiteboardId, startTime, callback, error) {
        this.querySharedCallback = callback;

        if (undefined !== error) {
          this.querySharedErrorCallback = error;
        }

        var data = {
          "shared": whiteboardId,
          "start": startTime
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionQueryShared);
        dialect.appendParam("param", data);
        return window.nucleus.talkService.talk(_CELLET.CELLET.Whiteboard, dialect);
      }
      /**
       * 加载白板记录。
       */

    }, {
      key: "loadRecordData",
      value: function loadRecordData(whiteboard, data, clean) {
        if (null == this.session) {
          return;
        }

        whiteboard.core.loadRecordData(data, clean);
      }
      /**
       * 取消选择的白板工具。
       */

    }, {
      key: "unselect",
      value: function unselect(whiteboard, entity) {
        whiteboard.core.unselect(entity);
      }
      /**
       * 选择白板工具。
       */

    }, {
      key: "selectEntity",
      value: function selectEntity(whiteboard, entity) {
        if (this.permission != _Permission.Permission.WRITE) {
          Logger.e("CubeWhiteboard#selectEntity", "You don't have permission to write on the whiteboard!");
          this.delegate.onFailed(this, _StateCode.StateCode.NotHavePermission);
          return;
        }

        whiteboard.core.selectEntity(entity);
      }
      /**
       * 设置为离线模式。
       */

    }, {
      key: "setOffline",
      value: function setOffline(value) {
        this.offline = value;
      }
      /**
       * 查询当前是否是离线模式。
       */

    }, {
      key: "isOffline",
      value: function isOffline() {
        return this.offline;
      }
      /**
       * 删除指定 SN 的记录，目前此方法没有进行网络同步
       */

    }, {
      key: "remove",
      value: function remove(sn) {
        this.core.remove(sn);
      }
      /**
       * 后退一步白板操作。
       * @param {boolean} silent - 是否按照沉默模式进行操作。
       */

    }, {
      key: "undo",
      value: function undo(whiteboard, silent) {
        if (this.permission != _Permission.Permission.WRITE) {
          Logger.e("CubeWhiteboard#undo", "You don't have permission to write on the whiteboard!");
          return false;
        }

        whiteboard.core.undo(silent);
        return true;
      }
      /**
       * 前进一步白板操作。
       * @param {boolean} silent - 是否按照沉默模式进行操作。
       */

    }, {
      key: "redo",
      value: function redo(whiteboard, silent) {
        if (this.permission != _Permission.Permission.WRITE) {
          Logger.e("CubeWhiteboard#redo", "You don't have permission to write on the whiteboard!");
          return false;
        }

        whiteboard.core.redo(silent);
        return true;
      }
      /**
       * 擦除绘制数据。
       * @param {boolean} silent - 是否按照沉默模式进行操作。
       * @param {boolean} clearSlide - 是否清空幻灯片记录。
       */

    }, {
      key: "erase",
      value: function erase(whiteboard, silent, clearSlide) {
        if (this.permission != _Permission.Permission.WRITE) {
          Logger.e("CubeWhiteboard#erase", "You don't have permission to write on the whiteboard!");
          return false;
        }

        whiteboard.core.erase(silent, clearSlide);
        return true;
      }
      /**
       * 清空白板所有数据。
       * @param {boolean} silent - 是否按照沉默模式进行操作。
       */

    }, {
      key: "cleanup",
      value: function cleanup(whiteboard, silent) {
        if (this.permission != _Permission.Permission.WRITE) {
          Logger.e("CubeWhiteboard#cleanup", "You don't have permission to write on the whiteboard!");
          return false;
        }

        whiteboard.core.cleanup(silent);
        return true;
      }
      /**
       * 返回白板当前缩放比例。
       */

    }, {
      key: "getZoomRatio",
      value: function getZoomRatio(whiteboard) {
        return whiteboard.core.getZoomRatio();
      }
      /**
       * 按照指定比例，等比缩放白板。
       */

    }, {
      key: "zoom",
      value: function zoom(whiteboard, ratio) {
        whiteboard.core.zoom(ratio);
        return ratio;
      }
      /**
       * 重置白板视口。
       */

    }, {
      key: "resetView",
      value: function resetView(whiteboard) {
        whiteboard.core.resetView(null === this.sharedList);
      }
      /**
       * 白板 DOM 节点下的有效的页面元素数量。
       */

    }, {
      key: "numPaperElements",
      value: function numPaperElements(whiteboard) {
        return whiteboard.core.numPaperElements();
      }
      /**
       * 返回幻灯片实体。
       */

    }, {
      key: "getSlide",
      value: function getSlide(whiteboard) {
        return whiteboard.core.getSlide();
      }
      /**
       * @deprecated since version 1.6.18
       */

    }, {
      key: "shareAsSlide",
      value: function shareAsSlide(file, isLoad) {
        return this.workAsSlide(file, isLoad);
      }
      /**
       * 以幻灯片模式进行工作。
       */

    }, {
      key: "workAsSlide",
      value: function workAsSlide(whiteboard, file, isLoad) {
        if (undefined == file) {
          this.delegate.onFailed(whiteboard, _StateCode.StateCode.CubeStateLoadFileFailed);
          Logger.e("CubeWhiteboard#workAsSlide", "File Info is undefined!");
          return;
        }

        return whiteboard.core.workAsSlide(file, isLoad);
      }
      /**
       * 返回当前可扩展实体。
       */

    }, {
      key: "getExEntity",
      value: function getExEntity(whiteboard, name) {
        whiteboard.core.getExEntity(name);
      }
      /**
       * 将白板当前数据导出为消息。
       */

    }, {
      key: "exportMessage",
      value: function exportMessage(receiver) {
        var msg = new CubeWhiteboardMessage(receiver);
        msg.fillContent(this.exportContent());
        return msg;
      }
      /**
       * 将白板消息导入，并还原消息内的白板数据。
       */

    }, {
      key: "importMessage",
      value: function importMessage(message) {
        var content = message.content;

        if (undefined !== content && null != content) {
          return this.importContent(JSON.parse(content));
        } else {
          return false;
        }
      }
      /*
       * 导出当前白板数据。
       */

    }, {
      key: "exportContent",
      value: function exportContent(whiteboard, pages) {
        return whiteboard.core.exportContent(pages);
      }
      /*
       * 导入数据。
       */

    }, {
      key: "importContent",
      value: function importContent(whiteboard, c) {
        if (this.permission != _Permission.Permission.WRITE) {
          Logger.e("CubeWhiteboard#importContent", "You don't have permission to write on the whiteboard!");
          return false;
        }

        return whiteboard.core.importContent(c);
      }
      /**
       * 获取白板录像机。
       */

    }, {
      key: "getRecorder",
      value: function getRecorder(whiteboard) {
        return whiteboard.core.getRecorder();
      }
      /**
       * 获取白板播放器。
       */

    }, {
      key: "getPlayer",
      value: function getPlayer(whiteboard) {
        return whiteboard.core.getPlayer();
      }
      /**
       * 查询当前 Cube 账户下分享到白板的文件清单。
       */

    }, {
      key: "querySharedList",
      value: function querySharedList(success, error) {
        if (null == this.session.name) {
          return false;
        }

        var url = window.cube._CUBE_SERVICE + "/sharing/list.js?name=" + this.session.name + "&t=" + Date.now(); // 创建 script DOM 节点
        //var dom = document.createElement("script");
        //dom.id = "_cube_sflist_" + this.session.name;
        //dom.setAttribute("type", "text/javascript");
        //dom.setAttribute("src", "");

        Ajax.newRequest(url).send(function (reponse) {
          if (reponse.getStatus() == 200) {
            var data = JSON.parse(reponse.getData());

            if (data.state == 200) {
              var sdata = data.data;
              success.call(null, sdata);
            } else {
              error.call(null, data.state);
            }
          } else {
            error.call(null, reponse.getStatus());
          }
        });
        return true;
      }
      /**
       * 搜索当前 Cube 账户下分享的指定文件名的文件。支持模糊搜索。
       */

    }, {
      key: "searchSharedFile",
      value: function searchSharedFile(key, success, error) {
        if (null == this.session.name) {
          return false;
        }

        var url = this.utils.isSecure ? window.cube._CUBE_HTTPS_SERVICE : window.cube._CUBE_HTTP_SERVICE;
        url += "/sharing/search.js?name=" + this.session.name + "&key=" + encodeURI(key);
        Ajax.newRequest(url).send(function (reponse) {
          if (reponse.getStatus() == 200) {
            var data = JSON.parse(reponse.getData());

            if (data.state == 200) {
              var sdata = data.data;
              success.call(null, sdata);
            } else {
              error.call(null, data.state);
            }
          } else {
            error.call(null, reponse.getStatus());
          }
        });
        return true;
      }
      /**
       * 删除当前 Cube 账户下分享的指定文件名的文件。删除后文件不可恢复。
       */

    }, {
      key: "deleteSharedFile",
      value: function deleteSharedFile(filename, success, error) {
        if (null == this.session.name) {
          return false;
        }

        var url = this.utils.isSecure ? window.cube._CUBE_HTTPS_SERVICE : window.cube._CUBE_HTTP_SERVICE;
        url += "/sharing/delete.js?name=" + this.session.name + "&file=" + encodeURI(filename);
        Ajax.newRequest(url).send(function (reponse) {
          if (reponse.getStatus() == 200) {
            var data = JSON.parse(reponse.getData());

            if (data.state == 200) {
              var sdata = data.data;
              success.call(null, sdata);
            } else {
              error.call(null, data.state);
            }
          } else {
            error.call(null, reponse.getStatus());
          }
        });
        return true;
      }
      /**
       * 设置背景图片。
       */

    }, {
      key: "setBackgroundImage",
      value: function setBackgroundImage(whiteboard, url, loadCallback) {
        return whiteboard.core.setBackgroundImage(url, loadCallback);
      }
    }, {
      key: "setBackgroundColor",
      value: function setBackgroundColor(whiteboard, color) {
        whiteboard.core.setBackgroundColor(color);
      } // 返回命令的 SN 号

    }, {
      key: "record",
      value: function record(whiteboard, type, set, raw, note) {
        return whiteboard.core.record(type, set, raw, note);
      }
    }, {
      key: "onRegisterStateChanged",
      value: function onRegisterStateChanged(session) {
        var state = session.regState;

        if (state == _RegistrationState.RegistrationState.Ok) {
          this.session = session;

          if (null != this.sharedList) {
            var self = this;
            var data = {
              "whiteboardId": self.name,
              "name": self.sharedList
            };
            var dialect = new ActionDialect();
            dialect.setAction(_ActionConst.ActionConst.ActionShare);
            dialect.appendParam('param', data);
            window.nucleus.talkService.talk(_CELLET.CELLET.Whiteboard, dialect);
          }
        } else {
          this.session = null;
        }
      }
    }, {
      key: "onDialogue",
      value: function onDialogue(action, dialect) {
        if (action == _ActionConst.ActionConst.ActionVGCmd) {
          Logger.d('CubeWhiteboard', 'VG Command received.');

          if (this.offline) {
            return;
          }

          var data = dialect.getParam("data");
          var wb = this.currentWhiteboard.get(data.whiteboardId);

          this._processVGCommand(data); // 如果是对方共享的幻灯片, 则保存笔记


          if (null != data.command.page) {
            var slide = this.getSlide(wb);

            if (slide) {
              // 将 Command 转为 Record
              var cmd = data.command;
              var r = {
                sn: cmd.sn,
                type: cmd.name,
                set: null,
                raw: {
                  "param": cmd.param,
                  "attr": cmd.attr
                },
                page: cmd.page
              };
              slide.appendNote(r);
            }
          }
        } else if (action == _ActionConst.ActionConst.ActionRestrain) {
          Logger.d('CubeWhiteboard', 'Restrain');

          if (null == this.sharedList) {
            Logger.d('CubeWhiteboard', 'Invalid restrain');
            return;
          }

          if (this.offline) {
            return;
          }

          var data = dialect.getParam("data");

          var _wb = this.currentWhiteboard.get(data.whiteboardId);

          var from = data.from;

          if (this.sharedList.indexOf(from) < 0) {
            Logger.d('CubeWhiteboard', 'Invalid restrain');
            return;
          }

          if (this.remoteSizeName != from) {
            this._syncSize(_wb);
          }

          if (undefined !== data.boardSize) {
            this.remoteSizeName = from.toString();

            this._processSyncSize(data.paperSize, data.boardSize);
          }
        } else if (action == _ActionConst.ActionConst.ActionQueryWBAck) {
          var state = dialect.getParam("state");

          if (state.code == 200) {
            if (null != this.queryWBCallback) {
              this.queryWBCallback.call(null, this, dialect.getParam("data"));
            }
          } else {
            if (null != this.queryWBErrorCallback) {
              this.queryWBErrorCallback.call(null, this, state.code);
              this.queryWBErrorCallback = null;
            }
          }
        } else if (action == _ActionConst.ActionConst.ActionQuerySharedAck) {
          var state = dialect.getParam("state");

          if (state.code == 200) {
            if (null != this.querySharedCallback) {
              this.querySharedCallback.call(null, this, dialect.getParam("data"));
            }
          } else {
            if (null != this.querySharedErrorCallback) {
              this.querySharedErrorCallback.call(null, this, state.code);
              this.querySharedErrorCallback = null;
            }
          }
        } else if (action == _ActionConst.ActionConst.ActionShareAck) {
          var _state = dialect.getParam("state");

          var _data = dialect.getParam("data");

          var whiteboard = _data.whiteboard;

          var _wb2 = this.currentWhiteboard.get(whiteboard.whiteboardId);

          if (_state.code == 200) {
            Logger.i('CubeWhiteboard', 'Shared ok.');
            _wb2.shares = whiteboard.shares; // 回调委派

            this.delegate.onShared(whiteboard, _data.from);
            _wb2.isShared = true;
            this.currentWhiteboard.put(_data.whiteboardId, _wb2); // 将自己的尺寸数据发送给对端

            this._syncSize(_wb2);
          } else {
            Logger.e('CubeWhiteboard', 'Shared failed!'); // 失败，将分享列表置空

            this.sharedList = null; // 回调委派

            this.delegate.onFailed(whiteboard, _state.code);
          }
        } else if (action == _ActionConst.ActionConst.ActionShare) {
          var _data2 = dialect.getParam("data");

          var _whiteboard = _data2.whiteboard;

          var _wb3 = this.currentWhiteboard.get(_whiteboard.whiteboardId);

          if (_wb3.whiteboardId == _whiteboard.whiteboardId) {
            _wb3.shares.push(_data2.from);
          }

          if (this.passiveList.indexOf(_data2.from) < 0) {
            this.passiveList.push(_data2.from);
          }

          this.delegate.onPassiveShared(_whiteboard, _data2.from);
        } else if (action == _ActionConst.ActionConst.ActionRevokeAck) {
          var _state2 = dialect.getParam("state");

          var _data3 = dialect.getParam("data");

          var _whiteboard2 = _data3.whiteboard;

          var _wb4 = this.currentWhiteboard.get(_data3.whiteboardId);

          if (_whiteboard2.whiteboardId == _wb4.whiteboardId) {
            _wb4.shares = [];
          }

          if (_state2.code == 200) {
            Logger.i('CubeWhiteboard', 'Revoked ok.'); // 回调委派

            this.delegate.onRevoked(_whiteboard2, _data3.from);
          } else {
            Logger.e('CubeWhiteboard', 'Revoked failed.'); // 回调委派

            this.delegate.onFailed(_whiteboard2, _state2.code);
          }
        } else if (action == _ActionConst.ActionConst.ActionRevoke) {
          var _data4 = dialect.getParam("data");

          var _whiteboard3 = _data4.whiteboard;

          var _wb5 = this.currentWhiteboard.get(_whiteboard3.whiteboardId);

          var index = _wb5.shares.indexOf(_data4.from);

          if (index >= 0) {
            _wb5.shares.splice(index, 1);
          }

          var index = this.passiveList.indexOf(_data4.from);

          if (index >= 0) {
            this.passiveList.splice(index, 1);
          } // 回调委派


          this.delegate.onRevoked(_whiteboard3, _data4.from);
        } else if (action == _ActionConst.ActionConst.ActionInviteWBAck) {
          var _state3 = dialect.getParam("state");

          var _data5 = dialect.getParam("data");

          var _whiteboard4 = _data5.whiteboard;

          var _wb6 = this.currentWhiteboard.get(_whiteboard4.whiteboardId);

          if (_state3.code == 200) {
            Logger.i('CubeCallService#ActionInviteWBAck', 'InviteWhiteboard ok.'); // 将自己的尺寸数据发送给对端

            this._syncSize(_wb6);

            this.delegate.onWhiteboardInviteResponded(_whiteboard4, [_data5.success], [_data5.failure]);
          } else if (_state3.code == 1602) {
            this.delegate.onFailed(_whiteboard4, _StateCode.StateCode.WhiteboardNotExist);
          } else {
            this.delegate.onFailed(_whiteboard4, _state3.code);
            Logger.w('CubeCallService#ActionInviteWBAck', 'A state code that has no effect : ' + _state3.code);
          }
        } else if (action == _ActionConst.ActionConst.ActionInviteWB) {
          var _data6 = dialect.getParam("data");

          var _whiteboard5 = _data6.whiteboard;
          var _from = _data6.from;
          this.inviteName = _whiteboard5.name;
          this.delegate.onWhiteboardInvite(_whiteboard5, _from);
        } else if (action == _ActionConst.ActionConst.ActionRejectWEAck) {
          var _state4 = dialect.getParam("state");

          var _data7 = dialect.getParam("data");

          var _whiteboard6 = _data7.whiteboard;
          var _from2 = _data7.from; // let wb = this.currentWhiteboard.get(whiteboard.whiteboardId);

          if (_state4.code == 200) {
            Logger.i('CubeWhiteboard#RejectWhiteboard', 'Reject success.');
            this.delegate.onReject(_whiteboard6, _from2);
          } else if (_state4.code == 1602) {
            this.delegate.onFailed(_whiteboard6, _StateCode.StateCode.WhiteboardNotExist);
          } else {
            this.delegate.onFailed(_whiteboard6, _state4.code);
            Logger.w('CubeCallService#ActionInviteWBAck', 'A state code that has no effect : ' + _state4.code);
          }
        } else if (action == _ActionConst.ActionConst.ActionRejectWE) {
          Logger.i('CubeWhiteboard#RejectWhiteboard', 'Peer Reject Whiteboard.');

          var _data8 = dialect.getParam("data");

          var _whiteboard7 = _data8.whiteboard;
          var _from3 = _data8.from;
          this.delegate.onReject(_whiteboard7, _from3);
        }
      }
    }, {
      key: "_processVGCommand",
      value: function _processVGCommand(data) {
        // let boardName = data.boardName;
        var from = data.from;
        var group = null;

        if (data.group !== undefined && data.group != "") {
          group = data.group;
          Logger.d('CubeWhiteboard', 'Group shared - group: ' + data.group + ' and from: ' + data.from);
        }

        var wb = this.currentWhiteboard.get(data.whiteboardId); // 判断 from 是否在 shared 清单里

        if (wb.shares.indexOf(from) < 0) {
          if (null == group) {
            Logger.d('CubeWhiteboard', 'No shared source from: ' + from);
            return;
          }

          if (wb.shares.indexOf(group) < 0) {
            Logger.d('CubeWhiteboard', 'No shared source from group: ' + group);
            return;
          }
        } // let to = data.to;


        this.loadVGCommand(wb, data.command, from, group);
      }
    }, {
      key: "loadVGCommand",
      value: function loadVGCommand(whiteboard, command, from, group) {
        return whiteboard.core.loadVGCommand(command, from, group);
      }
    }, {
      key: "shareFile",
      value: function shareFile() {
        var _this2 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          onChoice: function onChoice() {},
          onChange: function onChange() {},
          onCompleted: function onCompleted() {},
          onError: function onError() {}
        };

        this._clearUploadFileCache(); // 获取地址


        var isHttps = window.location.protocol.indexOf('https') !== -1;
        var sharingAddress = 'http://e1.shixinyun.com:8080';

        if (isHttps) {
          sharingAddress = 'https://e1.shixinyun.com:9443';
        }

        var id = '__CUBE_WB_FILE_' + Date.now();
        var iframe = document.createElement('iframe');
        iframe.name = id + '_IFRAME';
        iframe.id = id + '_IFRAME';
        iframe.className = '__CUBE_WB_FILE_CONTAINER';
        var form = document.createElement('form');
        form.id = id + '_FORM';
        form.method = 'POST';
        form.enctype = 'multipart/form-data';
        form.target = id + '_IFRAME';
        form.action = sharingAddress + _Action.Action.UploadFile + '?name=' + this.engine.accName;
        var file = document.createElement('input');
        file.id = id + '_FILE';
        file.name = 'uploadfile';
        file.type = 'file';
        file.setAttribute('accept', '.jpeg, .jpg, .png, .bmp, .gif, .doc, .docx, .ppt, .pptx, .pdf, .mp4, .mp3, .ogg, .wav');
        form.appendChild(file);
        iframe.appendChild(form);
        document.body.appendChild(iframe);
        this.choiceFileInfoMap.put(id, {
          upload: false,
          id: id
        });
        var dom = document.getElementById(id + '_FILE');

        dom.onchange = function () {
          if (dom.files && dom.files.length > 0) {
            var formDom = document.getElementById(id + '_FORM');

            if (formDom) {
              if (typeof options.onChoice === 'function') {
                options.onChoice(dom.files[0]);
              }

              formDom.submit();

              _this2._checkFileProgress(options, id);

              return true;
            }
          }

          _this2._clearUploadFileCache(id);
        };

        dom.click();
      }
    }, {
      key: "_clearUploadFileCache",
      value: function _clearUploadFileCache(id) {
        var clearById = function clearById(_id) {
          var el = document.getElementById(_id + '_IFRAME');

          if (el) {
            el.parentNode.removeChild(el);
          }
        };

        if (typeof id === 'string') {
          clearById(id);
        } else {
          // 清理未选择的数据
          var list = this.choiceFileInfoMap.values();
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var value = _step.value;

              if (!value.upload) {
                clearById(value.id);
              }
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
      }
    }, {
      key: "_checkFileProgress",
      value: function _checkFileProgress() {
        var _this3 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          onChange: function onChange() {},
          onCompleted: function onCompleted() {},
          onError: function onError() {}
        };
        var id = arguments.length > 1 ? arguments[1] : undefined;
        var CT_READY = 0;
        var CT_STARTED = 1;
        var CT_RUNNING = 2;
        var CT_COMPLETED = 8;
        var CT_FAILED = 16;
        var processTimer = 0;
        var opt = {
          onChange: function onChange(type, rec, total) {
            if (typeof options.onChange === 'function') {
              options.onChange(type, rec, total);
            }
          },
          onCompleted: function onCompleted(file) {
            _this3._clearUploadFileCache(id);

            if (typeof options.onCompleted === 'function') {
              options.onCompleted(file);
            }
          },
          onError: function onError(error) {
            _this3._clearUploadFileCache(id);

            options.onError(error);
          }
        }; // 初始化 JSONP

        if (typeof window.jsonp_callback !== 'function') {
          window.jsonp_callback = function (data) {};
        } // 获取地址


        var isHttps = window.location.protocol.indexOf('https') !== -1;
        var sharingAddress = 'http://e1.shixinyun.com:8080';

        if (isHttps) {
          sharingAddress = 'https://e1.shixinyun.com:9443';
        }

        function requestFileUploadProcess() {
          window.$.ajax({
            url: sharingAddress + _Action.Action.FileProcess + "?t=" + Date.now(),
            type: 'POST',
            data: {},
            jsonp: "callbackparam",
            jsonpCallback: "jsonp_callback",
            timeout: 10000,
            dataType: "jsonp",
            success: function success(data) {
              if (data.state === 200) {
                var raw = data.data;
                var byteRead = raw.bytesread;
                var contentLength = raw.contentlength;
                var state = raw.state;

                if (state === 200) {
                  opt.onChange(0, byteRead, contentLength);
                  var converting = raw.converting;

                  if (!converting) {
                    var file = raw.file;
                    opt.onCompleted(file);
                  } else {
                    // 请求文件转换状态
                    requestConvertProcess();
                  }
                } else if (state === 100 || state === 0) {
                  // 上传未完成，显示上传进度
                  opt.onChange(0, byteRead, contentLength);
                  processTimer = setTimeout(function () {
                    requestFileUploadProcess();
                  }, 2000);
                } else {
                  opt.onError(new _CubeError.CubeError(window.CubeStateCode.WhiteboardUploadFailed, 'Upload file to whiteboard failed!'));
                }
              }
            },
            cache: false,
            contentType: false,
            processData: false,
            error: function error() {
              opt.onError(new _CubeError.CubeError(window.CubeStateCode.WhiteboardUploadFailed, 'Upload file to whiteboard failed!'));
            }
          });
        }

        function requestConvertProcess() {
          window.$.ajax({
            url: sharingAddress + _Action.Action.ConvertProcess + "?t=" + Date.now(),
            type: 'POST',
            data: {},
            jsonp: "callbackparam",
            jsonpCallback: "jsonp_callback",
            timeout: 10000,
            dataType: "jsonp",
            success: function success(data) {
              if (data.state === 200) {
                var conversion = data.data.conversion;
                var name = data.data.name;
                var filename = data.data.filename;
                var state = data.data.state;
                console.log("File conversion: " + conversion);

                if (state === 200) {
                  if (conversion === CT_READY) {
                    setTimeout(function () {
                      requestConvertProcess();
                    }, 2000);
                  } else if (conversion === CT_STARTED) {
                    setTimeout(function () {
                      requestConvertProcess();
                    }, 2000);
                  } else if (conversion === CT_RUNNING) {
                    setTimeout(function () {
                      requestConvertProcess();
                    }, 2000);
                  } else if (conversion === CT_COMPLETED) {
                    opt.onCompleted(data.data.file);
                  } else if (conversion === CT_FAILED) {
                    opt.onError(new _CubeError.CubeError(window.CubeStateCode.WhiteboardConvertFailed, 'Convert file to whiteboard failed!'));
                  } else {
                    setTimeout(function () {
                      requestConvertProcess();
                    }, 2000);
                  }
                } else {
                  opt.onError(new _CubeError.CubeError(window.CubeStateCode.WhiteboardConvertFailed, 'Convert file to whiteboard failed!'));
                }
              }
            },
            ache: false,
            contentType: false,
            processData: false,
            error: function error() {
              opt.onError(new _CubeError.CubeError(window.CubeStateCode.WhiteboardConvertFailed, 'Convert file to whiteboard failed!'));
            }
          });
        }

        setTimeout(requestFileUploadProcess, 1000);
      }
    }]);

    return WhiteboardServiceWorker;
  }(_WhiteboardService2.WhiteboardService);

  _exports.WhiteboardServiceWorker = WhiteboardServiceWorker;
});

/***/ }),
/* 380 */
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
  _exports.WhiteboardService = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var WhiteboardService =
  /*#__PURE__*/
  function (_Service) {
    _inherits(WhiteboardService, _Service);

    function WhiteboardService() {
      _classCallCheck(this, WhiteboardService);

      return _possibleConstructorReturn(this, _getPrototypeOf(WhiteboardService).apply(this, arguments));
    }

    _createClass(WhiteboardService, [{
      key: "setTransparency",

      /**
       * 设置白板是否透明。
       *
       * @param {boolean} transparent - 指定白板是否透明。如果设置为 <code>true</code> 表示透明，否则表示不透明。
       */
      value: function setTransparency(transparent) {}
      /**
       * 矫正画布大小跟随容器大小。
       */

    }, {
      key: "adjustSize",
      value: function adjustSize() {}
      /**
       * 重置白板大小。
       *
       * @param {Number} width - 指定白板宽度。
       * @param {Number} height - 指定白板高度。
       */

    }, {
      key: "resize",
      value: function resize(width, height) {}
      /**
       * 分享白板给指定用户。
       *
       * @param {String} whiteboardId 指定需要分享的ID。
       * @returns {boolean} 返回是否分享成功。
       */

    }, {
      key: "shareWith",
      value: function shareWith(whiteboardId) {}
      /**
       * 停止分享。
       * @param whiteboardId
       */

    }, {
      key: "revokeSharing",
      value: function revokeSharing(whiteboardId) {}
      /**
       * 设置白板权限。
       *
       * @param {CubePermission} permission - 指定当前白板权限。
       */

    }, {
      key: "setPermission",
      value: function setPermission(permission) {}
      /**
       * 查询当前白板是否分享成功。
       *
       * @param whiteboardId
       */

    }, {
      key: "isSharing",
      value: function isSharing(whiteboardId) {}
      /**
       * 查询当前白板的主动分享数据。
       *
       * @param {String} whiteboardId - 指定分享用户的 Cube 号。
       * @param {Number} startTime - 指定查询起始时间戳。
       * @param {Function} success - 查询成功回调。
       * @param {Function} error - 查询错误回调。
       */

    }, {
      key: "queryRecords",
      value: function queryRecords(whiteboardId, startTime, success, error) {}
      /**
       * 查询其他白板分享到当前白板的数据。
       *
       * @param {String} whiteboardId - 指定分享用户的 Cube 号。
       * @param {Number} startTime - 指定查询起始时间戳。
       * @param {Function} success - 查询成功回调。
       * @param {Function} error - 查询错误回调。
       */

    }, {
      key: "querySharedRecords",
      value: function querySharedRecords(whiteboardId, startTime, success, error) {}
      /**
       * 加载白板记录。
       *
       * @param {Object} data - 指定需要加载的记录。
       * @param {boolean} clean - 指定加载记录前是否清空当前白板数据，设置为 <code>true</code> 则清空白板后加载记录。
       */

    }, {
      key: "loadRecordData",
      value: function loadRecordData(data, clean) {}
      /**
       * 取消选择的白板工具。
       *
       * @param {GraphicsEntity} entity - 指定需要取消工作状态的白板工具实体。
       */

    }, {
      key: "unselect",
      value: function unselect(entity) {}
      /**
       * 选择白板工具。选择新工具后，之前的白板工具将立即失效。
       *
       * @param {GraphicsEntity} entity - 指定需要选择的白板工具实体。
       */

    }, {
      key: "selectEntity",
      value: function selectEntity(entity) {}
      /**
       * 设置为离线模式。离线模式下白板将不会和服务器进行任何数据通讯。
       *
       * @param {boolean} value - 设置为 <code>true</code> 表示使用离线模式，设置为 <code>false</code> 表示使用在线模式。
       */

    }, {
      key: "setOffline",
      value: function setOffline(value) {}
      /**
       * 查询当前是否是离线模式。
       *
       * @returns {boolean} - 返回 <code>true</code> 表示当前白板处于离线工作模式。
       */

    }, {
      key: "isOffline",
      value: function isOffline() {}
      /**
       * 后退一步白板操作。
       *
       * @returns {boolean} 返回是否操作成功。
       */

    }, {
      key: "undo",
      value: function undo(silent) {}
      /**
       * 前进一步白板操作。
       *
       * @returns {boolean} 返回是否操作成功。
       */

    }, {
      key: "redo",
      value: function redo(silent) {}
      /**
       * 擦除绘制数据。
       *
       * @returns {boolean} 返回是否操作成功。
       */

    }, {
      key: "erase",
      value: function erase(silent, clearSlide) {}
      /**
       * 清空白板所有数据。
       *
       * @returns {boolean} 返回是否操作成功。
       */

    }, {
      key: "cleanup",
      value: function cleanup(silent) {}
      /**
       * 返回白板当前缩放比例。
       *
       * @returns {Number} 当前视口的缩放比例，值域：0.0 ~ 5.0
       */

    }, {
      key: "getZoomRatio",
      value: function getZoomRatio() {}
      /**
       * 按照指定比例，等比缩放白板。
       *
       * @param {Number} ratio - 指定缩放比例。
       */

    }, {
      key: "zoom",
      value: function zoom(ratio) {}
      /**
       * 重置白板视口。
       */

    }, {
      key: "resetView",
      value: function resetView() {}
      /**
       * 白板 DOM 节点下的有效的页面元素数量。
       * @returns {Number}
       */

    }, {
      key: "numPaperElements",
      value: function numPaperElements() {}
      /**
       * 返回幻灯片实体。
       *
       * @returns {SlideEntity} 幻灯片图形实体。如果当前白板没有使用幻灯片返回 <code>null</code> 。
       */

    }, {
      key: "getSlide",
      value: function getSlide() {}
      /**
       * @deprecated since version 1.6.18
       */

    }, {
      key: "shareAsSlide",
      value: function shareAsSlide(file, isLoad) {}
      /**
       * 以幻灯片模式进行工作。
       *
       * @param {WhiteboardFile} file - 指定需要加载为幻灯片的文件。
       */

    }, {
      key: "workAsSlide",
      value: function workAsSlide(file, isLoad) {}
      /**
       * 返回当前可扩展实体
       * @param name {String}
       */

    }, {
      key: "getExEntity",
      value: function getExEntity(name) {}
      /**
       * 将白板当前数据导出为消息。
       *
       * @param {String} receiver - 指定消息收件人
       * @returns {CubeWhiteboardMessage} 返回成功导出的白板消息，如果导出失败，返回 <code>null</code> 。
       */

    }, {
      key: "exportMessage",
      value: function exportMessage(receiver) {}
      /**
       * 将白板消息导入，并还原消息内的白板数据。
       *
       * @param {CubeWhiteboardMessage} message - 指定导入的消息实体。
       * @returns {boolean} 如果导入成功返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "importMessage",
      value: function importMessage(message) {}
      /**
       * 导出当前白板数据。
       *
       * @param {Array.<Number>} [pages] - 指定页码，如果不填写该参数则默认导出当前页数据。
       * @returns {Object} 返回 JSON 格式的数据内容。
       */

    }, {
      key: "exportContent",
      value: function exportContent(pages) {}
      /**
       * 导入数据到白板。
       *
       * @param {Object} data - 指定导入的数据。
       * @returns {boolean} 如果导入成功返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "importContent",
      value: function importContent(data) {}
      /**
       * 获取白板录像机。
       */

    }, {
      key: "getRecorder",
      value: function getRecorder() {}
      /**
       * 获取白板播放器。
       */

    }, {
      key: "getPlayer",
      value: function getPlayer() {}
      /**
       * @typedef {Object} SharedFileListData
       * @property {Number} total - 清单里包含的文件数据总数量。
       * @property {Array.<WhiteboardFile>} list - 存储文件数据的数组。
       */

      /**
       * 成功获取到白板文件清单后的回调函数。
       *
       * @callback ListSharedFileSuccess
       * @param {SharedFileListData} listData - 清单数据。
       */

      /**
       * 获取白板文件数据失败后的回调函数。
       *
       * @callback ListSharedFileError
       * @param {CubeStateCode} errorCode - 错误代码。
       */

      /**
       * 查询当前 Cube 账户下分享到白板的文件清单。
       *
       * @param {ListSharedFileSuccess} success - 查询成功回调。
       * @param {ListSharedFileError} error - 查询失败回调。
       * @returns {boolean} 如果成功发起数据请求返回 <code>true</code> 。
       */

    }, {
      key: "querySharedList",
      value: function querySharedList(success, error) {}
      /**
       * 搜索当前 Cube 账户下分享的指定文件名的文件。支持模糊搜索。
       *
       * @param {String} key - 指定待搜索的文件名关键字。
       * @param {ListSharedFileSuccess} success - 查询成功回调。
       * @param {ListSharedFileError} error - 查询失败回调。
       * @returns {boolean} 如果成功发起数据请求返回 <code>true</code> 。
       */

    }, {
      key: "searchSharedFile",
      value: function searchSharedFile(key, success, error) {}
      /**
       * 处理分享白板文件回调。
       *
       * @callback SharedFileCallback
       * @param {WhiteboardFile} file - 白板文件。
       */

      /**
       * 删除当前 Cube 账户下分享的指定文件名的文件。删除后文件不可恢复。
       *
       * @param {String} filename - 指定待删除文件的原始文件名。
       * @param {SharedFileCallback} success - 删除成功回调。
       * @param {ListSharedFileError} error - 删除失败回调。
       * @returns {boolean} 如果成功发起数据请求返回 <code>true</code> 。
       */

    }, {
      key: "deleteSharedFile",
      value: function deleteSharedFile(filename, success, error) {}
      /**
       * 设置背景图片。
       *
       * @param {String} url - 指定图片的 URL 地址。
       * @param {Function} loadCallback - 指定图片加载状态回调。
       */

    }, {
      key: "setBackgroundImage",
      value: function setBackgroundImage(url, loadCallback) {}
      /**
       * 设置白板背景颜色
       * @param color {String} - 背景色值, 可能的值: "rgba(0, 0, 0, 1)", "#ffffff", "transparent"
       */

    }, {
      key: "setBackgroundColor",
      value: function setBackgroundColor(color) {}
      /**
       *  创建白板
       * @param {String}name
       * @param domId
       * @param whiteboardId
       */

    }, {
      key: "createWhiteboard",
      value: function createWhiteboard(domId, name, whiteboardId) {}
      /**
       * 邀请共享白板
       * @param whiteboardId
       * @param cubeIds {Array<String>}
       */

    }, {
      key: "inviteWhiteboard",
      value: function inviteWhiteboard(whiteboardId, cubeIds) {}
      /**
       * 拒绝邀请
       * @param whiteboardId
       */

    }, {
      key: "rejectWhiteboard",
      value: function rejectWhiteboard(whiteboardId) {}
      /**
       * 删除白板
       * @param whiteboardId
       */

    }, {
      key: "removeWhiteboard",
      value: function removeWhiteboard(whiteboardId) {}
      /**
       * 查询白板
       * @param whireboardId
       */

    }, {
      key: "queryById",
      value: function queryById(whireboardId) {}
    }]);

    return WhiteboardService;
  }(_Service2.Service);

  _exports.WhiteboardService = WhiteboardService;
});

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(107);

__webpack_require__(108);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(126);

__webpack_require__(62);

__webpack_require__(64);

__webpack_require__(141);

__webpack_require__(196);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(378), __webpack_require__(382), __webpack_require__(235), __webpack_require__(207), __webpack_require__(238)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _WhiteboardListener, _cubeWhiteboardCore, _ActionConst, _CELLET, _StateCode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Whiteboard = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var ActionDialect = window.CellCloud.ActionDialect;
  /**
   * 白板对象
   */

  var Whiteboard =
  /*#__PURE__*/
  function () {
    /**
     * @param {CubeEngine} engine
     * @param {String} name
     * @param {String} id
     * @param {String} [whiteboardId]
     */
    function Whiteboard(engine, name, id, whiteboardId, worker) {
      var _this = this;

      _classCallCheck(this, Whiteboard);

      this.whiteboardId = typeof whiteboardId === 'string' ? whiteboardId : Whiteboard.generateSerialNumber().toString();
      this.name = name;
      this.shares = [];
      this.isShared = false;
      this.view = [];
      this.delay = 0;
      this.core = new _cubeWhiteboardCore.WhiteboardCoreServiceWorker(id, this.whiteboardId, engine.session.name);
      this.core.setResourcePath(engine.resourcePath + '/whiteboard');
      this.core.setListener({
        onSlideOpened: function onSlideOpened(slide) {
          worker.delegate.onFileShared(worker, slide.file);
          console.log('FileShared success');
        },
        onSlideChanged: function onSlideChanged(slide) {
          worker.delegate.onSlide(worker, slide);
          console.log('handle Slide success');
        },
        onCleanup: function onCleanup() {
          worker.delegate.onCleanup(worker);
          console.log('Clear success');
        },
        onChange: function onChange(data) {
          if (!worker.offline) {
            var dialect = new ActionDialect();
            var action = _ActionConst.ActionConst.ActionRestrain;

            if (data.command) {
              action = _ActionConst.ActionConst.ActionVGCmd;
              data.command.from = engine.session.name;
            } else if (_this.sharedList === null) {
              return;
            }

            dialect.setAction(action);
            dialect.appendParam("param", data);

            var task = function task() {
              var ret = window.nucleus.talkService.talk(_CELLET.CELLET.Whiteboard, dialect);

              if (!ret) {
                // 报告网络错误
                worker.delegate.onFailed(worker, _StateCode.StateCode.RequestTimeout);
                console.log('Network error , code: ' + _StateCode.StateCode.RequestTimeout);
              }
            };

            if (_this.delay > 0) {
              setTimeout(task, _this.delay);
            } else {
              task();
            }
          }
        },
        onFailed: function onFailed(stateCode) {
          worker.delegate.onFailed(worker, stateCode);
          console.log('onFailed code is ' + stateCode);
        }
      });
    }
    /**
     * 设置白板id（由生成消息SN的方式生成）
     * @returns {String}
     */


    _createClass(Whiteboard, [{
      key: "getWhiteboardId",
      value: function getWhiteboardId() {
        return this.whiteboardId;
      }
      /**
       * 白板名称
       * @returns {String}
       */

    }, {
      key: "getName",
      value: function getName() {
        return this.name;
      }
      /**
       * 当前共享此白板用户cubeId
       * @returns {Array}
       */

    }, {
      key: "getShares",
      value: function getShares() {
        return this.shares;
      }
    }, {
      key: "setDelay",
      value: function setDelay(delay) {
        this.delay = delay;
      } //生成白板id

    }], [{
      key: "generateSerialNumber",
      value: function generateSerialNumber() {
        if (null == this.gCounts || this.gCounts >= 99) {
          this.gCounts = 0;
        }

        ++this.gCounts;
        var buf = [];
        var date = new Date();
        var dd = date.getDate();
        var hh = date.getHours();
        var mm = date.getMinutes();
        var ss = date.getSeconds();
        buf.push(window.cube._cube_token);
        buf.push(dd > 9 ? dd : "0" + dd);
        buf.push(hh > 9 ? hh : "0" + hh);
        buf.push(mm > 9 ? mm : "0" + mm);
        buf.push(ss > 9 ? ss : "0" + ss);
        buf.push(this.gCounts > 9 ? this.gCounts : "0" + this.gCounts);
        var ret = buf.join('');
        buf.splice(0, buf.length);
        buf = null;
        ret = Number(ret);
        return ret;
      }
    }]);

    return Whiteboard;
  }();

  _exports.Whiteboard = Whiteboard;
});

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(99);

__webpack_require__(199);

__webpack_require__(366);

__webpack_require__(347);

__webpack_require__(100);

__webpack_require__(106);

__webpack_require__(257);

__webpack_require__(1);

__webpack_require__(107);

__webpack_require__(212);

__webpack_require__(300);

__webpack_require__(108);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(118);

__webpack_require__(120);

__webpack_require__(121);

__webpack_require__(125);

__webpack_require__(126);

__webpack_require__(213);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(242);

__webpack_require__(132);

__webpack_require__(136);

__webpack_require__(139);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(227);

__webpack_require__(383);

__webpack_require__(142);

__webpack_require__(384);

__webpack_require__(146);

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


        var _service_WhiteboardCoreListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardCoreListener", function () {
          return _service_WhiteboardCoreListener_js__WEBPACK_IMPORTED_MODULE_0__["WhiteboardCoreListener"];
        });
        /* harmony import */


        var _service_impl_WhiteboardCoreServiceWorker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardCoreServiceWorker", function () {
          return _service_impl_WhiteboardCoreServiceWorker_js__WEBPACK_IMPORTED_MODULE_1__["WhiteboardCoreServiceWorker"];
        });
        /* harmony import */


        var _service_WhiteboardRecorderListener_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardRecorderListener", function () {
          return _service_WhiteboardRecorderListener_js__WEBPACK_IMPORTED_MODULE_2__["WhiteboardRecorderListener"];
        });
        /* harmony import */


        var _service_WhiteboardRecorder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardRecorder", function () {
          return _service_WhiteboardRecorder_js__WEBPACK_IMPORTED_MODULE_3__["WhiteboardRecorder"];
        });
        /* harmony import */


        var _service_WhiteboardPlayerListener_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardPlayerListener", function () {
          return _service_WhiteboardPlayerListener_js__WEBPACK_IMPORTED_MODULE_4__["WhiteboardPlayerListener"];
        });
        /* harmony import */


        var _service_WhiteboardPlayer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardPlayer", function () {
          return _service_WhiteboardPlayer_js__WEBPACK_IMPORTED_MODULE_5__["WhiteboardPlayer"];
        });
        /* harmony import */


        var _service_entity_GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "GraphicsEntity", function () {
          return _service_entity_GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_6__["GraphicsEntity"];
        });
        /* harmony import */


        var _service_entity_SlideNote_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "SlideNote", function () {
          return _service_entity_SlideNote_js__WEBPACK_IMPORTED_MODULE_7__["SlideNote"];
        });
        /* harmony import */


        var _service_entity_graphics_ArrowEntity_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "ArrowEntity", function () {
          return _service_entity_graphics_ArrowEntity_js__WEBPACK_IMPORTED_MODULE_8__["ArrowEntity"];
        });
        /* harmony import */


        var _service_entity_graphics_BackgroundImageEntity_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "BackgroundImageEntity", function () {
          return _service_entity_graphics_BackgroundImageEntity_js__WEBPACK_IMPORTED_MODULE_9__["BackgroundImageEntity"];
        });
        /* harmony import */


        var _service_entity_graphics_EllipseEntity_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "EllipseEntity", function () {
          return _service_entity_graphics_EllipseEntity_js__WEBPACK_IMPORTED_MODULE_10__["EllipseEntity"];
        });
        /* harmony import */


        var _service_entity_graphics_PencilEntity_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "PencilEntity", function () {
          return _service_entity_graphics_PencilEntity_js__WEBPACK_IMPORTED_MODULE_11__["PencilEntity"];
        });
        /* harmony import */


        var _service_entity_graphics_RectEntity_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "RectEntity", function () {
          return _service_entity_graphics_RectEntity_js__WEBPACK_IMPORTED_MODULE_12__["RectEntity"];
        });
        /* harmony import */


        var _service_entity_graphics_SlideEntity_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "SlideEntity", function () {
          return _service_entity_graphics_SlideEntity_js__WEBPACK_IMPORTED_MODULE_13__["SlideEntity"];
        });
        /* harmony import */


        var _service_entity_graphics_TextEntity_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "TextEntity", function () {
          return _service_entity_graphics_TextEntity_js__WEBPACK_IMPORTED_MODULE_14__["TextEntity"];
        });
        /*
         * Boot.js
         * Cube Whiteboard Core
         *
         * Copyright (c) 2015-2017 Cube Team. All rights reserved.
         */

        /**
         * 引导程序, 负责初始化工作。
         *
         * @author Guan Yong
         */


        (function (global) {
          global.CubeWhiteboardCoreListener = _service_WhiteboardCoreListener_js__WEBPACK_IMPORTED_MODULE_0__["WhiteboardCoreListener"];
          global.CubeWhiteboardCoreServiceWorker = _service_impl_WhiteboardCoreServiceWorker_js__WEBPACK_IMPORTED_MODULE_1__["WhiteboardCoreServiceWorker"];
          global.CubeWhiteboardRecorderListener = _service_WhiteboardRecorderListener_js__WEBPACK_IMPORTED_MODULE_2__["WhiteboardRecorderListener"];
          global.CubeWhiteboardRecorder = _service_WhiteboardRecorder_js__WEBPACK_IMPORTED_MODULE_3__["WhiteboardRecorder"];
          global.CubeWhiteboardPlayerListener = _service_WhiteboardPlayerListener_js__WEBPACK_IMPORTED_MODULE_4__["WhiteboardPlayerListener"];
          global.CubeWhiteboardPlayer = _service_WhiteboardPlayer_js__WEBPACK_IMPORTED_MODULE_5__["WhiteboardPlayer"];
          global.GraphicsEntity = _service_entity_GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_6__["GraphicsEntity"];
          global.SlideNote = _service_entity_SlideNote_js__WEBPACK_IMPORTED_MODULE_7__["SlideNote"];
          global.ArrowEntity = _service_entity_graphics_ArrowEntity_js__WEBPACK_IMPORTED_MODULE_8__["ArrowEntity"];
          global.BackgroundImageEntity = _service_entity_graphics_BackgroundImageEntity_js__WEBPACK_IMPORTED_MODULE_9__["BackgroundImageEntity"];
          global.EllipseEntity = _service_entity_graphics_EllipseEntity_js__WEBPACK_IMPORTED_MODULE_10__["EllipseEntity"];
          global.PencilEntity = _service_entity_graphics_PencilEntity_js__WEBPACK_IMPORTED_MODULE_11__["PencilEntity"];
          global.RectEntity = _service_entity_graphics_RectEntity_js__WEBPACK_IMPORTED_MODULE_12__["RectEntity"];
          global.SlideEntity = _service_entity_graphics_SlideEntity_js__WEBPACK_IMPORTED_MODULE_13__["SlideEntity"];
          global.TextEntity = _service_entity_graphics_TextEntity_js__WEBPACK_IMPORTED_MODULE_14__["TextEntity"];
        })(window);
        /***/

      },
      /* 1 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardCoreListener", function () {
          return WhiteboardCoreListener;
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
         * WhiteboardCoreListener.js
         * Cube Whiteboard Core
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 白板监听器。
         *
         * @interface WhiteboardCoreListener
         * @author Xu Jiangwei, Guan Yong
         */


        var WhiteboardCoreListener =
        /*#__PURE__*/
        function () {
          function WhiteboardCoreListener() {
            _classCallCheck(this, WhiteboardCoreListener);
          }

          _createClass(WhiteboardCoreListener, [{
            key: "onSlideOpened",

            /**
             * 当幻灯片被打开时回调。
             *
             * @param {SlideEntity} slide - 幻灯片实体。
             */
            value: function onSlideOpened(slide) {}
            /**
             * 当白板内有幻灯片操作时回调。
             *
             * @param {SlideEntity} slide - 幻灯片实体。
             */

          }, {
            key: "onSlideChanged",
            value: function onSlideChanged(slide) {}
            /**
             * 当白板被清空时调用。
             */

          }, {
            key: "onCleanup",
            value: function onCleanup() {}
            /**
             * 当白板发生变更时触发
             *
             * @param {{boardName: String, command: {name: String, sn: String, param: String, attr: String, page: String}}} data - 变更的数据
             */

          }, {
            key: "onChange",
            value: function onChange(data) {}
          }, {
            key: "onFailed",
            value: function onFailed(stateCode) {}
          }]);

          return WhiteboardCoreListener;
        }();
        /***/

      },
      /* 2 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardCoreServiceWorker", function () {
          return WhiteboardCoreServiceWorker;
        });
        /* harmony import */


        var _WhiteboardCoreService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
        /* harmony import */


        var _Viewport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
        /* harmony import */


        var _entity_graphics_ArrowEntity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
        /* harmony import */


        var _entity_graphics_BackgroundImageEntity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
        /* harmony import */


        var _entity_graphics_EllipseEntity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
        /* harmony import */


        var _entity_graphics_PencilEntity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
        /* harmony import */


        var _entity_graphics_RectEntity_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
        /* harmony import */


        var _entity_graphics_SlideEntity_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
        /* harmony import */


        var _entity_graphics_TextEntity_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
        /* harmony import */


        var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
        /* harmony import */


        var _WhiteboardRecorder_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15);
        /* harmony import */


        var _WhiteboardPlayer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
        /* harmony import */


        var _WhiteboardCoreListener_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);
        /* harmony import */


        var _entity_StateCode_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17);
        /* harmony import */


        var raphael__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18);
        /* harmony import */


        var raphael__WEBPACK_IMPORTED_MODULE_14___default =
        /*#__PURE__*/
        __webpack_require__.n(raphael__WEBPACK_IMPORTED_MODULE_14__);

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

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
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
         * WhiteboardCoreServiceWorker.js
         * Cube Whiteboard Core
         *
         * Copyright (c) 2015-2017 Cube Team. All rights reserved.
         */


        var _window$CubeCore$Cell = window.CubeCore.CellCloud,
            Logger = _window$CubeCore$Cell.Logger,
            HashMap = _window$CubeCore$Cell.HashMap;

        var WhiteboardCoreServiceWorker =
        /*#__PURE__*/
        function (_WhiteboardCoreServic) {
          _inherits(WhiteboardCoreServiceWorker, _WhiteboardCoreServic);

          function WhiteboardCoreServiceWorker(domId, name, sessionName) {
            var _this;

            _classCallCheck(this, WhiteboardCoreServiceWorker);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(WhiteboardCoreServiceWorker).call(this));
            _this.listener = new _WhiteboardCoreListener_js__WEBPACK_IMPORTED_MODULE_12__["WhiteboardCoreListener"]();
            _this.name = name;
            _this.curEntity = null;
            _this.exMap = new HashMap();
            _this.domId = domId;
            _this.dom = document.getElementById(domId); // 视口控制

            _this.viewport = new _Viewport_js__WEBPACK_IMPORTED_MODULE_1__["Viewport"](_assertThisInitialized(_this)); // 记录：{sn: sn, type: type, set: set, raw: {param: param, attr: attr}, time: timestamp}

            _this.pastRecords = [];
            _this.undoRecords = []; //this.remoteColorArray = ['#c0392b', '#2980b9', '#16a085', '#8e44ad', '#d35400', 'red', 'blue', 'green'];
            // 远端绘图记录，key: from, value: record array

            _this.remoteRecordMap = new HashMap(); // 远端绘图历史，key: from, value: record array

            _this.remoteHistoryMap = new HashMap();
            _this.paper = null;
            _this.paperDom = null; // 遮罩层

            _this.maskDom = null; // Arrow Marker 使用记录

            _this.arrowMarkerColors = ['', '', '', '', ''];
            _this.arrowMatchTimestamps = [0, 0, 0, 0, 0]; // 背景层

            _this.bgDom = null;
            _this.bgImage = null; // 是否透明背景

            _this.transparent = false;
            _this.defaultColor = null;
            _this.defaultWeight = -1;
            _this.defaultBorderColor = null;
            _this.defaultBorderWidth = -1;
            _this.cmdSnCursor = 0; // 远端 Slide

            _this.remoteSlide = null;
            _this.width = 0;
            _this.height = 0;
            _this.paperWidth = 2048;
            _this.paperHeight = 2048;
            _this.remoteWidth = -1;
            _this.remoteHeight = -1;
            _this.sessionName = sessionName; // 录像机

            _this.recorder = null; // 播放器

            _this.player = null; // 配置资源路径

            _this.resourcePath = './resource/images';
            return _this;
          }
          /**
           * 设置监听器
           */


          _createClass(WhiteboardCoreServiceWorker, [{
            key: "setListener",
            value: function setListener(listener) {
              this.listener = listener;
            }
          }, {
            key: "setResourcePath",
            value: function setResourcePath(path) {
              this.resourcePath = path;
            }
          }, {
            key: "load",
            value: function load(width, height) {
              if (width === undefined) {
                width = this.dom.offsetWidth;
              }

              if (height === undefined) {
                height = this.dom.offsetHeight;
              }

              this.dom.style.textAlign = "left";
              this.dom.style.overflow = "hidden";
              this.paper = raphael__WEBPACK_IMPORTED_MODULE_14___default()(this.domId, Math.max(this.paperWidth, width), Math.max(this.paperHeight, height));
              this.paperDom = this.dom.getElementsByTagName('svg')[0];

              if (!this.transparent) {
                this.paperDom.style.backgroundColor = "#fefefe";
              }

              this.paperDom.style.left = parseInt((width - this.paperWidth) * 0.5) + "px";
              this.paperDom.style.top = parseInt((height - this.paperHeight) * 0.5) + "px";
              this.width = width;
              this.height = height;

              this._buildEvents(); // 插入遮罩


              this.maskDom = document.createElement("div");
              this.maskDom.style.position = "absolute";
              this.maskDom.style.styleFloat = "left";
              this.maskDom.style.cssFloat = "left";
              this.maskDom.style.left = "0px";
              this.maskDom.style.top = "0px";
              this.maskDom.style.backgroundImage = "url('" + this.resourcePath + "/loading.gif')";
              this.maskDom.style.backgroundRepeat = "no-repeat";
              this.maskDom.style.backgroundPosition = "center center";
              this.maskDom.style.width = width + "px";
              this.maskDom.style.height = height + "px"; //this.maskDom.style.visibility = "hidden";

              this.maskDom.style.display = "none";
              this.dom.appendChild(this.maskDom); // 插入背景容器

              this.bgDom = document.createElement("div");
              this.bgDom.style.position = "absolute";
              this.bgDom.style.styleFloat = "left";
              this.bgDom.style.cssFloat = "left"; //this.bgDom.style.left = "0px";
              //this.bgDom.style.top = "0px";

              if (!this.transparent) {
                this.bgDom.style.backgroundColor = "#efefef";
              }

              this.dom.insertBefore(this.bgDom, this.paperDom); // 修正 defs

              this._fix();
            }
          }, {
            key: "unload",
            value: function unload() {
              //清空白板
              this.cleanup(true); //取消绘制选择

              this.unselect();

              if (this.maskDom) {
                this.maskDom.parentNode.removeChild(this.maskDom);
                this.maskDom = null;
              }

              if (this.bgDom) {
                this.bgDom.parentNode.removeChild(this.bgDom);
                this.bgDom = null;
              }

              if (this.paper) {
                this.paper.remove();
                this.paper = null;
                this.paperDom = null;
              } //解绑事件


              this._destroyEvents();
            }
          }, {
            key: "_buildEvents",
            value: function _buildEvents() {
              var _this2 = this;

              this._onClick = function (e) {
                _this2.onClick(e);
              };

              this._onMouseMove = function (e) {
                _this2.onMouseMove(e);
              };

              this._onMouseDown = function (e) {
                _this2.onMouseDown(e);
              };

              this._onMouseUp = function (e) {
                _this2.onMouseUp(e);
              };

              this._onTouchMove = function (e) {
                _this2.onTouchMove(e);
              };

              this._onTouchStart = function (e) {
                _this2.onTouchStart(e);
              };

              this._onTouchEnd = function (e) {
                _this2.onTouchEnd(e);
              };

              this._onKeyPress = function (e) {
                _this2.onKeyPress(e);
              };

              this.dom.addEventListener("click", this._onClick, false);
              this.dom.addEventListener("mousemove", this._onMouseMove, false);
              this.dom.addEventListener("mousedown", this._onMouseDown, false);
              this.dom.addEventListener("mouseup", this._onMouseUp, false);
              this.dom.addEventListener("touchmove", this._onTouchMove, false);
              this.dom.addEventListener("touchstart", this._onTouchStart, false);
              this.dom.addEventListener("touchend", this._onTouchEnd, false);
              this.dom.addEventListener("keypress", this._onKeyPress, false);
            }
          }, {
            key: "_destroyEvents",
            value: function _destroyEvents() {
              this.dom.removeEventListener('click', this._onClick, false);
              this.dom.removeEventListener('mousemove', this._onMouseMove, false);
              this.dom.removeEventListener('mousedown', this._onMouseDown, false);
              this.dom.removeEventListener('mouseup', this._onMouseUp, false);
              this.dom.removeEventListener('touchmove', this._onTouchMove, false);
              this.dom.removeEventListener('touchstart', this._onTouchStart, false);
              this.dom.removeEventListener('touchend', this._onTouchEnd, false);
              this.dom.removeEventListener('keypress', this._onKeyPress, false);
            }
          }, {
            key: "_fix",
            value: function _fix() {
              // 维护 defs
              var paperDom = this.paperDom; // 更新 desc 信息

              var desc = paperDom.getElementsByTagName("desc");

              if (null !== desc && desc.length > 0) {
                desc = desc[0];
                desc.innerHTML = "Cube Engine Whiteboard - www.getcube.cn";
              } // 更新 defs 数据


              var defs = paperDom.getElementsByTagName("defs");

              if (null !== defs && defs.length > 0) {
                defs = defs[0];
              } else {
                defs = document.createElement("defs");
                paperDom.appendChild(defs);
              }

              var dc = ['<marker id="_cube_arrow_0" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto" viewBox="0 0 20 20"><path d="M2,2 L10,6 L2,10 L6,6 L2,2 z" fill="" /></marker>', '<marker id="_cube_arrow_1" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto" viewBox="0 0 20 20"><path d="M2,2 L10,6 L2,10 L6,6 L2,2 z" fill="" /></marker>', '<marker id="_cube_arrow_2" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto" viewBox="0 0 20 20"><path d="M2,2 L10,6 L2,10 L6,6 L2,2 z" fill="" /></marker>', '<marker id="_cube_arrow_3" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto" viewBox="0 0 20 20"><path d="M2,2 L10,6 L2,10 L6,6 L2,2 z" fill="" /></marker>', '<marker id="_cube_arrow_4" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto" viewBox="0 0 20 20"><path d="M2,2 L10,6 L2,10 L6,6 L2,2 z" fill="" /></marker>'];
              defs.innerHTML = dc.join('');
              dc = null;
            } // 给 marker arrow 填充颜色

          }, {
            key: "_matcheArrow",
            value: function _matcheArrow(color) {
              // 从同色 marker 中选取
              for (var i = 0; i < this.arrowMarkerColors.length; ++i) {
                var c = this.arrowMarkerColors[i];

                if (c == color) {
                  this.arrowMatchTimestamps[i] = Date.now();
                  return "#_cube_arrow_" + i;
                }
              } // 从空余的 marker 中选取


              for (var _i = 0; _i < this.arrowMarkerColors.length; ++_i) {
                var _c = this.arrowMarkerColors[_i];

                if (_c.length < 2) {
                  var _id = "_cube_arrow_" + _i;

                  var _dom = this.paperDom.getElementById(_id);

                  if (null === _dom) {
                    /*dom = this.paperDom.getElementsByTagName("defs")[0];
                     var marker = document.createElement("marker");
                     marker.id = id;
                     marker.setAttribute("markerUnits", "strokeWidth");
                     marker.setAttribute("markerWidth", "12");
                     marker.setAttribute("markerHeight", "12");
                     marker.setAttribute("refX", "6");
                     marker.setAttribute("refY", "6");
                     marker.setAttribute("orient", "auto");
                     marker.setAttribute("viewBox", "0 0 20 20");
                     var path = document.createElement("path");
                     path.setAttribute("d", "M2,2 L10,6 L2,10 L6,6 L2,2 z");
                     path.setAttribute("fill", color);
                     marker.appendChild(path);
                     dom.appendChild(marker);*/

                    /*var str = window.location.toString();
                     var array = str.split("/");
                     var page = null;
                     for (var i = array.length - 1; i >= 0; --i) {
                     var s = array[i];
                     if (s.indexOf(".html") > 0) {
                     page = s;
                     break;
                     }
                     }
                     if (null != page) {
                     return page + "#" + id;
                     }
                     else {
                     return "#" + id;
                     }*/
                    this.arrowMarkerColors[_i] = "";
                    this.arrowMatchTimestamps[_i] = 0;
                    return "#_cube_arrow_default";
                  } else {
                    this.arrowMarkerColors[_i] = color;
                    this.arrowMatchTimestamps[_i] = Date.now();
                    _dom = _dom.getElementsByTagName("path")[0];

                    _dom.setAttribute("fill", color);

                    return "#" + _id;
                  }
                }
              } // 从最旧的 marker 中选取


              var oldIndex = -1;
              var oldTimestamp = Number.MAX_VALUE;

              for (var _i2 = 0; _i2 < this.arrowMatchTimestamps.length; ++_i2) {
                var ts = this.arrowMatchTimestamps[_i2];

                if (ts < oldTimestamp) {
                  oldTimestamp = ts;
                  oldIndex = _i2;
                }
              }

              if (oldIndex < 0) {
                return "#_cube_arrow_default";
              }

              this.arrowMarkerColors[oldIndex] = color;
              this.arrowMatchTimestamps[oldIndex] = Date.now();
              var id = "_cube_arrow_" + oldIndex;
              var dom = this.paperDom.getElementById(id);

              if (null === dom) {
                dom = document.getElementById(id);

                if (null === dom) {
                  return "#_cube_arrow_default";
                }
              }

              dom = dom.getElementsByTagName("path")[0];
              dom.setAttribute("fill", color);
              return "#" + id;
            }
          }, {
            key: "_centerBgImage",
            value: function _centerBgImage(img) {
              var x = (this.width - img.width) * 0.5;
              var y = (this.height - img.height) * 0.5;
              this.bgDom.style.paddingLeft = parseInt(x) + 'px';
              this.bgDom.style.paddingTop = parseInt(y) + 'px';
            }
          }, {
            key: "_replayRecord",
            value: function _replayRecord(record, saved, animation) {
              // record : { sn: sn, type: type, set: set, raw: raw, time: time }

              /*var command = {
               sn: record.sn,
               name: record.type,
               param: record.raw.param,
               attr: record.raw.attr
               };*/
              var el = null;

              if (record.type === _entity_graphics_RectEntity_js__WEBPACK_IMPORTED_MODULE_6__["RectEntity"].Name) {
                _entity_graphics_RectEntity_js__WEBPACK_IMPORTED_MODULE_6__["RectEntity"].restore(this.paper, record, animation, this);

                if (undefined === saved || saved) {
                  this.record(record.type, record.set, record.raw, false);
                }
              } else if (record.type === _entity_graphics_EllipseEntity_js__WEBPACK_IMPORTED_MODULE_4__["EllipseEntity"].Name) {
                _entity_graphics_EllipseEntity_js__WEBPACK_IMPORTED_MODULE_4__["EllipseEntity"].restore(this.paper, record, animation, this);

                if (undefined === saved || saved) {
                  this.record(record.type, record.set, record.raw, false);
                }
              } else if (record.type === _entity_graphics_ArrowEntity_js__WEBPACK_IMPORTED_MODULE_2__["ArrowEntity"].Name) {
                _entity_graphics_ArrowEntity_js__WEBPACK_IMPORTED_MODULE_2__["ArrowEntity"].restore(this.paper, record, this, animation);

                if (undefined === saved || saved) {
                  this.record(record.type, record.set, record.raw, false);
                }
              } else if (record.type === _entity_graphics_PencilEntity_js__WEBPACK_IMPORTED_MODULE_5__["PencilEntity"].Name) {
                //this.record(command.name, el, {"param": command.param, "attr": command.attr}, false);
                _entity_graphics_PencilEntity_js__WEBPACK_IMPORTED_MODULE_5__["PencilEntity"].restore(this.paper, record, animation, this);

                if (undefined === saved || saved) {
                  this.record(record.type, record.set, record.raw, false);
                }
              } else if (record.type === _entity_graphics_TextEntity_js__WEBPACK_IMPORTED_MODULE_8__["TextEntity"].Name) {
                //this.record(command.name, el, {"param": command.param, "attr": command.attr}, false);
                _entity_graphics_TextEntity_js__WEBPACK_IMPORTED_MODULE_8__["TextEntity"].restore(this.paper, record, animation, this);

                if (undefined === saved || saved) {
                  this.record(record.type, record.set, record.raw, false);
                }
              } else {// 其他 type
              }
            }
          }, {
            key: "_replayVGCommand",
            value: function _replayVGCommand(command) {
              // from 为 null 时表示是复现自己的记录
              var from = null;
              var group = null;

              if (this.sessionName !== command.from) {
                from = command.from;
              }

              if (undefined !== command.group && command.group !== '') {
                group = command.group;
              }

              var el = null;

              if (command.name === 'rect') {
                el = this.loadVGCommand(command, from);

                if (null === from) {
                  this.record(command.name.toString(), el, {
                    "param": command.param,
                    "attr": command.attr
                  });
                }
              } else if (command.name === 'ellipse') {
                el = this.loadVGCommand(command, from);

                if (null === from) {
                  this.record(command.name.toString(), el, {
                    "param": command.param,
                    "attr": command.attr
                  });
                }
              } else if (command.name === 'arrow') {
                el = this.loadVGCommand(command, from);

                if (null === from) {
                  this.record(command.name.toString(), el, {
                    "param": command.param,
                    "attr": command.attr
                  });
                }
              } else if (command.name === 'path') {
                el = this.loadVGCommand(command, from, group);

                if (null === from) {
                  this.record(command.name.toString(), el, {
                    "param": command.param,
                    "attr": command.attr
                  });
                }
              } else if (command.name === 'text') {
                el = this.loadVGCommand(command, from, group);

                if (null === from) {
                  this.record(command.name.toString(), el, {
                    "param": command.param,
                    "attr": command.attr
                  });
                }
              } else if (command.name === 'slide') {
                if (null === from) {
                  this.workAsSlide(command.param, true);
                } else {
                  this.loadVGCommand(command, from, group);
                }
              } else if (command.name === 'undo') {
                if (null === from) {
                  this.undo(true);
                } else {
                  this.loadVGCommand(command, from, group);
                }
              } else if (command.name === 'redo') {
                if (null === from) {
                  this.redo(true);
                } else {
                  this.loadVGCommand(command, from, group);
                }
              } else if (command.name === 'bgimage') {
                var entity = new _entity_graphics_BackgroundImageEntity_js__WEBPACK_IMPORTED_MODULE_3__["BackgroundImageEntity"](command.param, true);
                this.selectEntity(entity);
              } else {
                Logger.w('CubeWhiteboard', 'Unknown replay VG command: ' + command.name);
              }
            }
          }, {
            key: "onClick",
            value: function onClick(e) {
              if (null !== this.curEntity) {
                this.curEntity.onClick(e);
              } else {
                this.viewport.onClick(e);
                var se = this.getSlide();

                if (se) {
                  se.onClick(e);
                }
              }
            }
          }, {
            key: "onMouseMove",
            value: function onMouseMove(e) {
              if (_utils_Utils_js__WEBPACK_IMPORTED_MODULE_9__["Utils"].isAndroid || _utils_Utils_js__WEBPACK_IMPORTED_MODULE_9__["Utils"].isIPhone) {
                return;
              }

              if (null !== this.curEntity) {
                this.curEntity.onMouseMove(e);
              } else {
                this.viewport.onMouseMove(e);
              }
            }
          }, {
            key: "onMouseDown",
            value: function onMouseDown(e) {
              if (null !== this.curEntity) {
                this.curEntity.onMouseDown(e);
              } else {
                this.viewport.onMouseDown(e);
              }
            }
          }, {
            key: "onMouseUp",
            value: function onMouseUp(e) {
              if (null !== this.curEntity) {
                this.curEntity.onMouseUp(e);
              } else {
                this.viewport.onMouseUp(e);
              }
            }
          }, {
            key: "onTouchMove",
            value: function onTouchMove(e) {
              if (null !== this.curEntity) {
                this.curEntity.onTouchMove(e);
              } else {
                this.viewport.onTouchMove(e);
              }
            }
          }, {
            key: "onTouchStart",
            value: function onTouchStart(e) {
              if (null !== this.curEntity) {
                this.curEntity.onTouchStart(e);
              } else {
                this.viewport.onTouchStart(e);
              }
            }
          }, {
            key: "onTouchEnd",
            value: function onTouchEnd(e) {
              if (null !== this.curEntity) {
                this.curEntity.onTouchEnd(e);
              } else {
                this.viewport.onTouchEnd(e);
              }
            }
          }, {
            key: "onKeyPress",
            value: function onKeyPress(e) {
              if (null !== this.curEntity) {
                this.curEntity.onKeyPress(e);
              } else {
                this.viewport.onKeyPress(e);
              }

              var se = this.getSlide();

              if (se) {
                se.onKeyPress(e);
              }
            }
            /**
             * 矫正画布大小跟随容器大小。
             */

          }, {
            key: "adjustSize",
            value: function adjustSize() {
              var w = parseInt(this.dom.offsetWidth);
              var h = parseInt(this.dom.offsetHeight);
              this.resize(w, h);

              this._syncSize(); // 更新视口


              this.viewport.adaptView();
            }
          }, {
            key: "_syncSize",
            value: function _syncSize() {
              // Logger.d("CubeWhiteboard", "Sync size: " + this.width + "x" + this.height);
              var data = {
                "whiteboardId": this.name,
                "boardSize": {
                  "width": this.width,
                  "height": this.height
                },
                "paperSize": {
                  "width": this.paperWidth,
                  "height": this.paperHeight
                }
              };
              this.triggerChange(data);
            }
            /**
             * 选择白板工具
             */

          }, {
            key: "selectEntity",
            value: function selectEntity(entity) {
              var _this3 = this;

              if (!entity.exclusive) {
                entity.board = this;

                var _timer = setTimeout(function () {
                  clearTimeout(_timer);
                  entity.onDraw(_this3.paper); // 记录非独占的实体，必须在 onDraw 之后调用

                  _this3.exMap.put(entity.name, entity);
                }, 30);

                return;
              }

              if (null !== this.curEntity) {
                this.curEntity.dispose();
                this.curEntity = null;
              }

              entity.board = this;
              this.curEntity = entity;

              if (null !== this.defaultColor && entity.color) {
                entity.color = this.defaultColor;
              }

              if (null !== this.defaultBorderColor && entity.borderColor) {
                entity.borderColor = this.defaultBorderColor;
              }

              if (this.defaultWeight > 0 && undefined !== entity.weight) {
                entity.weight = this.defaultWeight;
              }

              if (this.defaultBorderWidth > 0 && undefined !== entity.borderWidth) {
                entity.borderWidth = this.defaultBorderWidth;
              }

              var timer = setTimeout(function () {
                clearTimeout(timer);

                if (null !== _this3.curEntity) {
                  _this3.curEntity.onDraw(_this3.paper);
                }
              }, 30);
            }
            /**
             * 取消选择的白板工具。
             */

          }, {
            key: "unselect",
            value: function unselect(entity) {
              if (undefined !== entity) {
                if (this.exMap.containsKey(entity.name)) {
                  var ex = this.exMap.get(entity.name);
                  this.exMap.remove(entity.name);
                  ex.dispose();
                  return;
                }
              }

              if (null !== this.curEntity && this.curEntity.exclusive) {
                this.curEntity.dispose();
                this.curEntity = null;
              }
            }
            /**
             * 后退一部白板操作
             */

          }, {
            key: "undo",
            value: function undo(silent) {
              if (this.pastRecords.length === 0) {
                return false;
              }

              var r = this.pastRecords.pop();
              this.undoRecords.push(r); // 游标减一
              // FIXME 2016/7/11 XJW 游标只加不减

              /*--this.cmdSnCursor;
               if (this.cmdSnCursor < 0) {
               this.cmdSnCursor = 0;
               }*/
              // 解除管理

              this.viewport.unmanage(r.set); // r : {sn: sn, type: type, set: set, raw: {param: param, attr: attr}}

              if (r.set.forEach === undefined) {
                if (r.set._custom) {
                  r.set._custom.remove();

                  r.set._custom = null;
                }

                r.set.remove();
              } else {
                r.set.forEach(function (e) {
                  e.remove();
                });
              } // 如果是幻灯片则删除记录


              var slide = this.getSlide();

              if (slide) {
                slide.popNote();
              } // 尝试记录命令


              if (null != this.recorder && this.recorder.isRecording()) {
                this.recorder._notifyOperation({
                  "name": "undo",
                  "time": Date.now()
                });
              }

              if (!silent) {
                // 生成 VG 命令
                var data = {
                  "whiteboardId": this.name,
                  "command": {
                    "name": "undo",
                    "param": r.sn
                  }
                };
                this.triggerChange(data);
              }

              return true;
            }
            /**
             * 前进一步白板操作。
             */

          }, {
            key: "redo",
            value: function redo(silent) {
              if (this.undoRecords.length === 0) {
                return false;
              }

              var r = this.undoRecords.pop();
              this.pastRecords.push(r); // 游标加一
              //++this.cmdSnCursor;
              // r : {sn: sn, type: type, set: set, raw: {param: param, attr: attr}}

              if (r.type === _entity_graphics_RectEntity_js__WEBPACK_IMPORTED_MODULE_6__["RectEntity"].Name) {
                _entity_graphics_RectEntity_js__WEBPACK_IMPORTED_MODULE_6__["RectEntity"].restore(this.paper, r);
              } else if (r.type === _entity_graphics_EllipseEntity_js__WEBPACK_IMPORTED_MODULE_4__["EllipseEntity"].Name) {
                _entity_graphics_EllipseEntity_js__WEBPACK_IMPORTED_MODULE_4__["EllipseEntity"].restore(this.paper, r);
              } else if (r.type === _entity_graphics_ArrowEntity_js__WEBPACK_IMPORTED_MODULE_2__["ArrowEntity"].Name) {
                _entity_graphics_ArrowEntity_js__WEBPACK_IMPORTED_MODULE_2__["ArrowEntity"].restore(this.paper, r, this);
              } else if (r.type === _entity_graphics_PencilEntity_js__WEBPACK_IMPORTED_MODULE_5__["PencilEntity"].Name) {
                _entity_graphics_PencilEntity_js__WEBPACK_IMPORTED_MODULE_5__["PencilEntity"].restore(this.paper, r);
              } else if (r.type === _entity_graphics_TextEntity_js__WEBPACK_IMPORTED_MODULE_8__["TextEntity"].Name) {
                _entity_graphics_TextEntity_js__WEBPACK_IMPORTED_MODULE_8__["TextEntity"].restore(this.paper, r);
              } else {
                Logger.e("CubeWhiteboard#redo", "Unknown command type: " + r.type);
              } // 如果是幻灯片则添加记录


              var slide = this.getSlide();

              if (slide) {
                slide.appendNote(r);
              } // 尝试记录命令


              if (null != this.recorder && this.recorder.isRecording()) {
                this.recorder._notifyOperation({
                  "name": "redo",
                  "time": Date.now()
                });
              }

              if (!silent) {
                // 发送 VG 命令
                var data = {
                  "whiteboardId": this.name,
                  "command": {
                    "name": "redo",
                    "param": r.sn
                  }
                }; //如果当前有幻灯片, 就记录当前幻灯片页数

                if (null !== slide) {
                  // 同步页码
                  data.command.page = r.cursor + 1;
                }

                this.triggerChange(data);
              }

              return true;
            }
            /**
             * 擦除绘制数据。
             */

          }, {
            key: "erase",
            value: function erase(silent, clearSlide) {
              if (this.pastRecords.length > 0) {
                for (var i = 0; i < this.pastRecords.length; ++i) {
                  var r = this.pastRecords[i]; // r : {sn: sn, type: type, set: set, raw: {param: param, attr: attr}}

                  if (r.set.forEach === undefined) {
                    if (r.set._custom) {
                      r.set._custom.remove();

                      r.set._custom = null;
                    }

                    r.set.remove();
                  } else {
                    r.set.forEach(function (e) {
                      e.remove();
                    });
                  }
                }
              }

              if (this.remoteRecordMap.size() > 0) {
                var list = this.remoteRecordMap.values();

                for (var _i3 = 0; _i3 < list.length; ++_i3) {
                  var rlist = list[_i3];

                  for (var j = 0; j < rlist.length; ++j) {
                    var _r = rlist[j];

                    _r.el.remove();
                  }
                }
              }

              this.pastRecords.splice(0, this.pastRecords.length);
              this.undoRecords.splice(0, this.undoRecords.length);
              this.cmdSnCursor = 0;

              for (var _i4 = 0; _i4 < this.arrowMarkerColors.length; ++_i4) {
                this.arrowMarkerColors[_i4] = '';
                this.arrowMatchTimestamps[_i4] = 0;
              }

              this.remoteRecordMap.clear();
              this.remoteHistoryMap.clear(); // 如果是幻灯片则添加记录

              if (undefined === clearSlide || clearSlide) {
                clearSlide = true;
                var slide = this.getSlide();

                if (slide) {
                  slide.clearNote();
                }
              } else {
                clearSlide = false;
              } // 尝试记录命令


              if (null != this.recorder && this.recorder.isRecording()) {
                this.recorder._notifyOperation({
                  "name": "erase",
                  "time": Date.now()
                });
              }

              if (!silent) {
                // 发送 VG 命令
                var data = {
                  "whiteboardId": this.name,
                  "command": {
                    "name": "erase",
                    "param": clearSlide
                  }
                };
                this.triggerChange(data);
              }

              return true;
            }
            /**
             * 清空白板所有数据。
             */

          }, {
            key: "cleanup",
            value: function cleanup(silent) {
              this.exMap.clear();
              this.pastRecords.splice(0, this.pastRecords.length);
              this.undoRecords.splice(0, this.undoRecords.length);
              this.cmdSnCursor = 0;

              for (var i = 0; i < this.arrowMarkerColors.length; ++i) {
                this.arrowMarkerColors[i] = '';
                this.arrowMatchTimestamps[i] = 0;
              }

              this.remoteRecordMap.clear();
              this.remoteHistoryMap.clear();

              if (null !== this.remoteSlide) {
                this.remoteSlide.dispose();
                this.remoteSlide = null;
              }

              if (null !== this.bgImage) {
                this.bgImage.remove();
                this.bgImage = null;
              }

              if (null != this.paper) {
                this.paper.clear();
              } // 还原


              this.adjustSize(); // 重置视口

              this.viewport.reset(); // 修正 defs

              this._fix(); // 隐藏遮罩


              this.hideMask();
              this.listener.onCleanup(this);

              if (!silent) {
                // 发送 VG 命令
                var data = {
                  "whiteboardId": this.name,
                  "command": {
                    "name": "cleanup",
                    "param": 0
                  }
                };
                this.triggerChange(data);
              }

              return true;
            }
            /**
             * 按照指定比例，等比缩放白板。
             */

          }, {
            key: "zoom",
            value: function zoom(ratio) {
              var children = _utils_Utils_js__WEBPACK_IMPORTED_MODULE_9__["Utils"].getElementChildren(this.paperDom);

              if (children.length <= 2) {
                return;
              }

              this.viewport.zoom(ratio);
            }
            /**
             * 重置白板视口。
             */

          }, {
            key: "resetView",
            value: function resetView(reset) {
              if (!this.getSlide() && (this.remoteWidth <= 0 || reset)) {
                this.viewport.reset();
              } else {
                this.viewport.adaptView();
              }
            }
          }, {
            key: "setRemoteSize",
            value: function setRemoteSize(width, height) {
              this.remoteWidth = width;
              this.remoteHeight = height;
            }
          }, {
            key: "syncBoardSize",
            value: function syncBoardSize(boardSize) {
              if (boardSize.width > this.remoteWidth) {
                this.setRemoteSize(boardSize.width, boardSize.height);
              } // 更新视口


              this.viewport.adaptView();
            }
            /**
             * 白板 DOM 节点下的有效的页面元素数量。
             */

          }, {
            key: "numPaperElements",
            value: function numPaperElements() {
              return _utils_Utils_js__WEBPACK_IMPORTED_MODULE_9__["Utils"].getElementChildren(this.paperDom).length - 2;
            }
            /**
             * 返回当前可扩展实体。
             */

          }, {
            key: "getExEntity",
            value: function getExEntity(name) {
              return this.exMap.get(name);
            }
            /**
             * 显示遮罩。
             */

          }, {
            key: "showMask",
            value: function showMask() {
              this.maskDom.style.display = "block";
            }
            /**
             * 隐藏遮罩。
             */

          }, {
            key: "hideMask",
            value: function hideMask() {
              this.maskDom.style.display = "none";
            }
            /*
             * 导出当前白板数据。
             */

          }, {
            key: "exportContent",
            value: function exportContent(pages) {
              var ret = null; // 获取当前幻灯片

              var slide = this.getSlide();

              if (slide) {
                ret = {
                  slide: {
                    origin: slide.getDocName().toString(),
                    alias: slide.file.alias.toString(),
                    size: slide.file.size,
                    pages: []
                  }
                };
                var targetPages = null; // 根据指定的页码导出数据，如果未指定则仅导出当前页

                if (undefined !== pages) {
                  if (pages instanceof Array) {
                    targetPages = pages;
                  } else if (pages instanceof Number) {
                    targetPages = [pages];
                  }
                }

                if (null === targetPages) {
                  targetPages = [slide.currentPage()];
                } // 对整个幻灯片而言，只导出目标页的数据


                for (var i = 0; i < targetPages.length; ++i) {
                  var p = targetPages[i];
                  /* page 的格式
                   {
                   page: Number,
                   url: String,
                   notes: Array
                   }
                   */

                  var page = slide.exportPage(p);

                  if (null !== page) {
                    ret.slide.pages.push(page);
                  }
                }
              } else {
                ret = {
                  records: []
                };

                for (var _i5 = 0; _i5 < this.pastRecords.length; ++_i5) {
                  var pr = this.pastRecords[_i5];
                  var r = {
                    sn: pr.sn,
                    type: pr.type,
                    raw: pr.raw,
                    time: pr.time
                  };
                  ret.records.push(r);
                }
              }

              return ret;
            }
            /*
             * 导入数据。
             */

          }, {
            key: "importContent",
            value: function importContent(c) {
              var _this4 = this; // 清空


              if (this.numPaperElements() > 0) {
                this.cleanup(true);
                setTimeout(function () {
                  _this4.importContent(c);
                }, 150);
                return true;
              }

              if (undefined !== c.slide) {
                var file = {
                  "account": "",
                  "origin": c.slide.origin,
                  "alias": c.slide.alias,
                  "size": c.slide.size,
                  "urls": []
                };
                /* page 的格式
                 {
                 page: Number,
                 url: String,
                 notes: Array
                 }
                 */

                var pages = c.slide.pages;

                for (var i = 0; i < pages.length; ++i) {
                  var page = pages[i];
                  file.urls.push(page.url);
                }

                this.workAsSlide(file, true);
                setTimeout(function () {
                  // 绘制第一页笔记
                  var notes = pages[0].notes;

                  if (undefined !== notes) {
                    for (var _i6 = 0; _i6 < notes.length; ++_i6) {
                      _this4._replayRecord(notes[_i6]);
                    }
                  } // 还原笔记


                  var slide = _this4.getSlide();

                  for (var _i7 = 0; _i7 < pages.length; ++_i7) {
                    var _notes = pages[_i7].notes;

                    if (undefined === _notes) {
                      // 跳过没有笔记的页
                      continue;
                    }

                    for (var j = 0; j < _notes.length; ++j) {
                      slide.appendNote(_i7 + 1, _notes[j]);
                    }
                  }
                }, 500);
              } else if (undefined !== c.records) {
                for (var _i8 = 0; _i8 < c.records.length; ++_i8) {
                  var r = c.records[_i8];

                  this._replayRecord(r);
                }
              } else {
                Logger.e("CubeWhiteboard#importContent", "Data format error!");
              }

              return true;
            } // 返回命令的 SN 号

          }, {
            key: "record",
            value: function record(type, set, raw, note) {
              var sn = this.cmdSnCursor++;
              var time = Date.now();
              var r = {
                sn: sn,
                type: type,
                set: set,
                raw: raw,
                time: time
              };
              this.pastRecords.push(r);

              if (undefined === note || note) {
                // 幻灯片记录笔记
                var slide = this.getSlide();

                if (slide) {
                  slide.appendNote(r);
                }
              } // 如果有录像机则尝试录像


              if (null !== this.recorder) {
                this.recorder._notifyRecord(r);
              }

              return sn;
            }
            /**
             * 设置白板是否透明。
             */

          }, {
            key: "setTransparency",
            value: function setTransparency(transparent) {
              if (this.transparent === transparent) {
                return;
              }

              this.transparent = transparent;

              if (transparent) {
                this.paperDom.style.backgroundColor = ""; //"rgba(0, 0, 0, 0)";

                this.bgDom.style.backgroundColor = ""; //"rgba(0, 0, 0, 0)";
              } else {
                this.paperDom.style.backgroundColor = "#fefefe";
                this.bgDom.style.backgroundColor = "#efefef";
              }
            }
            /**
             * 设置背景图片。
             */

          }, {
            key: "setBackgroundImage",
            value: function setBackgroundImage(url, loadCallback) {
              var _this5 = this;

              var bgd = this.bgDom;
              var img = bgd.getElementsByTagName('img')[0];

              if (img === undefined || null === img) {
                var newImg = document.createElement('img');
                bgd.appendChild(newImg);

                newImg.onload = function (e) {
                  loadCallback.call(null, newImg);

                  _this5._centerBgImage(newImg);
                };

                newImg.src = url;
                return newImg;
              } else {
                img.setAttribute('src', '');

                img.onload = function (e) {
                  loadCallback.call(null, img);

                  _this5._centerBgImage(img);
                };

                img.setAttribute('src', url);
                return img;
              }
            }
            /**
             * 设置背景颜色
             */

          }, {
            key: "setBackgroundColor",
            value: function setBackgroundColor(color) {
              this.paperDom.style.backgroundColor = color;
              this.bgDom.style.backgroundColor = color;
            }
            /**
             * 加载白板记录。
             */

          }, {
            key: "loadRecordData",
            value: function loadRecordData(data, clean) {
              /* 数据格式
               {
               "whiteboardId": "",
               "shared": "",
               "commands": []
               }
               */
              if (undefined !== clean && clean) {
                this.cleanup(true);
              }

              var records = data.commands;
              var self = this;

              for (var i = 0; i < records.length; ++i) {
                var cmd = records[i]; // 如果笔记为幻灯片中的笔记, 那就自动过滤掉其它页的笔记

                if (null == cmd.page) {
                  // 还原记录
                  this._replayVGCommand(cmd);
                } else {
                  if (cmd.page === 1) {
                    this._replayVGCommand(cmd);
                  } // 由于selectEntity会有30ms的延迟, 因此延迟添加笔记到本地
                  // 匿名函数立即执行, 防止for循环对变量的影响


                  (function (param) {
                    setTimeout(function () {
                      var slide = self.getSlide();

                      if (slide) {
                        var r = {
                          sn: param.sn,
                          type: param.name,
                          set: null,
                          raw: {
                            "param": param.param,
                            "attr": param.attr
                          },
                          page: param.page
                        };
                        slide.appendNote(r);
                      }
                    }, 60);
                  })(cmd);
                }
              }
            }
          }, {
            key: "loadVGCommand",
            value: function loadVGCommand(command, from, group) {
              var el;

              if (command.name === 'slide') {
                if (null !== this.remoteSlide) {
                  this.remoteSlide.from = from;

                  if (group) {
                    this.remoteSlide.group = group;
                  }

                  if (this.remoteSlide.file.origin === command.param.origin) {
                    // 仅更新数据
                    var attr = command.attr;

                    if (Math.abs(attr.cursor - this.remoteSlide.cursor) > 0 || attr.page === '=') {
                      // 页码不同步，进行同步
                      this.remoteSlide.gotoPage(attr.cursor + 1);
                    }
                    /*else if (attr.page == "<") {
                     // 上一页
                     this.remoteSlide.prevPage();
                     }
                     else if (attr.page == ">") {
                     // 下一页
                     this.remoteSlide.nextPage();
                     }*/


                    return;
                  }
                } // 如果有背景图片，则移除背景图片


                if (this.exMap.containsKey(_entity_graphics_BackgroundImageEntity_js__WEBPACK_IMPORTED_MODULE_3__["BackgroundImageEntity"].Name)) {
                  var be = this.exMap.get(_entity_graphics_BackgroundImageEntity_js__WEBPACK_IMPORTED_MODULE_3__["BackgroundImageEntity"].Name);
                  be.dispose();
                  this.exMap.remove(_entity_graphics_BackgroundImageEntity_js__WEBPACK_IMPORTED_MODULE_3__["BackgroundImageEntity"].Name);
                  be = null;
                } // 清空


                this.cleanup(true); // 擦除
                //this.erase(true, false);
                // 新幻灯片

                this.remoteSlide = new _entity_graphics_SlideEntity_js__WEBPACK_IMPORTED_MODULE_7__["SlideEntity"](command.param, true);
                this.remoteSlide.from = from;

                if (group) {
                  this.remoteSlide.group = group;
                }

                this.remoteSlide.cursor = command.attr.cursor;
                this.selectEntity(this.remoteSlide);
              } else if (command.name === 'undo') {
                var key = null;

                if (group) {
                  key = from + "_" + group;
                } else {
                  key = from;
                }

                var list = this.remoteRecordMap.get(key);

                if (list) {
                  var sn = parseInt(command.param);
                  var undoList = [];

                  for (var i = list.length - 1; i >= 0; --i) {
                    var c = list[i];

                    if (c.sn >= sn) {
                      undoList.push(c);
                    } else {
                      // 列表里的 SN 小于目标 SN 则不需要 undo
                      break;
                    }
                  }

                  if (undoList.length > 0) {
                    var hlist = this.remoteHistoryMap.get(key);

                    if (!hlist) {
                      hlist = [];
                      this.remoteHistoryMap.put(key, hlist);
                    }

                    for (var _i9 = 0; _i9 < undoList.length; ++_i9) {
                      var _c2 = undoList[_i9];
                      hlist.push(_c2);
                      var index = list.indexOf(_c2);

                      if (index >= 0) {
                        list.splice(index, 1);
                      } // c: {sn: sn, type: type, el: el, raw: {param: param, attr: attr}}


                      _c2.el.remove();
                    }
                  }
                } // 如果是幻灯片则删除记录


                var slide = this.getSlide();

                if (slide) {
                  slide.popNote();
                }
              } else if (command.name === 'redo') {
                var _key = null;

                if (group) {
                  _key = from + "_" + group;
                } else {
                  _key = from;
                }

                var _list = this.remoteHistoryMap.get(_key);

                if (_list) {
                  var _sn = parseInt(command.param);

                  var redoList = [];

                  for (var _i10 = _list.length - 1; _i10 >= 0; --_i10) {
                    var _c3 = _list[_i10];

                    if (_c3.sn <= _sn) {
                      redoList.push(_c3);
                    } else {
                      // 列表里的 SN 大目标 SN 则不需要 redo
                      break;
                    }
                  }

                  if (redoList.length > 0) {
                    var rlist = this.remoteRecordMap.get(_key);

                    if (!rlist) {
                      rlist = [];
                      this.remoteRecordMap.put(_key, rlist);
                    }

                    for (var _i11 = 0; _i11 < redoList.length; ++_i11) {
                      var _c4 = redoList[_i11];
                      rlist.push(_c4);

                      var _index = _list.indexOf(_c4);

                      if (_index >= 0) {
                        _list.splice(_index, 1);
                      } // 如果当前在幻灯片状态就保存重做的记录


                      if (command.page) {
                        // 如果是幻灯片则添加记录
                        var _slide = this.getSlide();

                        if (_slide) {
                          _slide.appendNote(_c4);
                        }
                      }

                      var type = _c4.type; // c: {sn: sn, type: type, el: el, raw: {param: param, attr: attr}}

                      if (type === _entity_graphics_RectEntity_js__WEBPACK_IMPORTED_MODULE_6__["RectEntity"].Name) {
                        /*var el = this.paper.rect(c.raw.param.x, c.raw.param.y, c.raw.param.width, c.raw.param.height);
                         el.attr("stroke", c.raw.attr.stroke);
                         el.attr("stroke-width", c.raw.attr.strokeWidth);
                         el.attr("stroke-linecap", "round");
                         c.el = el;*/
                        _entity_graphics_RectEntity_js__WEBPACK_IMPORTED_MODULE_6__["RectEntity"].restore(this.paper, _c4);
                      } else if (type === _entity_graphics_EllipseEntity_js__WEBPACK_IMPORTED_MODULE_4__["EllipseEntity"].Name) {
                        /*var el = this.paper.ellipse(c.raw.param.x, c.raw.param.y, c.raw.param.rx, c.raw.param.ry);
                         el.attr("stroke", c.raw.attr.stroke);
                         el.attr("stroke-width", c.raw.attr.strokeWidth);
                         el.attr("stroke-linecap", "round");
                         c.el = el;*/
                        _entity_graphics_EllipseEntity_js__WEBPACK_IMPORTED_MODULE_4__["EllipseEntity"].restore(this.paper, _c4);
                      } else if (type === _entity_graphics_ArrowEntity_js__WEBPACK_IMPORTED_MODULE_2__["ArrowEntity"].Name) {
                        _entity_graphics_ArrowEntity_js__WEBPACK_IMPORTED_MODULE_2__["ArrowEntity"].restore(this.paper, _c4, this);
                      } else if (type === _entity_graphics_PencilEntity_js__WEBPACK_IMPORTED_MODULE_5__["PencilEntity"].Name) {
                        /*var el = this.paper.path(c.raw.param);
                         el.attr("stroke", c.raw.attr.stroke);
                         el.attr("stroke-width", c.raw.attr.strokeWidth);
                         el.attr("stroke-linecap", "round");
                         c.el = el;*/
                        _entity_graphics_PencilEntity_js__WEBPACK_IMPORTED_MODULE_5__["PencilEntity"].restore(this.paper, _c4);
                      } else if (type === _entity_graphics_TextEntity_js__WEBPACK_IMPORTED_MODULE_8__["TextEntity"].Name) {
                        /*var el = this.paper.text(c.raw.param.x, c.raw.param.y, c.raw.param.text);
                         el.attr("font-family", c.raw.attr.fontFamily);
                         el.attr("font-size", c.raw.attr.fontSize);
                         c.el = el;*/
                        _entity_graphics_TextEntity_js__WEBPACK_IMPORTED_MODULE_8__["TextEntity"].restore(this.paper, _c4);
                      } else {
                        Logger.e("CubeWhiteboard#_processVGRedo", "Unknown command type: " + type);
                      }
                    }
                  }
                }
              } else if (command.name === 'erase') {
                this.erase(true);
              } else if (command.name === 'cleanup') {
                this.cleanup(true);
              } else if (command.name === 'bgimage') {
                var entity = new _entity_graphics_BackgroundImageEntity_js__WEBPACK_IMPORTED_MODULE_3__["BackgroundImageEntity"](command.param, true);
                this.selectEntity(entity);
              } else {
                var _entity;

                if (command.name === 'rect') {
                  _entity = _entity_graphics_RectEntity_js__WEBPACK_IMPORTED_MODULE_6__["RectEntity"];
                } else if (command.name === 'ellipse') {
                  _entity = _entity_graphics_EllipseEntity_js__WEBPACK_IMPORTED_MODULE_4__["EllipseEntity"];
                } else if (command.name === 'arrow') {
                  _entity = _entity_graphics_ArrowEntity_js__WEBPACK_IMPORTED_MODULE_2__["ArrowEntity"];
                } else if (command.name === 'path') {
                  _entity = _entity_graphics_PencilEntity_js__WEBPACK_IMPORTED_MODULE_5__["PencilEntity"];
                } else if (command.name === 'text') {
                  _entity = _entity_graphics_TextEntity_js__WEBPACK_IMPORTED_MODULE_8__["TextEntity"];
                }

                if (null !== _entity) {
                  el = _entity.draw(this.paper, command, this);

                  if (null === from) {
                    return el;
                  }

                  var _key2 = null;

                  if (undefined !== group && null != group) {
                    _key2 = from + "_" + group;
                  } else {
                    _key2 = from;
                  } // 记录


                  if (this.remoteRecordMap.containsKey(_key2)) {
                    var _list2 = this.remoteRecordMap.get(_key2);

                    _list2.push({
                      sn: command.sn,
                      type: _entity.Name,
                      el: el,
                      raw: {
                        "param": command.param,
                        "attr": command.attr
                      }
                    });
                  } else {
                    var _list3 = [{
                      sn: command.sn,
                      type: _entity.Name,
                      el: el,
                      raw: {
                        "param": command.param,
                        "attr": command.attr
                      }
                    }];
                    this.remoteRecordMap.put(_key2, _list3);
                  }

                  return el;
                } else {
                  Logger.w('CubeWhiteboard', 'Unknown VG command: ' + command.name);
                }
              }
            }
            /**
             * 删除指定 SN 的记录，目前此方法没有进行网络同步
             */

          }, {
            key: "remove",
            value: function remove(sn) {
              if (this.pastRecords.length === 0) {
                return;
              }

              var record = null;
              var index = -1;

              for (var i = this.pastRecords.length - 1; i >= 0; --i) {
                var r = this.pastRecords[i];

                if (r.sn === sn) {
                  record = r;
                  index = i;
                  break;
                }
              }

              if (null === record) {
                return;
              }

              this.pastRecords.splice(index, 1);
              this.undoRecords.push(record); // 解除管理

              this.viewport.unmanage(record.set); // r : {sn: sn, type: type, set: set, raw: {param: param, attr: attr}}

              if (record.set.forEach === undefined) {
                if (record.set._custom) {
                  record.set._custom.remove();

                  record.set._custom = null;
                }

                record.set.remove();
              } else {
                record.set.forEach(function (e) {
                  e.remove();
                });
              }
            }
            /**
             * 重置白板大小。
             */

          }, {
            key: "resize",
            value: function resize(width, height) {
              if (null === this.paper) {
                return;
              } // 设置为居中


              if (this.paperWidth > 0 && this.paperHeight > 0) {
                var dx = width - this.paperWidth;
                var dy = height - this.paperHeight;
                this.paper.setSize(this.paperWidth, this.paperHeight);
                this.paperDom.style.left = parseInt(dx * 0.5) + "px";
                this.paperDom.style.top = parseInt(dy * 0.5) + "px";
              } else {
                this.paper.setSize(width, height);
                this.paperDom.style.left = "0px";
                this.paperDom.style.top = "0px";
              }

              this.width = width;
              this.height = height;

              if (null !== this.curEntity) {
                this.curEntity.onResize(width, height);
              }

              var slide = this.getSlide();

              if (slide) {
                slide.onResize(width, height);
              }

              if (null !== this.remoteSlide) {
                this.remoteSlide.onResize(width, height);
              }

              this.maskDom.style.width = width + "px";
              this.maskDom.style.height = height + "px";
              this.bgDom.style.width = width + "px";
              this.bgDom.style.height = height + "px";
              var bgimg = this.bgDom.getElementsByTagName('img');

              if (null !== bgimg) {
                bgimg = bgimg[0];

                if (bgimg !== undefined && null !== bgimg) {
                  this._centerBgImage(bgimg);
                }
              }
            }
            /**
             * 以幻灯片模式进行工作。
             */

          }, {
            key: "workAsSlide",
            value: function workAsSlide(file, isLoad) {
              // 是否首次分享(非记录同步)
              var isFirstSharing = isLoad ? undefined : true;

              if (file.urls === undefined || file.origin === undefined) {
                Logger.w('CubeWhiteboard', 'Invalid sharing file');
                return false;
              }

              if (this.getSlide()) {
                // 正在录制和回放白板时不允许变更幻灯片
                if (null !== this.recorder && this.recorder.isRecording() || null !== this.player && this.player.isPlaying()) {
                  this.listener.onFailed(_entity_StateCode_js__WEBPACK_IMPORTED_MODULE_13__["StateCode"].OpenSlideFailed);
                  return false;
                }
              } // 如果有背景图片，则移除背景图片


              if (this.exMap.containsKey(_entity_graphics_BackgroundImageEntity_js__WEBPACK_IMPORTED_MODULE_3__["BackgroundImageEntity"].Name)) {
                var be = this.exMap.get(_entity_graphics_BackgroundImageEntity_js__WEBPACK_IMPORTED_MODULE_3__["BackgroundImageEntity"].Name);
                be.dispose();
                this.exMap.remove(_entity_graphics_BackgroundImageEntity_js__WEBPACK_IMPORTED_MODULE_3__["BackgroundImageEntity"].Name);
                be = null;
              } // 清空


              this.cleanup(true); // 擦除
              //this.erase(false, false);
              // 新幻灯片

              var slide = new _entity_graphics_SlideEntity_js__WEBPACK_IMPORTED_MODULE_7__["SlideEntity"](file);
              slide.from = this.sessionName;

              if (isFirstSharing) {
                slide.isFirstSharing = true;
              }

              this.selectEntity(slide);
              this.listener.onSlideOpened(slide);
              return true;
            }
            /**
             * 返回幻灯片实体。
             */

          }, {
            key: "getSlide",
            value: function getSlide() {
              return this.exMap.get(_entity_graphics_SlideEntity_js__WEBPACK_IMPORTED_MODULE_7__["SlideEntity"].Name);
            }
            /**
             * 返回白板当前缩放比例。
             */

          }, {
            key: "getZoomRatio",
            value: function getZoomRatio() {
              return this.viewport.getRatio();
            }
            /**
             * 获取白板录像机。
             */

          }, {
            key: "getRecorder",
            value: function getRecorder() {
              if (null === this.recorder) {
                this.recorder = new _WhiteboardRecorder_js__WEBPACK_IMPORTED_MODULE_10__["WhiteboardRecorder"](this);
              }

              return this.recorder;
            }
            /**
             * 获取白板播放器。
             */

          }, {
            key: "getPlayer",
            value: function getPlayer() {
              if (null === this.player) {
                this.player = new _WhiteboardPlayer_js__WEBPACK_IMPORTED_MODULE_11__["WhiteboardPlayer"](this);
              }

              return this.player;
            }
          }, {
            key: "onSlideChanged",
            value: function onSlideChanged(slide, pageAction) {
              // 自适应视口
              this.viewport.adaptView();
              this.listener.onSlideChanged(slide); // 尝试记录

              if (null !== this.recorder && this.recorder.isRecording()) {
                this.recorder._notifyOperation({
                  "name": "slide",
                  "page": slide.currentPage(),
                  "time": Date.now()
                });
              }
            }
          }, {
            key: "triggerChange",
            value: function triggerChange(data) {
              this.listener.onChange(data);
            }
          }]);

          return WhiteboardCoreServiceWorker;
        }(_WhiteboardCoreService_js__WEBPACK_IMPORTED_MODULE_0__["WhiteboardCoreService"]);
        /***/

      },
      /* 3 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardCoreService", function () {
          return WhiteboardCoreService;
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
         * WhiteboardCoreService.js
         * Cube Whiteboard Core
         *
         * Copyright (c) 2015-2017 Cube Team. All rights reserved.
         */


        var WhiteboardCoreService =
        /*#__PURE__*/
        function () {
          function WhiteboardCoreService() {
            _classCallCheck(this, WhiteboardCoreService);
          }

          _createClass(WhiteboardCoreService, [{
            key: "setListener",

            /**
             * 设置监听器
             * @param {WhiteboardCoreListener} listener - 需要设置的监听器
             */
            value: function setListener(listener) {}
            /**
             * 加载白板
             * @param {Number} width - 宽度
             * @param {Number} height - 高度
             */

          }, {
            key: "load",
            value: function load(width, height) {}
            /**
             * 自动更正大小
             */

          }, {
            key: "adjustSize",
            value: function adjustSize() {}
            /**
             * 选择白板工具。选择新工具后，之前的白板工具将立即失效。
             * @param {GraphicsEntity} entity - 工具实体
             */

          }, {
            key: "selectEntity",
            value: function selectEntity(entity) {}
            /**
             * 取消选择
             * @param {GraphicsEntity} entity - 工具实体
             */

          }, {
            key: "unselect",
            value: function unselect(entity) {}
            /**
             * 后退一部白板操作
             * @param {Boolean} silent - 是否使用沉默模式运行
             * @returns {Boolean} - 返回是否操作成功。
             */

          }, {
            key: "undo",
            value: function undo(silent) {}
            /**
             * 前进一步白板操作。
             * @param {Boolean} silent - 是否使用沉默模式运行
             * @returns {Boolean} - 返回是否操作成功。
             */

          }, {
            key: "redo",
            value: function redo(silent) {}
            /**
             * 擦除绘制数据。
             * @param {Boolean} silent - 是否使用沉默模式运行
             * @param {Boolean} clearSlide - 是否清空幻灯片记录。
             * @returns {Boolean} - 返回是否操作成功。
             */

          }, {
            key: "erase",
            value: function erase(silent, clearSlide) {}
            /**
             * 清空白板所有数据。
             * @param {Boolean} silent - 是否使用沉默模式运行
             * @returns {Boolean} 返回是否操作成功。
             */

          }, {
            key: "cleanup",
            value: function cleanup(silent) {}
            /**
             * 按照指定比例，等比缩放白板。
             */

          }, {
            key: "zoom",
            value: function zoom(ratio) {}
            /**
             * 重置白板视口
             * @param {Boolean} reset - 是否直接重置
             */

          }, {
            key: "resetView",
            value: function resetView(reset) {}
            /**
             * 设置远端大小
             * @param {Number} width - 宽度
             * @param {Number} height - 高度
             */

          }, {
            key: "setRemoteSize",
            value: function setRemoteSize(width, height) {}
            /**
             * 同步白板大小
             * @param {{width:Number, height: Number}} boardSize - 白板大小
             */

          }, {
            key: "syncBoardSize",
            value: function syncBoardSize(boardSize) {}
            /**
             * 白板 DOM 节点下的有效的页面元素数量。
             * @returns {Number} 元素数量。
             */

          }, {
            key: "numPaperElements",
            value: function numPaperElements() {}
            /**
             * 返回当前可扩展实体。
             * @returns {GraphicsEntity} 实体。
             */

          }, {
            key: "getExEntity",
            value: function getExEntity(name) {}
            /**
             * 显示遮罩。
             */

          }, {
            key: "showMask",
            value: function showMask() {}
            /**
             * 隐藏遮罩。
             */

          }, {
            key: "hideMask",
            value: function hideMask() {}
            /*
             * 导出当前白板数据。
             * @returns {Object} 返回 JSON 格式的数据内容。
             */

            /**
             * 导出当前白板数据。
             * @param {Array.<Number>} [pages] - 指定页码，如果不填写该参数则默认导出当前页数据。
             * @returns {Object} 返回 JSON 格式的数据内容。
             */

          }, {
            key: "exportContent",
            value: function exportContent(pages) {}
            /**
             * 导入数据到白板。
             *
             * @param {Object} data - 指定导入的数据。
             * @returns {boolean} 如果导入成功返回 <code>true</code>，否则返回 <code>false</code> 。
             */

          }, {
            key: "importContent",
            value: function importContent(data) {}
            /**
             * 记录并返回命令的 SN 号
             * @returns {Number} SN 号
             */

          }, {
            key: "record",
            value: function record(type, set, raw, note) {}
            /**
             * 设置白板是否透明。
             *
             * @param {boolean} transparent - 指定白板是否透明。如果设置为 <code>true</code> 表示透明，否则表示不透明。
             */

          }, {
            key: "setTransparency",
            value: function setTransparency(transparent) {}
            /**
             * 设置背景图片。
             *
             * @param {String} url - 指定图片的 URL 地址。
             * @param {Function} loadCallback - 指定图片加载状态回调。
             */

          }, {
            key: "setBackgroundImage",
            value: function setBackgroundImage(url, loadCallback) {}
            /**
             * 设置白板背景颜色
             * @param color {String} - 背景色值, 可能的值: "rgba(0, 0, 0, 1)", "#ffffff", "transparent"
             */

          }, {
            key: "setBackgroundColor",
            value: function setBackgroundColor(color) {}
            /**
             * 加载白板记录。
             *
             * @param {Object} data - 指定需要加载的记录。
             * @param {boolean} clean - 指定加载记录前是否清空当前白板数据，设置为 <code>true</code> 则清空白板后加载记录。
             */

          }, {
            key: "loadRecordData",
            value: function loadRecordData(data, clean) {}
            /**
             * 加载 VG 命令
             * @param {Object} command - 命令
             * @param {String} from - 发送人名称
             * @param {String} group - 群组号
             */

          }, {
            key: "loadVGCommand",
            value: function loadVGCommand(command, from, group) {}
            /**
             * 删除指定 SN 的记录，目前此方法没有进行网络同步
             * @param {Number} sn - 需要删除的记录的 sn
             */

          }, {
            key: "remove",
            value: function remove(sn) {}
            /**
             * 重置白板大小。
             *
             * @param {Number} width - 指定白板宽度。
             * @param {Number} height - 指定白板高度。
             */

          }, {
            key: "resize",
            value: function resize(width, height) {}
            /**
             * 以幻灯片模式进行工作。
             *
             * @param {WhiteboardFile} file - 指定需要加载为幻灯片的文件。
             * @param {Boolean} [isLoad] - 是否首次加载
             */

          }, {
            key: "workAsSlide",
            value: function workAsSlide(file, isLoad) {}
            /**
             * @typedef {Object} WhiteboardFile
             * @property {String} account - 文件关联的 Cube 号。
             * @property {String} origin - 原始文件名。
             * @property {String} alias - 由服务器生成的文件别名。
             * @property {String} url - 文件的访问 URL 。
             * @property {Number} size - 文件的大小，单位：字节。
             * @property {Array.<String>} [urls] - 文档类型文件被转换之后的访问 URL 地址的数组。
             */

            /**
             * 返回幻灯片实体。
             *
             * @returns {SlideEntity} 幻灯片图形实体。如果当前白板没有使用幻灯片返回 <code>null</code> 。
             */

          }, {
            key: "getSlide",
            value: function getSlide() {}
            /**
             * 返回白板当前缩放比例。
             *
             * @returns {Number} 当前视口的缩放比例，值域：0.0 ~ 5.0
             */

          }, {
            key: "getZoomRatio",
            value: function getZoomRatio() {}
            /**
             * 获取白板录像机。
             */

          }, {
            key: "getRecorder",
            value: function getRecorder() {}
            /**
             * 获取白板播放器。
             */

          }, {
            key: "getPlayer",
            value: function getPlayer() {}
            /**
             * 取消加载白板动作
             */

          }, {
            key: "unload",
            value: function unload() {}
          }]);

          return WhiteboardCoreService;
        }();
        /***/

      },
      /* 4 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Viewport", function () {
          return Viewport;
        });
        /* harmony import */


        var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

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
         * Viewport.js
         * Cube Engine
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 白板视口。
         *
         * @class Viewport
         * @author Xu Jiangwei
         */


        var Viewport =
        /*#__PURE__*/
        function () {
          function Viewport(wb) {
            _classCallCheck(this, Viewport);

            this.wb = wb;
            this.width = wb.paperWidth;
            this.height = wb.paperHeight;
            this.enabled = true;
            this.down = false;
            this.bboxPadding = 4;
            this.zoomRatio = -1.0;
            this.posX = 0;
            this.posY = 0;
            this.tempX = 0;
            this.tempY = 0;
            this.elements = [];
          }

          _createClass(Viewport, [{
            key: "manage",
            value: function manage(sn, el) {
              var self = this;

              _utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__["Utils"].unselectable(el.node);

              if (this.elements.indexOf(el) >= 0) {
                return;
              } // 绑定 SN 到元素


              el.sn = sn;
              this.elements.push(el);
              el.click(function (e) {
                if (null == el._custom || undefined === el._custom) {
                  var paper = self.wb.paper;
                  var bb = el.getBBox();
                  el._custom = {
                    list: [],
                    remove: function remove() {
                      for (var i = 0; i < this.list.length; ++i) {
                        var e = this.list[i];
                        e.remove();
                      }

                      this.list.splice(0, this.list.length);
                    }
                  };
                  var bbox = paper.rect(bb.x - self.bboxPadding, bb.y - self.bboxPadding, bb.width + self.bboxPadding + self.bboxPadding, bb.height + self.bboxPadding + self.bboxPadding);
                  bbox.attr('stroke', '#1AA0E6');
                  bbox.attr('stroke-dasharray', '.');

                  el._custom.list.push(bbox);

                  var c = paper.circle(bb.x - self.bboxPadding, bb.y, 10);

                  var closeHandler = function closeHandler(e) {
                    el._custom.remove();

                    el._custom = null;
                    self.wb.remove(el.sn);
                    c.unclick(closeHandler);
                  };

                  c.click(closeHandler);
                  c.attr("fill", '#1AA0E6');
                  c.attr('stroke', '#1AA0E6');

                  el._custom.list.push(c);

                  var x1 = bb.x - 5 - self.bboxPadding;
                  var y1 = bb.y - 5;
                  var x2 = bb.x + 5 - self.bboxPadding;
                  var y2 = bb.y + 5;
                  var x = paper.path("M" + x1 + "," + y1 + " L" + x2 + "," + y2 + " Z");
                  x.attr('stroke', '#FFF');
                  x.attr('stroke-width', 2);

                  el._custom.list.push(x);

                  x1 = bb.x + 5 - self.bboxPadding;
                  y1 = bb.y - 5;
                  x2 = bb.x - 5 - self.bboxPadding;
                  y2 = bb.y + 5;
                  x = paper.path("M" + x1 + "," + y1 + " L" + x2 + "," + y2 + " Z");
                  x.attr('stroke', '#FFF');
                  x.attr('stroke-width', 2);

                  el._custom.list.push(x);
                }
              });
            }
          }, {
            key: "unmanage",
            value: function unmanage(el) {
              var index = this.elements.indexOf(el);

              if (index < 0) {
                return;
              }

              this.elements.splice(index, 1);

              if (undefined !== el._custom && null != el._custom) {
                el._custom.remove();

                el._custom = null;
              }
            }
          }, {
            key: "reset",
            value: function reset() {
              this.posX = 0;
              this.posY = 0;
              this.width = this.wb.paperWidth;
              this.height = this.wb.paperHeight;
              this.wb.paper.setViewBox(this.posX, this.posY, this.width, this.height, true);
              this.zoomRatio = 1.0;
              this.elements.splice(0, this.elements.length);
            }
          }, {
            key: "adaptView",
            value: function adaptView() {
              var pos = null;
              var size = null; // 幻灯片

              var slide = this.wb.getSlide(); // 白板尺寸

              var bw = this.wb.width;
              var bh = this.wb.height;

              if (bw == 0 || bh == 0) {
                return;
              }

              var remoteAspectRatio = 0; // 判断是否同步远程

              var flag = false;

              if (null == slide) {
                if (this.wb.remoteWidth <= 0) {
                  return;
                }

                if (this.wb.remoteWidth > bw) {
                  // 远端宽度大于自己，则进行修正
                  flag = true;
                }
              }

              if (flag) {
                var tw = this.wb.remoteWidth;
                var th = this.wb.remoteHeight;
                var fx = (this.wb.paperWidth - tw) * 0.5;
                var fy = (this.wb.paperHeight - th) * 0.5;
                var fw = tw;
                var fh = th;
                pos = {
                  x: fx,
                  y: fy
                };
                size = {
                  width: fw,
                  height: fh
                };
              } else {
                if (null == slide) {
                  return;
                }

                pos = slide.getPosition();

                if (null == pos) {
                  var self = this;
                  setTimeout(function () {
                    self.adaptView();
                  }, 40);
                  return;
                }

                size = slide.getSize();

                if (bw >= size.width && bh >= size.height) {
                  // 不需要进行缩放
                  return;
                }
              }

              var ratioW = size.width / bw;
              var ratioH = size.height / bh;

              if (ratioW > ratioH) {
                var ratio = ratioW;
                var vbw = parseInt(Math.round(ratio * this.wb.paperWidth)) + 1;
                var vbx = (bw * ratio - this.wb.paperWidth * ratio) * 0.5 + pos.x;
                this.posX = parseInt(vbx);
                this.posY = 0;
                this.width = vbw;
                this.height = this.wb.paperHeight;
                this.zoomRatio = bw / size.width;
              } else {
                var ratio = ratioH;
                var vbh = parseInt(Math.round(ratio * this.wb.paperHeight)) + 1;
                var vby = (bh * ratio - this.wb.paperHeight * ratio) * 0.5 + pos.y;
                this.posX = 0;
                this.posY = parseInt(vby);
                this.width = this.wb.paperWidth;
                this.height = vbh;
                this.zoomRatio = bh / size.height;
              }

              this.wb.paper.setViewBox(this.posX, this.posY, this.width, this.height, true);
            }
          }, {
            key: "getRatio",
            value: function getRatio() {
              if (this.zoomRatio > 0.0) {
                return this.zoomRatio;
              }

              var wr = this.wb.paperWidth / this.width;
              var hr = this.wb.paperHeight / this.height;
              var dw = Math.abs(wr - 1.0);
              var dh = Math.abs(hr - 1.0);

              if (dw < dh) {
                this.zoomRatio = hr;
                return hr;
              } else {
                this.zoomRatio = wr;
                return wr;
              }
            }
          }, {
            key: "zoom",
            value: function zoom(ratio) {
              if (ratio <= 0.0) {
                return;
              } //var wr = this.wb.paperWidth / this.width;
              //var hr = this.wb.paperHeight / this.height;
              //var newWidth = this.wb.paperWidth;
              //var newHeight = this.wb.paperHeight;
              // 建立缩放基准


              var newWidth = this.wb.paperWidth / ratio;
              var newHeight = this.wb.paperHeight / ratio;
              this.posX = parseInt((this.wb.paperWidth - newWidth) * 0.5);
              this.posY = parseInt((this.wb.paperHeight - newHeight) * 0.5);
              this.width = newWidth;
              this.height = newHeight;
              this.wb.paper.setViewBox(this.posX, this.posY, this.width, this.height, true);
              this.zoomRatio = ratio;
            }
          }, {
            key: "fireDown",
            value: function fireDown(event) {
              if (!this.enabled || 0 == this.wb.numPaperElements()) {
                return;
              }

              this.down = true;
              var pos = event.touches === undefined ? _utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__["Utils"].getMousePos(event) : _utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__["Utils"].getTouchPos(event);
              this.tempX = pos.x;
              this.tempY = pos.y;
            }
          }, {
            key: "fireUp",
            value: function fireUp(event) {
              if (!this.enabled) {
                return;
              }

              this.down = false;
            }
          }, {
            key: "fireMove",
            value: function fireMove(event) {
              if (!this.enabled) {
                return;
              }

              if (!this.down) {
                return;
              }

              var pos = event.touches === undefined ? _utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__["Utils"].getMousePos(event) : _utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__["Utils"].getTouchPos(event);

              if (isNaN(parseInt(pos.x)) || isNaN(parseInt(pos.y))) {
                return;
              }

              var dx = this.tempX - pos.x;
              var dy = this.tempY - pos.y;
              this.posX += parseInt(dx);
              this.posY += parseInt(dy); // 更新视口位置

              this.wb.paper.setViewBox(this.posX, this.posY, this.width, this.height, true);
              this.tempX = pos.x;
              this.tempY = pos.y;
            }
          }, {
            key: "onClick",
            value: function onClick(event) {
              if (event.target.tagName == "svg") {
                for (var i = 0; i < this.elements.length; ++i) {
                  var el = this.elements[i];

                  if (undefined !== el._custom && null != el._custom) {
                    el._custom.remove();

                    el._custom = null;
                  }
                }
              }
            }
          }, {
            key: "onMouseMove",
            value: function onMouseMove(event) {
              this.fireMove(event);
            }
          }, {
            key: "onMouseDown",
            value: function onMouseDown(event) {
              this.fireDown(event);
            }
          }, {
            key: "onMouseUp",
            value: function onMouseUp(event) {
              this.fireUp(event);
            }
          }, {
            key: "onTouchMove",
            value: function onTouchMove(event) {
              this.fireMove(event);
            }
          }, {
            key: "onTouchStart",
            value: function onTouchStart(event) {
              this.fireDown(event);
            }
          }, {
            key: "onTouchEnd",
            value: function onTouchEnd(event) {
              this.fireUp(event);
            }
          }, {
            key: "onKeyPress",
            value: function onKeyPress(event) {}
          }, {
            key: "_detectCollision",
            value: function _detectCollision(pos, bbox) {}
          }]);

          return Viewport;
        }();
        /***/

      },
      /* 5 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Utils", function () {
          return Utils;
        });
        /*
         * Utils.js
         * Cube Whiteboard Core
         *
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */


        var ua = navigator.userAgent.toLowerCase();
        var Utils = {
          isIPhone: ua.match(/iphone os/i) == "iphone os",
          isAndroid: ua.match(/android/i) == "android",
          // 获取元素子节点
          getElementChildren: function getElementChildren(el) {
            if (!!el.children) {
              return el.children;
            } else {
              var arr = [];
              var nodeList = el.childNodes;

              for (var i = 0; i < nodeList.length; ++i) {
                if (nodeList[i].nodeType === 1) {
                  arr.push(nodeList[i]);
                }
              }

              return arr;
            }
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
          getDrawPosition: function getDrawPosition(dom, event) {
            var pos = event.touches === undefined ? this.getMousePos(event) : this.getTouchPos(event);
            var dx = this.getX(dom);
            var dy = this.getY(dom);
            return {
              x: pos.x - dx,
              y: pos.y - dy
            };
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
          },
          // 对齐数字，修正浮点数精度，返回 Number 型
          fixNumber: function fixNumber(number) {
            var num = new Number(number);
            return Number(num.toFixed(2));
          },
          // 对齐数字，修正浮点数精度，返回 String 型
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
          }
        };
        /***/
      },
      /* 6 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "ArrowEntity", function () {
          return ArrowEntity;
        });
        /* harmony import */


        var _GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
        /* harmony import */


        var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);

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
         * ArrowEntity.js
         * Cube Engine
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 矩形实体。
         *
         * @class ArrowEntity
         * @extends GraphicsEntity
         * @author Xu Jiangwei, Guan Yong
         */


        var ArrowEntity =
        /*#__PURE__*/
        function (_GraphicsEntity) {
          _inherits(ArrowEntity, _GraphicsEntity);

          _createClass(ArrowEntity, null, [{
            key: "Name",
            get: function get() {
              return "arrow";
            }
            /**
             * @typedef {Object} ArrowEntityOptions
             * @property {Number} weight - 箭头的线重。
             * @property {String} color - 箭头的颜色。
             */

            /**
             * @constructs ArrowEntity
             * @param {ArrowEntityOptions} [options] - 设置参数。
             */

          }]);

          function ArrowEntity(options) {
            var _this;

            _classCallCheck(this, ArrowEntity);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(ArrowEntity).call(this, ArrowEntity.Name));
            _this.weight = 4;
            _this.color = '#FE0000';
            _this.flag = false;
            _this.startPos = null;
            _this.endPos = null;
            _this.arrow = null;
            _this.drawTimer = 0;
            _this.drawEl = null;
            _this.exclusive = true;

            if (options !== undefined) {
              _this.weight = (options.weight || 2) + 2;
              _this.color = options.color || "#FE0000";
            }

            return _this;
          }

          _createClass(ArrowEntity, [{
            key: "setLineWeight",
            value: function setLineWeight(value) {
              this.weight = value + 2;
            }
          }, {
            key: "fireBegin",
            value: function fireBegin(event) {
              this.flag = true;
              this.startPos = this.getCursorPos(event);

              if (this.drawTimer > 0) {
                clearTimeout(this.drawTimer);
                this.drawTimer = 0;
              } // 查找匹配的 marker


              this.arrow = "url(" + this.board._matcheArrow(this.color) + ")";
            }
          }, {
            key: "fireEnd",
            value: function fireEnd(event) {
              this.flag = false;

              if (this.drawTimer > 0) {
                clearTimeout(this.drawTimer);
                this.drawTimer = 0;
              }

              if (null != this.drawEl) {
                this.drawEl.remove();
              }

              this.endPos = this.getCursorPos(event);
              this.drawEl = this.draw(this.startPos, this.endPos);

              if (null == this.drawEl) {
                return;
              }

              var x1 = this.startPos.x;
              var y1 = this.startPos.y;
              var x2 = this.endPos.x;
              var y2 = this.endPos.y;
              var self = this;
              var param = {
                x1: _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].fixNumber(x1),
                y1: _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].fixNumber(y1),
                x2: _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].fixNumber(x2),
                y2: _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].fixNumber(y2)
              };
              var attr = {
                "stroke": self.color,
                "strokeWidth": self.weight
              };
              var sn = self.board.record(ArrowEntity.Name, self.drawEl, {
                "param": param,
                "attr": attr
              }); // 发送数据

              var data = {
                "whiteboardId": self.board.name,
                "command": {
                  "name": "arrow",
                  "sn": sn,
                  "param": param,
                  "attr": attr
                }
              }; // 如果当前有幻灯片, 就记录当前幻灯片页数

              var slide = this.board.getSlide();

              if (null != slide) {
                data.command.page = slide.cursor + 1;
              }

              this.board.triggerChange(data);
              this.drawEl = null;
            }
          }, {
            key: "fireMove",
            value: function fireMove(event) {
              if (!this.flag) {
                return;
              }

              if (this.drawTimer > 0) {
                return;
              }

              var self = this;
              this.drawTimer = setTimeout(function () {
                clearTimeout(self.drawTimer);
                self.drawTimer = 0;

                if (null != self.drawEl) {
                  self.drawEl.remove();
                }

                var pos = self.getCursorPos(event);
                self.drawEl = self.draw(self.startPos, pos);
              }, 40);
            }
          }, {
            key: "dispose",
            value: function dispose() {
              this.board.paperDom.style.cursor = "auto";

              if (this.drawTimer > 0) {
                clearTimeout(this.drawTimer);
                this.drawTimer = 0;
              }

              _GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__["GraphicsEntity"].prototype.dispose.call(this);
            }
          }, {
            key: "draw",
            value: function draw(begin, end) {
              return ArrowEntity._Draw(this.board, begin, end, this.color, this.weight, this.arrow);
            }
          }, {
            key: "onMouseMove",
            value: function onMouseMove(e) {
              this.fireMove(e);
            }
          }, {
            key: "onMouseDown",
            value: function onMouseDown(e) {
              this.fireBegin(e);
            }
          }, {
            key: "onMouseUp",
            value: function onMouseUp(e) {
              this.fireEnd(e);
            }
          }, {
            key: "onTouchMove",
            value: function onTouchMove(e) {
              this.fireMove(e);
            }
          }, {
            key: "onTouchStart",
            value: function onTouchStart(e) {
              this.fireBegin(e);
            }
          }, {
            key: "onTouchEnd",
            value: function onTouchEnd(e) {
              this.fireEnd(e);
            }
          }], [{
            key: "_Draw",
            value: function _Draw(board, begin, end, color, weight, arrow) {
              var x = begin.x;
              var y = begin.y;
              var x2 = end.x;
              var y2 = end.y;

              if (Math.abs(x2 - x) < 3 && Math.abs(y2 - y) < 3) {
                // 绘制距离太短
                return null;
              }

              var u = _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__["Utils"];

              if (arrow.length > 20) {
                // 启动集合
                board.paper.setStart(); // 绘制线条

                var drawEl = board.paper.path("M" + u.fixNumberToString(x) + "," + u.fixNumberToString(y) + " L" + u.fixNumberToString(x2) + "," + u.fixNumberToString(y2));
                drawEl.attr("stroke", color);
                drawEl.attr("stroke-width", weight);
                drawEl.attr("stroke-linecap", "round"); // 计算角度

                var z = Math.sqrt(Math.pow(Math.abs(x2 - x), 2) + Math.pow(Math.abs(y2 - y), 2));
                var sin = Math.abs(y2 - y) / z;
                var radian = Math.asin(sin);
                var angle = 180 / (Math.PI / radian);
                var dX = weight + 3;
                var dY = dX + 6;
                var b = z - dY;
                var pTop = {
                  x: x2,
                  y: y2
                };
                var pLeft = {
                  x: x2 - dX,
                  y: y2 + dY
                };
                var pRight = {
                  x: x2 + dX,
                  y: y2 + dY
                };
                var r2 = Math.atan(dX / b);
                var dZ = Math.sqrt(dX * dX + b * b);

                if (y2 <= y && x2 >= x) {
                  var nR = radian + r2;
                  pLeft.x = x + dZ * Math.cos(nR);
                  pLeft.y = y - dZ * Math.sin(nR);
                  nR = radian - r2;
                  pRight.x = x + dZ * Math.cos(nR);
                  pRight.y = y - dZ * Math.sin(nR);
                } else if (y2 > y && x2 >= x) {
                  var nR = radian + r2;
                  pLeft.x = x + dZ * Math.cos(nR);
                  pLeft.y = y + dZ * Math.sin(nR);
                  nR = radian - r2;
                  pRight.x = x + dZ * Math.cos(nR);
                  pRight.y = y + dZ * Math.sin(nR);
                } else if (y2 > y && x2 < x) {
                  var nR = radian + r2;
                  pLeft.x = x - dZ * Math.cos(nR);
                  pLeft.y = y + dZ * Math.sin(nR);
                  nR = radian - r2;
                  pRight.x = x - dZ * Math.cos(nR);
                  pRight.y = y + dZ * Math.sin(nR);
                } else {
                  var nR = radian + r2;
                  pLeft.x = x - dZ * Math.cos(nR);
                  pLeft.y = y - dZ * Math.sin(nR);
                  nR = radian - r2;
                  pRight.x = x - dZ * Math.cos(nR);
                  pRight.y = y - dZ * Math.sin(nR);
                }

                var arrowEl = board.paper.path("M" + u.fixNumberToString(pTop.x) + "," + u.fixNumberToString(pTop.y) + " L" + u.fixNumberToString(pLeft.x) + "," + u.fixNumberToString(pLeft.y) + " L" + u.fixNumberToString(pRight.x) + "," + u.fixNumberToString(pRight.y) + " z");
                /* 测试用代码
                 var a = board.paper.circle(pTop.x, pTop.y, 3);
                 a.attr("fill", "black");
                 a = board.paper.circle(pLeft.x, pLeft.y, 3);
                 a.attr("fill", "green");
                 a = board.paper.circle(pRight.x, pRight.y, 3);
                 a.attr("fill", "blue");
                 */

                arrowEl.attr("stroke", color);
                arrowEl.attr("stroke-width", weight);
                arrowEl.attr("stroke-linecap", "butt");
                arrowEl.attr("fill", color); // 结束集合

                return board.paper.setFinish();
              } else {
                var drawEl = board.paper.path("M" + u.fixNumberToString(x) + "," + u.fixNumberToString(y) + " L" + u.fixNumberToString(x2) + "," + u.fixNumberToString(y2));
                drawEl.attr("stroke", color);
                drawEl.attr("stroke-width", weight);
                drawEl.attr("stroke-linecap", "round");
                drawEl.node.setAttribute("marker-end", arrow);
                return drawEl;
              }
            }
          }, {
            key: "draw",
            value: function draw(paper, command, board) {
              var arrow = "url(" + board._matcheArrow(command.attr.stroke) + ")";
              var begin = {
                x: command.param.x1,
                y: command.param.y1
              };
              var end = {
                x: command.param.x2,
                y: command.param.y2
              };

              var el = ArrowEntity._Draw(board, begin, end, command.attr.stroke, command.attr.strokeWidth, arrow);

              return el;
            }
          }, {
            key: "restore",
            value: function restore(paper, record, board, animation) {
              // r : {sn: sn, type: type, set: set, raw: {param: param, attr: attr}}
              var animated = undefined !== animation;
              var param = record.raw.param;
              var arrow = "url(" + board._matcheArrow(record.raw.attr.stroke) + ")";
              var begin = {
                x: param.x1,
                y: param.y1
              };
              var end = {
                x: param.x2,
                y: param.y2
              };

              var el = ArrowEntity._Draw(board, begin, end, record.raw.attr.stroke, animated ? 0 : record.raw.attr.strokeWidth, arrow);

              record.set = el;

              if (animated) {
                el.animate({
                  "stroke-width": record.raw.attr.strokeWidth
                }, animation.dur, "linear");
              }
            }
          }]);

          return ArrowEntity;
        }(_GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__["GraphicsEntity"]);
        /***/

      },
      /* 7 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "GraphicsEntity", function () {
          return GraphicsEntity;
        });
        /* harmony import */


        var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

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
         * GraphicsEntity.js
         * Cube Engine
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 白板图形工具的基类。
         *
         * @class GraphicsEntity
         * @author Xu Jiangwei, Guan Yong
         */


        var GraphicsEntity =
        /*#__PURE__*/
        function () {
          function GraphicsEntity(name) {
            _classCallCheck(this, GraphicsEntity);

            this.name = name;
            /**
             * @type {WhiteboardCoreServiceWorker}
             */

            this.board = null;
            this.exclusive = false;
          }
          /**
           * 设置图元颜色。
           *
           * @param {String} value - 十六进制RGB值。
           */


          _createClass(GraphicsEntity, [{
            key: "setColor",
            value: function setColor(value) {
              this.color = value;
            }
            /**
             * 设置图元边框颜色。
             *
             * @param {String} value - 十六进制RGB值。
             */

          }, {
            key: "setBorderColor",
            value: function setBorderColor(value) {
              this.borderColor = value;
            }
            /**
             * 设置图元线重值。
             *
             * @param {Number} value - 自然数形式的线重值。
             */

          }, {
            key: "setLineWeight",
            value: function setLineWeight(value) {
              this.weight = value;
            }
            /**
             * 设置图元边框宽度。
             *
             * @param {Number} value - 自然数形式的宽度值。
             */

          }, {
            key: "setBorderWidth",
            value: function setBorderWidth(value) {
              this.borderWidth = value;
            } // 作废当前图元

          }, {
            key: "dispose",
            value: function dispose() {
              this.board = null;
            } // 计算并返回当前操作位置

          }, {
            key: "getCursorPos",
            value: function getCursorPos(event) {
              //var pos = Utils.getDrawPosition(this.board.dom, event);
              var pos = _utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__["Utils"].getCursorPosition(event);

              var x = pos.x;
              var y = pos.y; // FIXME 2015.11.20 前
              //var x = pos.x + this.board.viewport.posX - parseInt(this.board.paperDom.style.left);
              //var y = pos.y + this.board.viewport.posY - parseInt(this.board.paperDom.style.top);
              // FIXME 2015.11.25 修改
              //var x = pos.x - parseInt(this.board.paperDom.style.left);
              //var y = pos.y - parseInt(this.board.paperDom.style.top);
              //x = x * ((this.board.viewport.viewW == 0 ? this.board.paperWidth : this.board.viewport.viewW) / this.board.paperWidth);
              //y = y * ((this.board.viewport.viewW == 0 ? this.board.paperWidth : this.board.viewport.viewW) / this.board.paperWidth);

              var svgPoint = this.board.paperDom.createSVGPoint();
              svgPoint.x = x;
              svgPoint.y = y;
              svgPoint = svgPoint.matrixTransform(this.board.paperDom.getScreenCTM().inverse());
              x = svgPoint.x;
              y = svgPoint.y;
              return {
                x: x,
                y: y
              };
            }
          }, {
            key: "onDraw",
            value: function onDraw(context) {// Nothing
            }
          }, {
            key: "onResize",
            value: function onResize(width, height) {// Nothing
            }
          }, {
            key: "onClick",
            value: function onClick(e) {// Nothing
            }
          }, {
            key: "onMouseMove",
            value: function onMouseMove(e) {// Nothing
            }
          }, {
            key: "onMouseDown",
            value: function onMouseDown(e) {// Nothing
            }
          }, {
            key: "onMouseUp",
            value: function onMouseUp(e) {// Nothing
            }
          }, {
            key: "onTouchMove",
            value: function onTouchMove(e) {// Nothing
            }
          }, {
            key: "onTouchStart",
            value: function onTouchStart(e) {// Nothing
            }
          }, {
            key: "onTouchEnd",
            value: function onTouchEnd(e) {// Nothing
            }
          }, {
            key: "onKeyPress",
            value: function onKeyPress(e) {// Nothing
            }
          }]);

          return GraphicsEntity;
        }();
        /***/

      },
      /* 8 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "BackgroundImageEntity", function () {
          return BackgroundImageEntity;
        });
        /* harmony import */


        var _GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

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
         * BackgroundImageEntity.js
         * Cube Engine
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */


        var Logger = window.CubeCore.CellCloud.Logger;
        /**
         * 背景图片实体。
         *
         * @class BackgroundImageEntity
         * @extends GraphicsEntity
         * @author Xu Jiangwei, Guan Yong
         */

        var BackgroundImageEntity =
        /*#__PURE__*/
        function (_GraphicsEntity) {
          _inherits(BackgroundImageEntity, _GraphicsEntity);

          _createClass(BackgroundImageEntity, null, [{
            key: "Name",
            get: function get() {
              return "bgimage";
            }
            /**
             * @constructs BackgroundImageEntity
             * @param {String} source - 图片的链接地址。
             */

          }]);

          function BackgroundImageEntity(source, obscure) {
            var _this;

            _classCallCheck(this, BackgroundImageEntity);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(BackgroundImageEntity).call(this, BackgroundImageEntity.Name));
            _this.source = null;
            _this.obscure = false;
            _this.domImage = null;
            _this.img = null;
            _this.rawWidth = 0;
            _this.rawHeight = 0; // 非独占

            _this.exclusive = false;

            if (source === undefined) {
              _this.source = null;
            } else {
              _this.source = source;
            }

            if (obscure === undefined) {
              _this.obscure = false;
            } else {
              _this.obscure = obscure;
            }

            return _this;
          }

          _createClass(BackgroundImageEntity, [{
            key: "dispose",
            value: function dispose() {
              var self = this;

              if (null != self.board.bgImage) {
                self.board.bgImage.remove();
                self.board.bgImage = null;
              }

              _GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__["GraphicsEntity"].prototype.dispose.call(this);
            }
          }, {
            key: "onDraw",
            value: function onDraw() {
              var self = this;

              if (null == self.source) {
                if (null != self.board.bgImage) {
                  self.board.bgImage.remove();
                  self.board.bgImage = null;
                }

                return;
              }

              var image = new Image();

              image.onload = function (e) {
                var w = image.width;
                var h = image.height;
                self.rawWidth = w;
                self.rawHeight = h;
                Logger.i("BackgroundImageEntity", "Image size: " + w + "x" + h);

                if (null != self.board.bgImage) {
                  self.board.bgImage.remove();
                  self.board.bgImage = null;
                }

                self.img = self.board.paper.image(self.source, 0, 0, w, h);
                self.board.bgImage = self.img;

                if (null == self.img.node) {
                  setTimeout(function () {
                    self.onResize(self.board.width, self.board.height);
                  }, 60);
                } else {
                  self.onResize(self.board.width, self.board.height);
                } // 放到底层


                self.img.toBack(); // 不可选择

                self.board.bgImage.node.setAttribute("unselectable", "on");

                self.board.bgImage.node.onmousedown = function () {
                  return false;
                };

                var s = self.board.bgImage.node.style;
                s.userSelect = "none";
                s.webkitUserSelect = "none";
                s.MozUserSelect = "-moz-none";
              };

              image.src = self.source; // 非隐晦模式发送数据

              if (!this.obscure) {
                var data = {
                  "whiteboardId": self.board.name,
                  "command": {
                    "name": "bgimage",
                    "param": self.source
                  }
                };
                this.board.triggerChange(data);
              }
              /*var self = this;
               this.domImage = this.board.setBackgroundImage(this.source, function(image) {
               var w = image.width;
               var h = image.height;
                 self.rawWidth = w;
               self.rawHeight = h;
                 Logger.i("ImageEntity", "Image size: " + w + "x" + h);
                 self.onResize(self.board.width, self.board.height);
               });*/

            }
          }, {
            key: "onResize",
            value: function onResize(width, height) {
              if (null != this.img && null != this.img.node) {
                var iw = this.rawWidth;
                var ih = this.rawHeight;
                var rw = width / iw;
                var rh = height / ih;

                if (rw < rh) {
                  this.img.node.setAttribute('width', parseInt(rw * iw));
                  this.img.node.setAttribute('height', parseInt(rw * ih));
                } else {
                  this.img.node.setAttribute('width', parseInt(rh * iw));
                  this.img.node.setAttribute('height', parseInt(rh * ih));
                } // 居中


                var x = (width - parseInt(this.img.node.getAttribute('width'))) * 0.5;
                var y = (height - parseInt(this.img.node.getAttribute('height'))) * 0.5;
                this.img.node.setAttribute('x', parseInt(x));
                this.img.node.setAttribute('y', parseInt(y));
              }
              /*else if (null != this.domImage) {
               var iw = this.rawWidth;
               var ih = this.rawHeight;
                 var rw = width / iw;
               var rh = height / ih;
               if (rw < rh) {
               this.domImage.width = (rw * iw);
               this.domImage.height = (rw * ih);
               }
               else {
               this.domImage.width = (rh * iw);
               this.domImage.height = (rh * ih);
               }
               }*/

            }
          }, {
            key: "getSource",
            value: function getSource() {
              return this.source;
            }
          }]);

          return BackgroundImageEntity;
        }(_GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__["GraphicsEntity"]);
        /***/

      },
      /* 9 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "EllipseEntity", function () {
          return EllipseEntity;
        });
        /* harmony import */


        var _GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
        /* harmony import */


        var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);

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
         * EllipseEntity.js
         * Cube Engine
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 椭圆实体。
         *
         * @class EllipseEntity
         * @extends GraphicsEntity
         * @author Xu Jiangwei, Guan Yong
         */


        var EllipseEntity =
        /*#__PURE__*/
        function (_GraphicsEntity) {
          _inherits(EllipseEntity, _GraphicsEntity);

          _createClass(EllipseEntity, null, [{
            key: "Name",
            get: function get() {
              return "ellipse";
            }
            /**
             * @typedef {Object} EllipseEntityOptions
             * @property {Number} borderWidth - 边框宽度。
             * @property {String} borderColor - 边框颜色。
             */

            /**
             * @constructs EllipseEntity
             * @param {EllipseEntityOptions} [options] - 设置参数。
             */

          }]);

          function EllipseEntity(options) {
            var _this;

            _classCallCheck(this, EllipseEntity);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(EllipseEntity).call(this, EllipseEntity.Name));
            _this.borderWidth = 2;
            _this.borderColor = "#FE0000";
            _this.flag = false;
            _this.startPos = null;
            _this.endPos = null;
            _this.drawTimer = 0;
            _this.drawEl = null;
            _this.exclusive = true;

            if (options != undefined) {
              _this.borderWidth = options.borderWidth || 2;
              _this.borderColor = options.borderColor || "#FE0000";
            }

            return _this;
          }

          _createClass(EllipseEntity, [{
            key: "fireBegin",
            value: function fireBegin(event) {
              this.flag = true;
              this.startPos = this.getCursorPos(event);

              if (this.drawTimer > 0) {
                clearTimeout(this.drawTimer);
                this.drawTimer = 0;
              }
            }
          }, {
            key: "fireEnd",
            value: function fireEnd(event) {
              this.flag = false;

              if (this.drawTimer > 0) {
                clearTimeout(this.drawTimer);
                this.drawTimer = 0;
              }

              if (null != this.drawEl) {
                this.drawEl.remove();
              }

              this.endPos = this.getCursorPos(event);
              this.draw(this.startPos, this.endPos);
              var self = this;
              var param = {
                x: self.drawEl.attr("cx"),
                y: self.drawEl.attr("cy"),
                rx: self.drawEl.attr("rx"),
                ry: self.drawEl.attr("ry")
              };
              var attr = {
                "stroke": self.borderColor,
                "strokeWidth": self.borderWidth
              };
              var sn = self.board.record(EllipseEntity.Name, self.drawEl, {
                "param": param,
                "attr": attr
              }); // 发送数据

              var data = {
                "whiteboardId": self.board.name,
                "command": {
                  "name": "ellipse",
                  "sn": sn,
                  "param": param,
                  "attr": attr
                }
              }; //如果当前有幻灯片, 就记录当前幻灯片页数

              var slide = this.board.getSlide();

              if (null != slide) {
                data.command.page = slide.cursor + 1;
              }

              this.board.triggerChange(data);
              this.drawEl = null;
            }
          }, {
            key: "fireMove",
            value: function fireMove(event) {
              if (!this.flag) {
                return;
              }

              if (this.drawTimer > 0) {
                return;
              }

              var self = this;
              this.drawTimer = setTimeout(function () {
                clearTimeout(self.drawTimer);
                self.drawTimer = 0;

                if (null != self.drawEl) {
                  self.drawEl.remove();
                }

                var pos = self.getCursorPos(event);
                self.draw(self.startPos, pos);
              }, 40);
            }
          }, {
            key: "draw",
            value: function draw(begin, end) {
              var rx = parseInt((end.x - begin.x) * 0.5);
              var ry = parseInt((end.y - begin.y) * 0.5);
              var x = begin.x + rx;
              var y = begin.y + ry;

              if (rx < 0) {
                rx = Math.abs(rx);
              }

              if (ry < 0) {
                ry = Math.abs(ry);
              }

              var u = _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__["Utils"];
              this.drawEl = this.board.paper.ellipse(u.fixNumber(x), u.fixNumber(y), u.fixNumber(rx), u.fixNumber(ry));
              this.drawEl.attr("stroke", this.borderColor);
              this.drawEl.attr("stroke-width", this.borderWidth);
              this.drawEl.attr("stroke-linecap", "round");
            }
          }, {
            key: "onMouseMove",
            value: function onMouseMove(e) {
              this.fireMove(e);
            }
          }, {
            key: "onMouseDown",
            value: function onMouseDown(e) {
              this.fireBegin(e);
            }
          }, {
            key: "onMouseUp",
            value: function onMouseUp(e) {
              this.fireEnd(e);
            }
          }, {
            key: "onTouchMove",
            value: function onTouchMove(e) {
              this.fireMove(e);
            }
          }, {
            key: "onTouchStart",
            value: function onTouchStart(e) {
              this.fireBegin(e);
            }
          }, {
            key: "onTouchEnd",
            value: function onTouchEnd(e) {
              this.fireEnd(e);
            }
          }], [{
            key: "draw",
            value: function draw(paper, command) {
              var el = paper.ellipse(command.param.x, command.param.y, command.param.rx, command.param.ry);
              el.attr("stroke", command.attr.stroke);
              el.attr("stroke-width", command.attr.strokeWidth);
              el.attr("stroke-linecap", "round");
              return el;
            }
          }, {
            key: "restore",
            value: function restore(paper, record, animation) {
              // r : {sn: sn, type: type, set: set, raw: {param: param, attr: attr}}
              var animated = undefined !== animation;
              var el = paper.ellipse(record.raw.param.x, record.raw.param.y, animated ? 0 : record.raw.param.rx, animated ? 0 : record.raw.param.ry);
              el.attr("stroke", record.raw.attr.stroke);
              el.attr("stroke-width", record.raw.attr.strokeWidth);
              el.attr("stroke-linecap", "round");
              record.set = el;

              if (animated) {
                el.animate({
                  "rx": record.raw.param.rx,
                  "ry": record.raw.param.ry
                }, animation.dur, "linear");
              }
            }
          }]);

          return EllipseEntity;
        }(_GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__["GraphicsEntity"]);
        /***/

      },
      /* 10 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "PencilEntity", function () {
          return PencilEntity;
        });
        /* harmony import */


        var _GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
        /* harmony import */


        var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);

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
         * PencilEntity.js
         * Cube Engine
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 铅笔工具实体。
         *
         * @class PencilEntity
         * @extends GraphicsEntity
         * @author Xu Jiangwei, Guan Yong
         */


        var PencilEntity =
        /*#__PURE__*/
        function (_GraphicsEntity) {
          _inherits(PencilEntity, _GraphicsEntity);

          _createClass(PencilEntity, null, [{
            key: "Name",
            get: function get() {
              return "path";
            }
            /**
             * @typedef {Object} PencilEntityOptions
             * @property {Number} weight - 铅笔的笔触线重。
             * @property {String} color - 铅笔的书写颜色。
             */

            /**
             * @constructs PencilEntity
             * @param {PencilEntityOptions} [options] - 设置参数。
             */

          }]);

          function PencilEntity(options) {
            var _this;

            _classCallCheck(this, PencilEntity);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(PencilEntity).call(this, PencilEntity.Name));
            _this.weight = 2;
            _this.color = "#FE0000";
            _this.lastX = -1;
            _this.lastY = -1;
            _this.lineX = [];
            _this.lineY = [];
            _this.flag = 0;
            _this.beginTime = 0;
            _this.timer = 0;
            _this.queue = [];
            _this.queueTimer = 0;
            _this.vgCmdArray = null;
            _this.exclusive = true;

            if (options !== undefined) {
              _this.weight = options.weight || 2;
              _this.color = options.color || "#FE0000";
            }

            return _this;
          }

          _createClass(PencilEntity, [{
            key: "onDraw",
            value: function onDraw() {
              this.board.paperDom.style.cursor = "url(" + this.board.resourcePath + "/cursor_pencil.png), default";
            }
          }, {
            key: "onMouseMove",
            value: function onMouseMove(event) {
              this.fireMove(event);
            }
          }, {
            key: "onMouseDown",
            value: function onMouseDown(event) {
              this.fireStart(event);
            }
          }, {
            key: "onMouseUp",
            value: function onMouseUp(event) {
              this.fireEnd(event);
            }
          }, {
            key: "onTouchMove",
            value: function onTouchMove(event) {
              this.fireMove(event);
            }
          }, {
            key: "onTouchStart",
            value: function onTouchStart(event) {
              this.fireStart(event);
            }
          }, {
            key: "onTouchEnd",
            value: function onTouchEnd(event) {
              this.fireEnd(event);
            }
          }, {
            key: "fireMove",
            value: function fireMove(event) {
              if (this.flag == 1) {
                var pos = this.getCursorPos(event);
                this.lineX.push(pos.x);
                this.lineY.push(pos.y);
              }
            }
          }, {
            key: "fireStart",
            value: function fireStart(event) {
              var _this2 = this; //this.lineX = [];
              //this.lineY = [];


              this.lineX.splice(0, this.lineX.length);
              this.lineX.length = 0;
              this.lineY.splice(0, this.lineY.length);
              this.lineY.length = 0;
              var pos = this.getCursorPos(event);
              this.lineX.push(pos.x);
              this.lineY.push(pos.y);
              this.flag = 1;
              this.beginTime = Date.now();
              this.board.paper.setStart();
              this.vgCmdArray = [];

              if (this.timer > 0) {
                clearTimeout(this.timer);
              }

              this.timer = setTimeout(function () {
                clearTimeout(_this2.timer);
                _this2.timer = 0;

                _this2.draw();
              }, 60);
            }
          }, {
            key: "fireEnd",
            value: function fireEnd(event) {
              this.flag = 0;

              if (this.timer > 0) {
                clearTimeout(this.timer);
                this.timer = 0;
              }

              if (null == this.vgCmdArray) {
                return;
              }

              var endTime = Date.now();
              var param = this.vgCmdArray.join(' ');
              var set = this.board.paper.setFinish();
              set.attr('stroke', this.color);
              set.attr('stroke-width', this.weight);
              set.attr('stroke-linecap', "round");
              /*var len = 0;
              set.forEach(function(e) {
              	len += e.node.getTotalLength();
              });*/

              var sn = this.board.record(PencilEntity.Name, set, {
                "param": param,
                "attr": {
                  "stroke": this.color,
                  "strokeWidth": this.weight,
                  "begin": this.beginTime,
                  "end": endTime
                }
              });
              var data = {
                "whiteboardId": this.board.name,
                "command": {
                  "name": "path",
                  "sn": sn,
                  "param": param,
                  "attr": {
                    "stroke": this.color,
                    "strokeWidth": this.weight
                  }
                }
              }; // 如果当前有幻灯片, 就记录当前幻灯片页数

              var slide = this.board.getSlide();

              if (null != slide) {
                data.command.page = slide.currentPage();
              }

              this.queue.push(data); // 进行队列消耗

              this.tick();
              this.vgCmdArray.length = 0;
              this.vgCmdArray = null;
            }
          }, {
            key: "dispose",
            value: function dispose() {
              this.board.paperDom.style.cursor = "auto";

              if (this.timer > 0) {
                clearTimeout(this.timer);
                this.timer = 0;
              }
              /*if (this.queueTimer > 0) {
                  clearTimeout(this.queueTimer);
                  this.queueTimer = 0;
              }*/


              _GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__["GraphicsEntity"].prototype.dispose.call(this);
            }
          }, {
            key: "draw",
            value: function draw() {
              var _this3 = this;

              if (this.timer > 0) {
                clearTimeout(this.timer);
              }

              if (this.lineX.length <= 1) {
                this.timer = setTimeout(function () {
                  _this3.draw();
                }, 60);
                return;
              }

              var cmd = [];
              var u = _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__["Utils"];
              this.lastX = this.lineX[0];
              this.lastY = this.lineY[0];
              cmd.push('M' + u.fixNumberToString(this.lastX) + ',' + u.fixNumberToString(this.lastY));

              for (var i = 1; i < this.lineX.length; ++i) {
                var lX = this.lineX[i];
                var lY = this.lineY[i];
                cmd.push('L' + u.fixNumberToString(lX) + ',' + u.fixNumberToString(lY));
              }

              var vgcmd = cmd.join(' ');

              if (cmd.length > 1) {
                var el = this.board.paper.path(vgcmd);
                el.attr("stroke", this.color);
                el.attr("stroke-width", this.weight);
                el.attr("stroke-linecap", "round");
              }

              cmd.splice(0, cmd.length);
              cmd = null;
              this.lastX = this.lineX[this.lineX.length - 1];
              this.lastY = this.lineY[this.lineY.length - 1]; //this.lineX = [this.lastX];
              //this.lineY = [this.lastY];

              this.lineX.splice(0, this.lineX.length - 1);
              this.lineY.splice(0, this.lineY.length - 1); // 记录命令

              if (null == this.vgCmdArray) {
                this.vgCmdArray = [];
              }

              this.vgCmdArray.push(vgcmd);
              this.timer = setTimeout(function () {
                _this3.draw();
              }, 60);
            }
          }, {
            key: "tick",
            value: function tick() {
              var _this4 = this;

              if (this.queueTimer > 0) {
                return;
              }

              if (this.queue.length > 0) {
                var data = this.queue.shift();
                this.board.triggerChange(data);
              }

              this.queueTimer = setTimeout(function () {
                clearTimeout(_this4.queueTimer);
                _this4.queueTimer = 0;

                if (_this4.queue.length === 0) {
                  return;
                }

                _this4.tick();
              }, 300);
            }
          }], [{
            key: "draw",
            value: function draw(paper, command) {
              var el = paper.path(command.param);
              el.attr("stroke", command.attr.stroke);
              el.attr("stroke-width", command.attr.strokeWidth);
              el.attr("stroke-linecap", "round");
              return el;
            }
          }, {
            key: "restore",
            value: function restore(paper, record, animation) {
              // r : {sn: sn, type: type, set: set, raw: {param: param, attr: attr}}
              var animated = undefined !== animation;
              var el = paper.path(record.raw.param);
              el.attr("stroke", record.raw.attr.stroke);
              el.attr("stroke-width", animated ? 0 : record.raw.attr.strokeWidth);
              el.attr("stroke-linecap", "round");
              record.set = el;

              if (animated) {
                el.animate({
                  "stroke-width": record.raw.attr.strokeWidth
                }, animation.dur, "linear");
              }
              /* 动画方式1
               var path = el.node;
               var length = path.getTotalLength();
               path.style.transition = path.style.WebkitTransition = 'none';
               path.style.strokeDasharray = length;// + ' ' + length;
               path.style.strokeDashoffset = length;
               // 获取一个区域，获取相关的样式，让浏览器寻找一个起始点。
               path.getBoundingClientRect();
               // 定义动作
               path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
               // 执行
               path.style.strokeDashoffset = '0';
               */

              /* 动画方式2
               el.node.style.strokeDasharray = length + '' + length;
               el.node.style.strokeDashoffset = length;
               el.node.style.animation = "dash 5s linear infinite";
                 var rule = '@keyframes dash { from { stroke-dashoffset: '+ length +'; } to { stroke-dashoffset: 0; } }';
               rule + '\n@-webkit-keyframes dash { from { stroke-dashoffset: '+ length +'; } to { stroke-dashoffset: 0; } }';
                 var style = document.createElement('style');
               style.type = 'text/css';
               style.innerHTML = rule;
               document.getElementsByTagName('head')[0].appendChild(style);
               var stylesheet = document.styleSheets[document.styleSheets.length-1];
               try {
               stylesheet.insertRule(rule, stylesheet.rules.length);
               } catch (e) {
               };*/

            }
          }]);

          return PencilEntity;
        }(_GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__["GraphicsEntity"]);
        /***/

      },
      /* 11 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "RectEntity", function () {
          return RectEntity;
        });
        /* harmony import */


        var _GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
        /* harmony import */


        var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);

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
         * RectEntity.js
         * Cube Engine
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 矩形实体。
         *
         * @class RectEntity
         * @extends GraphicsEntity
         * @author Xu Jiangwei, Guan Yong
         */


        var RectEntity =
        /*#__PURE__*/
        function (_GraphicsEntity) {
          _inherits(RectEntity, _GraphicsEntity);

          _createClass(RectEntity, null, [{
            key: "Name",
            get: function get() {
              return "rect";
            }
            /**
             * @typedef {Object} RectEntityOptions
             * @property {Number} borderWidth - 矩形边框宽度。
             * @property {String} borderColor - 矩形边框颜色。
             */

            /**
             * @constructs RectEntity
             * @param {RectEntityOptions} [options] - 设置参数。
             */

          }]);

          function RectEntity(options) {
            var _this;

            _classCallCheck(this, RectEntity);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(RectEntity).call(this, RectEntity.Name));
            _this.borderWidth = 2;
            _this.borderColor = "#FE0000";
            _this.flag = false;
            _this.startPos = null;
            _this.endPos = null;
            _this.beginTime = 0;
            _this.drawTimer = 0;
            _this.drawEl = null;
            _this.exclusive = true;

            if (options !== undefined) {
              _this.borderWidth = options.borderWidth || 2;
              _this.borderColor = options.borderColor || "#FE0000";
            }

            return _this;
          }

          _createClass(RectEntity, [{
            key: "fireBegin",
            value: function fireBegin(event) {
              this.flag = true;
              this.startPos = this.getCursorPos(event);

              if (this.drawTimer > 0) {
                clearTimeout(this.drawTimer);
                this.drawTimer = 0;
              }
            }
          }, {
            key: "fireEnd",
            value: function fireEnd(event) {
              this.flag = false;

              if (this.drawTimer > 0) {
                clearTimeout(this.drawTimer);
                this.drawTimer = 0;
              }

              if (null != this.drawEl) {
                this.drawEl.remove();
              }

              this.endPos = this.getCursorPos(event);
              this.draw(this.startPos, this.endPos);
              var self = this;
              var param = {
                x: self.drawEl.attr("x"),
                y: self.drawEl.attr("y"),
                width: self.drawEl.attr("width"),
                height: self.drawEl.attr("height")
              };
              var attr = {
                "stroke": self.borderColor,
                "strokeWidth": self.borderWidth
              };
              var sn = self.board.record(RectEntity.Name, self.drawEl, {
                "param": param,
                "attr": attr
              }); // 发送数据

              var data = {
                "whiteboardId": self.board.name,
                "command": {
                  "name": "rect",
                  "sn": sn,
                  "param": param,
                  "attr": attr
                }
              }; // 如果当前有幻灯片, 就记录当前幻灯片页数

              var slide = this.board.getSlide();

              if (null != slide) {
                data.command.page = slide.cursor + 1;
              }

              this.board.triggerChange(data);
              this.drawEl = null;
            }
          }, {
            key: "fireMove",
            value: function fireMove(event) {
              if (!this.flag) {
                return;
              }

              if (this.drawTimer > 0) {
                return;
              }

              var self = this;
              this.drawTimer = setTimeout(function () {
                clearTimeout(self.drawTimer);
                self.drawTimer = 0;

                if (null != self.drawEl) {
                  self.drawEl.remove();
                }

                var pos = self.getCursorPos(event);
                self.draw(self.startPos, pos);
              }, 40);
            }
          }, {
            key: "draw",
            value: function draw(begin, end) {
              var x = begin.x;
              var y = begin.y;
              var w = end.x - begin.x;
              var h = end.y - begin.y;

              if (w < 0) {
                x = end.x;
                w = Math.abs(w);
              }

              if (h < 0) {
                y = end.y;
                h = Math.abs(h);
              }

              var u = _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__["Utils"];
              this.drawEl = this.board.paper.rect(u.fixNumber(x), u.fixNumber(y), u.fixNumber(w), u.fixNumber(h));
              this.drawEl.attr("stroke", this.borderColor);
              this.drawEl.attr("stroke-width", this.borderWidth);
              this.drawEl.attr("stroke-linecap", "round");
            }
          }, {
            key: "onMouseMove",
            value: function onMouseMove(e) {
              this.fireMove(e);
            }
          }, {
            key: "onMouseDown",
            value: function onMouseDown(e) {
              this.fireBegin(e);
            }
          }, {
            key: "onMouseUp",
            value: function onMouseUp(e) {
              this.fireEnd(e);
            }
          }, {
            key: "onTouchMove",
            value: function onTouchMove(e) {
              this.fireMove(e);
            }
          }, {
            key: "onTouchStart",
            value: function onTouchStart(e) {
              this.fireBegin(e);
            }
          }, {
            key: "onTouchEnd",
            value: function onTouchEnd(e) {
              this.fireEnd(e);
            }
          }], [{
            key: "draw",
            value: function draw(paper, command) {
              var el = paper.rect(command.param.x, command.param.y, command.param.width, command.param.height);
              el.attr("stroke", command.attr.stroke);
              el.attr("stroke-width", command.attr.strokeWidth);
              el.attr("stroke-linecap", "round");
              return el;
            }
          }, {
            key: "restore",
            value: function restore(paper, record, animation) {
              // r : {sn: sn, type: type, set: set, raw: {param: param, attr: attr}}
              var animated = undefined !== animation;
              var el = paper.rect(record.raw.param.x, record.raw.param.y, animated ? 0 : record.raw.param.width, animated ? 0 : record.raw.param.height);
              el.attr("stroke", record.raw.attr.stroke);
              el.attr("stroke-width", record.raw.attr.strokeWidth);
              el.attr("stroke-linecap", "round");
              record.set = el;

              if (animated) {
                el.animate({
                  "width": record.raw.param.width,
                  "height": record.raw.param.height
                }, animation.dur, "linear");
              }
            }
          }]);

          return RectEntity;
        }(_GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__["GraphicsEntity"]);
        /***/

      },
      /* 12 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "SlideEntity", function () {
          return SlideEntity;
        });
        /* harmony import */


        var _GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
        /* harmony import */


        var _SlideNote_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);

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
         * SlideEntity.js
         * Cube Engine
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */


        var _window$CubeCore = window.CubeCore,
            CubeErrorCode = _window$CubeCore.StateCode,
            HashMap = _window$CubeCore.CellCloud.HashMap;
        /**
         * 幻灯片实体。
         *
         * @class SlideEntity
         * @extends GraphicsEntity
         * @author Xu Jiangwei, Guan Yong
         */

        var SlideEntity =
        /*#__PURE__*/
        function (_GraphicsEntity) {
          _inherits(SlideEntity, _GraphicsEntity);

          _createClass(SlideEntity, null, [{
            key: "Name",
            get: function get() {
              return "slide";
            }
            /**
             * @constructs SlideEntity
             * @param {WhiteboardFile} file - 指定幻灯片装载的文件。
             */

          }]);

          function SlideEntity(file, obscure, beginPage) {
            var _this;

            _classCallCheck(this, SlideEntity);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(SlideEntity).call(this, SlideEntity.Name));
            _this.file = null;
            _this.obscure = false;
            _this.from = null;
            _this.group = null; //this.layout = SlideLayout.Fill;

            _this.cursor = 0;
            _this.presentedImage = null;
            _this.presentedWidth = 0;
            _this.presentedHeight = 0;
            _this.scale = 1.0;
            _this.prevImage = null;
            _this.prevWidth = 0;
            _this.prevHeight = 0;
            _this.nextImage = null;
            _this.nextWidth = 0;
            _this.nextHeight = 0; // 翻页锁

            _this.pageLock = false; // 已经加载过的图片清单

            _this.loadedImageList = [];
            _this.loadedImageSizes = [];
            _this.changedCallback = null; // 笔记

            _this.notes = null; // 是否还原笔记

            _this.restore = true;
            _this.isFirstSharing = false;
            _this.exclusive = false;
            _this.file = file; // 判断隐晦规则

            if (obscure === undefined) {
              _this.obscure = false;
            } else {
              _this.obscure = obscure;
            } // 设置起始页


            if (undefined !== beginPage) {
              _this.cursor = beginPage - 1;
            }

            return _this;
          }
          /**
           * 返回幻灯片大小。
           *
           * @returns {Object} 描述大小的对象。格式：{ width: $Number, height: $Number }
          * @memberof SlideEntity
          * @instance
           */


          _createClass(SlideEntity, [{
            key: "getSize",
            value: function getSize() {
              var w = this.presentedWidth;
              var h = this.presentedHeight;
              return {
                width: w,
                height: h
              };
            }
            /**
             * 返回幻灯片在画布中的坐标。
             *
             * @returns {Object} 描述坐标的对象。格式：{ x: $Number, y: $Number }
            * @memberof SlideEntity
            * @instance
             */

          }, {
            key: "getPosition",
            value: function getPosition() {
              if (null == this.presentedImage || null == this.presentedImage.node) {
                return;
              }

              var x = parseInt(this.presentedImage.node.getAttribute("x"));
              var y = parseInt(this.presentedImage.node.getAttribute("y"));
              return {
                x: x,
                y: y
              };
            }
            /**
             * 返回文档名称。
             *
             * @returns {String} 文档名称。
            * @memberof SlideEntity
            * @instance
             */

          }, {
            key: "getDocName",
            value: function getDocName() {
              return this.file.origin;
            }
            /**
             * 返回当前页码。
             *
             * @returns {Number} 当前页数。
            * @memberof SlideEntity
            * @instance
             */

          }, {
            key: "currentPage",
            value: function currentPage() {
              return this.cursor + 1;
            }
            /**
             * 返回总页数。
             *
             * @returns {Number} 总页数。
            * @memberof SlideEntity
            * @instance
             */

          }, {
            key: "numPages",
            value: function numPages() {
              return this.file.urls.length;
            }
            /**
             * 跳到上一页。
             *
             * @memberof SlideEntity
            * @instance
             */

          }, {
            key: "prevPage",
            value: function prevPage() {
              if (this.cursor == 0) {
                return;
              }

              if (this.pageLock) {
                return;
              }

              this.pageLock = true; // 擦除

              this.board.erase(true, false); // 显示遮罩

              this.board.showMask();
              var self = this;
              var prev = self.cursor - 1;

              if (null == self.prevImage) {
                self._loadImage(self.board.paper, self.file.urls[prev], function (image, w, h) {
                  // 设置图片属性
                  self._backupImage(image, w, h);

                  self.prevImage = image;
                  self.prevWidth = w;
                  self.prevHeight = h; // 翻页

                  self._page(self.prevImage, function () {
                    self.cursor -= 1;

                    self._preparePrev();

                    if (self.restore) {
                      self.restoreNote(self.cursor + 1);
                    } // 解锁


                    self.pageLock = false;
                    self.board.hideMask();
                  });
                }, function (url) {
                  self.board.delegate.onFailed(self.board, CubeErrorCode.LoadFileFailed); // 解锁

                  self.pageLock = false;
                  self.board.hideMask();
                });
              } else {
                // 翻页
                self._page(self.prevImage, function () {
                  self.cursor -= 1;

                  self._preparePrev();

                  if (self.restore) {
                    self.restoreNote(self.cursor + 1);
                  } // 解锁


                  self.pageLock = false;
                  self.board.hideMask();
                });
              }
            }
            /**
             * 跳到下一页。
             *
             * @memberof SlideEntity
            * @instance
             */

          }, {
            key: "nextPage",
            value: function nextPage() {
              if (this.cursor >= this.file.urls.length - 1) {
                return;
              }

              if (this.pageLock) {
                return;
              }

              this.pageLock = true; // 擦除

              this.board.erase(true, false); // 显示遮罩

              this.board.showMask();
              var self = this;
              var next = self.cursor + 1;

              if (null == self.nextImage) {
                self._loadImage(self.board.paper, self.file.urls[next], function (image, w, h) {
                  // 设置图片属性
                  self._backupImage(image, w, h);

                  self.nextImage = image;
                  self.nextWidth = w;
                  self.nextHeight = h; // 翻页

                  self._page(self.nextImage, function () {
                    self.cursor += 1;

                    self._prepareNext();

                    if (self.restore) {
                      self.restoreNote(self.cursor + 1);
                    } // 解锁


                    self.pageLock = false;
                    self.board.hideMask();
                  });
                }, function (url) {
                  self.board.delegate.onFailed(self.board, CubeErrorCode.LoadFileFailed); // 解锁

                  self.pageLock = false;
                  self.board.hideMask();
                });
              } else {
                // 翻页
                self._page(self.nextImage, function () {
                  self.cursor += 1;

                  self._prepareNext();

                  if (self.restore) {
                    self.restoreNote(self.cursor + 1);
                  } // 解锁


                  self.pageLock = false;
                  self.board.hideMask();
                });
              }
            }
            /**
             * 跳转到指定页。
             *
            * @param {Number} page - 指定需要跳转的页码。
             * @memberof SlideEntity
            * @instance
             */

          }, {
            key: "gotoPage",
            value: function gotoPage(page) {
              var newCursor = page - 1;

              if (newCursor == this.cursor || newCursor < 0 || newCursor > this.file.urls.length - 1) {
                // 新页签不合法
                return;
              } // 擦除


              this.board.erase(true, false); // 显示遮罩

              this.board.showMask();
              var self = this;

              var task = function task() {
                if (null != self.prevImage) {
                  self.prevImage.remove();
                }

                if (null != self.nextImage) {
                  self.nextImage.remove();
                }

                if (null != self.presentedImage) {
                  self.presentedImage.remove();
                }

                self._loadImage(self.board.paper, self.file.urls[newCursor], function (image, w, h) {
                  // 提交主图像
                  self._presentImage(image, w, h);

                  self.board.hideMask();
                }, function (url) {
                  self.board.delegate.onFailed(self.board, CubeErrorCode.LoadFileFailed);
                  self.board.hideMask();
                });

                if (newCursor > 0) {
                  self._loadImage(self.board.paper, self.file.urls[newCursor - 1], function (image, w, h) {
                    // 设置图片属性
                    self._backupImage(image, w, h);

                    self.prevImage = image;
                    self.prevWidth = w;
                    self.prevHeight = h;
                  });
                }

                if (newCursor < self.file.urls.length - 1) {
                  self._loadImage(self.board.paper, self.file.urls[newCursor + 1], function (image, w, h) {
                    // 设置图片属性
                    self._backupImage(image, w, h);

                    self.nextImage = image;
                    self.nextWidth = w;
                    self.nextHeight = h;
                  });
                } // 更新游标


                self.cursor = newCursor;

                if (self.restore) {
                  self.restoreNote(self.cursor + 1);
                } // 解锁


                self.pageLock = false;

                if (null != self.changedCallback) {
                  self.changedCallback.call(self.board, self, "=");
                } // 非隐晦模式发送数据


                if (!self.obscure) {
                  var data = {
                    "whiteboardId": self.board.name,
                    "from": self.board.sessionName,
                    "command": {
                      "name": "slide",
                      "param": self.file,
                      "attr": {
                        "cursor": self.cursor,
                        "page": "="
                      }
                    }
                  };
                  this.board.triggerChange(data);
                }
              };

              if (this.pageLock) {
                setTimeout(function () {
                  self.pageLock = true;
                  task();
                }, 200);
              } else {
                task();
              }
            }
            /**
             * 重新加载当前文件都幻灯片。
            *
             * @memberof SlideEntity
            * @instance
             */

          }, {
            key: "reload",
            value: function reload() {
              var self = this;
              self.board.showMask();

              self._loadImage(self.board.paper, self.file.urls[self.cursor], function (image, w, h) {
                // 提交主图像
                self._presentImage(image, w, h);

                self.board.hideMask();
              }, function (url) {
                self.board.delegate.onFailed(self.board, CubeErrorCode.LoadFileFailed);
                self.board.hideMask();
              });
            }
          }, {
            key: "dispose",
            value: function dispose() {
              this.board.hideMask();

              if (null != this.presentedImage) {
                this.presentedImage.remove();
                this.presentedImage = null;
              }

              if (null != this.nextImage) {
                this.nextImage.remove();
                this.nextImage = null;
              }

              if (null != this.prevImage) {
                this.prevImage.remove();
                this.prevImage = null;
              }

              this.board.dom.style.overflow = "hidden"; // FIXME 重置视口

              this.board.viewport.reset();
              this.faultListener = null;

              _GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__["GraphicsEntity"].prototype.dispose.call(this);
            }
            /**
             * 添加笔记。
             *
             * @memberof SlideEntity
            * @instance
             */

          }, {
            key: "appendNote",
            value: function appendNote(record) {
              var page = this.cursor + 1;

              if (undefined !== record.page && null != record.page) {
                page = record.page;
              }

              if (null == this.notes) {
                this.notes = new HashMap();
                var note = new _SlideNote_js__WEBPACK_IMPORTED_MODULE_1__["SlideNote"](page);
                note.append(record);
                this.notes.put(page, note);
              } else {
                var note = this.notes.get(page);

                if (null == note) {
                  note = new _SlideNote_js__WEBPACK_IMPORTED_MODULE_1__["SlideNote"](page);
                  note.append(record);
                  this.notes.put(page, note);
                } else {
                  note.append(record);
                }
              }
            }
            /**
             * 删除最后一条笔记。
             *
             * @memberof SlideEntity
            * @instance
             */

          }, {
            key: "popNote",
            value: function popNote() {
              if (null == this.notes) {
                return null;
              }

              var page = this.cursor + 1;
              var note = this.notes.get(page);

              if (null == note) {
                return null;
              }

              return note.pop();
            }
            /**
             * 清空笔记。
             *
             * @memberof SlideEntity
            * @instance
             */

          }, {
            key: "clearNote",
            value: function clearNote() {
              if (null == this.notes) {
                return;
              }

              var page = this.cursor + 1;
              var note = this.notes.get(page);

              if (null == note) {
                return;
              }

              this.notes.remove(page);
              note.clear();
            }
            /**
             * 恢复当前页的笔记。
             *
             * @memberof SlideEntity
            * @instance
             */

          }, {
            key: "restoreNote",
            value: function restoreNote(page) {
              if (null == this.notes) {
                return;
              } // 擦除当前


              this.board.erase(true, false);
              var note = this.notes.get(page);

              if (null == note) {
                return;
              }

              var list = note.records;

              for (var i = 0; i < list.length; ++i) {
                this.board._replayRecord(list[i]);
              }
            }
            /**
             * 导出指定页数据。
             *
             * @memberof SlideEntity
             * @instance
             */

          }, {
            key: "exportPage",
            value: function exportPage(page) {
              var self = this;

              if (0 == page || page - 1 >= self.file.urls.length) {
                return null;
              }

              var note = null;

              if (null != self.notes) {
                note = self.notes.get(page);
              }
              /*
              {
              	page: Number,
              	url: String,
              	notes: Array
              }
              */


              var p = {
                page: page,
                url: self.file.urls[page - 1]
              };

              if (null != note) {
                p.notes = [];

                for (var i = 0; i < note.records.length; ++i) {
                  var pr = note.records[i];
                  var r = {
                    sn: pr.sn,
                    type: pr.type,
                    raw: pr.raw,
                    time: pr.time
                  };
                  p.notes.push(r);
                }
              }

              return p;
            }
          }, {
            key: "onDraw",
            value: function onDraw(context) {
              var self = this;
              var old = self.board.getExEntity(SlideEntity.Name);

              if (null != old) {
                old.dispose();
              } // 设置回调


              self.changedCallback = self.board.onSlideChanged; // 显示遮罩

              self.board.showMask();

              self._loadImage(context, self.file.urls[self.cursor], function (image, w, h) {
                // 提交主图像
                self._presentImage(image, w, h); // 发送命令
                // 非隐晦模式发送数据


                if (!self.obscure) {
                  var data = {
                    "whiteboardId": self.board.name,
                    "from": self.board.sessionName,
                    "command": {
                      "name": "slide",
                      "param": self.file,
                      "attr": {
                        "cursor": self.cursor,
                        "page": "*"
                      }
                    }
                  }; // 如果是首次分享, 通知服务器是上传完毕后的分享动作

                  if (self.isFirstSharing) {
                    data.command.upload = true;
                    self.isFirstSharing = false;
                  }

                  self.board.triggerChange(data);
                }

                self.changedCallback.call(self.board, self, "*");
                self.board.hideMask();
              }, function (url) {
                self.board.delegate.onFailed(self.board, CubeErrorCode.LoadFileFailed);
                self.board.hideMask();
              }); // 缓存下一张图片


              if (self.file.urls.length > 1 && self.cursor + 1 < self.file.urls.length) {
                self._loadImage(context, self.file.urls[self.cursor + 1], function (image, w, h) {
                  self._backupImage(image, w, h);

                  self.nextImage = image;
                  self.nextWidth = w;
                  self.nextHeight = h;
                });
              }
            }
          }, {
            key: "onResize",
            value: function onResize(width, height) {
              // 矫正图片大小
              this._adjustImagePos(this.presentedImage, this.presentedWidth, this.presentedHeight, width, height);

              this._adjustImagePos(this.prevImage, this.prevWidth, this.prevHeight, width, height);

              this._adjustImagePos(this.nextImage, this.nextWidth, this.nextHeight, width, height);
            }
          }, {
            key: "onClick",
            value: function onClick(event) {
              /*if (this.obscure) {
               return;
               }
                 var pos = this.getCursorPos(event);
               var bw = this.board.width;
               if (pos.x > bw * 0.5) {
               this.nextPage();
               }
               else {
               this.prevPage();
               }*/
            }
          }, {
            key: "onKeyPress",
            value: function onKeyPress(event) {
              if (this.obscure) {
                return;
              }

              var kc = event.which || event.keyCode; // 右箭头: 39, ]: 93
              // 左箭头: 37, [: 91

              if (kc == 39 || kc == 93) {
                // next
                this.nextPage();
              } else if (kc == 37 || kc == 91) {
                // prev
                this.prevPage();
              }
            }
          }, {
            key: "_presentImage",
            value: function _presentImage(image, w, h) {
              var self = this;
              self.presentedImage = image;
              self.presentedWidth = w;
              self.presentedHeight = h;

              if (null == image.node) {
                setTimeout(function () {
                  self._adjustImagePos(image, w, h, self.board.width, self.board.height); //var bw = self.board.viewport.viewW == 0 ? self.board.width : self.board.viewport.viewW;
                  //var bh = self.board.viewport.viewH == 0 ? self.board.height : self.board.viewport.viewH;
                  //self._adjustImagePos(image, w, h, bw, bh);

                }, 40);
              } else {
                self._adjustImagePos(image, w, h, self.board.width, self.board.height); //var bw = self.board.viewport.viewW == 0 ? self.board.width : self.board.viewport.viewW;
                //var bh = self.board.viewport.viewH == 0 ? self.board.height : self.board.viewport.viewH;
                //self._adjustImagePos(image, w, h, bw, bh);

              }

              image.attr("opacity", 1); // 置底

              image.toBack();

              if (null != self.prevImage) {
                self.prevImage.toBack();
              }

              if (null != self.nextImage) {
                self.nextImage.toBack();
              }
            }
          }, {
            key: "_backupImage",
            value: function _backupImage(image, w, h) {
              var self = this;

              if (null == image.node) {
                setTimeout(function () {
                  //var bw = self.board.viewport.viewW == 0 ? self.board.width : self.board.viewport.viewW;
                  //var bh = self.board.viewport.viewH == 0 ? self.board.height : self.board.viewport.viewH;
                  self._adjustImagePos(image, w, h, self.board.width, self.board.height);
                }, 40);
              } else {
                //var bw = self.board.viewport.viewW == 0 ? self.board.width : self.board.viewport.viewW;
                //var bh = self.board.viewport.viewH == 0 ? self.board.height : self.board.viewport.viewH;
                self._adjustImagePos(image, w, h, self.board.width, self.board.height);
              } // 设置透明度


              image.attr("opacity", 0); // 置底

              image.toBack();
            }
          }, {
            key: "_preparePrev",
            value: function _preparePrev() {
              var self = this; // 非隐晦模式发送数据

              if (!self.obscure) {
                var data = {
                  "whiteboardId": self.board.name,
                  "from": self.board.sessionName,
                  "command": {
                    "name": "slide",
                    "param": self.file,
                    "attr": {
                      "cursor": self.cursor,
                      "page": "<"
                    }
                  }
                };
                this.board.triggerChange(data);
              }

              if (null != this.nextImage) {
                this.nextImage.remove();
              }

              this.nextImage = this.presentedImage;
              this.presentedImage = this.prevImage;

              if (this.cursor == 0) {
                // 第一页
                this.prevImage = null;

                if (null != this.changedCallback) {
                  this.changedCallback.call(this.board, this, "<");
                }

                return;
              } // 加载上一页


              self._loadImage(self.board.paper, self.file.urls[self.cursor - 1], function (image, w, h) {
                self._backupImage(image, w, h);

                self.prevImage = image;
                self.prevWidth = w;
                self.prevHeight = h;

                if (null != self.changedCallback) {
                  self.changedCallback.call(self.board, self, "<");
                }
              });
            }
          }, {
            key: "_prepareNext",
            value: function _prepareNext() {
              var self = this; // 非隐晦模式发送数据

              if (!self.obscure) {
                var data = {
                  "whiteboardId": self.board.name,
                  "from": self.board.sessionName,
                  "command": {
                    "name": "slide",
                    "param": self.file,
                    "attr": {
                      "cursor": self.cursor,
                      "page": ">"
                    }
                  }
                };
                this.board.triggerChange(data);
              }

              if (null != this.prevImage) {
                this.prevImage.remove();
              }

              this.prevImage = this.presentedImage;
              this.presentedImage = this.nextImage;

              if (this.cursor + 1 >= this.file.urls.length - 1) {
                // 最后一页
                this.nextImage = null;

                if (null != this.changedCallback) {
                  this.changedCallback.call(this.board, this, ">");
                }

                return;
              } // 加载下一页


              self._loadImage(self.board.paper, self.file.urls[self.cursor + 1], function (image, w, h) {
                self._backupImage(image, w, h);

                self.nextImage = image;
                self.nextWidth = w;
                self.nextHeight = h;

                if (null != self.changedCallback) {
                  self.changedCallback.call(self.board, self, ">");
                }
              });
            }
          }, {
            key: "_page",
            value: function _page(destImage, completed) {
              if (null == this.presentedImage) {
                return;
              }

              this.presentedImage.animate({
                "opacity": 0
              }, 300, "linear");
              destImage.animate({
                "opacity": 1.0
              }, 300, "linear", function () {
                completed.call(null);
              });
            }
          }, {
            key: "_loadImage",
            value: function _loadImage(context, url, cb, error) {
              var index = this.loadedImageList.indexOf(url);

              if (index >= 0) {
                var size = this.loadedImageSizes[index]; // 加载图片

                var imgEl = context.image(url, 0, 0, size.width, size.height); // 不可选择

                imgEl.node.setAttribute("unselectable", "on");

                imgEl.node.onmousedown = function () {
                  return false;
                };

                var s = imgEl.node.style;
                s.userSelect = "none";
                s.webkitUserSelect = "none";
                s.MozUserSelect = "-moz-none";
                cb.call(null, imgEl, size.width, size.height);
                return;
              }

              var self = this;
              var image = new Image();

              image.onload = function (e) {
                var w = image.width;
                var h = image.height;
                self.loadedImageList.push(url.toString());
                self.loadedImageSizes.push({
                  width: w,
                  height: h
                });
                var imgEl = context.image(url, 0, 0, w, h); // 不可选择

                imgEl.node.setAttribute("unselectable", "on");

                imgEl.node.onmousedown = function () {
                  return false;
                };

                var s = imgEl.node.style;
                s.userSelect = "none";
                s.webkitUserSelect = "none";
                s.MozUserSelect = "-moz-none";
                cb.call(null, imgEl, w, h);
              };

              if (undefined !== error) {
                image.onerror = function (e) {
                  error.call(null, url);
                };
              } // 设置源，开始加载图片


              image.src = url;
            }
          }, {
            key: "_adjustImagePos",
            value: function _adjustImagePos(image, rawWidth, rawHeight, boardWidth, boardHeight) {
              if (null != image && null != image.node) {
                // 居中
                var x = (this.board.paperWidth - rawWidth) * 0.5;
                var y = (this.board.paperHeight - rawHeight) * 0.5;
                image.node.setAttribute('x', parseInt(x));
                image.node.setAttribute('y', parseInt(y));
                /*if (this.layout == SlideLayout.Fill) {
                 this.board.dom.style.overflow = "hidden";
                   var iw = rawWidth;
                 var ih = rawHeight;
                   var rw = boardWidth / iw;
                 var rh = boardHeight / ih;
                 if (rw < rh) {
                 image.node.setAttribute('width', parseInt(rw * iw));
                 image.node.setAttribute('height', parseInt(rw * ih));
                 }
                 else {
                 image.node.setAttribute('width', parseInt(rh * iw));
                 image.node.setAttribute('height', parseInt(rh * ih));
                 }
                   // 居中
                 var x = (boardWidth - parseInt(image.node.getAttribute('width'))) * 0.5;
                 var y = (boardHeight - parseInt(image.node.getAttribute('height'))) * 0.5;
                 image.node.setAttribute('x', parseInt(x));
                 image.node.setAttribute('y', parseInt(y));
                 }
                 else if (this.layout == SlideLayout.Warp) {
                 this.board.dom.style.overflow = "auto";
                 this.board.paper.setSize(Math.max(boardWidth, rawWidth), Math.max(boardHeight, rawHeight));
                   if (boardWidth > rawWidth) {
                 var x = (boardWidth - rawWidth) * 0.5;
                 image.node.setAttribute('x', parseInt(x));
                 }
                 if (boardHeight > rawHeight) {
                 var y = (boardHeight - rawHeight) * 0.5;
                 image.node.setAttribute('y', parseInt(y));
                 }
                 }*/
              }
            }
          }]);

          return SlideEntity;
        }(_GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__["GraphicsEntity"]);
        /***/

      },
      /* 13 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "SlideNote", function () {
          return SlideNote;
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
         * SlideNote.js
         * Cube Engine
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 幻灯片标记。
         */


        var SlideNote =
        /*#__PURE__*/
        function () {
          function SlideNote(page) {
            _classCallCheck(this, SlideNote); // 页码


            this.page = page;
            this.records = [];
          }

          _createClass(SlideNote, [{
            key: "append",
            value: function append(r) {
              this.records.push(r);
            }
          }, {
            key: "pop",
            value: function pop() {
              return this.records.pop();
            }
          }, {
            key: "clear",
            value: function clear() {
              if (0 === this.records.length) {
                return;
              }

              this.records.splice(0, this.records.length);
            }
          }]);

          return SlideNote;
        }();
        /***/

      },
      /* 14 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "TextEntity", function () {
          return TextEntity;
        });
        /* harmony import */


        var _GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
        /* harmony import */


        var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);

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
         * TextEntity.js
         * Cube Engine
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 文本实体。
         *
         * @class TextEntity
         * @extends GraphicsEntity
         * @author Xu Jiangwei, Guan Yong
         */


        var TextEntity =
        /*#__PURE__*/
        function (_GraphicsEntity) {
          _inherits(TextEntity, _GraphicsEntity);

          _createClass(TextEntity, null, [{
            key: "Name",
            get: function get() {
              return "text";
            }
          }]);

          function TextEntity(options) {
            var _this;

            _classCallCheck(this, TextEntity);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(TextEntity).call(this, TextEntity.Name));
            _this.inputDom = null;
            _this.input = false;
            _this.paperEl = null;
            _this.textPos = null;
            _this.text = null;
            _this.color = '#FE0000';
            _this.fontFamily = '微软雅黑, 黑体';
            _this.fontSize = '16';
            _this.exclusive = true;

            if (options !== undefined) {
              _this.color = options.color || '#FE0000';
              _this.fontFamily = options.fontFamily || '"Microsoft YaHei"';
              _this.fontSize = options.fontSize || '16';
            }

            return _this;
          }

          _createClass(TextEntity, [{
            key: "dispose",
            value: function dispose() {
              if (null != this.inputDom) {
                this.inputDom.remove();
                this.inputDom.value = '';
              }

              if (null != this.paperEl) {
                this.paperEl = null;
              }

              this.input = false;
              this.textPos = null;

              _GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__["GraphicsEntity"].prototype.dispose.call(this);
            }
          }, {
            key: "onClick",
            value: function onClick(event) {
              if (null == this.inputDom) {
                this.inputDom = this._createInputDom();
              }

              if (event.target == this.inputDom) {
                return;
              }

              if (this.input) {
                var text = this.inputDom.value;

                if (text.length > 0) {
                  //var x = parseInt(this.inputDom.style.left) + 83;
                  //var y = parseInt(this.inputDom.style.top) + 15;
                  //x += this.board.viewport.posX;
                  //y += this.board.viewport.posY;
                  var x = _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].fixNumber(this.textPos.x);

                  var y = _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].fixNumber(this.textPos.y);

                  var el = this.board.paper.text(x, y, text);
                  el.attr('fill', this.color);
                  el.attr('font-family', this.fontFamily);
                  el.attr('font-size', this.fontSize);
                  this.paperEl = el;
                  var self = this;
                  var param = {
                    x: x,
                    y: y,
                    text: text.toString()
                  }; // 记录

                  var sn = self.board.record(TextEntity.Name, el, {
                    'param': param,
                    'attr': {
                      'color': self.color,
                      'fontFamily': self.fontFamily,
                      'fontSize': self.fontSize
                    }
                  }); // 视口对元素进行管理

                  this.board.viewport.manage(sn, el); // 发送数据

                  var data = {
                    "whiteboardId": self.board.name,
                    "command": {
                      "name": "text",
                      "sn": sn,
                      "param": param,
                      "attr": {
                        'color': self.color,
                        'fontFamily': self.fontFamily,
                        'fontSize': self.fontSize
                      }
                    }
                  }; // 如果当前有幻灯片, 就记录当前幻灯片页数

                  var slide = this.board.getSlide();

                  if (null != slide) {
                    data.command.page = slide.cursor + 1;
                  }

                  this.board.triggerChange(data);
                }

                this.inputDom.value = '';
                this.inputDom.remove();
                this.input = false;
              } else {
                this.textPos = this.getCursorPos(event);

                var pos = _utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].getDrawPosition(this.board.dom, event);

                this.inputDom.style.left = pos.x - 84 + "px";
                this.inputDom.style.top = pos.y - 0 + "px";
                this.board.dom.appendChild(this.inputDom);
                this.inputDom.focus();
                this.input = true;
              }
            }
          }, {
            key: "_createInputDom",
            value: function _createInputDom() {
              var dom = document.createElement("input");
              dom.setAttribute("type", "text");
              dom.setAttribute("maxlength", "128");
              dom.style.color = this.color;
              dom.style.fontSize = this.fontSize + "px";
              dom.style.fontFamily = this.fontFamily;
              dom.style.position = "absolute";
              dom.style.cssFloat = "left";
              dom.style.styleFloat = "left";
              dom.style.padding = "0px";
              dom.style.margin = "0px";
              dom.style.width = "200px";
              dom.style.textAlign = "center";
              return dom;
            }
          }], [{
            key: "draw",
            value: function draw(paper, command) {
              var el = paper.text(command.param.x, command.param.y, command.param.text);
              el.attr('fill', command.attr.color);
              el.attr("font-family", command.attr.fontFamily);
              el.attr("font-size", command.attr.fontSize);
              return el;
            }
          }, {
            key: "restore",
            value: function restore(paper, record, animation) {
              // r : {sn: sn, type: type, set: set, raw: {param: param, attr: attr}}
              var animated = undefined !== animation;
              var el = paper.text(record.raw.param.x, record.raw.param.y, record.raw.param.text);
              el.attr("fill", record.raw.attr.color);
              el.attr("font-family", record.raw.attr.fontFamily);
              el.attr("font-size", animated ? 0 : record.raw.attr.fontSize);
              record.set = el;

              if (animated) {
                el.animate({
                  "font-size": record.raw.attr.fontSize
                }, animation.dur, "linear");
              }
            }
          }]);

          return TextEntity;
        }(_GraphicsEntity_js__WEBPACK_IMPORTED_MODULE_0__["GraphicsEntity"]);
        /***/

      },
      /* 15 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardRecorder", function () {
          return WhiteboardRecorder;
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
         * WhiteboardRecorder.js
         * Cube Engine
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 白板播放器。
         *
         * @class WhiteboardRecorder
         */


        var WhiteboardRecorder =
        /*#__PURE__*/
        function () {
          function WhiteboardRecorder(board) {
            _classCallCheck(this, WhiteboardRecorder); // 白板


            this.board = board; // 时间线记录

            this.timeline = []; // 是否正在录制

            this.recording = false; // 监听器

            this.listener = null; // 录像启动时间

            this.start = 0; // 当前的记录

            this.currents = null; // 当前录像的幻灯片

            this.slide = null;
            this.beginPage = -1; //暂停录制

            this.pauseRecorder = false;
            this._pauseRecorder = null; //继续录制

            this._resumeRecorder = null;
          }

          _createClass(WhiteboardRecorder, [{
            key: "setListener",
            value: function setListener(listener) {
              this.listener = listener;
            }
          }, {
            key: "startRecording",
            value: function startRecording() {
              var _this = this; // 如果正在录制，则不被允许


              if (this.recording) {
                return false;
              } // 如果回放器正在回放数据，则不被允许


              if (null != this.board.player && this.board.player.isPlaying()) {
                return false;
              }

              this.recording = true;

              this._pauseRecorder = function () {
                if (_this.pauseRecorder) {
                  return false;
                }

                _this.pauseRecorder = true;
                _this.recording = false;

                if (null != _this.listener) {
                  _this.listener.onPaused(_this);
                }
              };

              this._resumeRecorder = function () {
                //如果没有暂停，则不调用
                if (!_this.pauseRecorder) {
                  return false;
                }

                _this.recording = true;
                _this.pauseRecorder = false;

                if (null != _this.listener) {
                  _this.listener.onResumed(_this);
                }
              }; // 尝试记录幻灯片


              this.slide = this.board.getSlide();

              if (null != this.slide) {
                this.beginPage = this.slide.currentPage();
              } else {
                this.beginPage = -1;
              }

              if (this.pauseRecorder) {
                return false;
              } // 记录当前的页面数据


              var len = this.board.pastRecords.length;

              if (len > 0) {
                this.currents = [];

                for (var i = 0; i < len; ++i) {
                  this._notifyRecord(this.board.pastRecords[i], this.currents);
                }
              } else {
                this.currents = null;
              }

              this.timeline.splice(0, this.timeline.length);
              this.start = Date.now();

              if (null != this.listener) {
                this.listener.onStarted(this);
              }

              return true;
            }
          }, {
            key: "pauseRecording",
            value: function pauseRecording() {
              if (undefined !== this._pauseRecorder && typeof this._pauseRecorder === 'function') {
                return this._pauseRecorder();
              }

              return false;
            }
          }, {
            key: "resumeRecording",
            value: function resumeRecording() {
              if (undefined !== this._resumeRecorder && typeof this._resumeRecorder === 'function') {
                return this._resumeRecorder();
              }

              return false;
            }
          }, {
            key: "stopRecording",
            value: function stopRecording() {
              if (!this.recording) {
                return false;
              }

              this.recording = false;
              this.pauseRecorder = false;

              if (null != this.listener) {
                this.listener.onStopped(this);
              }

              return true;
            }
          }, {
            key: "isRecording",
            value: function isRecording() {
              return this.recording;
            }
          }, {
            key: "exportData",
            value: function exportData(unifying) {
              if (this.recording || this.pauseRecorder) {
                return null;
              }

              var self = this; // 尝试修正绝对时间

              var delta = 0;

              if (undefined !== unifying) {
                delta = unifying - self.start;
              }

              var data = {
                "start": self.start,
                "delta": delta,
                "timeline": self.timeline
              };

              if (null != this.currents) {
                data.currents = this.currents;
              }

              if (null != this.slide) {
                data.slideFile = this.slide.file;
                data.beginPage = this.beginPage;
              }

              return data;
            }
          }, {
            key: "_notifyOperation",
            value: function _notifyOperation(record) {
              if (!this.recording || this.pauseRecorder) {
                return;
              } // record : { name: name, time: time }


              record.category = "opt";
              this.timeline.push(record);
            }
          }, {
            key: "_notifyRecord",
            value: function _notifyRecord(r, output) {
              if (!this.recording || this.pauseRecorder) {
                return;
              } // 写入记录
              // record : { sn: sn, type: type, raw: raw, time: time }


              var record = {
                "category": "vg",
                "sn": r.sn,
                "type": r.type,
                "raw": r.raw,
                "time": r.time
              };

              if (undefined === output) {
                this.timeline.push(record);
              } else {
                output.push(record);
              }
            }
          }]);

          return WhiteboardRecorder;
        }();
        /***/

      },
      /* 16 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardPlayer", function () {
          return WhiteboardPlayer;
        });
        /* harmony import */


        var _entity_graphics_SlideEntity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

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
         * WhiteboardPlayer.js
         * Cube Engine
         * 
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 白板播放器。
         *
         * @class WhiteboardPlayer
         */


        var WhiteboardPlayer =
        /*#__PURE__*/
        function () {
          function WhiteboardPlayer(board) {
            _classCallCheck(this, WhiteboardPlayer); // 白板


            this.board = board;
            /**
            * 回放数据
             * @type {{start: Number, delta: Number, timeline: Array, slide: Object, pages: Array}}
             */

            this.data = null; // 监听器

            this.listener = null; // Tick 定时器

            this.tickTimer = 0; // 本地时间起点

            this.timestamp = 0; // 暂停时差

            this.timeDelta = 0; // 时间游标

            this.timeCursor = 0; // 时间轴

            this.timeline = null;
          }

          _createClass(WhiteboardPlayer, [{
            key: "setListener",
            value: function setListener(listener) {
              this.listener = listener;
            }
          }, {
            key: "play",
            value: function play() {
              // 如果正在播放，则不被允许
              if (this.isPlaying() || null == this.data) {
                return false;
              } // 如果记录器正在记录，则不被允许


              if (null != this.board.recorder && this.board.recorder.isRecording()) {
                return false;
              } // 清空当前白板


              this.board.cleanup(true); // 设置幻灯片

              if (undefined !== this.data.slideFile) {
                // 新幻灯片
                var slide = new _entity_graphics_SlideEntity_js__WEBPACK_IMPORTED_MODULE_0__["SlideEntity"](this.data.slideFile, true, this.data.beginPage);
                this.board.selectEntity(slide);
              }

              var self = this;
              this.tickTimer = setTimeout(function () {
                if (null != self.listener) {
                  self.listener.onStarted(self);
                } // 回写当前的记录


                if (undefined !== self.data.currents) {
                  for (var i = 0; i < self.data.currents.length; ++i) {
                    self.board._replayRecord(self.data.currents[i], true);
                  }
                }

                self._tick();
              }, 200);
              this.timestamp = Date.now(); // 更新时间游标

              this.timeCursor = 0; // 数据写入播放时间轴

              for (var i = 0; i < this.data.timeline.length; ++i) {
                this.timeline.push(this.data.timeline[i]);
              }

              return true;
            }
          }, {
            key: "stop",
            value: function stop() {
              if (this.tickTimer > 0) {
                clearTimeout(this.tickTimer);
                this.tickTimer = 0;
              }

              this._stop();
            }
          }, {
            key: "pause",
            value: function pause() {
              if (null == this.data || this.timeline.length == 0) {
                return;
              }

              if (this.tickTimer > 0) {
                clearTimeout(this.tickTimer);
                this.tickTimer = 0;
              }

              this.timeDelta = Date.now() - this.timeCursor;

              if (null != this.listener) {
                this.listener.onPaused(this);
              }
            }
          }, {
            key: "resume",
            value: function resume() {
              if (this.tickTimer > 0 || null == this.data || this.timeline.length == 0) {
                return;
              } // 使用新的时间起点


              this.timestamp = Date.now() + this.timeDelta;
              var self = this;
              setTimeout(function () {
                self._tick();
              }, 30);

              if (null != this.listener) {
                this.listener.onResumed(this);
              }
            }
          }, {
            key: "isPlaying",
            value: function isPlaying() {
              return this.tickTimer > 0;
            }
          }, {
            key: "importData",
            value: function importData(data) {
              this.data = data;
              this.timeline = new Array();
            }
          }, {
            key: "_stop",
            value: function _stop() {
              if (null != this.listener) {
                this.listener.onStopped(this);
              }
            }
          }, {
            key: "_fetchAndPresent",
            value: function _fetchAndPresent() {
              var time = Date.now();
              var record = this.timeline[0];
              var rTime = record.time - this.data.start;
              var pTime = time - this.timestamp;

              if (rTime <= pTime) {
                // 移除已回放的记录
                this.timeline.shift();

                if (record.category == "vg") {
                  // 需要将记录进行记录，以便支持 redo/undo 等操作
                  this.board._replayRecord(record, true, {
                    dur: 400
                  });
                } else if (record.category == "opt") {
                  if (record.name == "undo") {
                    this.board.undo(true);
                  } else if (record.name == "redo") {
                    this.board.redo(true);
                  } else if (record.name == "erase") {
                    this.board.erase(true);
                  } else if (record.name == "slide") {
                    var slide = this.board.getSlide();

                    if (null != slide) {
                      if (slide.currentPage() != record.page) {
                        slide.gotoPage(record.page);
                      }
                    }
                  }
                }
              } // 记录当前时间


              this.timeCursor = time;

              if (this.timeline.length == 0) {
                return false;
              } else {
                return true;
              }
            }
          }, {
            key: "_tick",
            value: function _tick() {
              if (this.tickTimer > 0) {
                clearTimeout(this.tickTimer);
                this.tickTimer = 0;
              }

              if (!this._fetchAndPresent()) {
                // 播放结束
                this._stop();

                return;
              }

              var self = this;
              this.tickTimer = setTimeout(function () {
                self._tick();
              }, 300);
            }
          }]);

          return WhiteboardPlayer;
        }();
        /***/

      },
      /* 17 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "StateCode", function () {
          return StateCode;
        });
        /*
         * StateCode.js
         * Cube Whiteboard Core
         *
         * Created by Ambrose Xu on 15/4/5.
         * Copyright (c) 2015 Cube Team. All rights reserved.
         */

        /**
         * 白板核心状态代码枚举。
         *
         * @readonly
         * @enum {Number}
         * @author Xu Jiangwei, Guan Yong
         */


        var StateCode = {
          /** 打开幻灯片失败 */
          OpenSlideFailed: 1600
        };
        /***/
      },
      /* 18 */

      /***/
      function (module, exports, __webpack_require__) {
        !function (t, e) {
          true ? module.exports = e() : undefined;
        }(window, function () {
          return function (t) {
            var e = {};

            function r(i) {
              if (e[i]) return e[i].exports;
              var n = e[i] = {
                i: i,
                l: !1,
                exports: {}
              };
              return t[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
            }

            return r.m = t, r.c = e, r.d = function (t, e, i) {
              r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
              });
            }, r.r = function (t) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
              }), Object.defineProperty(t, "__esModule", {
                value: !0
              });
            }, r.t = function (t, e) {
              if (1 & e && (t = r(t)), 8 & e) return t;
              if (4 & e && "object" == _typeof2(t) && t && t.__esModule) return t;
              var i = Object.create(null);
              if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
              }), 2 & e && "string" != typeof t) for (var n in t) {
                r.d(i, n, function (e) {
                  return t[e];
                }.bind(null, n));
              }
              return i;
            }, r.n = function (t) {
              var e = t && t.__esModule ? function () {
                return t["default"];
              } : function () {
                return t;
              };
              return r.d(e, "a", e), e;
            }, r.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }, r.p = "", r(r.s = 1);
          }([function (t, e, r) {
            var i, n;
            i = [r(2)], void 0 === (n = function (t) {
              function e(i) {
                if (e.is(i, "function")) return r ? i() : t.on("raphael.DOMload", i);
                if (e.is(i, A)) return e._engine.create[c](e, i.splice(0, 3 + e.is(i[0], T))).add(i);
                var n = Array.prototype.slice.call(arguments, 0);

                if (e.is(n[n.length - 1], "function")) {
                  var a = n.pop();
                  return r ? a.call(e._engine.create[c](e, n)) : t.on("raphael.DOMload", function () {
                    a.call(e._engine.create[c](e, n));
                  });
                }

                return e._engine.create[c](e, arguments);
              }

              e.version = "2.2.0", e.eve = t;

              var r,
                  i,
                  n = /[, ]+/,
                  a = {
                circle: 1,
                rect: 1,
                path: 1,
                ellipse: 1,
                text: 1,
                image: 1
              },
                  s = /\{(\d+)\}/g,
                  o = "hasOwnProperty",
                  l = {
                doc: document,
                win: window
              },
                  h = {
                was: Object.prototype[o].call(l.win, "Raphael"),
                is: l.win.Raphael
              },
                  u = function u() {
                this.ca = this.customAttributes = {};
              },
                  c = "apply",
                  f = "concat",
                  p = "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
                  d = "",
                  g = " ",
                  x = String,
                  v = "split",
                  y = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[v](g),
                  m = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
              },
                  b = x.prototype.toLowerCase,
                  _2 = Math,
                  w = _2.max,
                  k = _2.min,
                  B = _2.abs,
                  C = _2.pow,
                  S = _2.PI,
                  T = "number",
                  A = "array",
                  M = Object.prototype.toString,
                  E = (e._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
                  N = {
                NaN: 1,
                Infinity: 1,
                "-Infinity": 1
              },
                  L = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                  P = _2.round,
                  z = parseFloat,
                  F = parseInt,
                  R = x.prototype.toUpperCase,
                  j = e._availableAttrs = {
                "arrow-end": "none",
                "arrow-start": "none",
                blur: 0,
                "clip-rect": "0 0 1e9 1e9",
                cursor: "default",
                cx: 0,
                cy: 0,
                fill: "#fff",
                "fill-opacity": 1,
                font: '10px "Arial"',
                "font-family": '"Arial"',
                "font-size": "10",
                "font-style": "normal",
                "font-weight": 400,
                gradient: 0,
                height: 0,
                href: "http://raphaeljs.com/",
                "letter-spacing": 0,
                opacity: 1,
                path: "M0,0",
                r: 0,
                rx: 0,
                ry: 0,
                src: "",
                stroke: "#000",
                "stroke-dasharray": "",
                "stroke-linecap": "butt",
                "stroke-linejoin": "butt",
                "stroke-miterlimit": 0,
                "stroke-opacity": 1,
                "stroke-width": 1,
                target: "_blank",
                "text-anchor": "middle",
                title: "Raphael",
                transform: "",
                width: 0,
                x: 0,
                y: 0,
                "class": ""
              },
                  I = e._availableAnimAttrs = {
                blur: T,
                "clip-rect": "csv",
                cx: T,
                cy: T,
                fill: "colour",
                "fill-opacity": T,
                "font-size": T,
                height: T,
                opacity: T,
                path: "path",
                r: T,
                rx: T,
                ry: T,
                stroke: "colour",
                "stroke-opacity": T,
                "stroke-width": T,
                transform: "transform",
                width: T,
                x: T,
                y: T
              },
                  D = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                  q = {
                hs: 1,
                rg: 1
              },
                  O = /,?([achlmqrstvxz]),?/gi,
                  V = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                  W = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                  Y = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                  G = (e._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
                  H = function H(t, e) {
                return z(t) - z(e);
              },
                  X = function X(t) {
                return t;
              },
                  U = e._rectPath = function (t, e, r, i, n) {
                return n ? [["M", t + n, e], ["l", r - 2 * n, 0], ["a", n, n, 0, 0, 1, n, n], ["l", 0, i - 2 * n], ["a", n, n, 0, 0, 1, -n, n], ["l", 2 * n - r, 0], ["a", n, n, 0, 0, 1, -n, -n], ["l", 0, 2 * n - i], ["a", n, n, 0, 0, 1, n, -n], ["z"]] : [["M", t, e], ["l", r, 0], ["l", 0, i], ["l", -r, 0], ["z"]];
              },
                  $ = function $(t, e, r, i) {
                return null == i && (i = r), [["M", t, e], ["m", 0, -i], ["a", r, i, 0, 1, 1, 0, 2 * i], ["a", r, i, 0, 1, 1, 0, -2 * i], ["z"]];
              },
                  Z = e._getPath = {
                path: function path(t) {
                  return t.attr("path");
                },
                circle: function circle(t) {
                  var e = t.attrs;
                  return $(e.cx, e.cy, e.r);
                },
                ellipse: function ellipse(t) {
                  var e = t.attrs;
                  return $(e.cx, e.cy, e.rx, e.ry);
                },
                rect: function rect(t) {
                  var e = t.attrs;
                  return U(e.x, e.y, e.width, e.height, e.r);
                },
                image: function image(t) {
                  var e = t.attrs;
                  return U(e.x, e.y, e.width, e.height);
                },
                text: function text(t) {
                  var e = t._getBBox();

                  return U(e.x, e.y, e.width, e.height);
                },
                set: function set(t) {
                  var e = t._getBBox();

                  return U(e.x, e.y, e.width, e.height);
                }
              },
                  Q = e.mapPath = function (t, e) {
                if (!e) return t;
                var r, i, n, a, s, o, l;

                for (n = 0, s = (t = Tt(t)).length; n < s; n++) {
                  for (a = 1, o = (l = t[n]).length; a < o; a += 2) {
                    r = e.x(l[a], l[a + 1]), i = e.y(l[a], l[a + 1]), l[a] = r, l[a + 1] = i;
                  }
                }

                return t;
              };

              if (e._g = l, e.type = l.win.SVGAngle || l.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == e.type) {
                var J,
                    K = l.doc.createElement("div");
                if (K.innerHTML = '<v:shape adj="1"/>', (J = K.firstChild).style.behavior = "url(#default#VML)", !J || "object" != _typeof2(J.adj)) return e.type = d;
                K = null;
              }

              function tt(t) {
                if ("function" == typeof t || Object(t) !== t) return t;
                var e = new t.constructor();

                for (var r in t) {
                  t[o](r) && (e[r] = tt(t[r]));
                }

                return e;
              }

              e.svg = !(e.vml = "VML" == e.type), e._Paper = u, e.fn = i = u.prototype = e.prototype, e._id = 0, e.is = function (t, e) {
                return "finite" == (e = b.call(e)) ? !N[o](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == _typeof2(t) && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || M.call(t).slice(8, -1).toLowerCase() == e;
              }, e.angle = function (t, r, i, n, a, s) {
                if (null == a) {
                  var o = t - i,
                      l = r - n;
                  return o || l ? (180 + 180 * _2.atan2(-l, -o) / S + 360) % 360 : 0;
                }

                return e.angle(t, r, a, s) - e.angle(i, n, a, s);
              }, e.rad = function (t) {
                return t % 360 * S / 180;
              }, e.deg = function (t) {
                return Math.round(180 * t / S % 360 * 1e3) / 1e3;
              }, e.snapTo = function (t, r, i) {
                if (i = e.is(i, "finite") ? i : 10, e.is(t, A)) {
                  for (var n = t.length; n--;) {
                    if (B(t[n] - r) <= i) return t[n];
                  }
                } else {
                  var a = r % (t = +t);
                  if (a < i) return r - a;
                  if (a > t - i) return r - a + t;
                }

                return r;
              };
              var et, rt;
              e.createUUID = (et = /[xy]/g, rt = function rt(t) {
                var e = 16 * _2.random() | 0;
                return ("x" == t ? e : 3 & e | 8).toString(16);
              }, function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(et, rt).toUpperCase();
              });

              e.setWindow = function (r) {
                t("raphael.setWindow", e, l.win, r), l.win = r, l.doc = l.win.document, e._engine.initWin && e._engine.initWin(l.win);
              };

              var _it = function it(t) {
                if (e.vml) {
                  var r,
                      i = /^\s+|\s+$/g;

                  try {
                    var n = new ActiveXObject("htmlfile");
                    n.write("<body>"), n.close(), r = n.body;
                  } catch (t) {
                    r = createPopup().document.body;
                  }

                  var a = r.createTextRange();
                  _it = ht(function (t) {
                    try {
                      r.style.color = x(t).replace(i, d);
                      var e = a.queryCommandValue("ForeColor");
                      return "#" + ("000000" + (e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16).toString(16)).slice(-6);
                    } catch (t) {
                      return "none";
                    }
                  });
                } else {
                  var s = l.doc.createElement("i");
                  s.title = "Raphaël Colour Picker", s.style.display = "none", l.doc.body.appendChild(s), _it = ht(function (t) {
                    return s.style.color = t, l.doc.defaultView.getComputedStyle(s, d).getPropertyValue("color");
                  });
                }

                return _it(t);
              },
                  nt = function nt() {
                return "hsb(" + [this.h, this.s, this.b] + ")";
              },
                  at = function at() {
                return "hsl(" + [this.h, this.s, this.l] + ")";
              },
                  st = function st() {
                return this.hex;
              },
                  ot = function ot(t, r, i) {
                if (null == r && e.is(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, r = t.g, t = t.r), null == r && e.is(t, "string")) {
                  var n = e.getRGB(t);
                  t = n.r, r = n.g, i = n.b;
                }

                return (t > 1 || r > 1 || i > 1) && (t /= 255, r /= 255, i /= 255), [t, r, i];
              },
                  lt = function lt(t, r, i, n) {
                var a = {
                  r: t *= 255,
                  g: r *= 255,
                  b: i *= 255,
                  hex: e.rgb(t, r, i),
                  toString: st
                };
                return e.is(n, "finite") && (a.opacity = n), a;
              };

              function ht(t, e, r) {
                return function i() {
                  var n = Array.prototype.slice.call(arguments, 0),
                      a = n.join("␀"),
                      s = i.cache = i.cache || {},
                      l = i.count = i.count || [];
                  return s[o](a) ? (function (t, e) {
                    for (var r = 0, i = t.length; r < i; r++) {
                      if (t[r] === e) return t.push(t.splice(r, 1)[0]);
                    }
                  }(l, a), r ? r(s[a]) : s[a]) : (l.length >= 1e3 && delete s[l.shift()], l.push(a), s[a] = t[c](e, n), r ? r(s[a]) : s[a]);
                };
              }

              e.color = function (t) {
                var r;
                return e.is(t, "object") && "h" in t && "s" in t && "b" in t ? (r = e.hsb2rgb(t), t.r = r.r, t.g = r.g, t.b = r.b, t.hex = r.hex) : e.is(t, "object") && "h" in t && "s" in t && "l" in t ? (r = e.hsl2rgb(t), t.r = r.r, t.g = r.g, t.b = r.b, t.hex = r.hex) : (e.is(t, "string") && (t = e.getRGB(t)), e.is(t, "object") && "r" in t && "g" in t && "b" in t ? (r = e.rgb2hsl(t), t.h = r.h, t.s = r.s, t.l = r.l, r = e.rgb2hsb(t), t.v = r.b) : (t = {
                  hex: "none"
                }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1), t.toString = st, t;
              }, e.hsb2rgb = function (t, e, r, i) {
                var n, a, s, o, l;
                return this.is(t, "object") && "h" in t && "s" in t && "b" in t && (r = t.b, e = t.s, i = t.o, t = t.h), o = (l = r * e) * (1 - B((t = (t *= 360) % 360 / 60) % 2 - 1)), n = a = s = r - l, lt(n += [l, o, 0, 0, o, l][t = ~~t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], i);
              }, e.hsl2rgb = function (t, e, r, i) {
                var n, a, s, o, l;
                return this.is(t, "object") && "h" in t && "s" in t && "l" in t && (r = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || r > 1) && (t /= 360, e /= 100, r /= 100), o = (l = 2 * e * (r < .5 ? r : 1 - r)) * (1 - B((t = (t *= 360) % 360 / 60) % 2 - 1)), n = a = s = r - l / 2, lt(n += [l, o, 0, 0, o, l][t = ~~t], a += [o, l, l, o, 0, 0][t], s += [0, 0, o, l, l, o][t], i);
              }, e.rgb2hsb = function (t, e, r) {
                var i, n;
                return t = (r = ot(t, e, r))[0], e = r[1], r = r[2], {
                  h: ((0 == (n = (i = w(t, e, r)) - k(t, e, r)) ? null : i == t ? (e - r) / n : i == e ? (r - t) / n + 2 : (t - e) / n + 4) + 360) % 6 * 60 / 360,
                  s: 0 == n ? 0 : n / i,
                  b: i,
                  toString: nt
                };
              }, e.rgb2hsl = function (t, e, r) {
                var i, n, a, s;
                return t = (r = ot(t, e, r))[0], e = r[1], r = r[2], i = ((n = w(t, e, r)) + (a = k(t, e, r))) / 2, {
                  h: ((0 == (s = n - a) ? null : n == t ? (e - r) / s : n == e ? (r - t) / s + 2 : (t - e) / s + 4) + 360) % 6 * 60 / 360,
                  s: 0 == s ? 0 : i < .5 ? s / (2 * i) : s / (2 - 2 * i),
                  l: i,
                  toString: at
                };
              }, e._path2string = function () {
                return this.join(",").replace(O, "$1");
              };

              e._preload = function (t, e) {
                var r = l.doc.createElement("img");
                r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function () {
                  e.call(this), this.onload = null, l.doc.body.removeChild(this);
                }, r.onerror = function () {
                  l.doc.body.removeChild(this);
                }, l.doc.body.appendChild(r), r.src = t;
              };

              function ut() {
                return this.hex;
              }

              function ct(t, e) {
                for (var r = [], i = 0, n = t.length; n - 2 * !e > i; i += 2) {
                  var a = [{
                    x: +t[i - 2],
                    y: +t[i - 1]
                  }, {
                    x: +t[i],
                    y: +t[i + 1]
                  }, {
                    x: +t[i + 2],
                    y: +t[i + 3]
                  }, {
                    x: +t[i + 4],
                    y: +t[i + 5]
                  }];
                  e ? i ? n - 4 == i ? a[3] = {
                    x: +t[0],
                    y: +t[1]
                  } : n - 2 == i && (a[2] = {
                    x: +t[0],
                    y: +t[1]
                  }, a[3] = {
                    x: +t[2],
                    y: +t[3]
                  }) : a[0] = {
                    x: +t[n - 2],
                    y: +t[n - 1]
                  } : n - 4 == i ? a[3] = a[2] : i || (a[0] = {
                    x: +t[i],
                    y: +t[i + 1]
                  }), r.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y]);
                }

                return r;
              }

              e.getRGB = ht(function (t) {
                if (!t || (t = x(t)).indexOf("-") + 1) return {
                  r: -1,
                  g: -1,
                  b: -1,
                  hex: "none",
                  error: 1,
                  toString: ut
                };
                if ("none" == t) return {
                  r: -1,
                  g: -1,
                  b: -1,
                  hex: "none",
                  toString: ut
                };
                !q[o](t.toLowerCase().substring(0, 2)) && "#" != t.charAt() && (t = _it(t));
                var r,
                    i,
                    n,
                    a,
                    s,
                    l,
                    h = t.match(E);
                return h ? (h[2] && (n = F(h[2].substring(5), 16), i = F(h[2].substring(3, 5), 16), r = F(h[2].substring(1, 3), 16)), h[3] && (n = F((s = h[3].charAt(3)) + s, 16), i = F((s = h[3].charAt(2)) + s, 16), r = F((s = h[3].charAt(1)) + s, 16)), h[4] && (l = h[4][v](D), r = z(l[0]), "%" == l[0].slice(-1) && (r *= 2.55), i = z(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), n = z(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), "rgba" == h[1].toLowerCase().slice(0, 4) && (a = z(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100)), h[5] ? (l = h[5][v](D), r = z(l[0]), "%" == l[0].slice(-1) && (r *= 2.55), i = z(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), n = z(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (r /= 360), "hsba" == h[1].toLowerCase().slice(0, 4) && (a = z(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), e.hsb2rgb(r, i, n, a)) : h[6] ? (l = h[6][v](D), r = z(l[0]), "%" == l[0].slice(-1) && (r *= 2.55), i = z(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), n = z(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (r /= 360), "hsla" == h[1].toLowerCase().slice(0, 4) && (a = z(l[3])), l[3] && "%" == l[3].slice(-1) && (a /= 100), e.hsl2rgb(r, i, n, a)) : ((h = {
                  r: r,
                  g: i,
                  b: n,
                  toString: ut
                }).hex = "#" + (16777216 | n | i << 8 | r << 16).toString(16).slice(1), e.is(a, "finite") && (h.opacity = a), h)) : {
                  r: -1,
                  g: -1,
                  b: -1,
                  hex: "none",
                  error: 1,
                  toString: ut
                };
              }, e), e.hsb = ht(function (t, r, i) {
                return e.hsb2rgb(t, r, i).hex;
              }), e.hsl = ht(function (t, r, i) {
                return e.hsl2rgb(t, r, i).hex;
              }), e.rgb = ht(function (t, e, r) {
                function i(t) {
                  return t + .5 | 0;
                }

                return "#" + (16777216 | i(r) | i(e) << 8 | i(t) << 16).toString(16).slice(1);
              }), e.getColor = function (t) {
                var e = this.getColor.start = this.getColor.start || {
                  h: 0,
                  s: 1,
                  b: t || .75
                },
                    r = this.hsb2rgb(e.h, e.s, e.b);
                return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
                  h: 0,
                  s: 1,
                  b: e.b
                })), r.hex;
              }, e.getColor.reset = function () {
                delete this.start;
              }, e.parsePathString = function (t) {
                if (!t) return null;
                var r = ft(t);
                if (r.arr) return mt(r.arr);
                var i = {
                  a: 7,
                  c: 6,
                  h: 1,
                  l: 2,
                  m: 2,
                  r: 4,
                  q: 4,
                  s: 4,
                  t: 2,
                  v: 1,
                  z: 0
                },
                    n = [];
                return e.is(t, A) && e.is(t[0], A) && (n = mt(t)), n.length || x(t).replace(V, function (t, e, r) {
                  var a = [],
                      s = e.toLowerCase();
                  if (r.replace(Y, function (t, e) {
                    e && a.push(+e);
                  }), "m" == s && a.length > 2 && (n.push([e][f](a.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "r" == s) n.push([e][f](a));else for (; a.length >= i[s] && (n.push([e][f](a.splice(0, i[s]))), i[s]);) {
                    ;
                  }
                }), n.toString = e._path2string, r.arr = mt(n), n;
              }, e.parseTransformString = ht(function (t) {
                if (!t) return null;
                var r = [];
                return e.is(t, A) && e.is(t[0], A) && (r = mt(t)), r.length || x(t).replace(W, function (t, e, i) {
                  var n = [];
                  b.call(e);
                  i.replace(Y, function (t, e) {
                    e && n.push(+e);
                  }), r.push([e][f](n));
                }), r.toString = e._path2string, r;
              }, this, function (t) {
                if (!t) return t;

                for (var e = [], r = 0; r < t.length; r++) {
                  for (var i = [], n = 0; n < t[r].length; n++) {
                    i.push(t[r][n]);
                  }

                  e.push(i);
                }

                return e;
              });

              var ft = function ft(t) {
                var e = ft.ps = ft.ps || {};
                return e[t] ? e[t].sleep = 100 : e[t] = {
                  sleep: 100
                }, setTimeout(function () {
                  for (var r in e) {
                    e[o](r) && r != t && (e[r].sleep--, !e[r].sleep && delete e[r]);
                  }
                }), e[t];
              };

              function pt(t, e, r, i, n) {
                return t * (t * (-3 * e + 9 * r - 9 * i + 3 * n) + 6 * e - 12 * r + 6 * i) - 3 * e + 3 * r;
              }

              function dt(t, e, r, i, n, a, s, o, l) {
                null == l && (l = 1);

                for (var h = (l = l > 1 ? 1 : l < 0 ? 0 : l) / 2, u = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], c = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, p = 0; p < 12; p++) {
                  var d = h * u[p] + h,
                      g = pt(d, t, r, n, s),
                      x = pt(d, e, i, a, o),
                      v = g * g + x * x;
                  f += c[p] * _2.sqrt(v);
                }

                return h * f;
              }

              function gt(t, e, r, i, n, a, s, o) {
                if (!(w(t, r) < k(n, s) || k(t, r) > w(n, s) || w(e, i) < k(a, o) || k(e, i) > w(a, o))) {
                  var l = (t - r) * (a - o) - (e - i) * (n - s);

                  if (l) {
                    var h = ((t * i - e * r) * (n - s) - (t - r) * (n * o - a * s)) / l,
                        u = ((t * i - e * r) * (a - o) - (e - i) * (n * o - a * s)) / l,
                        c = +h.toFixed(2),
                        f = +u.toFixed(2);
                    if (!(c < +k(t, r).toFixed(2) || c > +w(t, r).toFixed(2) || c < +k(n, s).toFixed(2) || c > +w(n, s).toFixed(2) || f < +k(e, i).toFixed(2) || f > +w(e, i).toFixed(2) || f < +k(a, o).toFixed(2) || f > +w(a, o).toFixed(2))) return {
                      x: h,
                      y: u
                    };
                  }
                }
              }

              function xt(t, r, i) {
                var n = e.bezierBBox(t),
                    a = e.bezierBBox(r);
                if (!e.isBBoxIntersect(n, a)) return i ? 0 : [];

                for (var s = dt.apply(0, t), o = dt.apply(0, r), l = w(~~(s / 5), 1), h = w(~~(o / 5), 1), u = [], c = [], f = {}, p = i ? 0 : [], d = 0; d < l + 1; d++) {
                  var g = e.findDotsAtSegment.apply(e, t.concat(d / l));
                  u.push({
                    x: g.x,
                    y: g.y,
                    t: d / l
                  });
                }

                for (d = 0; d < h + 1; d++) {
                  g = e.findDotsAtSegment.apply(e, r.concat(d / h)), c.push({
                    x: g.x,
                    y: g.y,
                    t: d / h
                  });
                }

                for (d = 0; d < l; d++) {
                  for (var x = 0; x < h; x++) {
                    var v = u[d],
                        y = u[d + 1],
                        m = c[x],
                        b = c[x + 1],
                        _ = B(y.x - v.x) < .001 ? "y" : "x",
                        C = B(b.x - m.x) < .001 ? "y" : "x",
                        S = gt(v.x, v.y, y.x, y.y, m.x, m.y, b.x, b.y);

                    if (S) {
                      if (f[S.x.toFixed(4)] == S.y.toFixed(4)) continue;
                      f[S.x.toFixed(4)] = S.y.toFixed(4);
                      var T = v.t + B((S[_] - v[_]) / (y[_] - v[_])) * (y.t - v.t),
                          A = m.t + B((S[C] - m[C]) / (b[C] - m[C])) * (b.t - m.t);
                      T >= 0 && T <= 1.001 && A >= 0 && A <= 1.001 && (i ? p++ : p.push({
                        x: S.x,
                        y: S.y,
                        t1: k(T, 1),
                        t2: k(A, 1)
                      }));
                    }
                  }
                }

                return p;
              }

              function vt(t, r, i) {
                t = e._path2curve(t), r = e._path2curve(r);

                for (var n, a, s, o, l, h, u, c, f, p, d = i ? 0 : [], g = 0, x = t.length; g < x; g++) {
                  var v = t[g];
                  if ("M" == v[0]) n = l = v[1], a = h = v[2];else {
                    "C" == v[0] ? (f = [n, a].concat(v.slice(1)), n = f[6], a = f[7]) : (f = [n, a, n, a, l, h, l, h], n = l, a = h);

                    for (var y = 0, m = r.length; y < m; y++) {
                      var b = r[y];
                      if ("M" == b[0]) s = u = b[1], o = c = b[2];else {
                        "C" == b[0] ? (p = [s, o].concat(b.slice(1)), s = p[6], o = p[7]) : (p = [s, o, s, o, u, c, u, c], s = u, o = c);

                        var _ = xt(f, p, i);

                        if (i) d += _;else {
                          for (var w = 0, k = _.length; w < k; w++) {
                            _[w].segment1 = g, _[w].segment2 = y, _[w].bez1 = f, _[w].bez2 = p;
                          }

                          d = d.concat(_);
                        }
                      }
                    }
                  }
                }

                return d;
              }

              e.findDotsAtSegment = function (t, e, r, i, n, a, s, o, l) {
                var h = 1 - l,
                    u = C(h, 3),
                    c = C(h, 2),
                    f = l * l,
                    p = f * l,
                    d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * s,
                    g = u * e + 3 * c * l * i + 3 * h * l * l * a + p * o,
                    x = t + 2 * l * (r - t) + f * (n - 2 * r + t),
                    v = e + 2 * l * (i - e) + f * (a - 2 * i + e),
                    y = r + 2 * l * (n - r) + f * (s - 2 * n + r),
                    m = i + 2 * l * (a - i) + f * (o - 2 * a + i),
                    b = h * t + l * r,
                    w = h * e + l * i,
                    k = h * n + l * s,
                    B = h * a + l * o,
                    T = 90 - 180 * _2.atan2(x - y, v - m) / S;
                return (x > y || v < m) && (T += 180), {
                  x: d,
                  y: g,
                  m: {
                    x: x,
                    y: v
                  },
                  n: {
                    x: y,
                    y: m
                  },
                  start: {
                    x: b,
                    y: w
                  },
                  end: {
                    x: k,
                    y: B
                  },
                  alpha: T
                };
              }, e.bezierBBox = function (t, r, i, n, a, s, o, l) {
                e.is(t, "array") || (t = [t, r, i, n, a, s, o, l]);
                var h = St.apply(null, t);
                return {
                  x: h.min.x,
                  y: h.min.y,
                  x2: h.max.x,
                  y2: h.max.y,
                  width: h.max.x - h.min.x,
                  height: h.max.y - h.min.y
                };
              }, e.isPointInsideBBox = function (t, e, r) {
                return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2;
              }, e.isBBoxIntersect = function (t, r) {
                var i = e.isPointInsideBBox;
                return i(r, t.x, t.y) || i(r, t.x2, t.y) || i(r, t.x, t.y2) || i(r, t.x2, t.y2) || i(t, r.x, r.y) || i(t, r.x2, r.y) || i(t, r.x, r.y2) || i(t, r.x2, r.y2) || (t.x < r.x2 && t.x > r.x || r.x < t.x2 && r.x > t.x) && (t.y < r.y2 && t.y > r.y || r.y < t.y2 && r.y > t.y);
              }, e.pathIntersection = function (t, e) {
                return vt(t, e);
              }, e.pathIntersectionNumber = function (t, e) {
                return vt(t, e, 1);
              }, e.isPointInsidePath = function (t, r, i) {
                var n = e.pathBBox(t);
                return e.isPointInsideBBox(n, r, i) && vt(t, [["M", r, i], ["H", n.x2 + 10]], 1) % 2 == 1;
              }, e._removedFactory = function (e) {
                return function () {
                  t("raphael.log", null, "Raphaël: you are calling to method “" + e + "” of removed object", e);
                };
              };

              var yt = e.pathBBox = function (t) {
                var e = ft(t);
                if (e.bbox) return tt(e.bbox);
                if (!t) return {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0,
                  x2: 0,
                  y2: 0
                };

                for (var r, i = 0, n = 0, a = [], s = [], o = 0, l = (t = Tt(t)).length; o < l; o++) {
                  if ("M" == (r = t[o])[0]) i = r[1], n = r[2], a.push(i), s.push(n);else {
                    var h = St(i, n, r[1], r[2], r[3], r[4], r[5], r[6]);
                    a = a[f](h.min.x, h.max.x), s = s[f](h.min.y, h.max.y), i = r[5], n = r[6];
                  }
                }

                var u = k[c](0, a),
                    p = k[c](0, s),
                    d = w[c](0, a),
                    g = w[c](0, s),
                    x = d - u,
                    v = g - p,
                    y = {
                  x: u,
                  y: p,
                  x2: d,
                  y2: g,
                  width: x,
                  height: v,
                  cx: u + x / 2,
                  cy: p + v / 2
                };
                return e.bbox = tt(y), y;
              },
                  mt = function mt(t) {
                var r = tt(t);
                return r.toString = e._path2string, r;
              },
                  bt = e._pathToRelative = function (t) {
                var r = ft(t);
                if (r.rel) return mt(r.rel);
                e.is(t, A) && e.is(t && t[0], A) || (t = e.parsePathString(t));
                var i = [],
                    n = 0,
                    a = 0,
                    s = 0,
                    o = 0,
                    l = 0;
                "M" == t[0][0] && (s = n = t[0][1], o = a = t[0][2], l++, i.push(["M", n, a]));

                for (var h = l, u = t.length; h < u; h++) {
                  var c = i[h] = [],
                      f = t[h];
                  if (f[0] != b.call(f[0])) switch (c[0] = b.call(f[0]), c[0]) {
                    case "a":
                      c[1] = f[1], c[2] = f[2], c[3] = f[3], c[4] = f[4], c[5] = f[5], c[6] = +(f[6] - n).toFixed(3), c[7] = +(f[7] - a).toFixed(3);
                      break;

                    case "v":
                      c[1] = +(f[1] - a).toFixed(3);
                      break;

                    case "m":
                      s = f[1], o = f[2];

                    default:
                      for (var p = 1, d = f.length; p < d; p++) {
                        c[p] = +(f[p] - (p % 2 ? n : a)).toFixed(3);
                      }

                  } else {
                    c = i[h] = [], "m" == f[0] && (s = f[1] + n, o = f[2] + a);

                    for (var g = 0, x = f.length; g < x; g++) {
                      i[h][g] = f[g];
                    }
                  }
                  var v = i[h].length;

                  switch (i[h][0]) {
                    case "z":
                      n = s, a = o;
                      break;

                    case "h":
                      n += +i[h][v - 1];
                      break;

                    case "v":
                      a += +i[h][v - 1];
                      break;

                    default:
                      n += +i[h][v - 2], a += +i[h][v - 1];
                  }
                }

                return i.toString = e._path2string, r.rel = mt(i), i;
              },
                  _t = e._pathToAbsolute = function (t) {
                var r = ft(t);
                if (r.abs) return mt(r.abs);
                if (e.is(t, A) && e.is(t && t[0], A) || (t = e.parsePathString(t)), !t || !t.length) return [["M", 0, 0]];
                var i = [],
                    n = 0,
                    a = 0,
                    s = 0,
                    o = 0,
                    l = 0;
                "M" == t[0][0] && (s = n = +t[0][1], o = a = +t[0][2], l++, i[0] = ["M", n, a]);

                for (var h, u, c = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), p = l, d = t.length; p < d; p++) {
                  if (i.push(h = []), (u = t[p])[0] != R.call(u[0])) switch (h[0] = R.call(u[0]), h[0]) {
                    case "A":
                      h[1] = u[1], h[2] = u[2], h[3] = u[3], h[4] = u[4], h[5] = u[5], h[6] = +(u[6] + n), h[7] = +(u[7] + a);
                      break;

                    case "V":
                      h[1] = +u[1] + a;
                      break;

                    case "H":
                      h[1] = +u[1] + n;
                      break;

                    case "R":
                      for (var g = [n, a][f](u.slice(1)), x = 2, v = g.length; x < v; x++) {
                        g[x] = +g[x] + n, g[++x] = +g[x] + a;
                      }

                      i.pop(), i = i[f](ct(g, c));
                      break;

                    case "M":
                      s = +u[1] + n, o = +u[2] + a;

                    default:
                      for (x = 1, v = u.length; x < v; x++) {
                        h[x] = +u[x] + (x % 2 ? n : a);
                      }

                  } else if ("R" == u[0]) g = [n, a][f](u.slice(1)), i.pop(), i = i[f](ct(g, c)), h = ["R"][f](u.slice(-2));else for (var y = 0, m = u.length; y < m; y++) {
                    h[y] = u[y];
                  }

                  switch (h[0]) {
                    case "Z":
                      n = s, a = o;
                      break;

                    case "H":
                      n = h[1];
                      break;

                    case "V":
                      a = h[1];
                      break;

                    case "M":
                      s = h[h.length - 2], o = h[h.length - 1];

                    default:
                      n = h[h.length - 2], a = h[h.length - 1];
                  }
                }

                return i.toString = e._path2string, r.abs = mt(i), i;
              },
                  wt = function wt(t, e, r, i) {
                return [t, e, r, i, r, i];
              },
                  kt = function kt(t, e, r, i, n, a) {
                return [1 / 3 * t + 2 / 3 * r, 1 / 3 * e + 2 / 3 * i, 1 / 3 * n + 2 / 3 * r, 1 / 3 * a + 2 / 3 * i, n, a];
              },
                  Bt = function Bt(t, e, r, i, n, a, s, o, l, h) {
                var u,
                    c = 120 * S / 180,
                    p = S / 180 * (+n || 0),
                    d = [],
                    g = ht(function (t, e, r) {
                  return {
                    x: t * _2.cos(r) - e * _2.sin(r),
                    y: t * _2.sin(r) + e * _2.cos(r)
                  };
                });
                if (h) A = h[0], M = h[1], C = h[2], T = h[3];else {
                  t = (u = g(t, e, -p)).x, e = u.y, o = (u = g(o, l, -p)).x, l = u.y;
                  _2.cos(S / 180 * n), _2.sin(S / 180 * n);
                  var x = (t - o) / 2,
                      y = (e - l) / 2,
                      m = x * x / (r * r) + y * y / (i * i);
                  m > 1 && (r *= m = _2.sqrt(m), i *= m);

                  var b = r * r,
                      w = i * i,
                      k = (a == s ? -1 : 1) * _2.sqrt(B((b * w - b * y * y - w * x * x) / (b * y * y + w * x * x))),
                      C = k * r * y / i + (t + o) / 2,
                      T = k * -i * x / r + (e + l) / 2,
                      A = _2.asin(((e - T) / i).toFixed(9)),
                      M = _2.asin(((l - T) / i).toFixed(9));

                  (A = t < C ? S - A : A) < 0 && (A = 2 * S + A), (M = o < C ? S - M : M) < 0 && (M = 2 * S + M), s && A > M && (A -= 2 * S), !s && M > A && (M -= 2 * S);
                }
                var E = M - A;

                if (B(E) > c) {
                  var N = M,
                      L = o,
                      P = l;
                  M = A + c * (s && M > A ? 1 : -1), o = C + r * _2.cos(M), l = T + i * _2.sin(M), d = Bt(o, l, r, i, n, 0, s, L, P, [M, N, C, T]);
                }

                E = M - A;

                var z = _2.cos(A),
                    F = _2.sin(A),
                    R = _2.cos(M),
                    j = _2.sin(M),
                    I = _2.tan(E / 4),
                    D = 4 / 3 * r * I,
                    q = 4 / 3 * i * I,
                    O = [t, e],
                    V = [t + D * F, e - q * z],
                    W = [o + D * j, l - q * R],
                    Y = [o, l];

                if (V[0] = 2 * O[0] - V[0], V[1] = 2 * O[1] - V[1], h) return [V, W, Y][f](d);

                for (var G = [], H = 0, X = (d = [V, W, Y][f](d).join()[v](",")).length; H < X; H++) {
                  G[H] = H % 2 ? g(d[H - 1], d[H], p).y : g(d[H], d[H + 1], p).x;
                }

                return G;
              },
                  Ct = function Ct(t, e, r, i, n, a, s, o, l) {
                var h = 1 - l;
                return {
                  x: C(h, 3) * t + 3 * C(h, 2) * l * r + 3 * h * l * l * n + C(l, 3) * s,
                  y: C(h, 3) * e + 3 * C(h, 2) * l * i + 3 * h * l * l * a + C(l, 3) * o
                };
              },
                  St = ht(function (t, e, r, i, n, a, s, o) {
                var l,
                    h = n - 2 * r + t - (s - 2 * n + r),
                    u = 2 * (r - t) - 2 * (n - r),
                    f = t - r,
                    p = (-u + _2.sqrt(u * u - 4 * h * f)) / 2 / h,
                    d = (-u - _2.sqrt(u * u - 4 * h * f)) / 2 / h,
                    g = [e, o],
                    x = [t, s];
                return B(p) > "1e12" && (p = .5), B(d) > "1e12" && (d = .5), p > 0 && p < 1 && (l = Ct(t, e, r, i, n, a, s, o, p), x.push(l.x), g.push(l.y)), d > 0 && d < 1 && (l = Ct(t, e, r, i, n, a, s, o, d), x.push(l.x), g.push(l.y)), h = a - 2 * i + e - (o - 2 * a + i), f = e - i, p = (-(u = 2 * (i - e) - 2 * (a - i)) + _2.sqrt(u * u - 4 * h * f)) / 2 / h, d = (-u - _2.sqrt(u * u - 4 * h * f)) / 2 / h, B(p) > "1e12" && (p = .5), B(d) > "1e12" && (d = .5), p > 0 && p < 1 && (l = Ct(t, e, r, i, n, a, s, o, p), x.push(l.x), g.push(l.y)), d > 0 && d < 1 && (l = Ct(t, e, r, i, n, a, s, o, d), x.push(l.x), g.push(l.y)), {
                  min: {
                    x: k[c](0, x),
                    y: k[c](0, g)
                  },
                  max: {
                    x: w[c](0, x),
                    y: w[c](0, g)
                  }
                };
              }),
                  Tt = e._path2curve = ht(function (t, e) {
                var r = !e && ft(t);
                if (!e && r.curve) return mt(r.curve);

                for (var i = _t(t), n = e && _t(e), a = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null
                }, s = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null
                }, o = function o(t, e, r) {
                  var i, n;
                  if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];

                  switch (!(t[0] in {
                    T: 1,
                    Q: 1
                  }) && (e.qx = e.qy = null), t[0]) {
                    case "M":
                      e.X = t[1], e.Y = t[2];
                      break;

                    case "A":
                      t = ["C"][f](Bt[c](0, [e.x, e.y][f](t.slice(1))));
                      break;

                    case "S":
                      "C" == r || "S" == r ? (i = 2 * e.x - e.bx, n = 2 * e.y - e.by) : (i = e.x, n = e.y), t = ["C", i, n][f](t.slice(1));
                      break;

                    case "T":
                      "Q" == r || "T" == r ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][f](kt(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                      break;

                    case "Q":
                      e.qx = t[1], e.qy = t[2], t = ["C"][f](kt(e.x, e.y, t[1], t[2], t[3], t[4]));
                      break;

                    case "L":
                      t = ["C"][f](wt(e.x, e.y, t[1], t[2]));
                      break;

                    case "H":
                      t = ["C"][f](wt(e.x, e.y, t[1], e.y));
                      break;

                    case "V":
                      t = ["C"][f](wt(e.x, e.y, e.x, t[1]));
                      break;

                    case "Z":
                      t = ["C"][f](wt(e.x, e.y, e.X, e.Y));
                  }

                  return t;
                }, l = function l(t, e) {
                  if (t[e].length > 7) {
                    t[e].shift();

                    for (var r = t[e]; r.length;) {
                      u[e] = "A", n && (p[e] = "A"), t.splice(e++, 0, ["C"][f](r.splice(0, 6)));
                    }

                    t.splice(e, 1), v = w(i.length, n && n.length || 0);
                  }
                }, h = function h(t, e, r, a, s) {
                  t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", a.x, a.y]), r.bx = 0, r.by = 0, r.x = t[s][1], r.y = t[s][2], v = w(i.length, n && n.length || 0));
                }, u = [], p = [], d = "", g = "", x = 0, v = w(i.length, n && n.length || 0); x < v; x++) {
                  i[x] && (d = i[x][0]), "C" != d && (u[x] = d, x && (g = u[x - 1])), i[x] = o(i[x], a, g), "A" != u[x] && "C" == d && (u[x] = "C"), l(i, x), n && (n[x] && (d = n[x][0]), "C" != d && (p[x] = d, x && (g = p[x - 1])), n[x] = o(n[x], s, g), "A" != p[x] && "C" == d && (p[x] = "C"), l(n, x)), h(i, n, a, s, x), h(n, i, s, a, x);

                  var y = i[x],
                      m = n && n[x],
                      b = y.length,
                      _ = n && m.length;

                  a.x = y[b - 2], a.y = y[b - 1], a.bx = z(y[b - 4]) || a.x, a.by = z(y[b - 3]) || a.y, s.bx = n && (z(m[_ - 4]) || s.x), s.by = n && (z(m[_ - 3]) || s.y), s.x = n && m[_ - 2], s.y = n && m[_ - 1];
                }

                return n || (r.curve = mt(i)), n ? [i, n] : i;
              }, null, mt),
                  At = (e._parseDots = ht(function (t) {
                for (var r = [], i = 0, n = t.length; i < n; i++) {
                  var a = {},
                      s = t[i].match(/^([^:]*):?([\d\.]*)/);
                  if (a.color = e.getRGB(s[1]), a.color.error) return null;
                  a.opacity = a.color.opacity, a.color = a.color.hex, s[2] && (a.offset = s[2] + "%"), r.push(a);
                }

                for (i = 1, n = r.length - 1; i < n; i++) {
                  if (!r[i].offset) {
                    for (var o = z(r[i - 1].offset || 0), l = 0, h = i + 1; h < n; h++) {
                      if (r[h].offset) {
                        l = r[h].offset;
                        break;
                      }
                    }

                    l || (l = 100, h = n);

                    for (var u = ((l = z(l)) - o) / (h - i + 1); i < h; i++) {
                      o += u, r[i].offset = o + "%";
                    }
                  }
                }

                return r;
              }), e._tear = function (t, e) {
                t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next);
              }),
                  Mt = (e._tofront = function (t, e) {
                e.top !== t && (At(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t);
              }, e._toback = function (t, e) {
                e.bottom !== t && (At(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t);
              }, e._insertafter = function (t, e, r) {
                At(t, r), e == r.top && (r.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t;
              }, e._insertbefore = function (t, e, r) {
                At(t, r), e == r.bottom && (r.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e;
              }, e.toMatrix = function (t, e) {
                var r = yt(t),
                    i = {
                  _: {
                    transform: d
                  },
                  getBBox: function getBBox() {
                    return r;
                  }
                };
                return Et(i, e), i.matrix;
              }),
                  Et = (e.transformPath = function (t, e) {
                return Q(t, Mt(t, e));
              }, e._extractTransform = function (t, r) {
                if (null == r) return t._.transform;
                r = x(r).replace(/\.{3}|\u2026/g, t._.transform || d);
                var i,
                    n,
                    a = e.parseTransformString(r),
                    s = 0,
                    o = 1,
                    l = 1,
                    h = t._,
                    u = new Pt();
                if (h.transform = a || [], a) for (var c = 0, f = a.length; c < f; c++) {
                  var p,
                      g,
                      v,
                      y,
                      m,
                      b = a[c],
                      _ = b.length,
                      w = x(b[0]).toLowerCase(),
                      k = b[0] != w,
                      B = k ? u.invert() : 0;
                  "t" == w && 3 == _ ? k ? (p = B.x(0, 0), g = B.y(0, 0), v = B.x(b[1], b[2]), y = B.y(b[1], b[2]), u.translate(v - p, y - g)) : u.translate(b[1], b[2]) : "r" == w ? 2 == _ ? (m = m || t.getBBox(1), u.rotate(b[1], m.x + m.width / 2, m.y + m.height / 2), s += b[1]) : 4 == _ && (k ? (v = B.x(b[2], b[3]), y = B.y(b[2], b[3]), u.rotate(b[1], v, y)) : u.rotate(b[1], b[2], b[3]), s += b[1]) : "s" == w ? 2 == _ || 3 == _ ? (m = m || t.getBBox(1), u.scale(b[1], b[_ - 1], m.x + m.width / 2, m.y + m.height / 2), o *= b[1], l *= b[_ - 1]) : 5 == _ && (k ? (v = B.x(b[3], b[4]), y = B.y(b[3], b[4]), u.scale(b[1], b[2], v, y)) : u.scale(b[1], b[2], b[3], b[4]), o *= b[1], l *= b[2]) : "m" == w && 7 == _ && u.add(b[1], b[2], b[3], b[4], b[5], b[6]), h.dirtyT = 1, t.matrix = u;
                }
                t.matrix = u, h.sx = o, h.sy = l, h.deg = s, h.dx = i = u.e, h.dy = n = u.f, 1 == o && 1 == l && !s && h.bbox ? (h.bbox.x += +i, h.bbox.y += +n) : h.dirtyT = 1;
              }),
                  Nt = function Nt(t) {
                var e = t[0];

                switch (e.toLowerCase()) {
                  case "t":
                    return [e, 0, 0];

                  case "m":
                    return [e, 1, 0, 0, 1, 0, 0];

                  case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];

                  case "s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1];
                }
              },
                  Lt = e._equaliseTransform = function (t, r) {
                r = x(r).replace(/\.{3}|\u2026/g, t), t = e.parseTransformString(t) || [], r = e.parseTransformString(r) || [];

                for (var i, n, a, s, o = w(t.length, r.length), l = [], h = [], u = 0; u < o; u++) {
                  if (a = t[u] || Nt(r[u]), s = r[u] || Nt(a), a[0] != s[0] || "r" == a[0].toLowerCase() && (a[2] != s[2] || a[3] != s[3]) || "s" == a[0].toLowerCase() && (a[3] != s[3] || a[4] != s[4])) return;

                  for (l[u] = [], h[u] = [], i = 0, n = w(a.length, s.length); i < n; i++) {
                    i in a && (l[u][i] = a[i]), i in s && (h[u][i] = s[i]);
                  }
                }

                return {
                  from: l,
                  to: h
                };
              };

              function Pt(t, e, r, i, n, a) {
                null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +i, this.e = +n, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0);
              }

              e._getContainer = function (t, r, i, n) {
                var a;
                if (null != (a = null != n || e.is(t, "object") ? t : l.doc.getElementById(t))) return a.tagName ? null == r ? {
                  container: a,
                  width: a.style.pixelWidth || a.offsetWidth,
                  height: a.style.pixelHeight || a.offsetHeight
                } : {
                  container: a,
                  width: r,
                  height: i
                } : {
                  container: 1,
                  x: t,
                  y: r,
                  width: i,
                  height: n
                };
              }, e.pathToRelative = bt, e._engine = {}, e.path2curve = Tt, e.matrix = function (t, e, r, i, n, a) {
                return new Pt(t, e, r, i, n, a);
              }, function (t) {
                function r(t) {
                  return t[0] * t[0] + t[1] * t[1];
                }

                function i(t) {
                  var e = _2.sqrt(r(t));

                  t[0] && (t[0] /= e), t[1] && (t[1] /= e);
                }

                t.add = function (t, e, r, i, n, a) {
                  var s,
                      o,
                      l,
                      h,
                      u = [[], [], []],
                      c = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                      f = [[t, r, n], [e, i, a], [0, 0, 1]];

                  for (t && t instanceof Pt && (f = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]), s = 0; s < 3; s++) {
                    for (o = 0; o < 3; o++) {
                      for (h = 0, l = 0; l < 3; l++) {
                        h += c[s][l] * f[l][o];
                      }

                      u[s][o] = h;
                    }
                  }

                  this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2];
                }, t.invert = function () {
                  var t = this,
                      e = t.a * t.d - t.b * t.c;
                  return new Pt(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e);
                }, t.clone = function () {
                  return new Pt(this.a, this.b, this.c, this.d, this.e, this.f);
                }, t.translate = function (t, e) {
                  this.add(1, 0, 0, 1, t, e);
                }, t.scale = function (t, e, r, i) {
                  null == e && (e = t), (r || i) && this.add(1, 0, 0, 1, r, i), this.add(t, 0, 0, e, 0, 0), (r || i) && this.add(1, 0, 0, 1, -r, -i);
                }, t.rotate = function (t, r, i) {
                  t = e.rad(t), r = r || 0, i = i || 0;
                  var n = +_2.cos(t).toFixed(9),
                      a = +_2.sin(t).toFixed(9);
                  this.add(n, a, -a, n, r, i), this.add(1, 0, 0, 1, -r, -i);
                }, t.x = function (t, e) {
                  return t * this.a + e * this.c + this.e;
                }, t.y = function (t, e) {
                  return t * this.b + e * this.d + this.f;
                }, t.get = function (t) {
                  return +this[x.fromCharCode(97 + t)].toFixed(4);
                }, t.toString = function () {
                  return e.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
                }, t.toFilter = function () {
                  return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
                }, t.offset = function () {
                  return [this.e.toFixed(4), this.f.toFixed(4)];
                }, t.split = function () {
                  var t = {};
                  t.dx = this.e, t.dy = this.f;
                  var n = [[this.a, this.c], [this.b, this.d]];
                  t.scalex = _2.sqrt(r(n[0])), i(n[0]), t.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * t.shear, n[1][1] - n[0][1] * t.shear], t.scaley = _2.sqrt(r(n[1])), i(n[1]), t.shear /= t.scaley;
                  var a = -n[0][1],
                      s = n[1][1];
                  return s < 0 ? (t.rotate = e.deg(_2.acos(s)), a < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(_2.asin(a)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t;
                }, t.toTransformString = function (t) {
                  var e = t || this[v]();
                  return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : d) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : d) + (e.rotate ? "r" + [e.rotate, 0, 0] : d)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
                };
              }(Pt.prototype);

              for (var zt = function zt() {
                this.returnValue = !1;
              }, Ft = function Ft() {
                return this.originalEvent.preventDefault();
              }, Rt = function Rt() {
                this.cancelBubble = !0;
              }, jt = function jt() {
                return this.originalEvent.stopPropagation();
              }, It = function It(t) {
                var e = l.doc.documentElement.scrollTop || l.doc.body.scrollTop,
                    r = l.doc.documentElement.scrollLeft || l.doc.body.scrollLeft;
                return {
                  x: t.clientX + r,
                  y: t.clientY + e
                };
              }, Dt = l.doc.addEventListener ? function (t, e, r, i) {
                var n = function n(t) {
                  var e = It(t);
                  return r.call(i, t, e.x, e.y);
                };

                if (t.addEventListener(e, n, !1), p && m[e]) {
                  var a = function a(e) {
                    for (var n = It(e), a = e, s = 0, o = e.targetTouches && e.targetTouches.length; s < o; s++) {
                      if (e.targetTouches[s].target == t) {
                        (e = e.targetTouches[s]).originalEvent = a, e.preventDefault = Ft, e.stopPropagation = jt;
                        break;
                      }
                    }

                    return r.call(i, e, n.x, n.y);
                  };

                  t.addEventListener(m[e], a, !1);
                }

                return function () {
                  return t.removeEventListener(e, n, !1), p && m[e] && t.removeEventListener(m[e], a, !1), !0;
                };
              } : l.doc.attachEvent ? function (t, e, r, i) {
                var n = function n(t) {
                  t = t || l.win.event;
                  var e = l.doc.documentElement.scrollTop || l.doc.body.scrollTop,
                      n = l.doc.documentElement.scrollLeft || l.doc.body.scrollLeft,
                      a = t.clientX + n,
                      s = t.clientY + e;
                  return t.preventDefault = t.preventDefault || zt, t.stopPropagation = t.stopPropagation || Rt, r.call(i, t, a, s);
                };

                return t.attachEvent("on" + e, n), function () {
                  return t.detachEvent("on" + e, n), !0;
                };
              } : void 0, qt = [], Ot = function Ot(e) {
                for (var r, i = e.clientX, n = e.clientY, a = l.doc.documentElement.scrollTop || l.doc.body.scrollTop, s = l.doc.documentElement.scrollLeft || l.doc.body.scrollLeft, o = qt.length; o--;) {
                  if (r = qt[o], p && e.touches) {
                    for (var h, u = e.touches.length; u--;) {
                      if ((h = e.touches[u]).identifier == r.el._drag.id) {
                        i = h.clientX, n = h.clientY, (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                      }
                    }
                  } else e.preventDefault();

                  var c,
                      f = r.el.node,
                      d = f.nextSibling,
                      g = f.parentNode,
                      x = f.style.display;
                  l.win.opera && g.removeChild(f), f.style.display = "none", c = r.el.paper.getElementByPoint(i, n), f.style.display = x, l.win.opera && (d ? g.insertBefore(f, d) : g.appendChild(f)), c && t("raphael.drag.over." + r.el.id, r.el, c), i += s, n += a, t("raphael.drag.move." + r.el.id, r.move_scope || r.el, i - r.el._drag.x, n - r.el._drag.y, i, n, e);
                }
              }, Vt = function Vt(r) {
                e.unmousemove(Ot).unmouseup(Vt);

                for (var i, n = qt.length; n--;) {
                  (i = qt[n]).el._drag = {}, t("raphael.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, r);
                }

                qt = [];
              }, Wt = e.el = {}, Yt = y.length; Yt--;) {
                !function (t) {
                  e[t] = Wt[t] = function (r, i) {
                    return e.is(r, "function") && (this.events = this.events || [], this.events.push({
                      name: t,
                      f: r,
                      unbind: Dt(this.shape || this.node || l.doc, t, r, i || this)
                    })), this;
                  }, e["un" + t] = Wt["un" + t] = function (r) {
                    for (var i = this.events || [], n = i.length; n--;) {
                      i[n].name != t || !e.is(r, "undefined") && i[n].f != r || (i[n].unbind(), i.splice(n, 1), !i.length && delete this.events);
                    }

                    return this;
                  };
                }(y[Yt]);
              }

              Wt.data = function (r, i) {
                var n = G[this.id] = G[this.id] || {};
                if (0 == arguments.length) return n;

                if (1 == arguments.length) {
                  if (e.is(r, "object")) {
                    for (var a in r) {
                      r[o](a) && this.data(a, r[a]);
                    }

                    return this;
                  }

                  return t("raphael.data.get." + this.id, this, n[r], r), n[r];
                }

                return n[r] = i, t("raphael.data.set." + this.id, this, i, r), this;
              }, Wt.removeData = function (t) {
                return null == t ? delete G[this.id] : G[this.id] && delete G[this.id][t], this;
              }, Wt.getData = function () {
                return tt(G[this.id] || {});
              }, Wt.hover = function (t, e, r, i) {
                return this.mouseover(t, r).mouseout(e, i || r);
              }, Wt.unhover = function (t, e) {
                return this.unmouseover(t).unmouseout(e);
              };
              var Gt = [];
              Wt.drag = function (r, i, n, a, s, o) {
                function h(h) {
                  (h.originalEvent || h).preventDefault();
                  var u = h.clientX,
                      c = h.clientY,
                      f = l.doc.documentElement.scrollTop || l.doc.body.scrollTop,
                      d = l.doc.documentElement.scrollLeft || l.doc.body.scrollLeft;
                  if (this._drag.id = h.identifier, p && h.touches) for (var g, x = h.touches.length; x--;) {
                    if (g = h.touches[x], this._drag.id = g.identifier, g.identifier == this._drag.id) {
                      u = g.clientX, c = g.clientY;
                      break;
                    }
                  }
                  this._drag.x = u + d, this._drag.y = c + f, !qt.length && e.mousemove(Ot).mouseup(Vt), qt.push({
                    el: this,
                    move_scope: a,
                    start_scope: s,
                    end_scope: o
                  }), i && t.on("raphael.drag.start." + this.id, i), r && t.on("raphael.drag.move." + this.id, r), n && t.on("raphael.drag.end." + this.id, n), t("raphael.drag.start." + this.id, s || a || this, this._drag.x, this._drag.y, h);
                }

                return this._drag = {}, Gt.push({
                  el: this,
                  start: h
                }), this.mousedown(h), this;
              }, Wt.onDragOver = function (e) {
                e ? t.on("raphael.drag.over." + this.id, e) : t.unbind("raphael.drag.over." + this.id);
              }, Wt.undrag = function () {
                for (var r = Gt.length; r--;) {
                  Gt[r].el == this && (this.unmousedown(Gt[r].start), Gt.splice(r, 1), t.unbind("raphael.drag.*." + this.id));
                }

                !Gt.length && e.unmousemove(Ot).unmouseup(Vt), qt = [];
              }, i.circle = function (t, r, i) {
                var n = e._engine.circle(this, t || 0, r || 0, i || 0);

                return this.__set__ && this.__set__.push(n), n;
              }, i.rect = function (t, r, i, n, a) {
                var s = e._engine.rect(this, t || 0, r || 0, i || 0, n || 0, a || 0);

                return this.__set__ && this.__set__.push(s), s;
              }, i.ellipse = function (t, r, i, n) {
                var a = e._engine.ellipse(this, t || 0, r || 0, i || 0, n || 0);

                return this.__set__ && this.__set__.push(a), a;
              }, i.path = function (t) {
                t && !e.is(t, "string") && !e.is(t[0], A) && (t += d);

                var r = e._engine.path(e.format[c](e, arguments), this);

                return this.__set__ && this.__set__.push(r), r;
              }, i.image = function (t, r, i, n, a) {
                var s = e._engine.image(this, t || "about:blank", r || 0, i || 0, n || 0, a || 0);

                return this.__set__ && this.__set__.push(s), s;
              }, i.text = function (t, r, i) {
                var n = e._engine.text(this, t || 0, r || 0, x(i));

                return this.__set__ && this.__set__.push(n), n;
              }, i.set = function (t) {
                !e.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
                var r = new he(t);
                return this.__set__ && this.__set__.push(r), r.paper = this, r.type = "set", r;
              }, i.setStart = function (t) {
                this.__set__ = t || this.set();
              }, i.setFinish = function (t) {
                var e = this.__set__;
                return delete this.__set__, e;
              }, i.getSize = function () {
                var t = this.canvas.parentNode;
                return {
                  width: t.offsetWidth,
                  height: t.offsetHeight
                };
              }, i.setSize = function (t, r) {
                return e._engine.setSize.call(this, t, r);
              }, i.setViewBox = function (t, r, i, n, a) {
                return e._engine.setViewBox.call(this, t, r, i, n, a);
              }, i.top = i.bottom = null, i.raphael = e;

              function Ht() {
                return this.x + g + this.y + g + this.width + " × " + this.height;
              }

              i.getElementByPoint = function (t, e) {
                var r,
                    i,
                    n,
                    a,
                    s,
                    o,
                    h,
                    u = this.canvas,
                    c = l.doc.elementFromPoint(t, e);

                if (l.win.opera && "svg" == c.tagName) {
                  var f = (i = (r = u).getBoundingClientRect(), n = r.ownerDocument, a = n.body, s = n.documentElement, o = s.clientTop || a.clientTop || 0, h = s.clientLeft || a.clientLeft || 0, {
                    y: i.top + (l.win.pageYOffset || s.scrollTop || a.scrollTop) - o,
                    x: i.left + (l.win.pageXOffset || s.scrollLeft || a.scrollLeft) - h
                  }),
                      p = u.createSVGRect();
                  p.x = t - f.x, p.y = e - f.y, p.width = p.height = 1;
                  var d = u.getIntersectionList(p, null);
                  d.length && (c = d[d.length - 1]);
                }

                if (!c) return null;

                for (; c.parentNode && c != u.parentNode && !c.raphael;) {
                  c = c.parentNode;
                }

                return c == this.canvas.parentNode && (c = u), c = c && c.raphael ? this.getById(c.raphaelid) : null;
              }, i.getElementsByBBox = function (t) {
                var r = this.set();
                return this.forEach(function (i) {
                  e.isBBoxIntersect(i.getBBox(), t) && r.push(i);
                }), r;
              }, i.getById = function (t) {
                for (var e = this.bottom; e;) {
                  if (e.id == t) return e;
                  e = e.next;
                }

                return null;
              }, i.forEach = function (t, e) {
                for (var r = this.bottom; r;) {
                  if (!1 === t.call(e, r)) return this;
                  r = r.next;
                }

                return this;
              }, i.getElementsByPoint = function (t, e) {
                var r = this.set();
                return this.forEach(function (i) {
                  i.isPointInside(t, e) && r.push(i);
                }), r;
              }, Wt.isPointInside = function (t, r) {
                var i = this.realPath = Z[this.type](this);
                return this.attr("transform") && this.attr("transform").length && (i = e.transformPath(i, this.attr("transform"))), e.isPointInsidePath(i, t, r);
              }, Wt.getBBox = function (t) {
                if (this.removed) return {};
                var e = this._;
                return t ? (!e.dirty && e.bboxwt || (this.realPath = Z[this.type](this), e.bboxwt = yt(this.realPath), e.bboxwt.toString = Ht, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = Z[this.type](this)), e.bbox = yt(Q(this.realPath, this.matrix)), e.bbox.toString = Ht, e.dirty = e.dirtyT = 0), e.bbox);
              }, Wt.clone = function () {
                if (this.removed) return null;
                var t = this.paper[this.type]().attr(this.attr());
                return this.__set__ && this.__set__.push(t), t;
              }, Wt.glow = function (t) {
                if ("text" == this.type) return null;
                var e = {
                  width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1),
                  fill: t.fill || !1,
                  opacity: null == t.opacity ? .5 : t.opacity,
                  offsetx: t.offsetx || 0,
                  offsety: t.offsety || 0,
                  color: t.color || "#000"
                },
                    r = e.width / 2,
                    i = this.paper,
                    n = i.set(),
                    a = this.realPath || Z[this.type](this);
                a = this.matrix ? Q(a, this.matrix) : a;

                for (var s = 1; s < r + 1; s++) {
                  n.push(i.path(a).attr({
                    stroke: e.color,
                    fill: e.fill ? e.color : "none",
                    "stroke-linejoin": "round",
                    "stroke-linecap": "round",
                    "stroke-width": +(e.width / r * s).toFixed(3),
                    opacity: +(e.opacity / r).toFixed(3)
                  }));
                }

                return n.insertBefore(this).translate(e.offsetx, e.offsety);
              };

              var Xt = function Xt(t, r, i, n, a, s, o, l, h) {
                return null == h ? dt(t, r, i, n, a, s, o, l) : e.findDotsAtSegment(t, r, i, n, a, s, o, l, function (t, e, r, i, n, a, s, o, l) {
                  if (!(l < 0 || dt(t, e, r, i, n, a, s, o) < l)) {
                    var h,
                        u = .5,
                        c = 1 - u;

                    for (h = dt(t, e, r, i, n, a, s, o, c); B(h - l) > .01;) {
                      h = dt(t, e, r, i, n, a, s, o, c += (h < l ? 1 : -1) * (u /= 2));
                    }

                    return c;
                  }
                }(t, r, i, n, a, s, o, l, h));
              },
                  Ut = function Ut(t, r) {
                return function (i, n, a) {
                  for (var s, o, l, h, u, c = "", f = {}, p = 0, d = 0, g = (i = Tt(i)).length; d < g; d++) {
                    if ("M" == (l = i[d])[0]) s = +l[1], o = +l[2];else {
                      if (p + (h = Xt(s, o, l[1], l[2], l[3], l[4], l[5], l[6])) > n) {
                        if (r && !f.start) {
                          if (c += ["C" + (u = Xt(s, o, l[1], l[2], l[3], l[4], l[5], l[6], n - p)).start.x, u.start.y, u.m.x, u.m.y, u.x, u.y], a) return c;
                          f.start = c, c = ["M" + u.x, u.y + "C" + u.n.x, u.n.y, u.end.x, u.end.y, l[5], l[6]].join(), p += h, s = +l[5], o = +l[6];
                          continue;
                        }

                        if (!t && !r) return {
                          x: (u = Xt(s, o, l[1], l[2], l[3], l[4], l[5], l[6], n - p)).x,
                          y: u.y,
                          alpha: u.alpha
                        };
                      }

                      p += h, s = +l[5], o = +l[6];
                    }
                    c += l.shift() + l;
                  }

                  return f.end = c, (u = t ? p : r ? f : e.findDotsAtSegment(s, o, l[0], l[1], l[2], l[3], l[4], l[5], 1)).alpha && (u = {
                    x: u.x,
                    y: u.y,
                    alpha: u.alpha
                  }), u;
                };
              },
                  $t = Ut(1),
                  Zt = Ut(),
                  Qt = Ut(0, 1);

              e.getTotalLength = $t, e.getPointAtLength = Zt, e.getSubpath = function (t, e, r) {
                if (this.getTotalLength(t) - r < 1e-6) return Qt(t, e).end;
                var i = Qt(t, r, 1);
                return e ? Qt(i, e).end : i;
              }, Wt.getTotalLength = function () {
                var t = this.getPath();
                if (t) return this.node.getTotalLength ? this.node.getTotalLength() : $t(t);
              }, Wt.getPointAtLength = function (t) {
                var e = this.getPath();
                if (e) return Zt(e, t);
              }, Wt.getPath = function () {
                var t,
                    r = e._getPath[this.type];
                if ("text" != this.type && "set" != this.type) return r && (t = r(this)), t;
              }, Wt.getSubpath = function (t, r) {
                var i = this.getPath();
                if (i) return e.getSubpath(i, t, r);
              };
              var Jt = e.easing_formulas = {
                linear: function linear(t) {
                  return t;
                },
                "<": function _(t) {
                  return C(t, 1.7);
                },
                ">": function _(t) {
                  return C(t, .48);
                },
                "<>": function _(t) {
                  var e = .48 - t / 1.04,
                      r = _2.sqrt(.1734 + e * e),
                      i = r - e,
                      n = -r - e,
                      a = C(B(i), 1 / 3) * (i < 0 ? -1 : 1) + C(B(n), 1 / 3) * (n < 0 ? -1 : 1) + .5;

                  return 3 * (1 - a) * a * a + a * a * a;
                },
                backIn: function backIn(t) {
                  var e = 1.70158;
                  return t * t * ((e + 1) * t - e);
                },
                backOut: function backOut(t) {
                  var e = 1.70158;
                  return (t -= 1) * t * ((e + 1) * t + e) + 1;
                },
                elastic: function elastic(t) {
                  return t == !!t ? t : C(2, -10 * t) * _2.sin(2 * S * (t - .075) / .3) + 1;
                },
                bounce: function bounce(t) {
                  var e = 7.5625,
                      r = 2.75;
                  return t < 1 / r ? e * t * t : t < 2 / r ? e * (t -= 1.5 / r) * t + .75 : t < 2.5 / r ? e * (t -= 2.25 / r) * t + .9375 : e * (t -= 2.625 / r) * t + .984375;
                }
              };
              Jt.easeIn = Jt["ease-in"] = Jt["<"], Jt.easeOut = Jt["ease-out"] = Jt[">"], Jt.easeInOut = Jt["ease-in-out"] = Jt["<>"], Jt["back-in"] = Jt.backIn, Jt["back-out"] = Jt.backOut;

              var Kt = [],
                  te = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                setTimeout(t, 16);
              },
                  ee = function ee() {
                for (var r = +new Date(), i = 0; i < Kt.length; i++) {
                  var n = Kt[i];

                  if (!n.el.removed && !n.paused) {
                    var a,
                        s,
                        l = r - n.start,
                        h = n.ms,
                        u = n.easing,
                        c = n.from,
                        p = n.diff,
                        d = n.to,
                        x = (n.t, n.el),
                        v = {},
                        y = {};
                    if (n.initstatus ? (l = (n.initstatus * n.anim.top - n.prev) / (n.percent - n.prev) * h, n.status = n.initstatus, delete n.initstatus, n.stop && Kt.splice(i--, 1)) : n.status = (n.prev + (n.percent - n.prev) * (l / h)) / n.anim.top, !(l < 0)) if (l < h) {
                      var m = u(l / h);

                      for (var b in c) {
                        if (c[o](b)) {
                          switch (I[b]) {
                            case T:
                              a = +c[b] + m * h * p[b];
                              break;

                            case "colour":
                              a = "rgb(" + [re(P(c[b].r + m * h * p[b].r)), re(P(c[b].g + m * h * p[b].g)), re(P(c[b].b + m * h * p[b].b))].join(",") + ")";
                              break;

                            case "path":
                              a = [];

                              for (var _ = 0, w = c[b].length; _ < w; _++) {
                                a[_] = [c[b][_][0]];

                                for (var k = 1, B = c[b][_].length; k < B; k++) {
                                  a[_][k] = +c[b][_][k] + m * h * p[b][_][k];
                                }

                                a[_] = a[_].join(g);
                              }

                              a = a.join(g);
                              break;

                            case "transform":
                              if (p[b].real) for (a = [], _ = 0, w = c[b].length; _ < w; _++) {
                                for (a[_] = [c[b][_][0]], k = 1, B = c[b][_].length; k < B; k++) {
                                  a[_][k] = c[b][_][k] + m * h * p[b][_][k];
                                }
                              } else {
                                var C = function C(t) {
                                  return +c[b][t] + m * h * p[b][t];
                                };

                                a = [["m", C(0), C(1), C(2), C(3), C(4), C(5)]];
                              }
                              break;

                            case "csv":
                              if ("clip-rect" == b) for (a = [], _ = 4; _--;) {
                                a[_] = +c[b][_] + m * h * p[b][_];
                              }
                              break;

                            default:
                              var S = [][f](c[b]);

                              for (a = [], _ = x.paper.customAttributes[b].length; _--;) {
                                a[_] = +S[_] + m * h * p[b][_];
                              }

                          }

                          v[b] = a;
                        }
                      }

                      x.attr(v), function (e, r, i) {
                        setTimeout(function () {
                          t("raphael.anim.frame." + e, r, i);
                        });
                      }(x.id, x, n.anim);
                    } else {
                      if (function (r, i, n) {
                        setTimeout(function () {
                          t("raphael.anim.frame." + i.id, i, n), t("raphael.anim.finish." + i.id, i, n), e.is(r, "function") && r.call(i);
                        });
                      }(n.callback, x, n.anim), x.attr(d), Kt.splice(i--, 1), n.repeat > 1 && !n.next) {
                        for (s in d) {
                          d[o](s) && (y[s] = n.totalOrigin[s]);
                        }

                        n.el.attr(y), ae(n.anim, n.el, n.anim.percents[0], null, n.totalOrigin, n.repeat - 1);
                      }

                      n.next && !n.stop && ae(n.anim, n.el, n.next, null, n.totalOrigin, n.repeat);
                    }
                  }
                }

                Kt.length && te(ee);
              },
                  re = function re(t) {
                return t > 255 ? 255 : t < 0 ? 0 : t;
              };

              function ie(t, e, r, i, n, a) {
                var s = 3 * e,
                    o = 3 * (i - e) - s,
                    l = 1 - s - o,
                    h = 3 * r,
                    u = 3 * (n - r) - h,
                    c = 1 - h - u;

                function f(t) {
                  return ((l * t + o) * t + s) * t;
                }

                return function (t, e) {
                  var r = function (t, e) {
                    var r, i, n, a, h, u;

                    for (n = t, u = 0; u < 8; u++) {
                      if (a = f(n) - t, B(a) < e) return n;
                      if (B(h = (3 * l * n + 2 * o) * n + s) < 1e-6) break;
                      n -= a / h;
                    }

                    if (i = 1, (n = t) < (r = 0)) return r;
                    if (n > i) return i;

                    for (; r < i;) {
                      if (a = f(n), B(a - t) < e) return n;
                      t > a ? r = n : i = n, n = (i - r) / 2 + r;
                    }

                    return n;
                  }(t, e);

                  return ((c * r + u) * r + h) * r;
                }(t, 1 / (200 * a));
              }

              function ne(t, e) {
                var r = [],
                    i = {};

                if (this.ms = e, this.times = 1, t) {
                  for (var n in t) {
                    t[o](n) && (i[z(n)] = t[n], r.push(z(n)));
                  }

                  r.sort(H);
                }

                this.anim = i, this.top = r[r.length - 1], this.percents = r;
              }

              function ae(r, i, a, s, l, h) {
                a = z(a);
                var u,
                    c,
                    p,
                    d,
                    g,
                    y,
                    m = r.ms,
                    b = {},
                    _ = {},
                    w = {};
                if (s) for (B = 0, C = Kt.length; B < C; B++) {
                  var k = Kt[B];

                  if (k.el.id == i.id && k.anim == r) {
                    k.percent != a ? (Kt.splice(B, 1), p = 1) : c = k, i.attr(k.totalOrigin);
                    break;
                  }
                } else s = +_;

                for (var B = 0, C = r.percents.length; B < C; B++) {
                  if (r.percents[B] == a || r.percents[B] > s * r.top) {
                    a = r.percents[B], g = r.percents[B - 1] || 0, m = m / r.top * (a - g), d = r.percents[B + 1], u = r.anim[a];
                    break;
                  }

                  s && i.attr(r.anim[r.percents[B]]);
                }

                if (u) {
                  if (c) c.initstatus = s, c.start = new Date() - c.ms * s;else {
                    for (var S in u) {
                      if (u[o](S) && (I[o](S) || i.paper.customAttributes[o](S))) switch (b[S] = i.attr(S), null == b[S] && (b[S] = j[S]), _[S] = u[S], I[S]) {
                        case T:
                          w[S] = (_[S] - b[S]) / m;
                          break;

                        case "colour":
                          b[S] = e.getRGB(b[S]);
                          var A = e.getRGB(_[S]);
                          w[S] = {
                            r: (A.r - b[S].r) / m,
                            g: (A.g - b[S].g) / m,
                            b: (A.b - b[S].b) / m
                          };
                          break;

                        case "path":
                          var M = Tt(b[S], _[S]),
                              E = M[1];

                          for (b[S] = M[0], w[S] = [], B = 0, C = b[S].length; B < C; B++) {
                            w[S][B] = [0];

                            for (var N = 1, P = b[S][B].length; N < P; N++) {
                              w[S][B][N] = (E[B][N] - b[S][B][N]) / m;
                            }
                          }

                          break;

                        case "transform":
                          var F = i._,
                              R = Lt(F[S], _[S]);
                          if (R) for (b[S] = R.from, _[S] = R.to, w[S] = [], w[S].real = !0, B = 0, C = b[S].length; B < C; B++) {
                            for (w[S][B] = [b[S][B][0]], N = 1, P = b[S][B].length; N < P; N++) {
                              w[S][B][N] = (_[S][B][N] - b[S][B][N]) / m;
                            }
                          } else {
                            var D = i.matrix || new Pt(),
                                q = {
                              _: {
                                transform: F.transform
                              },
                              getBBox: function getBBox() {
                                return i.getBBox(1);
                              }
                            };
                            b[S] = [D.a, D.b, D.c, D.d, D.e, D.f], Et(q, _[S]), _[S] = q._.transform, w[S] = [(q.matrix.a - D.a) / m, (q.matrix.b - D.b) / m, (q.matrix.c - D.c) / m, (q.matrix.d - D.d) / m, (q.matrix.e - D.e) / m, (q.matrix.f - D.f) / m];
                          }
                          break;

                        case "csv":
                          var O = x(u[S])[v](n),
                              V = x(b[S])[v](n);
                          if ("clip-rect" == S) for (b[S] = V, w[S] = [], B = V.length; B--;) {
                            w[S][B] = (O[B] - b[S][B]) / m;
                          }
                          _[S] = O;
                          break;

                        default:
                          for (O = [][f](u[S]), V = [][f](b[S]), w[S] = [], B = i.paper.customAttributes[S].length; B--;) {
                            w[S][B] = ((O[B] || 0) - (V[B] || 0)) / m;
                          }

                      }
                    }

                    var W = u.easing,
                        Y = e.easing_formulas[W];
                    if (!Y) if ((Y = x(W).match(L)) && 5 == Y.length) {
                      var G = Y;

                      Y = function Y(t) {
                        return ie(t, +G[1], +G[2], +G[3], +G[4], m);
                      };
                    } else Y = X;
                    if (k = {
                      anim: r,
                      percent: a,
                      timestamp: y = u.start || r.start || +new Date(),
                      start: y + (r.del || 0),
                      status: 0,
                      initstatus: s || 0,
                      stop: !1,
                      ms: m,
                      easing: Y,
                      from: b,
                      diff: w,
                      to: _,
                      el: i,
                      callback: u.callback,
                      prev: g,
                      next: d,
                      repeat: h || r.times,
                      origin: i.attr(),
                      totalOrigin: l
                    }, Kt.push(k), s && !c && !p && (k.stop = !0, k.start = new Date() - m * s, 1 == Kt.length)) return ee();
                    p && (k.start = new Date() - k.ms * s), 1 == Kt.length && te(ee);
                  }
                  t("raphael.anim.start." + i.id, i, r);
                }
              }

              function se(t) {
                for (var e = 0; e < Kt.length; e++) {
                  Kt[e].el.paper == t && Kt.splice(e--, 1);
                }
              }

              Wt.animateWith = function (t, r, i, n, a, s) {
                if (this.removed) return s && s.call(this), this;
                var o = i instanceof ne ? i : e.animation(i, n, a, s);
                ae(o, this, o.percents[0], null, this.attr());

                for (var l = 0, h = Kt.length; l < h; l++) {
                  if (Kt[l].anim == r && Kt[l].el == t) {
                    Kt[h - 1].start = Kt[l].start;
                    break;
                  }
                }

                return this;
              }, Wt.onAnimation = function (e) {
                return e ? t.on("raphael.anim.frame." + this.id, e) : t.unbind("raphael.anim.frame." + this.id), this;
              }, ne.prototype.delay = function (t) {
                var e = new ne(this.anim, this.ms);
                return e.times = this.times, e.del = +t || 0, e;
              }, ne.prototype.repeat = function (t) {
                var e = new ne(this.anim, this.ms);
                return e.del = this.del, e.times = _2.floor(w(t, 0)) || 1, e;
              }, e.animation = function (t, r, i, n) {
                if (t instanceof ne) return t;
                !e.is(i, "function") && i || (n = n || i || null, i = null), t = Object(t), r = +r || 0;
                var a,
                    s,
                    l = {};

                for (s in t) {
                  t[o](s) && z(s) != s && z(s) + "%" != s && (a = !0, l[s] = t[s]);
                }

                if (a) return i && (l.easing = i), n && (l.callback = n), new ne({
                  100: l
                }, r);

                if (n) {
                  var h = 0;

                  for (var u in t) {
                    var c = F(u);
                    t[o](u) && c > h && (h = c);
                  }

                  !t[h += "%"].callback && (t[h].callback = n);
                }

                return new ne(t, r);
              }, Wt.animate = function (t, r, i, n) {
                if (this.removed) return n && n.call(this), this;
                var a = t instanceof ne ? t : e.animation(t, r, i, n);
                return ae(a, this, a.percents[0], null, this.attr()), this;
              }, Wt.setTime = function (t, e) {
                return t && null != e && this.status(t, k(e, t.ms) / t.ms), this;
              }, Wt.status = function (t, e) {
                var r,
                    i,
                    n = [],
                    a = 0;
                if (null != e) return ae(t, this, -1, k(e, 1)), this;

                for (r = Kt.length; a < r; a++) {
                  if ((i = Kt[a]).el.id == this.id && (!t || i.anim == t)) {
                    if (t) return i.status;
                    n.push({
                      anim: i.anim,
                      status: i.status
                    });
                  }
                }

                return t ? 0 : n;
              }, Wt.pause = function (e) {
                for (var r = 0; r < Kt.length; r++) {
                  Kt[r].el.id != this.id || e && Kt[r].anim != e || !1 !== t("raphael.anim.pause." + this.id, this, Kt[r].anim) && (Kt[r].paused = !0);
                }

                return this;
              }, Wt.resume = function (e) {
                for (var r = 0; r < Kt.length; r++) {
                  if (Kt[r].el.id == this.id && (!e || Kt[r].anim == e)) {
                    var i = Kt[r];
                    !1 !== t("raphael.anim.resume." + this.id, this, i.anim) && (delete i.paused, this.status(i.anim, i.status));
                  }
                }

                return this;
              }, Wt.stop = function (e) {
                for (var r = 0; r < Kt.length; r++) {
                  Kt[r].el.id != this.id || e && Kt[r].anim != e || !1 !== t("raphael.anim.stop." + this.id, this, Kt[r].anim) && Kt.splice(r--, 1);
                }

                return this;
              }, t.on("raphael.remove", se), t.on("raphael.clear", se), Wt.toString = function () {
                return "Raphaël’s object";
              };

              var oe,
                  le,
                  he = function he(t) {
                if (this.items = [], this.length = 0, this.type = "set", t) for (var e = 0, r = t.length; e < r; e++) {
                  !t[e] || t[e].constructor != Wt.constructor && t[e].constructor != he || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++);
                }
              },
                  ue = he.prototype;

              for (var ce in ue.push = function () {
                for (var t, e, r = 0, i = arguments.length; r < i; r++) {
                  !(t = arguments[r]) || t.constructor != Wt.constructor && t.constructor != he || (this[e = this.items.length] = this.items[e] = t, this.length++);
                }

                return this;
              }, ue.pop = function () {
                return this.length && delete this[this.length--], this.items.pop();
              }, ue.forEach = function (t, e) {
                for (var r = 0, i = this.items.length; r < i; r++) {
                  if (!1 === t.call(e, this.items[r], r)) return this;
                }

                return this;
              }, Wt) {
                Wt[o](ce) && (ue[ce] = function (t) {
                  return function () {
                    var e = arguments;
                    return this.forEach(function (r) {
                      r[t][c](r, e);
                    });
                  };
                }(ce));
              }

              return ue.attr = function (t, r) {
                if (t && e.is(t, A) && e.is(t[0], "object")) for (var i = 0, n = t.length; i < n; i++) {
                  this.items[i].attr(t[i]);
                } else for (var a = 0, s = this.items.length; a < s; a++) {
                  this.items[a].attr(t, r);
                }
                return this;
              }, ue.clear = function () {
                for (; this.length;) {
                  this.pop();
                }
              }, ue.splice = function (t, e, r) {
                t = t < 0 ? w(this.length + t, 0) : t, e = w(0, k(this.length - t, e));
                var i,
                    n = [],
                    a = [],
                    s = [];

                for (i = 2; i < arguments.length; i++) {
                  s.push(arguments[i]);
                }

                for (i = 0; i < e; i++) {
                  a.push(this[t + i]);
                }

                for (; i < this.length - t; i++) {
                  n.push(this[t + i]);
                }

                var o = s.length;

                for (i = 0; i < o + n.length; i++) {
                  this.items[t + i] = this[t + i] = i < o ? s[i] : n[i - o];
                }

                for (i = this.items.length = this.length -= e - o; this[i];) {
                  delete this[i++];
                }

                return new he(a);
              }, ue.exclude = function (t) {
                for (var e = 0, r = this.length; e < r; e++) {
                  if (this[e] == t) return this.splice(e, 1), !0;
                }
              }, ue.animate = function (t, r, i, n) {
                (e.is(i, "function") || !i) && (n = i || null);
                var a,
                    s,
                    o = this.items.length,
                    l = o,
                    h = this;
                if (!o) return this;
                n && (s = function s() {
                  ! --o && n.call(h);
                }), i = e.is(i, "string") ? i : s;
                var u = e.animation(t, r, i, s);

                for (a = this.items[--l].animate(u); l--;) {
                  this.items[l] && !this.items[l].removed && this.items[l].animateWith(a, u, u), this.items[l] && !this.items[l].removed || o--;
                }

                return this;
              }, ue.insertAfter = function (t) {
                for (var e = this.items.length; e--;) {
                  this.items[e].insertAfter(t);
                }

                return this;
              }, ue.getBBox = function () {
                for (var t = [], e = [], r = [], i = [], n = this.items.length; n--;) {
                  if (!this.items[n].removed) {
                    var a = this.items[n].getBBox();
                    t.push(a.x), e.push(a.y), r.push(a.x + a.width), i.push(a.y + a.height);
                  }
                }

                return {
                  x: t = k[c](0, t),
                  y: e = k[c](0, e),
                  x2: r = w[c](0, r),
                  y2: i = w[c](0, i),
                  width: r - t,
                  height: i - e
                };
              }, ue.clone = function (t) {
                t = this.paper.set();

                for (var e = 0, r = this.items.length; e < r; e++) {
                  t.push(this.items[e].clone());
                }

                return t;
              }, ue.toString = function () {
                return "Raphaël‘s set";
              }, ue.glow = function (t) {
                var e = this.paper.set();
                return this.forEach(function (r, i) {
                  var n = r.glow(t);
                  null != n && n.forEach(function (t, r) {
                    e.push(t);
                  });
                }), e;
              }, ue.isPointInside = function (t, e) {
                var r = !1;
                return this.forEach(function (i) {
                  if (i.isPointInside(t, e)) return r = !0, !1;
                }), r;
              }, e.registerFont = function (t) {
                if (!t.face) return t;
                this.fonts = this.fonts || {};
                var e = {
                  w: t.w,
                  face: {},
                  glyphs: {}
                },
                    r = t.face["font-family"];

                for (var i in t.face) {
                  t.face[o](i) && (e.face[i] = t.face[i]);
                }

                if (this.fonts[r] ? this.fonts[r].push(e) : this.fonts[r] = [e], !t.svg) for (var n in e.face["units-per-em"] = F(t.face["units-per-em"], 10), t.glyphs) {
                  if (t.glyphs[o](n)) {
                    var a = t.glyphs[n];
                    if (e.glyphs[n] = {
                      w: a.w,
                      k: {},
                      d: a.d && "M" + a.d.replace(/[mlcxtrv]/g, function (t) {
                        return {
                          l: "L",
                          c: "C",
                          x: "z",
                          t: "m",
                          r: "l",
                          v: "c"
                        }[t] || "M";
                      }) + "z"
                    }, a.k) for (var s in a.k) {
                      a[o](s) && (e.glyphs[n].k[s] = a.k[s]);
                    }
                  }
                }
                return t;
              }, i.getFont = function (t, r, i, n) {
                if (n = n || "normal", i = i || "normal", r = +r || {
                  normal: 400,
                  bold: 700,
                  lighter: 300,
                  bolder: 800
                }[r] || 400, e.fonts) {
                  var a,
                      s = e.fonts[t];

                  if (!s) {
                    var l = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, d) + "(\\s|$)", "i");

                    for (var h in e.fonts) {
                      if (e.fonts[o](h) && l.test(h)) {
                        s = e.fonts[h];
                        break;
                      }
                    }
                  }

                  if (s) for (var u = 0, c = s.length; u < c && ((a = s[u]).face["font-weight"] != r || a.face["font-style"] != i && a.face["font-style"] || a.face["font-stretch"] != n); u++) {
                    ;
                  }
                  return a;
                }
              }, i.print = function (t, r, i, a, s, o, l, h) {
                o = o || "middle", l = w(k(l || 0, 1), -1), h = w(k(h || 1, 3), 1);
                var u,
                    c = x(i)[v](d),
                    f = 0,
                    p = 0,
                    g = d;

                if (e.is(a, "string") && (a = this.getFont(a)), a) {
                  u = (s || 16) / a.face["units-per-em"];

                  for (var y = a.face.bbox[v](n), m = +y[0], b = y[3] - y[1], _ = 0, B = +y[1] + ("baseline" == o ? b + +a.face.descent : b / 2), C = 0, S = c.length; C < S; C++) {
                    if ("\n" == c[C]) f = 0, A = 0, p = 0, _ += b * h;else {
                      var T = p && a.glyphs[c[C - 1]] || {},
                          A = a.glyphs[c[C]];
                      f += p ? (T.w || a.w) + (T.k && T.k[c[C]] || 0) + a.w * l : 0, p = 1;
                    }
                    A && A.d && (g += e.transformPath(A.d, ["t", f * u, _ * u, "s", u, u, m, B, "t", (t - m) / u, (r - B) / u]));
                  }
                }

                return this.path(g).attr({
                  fill: "#000",
                  stroke: "none"
                });
              }, i.add = function (t) {
                if (e.is(t, "array")) for (var r, i = this.set(), n = 0, s = t.length; n < s; n++) {
                  r = t[n] || {}, a[o](r.type) && i.push(this[r.type]().attr(r));
                }
                return i;
              }, e.format = function (t, r) {
                var i = e.is(r, A) ? [0][f](r) : arguments;
                return t && e.is(t, "string") && i.length - 1 && (t = t.replace(s, function (t, e) {
                  return null == i[++e] ? d : i[e];
                })), t || d;
              }, e.fullfill = (oe = /\{([^\}]+)\}/g, le = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function (t, e) {
                return String(t).replace(oe, function (t, r) {
                  return function (t, e, r) {
                    var i = r;
                    return e.replace(le, function (t, e, r, n, a) {
                      e = e || n, i && (e in i && (i = i[e]), "function" == typeof i && a && (i = i()));
                    }), i = (null == i || i == r ? t : i) + "";
                  }(t, r, e);
                });
              }), e.ninja = function () {
                if (h.was) l.win.Raphael = h.is;else {
                  window.Raphael = void 0;

                  try {
                    delete window.Raphael;
                  } catch (t) {}
                }
                return e;
              }, e.st = ue, t.on("raphael.DOMload", function () {
                r = !0;
              }), function (t, r, _i12) {
                null == t.readyState && t.addEventListener && (t.addEventListener("DOMContentLoaded", _i12 = function i() {
                  t.removeEventListener("DOMContentLoaded", _i12, !1), t.readyState = "complete";
                }, !1), t.readyState = "loading"), function r() {
                  /in/.test(t.readyState) ? setTimeout(r, 9) : e.eve("raphael.DOMload");
                }();
              }(document), e;
            }.apply(e, i)) || (t.exports = n);
          }, function (t, e, r) {
            var i, n;
            i = [r(0), r(3), r(4)], void 0 === (n = function (t) {
              return t;
            }.apply(e, i)) || (t.exports = n);
          }, function (t, e, r) {
            var i, n, a, s, o, l, h, u, c, f, p, d, g, _x3;

            s = "hasOwnProperty", o = /[\.\/]/, l = /\s*,\s*/, h = function h(t, e) {
              return t - e;
            }, u = {
              n: {}
            }, c = function c() {
              for (var t = 0, e = this.length; t < e; t++) {
                if (void 0 !== this[t]) return this[t];
              }
            }, f = function f() {
              for (var t = this.length; --t;) {
                if (void 0 !== this[t]) return this[t];
              }
            }, p = Object.prototype.toString, d = String, g = Array.isArray || function (t) {
              return t instanceof Array || "[object Array]" == p.call(t);
            }, (_x3 = function x(t, e) {
              var r,
                  i = a,
                  s = Array.prototype.slice.call(arguments, 2),
                  o = _x3.listeners(t),
                  l = 0,
                  u = [],
                  p = {},
                  d = [],
                  g = n;

              d.firstDefined = c, d.lastDefined = f, n = t, a = 0;

              for (var v = 0, y = o.length; v < y; v++) {
                "zIndex" in o[v] && (u.push(o[v].zIndex), o[v].zIndex < 0 && (p[o[v].zIndex] = o[v]));
              }

              for (u.sort(h); u[l] < 0;) {
                if (r = p[u[l++]], d.push(r.apply(e, s)), a) return a = i, d;
              }

              for (v = 0; v < y; v++) {
                if ("zIndex" in (r = o[v])) {
                  if (r.zIndex == u[l]) {
                    if (d.push(r.apply(e, s)), a) break;

                    do {
                      if ((r = p[u[++l]]) && d.push(r.apply(e, s)), a) break;
                    } while (r);
                  } else p[r.zIndex] = r;
                } else if (d.push(r.apply(e, s)), a) break;
              }

              return a = i, n = g, d;
            })._events = u, _x3.listeners = function (t) {
              var e,
                  r,
                  i,
                  n,
                  a,
                  s,
                  l,
                  h,
                  c = g(t) ? t : t.split(o),
                  f = u,
                  p = [f],
                  d = [];

              for (n = 0, a = c.length; n < a; n++) {
                for (h = [], s = 0, l = p.length; s < l; s++) {
                  for (r = [(f = p[s].n)[c[n]], f["*"]], i = 2; i--;) {
                    (e = r[i]) && (h.push(e), d = d.concat(e.f || []));
                  }
                }

                p = h;
              }

              return d;
            }, _x3.separator = function (t) {
              t ? (t = "[" + (t = d(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", o = new RegExp(t)) : o = /[\.\/]/;
            }, _x3.on = function (t, e) {
              if ("function" != typeof e) return function () {};

              for (var r = g(t) ? g(t[0]) ? t : [t] : d(t).split(l), i = 0, n = r.length; i < n; i++) {
                !function (t) {
                  for (var r, i = g(t) ? t : d(t).split(o), n = u, a = 0, s = i.length; a < s; a++) {
                    n = (n = n.n).hasOwnProperty(i[a]) && n[i[a]] || (n[i[a]] = {
                      n: {}
                    });
                  }

                  for (n.f = n.f || [], a = 0, s = n.f.length; a < s; a++) {
                    if (n.f[a] == e) {
                      r = !0;
                      break;
                    }
                  }

                  !r && n.f.push(e);
                }(r[i]);
              }

              return function (t) {
                +t == +t && (e.zIndex = +t);
              };
            }, _x3.f = function (t) {
              var e = [].slice.call(arguments, 1);
              return function () {
                _x3.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)));
              };
            }, _x3.stop = function () {
              a = 1;
            }, _x3.nt = function (t) {
              var e = g(n) ? n.join(".") : n;
              return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e;
            }, _x3.nts = function () {
              return g(n) ? n : n.split(o);
            }, _x3.off = _x3.unbind = function (t, e) {
              if (t) {
                var r = g(t) ? g(t[0]) ? t : [t] : d(t).split(l);
                if (r.length > 1) for (var i = 0, n = r.length; i < n; i++) {
                  _x3.off(r[i], e);
                } else {
                  r = g(t) ? t : d(t).split(o);
                  var a,
                      h,
                      c,
                      f,
                      p,
                      v = [u];

                  for (i = 0, n = r.length; i < n; i++) {
                    for (f = 0; f < v.length; f += c.length - 2) {
                      if (c = [f, 1], a = v[f].n, "*" != r[i]) a[r[i]] && c.push(a[r[i]]);else for (h in a) {
                        a[s](h) && c.push(a[h]);
                      }
                      v.splice.apply(v, c);
                    }
                  }

                  for (i = 0, n = v.length; i < n; i++) {
                    for (a = v[i]; a.n;) {
                      if (e) {
                        if (a.f) {
                          for (f = 0, p = a.f.length; f < p; f++) {
                            if (a.f[f] == e) {
                              a.f.splice(f, 1);
                              break;
                            }
                          }

                          !a.f.length && delete a.f;
                        }

                        for (h in a.n) {
                          if (a.n[s](h) && a.n[h].f) {
                            var y = a.n[h].f;

                            for (f = 0, p = y.length; f < p; f++) {
                              if (y[f] == e) {
                                y.splice(f, 1);
                                break;
                              }
                            }

                            !y.length && delete a.n[h].f;
                          }
                        }
                      } else for (h in delete a.f, a.n) {
                        a.n[s](h) && a.n[h].f && delete a.n[h].f;
                      }

                      a = a.n;
                    }
                  }
                }
              } else _x3._events = u = {
                n: {}
              };
            }, _x3.once = function (t, e) {
              var r = function r() {
                return _x3.off(t, r), e.apply(this, arguments);
              };

              return _x3.on(t, r);
            }, _x3.version = "0.5.0", _x3.toString = function () {
              return "You are running Eve 0.5.0";
            }, t.exports ? t.exports = _x3 : void 0 === (i = function () {
              return _x3;
            }.apply(e, [])) || (t.exports = i);
          }, function (t, e, r) {
            var i, n;
            i = [r(0)], void 0 === (n = function (t) {
              if (!t || t.svg) {
                var e = "hasOwnProperty",
                    r = String,
                    i = parseFloat,
                    n = parseInt,
                    a = Math,
                    s = a.max,
                    o = a.abs,
                    l = a.pow,
                    h = /[, ]+/,
                    u = t.eve,
                    c = "",
                    f = " ",
                    p = "http://www.w3.org/1999/xlink",
                    d = {
                  block: "M5,0 0,2.5 5,5z",
                  classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                  diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                  open: "M6,1 1,3.5 6,6",
                  oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                },
                    g = {};

                t.toString = function () {
                  return "Your browser supports SVG.\nYou are running Raphaël " + this.version;
                };

                var x = function x(i, n) {
                  if (n) for (var a in "string" == typeof i && (i = x(i)), n) {
                    n[e](a) && ("xlink:" == a.substring(0, 6) ? i.setAttributeNS(p, a.substring(6), r(n[a])) : i.setAttribute(a, r(n[a])));
                  } else (i = t._g.doc.createElementNS("http://www.w3.org/2000/svg", i)).style && (i.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                  return i;
                },
                    v = function v(e, n) {
                  var h = "linear",
                      u = e.id + n,
                      f = .5,
                      p = .5,
                      d = e.node,
                      g = e.paper,
                      v = d.style,
                      m = t._g.doc.getElementById(u);

                  if (!m) {
                    if (n = (n = r(n).replace(t._radial_gradient, function (t, e, r) {
                      if (h = "radial", e && r) {
                        f = i(e);
                        var n = 2 * ((p = i(r)) > .5) - 1;
                        l(f - .5, 2) + l(p - .5, 2) > .25 && (p = a.sqrt(.25 - l(f - .5, 2)) * n + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * n);
                      }

                      return c;
                    })).split(/\s*\-\s*/), "linear" == h) {
                      var b = n.shift();
                      if (b = -i(b), isNaN(b)) return null;
                      var _ = [0, 0, a.cos(t.rad(b)), a.sin(t.rad(b))],
                          w = 1 / (s(o(_[2]), o(_[3])) || 1);
                      _[2] *= w, _[3] *= w, _[2] < 0 && (_[0] = -_[2], _[2] = 0), _[3] < 0 && (_[1] = -_[3], _[3] = 0);
                    }

                    var k = t._parseDots(n);

                    if (!k) return null;

                    if (u = u.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && u != e.gradient.id && (g.defs.removeChild(e.gradient), delete e.gradient), !e.gradient) {
                      m = x(h + "Gradient", {
                        id: u
                      }), e.gradient = m, x(m, "radial" == h ? {
                        fx: f,
                        fy: p
                      } : {
                        x1: _[0],
                        y1: _[1],
                        x2: _[2],
                        y2: _[3],
                        gradientTransform: e.matrix.invert()
                      }), g.defs.appendChild(m);

                      for (var B = 0, C = k.length; B < C; B++) {
                        m.appendChild(x("stop", {
                          offset: k[B].offset ? k[B].offset : B ? "100%" : "0%",
                          "stop-color": k[B].color || "#fff",
                          "stop-opacity": isFinite(k[B].opacity) ? k[B].opacity : 1
                        }));
                      }
                    }
                  }

                  return x(d, {
                    fill: y(u),
                    opacity: 1,
                    "fill-opacity": 1
                  }), v.fill = c, v.opacity = 1, v.fillOpacity = 1, 1;
                },
                    y = function y(t) {
                  if ((e = document.documentMode) && (9 === e || 10 === e)) return "url('#" + t + "')";
                  var e,
                      r = document.location;
                  return "url('" + (r.protocol + "//" + r.host + r.pathname + r.search) + "#" + t + "')";
                },
                    m = function m(t) {
                  var e = t.getBBox(1);
                  x(t.pattern, {
                    patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
                  });
                },
                    b = function b(i, n, a) {
                  if ("path" == i.type) {
                    for (var s, o, l, h, u, f = r(n).toLowerCase().split("-"), p = i.paper, v = a ? "end" : "start", y = i.node, m = i.attrs, b = m["stroke-width"], _ = f.length, w = "classic", k = 3, B = 3, C = 5; _--;) {
                      switch (f[_]) {
                        case "block":
                        case "classic":
                        case "oval":
                        case "diamond":
                        case "open":
                        case "none":
                          w = f[_];
                          break;

                        case "wide":
                          B = 5;
                          break;

                        case "narrow":
                          B = 2;
                          break;

                        case "long":
                          k = 5;
                          break;

                        case "short":
                          k = 2;
                      }
                    }

                    if ("open" == w ? (k += 2, B += 2, C += 2, l = 1, h = a ? 4 : 1, u = {
                      fill: "none",
                      stroke: m.stroke
                    }) : (h = l = k / 2, u = {
                      fill: m.stroke,
                      stroke: "none"
                    }), i._.arrows ? a ? (i._.arrows.endPath && g[i._.arrows.endPath]--, i._.arrows.endMarker && g[i._.arrows.endMarker]--) : (i._.arrows.startPath && g[i._.arrows.startPath]--, i._.arrows.startMarker && g[i._.arrows.startMarker]--) : i._.arrows = {}, "none" != w) {
                      var S = "raphael-marker-" + w,
                          T = "raphael-marker-" + v + w + k + B + "-obj" + i.id;
                      t._g.doc.getElementById(S) ? g[S]++ : (p.defs.appendChild(x(x("path"), {
                        "stroke-linecap": "round",
                        d: d[w],
                        id: S
                      })), g[S] = 1);

                      var A,
                          M = t._g.doc.getElementById(T);

                      M ? (g[T]++, A = M.getElementsByTagName("use")[0]) : (M = x(x("marker"), {
                        id: T,
                        markerHeight: B,
                        markerWidth: k,
                        orient: "auto",
                        refX: h,
                        refY: B / 2
                      }), A = x(x("use"), {
                        "xlink:href": "#" + S,
                        transform: (a ? "rotate(180 " + k / 2 + " " + B / 2 + ") " : c) + "scale(" + k / C + "," + B / C + ")",
                        "stroke-width": (1 / ((k / C + B / C) / 2)).toFixed(4)
                      }), M.appendChild(A), p.defs.appendChild(M), g[T] = 1), x(A, u);
                      var E = l * ("diamond" != w && "oval" != w);
                      a ? (s = i._.arrows.startdx * b || 0, o = t.getTotalLength(m.path) - E * b) : (s = E * b, o = t.getTotalLength(m.path) - (i._.arrows.enddx * b || 0)), (u = {})["marker-" + v] = "url(#" + T + ")", (o || s) && (u.d = t.getSubpath(m.path, s, o)), x(y, u), i._.arrows[v + "Path"] = S, i._.arrows[v + "Marker"] = T, i._.arrows[v + "dx"] = E, i._.arrows[v + "Type"] = w, i._.arrows[v + "String"] = n;
                    } else a ? (s = i._.arrows.startdx * b || 0, o = t.getTotalLength(m.path) - s) : (s = 0, o = t.getTotalLength(m.path) - (i._.arrows.enddx * b || 0)), i._.arrows[v + "Path"] && x(y, {
                      d: t.getSubpath(m.path, s, o)
                    }), delete i._.arrows[v + "Path"], delete i._.arrows[v + "Marker"], delete i._.arrows[v + "dx"], delete i._.arrows[v + "Type"], delete i._.arrows[v + "String"];

                    for (u in g) {
                      if (g[e](u) && !g[u]) {
                        var N = t._g.doc.getElementById(u);

                        N && N.parentNode.removeChild(N);
                      }
                    }
                  }
                },
                    _ = {
                  "-": [3, 1],
                  ".": [1, 1],
                  "-.": [3, 1, 1, 1],
                  "-..": [3, 1, 1, 1, 1, 1],
                  ". ": [1, 3],
                  "- ": [4, 3],
                  "--": [8, 3],
                  "- .": [4, 3, 1, 3],
                  "--.": [8, 3, 1, 3],
                  "--..": [8, 3, 1, 3, 1, 3]
                },
                    w = function w(t, e, i) {
                  if (e = _[r(e).toLowerCase()]) {
                    for (var n = t.attrs["stroke-width"] || "1", a = {
                      round: n,
                      square: n,
                      butt: 0
                    }[t.attrs["stroke-linecap"] || i["stroke-linecap"]] || 0, s = [], o = e.length; o--;) {
                      s[o] = e[o] * n + (o % 2 ? 1 : -1) * a;
                    }

                    x(t.node, {
                      "stroke-dasharray": s.join(",")
                    });
                  } else x(t.node, {
                    "stroke-dasharray": "none"
                  });
                },
                    k = function k(i, a) {
                  var l = i.node,
                      u = i.attrs,
                      f = l.style.visibility;

                  for (var d in l.style.visibility = "hidden", a) {
                    if (a[e](d)) {
                      if (!t._availableAttrs[e](d)) continue;
                      var g = a[d];

                      switch (u[d] = g, d) {
                        case "blur":
                          i.blur(g);
                          break;

                        case "title":
                          var y = l.getElementsByTagName("title");
                          if (y.length && (y = y[0])) y.firstChild.nodeValue = g;else {
                            y = x("title");

                            var _ = t._g.doc.createTextNode(g);

                            y.appendChild(_), l.appendChild(y);
                          }
                          break;

                        case "href":
                        case "target":
                          var k = l.parentNode;

                          if ("a" != k.tagName.toLowerCase()) {
                            var C = x("a");
                            k.insertBefore(C, l), C.appendChild(l), k = C;
                          }

                          "target" == d ? k.setAttributeNS(p, "show", "blank" == g ? "new" : g) : k.setAttributeNS(p, d, g);
                          break;

                        case "cursor":
                          l.style.cursor = g;
                          break;

                        case "transform":
                          i.transform(g);
                          break;

                        case "arrow-start":
                          b(i, g);
                          break;

                        case "arrow-end":
                          b(i, g, 1);
                          break;

                        case "clip-rect":
                          var S = r(g).split(h);

                          if (4 == S.length) {
                            i.clip && i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);
                            var T = x("clipPath"),
                                A = x("rect");
                            T.id = t.createUUID(), x(A, {
                              x: S[0],
                              y: S[1],
                              width: S[2],
                              height: S[3]
                            }), T.appendChild(A), i.paper.defs.appendChild(T), x(l, {
                              "clip-path": "url(#" + T.id + ")"
                            }), i.clip = A;
                          }

                          if (!g) {
                            var M = l.getAttribute("clip-path");

                            if (M) {
                              var E = t._g.doc.getElementById(M.replace(/(^url\(#|\)$)/g, c));

                              E && E.parentNode.removeChild(E), x(l, {
                                "clip-path": c
                              }), delete i.clip;
                            }
                          }

                          break;

                        case "path":
                          "path" == i.type && (x(l, {
                            d: g ? u.path = t._pathToAbsolute(g) : "M0,0"
                          }), i._.dirty = 1, i._.arrows && ("startString" in i._.arrows && b(i, i._.arrows.startString), "endString" in i._.arrows && b(i, i._.arrows.endString, 1)));
                          break;

                        case "width":
                          if (l.setAttribute(d, g), i._.dirty = 1, !u.fx) break;
                          d = "x", g = u.x;

                        case "x":
                          u.fx && (g = -u.x - (u.width || 0));

                        case "rx":
                          if ("rx" == d && "rect" == i.type) break;

                        case "cx":
                          l.setAttribute(d, g), i.pattern && m(i), i._.dirty = 1;
                          break;

                        case "height":
                          if (l.setAttribute(d, g), i._.dirty = 1, !u.fy) break;
                          d = "y", g = u.y;

                        case "y":
                          u.fy && (g = -u.y - (u.height || 0));

                        case "ry":
                          if ("ry" == d && "rect" == i.type) break;

                        case "cy":
                          l.setAttribute(d, g), i.pattern && m(i), i._.dirty = 1;
                          break;

                        case "r":
                          "rect" == i.type ? x(l, {
                            rx: g,
                            ry: g
                          }) : l.setAttribute(d, g), i._.dirty = 1;
                          break;

                        case "src":
                          "image" == i.type && l.setAttributeNS(p, "href", g);
                          break;

                        case "stroke-width":
                          1 == i._.sx && 1 == i._.sy || (g /= s(o(i._.sx), o(i._.sy)) || 1), l.setAttribute(d, g), u["stroke-dasharray"] && w(i, u["stroke-dasharray"], a), i._.arrows && ("startString" in i._.arrows && b(i, i._.arrows.startString), "endString" in i._.arrows && b(i, i._.arrows.endString, 1));
                          break;

                        case "stroke-dasharray":
                          w(i, g, a);
                          break;

                        case "fill":
                          var N = r(g).match(t._ISURL);

                          if (N) {
                            T = x("pattern");
                            var L = x("image");
                            T.id = t.createUUID(), x(T, {
                              x: 0,
                              y: 0,
                              patternUnits: "userSpaceOnUse",
                              height: 1,
                              width: 1
                            }), x(L, {
                              x: 0,
                              y: 0,
                              "xlink:href": N[1]
                            }), T.appendChild(L), function (e) {
                              t._preload(N[1], function () {
                                var t = this.offsetWidth,
                                    r = this.offsetHeight;
                                x(e, {
                                  width: t,
                                  height: r
                                }), x(L, {
                                  width: t,
                                  height: r
                                });
                              });
                            }(T), i.paper.defs.appendChild(T), x(l, {
                              fill: "url(#" + T.id + ")"
                            }), i.pattern = T, i.pattern && m(i);
                            break;
                          }

                          var P = t.getRGB(g);

                          if (P.error) {
                            if (("circle" == i.type || "ellipse" == i.type || "r" != r(g).charAt()) && v(i, g)) {
                              if ("opacity" in u || "fill-opacity" in u) {
                                var z = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, c));

                                if (z) {
                                  var F = z.getElementsByTagName("stop");
                                  x(F[F.length - 1], {
                                    "stop-opacity": ("opacity" in u ? u.opacity : 1) * ("fill-opacity" in u ? u["fill-opacity"] : 1)
                                  });
                                }
                              }

                              u.gradient = g, u.fill = "none";
                              break;
                            }
                          } else delete a.gradient, delete u.gradient, !t.is(u.opacity, "undefined") && t.is(a.opacity, "undefined") && x(l, {
                            opacity: u.opacity
                          }), !t.is(u["fill-opacity"], "undefined") && t.is(a["fill-opacity"], "undefined") && x(l, {
                            "fill-opacity": u["fill-opacity"]
                          });

                          P[e]("opacity") && x(l, {
                            "fill-opacity": P.opacity > 1 ? P.opacity / 100 : P.opacity
                          });

                        case "stroke":
                          P = t.getRGB(g), l.setAttribute(d, P.hex), "stroke" == d && P[e]("opacity") && x(l, {
                            "stroke-opacity": P.opacity > 1 ? P.opacity / 100 : P.opacity
                          }), "stroke" == d && i._.arrows && ("startString" in i._.arrows && b(i, i._.arrows.startString), "endString" in i._.arrows && b(i, i._.arrows.endString, 1));
                          break;

                        case "gradient":
                          ("circle" == i.type || "ellipse" == i.type || "r" != r(g).charAt()) && v(i, g);
                          break;

                        case "opacity":
                          u.gradient && !u[e]("stroke-opacity") && x(l, {
                            "stroke-opacity": g > 1 ? g / 100 : g
                          });

                        case "fill-opacity":
                          if (u.gradient) {
                            (z = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, c))) && (F = z.getElementsByTagName("stop"), x(F[F.length - 1], {
                              "stop-opacity": g
                            }));
                            break;
                          }

                        default:
                          "font-size" == d && (g = n(g, 10) + "px");
                          var R = d.replace(/(\-.)/g, function (t) {
                            return t.substring(1).toUpperCase();
                          });
                          l.style[R] = g, i._.dirty = 1, l.setAttribute(d, g);
                      }
                    }
                  }

                  B(i, a), l.style.visibility = f;
                },
                    B = function B(i, a) {
                  if ("text" == i.type && (a[e]("text") || a[e]("font") || a[e]("font-size") || a[e]("x") || a[e]("y"))) {
                    var s = i.attrs,
                        o = i.node,
                        l = o.firstChild ? n(t._g.doc.defaultView.getComputedStyle(o.firstChild, c).getPropertyValue("font-size"), 10) : 10;

                    if (a[e]("text")) {
                      for (s.text = a.text; o.firstChild;) {
                        o.removeChild(o.firstChild);
                      }

                      for (var h, u = r(a.text).split("\n"), f = [], p = 0, d = u.length; p < d; p++) {
                        h = x("tspan"), p && x(h, {
                          dy: 1.2 * l,
                          x: s.x
                        }), h.appendChild(t._g.doc.createTextNode(u[p])), o.appendChild(h), f[p] = h;
                      }
                    } else for (p = 0, d = (f = o.getElementsByTagName("tspan")).length; p < d; p++) {
                      p ? x(f[p], {
                        dy: 1.2 * l,
                        x: s.x
                      }) : x(f[0], {
                        dy: 0
                      });
                    }

                    x(o, {
                      x: s.x,
                      y: s.y
                    }), i._.dirty = 1;

                    var g = i._getBBox(),
                        v = s.y - (g.y + g.height / 2);

                    v && t.is(v, "finite") && x(f[0], {
                      dy: v
                    });
                  }
                },
                    C = function C(t) {
                  return t.parentNode && "a" === t.parentNode.tagName.toLowerCase() ? t.parentNode : t;
                },
                    S = function S(e, r) {
                  this[0] = this.node = e, e.raphael = !0, this.id = ("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5), e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = r, this.attrs = this.attrs || {}, this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    deg: 0,
                    dx: 0,
                    dy: 0,
                    dirty: 1
                  }, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null;
                },
                    T = t.el;

                S.prototype = T, T.constructor = S, t._engine.path = function (t, e) {
                  var r = x("path");
                  e.canvas && e.canvas.appendChild(r);
                  var i = new S(r, e);
                  return i.type = "path", k(i, {
                    fill: "none",
                    stroke: "#000",
                    path: t
                  }), i;
                }, T.rotate = function (t, e, n) {
                  if (this.removed) return this;

                  if ((t = r(t).split(h)).length - 1 && (e = i(t[1]), n = i(t[2])), t = i(t[0]), null == n && (e = n), null == e || null == n) {
                    var a = this.getBBox(1);
                    e = a.x + a.width / 2, n = a.y + a.height / 2;
                  }

                  return this.transform(this._.transform.concat([["r", t, e, n]])), this;
                }, T.scale = function (t, e, n, a) {
                  if (this.removed) return this;
                  if ((t = r(t).split(h)).length - 1 && (e = i(t[1]), n = i(t[2]), a = i(t[3])), t = i(t[0]), null == e && (e = t), null == a && (n = a), null == n || null == a) var s = this.getBBox(1);
                  return n = null == n ? s.x + s.width / 2 : n, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([["s", t, e, n, a]])), this;
                }, T.translate = function (t, e) {
                  return this.removed ? this : ((t = r(t).split(h)).length - 1 && (e = i(t[1])), t = i(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([["t", t, e]])), this);
                }, T.transform = function (r) {
                  var i = this._;
                  if (null == r) return i.transform;

                  if (t._extractTransform(this, r), this.clip && x(this.clip, {
                    transform: this.matrix.invert()
                  }), this.pattern && m(this), this.node && x(this.node, {
                    transform: this.matrix
                  }), 1 != i.sx || 1 != i.sy) {
                    var n = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
                    this.attr({
                      "stroke-width": n
                    });
                  }

                  return this;
                }, T.hide = function () {
                  return this.removed || (this.node.style.display = "none"), this;
                }, T.show = function () {
                  return this.removed || (this.node.style.display = ""), this;
                }, T.remove = function () {
                  var e = C(this.node);

                  if (!this.removed && e.parentNode) {
                    var r = this.paper;

                    for (var i in r.__set__ && r.__set__.exclude(this), u.unbind("raphael.*.*." + this.id), this.gradient && r.defs.removeChild(this.gradient), t._tear(this, r), e.parentNode.removeChild(e), this.removeData(), this) {
                      this[i] = "function" == typeof this[i] ? t._removedFactory(i) : null;
                    }

                    this.removed = !0;
                  }
                }, T._getBBox = function () {
                  if ("none" == this.node.style.display) {
                    this.show();
                    var t = !0;
                  }

                  var e,
                      r = !1;
                  this.paper.canvas.parentElement ? e = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (e = this.paper.canvas.parentNode.style), e && "none" == e.display && (r = !0, e.display = "");
                  var i = {};

                  try {
                    i = this.node.getBBox();
                  } catch (t) {
                    i = {
                      x: this.node.clientLeft,
                      y: this.node.clientTop,
                      width: this.node.clientWidth,
                      height: this.node.clientHeight
                    };
                  } finally {
                    i = i || {}, r && (e.display = "none");
                  }

                  return t && this.hide(), i;
                }, T.attr = function (r, i) {
                  if (this.removed) return this;

                  if (null == r) {
                    var n = {};

                    for (var a in this.attrs) {
                      this.attrs[e](a) && (n[a] = this.attrs[a]);
                    }

                    return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n;
                  }

                  if (null == i && t.is(r, "string")) {
                    if ("fill" == r && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                    if ("transform" == r) return this._.transform;

                    for (var s = r.split(h), o = {}, l = 0, c = s.length; l < c; l++) {
                      (r = s[l]) in this.attrs ? o[r] = this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? o[r] = this.paper.customAttributes[r].def : o[r] = t._availableAttrs[r];
                    }

                    return c - 1 ? o : o[s[0]];
                  }

                  if (null == i && t.is(r, "array")) {
                    for (o = {}, l = 0, c = r.length; l < c; l++) {
                      o[r[l]] = this.attr(r[l]);
                    }

                    return o;
                  }

                  if (null != i) {
                    var f = {};
                    f[r] = i;
                  } else null != r && t.is(r, "object") && (f = r);

                  for (var p in f) {
                    u("raphael.attr." + p + "." + this.id, this, f[p]);
                  }

                  for (p in this.paper.customAttributes) {
                    if (this.paper.customAttributes[e](p) && f[e](p) && t.is(this.paper.customAttributes[p], "function")) {
                      var d = this.paper.customAttributes[p].apply(this, [].concat(f[p]));

                      for (var g in this.attrs[p] = f[p], d) {
                        d[e](g) && (f[g] = d[g]);
                      }
                    }
                  }

                  return k(this, f), this;
                }, T.toFront = function () {
                  if (this.removed) return this;
                  var e = C(this.node);
                  e.parentNode.appendChild(e);
                  var r = this.paper;
                  return r.top != this && t._tofront(this, r), this;
                }, T.toBack = function () {
                  if (this.removed) return this;
                  var e = C(this.node),
                      r = e.parentNode;
                  r.insertBefore(e, r.firstChild), t._toback(this, this.paper);
                  this.paper;
                  return this;
                }, T.insertAfter = function (e) {
                  if (this.removed || !e) return this;
                  var r = C(this.node),
                      i = C(e.node || e[e.length - 1].node);
                  return i.nextSibling ? i.parentNode.insertBefore(r, i.nextSibling) : i.parentNode.appendChild(r), t._insertafter(this, e, this.paper), this;
                }, T.insertBefore = function (e) {
                  if (this.removed || !e) return this;
                  var r = C(this.node),
                      i = C(e.node || e[0].node);
                  return i.parentNode.insertBefore(r, i), t._insertbefore(this, e, this.paper), this;
                }, T.blur = function (e) {
                  var r = this;

                  if (0 != +e) {
                    var i = x("filter"),
                        n = x("feGaussianBlur");
                    r.attrs.blur = e, i.id = t.createUUID(), x(n, {
                      stdDeviation: +e || 1.5
                    }), i.appendChild(n), r.paper.defs.appendChild(i), r._blur = i, x(r.node, {
                      filter: "url(#" + i.id + ")"
                    });
                  } else r._blur && (r._blur.parentNode.removeChild(r._blur), delete r._blur, delete r.attrs.blur), r.node.removeAttribute("filter");

                  return r;
                }, t._engine.circle = function (t, e, r, i) {
                  var n = x("circle");
                  t.canvas && t.canvas.appendChild(n);
                  var a = new S(n, t);
                  return a.attrs = {
                    cx: e,
                    cy: r,
                    r: i,
                    fill: "none",
                    stroke: "#000"
                  }, a.type = "circle", x(n, a.attrs), a;
                }, t._engine.rect = function (t, e, r, i, n, a) {
                  var s = x("rect");
                  t.canvas && t.canvas.appendChild(s);
                  var o = new S(s, t);
                  return o.attrs = {
                    x: e,
                    y: r,
                    width: i,
                    height: n,
                    rx: a || 0,
                    ry: a || 0,
                    fill: "none",
                    stroke: "#000"
                  }, o.type = "rect", x(s, o.attrs), o;
                }, t._engine.ellipse = function (t, e, r, i, n) {
                  var a = x("ellipse");
                  t.canvas && t.canvas.appendChild(a);
                  var s = new S(a, t);
                  return s.attrs = {
                    cx: e,
                    cy: r,
                    rx: i,
                    ry: n,
                    fill: "none",
                    stroke: "#000"
                  }, s.type = "ellipse", x(a, s.attrs), s;
                }, t._engine.image = function (t, e, r, i, n, a) {
                  var s = x("image");
                  x(s, {
                    x: r,
                    y: i,
                    width: n,
                    height: a,
                    preserveAspectRatio: "none"
                  }), s.setAttributeNS(p, "href", e), t.canvas && t.canvas.appendChild(s);
                  var o = new S(s, t);
                  return o.attrs = {
                    x: r,
                    y: i,
                    width: n,
                    height: a,
                    src: e
                  }, o.type = "image", o;
                }, t._engine.text = function (e, r, i, n) {
                  var a = x("text");
                  e.canvas && e.canvas.appendChild(a);
                  var s = new S(a, e);
                  return s.attrs = {
                    x: r,
                    y: i,
                    "text-anchor": "middle",
                    text: n,
                    "font-family": t._availableAttrs["font-family"],
                    "font-size": t._availableAttrs["font-size"],
                    stroke: "none",
                    fill: "#000"
                  }, s.type = "text", k(s, s.attrs), s;
                }, t._engine.setSize = function (t, e) {
                  return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this;
                }, t._engine.create = function () {
                  var e = t._getContainer.apply(0, arguments),
                      r = e && e.container;

                  if (!r) throw new Error("SVG container not found.");
                  var i,
                      n = e.x,
                      a = e.y,
                      s = e.width,
                      o = e.height,
                      l = x("svg"),
                      h = "overflow:hidden;";
                  return n = n || 0, a = a || 0, x(l, {
                    height: o = o || 342,
                    version: 1.1,
                    width: s = s || 512,
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                  }), 1 == r ? (l.style.cssText = h + "position:absolute;left:" + n + "px;top:" + a + "px", t._g.doc.body.appendChild(l), i = 1) : (l.style.cssText = h + "position:relative", r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l)), (r = new t._Paper()).width = s, r.height = o, r.canvas = l, r.clear(), r._left = r._top = 0, i && (r.renderfix = function () {}), r.renderfix(), r;
                }, t._engine.setViewBox = function (t, e, r, i, n) {
                  u("raphael.setViewBox", this, this._viewBox, [t, e, r, i, n]);
                  var a,
                      o,
                      l = this.getSize(),
                      h = s(r / l.width, i / l.height),
                      c = this.top,
                      p = n ? "xMidYMid meet" : "xMinYMin";

                  for (null == t ? (this._vbSize && (h = 1), delete this._vbSize, a = "0 0 " + this.width + f + this.height) : (this._vbSize = h, a = t + f + e + f + r + f + i), x(this.canvas, {
                    viewBox: a,
                    preserveAspectRatio: p
                  }); h && c;) {
                    o = "stroke-width" in c.attrs ? c.attrs["stroke-width"] : 1, c.attr({
                      "stroke-width": o
                    }), c._.dirty = 1, c._.dirtyT = 1, c = c.prev;
                  }

                  return this._viewBox = [t, e, r, i, !!n], this;
                }, t.prototype.renderfix = function () {
                  var t,
                      e = this.canvas,
                      r = e.style;

                  try {
                    t = e.getScreenCTM() || e.createSVGMatrix();
                  } catch (r) {
                    t = e.createSVGMatrix();
                  }

                  var i = -t.e % 1,
                      n = -t.f % 1;
                  (i || n) && (i && (this._left = (this._left + i) % 1, r.left = this._left + "px"), n && (this._top = (this._top + n) % 1, r.top = this._top + "px"));
                }, t.prototype.clear = function () {
                  t.eve("raphael.clear", this);

                  for (var e = this.canvas; e.firstChild;) {
                    e.removeChild(e.firstChild);
                  }

                  this.bottom = this.top = null, (this.desc = x("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = x("defs"));
                }, t.prototype.remove = function () {
                  for (var e in u("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this) {
                    this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                  }
                };
                var A = t.st;

                for (var M in T) {
                  T[e](M) && !A[e](M) && (A[M] = function (t) {
                    return function () {
                      var e = arguments;
                      return this.forEach(function (r) {
                        r[t].apply(r, e);
                      });
                    };
                  }(M));
                }
              }
            }.apply(e, i)) || (t.exports = n);
          }, function (t, e, r) {
            var i, n;
            i = [r(0)], void 0 === (n = function (t) {
              if (!t || t.vml) {
                var e = "hasOwnProperty",
                    r = String,
                    i = parseFloat,
                    n = Math,
                    a = n.round,
                    s = n.max,
                    o = n.min,
                    l = n.abs,
                    h = /[, ]+/,
                    u = t.eve,
                    c = " ",
                    f = "",
                    p = {
                  M: "m",
                  L: "l",
                  C: "c",
                  Z: "x",
                  m: "t",
                  l: "r",
                  c: "v",
                  z: "x"
                },
                    d = /([clmz]),?([^clmz]*)/gi,
                    g = / progid:\S+Blur\([^\)]+\)/g,
                    x = /-?[^,\s-]+/g,
                    v = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
                    y = 21600,
                    m = {
                  path: 1,
                  rect: 1,
                  image: 1
                },
                    b = {
                  circle: 1,
                  ellipse: 1
                },
                    _ = function _(e, r, i) {
                  var n = t.matrix();
                  return n.rotate(-e, .5, .5), {
                    dx: n.x(r, i),
                    dy: n.y(r, i)
                  };
                },
                    w = function w(t, e, r, i, n, a) {
                  var s = t._,
                      o = t.matrix,
                      h = s.fillpos,
                      u = t.node,
                      f = u.style,
                      p = 1,
                      d = "",
                      g = y / e,
                      x = y / r;

                  if (f.visibility = "hidden", e && r) {
                    if (u.coordsize = l(g) + c + l(x), f.rotation = a * (e * r < 0 ? -1 : 1), a) {
                      var v = _(a, i, n);

                      i = v.dx, n = v.dy;
                    }

                    if (e < 0 && (d += "x"), r < 0 && (d += " y") && (p = -1), f.flip = d, u.coordorigin = i * -g + c + n * -x, h || s.fillsize) {
                      var m = u.getElementsByTagName("fill");
                      m = m && m[0], u.removeChild(m), h && (v = _(a, o.x(h[0], h[1]), o.y(h[0], h[1])), m.position = v.dx * p + c + v.dy * p), s.fillsize && (m.size = s.fillsize[0] * l(e) + c + s.fillsize[1] * l(r)), u.appendChild(m);
                    }

                    f.visibility = "visible";
                  }
                };

                t.toString = function () {
                  return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version;
                };

                var k,
                    B = function B(t, e, i) {
                  for (var n = r(e).toLowerCase().split("-"), a = i ? "end" : "start", s = n.length, o = "classic", l = "medium", h = "medium"; s--;) {
                    switch (n[s]) {
                      case "block":
                      case "classic":
                      case "oval":
                      case "diamond":
                      case "open":
                      case "none":
                        o = n[s];
                        break;

                      case "wide":
                      case "narrow":
                        h = n[s];
                        break;

                      case "long":
                      case "short":
                        l = n[s];
                    }
                  }

                  var u = t.node.getElementsByTagName("stroke")[0];
                  u[a + "arrow"] = o, u[a + "arrowlength"] = l, u[a + "arrowwidth"] = h;
                },
                    C = function C(n, l) {
                  n.attrs = n.attrs || {};

                  var u = n.node,
                      g = n.attrs,
                      v = u.style,
                      _ = m[n.type] && (l.x != g.x || l.y != g.y || l.width != g.width || l.height != g.height || l.cx != g.cx || l.cy != g.cy || l.rx != g.rx || l.ry != g.ry || l.r != g.r),
                      C = b[n.type] && (g.cx != l.cx || g.cy != l.cy || g.r != l.r || g.rx != l.rx || g.ry != l.ry),
                      T = n;

                  for (var A in l) {
                    l[e](A) && (g[A] = l[A]);
                  }

                  if (_ && (g.path = t._getPath[n.type](n), n._.dirty = 1), l.href && (u.href = l.href), l.title && (u.title = l.title), l.target && (u.target = l.target), l.cursor && (v.cursor = l.cursor), "blur" in l && n.blur(l.blur), (l.path && "path" == n.type || _) && (u.path = function (e) {
                    var i = /[ahqstv]/gi,
                        n = t._pathToAbsolute;

                    if (r(e).match(i) && (n = t._path2curve), i = /[clmz]/g, n == t._pathToAbsolute && !r(e).match(i)) {
                      var s = r(e).replace(d, function (t, e, r) {
                        var i = [],
                            n = "m" == e.toLowerCase(),
                            s = p[e];
                        return r.replace(x, function (t) {
                          n && 2 == i.length && (s += i + p["m" == e ? "l" : "L"], i = []), i.push(a(t * y));
                        }), s + i;
                      });
                      return s;
                    }

                    var o,
                        l,
                        h = n(e);
                    s = [];

                    for (var u = 0, g = h.length; u < g; u++) {
                      o = h[u], "z" == (l = h[u][0].toLowerCase()) && (l = "x");

                      for (var v = 1, m = o.length; v < m; v++) {
                        l += a(o[v] * y) + (v != m - 1 ? "," : f);
                      }

                      s.push(l);
                    }

                    return s.join(c);
                  }(~r(g.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(g.path) : g.path), n._.dirty = 1, "image" == n.type && (n._.fillpos = [g.x, g.y], n._.fillsize = [g.width, g.height], w(n, 1, 1, 0, 0, 0))), "transform" in l && n.transform(l.transform), C) {
                    var M = +g.cx,
                        E = +g.cy,
                        N = +g.rx || +g.r || 0,
                        L = +g.ry || +g.r || 0;
                    u.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", a((M - N) * y), a((E - L) * y), a((M + N) * y), a((E + L) * y), a(M * y)), n._.dirty = 1;
                  }

                  if ("clip-rect" in l) {
                    var P = r(l["clip-rect"]).split(h);

                    if (4 == P.length) {
                      P[2] = +P[2] + +P[0], P[3] = +P[3] + +P[1];

                      var z = u.clipRect || t._g.doc.createElement("div"),
                          F = z.style;

                      F.clip = t.format("rect({1}px {2}px {3}px {0}px)", P), u.clipRect || (F.position = "absolute", F.top = 0, F.left = 0, F.width = n.paper.width + "px", F.height = n.paper.height + "px", u.parentNode.insertBefore(z, u), z.appendChild(u), u.clipRect = z);
                    }

                    l["clip-rect"] || u.clipRect && (u.clipRect.style.clip = "auto");
                  }

                  if (n.textpath) {
                    var R = n.textpath.style;
                    l.font && (R.font = l.font), l["font-family"] && (R.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, f) + '"'), l["font-size"] && (R.fontSize = l["font-size"]), l["font-weight"] && (R.fontWeight = l["font-weight"]), l["font-style"] && (R.fontStyle = l["font-style"]);
                  }

                  if ("arrow-start" in l && B(T, l["arrow-start"]), "arrow-end" in l && B(T, l["arrow-end"], 1), null != l.opacity || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
                    var j = u.getElementsByTagName("fill");

                    if (!(j = j && j[0]) && (j = k("fill")), "image" == n.type && l.src && (j.src = l.src), l.fill && (j.on = !0), null != j.on && "none" != l.fill && null !== l.fill || (j.on = !1), j.on && l.fill) {
                      var I = r(l.fill).match(t._ISURL);

                      if (I) {
                        j.parentNode == u && u.removeChild(j), j.rotate = !0, j.src = I[1], j.type = "tile";
                        var D = n.getBBox(1);
                        j.position = D.x + c + D.y, n._.fillpos = [D.x, D.y], t._preload(I[1], function () {
                          n._.fillsize = [this.offsetWidth, this.offsetHeight];
                        });
                      } else j.color = t.getRGB(l.fill).hex, j.src = f, j.type = "solid", t.getRGB(l.fill).error && (T.type in {
                        circle: 1,
                        ellipse: 1
                      } || "r" != r(l.fill).charAt()) && S(T, l.fill, j) && (g.fill = "none", g.gradient = l.fill, j.rotate = !1);
                    }

                    if ("fill-opacity" in l || "opacity" in l) {
                      var q = ((+g["fill-opacity"] + 1 || 2) - 1) * ((+g.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1);
                      q = o(s(q, 0), 1), j.opacity = q, j.src && (j.color = "none");
                    }

                    u.appendChild(j);
                    var O = u.getElementsByTagName("stroke") && u.getElementsByTagName("stroke")[0],
                        V = !1;
                    !O && (V = O = k("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (O.on = !0), ("none" == l.stroke || null === l.stroke || null == O.on || 0 == l.stroke || 0 == l["stroke-width"]) && (O.on = !1);
                    var W = t.getRGB(l.stroke);
                    O.on && l.stroke && (O.color = W.hex), q = ((+g["stroke-opacity"] + 1 || 2) - 1) * ((+g.opacity + 1 || 2) - 1) * ((+W.o + 1 || 2) - 1);
                    var Y = .75 * (i(l["stroke-width"]) || 1);

                    if (q = o(s(q, 0), 1), null == l["stroke-width"] && (Y = g["stroke-width"]), l["stroke-width"] && (O.weight = Y), Y && Y < 1 && (q *= Y) && (O.weight = 1), O.opacity = q, l["stroke-linejoin"] && (O.joinstyle = l["stroke-linejoin"] || "miter"), O.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (O.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in l) {
                      var G = {
                        "-": "shortdash",
                        ".": "shortdot",
                        "-.": "shortdashdot",
                        "-..": "shortdashdotdot",
                        ". ": "dot",
                        "- ": "dash",
                        "--": "longdash",
                        "- .": "dashdot",
                        "--.": "longdashdot",
                        "--..": "longdashdotdot"
                      };
                      O.dashstyle = G[e](l["stroke-dasharray"]) ? G[l["stroke-dasharray"]] : f;
                    }

                    V && u.appendChild(O);
                  }

                  if ("text" == T.type) {
                    T.paper.canvas.style.display = f;
                    var H = T.paper.span,
                        X = g.font && g.font.match(/\d+(?:\.\d*)?(?=px)/);
                    v = H.style, g.font && (v.font = g.font), g["font-family"] && (v.fontFamily = g["font-family"]), g["font-weight"] && (v.fontWeight = g["font-weight"]), g["font-style"] && (v.fontStyle = g["font-style"]), X = i(g["font-size"] || X && X[0]) || 10, v.fontSize = 100 * X + "px", T.textpath.string && (H.innerHTML = r(T.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                    var U = H.getBoundingClientRect();
                    T.W = g.w = (U.right - U.left) / 100, T.H = g.h = (U.bottom - U.top) / 100, T.X = g.x, T.Y = g.y + T.H / 2, ("x" in l || "y" in l) && (T.path.v = t.format("m{0},{1}l{2},{1}", a(g.x * y), a(g.y * y), a(g.x * y) + 1));

                    for (var $ = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Z = 0, Q = $.length; Z < Q; Z++) {
                      if ($[Z] in l) {
                        T._.dirty = 1;
                        break;
                      }
                    }

                    switch (g["text-anchor"]) {
                      case "start":
                        T.textpath.style["v-text-align"] = "left", T.bbx = T.W / 2;
                        break;

                      case "end":
                        T.textpath.style["v-text-align"] = "right", T.bbx = -T.W / 2;
                        break;

                      default:
                        T.textpath.style["v-text-align"] = "center", T.bbx = 0;
                    }

                    T.textpath.style["v-text-kern"] = !0;
                  }
                },
                    S = function S(e, a, s) {
                  e.attrs = e.attrs || {};
                  e.attrs;
                  var o = Math.pow,
                      l = "linear",
                      h = ".5 .5";

                  if (e.attrs.gradient = a, a = (a = r(a).replace(t._radial_gradient, function (t, e, r) {
                    return l = "radial", e && r && (e = i(e), r = i(r), o(e - .5, 2) + o(r - .5, 2) > .25 && (r = n.sqrt(.25 - o(e - .5, 2)) * (2 * (r > .5) - 1) + .5), h = e + c + r), f;
                  })).split(/\s*\-\s*/), "linear" == l) {
                    var u = a.shift();
                    if (u = -i(u), isNaN(u)) return null;
                  }

                  var p = t._parseDots(a);

                  if (!p) return null;

                  if (e = e.shape || e.node, p.length) {
                    e.removeChild(s), s.on = !0, s.method = "none", s.color = p[0].color, s.color2 = p[p.length - 1].color;

                    for (var d = [], g = 0, x = p.length; g < x; g++) {
                      p[g].offset && d.push(p[g].offset + c + p[g].color);
                    }

                    s.colors = d.length ? d.join() : "0% " + s.color, "radial" == l ? (s.type = "gradientTitle", s.focus = "100%", s.focussize = "0 0", s.focusposition = h, s.angle = 0) : (s.type = "gradient", s.angle = (270 - u) % 360), e.appendChild(s);
                  }

                  return 1;
                },
                    T = function T(e, r) {
                  this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = r, this.matrix = t.matrix(), this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    dx: 0,
                    dy: 0,
                    deg: 0,
                    dirty: 1,
                    dirtyT: 1
                  }, !r.bottom && (r.bottom = this), this.prev = r.top, r.top && (r.top.next = this), r.top = this, this.next = null;
                },
                    A = t.el;

                T.prototype = A, A.constructor = T, A.transform = function (e) {
                  if (null == e) return this._.transform;
                  var i,
                      n = this.paper._viewBoxShift,
                      a = n ? "s" + [n.scale, n.scale] + "-1-1t" + [n.dx, n.dy] : f;
                  n && (i = e = r(e).replace(/\.{3}|\u2026/g, this._.transform || f)), t._extractTransform(this, a + e);
                  var s,
                      o = this.matrix.clone(),
                      l = this.skew,
                      h = this.node,
                      u = ~r(this.attrs.fill).indexOf("-"),
                      p = !r(this.attrs.fill).indexOf("url(");
                  if (o.translate(1, 1), p || u || "image" == this.type) {
                    if (l.matrix = "1 0 0 1", l.offset = "0 0", s = o.split(), u && s.noRotation || !s.isSimple) {
                      h.style.filter = o.toFilter();
                      var d = this.getBBox(),
                          g = this.getBBox(1),
                          x = d.x - g.x,
                          v = d.y - g.y;
                      h.coordorigin = x * -y + c + v * -y, w(this, 1, 1, x, v, 0);
                    } else h.style.filter = f, w(this, s.scalex, s.scaley, s.dx, s.dy, s.rotate);
                  } else h.style.filter = f, l.matrix = r(o), l.offset = o.offset();
                  return null !== i && (this._.transform = i, t._extractTransform(this, i)), this;
                }, A.rotate = function (t, e, n) {
                  if (this.removed) return this;

                  if (null != t) {
                    if ((t = r(t).split(h)).length - 1 && (e = i(t[1]), n = i(t[2])), t = i(t[0]), null == n && (e = n), null == e || null == n) {
                      var a = this.getBBox(1);
                      e = a.x + a.width / 2, n = a.y + a.height / 2;
                    }

                    return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", t, e, n]])), this;
                  }
                }, A.translate = function (t, e) {
                  return this.removed ? this : ((t = r(t).split(h)).length - 1 && (e = i(t[1])), t = i(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([["t", t, e]])), this);
                }, A.scale = function (t, e, n, a) {
                  if (this.removed) return this;
                  if ((t = r(t).split(h)).length - 1 && (e = i(t[1]), n = i(t[2]), a = i(t[3]), isNaN(n) && (n = null), isNaN(a) && (a = null)), t = i(t[0]), null == e && (e = t), null == a && (n = a), null == n || null == a) var s = this.getBBox(1);
                  return n = null == n ? s.x + s.width / 2 : n, a = null == a ? s.y + s.height / 2 : a, this.transform(this._.transform.concat([["s", t, e, n, a]])), this._.dirtyT = 1, this;
                }, A.hide = function () {
                  return !this.removed && (this.node.style.display = "none"), this;
                }, A.show = function () {
                  return !this.removed && (this.node.style.display = f), this;
                }, A.auxGetBBox = t.el.getBBox, A.getBBox = function () {
                  var t = this.auxGetBBox();

                  if (this.paper && this.paper._viewBoxShift) {
                    var e = {},
                        r = 1 / this.paper._viewBoxShift.scale;
                    return e.x = t.x - this.paper._viewBoxShift.dx, e.x *= r, e.y = t.y - this.paper._viewBoxShift.dy, e.y *= r, e.width = t.width * r, e.height = t.height * r, e.x2 = e.x + e.width, e.y2 = e.y + e.height, e;
                  }

                  return t;
                }, A._getBBox = function () {
                  return this.removed ? {} : {
                    x: this.X + (this.bbx || 0) - this.W / 2,
                    y: this.Y - this.H,
                    width: this.W,
                    height: this.H
                  };
                }, A.remove = function () {
                  if (!this.removed && this.node.parentNode) {
                    for (var e in this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape), this) {
                      this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                    }

                    this.removed = !0;
                  }
                }, A.attr = function (r, i) {
                  if (this.removed) return this;

                  if (null == r) {
                    var n = {};

                    for (var a in this.attrs) {
                      this.attrs[e](a) && (n[a] = this.attrs[a]);
                    }

                    return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n;
                  }

                  if (null == i && t.is(r, "string")) {
                    if ("fill" == r && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;

                    for (var s = r.split(h), o = {}, l = 0, c = s.length; l < c; l++) {
                      (r = s[l]) in this.attrs ? o[r] = this.attrs[r] : t.is(this.paper.customAttributes[r], "function") ? o[r] = this.paper.customAttributes[r].def : o[r] = t._availableAttrs[r];
                    }

                    return c - 1 ? o : o[s[0]];
                  }

                  if (this.attrs && null == i && t.is(r, "array")) {
                    for (o = {}, l = 0, c = r.length; l < c; l++) {
                      o[r[l]] = this.attr(r[l]);
                    }

                    return o;
                  }

                  var f;

                  for (var p in null != i && ((f = {})[r] = i), null == i && t.is(r, "object") && (f = r), f) {
                    u("raphael.attr." + p + "." + this.id, this, f[p]);
                  }

                  if (f) {
                    for (p in this.paper.customAttributes) {
                      if (this.paper.customAttributes[e](p) && f[e](p) && t.is(this.paper.customAttributes[p], "function")) {
                        var d = this.paper.customAttributes[p].apply(this, [].concat(f[p]));

                        for (var g in this.attrs[p] = f[p], d) {
                          d[e](g) && (f[g] = d[g]);
                        }
                      }
                    }

                    f.text && "text" == this.type && (this.textpath.string = f.text), C(this, f);
                  }

                  return this;
                }, A.toFront = function () {
                  return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this;
                }, A.toBack = function () {
                  return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this);
                }, A.insertAfter = function (e) {
                  return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this);
                }, A.insertBefore = function (e) {
                  return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper), this);
                }, A.blur = function (e) {
                  var r = this.node.runtimeStyle,
                      i = r.filter;
                  return i = i.replace(g, f), 0 != +e ? (this.attrs.blur = e, r.filter = i + c + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+e || 1.5) + ")", r.margin = t.format("-{0}px 0 0 -{0}px", a(+e || 1.5))) : (r.filter = i, r.margin = 0, delete this.attrs.blur), this;
                }, t._engine.path = function (t, e) {
                  var r = k("shape");
                  r.style.cssText = v, r.coordsize = y + c + y, r.coordorigin = e.coordorigin;
                  var i = new T(r, e),
                      n = {
                    fill: "none",
                    stroke: "#000"
                  };
                  t && (n.path = t), i.type = "path", i.path = [], i.Path = f, C(i, n), e.canvas && e.canvas.appendChild(r);
                  var a = k("skew");
                  return a.on = !0, r.appendChild(a), i.skew = a, i.transform(f), i;
                }, t._engine.rect = function (e, r, i, n, a, s) {
                  var o = t._rectPath(r, i, n, a, s),
                      l = e.path(o),
                      h = l.attrs;

                  return l.X = h.x = r, l.Y = h.y = i, l.W = h.width = n, l.H = h.height = a, h.r = s, h.path = o, l.type = "rect", l;
                }, t._engine.ellipse = function (t, e, r, i, n) {
                  var a = t.path();
                  a.attrs;
                  return a.X = e - i, a.Y = r - n, a.W = 2 * i, a.H = 2 * n, a.type = "ellipse", C(a, {
                    cx: e,
                    cy: r,
                    rx: i,
                    ry: n
                  }), a;
                }, t._engine.circle = function (t, e, r, i) {
                  var n = t.path();
                  n.attrs;
                  return n.X = e - i, n.Y = r - i, n.W = n.H = 2 * i, n.type = "circle", C(n, {
                    cx: e,
                    cy: r,
                    r: i
                  }), n;
                }, t._engine.image = function (e, r, i, n, a, s) {
                  var o = t._rectPath(i, n, a, s),
                      l = e.path(o).attr({
                    stroke: "none"
                  }),
                      h = l.attrs,
                      u = l.node,
                      c = u.getElementsByTagName("fill")[0];

                  return h.src = r, l.X = h.x = i, l.Y = h.y = n, l.W = h.width = a, l.H = h.height = s, h.path = o, l.type = "image", c.parentNode == u && u.removeChild(c), c.rotate = !0, c.src = r, c.type = "tile", l._.fillpos = [i, n], l._.fillsize = [a, s], u.appendChild(c), w(l, 1, 1, 0, 0, 0), l;
                }, t._engine.text = function (e, i, n, s) {
                  var o = k("shape"),
                      l = k("path"),
                      h = k("textpath");
                  i = i || 0, n = n || 0, s = s || "", l.v = t.format("m{0},{1}l{2},{1}", a(i * y), a(n * y), a(i * y) + 1), l.textpathok = !0, h.string = r(s), h.on = !0, o.style.cssText = v, o.coordsize = y + c + y, o.coordorigin = "0 0";
                  var u = new T(o, e),
                      p = {
                    fill: "#000",
                    stroke: "none",
                    font: t._availableAttrs.font,
                    text: s
                  };
                  u.shape = o, u.path = l, u.textpath = h, u.type = "text", u.attrs.text = r(s), u.attrs.x = i, u.attrs.y = n, u.attrs.w = 1, u.attrs.h = 1, C(u, p), o.appendChild(h), o.appendChild(l), e.canvas.appendChild(o);
                  var d = k("skew");
                  return d.on = !0, o.appendChild(d), u.skew = d, u.transform(f), u;
                }, t._engine.setSize = function (e, r) {
                  var i = this.canvas.style;
                  return this.width = e, this.height = r, e == +e && (e += "px"), r == +r && (r += "px"), i.width = e, i.height = r, i.clip = "rect(0 " + e + " " + r + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this;
                }, t._engine.setViewBox = function (e, r, i, n, a) {
                  t.eve("raphael.setViewBox", this, this._viewBox, [e, r, i, n, a]);
                  var s,
                      o,
                      l = this.getSize(),
                      h = l.width,
                      u = l.height;
                  return a && (i * (s = u / n) < h && (e -= (h - i * s) / 2 / s), n * (o = h / i) < u && (r -= (u - n * o) / 2 / o)), this._viewBox = [e, r, i, n, !!a], this._viewBoxShift = {
                    dx: -e,
                    dy: -r,
                    scale: l
                  }, this.forEach(function (t) {
                    t.transform("...");
                  }), this;
                }, t._engine.initWin = function (t) {
                  var e = t.document;
                  e.styleSheets.length < 31 ? e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : e.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");

                  try {
                    !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), k = function k(t) {
                      return e.createElement("<rvml:" + t + ' class="rvml">');
                    };
                  } catch (t) {
                    k = function k(t) {
                      return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
                    };
                  }
                }, t._engine.initWin(t._g.win), t._engine.create = function () {
                  var e = t._getContainer.apply(0, arguments),
                      r = e.container,
                      i = e.height,
                      n = e.width,
                      a = e.x,
                      s = e.y;

                  if (!r) throw new Error("VML container not found.");

                  var o = new t._Paper(),
                      l = o.canvas = t._g.doc.createElement("div"),
                      h = l.style;

                  return a = a || 0, s = s || 0, n = n || 512, i = i || 342, o.width = n, o.height = i, n == +n && (n += "px"), i == +i && (i += "px"), o.coordsize = 216e5 + c + 216e5, o.coordorigin = "0 0", o.span = t._g.doc.createElement("span"), o.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(o.span), h.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", n, i), 1 == r ? (t._g.doc.body.appendChild(l), h.left = a + "px", h.top = s + "px", h.position = "absolute") : r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l), o.renderfix = function () {}, o;
                }, t.prototype.clear = function () {
                  t.eve("raphael.clear", this), this.canvas.innerHTML = f, this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null;
                }, t.prototype.remove = function () {
                  for (var e in t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas), this) {
                    this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                  }

                  return !0;
                };
                var M = t.st;

                for (var E in A) {
                  A[e](E) && !M[e](E) && (M[E] = function (t) {
                    return function () {
                      var e = arguments;
                      return this.forEach(function (r) {
                        r[t].apply(r, e);
                      });
                    };
                  }(E));
                }
              }
            }.apply(e, i)) || (t.exports = n);
          }]);
        });
        /***/
      },
      /* 19 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardRecorderListener", function () {
          return WhiteboardRecorderListener;
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
         * WhiteboardRecorderListener.js
         * Cube Engine
         *
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 白板录像器监听器。
         */


        var WhiteboardRecorderListener =
        /*#__PURE__*/
        function () {
          function WhiteboardRecorderListener() {
            _classCallCheck(this, WhiteboardRecorderListener);
          }

          _createClass(WhiteboardRecorderListener, [{
            key: "onStarted",

            /**
             * 录制已开始。
             */
            value: function onStarted() {}
            /**
             * 录制已结束。
             */

          }, {
            key: "onStopped",
            value: function onStopped() {}
            /**
             * 暂停录制
             */

          }, {
            key: "onPaused",
            value: function onPaused() {}
            /**
             * 继续录制
             */

          }, {
            key: "onResumed",
            value: function onResumed() {}
          }]);

          return WhiteboardRecorderListener;
        }();
        /***/

      },
      /* 20 */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "WhiteboardPlayerListener", function () {
          return WhiteboardPlayerListener;
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
         * WhiteboardPlayerListener.js
         * Cube Engine
         *
         * Copyright (c) 2015-2016 Cube Team. All rights reserved.
         */

        /**
         * 白板播放器监听器。
         */


        var WhiteboardPlayerListener =
        /*#__PURE__*/
        function () {
          function WhiteboardPlayerListener() {
            _classCallCheck(this, WhiteboardPlayerListener);
          }

          _createClass(WhiteboardPlayerListener, [{
            key: "onStarted",

            /**
             * 播放已开始。
             */
            value: function onStarted(player) {}
            /**
             * 播放已停止。
             */

          }, {
            key: "onStopped",
            value: function onStopped(player) {}
            /**
             * 播放已暂停。
             */

          }, {
            key: "onPaused",
            value: function onPaused(player) {}
            /**
             * 播放已恢复。
             */

          }, {
            key: "onResumed",
            value: function onResumed(player) {}
          }]);

          return WhiteboardPlayerListener;
        }();
        /***/

      }
      /******/
      ])
    );
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(92)(module)))

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var repeat = __webpack_require__(215);

// `String.prototype.repeat` method
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(143);
var anObject = __webpack_require__(19);
var requireObjectCoercible = __webpack_require__(6);
var sameValue = __webpack_require__(385);
var regExpExec = __webpack_require__(145);

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 385 */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 386 */
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
  _exports.Action = void 0;

  /*
   * Action.js
   * Cube Engine
   *
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 接口常量定义。
   *
   * @author Guan Yong
   */
  var Action = {
    UploadFile: '/sharing/uploadfile',
    FileProcess: '/sharing/uploadprocess',
    ConvertProcess: '/sharing/convertprocess'
  };
  _exports.Action = Action;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=CubeWhiteboard.js.map