import curry from "./curry";
import call from "./call";

export default curry(function remove(k, obj) {
  return call({}, res => (delete Object.assign(res, obj)[k], res));
});