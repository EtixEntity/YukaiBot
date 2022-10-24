
const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "scam",
    description: "Permet de voir à combien de % tu es un scammeur !",
    utilisation: "",
    alias: ["scam", "skam"],
    permission: "",
    category: "4) Fun",
    cooldown: 5,
    async run(bot, message, args, db) {
        const block = "⬛";
        const heart = "<:Pepe_Scam:768505287820574721>";

        let user;
        if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
            user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
            if(!user) return message.reply("Aucune personne trouvée !")
        } else user = message.user ? message.user : message.author;

        let loveEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`Niveau de **Scam** de __**${user} !**__ <:Pepe_Scam:768505287820574721>`)
        .addField(`Scammeur  à :`, ship())
        .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`)
        message.reply({embeds : [loveEmbed]})

    function ship() {
        const hearts = Math.floor(Math.random() * 10) + 0;
        const str = `${heart.repeat(hearts)}${block.repeat(10 - hearts)} ${hearts * 10}% !`;
        return str;
    }
    }
    
})