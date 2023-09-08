<script setup lang="ts">
import Button from "./Button.vue";
type NavMenu = {
    name: string;
    to: string;
};

const navigationLinks: NavMenu[] = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "Todo",
        to: "/todos",
    },
    {
        name: "About",
        to: "/about",
    },
];
</script>

<template>
    <nav class="w-full absolute top-0 left-0 z-50 px-6 md:px-24 py-3 flex justify-between items-center">
        <div class="flex items-center gap-x-6">
            <img src="../assets/images/Logo-dark.png" width="142" height="32" />
            <ul class="hidden md:flex md:items-center md:gap-x-6">
                <li v-for="(link, index) in navigationLinks" :key="index">
                    <router-link
                        :to="link.to"
                        class="text-base font-semibold text-gray-600 hover:text-gray-700 transition ease-in duration-300"
                        >{{ link.name }}</router-link
                    >
                </li>
            </ul>
        </div>
        <div class="hidden md:block md:space-x-3">
            <Button label="Log in" />
            <Button label="Sign up" color="primary" />
        </div>
        <div class="block md:hidden">
            <img src="../assets/icons/hamburger-menu.svg" alt="hamburger" class="w-8 h-8" />
        </div>
    </nav>
</template>

<style scoped>
.router-link-active {
    font-weight: bold;
    color: rgb(55 65 81);
}
</style>
