const Discord = require('discord.js')
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
  if(message.guild.id !== "514192690297045003") return;
  let channel = message.channel;
    if(channel.id === "728281796286087298"){
        
        message.channel.bulkDelete(1);
        const { url } = await fetch('https://meme-api.herokuapp.com/gimme').then(response => response.json());
        message.channel.send(url);

      } else{
          message.channel.bulkDelete(1);
          message.author.send("**Apenas no canal de memes!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
        }
        }


exports.help = {
	name: "meme"
}
