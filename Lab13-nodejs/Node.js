const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

   var recursiveAsyncReadLine = function () {
    readline.question('Input number ', function (answer) {
      if (answer === 'exit') //we need some base case, for recursion
        return readline.close(); //closing RL and returning from function.
      console.log('Got it! Your answer was: "', answer, '"');
      recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
  };
  
  recursiveAsyncReadLine();