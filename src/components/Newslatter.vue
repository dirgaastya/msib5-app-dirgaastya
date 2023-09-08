<script setup lang="ts">
import Button from "./Button.vue";
</script>
<template>
    <div class="px-6 py-10 md:px-24 md:py-12 bg-gray-900 flex flex-col gap-y-3 lg:flex-row items-center justify-between">
        <div class="">
            <h4 class="font-semibold text-white text-xl">
                Join Our Newslatter
            </h4>
            <p class="font-normal text-base text-gray-200">
                Join over 4,000+ startups already growing with Morpheme.
            </p>
        </div>
        <div class="flex items-center gap-x-3">
            <input
                type="email"
                placeholder="Enter Your Email"
                class="h-[52px] py-[10px] px-[18px] text-lg ease-linear duration-300 rounded-lg"
            />
            <Button label="Subscribe" color="primary" />
        </div>
    </div>
</template>
