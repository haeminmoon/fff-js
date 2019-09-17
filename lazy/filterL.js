import curry from '../general/curry';
import call from '../general/call';

export default curry(function *filterL(f, iter) {
  for (const a of iter) if(call(a, f)) yield a;
});