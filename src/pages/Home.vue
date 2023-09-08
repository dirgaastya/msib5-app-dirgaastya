<script setup lang="ts">
import { Hero, Categories, FlashSale, LatestProduct, Promo, ProductList } from "../components/Home/index.ts";
import Newslatter from "../components/Newslatter.vue";
import Footer from "../components/Footer.vue";
import { useProductStore } from "../store/product.store.ts";
import { onMounted } from "vue";

const productStore = useProductStore();

onMounted(() => {
    productStore.getProduct();
});
</script>

<template>
    <Hero />
    <Categories />
    <FlashSale :products="productStore.products" />
    <LatestProduct :products="productStore.products" />
    <Promo />
    <LatestProduct :products="productStore.products" />
    <ProductList :products="productStore.products" />
    <Newslatter />
    <Footer />
</template>
