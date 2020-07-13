// nothing here yet...
const { getDadJoke } = require('./__workshop/exercise-4.1')
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2')
const { getGeekJoke } = require('./__workshop/exercise-4.3')

const handleJoke = async (type) => {
    switch (type) {
        case "dad":
            return await getDadJoke();
        case "tronald":
            return await getTronaldDumpQuote();
        case "geek": 
            return await getGeekJoke();
        default:
            break;
    }
}

module.exports = { handleJoke }