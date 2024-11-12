import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import { type Contact } from '../types'

export const useConstactsStore = defineStore('contacts', () => {
	const localContacts: Array<Contact> = JSON.parse(localStorage.getItem('data')!)
	const contacts: Array<Contact> = reactive(localContacts || [])
	const selectedContact = ref('')

	const current = computed(() => contacts.filter((contact) => contact.id === selectedContact.value))

	function addContact(contact: Contact) {
		contacts.push(contact)
		localStorage.setItem('data', JSON.stringify(useConstactsStore().contacts))
	}

	function selectContact(id: string) {
		selectedContact.value = id
	}

	function deleteContact(id: string) {
		const objWithIdIndex = contacts.findIndex((obj) => obj.id === id)
		contacts.splice(objWithIdIndex, 1)
		localStorage.setItem('data', JSON.stringify(useConstactsStore().contacts))
	}
	function editContact(contactEdited: Contact) {
		const objWithIdIndex = contacts.findIndex((contact) => contact.id === contactEdited.id)
		contacts[objWithIdIndex] = contactEdited
		localStorage.setItem('data', JSON.stringify(useConstactsStore().contacts))
	}

	return {
		contacts,
		selectedContact,
		current,
		addContact,
		selectContact,
		deleteContact,
		editContact,
	}
})
