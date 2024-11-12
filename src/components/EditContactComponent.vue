<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import ContactForm from '../components/ContactForm.vue'
import { type Contact } from '../types'
import { useConstactsStore } from '../stores/contacts'
import router from '../router'

import ContactFull from '../components/ContactFull.vue'

const store = useConstactsStore()

let newContact = reactive<Contact>(store.current[0])

onMounted(() => {
	updateNewContact(store.current[0])
})

const isValid = ref(false)
const key = ref(0)

const updateNewContact = (contact: Contact) => {
	newContact = contact
}
const handleKeyUp = (contact: Contact) => {
	console.log('keyUp', contact)
	updateNewContact(contact)
	key.value++
}
const onFormChanged = (contact: Contact) => {
	updateNewContact(contact)
	key.value++
}
const deleteContact = () => {
	store.deleteContact(newContact.id)
	router.push({ path: '/', replace: true })
}
const editContact = () => {
	store.editContact(newContact)
	router.push({ path: '/', replace: true })
}
const handleVal = (isValidForm: boolean) => {
	isValid.value = isValidForm
}
</script>
<template>
	<div class="create-contact-section">
		<ContactForm
			:defaultFormValues="newContact"
			@change="onFormChanged"
			@isValidForm="handleVal"
			@keyUp="handleKeyUp"
			:componentKey="key"
		/>
		<div class="section-preview">
			<ContactFull :data="newContact"></ContactFull>
			<div class="buttons-wrapper">
				<button class="button regular delete" @click="deleteContact" form="form">Delete</button>
				<div class="buttons-sub-wrapper">
					<RouterLink class="button regular" to="/"> Cancel </RouterLink>
					<button
						class="button regular"
						:class="{ active: isValid, disabled: !isValid }"
						@click="editContact"
						form="form"
					>
						Save
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.create-contact-section {
	display: flex;
	flex-direction: row;
	align-content: center;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: wrap;
	height: 100%;
	padding: 50px 0;
}
.section-preview {
	flex-direction: column;
	align-content: space-between;
}
.buttons-wrapper {
	margin-top: 2em;
	display: flex;
	justify-content: space-between;
	column-gap: 15px;
}
.buttons-sub-wrapper {
	display: flex;
	justify-content: space-between;
}
.button {
	display: flex;
	align-items: center;
	background-color: var(--base-color-purple);
	color: var(--font-color);
	outline: none;
	border: none;
	padding: 0.5em;
	border-radius: 5px;
	font-family: var(----font-main);
	font-size: 0.9em;
	letter-spacing: 0;
	font-weight: 700;
	transition: 0.4s;
	cursor: pointer;
	margin: 4px;
}
.delete {
	background-color: var(--base-color-red);
}
.button:hover {
	opacity: 0.8;
}
.disabled {
	background-color: var(--background-grey);
	pointer-events: none;
}

@media (min-width: 1024px) {
}
</style>
