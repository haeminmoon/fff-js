import toIter from "./toIter";
import call from "./call";
import unwrap from "./unwrap";
import takeFirst from "./takeFirst";
import isPromise from "./isPromise";

export default function reduce(f, acc, iter) {
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