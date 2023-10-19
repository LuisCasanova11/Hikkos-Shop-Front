import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from '../views/ProductsPage.vue'
import UsersPage from '../views/UsersPage.vue'
import CategoriesPage from '../views/CategoriesPage.vue';
import LoginPage from '../views/LoginPage.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/products',
			component: ProductsPage
		},
		{
			path: '/users',
			component: UsersPage
		},
		{
			path: '/categories',
			component: CategoriesPage
		},
		{
			path: '/login',
			component: LoginPage
		},
	],
})

export default router