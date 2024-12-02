const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if(message.guild.id !== "514192690297045003") return;
  let channel = message.channel;
    if(channel.id === "602277921347993610"){
        if(message.member.roles.cache.find(r => r.name === "✦ Administração ✦") || message.member.roles.cache.find(r => r.name === "✦ Coordenação ✦") || message.member.roles.cache.find(r => r.name === "✦ Jornalista ✦") || message.member.roles.cache.find(r => r.name === "✦ Designer ✦")){
          message.channel.bulkDelete(1);
          var hora = new Date();
          let argumento = args.join(" ").split(' / ');
          if(!argumento) return message.channel("**Você não inseriu nenhum argumento, digite o comando .evento <link do tópico> / <nome do evento>**");
          if(!argumento[0]) return message.reply("**link inválido.**");
          if(!argumento[1]) return message.reply("**manchete inválida.**");
      
          const embed = {
            "description": `\nAcaba de ser postado mais um **evento da comunidade** pelo promotor **${message.author.username}**, confira [clicando aqui](${argumento[0]}).\n\n**Evento de hoje:** ${argumento[1]}`,
            "color": 14024818,
            "timestamp": hora,
            "footer": {
              "icon_url": "https://cdn.discordapp.com/emojis/567162275262365697.png",
              "text": "SkyCraft Out-game"
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/attachments/667114301013884968/719694151637008404/skycraft.png"
            },
  
            "author": {
              "name": `Novo evento no fórum: ${argumento[1]}!`,
              "icon_url": "https://cdn.discordapp.com/emojis/739804400566141009.png"
            }
          };
          const webhookClient = new Discord.WebhookClient("759015223918854176","tVfSJzaJNa0kZXgHZjdistK-bL5eRDewHamd7shRM0PnOOA9YygvL2pG2GwVKoCe9r3o");
          webhookMessage = webhookClient.send("<@&758842325396357131>", {embeds: [embed]})
        }else{message.author.send("**Você não tem permissão para isso!**");}
      }else{
        message.author.send("**Apenas no canal de comandos!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
      }
        }


exports.help = {
	name: "evento"
}
