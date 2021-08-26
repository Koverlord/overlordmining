class Upgrade {
    constructor(calcPrice, calcEffect) {
        this.level = 0
        this.calcPrice = calcPrice
        this.getPrice = () => {
            const price = {};
            for (const i in calcPrice) {
                price[i] = this.calcPrice[i](this.level);
            }
            return price;
        }
        this.calcEffect = calcEffect;
        this.getEffect = () => this.calcEffect(this.level);
    }

    isBuyable() {
        const price = this.getPrice();
        for (const i in price) {
            if (SD[i] < price[i]) return false;
        } 
        return true;
    }

    buy() {
        const price = this.getPrice();
        for (const i in price) {
            SD[i] -= price[i];
        }
        this.level++;
    }
}

const upg = new Upgrade({iron: n => n * 10, gold: n => n ** 2}, n => 10 - n * 2);