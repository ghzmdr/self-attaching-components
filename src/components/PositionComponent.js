class PositionComponent {
    constructor() {
        this.position = {x: 0, y: 0}
    }    

    move(offsetVector) {
        this.position.x - offsetVector.x
        this.position.y - offsetVector.y
    }

    moveTo(positionVector) {
        this.position = positionVector
    }
}

PositionComponent.requiredProperty = 'POSITION' 

module.exports = PositionComponent