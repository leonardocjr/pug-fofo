const Discord = require('discord.js')
const ownerID = "249525932954484736";

exports.run = async (client, message, args) => {
    if (message.author.id !== ownerID) {
        return message.author.send("**Você não tem permissão para isso!**").catch(error => console.log('[Log] ' + 'O ID ' + message.author + ' tem a DM fechada!'))
      }
    message.channel.bulkDelete(1);
    message.channel.send("**:ping_pong: Pong!**");
        }


exports.help = {
	name: "vx"
}