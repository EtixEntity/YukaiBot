const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "dm",
    description: "Envoye un message privé",
    utilisation: "",
    alias: ["dm","mp"],
    permission: "",
    category: "4) Fun",
    cooldown: 1,

    async run(bot, message, args, db) {
  message.channel.send(`Элексир22`).then(sent => sent.delete({timeout: 5e3}))

    }})