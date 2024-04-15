<script setup>
import { computed } from 'vue'
import { AppState } from './AppState'

const appState = computed(() => AppState)

</script>

<template>
<section class="container-fluid">

    <h1>Vue-oom Miner</h1>
    <Moon/>
    <Upgrade/>
</section>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

</style>



