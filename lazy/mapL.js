import curry from "../general/curry";
import call from "../general/call";

export default curry(function *mapL(f, iter) {
  for (const a of iter) yield call(a, f);
});