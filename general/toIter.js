import isIterable from "./isIterable";

export default function toIter(a) {
  return isIterable(a) ? a[Symbol.iterator]() : (function *(){}());
}