const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "add",
    description: "Invite du bot !",
    utilisation: "",
    alias: ["add", "invite", "invites"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Cliquez ici pour inviter `Gestion [+]` sur un serveur !")
        .setURL(`https://discord.com/oauth2/authorize?client_id=${bot.user.id}&permissions=2146958591&scope=bot%20applications.commands`)
        .setTimestamp()
        .setFooter(`Demandé par : ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
        
  message.reply({embeds : [embed]})  
    }
})