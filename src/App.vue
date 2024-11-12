<script setup lang="ts">
import { RouterView } from 'vue-router'
import './assets/base.css'

// import HelloWorld from './components/HelloWorld.vue'
import HeaderLayout from './layout/HeaderLayout.vue'
</script>

<template>
	<!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Hello World" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
	<div id="app-wrapper">
		<HeaderLayout />
		<!-- <TransitionGroup name="list" tag="ul">
			<RouterView />
		</TransitionGroup> -->
		<transition name="views">
			<RouterView />
		</transition>
	</div>
</template>

<style>
.views-move, /* apply transition to moving elements */
.views-enter-active,
.views-leave-active {
	transition: all 0.5s ease;
}

.views-enter-from,
.views-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.views-leave-active {
	position: fixed;
}
</style>
