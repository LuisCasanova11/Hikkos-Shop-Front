import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from '../components/LoginComponent.vue';
import UsersPage from '../views/HomePage.vue'
import CategoriesPage from '../views/CategoriesPage.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: LoginComponent
		},
		{
			path: '/users',
			component: UsersPage
		},
		{
			path: '/categories',
			component: CategoriesPage
		}
	],
})

export default router