import curry from "./curry";
import takeFirst from "./takeFirst";
import filterL from "../lazy/filterL";
import go from "./go";
import first from "./first";

export default curry(function find(f, iter) {
  return go(
    iter,
    filterL(f),
    takeFirst,
    first
  );
});