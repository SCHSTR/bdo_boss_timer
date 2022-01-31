const bosses = {
    monday:[
        {time: '02:00', boss: 'Karanda & Kzarka', before15: '01:45', before10: '01:50', before5: '01:55'},
        {time: '11:00', boss: 'Nouver', before15: '10:45', before10: '10:50', before5: '10:55'},
        {time: '16:00', boss: 'Kutum & Kzarka', before15: '15:45', before10: '15:50', before5: '15:55'},
        {time: '20:00', boss: 'Nouver & Kutum', before15: '19:45', before10: '19:50', before5: '19:55'},
    ],
    tuesday: [
        {time: '02:00', boss: 'Kutum', before15: '01:45', before10: '01:50', before5: '01:55'},
        {time: '11:00', boss: 'Kzarka', before15: '10:45', before10: '10:50', before5: '10:55'},
        {time: '16:00', boss: 'Nouver & Kutum', before15: '15:45', before10: '15:50', before5: '15:55'},
        {time: '20:00', boss: 'Kzarka & Karanda', before15: '19:45', before10: '19:50', before5: '19:55'},
        {time: '23:45', boss: 'Offin', before15: '23:30', before10: '23:35', before5: '23:40'}, 
    ],
    wednesday:[
        {time: '02:00', boss: 'Kzarka', before15: '01:45', before10: '01:50', before5: '01:55'},
        {time: '11:00', boss: 'Kutum & Karanda', before15: '10:45', before10: '10:50', before5: '10:55' },
        {time: '16:00', boss: 'Kzarka & Nouver', before15: '15:45', before10: '15:50', before5: '15:55'},
        {time: '20:00', boss: 'Quint & Muraka', before15: '19:45', before10: '19:50', before5: '19:55'},
        {time: '23:45', boss: 'Garmoth', before15: '23:30', before10: '23:35', before5: '23:40'}
    ],
    thursday: [
        {time: '02:00', boss: 'Karanda & Kutum', before15: '01:45', before10: '01:50', before5: '01:55'},
        {time: '11:00', boss: 'Nouver & Karanda', before15: '10:45', before10: '10:50', before5: '10:55'},
        {time: '16:00', boss: 'Kutum & Kzarka', before15: '15:45', before10: '15:50', before5: '15:55'},
        {time: '20:00', boss: 'Nouver & Kutum', before15: '19:45', before10: '19:50', before5: '19:55'},
    ],
    friday: [
        {time: '00:15', boss: 'Vell'},
        {time: '02:00', boss: 'Karanda & Offin', before15: '01:45', before10: '01:50', before5: '01:55'},
        {time: '11:00', boss: 'Nouver', before15: '10:45', before10: '10:50', before5: '10:55'},
        {time: '16:00', boss: 'Kutum & Kzarka', before15: '15:45', before10: '15:50', before5: '15:55'},
        {time: '20:00', boss: 'Nouver & Kutum', before15: '19:45', before10: '19:50', before5: '19:55'},
        {time: '23:45', boss: 'Garmoth', before15: '23:30', before10: '23:35', before5: '23:40'}
    ],
    saturday: [
        {time: '02:00', boss: 'Kzarka', before15: '01:45', before10: '01:50', before5: '01:55'},
        {time: '11:00', boss: 'Kzarka & Karanda', before15: '10:45', before10: '10:50', before5: '10:55'},
        {time: '16:00', boss: 'Nouver & Kutum', before15: '15:45', before10: '15:50', before5: '15:55'},
        {time: '20:00', boss: 'Quint & Muraka', before15: '19:45', before10: '19:50', before5: '19:55'},
    ],
    monday: [
        {time: '02:00', boss: 'Nouver', before15: '01:45', before10: '01:50', before5: '01:55'},
        {time: '11:00', boss: 'Kutum & Nouver', before15: '10:45', before10: '10:50', before5: '10:55'},
        {time: '16:00', boss: 'Kzarka & Karanda', before15: '15:45', before10: '15:50', before5: '15:55'},
        {time: '18:00', boss: 'Vell', before15: '17:45', before10: '17:50', before5: '17:55'},
        {time: '20:00', boss: 'Nouver & Karanda', before15: '19:45', before10: '19:50', before5: '19:55'},
        {time: '23:45', boss: 'Offin', before15: '23:30', before10: '23:35', before5: '23:40'}
    ]
}

module.exports = { bosses }