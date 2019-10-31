(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CubeMessage"] = factory();
	else
		root["CubeMessage"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 298);
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
/* 198 */,
/* 199 */,
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
/* 208 */,
/* 209 */,
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
/* 242 */,
/* 243 */,
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
/* 269 */,
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
/* 298 */
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(299), __webpack_require__(303), __webpack_require__(327), __webpack_require__(307)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MessageServiceWorker, _MessageListener, Entity, _MessageType) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "ServiceWorker", {
    enumerable: true,
    get: function get() {
      return _MessageServiceWorker.MessageServiceWorker;
    }
  });
  Object.defineProperty(_exports, "Listener", {
    enumerable: true,
    get: function get() {
      return _MessageListener.MessageListener;
    }
  });
  Object.defineProperty(_exports, "Type", {
    enumerable: true,
    get: function get() {
      return _MessageType.MessageType;
    }
  });
  _exports.Entity = void 0;
  Entity = _interopRequireWildcard(Entity);
  _exports.Entity = Entity;

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
});

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(100);

__webpack_require__(210);

__webpack_require__(106);

__webpack_require__(257);

__webpack_require__(1);

__webpack_require__(211);

__webpack_require__(258);

__webpack_require__(300);

__webpack_require__(108);

__webpack_require__(116);

__webpack_require__(262);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(122);

__webpack_require__(301);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(141);

__webpack_require__(67);

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

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(302), __webpack_require__(303), __webpack_require__(304), __webpack_require__(311), __webpack_require__(313), __webpack_require__(307), __webpack_require__(310), __webpack_require__(309), __webpack_require__(312), __webpack_require__(316), __webpack_require__(321), __webpack_require__(320), __webpack_require__(323), __webpack_require__(324), __webpack_require__(325), __webpack_require__(308), __webpack_require__(317), __webpack_require__(318), __webpack_require__(319), __webpack_require__(314), __webpack_require__(326), __webpack_require__(322), __webpack_require__(207), __webpack_require__(237), __webpack_require__(235), __webpack_require__(244), __webpack_require__(238), __webpack_require__(236)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MessageService2, _MessageListener, _DBMessageService, _MessageStatus, _FileMessageStatus, _MessageType, _MessageEntity, _TextMessage, _FileMessage, _WhiteboardMessage, _CustomMessage, _CardMessage, _HistoryMessage, _LocationMessage, _RichContentMessage, _MessageDirection, _ImageMessage, _VoiceMessage, _VideoMessage, _FileAction, _MessageQueue, _ReplyMessage, _CELLET, _CubeError, _ActionConst, _EngineState, _StateCode, _Request) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.MessageServiceWorker = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var CellCloud = window.CellCloud;
  /**
   * 消息服务实现。
   */

  var MessageServiceWorker =
  /*#__PURE__*/
  function (_MessageService) {
    _inherits(MessageServiceWorker, _MessageService);

    function MessageServiceWorker(engine, OfWorker, DownloadFile) {
      var _this;

      _classCallCheck(this, MessageServiceWorker);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageServiceWorker).call(this, engine, _MessageListener.MessageListener, _CELLET.CELLET.Messaging));
      _this.msgQueue = new _MessageQueue.MessageQueue(_assertThisInitialized(_this), _this.delegate);
      _this.queryHistoryCallback = {};
      _this.meassgeCallback = [];
      _this.pendingMessageList = [];
      _this.pendingFileMessageList = [];
      _this.dbService = new _DBMessageService.DBMessageService(engine);
      _this.callback = new Map();
      _this.FileServer = OfWorker; // 消息内容大小限制

      _this._msgSizeThreshold = 2048;
      _this.lastTimestamp = 0;
      _this.session = null;
      _this.notifyTimer = 0; // 如果还有消息，则启动定时器进行请求

      _this.remainingTimer = 0;
      _this.lastSessionName = null;
      _this.syncMessagesList = []; // 同步定时器

      _this.syncTick = null; // 同步回执列表定时器

      _this.syncReceipt = null; // 同步超时时间

      _this.syncTimeout = 0; // 同步回执列表超时时间

      _this.syncReceiptTimeout = 0; //回执队列map

      _this.receiptMap = []; //回执ack回来的时间

      _this.receiptCount = 0; //回执队列是否进行中

      _this.receiptAction = false; // 回执时间列表

      _this.receiptTimeList = []; // 是否是在node环境使用下载组件

      _this.downloadFile = DownloadFile ? new DownloadFile() : null;
      return _this;
    }
    /**
     * 发送消息。
     */


    _createClass(MessageServiceWorker, [{
      key: "sendMessage",
      value: function sendMessage(mix, content) {
        var _this2 = this;

        if (null == this.session || typeof this.session.name !== 'string') {
          if (typeof content !== 'string') {
            content.status = _MessageStatus.MessageStatus.FAIL;

            if (content.fileStatus) {
              content.fileStatus = _FileMessageStatus.FileMessageStatus.Failed;
            }
          }

          return false;
        } // 富文本消息,先上传文件


        if (content.type === _MessageType.MessageType.RichContent) {
          for (var i = 0; i < content.messages.length; i++) {
            if (content.messages[i].type === 'image') {
              if (content.md5 > 0) {
                _RichContentMessage.RichContentMessage.upload(mix, content);

                return true;
              }
            }
          }
        } // 执行异步操作


        if (content.async) {
          content._async(this).then(function () {
            // 直接消息
            var msg = mix;
            var time = Date.now();

            while (time <= _this2.lastTimestamp) {
              time += 1;
            }

            _this2.lastTimestamp = time;

            if (typeof mix === 'string') {
              msg = _this2._toTextMessage(mix, content);

              if (!msg) {
                return false;
              }
            } // 设置发件人


            msg.sender = msg.sender ? msg.sender : {
              "name": _this2.session.name,
              "displayName": _this2.session.displayName
            };
            msg.sendTime = _this2.lastTimestamp;
            msg.timestamp = _this2.lastTimestamp;
            msg.fromDevice = _this2.engine.getDeviceInfo();
            msg.direction = _MessageDirection.MessageDirection.Sent; //发送文件夹所需参数

            if (msg.type == 'file' && msg.fileType == '1') {
              msg.setHeader('fileType', 1);
              msg.setHeader('compressType', 1);
            }

            _this2.msgQueue.enqueue(msg);

            _this2.pendingMessageList.push(msg);

            _this2.dbService.storageMessage(msg, true);

            return _this2._handleSendMessage(msg);
          });
        } else {
          // 直接消息
          var msg = mix;
          var time = Date.now();

          while (time <= this.lastTimestamp) {
            time += 1;
          }

          this.lastTimestamp = time;

          if (typeof mix === 'string') {
            msg = this._toTextMessage(mix, content);

            if (!msg) {
              return false;
            }
          } // 设置发件人


          msg.sender = msg.sender ? msg.sender : {
            "name": this.session.name,
            "displayName": this.session.displayName
          };
          msg.sendTime = this.lastTimestamp;
          msg.timestamp = this.lastTimestamp;
          msg.fromDevice = this.engine.getDeviceInfo();
          msg.direction = _MessageDirection.MessageDirection.Sent; //发送文件夹所需参数

          if (msg.type == 'file' && msg.fileType == '1') {
            msg.setHeader('fileType', 1);
            msg.setHeader('compressType', 1);
          }

          this.msgQueue.enqueue(msg);
          this.pendingMessageList.push(msg);
          this.dbService.storageMessage(msg, true);
          return this._handleSendMessage(msg);
        }
      }
    }, {
      key: "_handleSendMessage",
      value: function _handleSendMessage(msg) {
        if (!window.nucleus.talkService.isCalled(_CELLET.CELLET.Messaging)) {
          return false;
        }

        var dialect = new CellCloud.ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionPush);
        dialect.appendParam("param", msg.toJSON());

        if (window.nucleus.talkService.talk(_CELLET.CELLET.Messaging, dialect)) {
          msg.status = _MessageStatus.MessageStatus.INPROGRESS;

          if (msg.fileStatus) {
            msg.fileStatus = _MessageStatus.MessageStatus.Uploading;
          }

          return true;
        } else {
          CellCloud.Logger.d('CubeMessageService', 'cube.CellCloud.nucleus talk fail');
          msg.status = _MessageStatus.MessageStatus.FAIL;

          if (msg.fileStatus) {
            msg.fileStatus = _MessageStatus.MessageStatus.Failed;
          }

          this.msgQueue.dequeue(msg.sn);
          return false;
        }
      }
      /**
       * 撤回消息。
       */

    }, {
      key: "recallMessage",
      value: function recallMessage(sn) {
        if (null == this.session || null == this.session.name) {
          return false;
        }

        var dialect = new CellCloud.ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionRecall);
        dialect.appendParam("param", {
          "sn": sn
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Messaging, dialect);
      }
      /**
       * 转发消息。
       */

    }, {
      key: "forwardMessage",
      value: function forwardMessage(sns, destinations, header, messages) {
        var _this3 = this;

        if (!this.engine.registered || null == this.session || null == this.session.name) {
          return false;
        }

        var isArray = sns instanceof Array;
        var forwardSns = isArray ? sns : [sns];
        isArray = destinations instanceof Array;
        var receivers = isArray ? destinations : [destinations];
        isArray = messages instanceof Array;
        messages = isArray ? messages : [messages]; //转发消息添加留言功能,messages可以不传

        if (messages[0]) {
          messages.forEach(function (item) {
            // 设置发件人
            item.sender = item.sender ? item.sender : {
              "name": _this3.session.name,
              "displayName": _this3.session.displayName
            };
            var time = Date.now();

            while (time <= _this3.lastTimestamp) {
              time += 1;
            }

            _this3.lastTimestamp = time;
            item.sendTime = _this3.lastTimestamp;
            item.timestamp = _this3.lastTimestamp;
            item.fromDevice = _this3.engine.getDeviceInfo();
            item.direction = _MessageDirection.MessageDirection.Sent;

            _this3.msgQueue.enqueue(item);

            _this3.pendingMessageList.push(item);

            _this3.dbService.storageMessage(item, true);
          });
        }

        var dialect = new CellCloud.ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionForward);
        dialect.appendParam("param", {
          "sns": forwardSns,
          "receivers": receivers,
          "header": header,
          "messages": messages
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Messaging, dialect);
      }
      /**
       * 取消发送消息。
       */

    }, {
      key: "cancelMessage",
      value: function cancelMessage(message) {
        var _this4 = this;

        if (message.isOnlineFile) {
          this.FileServer.cancel(message.sn);

          var _msg = new _CustomMessage.CustomMessage(message.receiver.name);

          _msg.setHeader('unOnlineFile', true);

          _msg.setHeader('sn', message.sn);

          this.sendMessage(message.receiver.name, _msg);
          return true;
        }

        var msg = this.msgQueue.read(message.sn);

        if (msg) {
          if (typeof message._cancel === 'function') {
            message._cancel();
          }

          this._removePendingFileMessage(message.sn);

          this.dbService.queryMessageBySns([message.sn], function (err, messages, dbMessages) {
            if (!err && null != messages && messages.length > 0 && dbMessages[0].status == _MessageStatus.MessageStatus.CREATE) {
              messages[0].status = _MessageStatus.MessageStatus.FAIL;

              _this4.dbService.storageMessage(messages[0]);
            }
          });
          this.msgQueue.dequeue(message.sn);

          this._checkPendingFileList();

          return true;
        }

        return false;
      }
      /**
       * 回执消息
       */

    }, {
      key: "receiptMessages",
      value: function receiptMessages(sns) {
        if (null == this.session || null == this.session.name || null == sns) {
          return false;
        }

        this.dbService.storageOffline('offline', sns, true);
        var dialect = new CellCloud.ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionReceipt);
        dialect.appendParam("param", {
          "sns": sns
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Messaging, dialect);
      }
      /**
       * 回执所有消息
       * sn : sn
       */

    }, {
      key: "receiptAllMessages",
      value: function receiptAllMessages(sn) {
        var _this5 = this;

        if (null == this.session || null == this.session.name) {
          return false;
        }

        var sessionId = null,
            timestamp = 0;

        try {
          if (sn == null) {
            this._handReceiptAllMessages(sessionId, timestamp);
          } else {
            this.dbService.queryMessageBySns([sn], function (err, data) {
              if (data && data.length > 0) {
                timestamp = data[0].timestamp;
                sessionId = data[0].group ? data[0].group.name : (_this5.engine.accName || _this5.lastSessionName) == data[0].sender.name ? data[0].receiver.name : data[0].sender.name;

                _this5._handReceiptAllMessages(sessionId, timestamp);
              }
            }, true);
          }
        } catch (e) {
          throw e;
        }
      }
      /** 
       * 批量回执会话
       *  @param {Array} sessionIds = [{ sessionId:sessionId, timestamp:timestamp}]
       */

    }, {
      key: "receiptAllSessionIds",
      value: function receiptAllSessionIds(sessionIds) {
        var dialect = new CellCloud.ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionReceiptAll);
        dialect.appendParam("param", {
          "sessions": sessionIds
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Messaging, dialect);
      }
    }, {
      key: "_handReceiptAllMessages",
      value: function _handReceiptAllMessages(sessionId, timestamp) {
        var _this6 = this;

        var self = this; // 对比缓存回执

        this.dbService.querySyncMessage(function (err, data) {
          var sessions = data[0] && data[0].offlineSessions ? data[0].offlineSessions : [],
              hasSessionId = false;
          sessions.map(function (item) {
            if (item.sessionId == sessionId) {
              item.timestamp = timestamp, hasSessionId = true;
            }
          }); // 缓存会话id 新增或者修改

          if (!hasSessionId && sessionId) sessions.push({
            sessionId: sessionId,
            timestamp: timestamp
          });

          _this6.dbService.storageOffline('offlineSessions', sessions, true);

          if (_this6.receiptAction) {
            clearTimeout(_this6.receiptTimer);
            _this6.receiptTimer = setTimeout(function () {
              _this6.receiptAction = false;

              _this6._handReceiptAllMessages();
            }, 500);
            return;
          }

          if (_this6.engine.registered) {
            if (null == sessions || !sessions.length) {
              return false;
            }

            _this6.receiptAction = true;
            var dialect = new CellCloud.ActionDialect();
            dialect.setAction(_ActionConst.ActionConst.ActionReceiptAll);
            dialect.appendParam("param", {
              "sessions": sessions
            });
            return window.nucleus.talkService.talk(_CELLET.CELLET.Messaging, dialect);
          } else {
            if (sessionId) {
              self.dbService.queryUnReceiptBySessionId(sessionId, timestamp, false, 'success', function (err, data) {
                if (data && data.length > 0) {
                  data.forEach(function (item, index) {
                    if (item.timestamp <= timestamp) {
                      item.receipted = true;
                    }
                  });
                  self.dbService.storageMessages(data, true);
                }
              }, true);
            }
          }
        }, true);
      }
      /** 同步回执列表 */

    }, {
      key: "syncReceiptList",
      value: function syncReceiptList(callback) {
        var self = this;

        var receiptHttp = function receiptHttp() {
          var server = new _Request.Request((window.cube.utils.isSecure ? "https" : "http") + '://' + window.cube._CUBE_DOMAIN + ':' + window.cube._CUBE_PORT);
          var receiptParam = {
            "tag": window.nucleus.tag,
            "time": 0
          };
          server.send('/message/v2/offline/receipt/', receiptParam, function (error, data) {
            if (error) {
              if (!self.syncReceiptTimeout || self.syncReceiptTimeout < 180000) {
                self.syncReceiptTimeout = self.syncReceiptTimeout + 5000;
              }

              self.syncReceipt = setTimeout(function () {
                if (self.engine.register) receiptHttp();
              }, self.syncReceiptTimeout);
              return;
            } else {
              clearTimeout(self.syncReceipt);
              self.syncReceiptTimeout = 0;
            }

            if (data.state.code == 200) {
              self.receiptTimeList = data.data.receipts;
              if (typeof callback == 'function') callback();
              /** 2019.05.14 串行执行按sessionId查询本地未回执消息 */

              console.log('CubeMessageService , 回执会话列表>>>', self.receiptTimeList);

              if (self.receiptTimeList && self.receiptTimeList.length > 0) {
                var receiptIndex = 0;

                var task = function task() {
                  self.getUnReceiptBySessionId(self.receiptTimeList[receiptIndex].session, self.receiptTimeList[receiptIndex].receiptTime, false, 'success', function (err) {
                    if (!err) {
                      receiptIndex = receiptIndex + 1;

                      if (receiptIndex < self.receiptTimeList.length) {
                        task();
                      }
                    }
                  });
                };

                task();
              }
            }
          });
        };

        receiptHttp();
      }
      /** 通过sessionId查询未回执的消息*/

    }, {
      key: "getUnReceiptBySessionId",
      value: function getUnReceiptBySessionId(session, receiptTime, receipt, status, callback) {
        var self = this;
        self.dbService.queryUnReceiptBySessionId(session, receiptTime.toString(), receipt, status, function (err, data) {
          if (!err && data && data.length > 0) {
            var msg = {};
            msg.messages = new Array();
            msg.sns = new Array();

            for (var i = 0; i < data.length; ++i) {
              if (data[i].timestamp <= receiptTime) {
                data[i].receipted = true;
                self.dbService.storageMessage(data[i]);

                if (data[i].sender.name != (self.engine.accName || self.lastSessionName)) {
                  msg.messages.push(data[i]), msg.sns.push(data[i].sn);
                  delete msg["sn"];
                  delete msg["device"];
                  delete msg["name"];
                  delete msg["receiptTimestamp"];
                }
              }
            }

            if (null != msg && msg.messages.length != 0) {
              console.log('CubeMessageService , 引擎离线消息回执>>>', msg);
              self.delegate.onReceiptedAll(msg, "");
            }
          }

          if (typeof callback == 'function') callback(false);
        });
      }
      /**
       * 查询消息历史记录。
       */

    }, {
      key: "queryHistory",
      value: function queryHistory(conversation, timestamp, maxNumber, callback, error) {
        if (null == this.session || null == this.session.name) {
          return false;
        }

        if (callback === undefined) {
          return false;
        }

        if (maxNumber <= 0) {
          return false;
        }

        this.queryHistoryCallback[conversation] = {
          "callback": callback
        };

        if (undefined !== error) {
          this.queryHistoryCallback[conversation].error = error;
        }

        var dialect = new CellCloud.ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionHistory);
        dialect.appendParam("param", {
          "conversation": conversation,
          "timestamp": timestamp,
          "max": maxNumber,
          "type": "history"
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Messaging, dialect);
      }
      /**
       * 通过sn查询数据
       * */

    }, {
      key: "queryMessageBySns",
      value: function queryMessageBySns(sns) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        var isArray = sns instanceof Array;
        var querySns = isArray ? sns : [sns];
        this.dbService.queryMessageBySns(querySns, function (err, data) {
          if (null == data) {
            callback(data);
            return;
          }

          var message = isArray ? data : data[0];
          callback(message);
        });
      }
      /**
       * 新的同步数据逻辑
       * */

    }, {
      key: "syncMessages",
      value: function syncMessages(firstPart) {
        var _this7 = this;

        var sendHttp = function sendHttp(startTime, timestamp, endTime, count) {
          var server = new _Request.Request((window.cube.utils.isSecure ? "https" : "http") + '://' + window.cube._CUBE_DOMAIN + ':' + window.cube._CUBE_PORT);
          var param = {
            tag: window.nucleus.tag,
            startTime: startTime,
            timestamp: timestamp,
            endTime: endTime,
            count: count,
            receiptNotify: false // receiptNotify 是否兼容老版本

          };
          var lastCube = _this7.lastSessionName;
          CellCloud.Logger.d('CubeMessageService', 'startTime:' + startTime + ' timestamp:' + timestamp + ' endTime:' + endTime);
          server.send('/message/v2/offline/', param, function (error, data) {
            if (error) {
              if (!_this7.syncTimeout || _this7.syncTimeout < 180000) {
                _this7.syncTimeout = _this7.syncTimeout + 5000;
              }

              _this7.syncTick = setTimeout(function () {
                if (_this7.engine.register) sendHttp(startTime, timestamp, endTime, 500);
              }, _this7.syncTimeout);
              return;
            } else {
              clearTimeout(_this7.syncTick);
              _this7.syncTimeout = 0;
            } // 判断当前账户是否之前拉取的账户


            if (data.state.code == 200 && lastCube == _this7.session.name) {
              // 过滤本地sn
              var messages = _this7._delRepeat(data.data.messages, []);

              if (messages.length > 0) {
                _this7.delegate.onMessagesSyncing(_this7._toMessagesMap(messages));
              }

              CellCloud.Logger.d('CubeMessageService', 'A total of ' + messages.length + ' messages were pulled');

              if (data.data.hasNext) {
                sendHttp(startTime, data.data.lastTimestamp, endTime, 2000);

                _this7._updateSyncTime('update', data.data.lastTimestamp);
              } else {
                _this7._checkSyncEnd(sendHttp, 2000);
              }
            } else {
              if (data.state.code == 1113) {
                _this7._checkSyncEnd(sendHttp, 2000);
              } else {
                _this7._changeEngineState(_EngineState.EngineState.Ready, 'onMessageSyncEnd');
              }
            }
          });
        };

        this._changeEngineState(_EngineState.EngineState.Busy, 'onMessageSyncBegin');

        if (this.engine.registered) sendHttp(firstPart.startTime, firstPart.timeStamp ? firstPart.timeStamp : 0, firstPart.endTime, 100);
      }
    }, {
      key: "_queryMaxTimeStamp",
      value: function _queryMaxTimeStamp(callback) {
        var _this8 = this;

        this.dbService.queryMaxTimeStamp(function (err, data) {
          if (err) throw err;
          var lastLoginTime = localStorage.getItem('CubeLastLoginTime_' + _this8.lastSessionName) || 0;
          var starTime = data ? data.update || data.sendTimestamp : 0;
          starTime = starTime > lastLoginTime ? starTime : lastLoginTime; // 储存上一次登录时间戳

          localStorage.setItem('CubeLastLoginTime_' + _this8.lastSessionName, window.cube._CUBE_LOGIN_TIME);

          var firstPart = _this8._updateSyncTime('add', starTime, window.cube._CUBE_LOGIN_TIME, 0);

          callback(firstPart);
        });
      }
      /**
       *通过Http根据sns查询消息
       */

    }, {
      key: "syncMessageBySns",
      value: function syncMessageBySns(sns, callback) {
        if (!Array.isArray(sns)) {
          return false;
        }

        var self = this;
        var msgs = [];
        var p = this.engine.utils.isSecure ? "https" : "http";
        var url = p + '://' + window.cube._CUBE_DOMAIN + ':' + window.cube._CUBE_PORT + '/message/pull/';
        var param = {
          tag: window.nucleus.tag,
          sns: JSON.stringify(sns),
          token: "CubeTeam@AdminForEver"
        };
        CellCloud.Ajax.newRequest(url).method("POST").content(param).send(function (response) {
          var data = JSON.parse(response.data);

          if (data.state.code == 200) {
            for (var i = 0; i < data.data.length; i++) {
              var _loop = function _loop(j) {
                var m = data.data[i].messages[j];

                var msg = self._parseMessageJson(m);

                if (null != msg) {
                  if (msg.type == _MessageType.MessageType.Text || msg.type == _MessageType.MessageType.Custom || msg.type == _MessageType.MessageType.Card) {
                    msg.status = m.recall ? _MessageStatus.MessageStatus.RECALL : _MessageStatus.MessageStatus.SUCCESS;
                    self.dbService.storageMessage(msg);
                  } else {
                    msg.status = m.recall ? _MessageStatus.MessageStatus.RECALL : _MessageStatus.MessageStatus.INPROGRESS;

                    if (msg.type === _MessageType.MessageType.Whiteboard) {
                      if (undefined !== msg._fetchData) {
                        msg._fetchData(function (wm) {
                          wm.status = m.recall ? _MessageStatus.MessageStatus.RECALL : _MessageStatus.MessageStatus.SUCCESS;
                          self.dbService.storageMessage(wm);
                        }, function (wm, error) {
                          wm.status = _MessageStatus.MessageStatus.FAIL;
                          self.delegate.onMessageFailed(error, wm);
                        });
                      }
                    } else {
                      self.dbService.storageMessage(msg);
                    }
                  }

                  msgs.push(msg);
                }
              };

              for (var j = 0; j < data.data[i].messages.length; j++) {
                _loop(j);
              }
            }
          }

          if (typeof callback == "function") callback(msgs);
        });
      }
      /*
      更改引擎状态
      */

    }, {
      key: "_changeEngineState",
      value: function _changeEngineState(state, method) {
        if (method) {
          this.delegate[method]();
        }

        this.engine.triggerCubeEngineState(state);
      }
    }, {
      key: "_checkSyncEnd",
      value: function _checkSyncEnd(sendHttp, count) {
        var lastPart = this._updateSyncTime("remove");

        if (lastPart) {
          sendHttp(lastPart.startTime, lastPart.timeStamp, lastPart.endTime, count);
        } else {
          this._changeEngineState(_EngineState.EngineState.Ready, 'onMessageSyncEnd');

          CellCloud.Logger.d('CubeMessageService', 'completed Sync offline Messages');
        }
      }
      /**
       * 去除本地有的数据
       * */

    }, {
      key: "_delRepeat",
      value: function _delRepeat(data, localData) {
        var localSns = {};
        var noRepeat = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = localData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var local = _step.value;
            localSns[local.sn] = true;
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

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var message = _step2.value;

            if (!localSns[message.sn]) {
              noRepeat.push(message);
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return noRepeat;
      }
      /**
       * 消息组装,去重
       * */

    }, {
      key: "_toMessagesMap",
      value: function _toMessagesMap(messages) {
        var key;
        var synsMessages,
            msgs = [];
        var messagesObj = {}; // 存储已有sn，用于去重

        var checkSns = [];

        for (var i = 0; i < messages.length; i++) {
          var msg = this._parseMessageJson(messages[i]);

          if (null != msg && !checkSns.includes(msg.sn)) {
            // 未回ack, 移除队列
            this.msgQueue.dequeue(messages[i].sn);
            msg.status = messages[i].recall ? _MessageStatus.MessageStatus.RECALL : _MessageStatus.MessageStatus.SUCCESS;
            key = msg.group ? msg.group.name : (this.engine.accName || this.lastSessionName) == msg.sender.name ? msg.receiver.name : msg.sender.name;
            synsMessages = null == messagesObj[key] ? new Array() : messagesObj[key];

            if (this.receiptTimeList && this.receiptTimeList.length > 0) {
              for (var j = 0; j < this.receiptTimeList.length; j++) {
                if (this.receiptTimeList[j].session == key && this.receiptTimeList[j].receiptTime >= msg.timestamp) {
                  msg.receipted = true;
                }
              }
            }

            synsMessages.push(msg);
            msgs.push(msg);
            messagesObj[key] = synsMessages;
            checkSns.push(msg.sn);
          }
        }

        this.dbService.storageMessages(msgs);
        return messagesObj;
      }
    }, {
      key: "_updateSyncTime",
      value: function _updateSyncTime(condition, startTime, endTime, timeStamp) {
        var syncTime = JSON.parse(localStorage.getItem('CubeMessageOfflineTime_' + this.lastSessionName));
        if (null == syncTime) syncTime = [];

        if (condition == 'add') {
          syncTime.push({
            startTime: startTime,
            endTime: endTime,
            timeStamp: timeStamp
          });
        } else if (condition == 'update') {
          if (syncTime[0]) syncTime[0].timeStamp = startTime;
        } else if (condition == 'remove') {
          syncTime.splice(0, 1);
        }

        localStorage.setItem('CubeMessageOfflineTime_' + this.lastSessionName, JSON.stringify(syncTime));
        return syncTime[0];
      }
      /**
       *查询置顶列表
       */

    }, {
      key: "queryTopConcats",
      value: function queryTopConcats(callback) {
        var p = this.utils.isSecure ? "https" : "http";
        var url = p + '://' + window.cube._CUBE_DOMAIN + ':' + window.cube._CUBE_PORT + '/recent/message/top/list/';
        var param = {
          tag: window.nucleus.tag,
          master: this.engine.accName,
          token: "CubeTeam@AdminForEver"
        };
        CellCloud.Ajax.newRequest(url).method("POST").content(param).send(function (response) {
          var data = JSON.parse(response.data);
          var ccntacts = data.data.recents;

          if (data.state.code == 200) {
            callback(ccntacts);
          } else {// callback(cube.CubeStateCode.SetTopError)
          }
        });
      }
      /**
       * 暂停上传
       */

    }, {
      key: "pauseMessage",
      value: function pauseMessage(sn) {
        var self = this;
        var server = new _Request.Request(this.utils.isSecure ? "https" : "http" + '://' + window.cube._CUBE_DOMAIN + ':' + window.cube._CUBE_PORT);
        this.dbService.queryMessageBySns([sn], function (err, msgs) {
          var msg = msgs[0];
          var data = {
            md5: msg.file.md5,
            sn: msg.sn,
            cube: msg.receiver.name,
            fileName: msg.file.name
          };
          var Msg = self.msgQueue.read(msg.sn);

          if (Msg.pause !== undefined) {
            Msg.pause = true;
          }

          server.sendFile(_FileAction.FileAction.PauseUpload, {}, data, function (nErr, nData) {
            if (nData.state.code == 200) {
              self.delegate.onPaused(msg);
            }

            if (err) throw err;
          });
        });
      }
      /**
       * 恢复上传
       */

    }, {
      key: "resumeMessage",
      value: function resumeMessage(sn, file) {
        var self = this;
        this.dbService.queryMessageBySns([sn], function (err, msgs) {
          var msg = msgs[0];

          var Internal = function Internal(Msg) {
            if (Msg.pause !== undefined) {
              Msg.formFile = file;
              Msg.sn = msg.sn;
              Msg.pause = false;

              Msg._postData(msg);

              self._handleNotifyAck(Msg);
            }
          };

          if (err) {
            CellCloud.Logger.e('SearchMessageBySns', 'Search Message Error');
          } else {
            if (msg.file) {
              var Msg = self.msgQueue.read(msg.sn);

              if (null !== Msg) {
                Internal(Msg);
              } else {
                var File = new _FileMessage.FileMessage(msg.receiver);
                self.msgQueue.dequeue(msg.sn);
                Internal(File);
              }
            }
          }
        });
      }
      /**
       * 根据会话ID清空本地缓存
       * */

    }, {
      key: "clearCacheMessages",
      value: function clearCacheMessages(chatId) {
        this.dbService.delMessageByChatId(chatId.toString());
      }
      /**
       * 消息置顶
       */

    }, {
      key: "setTop",
      value: function setTop(cube, isTop, callback) {
        var tag = isTop ? 1 : 0;
        this.callback.set('setTopCallback', callback);
        var dialect = new CellCloud.ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionUpdateTop);
        dialect.appendParam("param", {
          "name": cube,
          "top": tag
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Messaging, dialect);
      }
      /**
       * 回复消息
       * */
      // replyMessage(sn, reply) {
      //     if (null == this.session || null == this.session.name || null == sn) {
      //         return false;
      //     }
      //     let self = this;
      //     //手动生成sn以返回给应用层
      //     this.dbService.queryMessageBySns([sn], function (err, msgs) {
      //         if (err) {
      //             cube.CellCloud.Logger.e('SearchMessageBySns', 'ReplyMessage Search Message Error');
      //             return false;
      //         }
      //         let source = msgs[0];
      //         if (null == source) {
      //             cube.CellCloud.Logger.e('SearchMessageBySns', 'ReplyMessage Search Message Is Null');
      //             return false;
      //         }
      //         let receiver = null == source.group ? source.sender.name : source.group.name;
      //         reply = self._toTextMessage(receiver, reply);
      //         if (!reply) {
      //             return false;
      //         }
      //         let msg = new ReplyMessage(receiver, reply, source);
      //         msg.setSource(source);
      //         msg.group = null == reply.group ? source.group : reply.group;
      //         self.sendMessage(receiver, msg);
      //     })
      // }

      /**
       * 发送在线文件
       */

    }, {
      key: "sendOnlineFile",
      value: function sendOnlineFile(message) {
        var _this9 = this;

        var sn = message.sn,
            file = message.file;
        this.engine.getAccountService().queryAccounts([message.receiver.name], function (data) {
          var devices = data[0].data.devices,
              isWindows = false;

          if (data && devices.length != 0) {
            for (var i = 0; i < devices.length; i++) {
              if (devices[i].name.indexOf('Windows') == 0) {
                isWindows = true;
                break;
              }
            } // 只支持Windows 在线文件发送


            if (!isWindows) {
              _this9.delegate.onLineFile('notSupportVersion', message);
            }
          } else {
            _this9.delegate.onLineFile('notOnline', message);
          }
        });
        this.FileServer.createSharer({
          filepath: file.path,
          id: sn
        }, function (state) {
          if (state.code == 200) {
            try {
              // 转化自定义消息
              var path = decodeURI(message.file.path);
              var msg = new _CustomMessage.CustomMessage(message.receiver.name);
              msg.setHeader('isOnlineFile', true);
              msg.setHeader('path', message.file.path);
              msg.setHeader('url', "http://" + state.server + "/" + path);
              msg.setHeader("file", message.file);
              msg.sn = message.sn;

              _this9.sendMessage(message.receiver.name, msg);

              CellCloud.Logger.d('CubeMessageService', state.server + "/" + path);
            } catch (e) {
              _this9.delegate.onMessageFailed(_StateCode.StateCode.RequestTimeout, message);

              CellCloud.Logger.d('CubeMessageService', "Path Incorrect format!");
            }
          } else if (state.code == _StateCode.StateCode.NotFound) {
            _this9.delegate.onMessageFailed(_StateCode.StateCode.NotFound, message);

            CellCloud.Logger.d('CubeMessageService', "Path NotFound!");
          } else if (state.code == _StateCode.StateCode.ServerInternalError) {
            _this9.delegate.onMessageFailed(_StateCode.StateCode.ServerInternalError, message);

            CellCloud.Logger.d('CubeMessageService', "ServerInternalError!");
          }
        }, function (current, count, id) {
          // 进度监听
          var msg = _this9.msgQueue.read(id);

          if (msg) {
            msg.type = 'file';
            msg.file = msg.header.file ? msg.header.file : msg.getHeader("file");
            msg.file.url = msg.header.url ? msg.header.url : msg.getHeader("url");

            if (current == count) {
              message.status = _MessageStatus.MessageStatus.SUCCESS;
              message.fileStatus = _FileMessageStatus.FileMessageStatus.Succeed;

              _this9.msgQueue.dequeue(msg.sn);

              _this9.delegate.onUploadCompleted(msg);
            } else {
              _this9.delegate.onUploading(msg, current, count);
            }
          } else {
            _this9.delegate.onMessageFailed(_StateCode.StateCode.NotFound, msg);

            CellCloud.Logger.d('CubeMessageService', "Path NotFound!");
          }
        });
      }
    }, {
      key: "receiveOnlineFile",
      value: function receiveOnlineFile(json, havePath) {
        var _this10 = this;

        var header = json.header;
        json.type = _MessageType.MessageType.File;
        json.file = header.file ? header.file : json.getHeader("file");

        if (!havePath) {
          delete json.file.path;
        }

        json.file.url = header.url ? header.url : json.getHeader("url");
        return this.FileServer.checkIP(json.file.url).then(function () {
          return json;
        })["catch"](function () {
          if (havePath) {
            var msg = new _CustomMessage.CustomMessage(json.receiver.displayName);
            msg.setHeader('notSameIP', true);
            msg.setHeader('sn', json.sn);

            _this10.sendMessage(json.receiver.displayName, msg);

            return false;
          }
        });
      }
    }, {
      key: "onRegisterStateChanged",
      value: function onRegisterStateChanged(session) {
        var _this11 = this;

        var self = this;
        this.session = session; // 发送消息队列中的消息

        if (this.engine.registered) {
          this.dbService.startup(function () {
            // 检查库里错误消息回调上层
            if (_this11.pendingMessageList.length == 0) {
              _this11.dbService.queryMessageByStatus(function (err, data) {
                if (!err && data) {
                  for (var i = 0; i < data.length; i++) {
                    data[i].status = _MessageStatus.MessageStatus.FAIL;

                    _this11.dbService.storageMessage(data[i]);

                    _this11.delegate.onMessageFailed(_StateCode.StateCode.RequestTimeout, data[i]);
                  }
                }
              });
            }

            _this11.lastSessionName = _this11.session.name;
            var queryMaxTimeStamp = Date.now();

            _this11._queryMaxTimeStamp(function (firstPart) {
              CellCloud.Logger.d("CubeMessageService", "queryMaxTimeStamp time: " + (Date.now() - queryMaxTimeStamp + "ms"));
              self.syncReceiptList(function () {
                if (window.cube.config.autoSyncMsg) {
                  self.syncMessages(firstPart);
                }

                if (null == _this11.lastSessionName || _this11.lastSessionName == _this11.session.name) {
                  // 重发3分钟以内 未发送消息
                  _this11._checkPendingList();
                }
              });
            }); // 存在离线回执, 立马回执


            _this11.receiptAllMessages();
          });
        } else {
          this.dbService.shutdown();
        }
      }
    }, {
      key: "_checkPendingList",
      value: function _checkPendingList() {
        var _this12 = this;

        var sns = [];

        for (var i = 0; i < this.pendingMessageList.length; i++) {
          var msg = this.pendingMessageList[i];
          sns.push(msg.sn);
        }

        if (sns.length != 0) {
          this.syncMessageBySns(sns, function (msgs) {
            var i = _this12.pendingMessageList.length;

            while (i--) {
              var _msg2 = _this12.pendingMessageList[i]; // 如果服务器存在 则直接回调上层已发送 否则重新发送

              if (JSON.stringify(msgs).indexOf(_msg2.sn) > 0) {
                var m = _this12.msgQueue.read(_msg2.sn);

                m.status = _MessageStatus.MessageStatus.SUCCESS;

                if (_msg2.file) {
                  _msg2.file.path = m.file.path;

                  _this12.delegate.onUploadCompleted(m);
                }

                _this12.delegate.onSent(m);

                _this12.msgQueue.dequeue(m.sn);

                _this12.dbService.storageMessage(m);
              } else {
                _this12._handleSendMessage(_msg2);
              }
            }
          });
        } // let date = Date.now() - 3 * 60 * 1000;
        // this.dbService.getMessageByColumGT('sendTimestamp', date, true, (err, messages, cubeDbMessages) => {
        //     if (!err) {
        //         for (let message of cubeDbMessages) {
        //             if (message.status == MessageStatus.CREATE && message.type != MessageType.File && message.type != MessageType.Image) {
        //                 let obj = JSON.parse(message.json);
        //                 let messageObj = self._parseMessageJson(obj);
        //                 this.sendMessage(messageObj.receiver.name, messageObj);
        //             }
        //         }
        //     }
        // });

      }
    }, {
      key: "onDialogue",
      value: function onDialogue(action, dialect) {
        switch (action) {
          case _ActionConst.ActionConst.ActionPushAck:
            {
              this._processPushAck(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionNotify:
            {
              this._processNotify(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionPullAck:
            {
              this._processPullAck(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionRecall:
            {
              this._processRecall(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionRecallAck:
            {
              this._processRecallAck(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionReceipt:
            {
              this._processReceipt(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionReceiptAck:
            {
              this._processReceiptAck(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionReceiptAll:
            {
              this._processReceiptAll(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionReceiptAllAck:
            {
              this._processReceiptAllAck(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionReceiptOfflineAck:
            {
              this._processReceiptOfflineAck(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionSearchMsgAck:
            {
              this._processMessageBySnAck(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionSearchMsgsAck:
            {
              this._processMessagesBySnAck(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionForwardAck:
            {
              this._processForwardAck(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionHistoryAck:
            {
              this._processHistoryAck(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionUpdateTop:
            {
              this._processUpdateTop(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionUpdateTopAck:
            {
              this._processUpdateTopAck(dialect);

              break;
            }

          case _ActionConst.ActionConst.ActionPredictorNotify:
            {
              this._processPredictorNotify(dialect);
            }

          default:
            break;
        }
      }
    }, {
      key: "_processPushAck",
      value: function _processPushAck(dialect) {
        var _this13 = this;

        var state = dialect.getParam("state");
        var data = dialect.getParam("data");
        var m, msg;

        try {
          m = this._parseMessageJson(data);
          msg = this.msgQueue.read(data.sn);
        } catch (e) {
          CellCloud.Logger.e("CubeMessageService", "_processPushAck error: " + e);
        }

        if (state.code === 200) {
          if (msg) {
            if (msg._notifyAck !== undefined) {
              m.file = msg.file = Object.assign(m.file, msg.file); // 回调消息已发送

              this.delegate.onSent(m); //断点下载文件走新的流程,和图片文件

              if (msg.getHeader('blockFile') == 1 || msg.getHeader('sourceType') == 1) {
                // 加入文件上传队列
                // this._checkPendingFileList(msg);
                msg.status = _MessageStatus.MessageStatus.SUCCESS;
                m.status = _MessageStatus.MessageStatus.SUCCESS;
                this.msgQueue.dequeue(msg.sn); // 回调消息已发送

                this.dbService.storageMessage(m); // this.delegate.onUploadCompleted(m);
              } else {
                msg._postData(msg, function (err, ndata) {
                  if (!err) {
                    // 上传成功 存储远程地址
                    msg.file.url = ndata.data.url;
                    msg.status = _MessageStatus.MessageStatus.SUCCESS;

                    _this13.dbService.storageMessage(msg);
                  }
                }); // 调用文件消息的 notify ack 加入监听器


                this._handleNotifyAck(msg);
              }
            } else {
              msg.status = _MessageStatus.MessageStatus.SUCCESS;
              m.status = _MessageStatus.MessageStatus.SUCCESS;

              if (m.getHeader("isOnlineFile")) {
                this.receiveOnlineFile(msg, 'havePath').then(function (msg) {
                  msg.status = _MessageStatus.MessageStatus.SUCCESS; // 回调消息已发送

                  _this13.dbService.storageMessage(msg);

                  _this13.delegate.onSent(msg);
                });
              } else {
                if (msg.type == _MessageType.MessageType.File) {
                  m.file = msg.file = Object.assign(m.file, msg.file);
                }

                this.msgQueue.dequeue(msg.sn); // 回调消息已发送

                this.dbService.storageMessage(m);
                this.delegate.onSent(m); // if(msg.type == MessageType.File){
                //     this.delegate.onUploadCompleted(m);
                // }
              }
            }
          } else {
            console.log("CubeMessageService", this.msgQueue, msg, m); // this.delegate.onMessageFailed(cube.CubeStateCode.Declined, m);
          }
        } else if (state.code === 1112) {
          if (null != msg) {
            m.file.path = msg.file.path;
            m.status = _MessageStatus.MessageStatus.SUCCESS;
            this.dbService.storageMessage(m);
            this.delegate.onSent(m);
            this.msgQueue.dequeue(msg.sn);
            this.delegate.onUploadCompleted(m);
          } else {
            console.log("CubeMessageService", this.msgQueue, msg, m);
            this.delegate.onMessageFailed(_StateCode.StateCode.Declined, m);
          }
        } else if (state.code === 1121) {
          console.log("CubeMessageService", this.msgQueue, msg, m);

          if (null != msg) {
            m.status = _MessageStatus.MessageStatus.FAIL;
            msg.status = _MessageStatus.MessageStatus.FAIL;
            this.dbService.storageMessage(m);
            this.msgQueue.dequeue(msg.sn);
          }

          this.delegate.onMessageFailed(_StateCode.StateCode.MessageSensitiveWord, m);
        } else {
          if (msg) {
            this.msgQueue.dequeue(msg.sn);
          }

          this.delegate.onMessageFailed(state.code, m);
        }
      }
    }, {
      key: "_checkPendingFileList",
      value: function _checkPendingFileList(msg) {
        var _this14 = this;

        msg ? this.pendingFileMessageList.push(msg) : '';

        if (this.pendingFileMessageList.length > 0) {
          var num = 0;

          var _loop2 = function _loop2(i) {
            var msg = _this14.pendingFileMessageList[i];

            if (msg.isPengding) {
              num++;
            } else if (num < 4 && !msg.isPengding) {
              num++;
              _this14.pendingFileMessageList[i].isPengding = true;

              msg._postData(msg, function (err, ndata) {
                if (!err) {
                  // 上传成功 存储远程地址
                  msg.file.url = ndata.data.url;
                  msg.status = _MessageStatus.MessageStatus.SUCCESS;

                  _this14.dbService.storageMessage(msg);
                }
              }); // 调用文件消息的 notify ack 加入监听器


              _this14._handleNotifyAck(msg);
            }
          };

          for (var i = 0; i < this.pendingFileMessageList.length; i++) {
            _loop2(i);
          }
        }
      }
    }, {
      key: "_removePendingFileMessage",
      value: function _removePendingFileMessage(sn) {
        if (this.pendingFileMessageList.length > 0) {
          for (var i = 0; i < this.pendingFileMessageList.length; i++) {
            if (sn == this.pendingFileMessageList[i].sn) {
              this.pendingFileMessageList.splice(i, 1);
            }
          }
        }
      }
    }, {
      key: "_handleNotifyAck",
      value: function _handleNotifyAck(msg) {
        var _this15 = this;

        this.msgQueue.dequeue(msg.sn);

        msg._notifyAck(function (error, processed, total) {
          if (error) {
            msg.status = _MessageStatus.MessageStatus.FAIL;
            msg.fileStatus = _FileMessageStatus.FileMessageStatus.Failed; //this.msgQueue.dequeue(msg.sn);

            _this15._removePendingFileMessage(msg.sn);

            _this15._checkPendingFileList();

            CellCloud.Logger.e("CubeMessageService", "Process file progress error: " + error.code);

            _this15.delegate.onMessageFailed(error.code, msg);
          } else if (processed === total) {
            msg.status = _MessageStatus.MessageStatus.SUCCESS;
            msg.fileStatus = _FileMessageStatus.FileMessageStatus.Succeed; //this.msgQueue.dequeue(msg.sn);

            _this15._removePendingFileMessage(msg.sn);

            _this15._checkPendingFileList();

            _this15.delegate.onUploadCompleted(msg);
          } else {
            _this15.delegate.onUploading(msg, processed, total);
          }
        });
      }
    }, {
      key: "_processNotify",
      value: function _processNotify(dialect) {
        if (this.notifyTimer > 0) {
          clearTimeout(this.notifyTimer);
        }

        var self = this;
        this.notifyTimer = setTimeout(function () {
          clearTimeout(self.notifyTimer);
          self.notifyTimer = 0;
          var action = new CellCloud.ActionDialect();
          action.setAction(_ActionConst.ActionConst.ActionPull);
          action.appendParam("time", Date.now());
          window.nucleus.talkService.talk(_CELLET.CELLET.Messaging, action);
        }, 100);
      }
    }, {
      key: "_processPullAck",
      value: function _processPullAck(dialect) {
        var _this16 = this;

        var data = dialect.getParam("data");
        var list = data.messages;
        var remaining = undefined !== data.remaining ? data.remaining : 0;

        for (var i = 0; i < list.length; ++i) {
          var m = list[i];

          var msg = this._parseMessageJson(m);

          if (null != msg) {
            if (msg.type == _MessageType.MessageType.Text || msg.type == _MessageType.MessageType.Custom || msg.type == _MessageType.MessageType.Card) {
              if (msg.getHeader("isOnlineFile")) {
                this.receiveOnlineFile(msg).then(function (msg) {
                  msg.status = _MessageStatus.MessageStatus.SUCCESS;

                  _this16.dbService.storageMessage(msg);

                  _this16.delegate.onReceived(msg);
                });
              } else if (msg.getHeader("unOnlineFile")) {
                this.delegate.onLineFile("unOnlineFile", msg);
              } else if (msg.getHeader("notSameIP")) {
                this.delegate.onLineFile("notSameIP", msg);
              } else {
                msg.status = _MessageStatus.MessageStatus.SUCCESS;
                this.dbService.storageMessage(msg);
                this.delegate.onReceived(msg);
              }
            } else {
              //2019.02.26之前消息状态是INPROGRESS
              // msg.status = MessageStatus.INPROGRESS;
              msg.status = _MessageStatus.MessageStatus.SUCCESS;

              if (msg.type === _MessageType.MessageType.Whiteboard) {
                if (undefined !== msg._fetchData) {
                  (function () {
                    var self = _this16;

                    msg._fetchData(function (wm) {
                      wm.status = _MessageStatus.MessageStatus.SUCCESS;
                      self.dbService.storageMessage(wm);
                      self.delegate.onReceived(wm);
                    }, function (wm, error) {
                      wm.status = _MessageStatus.MessageStatus.FAIL;
                      self.delegate.onMessageFailed(error, wm);
                    });
                  })();
                }
              } else {
                this.dbService.storageMessage(msg);
                this.delegate.onReceived(msg);
              }
            }
          }
        }

        var task = function task() {
          clearTimeout(_this16.remainingTimer);
          _this16.remainingTimer = 0;
        };

        if (remaining > 0) {
          if (this.remainingTimer > 0) {
            task();
          }

          this.remainingTimer = setTimeout(function () {
            task();
            var action = new CellCloud.ActionDialect();
            action.setAction(_ActionConst.ActionConst.ActionPull);
            action.appendParam("time", Date.now());
            window.nucleus.talkService.talk(_CELLET.CELLET.Messaging, action);
          }, 2000);
        } else {
          task();
        }
      }
    }, {
      key: "_processRecall",
      value: function _processRecall(dialect) {
        var self = this;
        var data = dialect.getParam("data"); // 将 JSON 转为实体对象

        var msg = this._parseMessageJson(data);

        if (null != msg) {
          msg.status = _MessageStatus.MessageStatus.RECALL;
          self.dbService.queryMessageBySns([msg.sn], function (err, data) {
            if (!err && data) {
              msg.receipted = data[0].receipted;
            }

            self.delegate.onRecalled(msg);
          });
        } else {
          this.delegate.onMessageFailed(_StateCode.StateCode.RecallError);
        }
      }
    }, {
      key: "_processRecallAck",
      value: function _processRecallAck(dialect) {
        var state = dialect.getParam("state");

        if (state.code == 200) {
          var data = dialect.getParam("data"); // 将 JSON 转为实体对象

          var msg = this._parseMessageJson(data);

          if (null != msg) {
            msg.status = _MessageStatus.MessageStatus.RECALL;
            this.delegate.onRecalled(msg);
          } else {
            this.delegate.onMessageFailed(_StateCode.StateCode.RecallError);
          }
        } else {
          this.delegate.onMessageFailed(_StateCode.StateCode.RecallError);
        }
      }
    }, {
      key: "_processReceipt",
      value: function _processReceipt(dialect) {
        var msg = dialect.getParam("data");
        var state = dialect.getParam("state"); // 将 JSON 转为实体对象

        if (null == msg || msg.sns.length == 0) {
          return false;
        }

        if (state.code == 200) {
          this._handReceipt(msg, msg.device);
        }
      }
    }, {
      key: "_processReceiptAck",
      value: function _processReceiptAck(dialect) {
        this.dbService.storageOffline('offline', []);

        this._processReceipt(dialect);
      }
    }, {
      key: "_handReceipt",
      value: function _handReceipt(msg, device) {
        var _this17 = this;

        this.dbService.queryMessageBySns(msg.sns, function (err, data) {
          if (!err && data) {
            for (var i = 0; i < data.length; ++i) {
              if (data[i]) {
                data[i].receipted = true, data[i].receiptedDevices = device, msg.messages = data, msg.sns[i] = data[i].sn;

                _this17.dbService.storageMessage(data[i]);
              }
            }

            delete msg['device'];
            delete msg['name'];
            delete msg['receiptTimestamp'];

            if (null != msg && data.length != 0) {
              _this17.delegate.onReceipted(msg, device);
            }
          }
        });
      }
    }, {
      key: "_processReceiptAll",
      value: function _processReceiptAll(dialect) {
        var isSelf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var msg = dialect.getParam("data");
        var state = dialect.getParam("state");

        if (state.code == 200) {
          // let msg;
          if (null == msg || null == msg.sn) {
            return false;
          }

          msg.isSelf = isSelf;

          this._handleReceiptAll(msg, msg.device);
        } else {
          this.delegate.onMessageFailed(_StateCode.StateCode.ReceiptError);
        }
      }
    }, {
      key: "_processReceiptAllAck",
      value: function _processReceiptAllAck(dialect) {
        var _this18 = this;

        var msg = dialect.getParam("data");
        var state = dialect.getParam("state");

        if (state.code == 200) {
          // 比对缓存会话
          //  this.receiptAction = false;
          this.dbService.querySyncMessage(function (err, data) {
            var sessions = data[0] && data[0].offlineSessions ? data[0].offlineSessions : [];
            sessions.forEach(function (item, index) {
              if (item.sessionId == msg.sessionId) {
                sessions.splice(index, 1);
              }
            });

            _this18.dbService.storageOffline('offlineSessions', sessions);

            if (sessions.length > 0) {
              clearTimeout(_this18.receiptAllAckTimer);
              _this18.receiptAllAckTimer = setTimeout(function () {
                _this18.receiptAllMessages();
              }, 500);
            }
          }); // 自己回执 可以不返回上层

          this._processReceiptAll(dialect, true);
        } else {
          this.dbService.storageOffline('offlineSessions', []);
        }
      }
    }, {
      key: "_handleReceiptAll",
      value: function _handleReceiptAll(msg, device) {
        var lastMessage,
            self = this;

        if (!msg.name) {
          self.dbService.queryUnReceiptBySessionId(msg.sessionId, msg.timestamp, false, 'success', function (err, data) {
            if (data && data.length > 0) {
              msg.messages = new Array();
              msg.sns = new Array();

              for (var i = 0; i < data.length; ++i) {
                if (data[i].timestamp <= msg.timestamp) {
                  data[i].receipted = true;
                  data[i].receiptedDevices = device;
                  self.dbService.storageMessage(data[i]);

                  if (data[i].sender.name != (self.engine.accName || self.lastSessionName)) {
                    msg.messages.push(data[i]), msg.sns.push(data[i].sn);
                    delete msg["sn"];
                    delete msg["device"];
                    delete msg["name"];
                    delete msg["receiptTimestamp"];
                  }
                }
              }

              if (null != msg && msg.messages.length != 0) {
                console.log('CubeMessageService , 引擎在线消息回执>>>', msg);
                self.delegate.onReceiptedAll(msg, device);
              }
            }
          });
        }
      }
    }, {
      key: "_processReceiptOfflineAck",
      value: function _processReceiptOfflineAck(dialect) {
        var _this19 = this;

        var self = this;
        var state = dialect.getParam("state");

        if (state.code == 200) {
          var data = dialect.getParam("data");

          var _loop3 = function _loop3(i) {
            var device = data.receipts[i].device;

            _this19.dbService.queryMessageBySns(data.receipts[i].sns, function (err, data) {
              if (!err) {
                var msg = {},
                    maxTime = 0;

                if (data.length == 0) {
                  return false;
                }

                msg.sns = [];

                for (var j = 0; j < data.length; j++) {
                  if (data[j].anonymous) {
                    msg.sns.push(data[j].sn);
                  } else {
                    if (data[j].receiveTime >= maxTime) {
                      maxTime = data[j].receiveTime;
                      msg.sn = data[j].sn;
                    }
                  }
                }

                msg.sns.length != 0 ? self._handReceipt(msg, device) : '';
                msg.sn ? self._handleReceiptAll(msg, device) : '';
              }
            });
          };

          for (var i = 0; i < data.receipts.length; i++) {
            _loop3(i);
          }
        }
      }
    }, {
      key: "_processForwardAck",
      value: function _processForwardAck(dialect) {
        var state = dialect.getParam("state");

        if (state.code == 200) {
          var data = dialect.getParam("data"); // 源

          var source = data.source; // 成功列表

          var messages = data.messages; // 失败列表

          var failures = data.failures; // 解析源

          var srcMsg = this._parseMessageJson(source);

          var msgList = [];
          var failedList = [];

          if (undefined !== messages) {
            for (var i = 0; i < messages.length; ++i) {
              // 将 JSON 转为实体对象
              var msg = this._parseMessageJson(messages[i]);

              if (null == msg) {
                continue;
              } // 尝试修复消息


              this._fixMessage(msg, source);

              msgList.push(msg);
              msg.status = _MessageStatus.MessageStatus.SUCCESS;
              this.dbService.storageMessage(msg);
            }
          }

          if (undefined !== failures) {
            for (var _i = 0; _i < failures.length; ++_i) {
              // 将 JSON 转为实体对象
              var _msg3 = this._parseMessageJson(failures[_i]);

              if (null == _msg3) {
                continue;
              } // 尝试修复消息


              this._fixMessage(_msg3, source);

              failedList.push(_msg3);
            }
          } // 回调


          this.delegate.onForwarded(srcMsg, msgList, failedList);
        } else {
          this.delegate.onMessageFailed(_StateCode.StateCode.ForwardError);
        }
      }
    }, {
      key: "_processHistoryAck",
      value: function _processHistoryAck(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");
        var conversation = data.conversation;
        var timestamp = data.timestamp;

        if (state.code == 200) {
          var msgList = [];
          var list = data.messages;

          for (var i = 0; i < list.length; ++i) {
            var m = list[i];

            var msg = this._parseMessageJson(m);

            msgList.push(msg);
          }

          if (undefined !== this.queryHistoryCallback[conversation]) {
            this.queryHistoryCallback[conversation].callback.call(null, conversation, timestamp, msgList);
            delete this.queryHistoryCallback[conversation];
          }
        } else if (undefined !== conversation) {
          if (undefined !== this.queryHistoryCallback[conversation] && undefined !== this.queryHistoryCallback[conversation].error) {
            this.queryHistoryCallback[conversation].error.call(null, state.code, conversation, timestamp);
            delete this.queryHistoryCallback[conversation];
          }
        } else {// TODO 参数错误
        }
      }
    }, {
      key: "_processMessageBySnAck",
      value: function _processMessageBySnAck(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");
        var callback = this.meassgeCallback.shift();

        if (state.code == 200) {
          if (null != data) {
            var msg = this._parseMessageJson(data);

            if (msg.type == _MessageType.MessageType.Text || msg.type == _MessageType.MessageType.Custom || msg.type == _MessageType.MessageType.Card) {
              this.dbService.storageMessage(msg);
              callback(false, msg);
            }
          }
        } else {// TODO 参数错误
        }
      }
    }, {
      key: "_processMessagesBySnAck",
      value: function _processMessagesBySnAck(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");
        var callback = this.meassgeCallback.shift();
        var msgs = new Array();

        if (state.code == 200) {
          if (null != data) {
            data.msgs.sort(function sortNumber(a, b) {
              return b.time.timestamp - a.time.timestamp;
            });

            for (var i = 0; i < data.msgs.length; ++i) {
              var msg = this._parseMessageJson(data.msgs[i]);

              msgs.push(msg);
              msg.status = _MessageStatus.MessageStatus.SUCCESS;
              this.dbService.storageMessage(msg);
            }

            callback(false, msgs.reverse());
          }
        } else {
          callback(false, []);
        }
      }
    }, {
      key: "_processUpdateTop",
      value: function _processUpdateTop(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");

        if (null != data) {
          this.delegate.onConcatTop(data);
        }
      }
    }, {
      key: "_processUpdateTopAck",
      value: function _processUpdateTopAck(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");

        if (state.code == 200) {
          if (null != data) {
            this.callback.get('setTopCallback')(data);
          }
        }
      }
    }, {
      key: "_processPredictorNotify",
      value: function _processPredictorNotify(dialect) {
        var state = dialect.getParam("state");
        var data = dialect.getParam("data");

        if (state.code == 200) {
          this.delegate.onPredictor(data);
        } else {
          this.delegate.onPredictorFailed(new _CubeError.CubeError(state.code, state.desc));
        }
      }
    }, {
      key: "_parseMessageJson",
      value: function _parseMessageJson(json) {
        var msg = null;

        if (json.type == _MessageType.MessageType.Text) {
          msg = _TextMessage.TextMessage.parse(json);
        } else if (json.type == _MessageType.MessageType.Image) {
          msg = _ImageMessage.ImageMessage.parse(json);
        } else if (json.type == _MessageType.MessageType.Voice) {
          msg = _VoiceMessage.VoiceMessage.parse(json);
        } else if (json.type == _MessageType.MessageType.Video) {
          msg = _VideoMessage.VideoMessage.parse(json);
        } else if (json.type == _MessageType.MessageType.Whiteboard) {
          msg = _WhiteboardMessage.WhiteboardMessage.parse(json);
        } else if (json.type == _MessageType.MessageType.File) {
          msg = _FileMessage.FileMessage.parse(json);
        } else if (json.type == _MessageType.MessageType.Custom) {
          msg = _CustomMessage.CustomMessage.parse(json);
        } else if (json.type == _MessageType.MessageType.Card) {
          msg = _CardMessage.CardMessage.parse(json);
        } else if (json.type == _MessageType.MessageType.History) {
          msg = _HistoryMessage.HistoryMessage.parse(json);
        } else if (json.type == _MessageType.MessageType.Location) {
          msg = _LocationMessage.LocationMessage.parse(json);
        } else if (json.type == _MessageType.MessageType.RichContent) {
          msg = _RichContentMessage.RichContentMessage.parse(json);
        } else if (json.type == _MessageType.MessageType.Reply) {
          msg = _ReplyMessage.ReplyMessage.parse(json);
        } else {
          CellCloud.Logger.w("CubeMessageService", "Error message json format: " + JSON.stringify(json));
        }

        if (null != msg) {
          if (json.header) {
            for (var key in json.header) {
              msg.setHeader(key, json.header[key]);
            }
          }

          msg.update = json.time.update;
          msg.anonymous = json.anonymous;
          msg.direction = this.engine.accName == msg.sender.name ? _MessageDirection.MessageDirection.Sent : _MessageDirection.MessageDirection.Received;
        }

        return msg;
      }
    }, {
      key: "_fixMessage",
      value: function _fixMessage(msg, json) {
        if (json.type == _MessageType.MessageType.Text) {
          msg.content = json.content;
        } else if (json.type == _MessageType.MessageType.Image) {
          msg.file = json.file;
        } else if (json.type == _MessageType.MessageType.Voice) {
          msg.file = json.file;
        } else if (json.type == _MessageType.MessageType.Video) {
          msg.file = json.file;
        } else if (json.type == _MessageType.MessageType.Whiteboard) {
          msg.file = json.file;
        } else if (json.type == _MessageType.MessageType.File) {
          msg.file = json.file;
        } else if (json.type == _MessageType.MessageType.Card) {
          msg.content = json.content;
        } else if (json.type == _MessageType.MessageType.History) {
          msg.content = json.content;
        } else if (json.type == _MessageType.MessageType.Custom) {
          if (undefined !== json.header) {
            for (var key in json.header) {
              msg.setHeader(key, json.header[key]);
            }
          }

          if (undefined !== json.body) {
            msg.setBody(json.body);
          }
        } else {
          CellCloud.Logger.w("CubeMessageService", "Error message json format: " + JSON.stringify(json));
        }

        if (undefined !== json.header) {
          for (var _key in json.header) {
            msg.setHeader(_key, json.header[_key]);
          }
        }

        if (undefined !== json.body) {
          msg.setBody(json.body);
        }

        return msg;
      }
    }, {
      key: "_toTextMessage",
      value: function _toTextMessage(mix, content) {
        if (typeof content === "string") {
          var msg = new _TextMessage.TextMessage(mix, content);

          if (msg.content.length > this._msgSizeThreshold) {
            // 回调错误发生
            this.delegate.onMessageFailed(_StateCode.StateCode.ContentTooLong, msg);
            return false;
          } else {
            return msg;
          }
        } else if (content instanceof _MessageEntity.MessageEntity) {
          return content;
        } else {
          // 输入参数错误
          return false;
        }
      }
    }]);

    return MessageServiceWorker;
  }(_MessageService2.MessageService);

  _exports.MessageServiceWorker = MessageServiceWorker;
});

/***/ }),
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
/* 302 */
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
  _exports.MessageService = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var MessageService =
  /*#__PURE__*/
  function (_Service) {
    _inherits(MessageService, _Service);

    function MessageService() {
      _classCallCheck(this, MessageService);

      return _possibleConstructorReturn(this, _getPrototypeOf(MessageService).apply(this, arguments));
    }

    _createClass(MessageService, [{
      key: "sendMessage",

      /**
       * 发送消息。
       *
       * @param {String, MessageEntity, FileMessage} mix - 指定需要接收消息的 Cube 号，或者待发送的消息对象。
       * @param {String, MessageEntity, FileMessage} [content] - 指定消息内容。
       * @returns {boolean} 如果发送请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
       */
      value: function sendMessage(mix, content) {}
      /**
       * 撤回消息。
       *
       * @param {Number} sn - 指定需要撤回消息的SN, SN是每一条消息的唯一标识, 每一个 MessageEntity 及其子类都存在可读的 SN 字段。
       * @returns {boolean} 如果撤回请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "recallMessage",
      value: function recallMessage(sn) {}
      /**
       * 转发消息。
       *
       * @param {Array.<String>} sns - 指定需要转发消息的SN数组, SN是每一条消息的唯一标识, 每一个 MessageEntity 及其子类都存在可读的 SN 字段。
       * @param {Array.<String>} destinations - 指定消息转发目标数组。
       * @returns {boolean} 如果转发请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "forwardMessage",
      value: function forwardMessage(sns, destinations) {}
      /**
       * 查询消息历史记录。
       *
       * @param {String} conversation - 指定待查询消息的互动会话，可以是任意有效的用户或群组 Cube 号。
       * @param {Number} timestamp - 指定查询起始时间戳。
       * @param {Number} maxNumber - 指定查询最大数量。
       * @param {Function} callback - 查询结果回调函数。
       * @param {Function} error - 查询失败回调函数。
       * @returns {boolean} 如果查询请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "queryHistory",
      value: function queryHistory(conversation, timestamp, maxNumber, callback, error) {}
      /**
       * 根据sn查询消息记录。
       *
       * @param {Array.<String>} sns - 指定待查询消息的SN数组, SN是每一条消息的唯一标识, 每一个 MessageEntity 及其子类都存在可读的 SN 字段。
       * @param {Function} callback - 查询结果回调函数。
       * @returns {boolean} 如果查询请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "queryMessageBySns",
      value: function queryMessageBySns(sns, callback) {}
      /**
       * 取消发送消息。
       *
       * @param {MessageEntity} message - 指定需要取消发送的消息对象。
       * @returns {boolean} 如果取消请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "cancelMessage",
      value: function cancelMessage(message) {}
      /**
       * 回执消息
       * @param {Array.<String>} sns - 指定需要回执消息的SN数组, SN是每一条消息的唯一标识, 每一个 MessageEntity 及其子类都存在可读的 SN 字段。
       * @returns {boolean} 返回请求是否被引擎正确处理
       */

    }, {
      key: "receiptMessages",
      value: function receiptMessages(sns) {}
      /**
       * 回执所有消息
       * @param {String} sn - 指定需要回执消息的SN
       * @returns {boolean} 返回请求是否被引擎正确处理
       */

    }, {
      key: "receiptAllMessages",
      value: function receiptAllMessages(sn) {}
      /** 
       * 批量回执会话
       *  @param {Array} sessionIds = [{ sessionId:sessionId, timestamp:timestamp}]
       */

    }, {
      key: "receiptAllSessionIds",
      value: function receiptAllSessionIds(sessionIds) {}
      /**
       * 消息置顶。
       *
       * @param {String} cube - 操作是否置顶cube号。
       * @param {Boolean} isTop - 是否置顶。
       * @returns {Function} 置顶操作成功函数。
       */

    }, {
      key: "setTop",
      value: function setTop(cube, isTop, callback) {}
      /**
       * 同步未拉取消息
       *
       * @param beginTimestamp 开始时间（最大不超过最近一个月）
       */

    }, {
      key: "syncMessages",
      value: function syncMessages() {}
      /**
       * 暂停上传
       *
       * @param sn 暂停sn
       * @TODO 验证中
       */

    }, {
      key: "pauseMessage",
      value: function pauseMessage(sn, callback) {}
      /**
       * 恢复
       *
       * @param sn
       * @TODO 验证中
       */

    }, {
      key: "resumeMessage",
      value: function resumeMessage(sn) {}
      /**
       * 回复消息
       *
       * @param sn 原始消息sn
       * @param 回复消息内容
       * @TODO 验证中
       */

    }, {
      key: "replyMessage",
      value: function replyMessage(sn, reply) {}
      /**
       * 发送在线文件消息。
       *
       * @param {MessageEntity, FileMessage} mix - 指定需要接收消息的 Cube 号，或者待发送的消息对象。
       * @returns {boolean} 如果发送请求被引擎正确处理返回 <code>true</code>，否则返回 <code>false</code> 。
       * @TODO 验证中
       */

    }, {
      key: "sendOnlineFile",
      value: function sendOnlineFile(message) {}
    }]);

    return MessageService;
  }(_Service2.Service);

  _exports.MessageService = MessageService;
});

/***/ }),
/* 303 */
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
  _exports.MessageListener = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var MessageListener =
  /*#__PURE__*/
  function (_Listener) {
    _inherits(MessageListener, _Listener);

    function MessageListener() {
      _classCallCheck(this, MessageListener);

      return _possibleConstructorReturn(this, _getPrototypeOf(MessageListener).apply(this, arguments));
    }

    _createClass(MessageListener, [{
      key: "onSent",

      /**
       * 当发送消息成功被回调。
       *
       * @param {MessageEntity} message - 消息对象实例。
       */
      value: function onSent(message) {}
      /**
       * 当接收到消息时被回调。
       *
       * @param messages 回执消息列表
       * @param from      发送回执设备
       */

    }, {
      key: "onReceived",
      value: function onReceived(messages, from) {}
      /**
       * 当接收到消息时被回调。
       *
       * @param lastMessage   一般为当前会话最后一条消息
       * @param from          发送回执设备
       */

    }, {
      key: "onReceiptedAll",
      value: function onReceiptedAll(lastMessage, from) {}
      /**
       * 当有消息被撤回时被回调。
       *
       * @param {MessageEntity} message - 被撤回消息的副本。
       */

    }, {
      key: "onRecalled",
      value: function onRecalled(message) {}
      /**
       * 当有消息转发时被回调。
       *
       * @param {MessageEntity} message - 被转发消息的副本。
       * @param {Array.<MessageEntity>} successList - 转发成功的消息列表。
       * @param {Array.<MessageEntity>} unsuccessList - 转发识别的消息列表。
       */

    }, {
      key: "onForwarded",
      value: function onForwarded(message, successList, unsuccessList) {}
      /**
       * 当有消息被回执时回调
       *
       * @param message {MessageEntity} - 被回执的消息对象
       */

    }, {
      key: "onReceipted",
      value: function onReceipted(message) {}
      /**
       * 当文件消息上传进度变更时触发
       *
       * @param {FileMessage} message - 进度变更的消息对象
       * @param {Number} processed - 已经上传的字节数
       * @param {Number} total - 文件总大小
       */

    }, {
      key: "onUploading",
      value: function onUploading(message, processed, total) {}
      /**
       * 消息暂停
       *
       * @param {FileMessage} message - 消息对象
       */

    }, {
      key: "onPaused",
      value: function onPaused(message) {}
      /**
       * 消息恢复
       *
       * @param {FileMessage} message - 消息对象
       */

    }, {
      key: "onResumed",
      value: function onResumed(message) {}
      /**
       * 当文件消息上传完成时触发
       *
       * @param {FileMessage} message - 上传完成的消息对象
       */

    }, {
      key: "onUploadCompleted",
      value: function onUploadCompleted(message) {}
      /**
       * 开始同步消息
       *
       */

    }, {
      key: "onMessageSyncBegin",
      value: function onMessageSyncBegin() {}
      /**
       * 同步未拉取消息
       *
       * @param {Array} messageMap cube对应消息实体数组
       */

    }, {
      key: "onMessagesSyncing",
      value: function onMessagesSyncing(messageMap) {}
      /**
       * 结束同步消息
       *
       */

    }, {
      key: "onMessageSyncEnd",
      value: function onMessageSyncEnd() {}
      /**
       * 消息置顶
       *
       */

    }, {
      key: "onConcatTop",
      value: function onConcatTop(concat) {}
      /**
       * 预测结果回调
       *
       * @param result
       */

    }, {
      key: "onPredictor",
      value: function onPredictor(result) {}
      /**
       * 预测出错回调
       *
       * @param error
       */

    }, {
      key: "onPredictorFailed",
      value: function onPredictorFailed(error) {}
      /**
       * 联系人操作失败回调
       *
       */

    }, {
      key: "onContactFailed",
      value: function onContactFailed(error) {}
      /**
       * 在线文件传输失败通知
       * @param {type}  notOnline- 不在线  notSupportVersion -不支持版本 notSameIP- 不在同一局域网 unOnlineFile- 取消了发送或者接收 - 错误类型。
       * @param {message} [message] - 发生错误时的消息对象。
       */

    }, {
      key: "onLineFile",
      value: function onLineFile(type, msg) {}
      /**
       * 当消息发生错误时被回调。
       *
       * @param {StateCode} errorCode - 错误码。
       * @param {MessageEntity} [message] - 发生错误时的消息对象。
       */

    }, {
      key: "onMessageFailed",
      value: function onMessageFailed(errorCode, message) {}
    }]);

    return MessageListener;
  }(_Listener2.Listener);

  _exports.MessageListener = MessageListener;
});

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(1);

__webpack_require__(262);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(62);

__webpack_require__(64);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(267);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(305), __webpack_require__(306), __webpack_require__(307), __webpack_require__(308), __webpack_require__(309), __webpack_require__(312), __webpack_require__(316), __webpack_require__(317), __webpack_require__(318), __webpack_require__(319), __webpack_require__(320), __webpack_require__(321), __webpack_require__(322), __webpack_require__(311), __webpack_require__(323)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _DBMessage, _DBSyncMessage, _MessageType, _MessageDirection, _TextMessage, _FileMessage, _WhiteboardMessage, _ImageMessage, _VoiceMessage, _VideoMessage, _CardMessage, _CustomMessage, _ReplyMessage, _MessageStatus, _HistoryMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DBMessageService = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var DBMessageService =
  /*#__PURE__*/
  function () {
    function DBMessageService(engine) {
      _classCallCheck(this, DBMessageService);

      this.engine = engine;
      this.dbm = null;
    }

    _createClass(DBMessageService, [{
      key: "startup",
      value: function startup(callback) {
        this.dbm = this.engine.getDataBaseService();
        this.dbm.version = '6';
        this.dbm.toString = false;
        this.dbm.loadEntity(_DBMessage.CubeDBMessage);
        this.dbm.loadEntity(_DBSyncMessage.CubeDBSyncMessage);
        this.dbm.open('CubeMessageDataBase_' + this.engine.accName, function () {
          if (typeof callback == "function") callback();
        });
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
      key: "storageMessage",
      value: function storageMessage(message, offline, callback) {
        var _this = this;

        if (!this.dbm && !offline) {
          return;
        }

        var task = function task(fn) {
          var json = message.toJSON();

          if (message.fileStatus) {
            json.fileStatus = message.fileStatus;
          }

          var entity = new _DBMessage.CubeDBMessage(message.sn, message.sn, JSON.stringify(message.getSender()), JSON.stringify(message.getReceiver()), message.group ? JSON.stringify(message.group) : null, message.type, message.timestamp, message.update, message.getStatus(), JSON.stringify(message.getFromDevice()), JSON.stringify(message.getReceivedDevices()), message.isReceipted() ? 1 : 0, message.anonymous ? 1 : 0, JSON.stringify(json));

          _this.dbm.setEntity(_DBMessage.CubeDBMessage, [entity], function (err) {
            if (typeof callback == 'function') callback();
            fn && fn();
          });
        };

        if (this.engine.registered) {
          task();
        } else {
          this.offline(task);
        }
      }
    }, {
      key: "storageMessages",
      value: function storageMessages(messages, offline, callback) {
        var _this2 = this;

        if (!this.dbm && !offline) {
          return;
        }

        var task = function task(fn) {
          var entitys = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var message = _step.value;
              var json = message.toJSON();

              if (message.fileStatus) {
                json.fileStatus = message.fileStatus;
              }

              var entity = new _DBMessage.CubeDBMessage(message.sn, message.sn, JSON.stringify(message.getSender()), JSON.stringify(message.getReceiver()), message.group ? JSON.stringify(message.group) : null, message.type, message.timestamp, message.update, message.getStatus(), JSON.stringify(message.getFromDevice()), JSON.stringify(message.getReceivedDevices()), message.isReceipted() ? 1 : 0, message.anonymous ? 1 : 0, JSON.stringify(json));
              entitys.push(entity);
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

          _this2.dbm.setEntity(_DBMessage.CubeDBMessage, entitys, function () {
            if (typeof callback == 'function') callback();
            fn && fn();
          });
        };

        if (!offline || this.engine.registered) {
          task();
        } else {
          this.offline(task);
        }
      }
    }, {
      key: "storageSyncMessage",
      value: function storageSyncMessage(msg, callback, offline) {
        var _this3 = this;

        var self = this;

        if (!this.dbm && !offline) {
          return;
        }

        var task = function task(fn) {
          _this3.querySyncMessage(function (err, ret) {
            var val = ret[0];

            if (val && val.offline) {
              msg.offline = val.offline;
            }

            if (val && val.offlineAll) {
              msg.offlineAll = val.offlineAll;
            }

            var entity = new _DBSyncMessage.CubeDBSyncMessage(msg.name, msg.name, null, null, msg.offline, msg.offlineAll);
            self.dbm.setEntity(_DBSyncMessage.CubeDBSyncMessage, [entity], function (err) {
              if (typeof callback == 'function') callback();
              fn && fn();
            });
          });
        };

        if (this.engine.registered) {
          task();
        } else {
          this.offline(task);
        }
      }
    }, {
      key: "storageOffline",
      value: function storageOffline(keyName, keyValue, offline, callback) {
        var _this4 = this;

        var self = this;

        if (!this.dbm && !offline) {
          return;
        }

        var task = function task(fn) {
          _this4.querySyncMessage(function (err, ret) {
            var msg = ret[0] || {
              name: _this4.engine.accName,
              Messages: null,
              syncTimestamp: null,
              offline: [],
              offlineAll: [],
              offlineSessions: []
            };

            for (var name in msg) {
              if (name == keyName) {
                msg[keyName] = keyValue;
              }
            }

            var entity = new _DBSyncMessage.CubeDBSyncMessage(msg.name, msg.name, msg.Messages, msg.syncTimestamp, msg.offline, msg.offlineAll, msg.offlineSessions);
            self.dbm.setEntity(_DBSyncMessage.CubeDBSyncMessage, [entity], function (err) {
              if (typeof callback == 'function') {
                callback(err);
                fn && fn();
              }
            });
          }, true);
        };

        if (this.engine.registered) {
          task();
        } else {
          this.offline(task);
        }
      }
    }, {
      key: "querySyncMessage",
      value: function querySyncMessage(callback, offline) {
        var _this5 = this;

        //2019.03.13去掉500ms
        if (!this.dbm && !offline) {
          return;
        }

        var task = function task() {
          var con = new window.CubeCore.DB.DBCondition();
          con.add('name', _this5.engine.accName);

          _this5.dbm.query(_DBSyncMessage.CubeDBSyncMessage, con, function (err, ret) {
            if (err) {
              callback(err);
            } else {
              if (ret) {
                if (typeof callback == 'function') callback(false, ret);
              } else {
                if (typeof callback == 'function') callback(false, null);
              }
            }
          });
        };

        if (this.engine.registered) {
          task();
        } else {
          this.offline(task);
        }
      }
    }, {
      key: "queryMessageByStatus",
      value: function queryMessageByStatus(callback, offline) {
        var _this6 = this;

        if (!this.dbm && !offline) {
          return;
        }

        var task = function task() {
          var con = new window.CubeCore.DB.DBCondition(); //兼容2019-02-24号之前消息发送成功,状态为create或inprogress的消息就不管它
          //  con.add('sendTimestamp', window.CubeCore.DB.DBCondition.between((new Date('2019/02/24')).getTime(), Date.now()))

          con.add('status', [_MessageStatus.MessageStatus.CREATE, _MessageStatus.MessageStatus.INPROGRESS]);

          _this6.dbm.query(_DBMessage.CubeDBMessage, con, 0, 1000, false, function (err, ret) {
            if (ret && ret.length > 0) {
              var messages = [];

              for (var i = 0; i < ret.length; ++i) {
                if (_this6._parseMessage(ret[i])) {
                  messages.push(_this6._parseMessage(ret[i]));
                }
              }

              if (typeof callback == 'function') callback(false, messages, ret);
            } else {
              if (typeof callback == 'function') callback(false, null);
            }
          });
        };

        if (this.engine.registered) {
          task();
        } else {
          this.offline(task);
        }
      }
    }, {
      key: "queryMessageBySns",
      value: function queryMessageBySns(sns, callback, offline) {
        var _this7 = this;

        //2019.03.13去掉500ms
        if (!this.dbm && !offline) {
          return;
        }

        if (null == sns || null == sns[0]) {
          if (typeof callback == 'function') callback(true);
          return;
        }

        var task = function task() {
          var con = new window.CubeCore.DB.DBCondition();
          con.add('id', sns);

          _this7.dbm.query(_DBMessage.CubeDBMessage, con, function (err, ret) {
            if (err) {
              if (typeof callback == 'function') callback(err);
            } else {
              if (ret && ret.length > 0) {
                var messages = [];

                for (var i = 0; i < ret.length; ++i) {
                  if (_this7._parseMessage(ret[i])) {
                    messages.push(_this7._parseMessage(ret[i]));
                  }
                }

                if (typeof callback == 'function') callback(false, messages, ret);
              } else {
                if (typeof callback == 'function') callback(false, null);
              }
            }
          });
        };

        if (this.engine.registered) {
          task();
        } else {
          this.offline(task);
        }
      }
    }, {
      key: "queryAllMessage",
      value: function queryAllMessage(callback, offline) {
        var _this8 = this;

        if (!this.dbm && !offline) {
          return;
        }

        this.dbm.queryAll(_DBMessage.CubeDBMessage, function (err, ret) {
          if (err) {
            if (typeof callback == 'function') callback(err);
          } else {
            if (ret) {
              var messages = [];

              for (var i = 0; i < ret.length; ++i) {
                if (_this8._parseMessage(ret[i])) {
                  messages.push(_this8._parseMessage(ret[i]));
                }
              }

              if (typeof callback == 'function') callback(false, messages);
            } else {
              if (typeof callback == 'function') callback(false, null);
            }
          }
        });
      }
    }, {
      key: "queryMessageByColumn",
      value: function queryMessageByColumn(columnName, columnValue, callback, offline) {
        var _this9 = this;

        if (!this.dbm && !offline) {
          return;
        }

        var con = new window.CubeCore.DB.DBCondition();
        con.add(columnName, columnValue);
        this.dbm.query(_DBMessage.CubeDBMessage, con, function (err, ret) {
          if (err) {
            if (typeof callback == 'function') callback(err);
          } else {
            if (ret) {
              var messages = [];

              for (var i = 0; i < ret.length; ++i) {
                if (_this9._parseMessage(ret[i])) {
                  messages.push(_this9._parseMessage(ret[i]));
                }
              }

              if (typeof callback == 'function') callback(false, messages);
            } else {
              if (typeof callback == 'function') callback(false, null);
            }
          }
        });
      }
    }, {
      key: "queryUnReceiptBySessionId",
      value: function queryUnReceiptBySessionId(sessionId, timestamp, receipted, status, callback, offline) {
        var self = this;

        if (!this.dbm && !offline) {
          return;
        }

        var task = function task(callback) {
          var con = new window.CubeCore.DB.DBCondition(); // con.add('sendTimestamp', window.CubeCore.DB.DBCondition.between(0, timestamp.toString()));

          con.add('msgSessionId', sessionId);
          con.add('receipted', receipted);
          con.add('status', status);
          self.dbm.query(_DBMessage.CubeDBMessage, con, 0, 5000, false, function (err, ret) {
            if (ret && ret.length > 0) {
              var messages = [];

              for (var i = 0; i < ret.length; ++i) {
                if (self._parseMessage(ret[i])) {
                  messages.push(self._parseMessage(ret[i]));
                }
              }

              if (typeof callback == 'function') callback(false, messages, ret);
            } else {
              if (typeof callback == 'function') callback(false, null);
            }
          });
        };

        if (self.engine.registered) {
          task(callback);
        } else {
          self.offline(task);
        }
      }
    }, {
      key: "queryMaxTimeStamp",
      value: function queryMaxTimeStamp(callback, offline) {
        var _this10 = this;

        if (!this.dbm && !offline) {
          return;
        }

        var task = function task(columnName, fn) {
          var con = new window.CubeCore.DB.DBCondition(),
              count = 0;
          con.add(columnName, window.CubeCore.DB.DBCondition.between(0, _this10.engine._CUBE_LOGIN_TIME));
          con.add('status', [_MessageStatus.MessageStatus.SUCCESS]);

          _this10.dbm.queryOfCursor(_DBMessage.CubeDBMessage, con, 0, 1, true, function (err, data) {
            if (err) {
              if (typeof callback == 'function') callback(err);
            } else if (!count) {
              count++;
              fn(false, data);
            }
          });
        };

        task('sendTimestamp', function (err, data1) {
          if (err) throw err;
          task('update', function (err, data2) {
            if (err) throw err;
            var msg;

            if (data1 && data2) {
              msg = data1.sendTimestamp > data2.update ? data1 : data2;
            } else {
              msg = data1 || data2;
            }

            if (typeof callback == 'function') callback(false, msg);
          });
        });
      }
    }, {
      key: "queryUnReceipt",
      value: function queryUnReceipt(callback, offline) {
        var _this11 = this;

        if (!this.dbm && !offline) {
          return;
        }

        var con = new window.CubeCore.DB.DBCondition();
        con.add('receipted', false);
        this.dbm.query(_DBMessage.CubeDBMessage, con, function (err, data) {
          if (err) {
            if (typeof callback == 'function') callback(err);
          } else {
            if (data) {
              var messages = [];

              for (var i = 0; i < data.length; ++i) {
                if (_this11._parseMessage(data[i])) {
                  messages.push(_this11._parseMessage(data[i]));
                }
              }

              if (typeof callback == 'function') callback(false, messages);
            } else {
              if (typeof callback == 'function') callback(false, null);
            }
          }
        });
      }
    }, {
      key: "getMessageByColumGT",
      value: function getMessageByColumGT(columnName, columnValue, isSelf, callback, offline) {
        var _this12 = this;

        if (!this.dbm && !offline) {
          return;
        }

        var con = new window.CubeCore.DB.DBCondition();
        var condition = "gt";

        if (isSelf) {
          condition = 'gte';
        }

        con.add(columnName, window.CubeCore.DB.DBCondition[condition](columnValue));
        this.dbm.query(_DBMessage.CubeDBMessage, con, function (err, ret) {
          if (err) {
            if (typeof callback == 'function') callback(err);
          } else {
            if (ret) {
              var messages = [];

              for (var i = 0; i < ret.length; ++i) {
                if (_this12._parseMessage(ret[i])) {
                  messages.push(_this12._parseMessage(ret[i]));
                }
              }

              if (typeof callback == 'function') callback(false, messages, ret);
            } else {
              if (typeof callback == 'function') callback(false, null);
            }
          }
        });
      }
    }, {
      key: "delMessageByChatId",
      value: function delMessageByChatId(chatId, offline) {
        if (!this.dbm && !offline) {
          return;
        }

        var con = new window.CubeCore.DB.DBCondition();
        con.add('msgSessionId', chatId);
        this.dbm.delEntity(_DBMessage.CubeDBMessage, con, function (err) {
          console.log('会话删除', err);
        });
      }
    }, {
      key: "_parseMessage",
      value: function _parseMessage(ret) {
        var message;

        if (ret == undefined) {
          return false;
        }

        var receiver = ret.receiver ? JSON.parse(ret.receiver) : null;
        var sender = JSON.parse(ret.sender);
        var group = ret.groupInfo ? JSON.parse(ret.groupInfo) : null;
        var json = JSON.parse(ret.json);

        if (ret.type === _MessageType.MessageType.Text) {
          message = new _TextMessage.TextMessage(receiver.name, json.content);
        } else if (ret.type === _MessageType.MessageType.File) {
          message = new _FileMessage.FileMessage(receiver.name);
          message.file = json.file;
        } else if (ret.type === _MessageType.MessageType.Image) {
          message = new _ImageMessage.ImageMessage(receiver.name);
          message.file = json.file;
        } else if (ret.type === _MessageType.MessageType.Voice) {
          message = new _VoiceMessage.VoiceMessage(receiver.name);
          message.file = json.file;
        } else if (ret.type === _MessageType.MessageType.Video) {
          message = new _VideoMessage.VideoMessage(receiver.name);
          message.file = json.file;
        } else if (ret.type === _MessageType.MessageType.Whiteboard) {
          message = new _WhiteboardMessage.WhiteboardMessage(receiver.name);
          message.file = json.file;
        } else if (ret.type === _MessageType.MessageType.Card) {
          message = new _CardMessage.CardMessage(receiver.name, json.title, json.icon, json.url);
          message.file = json.file;
        } else if (ret.type === _MessageType.MessageType.History) {
          message = new _HistoryMessage.HistoryMessage(receiver.name, json.sns, json.messages);
          message.url = json.url;
        } else if (ret.type === _MessageType.MessageType.Custom) {
          message = new _CustomMessage.CustomMessage(receiver.name);

          if (undefined !== json.header) {
            for (var key in json.header) {
              message.setHeader(key, json.header[key]);
            }
          }

          if (undefined !== json.body) {
            message.setBody(json.body);
          }
        } else if (ret.type === _MessageType.MessageType.Reply) {
          message = new _ReplyMessage.ReplyMessage(receiver.name, json.reply, json.source);
          json.source && message.setSource(json.source);
        }

        if (message) {
          message.sn = ret.sn;
          message.sender = sender;
          message.receiver = receiver;

          if (null !== group) {
            message.group = group;
            message.groupName = group.name;
          }

          try {
            if (undefined !== json.header) {
              for (var _key in json.header) {
                message.setHeader(_key, json.header[_key]);
              }
            }

            if (undefined !== json.body) {
              message.setBody(json.body);
            }
          } catch (e) {
            window.cube.CellCloud.Logger.d('DBMessageService', "parseMessage error");
          }

          message.sendTime = json.time.send;
          message.receiveTime = json.time.receive;
          message.timestamp = json.time.timestamp;
          message.traceless = json.traceless;
          message.status = ret.status;
          message.fromDevice = ret.fromDevice ? JSON.parse(ret.fromDevice) : "";
          message.receivedDevices = ret.receivedDevices ? JSON.parse(ret.receivedDevices) : "";
          message.direction = this.engine.accName === message.sender ? _MessageDirection.MessageDirection.Sent : _MessageDirection.MessageDirection.Received;
          message.receipted = ret.receipted === 1;
          message.anonymous = json.anonymous ? true : false;

          if (message.fileStatus) {
            message.fileStatus = json.fileStatus;
          }

          return message;
        }
      }
    }, {
      key: "offline",
      value: function offline(task) {
        var _this13 = this;

        // 离线模式执行后 关闭
        this.startup(function () {
          task(function () {
            //2019.03.06如果是登录状态就不关闭数据库
            if (!_this13.engine.registered) {
              _this13.shutdown();
            }
          });
        });
      }
    }]);

    return DBMessageService;
  }();

  _exports.DBMessageService = DBMessageService;
});

/***/ }),
/* 305 */
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
  _exports.CubeDBMessage = void 0;

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
   * @class CubeDBEMessage
   * @author Guan Yong
   */
  var CubeDB = window.CubeCore.DB;

  var CubeDBMessage =
  /*#__PURE__*/
  function (_CubeDB$DBEntity) {
    _inherits(CubeDBMessage, _CubeDB$DBEntity);

    function CubeDBMessage(id, sn, sender, receiver, groupInfo, type, sendTimestamp, update, status, fromDevice, receivedDevices, receipted, anonymous, json) {
      var _this;

      _classCallCheck(this, CubeDBMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CubeDBMessage).call(this, id, 'CubeDBMessage'));
      _this.msgSessionId = '';

      if (groupInfo != null) {
        var groupInfoObj = JSON.parse(groupInfo);
        _this.msgSessionId = groupInfoObj.name;
      } else if (sender != null && receiver != null) {
        var senderObj = JSON.parse(sender);
        var receiverObj = JSON.parse(receiver);
        _this.msgSessionId = window.cube.accName != senderObj.name ? senderObj.name : receiverObj.name;
      }

      _this.sn = sn;
      _this.sender = sender;
      _this.receiver = receiver;
      _this.groupInfo = groupInfo;
      _this.type = type;
      _this.sendTimestamp = sendTimestamp;
      _this.status = status;
      _this.fromDevice = fromDevice;
      _this.receivedDevices = receivedDevices;
      _this.json = json;
      _this.receipted = receipted;
      _this.anonymous = anonymous;
      _this.update = update;
      return _this;
    }

    _createClass(CubeDBMessage, null, [{
      key: "onChange",
      value: function onChange(version, table) {
        try {
          if (version < 5) {
            table.append('update');
          }

          if (version < 6) {
            table.append('msgSessionId');
          }
        } catch (e) {}
      }
    }]);

    return CubeDBMessage;
  }(CubeDB.DBEntity);

  _exports.CubeDBMessage = CubeDBMessage;
});

/***/ }),
/* 306 */
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
  _exports.CubeDBSyncMessage = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  /**
   * 同步消息表。
   *
   * @class CubeDBEMessage
   * @author Guan Yong
   */
  var CubeDB = window.CubeCore.DB;

  var CubeDBSyncMessage =
  /*#__PURE__*/
  function (_CubeDB$DBEntity) {
    _inherits(CubeDBSyncMessage, _CubeDB$DBEntity);

    function CubeDBSyncMessage(id, name, Messages, syncTimestamp) {
      var _this;

      var offline = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
      var offlineAll = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
      var offlineSessions = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];

      _classCallCheck(this, CubeDBSyncMessage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CubeDBSyncMessage).call(this, id, 'CubeDBSyncMessage'));
      _this.Messages = Messages;
      _this.name = name;
      _this.syncTimestamp = syncTimestamp;
      _this.offline = offline;
      _this.offlineAll = offlineAll;
      _this.offlineSessions = offlineSessions;
      return _this;
    }

    return CubeDBSyncMessage;
  }(CubeDB.DBEntity);

  _exports.CubeDBSyncMessage = CubeDBSyncMessage;
});

/***/ }),
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
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(210);

__webpack_require__(1);

__webpack_require__(108);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(62);

__webpack_require__(64);

__webpack_require__(224);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(196);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(238)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _StateCode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.MessageQueue = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var MessageQueue =
  /*#__PURE__*/
  function () {
    function MessageQueue(worker, delegate) {
      _classCallCheck(this, MessageQueue);

      // 队列数据
      this.list = [];
      this.fileList = []; // 超时时间

      this.timeout = 180000; // 定时器

      this.tick = null;
      this.delegate = delegate;
      this.worker = worker;
    }

    _createClass(MessageQueue, [{
      key: "read",
      value: function read(sn) {
        var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        for (var i = 0; i < this.worker.pendingMessageList.length; i++) {
          if (sn == this.worker.pendingMessageList[i].sn) {
            this.worker.pendingMessageList.splice(i, 1);
          }
        }

        for (var _i = 0; _i < this.list.length; _i++) {
          var entity = this.list[_i];

          if (entity.sn === sn) {
            if (remove) {
              this.list.splice(_i, 1);
            }

            return entity;
          }
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.fileList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _entity = _step.value;

            if (_entity.sn === sn) {
              return _entity;
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

        return null;
      }
    }, {
      key: "enqueue",
      value: function enqueue(entity) {
        var _this = this;

        if (entity._notifyAck) {
          // 如果是文件或图片消息, 则不验证
          this.fileList.push(entity);
        }

        var sn = entity.sn;

        if (!JSON.stringify(this.list).includes(sn)) {
          // 避免再次入队
          this.list.push(entity);

          if (this.list.length <= 1) {
            this.tick = setTimeout(function () {
              _this.check(sn);
            }, this.timeout);
          }
        }
      }
    }, {
      key: "dequeue",
      value: function dequeue(sn) {
        this.read(sn, true);

        if (this.list.length === 0) {
          clearTimeout(this.tick);
        }
      }
    }, {
      key: "check",
      value: function check(sn) {
        var _this2 = this;

        var msg = this.read(sn, true);

        if (msg) {
          this.delegate.onMessageFailed(_StateCode.StateCode.RequestTimeout, msg);
        }

        if (this.list.length > 0) {
          var entity = this.list[0];
          var delay = this.timeout - (Date.now() - entity.sendTime);
          this.tick = setTimeout(function () {
            _this2.check(entity.sn);
          }, delay > 0 ? delay : 0);
        }
      }
    }]);

    return MessageQueue;
  }();

  _exports.MessageQueue = MessageQueue;
});

/***/ }),
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=CubeMessage.js.map