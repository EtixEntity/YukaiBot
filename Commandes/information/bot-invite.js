const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "bot-invite",
    description: "Invite un bot avec un Ping",
    utilisation: "",
    alias: ["bot-inv", "bot-invite", "bots"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {

            let user;
            if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
                user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
                if(!user) return message.reply("Aucune personne trouvée !")
            } else user = message.user ? message.user : message.author;
            let member = message.guild.members.cache.get(user.id)
    
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Nom du bot : ${user.tag}`)
            .setDescription(`Invitation **Slash** __avec__ Perm : https://discord.com/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot%20applications.commands \n\n Invitation __sans__ Perm : https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=0\n\n`)
            .setTimestamp()
            .setFooter('By Elexyr22#0022', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
      message.channel.send({embeds : [embed]})  
        
    }
})