import curry from "./curry";
import call from "./call";
import map from "./map";

export default curry(function each(f, iter) {
  return map(a => call(f(a), _ => a), iter);
});