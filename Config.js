const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "919931122319"],
global.ownername = process.env.OWNER_NAME || "💙𓆩‎✘AʏᴜSʜ✘𓆪_✰",
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: Ayushpandey023"
global.location = "Indian"

global.botname = process.env.BOTNAME || "𝐌𝐀𝐑𝐈𝐀-𝐌𝐃",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "💙𓆩‎✘AʏᴜSʜ✘𓆪_✰",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "💙𓆩‎✘AʏᴜSʜ✘𓆪_✰",
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '✔️ *İşlem tamamlandı Efendim!* ',
    prem: '❌ *Erişim reddedildi*',
    admin: '❌ *Erişim reddedildi*',
    botAdmin: '❌ *Erişim reddedildi* ',
    owner: '❌ *Erişim reddedildi*',
    group: '❌ *Bu özellik sadece gruplarda çalışır*',
    private: '❌ *Bu özellik sadece özel sohbetlerde çalışır*',
    wait: '⌛ *Lütfen bekleyiniz Efendim...* ',    
    error: '❗︎ *HATA!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
