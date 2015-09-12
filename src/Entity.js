/*
    You __never__ directly instantiate an Entity
    that's possible, but you should need a reference to the componentsPool
    which is expensive to create

    Instead the EntityFactory along with the EntityPrototypes give faster and 
    more comfy way to instantiate them
*/

class Entity {
    constructor(properties, componentsPool) {

        this.components = {}
        this.properties = properties

        this.attachComponents(componentsPool)
    }  

    attachComponents(componentsPool) {
        for (let property of this.properties) {
            //Avoid reattaching already present components
            if (!this.components[property])
                this.components[property] = componentsPool.get(property)
        }
    }

    update() {
        for(let property of Object.keys(this.components))
            this.components[property].update(this)
    }
}

module.exports = Entity