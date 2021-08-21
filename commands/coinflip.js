module.exports = {
    name: "coinflip",
    aliases: ['coinf', 'cf', 'coin-flip'],
    execute(message, args) {

        const Discord = require('discord.js');
        //const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

        if (message.author.bot || message.channel === 'dm') return;

        const coinF = Math.floor(Math.random() * 2);
        switch (coinF) {
        case 0:
            const coinEmbed = new Discord.MessageEmbed()
            .setColor("#C0EBFF")
            .setTitle("Heads!")
            message.channel.send(coinEmbed)
        break;

        case 1:
            const coinEmbed1 = new Discord.MessageEmbed()
            .setColor("#C0EBFF")
            .setTitle("Tails")
            message.channel.send(coinEmbed1)
        break;
    }
    },
};