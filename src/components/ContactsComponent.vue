<script setup lang="ts">
import ContactsList from './ContactsList.vue'
import ContactFull from './ContactFull.vue'
import { useConstactsStore } from '../stores/contacts'

const store = useConstactsStore()
</script>

<template>
	<div class="contacts-section">
		<ContactsList :data="store.contacts" />
		<ContactFull v-if="store.current" :data="store.current[0]"></ContactFull>
	</div>
</template>
<style>
.contacts-section {
	display: flex;
	flex-direction: row;
	align-content: center;
	align-items: center;
	justify-content: space-around;
	height: 100%;
	padding: 50px;
}
@media (max-width: 900px) {
	.contacts-section {
		flex-wrap: wrap;
		padding: 0;
	}
}
</style>
