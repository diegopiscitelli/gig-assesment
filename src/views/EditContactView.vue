<script setup lang="ts">
import EditContactComponent from '../components/EditContactComponent.vue'
import IconBack from '../components/icons/IconBack.vue'

// const contacts = reactive(useConstactsStore())
</script>
<template>
	<div class="section">
		<div class="contacts-header">
			<h1>Edit Contact</h1>
			<div class="button-navigation">
				<RouterLink to="/">
					<IconBack />
					Back
				</RouterLink>
			</div>
		</div>
		<EditContactComponent />
	</div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
