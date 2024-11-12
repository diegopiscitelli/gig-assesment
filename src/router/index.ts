import { createRouter, createWebHistory } from 'vue-router'
import ContactsView from '../views/ContactsView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: ContactsView,
		},
		{
			path: '/create-contact',
			name: 'createContact',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/CreateContactView.vue'),
		},
		{
			path: '/edit-contact',
			name: 'editContact',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/EditContactView.vue'),
		},
	],
})

export default router
