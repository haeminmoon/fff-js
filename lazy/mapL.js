import curry from "../general/curry";
import call from "../general/call";
import toIter from "../general/toIter";

export default curry(function *mapL(f, iter) {
  for (const a of toIter(iter)) yield call(a, f);
});