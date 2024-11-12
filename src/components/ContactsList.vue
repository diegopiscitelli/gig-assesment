<script setup lang="ts">
import ContactSmall from './ContactSmall.vue'
import { type Contact } from '../types'

defineProps<{
	data: Array<Contact>
}>()
</script>

<template>
	<div v-if="data" class="contact-list">
		<ContactSmall v-for="contact in data" :key="contact.name" :data="contact" />
	</div>
</template>

<style>
.contact-list {
	width: 45%;
	max-height: 60vh;
	overflow-y: scroll;
}
@media (max-width: 900px) {
	.contact-list {
		width: 100%;
		max-height: 60vh;
		overflow-y: scroll;
	}
}
</style>
