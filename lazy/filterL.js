import curry from "../general/curry";
import call from "../general/call";
import isPromise from "../general/isPromise";
import nop from "../general/nop";

export default curry(function *filterL(f, iter) {
  for (const a of toIter(iter)) {
    const b = call(a, f);
    if(isPromise(b)) yield b.then(b => b ? a : Promise.reject(nop)); 
    else yield a;
  }
});