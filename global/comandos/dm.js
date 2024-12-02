const Discord = require('discord.js')
const ownerID = "249525932954484736";

exports.run = async (client, message, args) => {
    let argsresult
    const mChannel = message.mentions.channels.first()
    if (message.author.id == ownerID){
        message.channel.bulkDelete(1);
        let dUser = message.guild.member(message.mentions.users.first());
        if (!dUser) return message.channel.send("**Usuário não encontrado.**")
        let dMessage = args.join(" ").slice(22);
        if(dMessage.length < 1) return message.reply("**você precisa escrever a mensagem!**")
        
          dUser.send(`${dMessage}`)
          .catch(() => message.reply("**essa pessoa não pode receber mensagens privadas!**"))
          message.author.send(`Enviado para ${dUser}.`).catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
    }else{
        message.author.send("**Você não tem permissão para isso!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));}
    
        
      }
    


exports.help = {
	name: "dm"
}