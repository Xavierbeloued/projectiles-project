//  Shoot Enemeies
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_player1_button_a_pressed() {
    
    projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 5 4 2 . . . . . . 
                    . . . . . . 5 5 4 2 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        `, Player, 60, 0)
})
let projectile : Sprite = null
let Player : Sprite = null
//  Create Game
info.setScore(0)
info.setLife(3)
scene.setTileMapLevel(tilemap`level`)
//  Create Player
Player = sprites.create(img`
        . . . . . . f f . . . . . . . . 
            . . . . . . e e . . . . . . . . 
            . . . . . e e e e . . . . . . . 
            . e e e e e e e e e e e e e f f 
            . e e . e e e e 8 e e e e e f . 
            . e e . e e e e e e . . . . . . 
            . e e . e e e e e e . . . . . . 
            . . . . e e e e e e . . . . . . 
            . . . . e e e e e e . . . . . . 
            . . . e e . . . . e e . . . . . 
            . . . e e . . . . e e . . . . . 
            . . . e e . . . . e e . . . . . 
            . . . e e . . . . e e . . . . . 
            . . . f f . . . . f f . . . . . 
            . . . f f f . . . f f f . . . . 
            . . . . . . . . . . . . . . . .
    `, 0)
scene.cameraFollowSprite(Player)
controller.moveSprite(Player)
Player.setKind(SpriteKind.Player)
//  Create Enemies
game.onUpdateInterval(1500, function on_update_interval() {
    let prisoner = sprites.create(img`
        . . . . . . f f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 . . . . 
            . . 2 . . 2 2 2 2 . . 2 . . . . 
            . . 2 . . 2 2 2 2 . . 2 . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . 2 2 . . . . 2 2 . . . . . 
            . . . 2 2 . . . . 2 2 . . . . . 
            . . . 2 2 . . . . 2 2 . . . . . 
            . . . 2 2 . . . . 2 2 . . . . . 
            . . . f f . . . . f f . . . . . 
            . . . f f f . . . f f f . . . . 
            . . . . . . . . . . . . . . . .
    `, 5)
    prisoner.setPosition(scene.screenWidth(), randint(0, 200))
    prisoner.setVelocity(50, 50)
    prisoner.setFlag(SpriteFlag.BounceOnWall, true)
    prisoner.setKind(SpriteKind.Enemy)
})
//  Lose Lives
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
