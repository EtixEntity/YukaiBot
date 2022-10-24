const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("guildMemberAdd", async (bot, member) => {

    const serv = member.guild.name
    const db = bot.db;

    db.query(`SELECT * FROM serveur WHERE guildID = ${member.guild.id}`, async (err, req) => {

        if(req.length < 1) return;

        if(req[0].raid === "on") {

            try {
                const embed1 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`ANTI-RAID INTELLIGENT 6.0 :`)
                .setDescription(`<a:ftnl:933837014145589298> ・Un **Raid Token** en cours sûr :  \`${serv}\`, \n réessaye dans __10 min,__ après que j'ai **banni** tout les **TOKEN !**`)
                .setTimestamp()
                .setFooter(`Anti-Raid intelligent 6.0 by Elexyr22👑 #0022`, `https://cdn.discordapp.com/attachments/765158755905961984/847433801013264404/PP_FR.gif`)

                await member.user.send({ embeds: [embed1] })
            } catch (err) {}

            await member.kick("Mode anti-raid activé")
        }


    })})