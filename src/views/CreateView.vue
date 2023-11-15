<template>
  <div class="create">
  <div class="create-header">
    <div class="log">
      <a-avatar :size="64" shape="square" class="avatar"></a-avatar>
      <div class="info">
        <div class="name">ERC 721</div>
        <div class="title-tag-container">
          <div class="title">未命名内容</div>
          <div class="tag">草稿</div>
        </div>
      </div>
    </div>
      <div class="progress">
        <a-steps changeable :current="currentStep" @change="setCurrentStep">
          <a-step v-for="item in STEPS">{{ item }}</a-step>
        </a-steps>
        <a-button type="primary" @click="setCurrentStep(currentStep + 1)">下一步</a-button>
      </div>
    </div>
    <div class="create-content">
      <component :is="curStepComponent" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'; 
import Step1 from '@/components/Step1.vue';
import Step2 from '@/components/Step2.vue';
import Step3 from '@/components/Step3.vue';
import Step4 from '@/components/Step4.vue';
import Step5 from '@/components/Step5.vue';
import { computed } from 'vue';



const STEPS = ['创作视觉元素特征', 'AIGC生成特征图像', '特征图像组合预览', '系列化图像生成', '系列化图像导出']

const currentStep = ref(1);


const curStepComponent = computed(() => {
  switch (currentStep.value) {
    case 1:
      return Step1
    case 2:
      return Step2
    case 3:
      return Step3
    case 4:
      return Step4
    case 5:
      return Step5
    default:
      return Step1
  }
})

const setCurrentStep = (step: number) => {
  if (step > STEPS.length) {
    return
  }
  currentStep.value = step
}
</script>

<style scoped>
.create-header {
  height: 200px;
  background-color: #fff;
}
</style>

<style scoped>
.log {
  display: flex;
  align-items: center;
  padding-top: 64px; /* 添加这一行 */
  /* 其余样式保持不变 */
  margin-left: 120px;
}

.avatar {
  /* 头像的样式 */
}

.info {
  display: flex;
  flex-direction: column;
  margin-left: 16px; /* 头像右侧16px */
}

.title-tag-container {
  display: flex;
  align-items: center;
}

.title {
  color: #000;
  font-family: 'PingFang SC', sans-serif; /* 确保 PingFang SC 可用或提供回退字体 */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; 
  /* 其他可能的样式 */
  /* 'name' 的样式 *//* 'title' 的现有样式 */
  margin-right: 8px; /* 在 'title' 和 'tag' 之间添加8px的间距 */
}

.tag {
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #F3F4F6;
  color: rgba(0, 0, 0, 0.80);
  font-family: 'PingFang SC', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 基于字体大小的150%，约为18px */
  display: flex;
  align-items: center;
  justify-content: center; /* 水平和垂直居中文本 *//* 'tag' 的样式 */
}

.name {
  color: #000;
  font-family: 'PingFang SC', sans-serif; /* 确保 PingFang SC 可用或提供回退字体 */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 基于字体大小的150%，即21px */
  opacity: 0.4;
  /* 其他可能的样式 */
}
.progress {
  display: flex;
  justify-content: space-between; /* 使子元素分布在两端 */
  align-items: center;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 32px;
  /* 保留其他现有样式 */
}
.arco-btn {
  /* 您提供的样式 */
}

.arco-btn-size-medium {
  height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: var(--border-radius-small);
}

.arco-btn-primary {
  color: #fff;
    background-color: rgb(var(--primary-6));
    border: 1px solid transparent;
}
</style>

<style>
.arco-steps-item {
    position: relative;
    flex: 1;
    margin-right: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;
    color: #000;
    font-family: 'PingFang SC', sans-serif; /* 确保PingFang SC可用或提供备用字体 */
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 基于字体大小的150%，约30px */
    opacity: 0.8;
}
</style>

<style>
.arco-steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arco-steps-item {
  position: relative;
  display: flex;
  align-items: center; /* 改为水平对齐 */
  color: #64748B;
  font-family: 'PingFang SC', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  opacity: 0.6;
  max-width: 200px; /* 限制最大宽度并根据需要调整 */
  
}


/* 插入SVG箭头图像 */
.arco-steps-item:not(:last-child)::after {
  content: ''; /* 清空原有的content值 */
  background: url('http://www.w3.org/2000/svg') no-repeat center center; /* 使用背景图像方式 */
  position: absolute;
  top: 50%;
  right: -46px; /* 适当调整位置 */
  transform: translateY(-50%);
  width: 32px; /* SVG图像的宽度 */
  height: 32px; /* SVG图像的高度 */
}

.arco-steps-item.active {
  color: #000;
  font-weight: 600;
}

/* 适当调整每个步骤项的间距 */
.arco-steps-item:not(:last-child) {
  margin-right: 16px; /* 步骤项之间的间距 */
}

/* 第一个步骤项的样式调整 */
.arco-steps-item:first-child {
  margin-left: 16px; /* 第一个步骤项左侧的间距 */
}

/* 最后一个步骤项的样式调整 */
.arco-steps-item:last-child {
  margin-right: 16px; /* 最后一个步骤项右侧的间距 */
}
</style>