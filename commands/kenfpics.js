module.exports = {
    name: 'lackin',
    description: 'Nice one!',
    execute(message, args) {
    const Discord = require('discord.js');
    const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
    const randomanime = require('random-anime');
        
       const a = "https://cdn.discordapp.com/attachments/523170235331772417/804482465645199360/image0.jpg"
       const b = "https://cdn.discordapp.com/attachments/523170235331772417/804482465854521364/image1.png"
       const c = "https://cdn.discordapp.com/attachments/523170235331772417/804482466295054356/image2.png"
       const d = "https://cdn.discordapp.com/attachments/523170235331772417/804482466579742720/image3.png"
       const e = "https://cdn.discordapp.com/attachments/523170235331772417/804482466853158952/image4.png"
       const f = "https://cdn.discordapp.com/attachments/523170235331772417/804482467301031946/image5.png"
       const g = "https://cdn.discordapp.com/attachments/523170235331772417/804482467695427614/image6.png"
       const h = "https://cdn.discordapp.com/attachments/523170235331772417/804482467947872306/image7.png"
       const i = "https://cdn.discordapp.com/attachments/523170235331772417/804482468316053554/image8.png"
       const j = "https://cdn.discordapp.com/attachments/523170235331772417/804482468757110844/image9.png"
       const k = "https://cdn.discordapp.com/attachments/523170235331772417/804482548448755712/image0.png"
       const l = "https://cdn.discordapp.com/attachments/523170235331772417/804482592794607686/image0.png"
       const m = "https://cdn.discordapp.com/attachments/523170235331772417/804482627570499625/image0.png"
       const n = "https://cdn.discordapp.com/attachments/523170235331772417/804482675011616800/image0.png"
       const o = "https://cdn.discordapp.com/attachments/523170235331772417/804482722503327754/image0.png"
       const p = "https://cdn.discordapp.com/attachments/523170235331772417/804482779403386890/image0.png"
       const q = "https://cdn.discordapp.com/attachments/523170235331772417/804482847972917268/image0.png"
       const r = "https://cdn.discordapp.com/attachments/523170235331772417/804482995905757214/image0.png"
       const s = "https://cdn.discordapp.com/attachments/523170235331772417/804483049218899978/image0.png"
       const t = "https://cdn.discordapp.com/attachments/523170235331772417/804483101068886026/image0.png"
       const u = "https://cdn.discordapp.com/attachments/523170235331772417/804483140625891389/image0.png"
       const v = "https://cdn.discordapp.com/attachments/523170235331772417/804483205847580682/image0.png"
       const w = "https://cdn.discordapp.com/attachments/523170235331772417/804483245734887424/image0.png"
       const x = "https://cdn.discordapp.com/attachments/523170235331772417/804483284959887421/image0.png"
       const y = "https://cdn.discordapp.com/attachments/523170235331772417/804483339415322644/image0.jpg"
       const z = "https://cdn.discordapp.com/attachments/523170235331772417/804483453361061896/image0.jpg"

        if (message.channel.nsfw) {
          const nsfw1 = Math.floor(Math.random() * 4);
          const nsfw = randomanime.nsfw()
          
          switch (nsfw1) {
    
            case 0:
    
              
              const nsfwEmbed = new Discord.MessageEmbed()
                .setColor("#C0EBFF")
                .setImage(nsfw)
              message.channel.send(nsfwEmbed)
            break;
    
            case 1:
    
              
              const nsfwEmbed1 = new Discord.MessageEmbed()
                .setColor("#C0EBFF")
                .setImage(nsfw)
              message.channel.send(nsfwEmbed1)
            break;
    
            case 2:
    
              
              const nsfwEmbed2 = new Discord.MessageEmbed()
                .setColor("#C0EBFF")
                .setImage(nsfw)
              message.channel.send(nsfwEmbed2)
            break;
               
            case 3:
                const kenfN = Math.floor(Math.random() * 25);

                switch (kenfN) {

                    case 0:

                        const kenfEmbed = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(a)
                        message.channel.send(kenfEmbed)

                    break;

                    case 1:

                        const kenfEmbed1 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(b)
                        message.channel.send(kenfEmbed1)

                    break;

                    case 2:

                        const kenfEmbed2 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(c)
                        message.channel.send(kenfEmbed2)

                    break;

                    case 3:

                        const kenfEmbed3 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(d)
                        message.channel.send(kenfEmbed3)

                    break;

                    case 4: 
            
                        const kenfEmbed4 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(f)
                        message.channel.send(kenfEmbed4)

                    break;

                    case 5:

                        const kenfEmbed5 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(g)
                        message.channel.send(kenfEmbed5)

                    break;
                    
                    case 6:

                        const kenfEmbed6 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(h)
                        message.channel.send(kenfEmbed6)

                    break;

                    case 7:

                        const kenfEmbed7 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(i)
                        message.channel.send(kenfEmbed7)

                    break;

                    case 8:

                        const kenfEmbed8 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(j)
                        message.channel.send(kenfEmbed8)

                    break;

                    case 9:

                        const kenfEmbed9 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(k)
                        message.channel.send(kenfEmbed9)

                    break;

                    case 10:

                        const kenfEmbed10 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(l)
                        message.channel.send(kenfEmbed10)

                    break;

                    case 11:

                        const kenfEmbed11 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(m)
                        message.channel.send(kenfEmbed11)

                    break;

                    case 12:

                        const kenfEmbed12 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(n)
                        message.channel.send(kenfEmbed12)

                    break;

                    case 13:

                        const kenfEmbed13 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(o)
                        message.channel.send(kenfEmbed13)

                    break;

                    case 14:

                        const kenfEmbed14 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(p)
                        message.channel.send(kenfEmbed14)

                    break;

                    case 15:

                        const kenfEmbed15 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(q)
                        message.channel.send(kenfEmbed15)

                    break;

                    case 16:

                        const kenfEmbed16 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(r)
                        message.channel.send(kenfEmbed16)

                    break;

                    case 17:

                        const kenfEmbed17 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(s)
                        message.channel.send(kenfEmbed17)

                    break;
                    
                    case 18:

                        const kenfEmbed18 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(t)
                        message.channel.send(kenfEmbed18)

                    break;

                    case 19:

                        const kenfEmbed19 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(u)
                        message.channel.send(kenfEmbed19)

                    break;

                    case 20:

                        const kenfEmbed20 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(v)
                        message.channel.send(kenfEmbed20)

                    break;

                    case 21:

                        const kenfEmbed21 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(w)
                        message.channel.send(kenfEmbed21)

                    break;

                    case 22:

                        const kenfEmbed22 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(x)
                        message.channel.send(kenfEmbed22)

                    break;

                    case 23:

                        const kenfEmbed23 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(y)
                        message.channel.send(kenfEmbed23)

                    break;

                    case 24:

                        const kenfEmbed24 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(z)
                        message.channel.send(kenfEmbed24)

                    break;

                    case 25:

                        const kenfEmbed25 = new Discord.MessageEmbed()
                            .setColor("#C0EBFF")
                            .setImage(e)
                        message.channel.send(kenfEmbed25)

                    break;
                }
            
    
            break;
          }
          
        } else {
            message.channel.send("This is not a nsfw channel.")
        }
        
    
        
    }
}