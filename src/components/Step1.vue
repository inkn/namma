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
      <a-card title="元素图层" class="layers">
        <Layer />
      </a-card>

      <a-card>
        <div class="options">
          <Chrome v-model="colors" @change="onColorChange" />
          <div class="slider">
            <div class="text-size">
              <span>笔刷大小</span> 
              <a-slider v-model="size" :style="{ width: '100px' }"  @change="onSizeChange"/>
            </div>
            <div class="shake">
              抖动修复<a-switch v-model="noShake" type="line" @change="onShakeChange"/>
            </div>
            
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
  height: 600px;
  width: 600px;
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

  .layers {
    height: 336px;
    overflow: auto;
    margin-bottom: 20px;
  }

  .options {
    display: flex;
    width: 100%;
    align-items: flex-start;
  }
}
</style>
<style>
.step1-container {
  .arco-card-body {
    padding: 0;
    border-radius: 10px;
    overflow: hidden;
  }

  .arco-card-bordered {
    border-radius: 10px;
  }
}
</style>
