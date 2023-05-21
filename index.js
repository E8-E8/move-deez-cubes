const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.height = 64 * 9;
canvas.width = 64 * 16;


const player = new Player();

const animate = () => {
    window.requestAnimationFrame(animate);

    c.fillStyle = "white"
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.draw();
    player.update();
}


animate();


window.addEventListener('keydown', (event) => {
    console.log(event)
    switch (event.key) {
        case 'w':
            if(player.velocity.y === 0) {
                player.velocity.y = -20;
            }
            break
        case 'a':
            if(player.velocity.y === 0) {
                player.velocity.x = -10;
            }
            break
        case 'd':
            if(player.velocity.y === 0) {
                player.velocity.x = 10;
            }
            break
    }
})
