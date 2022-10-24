const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "banmp",
    description: "Permet de bannir définitivement un utilisateur",
    utilisation: "[membre] (raison)",
    alias: ["banmp"],
    permission: Discord.Permissions.FLAGS.BAN_MEMBERS,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {

        let user = message.user === undefined ? (message.mentions.users.first() || bot.users.cache.get(args[0])) : bot.users.cache.get(args._hoistedOptions[0].value)
        if(!user) return message.reply("Aucune personne trouvée !")

        let reason = message.user ? args._hoistedOptions[1].value : args[1];
        if(!reason) reason = "Aucune raison donnée";

        let sreen = message.user ? args._hoistedOptions[2].value : args[2];
        if(!sreen) return;

        if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply("Vous ne pouvez pas vous bannir vous-même !")
        if(user.id === message.guild.ownerId) return message.reply("Vous ne pouvez pas bannir cette personne !")
        //if(message.member.roles.highest.comparePositionTo(message.guild.members.cache.get(user.id).roles.highest) <= 0) return message.reply("Vous ne pouvez pas bannir cette personne !")

        try {

            await user.send(`<:Elexyr22:754441336849170543> Vous êtes __banni__ du serveur dû serveur : **${message.guild.name}** par **${message.user === undefined ? message.author.tag : message.user.tag}** pour  \`\`${reason}\`\` ! <a:EBan1:754441325579075734>`)
            await user.send(`${sreen}`)
        } catch (err) {}

        //const ID = await bot.function.createID("BAN")



        await message.reply({content: `<:Elexyr22:754441336849170543> ${user} a été __banni__ par **${message.user === undefined ? message.author : message.user}** pour \`\`${reason}\`\` ! <a:EBan1:754441325579075734>`}).then(async msg => {

            await message.guild.members.cache.get(user.id).ban({reason: `Ban pour ${reason} par ${message.user === undefined ? message.author.tag : message.user.tag}`})

            if(reason.includes("'")) reason = reason.replace(/'/g, "\\'")

           /* let sql = `INSERT INTO bans (userID, authorID, banID, guildID, reason, date, time) VALUES(${user.id}, '${message.user === undefined ? message.author.id : message.user.id}', '${ID}', '${message.guildId}', '${reason}', '${Date.now()}', 'Défintif')`
            db.query(sql, function(err) {
                if(err) throw err;
            })
            */

            const filter = async() => true;

        })
    }
})