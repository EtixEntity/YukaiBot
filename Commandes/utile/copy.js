const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

  name: "copy",
  description: "Permet de copié un salon !",
  utilisation: "",
  alias: ["copy"],
  permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
  category: "3) Utile",
  cooldown: 5,

  async run(bot, message, args, db) {
  message.delete()
    if(!message.guild) return;

    message.channel.clone({reason: `Channel nuked`}).then(c => c.setPosition(bot.channels.position) && c.send(`**Salon Copié !**`))

  }
})