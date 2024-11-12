<script setup lang="ts">
import { computed } from 'vue'
import { type Contact } from '../types'
import { useConstactsStore } from '../stores/contacts'
import IconEdit from '../components/icons/IconEdit.vue'

const props = defineProps<{
	data: Contact
}>()
const store = useConstactsStore()

const handleClick = () => {
	store.selectContact(props.data.id)
}
const isSelected = computed(() => {
	if (store.selectedContact == props.data.id) {
		return true
	} else {
		return false
	}
})
</script>

<template>
	<div class="contact-small" @click="handleClick" :class="{ selected: isSelected }">
		<li>
			<span class="avatar"> {{ data.name[0].toUpperCase() }}</span>
			<span>{{ data.name }}</span>
			<span>{{ data.lastName }}</span>
		</li>
		<div v-if="isSelected" class="button-navigation">
			<RouterLink to="/edit-contact">
				<IconEdit />
			</RouterLink>
		</div>
	</div>
</template>

<style scoped>
.contact-small {
	display: flex;
	justify-content: space-between;
	padding: 0.5em;
	border-bottom: 1px solid var(--font-color);
	transition: 0.2s;
}
li {
	display: flex;
	list-style-type: none;
}
.selected {
	background-color: var(--base-color-purple-darker);
}
span {
	pointer-events: none;
	margin-right: 0.2em;
}
.avatar {
	display: flex;
	justify-content: center;
	width: 35px;
	height: 35px;
	margin-right: 0.4em;
	border-radius: 1em;
	background-color: rgb(158, 122, 192);
}
</style>
