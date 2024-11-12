<script setup lang="ts">
import ContactsComponent from '../components/ContactsComponent.vue'
import IconCreate from '../components/icons/IconCreate.vue'
</script>

<template>
	<main class="section">
		<div class="contacts-header">
			<h1>Contacts</h1>
			<div class="button-navigation">
				<RouterLink to="/create-contact">
					<IconCreate />
					Create-contact
				</RouterLink>
			</div>
		</div>
		<ContactsComponent />
	</main>
</template>

<style>
main {
	width: 100%;
}
.contacts-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	/* width: 100%; */
}
</style>
