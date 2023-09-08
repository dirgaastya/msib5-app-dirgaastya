<script setup lang="ts">
defineProps({
    label: String,
    color: String,
    icon: String,
});

const colors: { [key: string]: string } = {
    base: "text-gray-600 hover:bg-gray-200 transition ease-linear duration-300",
    primary: "bg-primary text-white hover:bg-primary/80 transition ease-linear duration-300",
    danger: "bg-red-500 text-white hover:bg-red-500/80 transition ease-linear duration-300",
};
const icons: { [key: string]: string } = {
    cart: "shopping-cart",
};
</script>

<template>
    <button
        :class="`${
            icon ? 'flex items-center gap-x-3' : ''
        } h-10 py-2 px-4 md:h-[52px] md:py-[10px] md:px-[18px] md:text-lg ease-linear duration-300 rounded-lg  font-semibold ${
            color ? colors[color] : colors.base
        }`"
    >
        <img v-if="icon" :src="`src/assets/icons/${icons[icon]}.svg`" :alt="icons[icon]" />
        <span>{{ label }}</span>
    </button>
</template>
