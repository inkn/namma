<script setup lang="ts">
import { ref } from 'vue';

const FormatOptions = [
   {
      label: 'PNG',
      value: 'png',
   },
   {
      label: 'JPG',
      value: 'jpg',
   },
   {
      label: 'SVG',
      value: 'svg',
   },
]

const QulityOptions = [
   {
      label: '低',
      value: 'low',
   },
   {
      label: '中',
      value: 'middle',
   },
   {
      label: '高',
      value: 'high',
   },
]

const exportFormat = ref(FormatOptions[0].value)

const exportQulity = ref(QulityOptions[0].value)

const curExportStep = ref(0)
const LAST_STEP = 2
const goNextExportStep = () => {
   if(curExportStep.value < LAST_STEP) {
      curExportStep.value += 1
   }
}
</script>

<template>
   <div class="export">
      <div class="settings">
         <template v-if="curExportStep === 0">
            <div class="setting-header">图像导出</div>
            <div class="setting-title">导出设置</div>
            <div class="setting-list">
               <div class="setting-item">
                  <div class="item-title">宽度</div>
                  <a-input>
                     <template #suffix>
                        <span>px</span>
                     </template>
                  </a-input>
               </div>
               <div class="setting-item">
                  <div class="item-title">高度</div>
                  <a-input>
                     <template #suffix>
                        <span>px</span>
                     </template>
                  </a-input>
               </div>
               <div class="setting-item">
                  <div class="item-title">导出格式</div>
                  <a-select v-model="exportFormat" placeholder="Select">
                     <a-option :value="item.value" v-for="item in FormatOptions">{{ item.label }}</a-option>
                  </a-select>
               </div>
               <div class="setting-item">
                  <div class="item-title">导出图形质量</div>
                  <a-select v-model="exportQulity" placeholder="Select">
                     <a-option :value="item.value" v-for="item in QulityOptions">{{ item.label }}</a-option>
                  </a-select>
               </div>
            </div>
            <div class="setting-title">导出特征图像</div>
            <a-button type="outline" class="download">下载特征图像</a-button>
         </template>
         <template v-if="curExportStep === 1">
            <div class="setting-header">市场展示预览</div>
         </template>
         <template v-if="curExportStep === 2">
            <div class="setting-header">确认导出</div>
            <div class="export-confirm">
               <div class="confirm-title">导出注意事项</div>
               <div class="confirm-msg">
                  1.保持此页面处于等待状态，直到导出完成
                  2.由于文件较大，请关闭所有其他程序，并确保您的设备在导出过程中不会进入睡眠状态
               </div>
            </div>
         </template>
         <div class="next-step">
            <a-button class="next-step-btn" type="primary" @click="goNextExportStep">{{ curExportStep < LAST_STEP ? '下一步' : '确认导出' }}</a-button>
         </div>
      </div>
   </div>
</template>

<style scoped>
.export {
   width: 680px;
   background-color: white;
   margin: 20px auto 0;
   border-radius: 4px;
   overflow: hidden;
   padding: 20px;
}

.setting-header {
   font-size: 24px;
   line-height: 24px;
   font-weight: bold;
   margin-bottom: 40px;
   width: 100%;
   text-align: center;
   overflow: hidden;
}

.setting-title {
   font-size: 24px;
   font-weight: bold;
   margin-bottom: 20px;
   width: 100%;
}

.setting-list {
   display: flex;
   margin-bottom: 20px;
}

.setting-item {
   margin-right: 40px;

   .item-title {
      font-size: 18px;
      color: #939393;
   }
}

.download {
   margin-bottom: 40px;
}

.next-step {
   display: flex;
   flex-direction: row-reverse;

   .next-step-btn {

   }
}

.export-confirm {
   border: 1px solid #E1E4E8;
   border-radius: 4px;
   padding: 20px;

   .confirm-title {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 20px 0 20px;
   }
}
</style>

<style>
.export {
   .arco-input-wrapper {
      width: 120px;
   }

   .arco-select-view-single {
      width: 120px;
   }
}
</style>
