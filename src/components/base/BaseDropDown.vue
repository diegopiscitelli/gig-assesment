<script setup lang="ts">
// import { type Contact } from '../types'

defineProps({
	modelValue: {
		type: String,
	},
	options: {
		type: Array,
		required: true,
	},
})
const emit = defineEmits(['update:modelValue'])
const updateValue = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
	<div class="base-dropdown">
		<label><slot name="label"></slot></label>
		<select :value="modelValue" @change="updateValue">
			<option></option>
			<option v-for="(option, index) in options" :key="index">{{ option }}</option>
		</select>
	</div>
</template>

<style>
.base-dropdown {
	display: flex;
	flex-direction: column;
}
select {
	color: var(--font-color);
	border: none;
	outline: none;
	background-color: var(--background-grey);
	padding: var(--padding-form-element);
	border-radius: var(--border-radius-form-element);
	font-family: var(--font-main);
	font-size: 1em;
}
</style>
