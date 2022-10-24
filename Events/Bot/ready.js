const Discord = require("discord.js")
const Event = require("../../Structure/Event");
const SlashCommand = require("../../Structure/SlashCommand")

module.exports = new Event("ready", async bot => {

    await SlashCommand(bot);

    let statuses = [
        "Yukai",
        `${bot.users.cache.size} utilisateurs`,
        `${bot.guilds.cache.size} serveurs`,
        "uwu"
    ];
    setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {
           type: "STREAMING",
           url: "_",
       });
   }, 5000);


    console.log(`${bot.user.username} : En ligne sur ${bot.guilds.cache.size} serveur(s) !`)
})