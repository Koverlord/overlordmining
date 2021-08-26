class Upgrade {
    constructor(attrs={}) {
        this.id = attrs.id ?? 0;
        this.cost = attrs.cost;
    }
    
    buyable() {
        for (i in this.cost) {
            if (SD[i] < this.cost[i]) return false;
        }
        return true;
    }

    buy() {
        if (!this.buyable()) {
            add_log("재료가 부족합니다.");
            return;
        }
        for (i in this.cost) {
            SD[i] -= this.cost[i]
            SD.upgrades[this.id] += 1
        }
    }
}