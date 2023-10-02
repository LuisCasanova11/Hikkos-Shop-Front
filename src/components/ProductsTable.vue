<template>
    <DataTable :value="products" class="table">
        <Column field=item header="Item" style="width: 100px" />
        <Column field="name" header="Name" />
        <Column field="category" header="Category" />
        <Column field="stock" header="Stock" />
        <Column field="price" header="Price" />
        <Column field="actions" header="Actions" style="width: 100px" />
    </DataTable>
</template>

<script>

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
    components: {
        DataTable,
        Column,
    },
    data() {
        return {
            products: [
                {
                    item: 'assets/perfil.png',
                    name: 'Product 1',
                    category: 'Drinks',
                    stock: 15,
                    price: '$199.99',
                },
                {
                    item: 'assets/soda.png',
                    name: 'Product 2',
                    category: 'Drinks',
                    stock: 50,
                    price: '$49.99',
                },
            ],
        };
    },
    methods: {

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