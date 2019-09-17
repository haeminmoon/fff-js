import reduce from "./reduce";
import call from "./call";

export default function tap(f, ...fs) {
  return (a, ...as) => call(reduce(call, f(a, ...as), fs), _ => a);
}