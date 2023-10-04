<template>
    <form @submit.prevent="submitForm">
        <div class="grid nested-grid">
            <div class="col-4">
                <input type="text" id="image" v-model="product.image" placeholder="Select image"
                    class="w-full h-full p-3 font-bold border-round-sm">
            </div>
            <div class="col-8">
                <div class="grid">
                    <div class="col-6">
                        <input type="text" id="productName" v-model="product.productName" required
                            placeholder="Product name" class="w-full p-3 font-bold text-center border-round-sm">
                    </div>
                    <div class="col-12">
                            <select id="categoryId" v-model="product.categoryId" aria-placeholder="Select a category" class="p-3 font-bold text-center border-round-sm">
                                <option value="1">Category 1</option>
                                <option value="2">Category 2</option>
                            </select>
                    </div>
                </div>
            </div>
            <input type="number" id="price" v-model="product.price" required placeholder="Price">
            <input type="number" id="stock" v-model="product.stock" required placeholder="Stock">
            <textarea id="description" v-model="product.description" required placeholder="Description"></textarea>
            <Button type="submit">Add Product</Button>
            <Button @click="showSuccess">Show Toast</Button>

        </div>
    </form>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import Button from 'primevue/button';

const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};


const product = ref({
    productName: "",
    price: "",
    stock: "",
    description: "",
    status: true,
    categoryId: 1,
    image: "",
});

const submitForm = () => {
    axios.post("http://localhost:3000/api/products", product.value)
        .then((response) => {
            console.log("Producto agregado exitosamente:", response.data);
        })
        .catch((error) => {
            console.error("Error al agregar el producto:", error);
        });
};
</script>
