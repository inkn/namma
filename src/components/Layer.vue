<script setup lang="ts">
import paper from "paper";
import history from "@/utils/history.js";
import { LayerAction } from "@/utils/actions.js";
import { createLayer } from "@/utils/shared.js";
import hotkeys from "hotkeys-js";
import { ref } from "vue";
import { onMounted } from "vue";
import { nextTick } from "vue";



const layerInfo = ref<any>({ updateTimer: 1, list: [] })

onMounted(() => {
   nextTick(() => {
      upDateLayers()
   })
})

const curActiveLayerId = ref(0)


const upDateLayers = () => {
   layerInfo.value.list.length = 0;
   paper.project?.layers.forEach((layer: any) => {
      layerInfo.value.list.push(layer);
   });
   layerInfo.value.updateTimer++
   console.log(layerInfo.value)
   console.log(paper.project)
   curActiveLayerId.value = paper.project?.activeLayer.id
};

const newLayer = () => {
   const layer = createLayer();
   history.add(
      new LayerAction({
         project: paper.project,
         type: "add",
         layer
      })
   );
   layer.activate();
   upDateLayers();

};

const activate = (layer: any) => {
   layer.activate();
   upDateLayers();
};

const toggleVisible = (layer: any) => {
   layer.visible = !layer.visible;
   upDateLayers();
};
const edit = (layer: any) => {
   layer.isEdit = !layer.isEdit;
   upDateLayers();
};

const remove = (layer: any) => {
   layer.remove();
   history.add(
      new LayerAction({
         project: paper.project,
         type: "remove",
         layer
      })
   );
   upDateLayers();
};

</script>

<template>
   <a-button @click="newLayer()">新建</a-button>
   <div class="layers">
      <div class="layer" :class="{ active: curActiveLayerId === item.id }" v-for="item in layerInfo.list" :key="item.id"
         @click="activate(item)">

         <div class="v-layer-item-bg">
            <svg ref="view" xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20"
               viewBox="0 0 1920 1080"></svg>
         </div>
         <div class="name"><span v-if="!item.isEdit">{{ item.name }}</span>
            <a-input v-else v-model="item.name" @blur="item.isEdit = false" />
         </div>
         <icon-eye-invisible class="my-icon" v-if="!item.visible" @click.stop="toggleVisible(item)" />
         <icon-eye class="my-icon" v-else @click.stop="toggleVisible(item)" />
         <icon-eye class="my-icon" v-else @click.stop="toggleVisible(item)" />
         <icon-edit class="my-icon" @click="edit(item)" />
         <icon-delete class="my-icon" @click="remove(item)" />
      </div>
   </div>
</template>

<style scoped>
.my-icon {
   font-size: 20px;
   margin-left: 10px;
   cursor: pointer;
   display: inline-block;
    width: 1em;
    height: 1em;
    color: rgb(78, 89, 105);
    font-style: normal;
    vertical-align: -2px;
    outline: none;
    stroke: currentColor;
}

.layer {
   display: flex;
    align-items: center;
    /* height: 30px; */
    margin-top: 16px;

}

.name {
   width: 310px;
}

.active {
   FONT-VARIANT: JIS04;
    color: rgb(0, 0, 0);
    /* border: 1px solid rgb(0, 0, 0); */
    width: 435px;
    height: 72px;
    flex-shrink: 0;
    border-radius: 8px 8px 0px 0px;
    background: #F8F8F8;
}
</style>
