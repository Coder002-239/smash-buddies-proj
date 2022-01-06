tiles.setTilemap(tilemap`Test Tilemap1`)
let mySprite = sprites.create(assets.image`Player1Stationary`, SpriteKind.Player)
mySprite = sprites.create(assets.image`Player2Stationary`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
