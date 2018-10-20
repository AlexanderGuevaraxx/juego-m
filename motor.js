var config = {
    width: 800,
    height: 600,
    renderer: Phaser.AUTO,
    antialias: true,
    multiTexture: true,
    state: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);