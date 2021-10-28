// Export the module
module.exports = {
    name: "kek",
    execute(message, args) {

        // Send a embed that contains a random image of a catgirl using a api
        message.channel.send({
            embed: {
                color: 0x00ff00,
                title: "Kek",
                image: {
                    url: "https://media.discordapp.net/attachments/717087150109879554/717087150109879554/image0.jpg"
                }
            }
        });
    }
}