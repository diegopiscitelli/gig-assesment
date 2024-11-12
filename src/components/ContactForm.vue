<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import BaseInput from './base/BaseInput.vue'
import BaseDropDown from './base/BaseDropDown.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
import * as countryList from 'country-list'
import { type Contact } from '../types'

const names = countryList.getNames()

const props = defineProps<{
	defaultFormValues?: Contact
}>()
onMounted(() => {
	if (props.defaultFormValues) {
		state.value = props.defaultFormValues
	}
})

const state = ref({
	name: '',
	lastName: '',
	email: '',
	country: '',
})
const rules = computed(() => ({
	name: {
		required,
		minLength: minLength(3),
		$autoDirty: true,
	},
	lastName: {
		required,
		minLength: minLength(3),
		$autoDirty: true,
	},
	email: {
		required,
		minLength: minLength(3),
		email,
		$autoDirty: true,
	},
	country: {
		required,
		minLength: minLength(3),
		$autoDirty: true,
	},
}))

const v$ = useVuelidate(rules, state)

const emit = defineEmits(['submit', 'change', 'delete', 'isValidForm', 'keyUp'])

const handleFormChange = async () => {
	const result = await v$.value.$validate()
	emit('isValidForm', result)
	emit('change', state)
}
const handleKeyUp = () => {
	emit('keyUp', state)
}
</script>

<template>
	<div class="contact-form">
		<form id="form" @change="handleFormChange" @keyup="handleKeyUp" @submit.prevent="onSubmit">
			<BaseInput
				v-model="state.name"
				type="text"
				@blur="v$.name.$touch"
				:class="{ invalid: v$.name.$error }"
			>
				<template #label> Name </template>
				<template #error>
					<p v-for="error of v$.name.$errors" :key="error.$uid">
						<strong> {{ error.$message }} </strong>
					</p>
				</template>
			</BaseInput>
			<BaseInput
				v-model="state.lastName"
				type="text"
				@blur="v$.lastName.$touch"
				:class="{ invalid: v$.lastName.$error }"
			>
				<template #label> Lastname </template>
				<template #error>
					<p v-for="error of v$.lastName.$errors" :key="error.$uid">
						<strong> {{ error.$message }} </strong>
					</p>
				</template>
			</BaseInput>
			<BaseInput
				v-model="state.email"
				type="text"
				@blur="v$.email.$touch"
				:class="{ invalid: v$.email.$error }"
			>
				<template #label> Email </template>
				<template #error>
					<p v-for="error of v$.email.$errors" :key="error.$uid">
						<strong> {{ error.$message }} </strong>
					</p>
				</template>
			</BaseInput>
			<BaseDropDown
				v-model="state.country"
				:options="names"
				:class="{ invalid: v$.country.$error }"
				@blur="v$.country.$touch"
			>
				<template #label> Country </template>
				<template #error>
					<p v-for="error of v$.country.$errors" :key="error.$uid">
						<strong> {{ error.$message }} </strong>
					</p>
				</template>
			</BaseDropDown>
		</form>
	</div>
</template>

<style>
.contact-form {
	max-width: 400px;
	padding: 2em;
	background-color: var(--background-color-component);
	border-radius: 0.5em;
	font-family: var(--font-main);
}
.invalid input {
	border: 2px solid var(--base-color-red);
}
</style>
