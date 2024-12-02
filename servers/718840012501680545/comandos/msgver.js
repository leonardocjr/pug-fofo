//db
const Discord = require('discord.js')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter2 = new FileSync('banco2.json')
const db2 = low(adapter2)
const ownerID = "249525932954484736";

exports.run = async (client, message, args) => {
  if(message.guild.id == "718840012501680545") {
  let channel = message.channel;
  if (message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == ownerID){
        message.channel.bulkDelete(1);
        let ids = args.join();
        db2.read();
        let object7 = db2.get("msgs").value()
        let test4 = object7.map(obj => obj.id)
        
        object7.forEach(object7 => {
        if(ids == object7.id){
        let msgv1 = db2.get("msgs").find({id: object7.id}).value().msg1
        let msgv2 = db2.get("msgs").find({id: object7.id}).value().msg2
        let usuario = db2.get("msgs").find({id: object7.id}).value().user_id
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
	name: "s.msgver"
}