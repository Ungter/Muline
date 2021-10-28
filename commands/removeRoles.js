module.exports = {
    name: "rem",
    execute(message, args) {
        // Use Discord's collection system to get all the roles in the server
        // Check if the user is Admin   
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You don't have permission to do that!");
            return;
        }

        // get the member mentioned
        let member = message.mentions.members.first();
        if (!member) {
            message.channel.send("Please mention a valid member of this server");
            return;
        }


        // Remove all roles from the user has
        message.member.roles.forEach(role => {
            member.removeRole(role);
        });

        message.channel.send("All roles have been removed from you!");


        
        





    }

};