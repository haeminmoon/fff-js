import mapL from "../lazy/mapL";
import takeAllC from "./takeAllC";
import curry from "../general/curry";

export default curry(function mapC(f, iter) {
  return takeAllC(mapL(f, iter));
});