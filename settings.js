/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['6281995401793','0']
global.ownerName = 'FahriXD'
global.packname = 'Xdry'
global.author = 'Whatsapp Bot MD'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: 'Kamu Syipaaa!',
botAdmin: 'Bot Not Admin!',
botOwner: 'Lu Bukan Syapa Syapa Gw!',
group: 'Coman Bisa Di Grup!',
private: 'Harus PM',
wait: 'Bentar...',
done: 'Done Ga Bang!'
}


//Sesuaikan
global.thumb = fs.readFileSync('./media/ichi.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
