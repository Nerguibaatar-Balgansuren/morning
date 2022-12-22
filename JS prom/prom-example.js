//Цай чанах

//Саваа угаах
//Усаар хийх
//Gal deer tavih, galaa asaah
//Ideegee hiih
//Daws hiih

function listenMusic() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("sing song");
    }, 1000);
  });
}

// function washPot() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ready pot");
//     }, 1000);
//   });
// }

// function fillWater(watersize) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (watersize == 100) {
//         resolve([{ id: 1, name: "water full" }]);
//       } else {
//         reject("sav duureegui bna");
//       }
//     }, 2000);
//   });
// }

// function putIntoFire(isElect) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       isElect ? resolve("okay gal deer tavichlaa") : reject("toggui bna");
//     }, 2000);
//   });
// }

// function putIntoSaltAndTea(saltsize) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       saltsize >= 1 && saltsize <= 5
//         ? resolve("tsai maani saihan amttai bno")
//         : reject("tsai n shorvog bolno");
//     }, 2000);
//   });
// }

// washPot()
//   .then((result) => {
//     console.log(result);
//     return fillWater(100);
//   })
//   .then((result) => {
//     console.log(result);
//     return putIntoFire(true);
//   })
//   .then((result) => {
//     console.log(result);
//     return putIntoSaltAndTea(3);
//   })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finally"));

// function checkError() {
//   //buh input shalgadag

//   return new Promise((resolve, reject) => {
//     //if
//   });
// }

// let combined_promise = Promise.all([washPot(), listenMusic()]);

// console.log(combined_promise);

// combined_promise
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// console.log("a");
// console.log("b");
// console.log("c");
// for (i = 0; i < 10000; i++) {
//   for (j = 0; j < 10000; j++) {
//     //doing something
//   }
// }
// console.log("final");

//async

// async function fryEgg() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   let result = await promise; // энд 1 сэкүнд хүлээнэ

//   let music = await listenMusic();

//   console.log(music);

//   console.log(result);
// }
// console.log("a");
// console.log("b");
// fryEgg();
// console.log("final");

function prepare_breakfast() {
  let coffee_promise = new Promise((resolve, reject) =>
    resolve("coffee ready")
  );
  let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished frying egg");
    }, 1000);
  });
  let combined_promise = Promise.all([coffee_promise, egg_promise]);
  return combined_promise;
}

async function morning() {
  let result = await prepare_breakfast();
  console.log(result);
}

morning();

let afunc = async (a) => {
  let prom = await prepare_breakfast();
  console.log(prom);
};

afunc();
