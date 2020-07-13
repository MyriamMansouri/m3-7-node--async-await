const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  try {
    const joke = await request({
      uri: `https://api.tronalddump.io/random/quote`,
      headers: {
        Accept: "application/json",
      },
    });
    return JSON.parse(joke).value;
  } catch (err) {
    return err;
  }
};

getTronaldDumpQuote()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
