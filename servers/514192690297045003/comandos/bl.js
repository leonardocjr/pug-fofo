const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    if(message.guild.id !== "514192690297045003") return;
    let channel = message.channel;
    if(message.member.roles.cache.find(r => r.name === "✦ Administração ✦") || message.member.roles.cache.find(r => r.name === "✦ Coordenação ✦") || message.member.roles.cache.find(r => r.name === "★ Locução ★")){
        if(channel.id === "743646107040481340"){ 
        message.channel.bulkDelete(1);
        let role = message.guild.roles.cache.find(role => role.name === 'BL');
        let dUser = message.guild.member(message.mentions.users.first());
        if(!dUser){message.author.send('Você **não** marcou o membro.') 
        return}
        if (dUser.roles.cache.find(r => r.name === 'BL')){
            dUser.roles.remove(role).catch(console.error);
            message.author.send(`O membro ${dUser} foi removido da **blacklist** da rádio.`)
            message.channel.send(`<:Skycraft:567162275262365697> O membro foi **removido** da restrição com êxito.`)
            return;
        }else{

        
        message.author.send(`O membro ${dUser} foi adicionado na **blacklist** da rádio.`)
        message.channel.send(`<:Skycraft:567162275262365697> O membro foi **restrito** com êxito.`)
        dUser.roles.add(role).catch(console.error);}
  
        }else{
          message.author.send("**Apenas no canal chat-rádio!**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
        }
    
        
        
    }
  
          }
  
  
  exports.help = {
      name: "bl"
  }