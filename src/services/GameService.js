import { AppState } from '../AppState.js';

class GameService {
    increaseCheese() {
        const clickUpgrades = AppState.clickUpgrades
        let upgradeAmount = 1
        clickUpgrades.forEach(upgrade => {
            upgradeAmount += (upgrade.quantity * upgrade.multiplier)
        })
        AppState.cheese += upgradeAmount
    }

    autoCollectCheese() {
        const autoUpgrades = AppState.autoUpgrades
        let upgradeAmount = 0
        autoUpgrades.forEach(upgrade => {
            upgradeAmount += (upgrade.quantity * upgrade.multiplier)
        })
        AppState.cheese += upgradeAmount
    }

    spendCheese(cost) {
        AppState.cheese -= cost
    }
}

export const gameService = new GameService