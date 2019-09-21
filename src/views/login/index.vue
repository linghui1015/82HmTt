<template>
  <div class="login">
    <van-nav-bar title="登录" />
    <van-cell-group>
      <van-field v-model="user.mobile" required clearable label="手机号" placeholder="请输入手机号" />
      <van-field v-model="user.code" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <div class="login-btn">
      <van-button type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
// import request from '@/utils/request'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },

  methods: {
    async onLogin () {
      // 获取表单数据
      // 发送请求
      try {
        const { data } = await login(this.user)
        console.log(data)
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response && err.response.status === 400) {
          this.$toast.fail('登录失败，手机号或验证码错误')
        }
      }
      // 根据结果进行后续处理
    }
  }
}
</script>
<style lang="less" scoped>
.login {
 .login-btn {
    padding: 20px;
    .van-button {
      width: 100%;
    }
  }
}
</style>
