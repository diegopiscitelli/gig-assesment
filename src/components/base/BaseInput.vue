<script setup lang="ts">
// import { type Contact } from '../types'

defineProps({
	modelValue: {
		type: String,
	},
})

const emit = defineEmits(['update:modelValue'])
const updateValue = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
	<div class="base-input">
		<label><slot name="label"></slot></label>
		<input :value="modelValue" @input="updateValue" type="text" />
		<p class="errors"><slot name="error"></slot></p>
	</div>
</template>

<style>
.base-input {
	display: flex;
	flex-direction: column;
}
input {
	color: var(--font-color);
	border: none;
	outline: none;
	background-color: var(--background-grey);
	padding: var(--padding-form-element);
	border-radius: var(--border-radius-form-element);
	font-family: var(--font-main);
	font-size: 1em;
}
.errors {
	font-size: 0.6em;
}
</style>
