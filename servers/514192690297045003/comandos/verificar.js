const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    if(message.guild.id !== "514192690297045003") return;
    let channel = message.channel;
    if(message.member.roles.cache.find(r => r.name === "✦ Administração ✦") || message.member.roles.cache.find(r => r.name === "✦ Coordenação ✦") || message.member.roles.cache.find(r => r.name === "✦ Jornalista ✦")){
        if(channel.id === "779474443905925133"){ 
        message.channel.bulkDelete(1);
        if (message.member.roles.cache.find(r => r.name === "J ✓")) return message.author.send("Esse membro **já** possui verificação.");
        let role = message.guild.roles.cache.find(role => role.name === 'J ✓');
        let dUser = message.guild.member(message.mentions.users.first());
        if(!dUser){message.author.send('Você **não** marcou o membro.') 
        return} 
        message.channel.send(`<:Skycraft:567162275262365697> Parabéns ${dUser}! \nVocê foi **aprovado** para ser um parceiro de nosso **Jornal**.`)
        dUser.roles.add(role).catch(console.error);
  
        }else{
          message.author.send("**Apenas no canal promova-se!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
        }
    
        
        
    }
  
          }
  
  
  exports.help = {
      name: "verificar"
  }