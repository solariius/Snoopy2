export default class Jogador {
    constructor(cena) {
        this.cena = cena;
        this.sprite = cena.physics.add.sprite(10, 45, 'snoopy');
        this.sprite.body.setSize(22, 45);
        this.sprite.setBounce(0.2)
        this.sprite.setCollideWorldBounds(true);

        // cria as animações
        cena.anims.create({
            key: 'direita',
            frames: cena.anims.generateFrameNumbers('snoopy', { start: 1, end: 6}),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'atoa',
            frames: cena.anims.generateFrameNumbers('snoopy', { start: 10, end: 10 }),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'pulando',
            frames: cena.anims.generateFrameNumbers('snoopy', { start: 10, end: 13}),
            frameRate: 20,
            repeat: -1
        });

        cena.anims.create({
            key: 'esquerda',
            frames: cena.anims.generateFrameNumbers('snoopy', { start: 1, end: 6 }),
            frameRate: 10,
            repeat: -1
        });
    
    }
}