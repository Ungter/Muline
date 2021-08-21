module.exports = {
    name: "b",
    aliases: ["bp"],
    execute(message, args) {
        const Discord = require('discord.js');
        const CoinGeko = require('coingecko-api');

        //const CoinGekoClient = new CoinGecko();
        
        message.channel.send(/**CoinGekoClient.ping()**/"j")
        
         
        //func
        /**const getHistoricalPrice = async event => {
            let currency1API= "bitcoin";
            let indexDate="01-01-2020";
            let string = "https://api.coingecko.com/api/v3/coins/" + currency1API +"/history?date="+indexDate+"&localization=false";
            await fetch(string)
            .then(resp => resp.json())
            .then(data => message.channel.send(data.market_data.current_price.usd))
        };**/


        //message.channel.send(data)
        
    },
};