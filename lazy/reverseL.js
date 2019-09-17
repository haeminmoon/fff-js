
export default function *reverseL(arr) {
  let l = arr.length;
  while (l--) yield arr[l];
}