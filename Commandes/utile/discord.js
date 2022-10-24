const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "discord",
    description: "serveur",
    utilisation: "",
    alias: ["discord", "dis", "d"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {
      let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor("Serveur Support !")
      .setTitle("**Clique pour le lien !**")
      .setURL("https://discord.gg/jCBmuTqt2s")
      .setDescription("Merci à toi ! <a:ECoeur1:754441320759820288>")
      message.channel.send({embeds : [embed]})
    }
})