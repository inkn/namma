<template>
    <div class="EditableTextBox">
      <input type="text" v-model="inputV" :readonly="!editing" />
      <template v-if="!editing">
        <icon-edit class="Edit" @click="startEditing" />
      </template>
      <div class="EditControl">
        <a-button type="primary" class="SaveCancelBtn" @click="saveChanges">保存</a-button>
        <a-button type="primary" class="SaveCancelBtn" @click="cancelEditing">取消</a-button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive, toRefs } from 'vue';
  
  const state = reactive({
    inputV: "",
    originalValue: "",
    editing: false,
  });
  
  function startEditing() {
    state.editing = true;
    state.originalValue = state.inputV;
  }
  
  function saveChanges() {
    state.editing = false;
    state.originalValue = state.inputV;
    // 在这里可以处理保存操作，比如提交给后端或者其他逻辑
  }
  
  function cancelEditing() {
    state.editing = false;
    state.inputV = state.originalValue;
  }
  
  const { inputV, originalValue, editing } = toRefs(state);
  </script>
  
<style scoped>
.Edit {
    width: 25px;
    height: 25px;
    margin-top: 7.5px;
    margin-left: 5px;
}

.EditableTextBox {
    display: flex;
    width: 100%;
}

.EditControl {
    width: 100%;
    float: right;
}

input[type="text"] {
    width: 200px;
    border: 0;
    height: 35px;

    &:read-only {
        padding: 3px;
        pointer-events: none;
    }

    /* pointer-events: none; */
}

a-button {
    margin-left: 10px;

}

.SaveCancelBtn {
    float: right;
    margin-right: 10px;
    margin-top: 3px;
    background-color: rgb(101, 109, 232);
}

.SaveCancelBtn:hover {
    background-color: rgb(146, 152, 227);
}</style>
  