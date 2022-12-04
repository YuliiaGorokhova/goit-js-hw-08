import Player from '@vimeo/player';

const throttle = require('lodash.throttle');  //теж зробити імпортом

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(updatePosition, 1000));

function updatePosition(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
