let box = [1, 1, 1, 1, 1, 1, 1, 1, 8];

let keybox = box.map((v, i) => {
  return { value: v, index: i };
});

console.log(keybox);

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
