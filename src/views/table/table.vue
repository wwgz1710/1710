<template>
  <div>
    <titles title='table'></titles>
    <list1><el-button  slot='slot3' type="primary" size="small" @click="onSubmit">新增</el-button></list1>
    <list>
      <el-table-column slot='slot1'
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column slot='slot2'
        prop="address"
        label="操作"  
        width="160">
        <template slot-scope="scope">
          <el-button
            size="mini" @click="dialogTableVisible = true"
            >编辑</el-button>
            
        <el-dialog title="收货地址" :visible.sync="dialogTableVisible">


          <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
           
            <el-form-item :rules="[ 
                { required: true, },
              ]" label="姓名">
              <el-input></el-input>
            </el-form-item>
            <el-form-item  label="性别">
              <el-radio v-model="radio" label="1">男</el-radio>
              <el-radio v-model="radio" label="2">女</el-radio>
            </el-form-item>
            
            <el-form-item  label="年龄">
              <el-input-number v-model="num" position="right" :min="1"  label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item  label="生日">
              <el-input
                placeholder="请选择日期"
                suffix-icon="el-icon-date"
                maxlength="10"
              >
  </el-input>
            </el-form-item>
            <el-form-item  label="地址">
              <el-input type="textarea" ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
              <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
          <el-button
            size="mini"
            type="danger"
           @click="open()">删除</el-button>
        </template>
      </el-table-column>
    </list>
  </div>
</template>

<script>
  import list  from '@/components/list/list'
  import list1  from '@/components/search/list1'
  import titles  from '@/components/title/title'
  export default {
    data() {
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        numberValidateForm: {
          age: ''
        },
        radio: '1',
        num: 1 //年龄
      };
    },
    methods: {
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    components: {
      list,
      list1,
      titles
    }
  }
</script>

<style lang="less" scoped>

</style>