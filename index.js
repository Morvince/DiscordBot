const { Client, GatewayIntentBits } = require("discord.js");
const { EmbedBuilder } = require("discord.js");


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    
]});

client.on("ready", () => {
    console.log("Bot Ready");
});

var Hunger = 0;

client.on("messageCreate", message => {
    const prefix = "!";
    console.log(message);
    if (message.author.bot) return;

    if (message.content === prefix + "HelloDoggo") {
        console.log('doggo');
        message.reply("*barking* (happy because you called him)");
        const embed = new EmbedBuilder()
            .setTitle("Doggo Happy")
            .setURL("https://discord.js.org/")
            .setImage("https://tinyurl.com/3t2j6fw3")
        message.channel.send({ embeds: [ embed ] });
        return;
    }
    else if (message.content === prefix + "Help") {
        console.log('help');
        const other_embed = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle("Doggo Commands")
            .setURL("https://discord.js.org/")
            .setAuthor({ name : "Morvince", iconURL : "https://tinyurl.com/28ce6d3d", url : "https://discord.js.org/" })
            .setDescription("You call find here all the necessary commands for Doggo")
            .setThumbnail("https://tinyurl.com/53aahx5u")
            .addFields({ name : "**__!HelloDoggo__**", value : "    Display the answer of Doggo when you call him" },
                        { name :  "**__!Help__**", value : "    Display all the commands usable for the discord bot"},
                        { name :  "**__!FeedMe__**", value : "    Display the number of time you feed Doggo"},
                        { name :  "**__any_message__**", value : "    Display simple pet message"})
            .setTimestamp()
        message.channel.send({ embeds: [ other_embed ] });
        return;
    }
    else if (message.content === prefix + "FeedMe") {
        console.log("Hungry");
        Hunger++;
        const hungry_embed = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle("Doggo Hungry")
            .setAuthor({ name : "Morvince", iconURL : "https://tinyurl.com/28ce6d3d", url : "https://discord.js.org/" })
            .setDescription("Number of time you feed doggo")
            .setThumbnail("https://tinyurl.com/53aahx5u")
            .addFields({ name : message.author.username , value : Hunger.toString() })
            .setTimestamp()
        message.channel.send({ embeds: [ hungry_embed ] });
        return;
    }
    message.reply("Pls take care more of me");
});

client.on("guildMemberAdd", member => {
    console.log("nouveau membre incomming");
    client.channels.cache.get("1056478509700222988").send("<@" + member.id + "> is now member of the doggo family !");
});

client.on("guildMemberRemove", member => {
    console.log("un membre est parti");
    client.channels.cache.get("1056478509700222988").send("<@" + member.id + "> left the doggo family !");
});



client.login("");