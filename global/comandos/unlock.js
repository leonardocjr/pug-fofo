const Discord = require('discord.js')
const ownerID = "249525932954484736";

exports.run = async (client, message, args) => {
    let channel = message.channel;
    if (message.author.id == ownerID || message.member.hasPermission('MANAGE_CHANNELS', 'ADMINISTRATOR')) {
        
      
    message.channel.bulkDelete(1);
    channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: true });
    message.channel.send("🔓 **Canal desbloqueado!** \n`Membros` podem conversar novamente.")
        }else{return message.author.send("**Você não tem permissão para isso!**").catch(error => console.log('[Log] ' + 'O ID ' + message.author + ' tem a DM fechada!'))}
    }


exports.help = {
	name: "unlock"
}