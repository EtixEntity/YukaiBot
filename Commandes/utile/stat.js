const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "stat",
    description: "Nombre de serveur dû bot",
    utilisation: "",
    alias: ["stat","stats"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {

        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`Le bot est présent sûr : __**${bot.guilds.cache.size} serveurs,**__ *merci à eux !* <a:ECoeur1:754441320759820288>`)
  message.reply({embeds : [embed]})  
    }
})