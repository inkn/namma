<script setup lang="ts">

import MainView from './Menu/MenuView.vue'
import EditTextBox from './Menu/EditTextBoxView.vue'
import PopView from './Pop/SelectImgView.vue'
import { defineComponent, ref, watch } from 'vue';
const ischeck1 = ref(false);
const ischeck2 = ref(false);
const ischeck3 = ref(false);
const title = ref('武器');
const text = ref('默认文本');
const imageRef = ref("");
const fileInput = ref<HTMLInputElement | null>(null);
components: {
   EditTextBox
}
function ChangeMenu(newTitle: string) {
   title.value = newTitle;
   console.log(title.value);
}
function openFileExplorer() {
   if (fileInput.value) {
      fileInput.value.click();
   }
}
function handleFileChange(event: Event) {
   const target = event.target as HTMLInputElement;
   const file = target.files && target.files[0];
   if (file) {
      // 处理选定的文件
      //imageRef.value=file;
      const reader = new FileReader();
      reader.onload = (e) => {
         imageRef.value = e.target?.result as string;
      };
      reader.readAsDataURL(file);
      console.log('Selected file:', file);
   }
}
function GetChildUpdate(path: string) {
   imageRef.value = path;
}
function CreatePreview() {
   const PreviewImg = document.createElement("img");
   PreviewImg.classList.add('Pre');
   PreviewImg.setAttribute('src', '../../public//img/image 11.png');
   document.getElementById("PreviewA")?.appendChild(PreviewImg);
}
function CheckBoxEvent(num: number) {
   switch (num) {

      case 1:

         ischeck1.value = true;
         ischeck2.value = false;
         ischeck3.value = false;
         return

      case 2:
         ischeck1.value = false;
         ischeck2.value = true;
         ischeck3.value = false;
         return

      case 3:
         ischeck1.value = false;
         ischeck2.value = false;
         ischeck3.value = true;
         return
   }
}
</script>


<template>
   <!-- <img src="../../public//img/image 11.png"> -->
   <!-- <img src="/img/step2.png" alt="step2"> -->
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
      <div class="EditArea">
         <div class="TitleInput">
            <EditTextBox v-model="text"></EditTextBox>
         </div>
         <div class="SelectImg">
            <p class="SelectTitle">选择图像绘画风格</p>
            <img class="Image" v-if="!imageRef" />
            <img class="Image" :src="imageRef" v-else="imageRef" />
            <PopView @update:imageLoacl="GetChildUpdate"></PopView>
            <input ref="fileInput" class="SelectFile" type="file" accept="image/jpeg, image/png"
               @change="handleFileChange" />
         </div>
         <div class="InputText">
            <p>请输入你的描述内容</p>
            <textarea class="InputBox" placeholder="描述您想画什么，包括这个特征画面里面都有什么内容"></textarea>
            <div class="CheckBtn">
               <input class="CheckBox" type="checkbox" @change="CheckBoxEvent(1)" v-model="ischeck1" id="shape">
               <label class="CheckBoxLable" for="shape">形状优先</label>
               <input class="CheckBox" type="checkbox" @change="CheckBoxEvent(2)" v-model="ischeck2" id=" balance">
               <label class="CheckBoxLable" for="balance">平衡</label>
               <input class="CheckBox" type="checkbox" @change="CheckBoxEvent(3)" v-model="ischeck3" id=" keyword">
               <label class="CheckBoxLable" for="keyword">关键词优先</label>
               <a-button class="ChkBtn" type="primary" @click="CreatePreview">确认生成</a-button>
            </div>
         </div>
         <div class="PreviewArea">
            <p>
               生成结果预览
            </p>
            <div class="Preview" id="PreviewA">
            </div>
            <div class="PreEdit">
               <a-button type="primary" class="PreEditBtn">编辑图像</a-button>
            </div>

         </div>
      </div>
   </aside>
</template>

<style scoped>
img[src=""] {
   &:before {
      content: 'Image failed to loadaaaaaaaaImage failed to loadaaaaaaaaImage failed to loadaaaaaaaaImage failed to loadaaaaaaaaImage failed to loadaaaaaaaa     ';
      /* 也可以添加一些提示文字 */
      color: lightgray;
      text-align: center;
      line-height: 200px;
      /* 垂直居中 */
      z-index: 2;
      /* 确保提示文字在占位符之上 */
   }
}

.PreEditBtn {
   margin-top: 5px;
   border-radius: 5px;
}

.PreEdit {
   width: 80%;
   display: flex;
   justify-content: flex-end;
}

.Preview {
   display: flex;
   flex-wrap: wrap;
   width: 80%;
   height: 600px;
   border: lightgray dashed 1px;
   ;
}

.PreviewArea {
   display: flex;
   flex-wrap: wrap;
   margin-top: 10px;
}

.ChkBtn {
   margin-left: 15px;
   border-radius: 5px;
}

.CheckBoxLable {
   margin-left: 5px;
   display: inline-block;
   line-height: 32px;
}

.CheckBox {
   margin-left: 15px;
   border: rgb(94, 92, 230) solid 2px;
}

.CheckBtn {
   display: flex;
   justify-content: flex-end;
   width: 80%;
   margin-top: 10px;
}

.InputBox {
   border: rgb(94, 92, 230) solid 2px;
   width: 80%;
   height: 130px;
   text-align: left;
   vertical-align: top;
   resize: none;

}

.InputText {
   display: flex;
   flex-wrap: wrap;
   margin-top: 10px;
}

p {
   width: 100%;
   font-size: 12px;
}

.SelectFile {
   display: none;
}

.Image {
   width: 80px;
   height: 80px;
   border-radius: 10px;
   background-color: gray;
   margin-top: 10px;

}

.SelectImg {
   display: flex;
   flex-direction: column;
   margin-top: 10px;
}

.EditArea {
   width: 65%;
}

.TitleInput {
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
   height: 40px;
   width: 100%;
   margin: 5px;

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
</style>
<style>
.Pre {
   width: 240px;
   height: 240px;
   margin-left: 30px;
   margin-top: 20px;
   border-radius: 10px;
   background-color: lightgray;

}
</style>

