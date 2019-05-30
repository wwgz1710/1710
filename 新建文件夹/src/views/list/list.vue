<template>
	<div>
		<titles title="列表"></titles>
		<list1></list1>
		<list></list>
	</div>
</template>

<script>
  import list  from '@/components/list/list'
  import list1  from '@/components/search/list1'
  import titles  from '@/components/title/title'
	export default {
		components: {
			list,
			list1,
			titles
		}
	}
</script>

<style lang="less" scoped>

</style>