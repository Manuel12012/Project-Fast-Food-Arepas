import { ref, computed, watch } from "vue";

import type {
    Product,
    CartItem
} from "@/types";


// ========================
// GLOBAL STATE
// ========================

const cart = ref<CartItem[]>([]);


// ========================
// LOAD FROM LOCALSTORAGE
// ========================

const savedCart = localStorage.getItem("cart");

if (savedCart) {
    cart.value = JSON.parse(savedCart);
}


// ========================
// COMPOSABLE
// ========================

export function useCart() {

    // ========================
    // ACTIONS
    // ========================

    function addToCart(
        product: Product,
        cantidad: number = 1
    ) {

        const existingItem = cart.value.find(
            item => item.id === product.id
        );

        if (existingItem) {

            existingItem.cantidad += cantidad;

            return;
        }

        cart.value.push({

            id: product.id,

            nombre: product.nombre,

            precio: product.precio,

            cantidad: cantidad

        });

    }


    function incrementQuantity(id: number) {

        const item = cart.value.find(
            item => item.id === id
        );

        if (!item) return;

        item.cantidad++;

    }


    function decrementQuantity(id: number) {

        const item = cart.value.find(
            item => item.id === id
        );

        if (!item) return;

        if (item.cantidad > 1) {
            item.cantidad--;
        }

    }


    function deleteItem(id: number) {

        cart.value = cart.value.filter(
            item => item.id !== id
        );

    }


    function clearCart() {

        cart.value = [];

    }


    // ========================
    // DERIVED STATE
    // ========================

    const total = computed(() => {

        return cart.value.reduce(
            (accumulator, item) => {

                return accumulator +
                    (item.precio * item.cantidad);

            },
            0
        );

    });


    const totalItems = computed(() => {

        return cart.value.reduce(
            (accumulator, item) => {

                return accumulator +
                    item.cantidad;

            },
            0
        );

    });


    // ========================
    // EFFECTS
    // ========================

    watch(
        cart,

        () => {

            localStorage.setItem(
                "cart",
                JSON.stringify(cart.value)
            );

        },

        {
            deep: true
        }
    );


    // ========================
    // API
    // ========================

    return {

        cart,

        addToCart,

        incrementQuantity,

        decrementQuantity,

        deleteItem,

        clearCart,

        total,

        totalItems

    };

}