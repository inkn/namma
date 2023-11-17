<script setup lang="ts">
import paper from "paper";
import history from "@/utils/history.js";
import { LayerAction } from "@/utils/actions.js";
import { createLayer } from "@/utils/shared.js";
import hotkeys from "hotkeys-js";
import { ref } from "vue";
import { onMounted } from "vue";
import { nextTick } from "vue";
import draggable from 'vuedraggable'
import LayerItem from "./LayerItem.vue";


const layerInfo = ref<any>({ updateTimer: 1, list: [] })

window.layerInfo = layerInfo;

onMounted(() => {
   nextTick(() => {
      upDateLayers()
   })

   window.eventBus.on("updateLayers", () => {
      console.log("updateLayers")
      upDateLayers()
   })

})

const curActiveLayerId = ref(0)


const upDateLayers = () => {
   layerInfo.value.list.length = 0;
   paper.project?.layers.forEach((layer: any) => {
      if (layer.name) {
         layerInfo.value.list.push(layer);
      } else {
         layer.remove();
      }

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

const onLayerIndexChange = () => {
   layerInfo.value.list.forEach((l: any) => {
      l.bringToFront();
   })
}

defineExpose({
   newLayer,
   activate,
   toggleVisible,
   edit,
   remove
});
</script>

<template>
   <div class="layers" :key="layerInfo.updateTimer">
      <draggable v-model="layerInfo.list" item-key="id" @change="onLayerIndexChange()">
         <template #item="{ element: item }">
               <div class="layer" :class="{ active: curActiveLayerId === item.id }" @click="activate(item)">
                  <LayerItem :layer="item" :toggleVisible="toggleVisible" :edit="edit" :remove="remove" />
               </div>
         </template>
      </draggable>
   </div>
</template>

<style scoped>
.layers {
   width: 100%;
   height: calc(430px - 80px);
   overflow-y: auto;
}


.layer {
   display: flex;
   align-items: center;
   height: 72px;
   margin-top: 16px;
   cursor: pointer;
   padding-right: 20px;
}

.layer:first-child {
   margin-top: 0;
}
.layer.active {
   FONT-VARIANT: JIS04;
   color: rgb(0, 0, 0);
   flex-shrink: 0;
   border-radius: 8px 8px 0px 0px;
   background: #F8F8F8;
}
</style>
