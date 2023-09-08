<script setup lang="ts">
import SectionHeader from "../SectionHeader.vue";
import CategoryApi from "../../api/categories.json";

type TCategory = {
    name: string;
    image: string;
};

const categories: TCategory[] = CategoryApi as TCategory[];
</script>
<template>
    <div class="py-12 px-6 space-y-8 md:p-24 md:pt-32">
        <SectionHeader title="Categories" />
        <div class="grid grid-cols-3 md:grid-cols-6 md:px-6 gap-10">
            <div v-for="(category, index) in categories" :key="index" class="text-center space-y-3">
                <img :src="`src/assets/images/${category.image}.svg`" class="md:max-w-[126px] mx-auto" />
                <p class="text-sm md:text-base font-semibold">{{ category.name }}</p>
            </div>
        </div>
    </div>
</template>
