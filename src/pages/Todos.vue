<script setup lang="ts">

</script>

<template>
    <div class="px-3">
        <div class="py-8">
            <h1 class="text-5xl font-thin text-center">TODOS</h1>
        </div>
        <div>
            <input type="text" placeholder="What needs to be done" class="w-full h-12 px-3 rounded-md shadow-md">
        </div>
        <div class="py-3 flex items-center justify-between font-light">
            <p>3 items left</p>
            <ul class="flex items-center gap-x-3">
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>
            <button class="text-base">
                Clear Completed
            </button>
        </div>
        <div class="w-full p-3 bg-zinc-700 flex items-center justify-between rounded-md shadow-md">
            <div class="flex items-center gap-x-3">
                <input type="checkbox">
                <p class="text-base leading-relaxed tracking-tight">Something</p>
            </div>
            <p>delete</p>
        </div>
    </div>
</template>
