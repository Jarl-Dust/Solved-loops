// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(bankAccounts) {
  // Your code goes here...
  let greatestBalance = 0;
  let greatestAccount = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    let balance = bankAccounts[i].balance;
    if (balance > greatestBalance) {
      greatestBalance = balance;
      greatestAccount = [bankAccounts[i]];
    } else if (balance === greatestBalance) {
      greatestAccount.push(bankAccounts[i]);
    }
  }
  return greatestAccount;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
