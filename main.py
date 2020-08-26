# Create Game
info.set_score(0)
info.set_life(3)
scene.set_tile_map_level(tilemap("""level"""))
# Create Player
Player = sprites.create(img("""
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
"""))
scene.camera_follow_sprite(Player)
controller.move_sprite(Player)
# Create Enemies
Enemy = sprites.create(img("""
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
"""))
# Shoot Enemeies
controller.player1.on_button_event(Controller)
projectile = sprites.create_projectile_from_sprite(img("""
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
"""), Player, 50, 50)