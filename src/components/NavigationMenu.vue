<script setup lang="ts">
</script>

<template>
    <nav class="w-full flex justify-center items-center p-3 border-b border-b-white" >
        <ul class="flex items-center gap-x-3">
            <li class="">
                <router-link to="/">Home</router-link>
             </li>
            <li class="">
                <router-link to="/todos">Todos</router-link>
            </li>
            <li class="">
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </nav>
</template>
