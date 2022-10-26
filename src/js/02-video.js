import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on ('timeupdate',_.throttle( function() {
    console.log('played the video with throttle!');
     
},1000));

// console.log(player.getCurrentTime());  

player.setCurrentTime(100).then(function(seconds){})
.catch(function(error) {
    switch (error.name) {
        case 'RangeError': break;
        default: break;
    }
});
