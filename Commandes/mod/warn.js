const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "warn",
    description: "Permet d'avertir un utilisateur",
    utilisation: "",
    alias: ["warn", "warning"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {
        message.delete()

        let user = message.user ? bot.users.cache.get(args._hoistedOptions[0].value) : (bot.users.cache.get(args[0]) || message.mentions.users.first())
        if(!user) return message.reply("❌ Aucune personne trouvée !")
        if(!message.guild.members.cache.get(user.id)) return message.reply("❌ Aucune personne trouvée !")

        let reason = message.user === undefined ? args.slice(1).join(" ") : args._hoistedOptions[1]
        if(!reason) reason = "Aucune raison donnée";

        if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply("❌ Vous ne pouvez pas vous avertir vous-même !")
        if(user.id === message.guild.ownerId) return message.reply("❌ Vous ne pouvez pas avertir cette personne !")
        if(message.member.roles.highest.comparePositionTo(message.guild.members.cache.get(user.id).roles.highest) <= 0) return message.reply("❌ Vous ne pouvez pas avertir cette personne !")

        const ID = await bot.function.createID("WARN")

        await message.channel.send(`<:Elexyr22:754441336849170543> ${user.tag} a été __warn__ pour \`\`${reason}\`\` !`)
        try {
            await user.send(`<:Elexyr22:754441336849170543> Vous avez été __warn__ sûr \`\`${message.guild.name}**\`\` pour **${reason} !** \n\n __Merci de Faire attention !__ <a:Alerte1:754441316905123994>`)
        } catch (err) {}
        
        let sql = `INSERT INTO warns (userID, authorID, warnID, guildID, reason, date) VALUES (${user.id}, '${message.user ? message.user.id : message.author.id}', '${ID}', '${message.guildId}', '${reason}', '${Date.now()}')`
        db.query(sql, function(err) {
            if(err) throw err;
        })
    }
})