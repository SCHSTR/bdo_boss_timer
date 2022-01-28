const Event = require('../../structures/Event');
const cron = require('node-cron');
const { DateTime } = require("luxon");

module.exports = class extends Event {
    constructor(client){
        super(client, {
            name: 'ready'
        })
    }

    run =  () => {
        console.log(`Bot logged in as ${this.client.user.username} in ${this.client.guilds.cache.size} servers`)
        this.client.registerCommands()

        var test = '19_27'

        var time = DateTime.now().setZone("UTC-3");
        var hour = time.c.hour;
        var minute = time.c.minute;
        var finalHour = `${hour}_${minute}`

        const day = DateTime.now().weekday
        console.log(day)
        console.log(finalHour)

        //console.log(time)

        if(finalHour === test) console.log('pintao')
        // cron.schedule('* * * * * *', () => {
        //     var time = DateTime.now().setZone("America/New_York")
        //     console.log(time)
        //   });

    }
}