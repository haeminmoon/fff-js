/**
 * General sector
 */
export { default as log } from './general/log.js';
export { default as curry } from './general/curry.js';
export { default as call } from './general/call';
export { default as isIterable } from './general/isIterable';
export { default as isPromise } from './general/isPromise';
export { default as isArray } from './general/isArray';
export { default as isFunction } from './general/isFunction';
export { default as isString } from './general/isString';
export { default as isEmpty } from './general/isEmpty';
export { default as isUndefined } from './general/isUndefined';
export { default as map } from './general/map';
export { default as filter } from './general/filter';
export { default as reduce } from './general/reduce';
export { default as go } from './general/go';
export { default as pipe } from './general/pipe';
export { default as take } from './general/take';
export { default as takeFirst } from './general/takeFirst';
export { default as takeLast } from './general/takeLast';
export { default as takeAll } from './general/takeAll';
export { default as has } from './general/has';
export { default as remove } from './general/remove';
export { default as pick } from './general/pick';
export { default as object } from './general/object';
export { default as keys } from './general/keys';
export { default as values } from './general/values';
export { default as entries } from './general/entries';
export { default as tap } from './general/tap';
export { default as each } from './general/each';
export { default as identity } from './general/identity';
export { default as nop } from './general/nop';
export { default as not } from './general/not';
export { default as toString } from './general/toString';
export { default as toIter } from './general/toIter';
export { default as wrap } from './general/wrap';
export { default as find } from './general/find';
export { default as first } from './general/first';
export { default as last } from './general/last';
export { default as join } from './general/join';
export { default as range } from './general/range';
export { default as merge } from './general/merge';
export { default as delay } from './general/delay';
export { default as split } from './general/split';

/**
 * Lazy sector
 */
export { default as mapL } from './lazy/mapL';
export { default as filterL } from './lazy/filterL';
export { default as keysL } from './lazy/keysL';
export { default as valuesL } from './lazy/valuesL';
export { default as entriesL } from './lazy/entriesL';
export { default as rejectL } from './lazy/rejectL';
export { default as rangeL } from './lazy/rangeL';
export { default as reverseL } from './lazy/reverseL';
export { default as dropL } from './lazy/dropL';

/**
 * Concurrency sector
 */
export { default as mapC } from './concurrency/mapC';
export { default as filterC } from './concurrency/filterC';
export { default as takeC } from './concurrency/takeC';
export { default as takeAllC } from './concurrency/takeAllC';