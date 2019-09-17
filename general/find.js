import curry from "./curry";
import takeFirst from "./takeFirst";
import filterL from "../lazy/filterL";
import go from "./go";
import unwrap from "./unwrap";

export default curry(function find(f, iter) {
  return go(
    iter,
    filterL(f),
    takeFirst,
    unwrap
  );
});