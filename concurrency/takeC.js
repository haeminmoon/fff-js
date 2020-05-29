import curry from "../general/curry";
import take from "../general/take";

export default curry(function takeC(l, iter) {
  return take(l, [...iter].forEach(a => a instanceof Promise ? a.catch(function() {}) : a));
});