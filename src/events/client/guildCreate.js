const Event = require('../../structures/Event')

module.exports = class extends Event {
    constructor(client){
        super(client, {
            name: 'guildCreate'
        })
    }

    run =  () => {
        console.log('O bot entrou em um servidor!')

    }
}