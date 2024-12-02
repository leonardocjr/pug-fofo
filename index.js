const Discord = require("discord.js");
const { Client, Collection, RichEmbed, Attachment } = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fetch = require('node-fetch');
const fs = require("fs");
const shortid = require('shortid');
const ytdl = require('ytdl-core');

//db
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('banco.json')
const adapter2 = new FileSync('banco2.json')
const db = low(adapter)
const db2 = low(adapter2)

const ownerID = "249525932954484736";
//const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
//const comando = args.shift().toLowerCase();
//let channel = message.channel;

  //eventos globais
  client.on('message', message => { 
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    var fs = require('fs');
    db.read()
    let object = db.get("msgs").value()
    db2.read()
    let object2 = db2.get("msgs").value()
    
    let channel = message.channel;
   // mentions
    if(message.mentions.has('746041757502013460')){
      if(message.channel.id == "601918292881309696" || message.channel.id == "759027115566825493") return;
      message.react('739804400566141009');
    }
    

  //eventos skycraft
  if (message.guild.id == "514192690297045003") {

  if(channel.id == "743646107040481340") return;
    object.forEach(object => {
    if (message.content.toLowerCase() == object.msg1.toLowerCase()) {
    //console.log("teste foi")
    let auto = db.get("msgs").find({ msg1: object.msg1 }).value().msg2
    message.reply(auto);
    return
  } })

if (message.member.roles.cache.find(r => r.name === "★ Staffer ★")){
  
const responseObject = {
  "pug?": "tô aqui bb.",
  "ban?": "tô prontinho.",
  "teste": "tô de olho."
};
  if(responseObject[message.content.toLowerCase()]) {
    message.reply(responseObject[message.content.toLowerCase()]);
}
} 


//reacts canais específicos
if (message.channel.id == "601918292881309696" || message.channel.id == "759027115566825493"){
  message.react('567162275262365697');
}
  }
//eventos sanatic
if (message.guild.id == "718840012501680545") {

    object2.forEach(object2 => {
    if (message.content.toLowerCase() == object2.msg1.toLowerCase()) {
    //console.log("teste foi")
    let auto = db2.get("msgs").find({ msg1: object2.msg1 }).value().msg2
    message.reply(auto);
    return
  } })
return}

  })

client.on('ready', () =>{
  
     client.user.setActivity(`leeow.ga`, {type: "WATCHING"})

     
     console.log('[Log]', 'Inicialização finalizada, partindo para servers! \nServidores que estou: ' + client.guilds.cache.map(guild => guild.name).join(", "));
     client.guilds.cache.forEach((guild) => {
    
      
      fs.readdir(`./servers/${guild.id}/comandos/`, (err, files) => {

        if (err) console.log(err)
        console.log('[Log] ', `Carregando o total de ${files.length} comandos de ${guild.name}`)
    
        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if (jsfile.length <= 0) {
            return //console.log("Comandos não encontrados.");
        }
    
        jsfile.forEach((f, i) => {
            let pull = require(`./servers/${guild.id}/comandos/${f}`);
            client.commands2.set(pull.help.name, pull);
          });
    }); 
    })
  
})

    

client.commands = new Collection();
client.commands2 = new Collection();

fs.readdir("./global/comandos", (err, files) => {

    if (err) console.log(err)
    console.log('[Log]', `Iniciando com ${files.length} comandos globais`)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("Comandos não encontrados.");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./global/comandos/${f}`);
        client.commands.set(pull.help.name, pull);
    });
});

client.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let prefix = config.prefix;
  let channel = message.channel;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd.slice(prefix.length))
    if (commandfile) commandfile.run(client, message, args)
    
    fs.readdir(`./servers/`, (err, files) => {
      let jsfile = files
        if (jsfile.length <= 0) {
            return //console.log("Comandos não encontrados.");
        }
    
    let commandfile2 = client.commands2.get(cmd.slice(prefix.length))
    if (commandfile2) commandfile2.run(client, message, args) 
  
  })
  });

  
client.login(config.token)