const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if(message.guild.id !== "514192690297045003") return;
  let channel = message.channel;
    let rp = client.channels.cache.get('751102311463649420');
    if(!args) return message.reply("o comando correto é .denunciar <@user> <motivo>");
    let denuncia = message.author;
    if(channel.id === "602277921347993610"){
      message.channel.bulkDelete(1);
      let player = message.guild.member(message.mentions.users.first());
      if (!player) return message.channel.send("**Usuário não encontrado.**")
      let motivo = args.join(" ").slice(22);
      if(motivo.length < 1) return message.reply("**você precisa escrever um motivo!**")
    channel.send('**Denúncia realizada!**');
    rp.send({embed: {
      color: 3447003,
      author: {
        name: `Denúncias do Discord!`,
        icon_url: `https://www.acealert.in/wp-content/uploads/2020/02/promontional.png`
      },
      fields: [ {
        name: "Reportado por",
          value: denuncia
        },
        {
          name: "Membro denunciado",
          value: player
        },
      {
        name: "Motivo e prova",
        value: motivo
      }
      ],
      timestamp: new Date(),
    }
  });

    }else{
      message.author.send("**Apenas no canal de comandos!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
    }
        }


exports.help = {
	name: "denunciar"
}
