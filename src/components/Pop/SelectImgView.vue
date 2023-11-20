<template>
    <div class="modal" v-if="show" @click="closeModal($event,'' )">
      <div class="modal-content" @click.stop >
        <slot></slot>
        <div class="SelectTitle">选择图像绘画风格</div>
        <img class="SelectItem" @click="closeModal($event,'../../../public/img/unnamed (4).png' )" src="../../../public/img/unnamed (4).png" />
        <img class="SelectItem" @click="closeModal($event,'../../../public/img/unnamed (4).png')" src="../../../public/img/unnamed (4).png" />
        <img class="SelectItem" @click="closeModal($event,'../../../public/img/unnamed (4).png')" src="../../../public/img/unnamed (4).png" />
        <img class="SelectItem" @click="closeModal($event,'../../../public/img/unnamed (4).png')" src="../../../public/img/unnamed (4).png" />
        <img class="SelectItem" @click="closeModal($event,'../../../public/img/unnamed (4).png')" src="../../../public/img/unnamed (4).png" />
        <img class="SelectItem" @click="closeModal($event,'../../../public/img/unnamed (4).png' )" src="../../../public/img/unnamed (4).png" />
      </div>
    </div>
    <a-button class="SelectImgBtn" @click="openModal">选择图片</a-button>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits,ref } from 'vue'
  const show = ref(false);
  const props=defineProps<{
    imageLoacl:string
  }>();
  const emit = defineEmits(['update:imageLoacl']);
  const openModal = () => {
    show.value = true;
  };
  
  const closeModal = (event:MouseEvent,path:string) => {
    if ((event.target as HTMLElement).classList.contains('modal-content')) {
    return;
  }
  if ((event.target as HTMLElement).classList.contains('SelectItem')) {
    const anchor = document.createElement('a');
      anchor.href = path;
    emit('update:imageLoacl', anchor.href);
  }
    show.value = false;
  };
  </script>
  
  <style scoped>
  .SelectTitle{
    width:100%;
    padding:10px;
    border-bottom:lightgray solid 1px
  }
  .SelectItem{
    margin-top:10px;
    margin-left:20px;
    width:100px;
    height:100px;
    transition: transform 0.2s ease; 
    &:hover{
        transform: translate(5px, 5px); 
    }
  }
  .modal {
    position: fixed;
    top: 10%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:1
  }
  
  .modal-content {
    background: #fff;
    width:60%;
    height:80%;
    border-radius:10px;
  }
  .SelectImgBtn {
   width: 100px;
   border: rgb(94, 92, 230) solid 2px;
   color: rgb(94, 92, 230);
   border-radius: 5px;
   margin-top: 10px;
   
   &:hover {
      border: rgb(121, 119, 232) solid 2px;
      color: rgb(121, 119, 232);
      border-radius: 5px;
   }
}
  </style>