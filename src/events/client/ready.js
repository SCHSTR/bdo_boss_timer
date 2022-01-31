const Event = require('../../structures/Event');
const cron = require('node-cron');
const { DateTime } = require("luxon");
const { bosses } = require ('../../../models/boss_schedule')


module.exports = class extends Event {
    constructor(client){
        super(client, {
            name: 'ready'
        })
    }

    run =  () => {
        //Bot Login
        this.client.registerCommands()
        console.log(`Bot logged in as ${this.client.user.username} in ${this.client.guilds.cache.size} servers`)

        const CHANNEL = this.client.channels.cache.find(channel => channel.id === process.env.BT_CHANNEL)
        const DAY = DateTime.now().weekdayLong.toLocaleLowerCase()

        //Bot Sets Schedule and Timezone
        function getHours(timeAdd){
            let hour
            let minute
            
            if(timeAdd){
                hour = DateTime.now().setZone(process.env.TIMEZONE).plus({minutes: timeAdd}).c.hour
                minute = DateTime.now().setZone(process.env.TIMEZONE).plus({minutes: timeAdd}).c.minute
            }else{
                hour= DateTime.now().setZone(process.env.TIMEZONE).c.hour
                minute = DateTime.now().setZone(process.env.TIMEZONE).c.minute
            }
            return `${hour}:${minute}`
        }

        const HOUR = getHours();
        const FUTURE_15M = getHours(15);
        const FUTURE_10M = getHours(10);
        const FUTURE_5M = getHours(5);

        console.log(HOUR, FUTURE_15M, FUTURE_10M, FUTURE_5M)

 
        //Bot starts counting timing
        for(var i = 0; i < bosses[DAY].length; i++){
            
            if(bosses[DAY][i].before15 === '19:45' /*FUTURE_15M*/){
                CHANNEL.send({
                    content: `@everyone ATENÇÃO MEU PAU VAI TA DURAO EM 15MIN`
                })
            }

            if(bosses[DAY][i].before10 === FUTURE_10M){
                CHANNEL.send({
                    content: `@everyone ATENÇÃO MEU PAU VAI TA DURAO EM 10MIN`
                })
            }


            if(bosses[DAY][i].before5 === FUTURE_5M){
                CHANNEL.send({
                    content: `@everyone ATENÇÃO MEU PAU VAI TA DURAO EM 5MIN`
                })
            }


            if(bosses[DAY][i].time === HOUR){
                channel.send({
                    content: `@everyone ATENÇÃO MEU PAU TA DURAO`
                })
            }

        }


    }
}