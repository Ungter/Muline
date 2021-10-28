module.exports = {
    name: "ban",
    args: true,
    execute(message, args) {
      // ban command
      if (message.member.hasPermission("BAN_MEMBERS")) {
        let member = message.mentions.members.first();
        if (!member) {
          return message.reply("Please mention a valid member of this server");
        }
        if (!member.bannable) {
          return message.reply("I cannot ban this user!");
        }
        let reason = args.slice(1).join(" ");
        if (!reason) {
          return message.reply("Please indicate a reason for the ban!");
        }
        member.ban(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
      } else {
        message.reply("You don't have permissions to use this command!");
      }
        
    }
};