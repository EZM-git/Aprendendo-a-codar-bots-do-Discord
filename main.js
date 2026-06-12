const { Client, GatewayIntentBits, Collection } = require('discord.js'); // Para importar 

// Evento == Intent

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

prefix = "!" // Prefixo para chamar o bot

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(prefix + "ping")) {
        message.reply("Pong!");
    }
})

client.login("");