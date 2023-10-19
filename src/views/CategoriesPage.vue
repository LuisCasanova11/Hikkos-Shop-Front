<template>
	<div class="card-container">
		<Card class="card">
			<template #title>
				<div class="flex flex-wrap gap-2 align-items-center justify-content-between">
					<span class="text-xl font-bold text-900">Categories</span>
					<Button @click="visible = true" label="Add category" style="background: #2A9D8F;" />
				</div>
			</template>
			<template #content>
				<Categories></Categories>
			</template>
		</Card>
	</div>
	<Dialog v-model:visible="visible" modal header="Create a new category" :style="{ width: '50vw' }">
		<AddCategory :visible="visible" @close="visible = false"></AddCategory>
	</Dialog>
</template>

<script setup>
import Card from 'primevue/card';
import Categories from '../components/CategoriesTable.vue';
import Button from 'primevue/button';
import AddCategory from '../components/FormAddCategory.vue';
import Dialog from 'primevue/dialog';

import { ref } from "vue";

const visible = ref(false);

</script>
<style scoped>
.card-container {
	margin: 10px;
	min-height: 100%;
	min-width: 75%;

}

.card {
	min-height: 100%;
	min-width: 100%;
}
</style>

