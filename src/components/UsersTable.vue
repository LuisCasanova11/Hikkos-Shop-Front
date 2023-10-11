<template>
    <DataTable :value="users" class="table" id="usertable">
        <Column field="user" header="User" style="width: 100px">
            <template #body>
                <img src="../assets/perfil.png" alt="user profile" />
            </template>
        </Column>
        <Column field="name" header="Name" />
        <Column field="birthday" header="Birthday" />
        <Column field="email" header="Email" />
        <Column field="phone" header="Phone" />
        <Column field="actions" header="Actions" style="width:120px">
            <template #body>
                <Button icon="pi pi-pencil" severity class="mr-1" />
                <Button icon="pi pi-trash" severity="danger" class="mr-1" />
            </template>
        </Column>
    </DataTable>
</template>

<script>

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

export default {
    components: {
        DataTable,
        Column,
        Button,
    },
    data() {
        return {
            users: [
                {
                    user: 'assets/perfil.png',
                    name: 'User 1',
                    birthday: '01/02/03',
                    email: 'email@example.com',
                    phone: '4556722',
                },
                {
                    user: 'assets/soda.png',
                    name: 'User 2',
                    birthday: '02/03/04',
                    email: 'email@example.com',
                    phone: '3211234',
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