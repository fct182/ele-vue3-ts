<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-row class="mb-4" justify="center">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <el-row justify="center">
      <!-- 默认的不行 -->
      <!-- <el-icon><Female /></el-icon> -->

      <!-- 配置为 prefix: "icon" 时 -->
      <!-- <el-icon><icon-ep-MessageBox /></el-icon>
        <el-icon><icon-ep-female /></el-icon>
        <el-icon><icon-ep-add-location /></el-icon> -->
      <!-- prefix: "fct" -->
      <!-- <el-icon><FctEpApple /></el-icon> -->

      <!-- prefix走默认配置时  -->
      <!-- <el-icon><i-ep-add-location /></el-icon> -->

      <!-- 禁用prefix配置时, prefix: false  -->
      <el-icon><ep-MessageBox /></el-icon>
      <el-icon><EpSuccessFilled /></el-icon>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
</script>
