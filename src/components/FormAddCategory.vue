<template>
    <form @submit.prevent="submitForm">
        <Toast />
        <div class="grid formgrid">
            <div class="field col-12 md:col-6">
                <input type="text" id="categoryName" v-model="categorie.categoryName" required
                    class="w-full p-2 py-3 text-base border-solid outline-none appearance-none text-color surface-overlay border-1 surface-border border-round focus:border-primary"
                    placeholder="Categorie name">
                <!-- <select id="status" v-model="categorie.status"
                    class="w-full p-2 py-3 mt-2 text-base border-solid outline-none text-color surface-overlay border-1 surface-border border-round focus:border-primary"
                    placeholder="Status">
                </select> -->
            </div>
        </div>
        <div class="flex">
            <Button @click="closeForm" type="cancel" class="w-full mr-2 justify-content-center"
                style="background-color: #183045;">Cancel</Button>
            <Button type="submit" class="w-full ml-2 justify-content-center" style="background-color: #2A9D8F;">Add
                Category</Button>
        </div>

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
            categorie: {
                categoryName: "",
            }
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
            axios.post("http://localhost:3000/api/categories", this.categorie)
                .then((response) => {
                    console.log("Categoria agregado exitosamente:", response.data);
                    this.$emit("close");
                    location.reload();
                    this.show();
                })
                .catch((error) => {
                    console.error("Error al agregar la categoria:", error);
                });
        },

        closeForm() {
            this.$emit("close");
        }
    },
};
</script>
