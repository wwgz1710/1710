<template>
	<div class="list">
		<el-row >
		      <el-col :span="24">
		          <div class="grid-content bg-purple">
		          <el-table
		              ref="multipleTable"
		              :data="tableData"
		              tooltip-effect="dark"
		              @selection-change="handleSelectionChange"
		              style="width: 100%">
		              <slot name='slot1'>2</slot> 
		              <el-table-column
		                  type="index">
		              </el-table-column>
		              <el-table-column
		                  prop="name"
		                  label="姓名"
		                  sortable
		                  width="80">
		              </el-table-column>
		              <el-table-column
		                  prop="gender"
		                  label="性别"
		                  sortable
		                  width="80">
		              </el-table-column>
		              <el-table-column
		                  prop="date"
		                  label="年龄"
		                  sortable
		                  width="100">
		              </el-table-column>
		              <el-table-column
		                  prop="date"
		                  label="生日"
		                  sortable
		                  width="100">
		              </el-table-column>
		              <el-table-column
		                  prop="address"
		                  sortable
		                  label="地址"  
		                  width="400">
		              </el-table-column>
		              <slot name='slot2'></slot>
		          </el-table>
		      </div>
		  </el-col>
		</el-row>
	</div> 
</template>

<script>

	export default {
		name: 'list',
		data () {
			return {
				tableData: [{
					date: '1998-06-07',
					name: '王龙飞',
					province: '河南',
					gender:'男',
					age:'21',
					city: '洛阳',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
					tag: '家'
				}, {
					date: '1997-03-07',
					name: '王鹏飞',
					province: '河北',
					gender:'男',
					age:'22',
					city: '沧州',
					address: '河北沧州区金沙江路 1517 弄',
					zip: 200333,
					tag: '公司'
				}, {
					date: '1995-05-01',
					name: '郭红鹏',
					province: '上海',
					gender:'男',
					age:'22',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1519 弄',
					zip: 200333,
					tag: '家'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					gender:'男',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1516 弄',
					zip: 200333,
					tag: '公司'
				},{
					date: '2016-05-03',
					name: '王小虎',
					gender:'男',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1520 弄',
					zip: 200333,
					tag: '公司'
				},{
					date: '2016-05-03',
					name: '王小虎',
					gender:'男',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1521 弄',
					zip: 200333,
					tag: '公司'
				}],
				multipleSelection:[]
			}
		},
		methods: {
			// indexMethod(index) {
			//   return index * 2;
			// }
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'  scoped>
	.list{
		.el-row{
			.el-col-20{
				.bg-purple[data-v-eeef07e2]{
					background:red; 
					color:#000;
					.el-table{
						.el-table__header-wrapper{
							table{
								thead{
		                            padding-left:50px;
							        background:red;
								}
							}
						}
					}
				}
			   
			}
		}
		.el-table thead{
			color:red;
		}
		.el-row {
			margin-bottom: 20px;
		}
		.el-col {
			border-radius: 4px;
		}
		.bg-purple-dark {
			background: #99a9bf;
		}
		.bg-purple {
			background: #d3dce6;
		}
		.bg-purple-light {
			background: #e5e9f2;
		}
		.grid-content {
			border-radius: 4px;
			min-height: 36px;
		}
		.row-bg {
			padding: 10px 0;
			background-color: #f9fafc;
		}
		h4{
			padding: 24px 20px;
		}
		.search{
			padding-left: 10px;
		}
	}
</style>
