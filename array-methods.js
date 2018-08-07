var dataset = require('./dataset.json');

const balances = dataset.bankBalances;
/*
  create an array with accounts from bankBalances that are
  greater than 100000
  assign the resulting new array to `hundredThousandairs`
*/
var hundredThousandairs = null;
let newArray = [];
const greatAccounts = balances.forEach(account => {
  if (account.amount > 100000) {
    newArray.push(account);
  }
})
hundredThousandairs = newArray;

/*
  DO NOT MUTATE DATA.

  create a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `rounded`

  `rounded` value is `amount` rounded to the nearest dollar

  Example:
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting new array to `datasetWithRoundedDollar`
*/
var datasetWithRoundedDollar = null;
const roundedAccounts = balances.map(account => {
  console.log("account", account); // not mutated 
  return {
    "amount": account.amount, 
    "state": account.state,
    "rounded": Math.round(account.amount)
  }
})
datasetWithRoundedDollar = roundedAccounts;


/*
  DO NOT MUTATE DATA.

  create a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `roundedDime`

  `roundedDime` value is `amount` rounded to the nearest 10th of a cent

  Example 1
    {
      "amount": "134758.46",
      "state": "HI"
      "roundedDime": 134758.5
    }
  Example 2
    {
      "amount": "134758.44",
      "state": "HI"
      "roundedDime": 134758.4
    }
  assign the resulting new array to `roundedDime`
*/
var datasetWithRoundedDime = null;
const tenthAccount = balances.map(account => {
  return {
    "amount": account.amount,
    "state": account.state,
    "roundedDime": (Math.round((account.amount) * 10) / 10)
  }
})
datasetWithRoundedDime = tenthAccount;


// set sumOfBankBalances to be the sum of all value held at `amount` for each bank object
var sumOfBankBalances = null;
let sum = 0;

const sumOfEverything = balances.reduce((a, b) => {
  console.log("a", a);
  console.log("b", b)
  let answer = a + parseFloat(b.amount);
  return (Math.round(answer * 100) / 100)
  
}, sum);

sumOfBankBalances = sumOfEverything;


/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it rounded to the nearest cent
  and then sum it all up into one value saved to `sumOfInterests`
 */

var sumOfInterests = null;

sumOfInterests = balances.filter(account => 
  
account.state === "WI" || account.state === "IL" || account.state === "WY" || account.state === "OH" || account.state === "GA" || account.state === "DE").reduce((a, b) => {
  console.log("a", a);
  console.log("b", b)
  let answer = a + (parseFloat(b.amount)) * 0.189;
  return (Math.round(answer * 100) / 100)
  
}, 0);

// console.log("filtered", filterStates)

// let getInterest = 0
// const sumTheInterest = filterStates.reduce((a, b) => {
//   console.log("a", a);
//   console.log("b", b)
//   let answer = a + (parseFloat(b.amount)) * 0.189;
//   return (Math.round(answer * 100) / 100)
  
// }, getInterest);

// sumOfInterests = sumTheInterest;

/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table where

  the key is:
    the two letter state abbreviation
  and the value is:
    the sum of all amounts from that state
    the value must be rounded to the nearest cent

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest 10th of a cent before moving on.
  )
 */
var stateSums = null;
let newObj = {};
const sumTheStates = balances.map(account => {
  if (!newObj.hasOwnProperty(account.state)) {
    newObj[account.state] = (Math.round((account.amount) * 100)/100)
  }
  else {
    newObj[account.state] = (Math.round((newObj[account.state] + parseFloat(account.amount)) * 100)) / 100
    console.log("newObj", newObj)
  }
})
stateSums = newObj;


/*
  for all states *NOT* in the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  sum the amount for each state (stateSum)
  take each `stateSum` and calculate 18.9% interest for that state
  sum the interest values that are greater than 50,000 and save it to `sumOfHighInterests`

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest 10th of a cent before moving on.
  )
 */

var sumOfHighInterests = null;

const sumOfOtherStates = balances.filter(account => 
  account.state !== "WI" && account.state !== "IL" && account.state !== "WY" && account.state !== "OH" && account.state !== "GA" && account.state !== "DE"
); 

let stateInterests = {};
const getInterestOfOtherStates = sumOfOtherStates.map(account => {
  if (!stateInterests.hasOwnProperty(account.state)) {
    stateInterests[account.state] = (account.amount * 0.189)
  }
  else {
    stateInterests[account.state] =(stateInterests[account.state] + parseFloat(account.amount * 0.189))
  }
})

const getHigherNumbers = Object.values(stateInterests).filter(account => account > 50000)

sumOfHighInterests = getHigherNumbers.reduce((a, b) => {
  let answer = a + parseFloat(b);
  return (Math.round(answer * 100) / 100)
}, 0);





/*
  set `lowerSumStates` to be an array of two letter state
  abbreviations of each state where the sum of amounts
  in the state is less than 1,000,000
 */
var lowerSumStates = null;

/*
  aggregate the sum of each state into one hash table
  `higherStateSums` should be the sum of all states with totals greater than 1,000,000
 */
var higherStateSums = null;

/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware

  Check if all of these states have a sum of account values
  greater than 2,550,000

  if true set `areStatesInHigherStateSum` to `true`
  otherwise set it to `false`
 */
var areStatesInHigherStateSum = null;

/*
  Stretch Goal && Final Boss

  set `anyStatesInHigherStateSum` to be `true` if
  any of these states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  have a sum of account values greater than 2,550,000
  otherwise set it to be `false`
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs : hundredThousandairs,
  datasetWithRoundedDollar : datasetWithRoundedDollar,
  datasetWithRoundedDime : datasetWithRoundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};
