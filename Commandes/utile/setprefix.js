const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "setprefix",
    description: "Permet de changer le préfixe du bot",
    utilisation: "[préfixe]",
    alias: ["prefix", "setprefix", "sp", "set-prefix"],
    permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {

        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async (err, req) => {

            try {

                let prefix = args[0] || args._hoistedOptions[0].value
                if(!prefix) return message.reply("Veuillez indiquer un préfixe !")

                const ancienprefix = req[0].prefix;

                db.query(`UPDATE serveur SET prefix = '${prefix}' WHERE guildID = ${message.guild.id}`)

                message.reply(`Vous modifié votre prefix par : \`${ancienprefix}\` à \`${prefix}\` !`)

            } catch (err) {
                return message.reply("Veuillez indiquer un préfixe !")
            }
        })
    }
})