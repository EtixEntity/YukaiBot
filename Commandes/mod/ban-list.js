const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const talkedRecently = new Set();
module.exports = new Command({

  name: "ban-list",
  description: "Permet de savoir qui a été ban du serveur",
  utilisation: "",
  alias: ["banlist", "ban-list"],
  permission: Discord.Permissions.FLAGS.BAN_MEMBERS,
  category: "1) Modération",
  cooldown: 5,

    async run(bot, message, args, db) {
      const bans = new Map();
      message.guild.bans.fetch().then(g => {
                      bans[g.id] = g;
                      let banlist = (`${bans[g.id].map(ge => `\n ${ge.user.tag} : ${ge.user.id}`).join('\n')}`)
                              try {    
      
                      let noembed = new Discord.MessageEmbed()
                      .setColor("RANDOM")
                      .setDescription(`Il n'y a aucun utilisateur bannis sur ce serveur.`)
                      .setAuthor(`Membre banni sur ${message.guild.name}`)
                    
      
                      if(banlist.length === 0) return message.reply({embeds : [noembed]})
      
                      const embed = new Discord.MessageEmbed()
                          .setDescription(banlist)
                          .setAuthor(`Membre banni sur ${message.guild.name}`)
                      .setColor("RANDOM")
                      message.reply({embeds : [embed]})
      
                            } catch (err) {
             const embed = new Discord.MessageEmbed()
      
                  .addField(`Banni sur le serveur`, `Désolé, mais votre serveur comporte trop d'utilisateurs bannis. Je ne peux donc pas l'afficher. Discord ne le permet pas.`)
                  .setColor("RANDOM")
                  .setTimestamp()
      
              message.reply({embeds : [embed]})
                            }
      
              });
    }
})