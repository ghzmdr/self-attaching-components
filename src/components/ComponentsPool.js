var D = require('../D.js')

/*
    Not directly looping through Pool, instead create a map property => class
    so at the cost of a bit of setup time (constructing the map)
    components' classes can be referenced directly by their requiredProperty
*/

var Pool = [
    
    require('./LifeComponent.js'),
    require('./PositionComponent.js')

]

class CompoentsPool {
    constructor() {

        this.pool = {}        
        
        for (let ComponentClass of Pool) 
            this.pool[ComponentClass.requiredProperty] = ComponentClass
        
    }

    get(property) {

        if (this.pool[property])
            return new this.pool[property]()
        else D.e("Unmatched prooperty in ComponentsPool: " + property)            
    }
}

module.exports = new CompoentsPool()