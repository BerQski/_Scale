// //waga

// let array = [1, 1, 1, 3, 1, 1, 1, 1];
// let szalka1 = [];
// let szalka2 = [];
// let szalka3 = [];
// function untillEnd(aRa, cOn, ff) {
//   let i = 1;
//   while (i <= cOn) {
//     ff.push(aRa.splice(Math.floor(Math.random() * aRa.length), 1));
//     i++;
//   }
//   return ff.flat();
// }

// console.log(untillEnd(array, 3, szalka1));
// console.log(untillEnd(array, 3, szalka2));
// console.log(untillEnd(array, 3, szalka3));
// // console.log(array);
// function comPare(szal1, szal2, szal3) {
//   const a = szal1.reduce((a, b) => a + b);
//   const b = szal2.reduce((a, b) => a + b);
//   // const c = szal3.reduce((a, b) => a + b);
//   if (a == b) {
//     if (szal3[0] > szal3[1]) {
//       return szal3[0];
//     } else {
//       return szal3[1];
//     }
//   } else if (a < b) {
//     if (szal2[0] > szal2[1]) {
//       return szal2[0];
//     } else if (szal2[2] > szal2[1]) {
//       return szal2[2];
//     } else {
//       return szal2[1];
//     }
//   } else {
//     if (szal1[0] > szal1[1]) {
//       return szal1[0];
//     } else if (szal1[2] > szal1[1]) {
//       return szal1[2];
//     } else {
//       return szal1[1];
//     }
//   }
// }
// console.log(comPare(szalka1, szalka2, szalka3));

let pudelko = [1, 1, 1, 1, 1, 1, 1, 3];

// console.log(ComPareTwo(pudelko));
const wynik = ComPareTwo(pudelko, 3);
console.log(wynik);

function UntillEnd(aRa, cOn) {
  let i = 1;
  let ff = [];
  while (i <= cOn) {
    ff.push(aRa.splice(Math.floor(Math.random() * aRa.length), 1));
    i++;
  }
  return ff.flat();
}

function ComPareTwo(array, Con) {
  const szala1 = UntillEnd(array, Con);
  const szala2 = UntillEnd(array, Con);
  const MasaSzalki1 = szala1.reduce((a, b) => a + b);
  const MasaSzalki2 = szala2.reduce((a, b) => a + b);

  switch (
    MasaSzalki1 > MasaSzalki2 ||
    MasaSzalki2 > MasaSzalki1 ||
    MasaSzalki2 === MasaSzalki1
  ) {
    case MasaSzalki1 > MasaSzalki2 == true:
      return szala1.flat();
    case MasaSzalki2 > MasaSzalki1 == true:
      return szala2.flat();
    default:
      return array.flat();
  }
}
