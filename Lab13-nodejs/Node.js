const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

   var total =0;
   var getNumber = function () {
    readline.question('Input number: ', function (answer) {
      if (answer === 'stop') //we need some base case, for recursion
        return readline.close(); //closing RL and returning from function.
      total += parseInt(answer);
      console.log('Sum = ', total);
      getNumber(); //Calling this function again to ask new question
    });
  };
  getNumber();