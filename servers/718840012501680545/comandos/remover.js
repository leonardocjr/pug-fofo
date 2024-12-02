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
    let ids = args.join();
    db2.read();
    let object3 = db2.get("msgs").value()
    if (message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == ownerID){
message.channel.bulkDelete(1);
object3.forEach(object3 => {
  if(ids == object3.id){
  let msgn1 = db2.get("msgs").find({id: object3.id}).value().msg1
  let msgn2 = db2.get("msgs").find({id: object3.id}).value().msg2
  db2.get("msgs").remove({id: object3.id}).write().user_id
  db2.get("msgs").remove({id: object3.id}).write()
  message.channel.send(`**Mensagem apagada.\nID:** ${ids}.\nMsg1: ${msgn1}\nMsg2: ${msgn2}`)
  db2.get("msgs").remove({id: object3.id}).write().msg1
  db2.get("msgs").remove({id: object3.id}).write().msg2
  return
}})

}
else{
message.author.send("Comando reservado para pessoas autorizadas!").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
}}
        }


exports.help = {
	name: "s.remover"
}
