//db
const Discord = require('discord.js')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter2 = new FileSync('banco2.json')
const db2 = low(adapter2)
const ownerID = "249525932954484736";

exports.run = async (client, message, args) => {
  if(message.guild.id == "718840012501680545"){
  let channel = message.channel;
  if (message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == ownerID){
        message.channel.bulkDelete(1);
        let argumento = args.join(" ").split(' / ');
        
        if(!argumento) return message.channel("**Você não inseriu nenhum argumento.**");
        if(!argumento[0]) return message.reply("**argumento 1 inválido.**");
        if(!argumento[1]) return message.reply("**argumento 2 inválido.**");
        db2.read()
        let object2 = db2.get("msgs").value()
        object2.forEach(function(i, idx, array){
          var object2k = object2.id;
          let object2p = i.id + 1;
          if(idx === array.length-1){
          
        db2.get('msgs').push({ id: object2p, user_id: `${message.author.id}`, msg1: `${argumento[0]}`, msg2: `${argumento[1]}` }).write()
        message.reply(`adicionado! \n**Mensagem: **${argumento[0]} \n**Reposta: **${argumento[1]}\n**ID da mensagem: **${object2p}`)} return })
       }else{
        message.author.send("**Comando reservado para pessoas autorizadas.**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
      }}
        }


exports.help = {
	name: "s.ensinar"
}
