import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player);

player.on ('timeupdate', function() {
    console.log('played the video!');        
}
)

// player.on ('timeupdate',_.throttle(()=> {
//     console.log('played the video!');
        
// },300));


