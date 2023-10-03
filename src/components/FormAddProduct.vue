<template>
    <form @submit.prevent="submitForm">
        <Toast />
        <label for="productName">Product Name:</label>
        <input type="text" id="productName" v-model="product.productName" required>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="product.price" required>
        <label for="stock">Stock:</label>
        <input type="number" id="stock" v-model="product.stock" required>
        <label for="description">Description:</label>
        <textarea id="description" v-model="product.description" required></textarea>
        <label for="categoryId">Category:</label>
        <select id="categoryId" v-model="product.categoryId">
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
        </select>
        <label for="image">Image URL:</label>
        <input type="text" id="image" v-model="product.image">
        <Button type="submit">Add Product</Button>
        <Button @click="showSuccess">Show Toast</Button>
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
