/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fff_namespaceObject = {};
__webpack_require__.r(fff_namespaceObject);
__webpack_require__.d(fff_namespaceObject, "log", function() { return general_log; });
__webpack_require__.d(fff_namespaceObject, "curry", function() { return curry; });
__webpack_require__.d(fff_namespaceObject, "call", function() { return call; });
__webpack_require__.d(fff_namespaceObject, "isIterable", function() { return isIterable; });
__webpack_require__.d(fff_namespaceObject, "isPromise", function() { return isPromise; });
__webpack_require__.d(fff_namespaceObject, "isArray", function() { return general_isArray; });
__webpack_require__.d(fff_namespaceObject, "isFunction", function() { return isFunction; });
__webpack_require__.d(fff_namespaceObject, "isString", function() { return isString; });
__webpack_require__.d(fff_namespaceObject, "isEmpty", function() { return isEmpty; });
__webpack_require__.d(fff_namespaceObject, "isUndefined", function() { return isUndefined; });
__webpack_require__.d(fff_namespaceObject, "map", function() { return general_map; });
__webpack_require__.d(fff_namespaceObject, "filter", function() { return general_filter; });
__webpack_require__.d(fff_namespaceObject, "reduce", function() { return reduce; });
__webpack_require__.d(fff_namespaceObject, "go", function() { return go_go; });
__webpack_require__.d(fff_namespaceObject, "pipe", function() { return pipe; });
__webpack_require__.d(fff_namespaceObject, "take", function() { return general_take; });
__webpack_require__.d(fff_namespaceObject, "takeFirst", function() { return takeFirst; });
__webpack_require__.d(fff_namespaceObject, "takeLast", function() { return takeLast; });
__webpack_require__.d(fff_namespaceObject, "takeAll", function() { return takeAll; });
__webpack_require__.d(fff_namespaceObject, "has", function() { return has; });
__webpack_require__.d(fff_namespaceObject, "remove", function() { return general_remove; });
__webpack_require__.d(fff_namespaceObject, "pick", function() { return general_pick; });
__webpack_require__.d(fff_namespaceObject, "object", function() { return object; });
__webpack_require__.d(fff_namespaceObject, "keys", function() { return keys; });
__webpack_require__.d(fff_namespaceObject, "values", function() { return values; });
__webpack_require__.d(fff_namespaceObject, "entries", function() { return entries; });
__webpack_require__.d(fff_namespaceObject, "tap", function() { return tap; });
__webpack_require__.d(fff_namespaceObject, "each", function() { return general_each; });
__webpack_require__.d(fff_namespaceObject, "identity", function() { return identity; });
__webpack_require__.d(fff_namespaceObject, "nop", function() { return general_nop; });
__webpack_require__.d(fff_namespaceObject, "not", function() { return not; });
__webpack_require__.d(fff_namespaceObject, "toString", function() { return toString_toString; });
__webpack_require__.d(fff_namespaceObject, "toIter", function() { return toIter; });
__webpack_require__.d(fff_namespaceObject, "wrap", function() { return wrap; });
__webpack_require__.d(fff_namespaceObject, "unwrap", function() { return unwrap; });
__webpack_require__.d(fff_namespaceObject, "find", function() { return general_find; });
__webpack_require__.d(fff_namespaceObject, "first", function() { return first; });
__webpack_require__.d(fff_namespaceObject, "last", function() { return last; });
__webpack_require__.d(fff_namespaceObject, "join", function() { return general_join; });
__webpack_require__.d(fff_namespaceObject, "range", function() { return range; });
__webpack_require__.d(fff_namespaceObject, "merge", function() { return merge; });
__webpack_require__.d(fff_namespaceObject, "delay", function() { return delay; });
__webpack_require__.d(fff_namespaceObject, "split", function() { return split; });
__webpack_require__.d(fff_namespaceObject, "mapL", function() { return lazy_mapL; });
__webpack_require__.d(fff_namespaceObject, "filterL", function() { return lazy_filterL; });
__webpack_require__.d(fff_namespaceObject, "keysL", function() { return keysL; });
__webpack_require__.d(fff_namespaceObject, "valuesL", function() { return valuesL; });
__webpack_require__.d(fff_namespaceObject, "entriesL", function() { return entriesL; });
__webpack_require__.d(fff_namespaceObject, "rejectL", function() { return lazy_rejectL; });
__webpack_require__.d(fff_namespaceObject, "rangeL", function() { return rangeL; });
__webpack_require__.d(fff_namespaceObject, "reverseL", function() { return reverseL; });
__webpack_require__.d(fff_namespaceObject, "dropL", function() { return lazy_dropL; });
__webpack_require__.d(fff_namespaceObject, "mapC", function() { return concurrency_mapC; });
__webpack_require__.d(fff_namespaceObject, "filterC", function() { return concurrency_filterC; });
__webpack_require__.d(fff_namespaceObject, "takeC", function() { return concurrency_takeC; });
__webpack_require__.d(fff_namespaceObject, "takeAllC", function() { return takeAllC; });

// CONCATENATED MODULE: ./general/log.js
const { log } = console;

/* harmony default export */ var general_log = (log);
// CONCATENATED MODULE: ./general/curry.js
function curry(f) {
  return (a, ..._) => _.length < 1 ? (..._) => f(a, ..._) : f(a, ..._);
}
// CONCATENATED MODULE: ./general/isPromise.js
function isPromise(a) {
  return a instanceof Promise;
}
// CONCATENATED MODULE: ./general/call.js


function call(a, f) {
  return isPromise(a) ? a.then(f) : f(a);
}
// CONCATENATED MODULE: ./general/isIterable.js
function isIterable(a) {
  return a != null && !!a[Symbol.iterator];
}
// CONCATENATED MODULE: ./general/isArray.js
const { isArray } = Array;

/* harmony default export */ var general_isArray = (isArray);
// CONCATENATED MODULE: ./general/isFunction.js
function isFunction(a) {
  return typeof a == 'function';
}
// CONCATENATED MODULE: ./general/isString.js
function isString(a) {
  return typeof a == 'string';
}
// CONCATENATED MODULE: ./general/isEmpty.js
function isEmpty(arr) {
  return arr.length === 0;
}
// CONCATENATED MODULE: ./general/isUndefined.js
function isUndefined(a) {
  return a === undefined;
}
// CONCATENATED MODULE: ./lazy/mapL.js



/* harmony default export */ var lazy_mapL = (curry(function *mapL(f, iter) {
  for (const a of iter) yield call(a, f);
}));
// CONCATENATED MODULE: ./general/toIter.js


function toIter(a) {
  return isIterable(a) ? a[Symbol.iterator]() : (function *(){}());
}
// CONCATENATED MODULE: ./general/nop.js
const nop_nop = Symbol.for('nop');

/* harmony default export */ var general_nop = (nop_nop);
// CONCATENATED MODULE: ./general/take.js




/* harmony default export */ var general_take = (curry(function take(l, iter) {
  if (l === 0) return [];
  let res = [];
  iter = toIter(iter);
  return function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise) {
        return a
          .then(a => (res.push(a), res).length == l ? res : recur())
          .catch(e => e == general_nop ? recur() : Promise.reject(e));
      }
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  } ();
}));
// CONCATENATED MODULE: ./general/takeAll.js


function takeAll(iter) {
  return general_take(Infinity, iter);
}
// CONCATENATED MODULE: ./general/map.js




/* harmony default export */ var general_map = (curry(function map(f, iter) {
    return takeAll(lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./lazy/filterL.js



/* harmony default export */ var lazy_filterL = (curry(function *filterL(f, iter) {
  for (const a of iter) if(call(a, f)) yield a;
}));
// CONCATENATED MODULE: ./general/filter.js




/* harmony default export */ var general_filter = (curry(function filter(f, iter) {
  return takeAll(lazy_filterL(f, iter));
}));
// CONCATENATED MODULE: ./general/unwrap.js
function unwrap([a]) {
  return a;
}
// CONCATENATED MODULE: ./general/takeFirst.js


function takeFirst(iter) {
  return general_take(1, iter);
}
// CONCATENATED MODULE: ./general/reduce.js






function reduce(f, acc, iter) {
  if (arguments.length == 1) return (..._) => reduce(f, ..._);
  if (arguments.length == 2) return reduce(f, unwrap(takeFirst(iter = toIter(acc))), iter);

  iter = toIter(iter);
  return call(
    acc, 
    function recur(acc) {
      let cur;
      while (!(cur = iter.next()).done) {
        acc = isPromise(acc) 
          ? acc.then(a => f(acc, a), e => e == nop ? acc : Promise.reject(e))
          : f(acc, cur.value);
        
        if (isPromise(acc)) return acc.then(recur);
      }
      return acc;
    }
  );
}
// CONCATENATED MODULE: ./general/go.js



function go_go(..._) {
  return reduce(call, _);
}

// CONCATENATED MODULE: ./general/pipe.js



function pipe(f, ...fs) {
  return (...as) => reduce(call, f(...as), fs);
}
// CONCATENATED MODULE: ./general/takeLast.js


function takeLast(iter) {
  return general_take(1, iter);
}
// CONCATENATED MODULE: ./general/has.js


/* harmony default export */ var has = (curry(function has(k, obj) {
  return !!(obj && obj.hasOwnProperty(k));
}));
// CONCATENATED MODULE: ./general/remove.js



/* harmony default export */ var general_remove = (curry(function remove(k, obj) {
  return call({}, res => (delete Object.assign(res, obj)[k], res));
}));
// CONCATENATED MODULE: ./lazy/entriesL.js
function *entriesL(obj) {
  for (const k in obj) yield [k, obj[k]];
}
// CONCATENATED MODULE: ./general/object.js


function object(iter) {
  return reduce((obj, [k, v]) => (obj[k] = v, obj), {}, iter);
}
// CONCATENATED MODULE: ./general/pick.js





/* harmony default export */ var general_pick = (curry(function pick(ks, obj) {
  return go(
    obj,
    entriesL,
    lazy_filterL(([k]) => ks.includes(k)),
    object
  );
}));


// CONCATENATED MODULE: ./lazy/keysL.js
function *keysL(obj) {
  for (const k in obj) yield k;
};
// CONCATENATED MODULE: ./general/keys.js



function keys(a) {
  return takeAll(keysL(a));
}
// CONCATENATED MODULE: ./lazy/valuesL.js
function *valuesL(obj) {
  for (const k in obj) yield obj[k];
}
// CONCATENATED MODULE: ./general/values.js



function values(a) {
  return takeAll(valuesL(a));
}
// CONCATENATED MODULE: ./general/entries.js



function entries(a) {
  return takeAll(entriesL(a));
}
// CONCATENATED MODULE: ./general/tap.js



function tap(f, ...fs) {
  return (a, ...as) => call(reduce(call, f(a, ...as), fs), _ => a);
}
// CONCATENATED MODULE: ./general/each.js




/* harmony default export */ var general_each = (curry(function each(f, iter) {
  return call(reduce((_, a) => f(a), null, iter), _ => iter);
}));
// CONCATENATED MODULE: ./general/identity.js
function identity(a) {
  return a;
}
// CONCATENATED MODULE: ./general/not.js
function not(a) {
  return !a;
}
// CONCATENATED MODULE: ./general/toString.js
function toString_toString(a) {
  return a.toString();
}
// CONCATENATED MODULE: ./general/wrap.js
function wrap(a) {
  return [a];
}
// CONCATENATED MODULE: ./general/find.js






/* harmony default export */ var general_find = (curry(function find(f, iter) {
  return go_go(
    iter,
    lazy_filterL(f),
    takeFirst,
    unwrap
  );
}));
// CONCATENATED MODULE: ./general/first.js
function first(arr) {
  return arr[0];
}
// CONCATENATED MODULE: ./general/last.js
function last(arr) {
  return arr[arr.length - 1];
}
// CONCATENATED MODULE: ./general/join.js



/* harmony default export */ var general_join = (curry(function join(sep = ',', iter) {
  return reduce((a, b) => `${a}${sep}${b}`, iter);
}));
// CONCATENATED MODULE: ./lazy/rangeL.js
function *rangeL(start = 0, stop = start, step = 1) {
  if (arguments.length == 1) start = 0;
  while (start < stop) {
    yield start;
    start += step;
  }
}

// CONCATENATED MODULE: ./general/range.js



function range(..._) {
  return takeAll(rangeL(..._));
}
// CONCATENATED MODULE: ./general/merge.js





function merge(ks, vs) {
  return go_go(
    rangeL(ks.length || vs.length),
    lazy_mapL(i => [ks[i], vs[i]]),
    takeAll
  );
}


// CONCATENATED MODULE: ./general/delay.js


/* harmony default export */ var delay = (curry(function delay(time, a) {
  return new Promise(resolve => setTimeout(() => resolve(a), time));
}));
// CONCATENATED MODULE: ./general/split.js


/* harmony default export */ var split = (curry(function split(sep = '', str) {
  return str.split(sep);
}));
// CONCATENATED MODULE: ./lazy/rejectL.js





/* harmony default export */ var lazy_rejectL = (curry(function rejectL(f, iter) {
  return lazy_filterL(a => call(f(a), not), iter);
}));

// CONCATENATED MODULE: ./lazy/reverseL.js

function *reverseL(arr) {
  let l = arr.length;
  while (l--) yield arr[l];
}
// CONCATENATED MODULE: ./lazy/dropL.js



/* harmony default export */ var lazy_dropL = (curry(function dropL(l, iter) {
  let i = 0;
  return lazy_filterL(_ => (++i) > l, iter);
}));

// CONCATENATED MODULE: ./concurrency/takeC.js




/* harmony default export */ var concurrency_takeC = (curry(function takeC(l, iter) {
  return general_take(l, [...iter].forEach(isPromise ? a.catch(function() {}) : a));
}));
// CONCATENATED MODULE: ./concurrency/takeAllC.js


/* harmony default export */ var takeAllC = (concurrency_takeC(Infinity));
// CONCATENATED MODULE: ./concurrency/mapC.js




/* harmony default export */ var concurrency_mapC = (curry(function mapC(f, iter) {
  return takeAllC(lazy_mapL(f, iter));
}));
// CONCATENATED MODULE: ./concurrency/filterC.js




/* harmony default export */ var concurrency_filterC = (curry(function filterC(f, iter) {
  return takeAllC(lazy_filterL(f, iter));
}));
// CONCATENATED MODULE: ./fff.js
/**
 * General sector
 */












































/**
 * Lazy sector
 */










/**
 * Concurrency sector
 */




// CONCATENATED MODULE: ./browser.js

window.fff = window.F = { ...fff_namespaceObject };


/***/ })
/******/ ]);
//# sourceMappingURL=fff.js.map