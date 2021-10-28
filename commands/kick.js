module.exports = {
    name: "kick",
    aliases: ["k"],
    args: true,
    execute(message, args) {

        const Discord = require('discord.js');
        const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

        if (!message.guild) return;

        if (message.content.startsWith(`${prefix}kick`)) {
            const user = message.mentions.users.first();
            
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send("You don't have permission to kick this person")
        }

        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.channel.send("I don't have permission to kick this person")
        }

        if (user) {
        const member = message.guild.member(user);

            if (member) {
                member
                    .kick('view audit log for reason')
                    .then(() => {
                        message.reply(`Kicked ${user.tag}`);
                    })
                    .catch(err => {
                        message.reply('give me admin first bruh')
                        console.error(err)
                    })
            } else {
                message.reply('This member is not in this server!')
            }
        } else {
      message.reply('Did you really forget to mention a user');
    }
}
    },
};