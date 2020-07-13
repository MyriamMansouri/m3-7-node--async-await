// Exercise 3
// ----------

const doublesLater = (num) => {
  myPromise = new Promise((resolve, reject) => {
    if ( typeof num === 'number' ) {
      setTimeout( () => resolve(num * 2) , 2000)
    } else {
      reject('error')
    }
      
  })
   
  return myPromise
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  const op1 = await doublesLater(num)
  const op2 = await doublesLater(num)
  const op3 = await doublesLater(num)
  return op1 + op2 + op3
}
// 4. verification
handleSum(10).then((ans) => console.log(ans)).catch(err => console.log(err));
// handleSum("bacon").then((ans) => console.log(ans)).catch(err => console.log(err));
