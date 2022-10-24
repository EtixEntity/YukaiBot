const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "userinfo",
    description: "Permet d'avoir des informations sur un utilisateur",
    utilisation: "",
    alias: ["userinfo", "ui"],
    permission: "",
    category: "2) Information",
    cooldown: 0,

    async run(bot, message, args, db) {

      let user;
      if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
          user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
          if(!user) return message.reply("Aucune personne trouvée !")
      } else user = message.user ? message.user : message.author;



            let Embed = new Discord.MessageEmbed()
            .setColor(bot.color)
            .setTitle(`Informations sur ${user.tag}`)
            .setThumbnail(user.displayAvatarURL({dynamic: true}))
            .addField("Informations sur l'utilisateur :", `**Pseudo** : ${user.username}\n**Tag** : ${user.discriminator}\n**Robot** : ${user.bot ? "Oui" : "Non"}\n**Badges** : ${(await user.fetchFlags()).toArray().length >= 1 ? (await user.fetchFlags()).toArray().join(" ") : "Non"}\n**Date de création du compte** : \n <t:${Math.floor(user.createdAt / 1000)}:F>\n`)
            .addField("Informations sur l'utilisateur :", `**Surnom** : ${user.nickname ? user.nickname : "Aucun"}\n**Date d'arrivée sur le serveur** : *Patch en cours*`) 
            //.addField(`${Math.floor(user.joinedTimestamp  / 1000)}`) A PATCH !
            .setImage(await (await bot.users.fetch(user.id, {force: true})).bannerURL({dynamic: true, size: 4096}))
            .setTimestamp()
            .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))

            await message.reply({embeds: [Embed]})
    }
})