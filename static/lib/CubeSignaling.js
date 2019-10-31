(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CubeSignaling"] = factory();
	else
		root["CubeSignaling"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 341);
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
/* 69 */,
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
/* 83 */,
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
/* 87 */,
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
/* 236 */,
/* 237 */,
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
/* 298 */,
/* 299 */,
/* 300 */,
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
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(1);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(62);

__webpack_require__(64);

__webpack_require__(132);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(196);

__webpack_require__(200);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(335)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Recorder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CubeAdvancedRecorder = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /*
   * AdvancedRecorder.js
   * Cube Engine
   *
   * Created by Ambrose Xu on 15/7/8.
   * Copyright (c) 2015 Cube Team. All rights reserved.
   */
  var Logger = window.CellCloud.Logger;

  var CubeAdvancedRecorder =
  /*#__PURE__*/
  function () {
    function CubeAdvancedRecorder(previewVideo, config, worker) {
      _classCallCheck(this, CubeAdvancedRecorder);

      this.preview = null;
      this.maxWidth = 320;
      this.maxHeight = 240;
      this.maxFrameRate = 20;
      this.minFrameRate = 5;
      this.utils = worker.engine.getUtils();
      this.worker = worker;
      this.config = config; // 默认间隔 30 秒
      //  this.interval = 30000;

      this.stream = null;
      this.recorder = null;
      this.timer = 0;
      this.storeKeyList = [];
      this.durationList = [];
      this.sizeList = [];
      this.prefix = "cube";
      this.interval = config.interval || 30000;

      if (undefined !== previewVideo && null != previewVideo) {
        this.preview = previewVideo;
      } // 读取配置


      Logger.d("AdvancedRecorder", "config: " + JSON.stringify(config));
    }

    _createClass(CubeAdvancedRecorder, [{
      key: "startRecording",
      value: function startRecording(stream) {
        var _this = this;

        if (this.timer > 0) {
          return false;
        }

        this.prefix = "" + parseInt(Date.now() / 1000.0);

        var handle = function handle(stream) {
          _this.stream = stream;

          if (null != _this.preview) {
            _this.attachMediaStream(_this.preview, stream);

            _this.preview.muted = true;
            _this.preview.controls = false;
            _this.preview.style.visibility = 'visible';
          } // 记录器


          _this.recorder = new _Recorder.CubeRecorder(_this.preview, _this.worker, _this.config);

          _this.recorder.startRecording(_this.stream);

          _this.timer = setTimeout(function () {
            _this._continue();
          }, _this.interval);
        };

        if (stream === undefined || null == stream) {
          var constraints = null;

          if (this.utils.isFirefox) {
            constraints = {
              "width": {
                "min": 160,
                "max": this.maxWidth
              },
              "height": {
                "min": 120,
                "max": this.maxHeight
              },
              "frameRate": parseInt(this.maxFrameRate),
              "require": ["width", "height", "frameRate"]
            };
          } else {
            constraints = {
              "mandatory": {
                "maxWidth": this.maxWidth,
                "maxHeight": this.maxHeight,
                "minWidth": 160,
                "minHeight": 120,
                "maxFrameRate": this.maxFrameRate,
                "minFrameRate": this.minFrameRate
              }
            };
          }

          navigator.getUserMedia({
            audio: true,
            video: constraints
          }, function (stream) {
            handle(stream);
          }, function (error) {
            alert(JSON.stringify(error));
          });
        } else {
          handle(stream);
        }

        return true;
      }
    }, {
      key: "stopRecording",
      value: function stopRecording(callback) {
        var _this2 = this;

        clearTimeout(this.timer);
        this.timer = 0; // 停止录制

        this.recorder.stopRecording(function (r) {
          // 保存 Key 值
          _this2.storeKeyList.push(_this2.recorder.startTime + 0); // 记录时长


          _this2.durationList.push(_this2.recorder.duration + 0); // 记录文件长度


          _this2.sizeList.push(_this2.recorder.getSize() + 0);

          var old = _this2.recorder;
          var timestamp = old.save(_this2.prefix, function () {
            old.dispose();
            old = null;
          });
          _this2.recorder = null;

          if (null != _this2.preview) {
            _this2.preview.src = _this2.utils.isFirefox ? null : "";

            try {
              _this2.stream.stop();
            } catch (e) {}
          }

          _this2.stream = null;
          callback.call(null, _this2);
        });
      }
    }, {
      key: "pauseRecording",
      value: function pauseRecording() {}
    }, {
      key: "resumeRecording",
      value: function resumeRecording() {}
    }, {
      key: "uploadRecordings",
      value: function uploadRecordings(url, parameter, success, error) {
        var _this3 = this;

        if (this.storeKeyList.length > 0) {
          // 取出数据
          var t = this.storeKeyList.shift();
          var r = new _Recorder.CubeRecorder();
          r.startTime = t; // 从缓存上传

          r._uploadFromDB(url, parameter, function () {
            r._deleteFromDB();

            if (_this3.storeKeyList.length > 0) {
              setTimeout(function () {
                _this3.uploadRecordings(url, parameter, success, error);
              }, 10);
            } else {
              success.call(null, _this3, parameter);
            }

            r = null;
          }, error);
        }

        return true;
      }
    }, {
      key: "replay",
      value: function replay(video, audio) {
        alert();
      }
    }, {
      key: "clearAll",
      value: function clearAll() {
        // 开启数据库
        var db = null;
        var request = window.indexedDB.open("_cube_recording", 1);

        request.onerror = function (event) {
          Logger.e("CubeRecorder", "Can NOT use IndexedDB");
        };

        request.onupgradeneeded = function (event) {
          db = event.target.result;

          if (!db.objectStoreNames.contains("recording")) {
            var objectStore = db.createObjectStore("recording", {
              keyPath: "time"
            });
            objectStore.createIndex("time", "time", {
              unique: true
            });
          }
        };

        request.onsuccess = function (event) {
          db = event.target.result; //db.transaction(["recording"], "readwrite").objectStore("recording")['delete'](self.startTime);
        };
      }
    }, {
      key: "numRecordings",
      value: function numRecordings() {
        return this.storeKeyList.length;
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        var ret = 0;

        if (this.durationList.length > 0) {
          for (var i = 0; i < this.durationList.length; ++i) {
            ret += this.durationList[i];
          }
        }

        if (null != this.recorder) {
          ret += this.recorder.getDuration();
        }

        return ret;
      }
    }, {
      key: "getSize",
      value: function getSize() {
        var ret = 0;

        if (this.sizeList.length > 0) {
          for (var i = 0; i < this.sizeList.length; ++i) {
            ret += this.sizeList[i];
          }
        }

        if (null != this.recorder && !this.recorder.recording) {
          ret += this.recorder.getSize();
        }

        return ret;
      }
    }, {
      key: "_continue",
      value: function _continue() {
        var _this4 = this;

        if (null == this.recorder) {
          return;
        }

        clearTimeout(this.timer); // 停止录制

        var old = this.recorder;
        this.recorder.stopRecording(function (r) {
          var timestamp = old.save(_this4.prefix, function () {
            old.dispose();
          }); // 保存 Key 值

          _this4.storeKeyList.push(timestamp); // 记录时长


          _this4.durationList.push(old.duration + 0); // 记录文件长度


          _this4.sizeList.push(old.getSize() + 0);
        }); // 启动新的记录器

        this.recorder = new _Recorder.CubeRecorder();
        this.recorder.startRecording(this.stream);
        this.timer = setTimeout(function () {
          _this4._continue();
        }, this.interval);
      }
    }, {
      key: "attachMediaStream",
      value: function attachMediaStream(video, stream) {
        if (window.URL) {
          // Chrome case: URL.createObjectURL() converts a MediaStream to a blob URL
          video.src = window.URL.createObjectURL(stream);
        } else {
          // Firefox and Opera: the src of the video can be set directly from the stream
          video.src = stream;
        }

        video.onloadedmetadata = function (e) {
          video.play();
        };
      }
    }]);

    return CubeAdvancedRecorder;
  }();

  _exports.CubeAdvancedRecorder = CubeAdvancedRecorder;
});

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(1);

__webpack_require__(107);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(62);

__webpack_require__(64);

__webpack_require__(132);

__webpack_require__(67);

__webpack_require__(89);

__webpack_require__(200);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(336)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _RecordRTC) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CubeRecorder = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var Logger = window.CellCloud.Logger;

  var CubeRecorder =
  /*#__PURE__*/
  function () {
    function CubeRecorder(previewVideo, worker, config) {
      _classCallCheck(this, CubeRecorder);

      this.isFirefox = !!navigator.mozGetUserMedia;
      this.recording = false;
      this.utils = worker.engine.getUtils();
      this.config = config; // 结束回调

      this.recordEnd = null;
      this.maxWidth = 320;
      this.maxHeight = 240;
      this.maxFrameRate = 15;
      this.minFrameRate = 5;
      this.recordVideo = null;
      this.recordAudio = null;
      this.videoUrl = null;
      this.audioUrl = null;
      this.preview = null;
      this.stream = null; // 时长

      this.startTime = 0;
      this.duration = 0; // 数据库

      this.db = null;

      if (undefined !== previewVideo) {
        this.preview = previewVideo;
      }
    }

    _createClass(CubeRecorder, [{
      key: "dispose",
      value: function dispose() {
        this.stream = null;
        this.recordEnd = null;
      }
    }, {
      key: "startRecording",
      value: function startRecording(stream) {
        var _this = this;

        if (this.recording) {
          return false;
        }

        this.recording = true;
        this.startTime = 0;
        this.duration = 0;

        var handle = function handle(stream) {
          _this.stream = stream;

          if (null != _this.preview) {
            _this.attachMediaStream(_this.preview, stream);

            _this.preview.muted = true;
            _this.preview.controls = false;
            _this.preview.style.visibility = 'visible';
          }

          if (!_this.isFirefox) {
            _this.recordAudio = (0, _RecordRTC.RecordRTC)(stream, {
              bufferSize: 16384,
              sampleRate: 45000,
              type: _this.config.type,
              // Windows 7 上进行音画同步
              onAudioProcessStarted: function onAudioProcessStarted() {
                _this.recordVideo.startRecording();
              }
            });
          }

          _this.recordVideo = (0, _RecordRTC.RecordRTC)(stream, {
            type: "video"
          });

          if (null != _this.recordAudio) {
            _this.recordAudio.startRecording();
          } else {
            _this.recordVideo.startRecording();
          }

          _this.startTime = Date.now();
        };

        if (stream === undefined || null == stream) {
          var constraints = null;

          if (this.isFirefox) {
            constraints = {
              "width": {
                "min": 160,
                "max": this.maxWidth
              },
              "height": {
                "min": 120,
                "max": this.maxHeight
              },
              "frameRate": parseInt(this.maxFrameRate),
              "require": ["width", "height", "frameRate"]
            };
          } else {
            constraints = {
              "mandatory": {
                "maxWidth": this.maxWidth,
                "maxHeight": this.maxHeight,
                "minWidth": 160,
                "minHeight": 120,
                "maxFrameRate": this.maxFrameRate,
                "minFrameRate": this.minFrameRate
              }
            };
          }

          navigator.getUserMedia({
            audio: true,
            video: constraints
          }, function (stream) {
            handle(stream);
          }, function (error) {
            alert(JSON.stringify(error));
          });
        } else {
          handle(stream);
        }

        return true;
      }
    }, {
      key: "stopRecording",
      value: function stopRecording(callback) {
        var _this2 = this;

        if (!this.recording) {
          return false;
        }

        this.recording = false;
        var called = null != this.recordVideo ? 1 : 0;
        called += null != this.recordAudio ? 1 : 0;

        if (null != this.recordVideo) {
          this.recordVideo.stopRecording(function (url) {
            _this2.duration = Date.now() - _this2.startTime;
            _this2.videoUrl = url;
            --called;

            if (undefined !== callback && 0 == called) {
              callback.call(null, _this2);
            }

            if (null != _this2.recordEnd) {
              _this2.recordEnd.call(null, _this2);
            }

            if (null != _this2.preview) {
              _this2.preview.src = "";

              try {
                _this2.stream.stop();
              } catch (e) {}
            }

            _this2.stream = null;
          });
        }

        if (null != this.recordAudio) {
          this.recordAudio.stopRecording(function (url) {
            _this2.audioUrl = url;
            --called;

            if (undefined !== callback && 0 == called) {
              callback.call(null, _this2);
            }
          });
        }
      }
    }, {
      key: "replay",
      value: function replay(video, audio) {
        var _this3 = this;

        if (this.recording) {
          return false;
        }

        if (null != this.recordAudio) {
          // 音视频同步播放
          video.onplay = function (e) {
            audio.play();
          };

          video.onpause = function (e) {
            audio.pause();
          };

          audio.muted = false;

          if (window.URL) {
            audio.src = window.URL.createObjectURL(this.recordAudio.getBlob());
          } else {
            audio.src = this.recordAudio.getBlob();
          }
        }

        if (null != this.recordVideo) {
          /*video.onloadeddata = function(e) {
           video.play();
           };*/
          video.muted = false;
          video.controls = true;

          video.onended = function (e) {
            //video.pause();
            //video.onloadeddata = function(e) {};
            if (_this3.isFirefox) {
              if (window.URL) {
                video.src = window.URL.createObjectURL(_this3.recordVideo.getBlob());
              } else {
                video.src = _this3.recordVideo.getBlob();
              }
            } else {
              if (null != _this3.recordAudio) {
                audio.pause();

                if (window.URL) {
                  audio.src = window.URL.createObjectURL(_this3.recordAudio.getBlob());
                } else {
                  audio.src = _this3.recordAudio.getBlob();
                }
              }
            }
          };

          if (window.URL) {
            video.src = window.URL.createObjectURL(this.recordVideo.getBlob());
          } else {
            video.src = this.recordVideo.getBlob();
          }
        }

        return true;
      }
    }, {
      key: "getVideoUrl",
      value: function getVideoUrl() {
        return this.videoUrl;
      }
    }, {
      key: "save",
      value: function save(prefix, complete, error) {
        var _this4 = this;

        var video = null != this.recordVideo;
        var audio = null != this.recordAudio;
        var videoData = null;
        var audioData = null;
        var videoSize = video ? this.recordVideo.blob.size : 0;
        var audioSize = audio ? this.recordAudio.blob.size : 0;
        var time = new Date(this.startTime);
        var str = [prefix, "_", time.getFullYear(), time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1, time.getDate() < 10 ? "0" + time.getDate() : time.getDate(), time.getHours() < 10 ? "0" + time.getHours() : time.getHours(), time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes(), time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds(), "_", parseInt(this.duration / 1000.0)];
        var fileName = str.join('');
        var timestamp = this.startTime; // 待存储数据

        var store = null; // 数据库

        var db = null; // 读数据

        if (video) {
          // 从 Blob 读取
          var reader = new FileReader();

          reader.onload = function (event) {
            videoData = event.target.result;

            if (audio && null != audioData) {
              store = {
                time: timestamp,
                video: {
                  name: fileName + '.webm',
                  size: videoSize,
                  data: videoData
                },
                audio: {
                  name: fileName + '.wav',
                  size: audioSize,
                  data: audioData
                }
              }; // 写入数据

              _this4._save(db, store, complete, error);
            } else if (!audio) {
              store = {
                time: timestamp,
                video: {
                  name: fileName + '.webm',
                  size: videoSize,
                  data: videoData
                }
              }; // 写入数据

              _this4._save(db, store, complete, error);
            }
          }; // 读数据


          reader.readAsDataURL(this.recordVideo.blob);
        }

        if (audio) {
          // 从 Blob 读取
          var reader = new FileReader();

          reader.onload = function (event) {
            audioData = event.target.result;

            if (video && null != videoData) {
              store = {
                time: timestamp,
                video: {
                  name: fileName + '.webm',
                  size: videoSize,
                  data: videoData
                },
                audio: {
                  name: fileName + '.wav',
                  size: audioSize,
                  data: audioData
                }
              }; // 写入数据

              _this4._save(db, store, complete, error);
            } else if (!video) {
              store = {
                time: timestamp,
                audio: {
                  name: fileName + '.wav',
                  size: audioSize,
                  data: audioData
                }
              }; // 写入数据

              _this4._save(db, store, complete, error);
            }
          }; // 读数据


          reader.readAsDataURL(this.recordAudio.blob);
        } // 开启数据库


        var request = window.indexedDB.open("_cube_recording", 1);

        request.onerror = function (event) {
          Logger.e("CubeRecorder", "Can NOT use IndexedDB");
        };

        request.onupgradeneeded = function (event) {
          //Logger.d("", "onupgradeneeded");
          db = event.target.result;

          if (!db.objectStoreNames.contains("recording")) {
            var objectStore = db.createObjectStore("recording", {
              keyPath: "time"
            });
            objectStore.createIndex("time", "time", {
              unique: true
            });
          }
        };

        request.onsuccess = function (event) {
          //Logger.d("", "onsuccess");
          db = event.target.result; // 写入数据

          _this4._save(db, store, complete, error);
        };

        return timestamp;
      }
    }, {
      key: "_save",
      value: function _save(db, data, complete, error) {
        if (null == db || null == data) {
          return;
        } // 存储


        var transaction = db.transaction(["recording"], "readwrite");

        transaction.oncomplete = function (event) {
          complete.call(null, data);
        };

        transaction.onerror = function (event) {
          error.call(null, data);
        }; // 添加数据


        transaction.objectStore("recording").add(data);
      }
    }, {
      key: "uploadTo",
      value: function uploadTo(url, parameter, success, error) {
        return this._upload(url, parameter, "cube", success, error);
      }
    }, {
      key: "upload",
      value: function upload(accountName, prefix, success, error, cors) {
        if (null == accountName || null == prefix) {
          return false;
        }

        var mix = true;

        if (undefined !== cors) {
          mix = cors;
        }

        return this._upload(mix, {
          "account": accountName
        }, prefix, success, error);
      }
    }, {
      key: "_upload",
      value: function _upload(mix, param, prefix, callback, error) {
        var _this5 = this;

        if (null == mix || null == param || null == prefix) {
          return false;
        }

        var time = new Date(this.startTime);
        var str = [prefix, "_", time.getFullYear(), time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1, time.getDate() < 10 ? "0" + time.getDate() : time.getDate(), time.getHours() < 10 ? "0" + time.getHours() : time.getHours(), time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes(), time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds(), "_", parseInt(this.duration / 1000.0)];
        var fileName = str.join('');
        var video = null != this.recordVideo;
        var audio = null != this.recordAudio;
        var videoData = null;
        var audioData = null;

        if (video) {
          // 从 Blob 读取
          var reader = new FileReader();

          reader.onload = function (event) {
            videoData = event.target.result;

            if (audio && null != audioData) {
              _this5._post(mix, param, {
                name: fileName + '.webm',
                size: _this5.recordVideo.blob.size,
                data: videoData
              }, {
                name: fileName + '.wav',
                size: _this5.recordAudio.blob.size,
                data: audioData
              }, callback, error);
            } else if (!audio) {
              _this5._post(mix, param, {
                name: fileName + '.webm',
                size: _this5.recordVideo.blob.size,
                data: videoData
              }, null, callback, error);
            }
          };

          reader.readAsDataURL(this.recordVideo.blob);
        }

        if (audio) {
          // 从 Blob 读取
          var reader = new FileReader();

          reader.onload = function (event) {
            audioData = event.target.result;

            if (video && null != videoData) {
              _this5._post(mix, param, {
                name: fileName + '.webm',
                size: _this5.recordVideo.blob.size,
                data: videoData
              }, {
                name: fileName + '.wav',
                size: _this5.recordAudio.blob.size,
                data: audioData
              }, callback, error);
            } else if (!video) {
              _this5._post(mix, param, null, {
                name: fileName + '.wav',
                size: _this5.recordAudio.blob.size,
                data: audioData
              }, callback, error);
            }
          };

          reader.readAsDataURL(this.recordAudio.blob);
        }

        return true;
        /*var data = new FormData();
           if (null != this.recordVideo) {
         data.append("video-filename", fileName + ".webm");
         data.append("video-size", this.recordVideo.blob.size);
         data.append("video-blob", this.recordVideo.blob);
         }
           var request = new XMLHttpRequest();
         request.onreadystatechange = function () {
         if (request.readyState == 4 && request.status == 200) {
         Logger.d('log', 'log: ' + location.href + request.responseText);
         }
         };
         request.open("POST", "archive/save?name=" + accountName);
         request.send(data);*/
      }
    }, {
      key: "_uploadFromDB",
      value: function _uploadFromDB(url, parameter, success, error) {
        var _this6 = this;

        var time = this.startTime; // 开启数据库

        var db = null;
        var request = window.indexedDB.open("_cube_recording", 1);

        request.onerror = function (event) {
          Logger.e("CubeRecorder", "Can NOT use IndexedDB");
          error.call(null, _this6);
        };

        request.onupgradeneeded = function (event) {
          db = event.target.result;
          _this6.db = db;

          if (!db.objectStoreNames.contains("recording")) {
            var objectStore = db.createObjectStore("recording", {
              keyPath: "time"
            });
            objectStore.createIndex("time", "time", {
              unique: true
            });
          }
        };

        request.onsuccess = function (event) {
          db = event.target.result;
          _this6.db = db; // 读取数据

          var transaction = db.transaction(["recording"]);
          var objectStore = transaction.objectStore("recording");
          var req = objectStore.get(time);

          req.onsuccess = function (event) {
            var data = event.target.result;
            var video = undefined !== data.video ? data.video : null;
            var audio = undefined !== data.audio ? data.audio : null; // 提交数据

            _this6._post(url, parameter, video, audio, success, error);

            Logger.d("CubeRecorder", "Post data to " + url);
          };
        };
      }
    }, {
      key: "_deleteFromDB",
      value: function _deleteFromDB() {
        var _this7 = this;

        if (null == this.db) {
          // 开启数据库
          var db = null;
          var request = window.indexedDB.open("_cube_recording", 1);

          request.onerror = function (event) {
            Logger.e("CubeRecorder", "Can NOT use IndexedDB");
          };

          request.onupgradeneeded = function (event) {
            db = event.target.result;
            _this7.db = db;

            if (!db.objectStoreNames.contains("recording")) {
              var objectStore = db.createObjectStore("recording", {
                keyPath: "time"
              });
              objectStore.createIndex("time", "time", {
                unique: true
              });
            }
          };

          request.onsuccess = function (event) {
            db = event.target.result;
            _this7.db = db;
            db.transaction(["recording"], "readwrite").objectStore("recording")['delete'](_this7.startTime);
          };
        } else {
          this.db.transaction(["recording"], "readwrite").objectStore("recording")['delete'](this.startTime);
        }
      }
    }, {
      key: "_post",
      value: function _post(mix, parameters, video, audio, callback, error) {
        var _this8 = this;

        var data = new FormData();
        data.append("param", JSON.stringify(parameters));

        if (null != video) {
          data.append("video-filename", video.name);
          data.append("video-size", video.size);
          data.append("video-data", video.data);
        }

        if (null != audio) {
          data.append("audio-filename", audio.name);
          data.append("audio-size", audio.size);
          data.append("audio-data", audio.data);
        }

        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
          if (request.readyState == 4) {
            if (request.status == 200) {
              //Logger.d('log', 'log: ' + location.href + request.responseText);
              if (undefined !== callback) {
                callback.call(null, _this8, parameters);
              }
            } else {
              if (undefined !== error) {
                error.call(null, _this8, parameters);
              }
            }
          }
        };

        if (typeof mix === 'string') {
          request.open("POST", mix);
        } else if (mix) {
          request.open("POST", window._cube_cross.host + "/archive/save");
        } else {
          request.open("POST", "archive/save");
        } // 发送数据


        request.send(data);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.recordVideo = null;
        this.recordAudio = null;
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        if (0 == this.startTime) {
          return 0;
        }

        if (0 == this.duration) {
          return Date.now() - this.startTime;
        }

        return this.duration;
      }
    }, {
      key: "getSize",
      value: function getSize() {
        var size = 0;
        size += null != this.recordVideo ? this.recordVideo.blob.size : 0;
        size += null != this.recordAudio ? this.recordAudio.blob.size : 0;
        return size;
      }
    }, {
      key: "attachMediaStream",
      value: function attachMediaStream(video, stream) {
        if (window.URL) {
          // Chrome case: URL.createObjectURL() converts a MediaStream to a blob URL
          video.src = window.URL.createObjectURL(stream);
        } else {
          // Firefox and Opera: the src of the video can be set directly from the stream
          video.src = stream;
        }

        video.onloadedmetadata = function (e) {
          video.play();
        };
      }
    }]);

    return CubeRecorder;
  }();

  _exports.CubeRecorder = CubeRecorder;
});

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(199);

__webpack_require__(100);

__webpack_require__(106);

__webpack_require__(1);

__webpack_require__(107);

__webpack_require__(211);

__webpack_require__(258);

__webpack_require__(212);

__webpack_require__(278);

__webpack_require__(110);

__webpack_require__(337);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(120);

__webpack_require__(338);

__webpack_require__(62);

__webpack_require__(64);

__webpack_require__(132);

__webpack_require__(139);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(142);

__webpack_require__(146);

__webpack_require__(339);

__webpack_require__(340);

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

__webpack_require__(195);

__webpack_require__(89);

__webpack_require__(196);

__webpack_require__(200);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  // Last time updated at March 13, 2015, 08:32:23
  // links:
  // Open-Sourced: https://github.com/muaz-khan/RecordRTC
  // http://cdn.WebRTC-Experiment.com/RecordRTC.js
  // http://www.WebRTC-Experiment.com/RecordRTC.js (for China users)
  // http://RecordRTC.org/latest.js (for China users)
  // npm install recordrtc
  // http://recordrtc.org/
  // updates?

  /*
   -. Fixed echo.
   -. CanvasRecorder fixed.
   -. You can pass "recorderType" - RecordRTC(stream, { recorderType: window.WhammyRecorder });
   -. If MediaStream is suddenly stopped in Firefox.
   -. Added "disableLogs"         - RecordRTC(stream, { disableLogs: true });
   -. You can pass "bufferSize:0" - RecordRTC(stream, { bufferSize: 0 });
   -. You can set "leftChannel"   - RecordRTC(stream, { leftChannel: true });
   -. Fixed MRecordRTC.
   -. Added functionality for analyse black frames and cut them - pull#293
   -. if you're recording GIF, you must link: https://cdn.webrtc-experiment.com/gif-recorder.js
   */
  //------------------------------------
  // Browsers Support::
  // Chrome (all versions) [ audio/video separately ]
  // Firefox ( >= 29 ) [ audio/video in single webm/mp4 container or only audio in ogg ]
  // Opera (all versions) [ same as chrome ]
  // Android (Chrome) [ only video ]
  // Android (Opera) [ only video ]
  // Android (Firefox) [ only video ]
  //------------------------------------
  // Muaz Khan     - www.MuazKhan.com
  // MIT License   - www.WebRTC-Experiment.com/licence
  //------------------------------------
  // Note: RecordRTC.js is using 3 other libraries; you need to accept their licences as well.
  //------------------------------------
  // 1. RecordRTC.js
  // 2. MRecordRTC.js
  // 3. Cross-Browser-Declarations.js
  // 4. Storage.js
  // 5. MediaStreamRecorder.js
  // 6. StereoRecorder.js
  // 7. StereoAudioRecorder.js
  // 8. CanvasRecorder.js
  // 9. WhammyRecorder.js
  // 10. Whammy.js
  // 11. DiskStorage.js
  // 12. GifRecorder.js
  //------------------------------------
  'use strict'; // ____________
  // RecordRTC.js

  /**
   * {@link https://github.com/muaz-khan/RecordRTC|RecordRTC} is a JavaScript-based media-recording library for modern web-browsers (supporting WebRTC getUserMedia API). It is optimized for different devices and browsers to bring all client-side (pluginfree) recording solutions in single place.
   * @summary JavaScript audio/video recording library runs top over WebRTC getUserMedia API.
   * @license {@link https://www.webrtc-experiment.com/licence/|MIT}
   * @author {@link https://www.MuazKhan.com|Muaz Khan}
   * @typedef RecordRTC
   * @class
   * @example
   * var recordRTC = RecordRTC(mediaStream, {
   *     type: 'video' // audio or video or gif or canvas
   * });
   *
   * // or, you can even use keyword "new"
   * var recordRTC = new RecordRTC(mediaStream[, config]);
   * @see For further information:
   * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
   */

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.RecordRTC = RecordRTC;
  _exports.MRecordRTC = MRecordRTC;
  _exports.mergeProps = mergeProps;
  _exports.reformatProps = reformatProps;
  _exports.bytesToSize = bytesToSize;
  _exports.MediaStreamRecorder = MediaStreamRecorder;
  _exports.StereoRecorder = StereoRecorder;
  _exports.StereoAudioRecorder = StereoAudioRecorder;
  _exports.CanvasRecorder = CanvasRecorder;
  _exports.WhammyRecorder = WhammyRecorder;
  _exports.GifRecorder = GifRecorder;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function RecordRTC(mediaStream, config) {
    config = config || {};

    if (!mediaStream) {
      throw 'MediaStream is mandatory.';
    }

    if (!config.type) {
      config.type = 'audio';
    }

    var self = this;

    function startRecording() {
      if (!config.disableLogs) {
        console.debug('started recording ' + config.type + ' stream.');
      } // Media Stream Recording API has not been implemented in chrome yet;
      // That's why using WebAudio API to record stereo audio in WAV format


      var Recorder = isChrome ? window.StereoRecorder : window.MediaStreamRecorder; // video recorder (in WebM format)

      if (config.type === 'video' && isChrome) {
        Recorder = window.WhammyRecorder;
      } // video recorder (in Gif format)


      if (config.type === 'gif') {
        Recorder = window.GifRecorder;
      } // html2canvas recording!


      if (config.type === 'canvas') {
        Recorder = window.CanvasRecorder;
      }

      if (config.recorderType) {
        Recorder = config.recorderType;
      }

      mediaRecorder = new Recorder(mediaStream); // Merge all data-types except "function"

      mediaRecorder = mergeProps(mediaRecorder, config);

      mediaRecorder.onAudioProcessStarted = function () {
        if (config.onAudioProcessStarted) {
          config.onAudioProcessStarted();
        }
      };

      mediaRecorder.onGifPreview = function (gif) {
        if (config.onGifPreview) {
          config.onGifPreview(gif);
        }
      };

      mediaRecorder.record();
      return self;
    }

    function stopRecording(callback) {
      var Recorder = isChrome ? window.StereoRecorder : window.MediaStreamRecorder; // video recorder (in WebM format)

      if (config.type === 'video' && isChrome) {
        Recorder = window.WhammyRecorder;
      } // video recorder (in Gif format)


      if (config.type === 'gif') {
        Recorder = window.GifRecorder;
      } // html2canvas recording!


      if (config.type === 'canvas') {
        Recorder = window.CanvasRecorder;
      }

      if (config.recorderType) {
        Recorder = config.recorderType;
      }

      mediaRecorder = new Recorder(mediaStream);

      if (!mediaRecorder) {
        return console.warn(WARNING);
      }
      /*jshint validthis:true */


      var recordRTC = this;

      if (!config.disableLogs) {
        console.warn('Stopped recording ' + config.type + ' stream.');
      }

      if (config.type !== 'gif') {
        mediaRecorder.stop(_callback);
      } else {
        mediaRecorder.stop();

        _callback();
      }

      function _callback() {
        for (var item in mediaRecorder) {
          if (self) {
            self[item] = mediaRecorder[item];
          }

          if (recordRTC) {
            recordRTC[item] = mediaRecorder[item];
          }
        }

        var blob = mediaRecorder.blob;

        if (callback) {
          var url = URL.createObjectURL(blob);
          callback(url);
        }

        if (blob && !config.disableLogs) {
          console.debug(blob.type, '->', bytesToSize(blob.size));
        }

        if (!config.autoWriteToDisk) {
          return;
        }

        getDataURL(function (dataURL) {
          var parameter = {};
          parameter[config.type + 'Blob'] = dataURL;
          DiskStorage.Store(parameter);
        });
      }
    }

    function pauseRecording() {
      if (!mediaRecorder) {
        return console.warn(WARNING);
      } // not all libs yet having  this method


      if (mediaRecorder.pause) {
        mediaRecorder.pause();
      } else if (!config.disableLogs) {
        console.warn('This recording library is having no "pause" method.');
      }
    }

    function resumeRecording() {
      if (!mediaRecorder) {
        return console.warn(WARNING);
      } // not all libs yet having  this method


      if (mediaRecorder.resume) {
        mediaRecorder.resume();
      } else if (!config.disableLogs) {
        console.warn('This recording library is having no "resume" method.');
      }
    }

    function getDataURL(callback, _mediaRecorder) {
      if (!callback) {
        throw 'Pass a callback function over getDataURL.';
      }

      var blob = _mediaRecorder ? _mediaRecorder.blob : mediaRecorder.blob;

      if (!blob) {
        if (!config.disableLogs) {
          console.warn('Blob encoder did not yet finished its job.');
        }

        setTimeout(function () {
          getDataURL(callback, _mediaRecorder);
        }, 1000);
        return;
      }

      if (!!window.Worker) {
        var webWorker = processInWebWorker(function readFile(_blob) {
          postMessage(new window.FileReaderSync().readAsDataURL(_blob));
        });

        webWorker.onmessage = function (event) {
          callback(event.data);
        };

        webWorker.postMessage(blob);
      } else {
        var reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onload = function (event) {
          callback(event.target.result);
        };
      }

      function processInWebWorker(_function) {
        var blob = URL.createObjectURL(new Blob([_function.toString(), 'this.onmessage =  function (e) {readFile(e.data);}'], {
          type: 'application/javascript'
        }));
        var worker = new Worker(blob);
        URL.revokeObjectURL(blob);
        return worker;
      }
    }

    var WARNING = 'It seems that "startRecording" is not invoked for ' + config.type + ' recorder.';
    var mediaRecorder;
    var returnObject = {
      /**
       * This method starts recording. It doesn't take any argument.
       * @method
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.startRecording();
       */
      startRecording: startRecording,

      /**
       * This method stops recording. It takes single "callback" argument. It is suggested to get blob or URI in the callback to make sure all encoders finished their jobs.
       * @param {function} callback - This callback function is invoked after completion of all encoding jobs.
       * @method
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.stopRecording(function(videoURL) {
       *     video.src = videoURL;
       *     recordRTC.blob; recordRTC.buffer;
       * });
       */
      stopRecording: stopRecording,

      /**
       * This method pauses the recording process.
       * @method
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.pauseRecording();
       */
      pauseRecording: pauseRecording,

      /**
       * This method resumes the recording process.
       * @method
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.resumeRecording();
       */
      resumeRecording: resumeRecording,

      /**
       * It is equivalent to <code class="str">"recordRTC.blob"</code> property.
       * @method
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.stopRecording(function() {
       *     var blob = recordRTC.getBlob();
       *
       *     // equivalent to: recordRTC.blob property
       *     var blob = recordRTC.blob;
       * });
       */
      getBlob: function getBlob() {
        if (!mediaRecorder) {
          return console.warn(WARNING);
        }

        return mediaRecorder.blob;
      },

      /**
       * This method returns DataURL. It takes single "callback" argument.
       * @param {function} callback - DataURL is passed back over this callback.
       * @method
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.stopRecording(function() {
       *     recordRTC.getDataURL(function(dataURL) {
       *         video.src = dataURL;
       *     });
       * });
       */
      getDataURL: getDataURL,

      /**
       * This method returns Virutal/Blob URL. It doesn't take any argument.
       * @method
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.stopRecording(function() {
       *     video.src = recordRTC.toURL();
       * });
       */
      toURL: function toURL() {
        if (!mediaRecorder) {
          return console.warn(WARNING);
        }

        return URL.createObjectURL(mediaRecorder.blob);
      },

      /**
       * This method saves blob/file into disk (by inovking save-as dialog). It takes single (optional) argument i.e. FileName
       * @method
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.stopRecording(function() {
       *     recordRTC.save('file-name');
       * });
       */
      save: function save(fileName) {
        if (!mediaRecorder) {
          var that = this;
          setTimeout(function () {
            that.save(fileName);
          }, 2000);
          return console.warn(WARNING);
        }

        var hyperlink = document.createElement('a');
        hyperlink.href = URL.createObjectURL(mediaRecorder.blob);
        hyperlink.target = '_blank';
        hyperlink.download = (fileName || Math.round(Math.random() * 9999999999) + 888888888) + '.' + mediaRecorder.blob.type.split('/')[1];
        var evt = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true
        });
        hyperlink.dispatchEvent(evt);
        (window.URL || window.webkitURL).revokeObjectURL(hyperlink.href);
      },

      /**
       * This method gets blob from indexed-DB storage. It takes single "callback" argument.
       * @method
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.getFromDisk(function(dataURL) {
       *     video.src = dataURL;
       * });
       */
      getFromDisk: function getFromDisk(callback) {
        if (!mediaRecorder) {
          return console.warn(WARNING);
        }

        RecordRTC.getFromDisk(config.type, callback);
      },

      /**
       * This method appends prepends array of webp images to the recorded video-blob. It takes an "array" object.
       * @type {Array.<Array>}
       * @param {Array} arrayOfWebPImages - Array of webp images.
       * @method
       * @memberof RecordRTC
       * @instance
       * @example
       * var arrayOfWebPImages = [];
       * arrayOfWebPImages.push({
       *     duration: index,
       *     image: 'data:image/webp;base64,...'
       * });
       * recordRTC.setAdvertisementArray(arrayOfWebPImages);
       */
      setAdvertisementArray: function setAdvertisementArray(arrayOfWebPImages) {
        this.advertisement = [];
        var length = arrayOfWebPImages.length;

        for (var i = 0; i < length; i++) {
          this.advertisement.push({
            duration: i,
            image: arrayOfWebPImages[i]
          });
        }
      },

      /**
       * It is equivalent to <code class="str">"recordRTC.getBlob()"</code> method.
       * @property {Blob} blob - Recorded Blob can be accessed using this property.
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.stopRecording(function() {
       *     var blob = recordRTC.blob;
       *
       *     // equivalent to: recordRTC.getBlob() method
       *     var blob = recordRTC.getBlob();
       * });
       */
      blob: null,

      /**
       * @todo Add descriptions.
       * @property {number} bufferSize - Either audio device's default buffer-size, or your custom value.
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.stopRecording(function() {
       *     var bufferSize = recordRTC.bufferSize;
       * });
       */
      bufferSize: 0,

      /**
       * @todo Add descriptions.
       * @property {number} sampleRate - Audio device's default sample rates.
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.stopRecording(function() {
       *     var sampleRate = recordRTC.sampleRate;
       * });
       */
      sampleRate: 0,

      /**
       * @todo Add descriptions.
       * @property {ArrayBuffer} buffer - Audio ArrayBuffer, supported only in Chrome.
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.stopRecording(function() {
       *     var buffer = recordRTC.buffer;
       * });
       */
      buffer: null,

      /**
       * @todo Add descriptions.
       * @property {DataView} view - Audio DataView, supported only in Chrome.
       * @memberof RecordRTC
       * @instance
       * @example
       * recordRTC.stopRecording(function() {
       *     var dataView = recordRTC.view;
       * });
       */
      view: null
    };

    if (!this) {
      return returnObject;
    } // if someone wanna use RecordRTC with "new" keyword.


    for (var prop in returnObject) {
      this[prop] = returnObject[prop];
    }

    return returnObject;
  }
  /**
   * This method can be used to get all recorded blobs from IndexedDB storage.
   * @param {string} type - 'all' or 'audio' or 'video' or 'gif'
   * @param {function} callback - Callback function to get all stored blobs.
   * @method
   * @memberof RecordRTC
   * @example
   * RecordRTC.getFromDisk('all', function(dataURL, type){
   *     if(type === 'audio') { }
   *     if(type === 'video') { }
   *     if(type === 'gif')   { }
   * });
   */


  RecordRTC.getFromDisk = function (type, callback) {
    if (!callback) {
      throw 'callback is mandatory.';
    }

    console.log('Getting recorded ' + (type === 'all' ? 'blobs' : type + ' blob ') + ' from disk!');
    DiskStorage.Fetch(function (dataURL, _type) {
      if (type !== 'all' && _type === type + 'Blob' && callback) {
        callback(dataURL);
      }

      if (type === 'all' && callback) {
        callback(dataURL, _type.replace('Blob', ''));
      }
    });
  };
  /**
   * This method can be used to store recorded blobs into IndexedDB storage.
   * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
   * @method
   * @memberof RecordRTC
   * @example
   * RecordRTC.writeToDisk({
   *     audio: audioBlob,
   *     video: videoBlob,
   *     gif  : gifBlob
   * });
   */


  RecordRTC.writeToDisk = function (options) {
    console.log('Writing recorded blob(s) to disk!');
    options = options || {};

    if (options.audio && options.video && options.gif) {
      options.audio.getDataURL(function (audioDataURL) {
        options.video.getDataURL(function (videoDataURL) {
          options.gif.getDataURL(function (gifDataURL) {
            DiskStorage.Store({
              audioBlob: audioDataURL,
              videoBlob: videoDataURL,
              gifBlob: gifDataURL
            });
          });
        });
      });
    } else if (options.audio && options.video) {
      options.audio.getDataURL(function (audioDataURL) {
        options.video.getDataURL(function (videoDataURL) {
          DiskStorage.Store({
            audioBlob: audioDataURL,
            videoBlob: videoDataURL
          });
        });
      });
    } else if (options.audio && options.gif) {
      options.audio.getDataURL(function (audioDataURL) {
        options.gif.getDataURL(function (gifDataURL) {
          DiskStorage.Store({
            audioBlob: audioDataURL,
            gifBlob: gifDataURL
          });
        });
      });
    } else if (options.video && options.gif) {
      options.video.getDataURL(function (videoDataURL) {
        options.gif.getDataURL(function (gifDataURL) {
          DiskStorage.Store({
            videoBlob: videoDataURL,
            gifBlob: gifDataURL
          });
        });
      });
    } else if (options.audio) {
      options.audio.getDataURL(function (audioDataURL) {
        DiskStorage.Store({
          audioBlob: audioDataURL
        });
      });
    } else if (options.video) {
      options.video.getDataURL(function (videoDataURL) {
        DiskStorage.Store({
          videoBlob: videoDataURL
        });
      });
    } else if (options.gif) {
      options.gif.getDataURL(function (gifDataURL) {
        DiskStorage.Store({
          gifBlob: gifDataURL
        });
      });
    }
  }; // _____________
  // MRecordRTC.js

  /**
   * MRecordRTC runs top over {@link RecordRTC} to bring multiple recordings in single place, by providing simple API.
   * @summary MRecordRTC stands for "Multiple-RecordRTC".
   * @license {@link https://www.webrtc-experiment.com/licence/|MIT}
   * @author {@link https://www.MuazKhan.com|Muaz Khan}
   * @typedef MRecordRTC
   * @class
   * @example
   * var recorder = new MRecordRTC();
   * recorder.addStream(MediaStream);
   * recorder.mediaType = {
   *     audio: true,
   *     video: true,
   *     gif: true
   * };
   * recorder.startRecording();
   * @see For further information:
   * @see {@link https://github.com/muaz-khan/RecordRTC/tree/master/MRecordRTC|MRecordRTC Source Code}
   */


  function MRecordRTC(mediaStream) {
    /**
     * This method attaches MediaStream object to {@link MRecordRTC}.
     * @param {MediaStream} mediaStream - A MediaStream object, either fetched using getUserMedia API, or generated using captureStreamUntilEnded or WebAudio API.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.addStream(MediaStream);
     */
    this.addStream = function (_mediaStream) {
      if (_mediaStream) {
        mediaStream = _mediaStream;
      }
    };
    /**
     * This property can be used to set recording type e.g. audio, or video, or gif, or canvas.
     * @property {object} mediaType - {audio: true, video: true, gif: true}
     * @memberof MRecordRTC
     * @example
     * var recorder = new MRecordRTC();
     * recorder.mediaType = {
     *     audio: true,
     *     video: true,
     *     gif  : true
     * };
     */


    this.mediaType = {
      audio: true,
      video: true
    };
    /**
     * This method starts recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.startRecording();
     */

    this.startRecording = function () {
      if (!isChrome && mediaStream && mediaStream.getAudioTracks && mediaStream.getAudioTracks().length && mediaStream.getVideoTracks().length) {
        // Firefox is supporting both audio/video in single blob
        this.mediaType.audio = false;
      }

      if (this.mediaType.audio) {
        this.audioRecorder = new RecordRTC(mediaStream, {
          type: 'audio',
          bufferSize: this.bufferSize,
          sampleRate: this.sampleRate
        });
        this.audioRecorder.startRecording();
      }

      if (this.mediaType.video) {
        this.videoRecorder = new RecordRTC(mediaStream, {
          type: 'video',
          video: this.video,
          canvas: this.canvas
        });
        this.videoRecorder.startRecording();
      }

      if (this.mediaType.gif) {
        this.gifRecorder = new RecordRTC(mediaStream, {
          type: 'gif',
          frameRate: this.frameRate || 200,
          quality: this.quality || 10
        });
        this.gifRecorder.startRecording();
      }
    };
    /**
     * This method stop recording.
     * @param {function} callback - Callback function is invoked when all encoders finish their jobs.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.stopRecording(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     */


    this.stopRecording = function (callback) {
      callback = callback || function () {};

      if (this.audioRecorder) {
        this.audioRecorder.stopRecording(function (blobURL) {
          callback(blobURL, 'audio');
        });
      }

      if (this.videoRecorder) {
        this.videoRecorder.stopRecording(function (blobURL) {
          callback(blobURL, 'video');
        });
      }

      if (this.gifRecorder) {
        this.gifRecorder.stopRecording(function (blobURL) {
          callback(blobURL, 'gif');
        });
      }
    };
    /**
     * This method can be used to manually get all recorded blobs.
     * @param {function} callback - All recorded blobs are passed back to "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getBlob(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     */


    this.getBlob = function (callback) {
      var output = {};

      if (this.audioRecorder) {
        output.audio = this.audioRecorder.getBlob();
      }

      if (this.videoRecorder) {
        output.video = this.videoRecorder.getBlob();
      }

      if (this.gifRecorder) {
        output.gif = this.gifRecorder.getBlob();
      }

      if (callback) {
        callback(output);
      }
    };
    /**
     * This method can be used to manually get all recorded blobs' DataURLs.
     * @param {function} callback - All recorded blobs' DataURLs are passed back to "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getDataURL(function(recording){
     *     var audioDataURL = recording.audio;
     *     var videoDataURL = recording.video;
     *     var gifDataURL   = recording.gif;
     * });
     */


    this.getDataURL = function (callback) {
      this.getBlob(function (blob) {
        getDataURL(blob.audio, function (_audioDataURL) {
          getDataURL(blob.video, function (_videoDataURL) {
            callback({
              audio: _audioDataURL,
              video: _videoDataURL
            });
          });
        });
      });

      function getDataURL(blob, callback00) {
        if (!!window.Worker) {
          var webWorker = processInWebWorker(function readFile(_blob) {
            postMessage(new window.FileReaderSync().readAsDataURL(_blob));
          });

          webWorker.onmessage = function (event) {
            callback00(event.data);
          };

          webWorker.postMessage(blob);
        } else {
          var reader = new FileReader();
          reader.readAsDataURL(blob);

          reader.onload = function (event) {
            callback00(event.target.result);
          };
        }
      }

      function processInWebWorker(_function) {
        var blob = URL.createObjectURL(new Blob([_function.toString(), 'this.onmessage =  function (e) {readFile(e.data);}'], {
          type: 'application/javascript'
        }));
        var worker = new Worker(blob);
        URL.revokeObjectURL(blob);
        return worker;
      }
    };
    /**
     * This method can be used to ask {@link MRecordRTC} to write all recorded blobs into IndexedDB storage.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.writeToDisk();
     */


    this.writeToDisk = function () {
      RecordRTC.writeToDisk({
        audio: this.audioRecorder,
        video: this.videoRecorder,
        gif: this.gifRecorder
      });
    };
    /**
     * This method can be used to invoke save-as dialog for all recorded blobs.
     * @param {object} args - {audio: 'audio-name', video: 'video-name', gif: 'gif-name'}
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.save({
     *     audio: 'audio-file-name',
     *     video: 'video-file-name',
     *     gif  : 'gif-file-name'
     * });
     */


    this.save = function (args) {
      args = args || {
        audio: true,
        video: true,
        gif: true
      };

      if (!!args.audio && this.audioRecorder) {
        this.audioRecorder.save(typeof args.audio === 'string' ? args.audio : '');
      }

      if (!!args.video && this.videoRecorder) {
        this.videoRecorder.save(typeof args.video === 'string' ? args.video : '');
      }

      if (!!args.gif && this.gifRecorder) {
        this.gifRecorder.save(typeof args.gif === 'string' ? args.gif : '');
      }
    };
  }
  /**
   * This method can be used to get all recorded blobs from IndexedDB storage.
   * @param {string} type - 'all' or 'audio' or 'video' or 'gif'
   * @param {function} callback - Callback function to get all stored blobs.
   * @method
   * @memberof MRecordRTC
   * @example
   * MRecordRTC.getFromDisk('all', function(dataURL, type){
   *     if(type === 'audio') { }
   *     if(type === 'video') { }
   *     if(type === 'gif')   { }
   * });
   */


  MRecordRTC.getFromDisk = RecordRTC.getFromDisk;
  /**
   * This method can be used to store recorded blobs into IndexedDB storage.
   * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
   * @method
   * @memberof MRecordRTC
   * @example
   * MRecordRTC.writeToDisk({
   *     audio: audioBlob,
   *     video: videoBlob,
   *     gif  : gifBlob
   * });
   */

  MRecordRTC.writeToDisk = RecordRTC.writeToDisk; // _____________________________
  // Cross-Browser-Declarations.js
  // animation-frame used in WebM recording

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
  } // WebAudio API representer


  if (!window.AudioContext) {
    window.AudioContext = window.webkitAudioContext || window.mozAudioContext;
  }

  window.URL = window.URL || window.webkitURL;
  navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

  if (window.webkitMediaStream) {
    window.MediaStream = window.webkitMediaStream;
  }

  var isChrome = !!navigator.webkitGetUserMedia; // Merge all other data-types except "function"

  /**
   * @param {object} mergein - Merge another object in this object.
   * @param {object} mergeto - Merge this object in another object.
   * @returns {object} - merged object
   * @example
   * var mergedObject = mergeProps({}, {
   *     x: 10, // this will be merged
   *     y: 10, // this will be merged
   *     add: function() {} // this will be skipped
   * });
   */

  function mergeProps(mergein, mergeto) {
    mergeto = reformatProps(mergeto);

    for (var t in mergeto) {
      if (typeof mergeto[t] !== 'function') {
        mergein[t] = mergeto[t];
      }
    }

    return mergein;
  }
  /**
   * @param {object} obj - If a property name is "sample-rate"; it will be converted into "sampleRate".
   * @returns {object} - formatted object.
   * @example
   * var mergedObject = reformatProps({
   *     'sample-rate': 44100,
   *     'buffer-size': 4096
   * });
   *
   * mergedObject.sampleRate === 44100
   * mergedObject.bufferSize === 4096
   */


  function reformatProps(obj) {
    var output = {};

    for (var o in obj) {
      if (o.indexOf('-') !== -1) {
        var splitted = o.split('-');
        var name = splitted[0] + splitted[1].split('')[0].toUpperCase() + splitted[1].substr(1);
        output[name] = obj[o];
      } else {
        output[o] = obj[o];
      }
    }

    return output;
  }

  if (location.href.indexOf('file:') === 0) {
    console.warn('Please load this HTML file on HTTP or HTTPS.');
  } // below function via: http://goo.gl/B3ae8c

  /**
   * @param {number} bytes - Pass bytes and get formafted string.
   * @returns {string} - formafted string
   * @example
   * bytesToSize(1024*1024*5) === '5 GB'
   */


  function bytesToSize(bytes) {
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    if (bytes === 0) {
      return '0 Bytes';
    }

    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
  } // __________ (used to handle stuff like http://goo.gl/xmE5eg) issue #129
  // Storage.js

  /**
   * Storage is a standalone object used by {@link RecordRTC} to store reusable objects e.g. "new AudioContext".
   * @example
   * Storage.AudioContext === webkitAudioContext
   * @property {webkitAudioContext} AudioContext - Keeps a reference to AudioContext object.
   */


  var Storage = {
    AudioContext: window.AudioContext || window.webkitAudioContext
  }; // ______________________
  // MediaStreamRecorder.js
  // todo: need to show alert boxes for incompatible cases
  // encoder only supports 48k/16k mono audio channel

  /*
   * Implementation of https://dvcs.w3.org/hg/dap/raw-file/default/media-stream-capture/MediaRecorder.html
   * The MediaRecorder accepts a mediaStream as input source passed from UA. When recorder starts,
   * a MediaEncoder will be created and accept the mediaStream as input source.
   * Encoder will get the raw data by track data changes, encode it by selected MIME Type, then store the encoded in EncodedBufferCache object.
   * The encoded data will be extracted on every timeslice passed from Start function call or by RequestData function.
   * Thread model:
   * When the recorder starts, it creates a "Media Encoder" thread to read data from MediaEncoder object and store buffer in EncodedBufferCache object.
   * Also extract the encoded data and create blobs on every timeslice passed from start function or RequestData function called by UA.
   */

  /**
   * MediaStreamRecorder is an abstraction layer for "MediaRecorder API". It is used by {@link RecordRTC} to record MediaStream(s) in Firefox.
   * @summary Runs top over MediaRecorder API.
   * @typedef MediaStreamRecorder
   * @class
   * @example
   * var recorder = new MediaStreamRecorder(MediaStream);
   * recorder.mimeType = 'video/webm'; // audio/ogg or video/webm
   * recorder.record();
   * recorder.stop(function(blob) {
   *     video.src = URL.createObjectURL(blob);
   *
   *     // or
   *     var blob = recorder.blob;
   * });
   * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
   */

  function MediaStreamRecorder(mediaStream) {
    var self = this; // if user chosen only audio option; and he tried to pass MediaStream with
    // both audio and video tracks;
    // using a dirty workaround to generate audio-only stream so that we can get audio/ogg output.

    if (self.mimeType && self.mimeType !== 'video/webm' && mediaStream.getVideoTracks && mediaStream.getVideoTracks().length) {
      var context = new AudioContext();
      var mediaStreamSource = context.createMediaStreamSource(mediaStream);
      var destination = context.createMediaStreamDestination();
      mediaStreamSource.connect(destination);
      mediaStream = destination.stream;
    }

    var dataAvailable = false;
    /**
     * This method records MediaStream.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.record();
     */

    this.record = function () {
      // http://dxr.mozilla.org/mozilla-central/source/content/media/MediaRecorder.cpp
      // https://wiki.mozilla.org/Gecko:MediaRecorder
      // https://dvcs.w3.org/hg/dap/raw-file/default/media-stream-capture/MediaRecorder.html
      // starting a recording session; which will initiate "Reading Thread"
      // "Reading Thread" are used to prevent main-thread blocking scenarios
      mediaRecorder = new window.MediaRecorder(mediaStream); // Dispatching OnDataAvailable Handler

      mediaRecorder.ondataavailable = function (e) {
        if (dataAvailable) {
          return;
        }

        if (!e.data.size) {
          if (!self.disableLogs) {
            console.warn('Recording of', e.data.type, 'failed.');
          }

          return;
        }

        dataAvailable = true;
        /**
         * @property {Blob} blob - Recorded frames in video/webm blob.
         * @memberof MediaStreamRecorder
         * @example
         * recorder.stop(function() {
         *     var blob = recorder.blob;
         * });
         */

        self.blob = new Blob([e.data], {
          type: e.data.type || self.mimeType || 'audio/ogg'
        });

        if (self.callback) {
          self.callback();
        }
      };

      mediaRecorder.onerror = function (error) {
        if (!self.disableLogs) {
          console.warn(error);
        } // When the stream is "ended" set recording to 'inactive'
        // and stop gathering data. Callers should not rely on
        // exactness of the timeSlice value, especially
        // if the timeSlice value is small. Callers should
        // consider timeSlice as a minimum value


        mediaRecorder.stop();
        self.record(0);
      }; // void start(optional long mTimeSlice)
      // The interval of passing encoded data from EncodedBufferCache to onDataAvailable
      // handler. "mTimeSlice < 0" means Session object does not push encoded data to
      // onDataAvailable, instead, it passive wait the client side pull encoded data
      // by calling requestData API.


      mediaRecorder.start(0); // Start recording. If timeSlice has been provided, mediaRecorder will
      // raise a dataavailable event containing the Blob of collected data on every timeSlice milliseconds.
      // If timeSlice isn't provided, UA should call the RequestData to obtain the Blob data, also set the mTimeSlice to zero.

      if (self.onAudioProcessStarted) {
        self.onAudioProcessStarted();
      }
    };
    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */


    this.stop = function (callback) {
      if (!mediaRecorder) {
        return;
      }

      this.callback = callback; // mediaRecorder.state === 'recording' means that media recorder is associated with "session"
      // mediaRecorder.state === 'stopped' means that media recorder is detached from the "session" ... in this case; "session" will also be deleted.

      if (mediaRecorder.state === 'recording') {
        // "stop" method auto invokes "requestData"!
        // mediaRecorder.requestData();
        mediaRecorder.stop();
      }
    };
    /**
     * This method pauses the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.pause();
     */


    this.pause = function () {
      if (!mediaRecorder) {
        return;
      }

      if (mediaRecorder.state === 'recording') {
        mediaRecorder.pause();

        if (!this.disableLogs) {
          console.debug('Paused recording.');
        }
      }
    };
    /**
     * This method resumes the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.resume();
     */


    this.resume = function () {
      if (!mediaRecorder) {
        return;
      }

      if (mediaRecorder.state === 'paused') {
        mediaRecorder.resume();

        if (!this.disableLogs) {
          console.debug('Resumed recording.');
        }
      }
    }; // Reference to "MediaRecorder" object


    var mediaRecorder;
  } // _________________
  // StereoRecorder.js

  /**
   * StereoRecorder is a standalone class used by {@link RecordRTC} to bring audio-recording in chrome. It runs top over {@link StereoAudioRecorder}.
   * @summary JavaScript standalone object for stereo audio recording.
   * @typedef StereoRecorder
   * @class
   * @example
   * var recorder = new StereoRecorder(MediaStream);
   * recorder.record();
   * recorder.stop(function(blob) {
   *     video.src = URL.createObjectURL(blob);
   * });
   * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
   */


  function StereoRecorder(mediaStream) {
    var self = this;
    /**
     * This method records MediaStream.
     * @method
     * @memberof StereoRecorder
     * @example
     * recorder.record();
     */

    this.record = function () {
      mediaRecorder = new StereoAudioRecorder(mediaStream, this);

      mediaRecorder.onAudioProcessStarted = function () {
        if (self.onAudioProcessStarted) {
          self.onAudioProcessStarted();
        }
      };

      mediaRecorder.record();
    };
    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof StereoRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */


    this.stop = function (callback) {
      if (!mediaRecorder) {
        return;
      }

      mediaRecorder.stop(function () {
        for (var item in mediaRecorder) {
          self[item] = mediaRecorder[item];
        }

        if (callback) {
          callback();
        }
      });
    };
    /**
     * This method pauses the recording process.
     * @method
     * @memberof StereoRecorder
     * @example
     * recorder.pause();
     */


    this.pause = function () {
      if (!mediaRecorder) {
        return;
      }

      mediaRecorder.pause();
    };
    /**
     * This method resumes the recording process.
     * @method
     * @memberof StereoRecorder
     * @example
     * recorder.resume();
     */


    this.resume = function () {
      if (!mediaRecorder) {
        return;
      }

      mediaRecorder.resume();
    }; // Reference to "StereoAudioRecorder" object


    var mediaRecorder;
  } // source code from: http://typedarray.org/wp-content/projects/WebAudioRecorder/script.js
  // https://github.com/mattdiamond/Recorderjs#license-mit
  // ______________________
  // StereoAudioRecorder.js

  /**
   * StereoAudioRecorder is a standalone class used by {@link RecordRTC} to bring "stereo" audio-recording in chrome.
   * @summary JavaScript standalone object for stereo audio recording.
   * @typedef StereoAudioRecorder
   * @class
   * @example
   * var recorder = new StereoAudioRecorder(MediaStream, {
   *     sampleRate: 44100,
   *     bufferSize: 4096
   * });
   * recorder.record();
   * recorder.stop(function(blob) {
   *     video.src = URL.createObjectURL(blob);
   * });
   * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
   * @param {object} config - {sampleRate: 44100, bufferSize: 4096}
   */


  var __stereoAudioRecorderJavacriptNode;

  function StereoAudioRecorder(mediaStream, config) {
    if (!mediaStream.getAudioTracks().length) {
      throw 'Your stream has no audio tracks.';
    }

    var self = this; // variables

    var leftchannel = [];
    var rightchannel = [];
    var recording = false;
    var recordingLength = 0;
    /**
     * This method records MediaStream.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.record();
     */

    this.record = function () {
      // reset the buffers for the new recording
      leftchannel.length = rightchannel.length = 0;
      recordingLength = 0;
      recording = true;
    };

    function mergeLeftRightBuffers(config, callback) {
      function mergeAudioBuffers(config) {
        var leftBuffers = config.leftBuffers;
        var rightBuffers = config.rightBuffers;
        var sampleRate = config.sampleRate;
        leftBuffers = mergeBuffers(leftBuffers[0], leftBuffers[1]);
        rightBuffers = mergeBuffers(rightBuffers[0], rightBuffers[1]);

        function mergeBuffers(channelBuffer, rLength) {
          var result = new Float64Array(rLength);
          var offset = 0;
          var lng = channelBuffer.length;

          for (var i = 0; i < lng; i++) {
            var buffer = channelBuffer[i];
            result.set(buffer, offset);
            offset += buffer.length;
          }

          return result;
        }

        function interleave(leftChannel, rightChannel) {
          var length = leftChannel.length + rightChannel.length;
          var result = new Float64Array(length);
          var inputIndex = 0;

          for (var index = 0; index < length;) {
            result[index++] = leftChannel[inputIndex];
            result[index++] = rightChannel[inputIndex];
            inputIndex++;
          }

          return result;
        }

        function writeUTFBytes(view, offset, string) {
          var lng = string.length;

          for (var i = 0; i < lng; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
          }
        } // interleave both channels together


        var interleaved = interleave(leftBuffers, rightBuffers);
        var interleavedLength = interleaved.length; // create wav file

        var resultingBufferLength = 44 + interleavedLength * 2;
        var buffer = new ArrayBuffer(resultingBufferLength);
        var view = new DataView(buffer); // RIFF chunk descriptor/identifier

        writeUTFBytes(view, 0, 'RIFF'); // RIFF chunk length

        var blockAlign = 4;
        view.setUint32(blockAlign, 44 + interleavedLength * 2, true); // RIFF type

        writeUTFBytes(view, 8, 'WAVE'); // format chunk identifier
        // FMT sub-chunk

        writeUTFBytes(view, 12, 'fmt '); // format chunk length

        view.setUint32(16, 16, true); // sample format (raw)

        view.setUint16(20, 1, true); // stereo (2 channels)

        view.setUint16(22, 2, true); // sample rate

        view.setUint32(24, sampleRate, true); // byte rate (sample rate * block align)

        view.setUint32(28, sampleRate * blockAlign, true); // block align (channel count * bytes per sample)

        view.setUint16(32, blockAlign, true); // bits per sample

        view.setUint16(34, 16, true); // data sub-chunk
        // data chunk identifier

        writeUTFBytes(view, 36, 'data'); // data chunk length

        view.setUint32(40, interleavedLength * 2, true); // write the PCM samples

        var offset = 44,
            leftChannel;

        for (var i = 0; i < interleavedLength; i++, offset += 2) {
          var size = Math.max(-1, Math.min(1, interleaved[i]));
          var currentChannel = size < 0 ? size * 32768 : size * 32767;

          if (config.leftChannel) {
            if (currentChannel !== leftChannel) {
              view.setInt16(offset, currentChannel, true);
            }

            leftChannel = currentChannel;
          } else {
            view.setInt16(offset, currentChannel, true);
          }
        }

        postMessage({
          buffer: buffer,
          view: view
        });
      }

      var webWorker = processInWebWorker(mergeAudioBuffers);

      webWorker.onmessage = function (event) {
        callback(event.data.buffer, event.data.view);
      };

      webWorker.postMessage(config);
    }

    function processInWebWorker(_function) {
      var blob = URL.createObjectURL(new Blob([_function.toString(), 'this.onmessage =  function (e) {' + _function.name + '(e.data);}'], {
        type: 'application/javascript'
      }));
      var worker = new Worker(blob);
      URL.revokeObjectURL(blob);
      return worker;
    }
    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */


    this.stop = function (callback) {
      // stop recording
      recording = false; // to make sure onaudioprocess stops firing

      audioInput.disconnect();
      mergeLeftRightBuffers({
        sampleRate: sampleRate,
        leftChannel: config.leftChannel,
        leftBuffers: [leftchannel, recordingLength],
        rightBuffers: [rightchannel, recordingLength]
      }, function (buffer, view) {
        /**
         * @property {Blob} blob - The recorded blob object.
         * @memberof StereoAudioRecorder
         * @example
         * recorder.stop(function(){
         *     var blob = recorder.blob;
         * });
         */
        self.blob = new Blob([view], {
          type: 'audio/wav'
        });
        /**
         * @property {ArrayBuffer} buffer - The recorded buffer object.
         * @memberof StereoAudioRecorder
         * @example
         * recorder.stop(function(){
         *     var buffer = recorder.buffer;
         * });
         */

        self.buffer = new ArrayBuffer(view);
        /**
         * @property {DataView} view - The recorded data-view object.
         * @memberof StereoAudioRecorder
         * @example
         * recorder.stop(function(){
         *     var view = recorder.view;
         * });
         */

        self.view = view;
        self.sampleRate = sampleRate;
        self.bufferSize = bufferSize; // recorded audio length

        self.length = recordingLength;

        if (callback) {
          callback();
        }

        isAudioProcessStarted = false;
      });
    };

    if (!Storage.AudioContextConstructor) {
      Storage.AudioContextConstructor = new Storage.AudioContext();
    }

    var context = Storage.AudioContextConstructor; // creates an audio node from the microphone incoming stream

    var audioInput = context.createMediaStreamSource(mediaStream);
    var legalBufferValues = [0, 256, 512, 1024, 2048, 4096, 8192, 16384];
    /**
     * From the spec: This value controls how frequently the audioprocess event is
     * dispatched and how many sample-frames need to be processed each call.
     * Lower values for buffer size will result in a lower (better) latency.
     * Higher values will be necessary to avoid audio breakup and glitches
     * The size of the buffer (in sample-frames) which needs to
     * be processed each time onprocessaudio is called.
     * Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
     * @property {number} bufferSize - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     bufferSize: 4096
     * });
     */
    // "0" means, let chrome decide the most accurate buffer-size for current platform.

    var bufferSize = typeof config.bufferSize === 'undefined' ? 4096 : config.bufferSize;

    if (legalBufferValues.indexOf(bufferSize) === -1) {
      if (!config.disableLogs) {
        console.warn('Legal values for buffer-size are ' + JSON.stringify(legalBufferValues, null, '\t'));
      }
    }
    /**
     * The sample rate (in sample-frames per second) at which the
     * AudioContext handles audio. It is assumed that all AudioNodes
     * in the context run at this rate. In making this assumption,
     * sample-rate converters or "varispeed" processors are not supported
     * in real-time processing.
     * The sampleRate parameter describes the sample-rate of the
     * linear PCM audio data in the buffer in sample-frames per second.
     * An implementation must support sample-rates in at least
     * the range 22050 to 96000.
     * @property {number} sampleRate - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     sampleRate: 44100
     * });
     */


    var sampleRate = typeof config.sampleRate !== 'undefined' ? config.sampleRate : context.sampleRate || 44100;

    if (sampleRate < 22050 || sampleRate > 96000) {
      // Ref: http://stackoverflow.com/a/26303918/552182
      if (!config.disableLogs) {
        console.warn('sample-rate must be under range 22050 and 96000.');
      }
    }

    if (context.createJavaScriptNode) {
      __stereoAudioRecorderJavacriptNode = context.createJavaScriptNode(bufferSize, 2, 2);
    } else if (context.createScriptProcessor) {
      __stereoAudioRecorderJavacriptNode = context.createScriptProcessor(bufferSize, 2, 2);
    } else {
      throw 'WebAudio API has no support on this browser.';
    } // connect the stream to the gain node


    audioInput.connect(__stereoAudioRecorderJavacriptNode);
    bufferSize = __stereoAudioRecorderJavacriptNode.bufferSize;

    if (!config.disableLogs) {
      console.log('sample-rate', sampleRate);
      console.log('buffer-size', bufferSize);
    }

    var isPaused = false;
    /**
     * This method pauses the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.pause();
     */

    this.pause = function () {
      isPaused = true;

      if (!config.disableLogs) {
        console.debug('Paused recording.');
      }
    };
    /**
     * This method resumes the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.resume();
     */


    this.resume = function () {
      isPaused = false;

      if (!config.disableLogs) {
        console.debug('Resumed recording.');
      }
    };

    var isAudioProcessStarted = false;

    __stereoAudioRecorderJavacriptNode.onaudioprocess = function (e) {
      if (isPaused) {
        return;
      } // if MediaStream().stop() or MediaStreamTrack.stop() is invoked.


      if (mediaStream.ended) {
        __stereoAudioRecorderJavacriptNode.onaudioprocess = function () {};

        return;
      }

      if (!recording) {
        audioInput.disconnect();
        return;
      }
      /**
       * This method is called on "onaudioprocess" event's first invocation.
       * @method {function} onAudioProcessStarted
       * @memberof StereoAudioRecorder
       * @example
       * recorder.onAudioProcessStarted: function() { };
       */


      if (!isAudioProcessStarted) {
        isAudioProcessStarted = true;

        if (self.onAudioProcessStarted) {
          self.onAudioProcessStarted();
        }
      }

      var left = e.inputBuffer.getChannelData(0);
      var right = e.inputBuffer.getChannelData(1); // we clone the samples

      leftchannel.push(new Float32Array(left));
      rightchannel.push(new Float32Array(right));
      recordingLength += bufferSize;
    }; // to prevent self audio to be connected with speakers


    __stereoAudioRecorderJavacriptNode.connect(context.destination);
  } // _________________
  // CanvasRecorder.js

  /**
   * CanvasRecorder is a standalone class used by {@link RecordRTC} to bring HTML5-Canvas recording into video WebM. It uses HTML2Canvas library and runs top over {@link Whammy}.
   * @summary HTML2Canvas recording into video WebM.
   * @typedef CanvasRecorder
   * @class
   * @example
   * var recorder = new CanvasRecorder(htmlElement);
   * recorder.record();
   * recorder.stop(function(blob) {
   *     video.src = URL.createObjectURL(blob);
   * });
   * @param {HTMLElement} htmlElement - querySelector/getElementById/getElementsByTagName[0]/etc.
   */


  function CanvasRecorder(htmlElement) {
    if (!window.html2canvas) {
      throw 'Please link: //cdn.webrtc-experiment.com/screenshot.js';
    }

    var isRecording;
    /**
     * This method records Canvas.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.record();
     */

    this.record = function () {
      isRecording = true;
      whammy.frames = [];
      drawCanvasFrame();
    };
    /**
     * This method stops recording Canvas.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */


    this.stop = function (callback) {
      isRecording = false;
      var that = this;
      /**
       * @property {Blob} blob - Recorded frames in video/webm blob.
       * @memberof CanvasRecorder
       * @example
       * recorder.stop(function() {
       *     var blob = recorder.blob;
       * });
       */

      whammy.compile(function (blob) {
        that.blob = blob;

        if (that.blob.forEach) {
          that.blob = new Blob([], {
            type: 'video/webm'
          });
        }

        if (callback) {
          callback(that.blob);
        }
      });
    };

    var isPausedRecording = false;
    /**
     * This method pauses the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.pause();
     */

    this.pause = function () {
      isPausedRecording = true;

      if (!this.disableLogs) {
        console.debug('Paused recording.');
      }
    };
    /**
     * This method resumes the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.resume();
     */


    this.resume = function () {
      isPausedRecording = false;

      if (!this.disableLogs) {
        console.debug('Resumed recording.');
      }
    };

    function drawCanvasFrame() {
      if (isPausedRecording) {
        lastTime = new Date().getTime();
        return setTimeout(drawCanvasFrame, 100);
      }

      window.html2canvas(htmlElement, {
        onrendered: function onrendered(canvas) {
          var duration = new Date().getTime() - lastTime;

          if (!duration) {
            return drawCanvasFrame();
          } // via #206, by Jack i.e. @Seymourr


          lastTime = new Date().getTime();
          whammy.frames.push({
            duration: duration,
            image: canvas.toDataURL('image/webp')
          });

          if (isRecording) {
            requestAnimationFrame(drawCanvasFrame);
          }
        }
      });
    }

    var lastTime = new Date().getTime();
    var whammy = new Whammy.Video(100);
  } // _________________
  // WhammyRecorder.js

  /**
   * WhammyRecorder is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It runs top over {@link Whammy}.
   * @summary Video recording feature in Chrome.
   * @typedef WhammyRecorder
   * @class
   * @example
   * var recorder = new WhammyRecorder(mediaStream);
   * recorder.record();
   * recorder.stop(function(blob) {
   *     video.src = URL.createObjectURL(blob);
   * });
   * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
   */


  function WhammyRecorder(mediaStream) {
    /**
     * This method records video.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.record();
     */
    this.record = function () {
      if (!this.width) {
        this.width = 320;
      }

      if (!this.height) {
        this.height = 240;
      }

      if (!this.video) {
        this.video = {
          width: this.width,
          height: this.height
        };
      }

      if (!this.canvas) {
        this.canvas = {
          width: this.width,
          height: this.height
        };
      }

      canvas.width = this.canvas.width;
      canvas.height = this.canvas.height;
      context = canvas.getContext('2d'); // setting defaults

      if (this.video && this.video instanceof HTMLVideoElement) {
        video = this.video.cloneNode();
      } else {
        video = document.createElement('video');
        video.src = URL.createObjectURL(mediaStream);
        video.width = this.video.width;
        video.height = this.video.height;
      }

      video.muted = true;
      video.play();
      lastTime = new Date().getTime();
      whammy = new Whammy.Video();

      if (!this.disableLogs) {
        console.log('canvas resolutions', canvas.width, '*', canvas.height);
        console.log('video width/height', video.width || canvas.width, '*', video.height || canvas.height);
      }

      drawFrames();
    };

    function drawFrames() {
      var duration = new Date().getTime() - lastTime;

      if (!duration) {
        return setTimeout(drawFrames, 10);
      }

      if (isPausedRecording) {
        lastTime = new Date().getTime();
        return setTimeout(drawFrames, 100);
      } // via #206, by Jack i.e. @Seymourr


      lastTime = new Date().getTime();

      if (video.paused) {
        // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
        // Tweak for Android Chrome
        video.play();
      }

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      whammy.frames.push({
        duration: duration,
        image: canvas.toDataURL('image/webp')
      });

      if (!isStopDrawing) {
        setTimeout(drawFrames, 10);
      }
    }
    /**
     * remove black frames from the beginning to the specified frame
     * @param {Array} _frames - array of frames to be checked
     * @param {number} _framesToCheck - number of frame until check will be executed (-1 - will drop all frames until frame not matched will be found)
     * @param {number} _pixTolerance - 0 - very strict (only black pixel color) ; 1 - all
     * @param {number} _frameTolerance - 0 - very strict (only black frame color) ; 1 - all
     * @returns {Array} - array of frames
     */
    // pull#293 by @volodalexey


    function dropBlackFrames(_frames, _framesToCheck, _pixTolerance, _frameTolerance) {
      var localCanvas = document.createElement('canvas');
      localCanvas.width = canvas.width;
      localCanvas.height = canvas.height;
      var context2d = localCanvas.getContext('2d');
      var resultFrames = [];
      var checkUntilNotBlack = _framesToCheck === -1;
      var endCheckFrame = _framesToCheck && _framesToCheck > 0 && _framesToCheck <= _frames.length ? _framesToCheck : _frames.length;
      var sampleColor = {
        r: 0,
        g: 0,
        b: 0
      };
      var maxColorDifference = Math.sqrt(Math.pow(255, 2) + Math.pow(255, 2) + Math.pow(255, 2));
      var pixTolerance = _pixTolerance && _pixTolerance >= 0 && _pixTolerance <= 1 ? _pixTolerance : 0;
      var frameTolerance = _frameTolerance && _frameTolerance >= 0 && _frameTolerance <= 1 ? _frameTolerance : 0;
      var doNotCheckNext = false;

      for (var f = 0; f < endCheckFrame; f++) {
        var matchPixCount, endPixCheck, maxPixCount;

        if (!doNotCheckNext) {
          var image = new Image();
          image.src = _frames[f].image;
          context2d.drawImage(image, 0, 0, canvas.width, canvas.height);
          var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
          matchPixCount = 0;
          endPixCheck = imageData.data.length;
          maxPixCount = imageData.data.length / 4;

          for (var pix = 0; pix < endPixCheck; pix += 4) {
            var currentColor = {
              r: imageData.data[pix],
              g: imageData.data[pix + 1],
              b: imageData.data[pix + 2]
            };
            var colorDifference = Math.sqrt(Math.pow(currentColor.r - sampleColor.r, 2) + Math.pow(currentColor.g - sampleColor.g, 2) + Math.pow(currentColor.b - sampleColor.b, 2)); // difference in color it is difference in color vectors (r1,g1,b1) <=> (r2,g2,b2)

            if (colorDifference <= maxColorDifference * pixTolerance) {
              matchPixCount++;
            }
          }
        }

        if (!doNotCheckNext && maxPixCount - matchPixCount <= maxPixCount * frameTolerance) {// console.log('removed black frame : ' + f + ' ; frame duration ' + _frames[f].duration);
        } else {
          // console.log('frame is passed : ' + f);
          if (checkUntilNotBlack) {
            doNotCheckNext = true;
          }

          resultFrames.push(_frames[f]);
        }
      }

      resultFrames = resultFrames.concat(_frames.slice(endCheckFrame));

      if (resultFrames.length <= 0) {
        // at least one last frame should be available for next manipulation
        // if total duration of all frames will be < 1000 than ffmpeg doesn't work well...
        resultFrames.push(_frames[_frames.length - 1]);
      }

      return resultFrames;
    }

    var isStopDrawing = false;
    /**
     * This method stops recording video.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */

    this.stop = function (callback) {
      isStopDrawing = true;

      var _this = this; // analyse of all frames takes some time!


      setTimeout(function () {
        // e.g. dropBlackFrames(frames, 10, 1, 1) - will cut all 10 frames
        // e.g. dropBlackFrames(frames, 10, 0.5, 0.5) - will analyse 10 frames
        // e.g. dropBlackFrames(frames, 10) === dropBlackFrames(frames, 10, 0, 0) - will analyse 10 frames with strict black color
        whammy.frames = dropBlackFrames(whammy.frames, -1); // to display advertisement images!

        if (this.advertisement && this.advertisement.length) {
          whammy.frames = this.advertisement.concat(whammy.frames);
        }
        /**
         * @property {Blob} blob - Recorded frames in video/webm blob.
         * @memberof WhammyRecorder
         * @example
         * recorder.stop(function() {
         *     var blob = recorder.blob;
         * });
         */


        whammy.compile(function (blob) {
          _this.blob = blob;

          if (_this.blob.forEach) {
            _this.blob = new Blob([], {
              type: 'video/webm'
            });
          }

          if (callback) {
            callback(_this.blob);
          }
        });
      }, 10);
    };

    var isPausedRecording = false;
    /**
     * This method pauses the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.pause();
     */

    this.pause = function () {
      isPausedRecording = true;

      if (!this.disableLogs) {
        console.debug('Paused recording.');
      }
    };
    /**
     * This method resumes the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.resume();
     */


    this.resume = function () {
      isPausedRecording = false;

      if (!this.disableLogs) {
        console.debug('Resumed recording.');
      }
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var video;
    var lastTime;
    var whammy;
  } // https://github.com/antimatter15/whammy/blob/master/LICENSE
  // _________
  // Whammy.js
  // todo: Firefox now supports webp for webm containers!
  // their MediaRecorder implementation works well!
  // should we provide an option to record via Whammy.js or MediaRecorder API is a better solution?

  /**
   * Whammy is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It is written by {@link https://github.com/antimatter15|antimatter15}
   * @summary A real time javascript webm encoder based on a canvas hack.
   * @typedef Whammy
   * @class
   * @example
   * var recorder = new Whammy().Video(15);
   * recorder.add(context || canvas || dataURL);
   * var output = recorder.compile();
   */


  var Whammy = function () {
    // a more abstract-ish API
    function WhammyVideo(duration) {
      this.frames = [];
      this.duration = duration || 1;
      this.quality = 100;
    }
    /**
     * Pass Canvas or Context or image/webp(string) to {@link Whammy} encoder.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.add(canvas || context || 'image/webp');
     * @param {string} frame - Canvas || Context || image/webp
     * @param {number} duration - Stick a duration (in milliseconds)
     */


    WhammyVideo.prototype.add = function (frame, duration) {
      if ('canvas' in frame) {
        //CanvasRenderingContext2D
        frame = frame.canvas;
      }

      if ('toDataURL' in frame) {
        frame = frame.toDataURL('image/webp', this.quality);
      }

      if (!/^data:image\/webp;base64,/ig.test(frame)) {
        throw 'Input must be formatted properly as a base64 encoded DataURI of type image/webp';
      }

      this.frames.push({
        image: frame,
        duration: duration || this.duration
      });
    };

    function processInWebWorker(_function) {
      var blob = URL.createObjectURL(new Blob([_function.toString(), 'this.onmessage =  function (e) {' + _function.name + '(e.data);}'], {
        type: 'application/javascript'
      }));
      var worker = new Worker(blob);
      URL.revokeObjectURL(blob);
      return worker;
    }

    function whammyInWebWorker(frames) {
      function ArrayToWebM(frames) {
        var info = checkFrames(frames);

        if (!info) {
          return [];
        }

        var clusterMaxDuration = 30000;
        var EBML = [{
          'id': 0x1a45dfa3,
          // EBML
          'data': [{
            'data': 1,
            'id': 0x4286 // EBMLVersion

          }, {
            'data': 1,
            'id': 0x42f7 // EBMLReadVersion

          }, {
            'data': 4,
            'id': 0x42f2 // EBMLMaxIDLength

          }, {
            'data': 8,
            'id': 0x42f3 // EBMLMaxSizeLength

          }, {
            'data': 'webm',
            'id': 0x4282 // DocType

          }, {
            'data': 2,
            'id': 0x4287 // DocTypeVersion

          }, {
            'data': 2,
            'id': 0x4285 // DocTypeReadVersion

          }]
        }, {
          'id': 0x18538067,
          // Segment
          'data': [{
            'id': 0x1549a966,
            // Info
            'data': [{
              'data': 1e6,
              //do things in millisecs (num of nanosecs for duration scale)
              'id': 0x2ad7b1 // TimecodeScale

            }, {
              'data': 'whammy',
              'id': 0x4d80 // MuxingApp

            }, {
              'data': 'whammy',
              'id': 0x5741 // WritingApp

            }, {
              'data': doubleToString(info.duration),
              'id': 0x4489 // Duration

            }]
          }, {
            'id': 0x1654ae6b,
            // Tracks
            'data': [{
              'id': 0xae,
              // TrackEntry
              'data': [{
                'data': 1,
                'id': 0xd7 // TrackNumber

              }, {
                'data': 1,
                'id': 0x73c5 // TrackUID

              }, {
                'data': 0,
                'id': 0x9c // FlagLacing

              }, {
                'data': 'und',
                'id': 0x22b59c // Language

              }, {
                'data': 'V_VP8',
                'id': 0x86 // CodecID

              }, {
                'data': 'VP8',
                'id': 0x258688 // CodecName

              }, {
                'data': 1,
                'id': 0x83 // TrackType

              }, {
                'id': 0xe0,
                // Video
                'data': [{
                  'data': info.width,
                  'id': 0xb0 // PixelWidth

                }, {
                  'data': info.height,
                  'id': 0xba // PixelHeight

                }]
              }]
            }]
          }]
        }]; //Generate clusters (max duration)

        var frameNumber = 0;
        var clusterTimecode = 0;

        while (frameNumber < frames.length) {
          var clusterFrames = [];
          var clusterDuration = 0;

          do {
            clusterFrames.push(frames[frameNumber]);
            clusterDuration += frames[frameNumber].duration;
            frameNumber++;
          } while (frameNumber < frames.length && clusterDuration < clusterMaxDuration);

          var clusterCounter = 0;
          var cluster = {
            'id': 0x1f43b675,
            // Cluster
            'data': getClusterData(clusterTimecode, clusterCounter, clusterFrames)
          }; //Add cluster to segment

          EBML[1].data.push(cluster);
          clusterTimecode += clusterDuration;
        }

        return generateEBML(EBML);
      }

      function getClusterData(clusterTimecode, clusterCounter, clusterFrames) {
        return [{
          'data': clusterTimecode,
          'id': 0xe7 // Timecode

        }].concat(clusterFrames.map(function (webp) {
          var block = makeSimpleBlock({
            discardable: 0,
            frame: webp.data.slice(4),
            invisible: 0,
            keyframe: 1,
            lacing: 0,
            trackNum: 1,
            timecode: Math.round(clusterCounter)
          });
          clusterCounter += webp.duration;
          return {
            data: block,
            id: 0xa3
          };
        }));
      } // sums the lengths of all the frames and gets the duration


      function checkFrames(frames) {
        if (!frames[0]) {
          postMessage({
            error: 'Something went wrong. Maybe WebP format is not supported in the current browser.'
          });
          return;
        }

        var width = frames[0].width,
            height = frames[0].height,
            duration = frames[0].duration;

        for (var i = 1; i < frames.length; i++) {
          duration += frames[i].duration;
        }

        return {
          duration: duration,
          width: width,
          height: height
        };
      }

      function numToBuffer(num) {
        var parts = [];

        while (num > 0) {
          parts.push(num & 0xff);
          num = num >> 8;
        }

        return new Uint8Array(parts.reverse());
      }

      function strToBuffer(str) {
        return new Uint8Array(str.split('').map(function (e) {
          return e.charCodeAt(0);
        }));
      }

      function bitsToBuffer(bits) {
        var data = [];
        var pad = bits.length % 8 ? new Array(1 + 8 - bits.length % 8).join('0') : '';
        bits = pad + bits;

        for (var i = 0; i < bits.length; i += 8) {
          data.push(parseInt(bits.substr(i, 8), 2));
        }

        return new Uint8Array(data);
      }

      function generateEBML(json) {
        var ebml = [];

        for (var i = 0; i < json.length; i++) {
          var data = json[i].data; // if(typeof data === 'object') {

          if (data instanceof Object) {
            data = generateEBML(data);
          }

          if (typeof data === 'number') {
            data = bitsToBuffer(data.toString(2));
          }

          if (typeof data === 'string') {
            data = strToBuffer(data);
          }

          var len = data.size || data.byteLength || data.length;
          var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
          var sizeToString = len.toString(2);
          var padded = new Array(zeroes * 7 + 7 + 1 - sizeToString.length).join('0') + sizeToString;
          var size = new Array(zeroes).join('0') + '1' + padded;
          ebml.push(numToBuffer(json[i].id));
          ebml.push(bitsToBuffer(size));
          ebml.push(data);
        }

        return new Blob(ebml, {
          type: 'video/webm'
        });
      }

      function toBinStrOld(bits) {
        var data = '';
        var pad = bits.length % 8 ? new Array(1 + 8 - bits.length % 8).join('0') : '';
        bits = pad + bits;

        for (var i = 0; i < bits.length; i += 8) {
          data += String.fromCharCode(parseInt(bits.substr(i, 8), 2));
        }

        return data;
      }

      function makeSimpleBlock(data) {
        var flags = 0;

        if (data.keyframe) {
          flags |= 128;
        }

        if (data.invisible) {
          flags |= 8;
        }

        if (data.lacing) {
          flags |= data.lacing << 1;
        }

        if (data.discardable) {
          flags |= 1;
        }

        if (data.trackNum > 127) {
          throw 'TrackNumber > 127 not supported';
        }

        var out = [data.trackNum | 0x80, data.timecode >> 8, data.timecode & 0xff, flags].map(function (e) {
          return String.fromCharCode(e);
        }).join('') + data.frame;
        return out;
      }

      function parseWebP(riff) {
        var VP8 = riff.RIFF[0].WEBP[0];
        var frameStart = VP8.indexOf('\x9d\x01\x2a'); // A VP8 keyframe starts with the 0x9d012a header

        for (var i = 0, c = []; i < 4; i++) {
          c[i] = VP8.charCodeAt(frameStart + 3 + i);
        }

        var width, height, tmp; //the code below is literally copied verbatim from the bitstream spec

        tmp = c[1] << 8 | c[0];
        width = tmp & 0x3FFF;
        tmp = c[3] << 8 | c[2];
        height = tmp & 0x3FFF;
        return {
          width: width,
          height: height,
          data: VP8,
          riff: riff
        };
      }

      function getStrLength(string, offset) {
        return parseInt(string.substr(offset + 4, 4).split('').map(function (i) {
          var unpadded = i.charCodeAt(0).toString(2);
          return new Array(8 - unpadded.length + 1).join('0') + unpadded;
        }).join(''), 2);
      }

      function parseRIFF(string) {
        var offset = 0;
        var chunks = {};

        while (offset < string.length) {
          var id = string.substr(offset, 4);
          var len = getStrLength(string, offset);
          var data = string.substr(offset + 4 + 4, len);
          offset += 4 + 4 + len;
          chunks[id] = chunks[id] || [];

          if (id === 'RIFF' || id === 'LIST') {
            chunks[id].push(parseRIFF(data));
          } else {
            chunks[id].push(data);
          }
        }

        return chunks;
      }

      function doubleToString(num) {
        return [].slice.call(new Uint8Array(new Float64Array([num]).buffer), 0).map(function (e) {
          return String.fromCharCode(e);
        }).reverse().join('');
      }

      var webm = new ArrayToWebM(frames.map(function (frame) {
        var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
        webp.duration = frame.duration;
        return webp;
      }));
      postMessage(webm);
    }
    /**
     * Encodes frames in WebM container. It uses WebWorkinvoke to invoke 'ArrayToWebM' method.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.compile(function(blob) {
     *    // blob.size - blob.type
     * });
     */


    WhammyVideo.prototype.compile = function (callback) {
      var webWorker = processInWebWorker(whammyInWebWorker);

      webWorker.onmessage = function (event) {
        if (event.data.error) {
          console.error(event.data.error);
          return;
        }

        callback(event.data);
      };

      webWorker.postMessage(this.frames);
    };

    return {
      /**
       * A more abstract-ish API.
       * @method
       * @memberof Whammy
       * @example
       * recorder = new Whammy().Video(0.8, 100);
       * @param {?number} speed - 0.8
       * @param {?number} quality - 100
       */
      Video: WhammyVideo
    };
  }(); // ______________ (indexed-db)
  // DiskStorage.js

  /**
   * DiskStorage is a standalone object used by {@link RecordRTC} to store recorded blobs in IndexedDB storage.
   * @summary Writing blobs into IndexedDB.
   * @example
   * DiskStorage.Store({
   *     audioBlob: yourAudioBlob,
   *     videoBlob: yourVideoBlob,
   *     gifBlob  : yourGifBlob
   * });
   * DiskStorage.Fetch(function(dataURL, type) {
   *     if(type === 'audioBlob') { }
   *     if(type === 'videoBlob') { }
   *     if(type === 'gifBlob')   { }
   * });
   * // DiskStorage.dataStoreName = 'recordRTC';
   * // DiskStorage.onError = function(error) { };
   * @property {function} init - This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
   * @property {function} Fetch - This method fetches stored blobs from IndexedDB.
   * @property {function} Store - This method stores blobs in IndexedDB.
   * @property {function} onError - This function is invoked for any known/unknown error.
   * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
   */


  var DiskStorage = {
    /**
     * This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.init();
     */
    init: function init() {
      var self = this;
      var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB;
      var dbVersion = 1;
      var dbName = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ''),
          db;
      var request = indexedDB.open(dbName, dbVersion);

      function createObjectStore(dataBase) {
        dataBase.createObjectStore(self.dataStoreName);
      }

      function putInDB() {
        var transaction = db.transaction([self.dataStoreName], 'readwrite');

        if (self.videoBlob) {
          transaction.objectStore(self.dataStoreName).put(self.videoBlob, 'videoBlob');
        }

        if (self.gifBlob) {
          transaction.objectStore(self.dataStoreName).put(self.gifBlob, 'gifBlob');
        }

        if (self.audioBlob) {
          transaction.objectStore(self.dataStoreName).put(self.audioBlob, 'audioBlob');
        }

        function getFromStore(portionName) {
          transaction.objectStore(self.dataStoreName).get(portionName).onsuccess = function (event) {
            if (self.callback) {
              self.callback(event.target.result, portionName);
            }
          };
        }

        getFromStore('audioBlob');
        getFromStore('videoBlob');
        getFromStore('gifBlob');
      }

      request.onerror = self.onError;

      request.onsuccess = function () {
        db = request.result;
        db.onerror = self.onError;

        if (db.setVersion) {
          if (db.version !== dbVersion) {
            var setVersion = db.setVersion(dbVersion);

            setVersion.onsuccess = function () {
              createObjectStore(db);
              putInDB();
            };
          } else {
            putInDB();
          }
        } else {
          putInDB();
        }
      };

      request.onupgradeneeded = function (event) {
        createObjectStore(event.target.result);
      };
    },

    /**
     * This method fetches stored blobs from IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Fetch(function(dataURL, type) {
     *     if(type === 'audioBlob') { }
     *     if(type === 'videoBlob') { }
     *     if(type === 'gifBlob')   { }
     * });
     */
    Fetch: function Fetch(callback) {
      this.callback = callback;
      this.init();
      return this;
    },

    /**
     * This method stores blobs in IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Store({
     *     audioBlob: yourAudioBlob,
     *     videoBlob: yourVideoBlob,
     *     gifBlob  : yourGifBlob
     * });
     */
    Store: function Store(config) {
      this.audioBlob = config.audioBlob;
      this.videoBlob = config.videoBlob;
      this.gifBlob = config.gifBlob;
      this.init();
      return this;
    },

    /**
     * This function is invoked for any known/unknown error.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.onError = function(error){
     *     alerot( JSON.stringify(error) );
     * };
     */
    onError: function onError(error) {
      console.error(JSON.stringify(error, null, '\t'));
    },

    /**
     * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.dataStoreName = 'recordRTC';
     */
    dataStoreName: 'recordRTC',
    dbName: null
  }; // ______________
  // GifRecorder.js

  /**
   * GifRecorder is standalone calss used by {@link RecordRTC} to record video as animated gif image.
   * @typedef GifRecorder
   * @class
   * @example
   * var recorder = new GifRecorder(mediaStream);
   * recorder.record();
   * recorder.stop(function(blob) {
   *     img.src = URL.createObjectURL(blob);
   * });
   * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
   */

  function GifRecorder(mediaStream) {
    if (!window.GIFEncoder) {
      throw 'Please link: https://cdn.webrtc-experiment.com/gif-recorder.js';
    }
    /**
     * This method records MediaStream.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.record();
     */


    this.record = function () {
      if (!this.width) {
        this.width = video.offsetWidth || 320;
      }

      if (!this.height) {
        this.height = video.offsetHeight || 240;
      }

      if (!this.video) {
        this.video = {
          width: this.width,
          height: this.height
        };
      }

      if (!this.canvas) {
        this.canvas = {
          width: this.width,
          height: this.height
        };
      }

      canvas.width = this.canvas.width;
      canvas.height = this.canvas.height;
      video.width = this.video.width;
      video.height = this.video.height; // external library to record as GIF images

      gifEncoder = new window.GIFEncoder(); // void setRepeat(int iter)
      // Sets the number of times the set of GIF frames should be played.
      // Default is 1; 0 means play indefinitely.

      gifEncoder.setRepeat(0); // void setFrameRate(Number fps)
      // Sets frame rate in frames per second.
      // Equivalent to setDelay(1000/fps).
      // Using "setDelay" instead of "setFrameRate"

      gifEncoder.setDelay(this.frameRate || 200); // void setQuality(int quality)
      // Sets quality of color quantization (conversion of images to the
      // maximum 256 colors allowed by the GIF specification).
      // Lower values (minimum = 1) produce better colors,
      // but slow processing significantly. 10 is the default,
      // and produces good color mapping at reasonable speeds.
      // Values greater than 20 do not yield significant improvements in speed.

      gifEncoder.setQuality(this.quality || 10); // Boolean start()
      // This writes the GIF Header and returns false if it fails.

      gifEncoder.start();
      startTime = Date.now();
      var self = this;

      function drawVideoFrame(time) {
        if (isPausedRecording) {
          return setTimeout(function () {
            drawVideoFrame(time);
          }, 100);
        }

        lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

        if (_typeof(lastFrameTime) === undefined) {
          lastFrameTime = time;
        } // ~10 fps


        if (time - lastFrameTime < 90) {
          return;
        }

        if (video.paused) {
          // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
          // Tweak for Android Chrome
          video.play();
        }

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        if (self.onGifPreview) {
          self.onGifPreview(canvas.toDataURL('image/png'));
        }

        gifEncoder.addFrame(context);
        lastFrameTime = time;
      }

      lastAnimationFrame = requestAnimationFrame(drawVideoFrame);
    };
    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.stop(function(blob) {
     *     img.src = URL.createObjectURL(blob);
     * });
     */


    this.stop = function () {
      if (lastAnimationFrame) {
        cancelAnimationFrame(lastAnimationFrame);
      }

      endTime = Date.now();
      /**
       * @property {Blob} blob - The recorded blob object.
       * @memberof GifRecorder
       * @example
       * recorder.stop(function(){
       *     var blob = recorder.blob;
       * });
       */

      this.blob = new Blob([new Uint8Array(gifEncoder.stream().bin)], {
        type: 'image/gif'
      }); // bug: find a way to clear old recorded blobs

      gifEncoder.stream().bin = [];
    };

    var isPausedRecording = false;
    /**
     * This method pauses the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.pause();
     */

    this.pause = function () {
      isPausedRecording = true;

      if (!this.disableLogs) {
        console.debug('Paused recording.');
      }
    };
    /**
     * This method resumes the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.resume();
     */


    this.resume = function () {
      isPausedRecording = false;

      if (!this.disableLogs) {
        console.debug('Resumed recording.');
      }
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var video = document.createElement('video');
    video.muted = true;
    video.autoplay = true;
    video.src = URL.createObjectURL(mediaStream);
    video.play();
    var lastAnimationFrame = null;
    var startTime, endTime, lastFrameTime;
    var gifEncoder;
  }

  window.WhammyRecorder = WhammyRecorder;
});

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(45);
var ArrayBufferModule = __webpack_require__(111);
var NATIVE_ARRAY_BUFFER = __webpack_require__(112).NATIVE_ARRAY_BUFFER;

// `DataView` constructor
// https://tc39.github.io/ecma262/#sec-dataview-constructor
$({ global: true, forced: !NATIVE_ARRAY_BUFFER }, {
  DataView: ArrayBufferModule.DataView
});


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var fails = __webpack_require__(4);
var thisNumberValue = __webpack_require__(214);

var nativeToPrecision = 1.0.toPrecision;

var FORCED = fails(function () {
  // IE7-
  return nativeToPrecision.call(1, undefined) !== '1';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToPrecision.call({});
});

// `Number.prototype.toPrecision` method
// https://tc39.github.io/ecma262/#sec-number.prototype.toprecision
$({ target: 'Number', proto: true, forced: FORCED }, {
  toPrecision: function toPrecision(precision) {
    return precision === undefined
      ? nativeToPrecision.call(thisNumberValue(this))
      : nativeToPrecision.call(thisNumberValue(this), precision);
  }
});


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

var typedArrayConstructor = __webpack_require__(148);

// `Float32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
typedArrayConstructor('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var typedArrayConstructor = __webpack_require__(148);

// `Float64Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects
typedArrayConstructor('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(342), __webpack_require__(352), __webpack_require__(354), __webpack_require__(208), __webpack_require__(357), __webpack_require__(358), __webpack_require__(343), __webpack_require__(345), __webpack_require__(359), __webpack_require__(360)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _CallServiceWorker, _CallListener, _CallDirection, _SignalingState, _VideoSize, _MediaProbe, _MediaServiceWorker, _adapter, _Call, _CallSession) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "CallServiceWorker", {
    enumerable: true,
    get: function get() {
      return _CallServiceWorker.CallServiceWorker;
    }
  });
  Object.defineProperty(_exports, "CallListener", {
    enumerable: true,
    get: function get() {
      return _CallListener.CallListener;
    }
  });
  Object.defineProperty(_exports, "CallDirection", {
    enumerable: true,
    get: function get() {
      return _CallDirection.CallDirection;
    }
  });
  Object.defineProperty(_exports, "SignalingState", {
    enumerable: true,
    get: function get() {
      return _SignalingState.SignalingState;
    }
  });
  Object.defineProperty(_exports, "VideoSize", {
    enumerable: true,
    get: function get() {
      return _VideoSize.VideoSize;
    }
  });
  Object.defineProperty(_exports, "MediaProbe", {
    enumerable: true,
    get: function get() {
      return _MediaProbe.MediaProbe;
    }
  });
  Object.defineProperty(_exports, "MediaServiceWorker", {
    enumerable: true,
    get: function get() {
      return _MediaServiceWorker.MediaServiceWorker;
    }
  });
  Object.defineProperty(_exports, "Call", {
    enumerable: true,
    get: function get() {
      return _Call.Call;
    }
  });
  Object.defineProperty(_exports, "CallSession", {
    enumerable: true,
    get: function get() {
      return _CallSession.CallSession;
    }
  });

  /*
   * Boot.js
   * Cube Engine
   *
   * Copyright (c) 2015-2017 Cube Team. All rights reserved.
   */
  window.CubeSignaling = {
    CallServiceWorker: _CallServiceWorker.CallServiceWorker,
    Call: _Call.Call,
    CallSession: _CallSession.CallSession,
    CallDirection: _CallDirection.CallDirection,
    CallListener: _CallListener.CallListener,
    VideoSize: _VideoSize.VideoSize,
    SignalingState: _SignalingState.SignalingState,
    MediaProbe: _MediaProbe.MediaProbe,
    MediaServiceWorker: _MediaServiceWorker.MediaServiceWorker
  };
});

/***/ }),
/* 342 */
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

__webpack_require__(301);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(132);

__webpack_require__(216);

__webpack_require__(139);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(142);

__webpack_require__(89);

__webpack_require__(196);

__webpack_require__(200);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(206), __webpack_require__(207), __webpack_require__(268), __webpack_require__(235), __webpack_require__(238), __webpack_require__(343), __webpack_require__(345), __webpack_require__(352), __webpack_require__(353), __webpack_require__(354), __webpack_require__(208), __webpack_require__(355), __webpack_require__(356)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _RegistrationState, _CELLET, _Peer, _ActionConst, _StateCode, _MediaServiceWorker, _adapter, _CallListener, _CallService2, _CallDirection, _SignalingState, _CallServiceDelegate, _ResponseState) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CallServiceWorker = void 0;
  _adapter = _interopRequireDefault(_adapter);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var _window$CellCloud = window.CellCloud,
      HashMap = _window$CellCloud.HashMap,
      Logger = _window$CellCloud.Logger,
      ActionDialect = _window$CellCloud.ActionDialect,
      TalkService = _window$CellCloud.TalkService;

  var CallServiceWorker =
  /*#__PURE__*/
  function (_CallService) {
    _inherits(CallServiceWorker, _CallService);

    function CallServiceWorker(engine, localVideo, remoteVideo, bellAudio, canvasDomId) {
      var _this;

      _classCallCheck(this, CallServiceWorker);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CallServiceWorker).call(this, engine, null, _CELLET.CELLET.Signaling)); // 初始化委派

      _this.delegate = new _CallServiceDelegate.CallServiceDelegate(_CallListener.CallListener, engine);
      _this.localVideo = localVideo;
      _this.localVideo.muted = true;
      _this.remoteVideo = remoteVideo;
      _this.bellAudio = bellAudio;
      _this.canvasDomId = canvasDomId;
      _this.autoAnswer = false; // 挂断标签

      _this.flagTerminated = false;
      _this.target = null;
      _this.targetData = null;
      _this.direction = null;
      _this.videoEnabled = true;
      _this.state = _SignalingState.SignalingState.None;
      _this.sdpCache = null; // 带宽

      _this.audioBandwidth = 70;
      _this.videoBandwidth = 512;
      _this.bellAudioPaused = false; // 是否主叫

      _this.isInitiator = false; // 是否已经启动 WebRTC 流程

      _this.isStarted = false; // 用户是否被正确注册

      _this.isChannelReady = false; // 是否已向服务器发出邀请或者回应邀请

      _this.hasResponded = false; // WebRTC data structures
      // Streams

      _this.localStream = null;
      _this.remoteStream = null; // PeerConnection

      _this.pc = null; // local video ready callback

      _this.localVideoReady = null; // remote video ready callback

      _this.remoteVideoReady = null; // close callback

      _this.videoCloseHandler = null;
      _this.pcConstraints = {
        "optional": [{
          "DtlsSrtpKeyAgreement": true
        }]
      };
      _this.sdpConstraints = {};
      _this.candidateQueue = [];
      _this.maxVideoSize = null;
      _this.maxFrameRate = 15;
      _this.minFrameRate = 8;
      _this.iceTimer = 0;
      _this.iceTimeout = 15000;
      _this.hangupTimer = 0;
      _this.hangupTimeout = 5000; // 应答回调

      _this.replyCallback = null;
      _this.replyTimer = 0; //保存多人会话信息 key:cubeId value:callSession

      _this.saveCallSession = new HashMap();
      _this.canAddIceCandidate = false;
      _this.lastIceServers = null;
      _this._bodyOverflow = null;
      _this._maskDom = null;
      _this._maskHeight = 1080; // 音视频心跳

      _this.heartbeatTimer = null; // 呼叫心跳

      _this.callTimer = null; // 设备占用计数

      _this.promiseCount = 0;
      _this.codec = "VP8";

      _this.localVideo.addEventListener('loadeddata', function (e) {
        if (typeof _this.localVideoReady === 'function') {
          _this.localVideoReady(_this.localVideo, _assertThisInitialized(_this));
        }
      }, false);

      _this.remoteVideo.addEventListener('loadeddata', function (e) {
        if (typeof _this.remoteVideoReady === 'function') {
          _this.remoteVideoReady(_this.remoteVideo, _assertThisInitialized(_this));
        }
      }, false);

      if (_this.bellAudio) {
        _this.bellAudio.addEventListener('loadeddata', function (e) {
          if (_this.bellAudioPaused) {
            return;
          }

          _this.bellAudio.play();
        }, false);
      }

      return _this;
    }

    _createClass(CallServiceWorker, [{
      key: "onStartup",
      value: function onStartup() {
        // 创建媒体控制器
        this.engine.sspMediaService = new _MediaServiceWorker.MediaServiceWorker(this, 'local_canvas');
      }
      /**
       * 设置是否自动应答。
       */

    }, {
      key: "setAutoAnswer",
      value: function setAutoAnswer(autoAnswer) {
        this.autoAnswer = autoAnswer;
      }
      /**
       * 接听。
       */

    }, {
      key: "answerCall",
      value: function answerCall(video) {
        var _this2 = this;

        if (this.engine.session.callPeer && this.engine.session.callPeer.type == "conference" && null != this.engine.sipService) {
          // 会议直接接听
          return this.engine.sipService.answer();
        }

        if (!this.isChannelReady) {
          return false;
        }

        if (this.isInitiator || null == this.sdpCache) {
          return false;
        }

        this.flagTerminated = false;
        var self = this;

        var constraints = self._generateMediaConstraints();

        if (typeof video === 'string') {
          constraints.mandatory.chromeMediaSourceId = video;
        }

        if (this.checkAndStart()) {
          // 回调正在处理
          this.delegate.didProgress(self, self.target);
          this.pc.setRemoteDescription(new RTCSessionDescription({
            type: "offer",
            sdp: self.sdpCache
          }), function () {
            _this2.canAddIceCandidate = true;

            _this2.drainCandidateQueue();

            _this2.utils.getUserMedia(self.videoEnabled ? constraints : false, true, function (err, stream) {
              if (err) {
                _this2.utils.getUserMedia(false, true, function (err, stream) {
                  if (err) {
                    _this2.isStarted = false;

                    _this2.handleUserMediaError(err);
                  } else {
                    _this2.handleUserMedia(stream);

                    _this2.pc.addStream(self.localStream);

                    _this2.doAnswer();
                  }
                });
              } else {
                _this2.handleUserMedia(stream);

                _this2.pc.addStream(self.localStream);

                _this2.doAnswer();
              }
            });
          }, function (e) {
            _this2.onSignalingError(e);
          });
        } // 显示遮罩


        this._showMask();

        return true;
      }
      /**
       * 发起呼叫。
       */

    }, {
      key: "makeCall",
      value: function makeCall(callee, video) {
        //当前没有网络或者没有正确注册时回调
        if (!this.engine.networkConnected) {
          this.delegate.didFailed(this, this.target, _StateCode.StateCode.NetworkNotReachable);
          return false;
        } else if (!this.isChannelReady) {
          this.delegate.didFailed(this, this.target, _StateCode.StateCode.NetworkNotReachable);
          return false;
        }

        if (this.hangupTimer > 0) {
          // 挂断定时器还在工作，不能启动新呼叫
          return false;
        } // 正在呼叫则返回


        if (this.engine.session.isCalling()) {
          this.delegate.didFailed(this, this.target, '当前正在通话中');
          return false;
        }

        this.flagTerminated = false; // 被叫号码

        callee = callee.toString(); // 设置呼叫状态

        this.engine.session.callState = _SignalingState.SignalingState.Progress;
        this.engine.session.setCallPeer(new _Peer.Peer(callee));
        return this.invite(callee, video);
      }
      /**
       * 挂断通话。
       *
       * @param { Number } code
       * @param { String } desc
       */

    }, {
      key: "terminateCall",
      value: function terminateCall(code, desc) {
        if (this.state == _SignalingState.SignalingState.None || this.state == _SignalingState.SignalingState.OtherCall) {
          this.state = this.engine.session.callState = _SignalingState.SignalingState.None;
          return false;
        }

        this.flagTerminated = true;
        var sspRet = false;
        var sipRet = false;
        sspRet = this.hangup(code, desc); // if (null !== this.engine.sipService) {
        //     sipRet = this.engine.sipService.hangup();
        // }

        return sspRet || sipRet;
      }
    }, {
      key: "tryHold",
      value: function tryHold(hold, tryCounts) {// Nothing
      }
    }, {
      key: "_generateMediaConstraints",
      value: function _generateMediaConstraints() {
        var mW = 320;
        var mH = 240;

        if (null != this.maxVideoSize) {
          if (this.maxVideoSize.width !== undefined) mW = this.maxVideoSize.width;
          if (this.maxVideoSize.height !== undefined) mH = this.maxVideoSize.height;
        }

        Logger.d("SignalingWorker", "Camera resolution: " + mW + "x" + mH);
        var constraints = {
          "mandatory": {
            "maxWidth": mW,
            "maxHeight": mH,
            "minWidth": 160,
            "minHeight": 120,
            "maxFrameRate": this.maxFrameRate,
            "minFrameRate": this.minFrameRate
          }
        };

        if (this.utils.isFirefox) {
          if (parseInt(_adapter["default"].detectBrowser.result.version) < 43) {
            constraints = {
              width: {
                min: 160,
                max: mW
              },
              height: {
                min: 120,
                max: mH
              },
              frameRate: {
                min: this.minFrameRate,
                max: this.maxFrameRate
              },
              require: ["width", "height", "frameRate"]
            };
          } else {
            constraints = {
              width: mW,
              height: mH,
              frameRate: this.minFrameRate
            };
          }
        }

        return constraints;
      }
    }, {
      key: "invite",
      value: function invite(callee, video) {
        var _this3 = this;

        if (!this.isChannelReady) {
          return false;
        }

        this.hasResponded = false;
        this.lastIceServers = window.cube._CUBE_STUN_SERVERS; // 呼叫目标

        this.target = callee.toString(); // 主叫

        this.isInitiator = true;
        this.direction = _CallDirection.CallDirection.Outgoing;
        this.videoEnabled = video !== false; // 更新状态

        this.state = _SignalingState.SignalingState.Invite; // 回调正在邀请

        this.delegate.didInvite(this, this.direction, this.target, this.videoEnabled);

        var constraints = this._generateMediaConstraints();

        if (typeof video === 'string') {
          constraints.mandatory.chromeMediaSourceId = video;
        } // 呼叫超时 48s


        this.callTimer = setTimeout(function () {
          if (_this3.state == _SignalingState.SignalingState.Invite || _this3.state == _SignalingState.SignalingState.Ringing) {
            _this3.delegate.didEnd(_this3, _this3.target, 'timeout', new _ResponseState.ResponseState('717', '超时挂断'));

            _this3._cleanCall();

            return false;
          }
        }, 48000);

        if (this.checkAndStart()) {
          // 回调正在处理
          this.delegate.didProgress(this, this.target);
          this.utils.getUserMedia(this.videoEnabled ? constraints : false, true, function (err, stream) {
            if (err) {
              _this3.isStarted = false; // 没有摄像头， 获取麦克风

              if (err.name == 'NotFoundError') {
                _this3.utils.getUserMedia(false, true, function (err, stream) {
                  if (err) {
                    _this3.handleUserMediaError(err);

                    return false;
                  } else {
                    _this3.handleUserMedia(stream);

                    _this3.pc.addStream(_this3.localStream);

                    return true;
                  }
                });
              } else if (stream == undefined) {
                // 设备占用
                if (_this3.promiseCount < 3) {
                  new Promise(function (resovle, reject) {
                    if (_this3.invite(callee, video)) {
                      resovle();
                      return true;
                    } else {
                      _this3.handleUserMediaError(err);

                      reject();
                    }
                  });
                  _this3.promiseCount++;
                } else {
                  _this3.promiseCount = 0;

                  _this3.handleUserMediaError(err);

                  return false;
                }
              }
            } else {
              _this3.handleUserMedia(stream);

              _this3.pc.addStream(_this3.localStream);
            }
          });
        } else {
          // 报告状态错误
          this.delegate.didFailed(this, this.target, _StateCode.StateCode.SignalingStartError);
        }

        Logger.d('SignalingWorker', 'Getting user media with constraints'); // 显示遮罩

        this._showMask();

        return true;
      } // 重新协商

    }, {
      key: "renegotiate",
      value: function renegotiate(videoEnable) {
        var _this4 = this;

        var audioEnable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        this.pc.removeStream(this.localStream);
        this.utils.getUserMedia(videoEnable, audioEnable, function (err, stream) {
          // 重连需要服务器支持，重新协商
          if (err) {
            console.log(err);
            return false;
          }

          _this4.handleUserMedia(stream);

          _this4.pc.addStream(stream);

          _this4.doCall(true);
        });
      }
    }, {
      key: "_handleRenegotiate",
      value: function _handleRenegotiate(sdp, type) {
        if (this.state != _SignalingState.SignalingState.Incall) {
          return false;
        }

        var peer = this.engine.session.callPeer.name.toString();
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionNegotiate);
        dialect.appendParam('param', {
          "callee": peer,
          "sdp": sdp,
          type: type,
          ICEServers: window.cube._CUBE_ICE_SERVERS
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
      }
    }, {
      key: "changeMediaDevice",
      value: function changeMediaDevice(deviceId) {
        if (this.videoEnabled) {
          var constraints = this._generateMediaConstraints();

          if (typeof deviceId === 'string') {
            constraints.mandatory.chromeMediaSourceId = deviceId;
          } // TODO

        }
      }
    }, {
      key: "hangup",
      value: function hangup(code, desc) {
        if (this.hangupTimer > 0) {
          clearTimeout(this.hangupTimer);
        }

        var self = this;
        var target = this.target.toString();
        this.hangupTimer = setTimeout(function () {
          clearTimeout(self.hangupTimer);
          self.hangupTimer = 0;
          self.delegate.didEnd(self, target, "bye-ack", new _ResponseState.ResponseState(code, desc));
        }, this.hangupTimeout);
        var params = {
          'call': this.target
        };
        arguments.length > 0 && Object.assign(params, {
          'code': code,
          'desc': desc
        });

        if (this.state == _SignalingState.SignalingState.Invite || this.state == _SignalingState.SignalingState.Ringing) {
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionCancel);
          dialect.appendParam('param', params);
          window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);

          this._cleanCall();
        } else {
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionBye);
          dialect.appendParam('param', params);
          window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);

          this._cleanCall();
        }

        this.hasResponded = false;
        return true;
      }
    }, {
      key: "_cleanCall",
      value: function _cleanCall() {
        this.canAddIceCandidate = false;

        if (this.iceTimer > 0) {
          clearTimeout(this.iceTimer);
          this.iceTimer = 0;
        } // 处理铃声


        if (null != this.bellAudio) {
          this.bellAudioPaused = true;
          this.bellAudio.pause();
        }

        try {
          if (this.utils.isIE || this.utils.isSafari) {
            this.localVideo = document.getElementById(this.localVideo.id);
            window.attachMediaStream(this.localVideo, null);
          } else {
            this.localVideo.src = "";
          }
        } catch (e) {
          Logger.w("SignalingWorker#clean", e.message);
        }

        try {
          if (this.utils.isIE || this.utils.isSafari) {
            this.remoteVideo = document.getElementById(this.remoteVideo.id);
            window.attachMediaStream(this.remoteVideo, null);
          } else {
            this.remoteVideo.src = "";
          }
        } catch (e) {
          Logger.w("SignalingWorker#clean", e.message);
        }

        if (null != this.localStream) {
          try {
            this.localStream.stop();
          } catch (e) {}

          try {
            this.localStream.getAudioTracks()[0].stop();

            if (this.localStream.getVideoTracks()[0]) {
              this.localStream.getVideoTracks()[0].stop();
            }
          } catch (e) {}

          this.localStream = null;
        }

        if (null != this.remoteStream) {
          try {
            this.remoteStream.getAudioTracks()[0].stop();

            if (this.remoteStream.getVideoTracks()[0]) {
              this.remoteStream.getVideoTracks()[0].stop();
            }
          } catch (e) {
            Logger.w("SignalingWorker#clean", e.message);
          }

          this.remoteStream = null;
        }

        if (null != this.pc) {
          this.pc.close();
          this.pc = null;
        }

        if (this.hangupTimer > 0) {
          clearTimeout(this.hangupTimer);
          this.hangupTimer = 0;
        }

        clearInterval(this.heartbeatTimer);
        clearTimeout(this.callTimer);
        this.direction = null;
        this.target = null;
        this.targetData = null;
        this.engine.session.callState = _SignalingState.SignalingState.None;
        this.engine.session.CallDirection = null;
        this.state = _SignalingState.SignalingState.None;
        this.isInitiator = false;
        this.isStarted = false;
        this.sdpCache = null;
      }
      /**
       * 当注册状态变更时触发
       * @param session {CubeSession} 会话对象
       */

    }, {
      key: "onRegisterStateChanged",
      value: function onRegisterStateChanged(session) {
        if (session.regState == _RegistrationState.RegistrationState.Ok) {
          this.isChannelReady = true;
        } else {
          this.isChannelReady = false;
          this.hangup();
        }
      }
    }, {
      key: "tryReInvite",
      value: function tryReInvite() {
        if (TalkService.getInstance().isCalled(_CELLET.CELLET.Signaling)) {
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionTryReInvite);
          window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
        }
      }
    }, {
      key: "onDialogue",
      value: function onDialogue(action, dialect) {
        if (action == _ActionConst.ActionConst.ActionInviteAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionInviteAck);

          this._processInviteAck(dialect);
        } else if (action == _ActionConst.ActionConst.ActionInvite) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionInvite);

          this._processInvite(dialect);
        } else if (action == _ActionConst.ActionConst.ActionAnswerAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionAnswerAck);

          this._processAnswerAck(dialect);
        } else if (action == _ActionConst.ActionConst.ActionAnswer) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionAnswer);

          this._processAnswer(dialect);
        } else if (action == _ActionConst.ActionConst.ActionByeAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionByeAck);

          this._processByeAck(dialect);
        } else if (action == _ActionConst.ActionConst.ActionBye) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionBye);

          this._processBye(dialect);
        } else if (action == _ActionConst.ActionConst.ActionCancelAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionCancelAck);

          this._processCancelAck(dialect);
        } else if (action == _ActionConst.ActionConst.ActionCancel) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionCancel);

          this._processCancel(dialect);
        } else if (action == _ActionConst.ActionConst.ActionCandidate) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionCandidate);

          this._processCandidate(dialect);
        } else if (action == _ActionConst.ActionConst.ActionCandidateAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionCandidateAck);

          this._processCandidateAck(dialect);
        } else if (action == _ActionConst.ActionConst.ActionConsult) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionConsult);

          this._processConsult(dialect);
        } else if (action == _ActionConst.ActionConst.ActionConsultAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionConsultAck);

          this._processConsultAck(dialect);
        } else if (action == _ActionConst.ActionConst.ActionReply) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionReply);

          this._processReply(dialect);
        } else if (action == _ActionConst.ActionConst.ActionReplyAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionReplyAck);

          this._processReplyAck(dialect);
        } else if (action == _ActionConst.ActionConst.ActionTryReInviteAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionTryReInviteAck);

          this._processTryReInviteAck(dialect);
        } else if (action == _ActionConst.ActionConst.ActionReverseCall) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionReverseCall);

          this._processReverseCall(dialect);
        } else if (action == _ActionConst.ActionConst.ActionNegotiate) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionNegotiate);

          this._processNegotiate(dialect);
        } else if (action == _ActionConst.ActionConst.ActionNegotiateAck) {
          Logger.d('SignalingWorker#onDialogue', _ActionConst.ActionConst.ActionNegotiateAck);

          this._processNegotiateAck(dialect);
        }
      }
    }, {
      key: "setBandwidth",
      value: function setBandwidth(audio, video) {
        this.audioBandwidth = audio;
        this.videoBandwidth = video;
      }
    }, {
      key: "getLocalVideo",
      value: function getLocalVideo() {
        return this.localVideo;
      }
    }, {
      key: "getRemoteVideo",
      value: function getRemoteVideo() {
        return this.remoteVideo;
      } // 协商

    }, {
      key: "consult",
      value: function consult(media, operation, sdp, type) {
        if (this.state != _SignalingState.SignalingState.Incall) {
          return false;
        }

        var peer = this.engine.session.callPeer.name.toString();
        var payload = {
          "ver": 1,
          "media": media,
          "operation": operation
        };
        sdp ? payload.sdp = sdp : null;
        type ? payload.type = type : null;
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionConsult);
        dialect.appendParam('param', {
          "peer": peer,
          "payload": payload
        });
        return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
      } // 请求对端给予应答

    }, {
      key: "reply",
      value: function reply(target, timeout, callback) {
        if (this.replyTimer > 0) {
          return false;
        }

        this.replyCallback = callback;
        var self = this;
        this.replyTimer = setTimeout(function () {
          clearTimeout(self.replyTimer);
          self.replyTimer = 0;
          self.replyCallback.call(null, false, target, null);
        }, timeout);
        var param = {
          "target": target,
          "originate": Date.now()
        };
        var dialect = new ActionDialect();
        dialect.setAction(_ActionConst.ActionConst.ActionReply);
        dialect.appendParam("param", param);
        return window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
      } // Channel negotiation trigger function

    }, {
      key: "checkAndStart",
      value: function checkAndStart() {
        if (!this.isStarted) {
          // 创建 PeerConnection
          if (!this.createPeerConnection()) {
            // 发生错误
            return false;
          } // 标记为已启动


          this.isStarted = true;
          return true;
        } else {
          return false;
        }
      } // PeerConnection management...

    }, {
      key: "createPeerConnection",
      value: function createPeerConnection() {
        var i = 0;
        var self = this;

        try {
          var config = {
            "iceServers": self.lastIceServers
          };
          self.pc = new RTCPeerConnection(config, self.pcConstraints);

          self.pc.onicecandidate = function (e) {
            self.handleIceCandidate(e);
          };

          self.pc.oniceconnectionstatechange = function (e) {
            self.handleIceConnectionStateChange(e);
          };

          self.pc.onconnectionstatechange = function (e) {
            self.handleConnectionStateChange(e);
          };

          self.pc.onnegotiationneeded = function () {
            // 主叫发起呼叫
            if (self.isInitiator && i == 0) {
              self.doCall();
              i++;
            }
          };

          Logger.d('SignalingWorker', 'Created RTCPeerConnnection with:\n  config: \'' + JSON.stringify(config) + '\';\n  constraints: \'' + JSON.stringify(self.pcConstraints) + '\'.');
        } catch (e) {
          Logger.d('SignalingWorker', 'Failed to create PeerConnection, exception: ' + e.message); //alert('Cannot create RTCPeerConnection object.');

          self.delegate.didFailed(self, self.target, _StateCode.StateCode.RTCInitializeFailed);

          self._cleanCall();

          return false;
        }

        self.pc.onaddstream = function (e) {
          self.handleRemoteStreamAdded(e);
        };

        self.pc.onremovestream = function (e) {
          self.handleRemoteStreamRemoved(e);
        }; // Data channel

        /*
         if (isInitiator) {
         try {
         // Create a reliable data channel
         sendChannel = pc.createDataChannel("sendDataChannel", {reliable: true});
         trace('Created send data channel');
         } catch (e) {
         alert('Failed to create data channel. ');
         trace('createDataChannel() failed with exception: ' + e.message);
         }
         sendChannel.onopen = handleSendChannelStateChange;
         sendChannel.onmessage = handleMessage;
         sendChannel.onclose = handleSendChannelStateChange;
         }
         else { // Joiner
         pc.ondatachannel = gotReceiveChannel;
         }*/


        return true;
      }
    }, {
      key: "doCall",
      value: function doCall(consult) {
        Logger.d('SignalingWorker', 'Creating Offer...');
        var self = this; // 创建 Offer

        self.pc.createOffer(function (sessionDescription) {
          sessionDescription.sdp = self._fixSdp(sessionDescription.sdp);
          self.setLocalAndSendInvite(sessionDescription, consult);
        }, function (e) {
          self.onSignalingError(e);
        }, self.sdpConstraints);
      }
    }, {
      key: "doAnswer",
      value: function doAnswer(consult) {
        Logger.d('SignalingWorker', 'Creating Answer...');
        var self = this; // 创建 Answer

        self.pc.createAnswer(function (sessionDescription) {
          sessionDescription.sdp = self._fixSdp(sessionDescription.sdp);
          self.setLocalAndSendAnswer(sessionDescription, consult);
        }, function (e) {
          self.onSignalingError(e);
        }, self.sdpConstraints);
      }
    }, {
      key: "setLocalAndSendInvite",
      value: function setLocalAndSendInvite(sessionDescription, consult) {
        var _this5 = this;

        var self = this; // set local SDP

        this.pc.setLocalDescription(sessionDescription, function () {
          if (consult) {
            _this5._handleRenegotiate(sessionDescription.sdp, "offer");
          } else {
            var dialect = new ActionDialect();
            dialect.setAction(_ActionConst.ActionConst.ActionInvite);
            dialect.appendParam('param', {
              'callee': self.target,
              'sdp': self.pc.localDescription.sdp,
              'ICEServers': window.cube._CUBE_ICE_SERVERS
            });
            var ret = window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);

            if (ret) {
              self.hasResponded = true;
            } else {
              //若发包失败则挂断,不再等待30s挂断
              self.hasResponded = false;
              setTimeout(function () {
                self.delegate.didFailed(self, self.target, _StateCode.StateCode.SignalingStartError);

                self._cleanCall();
              }, 8000);
            }
          }

          Logger.d("SignalingWorker#setLocalAndSendInvite", "Offer:\n" + self.pc.localDescription.sdp);
        }, function (error) {
          Logger.e('SignalingWorker', 'set local description error: ' + error);
          self.onSignalingError(error);
        });
      }
    }, {
      key: "setLocalAndSendAnswer",
      value: function setLocalAndSendAnswer(sessionDescription, consult) {
        var _this6 = this;

        var self = this; // set local SDP

        this.pc.setLocalDescription(sessionDescription, function () {
          var ret = false;

          if (consult) {
            ret = _this6._handleRenegotiate(sessionDescription.sdp, "answer");
          } else {
            var dialect = new ActionDialect();
            dialect.setAction(_ActionConst.ActionConst.ActionAnswer);
            dialect.appendParam('param', {
              'caller': self.target,
              'sdp': self.pc.localDescription.sdp
            });
            ret = window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
          } // 处理 ICE Candidate


          self.drainCandidateQueue();

          if (ret) {
            self.hasResponded = true;
            self.state = _SignalingState.SignalingState.Incall;
            self.engine.session.callState = _SignalingState.SignalingState.Incall;
          } else {
            self.hasResponded = false;
            self.delegate.didFailed(self, self.target, _StateCode.StateCode.SignalingStartError);
            self.hangup();
          }

          Logger.d("SignalingWorker#setLocalAndSendAnswer", "Answer:\n" + self.pc.localDescription.sdp);
        }, function (error) {
          Logger.e('SignalingWorker', 'set local description error: ' + error);
          self.onSignalingError(error);
        });
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
      }
    }, {
      key: "handleUserMedia",
      value: function handleUserMedia(stream) {
        this.localStream = stream;
        this.attachMediaStream(this.localVideo, stream);

        if ((this.utils.isIE || this.utils.isSafari) && this.localVideo.tagName.toLowerCase() == "video") {
          this.localVideo = document.getElementById(this.localVideo.id);
        } // 本地视频静音


        this.localVideo.muted = true; // 本地视频控制器不可用

        this.localVideo.controls = false;
        Logger.d('SignalingWorker', 'Adding local stream.'); // 关闭遮罩

        this._closeMask();
      }
    }, {
      key: "handleUserMediaError",
      value: function handleUserMediaError(error) {
        var _this7 = this;

        // 关闭遮罩
        this._closeMask();

        Logger.e("SignalingWorker", "Navigator.getUserMedia error"
        /* + JSON.stringify(error)*/
        );
        this.hangup();
        this.utils.getUserMedia(false, true, function (err, stream) {
          if (err) {
            _this7.delegate.didFailed(_this7, _this7.target, _StateCode.StateCode.MicphoneOpenFailed);
          } else {
            _this7.utils.closeMediaStream(stream);

            _this7.delegate.didFailed(_this7, _this7.target, _StateCode.StateCode.CameraOpenFailed);
          }
        });
      }
    }, {
      key: "handleIceCandidate",
      value: function handleIceCandidate(event) {
        if (event.candidate) {
          var dialect = new ActionDialect();
          dialect.setAction(_ActionConst.ActionConst.ActionCandidate);
          dialect.appendParam('param', {
            'peer': this.target,
            'candidate': {
              sdpMid: event.candidate.sdpMid,
              sdpMLineIndex: event.candidate.sdpMLineIndex,
              sdp: event.candidate.candidate
            }
          });
          window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, dialect);
        } else {
          Logger.d('SignalingWorker', 'End of candidates.');
        }
      }
    }, {
      key: "handleIceConnectionStateChange",
      value: function handleIceConnectionStateChange(event) {
        if (null == this.pc) {
          return;
        }

        var state = this.pc.iceConnectionState;

        if (null == state || undefined === state) {
          return;
        }

        if (state == "failed") {
          Logger.w('CubeCallService#handleIceConnectionStateChange', 'Ice connection state change - state is ' + state + ', hasResponded is ' + this.hasResponded);

          if (this.hasResponded) {
            this.hangup();
          }

          this.delegate.didFailed(this, this.target, _StateCode.StateCode.ICEConnectionFailed);
        } // 弱网不挂断 只有closed才挂断
        else if (state == "closed" || state == "disconnected" && !navigator.onLine) {
            this.delegate.didEnd(this, this.target, "end", new _ResponseState.ResponseState('', state));

            this._cleanCall();
          }
      }
    }, {
      key: "handleConnectionStateChange",
      value: function handleConnectionStateChange(event) {
        switch (this.pc.connectionState) {
          case "connected":
            Logger.d("CallService", "State: connected");
            break;

          case "disconnected":
            Logger.d("CallService", "State: disconnected");
            break;

          case "failed":
            Logger.d("CallService", "State: failed");
            break;

          case "closed":
            Logger.d("CallService", "State: closed");
            break;

          default:
            break;
        }
      }
    }, {
      key: "handleRemoteStreamAdded",
      value: function handleRemoteStreamAdded(event) {
        try {
          if (null != this.bellAudio) {
            this.bellAudioPaused = true;
            this.bellAudio.pause();
          }
        } catch (e) {}

        if (this.iceTimer > 0) {
          clearTimeout(this.iceTimer);
          this.iceTimer = 0;
        }

        this.remoteStream = event.stream;
        this.attachMediaStream(this.remoteVideo, event.stream);

        if ((this.utils.isIE || this.utils.isSafari) && this.remoteVideo.tagName.toLowerCase() == "video") {
          this.remoteVideo = document.getElementById(this.remoteVideo.id);
        }

        Logger.d('SignalingWorker', 'Remote stream Added. Event: ' + event);
      }
    }, {
      key: "handleRemoteStreamRemoved",
      value: function handleRemoteStreamRemoved(event) {
        Logger.d('SignalingWorker', 'Remote stream removed. Event: ' + event);

        if (this.iceTimer > 0) {
          clearTimeout(this.iceTimer);
          this.iceTimer = 0;
        }
      }
    }, {
      key: "drainCandidateQueue",
      value: function drainCandidateQueue() {
        for (var i = 0; i < this.candidateQueue.length; ++i) {
          var candidate = this.candidateQueue[i];
          this.pc.addIceCandidate(candidate);
        }

        this.candidateQueue.splice(0, this.candidateQueue.length);
        this.candidateQueue = [];
      } // 由 WebRTC 引发的错误

    }, {
      key: "onSignalingError",
      value: function onSignalingError(error) {
        Logger.w('SignalingWorker#onSignalingError', 'Failed to create signaling message : ' + error.name); // FIXME 发生错误后应当终止呼叫

        if (this.hasResponded) {
          this.delegate.didFailed(this, this.target, _StateCode.StateCode.WorkerStateException);
          this.hangup();
        }
      }
    }, {
      key: "_setBandwidth",
      value: function _setBandwidth(sdp) {
        sdp = this.engine._setCodec(sdp);
        sdp = sdp.replace(/a=mid:audio\r\n/g, 'a=mid:audio\r\nb=AS:' + this.audioBandwidth + '\r\n');
        sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + this.videoBandwidth + '\r\n');
        sdp = sdp.replace(/a=mid:sdparta_0\r\n/g, 'a=mid:sdparta_0\r\nb=AS:' + this.audioBandwidth + '\r\n');
        sdp = sdp.replace(/a=mid:sdparta_1\r\n/g, 'a=mid:sdparta_1\r\nb=AS:' + this.videoBandwidth + '\r\n');
        return sdp;
      }
    }, {
      key: "_fixSdp",
      value: function _fixSdp(sdp) {
        var ret = this._setBandwidth(sdp); //sdp = sdp.replace(/a=candidate+/g, '');


        return ret;
      }
    }, {
      key: "_processInviteAck",
      value: function _processInviteAck(dialect) {
        var state = dialect.getParam("state");
        var code = state.code;

        if (code < 200 || code > 299) {
          if (code == 1400) {
            // 对端忙取消本地设备调用
            this.state = _SignalingState.SignalingState.OtherCall;
            this.engine.session.callState = _SignalingState.SignalingState.OtherCall;

            if (this.localStream) {
              this.localStream.getAudioTracks()[0].stop();

              if (this.localStream.getVideoTracks()[0]) {
                this.localStream.getVideoTracks()[0].stop();
              }

              this.localStream = null;
            } // 关闭WebRTC


            this.isStarted = false;

            if (null != this.pc) {
              this.pc.close();
              this.pc = null;
            }
          } else {
            this._cleanCall();
          }

          Logger.w('CubeCallService#_processInviteAck', 'In error code is:' + code);
          this.delegate.didFailed(this, this.target, code);
          return;
        } else if (code != 200) {
          Logger.w('CubeCallService#_processInviteAck', 'A state code that has no effect : ' + code);
        }

        if (this.direction == _CallDirection.CallDirection.Outgoing) {
          var callee = dialect.getParam("callee"); // 目标数据

          this.targetData = dialect.getParam('calleeData'); // 更新状态

          this.state = _SignalingState.SignalingState.Ringing;
          this.delegate.didRinging(this, callee);
          var newDialect = new ActionDialect();
          this.heartbeatTimer = setInterval(function () {
            newDialect.setAction(_ActionConst.ActionConst.ActionSignalingHeartbeat);
            newDialect.appendParam('param', {});
            window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, newDialect);
          }, 5000); // Ringing 响铃

          if (null != this.bellAudio) {
            this.bellAudioPaused = false;
            this.bellAudio.loop = true;
            this.bellAudio.src = window.cube.resourcePath + "/sounds/ringbacktone.ogg";
          }
        }
      }
    }, {
      key: "_processInvite",
      value: function _processInvite(dialect) {
        // 判断是否正在处于会议中
        if (this.engine.session.isCalling()) {
          // 若当前正在进行通话，不挂断，新用户允许呼入

          /*setTimeout(function () {
           var response = new ActionDialect();
           response.setAction(CubeConst.ActionCancel);
           response.appendParam('call', dialect.getParam('caller'));
           window.nucleus.talkService.talk(CELLET.Signaling, response);
           }, 1000);
           Logger.e('CallServiceWorker#_processInvite', 'Peer is calling, hangup: ' + dialect.getParam('caller'));*/
          Logger.d('CallServiceWorker#_processInvite', dialect.getParam('caller') + '-Peer is calling me');
          return;
        }

        if (this.state == _SignalingState.SignalingState.None) {
          // 被叫
          this.isInitiator = false; // 呼入

          this.direction = _CallDirection.CallDirection.Incoming; // 更新状态

          this.state = _SignalingState.SignalingState.Invite; // Ringing 响铃

          if (null != this.bellAudio) {
            this.bellAudioPaused = false;
            this.bellAudio.loop = true;
            this.bellAudio.src = window.cube.resourcePath + "/sounds/ringtone.ogg";
          }

          var data = dialect.getParam('data');
          var caller = data.caller;
          var sdp = data.sdp;
          var iceServers = data.ICEServers;

          if (null != iceServers) {
            this.lastIceServers = this.engine._parseICEServers(iceServers);
          } else {
            this.lastIceServers = window.cube._CUBE_STUN_SERVERS;
          } // 保存 SDP


          this.sdpCache = sdp;
          var videoEnabled = false;

          if (sdp.indexOf('m=video') >= 0) {
            videoEnabled = true;
          }

          this.videoEnabled = videoEnabled; // 目标

          this.target = caller.toString();
          this.targetData = dialect.getParam('callerData');
          var newDialect = new ActionDialect();
          this.heartbeatTimer = setInterval(function () {
            newDialect.setAction(_ActionConst.ActionConst.ActionSignalingHeartbeat);
            newDialect.appendParam('param', {});
            window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, newDialect);
          }, 5000);
          var self = this;

          if (self.autoAnswer) {
            setTimeout(function () {
              self.answerCall();
            }, 60);
          }

          this.delegate.didInvite(this, this.direction, this.target, videoEnabled); // 显示遮罩
          //this._showMask();
        } else {
          Logger.e('SignalingWorker#_processInvite', 'Signaling state error: ' + this.state);
        }
      }
    }, {
      key: "_processAnswerAck",
      value: function _processAnswerAck(dialect) {
        // 处理铃声
        if (null != this.bellAudio) {
          this.bellAudioPaused = true;
          this.bellAudio.pause();
        }

        var state = dialect.getParam("state");

        if (state.code < 200 || state.code > 299) {
          // 错误
          this.delegate.didFailed(this, this.target, state.code);
          this.hangup();
          return;
        } else if (state.code != 200) {
          Logger.w('CubeCallService#_processInviteAck', 'A state code that has no effect : ' + state.code);
        }

        if (this.direction == _CallDirection.CallDirection.Incoming) {
          var caller = dialect.getParam("caller"); // 更新状态

          this.state = _SignalingState.SignalingState.Incall;
          this.delegate.didIncall(this, this.direction, caller, null);
        }
      }
    }, {
      key: "_processAnswer",
      value: function _processAnswer(dialect) {
        if (this.direction == _CallDirection.CallDirection.Outgoing) {
          var callee = dialect.getParam("callee");
          var sdp = dialect.getParam("sdp");
          var self = this; // 设置对端 SDP

          self.pc.setRemoteDescription(new RTCSessionDescription({
            type: "answer",
            sdp: sdp
          }), function () {
            self.canAddIceCandidate = true; // 处理 ICE Candidate

            self.drainCandidateQueue();
          }); // 更新状态

          this.state = _SignalingState.SignalingState.Incall; // 处理铃声

          if (null != this.bellAudio) {
            this.bellAudioPaused = true;
            this.bellAudio.pause();
          }

          this.delegate.didIncall(this, this.direction, callee, sdp);

          if (this.iceTimer > 0) {
            clearTimeout(this.iceTimer);
          }

          this.iceTimer = setTimeout(function () {
            clearTimeout(self.iceTimer);
            self.iceTimer = 0;
            console.log('超时断开'); // ICE 超时

            self.delegate.didFailed(self, self.target, _StateCode.StateCode.ICEConnectionFailed); // 挂断本次通话

            self.hangup(_StateCode.StateCode.RingingTimeoutTerminal, '响铃超时自动挂断');
          }, this.iceTimeout);
        }
      }
    }, {
      key: "_processByeAck",
      value: function _processByeAck(dialect) {
        if (this.hangupTimer > 0) {
          clearTimeout(this.hangupTimer);
          this.hangupTimer = 0;
        }

        var state = dialect.getParam("state");
        this.delegate.didEnd(this, this.target, "bye-ack", new _ResponseState.ResponseState(state.code, state.desc));

        this._cleanCall();
      }
    }, {
      key: "_processCancelAck",
      value: function _processCancelAck(dialect) {
        if (this.hangupTimer > 0) {
          clearTimeout(this.hangupTimer);
          this.hangupTimer = 0;
        }

        var state = dialect.getParam("state");
        this.delegate.didEnd(this, this.target, "cancel-ack", new _ResponseState.ResponseState(state.code, state.desc));

        this._cleanCall();
      }
    }, {
      key: "_processBye",
      value: function _processBye(dialect) {
        if (this.state == _SignalingState.SignalingState.None) {
          return;
        }

        var state = dialect.getParam("state");

        if (state.code === 717) {
          this.delegate.didEnd(this, this.target, 'timeout', new _ResponseState.ResponseState(state.code, '响铃超时自动挂断'));
        } else {
          this.delegate.didEnd(this, this.target, "bye", new _ResponseState.ResponseState(state.code, state.desc));
        }

        this._cleanCall();
      }
    }, {
      key: "_processCancel",
      value: function _processCancel(dialect) {
        if (this.state == _SignalingState.SignalingState.None) {
          return;
        }

        var data = dialect.getParam('data');
        var state = dialect.getParam("state"); // 判断发 cancel 动作的用户是否是当前通话的对方

        if (null !== this.engine.session.getCallPeer() && data.call !== this.engine.session.getCallPeer().name) {
          return;
        }

        var reason = dialect.getParam('reason');
        var action = 'cancel';

        if (null !== reason) {
          if (reason.code === _StateCode.StateCode.AnswerByOther) {
            action = 'answer-by-other';
          } else if (reason.code === _StateCode.StateCode.CancelByOther) {
            action = 'cancel-by-other';
          }
        }

        if (state.code == 717) {
          this.delegate.didEnd(this, this.target, 'timeout', new _ResponseState.ResponseState(state.code, '响铃超时自动挂断'));
        } else {
          this.delegate.didEnd(this, this.target, action, new _ResponseState.ResponseState(state.code, state.desc));
        }

        this._cleanCall();
      }
    }, {
      key: "_processCandidate",
      value: function _processCandidate(dialect) {
        var jsonCandidate = dialect.getParam("candidate");
        var candidate = new RTCIceCandidate({
          sdpMLineIndex: jsonCandidate.sdpMLineIndex,
          sdpMid: jsonCandidate.sdpMid,
          candidate: jsonCandidate.sdp
        });

        if (this.canAddIceCandidate) {
          this.pc.addIceCandidate(candidate);
        } else {
          this.candidateQueue.push(candidate);
        }
      }
    }, {
      key: "_processCandidateAck",
      value: function _processCandidateAck(dialect) {// Nothing
      }
    }, {
      key: "_processTryReInviteAck",
      value: function _processTryReInviteAck(dialect) {
        Logger.d('CallServiceWorker#_processTryReInviteAck', dialect.getParam('state').code);
      }
    }, {
      key: "_processReverseCall",
      value: function _processReverseCall(dialect) {
        var _this8 = this;

        //先关闭RTC
        if (null !== this.localStream) {
          this.utils.closeMediaStream(this.localStream); // this.delegate.didEnd(this, this.target, 'end', new ResponseState(null, 'reverse call failed'));

          this._cleanCall();
        }

        var data = dialect.getParam('data');
        var caller = data.caller;
        var sdp = data.sdp;
        this.target = caller.toString();
        this.sdpCache = sdp;
        this.direction = _CallDirection.CallDirection.Incoming; //在重启RTC，自动发送answer

        setTimeout(function () {
          var newDialect = new ActionDialect();
          _this8.heartbeatTimer = setInterval(function () {
            newDialect.setAction(_ActionConst.ActionConst.ActionSignalingHeartbeat);
            newDialect.appendParam('param', {});
            window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, newDialect);
          }, 5000);

          _this8.answerCall();
        }, 60);
        this.delegate.didReverseCall(this, this.target);
      }
    }, {
      key: "_processConsult",
      value: function _processConsult(dialect) {
        var _this9 = this;

        var peer = dialect.getParam("peer");
        var payload = dialect.getParam("payload"); // 判断当前对端是否是正确的对端

        if (peer === this.engine.session.callPeer.name) {
          if (payload.sdp) {
            this.pc.removeStream(this.remoteStream);
            this.pc.setRemoteDescription(new RTCSessionDescription({
              type: payload.sdp.type,
              sdp: payload.sdp.sdp
            }), function () {
              _this9.canAddIceCandidate = true;

              _this9.drainCandidateQueue();

              if (payload.type && payload.type != "answer") {
                _this9.doAnswer(true);
              }
            });
          } else {
            if (payload.ver === 1 && payload.media === "video") {
              if (payload.operation === "close") {
                try {
                  this.localStream.getVideoTracks()[0].enabled = false;
                } catch (e) {// Nothing
                }
              } else if (payload.operation === "open") {
                try {
                  this.localStream.getVideoTracks()[0].enabled = true;
                } catch (e) {// Nothing
                }
              }

              window.cube.getMediaService()._videoProcess(payload.operation);
            }
          }
        } else {
          Logger.w("SignalingWorker#_processConsult", "Session peer error: " + peer);
        }
      }
    }, {
      key: "_processConsultAck",
      value: function _processConsultAck(dialect) {// Nothing
      }
    }, {
      key: "_processNegotiate",
      value: function _processNegotiate(dialect) {
        var _this10 = this;

        var data = dialect.getParam("data");

        if (data) {
          this.pc.removeStream(this.remoteStream);
          this.pc.setRemoteDescription(new RTCSessionDescription({
            type: data.type,
            sdp: data.sdp
          }), function () {
            _this10.canAddIceCandidate = true;

            _this10.drainCandidateQueue();

            if (data.type && data.type != "answer") {
              _this10.doAnswer(true);
            }
          });
        }
      }
    }, {
      key: "_processNegotiateAck",
      value: function _processNegotiateAck(dialect) {// Nothing
      }
    }, {
      key: "_processReply",
      value: function _processReply(dialect) {
        var ack = new ActionDialect();
        ack.setAction(_ActionConst.ActionConst.ActionReplyAck);
        ack.appendParam("from", this.engine.session.name.toString());
        ack.appendParam("to", dialect.getParam("from"));
        ack.appendParam("time", dialect.getParam("time"));
        window.nucleus.talkService.talk(_CELLET.CELLET.Signaling, ack);
      }
    }, {
      key: "_processReplyAck",
      value: function _processReplyAck(dialect) {
        var cur = Date.now();

        if (this.replyTimer > 0) {
          clearTimeout(this.replyTimer);
          this.replyTimer = 0;
        }

        var time = dialect.getParam("time");
        time.local = cur; // 计算行程

        time.remoteLatency = time.transmit - time.reference;
        time.localLatency = cur - time.originate - (time.transmit - time.receive);

        if (null != this.replyCallback) {
          this.replyCallback.call(null, true, dialect.getParam("from"), time);
        }
      }
    }, {
      key: "_showMask",
      value: function _showMask() {
        this._closeMask();

        if (this.showCallMask) {
          this._bodyOverflow = document.body.style.overflow;
          var w = window.innerWidth;
          var h = parseInt(window.innerHeight) + 70;

          if (h > this._maskHeight) {
            this._maskHeight = h;
          }

          document.body.style.overflow = "hidden";

          if (null == this._maskDom) {
            //var mask = [''];
            var c = document.createElement("div");
            c.id = "_cube_mask_";
            c.style.position = "absolute";
            c.style.styleFloat = "left";
            c.style.cssFloat = "left";
            c.style.left = "0px";
            c.style.top = "0px";
            c.style.width = w + "px";
            c.style.height = this._maskHeight + "px";
            c.style.zIndex = 9999;
            c.style.opacity = 0.6;
            c.style.mozOpacity = 0.6;
            c.style.webkitOpacity = 0.6;
            c.style.background = "#000"; //c.innerHTML = mask.join('');

            var self = this;
            c.addEventListener('dblclick', function (e) {
              self._closeMask();
            }, false);
            this._maskDom = c;
          } else {
            this._maskDom.style.left = "0px";
            this._maskDom.style.top = "0px";
            this._maskDom.style.width = w + "px";
            this._maskDom.style.height = this._maskHeight + "px";
          }

          document.body.appendChild(this._maskDom);
        }
      }
    }, {
      key: "_closeMask",
      value: function _closeMask() {
        if (null != this._bodyOverflow) {
          document.body.removeChild(this._maskDom);
          document.body.style.overflow = this._bodyOverflow;
          this._bodyOverflow = null;
        }
      }
    }, {
      key: "onConfigure",
      value: function onConfigure(config) {
        this.maxVideoSize = config.videoSize;
        this.minFrameRate = config.frameRate.min;
        this.maxFrameRate = config.frameRate.max;
        this.codec = config.videoCodec;
        this.setBandwidth(config.bandwidth.audio, config.bandwidth.video);
        this.showCallMask = config.showCallMask;
      }
    }]);

    return CallServiceWorker;
  }(_CallService2.CallService);

  _exports.CallServiceWorker = CallServiceWorker;
});

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(100);

__webpack_require__(106);

__webpack_require__(1);

__webpack_require__(211);

__webpack_require__(108);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(213);

__webpack_require__(129);

__webpack_require__(62);

__webpack_require__(130);

__webpack_require__(264);

__webpack_require__(131);

__webpack_require__(64);

__webpack_require__(132);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(195);

__webpack_require__(89);

__webpack_require__(196);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(344), __webpack_require__(334), __webpack_require__(335)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MediaService2, _AdvancedRecorder, _Recorder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.MediaServiceWorker = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var _window$CellCloud = window.CellCloud,
      Logger = _window$CellCloud.Logger,
      Ajax = _window$CellCloud.Ajax,
      HashMap = _window$CellCloud.HashMap;
  /**
   * 媒体服务实现。用于操作媒体设备。
   *
   * @class MediaServiceWorker
   * @see {@link CubeEngine#getMediaService|CubeEngine}
   * @author Xu Jiangwei, Guan Yong
   */

  var MediaServiceWorker =
  /*#__PURE__*/
  function (_MediaService) {
    _inherits(MediaServiceWorker, _MediaService);

    function MediaServiceWorker(worker, canvasDomId) {
      var _this;

      _classCallCheck(this, MediaServiceWorker);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MediaServiceWorker).call(this));
      _this.worker = worker;
      _this.canvas = null;
      _this.timerList = [];
      _this.probes = null;
      _this.frameWarning = false;
      _this.remoteMaxFrameRate = -1;
      _this.remoteMinFrameRate = 120; // 离线录制器

      _this.recorderMap = null;
      _this.capturedUri = null;
      _this._autoCaptureTimer = 0;
      _this._localCalculateStats = null;
      _this._remoteCalculateStats = null; // 设备列表

      _this.deviceList = {}; // 设备数

      _this.deviceCount = 0;

      if (undefined !== canvasDomId) {
        _this.canvas = document.getElementById(canvasDomId);
      }

      navigator.mediaDevices.enumerateDevices().then(function (devices) {
        _this.deviceCount = devices.length;
        devices.forEach(function (item) {
          _this.deviceList[item.label] = item.deviceId;
        });

        _this.onDeviceChange();
      });

      var self = _assertThisInitialized(_this);

      worker.videoCloseHandler = function () {
        Logger.d("CubeMediaController", "Video closed");

        for (var i = 0; i < self.timerList.length; ++i) {
          var timer = self.timerList[i];
          clearInterval(timer);
        }

        _this.timerList.splice(0, self.timerList.length);

        if (null != self.probes && _this.frameWarning) {
          for (var _i = 0; _i < _this.probes.length; ++_i) {
            var p = _this.probes[_i];
            p.onFrameRateRecovering(_assertThisInitialized(_this), 0, 0, self.remoteMaxFrameRate);
          }
        }

        _this.remoteMaxFrameRate = -1;
        _this.remoteMinFrameRate = 120;
        _this.frameWarning = false;

        if (_this.isLocalRecording()) {
          _this.stopLocalRecording(null);
        }
      };

      worker.localVideoReady = function (video, worker) {
        _this._localVideoReady(video, worker.videoEnabled);
      };

      worker.remoteVideoReady = function (video, worker) {
        video.volume = 1;

        _this._remoteVideoReady(video, worker.videoEnabled);
      };

      return _this;
    }
    /**
     * 添加媒体探针
     */


    _createClass(MediaServiceWorker, [{
      key: "addMediaProbe",
      value: function addMediaProbe(probe) {
        if (null == this.probes) {
          this.probes = [probe];
        } else {
          this.probes.push(probe);
        }
      }
      /**
       * 删除媒体探针
       */

    }, {
      key: "removeMediaProbe",
      value: function removeMediaProbe(probe) {
        if (null == this.probes) {
          return false;
        }

        var index = this.probes.indexOf(probe);

        if (index >= 0) {
          this.probes.splice(index, 1);
          return true;
        }

        return false;
      }
      /**
       * 关闭本地语音流。关闭语音流后对方将无法听到本地麦克风采集的音频效果。
       */

    }, {
      key: "closeVoice",
      value: function closeVoice() {
        if (null != this.worker.localStream && this.worker.localStream.getAudioTracks().length > 0) {
          this.worker.localStream.getAudioTracks()[0].enabled = false;
          return true;
        }

        if (null != this.worker.localAudioStream && this.worker.localAudioStream.getAudioTracks().length > 0) {
          this.worker.localAudioStream.getAudioTracks()[0].enabled = false;
          return true;
        }

        return false;
      }
      /**
       * 关闭本地视频流。关闭视频后对方将无法看到本地摄像头采集到的视频影像。
       */

    }, {
      key: "closeVideo",
      value: function closeVideo() {
        if (null != this.worker.localStream && this.worker.localStream.getVideoTracks().length > 0) {
          this.worker.localStream.getVideoTracks()[0].enabled = false; // 进行媒体操作同步

          this.worker.consult("video", "close");
          return true;
        }

        return false;
      }
      /**
       * 开启本地语音流。开启语音流后对方将能听到本地麦克风采集的音频效果。
       */

    }, {
      key: "openVoice",
      value: function openVoice() {
        if (null != this.worker.localStream && this.worker.localStream.getAudioTracks().length > 0) {
          this.worker.localStream.getAudioTracks()[0].enabled = true;
          return true;
        }

        if (null != this.worker.localAudioStream && this.worker.localAudioStream.getAudioTracks().length > 0) {
          this.worker.localAudioStream.getAudioTracks()[0].enabled = true;
          return true;
        }

        return false;
      }
      /**
       * 开启本地视频流。开启视频后对方将能看到本地摄像头采集到的视频影像。
       */

    }, {
      key: "openVideo",
      value: function openVideo() {
        if (null != this.worker.localStream && this.worker.localStream.getVideoTracks().length > 0) {
          this.worker.localStream.getVideoTracks()[0].enabled = true; // 进行媒体操作同步

          this.worker.consult("video", "open");
          return true;
        }

        return false;
      }
      /**
       * 获取语音通话是否启用。
       */

    }, {
      key: "isVoiceEnabled",
      value: function isVoiceEnabled() {
        if (null != this.worker.localStream && this.worker.localStream.getAudioTracks().length > 0) {
          return this.worker.localStream.getAudioTracks()[0].enabled;
        }

        return true;
      }
      /**
       * 获取视频通话是否启用。
       */

    }, {
      key: "isVideoEnabled",
      value: function isVideoEnabled() {
        if (null != this.worker.localStream && this.worker.localStream.getVideoTracks().length > 0) {
          return this.worker.localStream.getVideoTracks()[0].enabled;
        }

        return true;
      }
      /**
       * 设置扬声器音量。
       */

    }, {
      key: "setVolume",
      value: function setVolume(value) {
        if (null != this.worker.remoteVideo) {
          this.worker.remoteVideo.volume = value / 100;
        }
      }
      /**
       * 获取扬声器音量。
       */

    }, {
      key: "getVolume",
      value: function getVolume() {
        return parseInt(Math.round(this.worker.remoteVideo.volume * 100));
      }
      /**
       * 静音。
       */

    }, {
      key: "mute",
      value: function mute() {
        this.closeVoice();
      }
      /**
       * 获取本地视频分辨率大小。
       */

    }, {
      key: "getLocalVideoSize",
      value: function getLocalVideoSize() {
        var v = this.worker.localVideo;
        var w = v.videoWidth;
        var h = v.videoHeight;
        return {
          width: w,
          height: h
        };
      }
      /**
       * 获取对方视频分辨率大小。
       */

    }, {
      key: "getRemoteVideoSize",
      value: function getRemoteVideoSize() {
        var v = this.worker.remoteVideo;
        var w = v.videoWidth;
        var h = v.videoHeight;
        return {
          width: w,
          height: h
        };
      }
      /**
       * 获取用户视频画面地址。
       */

    }, {
      key: "getCapturedCameraImage",
      value: function getCapturedCameraImage(peerName) {
        if (null == this.capturedUri) {
          return null;
        }

        return this.capturedUri + peerName + "/cube_captured_camera.jpg";
      }
      /**
       * 截取当前视频的画面。
       */

    }, {
      key: "capture",
      value: function capture(name, callback) {
        var canvas = this.canvas;
        var w = parseInt(this.worker.localVideo.videoWidth);
        var h = parseInt(this.worker.localVideo.videoHeight);
        canvas.setAttribute("width", w);
        canvas.setAttribute("height", h);
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        var ctx = canvas.getContext('2d');

        if (this.worker.localStream) {
          ctx.drawImage(this.worker.localVideo, 0, 0);
          var dataURL = canvas.toDataURL('image/png');
          var self = this;
          Ajax.newRequest(window.cube._CUBE_SERVICE + "/" + "conference/capture?name=" + name).method("POST").content(dataURL).send(function (reponse) {
            if (reponse.getStatus() == 200) {
              var rd = JSON.parse(reponse.getData());
              self.capturedUri = rd.url;

              if (undefined !== callback && null != callback) {
                callback.call(null, rd);
              }
            }
          });
        }
      }
      /**
       * 当设备发生变化时调用
       */

    }, {
      key: "onDeviceChange",
      value: function onDeviceChange() {
        var _this2 = this;

        var deviceList = {},
            utils = this.worker.engine.utils;
        navigator.mediaDevices.enumerateDevices().then(function (devices) {
          devices.forEach(function (item) {
            deviceList[item.label] = item.groupId;
          });
          _this2.deviceList = deviceList;
          _this2.deviceCount = devices.length;
          _this2.lastDevices = devices;
        }); // 比对当前设备列表与下次设备列表差异

        navigator.mediaDevices.ondevicechange = function (event) {
          navigator.mediaDevices.enumerateDevices().then(function (devices) {
            // 设备数量有差异时
            if (JSON.stringify(_this2.lastDevices) != JSON.stringify(devices)) {
              try {
                var haveVideo = false,
                    haveAudio = false;
                deviceList = {};
                devices.forEach(function (item) {
                  deviceList[item.deviceId] = item.label;
                  item.kind == 'videoinput' ? haveVideo = true : null;
                });
                devices.forEach(function (item) {
                  item.kind == "audioinput" ? haveAudio = true : null;
                });
                Object.keys(utils.curMediaDevice).map(function (item) {
                  //  当前设备不包含正在使用设备 判断设备拔出
                  if (!deviceList.hasOwnProperty(item)) {
                    if (null != _this2.probes) {
                      for (var i = 0; i < _this2.probes.length; ++i) {
                        var p = _this2.probes[i];
                        var curMediaDevice = utils.curMediaDevice[item];
                        p.onDeviceChange('out', curMediaDevice.kind, curMediaDevice.label, curMediaDevice.deviceId);
                        console.log(curMediaDevice); // 置空

                        utils.curMediaDevice = {};
                      }
                    }
                  }
                }); // 正在进行通话 设备有缺失时重新协商

                if (_this2.worker.engine.session.isCalling()) {
                  var videoEnable = haveVideo && _this2.worker.videoEnabled,
                      sipService = _this2.worker.engine.sipService;

                  try {
                    if (_this2.worker.engine.session.isConferenceCall() && !_this2.worker.engine.session.isShareDesktop()) {
                      sipService.removeStream();

                      if (haveAudio) {
                        sipService.addStream(true, false, function () {
                          sipService.renegotiate(videoEnable);
                        });
                      }
                    } else if (Object.keys(utils.curMediaDevice).length == 0) {
                      clearTimeout(_this2.timer);
                      var time = Math.floor(Math.random() * 1000) * 5; // 1秒以内不能重复协商

                      _this2.timer = setTimeout(function () {
                        _this2.worker.engine.getCallService().renegotiate(videoEnable);
                      }, time);
                    }
                  } catch (e) {}
                }
              } finally {
                _this2.deviceList = deviceList;
                _this2.deviceCount = devices.length;
                _this2.lastDevices = devices;
              }
            } // if (JSON.stringify(this.lastDevices) != JSON.stringify(devices)) {
            //     let hasDevicesCount = 0, iptDevice = {}, haveVideo = true, hasDevices =[];
            //     devices.forEach((item) => {
            //         deviceList[item.label] = item.groupId;
            //         if (this.worker.utils.curMediaDevice.hasOwnProperty(item.groupId)) {
            //             hasDevicesCount ++;
            //             hasDevices.push()
            //         }
            //     })
            //     try {
            //         if (this.deviceCount > devices.length) {
            //             // 设备拔出
            //             if (Object.keys(this.worker.utils.curMediaDevice).length != hasDevicesCount) {
            //                 if (null != this.probes) {
            //                     for (var i = 0; i < this.probes.length; ++i) {
            //                         var p = this.probes[i];
            //                         p.onDeviceChange('out', this.worker.utils.curMediaDevice[curDevice.groupId], curDevice);
            //                         // 置空
            //                         this.worker.utils.curMediaDevice = {};
            //                     }
            //                 }
            //             }
            //         } else {
            //             // 设备插入
            //             Object.entries(deviceList).map((item) => {
            //                 if (!this.deviceList.hasOwnProperty(item[0])) {
            //                     devices.forEach((items, index) => {
            //                         if (items.label == item[0]) {
            //                             iptDevice = devices[index];
            //                         }
            //
            //                         haveVideo = iptDevice.kind == 'videoinput';
            //                     })
            //                 }
            //             })
            //
            //             if (this.worker.engine.session.isCalling()) {
            //                 if (Object.keys(this.worker.utils.curMediaDevice).length === 0) {
            //                     // console.log(iptDevice,'==================')
            //                     let videoEnable = haveVideo && this.worker.videoEnabled;
            //                     this.worker.renegotiate(videoEnable);
            //                 }
            //             }
            //         }
            //
            //     } finally {
            //         this.deviceList = deviceList;
            //         this.deviceCount = devices.length;
            //         this.lastDevices = devices;
            //     }
            // }

          });
        };
      }
    }, {
      key: "_startAutoCapture",
      value: function _startAutoCapture(name, callback) {
        if (null != this.canvas) {
          var self = this;

          if (self._autoCaptureTimer > 0) {
            return true;
          }

          self.capture(name, callback);
          self._autoCaptureTimer = setInterval(function () {
            self.capture(name, callback);
          }, 9000);
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: "_stopAutoCapture",
      value: function _stopAutoCapture() {
        if (this._autoCaptureTimer > 0) {
          clearInterval(this._autoCaptureTimer);
          this._autoCaptureTimer = 0;
        }
      }
    }, {
      key: "_localVideoReady",
      value: function _localVideoReady(video, videoEnabled) {
        if (null != this.probes) {
          for (var i = 0; i < this.probes.length; ++i) {
            var p = this.probes[i];
            p.onLocalStreamReady(this);
          }

          if (videoEnabled) {
            var self = this;
            var counts = 0;
            this._localCalculateStats = this._calculateStats(video, function (v, fps, avg) {
              if (!self.worker.videoEnabled) {
                self._stopCalculate();

                return;
              }

              ++counts;

              if (counts < 5) {
                return;
              }

              counts = 0;

              for (var i = 0; i < self.probes.length; ++i) {
                var p = self.probes[i];
                p.onLocalVideoFPS(self, v.videoWidth, v.videoHeight, fps, avg);
              }
            });
          }
        }
      }
    }, {
      key: "changeVideoElement",
      value: function changeVideoElement(localVideo, remoteVideo) {
        localVideo.volume = 0;
        remoteVideo.volume = this.getVolume() / 100;
        localVideo.src = this.worker.localVideo.src;
        remoteVideo.src = this.worker.remoteVideo.src;

        if (utils.isIE || utils.isSafari) {
          window.attachMediaStream(this.worker.localVideo, null);
          window.attachMediaStream(this.worker.remoteVideo, null);
        } else {
          this.worker.localVideo.src = "";
          this.worker.remoteVideo.src = "";
        }

        this.worker.localVideo = localVideo;
        this.worker.remoteVideo = remoteVideo;

        if (this._localCalculateStats != null) {
          this._localCalculateStats.changeElement(localVideo);
        }

        if (this._remoteCalculateStats != null) {
          this._remoteCalculateStats.changeElement(remoteVideo);
        }
      }
    }, {
      key: "_remoteVideoReady",
      value: function _remoteVideoReady(video, videoEnabled) {
        if (null != this.probes) {
          for (var i = 0; i < this.probes.length; ++i) {
            var p = this.probes[i];
            p.onRemoteStreamReady(this);
          }

          if (videoEnabled) {
            var self = this;
            var counts = 0;
            this._remoteCalculateStats = this._calculateStats(video, function (v, fps, avg) {
              if (!self.worker.videoEnabled) {
                self._stopCalculate();

                return;
              }

              if (v.videoWidth == 0 || v.videoHeight == 0) {
                self._stopCalculate();

                return;
              } // 计数


              ++counts;

              if (counts >= 5) {
                for (var i = 0; i < self.probes.length; ++i) {
                  var p = self.probes[i];
                  p.onRemoteVideoFPS(self, v.videoWidth, v.videoHeight, fps, avg);
                }

                counts = 0;
              } // 探测远端视频帧率过低


              if (self.remoteMaxFrameRate < fps) {
                self.remoteMaxFrameRate = fps;
              }

              if (self.remoteMinFrameRate > fps) {
                self.remoteMinFrameRate = fps;
              }

              if (fps <= self.remoteMaxFrameRate * 0.4 && fps <= avg * 0.4) {
                self.frameWarning = true;

                for (var i = 0; i < self.probes.length; ++i) {
                  var p = self.probes[i];
                  p.onFrameRateWarning(self, fps, avg, self.remoteMaxFrameRate);
                }
              } else {
                if (self.frameWarning) {
                  for (var i = 0; i < self.probes.length; ++i) {
                    var p = self.probes[i];
                    p.onFrameRateRecovering(self, fps, avg, self.remoteMaxFrameRate);
                  }

                  self.frameWarning = false;

                  if (fps >= 6) {
                    // 复位最大帧率
                    self.remoteMaxFrameRate = -1;
                  }
                }
              }
            });
          }
        }
      }
    }, {
      key: "_stopCalculate",
      value: function _stopCalculate() {
        if (this.timerList.length == 0) {
          return;
        }

        for (var i = 0; i < this.timerList.length; ++i) {
          var timer = this.timerList[i];
          clearInterval(timer);
        }

        this.timerList.splice(0, this.timerList.length);
      }
    }, {
      key: "_calculateStats",
      value: function _calculateStats(video, callback) {
        var now = new Date().getTime();
        var decodedFrames = 0,
            droppedFrames = 0,
            startTime = now,
            initialTime = now;
        var timer = 0;
        timer = window.setInterval(function () {
          // see if webkit stats are available; exit if they aren't
          if (video.webkitDecodedFrameCount === undefined) {
            if (video.mozPaintedFrames === undefined) {
              Logger.d("MediaController", "Video FPS calcs not supported");
              clearInterval(timer);
              return;
            }
          } // get the stats


          var currentTime = new Date().getTime();
          var deltaTime = (currentTime - startTime) / 1000;
          var totalTime = (currentTime - initialTime) / 1000;
          startTime = currentTime;
          var currentDecodedFPS = 0;
          var decodedFPSAvg = 0; // Calculate decoded frames per sec.

          if (video.mozPaintedFrames !== undefined) {
            //Logger.d("", video.mozDecodedFrames + ',' + video.mozParsedFrames + ',' + video.mozPresentedFrames + ',' + video.mozPaintedFrames);
            currentDecodedFPS = (video.mozPaintedFrames - decodedFrames) / deltaTime;
            decodedFPSAvg = video.mozPaintedFrames / totalTime;
            decodedFrames = video.mozPaintedFrames;
          } else {
            currentDecodedFPS = (video.webkitDecodedFrameCount - decodedFrames) / deltaTime;
            decodedFPSAvg = video.webkitDecodedFrameCount / totalTime;
            decodedFrames = video.webkitDecodedFrameCount;
          } // Calculate dropped frames per sec.

          /*
           var currentDroppedFPS = (video.webkitDroppedFrameCount - droppedFrames) / deltaTime;
           var droppedFPSavg = video.webkitDroppedFrameCount / totalTime;
           droppedFrames = video.webkitDroppedFrameCount;
           */


          if (currentDecodedFPS < 0 || currentDecodedFPS > 60) {
            currentDecodedFPS = 0;
          }

          callback.call(null, video, currentDecodedFPS.toFixed(), decodedFPSAvg.toFixed());

          if (parseInt(video.width) == 0 && decodedFPSAvg == 0 || video.src == null) {
            clearInterval(timer);
          }
        }, 1000);
        this.timerList.push(timer);
        return {
          changeElement: function changeElement(newVideo) {
            video = newVideo;
          }
        };
      }
      /**
       * 查询归档记录。
       */

    }, {
      key: "queryRecordArchives",
      value: function queryRecordArchives(name, success, error, cors) {
        if ("undefined" !== cors && cors) {
          var sn = "p" + Date.now();

          window._cube_cross.addCallback(sn, success, error);

          var src = window._cube_cross.host + "/archive/list.js?name=" + name + "&m=window._cube_cross.queryRecordArchives&sn=" + sn;
          var dom = document.createElement("script");
          dom.setAttribute("id", sn);
          dom.setAttribute("name", name.toString());
          dom.setAttribute("src", src);
          dom.setAttribute("type", "text/javascript");

          dom.onerror = function () {
            if (undefined !== error) {
              error.call(null, name);
            }

            document.body.removeChild(dom);
          };

          document.body.appendChild(dom);
          return;
        }

        window.cube.utils.requestGet("archive/list?name=" + name, function (data) {
          success.call(null, name, data);
        }, function (status) {
          if (undefined !== error) {
            error.call(null, name);
          }
        });
      }
      /**
       * 加载存档。
       */

    }, {
      key: "loadArchive",
      value: function loadArchive(name, file, videoEl, cors) {
        var video = videoEl;

        if (typeof videoEl === 'string') {
          video = document.getElementById(videoEl);
        }

        if (undefined !== cors && cors) {
          video.src = window._cube_cross.host + "/archive/read?name=" + name + "&file=" + file;
        } else {
          video.src = "archive/read?name=" + name + "&file=" + file;
        }
      }
      /**
       * 是否存在本地存档记录。
       */

    }, {
      key: "hasLocalRecorded",
      value: function hasLocalRecorded() {
        if (null == this.recorderMap) {
          return false;
        }

        return this.recorderMap.containsKey("LocalVideo");
      }
      /**
       * 是否正在录制本地视频。
       */

    }, {
      key: "isLocalRecording",
      value: function isLocalRecording() {
        if (null == this.recorderMap) {
          return false;
        }

        var r = this.recorderMap.get("LocalVideo");

        if (r == null) {
          return false;
        }

        return r.recording;
      }
      /**
       * 启动本地音视频录制。
       */

    }, {
      key: "startLocalRecording",
      value: function startLocalRecording(config) {
        if (null == this.worker.localStream) {
          return false;
        }

        return this.startRecording("LocalVideo", this.worker.localStream, config);
      }
      /**
       * 停止本地音视频录制。
       */

    }, {
      key: "stopLocalRecording",
      value: function stopLocalRecording(callback) {
        return this.stopRecording("LocalVideo", callback);
      }
      /**
       * 回放录制。
       */

    }, {
      key: "replayLocalRecording",
      value: function replayLocalRecording(videoEl, audioEl) {
        return this.replayRecording("LocalVideo", videoEl, audioEl);
      }
      /**
       * 获取本地归档记录。
       */

    }, {
      key: "getLocalRecorder",
      value: function getLocalRecorder() {
        return this.getRecorder("LocalVideo");
      }
      /**
       * 对方是否存在归档记录。
       */

    }, {
      key: "hasRemoteRecorded",
      value: function hasRemoteRecorded() {
        if (null == this.recorderMap) {
          return false;
        }

        return this.recorderMap.containsKey("RemoteVideo");
      }
      /**
       * 是否正在录制对方视频。
       */

    }, {
      key: "isRemoteRecording",
      value: function isRemoteRecording() {
        if (null == this.recorderMap) {
          return false;
        }

        var r = this.recorderMap.get("RemoteVideo");

        if (r == null) {
          return false;
        }

        return r.recording;
      }
      /**
       * 启动对方音视频录制。
       */

    }, {
      key: "startRemoteRecording",
      value: function startRemoteRecording(config) {
        if (null == this.worker.remoteStream) {
          return false;
        }

        return this.startRecording("RemoteVideo", this.worker.remoteStream, config);
      }
      /**
       * 停止对方音视频录制。
       */

    }, {
      key: "stopRemoteRecording",
      value: function stopRemoteRecording(callback) {
        return this.stopRecording("RemoteVideo", callback);
      }
      /**
       * 获取对方归档记录。
       */

    }, {
      key: "getRemoteRecorder",
      value: function getRemoteRecorder() {
        return this.getRecorder("RemoteVideo");
      }
    }, {
      key: "startRecording",
      value: function startRecording(task, mix, config) {
        var preview = null;
        var stream = null;

        if (typeof mix === 'string') {
          preview = document.getElementById(mix);
        } else if (mix.tagName !== undefined) {
          preview = mix;
        } else {
          stream = mix;
        }

        if (null == this.recorderMap) {
          this.recorderMap = new HashMap();
        }

        var recorder = null; // 创建记录器

        if (config !== undefined && null != config) {
          recorder = new _AdvancedRecorder.CubeAdvancedRecorder(preview, config, this.worker);
        } else {
          recorder = new _Recorder.CubeRecorder(preview, this.worker);
        } // 记录


        this.recorderMap.put(task, recorder); // 启动记录器

        return recorder.startRecording(stream);
      }
    }, {
      key: "stopRecording",
      value: function stopRecording(task, callback) {
        if (null == this.recorderMap) {
          return false;
        }

        var recorder = this.recorderMap.get(task);

        if (null == recorder) {
          return false;
        }

        var callTimer = 0;
        var ret = recorder.stopRecording(function (r) {
          if (null == callback) {
            return;
          }

          if (callTimer > 0) {
            clearTimeout(callTimer);
          }

          callTimer = setTimeout(function () {
            clearTimeout(callTimer);
            callback.call(null, recorder);
          }, 1000);
        });
        return ret;
      }
    }, {
      key: "replayRecording",
      value: function replayRecording(task, videoEl, audioEl) {
        if (null == this.recorderMap) {
          return false;
        }

        var recorder = this.recorderMap.get(task);

        if (null == recorder) {
          return false;
        }

        var video = null;

        if (typeof videoEl === 'string') {
          video = document.getElementById(videoEl);
        } else {
          video = videoEl;
        }

        var audio = null;

        if (typeof audioEl === 'string') {
          audio = document.getElementById(audioEl);
        } else {
          audio = audioEl;
        }

        return recorder.replay(video, audio);
      }
    }, {
      key: "getRecorder",
      value: function getRecorder(task) {
        if (null == this.recorderMap) {
          return null;
        }

        return this.recorderMap.get(task);
      }
      /**
       * 视频流处理
       *
       * @param {String} type 视频流操作类型, "open" - 开启视频流; "close" - 关闭视频流。
       * @memberof CubeMediaServiceWorker
       * @instance
       */

    }, {
      key: "_videoProcess",
      value: function _videoProcess(type) {
        for (var i = 0; i < this.probes.length; ++i) {
          var p = this.probes[i];

          if (type == "open") {
            p.onVideoOpen();
          } else if (type == "close") {
            p.onVideoClose();
          }
        }
      }
    }]);

    return MediaServiceWorker;
  }(_MediaService2.MediaService);

  _exports.MediaServiceWorker = MediaServiceWorker;
});

/***/ }),
/* 344 */
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
  _exports.MediaService = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /*
   * MediaService.js
   * Cube Engine
   * 
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 媒体服务
   * @interface MediaService
   * @author Xu Jiangwei, Guan Yong
   */
  var MediaService =
  /*#__PURE__*/
  function () {
    function MediaService() {
      _classCallCheck(this, MediaService);
    }

    _createClass(MediaService, [{
      key: "addMediaProbe",

      /**
       * 添加媒体探针。
       *
       * @param {CubeMediaProbe} probe - 指定待添加的媒体探针实例。
      * @returns {boolean} 添加成功返回<code>true</code>，否则返回 <code>false</code> 。
       */
      value: function addMediaProbe(probe) {}
      /**
       * 移除媒体探针。
      *
       * @param {CubeMediaProbe} probe - 指定删除的媒体探针实例。
       * @returns {boolean} 删除成功返回<code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "removeMediaProbe",
      value: function removeMediaProbe(probe) {}
      /**
       * 关闭本地语音流。关闭语音流后对方将无法听到本地麦克风采集的音频数据。
       *
       * @returns {boolean} 如果关闭成功返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "closeVoice",
      value: function closeVoice() {}
      /**
       * 关闭本地视频流。关闭视频后对方将无法看到本地摄像头采集到的视频影像。
       *
       * @returns {boolean} 如果关闭成功返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "closeVideo",
      value: function closeVideo() {}
      /**
       * 开启本地语音流。开启语音流后对方将能听到本地麦克风采集的音频数据。
      *
       * @returns {boolean} 如果开启成功返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "openVoice",
      value: function openVoice() {}
      /**
       * 开启本地视频流。开启视频后对方将能看到本地摄像头采集到的视频影像。
       *
       * @returns {boolean} 如果开启成功返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "openVideo",
      value: function openVideo() {}
      /**
       * 当前通话的语音通道是否启用。
       *
       * @returns {boolean} 返回<code>true</code>表示启用，<code>false</code>表示禁用。
       */

    }, {
      key: "isVoiceEnabled",
      value: function isVoiceEnabled() {}
      /**
       * 当前通话的视频通道是否启用。
      *
       * @returns {boolean} 返回<code>true</code>表示启用，<code>false</code>表示禁用。
       */

    }, {
      key: "isVideoEnabled",
      value: function isVideoEnabled() {}
      /**
       * 设置扬声器音量。
      *
       * @param {Number} value - 指定正整数类型的音量值，取值范围：0 到 100，表示音量由低到高。
       */

    }, {
      key: "setVolume",
      value: function setVolume(value) {}
      /**
       * 获取当前扬声器音量。
      *
       * @returns {Number} 正整数类型的音量值，数值范围：0 到 100，表示音量由低到高。
       */

    }, {
      key: "getVolume",
      value: function getVolume() {}
      /**
       * 静音。
       */

    }, {
      key: "mute",
      value: function mute() {}
      /**
       * 获取本地视频分辨率大小。
      *
       * @returns {CubeSize} 视频画面宽高，单位：像素。
       */

    }, {
      key: "getLocalVideoSize",
      value: function getLocalVideoSize() {}
      /**
       * 获取对方视频分辨率大小。
       *
       * @returns {CubeSize} 视频画面宽高，单位：像素。
       */

    }, {
      key: "getRemoteVideoSize",
      value: function getRemoteVideoSize() {}
      /**
       * 获取用户视频画面地址。
       *
       * @param {String} peerName - 指定需要获取的用户 Cube 号。
       */

    }, {
      key: "getCapturedCameraImage",
      value: function getCapturedCameraImage(peerName) {}
      /**
       * 截取当前视频的画面。
       *
       * @param {String} name - 指定需要截取的一方的 Cube 号。
       * @param {Function} callback - 回调函数。
       */

    }, {
      key: "capture",
      value: function capture(name, callback) {}
      /**
       * 查询归档记录。
      *
       * @param {String} name - 指定待查询的 Cube 号。
       * @param {Function} success - 指定查询数据后的回调函数。
       * @param {Function} error - 指定查询失败时的回调函数。
       */

    }, {
      key: "queryRecordArchives",
      value: function queryRecordArchives(name, success, error, cors) {}
      /**
       * 加载存档。
      *
       * @param {String} name - 指定待加载存档的 Cube 号。
       * @param {String} file - 需要加载的存档文件。
       * @param {String} videoEl - 显示存档的元素节点ID。
       */

    }, {
      key: "loadArchive",
      value: function loadArchive(name, file, videoEl, cors) {}
      /**
       * 是否存在本地存档记录。
      *
       * @returns {boolean} 返回<code>true</code>表示有本地存档记录, <code>false</code>表示没有。
       */

    }, {
      key: "hasLocalRecorded",
      value: function hasLocalRecorded() {}
      /**
       * 是否正在录制本地视频。
       *
       * @returns {boolean} 返回<code>true</code>表示正在录制, <code>false</code>表示没有录制。
       */

    }, {
      key: "isLocalRecording",
      value: function isLocalRecording() {}
      /**
       * 启动本地音视频录制。
       *
       * @param {Object} config - 指定录像参数。参数包括：interval (录制切片间隔)
       * @returns {boolean} 返回启动录制是否成功。
       */

    }, {
      key: "startLocalRecording",
      value: function startLocalRecording(config) {}
      /**
       * 停止本地音视频录制。
       *
       * @param {Function} callback - 指定录像结束时的回调函数。
       * @returns {boolean} 返回是否正确处理停止。
       */

    }, {
      key: "stopLocalRecording",
      value: function stopLocalRecording(callback) {}
      /**
       * 回放录制。
       *
       * @param {String} videoEl - 需要播放的视频元素ID 。
       * @param {String} audioEl - 需要播放的音频元素ID 。
       * @returns {boolean} 返回回放是否成功。
       */

    }, {
      key: "replayLocalRecording",
      value: function replayLocalRecording(videoEl, audioEl) {}
      /**
       * 获取本地归档记录。
       *
       * @returns {(CubeAdvancedRecorder | CubeRecorder)} - 归档存储实例
       */

    }, {
      key: "getLocalRecorder",
      value: function getLocalRecorder() {}
      /**
       * 对方的视频是否存在归档记录。
       *
       * @returns {boolean} 返回是否存在归档记录。
       */

    }, {
      key: "hasRemoteRecorded",
      value: function hasRemoteRecorded() {}
      /**
       * 是否正在录制对方视频。
       *
       * @returns {boolean} 返回<code>true</code>表示正在录制, <code>false</code>表示没有录制。
       */

    }, {
      key: "isRemoteRecording",
      value: function isRemoteRecording() {}
      /**
       * 启动对方音视频录制。
      *
       * @param {Object} config - 指定录像参数。参数包括：interval (录制切片间隔)。
       * @returns {boolean} 返回是否录制成功。
       */

    }, {
      key: "startRemoteRecording",
      value: function startRemoteRecording(config) {}
      /**
       * 停止对方音视频录制。
       *
       * @param {Function} callback - 指定录像结束时的回调函数。
       * @returns {boolean} 返回录制是否启动停止。
       */

    }, {
      key: "stopRemoteRecording",
      value: function stopRemoteRecording(callback) {}
      /**
       * 获取对方归档记录。
       *
       * @returns {(CubeAdvancedRecorder | CubeRecorder)} - 归档存储实例。
       */

    }, {
      key: "getRemoteRecorder",
      value: function getRemoteRecorder() {}
      /**
       * 修改播放视频元素。
       *
       * @param {Document} localVideo 本地视频元素。
       * @param {Document} remoteVideo 对方视频元素。
       */

    }, {
      key: "changeVideoElement",
      value: function changeVideoElement(localVideo, remoteVideo) {}
    }]);

    return MediaService;
  }();

  _exports.MediaService = MediaService;
});

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;__webpack_require__(93);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(199);

__webpack_require__(346);

__webpack_require__(347);

__webpack_require__(348);

__webpack_require__(100);

__webpack_require__(106);

__webpack_require__(1);

__webpack_require__(107);

__webpack_require__(211);

__webpack_require__(212);

__webpack_require__(349);

__webpack_require__(108);

__webpack_require__(262);

__webpack_require__(117);

__webpack_require__(118);

__webpack_require__(120);

__webpack_require__(122);

__webpack_require__(126);

__webpack_require__(301);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(264);

__webpack_require__(64);

__webpack_require__(132);

__webpack_require__(216);

__webpack_require__(136);

__webpack_require__(139);

__webpack_require__(141);

__webpack_require__(67);

__webpack_require__(227);

__webpack_require__(142);

__webpack_require__(146);

__webpack_require__(350);

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

  (function (f) {
    if (( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined") {
      module.exports = f();
    } else if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var g; }
  })(function () {
    var define, module, exports;
    return function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = typeof require == "function" && require;
            if (!u && a) return require(o, !0);
            if (i) return i(o, !0);
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }

          var l = n[o] = {
            exports: {}
          };
          t[o][0].call(l.exports, function (e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          }, l, l.exports, e, t, n, r);
        }

        return n[o].exports;
      }

      var i = typeof require == "function" && require;

      for (var o = 0; o < r.length; o++) {
        s(r[o]);
      }

      return s;
    }({
      1: [function (require, module, exports) {
        /*
         *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */

        /* eslint-env node */
        'use strict';

        var SDPUtils = require('sdp');

        function fixStatsType(stat) {
          return {
            inboundrtp: 'inbound-rtp',
            outboundrtp: 'outbound-rtp',
            candidatepair: 'candidate-pair',
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[stat.type] || stat.type;
        }

        function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
          var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps); // Map ICE parameters (ufrag, pwd) to SDP.

          sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters()); // Map DTLS parameters to SDP.

          sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : dtlsRole || 'active');
          sdp += 'a=mid:' + transceiver.mid + '\r\n';

          if (transceiver.rtpSender && transceiver.rtpReceiver) {
            sdp += 'a=sendrecv\r\n';
          } else if (transceiver.rtpSender) {
            sdp += 'a=sendonly\r\n';
          } else if (transceiver.rtpReceiver) {
            sdp += 'a=recvonly\r\n';
          } else {
            sdp += 'a=inactive\r\n';
          }

          if (transceiver.rtpSender) {
            var trackId = transceiver.rtpSender._initialTrackId || transceiver.rtpSender.track.id;
            transceiver.rtpSender._initialTrackId = trackId; // spec.

            var msid = 'msid:' + (stream ? stream.id : '-') + ' ' + trackId + '\r\n';
            sdp += 'a=' + msid; // for Chrome. Legacy should no longer be required.

            sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid; // RTX

            if (transceiver.sendEncodingParameters[0].rtx) {
              sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
              sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
            }
          } // FIXME: this should be written by writeRtpDescription.


          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';

          if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
            sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
          }

          return sdp;
        } // Edge does not like
        // 1) stun: filtered after 14393 unless ?transport=udp is present
        // 2) turn: that does not have all of turn:host:port?transport=udp
        // 3) turn: with ipv6 addresses
        // 4) turn: occurring muliple times


        function filterIceServers(iceServers, edgeVersion) {
          var hasTurn = false;
          iceServers = JSON.parse(JSON.stringify(iceServers));
          return iceServers.filter(function (server) {
            if (server && (server.urls || server.url)) {
              var urls = server.urls || server.url;

              if (server.url && !server.urls) {
                console.warn('RTCIceServer.url is deprecated! Use urls instead.');
              }

              var isString = typeof urls === 'string';

              if (isString) {
                urls = [urls];
              }

              urls = urls.filter(function (url) {
                var validTurn = url.indexOf('turn:') === 0 && url.indexOf('transport=udp') !== -1 && url.indexOf('turn:[') === -1 && !hasTurn;

                if (validTurn) {
                  hasTurn = true;
                  return true;
                }

                return url.indexOf('stun:') === 0 && edgeVersion >= 14393 && url.indexOf('?transport=udp') === -1;
              });
              delete server.url;
              server.urls = isString ? urls[0] : urls;
              return !!urls.length;
            }
          });
        } // Determines the intersection of local and remote capabilities.


        function getCommonCapabilities(localCapabilities, remoteCapabilities) {
          var commonCapabilities = {
            codecs: [],
            headerExtensions: [],
            fecMechanisms: []
          };

          var findCodecByPayloadType = function findCodecByPayloadType(pt, codecs) {
            pt = parseInt(pt, 10);

            for (var i = 0; i < codecs.length; i++) {
              if (codecs[i].payloadType === pt || codecs[i].preferredPayloadType === pt) {
                return codecs[i];
              }
            }
          };

          var rtxCapabilityMatches = function rtxCapabilityMatches(lRtx, rRtx, lCodecs, rCodecs) {
            var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
            var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
            return lCodec && rCodec && lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
          };

          localCapabilities.codecs.forEach(function (lCodec) {
            for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
              var rCodec = remoteCapabilities.codecs[i];

              if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() && lCodec.clockRate === rCodec.clockRate) {
                if (lCodec.name.toLowerCase() === 'rtx' && lCodec.parameters && rCodec.parameters.apt) {
                  // for RTX we need to find the local rtx that has a apt
                  // which points to the same local codec as the remote one.
                  if (!rtxCapabilityMatches(lCodec, rCodec, localCapabilities.codecs, remoteCapabilities.codecs)) {
                    continue;
                  }
                }

                rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
                // number of channels is the highest common number of channels

                rCodec.numChannels = Math.min(lCodec.numChannels, rCodec.numChannels); // push rCodec so we reply with offerer payload type

                commonCapabilities.codecs.push(rCodec); // determine common feedback mechanisms

                rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function (fb) {
                  for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
                    if (lCodec.rtcpFeedback[j].type === fb.type && lCodec.rtcpFeedback[j].parameter === fb.parameter) {
                      return true;
                    }
                  }

                  return false;
                }); // FIXME: also need to determine .parameters
                //  see https://github.com/openpeer/ortc/issues/569

                break;
              }
            }
          });
          localCapabilities.headerExtensions.forEach(function (lHeaderExtension) {
            for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
              var rHeaderExtension = remoteCapabilities.headerExtensions[i];

              if (lHeaderExtension.uri === rHeaderExtension.uri) {
                commonCapabilities.headerExtensions.push(rHeaderExtension);
                break;
              }
            }
          }); // FIXME: fecMechanisms

          return commonCapabilities;
        } // is action=setLocalDescription with type allowed in signalingState


        function isActionAllowedInSignalingState(action, type, signalingState) {
          return {
            offer: {
              setLocalDescription: ['stable', 'have-local-offer'],
              setRemoteDescription: ['stable', 'have-remote-offer']
            },
            answer: {
              setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
              setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
            }
          }[type][action].indexOf(signalingState) !== -1;
        }

        function maybeAddCandidate(iceTransport, candidate) {
          // Edge's internal representation adds some fields therefore
          // not all fieldѕ are taken into account.
          var alreadyAdded = iceTransport.getRemoteCandidates().find(function (remoteCandidate) {
            return candidate.foundation === remoteCandidate.foundation && candidate.ip === remoteCandidate.ip && candidate.port === remoteCandidate.port && candidate.priority === remoteCandidate.priority && candidate.protocol === remoteCandidate.protocol && candidate.type === remoteCandidate.type;
          });

          if (!alreadyAdded) {
            iceTransport.addRemoteCandidate(candidate);
          }

          return !alreadyAdded;
        }

        function makeError(name, description) {
          var e = new Error(description);
          e.name = name; // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names

          e.code = {
            NotSupportedError: 9,
            InvalidStateError: 11,
            InvalidAccessError: 15,
            TypeError: undefined,
            OperationError: undefined
          }[name];
          return e;
        }

        module.exports = function (window, edgeVersion) {
          // https://w3c.github.io/mediacapture-main/#mediastream
          // Helper function to add the track to the stream and
          // dispatch the event ourselves.
          function addTrackToStreamAndFireEvent(track, stream) {
            stream.addTrack(track);
            stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack', {
              track: track
            }));
          }

          function removeTrackFromStreamAndFireEvent(track, stream) {
            stream.removeTrack(track);
            stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack', {
              track: track
            }));
          }

          function fireAddTrack(pc, track, receiver, streams) {
            var trackEvent = new Event('track');
            trackEvent.track = track;
            trackEvent.receiver = receiver;
            trackEvent.transceiver = {
              receiver: receiver
            };
            trackEvent.streams = streams;
            window.setTimeout(function () {
              pc._dispatchEvent('track', trackEvent);
            });
          }

          var RTCPeerConnection = function RTCPeerConnection(config) {
            var pc = this;

            var _eventTarget = document.createDocumentFragment();

            ['addEventListener', 'removeEventListener', 'dispatchEvent'].forEach(function (method) {
              pc[method] = _eventTarget[method].bind(_eventTarget);
            });
            this.canTrickleIceCandidates = null;
            this.needNegotiation = false;
            this.localStreams = [];
            this.remoteStreams = [];
            this.localDescription = null;
            this.remoteDescription = null;
            this.signalingState = 'stable';
            this.iceConnectionState = 'new';
            this.connectionState = 'new';
            this.iceGatheringState = 'new';
            config = JSON.parse(JSON.stringify(config || {}));
            this.usingBundle = config.bundlePolicy === 'max-bundle';

            if (config.rtcpMuxPolicy === 'negotiate') {
              throw makeError('NotSupportedError', 'rtcpMuxPolicy \'negotiate\' is not supported');
            } else if (!config.rtcpMuxPolicy) {
              config.rtcpMuxPolicy = 'require';
            }

            switch (config.iceTransportPolicy) {
              case 'all':
              case 'relay':
                break;

              default:
                config.iceTransportPolicy = 'all';
                break;
            }

            switch (config.bundlePolicy) {
              case 'balanced':
              case 'max-compat':
              case 'max-bundle':
                break;

              default:
                config.bundlePolicy = 'balanced';
                break;
            }

            config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);
            this._iceGatherers = [];

            if (config.iceCandidatePoolSize) {
              for (var i = config.iceCandidatePoolSize; i > 0; i--) {
                this._iceGatherers.push(new window.RTCIceGatherer({
                  iceServers: config.iceServers,
                  gatherPolicy: config.iceTransportPolicy
                }));
              }
            } else {
              config.iceCandidatePoolSize = 0;
            }

            this._config = config; // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
            // everything that is needed to describe a SDP m-line.

            this.transceivers = [];
            this._sdpSessionId = SDPUtils.generateSessionId();
            this._sdpSessionVersion = 0;
            this._dtlsRole = undefined; // role for a=setup to use in answers.

            this._isClosed = false;
          }; // set up event handlers on prototype


          RTCPeerConnection.prototype.onicecandidate = null;
          RTCPeerConnection.prototype.onaddstream = null;
          RTCPeerConnection.prototype.ontrack = null;
          RTCPeerConnection.prototype.onremovestream = null;
          RTCPeerConnection.prototype.onsignalingstatechange = null;
          RTCPeerConnection.prototype.oniceconnectionstatechange = null;
          RTCPeerConnection.prototype.onconnectionstatechange = null;
          RTCPeerConnection.prototype.onicegatheringstatechange = null;
          RTCPeerConnection.prototype.onnegotiationneeded = null;
          RTCPeerConnection.prototype.ondatachannel = null;

          RTCPeerConnection.prototype._dispatchEvent = function (name, event) {
            if (this._isClosed) {
              return;
            }

            this.dispatchEvent(event);

            if (typeof this['on' + name] === 'function') {
              this['on' + name](event);
            }
          };

          RTCPeerConnection.prototype._emitGatheringStateChange = function () {
            var event = new Event('icegatheringstatechange');

            this._dispatchEvent('icegatheringstatechange', event);
          };

          RTCPeerConnection.prototype.getConfiguration = function () {
            return this._config;
          };

          RTCPeerConnection.prototype.getLocalStreams = function () {
            return this.localStreams;
          };

          RTCPeerConnection.prototype.getRemoteStreams = function () {
            return this.remoteStreams;
          }; // internal helper to create a transceiver object.
          // (which is not yet the same as the WebRTC 1.0 transceiver)


          RTCPeerConnection.prototype._createTransceiver = function (kind, doNotAdd) {
            var hasBundleTransport = this.transceivers.length > 0;
            var transceiver = {
              track: null,
              iceGatherer: null,
              iceTransport: null,
              dtlsTransport: null,
              localCapabilities: null,
              remoteCapabilities: null,
              rtpSender: null,
              rtpReceiver: null,
              kind: kind,
              mid: null,
              sendEncodingParameters: null,
              recvEncodingParameters: null,
              stream: null,
              associatedRemoteMediaStreams: [],
              wantReceive: true
            };

            if (this.usingBundle && hasBundleTransport) {
              transceiver.iceTransport = this.transceivers[0].iceTransport;
              transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
            } else {
              var transports = this._createIceAndDtlsTransports();

              transceiver.iceTransport = transports.iceTransport;
              transceiver.dtlsTransport = transports.dtlsTransport;
            }

            if (!doNotAdd) {
              this.transceivers.push(transceiver);
            }

            return transceiver;
          };

          RTCPeerConnection.prototype.addTrack = function (track, stream) {
            if (this._isClosed) {
              throw makeError('InvalidStateError', 'Attempted to call addTrack on a closed peerconnection.');
            }

            var alreadyExists = this.transceivers.find(function (s) {
              return s.track === track;
            });

            if (alreadyExists) {
              throw makeError('InvalidAccessError', 'Track already exists.');
            }

            var transceiver;

            for (var i = 0; i < this.transceivers.length; i++) {
              if (!this.transceivers[i].track && this.transceivers[i].kind === track.kind) {
                transceiver = this.transceivers[i];
              }
            }

            if (!transceiver) {
              transceiver = this._createTransceiver(track.kind);
            }

            this._maybeFireNegotiationNeeded();

            if (this.localStreams.indexOf(stream) === -1) {
              this.localStreams.push(stream);
            }

            transceiver.track = track;
            transceiver.stream = stream;
            transceiver.rtpSender = new window.RTCRtpSender(track, transceiver.dtlsTransport);
            return transceiver.rtpSender;
          };

          RTCPeerConnection.prototype.addStream = function (stream) {
            var pc = this;

            if (edgeVersion >= 15025) {
              stream.getTracks().forEach(function (track) {
                pc.addTrack(track, stream);
              });
            } else {
              // Clone is necessary for local demos mostly, attaching directly
              // to two different senders does not work (build 10547).
              // Fixed in 15025 (or earlier)
              var clonedStream = stream.clone();
              stream.getTracks().forEach(function (track, idx) {
                var clonedTrack = clonedStream.getTracks()[idx];
                track.addEventListener('enabled', function (event) {
                  clonedTrack.enabled = event.enabled;
                });
              });
              clonedStream.getTracks().forEach(function (track) {
                pc.addTrack(track, clonedStream);
              });
            }
          };

          RTCPeerConnection.prototype.removeTrack = function (sender) {
            if (this._isClosed) {
              throw makeError('InvalidStateError', 'Attempted to call removeTrack on a closed peerconnection.');
            }

            if (!(sender instanceof window.RTCRtpSender)) {
              throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.');
            }

            var transceiver = this.transceivers.find(function (t) {
              return t.rtpSender === sender;
            });

            if (!transceiver) {
              throw makeError('InvalidAccessError', 'Sender was not created by this connection.');
            }

            var stream = transceiver.stream;
            transceiver.rtpSender.stop();
            transceiver.rtpSender = null;
            transceiver.track = null;
            transceiver.stream = null; // remove the stream from the set of local streams

            var localStreams = this.transceivers.map(function (t) {
              return t.stream;
            });

            if (localStreams.indexOf(stream) === -1 && this.localStreams.indexOf(stream) > -1) {
              this.localStreams.splice(this.localStreams.indexOf(stream), 1);
            }

            this._maybeFireNegotiationNeeded();
          };

          RTCPeerConnection.prototype.removeStream = function (stream) {
            var pc = this;
            stream.getTracks().forEach(function (track) {
              var sender = pc.getSenders().find(function (s) {
                return s.track === track;
              });

              if (sender) {
                pc.removeTrack(sender);
              }
            });
          };

          RTCPeerConnection.prototype.getSenders = function () {
            return this.transceivers.filter(function (transceiver) {
              return !!transceiver.rtpSender;
            }).map(function (transceiver) {
              return transceiver.rtpSender;
            });
          };

          RTCPeerConnection.prototype.getReceivers = function () {
            return this.transceivers.filter(function (transceiver) {
              return !!transceiver.rtpReceiver;
            }).map(function (transceiver) {
              return transceiver.rtpReceiver;
            });
          };

          RTCPeerConnection.prototype._createIceGatherer = function (sdpMLineIndex, usingBundle) {
            var pc = this;

            if (usingBundle && sdpMLineIndex > 0) {
              return this.transceivers[0].iceGatherer;
            } else if (this._iceGatherers.length) {
              return this._iceGatherers.shift();
            }

            var iceGatherer = new window.RTCIceGatherer({
              iceServers: this._config.iceServers,
              gatherPolicy: this._config.iceTransportPolicy
            });
            Object.defineProperty(iceGatherer, 'state', {
              value: 'new',
              writable: true
            });
            this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];

            this.transceivers[sdpMLineIndex].bufferCandidates = function (event) {
              var end = !event.candidate || Object.keys(event.candidate).length === 0; // polyfill since RTCIceGatherer.state is not implemented in
              // Edge 10547 yet.

              iceGatherer.state = end ? 'completed' : 'gathering';

              if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
                pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
              }
            };

            iceGatherer.addEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);
            return iceGatherer;
          }; // start gathering from an RTCIceGatherer.


          RTCPeerConnection.prototype._gather = function (mid, sdpMLineIndex) {
            var pc = this;
            var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;

            if (iceGatherer.onlocalcandidate) {
              return;
            }

            var bufferedCandidateEvents = this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
            this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
            iceGatherer.removeEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);

            iceGatherer.onlocalcandidate = function (evt) {
              if (pc.usingBundle && sdpMLineIndex > 0) {
                // if we know that we use bundle we can drop candidates with
                // ѕdpMLineIndex > 0. If we don't do this then our state gets
                // confused since we dispose the extra ice gatherer.
                return;
              }

              var event = new Event('icecandidate');
              event.candidate = {
                sdpMid: mid,
                sdpMLineIndex: sdpMLineIndex
              };
              var cand = evt.candidate; // Edge emits an empty object for RTCIceCandidateComplete‥

              var end = !cand || Object.keys(cand).length === 0;

              if (end) {
                // polyfill since RTCIceGatherer.state is not implemented in
                // Edge 10547 yet.
                if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
                  iceGatherer.state = 'completed';
                }
              } else {
                if (iceGatherer.state === 'new') {
                  iceGatherer.state = 'gathering';
                } // RTCIceCandidate doesn't have a component, needs to be added


                cand.component = 1; // also the usernameFragment. TODO: update SDP to take both variants.

                cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;
                var serializedCandidate = SDPUtils.writeCandidate(cand);
                event.candidate = Object.assign(event.candidate, SDPUtils.parseCandidate(serializedCandidate));
                event.candidate.candidate = serializedCandidate;

                event.candidate.toJSON = function () {
                  return {
                    candidate: event.candidate.candidate,
                    sdpMid: event.candidate.sdpMid,
                    sdpMLineIndex: event.candidate.sdpMLineIndex,
                    usernameFragment: event.candidate.usernameFragment
                  };
                };
              } // update local description.


              var sections = SDPUtils.getMediaSections(pc.localDescription.sdp);

              if (!end) {
                sections[event.candidate.sdpMLineIndex] += 'a=' + event.candidate.candidate + '\r\n';
              } else {
                sections[event.candidate.sdpMLineIndex] += 'a=end-of-candidates\r\n';
              }

              pc.localDescription.sdp = SDPUtils.getDescription(pc.localDescription.sdp) + sections.join('');
              var complete = pc.transceivers.every(function (transceiver) {
                return transceiver.iceGatherer && transceiver.iceGatherer.state === 'completed';
              });

              if (pc.iceGatheringState !== 'gathering') {
                pc.iceGatheringState = 'gathering';

                pc._emitGatheringStateChange();
              } // Emit candidate. Also emit null candidate when all gatherers are
              // complete.


              if (!end) {
                pc._dispatchEvent('icecandidate', event);
              }

              if (complete) {
                pc._dispatchEvent('icecandidate', new Event('icecandidate'));

                pc.iceGatheringState = 'complete';

                pc._emitGatheringStateChange();
              }
            }; // emit already gathered candidates.


            window.setTimeout(function () {
              bufferedCandidateEvents.forEach(function (e) {
                iceGatherer.onlocalcandidate(e);
              });
            }, 0);
          }; // Create ICE transport and DTLS transport.


          RTCPeerConnection.prototype._createIceAndDtlsTransports = function () {
            var pc = this;
            var iceTransport = new window.RTCIceTransport(null);

            iceTransport.onicestatechange = function () {
              pc._updateIceConnectionState();

              pc._updateConnectionState();
            };

            var dtlsTransport = new window.RTCDtlsTransport(iceTransport);

            dtlsTransport.ondtlsstatechange = function () {
              pc._updateConnectionState();
            };

            dtlsTransport.onerror = function () {
              // onerror does not set state to failed by itself.
              Object.defineProperty(dtlsTransport, 'state', {
                value: 'failed',
                writable: true
              });

              pc._updateConnectionState();
            };

            return {
              iceTransport: iceTransport,
              dtlsTransport: dtlsTransport
            };
          }; // Destroy ICE gatherer, ICE transport and DTLS transport.
          // Without triggering the callbacks.


          RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function (sdpMLineIndex) {
            var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;

            if (iceGatherer) {
              delete iceGatherer.onlocalcandidate;
              delete this.transceivers[sdpMLineIndex].iceGatherer;
            }

            var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;

            if (iceTransport) {
              delete iceTransport.onicestatechange;
              delete this.transceivers[sdpMLineIndex].iceTransport;
            }

            var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;

            if (dtlsTransport) {
              delete dtlsTransport.ondtlsstatechange;
              delete dtlsTransport.onerror;
              delete this.transceivers[sdpMLineIndex].dtlsTransport;
            }
          }; // Start the RTP Sender and Receiver for a transceiver.


          RTCPeerConnection.prototype._transceive = function (transceiver, send, recv) {
            var params = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);

            if (send && transceiver.rtpSender) {
              params.encodings = transceiver.sendEncodingParameters;
              params.rtcp = {
                cname: SDPUtils.localCName,
                compound: transceiver.rtcpParameters.compound
              };

              if (transceiver.recvEncodingParameters.length) {
                params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
              }

              transceiver.rtpSender.send(params);
            }

            if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
              // remove RTX field in Edge 14942
              if (transceiver.kind === 'video' && transceiver.recvEncodingParameters && edgeVersion < 15019) {
                transceiver.recvEncodingParameters.forEach(function (p) {
                  delete p.rtx;
                });
              }

              if (transceiver.recvEncodingParameters.length) {
                params.encodings = transceiver.recvEncodingParameters;
              } else {
                params.encodings = [{}];
              }

              params.rtcp = {
                compound: transceiver.rtcpParameters.compound
              };

              if (transceiver.rtcpParameters.cname) {
                params.rtcp.cname = transceiver.rtcpParameters.cname;
              }

              if (transceiver.sendEncodingParameters.length) {
                params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
              }

              transceiver.rtpReceiver.receive(params);
            }
          };

          RTCPeerConnection.prototype.setLocalDescription = function (description) {
            var pc = this; // Note: pranswer is not supported.

            if (['offer', 'answer'].indexOf(description.type) === -1) {
              return Promise.reject(makeError('TypeError', 'Unsupported type "' + description.type + '"'));
            }

            if (!isActionAllowedInSignalingState('setLocalDescription', description.type, pc.signalingState) || pc._isClosed) {
              return Promise.reject(makeError('InvalidStateError', 'Can not set local ' + description.type + ' in state ' + pc.signalingState));
            }

            var sections;
            var sessionpart;

            if (description.type === 'offer') {
              // VERY limited support for SDP munging. Limited to:
              // * changing the order of codecs
              sections = SDPUtils.splitSections(description.sdp);
              sessionpart = sections.shift();
              sections.forEach(function (mediaSection, sdpMLineIndex) {
                var caps = SDPUtils.parseRtpParameters(mediaSection);
                pc.transceivers[sdpMLineIndex].localCapabilities = caps;
              });
              pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
                pc._gather(transceiver.mid, sdpMLineIndex);
              });
            } else if (description.type === 'answer') {
              sections = SDPUtils.splitSections(pc.remoteDescription.sdp);
              sessionpart = sections.shift();
              var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
              sections.forEach(function (mediaSection, sdpMLineIndex) {
                var transceiver = pc.transceivers[sdpMLineIndex];
                var iceGatherer = transceiver.iceGatherer;
                var iceTransport = transceiver.iceTransport;
                var dtlsTransport = transceiver.dtlsTransport;
                var localCapabilities = transceiver.localCapabilities;
                var remoteCapabilities = transceiver.remoteCapabilities; // treat bundle-only as not-rejected.

                var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

                if (!rejected && !transceiver.rejected) {
                  var remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
                  var remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);

                  if (isIceLite) {
                    remoteDtlsParameters.role = 'server';
                  }

                  if (!pc.usingBundle || sdpMLineIndex === 0) {
                    pc._gather(transceiver.mid, sdpMLineIndex);

                    if (iceTransport.state === 'new') {
                      iceTransport.start(iceGatherer, remoteIceParameters, isIceLite ? 'controlling' : 'controlled');
                    }

                    if (dtlsTransport.state === 'new') {
                      dtlsTransport.start(remoteDtlsParameters);
                    }
                  } // Calculate intersection of capabilities.


                  var params = getCommonCapabilities(localCapabilities, remoteCapabilities); // Start the RTCRtpSender. The RTCRtpReceiver for this
                  // transceiver has already been started in setRemoteDescription.

                  pc._transceive(transceiver, params.codecs.length > 0, false);
                }
              });
            }

            pc.localDescription = {
              type: description.type,
              sdp: description.sdp
            };

            if (description.type === 'offer') {
              pc._updateSignalingState('have-local-offer');
            } else {
              pc._updateSignalingState('stable');
            }

            return Promise.resolve();
          };

          RTCPeerConnection.prototype.setRemoteDescription = function (description) {
            var pc = this; // Note: pranswer is not supported.

            if (['offer', 'answer'].indexOf(description.type) === -1) {
              return Promise.reject(makeError('TypeError', 'Unsupported type "' + description.type + '"'));
            }

            if (!isActionAllowedInSignalingState('setRemoteDescription', description.type, pc.signalingState) || pc._isClosed) {
              return Promise.reject(makeError('InvalidStateError', 'Can not set remote ' + description.type + ' in state ' + pc.signalingState));
            }

            var streams = {};
            pc.remoteStreams.forEach(function (stream) {
              streams[stream.id] = stream;
            });
            var receiverList = [];
            var sections = SDPUtils.splitSections(description.sdp);
            var sessionpart = sections.shift();
            var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
            var usingBundle = SDPUtils.matchPrefix(sessionpart, 'a=group:BUNDLE ').length > 0;
            pc.usingBundle = usingBundle;
            var iceOptions = SDPUtils.matchPrefix(sessionpart, 'a=ice-options:')[0];

            if (iceOptions) {
              pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ').indexOf('trickle') >= 0;
            } else {
              pc.canTrickleIceCandidates = false;
            }

            sections.forEach(function (mediaSection, sdpMLineIndex) {
              var lines = SDPUtils.splitLines(mediaSection);
              var kind = SDPUtils.getKind(mediaSection); // treat bundle-only as not-rejected.

              var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
              var protocol = lines[0].substr(2).split(' ')[2];
              var direction = SDPUtils.getDirection(mediaSection, sessionpart);
              var remoteMsid = SDPUtils.parseMsid(mediaSection);
              var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier(); // Reject datachannels which are not implemented yet.

              if (kind === 'application' && protocol === 'DTLS/SCTP' || rejected) {
                // TODO: this is dangerous in the case where a non-rejected m-line
                //     becomes rejected.
                pc.transceivers[sdpMLineIndex] = {
                  mid: mid,
                  kind: kind,
                  rejected: true
                };
                return;
              }

              if (!rejected && pc.transceivers[sdpMLineIndex] && pc.transceivers[sdpMLineIndex].rejected) {
                // recycle a rejected transceiver.
                pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
              }

              var transceiver;
              var iceGatherer;
              var iceTransport;
              var dtlsTransport;
              var rtpReceiver;
              var sendEncodingParameters;
              var recvEncodingParameters;
              var localCapabilities;
              var track; // FIXME: ensure the mediaSection has rtcp-mux set.

              var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
              var remoteIceParameters;
              var remoteDtlsParameters;

              if (!rejected) {
                remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
                remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);
                remoteDtlsParameters.role = 'client';
              }

              recvEncodingParameters = SDPUtils.parseRtpEncodingParameters(mediaSection);
              var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);
              var isComplete = SDPUtils.matchPrefix(mediaSection, 'a=end-of-candidates', sessionpart).length > 0;
              var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:').map(function (cand) {
                return SDPUtils.parseCandidate(cand);
              }).filter(function (cand) {
                return cand.component === 1;
              }); // Check if we can use BUNDLE and dispose transports.

              if ((description.type === 'offer' || description.type === 'answer') && !rejected && usingBundle && sdpMLineIndex > 0 && pc.transceivers[sdpMLineIndex]) {
                pc._disposeIceAndDtlsTransports(sdpMLineIndex);

                pc.transceivers[sdpMLineIndex].iceGatherer = pc.transceivers[0].iceGatherer;
                pc.transceivers[sdpMLineIndex].iceTransport = pc.transceivers[0].iceTransport;
                pc.transceivers[sdpMLineIndex].dtlsTransport = pc.transceivers[0].dtlsTransport;

                if (pc.transceivers[sdpMLineIndex].rtpSender) {
                  pc.transceivers[sdpMLineIndex].rtpSender.setTransport(pc.transceivers[0].dtlsTransport);
                }

                if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
                  pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(pc.transceivers[0].dtlsTransport);
                }
              }

              if (description.type === 'offer' && !rejected) {
                transceiver = pc.transceivers[sdpMLineIndex] || pc._createTransceiver(kind);
                transceiver.mid = mid;

                if (!transceiver.iceGatherer) {
                  transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, usingBundle);
                }

                if (cands.length && transceiver.iceTransport.state === 'new') {
                  if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
                    transceiver.iceTransport.setRemoteCandidates(cands);
                  } else {
                    cands.forEach(function (candidate) {
                      maybeAddCandidate(transceiver.iceTransport, candidate);
                    });
                  }
                }

                localCapabilities = window.RTCRtpReceiver.getCapabilities(kind); // filter RTX until additional stuff needed for RTX is implemented
                // in adapter.js

                if (edgeVersion < 15019) {
                  localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
                    return codec.name !== 'rtx';
                  });
                }

                sendEncodingParameters = transceiver.sendEncodingParameters || [{
                  ssrc: (2 * sdpMLineIndex + 2) * 1001
                }]; // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams

                var isNewTrack = false;

                if (direction === 'sendrecv' || direction === 'sendonly') {
                  isNewTrack = !transceiver.rtpReceiver;
                  rtpReceiver = transceiver.rtpReceiver || new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

                  if (isNewTrack) {
                    var stream;
                    track = rtpReceiver.track; // FIXME: does not work with Plan B.

                    if (remoteMsid && remoteMsid.stream === '-') {// no-op. a stream id of '-' means: no associated stream.
                    } else if (remoteMsid) {
                      if (!streams[remoteMsid.stream]) {
                        streams[remoteMsid.stream] = new window.MediaStream();
                        Object.defineProperty(streams[remoteMsid.stream], 'id', {
                          get: function get() {
                            return remoteMsid.stream;
                          }
                        });
                      }

                      Object.defineProperty(track, 'id', {
                        get: function get() {
                          return remoteMsid.track;
                        }
                      });
                      stream = streams[remoteMsid.stream];
                    } else {
                      if (!streams["default"]) {
                        streams["default"] = new window.MediaStream();
                      }

                      stream = streams["default"];
                    }

                    if (stream) {
                      addTrackToStreamAndFireEvent(track, stream);
                      transceiver.associatedRemoteMediaStreams.push(stream);
                    }

                    receiverList.push([track, rtpReceiver, stream]);
                  }
                } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
                  transceiver.associatedRemoteMediaStreams.forEach(function (s) {
                    var nativeTrack = s.getTracks().find(function (t) {
                      return t.id === transceiver.rtpReceiver.track.id;
                    });

                    if (nativeTrack) {
                      removeTrackFromStreamAndFireEvent(nativeTrack, s);
                    }
                  });
                  transceiver.associatedRemoteMediaStreams = [];
                }

                transceiver.localCapabilities = localCapabilities;
                transceiver.remoteCapabilities = remoteCapabilities;
                transceiver.rtpReceiver = rtpReceiver;
                transceiver.rtcpParameters = rtcpParameters;
                transceiver.sendEncodingParameters = sendEncodingParameters;
                transceiver.recvEncodingParameters = recvEncodingParameters; // Start the RTCRtpReceiver now. The RTPSender is started in
                // setLocalDescription.

                pc._transceive(pc.transceivers[sdpMLineIndex], false, isNewTrack);
              } else if (description.type === 'answer' && !rejected) {
                transceiver = pc.transceivers[sdpMLineIndex];
                iceGatherer = transceiver.iceGatherer;
                iceTransport = transceiver.iceTransport;
                dtlsTransport = transceiver.dtlsTransport;
                rtpReceiver = transceiver.rtpReceiver;
                sendEncodingParameters = transceiver.sendEncodingParameters;
                localCapabilities = transceiver.localCapabilities;
                pc.transceivers[sdpMLineIndex].recvEncodingParameters = recvEncodingParameters;
                pc.transceivers[sdpMLineIndex].remoteCapabilities = remoteCapabilities;
                pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

                if (cands.length && iceTransport.state === 'new') {
                  if ((isIceLite || isComplete) && (!usingBundle || sdpMLineIndex === 0)) {
                    iceTransport.setRemoteCandidates(cands);
                  } else {
                    cands.forEach(function (candidate) {
                      maybeAddCandidate(transceiver.iceTransport, candidate);
                    });
                  }
                }

                if (!usingBundle || sdpMLineIndex === 0) {
                  if (iceTransport.state === 'new') {
                    iceTransport.start(iceGatherer, remoteIceParameters, 'controlling');
                  }

                  if (dtlsTransport.state === 'new') {
                    dtlsTransport.start(remoteDtlsParameters);
                  }
                }

                pc._transceive(transceiver, direction === 'sendrecv' || direction === 'recvonly', direction === 'sendrecv' || direction === 'sendonly'); // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams


                if (rtpReceiver && (direction === 'sendrecv' || direction === 'sendonly')) {
                  track = rtpReceiver.track;

                  if (remoteMsid) {
                    if (!streams[remoteMsid.stream]) {
                      streams[remoteMsid.stream] = new window.MediaStream();
                    }

                    addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
                    receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
                  } else {
                    if (!streams["default"]) {
                      streams["default"] = new window.MediaStream();
                    }

                    addTrackToStreamAndFireEvent(track, streams["default"]);
                    receiverList.push([track, rtpReceiver, streams["default"]]);
                  }
                } else {
                  // FIXME: actually the receiver should be created later.
                  delete transceiver.rtpReceiver;
                }
              }
            });

            if (pc._dtlsRole === undefined) {
              pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
            }

            pc.remoteDescription = {
              type: description.type,
              sdp: description.sdp
            };

            if (description.type === 'offer') {
              pc._updateSignalingState('have-remote-offer');
            } else {
              pc._updateSignalingState('stable');
            }

            Object.keys(streams).forEach(function (sid) {
              var stream = streams[sid];

              if (stream.getTracks().length) {
                if (pc.remoteStreams.indexOf(stream) === -1) {
                  pc.remoteStreams.push(stream);
                  var event = new Event('addstream');
                  event.stream = stream;
                  window.setTimeout(function () {
                    pc._dispatchEvent('addstream', event);
                  });
                }

                receiverList.forEach(function (item) {
                  var track = item[0];
                  var receiver = item[1];

                  if (stream.id !== item[2].id) {
                    return;
                  }

                  fireAddTrack(pc, track, receiver, [stream]);
                });
              }
            });
            receiverList.forEach(function (item) {
              if (item[2]) {
                return;
              }

              fireAddTrack(pc, item[0], item[1], []);
            }); // check whether addIceCandidate({}) was called within four seconds after
            // setRemoteDescription.

            window.setTimeout(function () {
              if (!(pc && pc.transceivers)) {
                return;
              }

              pc.transceivers.forEach(function (transceiver) {
                if (transceiver.iceTransport && transceiver.iceTransport.state === 'new' && transceiver.iceTransport.getRemoteCandidates().length > 0) {
                  console.warn('Timeout for addRemoteCandidate. Consider sending ' + 'an end-of-candidates notification');
                  transceiver.iceTransport.addRemoteCandidate({});
                }
              });
            }, 4000);
            return Promise.resolve();
          };

          RTCPeerConnection.prototype.close = function () {
            this.transceivers.forEach(function (transceiver) {
              /* not yet
              if (transceiver.iceGatherer) {
                transceiver.iceGatherer.close();
              }
              */
              if (transceiver.iceTransport) {
                transceiver.iceTransport.stop();
              }

              if (transceiver.dtlsTransport) {
                transceiver.dtlsTransport.stop();
              }

              if (transceiver.rtpSender) {
                transceiver.rtpSender.stop();
              }

              if (transceiver.rtpReceiver) {
                transceiver.rtpReceiver.stop();
              }
            }); // FIXME: clean up tracks, local streams, remote streams, etc

            this._isClosed = true;

            this._updateSignalingState('closed');
          }; // Update the signaling state.


          RTCPeerConnection.prototype._updateSignalingState = function (newState) {
            this.signalingState = newState;
            var event = new Event('signalingstatechange');

            this._dispatchEvent('signalingstatechange', event);
          }; // Determine whether to fire the negotiationneeded event.


          RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function () {
            var pc = this;

            if (this.signalingState !== 'stable' || this.needNegotiation === true) {
              return;
            }

            this.needNegotiation = true;
            window.setTimeout(function () {
              if (pc.needNegotiation) {
                pc.needNegotiation = false;
                var event = new Event('negotiationneeded');

                pc._dispatchEvent('negotiationneeded', event);
              }
            }, 0);
          }; // Update the ice connection state.


          RTCPeerConnection.prototype._updateIceConnectionState = function () {
            var newState;
            var states = {
              'new': 0,
              closed: 0,
              checking: 0,
              connected: 0,
              completed: 0,
              disconnected: 0,
              failed: 0
            };
            this.transceivers.forEach(function (transceiver) {
              states[transceiver.iceTransport.state]++;
            });
            newState = 'new';

            if (states.failed > 0) {
              newState = 'failed';
            } else if (states.checking > 0) {
              newState = 'checking';
            } else if (states.disconnected > 0) {
              newState = 'disconnected';
            } else if (states["new"] > 0) {
              newState = 'new';
            } else if (states.connected > 0) {
              newState = 'connected';
            } else if (states.completed > 0) {
              newState = 'completed';
            }

            if (newState !== this.iceConnectionState) {
              this.iceConnectionState = newState;
              var event = new Event('iceconnectionstatechange');

              this._dispatchEvent('iceconnectionstatechange', event);
            }
          }; // Update the connection state.


          RTCPeerConnection.prototype._updateConnectionState = function () {
            var newState;
            var states = {
              'new': 0,
              closed: 0,
              connecting: 0,
              connected: 0,
              completed: 0,
              disconnected: 0,
              failed: 0
            };
            this.transceivers.forEach(function (transceiver) {
              states[transceiver.iceTransport.state]++;
              states[transceiver.dtlsTransport.state]++;
            }); // ICETransport.completed and connected are the same for this purpose.

            states.connected += states.completed;
            newState = 'new';

            if (states.failed > 0) {
              newState = 'failed';
            } else if (states.connecting > 0) {
              newState = 'connecting';
            } else if (states.disconnected > 0) {
              newState = 'disconnected';
            } else if (states["new"] > 0) {
              newState = 'new';
            } else if (states.connected > 0) {
              newState = 'connected';
            }

            if (newState !== this.connectionState) {
              this.connectionState = newState;
              var event = new Event('connectionstatechange');

              this._dispatchEvent('connectionstatechange', event);
            }
          };

          RTCPeerConnection.prototype.createOffer = function () {
            var pc = this;

            if (pc._isClosed) {
              return Promise.reject(makeError('InvalidStateError', 'Can not call createOffer after close'));
            }

            var numAudioTracks = pc.transceivers.filter(function (t) {
              return t.kind === 'audio';
            }).length;
            var numVideoTracks = pc.transceivers.filter(function (t) {
              return t.kind === 'video';
            }).length; // Determine number of audio and video tracks we need to send/recv.

            var offerOptions = arguments[0];

            if (offerOptions) {
              // Reject Chrome legacy constraints.
              if (offerOptions.mandatory || offerOptions.optional) {
                throw new TypeError('Legacy mandatory/optional constraints not supported.');
              }

              if (offerOptions.offerToReceiveAudio !== undefined) {
                if (offerOptions.offerToReceiveAudio === true) {
                  numAudioTracks = 1;
                } else if (offerOptions.offerToReceiveAudio === false) {
                  numAudioTracks = 0;
                } else {
                  numAudioTracks = offerOptions.offerToReceiveAudio;
                }
              }

              if (offerOptions.offerToReceiveVideo !== undefined) {
                if (offerOptions.offerToReceiveVideo === true) {
                  numVideoTracks = 1;
                } else if (offerOptions.offerToReceiveVideo === false) {
                  numVideoTracks = 0;
                } else {
                  numVideoTracks = offerOptions.offerToReceiveVideo;
                }
              }
            }

            pc.transceivers.forEach(function (transceiver) {
              if (transceiver.kind === 'audio') {
                numAudioTracks--;

                if (numAudioTracks < 0) {
                  transceiver.wantReceive = false;
                }
              } else if (transceiver.kind === 'video') {
                numVideoTracks--;

                if (numVideoTracks < 0) {
                  transceiver.wantReceive = false;
                }
              }
            }); // Create M-lines for recvonly streams.

            while (numAudioTracks > 0 || numVideoTracks > 0) {
              if (numAudioTracks > 0) {
                pc._createTransceiver('audio');

                numAudioTracks--;
              }

              if (numVideoTracks > 0) {
                pc._createTransceiver('video');

                numVideoTracks--;
              }
            }

            var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
            pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
              // For each track, create an ice gatherer, ice transport,
              // dtls transport, potentially rtpsender and rtpreceiver.
              var track = transceiver.track;
              var kind = transceiver.kind;
              var mid = transceiver.mid || SDPUtils.generateIdentifier();
              transceiver.mid = mid;

              if (!transceiver.iceGatherer) {
                transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, pc.usingBundle);
              }

              var localCapabilities = window.RTCRtpSender.getCapabilities(kind); // filter RTX until additional stuff needed for RTX is implemented
              // in adapter.js

              if (edgeVersion < 15019) {
                localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
                  return codec.name !== 'rtx';
                });
              }

              localCapabilities.codecs.forEach(function (codec) {
                // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
                // by adding level-asymmetry-allowed=1
                if (codec.name === 'H264' && codec.parameters['level-asymmetry-allowed'] === undefined) {
                  codec.parameters['level-asymmetry-allowed'] = '1';
                } // for subsequent offers, we might have to re-use the payload
                // type of the last offer.


                if (transceiver.remoteCapabilities && transceiver.remoteCapabilities.codecs) {
                  transceiver.remoteCapabilities.codecs.forEach(function (remoteCodec) {
                    if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() && codec.clockRate === remoteCodec.clockRate) {
                      codec.preferredPayloadType = remoteCodec.payloadType;
                    }
                  });
                }
              });
              localCapabilities.headerExtensions.forEach(function (hdrExt) {
                var remoteExtensions = transceiver.remoteCapabilities && transceiver.remoteCapabilities.headerExtensions || [];
                remoteExtensions.forEach(function (rHdrExt) {
                  if (hdrExt.uri === rHdrExt.uri) {
                    hdrExt.id = rHdrExt.id;
                  }
                });
              }); // generate an ssrc now, to be used later in rtpSender.send

              var sendEncodingParameters = transceiver.sendEncodingParameters || [{
                ssrc: (2 * sdpMLineIndex + 1) * 1001
              }];

              if (track) {
                // add RTX
                if (edgeVersion >= 15019 && kind === 'video' && !sendEncodingParameters[0].rtx) {
                  sendEncodingParameters[0].rtx = {
                    ssrc: sendEncodingParameters[0].ssrc + 1
                  };
                }
              }

              if (transceiver.wantReceive) {
                transceiver.rtpReceiver = new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
              }

              transceiver.localCapabilities = localCapabilities;
              transceiver.sendEncodingParameters = sendEncodingParameters;
            }); // always offer BUNDLE and dispose on return if not supported.

            if (pc._config.bundlePolicy !== 'max-compat') {
              sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
                return t.mid;
              }).join(' ') + '\r\n';
            }

            sdp += 'a=ice-options:trickle\r\n';
            pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
              sdp += writeMediaSection(transceiver, transceiver.localCapabilities, 'offer', transceiver.stream, pc._dtlsRole);
              sdp += 'a=rtcp-rsize\r\n';

              if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' && (sdpMLineIndex === 0 || !pc.usingBundle)) {
                transceiver.iceGatherer.getLocalCandidates().forEach(function (cand) {
                  cand.component = 1;
                  sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
                });

                if (transceiver.iceGatherer.state === 'completed') {
                  sdp += 'a=end-of-candidates\r\n';
                }
              }
            });
            var desc = new window.RTCSessionDescription({
              type: 'offer',
              sdp: sdp
            });
            return Promise.resolve(desc);
          };

          RTCPeerConnection.prototype.createAnswer = function () {
            var pc = this;

            if (pc._isClosed) {
              return Promise.reject(makeError('InvalidStateError', 'Can not call createAnswer after close'));
            }

            if (!(pc.signalingState === 'have-remote-offer' || pc.signalingState === 'have-local-pranswer')) {
              return Promise.reject(makeError('InvalidStateError', 'Can not call createAnswer in signalingState ' + pc.signalingState));
            }

            var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);

            if (pc.usingBundle) {
              sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
                return t.mid;
              }).join(' ') + '\r\n';
            }

            var mediaSectionsInOffer = SDPUtils.getMediaSections(pc.remoteDescription.sdp).length;
            pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
              if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
                return;
              }

              if (transceiver.rejected) {
                if (transceiver.kind === 'application') {
                  sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
                } else if (transceiver.kind === 'audio') {
                  sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' + 'a=rtpmap:0 PCMU/8000\r\n';
                } else if (transceiver.kind === 'video') {
                  sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' + 'a=rtpmap:120 VP8/90000\r\n';
                }

                sdp += 'c=IN IP4 0.0.0.0\r\n' + 'a=inactive\r\n' + 'a=mid:' + transceiver.mid + '\r\n';
                return;
              } // FIXME: look at direction.


              if (transceiver.stream) {
                var localTrack;

                if (transceiver.kind === 'audio') {
                  localTrack = transceiver.stream.getAudioTracks()[0];
                } else if (transceiver.kind === 'video') {
                  localTrack = transceiver.stream.getVideoTracks()[0];
                }

                if (localTrack) {
                  // add RTX
                  if (edgeVersion >= 15019 && transceiver.kind === 'video' && !transceiver.sendEncodingParameters[0].rtx) {
                    transceiver.sendEncodingParameters[0].rtx = {
                      ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
                    };
                  }
                }
              } // Calculate intersection of capabilities.


              var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
              var hasRtx = commonCapabilities.codecs.filter(function (c) {
                return c.name.toLowerCase() === 'rtx';
              }).length;

              if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
                delete transceiver.sendEncodingParameters[0].rtx;
              }

              sdp += writeMediaSection(transceiver, commonCapabilities, 'answer', transceiver.stream, pc._dtlsRole);

              if (transceiver.rtcpParameters && transceiver.rtcpParameters.reducedSize) {
                sdp += 'a=rtcp-rsize\r\n';
              }
            });
            var desc = new window.RTCSessionDescription({
              type: 'answer',
              sdp: sdp
            });
            return Promise.resolve(desc);
          };

          RTCPeerConnection.prototype.addIceCandidate = function (candidate) {
            var pc = this;
            var sections;

            if (candidate && !(candidate.sdpMLineIndex !== undefined || candidate.sdpMid)) {
              return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
            } // TODO: needs to go into ops queue.


            return new Promise(function (resolve, reject) {
              if (!pc.remoteDescription) {
                return reject(makeError('InvalidStateError', 'Can not add ICE candidate without a remote description'));
              } else if (!candidate || candidate.candidate === '') {
                for (var j = 0; j < pc.transceivers.length; j++) {
                  if (pc.transceivers[j].rejected) {
                    continue;
                  }

                  pc.transceivers[j].iceTransport.addRemoteCandidate({});
                  sections = SDPUtils.getMediaSections(pc.remoteDescription.sdp);
                  sections[j] += 'a=end-of-candidates\r\n';
                  pc.remoteDescription.sdp = SDPUtils.getDescription(pc.remoteDescription.sdp) + sections.join('');

                  if (pc.usingBundle) {
                    break;
                  }
                }
              } else {
                var sdpMLineIndex = candidate.sdpMLineIndex;

                if (candidate.sdpMid) {
                  for (var i = 0; i < pc.transceivers.length; i++) {
                    if (pc.transceivers[i].mid === candidate.sdpMid) {
                      sdpMLineIndex = i;
                      break;
                    }
                  }
                }

                var transceiver = pc.transceivers[sdpMLineIndex];

                if (transceiver) {
                  if (transceiver.rejected) {
                    return resolve();
                  }

                  var cand = Object.keys(candidate.candidate).length > 0 ? SDPUtils.parseCandidate(candidate.candidate) : {}; // Ignore Chrome's invalid candidates since Edge does not like them.

                  if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
                    return resolve();
                  } // Ignore RTCP candidates, we assume RTCP-MUX.


                  if (cand.component && cand.component !== 1) {
                    return resolve();
                  } // when using bundle, avoid adding candidates to the wrong
                  // ice transport. And avoid adding candidates added in the SDP.


                  if (sdpMLineIndex === 0 || sdpMLineIndex > 0 && transceiver.iceTransport !== pc.transceivers[0].iceTransport) {
                    if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
                      return reject(makeError('OperationError', 'Can not add ICE candidate'));
                    }
                  } // update the remoteDescription.


                  var candidateString = candidate.candidate.trim();

                  if (candidateString.indexOf('a=') === 0) {
                    candidateString = candidateString.substr(2);
                  }

                  sections = SDPUtils.getMediaSections(pc.remoteDescription.sdp);
                  sections[sdpMLineIndex] += 'a=' + (cand.type ? candidateString : 'end-of-candidates') + '\r\n';
                  pc.remoteDescription.sdp = SDPUtils.getDescription(pc.remoteDescription.sdp) + sections.join('');
                } else {
                  return reject(makeError('OperationError', 'Can not add ICE candidate'));
                }
              }

              resolve();
            });
          };

          RTCPeerConnection.prototype.getStats = function (selector) {
            if (selector && selector instanceof window.MediaStreamTrack) {
              var senderOrReceiver = null;
              this.transceivers.forEach(function (transceiver) {
                if (transceiver.rtpSender && transceiver.rtpSender.track === selector) {
                  senderOrReceiver = transceiver.rtpSender;
                } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track === selector) {
                  senderOrReceiver = transceiver.rtpReceiver;
                }
              });

              if (!senderOrReceiver) {
                throw makeError('InvalidAccessError', 'Invalid selector.');
              }

              return senderOrReceiver.getStats();
            }

            var promises = [];
            this.transceivers.forEach(function (transceiver) {
              ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport', 'dtlsTransport'].forEach(function (method) {
                if (transceiver[method]) {
                  promises.push(transceiver[method].getStats());
                }
              });
            });
            return Promise.all(promises).then(function (allStats) {
              var results = new Map();
              allStats.forEach(function (stats) {
                stats.forEach(function (stat) {
                  results.set(stat.id, stat);
                });
              });
              return results;
            });
          }; // fix low-level stat names and return Map instead of object.


          var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer', 'RTCIceTransport', 'RTCDtlsTransport'];
          ortcObjects.forEach(function (ortcObjectName) {
            var obj = window[ortcObjectName];

            if (obj && obj.prototype && obj.prototype.getStats) {
              var nativeGetstats = obj.prototype.getStats;

              obj.prototype.getStats = function () {
                return nativeGetstats.apply(this).then(function (nativeStats) {
                  var mapStats = new Map();
                  Object.keys(nativeStats).forEach(function (id) {
                    nativeStats[id].type = fixStatsType(nativeStats[id]);
                    mapStats.set(id, nativeStats[id]);
                  });
                  return mapStats;
                });
              };
            }
          }); // legacy callback shims. Should be moved to adapter.js some days.

          var methods = ['createOffer', 'createAnswer'];
          methods.forEach(function (method) {
            var nativeMethod = RTCPeerConnection.prototype[method];

            RTCPeerConnection.prototype[method] = function () {
              var args = arguments;

              if (typeof args[0] === 'function' || typeof args[1] === 'function') {
                // legacy
                return nativeMethod.apply(this, [arguments[2]]).then(function (description) {
                  if (typeof args[0] === 'function') {
                    args[0].apply(null, [description]);
                  }
                }, function (error) {
                  if (typeof args[1] === 'function') {
                    args[1].apply(null, [error]);
                  }
                });
              }

              return nativeMethod.apply(this, arguments);
            };
          });
          methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
          methods.forEach(function (method) {
            var nativeMethod = RTCPeerConnection.prototype[method];

            RTCPeerConnection.prototype[method] = function () {
              var args = arguments;

              if (typeof args[1] === 'function' || typeof args[2] === 'function') {
                // legacy
                return nativeMethod.apply(this, arguments).then(function () {
                  if (typeof args[1] === 'function') {
                    args[1].apply(null);
                  }
                }, function (error) {
                  if (typeof args[2] === 'function') {
                    args[2].apply(null, [error]);
                  }
                });
              }

              return nativeMethod.apply(this, arguments);
            };
          }); // getStats is special. It doesn't have a spec legacy method yet we support
          // getStats(something, cb) without error callbacks.

          ['getStats'].forEach(function (method) {
            var nativeMethod = RTCPeerConnection.prototype[method];

            RTCPeerConnection.prototype[method] = function () {
              var args = arguments;

              if (typeof args[1] === 'function') {
                return nativeMethod.apply(this, arguments).then(function () {
                  if (typeof args[1] === 'function') {
                    args[1].apply(null);
                  }
                });
              }

              return nativeMethod.apply(this, arguments);
            };
          });
          return RTCPeerConnection;
        };
      }, {
        "sdp": 2
      }],
      2: [function (require, module, exports) {
        /* eslint-env node */
        'use strict'; // SDP helpers.

        var SDPUtils = {}; // Generate an alphanumeric identifier for cname or mids.
        // TODO: use UUIDs instead? https://gist.github.com/jed/982883

        SDPUtils.generateIdentifier = function () {
          return Math.random().toString(36).substr(2, 10);
        }; // The RTCP CNAME used by all peerconnections from the same JS.


        SDPUtils.localCName = SDPUtils.generateIdentifier(); // Splits SDP into lines, dealing with both CRLF and LF.

        SDPUtils.splitLines = function (blob) {
          return blob.trim().split('\n').map(function (line) {
            return line.trim();
          });
        }; // Splits SDP into sessionpart and mediasections. Ensures CRLF.


        SDPUtils.splitSections = function (blob) {
          var parts = blob.split('\nm=');
          return parts.map(function (part, index) {
            return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
          });
        }; // returns the session description.


        SDPUtils.getDescription = function (blob) {
          var sections = SDPUtils.splitSections(blob);
          return sections && sections[0];
        }; // returns the individual media sections.


        SDPUtils.getMediaSections = function (blob) {
          var sections = SDPUtils.splitSections(blob);
          sections.shift();
          return sections;
        }; // Returns lines that start with a certain prefix.


        SDPUtils.matchPrefix = function (blob, prefix) {
          return SDPUtils.splitLines(blob).filter(function (line) {
            return line.indexOf(prefix) === 0;
          });
        }; // Parses an ICE candidate line. Sample input:
        // candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
        // rport 55996"


        SDPUtils.parseCandidate = function (line) {
          var parts; // Parse both variants.

          if (line.indexOf('a=candidate:') === 0) {
            parts = line.substring(12).split(' ');
          } else {
            parts = line.substring(10).split(' ');
          }

          var candidate = {
            foundation: parts[0],
            component: parseInt(parts[1], 10),
            protocol: parts[2].toLowerCase(),
            priority: parseInt(parts[3], 10),
            ip: parts[4],
            port: parseInt(parts[5], 10),
            // skip parts[6] == 'typ'
            type: parts[7]
          };

          for (var i = 8; i < parts.length; i += 2) {
            switch (parts[i]) {
              case 'raddr':
                candidate.relatedAddress = parts[i + 1];
                break;

              case 'rport':
                candidate.relatedPort = parseInt(parts[i + 1], 10);
                break;

              case 'tcptype':
                candidate.tcpType = parts[i + 1];
                break;

              case 'ufrag':
                candidate.ufrag = parts[i + 1]; // for backward compability.

                candidate.usernameFragment = parts[i + 1];
                break;

              default:
                // extension handling, in particular ufrag
                candidate[parts[i]] = parts[i + 1];
                break;
            }
          }

          return candidate;
        }; // Translates a candidate object into SDP candidate attribute.


        SDPUtils.writeCandidate = function (candidate) {
          var sdp = [];
          sdp.push(candidate.foundation);
          sdp.push(candidate.component);
          sdp.push(candidate.protocol.toUpperCase());
          sdp.push(candidate.priority);
          sdp.push(candidate.ip);
          sdp.push(candidate.port);
          var type = candidate.type;
          sdp.push('typ');
          sdp.push(type);

          if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
            sdp.push('raddr');
            sdp.push(candidate.relatedAddress); // was: relAddr

            sdp.push('rport');
            sdp.push(candidate.relatedPort); // was: relPort
          }

          if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
            sdp.push('tcptype');
            sdp.push(candidate.tcpType);
          }

          if (candidate.usernameFragment || candidate.ufrag) {
            sdp.push('ufrag');
            sdp.push(candidate.usernameFragment || candidate.ufrag);
          }

          return 'candidate:' + sdp.join(' ');
        }; // Parses an ice-options line, returns an array of option tags.
        // a=ice-options:foo bar


        SDPUtils.parseIceOptions = function (line) {
          return line.substr(14).split(' ');
        }; // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
        // a=rtpmap:111 opus/48000/2


        SDPUtils.parseRtpMap = function (line) {
          var parts = line.substr(9).split(' ');
          var parsed = {
            payloadType: parseInt(parts.shift(), 10) // was: id

          };
          parts = parts[0].split('/');
          parsed.name = parts[0];
          parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
          // was: channels

          parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
          return parsed;
        }; // Generate an a=rtpmap line from RTCRtpCodecCapability or
        // RTCRtpCodecParameters.


        SDPUtils.writeRtpMap = function (codec) {
          var pt = codec.payloadType;

          if (codec.preferredPayloadType !== undefined) {
            pt = codec.preferredPayloadType;
          }

          return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
        }; // Parses an a=extmap line (headerextension from RFC 5285). Sample input:
        // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
        // a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset


        SDPUtils.parseExtmap = function (line) {
          var parts = line.substr(9).split(' ');
          return {
            id: parseInt(parts[0], 10),
            direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
            uri: parts[1]
          };
        }; // Generates a=extmap line from RTCRtpHeaderExtensionParameters or
        // RTCRtpHeaderExtension.


        SDPUtils.writeExtmap = function (headerExtension) {
          return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== 'sendrecv' ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + '\r\n';
        }; // Parses an ftmp line, returns dictionary. Sample input:
        // a=fmtp:96 vbr=on;cng=on
        // Also deals with vbr=on; cng=on


        SDPUtils.parseFmtp = function (line) {
          var parsed = {};
          var kv;
          var parts = line.substr(line.indexOf(' ') + 1).split(';');

          for (var j = 0; j < parts.length; j++) {
            kv = parts[j].trim().split('=');
            parsed[kv[0].trim()] = kv[1];
          }

          return parsed;
        }; // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.


        SDPUtils.writeFmtp = function (codec) {
          var line = '';
          var pt = codec.payloadType;

          if (codec.preferredPayloadType !== undefined) {
            pt = codec.preferredPayloadType;
          }

          if (codec.parameters && Object.keys(codec.parameters).length) {
            var params = [];
            Object.keys(codec.parameters).forEach(function (param) {
              params.push(param + '=' + codec.parameters[param]);
            });
            line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
          }

          return line;
        }; // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
        // a=rtcp-fb:98 nack rpsi


        SDPUtils.parseRtcpFb = function (line) {
          var parts = line.substr(line.indexOf(' ') + 1).split(' ');
          return {
            type: parts.shift(),
            parameter: parts.join(' ')
          };
        }; // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.


        SDPUtils.writeRtcpFb = function (codec) {
          var lines = '';
          var pt = codec.payloadType;

          if (codec.preferredPayloadType !== undefined) {
            pt = codec.preferredPayloadType;
          }

          if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
            // FIXME: special handling for trr-int?
            codec.rtcpFeedback.forEach(function (fb) {
              lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
            });
          }

          return lines;
        }; // Parses an RFC 5576 ssrc media attribute. Sample input:
        // a=ssrc:3735928559 cname:something


        SDPUtils.parseSsrcMedia = function (line) {
          var sp = line.indexOf(' ');
          var parts = {
            ssrc: parseInt(line.substr(7, sp - 7), 10)
          };
          var colon = line.indexOf(':', sp);

          if (colon > -1) {
            parts.attribute = line.substr(sp + 1, colon - sp - 1);
            parts.value = line.substr(colon + 1);
          } else {
            parts.attribute = line.substr(sp + 1);
          }

          return parts;
        }; // Extracts the MID (RFC 5888) from a media section.
        // returns the MID or undefined if no mid line was found.


        SDPUtils.getMid = function (mediaSection) {
          var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];

          if (mid) {
            return mid.substr(6);
          }
        };

        SDPUtils.parseFingerprint = function (line) {
          var parts = line.substr(14).split(' ');
          return {
            algorithm: parts[0].toLowerCase(),
            // algorithm is case-sensitive in Edge.
            value: parts[1]
          };
        }; // Extracts DTLS parameters from SDP media section or sessionpart.
        // FIXME: for consistency with other functions this should only
        //   get the fingerprint line as input. See also getIceParameters.


        SDPUtils.getDtlsParameters = function (mediaSection, sessionpart) {
          var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:'); // Note: a=setup line is ignored since we use the 'auto' role.
          // Note2: 'algorithm' is not case sensitive except in Edge.

          return {
            role: 'auto',
            fingerprints: lines.map(SDPUtils.parseFingerprint)
          };
        }; // Serializes DTLS parameters to SDP.


        SDPUtils.writeDtlsParameters = function (params, setupType) {
          var sdp = 'a=setup:' + setupType + '\r\n';
          params.fingerprints.forEach(function (fp) {
            sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
          });
          return sdp;
        }; // Parses ICE information from SDP media section or sessionpart.
        // FIXME: for consistency with other functions this should only
        //   get the ice-ufrag and ice-pwd lines as input.


        SDPUtils.getIceParameters = function (mediaSection, sessionpart) {
          var lines = SDPUtils.splitLines(mediaSection); // Search in session part, too.

          lines = lines.concat(SDPUtils.splitLines(sessionpart));
          var iceParameters = {
            usernameFragment: lines.filter(function (line) {
              return line.indexOf('a=ice-ufrag:') === 0;
            })[0].substr(12),
            password: lines.filter(function (line) {
              return line.indexOf('a=ice-pwd:') === 0;
            })[0].substr(10)
          };
          return iceParameters;
        }; // Serializes ICE parameters to SDP.


        SDPUtils.writeIceParameters = function (params) {
          return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n';
        }; // Parses the SDP media section and returns RTCRtpParameters.


        SDPUtils.parseRtpParameters = function (mediaSection) {
          var description = {
            codecs: [],
            headerExtensions: [],
            fecMechanisms: [],
            rtcp: []
          };
          var lines = SDPUtils.splitLines(mediaSection);
          var mline = lines[0].split(' ');

          for (var i = 3; i < mline.length; i++) {
            // find all codecs from mline[3..]
            var pt = mline[i];
            var rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0];

            if (rtpmapline) {
              var codec = SDPUtils.parseRtpMap(rtpmapline);
              var fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' '); // Only the first a=fmtp:<pt> is considered.

              codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
              codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
              description.codecs.push(codec); // parse FEC mechanisms from rtpmap lines.

              switch (codec.name.toUpperCase()) {
                case 'RED':
                case 'ULPFEC':
                  description.fecMechanisms.push(codec.name.toUpperCase());
                  break;

                default:
                  // only RED and ULPFEC are recognized as FEC mechanisms.
                  break;
              }
            }
          }

          SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function (line) {
            description.headerExtensions.push(SDPUtils.parseExtmap(line));
          }); // FIXME: parse rtcp.

          return description;
        }; // Generates parts of the SDP media section describing the capabilities /
        // parameters.


        SDPUtils.writeRtpDescription = function (kind, caps) {
          var sdp = ''; // Build the mline.

          sdp += 'm=' + kind + ' ';
          sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.

          sdp += ' UDP/TLS/RTP/SAVPF ';
          sdp += caps.codecs.map(function (codec) {
            if (codec.preferredPayloadType !== undefined) {
              return codec.preferredPayloadType;
            }

            return codec.payloadType;
          }).join(' ') + '\r\n';
          sdp += 'c=IN IP4 0.0.0.0\r\n';
          sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n'; // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.

          caps.codecs.forEach(function (codec) {
            sdp += SDPUtils.writeRtpMap(codec);
            sdp += SDPUtils.writeFmtp(codec);
            sdp += SDPUtils.writeRtcpFb(codec);
          });
          var maxptime = 0;
          caps.codecs.forEach(function (codec) {
            if (codec.maxptime > maxptime) {
              maxptime = codec.maxptime;
            }
          });

          if (maxptime > 0) {
            sdp += 'a=maxptime:' + maxptime + '\r\n';
          }

          sdp += 'a=rtcp-mux\r\n';
          caps.headerExtensions.forEach(function (extension) {
            sdp += SDPUtils.writeExtmap(extension);
          }); // FIXME: write fecMechanisms.

          return sdp;
        }; // Parses the SDP media section and returns an array of
        // RTCRtpEncodingParameters.


        SDPUtils.parseRtpEncodingParameters = function (mediaSection) {
          var encodingParameters = [];
          var description = SDPUtils.parseRtpParameters(mediaSection);
          var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
          var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1; // filter a=ssrc:... cname:, ignore PlanB-msid

          var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
            return SDPUtils.parseSsrcMedia(line);
          }).filter(function (parts) {
            return parts.attribute === 'cname';
          });
          var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
          var secondarySsrc;
          var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map(function (line) {
            var parts = line.split(' ');
            parts.shift();
            return parts.map(function (part) {
              return parseInt(part, 10);
            });
          });

          if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
            secondarySsrc = flows[0][1];
          }

          description.codecs.forEach(function (codec) {
            if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
              var encParam = {
                ssrc: primarySsrc,
                codecPayloadType: parseInt(codec.parameters.apt, 10),
                rtx: {
                  ssrc: secondarySsrc
                }
              };
              encodingParameters.push(encParam);

              if (hasRed) {
                encParam = JSON.parse(JSON.stringify(encParam));
                encParam.fec = {
                  ssrc: secondarySsrc,
                  mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
                };
                encodingParameters.push(encParam);
              }
            }
          });

          if (encodingParameters.length === 0 && primarySsrc) {
            encodingParameters.push({
              ssrc: primarySsrc
            });
          } // we support both b=AS and b=TIAS but interpret AS as TIAS.


          var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');

          if (bandwidth.length) {
            if (bandwidth[0].indexOf('b=TIAS:') === 0) {
              bandwidth = parseInt(bandwidth[0].substr(7), 10);
            } else if (bandwidth[0].indexOf('b=AS:') === 0) {
              // use formula from JSEP to convert b=AS to TIAS value.
              bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95 - 50 * 40 * 8;
            } else {
              bandwidth = undefined;
            }

            encodingParameters.forEach(function (params) {
              params.maxBitrate = bandwidth;
            });
          }

          return encodingParameters;
        }; // parses http://draft.ortc.org/#rtcrtcpparameters*


        SDPUtils.parseRtcpParameters = function (mediaSection) {
          var rtcpParameters = {};
          var cname; // Gets the first SSRC. Note that with RTX there might be multiple
          // SSRCs.

          var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
            return SDPUtils.parseSsrcMedia(line);
          }).filter(function (obj) {
            return obj.attribute === 'cname';
          })[0];

          if (remoteSsrc) {
            rtcpParameters.cname = remoteSsrc.value;
            rtcpParameters.ssrc = remoteSsrc.ssrc;
          } // Edge uses the compound attribute instead of reducedSize
          // compound is !reducedSize


          var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
          rtcpParameters.reducedSize = rsize.length > 0;
          rtcpParameters.compound = rsize.length === 0; // parses the rtcp-mux attrіbute.
          // Note that Edge does not support unmuxed RTCP.

          var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
          rtcpParameters.mux = mux.length > 0;
          return rtcpParameters;
        }; // parses either a=msid: or a=ssrc:... msid lines and returns
        // the id of the MediaStream and MediaStreamTrack.


        SDPUtils.parseMsid = function (mediaSection) {
          var parts;
          var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');

          if (spec.length === 1) {
            parts = spec[0].substr(7).split(' ');
            return {
              stream: parts[0],
              track: parts[1]
            };
          }

          var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
            return SDPUtils.parseSsrcMedia(line);
          }).filter(function (parts) {
            return parts.attribute === 'msid';
          });

          if (planB.length > 0) {
            parts = planB[0].value.split(' ');
            return {
              stream: parts[0],
              track: parts[1]
            };
          }
        }; // Generate a session ID for SDP.
        // https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
        // recommends using a cryptographically random +ve 64-bit value
        // but right now this should be acceptable and within the right range


        SDPUtils.generateSessionId = function () {
          return Math.random().toString().substr(2, 21);
        }; // Write boilder plate for start of SDP
        // sessId argument is optional - if not supplied it will
        // be generated randomly
        // sessVersion is optional and defaults to 2


        SDPUtils.writeSessionBoilerplate = function (sessId, sessVer) {
          var sessionId;
          var version = sessVer !== undefined ? sessVer : 2;

          if (sessId) {
            sessionId = sessId;
          } else {
            sessionId = SDPUtils.generateSessionId();
          } // FIXME: sess-id should be an NTP timestamp.


          return 'v=0\r\n' + 'o=thisisadapterortc ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' + 's=-\r\n' + 't=0 0\r\n';
        };

        SDPUtils.writeMediaSection = function (transceiver, caps, type, stream) {
          var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps); // Map ICE parameters (ufrag, pwd) to SDP.

          sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters()); // Map DTLS parameters to SDP.

          sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : 'active');
          sdp += 'a=mid:' + transceiver.mid + '\r\n';

          if (transceiver.direction) {
            sdp += 'a=' + transceiver.direction + '\r\n';
          } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
            sdp += 'a=sendrecv\r\n';
          } else if (transceiver.rtpSender) {
            sdp += 'a=sendonly\r\n';
          } else if (transceiver.rtpReceiver) {
            sdp += 'a=recvonly\r\n';
          } else {
            sdp += 'a=inactive\r\n';
          }

          if (transceiver.rtpSender) {
            // spec.
            var msid = 'msid:' + stream.id + ' ' + transceiver.rtpSender.track.id + '\r\n';
            sdp += 'a=' + msid; // for Chrome.

            sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid;

            if (transceiver.sendEncodingParameters[0].rtx) {
              sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
              sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
            }
          } // FIXME: this should be written by writeRtpDescription.


          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';

          if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
            sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
          }

          return sdp;
        }; // Gets the direction from the mediaSection or the sessionpart.


        SDPUtils.getDirection = function (mediaSection, sessionpart) {
          // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
          var lines = SDPUtils.splitLines(mediaSection);

          for (var i = 0; i < lines.length; i++) {
            switch (lines[i]) {
              case 'a=sendrecv':
              case 'a=sendonly':
              case 'a=recvonly':
              case 'a=inactive':
                return lines[i].substr(2);

              default: // FIXME: What should happen here?

            }
          }

          if (sessionpart) {
            return SDPUtils.getDirection(sessionpart);
          }

          return 'sendrecv';
        };

        SDPUtils.getKind = function (mediaSection) {
          var lines = SDPUtils.splitLines(mediaSection);
          var mline = lines[0].split(' ');
          return mline[0].substr(2);
        };

        SDPUtils.isRejected = function (mediaSection) {
          return mediaSection.split(' ', 2)[1] === '0';
        };

        SDPUtils.parseMLine = function (mediaSection) {
          var lines = SDPUtils.splitLines(mediaSection);
          var parts = lines[0].substr(2).split(' ');
          return {
            kind: parts[0],
            port: parseInt(parts[1], 10),
            protocol: parts[2],
            fmt: parts.slice(3).join(' ')
          };
        };

        SDPUtils.parseOLine = function (mediaSection) {
          var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
          var parts = line.substr(2).split(' ');
          return {
            username: parts[0],
            sessionId: parts[1],
            sessionVersion: parseInt(parts[2], 10),
            netType: parts[3],
            addressType: parts[4],
            address: parts[5]
          };
        }; // Expose public methods.


        if (_typeof(module) === 'object') {
          module.exports = SDPUtils;
        }
      }, {}],
      3: [function (require, module, exports) {
        (function (global) {
          /*
           *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
           *
           *  Use of this source code is governed by a BSD-style license
           *  that can be found in the LICENSE file in the root of the source
           *  tree.
           */

          /* eslint-env node */
          'use strict';

          var adapterFactory = require('./adapter_factory.js');

          module.exports = adapterFactory({
            window: global.window
          });
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {
        "./adapter_factory.js": 4
      }],
      4: [function (require, module, exports) {
        /*
         *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */

        /* eslint-env node */
        'use strict';

        var utils = require('./utils'); // Shimming starts here.


        module.exports = function (dependencies, opts) {
          var window = dependencies && dependencies.window;
          var options = {
            shimChrome: true,
            shimFirefox: true,
            shimEdge: true,
            shimSafari: true
          };

          for (var key in opts) {
            if (hasOwnProperty.call(opts, key)) {
              options[key] = opts[key];
            }
          } // Utils.


          var logging = utils.log;
          var browserDetails = utils.detectBrowser(window); // Uncomment the line below if you want logging to occur, including logging
          // for the switch statement below. Can also be turned on in the browser via
          // adapter.disableLog(false), but then logging from the switch statement below
          // will not appear.
          // require('./utils').disableLog(false);
          // Browser shims.

          var chromeShim = require('./chrome/chrome_shim') || null;
          var edgeShim = require('./edge/edge_shim') || null;
          var firefoxShim = require('./firefox/firefox_shim') || null;
          var safariShim = require('./safari/safari_shim') || null;
          var commonShim = require('./common_shim') || null; // Export to the adapter global object visible in the browser.

          var adapter = {
            browserDetails: browserDetails,
            commonShim: commonShim,
            extractVersion: utils.extractVersion,
            disableLog: utils.disableLog,
            disableWarnings: utils.disableWarnings
          }; // Shim browser if found.

          switch (browserDetails.browser) {
            case 'chrome':
              if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
                logging('Chrome shim is not included in this adapter release.');
                return adapter;
              }

              logging('adapter.js shimming chrome.'); // Export to the adapter global object visible in the browser.

              adapter.browserShim = chromeShim;
              commonShim.shimCreateObjectURL(window);
              chromeShim.shimGetUserMedia(window);
              chromeShim.shimMediaStream(window);
              chromeShim.shimSourceObject(window);
              chromeShim.shimPeerConnection(window);
              chromeShim.shimOnTrack(window);
              chromeShim.shimAddTrackRemoveTrack(window);
              chromeShim.shimGetSendersWithDtmf(window);
              commonShim.shimRTCIceCandidate(window);
              commonShim.shimMaxMessageSize(window);
              commonShim.shimSendThrowTypeError(window);
              break;

            case 'firefox':
              if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
                logging('Firefox shim is not included in this adapter release.');
                return adapter;
              }

              logging('adapter.js shimming firefox.'); // Export to the adapter global object visible in the browser.

              adapter.browserShim = firefoxShim;
              commonShim.shimCreateObjectURL(window);
              firefoxShim.shimGetUserMedia(window);
              firefoxShim.shimSourceObject(window);
              firefoxShim.shimPeerConnection(window);
              firefoxShim.shimOnTrack(window);
              firefoxShim.shimRemoveStream(window);
              commonShim.shimRTCIceCandidate(window);
              commonShim.shimMaxMessageSize(window);
              commonShim.shimSendThrowTypeError(window);
              break;

            case 'edge':
              if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
                logging('MS edge shim is not included in this adapter release.');
                return adapter;
              }

              logging('adapter.js shimming edge.'); // Export to the adapter global object visible in the browser.

              adapter.browserShim = edgeShim;
              commonShim.shimCreateObjectURL(window);
              edgeShim.shimGetUserMedia(window);
              edgeShim.shimPeerConnection(window);
              edgeShim.shimReplaceTrack(window); // the edge shim implements the full RTCIceCandidate object.

              commonShim.shimMaxMessageSize(window);
              commonShim.shimSendThrowTypeError(window);
              break;

            case 'safari':
              if (!safariShim || !options.shimSafari) {
                logging('Safari shim is not included in this adapter release.');
                return adapter;
              }

              logging('adapter.js shimming safari.'); // Export to the adapter global object visible in the browser.

              adapter.browserShim = safariShim;
              commonShim.shimCreateObjectURL(window);
              safariShim.shimRTCIceServerUrls(window);
              safariShim.shimCallbacksAPI(window);
              safariShim.shimLocalStreamsAPI(window);
              safariShim.shimRemoteStreamsAPI(window);
              safariShim.shimTrackEventTransceiver(window);
              safariShim.shimGetUserMedia(window);
              safariShim.shimCreateOfferLegacy(window);
              commonShim.shimRTCIceCandidate(window);
              commonShim.shimMaxMessageSize(window);
              commonShim.shimSendThrowTypeError(window);
              break;

            default:
              logging('Unsupported browser!');
              break;
          }

          return adapter;
        };
      }, {
        "./chrome/chrome_shim": 5,
        "./common_shim": 7,
        "./edge/edge_shim": 8,
        "./firefox/firefox_shim": 10,
        "./safari/safari_shim": 12,
        "./utils": 13
      }],
      5: [function (require, module, exports) {
        /*
         *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */

        /* eslint-env node */
        'use strict';

        var utils = require('../utils.js');

        var logging = utils.log;
        module.exports = {
          shimGetUserMedia: require('./getusermedia'),
          shimMediaStream: function shimMediaStream(window) {
            window.MediaStream = window.MediaStream || window.webkitMediaStream;
          },
          shimOnTrack: function shimOnTrack(window) {
            if (_typeof(window) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
              Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
                get: function get() {
                  return this._ontrack;
                },
                set: function set(f) {
                  if (this._ontrack) {
                    this.removeEventListener('track', this._ontrack);
                  }

                  this.addEventListener('track', this._ontrack = f);
                }
              });
              var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;

              window.RTCPeerConnection.prototype.setRemoteDescription = function () {
                var pc = this;

                if (!pc._ontrackpoly) {
                  pc._ontrackpoly = function (e) {
                    // onaddstream does not fire when a track is added to an existing
                    // stream. But stream.onaddtrack is implemented so we use that.
                    e.stream.addEventListener('addtrack', function (te) {
                      var receiver;

                      if (window.RTCPeerConnection.prototype.getReceivers) {
                        receiver = pc.getReceivers().find(function (r) {
                          return r.track && r.track.id === te.track.id;
                        });
                      } else {
                        receiver = {
                          track: te.track
                        };
                      }

                      var event = new Event('track');
                      event.track = te.track;
                      event.receiver = receiver;
                      event.transceiver = {
                        receiver: receiver
                      };
                      event.streams = [e.stream];
                      pc.dispatchEvent(event);
                    });
                    e.stream.getTracks().forEach(function (track) {
                      var receiver;

                      if (window.RTCPeerConnection.prototype.getReceivers) {
                        receiver = pc.getReceivers().find(function (r) {
                          return r.track && r.track.id === track.id;
                        });
                      } else {
                        receiver = {
                          track: track
                        };
                      }

                      var event = new Event('track');
                      event.track = track;
                      event.receiver = receiver;
                      event.transceiver = {
                        receiver: receiver
                      };
                      event.streams = [e.stream];
                      pc.dispatchEvent(event);
                    });
                  };

                  pc.addEventListener('addstream', pc._ontrackpoly);
                }

                return origSetRemoteDescription.apply(pc, arguments);
              };
            } else if (!('RTCRtpTransceiver' in window)) {
              utils.wrapPeerConnectionEvent(window, 'track', function (e) {
                if (!e.transceiver) {
                  e.transceiver = {
                    receiver: e.receiver
                  };
                }

                return e;
              });
            }
          },
          shimGetSendersWithDtmf: function shimGetSendersWithDtmf(window) {
            // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
            if (_typeof(window) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
              var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
                return {
                  track: track,

                  get dtmf() {
                    if (this._dtmf === undefined) {
                      if (track.kind === 'audio') {
                        this._dtmf = pc.createDTMFSender(track);
                      } else {
                        this._dtmf = null;
                      }
                    }

                    return this._dtmf;
                  },

                  _pc: pc
                };
              }; // augment addTrack when getSenders is not available.


              if (!window.RTCPeerConnection.prototype.getSenders) {
                window.RTCPeerConnection.prototype.getSenders = function () {
                  this._senders = this._senders || [];
                  return this._senders.slice(); // return a copy of the internal state.
                };

                var origAddTrack = window.RTCPeerConnection.prototype.addTrack;

                window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
                  var pc = this;
                  var sender = origAddTrack.apply(pc, arguments);

                  if (!sender) {
                    sender = shimSenderWithDtmf(pc, track);

                    pc._senders.push(sender);
                  }

                  return sender;
                };

                var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;

                window.RTCPeerConnection.prototype.removeTrack = function (sender) {
                  var pc = this;
                  origRemoveTrack.apply(pc, arguments);

                  var idx = pc._senders.indexOf(sender);

                  if (idx !== -1) {
                    pc._senders.splice(idx, 1);
                  }
                };
              }

              var origAddStream = window.RTCPeerConnection.prototype.addStream;

              window.RTCPeerConnection.prototype.addStream = function (stream) {
                var pc = this;
                pc._senders = pc._senders || [];
                origAddStream.apply(pc, [stream]);
                stream.getTracks().forEach(function (track) {
                  pc._senders.push(shimSenderWithDtmf(pc, track));
                });
              };

              var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

              window.RTCPeerConnection.prototype.removeStream = function (stream) {
                var pc = this;
                pc._senders = pc._senders || [];
                origRemoveStream.apply(pc, [stream]);
                stream.getTracks().forEach(function (track) {
                  var sender = pc._senders.find(function (s) {
                    return s.track === track;
                  });

                  if (sender) {
                    pc._senders.splice(pc._senders.indexOf(sender), 1); // remove sender

                  }
                });
              };
            } else if (_typeof(window) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
              var origGetSenders = window.RTCPeerConnection.prototype.getSenders;

              window.RTCPeerConnection.prototype.getSenders = function () {
                var pc = this;
                var senders = origGetSenders.apply(pc, []);
                senders.forEach(function (sender) {
                  sender._pc = pc;
                });
                return senders;
              };

              Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
                get: function get() {
                  if (this._dtmf === undefined) {
                    if (this.track.kind === 'audio') {
                      this._dtmf = this._pc.createDTMFSender(this.track);
                    } else {
                      this._dtmf = null;
                    }
                  }

                  return this._dtmf;
                }
              });
            }
          },
          shimSourceObject: function shimSourceObject(window) {
            var URL = window && window.URL;

            if (_typeof(window) === 'object') {
              if (window.HTMLMediaElement && !('srcObject' in window.HTMLMediaElement.prototype)) {
                // Shim the srcObject property, once, when HTMLMediaElement is found.
                Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
                  get: function get() {
                    return this._srcObject;
                  },
                  set: function set(stream) {
                    var self = this; // Use _srcObject as a private property for this shim

                    this._srcObject = stream;

                    if (this.src) {
                      URL.revokeObjectURL(this.src);
                    }

                    if (!stream) {
                      this.src = '';
                      return undefined;
                    }

                    this.src = URL.createObjectURL(stream); // We need to recreate the blob url when a track is added or
                    // removed. Doing it manually since we want to avoid a recursion.

                    stream.addEventListener('addtrack', function () {
                      if (self.src) {
                        URL.revokeObjectURL(self.src);
                      }

                      self.src = URL.createObjectURL(stream);
                    });
                    stream.addEventListener('removetrack', function () {
                      if (self.src) {
                        URL.revokeObjectURL(self.src);
                      }

                      self.src = URL.createObjectURL(stream);
                    });
                  }
                });
              }
            }
          },
          shimAddTrackRemoveTrackWithNative: function shimAddTrackRemoveTrackWithNative(window) {
            // shim addTrack/removeTrack with native variants in order to make
            // the interactions with legacy getLocalStreams behave as in other browsers.
            // Keeps a mapping stream.id => [stream, rtpsenders...]
            window.RTCPeerConnection.prototype.getLocalStreams = function () {
              var pc = this;
              this._shimmedLocalStreams = this._shimmedLocalStreams || {};
              return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
                return pc._shimmedLocalStreams[streamId][0];
              });
            };

            var origAddTrack = window.RTCPeerConnection.prototype.addTrack;

            window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
              if (!stream) {
                return origAddTrack.apply(this, arguments);
              }

              this._shimmedLocalStreams = this._shimmedLocalStreams || {};
              var sender = origAddTrack.apply(this, arguments);

              if (!this._shimmedLocalStreams[stream.id]) {
                this._shimmedLocalStreams[stream.id] = [stream, sender];
              } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
                this._shimmedLocalStreams[stream.id].push(sender);
              }

              return sender;
            };

            var origAddStream = window.RTCPeerConnection.prototype.addStream;

            window.RTCPeerConnection.prototype.addStream = function (stream) {
              var pc = this;
              this._shimmedLocalStreams = this._shimmedLocalStreams || {};
              stream.getTracks().forEach(function (track) {
                var alreadyExists = pc.getSenders().find(function (s) {
                  return s.track === track;
                });

                if (alreadyExists) {
                  throw new DOMException('Track already exists.', 'InvalidAccessError');
                }
              });
              var existingSenders = pc.getSenders();
              origAddStream.apply(this, arguments);
              var newSenders = pc.getSenders().filter(function (newSender) {
                return existingSenders.indexOf(newSender) === -1;
              });
              this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
            };

            var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

            window.RTCPeerConnection.prototype.removeStream = function (stream) {
              this._shimmedLocalStreams = this._shimmedLocalStreams || {};
              delete this._shimmedLocalStreams[stream.id];
              return origRemoveStream.apply(this, arguments);
            };

            var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;

            window.RTCPeerConnection.prototype.removeTrack = function (sender) {
              var pc = this;
              this._shimmedLocalStreams = this._shimmedLocalStreams || {};

              if (sender) {
                Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
                  var idx = pc._shimmedLocalStreams[streamId].indexOf(sender);

                  if (idx !== -1) {
                    pc._shimmedLocalStreams[streamId].splice(idx, 1);
                  }

                  if (pc._shimmedLocalStreams[streamId].length === 1) {
                    delete pc._shimmedLocalStreams[streamId];
                  }
                });
              }

              return origRemoveTrack.apply(this, arguments);
            };
          },
          shimAddTrackRemoveTrack: function shimAddTrackRemoveTrack(window) {
            var browserDetails = utils.detectBrowser(window); // shim addTrack and removeTrack.

            if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
              return this.shimAddTrackRemoveTrackWithNative(window);
            } // also shim pc.getLocalStreams when addTrack is shimmed
            // to return the original streams.


            var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;

            window.RTCPeerConnection.prototype.getLocalStreams = function () {
              var pc = this;
              var nativeStreams = origGetLocalStreams.apply(this);
              pc._reverseStreams = pc._reverseStreams || {};
              return nativeStreams.map(function (stream) {
                return pc._reverseStreams[stream.id];
              });
            };

            var origAddStream = window.RTCPeerConnection.prototype.addStream;

            window.RTCPeerConnection.prototype.addStream = function (stream) {
              var pc = this;
              pc._streams = pc._streams || {};
              pc._reverseStreams = pc._reverseStreams || {};
              stream.getTracks().forEach(function (track) {
                var alreadyExists = pc.getSenders().find(function (s) {
                  return s.track === track;
                });

                if (alreadyExists) {
                  throw new DOMException('Track already exists.', 'InvalidAccessError');
                }
              }); // Add identity mapping for consistency with addTrack.
              // Unless this is being used with a stream from addTrack.

              if (!pc._reverseStreams[stream.id]) {
                var newStream = new window.MediaStream(stream.getTracks());
                pc._streams[stream.id] = newStream;
                pc._reverseStreams[newStream.id] = stream;
                stream = newStream;
              }

              origAddStream.apply(pc, [stream]);
            };

            var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

            window.RTCPeerConnection.prototype.removeStream = function (stream) {
              var pc = this;
              pc._streams = pc._streams || {};
              pc._reverseStreams = pc._reverseStreams || {};
              origRemoveStream.apply(pc, [pc._streams[stream.id] || stream]);
              delete pc._reverseStreams[pc._streams[stream.id] ? pc._streams[stream.id].id : stream.id];
              delete pc._streams[stream.id];
            };

            window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
              var pc = this;

              if (pc.signalingState === 'closed') {
                throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
              }

              var streams = [].slice.call(arguments, 1);

              if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
                return t === track;
              })) {
                // this is not fully correct but all we can manage without
                // [[associated MediaStreams]] internal slot.
                throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
              }

              var alreadyExists = pc.getSenders().find(function (s) {
                return s.track === track;
              });

              if (alreadyExists) {
                throw new DOMException('Track already exists.', 'InvalidAccessError');
              }

              pc._streams = pc._streams || {};
              pc._reverseStreams = pc._reverseStreams || {};
              var oldStream = pc._streams[stream.id];

              if (oldStream) {
                // this is using odd Chrome behaviour, use with caution:
                // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
                // Note: we rely on the high-level addTrack/dtmf shim to
                // create the sender with a dtmf sender.
                oldStream.addTrack(track); // Trigger ONN async.

                Promise.resolve().then(function () {
                  pc.dispatchEvent(new Event('negotiationneeded'));
                });
              } else {
                var newStream = new window.MediaStream([track]);
                pc._streams[stream.id] = newStream;
                pc._reverseStreams[newStream.id] = stream;
                pc.addStream(newStream);
              }

              return pc.getSenders().find(function (s) {
                return s.track === track;
              });
            }; // replace the internal stream id with the external one and
            // vice versa.


            function replaceInternalStreamId(pc, description) {
              var sdp = description.sdp;
              Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
                var externalStream = pc._reverseStreams[internalId];
                var internalStream = pc._streams[externalStream.id];
                sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
              });
              return new RTCSessionDescription({
                type: description.type,
                sdp: sdp
              });
            }

            function replaceExternalStreamId(pc, description) {
              var sdp = description.sdp;
              Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
                var externalStream = pc._reverseStreams[internalId];
                var internalStream = pc._streams[externalStream.id];
                sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
              });
              return new RTCSessionDescription({
                type: description.type,
                sdp: sdp
              });
            }

            ['createOffer', 'createAnswer'].forEach(function (method) {
              var nativeMethod = window.RTCPeerConnection.prototype[method];

              window.RTCPeerConnection.prototype[method] = function () {
                var pc = this;
                var args = arguments;
                var isLegacyCall = arguments.length && typeof arguments[0] === 'function';

                if (isLegacyCall) {
                  return nativeMethod.apply(pc, [function (description) {
                    var desc = replaceInternalStreamId(pc, description);
                    args[0].apply(null, [desc]);
                  }, function (err) {
                    if (args[1]) {
                      args[1].apply(null, err);
                    }
                  }, arguments[2]]);
                }

                return nativeMethod.apply(pc, arguments).then(function (description) {
                  return replaceInternalStreamId(pc, description);
                });
              };
            });
            var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;

            window.RTCPeerConnection.prototype.setLocalDescription = function () {
              var pc = this;

              if (!arguments.length || !arguments[0].type) {
                return origSetLocalDescription.apply(pc, arguments);
              }

              arguments[0] = replaceExternalStreamId(pc, arguments[0]);
              return origSetLocalDescription.apply(pc, arguments);
            }; // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier


            var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
            Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
              get: function get() {
                var pc = this;
                var description = origLocalDescription.get.apply(this);

                if (description.type === '') {
                  return description;
                }

                return replaceInternalStreamId(pc, description);
              }
            });

            window.RTCPeerConnection.prototype.removeTrack = function (sender) {
              var pc = this;

              if (pc.signalingState === 'closed') {
                throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
              } // We can not yet check for sender instanceof RTCRtpSender
              // since we shim RTPSender. So we check if sender._pc is set.


              if (!sender._pc) {
                throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
              }

              var isLocal = sender._pc === pc;

              if (!isLocal) {
                throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
              } // Search for the native stream the senders track belongs to.


              pc._streams = pc._streams || {};
              var stream;
              Object.keys(pc._streams).forEach(function (streamid) {
                var hasTrack = pc._streams[streamid].getTracks().find(function (track) {
                  return sender.track === track;
                });

                if (hasTrack) {
                  stream = pc._streams[streamid];
                }
              });

              if (stream) {
                if (stream.getTracks().length === 1) {
                  // if this is the last track of the stream, remove the stream. This
                  // takes care of any shimmed _senders.
                  pc.removeStream(pc._reverseStreams[stream.id]);
                } else {
                  // relying on the same odd chrome behaviour as above.
                  stream.removeTrack(sender.track);
                }

                pc.dispatchEvent(new Event('negotiationneeded'));
              }
            };
          },
          shimPeerConnection: function shimPeerConnection(window) {
            var browserDetails = utils.detectBrowser(window); // The RTCPeerConnection object.

            if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
              window.RTCPeerConnection = function (pcConfig, pcConstraints) {
                // Translate iceTransportPolicy to iceTransports,
                // see https://code.google.com/p/webrtc/issues/detail?id=4869
                // this was fixed in M56 along with unprefixing RTCPeerConnection.
                logging('PeerConnection');

                if (pcConfig && pcConfig.iceTransportPolicy) {
                  pcConfig.iceTransports = pcConfig.iceTransportPolicy;
                }

                return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
              };

              window.RTCPeerConnection.prototype = window.webkitRTCPeerConnection.prototype; // wrap static methods. Currently just generateCertificate.

              if (window.webkitRTCPeerConnection.generateCertificate) {
                Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
                  get: function get() {
                    return window.webkitRTCPeerConnection.generateCertificate;
                  }
                });
              }
            } else {
              // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
              var OrigPeerConnection = window.RTCPeerConnection;

              window.RTCPeerConnection = function (pcConfig, pcConstraints) {
                if (pcConfig && pcConfig.iceServers) {
                  var newIceServers = [];

                  for (var i = 0; i < pcConfig.iceServers.length; i++) {
                    var server = pcConfig.iceServers[i];

                    if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
                      utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                      server = JSON.parse(JSON.stringify(server));
                      server.urls = server.url;
                      newIceServers.push(server);
                    } else {
                      newIceServers.push(pcConfig.iceServers[i]);
                    }
                  }

                  pcConfig.iceServers = newIceServers;
                }

                return new OrigPeerConnection(pcConfig, pcConstraints);
              };

              window.RTCPeerConnection.prototype = OrigPeerConnection.prototype; // wrap static methods. Currently just generateCertificate.

              Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
                get: function get() {
                  return OrigPeerConnection.generateCertificate;
                }
              });
            }

            var origGetStats = window.RTCPeerConnection.prototype.getStats;

            window.RTCPeerConnection.prototype.getStats = function (selector, successCallback, errorCallback) {
              var pc = this;
              var args = arguments; // If selector is a function then we are in the old style stats so just
              // pass back the original getStats format to avoid breaking old users.

              if (arguments.length > 0 && typeof selector === 'function') {
                return origGetStats.apply(this, arguments);
              } // When spec-style getStats is supported, return those when called with
              // either no arguments or the selector argument is null.


              if (origGetStats.length === 0 && (arguments.length === 0 || typeof arguments[0] !== 'function')) {
                return origGetStats.apply(this, []);
              }

              var fixChromeStats_ = function fixChromeStats_(response) {
                var standardReport = {};
                var reports = response.result();
                reports.forEach(function (report) {
                  var standardStats = {
                    id: report.id,
                    timestamp: report.timestamp,
                    type: {
                      localcandidate: 'local-candidate',
                      remotecandidate: 'remote-candidate'
                    }[report.type] || report.type
                  };
                  report.names().forEach(function (name) {
                    standardStats[name] = report.stat(name);
                  });
                  standardReport[standardStats.id] = standardStats;
                });
                return standardReport;
              }; // shim getStats with maplike support


              var makeMapStats = function makeMapStats(stats) {
                return new Map(Object.keys(stats).map(function (key) {
                  return [key, stats[key]];
                }));
              };

              if (arguments.length >= 2) {
                var successCallbackWrapper_ = function successCallbackWrapper_(response) {
                  args[1](makeMapStats(fixChromeStats_(response)));
                };

                return origGetStats.apply(this, [successCallbackWrapper_, arguments[0]]);
              } // promise-support


              return new Promise(function (resolve, reject) {
                origGetStats.apply(pc, [function (response) {
                  resolve(makeMapStats(fixChromeStats_(response)));
                }, reject]);
              }).then(successCallback, errorCallback);
            }; // add promise support -- natively available in Chrome 51


            if (browserDetails.version < 51) {
              ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
                var nativeMethod = window.RTCPeerConnection.prototype[method];

                window.RTCPeerConnection.prototype[method] = function () {
                  var args = arguments;
                  var pc = this;
                  var promise = new Promise(function (resolve, reject) {
                    nativeMethod.apply(pc, [args[0], resolve, reject]);
                  });

                  if (args.length < 2) {
                    return promise;
                  }

                  return promise.then(function () {
                    args[1].apply(null, []);
                  }, function (err) {
                    if (args.length >= 3) {
                      args[2].apply(null, [err]);
                    }
                  });
                };
              });
            } // promise support for createOffer and createAnswer. Available (without
            // bugs) since M52: crbug/619289


            if (browserDetails.version < 52) {
              ['createOffer', 'createAnswer'].forEach(function (method) {
                var nativeMethod = window.RTCPeerConnection.prototype[method];

                window.RTCPeerConnection.prototype[method] = function () {
                  var pc = this;

                  if (arguments.length < 1 || arguments.length === 1 && _typeof(arguments[0]) === 'object') {
                    var opts = arguments.length === 1 ? arguments[0] : undefined;
                    return new Promise(function (resolve, reject) {
                      nativeMethod.apply(pc, [resolve, reject, opts]);
                    });
                  }

                  return nativeMethod.apply(this, arguments);
                };
              });
            } // shim implicit creation of RTCSessionDescription/RTCIceCandidate


            ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
              var nativeMethod = window.RTCPeerConnection.prototype[method];

              window.RTCPeerConnection.prototype[method] = function () {
                arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
              };
            }); // support for addIceCandidate(null or undefined)

            var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;

            window.RTCPeerConnection.prototype.addIceCandidate = function () {
              if (!arguments[0]) {
                if (arguments[1]) {
                  arguments[1].apply(null);
                }

                return Promise.resolve();
              }

              return nativeAddIceCandidate.apply(this, arguments);
            };
          }
        };
      }, {
        "../utils.js": 13,
        "./getusermedia": 6
      }],
      6: [function (require, module, exports) {
        /*
         *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */

        /* eslint-env node */
        'use strict';

        var utils = require('../utils.js');

        var logging = utils.log; // Expose public methods.

        module.exports = function (window) {
          var browserDetails = utils.detectBrowser(window);
          var navigator = window && window.navigator;

          var constraintsToChrome_ = function constraintsToChrome_(c) {
            if (_typeof(c) !== 'object' || c.mandatory || c.optional) {
              return c;
            }

            var cc = {};
            Object.keys(c).forEach(function (key) {
              if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
                return;
              }

              var r = _typeof(c[key]) === 'object' ? c[key] : {
                ideal: c[key]
              };

              if (r.exact !== undefined && typeof r.exact === 'number') {
                r.min = r.max = r.exact;
              }

              var oldname_ = function oldname_(prefix, name) {
                if (prefix) {
                  return prefix + name.charAt(0).toUpperCase() + name.slice(1);
                }

                return name === 'deviceId' ? 'sourceId' : name;
              };

              if (r.ideal !== undefined) {
                cc.optional = cc.optional || [];
                var oc = {};

                if (typeof r.ideal === 'number') {
                  oc[oldname_('min', key)] = r.ideal;
                  cc.optional.push(oc);
                  oc = {};
                  oc[oldname_('max', key)] = r.ideal;
                  cc.optional.push(oc);
                } else {
                  oc[oldname_('', key)] = r.ideal;
                  cc.optional.push(oc);
                }
              }

              if (r.exact !== undefined && typeof r.exact !== 'number') {
                cc.mandatory = cc.mandatory || {};
                cc.mandatory[oldname_('', key)] = r.exact;
              } else {
                ['min', 'max'].forEach(function (mix) {
                  if (r[mix] !== undefined) {
                    cc.mandatory = cc.mandatory || {};
                    cc.mandatory[oldname_(mix, key)] = r[mix];
                  }
                });
              }
            });

            if (c.advanced) {
              cc.optional = (cc.optional || []).concat(c.advanced);
            }

            return cc;
          };

          var shimConstraints_ = function shimConstraints_(constraints, func) {
            if (browserDetails.version >= 61) {
              return func(constraints);
            }

            constraints = JSON.parse(JSON.stringify(constraints));

            if (constraints && _typeof(constraints.audio) === 'object') {
              var remap = function remap(obj, a, b) {
                if (a in obj && !(b in obj)) {
                  obj[b] = obj[a];
                  delete obj[a];
                }
              };

              constraints = JSON.parse(JSON.stringify(constraints));
              remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
              remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
              constraints.audio = constraintsToChrome_(constraints.audio);
            }

            if (constraints && _typeof(constraints.video) === 'object') {
              // Shim facingMode for mobile & surface pro.
              var face = constraints.video.facingMode;
              face = face && (_typeof(face) === 'object' ? face : {
                ideal: face
              });
              var getSupportedFacingModeLies = browserDetails.version < 66;

              if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
                delete constraints.video.facingMode;
                var matches;

                if (face.exact === 'environment' || face.ideal === 'environment') {
                  matches = ['back', 'rear'];
                } else if (face.exact === 'user' || face.ideal === 'user') {
                  matches = ['front'];
                }

                if (matches) {
                  // Look for matches in label, or use last cam for back (typical).
                  return navigator.mediaDevices.enumerateDevices().then(function (devices) {
                    devices = devices.filter(function (d) {
                      return d.kind === 'videoinput';
                    });
                    var dev = devices.find(function (d) {
                      return matches.some(function (match) {
                        return d.label.toLowerCase().indexOf(match) !== -1;
                      });
                    });

                    if (!dev && devices.length && matches.indexOf('back') !== -1) {
                      dev = devices[devices.length - 1]; // more likely the back cam
                    }

                    if (dev) {
                      constraints.video.deviceId = face.exact ? {
                        exact: dev.deviceId
                      } : {
                        ideal: dev.deviceId
                      };
                    }

                    constraints.video = constraintsToChrome_(constraints.video);
                    logging('chrome: ' + JSON.stringify(constraints));
                    return func(constraints);
                  });
                }
              }

              constraints.video = constraintsToChrome_(constraints.video);
            }

            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          };

          var shimError_ = function shimError_(e) {
            return {
              name: {
                PermissionDeniedError: 'NotAllowedError',
                PermissionDismissedError: 'NotAllowedError',
                InvalidStateError: 'NotAllowedError',
                DevicesNotFoundError: 'NotFoundError',
                ConstraintNotSatisfiedError: 'OverconstrainedError',
                TrackStartError: 'NotReadableError',
                MediaDeviceFailedDueToShutdown: 'NotAllowedError',
                MediaDeviceKillSwitchOn: 'NotAllowedError',
                TabCaptureError: 'AbortError',
                ScreenCaptureError: 'AbortError',
                DeviceCaptureError: 'AbortError'
              }[e.name] || e.name,
              message: e.message,
              constraint: e.constraintName,
              toString: function toString() {
                return this.name + (this.message && ': ') + this.message;
              }
            };
          };

          var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
            shimConstraints_(constraints, function (c) {
              navigator.webkitGetUserMedia(c, onSuccess, function (e) {
                if (onError) {
                  onError(shimError_(e));
                }
              });
            });
          };

          navigator.getUserMedia = getUserMedia_; // Returns the result of getUserMedia as a Promise.

          var getUserMediaPromise_ = function getUserMediaPromise_(constraints) {
            return new Promise(function (resolve, reject) {
              navigator.getUserMedia(constraints, resolve, reject);
            });
          };

          if (!navigator.mediaDevices) {
            navigator.mediaDevices = {
              getUserMedia: getUserMediaPromise_,
              enumerateDevices: function enumerateDevices() {
                return new Promise(function (resolve) {
                  var kinds = {
                    audio: 'audioinput',
                    video: 'videoinput'
                  };
                  return window.MediaStreamTrack.getSources(function (devices) {
                    resolve(devices.map(function (device) {
                      return {
                        label: device.label,
                        kind: kinds[device.kind],
                        deviceId: device.id,
                        groupId: ''
                      };
                    }));
                  });
                });
              },
              getSupportedConstraints: function getSupportedConstraints() {
                return {
                  deviceId: true,
                  echoCancellation: true,
                  facingMode: true,
                  frameRate: true,
                  height: true,
                  width: true
                };
              }
            };
          } // A shim for getUserMedia method on the mediaDevices object.
          // TODO(KaptenJansson) remove once implemented in Chrome stable.


          if (!navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia = function (constraints) {
              return getUserMediaPromise_(constraints);
            };
          } else {
            // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
            // function which returns a Promise, it does not accept spec-style
            // constraints.
            var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

            navigator.mediaDevices.getUserMedia = function (cs) {
              return shimConstraints_(cs, function (c) {
                return origGetUserMedia(c).then(function (stream) {
                  if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                    stream.getTracks().forEach(function (track) {
                      track.stop();
                    });
                    throw new DOMException('', 'NotFoundError');
                  }

                  return stream;
                }, function (e) {
                  return Promise.reject(shimError_(e));
                });
              });
            };
          } // Dummy devicechange event methods.
          // TODO(KaptenJansson) remove once implemented in Chrome stable.


          if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
            navigator.mediaDevices.addEventListener = function () {
              logging('Dummy mediaDevices.addEventListener called.');
            };
          }

          if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
            navigator.mediaDevices.removeEventListener = function () {
              logging('Dummy mediaDevices.removeEventListener called.');
            };
          }
        };
      }, {
        "../utils.js": 13
      }],
      7: [function (require, module, exports) {
        /*
         *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */

        /* eslint-env node */
        'use strict';

        var SDPUtils = require('sdp');

        var utils = require('./utils');

        module.exports = {
          shimRTCIceCandidate: function shimRTCIceCandidate(window) {
            // foundation is arbitrarily chosen as an indicator for full support for
            // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
            if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
              return;
            }

            var NativeRTCIceCandidate = window.RTCIceCandidate;

            window.RTCIceCandidate = function (args) {
              // Remove the a= which shouldn't be part of the candidate string.
              if (_typeof(args) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
                args = JSON.parse(JSON.stringify(args));
                args.candidate = args.candidate.substr(2);
              }

              if (args.candidate && args.candidate.length) {
                // Augment the native candidate with the parsed fields.
                var nativeCandidate = new NativeRTCIceCandidate(args);
                var parsedCandidate = SDPUtils.parseCandidate(args.candidate);
                var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate); // Add a serializer that does not serialize the extra attributes.

                augmentedCandidate.toJSON = function () {
                  return {
                    candidate: augmentedCandidate.candidate,
                    sdpMid: augmentedCandidate.sdpMid,
                    sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
                    usernameFragment: augmentedCandidate.usernameFragment
                  };
                };

                return augmentedCandidate;
              }

              return new NativeRTCIceCandidate(args);
            };

            window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype; // Hook up the augmented candidate in onicecandidate and
            // addEventListener('icecandidate', ...)

            utils.wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
              if (e.candidate) {
                Object.defineProperty(e, 'candidate', {
                  value: new window.RTCIceCandidate(e.candidate),
                  writable: 'false'
                });
              }

              return e;
            });
          },
          // shimCreateObjectURL must be called before shimSourceObject to avoid loop.
          shimCreateObjectURL: function shimCreateObjectURL(window) {
            var URL = window && window.URL;

            if (!(_typeof(window) === 'object' && window.HTMLMediaElement && 'srcObject' in window.HTMLMediaElement.prototype && URL.createObjectURL && URL.revokeObjectURL)) {
              // Only shim CreateObjectURL using srcObject if srcObject exists.
              return undefined;
            }

            var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
            var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
            var streams = new Map(),
                newId = 0;

            URL.createObjectURL = function (stream) {
              if ('getTracks' in stream) {
                var url = 'polyblob:' + ++newId;
                streams.set(url, stream);
                utils.deprecated('URL.createObjectURL(stream)', 'elem.srcObject = stream');
                return url;
              }

              return nativeCreateObjectURL(stream);
            };

            URL.revokeObjectURL = function (url) {
              nativeRevokeObjectURL(url);
              streams["delete"](url);
            };

            var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype, 'src');
            Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
              get: function get() {
                return dsc.get.apply(this);
              },
              set: function set(url) {
                this.srcObject = streams.get(url) || null;
                return dsc.set.apply(this, [url]);
              }
            });
            var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;

            window.HTMLMediaElement.prototype.setAttribute = function () {
              if (arguments.length === 2 && ('' + arguments[0]).toLowerCase() === 'src') {
                this.srcObject = streams.get(arguments[1]) || null;
              }

              return nativeSetAttribute.apply(this, arguments);
            };
          },
          shimMaxMessageSize: function shimMaxMessageSize(window) {
            if (window.RTCSctpTransport || !window.RTCPeerConnection) {
              return;
            }

            var browserDetails = utils.detectBrowser(window);

            if (!('sctp' in window.RTCPeerConnection.prototype)) {
              Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
                get: function get() {
                  return typeof this._sctp === 'undefined' ? null : this._sctp;
                }
              });
            }

            var sctpInDescription = function sctpInDescription(description) {
              var sections = SDPUtils.splitSections(description.sdp);
              sections.shift();
              return sections.some(function (mediaSection) {
                var mLine = SDPUtils.parseMLine(mediaSection);
                return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
              });
            };

            var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
              // TODO: Is there a better solution for detecting Firefox?
              var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);

              if (match === null || match.length < 2) {
                return -1;
              }

              var version = parseInt(match[1], 10); // Test for NaN (yes, this is ugly)

              return version !== version ? -1 : version;
            };

            var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
              // Every implementation we know can send at least 64 KiB.
              // Note: Although Chrome is technically able to send up to 256 KiB, the
              //       data does not reach the other peer reliably.
              //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
              var canSendMaxMessageSize = 65536;

              if (browserDetails.browser === 'firefox') {
                if (browserDetails.version < 57) {
                  if (remoteIsFirefox === -1) {
                    // FF < 57 will send in 16 KiB chunks using the deprecated PPID
                    // fragmentation.
                    canSendMaxMessageSize = 16384;
                  } else {
                    // However, other FF (and RAWRTC) can reassemble PPID-fragmented
                    // messages. Thus, supporting ~2 GiB when sending.
                    canSendMaxMessageSize = 2147483637;
                  }
                } else {
                  // Currently, all FF >= 57 will reset the remote maximum message size
                  // to the default value when a data channel is created at a later
                  // stage. :(
                  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
                  canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
                }
              }

              return canSendMaxMessageSize;
            };

            var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
              // Note: 65536 bytes is the default value from the SDP spec. Also,
              //       every implementation we know supports receiving 65536 bytes.
              var maxMessageSize = 65536; // FF 57 has a slightly incorrect default remote max message size, so
              // we need to adjust it here to avoid a failure when sending.
              // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697

              if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
                maxMessageSize = 65535;
              }

              var match = SDPUtils.matchPrefix(description.sdp, 'a=max-message-size:');

              if (match.length > 0) {
                maxMessageSize = parseInt(match[0].substr(19), 10);
              } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
                // If the maximum message size is not present in the remote SDP and
                // both local and remote are Firefox, the remote peer can receive
                // ~2 GiB.
                maxMessageSize = 2147483637;
              }

              return maxMessageSize;
            };

            var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;

            window.RTCPeerConnection.prototype.setRemoteDescription = function () {
              var pc = this;
              pc._sctp = null;

              if (sctpInDescription(arguments[0])) {
                // Check if the remote is FF.
                var isFirefox = getRemoteFirefoxVersion(arguments[0]); // Get the maximum message size the local peer is capable of sending

                var canSendMMS = getCanSendMaxMessageSize(isFirefox); // Get the maximum message size of the remote peer.

                var remoteMMS = getMaxMessageSize(arguments[0], isFirefox); // Determine final maximum message size

                var maxMessageSize;

                if (canSendMMS === 0 && remoteMMS === 0) {
                  maxMessageSize = Number.POSITIVE_INFINITY;
                } else if (canSendMMS === 0 || remoteMMS === 0) {
                  maxMessageSize = Math.max(canSendMMS, remoteMMS);
                } else {
                  maxMessageSize = Math.min(canSendMMS, remoteMMS);
                } // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
                // attribute.


                var sctp = {};
                Object.defineProperty(sctp, 'maxMessageSize', {
                  get: function get() {
                    return maxMessageSize;
                  }
                });
                pc._sctp = sctp;
              }

              return origSetRemoteDescription.apply(pc, arguments);
            };
          },
          shimSendThrowTypeError: function shimSendThrowTypeError(window) {
            if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
              return;
            } // Note: Although Firefox >= 57 has a native implementation, the maximum
            //       message size can be reset for all data channels at a later stage.
            //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831


            var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;

            window.RTCPeerConnection.prototype.createDataChannel = function () {
              var pc = this;
              var dataChannel = origCreateDataChannel.apply(pc, arguments);
              var origDataChannelSend = dataChannel.send; // Patch 'send' method

              dataChannel.send = function () {
                var dc = this;
                var data = arguments[0];
                var length = data.length || data.size || data.byteLength;

                if (length > pc.sctp.maxMessageSize) {
                  throw new DOMException('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)', 'TypeError');
                }

                return origDataChannelSend.apply(dc, arguments);
              };

              return dataChannel;
            };
          }
        };
      }, {
        "./utils": 13,
        "sdp": 2
      }],
      8: [function (require, module, exports) {
        /*
         *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */

        /* eslint-env node */
        'use strict';

        var utils = require('../utils');

        var shimRTCPeerConnection = require('rtcpeerconnection-shim');

        module.exports = {
          shimGetUserMedia: require('./getusermedia'),
          shimPeerConnection: function shimPeerConnection(window) {
            var browserDetails = utils.detectBrowser(window);

            if (window.RTCIceGatherer) {
              if (!window.RTCIceCandidate) {
                window.RTCIceCandidate = function (args) {
                  return args;
                };
              }

              if (!window.RTCSessionDescription) {
                window.RTCSessionDescription = function (args) {
                  return args;
                };
              } // this adds an additional event listener to MediaStrackTrack that signals
              // when a tracks enabled property was changed. Workaround for a bug in
              // addStream, see below. No longer required in 15025+


              if (browserDetails.version < 15025) {
                var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
                Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
                  set: function set(value) {
                    origMSTEnabled.set.call(this, value);
                    var ev = new Event('enabled');
                    ev.enabled = value;
                    this.dispatchEvent(ev);
                  }
                });
              }
            } // ORTC defines the DTMF sender a bit different.
            // https://github.com/w3c/ortc/issues/714


            if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
              Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
                get: function get() {
                  if (this._dtmf === undefined) {
                    if (this.track.kind === 'audio') {
                      this._dtmf = new window.RTCDtmfSender(this);
                    } else if (this.track.kind === 'video') {
                      this._dtmf = null;
                    }
                  }

                  return this._dtmf;
                }
              });
            } // Edge currently only implements the RTCDtmfSender, not the
            // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*


            if (window.RTCDtmfSender && !window.RTCDTMFSender) {
              window.RTCDTMFSender = window.RTCDtmfSender;
            }

            window.RTCPeerConnection = shimRTCPeerConnection(window, browserDetails.version);
          },
          shimReplaceTrack: function shimReplaceTrack(window) {
            // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
            if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
              window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
            }
          }
        };
      }, {
        "../utils": 13,
        "./getusermedia": 9,
        "rtcpeerconnection-shim": 1
      }],
      9: [function (require, module, exports) {
        /*
         *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */

        /* eslint-env node */
        'use strict'; // Expose public methods.

        module.exports = function (window) {
          var navigator = window && window.navigator;

          var shimError_ = function shimError_(e) {
            return {
              name: {
                PermissionDeniedError: 'NotAllowedError'
              }[e.name] || e.name,
              message: e.message,
              constraint: e.constraint,
              toString: function toString() {
                return this.name;
              }
            };
          }; // getUserMedia error shim.


          var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

          navigator.mediaDevices.getUserMedia = function (c) {
            return origGetUserMedia(c)["catch"](function (e) {
              return Promise.reject(shimError_(e));
            });
          };
        };
      }, {}],
      10: [function (require, module, exports) {
        /*
         *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */

        /* eslint-env node */
        'use strict';

        var utils = require('../utils');

        module.exports = {
          shimGetUserMedia: require('./getusermedia'),
          shimOnTrack: function shimOnTrack(window) {
            if (_typeof(window) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
              Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
                get: function get() {
                  return this._ontrack;
                },
                set: function set(f) {
                  if (this._ontrack) {
                    this.removeEventListener('track', this._ontrack);
                    this.removeEventListener('addstream', this._ontrackpoly);
                  }

                  this.addEventListener('track', this._ontrack = f);
                  this.addEventListener('addstream', this._ontrackpoly = function (e) {
                    e.stream.getTracks().forEach(function (track) {
                      var event = new Event('track');
                      event.track = track;
                      event.receiver = {
                        track: track
                      };
                      event.transceiver = {
                        receiver: event.receiver
                      };
                      event.streams = [e.stream];
                      this.dispatchEvent(event);
                    }.bind(this));
                  }.bind(this));
                }
              });
            }

            if (_typeof(window) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
              Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
                get: function get() {
                  return {
                    receiver: this.receiver
                  };
                }
              });
            }
          },
          shimSourceObject: function shimSourceObject(window) {
            // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
            if (_typeof(window) === 'object') {
              if (window.HTMLMediaElement && !('srcObject' in window.HTMLMediaElement.prototype)) {
                // Shim the srcObject property, once, when HTMLMediaElement is found.
                Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
                  get: function get() {
                    return this.mozSrcObject;
                  },
                  set: function set(stream) {
                    this.mozSrcObject = stream;
                  }
                });
              }
            }
          },
          shimPeerConnection: function shimPeerConnection(window) {
            var browserDetails = utils.detectBrowser(window);

            if (_typeof(window) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
              return; // probably media.peerconnection.enabled=false in about:config
            } // The RTCPeerConnection object.


            if (!window.RTCPeerConnection) {
              window.RTCPeerConnection = function (pcConfig, pcConstraints) {
                if (browserDetails.version < 38) {
                  // .urls is not supported in FF < 38.
                  // create RTCIceServers with a single url.
                  if (pcConfig && pcConfig.iceServers) {
                    var newIceServers = [];

                    for (var i = 0; i < pcConfig.iceServers.length; i++) {
                      var server = pcConfig.iceServers[i];

                      if (server.hasOwnProperty('urls')) {
                        for (var j = 0; j < server.urls.length; j++) {
                          var newServer = {
                            url: server.urls[j]
                          };

                          if (server.urls[j].indexOf('turn') === 0) {
                            newServer.username = server.username;
                            newServer.credential = server.credential;
                          }

                          newIceServers.push(newServer);
                        }
                      } else {
                        newIceServers.push(pcConfig.iceServers[i]);
                      }
                    }

                    pcConfig.iceServers = newIceServers;
                  }
                }

                return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
              };

              window.RTCPeerConnection.prototype = window.mozRTCPeerConnection.prototype; // wrap static methods. Currently just generateCertificate.

              if (window.mozRTCPeerConnection.generateCertificate) {
                Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
                  get: function get() {
                    return window.mozRTCPeerConnection.generateCertificate;
                  }
                });
              }

              window.RTCSessionDescription = window.mozRTCSessionDescription;
              window.RTCIceCandidate = window.mozRTCIceCandidate;
            } // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.


            ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
              var nativeMethod = window.RTCPeerConnection.prototype[method];

              window.RTCPeerConnection.prototype[method] = function () {
                arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                return nativeMethod.apply(this, arguments);
              };
            }); // support for addIceCandidate(null or undefined)

            var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;

            window.RTCPeerConnection.prototype.addIceCandidate = function () {
              if (!arguments[0]) {
                if (arguments[1]) {
                  arguments[1].apply(null);
                }

                return Promise.resolve();
              }

              return nativeAddIceCandidate.apply(this, arguments);
            }; // shim getStats with maplike support


            var makeMapStats = function makeMapStats(stats) {
              var map = new Map();
              Object.keys(stats).forEach(function (key) {
                map.set(key, stats[key]);
                map[key] = stats[key];
              });
              return map;
            };

            var modernStatsTypes = {
              inboundrtp: 'inbound-rtp',
              outboundrtp: 'outbound-rtp',
              candidatepair: 'candidate-pair',
              localcandidate: 'local-candidate',
              remotecandidate: 'remote-candidate'
            };
            var nativeGetStats = window.RTCPeerConnection.prototype.getStats;

            window.RTCPeerConnection.prototype.getStats = function (selector, onSucc, onErr) {
              return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
                if (browserDetails.version < 48) {
                  stats = makeMapStats(stats);
                }

                if (browserDetails.version < 53 && !onSucc) {
                  // Shim only promise getStats with spec-hyphens in type names
                  // Leave callback version alone; misc old uses of forEach before Map
                  try {
                    stats.forEach(function (stat) {
                      stat.type = modernStatsTypes[stat.type] || stat.type;
                    });
                  } catch (e) {
                    if (e.name !== 'TypeError') {
                      throw e;
                    } // Avoid TypeError: "type" is read-only, in old versions. 34-43ish


                    stats.forEach(function (stat, i) {
                      stats.set(i, Object.assign({}, stat, {
                        type: modernStatsTypes[stat.type] || stat.type
                      }));
                    });
                  }
                }

                return stats;
              }).then(onSucc, onErr);
            };
          },
          shimRemoveStream: function shimRemoveStream(window) {
            if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
              return;
            }

            window.RTCPeerConnection.prototype.removeStream = function (stream) {
              var pc = this;
              utils.deprecated('removeStream', 'removeTrack');
              this.getSenders().forEach(function (sender) {
                if (sender.track && stream.getTracks().indexOf(sender.track) !== -1) {
                  pc.removeTrack(sender);
                }
              });
            };
          }
        };
      }, {
        "../utils": 13,
        "./getusermedia": 11
      }],
      11: [function (require, module, exports) {
        /*
         *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */

        /* eslint-env node */
        'use strict';

        var utils = require('../utils');

        var logging = utils.log; // Expose public methods.

        module.exports = function (window) {
          var browserDetails = utils.detectBrowser(window);
          var navigator = window && window.navigator;
          var MediaStreamTrack = window && window.MediaStreamTrack;

          var shimError_ = function shimError_(e) {
            return {
              name: {
                InternalError: 'NotReadableError',
                NotSupportedError: 'TypeError',
                PermissionDeniedError: 'NotAllowedError',
                SecurityError: 'NotAllowedError'
              }[e.name] || e.name,
              message: {
                'The operation is insecure.': 'The request is not allowed by the ' + 'user agent or the platform in the current context.'
              }[e.message] || e.message,
              constraint: e.constraint,
              toString: function toString() {
                return this.name + (this.message && ': ') + this.message;
              }
            };
          }; // getUserMedia constraints shim.


          var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
            var constraintsToFF37_ = function constraintsToFF37_(c) {
              if (_typeof(c) !== 'object' || c.require) {
                return c;
              }

              var require = [];
              Object.keys(c).forEach(function (key) {
                if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
                  return;
                }

                var r = c[key] = _typeof(c[key]) === 'object' ? c[key] : {
                  ideal: c[key]
                };

                if (r.min !== undefined || r.max !== undefined || r.exact !== undefined) {
                  require.push(key);
                }

                if (r.exact !== undefined) {
                  if (typeof r.exact === 'number') {
                    r.min = r.max = r.exact;
                  } else {
                    c[key] = r.exact;
                  }

                  delete r.exact;
                }

                if (r.ideal !== undefined) {
                  c.advanced = c.advanced || [];
                  var oc = {};

                  if (typeof r.ideal === 'number') {
                    oc[key] = {
                      min: r.ideal,
                      max: r.ideal
                    };
                  } else {
                    oc[key] = r.ideal;
                  }

                  c.advanced.push(oc);
                  delete r.ideal;

                  if (!Object.keys(r).length) {
                    delete c[key];
                  }
                }
              });

              if (require.length) {
                c.require = require;
              }

              return c;
            };

            constraints = JSON.parse(JSON.stringify(constraints));

            if (browserDetails.version < 38) {
              logging('spec: ' + JSON.stringify(constraints));

              if (constraints.audio) {
                constraints.audio = constraintsToFF37_(constraints.audio);
              }

              if (constraints.video) {
                constraints.video = constraintsToFF37_(constraints.video);
              }

              logging('ff37: ' + JSON.stringify(constraints));
            }

            return navigator.mozGetUserMedia(constraints, onSuccess, function (e) {
              onError(shimError_(e));
            });
          }; // Returns the result of getUserMedia as a Promise.


          var getUserMediaPromise_ = function getUserMediaPromise_(constraints) {
            return new Promise(function (resolve, reject) {
              getUserMedia_(constraints, resolve, reject);
            });
          }; // Shim for mediaDevices on older versions.


          if (!navigator.mediaDevices) {
            navigator.mediaDevices = {
              getUserMedia: getUserMediaPromise_,
              addEventListener: function addEventListener() {},
              removeEventListener: function removeEventListener() {}
            };
          }

          navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function () {
            return new Promise(function (resolve) {
              var infos = [{
                kind: 'audioinput',
                deviceId: 'default',
                label: '',
                groupId: ''
              }, {
                kind: 'videoinput',
                deviceId: 'default',
                label: '',
                groupId: ''
              }];
              resolve(infos);
            });
          };

          if (browserDetails.version < 41) {
            // Work around http://bugzil.la/1169665
            var orgEnumerateDevices = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);

            navigator.mediaDevices.enumerateDevices = function () {
              return orgEnumerateDevices().then(undefined, function (e) {
                if (e.name === 'NotFoundError') {
                  return [];
                }

                throw e;
              });
            };
          }

          if (browserDetails.version < 49) {
            var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

            navigator.mediaDevices.getUserMedia = function (c) {
              return origGetUserMedia(c).then(function (stream) {
                // Work around https://bugzil.la/802326
                if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                  stream.getTracks().forEach(function (track) {
                    track.stop();
                  });
                  throw new DOMException('The object can not be found here.', 'NotFoundError');
                }

                return stream;
              }, function (e) {
                return Promise.reject(shimError_(e));
              });
            };
          }

          if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
            var remap = function remap(obj, a, b) {
              if (a in obj && !(b in obj)) {
                obj[b] = obj[a];
                delete obj[a];
              }
            };

            var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

            navigator.mediaDevices.getUserMedia = function (c) {
              if (_typeof(c) === 'object' && _typeof(c.audio) === 'object') {
                c = JSON.parse(JSON.stringify(c));
                remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
                remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
              }

              return nativeGetUserMedia(c);
            };

            if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
              var nativeGetSettings = MediaStreamTrack.prototype.getSettings;

              MediaStreamTrack.prototype.getSettings = function () {
                var obj = nativeGetSettings.apply(this, arguments);
                remap(obj, 'mozAutoGainControl', 'autoGainControl');
                remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
                return obj;
              };
            }

            if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
              var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;

              MediaStreamTrack.prototype.applyConstraints = function (c) {
                if (this.kind === 'audio' && _typeof(c) === 'object') {
                  c = JSON.parse(JSON.stringify(c));
                  remap(c, 'autoGainControl', 'mozAutoGainControl');
                  remap(c, 'noiseSuppression', 'mozNoiseSuppression');
                }

                return nativeApplyConstraints.apply(this, [c]);
              };
            }
          }

          navigator.getUserMedia = function (constraints, onSuccess, onError) {
            if (browserDetails.version < 44) {
              return getUserMedia_(constraints, onSuccess, onError);
            } // Replace Firefox 44+'s deprecation warning with unprefixed version.


            utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
            navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
          };
        };
      }, {
        "../utils": 13
      }],
      12: [function (require, module, exports) {
        /*
         *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */
        'use strict';

        var utils = require('../utils');

        module.exports = {
          shimLocalStreamsAPI: function shimLocalStreamsAPI(window) {
            if (_typeof(window) !== 'object' || !window.RTCPeerConnection) {
              return;
            }

            if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
              window.RTCPeerConnection.prototype.getLocalStreams = function () {
                if (!this._localStreams) {
                  this._localStreams = [];
                }

                return this._localStreams;
              };
            }

            if (!('getStreamById' in window.RTCPeerConnection.prototype)) {
              window.RTCPeerConnection.prototype.getStreamById = function (id) {
                var result = null;

                if (this._localStreams) {
                  this._localStreams.forEach(function (stream) {
                    if (stream.id === id) {
                      result = stream;
                    }
                  });
                }

                if (this._remoteStreams) {
                  this._remoteStreams.forEach(function (stream) {
                    if (stream.id === id) {
                      result = stream;
                    }
                  });
                }

                return result;
              };
            }

            if (!('addStream' in window.RTCPeerConnection.prototype)) {
              var _addTrack = window.RTCPeerConnection.prototype.addTrack;

              window.RTCPeerConnection.prototype.addStream = function (stream) {
                if (!this._localStreams) {
                  this._localStreams = [];
                }

                if (this._localStreams.indexOf(stream) === -1) {
                  this._localStreams.push(stream);
                }

                var pc = this;
                stream.getTracks().forEach(function (track) {
                  _addTrack.call(pc, track, stream);
                });
              };

              window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
                if (stream) {
                  if (!this._localStreams) {
                    this._localStreams = [stream];
                  } else if (this._localStreams.indexOf(stream) === -1) {
                    this._localStreams.push(stream);
                  }
                }

                return _addTrack.call(this, track, stream);
              };
            }

            if (!('removeStream' in window.RTCPeerConnection.prototype)) {
              window.RTCPeerConnection.prototype.removeStream = function (stream) {
                if (!this._localStreams) {
                  this._localStreams = [];
                }

                var index = this._localStreams.indexOf(stream);

                if (index === -1) {
                  return;
                }

                this._localStreams.splice(index, 1);

                var pc = this;
                var tracks = stream.getTracks();
                this.getSenders().forEach(function (sender) {
                  if (tracks.indexOf(sender.track) !== -1) {
                    pc.removeTrack(sender);
                  }
                });
              };
            }
          },
          shimRemoteStreamsAPI: function shimRemoteStreamsAPI(window) {
            if (_typeof(window) !== 'object' || !window.RTCPeerConnection) {
              return;
            }

            if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
              window.RTCPeerConnection.prototype.getRemoteStreams = function () {
                return this._remoteStreams ? this._remoteStreams : [];
              };
            }

            if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
              Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
                get: function get() {
                  return this._onaddstream;
                },
                set: function set(f) {
                  var pc = this;

                  if (this._onaddstream) {
                    this.removeEventListener('addstream', this._onaddstream);
                    this.removeEventListener('track', this._onaddstreampoly);
                  }

                  this.addEventListener('addstream', this._onaddstream = f);
                  this.addEventListener('track', this._onaddstreampoly = function (e) {
                    e.streams.forEach(function (stream) {
                      if (!pc._remoteStreams) {
                        pc._remoteStreams = [];
                      }

                      if (pc._remoteStreams.indexOf(stream) >= 0) {
                        return;
                      }

                      pc._remoteStreams.push(stream);

                      var event = new Event('addstream');
                      event.stream = stream;
                      pc.dispatchEvent(event);
                    });
                  });
                }
              });
            }
          },
          shimCallbacksAPI: function shimCallbacksAPI(window) {
            if (_typeof(window) !== 'object' || !window.RTCPeerConnection) {
              return;
            }

            var prototype = window.RTCPeerConnection.prototype;
            var createOffer = prototype.createOffer;
            var createAnswer = prototype.createAnswer;
            var setLocalDescription = prototype.setLocalDescription;
            var setRemoteDescription = prototype.setRemoteDescription;
            var addIceCandidate = prototype.addIceCandidate;

            prototype.createOffer = function (successCallback, failureCallback) {
              var options = arguments.length >= 2 ? arguments[2] : arguments[0];
              var promise = createOffer.apply(this, [options]);

              if (!failureCallback) {
                return promise;
              }

              promise.then(successCallback, failureCallback);
              return Promise.resolve();
            };

            prototype.createAnswer = function (successCallback, failureCallback) {
              var options = arguments.length >= 2 ? arguments[2] : arguments[0];
              var promise = createAnswer.apply(this, [options]);

              if (!failureCallback) {
                return promise;
              }

              promise.then(successCallback, failureCallback);
              return Promise.resolve();
            };

            var withCallback = function withCallback(description, successCallback, failureCallback) {
              var promise = setLocalDescription.apply(this, [description]);

              if (!failureCallback) {
                return promise;
              }

              promise.then(successCallback, failureCallback);
              return Promise.resolve();
            };

            prototype.setLocalDescription = withCallback;

            withCallback = function withCallback(description, successCallback, failureCallback) {
              var promise = setRemoteDescription.apply(this, [description]);

              if (!failureCallback) {
                return promise;
              }

              promise.then(successCallback, failureCallback);
              return Promise.resolve();
            };

            prototype.setRemoteDescription = withCallback;

            withCallback = function withCallback(candidate, successCallback, failureCallback) {
              var promise = addIceCandidate.apply(this, [candidate]);

              if (!failureCallback) {
                return promise;
              }

              promise.then(successCallback, failureCallback);
              return Promise.resolve();
            };

            prototype.addIceCandidate = withCallback;
          },
          shimGetUserMedia: function shimGetUserMedia(window) {
            var navigator = window && window.navigator;

            if (!navigator.getUserMedia) {
              if (navigator.webkitGetUserMedia) {
                navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
              } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.getUserMedia = function (constraints, cb, errcb) {
                  navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
                }.bind(navigator);
              }
            }
          },
          shimRTCIceServerUrls: function shimRTCIceServerUrls(window) {
            // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
            var OrigPeerConnection = window.RTCPeerConnection;

            window.RTCPeerConnection = function (pcConfig, pcConstraints) {
              if (pcConfig && pcConfig.iceServers) {
                var newIceServers = [];

                for (var i = 0; i < pcConfig.iceServers.length; i++) {
                  var server = pcConfig.iceServers[i];

                  if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
                    utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                    server = JSON.parse(JSON.stringify(server));
                    server.urls = server.url;
                    delete server.url;
                    newIceServers.push(server);
                  } else {
                    newIceServers.push(pcConfig.iceServers[i]);
                  }
                }

                pcConfig.iceServers = newIceServers;
              }

              return new OrigPeerConnection(pcConfig, pcConstraints);
            };

            window.RTCPeerConnection.prototype = OrigPeerConnection.prototype; // wrap static methods. Currently just generateCertificate.

            if ('generateCertificate' in window.RTCPeerConnection) {
              Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
                get: function get() {
                  return OrigPeerConnection.generateCertificate;
                }
              });
            }
          },
          shimTrackEventTransceiver: function shimTrackEventTransceiver(window) {
            // Add event.transceiver member over deprecated event.receiver
            if (_typeof(window) === 'object' && window.RTCPeerConnection && 'receiver' in window.RTCTrackEvent.prototype && // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
            // defined for some reason even when window.RTCTransceiver is not.
            !window.RTCTransceiver) {
              Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
                get: function get() {
                  return {
                    receiver: this.receiver
                  };
                }
              });
            }
          },
          shimCreateOfferLegacy: function shimCreateOfferLegacy(window) {
            var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;

            window.RTCPeerConnection.prototype.createOffer = function (offerOptions) {
              var pc = this;

              if (offerOptions) {
                if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
                  // support bit values
                  offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
                }

                var audioTransceiver = pc.getTransceivers().find(function (transceiver) {
                  return transceiver.sender.track && transceiver.sender.track.kind === 'audio';
                });

                if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
                  if (audioTransceiver.direction === 'sendrecv') {
                    if (audioTransceiver.setDirection) {
                      audioTransceiver.setDirection('sendonly');
                    } else {
                      audioTransceiver.direction = 'sendonly';
                    }
                  } else if (audioTransceiver.direction === 'recvonly') {
                    if (audioTransceiver.setDirection) {
                      audioTransceiver.setDirection('inactive');
                    } else {
                      audioTransceiver.direction = 'inactive';
                    }
                  }
                } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
                  pc.addTransceiver('audio');
                }

                if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
                  // support bit values
                  offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
                }

                var videoTransceiver = pc.getTransceivers().find(function (transceiver) {
                  return transceiver.sender.track && transceiver.sender.track.kind === 'video';
                });

                if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
                  if (videoTransceiver.direction === 'sendrecv') {
                    videoTransceiver.setDirection('sendonly');
                  } else if (videoTransceiver.direction === 'recvonly') {
                    videoTransceiver.setDirection('inactive');
                  }
                } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
                  pc.addTransceiver('video');
                }
              }

              return origCreateOffer.apply(pc, arguments);
            };
          }
        };
      }, {
        "../utils": 13
      }],
      13: [function (require, module, exports) {
        /*
         *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */

        /* eslint-env node */
        'use strict';

        var logDisabled_ = true;
        var deprecationWarnings_ = true;
        /**
         * Extract browser version out of the provided user agent string.
         *
         * @param {!string} uastring userAgent string.
         * @param {!string} expr Regular expression used as match criteria.
         * @param {!number} pos position in the version string to be returned.
         * @return {!number} browser version.
         */

        function extractVersion(uastring, expr, pos) {
          var match = uastring.match(expr);
          return match && match.length >= pos && parseInt(match[pos], 10);
        } // Wraps the peerconnection event eventNameToWrap in a function
        // which returns the modified event object.


        function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
          if (!window.RTCPeerConnection) {
            return;
          }

          var proto = window.RTCPeerConnection.prototype;
          var nativeAddEventListener = proto.addEventListener;

          proto.addEventListener = function (nativeEventName, cb) {
            if (nativeEventName !== eventNameToWrap) {
              return nativeAddEventListener.apply(this, arguments);
            }

            var wrappedCallback = function wrappedCallback(e) {
              cb(wrapper(e));
            };

            this._eventMap = this._eventMap || {};
            this._eventMap[cb] = wrappedCallback;
            return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
          };

          var nativeRemoveEventListener = proto.removeEventListener;

          proto.removeEventListener = function (nativeEventName, cb) {
            if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[cb]) {
              return nativeRemoveEventListener.apply(this, arguments);
            }

            var unwrappedCb = this._eventMap[cb];
            delete this._eventMap[cb];
            return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
          };

          Object.defineProperty(proto, 'on' + eventNameToWrap, {
            get: function get() {
              return this['_on' + eventNameToWrap];
            },
            set: function set(cb) {
              if (this['_on' + eventNameToWrap]) {
                this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
                delete this['_on' + eventNameToWrap];
              }

              if (cb) {
                this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
              }
            }
          });
        } // Utility methods.


        module.exports = {
          extractVersion: extractVersion,
          wrapPeerConnectionEvent: wrapPeerConnectionEvent,
          disableLog: function disableLog(bool) {
            if (typeof bool !== 'boolean') {
              return new Error('Argument type: ' + _typeof(bool) + '. Please use a boolean.');
            }

            logDisabled_ = bool;
            return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
          },

          /**
           * Disable or enable deprecation warnings
           * @param {!boolean} bool set to true to disable warnings.
           */
          disableWarnings: function disableWarnings(bool) {
            if (typeof bool !== 'boolean') {
              return new Error('Argument type: ' + _typeof(bool) + '. Please use a boolean.');
            }

            deprecationWarnings_ = !bool;
            return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
          },
          log: function log() {
            if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
              if (logDisabled_) {
                return;
              }

              if (typeof console !== 'undefined' && typeof console.log === 'function') {
                console.log.apply(console, arguments);
              }
            }
          },

          /**
           * Shows a deprecation warning suggesting the modern and spec-compatible API.
           */
          deprecated: function deprecated(oldMethod, newMethod) {
            if (!deprecationWarnings_) {
              return;
            }

            console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
          },

          /**
           * Browser detector.
           *
           * @return {object} result containing browser and version
           *     properties.
           */
          detectBrowser: function detectBrowser(window) {
            var navigator = window && window.navigator; // Returned result object.

            var result = {};
            result.browser = null;
            result.version = null; // Fail early if it's not a browser

            if (typeof window === 'undefined' || !window.navigator) {
              result.browser = 'Not a browser.';
              return result;
            }

            if (navigator.mozGetUserMedia) {
              // Firefox.
              result.browser = 'firefox';
              result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
            } else if (navigator.webkitGetUserMedia) {
              // Chrome, Chromium, Webview, Opera.
              // Version matches Chrome/WebRTC version.
              result.browser = 'chrome';
              result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
            } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
              // Edge.
              result.browser = 'edge';
              result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
            } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
              // Safari.
              result.browser = 'safari';
              result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
            } else {
              // Default fallthrough: not supported.
              result.browser = 'Not a supported browser.';
              return result;
            }

            return result;
          }
        };
      }, {}]
    }, {}, [3])(3);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var $every = __webpack_require__(84).every;
var sloppyArrayMethod = __webpack_require__(102);

// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('every') }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
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
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var $find = __webpack_require__(84).find;
var addToUnscopables = __webpack_require__(7);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(45);
var $some = __webpack_require__(84).some;
var sloppyArrayMethod = __webpack_require__(102);

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('some') }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
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
/* 353 */
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
  _exports.CallService = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var CallService =
  /*#__PURE__*/
  function (_Service) {
    _inherits(CallService, _Service);

    function CallService() {
      _classCallCheck(this, CallService);

      return _possibleConstructorReturn(this, _getPrototypeOf(CallService).apply(this, arguments));
    }

    _createClass(CallService, [{
      key: "setAutoAnswer",

      /**
       * 设置是否自动应答。
      * <p>
       * 当使用自动应答时，用户同意浏览器调用设备摄像头和麦克风之后，引擎会自动调用 <code>answerCall()</code> 进行应答。
       * 也就是说当自动应答被激活后，引擎始终同意任何端的通话邀请。
      * </p>
       *
       * @param {boolean} autoAnswer - 指定是否启用自动应答。
       */
      value: function setAutoAnswer(autoAnswer) {}
      /**
       * 应当并接听通话邀请。
      *
      * @returns {boolean} 如果应答请求发送成功则返回 <code>true</code>，否则返回 <code>false</code> 。
       */

    }, {
      key: "answerCall",
      value: function answerCall() {}
      /**
       * 发起通话邀请。
      *
       * @param {String} callee - 被叫方 Cube 号。
       * @param {Boolean|String} video - 是否启用视频或指定一个视频设备ID。
      * @param {Function} [callback] - 呼叫回调
       */

    }, {
      key: "makeCall",
      value: function makeCall(callee, video) {}
      /**
       * 挂断通话。
      *
       */

    }, {
      key: "terminateCall",
      value: function terminateCall() {}
      /**
       *
       */

    }, {
      key: "reply",
      value: function reply(target, timeout, callback) {}
      /**
      * 切换媒体设备
       * @param deviceId {String}
       */

    }, {
      key: "changeMediaDevice",
      value: function changeMediaDevice(deviceId) {}
    }]);

    return CallService;
  }(_Service2.Service);

  _exports.CallService = CallService;
});

/***/ }),
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
/* 355 */
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

__webpack_require__(67);

__webpack_require__(89);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(268), __webpack_require__(231), __webpack_require__(208)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Peer, _Delegate, _SignalingState) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CallServiceDelegate = void 0;

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

  var CallServiceDelegate =
  /*#__PURE__*/
  function (_CubeDelegate) {
    _inherits(CallServiceDelegate, _CubeDelegate);

    /**
     * @constructs CallServiceDelegate
     * @param {CallListener} listenerInterface 用于父类实现通用Delegate功能
     * @param {CubeEngine} engine 引擎引用
     */
    function CallServiceDelegate(listenerInterface, engine) {
      var _this;

      _classCallCheck(this, CallServiceDelegate);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CallServiceDelegate).call(this, listenerInterface));
      _this.engine = engine;
      _this.startTime = 0;
      return _this;
    }

    _createClass(CallServiceDelegate, [{
      key: "didInvite",
      value: function didInvite(worker, direction, callee, video) {
        Logger.d('CubeCallServiceDelegate', 'onNewCall'); // 更新呼叫方向

        this.engine.session.callDirection = direction;
        this.engine.session.callState = _SignalingState.SignalingState.Invite;
        this.engine.session.callTime = 0; // 更新 CallPeer

        if (null == this.engine.session.callPeer || this.engine.session.callPeer.name != callee) {
          this.engine.session.setCallPeer(new _Peer.Peer(callee));

          if (null != worker.targetData) {
            this.engine.session.callPeer.displayName = worker.targetData.displayName;
          }
        }

        this.onNewCall(direction, this.engine.session, video); // 启动应答机

        if (this.engine.session.isConferenceCall()) {
          var conf = this.engine.getConferenceService().getConference();

          if (null != conf) {
            this.engine.responder.start(conf.host, false);
          }
        } else {
          /*var stunUrls = _CUBE_STUN_SERVERS[0].urls;
           var stunUrl;
           if (typeof stunUrls == 'string') {
           stunUrl = stunUrls.split(':')[1];
           } else {
           stunUrl = stunUrls[0].split(':')[1];
           }*/
          this.engine.responder.start(window.cube._CUBE_DOMAIN, true);
        }

        worker.localVideo.style.visibility = 'visible';
      }
    }, {
      key: "didRinging",
      value: function didRinging(worker, callee) {
        Logger.d('CubeCallServiceDelegate', 'onCallRinging'); // 更新显示名

        this.engine.session.callPeer.displayName = worker.targetData.displayName; // 更新状态

        this.engine.session.callState = _SignalingState.SignalingState.Ringing;
        this.onCallRinging(this.engine.session);
      }
    }, {
      key: "didIncall",
      value: function didIncall(worker, direction, callee, sdp) {
        Logger.d('CubeCallServiceDelegate', 'onCallConnected'); // 更新状态

        this.startTime = Date.now();
        this.engine.session.callState = _SignalingState.SignalingState.Incall;
        this.onCallConnected(this.engine.session);
        worker.remoteVideo.style.visibility = 'visible';
      }
    }, {
      key: "didEnd",
      value: function didEnd(worker, callee, action) {
        Logger.d('CubeCallServiceDelegate', 'onCallEnded', callee); // 关闭应答机

        this.engine.responder.stop(); // 更新状态

        if (this.engine.session.callState == _SignalingState.SignalingState.End) {
          return;
        }

        this.engine.session.callState = _SignalingState.SignalingState.End;
        this.engine.session.callTime = this.startTime == 0 ? 0 : Date.now() - this.startTime;
        this.engine.session.callPeer = null;

        if (null != worker.videoCloseHandler) {
          worker.videoCloseHandler.call(null, worker);
        }

        this.onCallEnded(this.engine.session, action);
        worker.localVideo ? worker.localVideo.style.visibility = 'hidden' : '';
        worker.localVideo ? worker.remoteVideo.style.visibility = 'hidden' : '';
      }
    }, {
      key: "didProgress",
      value: function didProgress(worker, callee) {
        Logger.d('CubeCallServiceDelegate', 'onInProgress'); // 更新状态

        this.engine.session.callState = _SignalingState.SignalingState.Progress;
        this.onInProgress(this.engine.session);
      }
    }, {
      key: "didFailed",
      value: function didFailed(worker, callee, errorCode) {
        Logger.d('CubeCallServiceDelegate', 'onCallFailed'); // 更新状态

        this.engine.session.callState = _SignalingState.SignalingState.None;
        this.engine.session.callDirection = null;
        this.engine.session.callPeer = null;
        this.onCallFailed(this.engine.session, errorCode);
        worker.localVideo.style.visibility = 'hidden';
        worker.remoteVideo.style.visibility = 'hidden'; // 关闭应答机

        this.engine.responder.stop();
        /*var self = this;
         if (errorCode != CubeErrorCode.CameraOpenFailed) {
         setTimeout(function() {
         self.engine.getCallService().terminateCall();
         }, 1000);
         }*/

        /*if (null != worker.videoCloseHandler) {
         worker.videoCloseHandler.call(null, worker);
         }*/
      }
    }, {
      key: "didReverseCall",
      value: function didReverseCall(worker, callee) {
        Logger.d('CubeCallServiceDelegate', 'onReverseCall');
        this.onReverseCall(this.engine.session);
      }
    }]);

    return CallServiceDelegate;
  }(_Delegate.Delegate);

  _exports.CallServiceDelegate = CallServiceDelegate;
});

/***/ }),
/* 356 */
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
  _exports.ResponseState = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var ResponseState = function ResponseState(code, desc) {
    _classCallCheck(this, ResponseState);

    this.code = code;
    this.desc = desc;
  };

  _exports.ResponseState = ResponseState;
});

/***/ }),
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
/* 358 */
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
  _exports.MediaProbe = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /*
   * MediaProbe.js
   * Cube Engine
   * 
   * Copyright (c) 2015-2019 Cube Team. All rights reserved.
   */

  /**
   * 媒体层探针接口。
   * 媒体层探针用于实时监测媒体设备的工作状态。
   *
   * @interface MediaProbe
   * @see {@link MediaService#addMediaProbe|MediaService}
   * @author Xu Jiangwei, Guan Yong
   */
  var MediaProbe =
  /*#__PURE__*/
  function () {
    function MediaProbe() {
      _classCallCheck(this, MediaProbe);
    }

    _createClass(MediaProbe, [{
      key: "onLocalStreamReady",

      /**
        * 当本地视频数据就绪时该方法被调用。
        * 
        * @param {MediaService} mediaController - 媒体控制器实例。
        */
      value: function onLocalStreamReady(mediaController) {}
      /**
       * 当远端视频数据就绪时该方法被调用
       * @param mediaController {MediaService} 媒体控制器实例
       */

    }, {
      key: "onRemoteStreamReady",
      value: function onRemoteStreamReady(mediaController) {}
      /**
       * 当本地视频帧率数据刷新时该方法被调用
       * @param mediaController {MediaService} 媒体控制器实例
       * @param videoWidth {Number} 视频画面宽度
       * @param videoHeight {Number} 视频画面高度
       * @param curFPS {Number} 视频当前帧率
       * @param avgFPS {Number} 视频平均帧率
       */

    }, {
      key: "onLocalVideoFPS",
      value: function onLocalVideoFPS(mediaController, videoWidth, videoHeight, curFPS, avgFPS) {}
      /**
       * 当远端视频帧率数据刷新时该方法被调用
       * @param mediaController {MediaService} 媒体控制器实例
       * @param videoWidth {Number} 视频画面宽度
       * @param videoHeight {Number} 视频画面高度
       * @param curFPS {Number} 视频当前帧率
       * @param avgFPS {Number} 视频平均帧率
       */

    }, {
      key: "onRemoteVideoFPS",
      value: function onRemoteVideoFPS(mediaController, videoWidth, videoHeight, curFPS, avgFPS) {}
      /**
       * 当探针检测到帧率明显降低时该方法被调用
       * @param mediaController {MediaService} 媒体控制器实例
       * @param curFps {Number} 当前实时帧率
       * @param avgFps {Number} 视频平均帧率
       * @param maxFps {Number} 监测周期内的最大帧率
       */

    }, {
      key: "onFrameRateWarning",
      value: function onFrameRateWarning(mediaController, curFps, avgFps, maxFps) {}
      /**
       * 当探针检测到帧率恢复时该方法被调用
       * @param mediaController {MediaService} 媒体控制器实例
       * @param curFps {Number} 当前实时帧率
       * @param avgFps {Number} 平均帧率
       * @param maxFps {Number} 监测周期内的最大帧率
       */

    }, {
      key: "onFrameRateRecovering",
      value: function onFrameRateRecovering(mediaController, curFps, avgFps, maxFps) {}
      /**
       * 当对方关闭视频时该方法被调用
       */

    }, {
      key: "onVideoClose",
      value: function onVideoClose() {}
      /**
       * 当对方开启视频时该方法被调用
       */

    }, {
      key: "onVideoOpen",
      value: function onVideoOpen() {}
      /**
       * 当设备移除
       * @param type {String} 插入/拔出
       * @param deviceType {String} 设备类型
       * @param label {String} 设备名称
       * */

    }, {
      key: "onDeviceChange",
      value: function onDeviceChange(type, deviceType, label) {}
    }]);

    return MediaProbe;
  }();

  _exports.MediaProbe = MediaProbe;
});

/***/ }),
/* 359 */
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
  _exports.Call = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /**
   * Created by ShiXin on 2017/7/7.
   */

  /**
   * 呼叫信息
   */
  var Call =
  /*#__PURE__*/
  function () {
    function Call() {
      _classCallCheck(this, Call);

      this.cubeId = null;
      this.displayName = null;
      this.isVideo = true;
      this.sdp = null;
      this.ices = [];
      this.candidates = [];
    }
    /**
     * 设置呼叫人信息
     * @param cubeId {String}
     */


    _createClass(Call, [{
      key: "setCubeId",
      value: function setCubeId(cubeId) {
        this.cubeId = cubeId;
      }
    }, {
      key: "getCubeId",
      value: function getCubeId() {
        return this.cubeId;
      }
      /**
       * 呼叫人昵称
       * @param displayName {String}
       */

    }, {
      key: "setDisplayName",
      value: function setDisplayName(displayName) {
        this.displayName = displayName;
      }
    }, {
      key: "getDisplayName",
      value: function getDisplayName() {
        return this.displayName;
      }
      /**
       * sdp信息
       * @param sdp
       */

    }, {
      key: "setSdp",
      value: function setSdp(sdp) {
        this.sdp = sdp;
      }
    }, {
      key: "getSdp",
      value: function getSdp() {
        return this.sdp;
      }
      /**
       *获取ICE信息
       * @return {Array}
       */

    }, {
      key: "setIces",
      value: function setIces(ices) {
        this.ices = ices;
      }
    }, {
      key: "getIces",
      value: function getIces() {
        return this.ices;
      }
    }, {
      key: "setCandidates",
      value: function setCandidates(candidates) {
        this.candidates = candidates;
      }
    }, {
      key: "getCandidates",
      value: function getCandidates() {
        return this.candidates;
      }
    }]);

    return Call;
  }();

  _exports.Call = Call;
});

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(62);

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(354)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _CallDirection) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CallSession = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var CallSession =
  /*#__PURE__*/
  function () {
    function CallSession() {
      _classCallCheck(this, CallSession);

      this.caller = null;
      this.callee = null;
      this.inviteTimes = 0; //接通时间

      this.inCallTime = 0; //挂断时间

      this.endCallTime = 0; //被叫是否繁忙

      this.isBusy = false;
      this.direction = _CallDirection.CallDirection.Outgoing;
    }
    /**
     * 主叫人信息
     * @param caller {Call}
     */


    _createClass(CallSession, [{
      key: "setCaller",
      value: function setCaller(caller) {
        this.caller = caller;
      }
    }, {
      key: "getCaller",
      value: function getCaller() {
        return this.caller;
      }
      /**
       * 被叫人信息
       * @param callee {Call}
       */

    }, {
      key: "setCallee",
      value: function setCallee(callee) {
        this.callee = callee;
      }
    }, {
      key: "getCallee",
      value: function getCallee() {
        return this.callee;
      }
    }, {
      key: "setInviteTimes",
      value: function setInviteTimes(inviteTimes) {
        this.inviteTimes = inviteTimes;
      }
    }, {
      key: "getInviteTimes",
      value: function getInviteTimes() {
        return this.inviteTimes;
      }
    }, {
      key: "setInCallTime",
      value: function setInCallTime(inCallTime) {
        this.inCallTime = inCallTime;
      }
    }, {
      key: "getInCallTime",
      value: function getInCallTime() {
        return this.inCallTime;
      }
    }, {
      key: "setEndCallTime",
      value: function setEndCallTime(endCallTime) {
        this.endCallTime = endCallTime;
      }
    }, {
      key: "getEndCallTime",
      value: function getEndCallTime() {
        return this.endCallTime;
      }
    }]);

    return CallSession;
  }();

  _exports.CallSession = CallSession;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=CubeSignaling.js.map