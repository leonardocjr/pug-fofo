const Discord = require('discord.js')
const ownerID = "249525932954484736";

exports.run = async (client, message, args) => {
    let argsresult
    const mChannel = message.mentions.channels.first()
    if (message.author.id == ownerID || message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])){
        message.delete()
        if (mChannel) {
          argsresult = args.slice(1).join(' ')
          if(!argsresult){message.author.send("**Adicione argumentos!**"); return}
          mChannel.send(argsresult)
        } else {
          argsresult = args.join(' ')
          if(!argsresult){message.author.send("**Adicione argumentos!**"); return}
          message.channel.send(argsresult)
        }
      }else{
        message.author.send("**Você não tem permissão para isso!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
      }
    
        }


exports.help = {
	name: "msg"
}