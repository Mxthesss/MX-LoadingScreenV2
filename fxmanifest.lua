name 'MX-LoadingScreenV2'
author 'Mxthess'
version '1.0'

fx_version 'cerulean'
game 'gta5'

loadscreen 'html/index.html'

files {
    'html/index.html',
    'html/assets/images/polarbear.png',
    'html/assets/images/serverlogo.png',
    'html/assets/images/background1.jpg',
    'html/assets/images/background2.jpg',
    'html/assets/images/background3.jpg',
    'html/assets/images/background4.jpg',
    'html/css/style.css',
    'html/js/script.js',
    'html/assets/song/song.mp3'
}

loadscreen_manual_shutdown 'yes'
loadscreen_cursor 'yes'

client_script 'client/client.lua'
server_script 'server/updater.lua'
shared_script 'shared/config.lua'

-- Do not change anything here!!!
