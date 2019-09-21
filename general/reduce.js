import toIter from "./toIter";
import call from "./call";
import first from "./first";
import nop from "./nop";
import takeFirst from "./takeFirst";
import isPromise from "./isPromise";

export default function reduce(f, acc, iter) {
  if (arguments.length == 1) return (..._) => reduce(f, ..._);
  if (arguments.length == 2) return reduce(f, call(takeFirst(iter = toIter(acc)), first), iter);

  iter = toIter(iter);
  return call(
    acc, 
    function recur(acc) {
      let cur;
      while (!(cur = iter.next()).done) {
        acc = isPromise(cur.value) 
          ? cur.value.then(a => f(acc, a), e => e == nop ? acc : Promise.reject(e))
          : f(acc, cur.value);
        
        if (isPromise(acc)) return acc.then(recur);
      }
      return acc;
    }
  );
}