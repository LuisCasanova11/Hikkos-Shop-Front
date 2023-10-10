<template>
    <DataTable :value="products" class="table" id="prodtable">
        <Column field="id" header="Item" style="width: 100px" />
        <Column field="productName" header="Name" />
        <Column field="category.categoryName" header="Category" />
        <Column field="stock" header="Stock" />
        <Column field="price" header="Price" />
        <Column header="Actions" style="width:120px">
            <template #body="rowData">
                <Button icon="pi pi-trash" class="mr-1 p-button-danger" @click="showDeleteConfirmation(rowData.data.id)" />
                <Button icon="pi pi-pencil" class="mr-1 p-button-success" @click="editProduct(rowData.data.id)" />
            </template>
        </Column>
    </DataTable>
    <Dialog v-model:visible="visible" modal>
        <form @submit.prevent="saveProductChanges">
            <div>
                <label for="productName">Name:</label>
                <input type="text" id="productName" v-model="editedProduct.productName" />
            </div>
            <div>
                <label for="stock">Stock:</label>
                <input type="number" id="stock" v-model="editedProduct.stock" />
            </div>
            <div>
                <label for="price">Price:</label>
                <input type="number" id="price" v-model="editedProduct.price" />
            </div>
            <Button type="submit" label="Save" />
        </form>
    </Dialog>
    <Dialog v-model:visible="deleteConfirmationVisible" modal>
        <div>
            <p>¿Estás seguro de que deseas eliminar el producto {{ productToDeleteName }}?</p>
        </div>
        <div class="flex">
            <Button class="w-full mr-2 justify-content-center" label="Cancelar" @click="cancelDelete" />
            <Button class="w-full mr-2 justify-content-center" label="Confirmar" @click="confirmDelete" />
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
            productToDeleteId: null,
            productToDeleteName: "",
            products: [],
            count: 0,
            visible: false,
            editedProduct: {
                id: null,
                productName: "",
                stock: 0,
                price: 0,
            },
        };
    },
    created() {
        this.getProducts();
    },
    methods: {
        async getProducts() {
            try {
                const response = await axios.get("http://localhost:3000/api/products");
                this.products = response.data.products;
                this.count = response.data.count;
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        },
        async deleteProduct(id) {
            try {
                await axios.delete(`http://localhost:3000/api/products/${id}`);
                this.getProducts();
            } catch (error) {
                console.error(`Error al eliminar el producto con ID ${id}:`, error);
            }
        },
        showDeleteConfirmation(id, productName) {
            this.productToDeleteId = id;
            this.productToDeleteName = productName;
            this.deleteConfirmationVisible = true;
        },
        cancelDelete() {
            this.productToDeleteId = null;
            this.deleteConfirmationVisible = false;
        },
        async confirmDelete() {
            if (this.productToDeleteId) {
                await this.deleteProduct(this.productToDeleteId);
                this.productToDeleteId = null;
                this.deleteConfirmationVisible = false;
            }
        },
        async editProduct(id) {
            try {
                const response = await axios.get(`http://localhost:3000/api/products/${id}`);
                if (response.status === 200) {
                    this.editedProduct = response.data;
                    this.visible = true;
                } else {
                    console.error("Error al obtener los detalles del producto:", response.data.msg);
                }
            } catch (error) {
                console.error("Error al obtener los detalles del producto:", error);
            }
        },
        async saveProductChanges() {
            try {
                const response = await axios.put(`http://localhost:3000/api/products/${this.editedProduct.id}`, this.editedProduct);
                if (response.status === 204) {
                    this.getProducts();
                    this.visible = false;
                } else {
                    console.error("Error al actualizar el producto:", response.data.msg);
                }
            } catch (error) {
                console.error("Error al actualizar el producto:", error);
            }
        },
    },
};
</script>

<style scoped>
.table {
    min-height: 100%;
    min-width: 100%;
    max-width: 100%;
    max-height: 100%;
}
</style>