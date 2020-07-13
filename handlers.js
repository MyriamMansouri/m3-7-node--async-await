// nothing here yet...
const { getDadJoke } = require('./__workshop/exercise-4.1')
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2')
const { getGeekJoke } = require('./__workshop/exercise-4.3')

const handleJoke (type) => {
    switch (type) {
        case "dad":
            return getDadJoke();
        case "tronald":
            return getTronaldDumpQuote();
        case "geek": 
            return getGeekJoke();
        default:
            break;
    }
}

module.exports = { handleJoke }