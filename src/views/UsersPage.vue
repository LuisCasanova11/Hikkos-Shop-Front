<template>
	<div class="card-container">
		<Card class="card">
			<template #title>
				<div class="flex flex-wrap gap-2 align-items-center">
					<span class="text-xl font-bold text-900">Users</span>
				</div>
			</template>
			<template #content>
				<UsersTableVue></UsersTableVue>
			</template>
		</Card>
	</div>
</template>

<script setup>
import Card from 'primevue/card';
import UsersTableVue from '../components/UsersTable.vue';

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
	background-color: #D96836;
};
</style>

