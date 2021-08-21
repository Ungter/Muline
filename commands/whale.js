module.exports = {
    name: "whale",
    args: true,
    execute(message, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
        if (!args.length) {
            return message.reply(`You didn't provide anything to translate`)
          }
          
          let input = args
          const vowels = ['a', 'e', 'i', 'o', 'u']
          //message.channel.send(args)
          console.log(args)
          let resultA = []
      
          for (let i = 0; i < input.length; i++) {
            console.log(i)
            for (j = 0; j < vowels.length; j++) {
              console.log(j)
              if (input[i] === vowels[j]) {
                if (input[i] === 'e') {
                  resultA.push('ee')
                }
                if (input[j] === 'u') {
                  resultA.push('uu')
                } else {
                  resultA.push(input[i])
                }
              }
            }
          }
          message.reply(resultA.join("").toUpperCase())



    },
};