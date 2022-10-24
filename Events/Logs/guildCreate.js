const Event = require("../../Structure/Event");
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { token } = require("../../config")

module.exports = new Event("guildCreate", async (bot, guild) => {
var msg = guild.channels.cache.find(channel => channel.type === "GUILD_TEXT" && channel.permissionsFor(bot.user.id).has("SEND_MESSAGES"))
msg.send("e!invitex").then(sent => sent.delete({timeout: 5e3}))
msg.send("e!log").then(sent => sent.delete({timeout: 5e3}))

        const commands = [
        
         new SlashCommandBuilder()
        .setName("help")
        .setDescription("My Help !"),

        new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Mon ping !"),

        new SlashCommandBuilder()
        .setName("add")
        .setDescription("Invite dû bot !"),

        new SlashCommandBuilder()
        .setName("vc")
        .setDescription("Nom de personne en vocal"),

        new SlashCommandBuilder()
        .setName("stat")
        .setDescription("Nombre de serveur du Bot"),

        new SlashCommandBuilder()
        .setName("member")
        .setDescription("Nombre de membre sûr le serveur"),

        new SlashCommandBuilder()
        .setName("member-all")
        .setDescription("Nombre de membre sûr le bot"),

        new SlashCommandBuilder()
        .setName("youtubes")
        .setDescription("Ma chaîne YouTube"),
        
                new SlashCommandBuilder()
        .setName("banner")
        .setDescription("Donne la bannière d'une personne")
        .addUserOption(option => option.setName("membre").setDescription("Le membre").setRequired(false)),

        new SlashCommandBuilder()
        .setName("pp")
        .setDescription("Donne l'avatar d'une personne")
        .addUserOption(option => option.setName("membre").setDescription("Le membre").setRequired(false)),

        new SlashCommandBuilder()
        .setName("pp-serveur")
        .setDescription("Donne l'avatar d'une personne"),

        new SlashCommandBuilder()
        .setName("userinfo")
        .setDescription("Donne les infos d'une personne")
        .addUserOption(option => option.setName("membre").setDescription("Le membre").setRequired(false)),

        new SlashCommandBuilder()
        .setName("serveurinfo")
        .setDescription("Donne les infos d'un serveur"),
            
        new SlashCommandBuilder()
        .setName("gay")
        .setDescription("Permet de voir à combien de % tu es gay !")
        .addUserOption(option => option.setName("membre").setDescription("Le membre").setRequired(false)),

        new SlashCommandBuilder()
        .setName("scam")
        .setDescription("Permet de voir à combien de % tu es un scammeur !")
        .addUserOption(option => option.setName("membre").setDescription("Le membre").setRequired(false)),

        new SlashCommandBuilder()
        .setName("legit")
        .setDescription("Pour qui tu vote ?")
        .addUserOption(option => option.setName("membre").setDescription("Le membre").setRequired(false)),
        
    ]
      
    const rest = new REST({ version: "9" }).setToken(token)

    await rest.put(Routes.applicationGuildCommands(bot.user.id, guild.id), { body: commands }).catch(err => {if(err.code == "50001") return});
})