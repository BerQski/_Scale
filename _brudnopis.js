//waga

let array = [1, 1, 1, 3, 1, 1, 1, 1];
let szalka1 = [];
let szalka2 = [];
let szalka3 = [];
function untillEnd(aRa, cOn, ff) {
  let i = 1;
  while (i <= cOn) {
    ff.push(aRa.splice(Math.floor(Math.random() * aRa.length), 1));
    i++;
  }
  return ff.flat();
}

console.log(untillEnd(array, 3, szalka1));
console.log(untillEnd(array, 3, szalka2));
console.log(untillEnd(array, 3, szalka3));
// console.log(array);
function comPare(szal1, szal2, szal3) {
  const a = szal1.reduce((a, b) => a + b);
  const b = szal2.reduce((a, b) => a + b);
  const c = szal3.reduce((a, b) => a + b);
  if (a == b) {
    if (szal3[0] > szal3[1]) {
      return szal3[0];
    } else {
      return szal3[1];
    }
  } else if (a < b) {
    if (szal2[0] > szal2[1]) {
      return szal2[0];
    } else if (szal2[2] > szal2[1]) {
      return szal2[2];
    } else {
      return szal2[1];
    }
  } else {
    if (szal1[0] > szal1[1]) {
      return szal1[0];
    } else if (szal1[2] > szal1[1]) {
      return szal1[2];
    } else {
      return szal1[1];
    }
  }
}
console.log(comPare(szalka1, szalka2, szalka3));
