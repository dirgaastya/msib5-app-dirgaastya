import { defineStore } from 'pinia'
import productsApi from '../api/products.json'
export type TProducts = {
    name: string;
    image: string;
    realPrice: string;
    discPrice: string;
    discount: string;
};

export const useProductStore = defineStore('product', {
    state: (): {
        products: TProducts[]
    } => ({
        products: []
    }),
    getters: {
        latestProducts(): TProducts[] {
            return this.products.slice(0, 4);
        },
        flashSaleProducts(): TProducts[] {
            return this.products.slice(0, 5);
        }
    },
    actions: {
        getProduct(): void {
            this.products = productsApi
        }
    }
})
