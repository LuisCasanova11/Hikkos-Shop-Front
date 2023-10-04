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
        <Button @click="show()"></Button>
    </form>
</template>
<script>
import axios from "axios";
import Button from 'primevue/button';
import { useToast } from "primevue/usetoast";

export default {
    setup() {
        const toast = useToast();

        const show = () => {
            toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
        };

        return {
            toast,
            show
        }
    },
    components: {
        Button
    },
    data() {
        return {
            product: {
                productName: "",
                price: "",
                stock: "",
                description: "",
                status: true,
                categoryId: 1,
                image: "",
            },
        };
    },
    methods: {
        submitForm() {
            axios.post("http://localhost:3000/api/products", this.product)
                .then((response) => {
                    console.log("Producto agregado exitosamente:", response.data);
                    this.$emit("close");
                    location.reload();
                    this.show();
                })
                .catch((error) => {
                    console.error("Error al agregar el producto:", error);
                });
        },
    },
};
</script>
