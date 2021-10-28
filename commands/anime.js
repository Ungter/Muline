module.exports = {
    name: "pic",
    execute(message, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
        const randomanime = require('random-anime');
        const anime = randomanime.anime()
        const animeEmbed = new Discord.MessageEmbed()
          .setColor("#C0EBFF")
          .setImage(anime)
        message.channel.send(animeEmbed)
    },
};