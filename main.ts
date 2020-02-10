controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    boolean = true
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    boolean = false
})
let projectile2: Sprite = null
let projectile: Sprite = null
let boolean = false
boolean = false
game.onUpdateInterval(500, function () {
    if (boolean == false) {
        projectile = sprites.createProjectileFromSide(img`
1 1 . . . . . 
1 1 1 1 . . . 
. 1 1 1 1 . . 
. . 1 1 1 1 . 
. 1 1 1 1 . . 
1 1 1 1 . . . 
1 1 . . . . . 
`, Math.randomRange(0, 100), Math.randomRange(0, 100))
    } else if (boolean == true) {
        projectile2 = sprites.createProjectileFromSide(img`
. . . . . 1 1 
. . . 1 1 1 1 
. . 1 1 1 1 . 
. 1 1 1 1 . . 
. . 1 1 1 1 . 
. . . 1 1 1 1 
. . . . . 1 1 
`, Math.randomRange(0, -100), Math.randomRange(0, 100))
    }
})
