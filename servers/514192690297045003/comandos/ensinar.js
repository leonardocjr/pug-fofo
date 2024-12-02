//db
const Discord = require('discord.js')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)

exports.run = async (client, message, args) => {
  if(message.guild.id == "514192690297045003") {
  let channel = message.channel;
    if (message.member.roles.cache.find(r => r.name === "~")){
        message.channel.bulkDelete(1);
        let argumento = args.join(" ").split(' / ');
        
        if(!argumento) return message.channel("**Você não inseriu nenhum argumento.**");
        if(!argumento[0]) return message.reply("**argumento 1 inválido.**");
        if(!argumento[1]) return message.reply("**argumento 2 inválido.**");
        db.read();
        let object = db.get("msgs").value()
        object.forEach(function(i, idx, array){
          var object2k = object.id;
          let object2p = i.id + 1;
          if(idx === array.length-1){
          
        db.get('msgs').push({ id: object2p, user_id: `${message.author.id}`, msg1: `${argumento[0]}`, msg2: `${argumento[1]}` }).write()

        message.reply(`adicionado! \n**Mensagem: **${argumento[0]} \n**Reposta: **${argumento[1]}\n**ID da mensagem: **${object2p}`)} return })
       }else{
        message.author.send("**Comando reservado para pessoas autorizadas.**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
      }}
        }


exports.help = {
	name: "ensinar"
}
