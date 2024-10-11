<template>
  <header class="flex items-center w-full">
    <div class="w-2/5 h-full">
      <a-carousel autoplay>
        <img src="@/assets/images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png" alt="" />
        <img src="@/assets/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" alt="" />
        <img src="@/assets/images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png" alt="" />
      </a-carousel>
    </div>
    <div class="w-3/5 flex-1 flex-col justify-center items-center flex h-[400px] bg-white shadow-md rounded-lg p-6">
      <nav class="flex-1 flex-col justify-center items-center flex space-y-6">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">登入，即刻创造你的应用</h1>

        <a-space direction="vertical" class="w-full space-y-4">
          <a-input size="large" v-model:value="username" placeholder="邮箱" class="rounded-md" />
          <a-input size="large" v-model:value.lazy="password" type="password" placeholder="密码" class="rounded-md" />
        </a-space>

        <div class="flex items-center space-x-2 mt-4">
          <a-radio v-model:checked="agree">
            <span class="text-sm text-gray-600">我已阅读并同意</span>
          </a-radio>
          <a-button type="link" class="text-blue-600">《服务协议》</a-button>
          <span class="text-gray-600">和</span>
          <a-button type="link" class="text-blue-600">《隐私政策》</a-button>
        </div>

        <a-button @click="login" class="w-full h-[45px] mt-6 rounded-md bg-blue-600 text-white hover:bg-blue-700" type="primary">
          登入
        </a-button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { postLogin } from "@/api/index";
 

const username = ref('189218005@qq.com');
const password = ref('5ifmhu8693');
const agree = ref(false);
const loading = ref(false);
const router = useRouter();

const login = async () => {
  if (!username.value || !password.value) {
    alert("请填写完整的账号和密码");
    return;
  }
  if (!agree.value) {
    alert("请同意条款");
    return;
  }

  loading.value = true; // 设置加载状态
  try {
    const token = await postLogin(username.value, password.value);
    console.log("登录成功，获取到了访问令牌！", token);
    localStorage.setItem('access_token', token);
    // 登录成功后跳转到主页（示例）
    router.push('/layout/codePr');
  } catch (error) {
    console.log("登录失败: ", error.message);
    alert(error.message);
  } finally {
    loading.value = false; // 不论成功或失败，都要恢复按钮状态
  }
};

</script>

<style scoped>
</style>