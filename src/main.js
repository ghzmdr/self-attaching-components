var EntityPrototypes = require('./EntityPrototypes.js')
var EntityFactory = require('./EntityFactory.js')

var player = EntityFactory(EntityPrototypes.PLAYER)
console.log(player)