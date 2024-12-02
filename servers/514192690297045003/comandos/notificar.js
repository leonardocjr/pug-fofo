const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if(message.guild.id !== "514192690297045003") return;
  let channel = message.channel;
    if(channel.id === "602277921347993610"){ 
        if (message.member.roles.cache.find(r => r.name === ".notificar")) return message.author.send("Você **já** possui o cargo de notificação!");
        message.channel.bulkDelete(1);
        let role = message.guild.roles.cache.find(role => role.name === '.notificar');
        message.reply("agora você receberá notificações de **entretenimento** em nosso servidor! (.rnotificar para remover)")
        message.member.roles.add(role).catch(console.error);
  
         } else{
          message.author.send("**Apenas no canal de comandos!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
        }

        }


exports.help = {
	name: "notificar"
}