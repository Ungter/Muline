module.exports = {
    name: "ping",
    execute(message, args) {
        if (message.author.bot) return;
        const Discord = require('discord.js');
        const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
        
        //if (!message.content.startsWith(prefix)) return;
        
        
        const pingEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription("Pong, ping is " + client.ws.ping + " ms")
         message.channel.send(pingEmbed);
         

        
        //const a = "https://cdn.discordapp.com/attachments/523170235331772417/804482465645199360/image0.jpg"
         //message.channel.send(a)
        
    },
};