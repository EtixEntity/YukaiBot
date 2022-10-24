const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

  name: "lock",
  description: "Permet de fermez un Salon / Catégorie ",
  utilisation: "[channel]",
  alias: ["lock"],
  permission: Discord.Permissions.FLAGS.KICK_MEMBERS,
  category: "1) Modération",
  cooldown: 5,

    async run(bot, message, args, db) {

      let embed21 = new Discord.MessageEmbed()
      .setDescription(`Vous devez faire la commande comme ceci : \`lock <#channel>\` !`)
      .setColor(`RANDOM`)
      .setTimestamp()

      let Channel = message.channel === undefined ? (message.mentions.channels.first()) : bot.channels.cache.get(args._hoistedOptions[0].value)
   if (!Channel) 
   return message.reply({embeds : [embed21]})

       const meperm = new Discord.MessageEmbed()
       .setDescription(`Veuillez m'accorder les permissions \`Gerer Les Salons\`  !`)
       .setColor(`RANDOM`)
       .setTimestamp()
   if (!message.guild.me.permissions.has("MANAGE_GUILD")) return message.reply({embeds : [meperm]})

   

   try {
    await Channel.permissionOverwrites.edit(message.guild.id, {
        SEND_MESSAGES: false
    });
let embed = new Discord.MessageEmbed()
.setDescription(`<#${Channel.id}> à bien été fermer 🔒`)
.setColor('RANDOM')
.setTimestamp()
    message.reply({embeds : [embed]})
} catch (err) {
    console.log(err);
}
       
       }
    })