const Discord = require('discord.js')
const ytdl = require('ytdl-core');

exports.run = async (client, message, args) => {
  if(message.guild.id !== "514192690297045003") return;
  let channel = message.channel;
    if(channel.id === "602277921347993610"){
        if(message.member.roles.cache.find(r => r.name === "✦ Administração ✦") || message.member.roles.cache.find(r => r.name === "✦ Coordenação ✦") || message.member.roles.cache.find(r => r.name === "div")){
          message.channel.bulkDelete(1);
          var hora = new Date();
          argss = args.join(' ')
          if(!argss) return message.author.send("**você não adicionou o link do vídeo!**");
          useravatar = message.author.avatarURL //(.{11})
          let youtube_video_id = argss.match(/youtu.be|youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop()//(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
          let thumbyt = "https://img.youtube.com/vi/"+youtube_video_id+"/maxresdefault.jpg";
      
          const embed = {
            "description": `\nO youtuber **${message.author.username}** acaba de postar um vídeo novo em nosso servidor, confira [clicando aqui](${argss}).`,
            "color": 16711680,
            "timestamp": hora,
            "footer": {
              "icon_url": "https://cdn.discordapp.com/emojis/567162275262365697.png",
              "text": "SkyCraft Parceiros"
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/attachments/667114301013884968/719694151637008404/skycraft.png"
            },
  
            "author": {
              "name": `Novo vídeo de ${message.author.username}!`,
              "icon_url": "https://www.youtube.com/s/desktop/c46c1860/img/favicon_96.png"
            },
            "image": {
              "url": thumbyt
            }
          };
          const webhookClient = new Discord.WebhookClient("758740103106527233","drtJ27ylKdKxmsl3YmnDgQoC1xPMmOhunRdb_f0Dyd37Didz-o4cxyPxm6_WH1CSWRcg");
          webhookMessage = webhookClient.send({embeds: [embed]});
          
      
        }else{message.author.send("**Você não tem permissão para isso!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));}
      }else{
        message.author.send("**Apenas no canal de comandos!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
      }

        }


exports.help = {
	name: "yt"
}