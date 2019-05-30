<template>
		<el-col >
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item >
				<el-input  size="small" v-model="formInline.user" placeholder="姓名"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" size="small" @click="onSubmit">查询</el-button>
				<slot name='slot3'></slot>
			</el-form-item>
			</el-form>
		</el-col>
</template>
<script>
	export default {
		name:'list1',
		data() {
			return {
				formInline: {
				user: '',
				region: ''
				}
			}
		},
        methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}
</script>

<style lang="less" scoped>
    form {
        background:rgba(243,243,243);
        display:flex;
		align-items: center;
        .el-form-item{
            margin:0;
            padding:5px 10px;
        }
    }
</style>