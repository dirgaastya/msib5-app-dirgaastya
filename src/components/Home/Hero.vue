<script setup lang="ts">
import Button from "../Button.vue";
</script>

<template>
    <div class="relative pt-20 pb-8 px-6 md:p-24 md:pt-64 flex items-center justify-between bg-gradient-to-b from-secondary">
        <div class="xl:w-[480px] space-y-6">
            <h1 class="text-center xl:text-left text-3xl md:text-6xl font-semibold text-gray-900">Welcome To GITS Commerce</h1>
            <p class="text-center xl:text-left text-lg md:text-xl font-normal text-gray-600">
                Morpheme is a next-gen financial technology company in the process of reinventing banking.
            </p>
            <Button label="Start Shopping" color="primary" icon="cart" class="mx-auto xl:mx-0" />
        </div>
        <div class="hidden xl:block absolute right-0 t">
            <img src="../../assets/images/hero-image.png" />
        </div>
    </div>
</template>
