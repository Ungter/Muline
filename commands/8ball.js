module.exports = {
    name: "8ball",
    aliases: ["8b"],
    args: true,
    execute(message, args) {
       
        
        const Discord = require('discord.js');
        const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});


    const eBall = Math.floor(Math.random() * 19);
    switch (eBall) {
      case 0:
        const ebEmbed = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("It is certain.")
        message.channel.send(ebEmbed)
      break;

      case 1:
        const ebEmbed1 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("It is decidedly so.")
        message.channel.send(ebEmbed1)
      break;

      case 2:
        const ebEmbed2 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Without a doubt.")
        message.channel.send(ebEmbed2)
      break;

      case 3:
        const ebEmbed3 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Yes – definitely.")
        message.channel.send(ebEmbed3)
      break;

      case 4:
        const ebEmbed4 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("You may rely on it.")
        message.channel.send(ebEmbed4)
      break;

      case 5:
        const ebEmbed5 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("As I see it, yes.")
        message.channel.send(ebEmbed5)
      break;

      case 6:
        const ebEmbed6 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Most likely.")
        message.channel.send(ebEmbed6)
      break;

      case 7:
        const ebEmbed7 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Outlook good.")
        message.channel.send(ebEmbed7)
      break;

      case 8:
        const ebEmbed8 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Yes.")
        message.channel.send(ebEmbed8)
      break;

      case 9:
        const ebEmbed9 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Signs point to yes.")
        message.channel.send(ebEmbed9)
      break;

      case 10:
        const ebEmbed0 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Reply hazy, try again.")
        message.channel.send(ebEmbed0)
      break;

      case 11:
        const ebEmbed01 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Ask again later.")
        message.channel.send(ebEmbed01)
      break;

      case 12:
        const ebEmbed02 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Better not tell you now.")
        message.channel.send(ebEmbed02)
      break;

      case 13:
        const ebEmbed03 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Cannot predict now.")
        message.channel.send(ebEmbed03)
      break;

      case 14:
        const ebEmbed04 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Concentrate and ask again.")
        message.channel.send(ebEmbed04)
      break;

      case 15:
        const ebEmbed05 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Don’t count on it.")
        message.channel.send(ebEmbed05)
      break;

      case 16:
        const ebEmbed06 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("My reply is no.")
        message.channel.send(ebEmbed06)
      break;

      case 17:
        const ebEmbed07 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("My sources say no.")
        message.channel.send(ebEmbed07)
      break;

      case 18:
        const ebEmbed08 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Outlook not so good.")
        message.channel.send(ebEmbed08)
      break;

      case 19:
        const ebEmbed09 = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setTitle("Very doubtful.")
        message.channel.send(ebEmbed09) 
      break;














      
    }
    },
};