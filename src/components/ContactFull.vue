<script setup lang="ts">
import { type Contact } from '../types'
import { computed } from 'vue'

const props = defineProps<{
	data: Contact
	componentKey?: number
}>()
const avatarLetter = computed(() => {
	if (!props.data.name) return
	return props.data.name[0].toUpperCase()
})
</script>

<template>
	<div class="contact-full">
		<div v-if="props.data" class="conctat-full-card">
			<div class="avatar">
				<div>{{ avatarLetter }}</div>
			</div>
			<span class="contact-info">
				<p>{{ props.data.name }}</p>
				<p>{{ props.data.lastName }}</p>
				<p>{{ props.data.email }}</p>
				<p>{{ props.data.country }}</p>
			</span>
		</div>
		<div v-else class="conctat-full-card placeholder">Please select a contact</div>
	</div>
</template>

<style scoped>
.contact-full {
	display: flex;
	align-content: center;
	justify-content: center;
	height: fit-content;
}
.conctat-full-card {
	display: flex;
	align-items: center;
	width: 450px;
	height: 200px;
	background-color: var(--background-color-component);
	padding: 1em;
	border-radius: 1em;
}
.placeholder {
	color: var(--background-grey);
	justify-content: center;
}

span {
	margin-right: 0.2em;
}

.avatar {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	font-size: 2em;
	font-weight: 700;
	width: 100px;
	height: 100px;
	margin-right: 0.4em;
	border-radius: 50px;
	background-color: rgb(158, 122, 192);
}
</style>
