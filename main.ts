controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player1,
    assets.animation`Player1AnimeLeft`,
    200,
    true
    )
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, Player2)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, Player1)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, Player1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player1,
    assets.animation`Player 1 AnimateRight`,
    200,
    true
    )
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player2,
    assets.animation`Player2AnimateRight`,
    200,
    true
    )
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player2,
    assets.animation`Player2AnimateLeft`,
    200,
    true
    )
})
function createPlayer1 () {
    Player1 = sprites.create(assets.image`Player1Stationary`, SpriteKind.Player)
    controller.moveSprite(Player1, 80, 0)
    Player1.ay = 500
    tiles.placeOnRandomTile(Player1, sprites.builtin.forestTiles22)
}
function createPlayer2 () {
    Player2 = sprites.create(assets.image`Player2Stationary`, SpriteKind.Player)
    controller.moveSprite(Player2, 80, 0)
    Player2.ay = 500
    tiles.placeOnRandomTile(Player2, sprites.builtin.forestTiles22)
}
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, Player2)
})
let Player2: Sprite = null
let Player1: Sprite = null
tiles.setTilemap(tilemap`Test Tilemap1`)
let pixelsToMeters = 30
