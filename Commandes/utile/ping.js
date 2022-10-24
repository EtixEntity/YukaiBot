const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "ping",
    description: "Permet de connaître la latence du bot",
    utilisation: "",
    alias: ["ping"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {

        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async (err, req) => {

                

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`🏓 Mon ping est de : **${bot.ws.ping}ms !**`)
message.reply({embeds : [embed]})

        })}})