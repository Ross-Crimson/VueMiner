<script setup>
import { AppState } from '../AppState.js';
import { computed, onMounted } from 'vue';
import { gameService } from '../services/GameService.js';

const cheese = computed(() => AppState.cheese)
const autoUpgrades = computed(() => {
    let total = 0
    AppState.autoUpgrades.forEach(upgrade => total += upgrade.multiplier * upgrade.quantity)
    return total
})

const clickUpgrades = computed(() => {
    let total = 1
    AppState.clickUpgrades.forEach(upgrade => total += upgrade.multiplier * upgrade.quantity)
    return total
})

function increaseCheese(){
    gameService.increaseCheese();
}

function autoCollectCheese(){
    gameService.autoCollectCheese();
}

onMounted(()=>{
    setInterval(autoCollectCheese, 3000)
})

</script>
<template>
    <section class="row justify-content-center">
        <div class="col-4">
            <img class="img-fluid" src="https://purepng.com/public/uploads/large/purepng.com-moonmoonastronomical-bodyfifth-largest-natural-satellitenatural-satellitemoon-light-141152706663245bda.png" alt="" @click="increaseCheese()">
        </div>
    </section>
    <section class="row justify-content-center">
        <div class="col-2 text-end">
            <h4>{{ clickUpgrades }}<i class="mdi mdi-cursor-default"></i></h4>
        </div>
        <div class="col-2 text-center">
            <h3>{{ cheese }}</h3>
        </div>
        <div class="col-2">
            <h4>{{ autoUpgrades }}<i class="mdi mdi-timer-plus"></i></h4>
        </div>
    </section>
</template>
