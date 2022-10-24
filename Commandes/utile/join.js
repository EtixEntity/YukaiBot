const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = new Command({

    name: "join",
    description: "Permet d'activer ou de désactiver le monde anti-bot",
    utilisation: "[on/off]",
    alias: ["join"],
    permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
    category: "3) Utile",
    cooldown: 10,

    async run(bot, message, args, db) {
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.channel.send('Vous devez etre dans un salon voc');
        
const connection = joinVoiceChannel({
  channelId: voice_channel.id,
  guildId: voice_channel.guild.id,
  adapterCreator: voice_channel.guild.voiceAdapterCreator,
});
       
        message.channel.send("✅ Connecté au Vocal !") 
    }
})