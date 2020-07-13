const request = require("request-promise");

// getDadJoke
const getDadJoke = async () => {
  try {
    const joke = await request({
      uri: `https://icanhazdadjoke.com/`,
      headers: { Accept: "application/json" },
    });
    const parseJoke = JSON.parse(joke).joke;
    return parseJoke;
  } catch (err) {
    return err;
  }
};
// 4.1
getDadJoke()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
