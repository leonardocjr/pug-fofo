const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if(message.guild.id !== "514192690297045003") return;
  let channel = message.channel;
    if(channel.id === "602277921347993610"){
        if (!message.member.roles.cache.find(r => r.name === ".notificar")) return message.author.send("Você **não** possui o cargo de notificação para ser removido!");
        message.channel.bulkDelete(1);
        let role = message.guild.roles.cache.find(role => role.name === '.notificar');
        message.reply("agora você **não** receberá notificações de **entretenimento** em nosso servidor! (.notificar para ativar)")
        message.member.roles.remove(role).catch(console.error);
  
         } else{
          message.author.send("**Apenas no canal de comandos!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
        }
        }


exports.help = {
	name: "rnotificar"
}