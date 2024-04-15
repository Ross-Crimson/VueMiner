<script setup>
import { AppState } from '../AppState.js';
import { computed, ref, onMounted } from 'vue';
import { gameService } from '../services/GameService.js';

const cheese = computed(() => AppState.cheese)
const autoUpgrades = AppState.autoUpgrades
const clickUpgrades = AppState.clickUpgrades

function buyAutoUpgrade(upgradeName){
    const currUpgrade = autoUpgrades.find(upgrade => upgrade.name == upgradeName)
    if (currUpgrade.price > cheese.value) return
    gameService.spendCheese(currUpgrade.price)
    currUpgrade.quantity++
}

function buyClickUpgrade(upgradeName){
    const currUpgrade = clickUpgrades.find(upgrade => upgrade.name == upgradeName)
    if (currUpgrade.price > cheese.value) return
    gameService.spendCheese(currUpgrade.price)
    currUpgrade.quantity++
}
</script>

<template>
    <section class="row justify-content-center">
        <div class="col-6">
                <div v-for="upgrade in clickUpgrades" :key="upgrade.name">
                    <div class="row justify-content-center">
                        <div class="col-4">

                            <button @click="buyClickUpgrade(`${upgrade.name}`)">{{ upgrade.name }} <i class="mdi mdi-cheese"></i>{{ upgrade.price}}</button>
                        </div>
                        <div class="col-2">
                            <p class="">+{{ upgrade.multiplier }}/s</p>
                        </div>
                        <div class="col-2">
                            <p class="">Click+{{ upgrade.multiplier * upgrade.quantity }}</p>
                        </div>
                    </div>
                
            </div>
        </div>

        <div class="col-6">

                <div v-for="upgrade in autoUpgrades" :key="upgrade.name">
                    <div class="row justify-content-center">
                        <div class="col-4">
                            <button @click="buyAutoUpgrade(`${upgrade.name}`)">{{ upgrade.name }} <i class="mdi mdi-cheese"></i>{{ upgrade.price}}</button>
                        </div>
                        <div class="col-2">
                            <p>+{{ upgrade.multiplier }}/s</p>
                        </div>
                        <div class="col-2">
                            <p class="">Gain+{{ upgrade.multiplier * upgrade.quantity }}/s</p>
                        </div>
                    </div>
                </div>
                
        </div>
        
    </section>
</template>