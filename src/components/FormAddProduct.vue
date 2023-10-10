<template>
    <form @submit.prevent="submitForm">
        <Toast />
        <div class="formgrid grid">
            <div class="field col-12 md:col-6 ">
                <input type="text" id="image" v-model="product.image"
                    class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full px-5 py-6 border-round"
                    placeholder="Image">
                <input type="number" id="stock" v-model="product.stock" required
                    class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full mt-2"
                    placeholder="Stock">
            </div>
            <div class="field col-12 md:col-6">
                <input type="text" id="productName" v-model="product.productName" required
                    class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full py-3"
                    placeholder="Product name">
                <select id="categoryId" v-model="product.categoryId"
                    class="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary mt-2 py-3"
                    placeholder="Category">
                    <option v-bind:key="categorie.id" v-for="categorie in categories" :value="categorie.id">
                        {{ categorie.categoryName }}</option>
                    <!-- <option value="2">Category 2</option> -->
                </select>
                <input type="number" id="price" v-model="product.price" required
                    class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full mt-2"
                    placeholder="Price">
            </div>
            <div class="field col-12">
                <textarea id="description" v-model="product.description" required
                    class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                    placeholder="Description"></textarea>
            </div>
        </div>
        <div class="flex">
            <Button @click="closeForm" type="cancel" class="w-full mr-2 justify-content-center"
                style="background-color: #183045;">Cancel</Button>
            <Button type="submit" class="w-full ml-2 justify-content-center" style="background-color: #2A9D8F;">Add
                Product</Button>
        </div>

        <!-- <Button @click="show()"></Button> -->
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
                categoryId: 0,
                image: "",
            },
            categories: [
                {
                    "id": 0,
                    "categoryName": "",
                    "status": true
                },

            ],
        };
    },
    created() {
        this.getCategories();
    },
    methods: {
        async getCategories() {
            try {
                const response = await axios.get("http://localhost:3000/api/categories");
                this.categories = response.data.categories;
                this.count = response.data.count;
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
            console.log(this.categories)

        },
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

        closeForm() {
            this.$emit("close");
        }
    },
};
</script>
