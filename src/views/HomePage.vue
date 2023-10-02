<template>
	<div class="card-container">
		<Card class="card">
			<template #title>
				<div class="flex flex-wrap gap-2 align-items-center justify-content-between">
					<span class="text-xl font-bold text-900">Products</span>
					<Button @click="visible = true" label="Add product" style="background: #2A9D8F;" />
				</div>
			</template>
			<template #content>
				<ProductsTableVue></ProductsTableVue>
			</template>
		</Card>
		<Dialog v-model:visible="visible" modal header="Create a new product" :style="{ width: '50vw' }">
			<div class="form-builder">
				<div class="grid formgrid">
					<div class="field col-4 md:col-6">
						<FileUpload class="m-2" mode="basic" name="subir_prod" url="#" accept="image/*" chooseLabel="Imagen"
							:maxFileSize="1000000" @upload="onUpload" />

						<InputText class="m-2" placeholder="Stock"></InputText>

					</div>
					<div class="field col-12 md:col-6">
						<InputText class=" m-2" placeholder="Product name"></InputText>
						<Dropdown v-model="a" :options="a" optionLabel="categories" placeholder="Category" class="m-2" />
						<InputText class=" m-2" placeholder="Price"></InputText>
					</div>

					<div class="field col-12">
						<Textarea placeholder="Description"
							class="w-full p-2 text-base border-solid outline-none appearance-none text-color surface-overlay border-1 surface-border border-round focus:border-primary"></Textarea>
					</div>
				</div>
			</div>
			<template #footer>
				<div class="button-container">
					<Button class="custom-button" style="background: #183045;" label="Cancel" icon="pi pi-times"
						@click="visible = false" />
					<Button class="custom-button" style="background: #2A9D8F;" label="Create product" icon="pi pi-check"
						@click="visible = false" autofocus />
				</div>
			</template>
		</Dialog>
	</div>
</template>

<script setup>
import Card from 'primevue/card';
import ProductsTableVue from '../components/ProductsTable.vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import Dropdown from 'primevue/dropdown';



import { ref } from "vue";

const visible = ref(false);

// import { useToast } from "primevue/usetoast";
// const toast = useToast();

// const onUpload = () => {
// 	toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 })
// }

</script>
<style scoped>
.card-container {
	margin: 10px;
	min-height: 100%;
	min-width: 75%;

}

.button-container {
	display: flex;
	justify-content: space-between;
}

.custom-button {
	flex-grow: 1;
	margin: 0 5px;
}

.card {
	min-height: 100%;
	min-width: 100%;
}

.field {
	border-radius: 10px;
}
</style>

