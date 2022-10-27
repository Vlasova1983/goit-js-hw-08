import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
  
player.on ('timeupdate',_.throttle(function(evt) { 
    localStorage.setItem("videoplayer-current-time", evt.seconds);       
},1000));

player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time"))).then(function(seconds){})
    .catch(function(error) {
        switch (error.name) {
            case 'RangeError': break;
            default: break;
        }
    }
);
