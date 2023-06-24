// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts } from "../data/data";

export function getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) {
  // Your code goes here...
  let accountsUnderTwoK = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    let deposits = bankAccounts[i].deposits;
    let sum = 0;

    if (deposits === undefined || deposits.length === 0) {
      accountsUnderTwoK.push(bankAccounts[i]);
    } else {
      for (let j = 0; j < deposits.length; j++) {
        sum += deposits[j];
      }
      if (sum < 2000) {
        accountsUnderTwoK.push(bankAccounts[i]);
      }
    }
  }
  return accountsUnderTwoK;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
