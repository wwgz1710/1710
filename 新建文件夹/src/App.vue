<template>
  <div id="app">
		<cnpheader></cnpheader>
    <router-view/>
  </div>
</template>
<script>
	import cnpheader from '@/components/header/header'
	export default {
		name: 'App',
		components:{
			cnpheader
		}
	}
</script>
<style lang="stylus">
	#app 
		font-family: 'Avenir', Helvetica, Arial, sans-serif
		color: #2c3e50
	
</style>
