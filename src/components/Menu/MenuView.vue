<script setup lang="ts">
import { ref, watch} from 'vue'
const prors=defineProps({
    title:String
})


// watch(prors,(val:string,oleval:string)=>{
//         console.log(val,oleval)
//     })

</script>
<template>
    <div class="MenuMain">
        <div class="MenuTitle">{{ title }}</div>
        <div>
            <div class="New">
                <a-button class="NewBtn">+</a-button>
                <div>新增图像</div>
            </div>


        </div>
    </div>
</template>
<style scoped>
.MenuMain {
    
    padding: 20px;
    padding-top: 0;
    background-color: white;

}

.MenuTitle {
    text-align:left;
    font-size: 25px;
}

.NewBtn {

    background-color: white;
    border: 2px dashed gray;
    width: 60px;
    height: 60px;
    font-size: 30px;

}
.New{
    padding-top: 20px;
}
</style>