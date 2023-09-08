<script setup lang="ts">
defineProps({
    label: String,
    className: Boolean,
});
</script>
<template>
    <button
        :class="`py-1 px-4 rounded bg-gray-800 font-normal border border-transparent hover:border hover:border-white transition ease-in-out duration-300 ${
            className ? 'border-white' : ''
        }`"
    >
        {{ label }}
    </button>
</template>
