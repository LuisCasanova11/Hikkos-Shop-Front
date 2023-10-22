<template>
    <DataTable :value="users" class="table" id="usertable" style="outline: none; ::selection{outline: none;}">
        <Column field="user" header="User"
            style="width: 100px; background-color: #D96836; border: none; ::selection{outline: none;}">
            <template #body>
                <img src="../assets/perfil.png" alt="user profile" />
            </template>
        </Column>
        <Column field="name" header="Name" style="width: 100px; background-color: #D96836; border: none; " />
        <Column field="birthday" header="Birthday" style="width: 100px; background-color: #D96836; border: none;" />
        <Column field="email" header="Email" style="width: 100px; background-color: #D96836; border: none; " />
        <Column field="phone" header="Phone" style="width: 100px; background-color: #D96836; border: none; " />
        <Column field="actions" header="Actions" style="width:120px; background-color: #D96836; border: none;">
            <template #body>
                <Button icon="pi pi-pencil" style="background-color: #457b9d;" class="mr-1" />
                <Button icon="pi pi-trash" style="background-color: #9a031e;" class="mr-1" />
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