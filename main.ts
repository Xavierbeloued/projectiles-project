//  Shoot Enemeies
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_player1_button_a_pressed() {
    
    if (playerFacingRight) {
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
        `, Player, 150, 0)
    } else {
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
        `, Player, -150, 0)
    }
    
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_event_pressed() {
    
    playerFacingRight = false
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_event_pressed() {
    
    playerFacingRight = true
})
let projectile : Sprite = null
let Player : Sprite = null
//  Create Game
info.setScore(0)
info.setLife(3)
let playerFacingRight = true
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
let boss = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 2 2 2 . . . . . . .
    . . . . . 2 2 2 2 2 2 . . . . .
    . . . . . 2 2 2 2 2 2 2 2 . . .
    . . . . . . 2 2 2 2 2 . . . . .
    . . . . . . . 2 . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
boss.follow(Player, 40, 110)
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
game.onUpdateInterval(15000, function on_update_interval2() {
    let life = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 2 2 . 2 2 . . . . . .
    . . . . 2 3 2 2 2 3 2 . . . . .
    . . . . 2 3 3 3 3 3 2 . . . . .
    . . . . 2 3 3 2 3 3 2 . . . . .
    . . . . . 2 3 3 3 2 . . . . . .
    . . . . . . 2 2 2 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
    life.setPosition(scene.screenWidth(), randint(0, 200))
    life.setKind(SpriteKind.Food)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_overlap3(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeLifeBy(+1)
})
