const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if(message.guild.id !== "514192690297045003") return;
  let channel = message.channel;
    let channel4 = client.channels.cache.get('541608538171113490');
    let channel6 = client.channels.cache.get('743646107040481340');
    let chan2 =  client.channels.cache.get('743645709907132449');
    let chan3 = client.channels.cache.get('750459716722884668');
    if (message.member.roles.cache.find(r => r.name === "★ Locução ★")){
        message.channel.bulkDelete(1);
        chan2.updateOverwrite(chan2.guild.roles.everyone, { CONNECT: false });
        channel6.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false, SEND_MESSAGES: false });
        chan3.updateOverwrite(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
        channel4.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: true });
        channel4.send('**Rádio finalizada!**\nChat aberto.');
        channel6.send('**Locução fechada!**');
  
    }else{
      message.channel.bulkDelete(1);
      message.author.send("**Você não tem permissão para fechar uma locução!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
      }

        }


exports.help = {
	name: "fechar"
}
