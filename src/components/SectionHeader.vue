<script setup lang="ts">
defineProps({
    title: String,
});
</script>
<template>
    <div class="flex items-center justify-between">
        <h3 class="text-2xl font-semibold text-gray-900">{{ title }}</h3>
        <h3 class="inline-flex gap-x-3 text-lg text-primary font-semibold">
            View all <img src="../assets/icons/arrow-right.svg" width="24" height="24" />
        </h3>
    </div>
</template>
