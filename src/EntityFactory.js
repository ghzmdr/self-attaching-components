var Entity = require('./Entity.js')
var ComponentsPool = require('./components/ComponentsPool.js')

/*
    This class holds a reference to ComponentsPool
    and acts as a bridge between external code and Entity instantiation
*/

function EntityFactory (properties) {    
    return new Entity(properties, ComponentsPool)
}

module.exports = EntityFactory