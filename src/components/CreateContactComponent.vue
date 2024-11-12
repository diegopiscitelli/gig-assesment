<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import router from '../router'
import ContactForm from '../components/ContactForm.vue'
import { type Contact } from '../types'
import { useConstactsStore } from '../stores/contacts'
import { v4 as uuidv4 } from 'uuid'
import ContactFull from '../components/ContactFull.vue'

const newContact: Contact = reactive({
	id: '',
	name: '',
	lastName: '',
	email: '',
	country: '',
})

onMounted(() => {
	newContact.id = uuidv4()
})

const isValid = ref(false)
const key = ref(0)

const updateNewContact = (contact) => {
	const updateData = contact._rawValue
	newContact.name = updateData.name
	newContact.lastName = updateData.lastName
	newContact.email = updateData.email
	newContact.country = updateData.country
}
const handleKeyUp = (contact: Contact) => {
	console.log('keyUp', typeof contact)
	updateNewContact(contact)
	key.value++
}
const onFormChanged = (contact: Contact) => {
	updateNewContact(contact)
	key.value++
}

const addContact = () => {
	if (!isValid.value) return
	useConstactsStore().addContact(newContact)
	router.push({ path: '/', replace: true })
}
const handleVal = (isValidForm: boolean) => {
	isValid.value = isValidForm
}
</script>
<template>
	<div class="create-contact-section">
		<ContactForm
			@change="onFormChanged"
			@isValidForm="handleVal"
			@keyUp="handleKeyUp"
			:componentKey="key"
		/>
		<div class="section-preview">
			<ContactFull :data="newContact"></ContactFull>
			<div class="buttons-container">
				<RouterLink class="button regular" to="/"> Cancel </RouterLink>
				<button
					class="button regular"
					:class="{ active: isValid, 'text-danger': !isValid }"
					@click="addContact"
					form="form"
				>
					Create
				</button>
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
.buttons-container {
	display: flex;
	justify-content: end;
	column-gap: 15px;
	margin-top: 2em;
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
}
.button:hover {
	opacity: 0.8;
}
.text-danger {
	background-color: var(--background-grey);
	pointer-events: none;
}

@media (min-width: 1024px) {
}
</style>
