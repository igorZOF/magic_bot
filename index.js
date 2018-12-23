const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const fs = require('fs')
const TOKEN = '738005360:AAEsgQKR5_69LpbQpoPH-xeCS3WM5QkWw14'

console.log('Bot has been started ....')

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
})


bot.onText(/\/ancientapparation_ability/, msg => {

  bot.sendPhoto(msg.chat.id, './ancientapparation_ability1.jpg', {
    caption: 'This is first ability'
  })
    bot.sendPhoto(msg.chat.id, './ancientapparation_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './ancientapparation_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './ancientapparation_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/ancientapparation_main/, msg => {

    bot.sendPhoto(msg.chat.id, './ancientapparation_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './ancientapparation_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/bane_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './bane_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './bane_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './bane_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './bane_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/bain_main/, msg => {

    bot.sendPhoto(msg.chat.id, './bain_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './bain_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/batrider_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './batrider_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './batrider_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './batrider_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './batrider_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/batrider_main/, msg => {

    bot.sendPhoto(msg.chat.id, './batrider_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './batrider_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/chen_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './chen_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './chen_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './chen_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './chen_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/chen_main/, msg => {

    bot.sendPhoto(msg.chat.id, './chen_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './chen_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/crystalmaiden_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './crystalmaiden_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './crystalmaiden_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './crystalmaiden_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './crystalmaiden_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/crystalmaiden_main/, msg => {

    bot.sendPhoto(msg.chat.id, './crystalmaiden_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './crystalmaiden_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/darkseer_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './darkseer_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './darkseer_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './darkseer_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './darkseer_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/darkseer_main/, msg => {

    bot.sendPhoto(msg.chat.id, './darkseer_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './darkseer_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/darkwillow_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './darkwillow_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './darkwillow_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './darkwillow_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './darkwillow_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './darkwillow_ability5.jpg', {
        caption: 'This is fifth ability'
    })
})

bot.onText(/\/darkwillow_main/, msg => {

    bot.sendPhoto(msg.chat.id, './darkwillow_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './darkwillow_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/dazzle_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './dazzle_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './dazzle_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './dazzle_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './dazzle_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/dazzle_main/, msg => {

    bot.sendPhoto(msg.chat.id, './dazzle_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './dazzle_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/deathprophet_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './deathprophet_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './deathprophet_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './deathprophet_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './deathprophet_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/deathprophet_main/, msg => {

    bot.sendPhoto(msg.chat.id, './deathprophet_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './deathprophet_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/disruptor_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './disruptor_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './disruptor_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './disruptor_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './disruptor_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/disruptor_main/, msg => {

    bot.sendPhoto(msg.chat.id, './disruptor_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './disruptor_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/enchantress_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './enchantress_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './enchantress_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './enchantress_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './enchantress_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/enchantress_main/, msg => {

    bot.sendPhoto(msg.chat.id, './enchantress_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './enchantress_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/enigma_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './enigma_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './enigma_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './enigma_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './enigma_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/enigma_main/, msg => {

    bot.sendPhoto(msg.chat.id, './enigma_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './enigma_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/grimstroke_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './grimstroke_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './grimstroke_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './grimstroke_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './grimstroke_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/grimstroke_main/, msg => {

    bot.sendPhoto(msg.chat.id, './grimstroke_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './grimstroke_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/invoker_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './invoker_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './invoker_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './invoker_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './invoker_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './invoker_ability5.jpg', {
        caption: 'This is fifth ability'
    })
    bot.sendPhoto(msg.chat.id, './invoker_ability6.jpg', {
        caption: 'This is sixth ability'
    })
    bot.sendPhoto(msg.chat.id, './invoker_ability7.jpg', {
        caption: 'This is seventh ability'
    })
    bot.sendPhoto(msg.chat.id, './invoker_ability8.jpg', {
        caption: 'This is eighth ability'
    })
    bot.sendPhoto(msg.chat.id, './invoker_ability9.jpg', {
        caption: 'This is ninth ability'
    })
    bot.sendPhoto(msg.chat.id, './invoker_ability10.jpg', {
        caption: 'This is tenth ability'
    })
})

bot.onText(/\/invoker_main/, msg => {

    bot.sendPhoto(msg.chat.id, './invoker_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './invoker_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})

bot.onText(/\/invoker_node/, msg => {

    bot.sendPhoto(msg.chat.id, './invoker_node.jpg', {
        caption: 'This is node'
    })
    bot.sendPhoto(msg.chat.id, './invoker_exort.jpg', {
        caption: 'This is exort sphere'
    })
    bot.sendPhoto(msg.chat.id, './invoker_wex.jpg', {
        caption: 'This is wex sphere'
    })
    bot.sendPhoto(msg.chat.id, './invoker_quas.jpg', {
        caption: 'This is quas sphere'
    })

})


bot.onText(/\/jakiro_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './jakiro_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './jakiro_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './jakiro_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './jakiro_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/jakiro_main/, msg => {

    bot.sendPhoto(msg.chat.id, './jakiro_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './jakiro_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/kotl_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './kotl_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './kotl_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './kotl_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './kotl_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/kotl_main/, msg => {

    bot.sendPhoto(msg.chat.id, './kotl_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './kotl_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/leshrac_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './leshrac_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './leshrac_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './leshrac_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './leshrac_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/leshrac_main/, msg => {

    bot.sendPhoto(msg.chat.id, './leshrac_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './leshrac_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/lich_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './lich_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './lich_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './lich_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './lich_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/lich_main/, msg => {

    bot.sendPhoto(msg.chat.id, './lich_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './lich_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/lina_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './lina_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './lina_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './lina_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './lina_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/lina_main/, msg => {

    bot.sendPhoto(msg.chat.id, './lina_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './lina_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/lion_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './lion_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './lion_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './lion_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './lion_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/lion_main/, msg => {

    bot.sendPhoto(msg.chat.id, './lion_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './lion_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/naturesprophet_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './naturesprophet_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './naturesprophet_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './naturesprophet_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './naturesprophet_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/naturesprophet_main/, msg => {

    bot.sendPhoto(msg.chat.id, './naturesprophet_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './naturesprophet_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/necrophos_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './necrophos_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './necrophos_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './necrophos_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './necrophos_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/necrophos_main/, msg => {

    bot.sendPhoto(msg.chat.id, './necrophos_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './necrophos_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/ogremagi_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './ogremagi_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './ogremagi_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './ogremagi_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './ogremagi_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './ogremagi_ability5.jpg', {
        caption: 'This is fifth ability'
    })
})

bot.onText(/\/ogremagi_main/, msg => {

    bot.sendPhoto(msg.chat.id, './ogremagi_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './ogremagi_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/oracle_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './oracle_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './oracle_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './oracle_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './oracle_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/oracle_main/, msg => {

    bot.sendPhoto(msg.chat.id, './oracle_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './oracle_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/outworlddevourer_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './outworlddevourer_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './outworlddevourer_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './outworlddevourer_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './outworlddevourer_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/outworlddevourer_main/, msg => {

    bot.sendPhoto(msg.chat.id, './outworlddevourer_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './outworlddevourer_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/puck_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './puck_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './puck_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './puck_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './puck_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/puck_main/, msg => {

    bot.sendPhoto(msg.chat.id, './puck_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './puck_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/pugna_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './pugna_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './pugna_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './pugna_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './pugna_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/pugna_main/, msg => {

    bot.sendPhoto(msg.chat.id, './pugna_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './pugna_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/queenofpain_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './queenofpain_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './queenofpain_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './queenofpain_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './queenofpain_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/queenofpain_main/, msg => {

    bot.sendPhoto(msg.chat.id, './queenofpain_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './queenofpain_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/rubick_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './rubick_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './rubick_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './rubick_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './rubick_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/rubick_main/, msg => {

    bot.sendPhoto(msg.chat.id, './rubick_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './rubick_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/shadowdemon_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './shadowdemon_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './shadowdemon_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './shadowdemon_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './shadowdemon_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/shadowdemon_main/, msg => {

    bot.sendPhoto(msg.chat.id, './shadowdemon_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './shadowdemon_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/shadowshaman_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './shadowshaman_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './shadowshaman_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './shadowshaman_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './shadowshaman_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/shadowshaman_main/, msg => {

    bot.sendPhoto(msg.chat.id, './shadowshaman_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './shadowshaman_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/silencer_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './silencer_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './silencer_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './silencer_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './silencer_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/silencer_main/, msg => {

    bot.sendPhoto(msg.chat.id, './silencer_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './silencer_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/skywrathmage_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './skywrathmage_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './skywrathmage_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './skywrathmage_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './skywrathmage_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/skywrathmage_main/, msg => {

    bot.sendPhoto(msg.chat.id, './skywrathmage_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './skywrathmage_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/stormspirit_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './stormspirit_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './stormspirit_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './stormspirit_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './stormspirit_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/stormspirit_main/, msg => {

    bot.sendPhoto(msg.chat.id, './stormspirit_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './stormspirit_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/techies_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './techies_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './techies_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './techies_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './techies_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './techies_ability5.jpg', {
        caption: 'This is fifth ability'
    })
})

bot.onText(/\/techies_main/, msg => {

    bot.sendPhoto(msg.chat.id, './techies_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './techies_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/tinker_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './tinker_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './tinker_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './tinker_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './tinker_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/tinker_main/, msg => {

    bot.sendPhoto(msg.chat.id, './tinker_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './tinker_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/visage_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './visage_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './visage_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './visage_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './visage_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './visage_ability5.jpg', {
        caption: 'This is fifth ability'
    })
})

bot.onText(/\/visage_main/, msg => {

    bot.sendPhoto(msg.chat.id, './visage_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './visage_lasttopgame.jpg', {
        caption: 'This is lassttopgame'
    })
})


bot.onText(/\/warlock_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './warlock_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './warlock_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './warlock_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './warlock_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/warlock_main/, msg => {

    bot.sendPhoto(msg.chat.id, './warlock_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './warlock_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/windranger_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './windranger_ability1.jpg', {
        caption: 'This is first ability'
      })
    bot.sendPhoto(msg.chat.id, './windranger_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './windranger_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './windranger_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/windranger_main/, msg => {

    bot.sendPhoto(msg.chat.id, './windranger_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './windranger_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/winterwyvern_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './winterwyvern_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './winterwyvern_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './winterwyvern_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './winterwyvern_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/winterwyvern_main/, msg => {

    bot.sendPhoto(msg.chat.id, './winterwyvern_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './winterwyvern_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/witchdoctor_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './witchdoctor_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './witchdoctor_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './witchdoctor_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './witchdoctor_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/witchdoctor_main/, msg => {

    bot.sendPhoto(msg.chat.id, './witchdoctor_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './witchdoctor_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/zeus_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './zeus_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './zeus_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './zeus_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './zeus_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './zeus_ability5.jpg', {
        caption: 'This is fifth ability'
    })
})

bot.onText(/\/zeus_main/, msg => {

    bot.sendPhoto(msg.chat.id, './zeus_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './zeus_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})
















































