export const zombieInvasion = () => {
  const houseArray = [...new Array(100)].map(() => {
    return { hasHuman: true };
  });

  const rounds = (numberOfRounds, zombieArr, houseArr) => {
    console.log("numberOfRounds: ", numberOfRounds);
    console.log("zombieArr.length: ", zombieArr.length);

    if (zombieArr.length >= 100) {
      return numberOfRounds;
    }

    let newZombies = [];

    zombieArr.forEach((zombie) => {
      const randomHouse = Math.floor(Math.random() * 100);
      const houseHasHuman = houseArr[randomHouse].hasHuman;
      if (houseHasHuman) {
        console.log("hasHuman");
        houseArr[randomHouse].hasHuman = false;
        newZombies.push("zombie");
      }
    });

    setTimeout(() => {
      rounds(numberOfRounds + 1, [...zombieArr, ...newZombies], houseArr);
    }, 1000);
  };

  rounds(1, ["zombie"], houseArray);

  // let rounds = 0;
  // let zombieCount = 0;
  // let zombies = ["zombie"];

  // // while (zombies.length < 100) {

  // const intervalId = setInterval(() => {
  //   console.log("round starts");
  //   console.log(zombies.length);
  //   let newZombies = [];

  //   zombies.forEach((zombie) => {
  //     const randomHouse = Math.floor(Math.random() * 100);

  //     const houseHasHuman = houseArray[randomHouse].hasHuman;

  //     if (houseHasHuman) {
  //       houseArray[randomHouse].hasHuman = false;
  //       newZombies.push("zombie");
  //       zombieCount++;

  //       if (zombieCount === 100) {
  //         clearInterval(intervalId);
  //       }
  //     }
  //   });

  //   zombies = [...zombies, ...newZombies];

  //   rounds++;
  // }, 500);

  // }

  // console.log("zombies.length: ", zombies.length);
  // console.log("rounds: ", rounds);
};
