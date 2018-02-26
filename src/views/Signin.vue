<template>
  <div class="counter" @click.self="toIndex">
    <el-form label-position="left" label-width="80px" :model="form" class="shadow">
      <el-form-item label="用户名">
        <el-input v-model="form.username" required></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password1"></el-input>
      </el-form-item>
      <el-form-item label="重复密码">
        <el-input type="password" v-model="form.password2"></el-input>
      </el-form-item>
      <el-button type="primary" @click="signin">注 册</el-button>
      <div><router-link to="/login">已有帐号？立即登录>>></router-link></div>
    </el-form>
  </div>
</template>

<script scoped>
export default {
  data() {
      return {
        form: {
          username: '',
          password1: '',
          password2: '',
          email: ''
        }
      };
    },
  methods: {
    signin() {
      this.$axios.post("http://127.0.0.1:5000/api/1_0/register", {
        user_name: this.form.username,
        user_password: this.form.password1,
        user_email: this.form.email
      })
      .then(response => {
        if (response.status === 200) {
          this.$message({
            message: '注册成功！请登录',
            type: 'success'
          });
          setTimeout(()=>{this.$router.push({path:"/login"})}, 2000)
        }
      })
      .catch(()=> {
          this.$message.error('注册失败，请重试');
        });
    },
  toIndex() {
    this.$router.push({path:"/"})
  }
  }
}
</script>

<style scoped>
  .counter {
    height: 100%;
    background: url(../assets/background.jpg) no-repeat center top #0F2E64;
    background-size: cover; 
  }
  .counter:before {
    content:'';
    display: table;
  }
  form {
    width:350px;
    margin: 200px auto;
    padding: 50px 50px 20px 50px;
    background-color: rgba(87, 22, 22, 0.479);
  }
  button {
    width: 100%;
  }
  #switch {
    text-align: left;
  }
  button {
    margin-bottom: 20px;
  }
</style>

<style>
  .el-form-item__label {
    color: white;
  }
  .el-input__inner {
    background-color: rgba(87, 22, 22, 0.479);
    color: white;
  }
</style>