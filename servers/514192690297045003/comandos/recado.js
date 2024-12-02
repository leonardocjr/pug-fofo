const Discord = require('discord.js')
const ownerID = "249525932954484736";

exports.run = async (client, message, args) => {
  if(message.guild.id !== "514192690297045003") return;
  let channel = message.channel;
    let argsresult
    const mChannel = message.mentions.channels.first()
    if (message.member.roles.cache.find(r => r.name === "« Nitro Booster »") || message.author.id == ownerID){
        if(channel.id === "602277921347993610"){
        message.channel.bulkDelete(1);
        let dUser = message.guild.member(message.mentions.users.first());
        if (!dUser) return message.channel.send("**Usuário não encontrado.**")
        let dMessage = args.join(" ").slice(22);
        if(dMessage.length < 1) return message.reply("**você precisa escrever a mensagem!**")
        
        dUser.send(`> <:coracao:567166345246933013> **${message.author} enviou uma mensagem para você!** \n**Recado: **${dMessage}`)
        .catch(() => message.reply("**essa pessoa não pode receber mensagens privadas!**"))
  
        message.author.send(`${message.author} você mandou um recado para ${dUser}.`).catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'))
        
  
        }else{
          message.author.send("**Apenas no canal de comandos!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
        }
    }
    
        }


exports.help = {
	name: "recado"
}