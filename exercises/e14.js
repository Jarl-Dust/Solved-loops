// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data";

export function getClientsWithWrongBalance(bankAccounts) {
  // Your code goes here...
  let falseBalance = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    let deposits = bankAccounts[i].deposits;
    let withdrawals = bankAccounts[i].withdrawals;
    let balance = bankAccounts[i].balance;

    let sumDeposits = 0;
    let sumWithdrawals = 0;

    if (Array.isArray(deposits)) {
      for (let j = 0; j < deposits.length; j++) {
        sumDeposits += deposits[j];
      }
    }

    if (Array.isArray(withdrawals)) {
      for (let k = 0; k < withdrawals.length; k++) {
        sumWithdrawals += withdrawals[k];
      }
    }
    if (sumDeposits - sumWithdrawals !== balance) {
      falseBalance.push(bankAccounts[i]);
    }
  }

  return falseBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
