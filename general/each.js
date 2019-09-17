import curry from "./curry";
import call from "./call";
import reduce from "./reduce";

export default curry(function each(f, iter) {
  return call(reduce((_, a) => f(a), null, iter), _ => iter);
});