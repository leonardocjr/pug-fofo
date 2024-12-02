//db
const Discord = require('discord.js')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const db = low(adapter)

exports.run = async (client, message, args) => {
  if(message.guild.id == "514192690297045003"){
  let channel = message.channel;
    if (message.member.roles.cache.find(r => r.name === "★ Staffer ★")){
        message.channel.bulkDelete(1);
        let ids = args.join();
        db.read();
        let object7 = db.get("msgs").value()
        let test4 = object7.map(obj => obj.id)
        
        object7.forEach(object7 => {
        if(ids == object7.id){
        let msgv1 = db.get("msgs").find({id: object7.id}).value().msg1
        let msgv2 = db.get("msgs").find({id: object7.id}).value().msg2
        let usuario = db.get("msgs").find({id: object7.id}).value().user_id
        message.channel.send(`**ID:** ${ids}\n**Mensagem enviada:** ${msgv1} \n**Mensagem do BOT:** ${msgv2} \n**Adicionada por: **<@${usuario}>`);
        return
      }
      
      })
      //console.log(test4)
      }else{
        message.author.send("**Comando reservado para pessoas autorizadas.**").catch(() => console.log('[Log] ' + message.author.id + ' não pode receber mensagens no privado.'));
      }}
        }


exports.help = {
	name: "msgver"
}