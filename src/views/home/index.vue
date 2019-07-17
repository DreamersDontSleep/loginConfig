<template>
  <div class="home-container">
    <el-form ref="userInfo" :model="userInfo" :rules="rules" label-width="120px">
      <el-form-item label="用户名" prop="nick_name">
        <el-input v-model="userInfo.nick_name"/>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="userInfo.pwd"/>
      </el-form-item>
      <el-form-item label="工号" prop="job_number">
        <el-input v-model="userInfo.job_number"/>
      </el-form-item>
      <el-form-item label="姓名" prop="user_name">
        <el-input v-model="userInfo.user_name"/>
      </el-form-item>
      <el-form-item label="职务" prop="position">
        <el-input v-model="userInfo.position"/>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="userInfo.sex" clearable>
          <el-option v-for="item in sexes" :key="item.sex" :label="item.sex_name" :value="item.sex"/>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期" prop="birth_date">
        <el-input v-model="userInfo.birth_date"/>
      </el-form-item>
      <el-form-item label="录用日期" prop="hire_date">
        <el-input v-model="userInfo.hire_date"/>
      </el-form-item>
      <el-form-item label="联系方式" prop="connact">
        <el-input v-model="userInfo.connact"/>
      </el-form-item>
      <el-form-item label="身份证号" prop="identity_number">
        <el-input v-model="userInfo.identity_number"/>
      </el-form-item>
      <el-form-item label="在职状态" prop="in_service_state">
        <el-select v-model="userInfo.in_service_state" clearable>
          <el-option v-for="item in in_service_states" :key="item.in_service_state" :label="item.in_service_state_name" :value="item.in_service_state"/>
        </el-select>
      </el-form-item>
      <el-form-item label="紧急联系人电话" prop="emergency_contact">
        <el-input v-model="userInfo.emergency_contact"/>
      </el-form-item>
      <el-form-item label="角色" prop="role_id">
        <el-select v-model="userInfo.role_id" clearable>
          <el-option v-for="item in roles" :key="item.role_id" :label="item.role_name" :value="item.role_id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="增补限额" prop="supplementary_limit">
        <el-input v-model="userInfo.supplementary_limit"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userInfo')">提交</el-button>
        <el-button @click="resetForm('userInfo')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      sexes: [
        { sex: 'man', sex_name: '男' },
        { sex: 'woman', sex_name: '女' }
      ],
      in_service_states: [
        { in_service_state: 1, in_service_state_name: '在职' },
        { in_service_state: 0, in_service_state_name: '离职' }
      ],
      roles: [
        { role_id: 1, role_name: '管理员' },
        { role_id: 2, role_name: '开发' },
        { role_id: 3, role_name: '测试' },
        { role_id: 4, role_name: '运维' }
      ],
      rules: {
        nick_name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        job_number: [
          { required: true, message: '请输入工号', trigger: 'blur' }
        ],
        user_name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        position: [
          { required: true, message: '请输入职务', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请输入性别', trigger: 'blur' }
        ],
        connact: [
          { required: true, message: '请输入联系方式', trigger: 'blur' }
        ],
        in_service_state: [
          { required: true, message: '请输入在职状态', trigger: 'blur' }
        ],
        role_id: [
          { required: true, message: '请输入角色', trigger: 'blur' }
        ],
        supplementary_limit: [
          { required: true, message: '请输入增补限额', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
  }
}
</style>
