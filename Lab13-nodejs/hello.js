const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

   readline.question('What is your name? ', name => {
    console.log('welcome ' + name);
        readline.question('how old are you? ', age => {
            if(age < 16) console.log('You are not allowed to drive in Iowa');
            else console.log('Your age is ' + age);
            readline.close();
        })
   });
