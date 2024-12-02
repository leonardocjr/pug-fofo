const Discord = require('discord.js')
const ownerID = "249525932954484736";

exports.run = async (client, message, args) => {
    let channel = message.channel;
    let member = message.author
    if (message.author.id == ownerID || message.member.hasPermission('MANAGE_CHANNELS', 'ADMINISTRATOR')) {
        
        
    message.channel.bulkDelete(1);
    channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: false });
    message.channel.send("🔒 **Canal bloqueado!** \n`Membros` não poderão conversar nesse momento.")
        }else{
    return message.author.send("**Você não tem permissão para isso!**").catch(error => console.log('[Log] ' + 'O ID ' + message.author + ' tem a DM fechada!'))
 }
 }

exports.help = {
	name: "lock"
}