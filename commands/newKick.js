// export a module
module.exports = {
    name: "k",
    aliases: ["k"],
    args: true,
    execute(message, args) {

        // check if the user has the permission to kick
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send("You don't have the permission to kick members!");
            return;
        } else if (message.member.user.id == args[0]){
            message.channel.send("You can't kick yourself!");
            return;
            
        } else {
            // get the user to kick
            let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!user) {
                message.channel.send("Can't find user!");
                return;
            } // else kick the user
            else {
                // kick the user
                user.kick(args.slice(1).join(" "))
                    .then(() => {
                        message.channel.send(`${user.user.username} has been kicked!`);
                    })
                    .catch(err => {
                        message.channel.send("I can't kick this user!");
                        console.log(err);
                    });
            }

        }
    }
}