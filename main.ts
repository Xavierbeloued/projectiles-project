//  Create Game
info.setScore(0)
info.setLife(3)
scene.setTileMapLevel(tilemap`level`)
//  Create Player
let Player = sprites.create(img`
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
`)
scene.cameraFollowSprite(Player)
controller.moveSprite(Player)
//  Create Enemies
let Enemy = sprites.create(img`
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
`)
//  Shoot Enemeies
controller.player1.onButtonEvent
let projectile = sprites.createProjectileFromSprite(img`
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
`, Player, 50, 50)
