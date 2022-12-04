import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function updatePosition(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', throttle(updatePosition, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime);
}
