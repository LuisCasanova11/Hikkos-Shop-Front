<template>
	<div class="card-container">
		<Card class="card">
			<template #title>
				<div class="flex flex-wrap gap-2 align-items-center">
					<Button @click="visible = true" label="Add categorie" style="background: #2A9D8F;" />
				</div>
			</template>
			<template #content>
				<Categories></Categories>
			</template>
		</Card>
	</div>
	<Dialog v-model:visible="visible" modal header="Create a new categorie" :style="{ width: '50vw' }">
		<AddCategorie :visible="visible" @close="visible = false"></AddCategorie>
	</Dialog>
</template>

<script setup>
import Card from 'primevue/card';
import Categories from '../components/CategoriesTable.vue';
import Button from 'primevue/button';
import AddCategorie from '../components/FormAddCategorie.vue';
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

