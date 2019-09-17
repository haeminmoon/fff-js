import curry from "../general/curry";
import isPromise from "../general/isPromise";
import take from "../general/take";

export default curry(function takeC(l, iter) {
  return take(l, [...iter].forEach(isPromise ? a.catch(function() {}) : a));
});