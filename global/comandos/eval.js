const Discord = require('discord.js')
const ownerID = "249525932954484736";

exports.run = async (client, message, args) => {

        if(message.author.id != ownerID) return message.author.send("**Você não tem permissão para isso!**").catch(error => console.log('[Log] ' + 'O ID ' + message.author + ' tem a DM fechada!'))
        message.channel.bulkDelete(1);
        const codigo = args.slice(0).join(" ");
        if(!codigo) return message.reply("Você não inseriu o código.")

        try {

            var resultado = eval(codigo)

            if(typeof resultado !== "string") resultado = inspect(resultado)
            if(resultado.size > 1950) resultado = resultado.substr(0, 1950)
            
            var embed = {
                title: "📡 ⋅ Console.",
                description: `**Código** \`\`\`${codigo}\`\`\`\n**Resultado**\`\`\`${resultado}\`\`\``,
                color: "AQUA"
            }
            message.reply({ embed: embed })
        } catch (err) {

            var embed = {
                title: "📡 ⋅ Console.",
                description: `**Código** \`\`\`${codigo}\`\`\`\n**Resultado**\`\`\`${resultado}\`\`\``,
                color: "AQUA"
            }
            message.reply({ embed: embed })
        }

    }



exports.help = {
	name: "eval"
}