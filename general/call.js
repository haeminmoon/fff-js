import isPromise from "./isPromise";

export default function call(a, f) {
  return isPromise(a) ? a.then(f) : f(a);
}