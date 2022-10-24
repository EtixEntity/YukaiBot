const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "youtubes",
    description: "Chaîne de Yukai",
    utilisation: "",
    alias: ["yts"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {
     
    
        message.reply("**Voici la Chaîne de** `Yukai`👑 \n\n https://www.youtube.com/channel/UCuG89KoF41Ze-ibTpJCzS4g")
    }})