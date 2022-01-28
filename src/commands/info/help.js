
const Command = require('../../structures/Command');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            category: 'info',
            description: 'Do you want to know how this works?',
        })
    }

    run = (interaction) => {
        //interaction.reply('Hello World!') all users can see the response from bot
        //const hasAdmin = interaction.member._roles.includes(process.env.ADMIN_ROLE)
        //if(!hasAdmin) return interaction.reply({content: `Você não tem permissão para usar esse comando.`, ephemeral: true})
        
        interaction.reply({
            content: 'world! ;D',
            ephemeral: true //only for the user
        })
    }
}

