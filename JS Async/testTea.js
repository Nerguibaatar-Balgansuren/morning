function washPot() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ready pot");
    }, 1000);
  });
}

function fillWater(watersize) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (watersize == 100) {
        resolve([{ id: 1, name: "water full" }]);
      } else {
        reject("sav duureegui bna");
      }
    }, 2000);
  });
}

function putIntoFire(isElect) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isElect ? resolve("okay gal deer tavichlaa") : reject("toggui bna");
    }, 2000);
  });
}

function putIntoSaltAndTea(saltsize) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      saltsize >= 1 && saltsize <= 5
        ? resolve("tsai maani saihan amttai bno")
        : reject("tsai n shorvog bolno");
    }, 2000);
  });
}

washPot()
  .then((result) => {
    console.log(result);
    return fillWater(100);
  })
  .then((result) => {
    console.log(result);
    return putIntoFire(true);
  })
  .then((result) => {
    console.log(result);
    return putIntoSaltAndTea(3);
  })
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("finally"));