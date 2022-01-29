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

        //Bot Sets Schedule and Timezone
        const channel = this.client.channels.cache.find(channel => channel.id === process.env.BT_CHANNEL)

        const DAY = DateTime.now().weekdayLong.toLocaleLowerCase() //GET WEEK DAY

        const actualHour = DateTime.now().setZone(process.env.TIMEZONE).c.hour
        const actualMinute = DateTime.now().setZone(process.env.TIMEZONE).c.minute
        
        const hour_15M = DateTime.now().setZone(process.env.TIMEZONE).plus({ minutes: 15 }).c.hour
        const minute_15M = DateTime.now().setZone(process.env.TIMEZONE).plus({ minutes: 15 }).c.minute
  
        const hour_10M = DateTime.now().setZone(process.env.TIMEZONE).plus({ minutes: 10 }).c.hour
        const minute_10M = DateTime.now().setZone(process.env.TIMEZONE).plus({ minutes: 10 }).c.minute

        const hour_5M = DateTime.now().setZone(process.env.TIMEZONE).plus({ minutes: 5 }).c.hour
        const minute_5M = DateTime.now().setZone(process.env.TIMEZONE).plus({ minutes: 5 }).c.minute

        const HOUR = `${actualHour}:${actualMinute}` //GET ACTUAL HOUR
        const FUTURE_15M = `${hour_15M}:${minute_15M}` //GET 15MINUTES BEFORE BOSS
        const FUTURE_10M = `${hour_10M}:${minute_10M}` //GET 10MINUTES BEFORE BOSS
        const FUTURE_5M = `${hour_5M}:${minute_5M}` //GET 05MINUTES BEFORE BOSS
        
        function createHours(){

        }

 
        //Bot starts counting timing
        // for(var i = 0; i < bosses[day].length; i++){
        //     console.log('Jade Campeã ♥')
        // }


    }
}