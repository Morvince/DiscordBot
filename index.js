const { Client, GatewayIntentBits } = require('discord.js');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
    
]});

const prefix = '!';

client.on('ready', () => {
    console.log('Bot Ready');
});

client.on('messageCreate', () => {
    if (message.author.bot) return;

    if (message.content === prefix + 'HelloDoggo') {
        message.reply('*barking* (happy because you called him');
        const embed = new Discord.MessageEmbed()
            .setTitle('Doggo Happy')
            .setURL('https://discord.js.org/')
            .setImage('https://tinyurl.com/3t2j6fw3')
            message.channel.send({embeds: [embed]});
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
            .setTimestamp();

            message.channel.send({embeds: [embed]});
    }
    messsage.reply('Pls take care more of me');
});

client.on('guildMemberAdd', member => {
    console.log('nouveau membre incomming');
    client.channels.cache.get('748364749212745728').send('<@' + member.id + '> is now member of the doggo family !');
});

client.on('guildMemberRemove', member => {
    console.log('un membre est parti');
    client.channels.cache.get('748364749212745728').send('<@' + member.id + '> left the doggo family !');
});



Client.login('MTA1NTgzODMzNDg5NjgzNjYzOQ.Gph7tv.BBBJFOYkESw-3jSB_0TJzQ9wwXxLrOZ1zKNkEg')