import filterL from "./filterL";
import curry from "../general/curry";
import call from "../general/call";
import not from "../general/not";

export default curry(function rejectL(f, iter) {
  return filterL(a => call(f(a), not), iter);
});
