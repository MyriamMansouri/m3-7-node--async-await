// Exercise 1
// ------------

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === "string")
      ? resolve(array.map((word) => word.toUpperCase()))
      : reject("Error: Not all items in the array are strings!");
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === "string")
      ? resolve(array.sort())
      : reject("Error: Something went wrong with sorting words.");
  });
};

const textTransform = async (array) => {
  try {
    const allCapsArray = await makeAllCaps(array);
    return await sortWords(allCapsArray);
  } catch (err) {
    return err;
  }
};

textTransform(["cucumber", "tomatos", "avocado"]).then(res => console.log(res));
textTransform(["cucumber", 44, true]).then(res => console.log(res));;
