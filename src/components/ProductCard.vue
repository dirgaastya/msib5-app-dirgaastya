<script setup lang="ts">
import { TProducts } from "../store/product.store";
defineProps({
    product: {
        type: Object as () => TProducts,
        required: true,
    },
});
</script>
<template>
    <div class="border border-gray-200 bg-gray-100 rounded-xl overflow-hidden">
        <img :src="`src/assets/images/${product.image}.png`" :alt="product.image" class="mx-auto" />
        <div class="p-6 bg-white">
            <div class="w-max py-1 px-3 rounded-full bg-gray-200 text-sm text-gray-900 font-semibold">Label</div>
            <h4 class="pt-4 pb-2 font-normal text-base text-gray-900">
                {{ product.name }}
            </h4>
            <div class="flex items-center justify-between">
                <h5 class="font-semibold text-xl text-gray-900">{{ product.discPrice }}</h5>
                <p class="font-normal text-xs text-gray-400">450ML</p>
            </div>
            <div class="flex items-center gap-x-2 py-1">
                <h6 class="font-normal text-xs text-gray-400 line-through">{{ product.realPrice }}</h6>
                <div class="w-max py-1 px-3 rounded-full bg-red-50 text-sm text-red-700 font-semibold">
                    {{ product.discount }}
                </div>
            </div>
        </div>
    </div>
</template>
