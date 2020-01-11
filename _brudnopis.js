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

// let value = [1, 2, 1, 1, 1, 1];
// let result = value.map((v, i) => {
//   return { value: v, index: i };
// });

// console.log(result);

let box = [1, 1, 1, 1, 1, 1, 1, 1, 8];

let keybox = box.map((v, i) => {
  return { value: v, index: i };
});

// console.log(keybox);

const firstcompare = compareTwo(keybox, 3);

// console.log(firstcompare);

const secondcompare = compareTwo(firstcompare, 1);

console.log("Najcięzsza kula była pod indeksem nr:" + secondcompare[0].index);

function untillEnd(aRa, cOn) {
  let i = 1;
  let ff = [];
  while (i <= cOn) {
    ff.push(aRa.splice(Math.floor(Math.random() * aRa.length), 1));
    i++;
  }
  return ff.flat();
}

function compareTwo(array, Con) {
  const szala1 = untillEnd(array, Con);
  const szala2 = untillEnd(array, Con);
  const masaSzalki1 = szala1.reduce((a, b) => a + b.value, 0);
  const masaSzalki2 = szala2.reduce((a, b) => a + b.value, 0);

  switch (
    masaSzalki1 > masaSzalki2 ||
    masaSzalki2 > masaSzalki1 ||
    masaSzalki2 === masaSzalki1
  ) {
    case masaSzalki1 > masaSzalki2 == true:
      return szala1;
    case masaSzalki2 > masaSzalki1 == true:
      return szala2;
    default:
      return array;
  }
}

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

// console.log(untillEnd2(array, 5));
// console.log(array);

// function untillEnd2(aRa, cOn) {
//   let end = aRa.length;
//   let szalka1 = [];
//   let szalka2 = [];
//   if (end > 6) {
//     while (end > cOn) {
//       szalka1.push(aRa.splice(Math.floor(Math.random() * aRa.length), 1));
//       --end;
//     }
//     return szalka1.flat();
//   } (end > 3) {
//     while (end > cOn) {
//       szalka2.push(aRa.splice(Math.floor(Math.random() * aRa.length), 1));
//       --end;
//     }
//     return szalka2.flat();
//   }
// }
// let array = [1, 1, 1, 1, 1, 1, 1, 3];

// let szalka1 = UntillEnd(array, 3);
// let szalka2 = UntillEnd(array, 3);
// let pudelko = UntillEnd(array, 3);

// function UntillEnd(aRa, cOn) {
//   let i = 1;
//   let ff = [];
//   while (i <= cOn) {
//     ff.push(aRa.splice(Math.floor(Math.random() * aRa.length), 1));
//     i++;
//   }
//   return ff.flat();
// }

// console.log(szalka1, szalka2, szalka3);
// console.log(UntillEnd(array, 3, szalka2));
// console.log(UntillEnd(array, 3, szalka3));
// // console.log(array);
// function comPare(szal1, szal2, szal3) {
//   const a = szal1.reduce((a, b) => a + b);
//   const b = szal2.reduce((a, b) => a + b);
//   const c = szal3.reduce((a, b) => a + b);
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

// function ComPareTwo(s1, s2, s3) {
//   const a = s1.reduce((a, b) => a + b);
//   const b = s2.reduce((a, b) => a + b);

//   switch (a > b || b > a || a == b) {
//     case a > b == true:
//       return s1.flat();
//     case b > a == true:
//       return s2.flat();
//     default:
//       return s3.flat();
//   }
// }
// console.log(ComPareTwo(szalka1, szalka2, pudelko));
