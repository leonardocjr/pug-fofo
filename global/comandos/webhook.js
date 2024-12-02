const Discord = require('discord.js')
const ownerID = "249525932954484736";
const fetch = require('node-fetch');
exports.run = async (client, message, args) => {
    if (message.author.id !== ownerID) {
        return message.author.send("**Você não tem permissão para isso!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
      }
        message.delete()
        let argumento = args.join(" ").split(' / ');
        if(!argumento) return message.channel("**Você não inseriu nenhum argumento.**");
        if(!argumento[0]) return message.reply("**argumento 1 inválido.**");
        if(!argumento[1]) return message.reply("**argumento 2 inválido.**");
        const { id } = await fetch(argumento[0]).then(response => response.json());
        const { token } = await fetch(argumento[0]).then(response => response.json());
        const webhookClient = new Discord.WebhookClient(id,token);
  
        webhookClient.send(argumento[1])
        }


exports.help = {
	name: "webhook"
}