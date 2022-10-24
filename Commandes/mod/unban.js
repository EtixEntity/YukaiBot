const { MessageEmbed } = require('discord.js');


const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "unban",
    description: "Permet de de-bannir un utilisateur",
    utilisation: "[membre]",
    alias: ["unban"],
    permission: Discord.Permissions.FLAGS.BAN_MEMBERS,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {
        
        let member = args[0]

        if (!member) {
             return message.reply(`Merci de mettre l'ID de la personne que vous shouaitez débanir !`)
        }
        /* Logs a faire ! */

        try {
            message.guild.bans.fetch().then(bans => {
                message.guild.members.unban(member)
            })
            await message.reply(`<@${member}> est débannis du serveur ! `)
        } catch (e) {
            return message.reply(`une erreur est survenue merci de ressayer !`)
        }
        
      }
      })
