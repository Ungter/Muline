module.exports = {
    name: "help",
    args: true,
    execute(message, args) {

        if (message.author.bot) return;
        const Discord = require('discord.js');
        const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
        const helpEmbed = new Discord.MessageEmbed()
        .setColor("#C0EBFF")  //I really had to type this much
        .setTitle(`The Muline bot's prefix is ***~*** (tilde not a hyphen)`)
        //.setDescription(`The Muline bot's prefix is ~  :eyes:\n\n\n**~pingㅤㅤ~serverㅤㅤ~beep**\n\n**~userㅤㅤ~av or ~avatarㅤㅤ~play (insert YT link here)**\n\n**~skip (the current playing song)**\n\n**~stop (disconnects the bot from vc and clears queue)**\n\n**~coin-flip**    **~8ball (incert question after)**`)
        .addField(`**~ping**`, `returns the average response time in ms`)
        .addField(`**~server**`, `displays the server status`)
        .addField(`**~user**`, `displays the user's name and their ID`)
        .addField(`**~av or ~avatar**`, `displays the user's avatar`)
        .addField(`**~play or ~p**`, `input the name of the audio you would want to play (yt links are broken rn)`)
        .addField(`**~coin-flip**`, `flips a coin`)
        .addField(`**~8ball**`, `ask a question and I shall answer`)
        .addField(`**~anime**`, `sends a random anime related pic`)
        .addField(`**~lackin**`, `sends a nsfw anime related pic`)
        .addField(`**~c**`, `gives info on the crypto you put in (ex:~c bitcoin)`)
      message.channel.send(helpEmbed) 



    },
};