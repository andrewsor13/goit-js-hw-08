import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerElement = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(playerElement);

player.on('timeupdate', throttle(savePlaybackTime, 1000));

function savePlaybackTime(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime.toString());
}

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  const currentTime = parseFloat(savedTime);
  player.setCurrentTime(currentTime);
}
