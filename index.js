const Discord = require('discord.js');
const config  = require('./config.json');
const ytdl = require('ytdl-core');
const emojiChar = require('./emojiChar.js');
const yts = require("yt-search");
const randomanime = require('random-anime');
const fs = require('fs');
const fetch = require('node-fetch');
const CoinGecko = require('coingecko-api')
const { Server } = require('http');
const { SSL_OP_NO_QUERY_MTU, RSA_PKCS1_OAEP_PADDING } = require('constants');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const queue = new Map();
const prefix = "~"
const servers = {};
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const urmom = "https://tenor.com/view/explosion-boom-explode-gif-17383346"
//const ws = document.createTextNode("\u00A0")

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {


  console.log(`Logged in as ${client.user.tag}!`);
 });
//welcopme message
 client.on('guildMemberAdd', member => {
   const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
   if (!channel) return;
   channel.send(`Welcome to the server, ${member}, are u a bot?`)
 })
//end of welcome message

//bot status
client.on( "ready", () => {
  client.user.setActivity( "out for ~help", { type: 'WATCHING'})
})
//end of bot status

//normal texts
 client.on('message', message => {
    const susArgs = "SUS"
   if (message.content === `${prefix}beep`) {
    message.channel.send('Boop');
  } else if (message.content.includes('stfu')) {
    let authorId = message.author.id;
    if (authorId === '376178128835313694') return;
     	 message.channel.send('no you stfu');
    }
    else if (message.content.startsWith('hello')) {
    message.channel.send('Hello!')
  } else if (message.content === `${prefix}server`) {
    message.channel.send(`${message.guild.name}\nTotal members: ${message.guild.memberCount}\nTotal Bots: ${message.guild.botCount}`)
  } else if (message.content === `${prefix}user`) {
    message.channel.send(`${message.author.username}\nID: ${message.author.id}`)
  } else if (message.content.startsWith(`${prefix}avatar`)) {
    const user = message.mentions.users.first() || message.author
    const avatarEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(user.username)
      .setImage(user.displayAvatarURL());
    message.channel.send(avatarEmbed)
  } else if (message.content.startsWith(`${prefix}av`)) {
    const user = message.mentions.users.first() || message.author
    const avatarEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(user.username)
      .setImage(user.displayAvatarURL());
    message.channel.send(avatarEmbed)
  } else if (message.content.startsWith('bruh'.toLowerCase())) {
    message.channel.send('moment')
  } else if (message.content.includes('bruh')) {
    message.channel.send('moment')
  }  else if (message.content === `ip`) {
    const ipEmbed = new Discord.MessageEmbed()
      .setColor("#C0EBFF")
      .setTitle("")
    message.channel.send(ipEmbed)
  } else if (message.author.id === "822903032039735328") {
    message.delete({timeout:1000})
  }


/*
//matt's smp
client.on("message", async message => {
  if(message.author.bot || message.channel.type === 'dm') return;

  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = message.content.substring(message.content.indexOf(' ')+1);
  if (cmd === `${prefix}matsmp`) {
    if (message.channel.id === "764711907755425832") {
      let embed = new Discord.MessageEmbed()
        .setTitle('React to gain roles and access to your team channel')
        .setColor("#C0EBFF")
        .setDescription(":exclamation: for **Potato Gang** ")
        .setFooter("Note: You need to leave your current team to join a new one!")
        let msgEmbed = await message.channel.send(embed)                                                                                                                            
        msgEmbed.react(emojiChar['!'])
    } else if (message.channel.id === "764708136173961266") {
      let embed = new Discord.MessageEmbed()
        .setTitle('React to gain roles and access to your team channel')
        .setColor("#C0EBFF")
        .setDescription(":question: for **Steve Harvey** ")
        .setFooter("Note: You need to leave your current team to join a new one!")
        let msgEmbed = await message.channel.send(embed)
        msgEmbed.react(emojiChar['?'])
  }
}
})


client.on("messageReactionAdd", async (reaction, user) => {
  if (user.bot) return;
  if (!reaction.message.guild) return;

  if (reaction.partial) await reaction.fetch()
  if (reaction.message.partial) await reaction.message.fetch();

  if (reaction.message.channel.id === "764711907755425832") {
    if (reaction.emoji = emojiChar['!']) {
      await reaction.message.guild.members.cache.get(user.id).roles.add("764681995669864478")
    }
  }

  if (reaction.message.channel.id === "764708136173961266") {
    if (reaction.emoji = emojiChar['?']) {
      await reaction.message.guild.members.cache.get(user.id).roles.add("764697713476239380")
    }
  }
})

client.on("messageReactionRemove", async (reaction, user) => {
  if (user.bot) return;
  if (!reaction.message.guild) return;

  if (reaction.partial) await reaction.fetch()
  if (reaction.message.partial) await reaction.message.fetch();

  if (reaction.message.channel.id === "764711907755425832") {
    if (reaction.emoji = emojiChar['!']) {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("764681995669864478")
    }
  }

  if (reaction.message.channel.id === "764708136173961266") {
    if (reaction.emoji = emojiChar['?']) {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("764697713476239380")
    }
  }
}) 
*/
});
//end of normal texts

//command handling and crypto
client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  
  const command = args.shift().toLowerCase();
  

  //crypto
  if (command === 'c') {
    const CoinGeckoClient = new CoinGecko();
    //var reply = data.gecko_says //extracts the data from  the JSON file
    let { data } = await CoinGeckoClient.coins.fetch(args)
    
    var name = data.name
    var symbol = data.symbol
    var circSupply = data.market_data.circulating_supply
    var allTimeHighUSD = data.market_data.ath.usd
    var logo = data.image.large
    var LU = data.last_updated
    var algo = data.hashing_algorithm

    var ud = name, symbol, circSupply, allTimeHighUSD, logo, LU, algo
    
      const coinEmbed = new Discord.MessageEmbed()
      .setColor("#C0EBFF")
      .setTitle(name, symbol)
      .setImage(logo)
      .addField(`**Price:**`, allTimeHighUSD, " USD")
      .addField(`**Circulating Supply:**`, circSupply, `coins`)
      .addField(`**Hashing Algo:**`, algo)
      .addField("**Last updated at**", LU)
      
    message.channel.send(coinEmbed)
     
  } 
  //end of crypto

  if (!client.commands.has(command)) return;
  /*const command = client.commands.get(commandName)
	  || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

  if (command.args &&  !args.length) {0
    return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
  }*/
  try {
    client.commands.get(command).execute(message, args);
    //command.execute(message.args);
  } catch (error) {
	  console.error(error);
	  message.channel.send('there was an error trying to execute that command!');
  }  
});

//music bot part
client.on("message", async message => {


  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}p`)) {
    execute(message, serverQueue);
    return
  } else if (message.content.startsWith(`${prefix}s`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}loop`)) {
    if (!message.member.voice.channel) return message.channel.send("Go into a vc to loop the music :)")
    if (!serverQueue) return message.channel.send("There is nothing currently playing")

    serverQueue.loop = !serverQueue.loop

    const loopEmbed = new Discord.MessageEmbed()
      .setColor("#C0EBFF")
      .setDescription(`Looping is now ${serverQueue.loop ? `**Enabled**` : `**Disabled**`}`)
    message.channel.send(loopEmbed)
    return 
  } else if (message.content.startsWith(`${prefix}pause`)) {
      if (!message.member.voiceChannel) return message.channel.send("Go into a vc to pause the music :)")
      if (!serverQueue) return message.channel.send("There is nothing currently playing")
      if (!serverQueue.playing) return message.channel.send("This audio is already paused")

      serverQueue.playing = false
      serverQueue.connection.dispatcher.pause()
      const pauseEmbed = new Discord.MessageEmbed()
        .setColor("#C0EBFF")
        .setDescription(`I have paused **${song.title} for you :) [${message.author}]`)
      message.channel.send(pauseEmbed)

      return undefined
  }  else if (message.content.startsWith(`${prefix}resume`)) {
    if (!message.member.voiceChannel) return message.channel.send("Go into a vc to pause the music :)")
    if (!serverQueue) return message.channel.send("There is nothing currently playing")
    if (serverQueue.playing) return message.channel.send("This audio is already playing")

    serverQueue.playing = true
    serverQueue.connection.dispatcher.resume()
    const resumeEmbed = new Discord.MessageEmbed()
      .setColor("#C0EBFF")
      .setDescription(`I have paused ${song.title} for you. [${message.author}]` )
    message.channel.send(resumeEmbed)

    return undefined
  } 
  
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  let song;
  if (ytdl.validateURL(args[1])) {
    
    const songInfo = await ytdl.getInfo(args[1]);
    song = {
      title: songInfo.title,
      url: songInfo.video_url
    };
  } else {
    const { videos } = await yts(args.slice(1).join(" "));
    if (!videos.length) return message.channel.send("No songs were found");
    song = {
      title: videos[0].title,
      url: videos[0].url
    }
  }


  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    const aqEmbed = new Discord.MessageEmbed()
      .setColor("#C0EBFF")
      .setTitle(`:minidisc:`)
      .setDescription(` **${song.title}** has been added by the queue by [${message.author}]`)
      message.channel.send(aqEmbed);
    return 
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to skip the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      if (!serverQueue.loop) serverQueue.songs.shift();
      // play the song that is now at the front of the queue with the highest audio quality
      play(guild, serverQueue.songs[0], {quality: "highestaudio"});
      // play(guild, serverQueue.songs[0], {quailty: 'highestaudio', highWaterMark: 1 << 25});
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  const spEmbed = new Discord.MessageEmbed()
    .setColor("#C0EBFF")
    .setDescription(`:dvd: \n\nNow playing: **${song.title}**`)
  //.addField(`**Duration**`, `**\`${song.durationh}\`** Hours, **\`${song.durationm}\`** Minutes and **\`${song.durations}\`** Seconds`, true)
  serverQueue.textChannel.send(spEmbed);
}
//end of music bot

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

client.login('');
