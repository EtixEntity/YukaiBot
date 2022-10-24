const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("messageDelete", async (bot, message) => {

    if(bot.snipe.get(message.channel.id)) await bot.snipe.delete(message.channel.id) && await bot.snipe.set(message.channel.id, message)
    else await bot.snipe.set(message.channel.id, message);
    if(message.author.bot) return;

    
    const AuditsLogs = await message.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE',
        limit: 1
    })

    const LatestMessageDeleted = AuditsLogs.entries.first();
    
    let Embed = new Discord.MessageEmbed()
    .setColor(bot.color)
    .setTitle("New Message supprimé :")
    .setDescription(`Auteur du message : ${message.author} *(${message.author.id})*\nAuteur de la suppresion : ${LatestMessageDeleted.executor} *(${LatestMessageDeleted.executor.id})*\nDate de création du message : <t:${Math.floor(message.createdAt / 1000)}:F>\n Dans : <#${message.channel.id}> \nContenu : \`\`\`${message.content}\`\`\``)

   let channel = message.guild.channels.cache.find(
    (ch) => ch.name === "elexyr22-log");
    if (!channel) return;
    await channel.send({embeds: [Embed]})
})