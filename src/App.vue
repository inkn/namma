<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const useName = '阿拉雷'
</script>

<template>
  <a-affix :offsetTop="0">
  <header>
      <div class="header container">
        <div class="logo" >
          <router-link to="/">
            <img src="./assets/img/logo.png" alt="" height="20" />
          </router-link>
        </div>
        <div class="options">
          <div class="option"><router-link to="/">创作广场</router-link></div>
          <div class="option"><router-link to="/create">开始创作</router-link></div>
          <div class="btn"><icon-sun-fill /></div>
          <div class="btn"><icon-fire /></div>
          <div class="info">
            <a-avatar :size="30">
              <img alt="avatar" src="./assets/img/avatar.png" />
            </a-avatar>
            <div class="text">{{ useName }}</div>
          </div>
        </div>
      </div>
    </header>
  </a-affix>
  <div style="margin-top: 64px;">
    <RouterView  />
  </div>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  padding: 0 100px;
  box-shadow: var(--container-shadow);
  z-index: 2;
  background-color: var(--color-bg-panel);
}

.logo {
  display: flex;
  align-items: center;
  height: 100%;
}

header .header {
  display: flex;
  height: 100%;
  justify-content: space-between;

}

.container {
  max-width: var(--layout-max-width);
  margin: 0 auto;
}

.options {
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 18px;
  color: #8390a2;

  .option {
    margin-right: 20px;
    cursor: pointer;
  }

  .btn {
    margin-right: 12px;
    font-size: 20px;
    cursor: pointer;
  }

  .info {
    display: flex;
    align-items: center;
    padding: 0 12px;
    height: 40px;
    color: #000;
    font-size: 16px;
    border: 1px solid #e1e4e8;
    border-radius: 40px;

    .text {
      margin: 0 8px;
    }
  }
}
</style>

