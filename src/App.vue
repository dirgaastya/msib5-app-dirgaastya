<script setup lang="ts">
import NavigationMenu from './components/NavigationMenu.vue'
</script>

<template>
    <div class="max-w-xl mx-auto">
        <NavigationMenu/>
        <router-view></router-view>
    </div>
</template>
