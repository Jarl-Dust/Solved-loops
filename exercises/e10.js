// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(bankAccounts, letter) {
  // Your code goes here...
  let letterName = [];

  for( let i = 0; i < bankAccounts.length; i++){
    let accountName = bankAccounts[i].name;

    for( let j = 0; j < accountName.length; j++){
      if(accountName[j].toLowerCase() === letter.toLowerCase()) {
        letterName.push(accountName);
        break;
      }
    }
  }
  return letterName;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
