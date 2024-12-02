//db
const Discord = require('discord.js')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)

exports.run = async (client, message, args) => {
  if(message.guild.id == "514192690297045003"){
  let channel = message.channel;
    let ids = args.join();
    let object3 = db.get("msgs").value()
if (message.member.roles.cache.find(r => r.name === "~")){
message.channel.bulkDelete(1);
object3.forEach(object3 => {
  if(ids == object3.id){
  db.read();
  let msgn1 = db.get("msgs").find({id: object3.id}).value().msg1
  let msgn2 = db.get("msgs").find({id: object3.id}).value().msg2
  db.get("msgs").remove({id: object3.id}).write().user_id
  db.get("msgs").remove({id: object3.id}).write()
  message.channel.send(`**Mensagem apagada.\nID:** ${ids}.\nMsg1: ${msgn1}\nMsg2: ${msgn2}`)
  db.get("msgs").remove({id: object3.id}).write().msg1
  db.get("msgs").remove({id: object3.id}).write().msg2
  return
}})

}
else{
message.author.send("Comando reservado para pessoas autorizadas!").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
}}
        }


exports.help = {
	name: "remover"
}
