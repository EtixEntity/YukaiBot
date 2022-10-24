const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("guildMemberRemove", async (bot, member, user,) => {
    
    console.log(`[LEAVE SERVEUR]  : ${member.user.username} viens de quitté ${member.guild.name} !`)

    let Embed = new Discord.MessageEmbed()
    .setColor(bot.color)
    .setTitle("New Leave :")
    .setDescription(`**${member} *(${member.id})* viens de quitté \`\`${member.guild.name}\`\`**`)

   let channel = member.guild.channels.cache.find(
    (ch) => ch.name === "elexyr22-log");
    if (!channel) return;
    await channel.send({embeds: [Embed]})
})