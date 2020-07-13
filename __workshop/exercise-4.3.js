const request = require("request-promise");

const getGeekJoke = async () => {
  const joke = await request(
    `https://geek-jokes.sameerkumar.website/api?format=json`
  );
  return JSON.parse(joke).joke;
};

getGeekJoke().then((res) => console.log(res));

module.exports = { getGeekJoke };
