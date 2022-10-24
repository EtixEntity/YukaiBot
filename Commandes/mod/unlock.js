const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

  name: "unlock",
  description: "Permet d'ouvrrir un Salon / Catégorie ",
  utilisation: "[channel]",
  alias: ["unlock"],
  permission: Discord.Permissions.FLAGS.KICK_MEMBERS,
  category: "1) Modération",
  cooldown: 5,

  async run(bot, message, args, db) {
 
    let tgelexyr = new Discord.MessageEmbed()
      .setDescription(`Vous devez faire la commande comme ceci : \`unlock <#channel>\` !`)
      .setColor(`RANDOM`)
      .setTimestamp()

      let Channel = message.channel === undefined ? message.mentions.channels.first() : bot.channels.cache.get(args._hoistedOptions[0].value)

    if (!Channel)
      return message.reply({
        embeds: [tgelexyr]
      })
    const meperm = new Discord.MessageEmbed()
      .setDescription(`Veuillez m'accorder les permissions \`Gerer Les Salons\`  !`)
      .setColor(`RANDOM`)
      .setTimestamp()
    if (!message.guild.me.permissions.has("MANAGE_GUILD")) return message.reply({
      embeds: [meperm]
    })




    try {
      await Channel.permissionOverwrites.edit(message.guild.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
      });
      let embed1213 = new Discord.MessageEmbed()
        .setDescription(`<#${Channel.id}> à bien été ouvert 🔓`)
        .setColor('RANDOM')
        .setTimestamp()
      message.reply({
        embeds: [embed1213]  
      })

    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      Channel.permissionOverwrites.edit(message.guild.id, {
        SEND_MESSAGES: true
      })
    })
  }
})