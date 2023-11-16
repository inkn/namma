<script setup lang="ts">

import MainView from './Menu/MenuView.vue'
var title="武器"
const ChangeMenu=(Lititle:string)=>{
   title=Lititle
   console.log(title)
}
</script>


<template>
   <!-- <img src="/img/step2.png" alt="step2"> -->
   <aside class="MainMenu">
      <aside class="Menu">
         <ul>
            <li tabindex="1" @click="ChangeMenu('武器')">
               武器</li>
            <li tabindex="1" @click="ChangeMenu('头饰')">头饰</li>
            <li tabindex="1">衣服</li>
            <li tabindex="1">身体</li>
            <li tabindex="1">背景</li>
         </ul>
          
      </aside>
      <MainView v-model:title="title" ></MainView> 
      <div></div>
   </aside>
   <body>
      
   </body>
</template>

<style scoped>
.MainMenu{
   display: flex;
}
.Menu{
   background-color: #1f2937;
   width: 107px;
   margin-left: 2px;
   height: 800px;
}
ul{
   list-style: none;
   margin: 0;
   padding: 0;
   display: grid;
   border: 1px solid #353e4b;
}
li{
   
position: relative;
  display: inline;
  height: 40px;
  line-height: 40px;
  color: aliceblue;
  text-align: center;
  border: 1px solid #353e4b;
  border-bottom:  #353e4b;
   &:focus{
      background-color: rgb(16, 24, 39);
   }
   &:hover{
   background-color: #101827;
   }
}


</style>
