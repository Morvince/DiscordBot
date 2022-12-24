var Discord = require('discord.js');
const { Client } = require('undici');
var client = new Discord.Client({
    intents: [
        Discord.intents.FLAGS.GUILD,
        Discord.intents.FLAGS.GUILD_MESSAGE,
        Discord.intents.FLAGS.DIRECT_MESSAGE,
    
]});

const prefix = '!';

Client.on('ready', () => {
    console.log('Bot Ready');
});

Client.on('messageCreate', () => {
    if (message.author.bot) return;

    if (message.content === prefix + 'HelloDoggo') {
        message.reply('*barking* (happy because you called him');
        const embed = new Discord.MessageEmbed()
            .setTitle('Doggo Happy')
            .setURL('https://discord.js.org/')
            .setImage('https://tinyurl.com/3t2j6fw3')
            
    }
    else if (message.content === prefix + 'Help') {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('DoggoCommands')
            .setURL('https://discord.js.org/')
            .setAuthor('Morvince', 'https://tinyurl.com/28ce6d3d', 'https://discord.js.org/')
            .setDescription('You call find here all the necessary commands for Doggo')
            .setThumbnail('https://tinyurl.com/53aahx5u')
            .addField('**__!HelloDoggo__**', 'Display the answer of Doggo when you call him')
            .addField('**__!Help**', 'Display all the commands for Doggo')
    }
    messsage.reply('Pls take care more of me');
});

Client.login('')