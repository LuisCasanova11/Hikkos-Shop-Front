<template>
    <DataTable :value="categories" class="table" id="cattable" paginator :rows="5">
        <Column field="id" header="Id" style="width: 100px" />
        <Column field="categoryName" header="Category name" />
        <Column header="Actions" style="width:120px">
            <template #body="rowData">
                <Button icon="pi pi-pencil" severity class="mr-1" @click="editProduct(rowData.data.id)" />
                <Button icon="pi pi-trash" severity="danger" class="mr-1"
                    @click="showDeleteConfirmation(rowData.data.id)" />
            </template>
        </Column>
    </DataTable>
    <Dialog v-model:visible="deleteConfirmationVisible" modal>
        <div>
            <p>¿Estás seguro de que deseas eliminar la categoria?</p><br>
        </div>
        <div class="flex">
            <Button class="w-full mr-2 justify-content-center" style="background-color: #183045;" label="Cancelar"
                @click="cancelDelete" />
            <Button class="w-full ml-2 justify-content-center" style="background-color: #2A9D8F;" label="Confirmar"
                @click="confirmDelete" />
        </div>
    </Dialog>
</template>
<script>
import axios from "axios";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
export default {
    components: {
        DataTable,
        Column,
        Button,
        Dialog
    },
    data() {
        return {
            deleteConfirmationVisible: false,
            count: 0,
            categories: [],
            categorieDeletedId: null
        };
    },
    async created() {
        await this.getCategories();
    },
    methods: {
        async getCategories() {
            try {
                const response = await axios.get("http://localhost:3000/api/categories");
                this.categories = response.data.categories;
                this.count = response.data.count;
            } catch (error) {
                console.error("Error al obtener las categorias:", error);
            }
        },
        async deleteCategorie(id) {
            try {
                await axios.delete(`http://localhost:3000/api/categories/${id}`);
                this.getCategories();
            } catch (error) {
                console.error(`Error al eliminar la categoria con ID ${id}:`, error);
            }
        },
        showDeleteConfirmation(id) {
            this.categorieDeletedId = id;
            this.deleteConfirmationVisible = true;
        },
        cancelDelete() {
            this.categorieDeletedId = null;
            this.deleteConfirmationVisible = false;
        },
        async confirmDelete() {
            if (this.categorieDeletedId) {
                await this.deleteCategorie(this.categorieDeletedId);
                this.categorieDeletedId = null;
                this.deleteConfirmationVisible = false;
            }
        },
    }
}
</script>