<script setup lang="ts">
import { ref } from 'vue';
import initCanvas from "@/utils/setup.js";
import { onMounted } from 'vue';
import { useCanvasStore } from '@/stores/canvas';
import { Chrome } from '@ckpack/vue-color';
import Layer from '@/components/Layer.vue';
import { watch } from 'vue';

const canvas = ref<HTMLCanvasElement>()
const store = useCanvasStore()


const colors = ref('#000000');
const size = ref(12)
const noShake = ref(true)
const layer = ref<any>(null)

watch(colors, (val) => {
  store.setArgs({ toolName: 'pencil', color: colors.value.hex })
})

onMounted(() => {
  window.app.canvas = canvas.value
  window.app.canvasStore = store
  window.app.vdrawArgs = {
    size: {
      width: 0,
      height: 0
    },
    zoom: 0
  },
    initCanvas(window.app)
  store.setTool('pencil')
})

const onSizeChange = () => {
  store.setArgs({ toolName: 'pencil', size: size.value })
}

const onShakeChange = () => {
  store.setArgs({ toolName: 'pencil', shake: noShake.value })
}

</script>

<template>
  <div class="step1-container">
    <div class="step1-left">
      <a-card>
        <canvas ref="canvas" id="canvas" class="canvas" resize></canvas>
      </a-card>
    </div>
    <div class="step1-right">
      <a-card title="元素图层排序" class="layers-cantainer">
        <template #extra>
          <a-button @click="layer.newLayer()">新建</a-button>
        </template>
        <Layer ref="layer" />
      </a-card>

      <a-card>
        <div class="options">
          <div class="color-picker">
            <Chrome v-model="colors" class="color-picker-chrome" @change="onColorChange" />
          </div>
          <div class="controls">
            <div class="slider">
              <span>笔刷大小</span>
              <a-slider v-model="size" :style="{ width: '100px' }" @change="onSizeChange" />
            </div>
            <!-- 将其他控件如透明度滑轨和颜色输入放在这里 -->
            <!-- <div class="shake">
              抖动修复<a-switch v-model="noShake" type="line" @change="onShakeChange"/>
            </div> -->

          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<style scoped>
.step1-container {
  display: flex;
  height: 600px;
  width: 1200px;
  margin: 20px auto 0;
}

.canvas {
  height: 700px;
  width: 700px;
  display: block;
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  background-image:
    linear-gradient(45deg, #eee 25%, transparent 0, transparent 75%, #eee 0, #eee),
    linear-gradient(45deg, #eee 25%, #fff 0, #fff 75%, #eee 0, #eee);
}

.step1-left {
  margin-right: 20px;
}

.step1-right {
  width: 600px;
  height: 100%;

  .layers-cantainer {
    height: 430px;
    width: 100% ;
    overflow: auto;
    margin-bottom: 20px;
  }

  .options {
    display: flex;
    /* 确保控件垂直对齐 */
    align-items: center;
  }

  .color-picker {
    /* 根据需要调整颜色选择器的宽度 */
    flex: 1;
    margin-right: 16px;
    /* 与其他控件之间的间距 */
  }

  .controls {
    /* 控制笔刷大小和其他控件的容器 */
    display: flex;
    flex-direction: column;
    flex: 1;
    /* 根据需要添加间距、边框等 */
  }

  .slider {
    /* 调整滑动条的样式 */
    margin-bottom: 16px;
    /* 每个控件之间的间距 */
  }
}
</style>
<style>
.step1-container {
  .arco-card-body {
    padding: 16;
    border-radius: 10px;
    overflow: hidden;
  }

  .arco-card-bordered {
    border-radius: 8px;
  }

}
</style>

<style>
.list.arco-card-size-medium .arco-card-header {
  height: 46px;
  padding: 10px 16px;
}

.list.arco-card-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
  border-bottom: 1px solid var(--color-neutral-3);
}
</style>

<style>
.arco-card-size-medium .arco-card-body {
  padding: 16px 16px;
}
</style>

<style>
.arco-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  width: 40px height：40px;
  color: var(--color-white);
  font-size: 20px;
  white-space: nowrap;
  vertical-align: middle;
  background-color: var(--color-fill-4);
}
</style>

