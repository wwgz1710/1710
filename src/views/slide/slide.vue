<template>
	<div id="tab">
		<div class="left">
			<el-row class="tac">
				<el-col :span="12">
					<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>导航一</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="1-1" v-for='item,index in navs' :key='index'>
									<router-link :to="item.to">{{item.name}}</router-link>
								</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title">
								<i class="el-icon-menu"></i>
								<span>导航二</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="2-1" v-for='item,index in navs' :key='index'>
									<router-link :to="item.to">{{item.name}}</router-link>
								</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-menu-item index="3">
							<i class="el-icon-document"></i>
							<span slot="title">导航三</span>
						</el-menu-item>
						<el-submenu index="4">
							<template slot="title">
								<i class="el-icon-s-data"></i>
								<span>Charts</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="4-1" v-for='item,index in navs' :key='index'>
									<router-link :to="item.to">{{item.name}}</router-link>
								</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-col>
			</el-row>
		</div>
		<div class="right">
			<router-view/>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'tab',
		data(){
			return{
				navs:[
					{
						name: 'Form',
						to: 'form'
					},{
						name: 'Table',
						to: 'table'
					},{
						name: '列表',
						to: 'list'
					}
				]
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>
<style lang="stylus">
	#tab
		display: flex
		.left 
			width: 230px
			height: 550px
			.tac
				width: 100%
				height: 100%
				background: #eef1f6
				.el-col
					width: 100%
					height: 100%
					.el-menu-vertical-demo
						background: #eef1f6
						.el-submenu
							.el-menu--inline
								background: #e4e8f1
								li
									.el-menu-item-group__title
										line-height: 35px
										padding: 0 0 0 20px
		.right
			// flex: 1
			padding-left: 20px
			box-sizing: border-box
</style>
