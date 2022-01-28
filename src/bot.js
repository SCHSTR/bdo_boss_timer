require('dotenv').config();
const Client = require('./structures/Client')

const cmd_db = require('../models/commands')

const bot = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES',
        'DIRECT_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS',
        'DIRECT_MESSAGE_TYPING'
    ]
});

//connection =  require('../db/database')
bot.login(process.env.BOT_TOKEN)