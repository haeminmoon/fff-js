import curry from "../general/curry";
import filterL from "./filterL";

export default curry(function dropL(l, iter) {
  let i = 0;
  return filterL(_ => (++i) > l, iter);
});
