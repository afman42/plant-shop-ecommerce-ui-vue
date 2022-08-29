import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'root',
		component: () => import('../views/RootPage.vue')
	},
	{
		path: '/detail',
		name: 'detail',
		component: () => import('../views/DetailPage.vue')
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;