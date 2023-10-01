<template>
	<div class="card-container">
		<Card class="card">
			<template #title>
				<div class="flex flex-wrap gap-2 align-items-center justify-content-between">
					<span class="text-xl font-bold text-900">Products</span>
					<Button label="Add product" style="background: #2A9D8F;"/>
				</div>
			</template>
			<template #content>
				<ProductsTableVue></ProductsTableVue>
			</template>
		</Card>
	</div>
</template>

<script setup>
import Card from 'primevue/card';
import ProductsTableVue from '../components/ProductsTable.vue';
import Button from 'primevue/button';
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
