<script setup lang="ts">
import { onMounted, toRefs } from "vue";
import { ref } from "vue";


const viewRef = ref<any>(null)
const inputRef = ref<any>(null)


const props = defineProps({
    layer: {
        type: Object,
        default: () => ({})
    },
    toggleVisible: {
        type: Function,
        default: () => { }
    },
    edit: {
        type: Function,
        default: () => { }
    },
    remove: {
        type: Function,
        default: () => { }
    }
})

const { layer } = toRefs(props)

const updateSvg = () => {
    if (!layer.value || !viewRef.value) {
        return
    }
    const svg = layer.value.exportSVG()
    if (layer.value.visible) {
        viewRef.value.innerHTML = ""
        viewRef.value.appendChild(svg)
        layer.value.lastSvg = svg
        return
    }

    if (layer.value?.lastSvg) {
        viewRef.value.innerHTML = ""
        viewRef.value?.appendChild(layer.value?.lastSvg)
    }

}

onMounted(() => {
    updateSvg()

    setTimeout(() => {
        if (layer.value?.isEdit) {
            inputRef.value?.focus()
        }
    }, 100)
})


// window.eventBus.on("updateLayers", () => {
//     nextTick(() => {
//         if ( !layer.value) {
//             return
//         }
//         innerSvg.value = layer.value.exportSVG()
//     })

// })


</script>

<template>
    <div class="v-layer-item-bg">
        <svg ref="viewRef" xmlns="http://www.w3.org/2000/svg" version="1.1" width="72" height="72"
            viewBox="0 0 720 720"></svg>
    </div>
    <div class="name"><span v-if="!layer.isEdit">{{ layer.name }}</span>
        <a-input ref="inputRef" v-else v-model="layer.name" @blur="layer.isEdit = false"  />
    </div>
    <icon-eye-invisible class="my-icon" v-if="!layer.visible" @click.stop="toggleVisible(layer)" />
    <icon-eye class="my-icon" v-else @click.stop="toggleVisible(layer)" />
    <icon-eye class="my-icon" v-else @click.stop="toggleVisible(layer)" />
    <icon-edit class="my-icon" @click="edit(layer)" />
    <icon-delete class="my-icon" @click="remove(layer)" />
</template>
<style scoped>
.v-layer-item-bg {
    width: 72px;
    height: 72px;
    background-size: 10px 10px;
    background-position: 0 0, 5px 5px;
    background-image: linear-gradient(45deg,
            var(--square-color) 25%,
            #0000 25%,
            #0000 75%,
            var(--square-color) 75%,
            var(--square-color)),
        linear-gradient(45deg,
            var(--square-color) 25%,
            #0000 25%,
            #0000 75%,
            var(--square-color) 75%,
            var(--square-color));
    border-radius: 2px;
}

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

.name {
    width: 300px;
    margin-left: 10px;
}
</style>
