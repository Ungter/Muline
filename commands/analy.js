module.exports = {
    name: "analy",
    description: "Analyze a user's stats",
    usage: "analy [message]",
    execute(message, args) {
        const Discord = require('discord.js');
        // Determine whether the sentiment of text is positive
        // Use a web service
        // Compatible with Node.js

        if (args === "matthew") {
            message.channel.send("You're a fucking whore");
            return;
        }
        function sentiment(text) {
            return new Promise(function (resolve, reject) {
                var request = require('request');
                var url = 'http://text-processing.com/api/sentiment/';
                var formData = {
                    text: text
                };
                request.post({
                    url: url,
                    formData: formData
                }, function (err, httpResponse, body) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(JSON.parse(body));
                    }
                });
            });
        }

        // Get the user's message
        var messageText = message.content.substr(7);

        // Analyze the sentiment of the message
        sentiment(messageText).then(function (result) {
            
            // Positive
            if (result.label == "pos") {
                var embed = new Discord.MessageEmbed()
                    .addField(messageText)
                    .setTitle("Sentiment Analysis")
                    .setColor("#C0EBFF")
                    .setDescription("The sentiment of your message is **positive**.")
                    .setFooter("Muline");
                    
                message.channel.send(embed);
            }
            // Negative
            else if (result.label == "neg") {
                var embed1 = new Discord.MessageEmbed()
                    .addField(messageText)
                    .setTitle("Sentiment Analysis")
                    .setColor("#C0EBFF")
                    .setDescription("The sentiment of your message is **negative**.")
                    .setFooter("Muline");
                    
                message.channel.send(embed1);
            }
            // Neutral
            else {
                var embed11 = new Discord.MessageEmbed()
                    .addField(messageText)
                    .setTitle("Sentiment Analysis")
                    .setColor("#C0EBFF")
                    .setDescription("The sentiment of your message is **neutral**.")
                    .setFooter("Muline");
                    
                message.channel.send(embed11);
            }
        });





    }
}