const Discord = require('discord.js');

module.exports.run = async (client, msg, args) => {

    let kayıt = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
    if (!kayıt) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("Kayıt etmek istediğin kişiyi etiketle ! ")
        }
    })

    let role = msg.guild.roles.find(r => r.name === "Rol adı");

    if (kayıt.roles.has(role.id)) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("Kayıtlı Üye")
        }
    });

    await kayıt.addRole(role);
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("Başarıyla xy olarak kayıt edildi. :mrba: ")
        }
    })
    await kayıt.removeRole(602823646473617408) // SUNUCUYQA GEL
    msg.channel.send(new Discord.RichEmbed()
    .setDescription(`unregister rolü başarıyla alındı :tik: `));

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kayıte',
    description: 'Sunucu kayıt',
    usage: 'kayıte'
};
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag} sunucuya giriş yaptı!`);
});

client.login('NjAyODkzMDk0MjE5ODA4ODEw.XTXd_w.KSGP7C7tlHScksv5Sw91T3DvEyU');