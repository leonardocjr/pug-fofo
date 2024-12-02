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
        db2.read();
        let object4 = db2.get("msgs").value()
        let test2 = object4.map(obj => obj.id)
        object4.forEach(function(i, idx, array){
          let object4p = i.id;
          if(idx === array.length-1){
      message.channel.send('**Lista de Mensagens:** 1 ao ' + object4p +  '\n**Para visualizar as mensagens use o comando** .s.msgver <id>');         } return } )
    }else{
        message.author.send("**Comando reservado para pessoas autorizadas.**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
      } }
        }


exports.help = {
	name: "s.msglist"
}