//db
const Discord = require('discord.js')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)

exports.run = async (client, message, args) => {
  if(message.guild.id == "514192690297045003") {
  let channel = message.channel;
    if(message.member.roles.cache.find(r => r.name === "★ Staffer ★")){
        message.channel.bulkDelete(1);
        db.read();
        let object4 = db.get("msgs").value()
        let test2 = object4.map(obj => obj.id)
        object4.forEach(function(i, idx, array){
          let object4p = i.id;
          if(idx === array.length-1){
      message.channel.send('**Lista de Mensagens:** 1 ao ' + object4p +  '\n**Para visualizar as mensagens use o comando** .msgver <id>');         } return } )
    }else{
        message.author.send("**Comando reservado para pessoas autorizadas.**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
      } }
        }


exports.help = {
	name: "msglist"
}