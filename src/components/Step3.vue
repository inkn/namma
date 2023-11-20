<script setup lang="ts">
import MainView from './Menu/MenuView.vue'
import { defineComponent, ref,onMounted } from 'vue';


const title = ref('武器');
const FeaTures1 =ref(true);
const FeaTures2 =ref(true);
const FeaTures3 =ref(true);
const FeaTures4 =ref(true);
const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
   console.log(1)
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  console.log(1)
  if (!ctx) return;
  const img = new Image();
  console.log(1)
  img.src = '@../../public/img/Group 793.png';
  img.onload = () => {
   console.log("1");
    ctx.drawImage(img, 0, 3,300,150);
  };
});
function ChangeMenu(newTitle: string) {
   title.value = newTitle;
   console.log(title.value);
}
function DelectEvent(num:number)
{
switch(num)
{
   case 1: FeaTures1.value=false;
   return;
   case 2: FeaTures2.value=false;
   return;
   case 3:FeaTures3.value=false;
   return;
   case 4:FeaTures4.value=false;
   return;
}
return false;
}
</script>

<template>
   <!-- <img src="../../public/img/Group 793.png"/> -->
   <!-- <img src="/img/step3.png" alt="step3"> -->
   <aside class="MainMenu">
      <aside class="Menu">
         <ul>
            <li tabindex="1" @click="ChangeMenu('武器')">
               武器</li>
            <li tabindex="1" @click="ChangeMenu('头饰')">头饰</li>
            <li tabindex="1" @click="ChangeMenu('衣服')">衣服</li>
            <li tabindex="1" @click="ChangeMenu('身体')">身体</li>
            <li tabindex="1" @click="ChangeMenu('背景')">背景</li>
         </ul>

      </aside>
      <MainView class="MenuArea" :value="title"></MainView>
      <canvas ref="canvasRef" id="canvas" class="canvas" resize ></canvas>
      <div class="FeaTuresArea">
         <div class="AreaName">特征</div>
         <div class="FeaTures">
            <div class="FeaTuresItem" v-if="FeaTures1">
               <img class="FeaTuresImg" src="../../public/img/特征1.png" />
               <div class="FeaTuresTag">
                  <div class="FeaTuresName">科技刀</div>
                  <div class="FeaTuresType">武器</div>
               </div>
               <icon-delete class="DelectBtn" @click="DelectEvent(1)"  />
            </div>
            <div class="FeaTuresItem" v-if="FeaTures2">
               <img class="FeaTuresImg" src="../../public/img/特征2.png" />
               <div class="FeaTuresTag">
                  <div class="FeaTuresName">卷发</div>
                  <div class="FeaTuresType">头饰</div>
               </div>
               <icon-delete class="DelectBtn" @click="DelectEvent(2)"  />
            </div>
            <div class="FeaTuresItem" v-if="FeaTures3">
               <img class="FeaTuresImg" src="../../public/img/特征3.png" />
               <div class="FeaTuresTag">
                  <div class="FeaTuresName">衬衫</div>
                  <div class="FeaTuresType">衣服</div>
               </div>
               <icon-delete class="DelectBtn" @click="DelectEvent(3)" />
            </div>
            <div class="FeaTuresItem" v-if="FeaTures4">
               <img class="FeaTuresImg" src="../../public/img/特征4.png" />
               <div class="FeaTuresTag">
                  <div class="FeaTuresName">白色钻石</div>
                  <div class="FeaTuresType">身体</div>
               </div>
               <icon-delete class="DelectBtn" @click="DelectEvent(4)" />
            </div>
         </div>
      </div>
   </aside>
   
</template>

<style scoped>
.DelectBtn{
   width: 30px;
   height: 30px;
   margin-top: 15px;
}
.FeaTuresType{
   color: gray;
   font-size: 13px;
}
.FeaTuresTag{
   width: 200px;
   line-height: 30px;
}
.FeaTuresImg{
   width: 70px;
   height: 70px;
}
.FeaTuresItem{
   display: flex;
   margin-top: 1px;

   border-bottom: lightgray solid 1px;
}
.AreaName
{
   padding-left: 20px;
   margin-top: 10px;
   border-bottom: lightgray solid 1px;
   margin-bottom: 10px;
   font-weight: bold;
}
.FeaTuresArea
{
   width: 300px;
}
.MenuArea {
   width: 250px;
   height: 100%;
}

.MainMenu {
   display: flex;
   height: 1200px;
}

.Menu {
   background-color: #1f2937;
   width: 107px;
   
   margin-left: 2px;
}

ul {
   list-style: none;
   margin: 0;
   padding: 0;
   display: grid;
   border: 1px solid #353e4b;
}

li {

   position: relative;
   display: inline;
   height: 40px;
   line-height: 40px;
   color: aliceblue;
   text-align: center;
   border: 1px solid #353e4b;
   border-bottom: #353e4b;

   &:focus {
      background-color: rgb(16, 24, 39);
   }

   &:hover {
      background-color: #101827;
   }
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
</style>
