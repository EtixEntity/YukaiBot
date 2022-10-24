const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("guildMemberAdd", async (bot, member, user) => {
    
    console.log(`[JOIN SERVEUR :] ${member.user.username} viens de rejoindre ${member.guild.name} !`)

    let Embed = new Discord.MessageEmbed()
    .setColor(bot.color)
    .setTitle("New Join :")
    .setDescription(`**${member} *(${member.id})* viens de rejoindre \`\`${member.guild.name}\`\`**`)

   let channel = member.guild.channels.cache.find(
    (ch) => ch.name === "elexyr22-log");
    if (!channel) return;
    await channel.send({embeds: [Embed]})
})