/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Nov 2024
 * This program makes pixels move around edges
*/
 //Variables
let sprite: game.LedSprite = null

input.onButtonPressed(Button.A, function () {
    sprite = game.createSprite(0, 0)
    sprite.set(LedSpriteProperty.Direction, 0)

    let loopCounter = 0
    while (loopCounter < 5) { 
        let stepCounter = 0

        while (stepCounter < 5) {
            sprite.move(1)
            basic.pause(500)
            stepCounter = stepCounter + 1
        }

        // Turn the sprite to face the next edge
        sprite.turn(Direction.Right, 90)
        loopCounter = loopCounter + 1
    }
    // Delete the sprite when done
    sprite.delete()
})
