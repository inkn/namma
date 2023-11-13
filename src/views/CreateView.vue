<template>
  <div class="create">
    <div class="create-header">
      <div class="log">
        <a-avatar :size="64" shape="square"></a-avatar>
        <div class="title">ERC-721</div>
        <div class="name">未命名</div>
        <div class="tag"></div>
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



const STEPS = ['创作视觉元素', '特征AIGC生成特征图像', '特征图像组合预览', '系列化图像生成', '系列化图像导出']

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
