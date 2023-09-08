<script setup lang="ts">
import footers from "../api/footers.json";
type SocialIcons = {
    image: string;
};

const socials: SocialIcons[] = [
    { image: "twitter" },
    { image: "linkedin" },
    { image: "facebook" },
    { image: "github" },
    { image: "angle-list" },
    { image: "dribbble" },
];
</script>

<template>
    <div class="px-6 pt-14 pb-10 md:px-24 md:pt-16 md:pb-12 bg-gray-800">
        <div class="flex flex-col gap-y-6 md:flex-row items-start justify-between">
            <div class="w-full md:w-1/3 mdpe-24 space-y-8">
                <img src="../assets/images/Logo-light.png" alt="logo-light" />
                <p class="font-normal text-base text-gray-200">
                    Design amazing digital experiences that create more happy in the world.
                </p>
            </div>
            <div class="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 md:gap-y-0 md:gap-x-3">
                <div v-for="(footer, index) in footers" :key="index" class="">
                    <h5 class="text-sm font-semibold text-gray-300 pb-4">{{ footer.name }}</h5>
                    <ul class="space-y-2">
                        <li v-for="item in footer.items" class="flex items-center gap-x-2 text-base font-semibold text-gray-200">
                            {{ item.name }}
                            <div
                                v-show="item.new"
                                class="w-max py-[2px] px-2 rounded-full bg-white/10 text-xs text-white font-medium border border-white/30"
                            >
                                New
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div
            class="mt-16 pt-8 border-t border-gray-500 flex flex-col md:flex-row items-center justify-between gap-y-3 md:gap-y-0"
        >
            <p class="order-2 md:order-1 font-normal text-base text-gray-500">
                © 2077 Morpheme UI. All rights reserved.
            </p>
            <ul class="order-1 md:order-2 flex gap-x-3 md:gap-x-6">
                <li v-for="(social, index) in socials" :key="`social-${index}`">
                    <img :src="`src/assets/icons/${social.image}.svg`" :alt="social.image" />
                </li>
            </ul>
        </div>
    </div>
</template>
