class LifeComponent {
    constructor() {
        this.life = 100
    }

    gain(amount) {
        this.life += amount
    }

    lose(amount) {
        this.life -= 100
    }
}

LifeComponent.requiredProperty = "LIFE"

module.exports = LifeComponent