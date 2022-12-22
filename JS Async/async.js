function listenMusic(params) {}

async function dinner(params) {
  let unfreezeMeat = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("meatUnFrozen!");

      // resolve([{id: 1, name:"nan"}])
    }, 3000);
  });
  function veggies(params) {
    let peelVeggies = new Promise((resolve, reject) => {
      setTimeout(() => resolve("peeledTheVeggies!"), 1000);
    });
    function sliceTheVeggies(params) {
        let TheVeggies = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve("slicedTheVeggies!");
      
              // resolve([{id: 1, name:"nan"}])
            }, 2000);
          });
    }
    
    peelVeggies
      .then((result) => {
        console.log(result);
        return sliceTheVeggies();
      })
      .then((result) => console.log(result))
      .catch(console.error());
  }
  async function sliceTheMeat(params) {
    result = await unfreezeMeat
    let theMeat = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("slicedTheMeats!");
        }, 1000);
      });}

      veggies();
      sliceTheMeat();


  }
  
dinner();


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
