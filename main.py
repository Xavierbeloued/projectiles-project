# Shoot Enemeies

def on_player1_button_a_pressed():
    global projectile
    if playerFacingRight:
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
        """),
        Player,
        150,
        0)
    else:
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
        """),
        Player,
        -150,
        0) 
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

def on_left_event_pressed():
    global playerFacingRight
    playerFacingRight = False
    
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_event_pressed)

def on_right_event_pressed():
    global playerFacingRight
    playerFacingRight = True
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_event_pressed)

projectile: Sprite = None
Player: Sprite = None
# Create Game
info.set_score(0)
info.set_life(3)
playerFacingRight = True
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
    """),
    0)
scene.camera_follow_sprite(Player)
controller.move_sprite(Player)
Player.set_kind(SpriteKind.player)
# Create Enemies
def on_update_interval():
    prisoner = sprites.create(img("""
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
    """),
    5)
    prisoner.set_position(scene.screen_width(),randint(0, 200))
    prisoner.set_velocity(50, 50)
    prisoner.set_flag(SpriteFlag.BOUNCE_ON_WALL, True)
    prisoner.set_kind(SpriteKind.enemy)
game.on_update_interval(1500, on_update_interval)

boss = sprites.create(img("""
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
"""))
boss.follow(Player, 40, 110)

# Lose Lives
def on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player,SpriteKind.enemy, on_overlap)

def on_overlap2(sprite, otherSprite):
    sprite.destroy()
    otherSprite.destroy()
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_overlap2)

def on_update_interval2():
    life = sprites.create(img("""
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
"""))
    life.set_position(scene.screen_width(),randint(0, 200))
    life.set_kind(SpriteKind.food)
game.on_update_interval(15000, on_update_interval2)

def on_overlap3(sprite, otherSprite):
    otherSprite.destroy()
    info.change_life_by(+1)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_overlap3)