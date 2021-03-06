import entriesL from "../lazy/entriesL";
import filterL from "../lazy/filterL";
import object from "./object";
import curry from "./curry";
import go from "./go";

export default curry(function pick(ks, obj) {
  return go(
    obj,
    entriesL,
    filterL(([k]) => ks.includes(k)),
    object
  );
});

