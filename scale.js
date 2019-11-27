const kule = [0, 1, 3, 0, 0, 4, 0, 0];
// console.log(kule);

// const a = kule.reduce((a, b) => a + b);
// console.log(a);

// var removed = myFish.splice(2, 2);

// let za = [];
// za.push(kule)[Math.floor(Math.random() * kule.length)];

// console.log(za);

let array = [0, 1, 0, 0, 0, 0, 0, 0];
// let z = [];?
// function untillEnd(aRa, cOn) {
//   let end = aRa.length;
//   let szalka = [];
//   while (end > cOn) {
//     szalka.push(aRa.splice(Math.floor(Math.random() * aRa.length), 1));
//     --end;
//   }
//   return szalka.flat();
// }

console.log(untillEnd2(array, 5));
console.log(array);

function untillEnd2(aRa, cOn) {
  let end = aRa.length;
  let szalka1 = [];
  let szalka2 = [];
  if (end > 6) {
    while (end > cOn) {
      szalka1.push(aRa.splice(Math.floor(Math.random() * aRa.length), 1));
      --end;
    }
    return szalka1.flat();
  } (end > 3) {
    while (end > cOn) {
      szalka2.push(aRa.splice(Math.floor(Math.random() * aRa.length), 1));
      --end;
    }
    return szalka2.flat();
  }
}
