const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answerOutput = '';

rl.question(`What's your name? Nicknames are also acceptable `, (name) => {
  answerOutput += `My name is ${name}. `
  rl.question(`What's an activity you like doing? `, (activity) => {
    answerOutput += `I like playing ${activity}. `
    rl.question(`What do you listen to while doing that? `, (listen) => {
      answerOutput += `I like listening to ${listen} while playing ${activity}. `
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (favmeal) => {
        answerOutput += `My favorite meal is ${favmeal}. `
        rl.question(`Which sport is your absolute favourite? `, (sport) => {
          answerOutput += `My absolute favourite sport is ${sport}. `
          rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superpower) => {
            answerOutput += `My superpower is ${superpower}. `
            console.log(answerOutput);
              rl.close();
          })
        })
      })
    })
  })
});