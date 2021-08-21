module.exports = {
    name: "ban",
    args: true,
    execute(message, args) {

        const Discord = require('discord.js');
        const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send("You don't have perms to ban this member")
          };
      
          if (message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send("I don't have perms to ban this person")
          };
      
          let User = message.guild.member(message.mentions.users.first())
          if (!User) {
            return message.channel.send("Mention a user first")
          };
      
          const person = message.mentions.users.first()
          if (person) {
            const member = message.guild.member(person)
           
      
            if (member) {
              member
                .ban({days: 7})
                .then(() => {
                  message.reply(`${user.tag} was banned`)
                })
                .catch(console.error)
            } else {
              message.channel.send("This person isn't in the server")
            }
          } 
    },
};