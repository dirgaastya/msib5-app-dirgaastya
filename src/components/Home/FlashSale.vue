<script setup lang="ts">
import { TProducts } from "../../store/product.store";
import ProductCard from "../ProductCard.vue";
import Button from "../Button.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperButtonNext from "../Swiper/SwiperButtonNext.vue";
import "swiper/css";

const modules = [Navigation, Autoplay];

defineProps({
    products: {
        type: Array as () => TProducts[],
        required: true,
    },
});
</script>

<template>
    <div class="px-6 py-8 space-y-8 md:px-24 md:py-14 bg-gray-50">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-x-3">
                <h3 class="text-2xl font-semibold text-gray-900">Flash Sale</h3>
                <Button label="00:12:12" color="danger" />
            </div>
            <h3 class="inline-flex gap-x-3 text-lg text-primary font-semibold">
                View all <img src="../../assets/icons/arrow-right.svg" width="24" height="24" />
            </h3>
        </div>
        <Swiper
            :modules="modules"
            :slides-per-view="2"
            :space-between="10"
            :breakpoints="{
                '640': {
                    slidesPerView: 3,
                    spaceBetween: 60,
                },
                '768': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                '1024': {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
            }"
            :loop="true"
            :navigation="{ enabled: true, nextEl: '.swiper-button-next' }"
            :autoplay="{
                delay: 7000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }"
        >
            <SwiperSlide v-for="(product, index) in products" :key="index">
                <ProductCard :product="product" />
            </SwiperSlide>
            <SwiperButtonNext />
        </Swiper>
    </div>
</template>
