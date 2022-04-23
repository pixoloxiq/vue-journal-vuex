<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
	<h1>Hola mundo</h1>
	<button @click="gotoDaybook" class="btn btn-primary">Primary</button>
	<button @click="gotoDaybook" class="btn btn-secondary">Secondary</button>
	<button @click="gotoDaybook" class="btn btn-success">Success</button>
  </div>
</template>
<script>
export default {
	methods:{
		gotoDaybook(){
			this.$router.push({name: 'no-entry'})
		}
	}
}
</script>
