<script setup lang="ts">
import { defineProps,watch ,ref} from 'vue';
import RarityView from '../Pop/RarityView.vue'

const props = defineProps({
  value: String
});
const activeDiv = ref<number | null>(null);

const handleClick = (divNumber: number) => {
  activeDiv.value = divNumber;
};
const RightTag = (title: string) => {
    switch (title) {
        case '武器':
            return true;
        case '头饰':
            return false;
        case '衣服':
            return false;
        case '身体':
            return false;
        case '背景':
            return false;
        default:
            return true;
    }
}
</script>
<template>
    <div class="MenuMain">
        <div class="MenuT">
            <div class="Title"><div class="MenuTitle">{{ value }}</div></div>
            <div class="Tag"><RarityView v-if="RightTag(value)"></RarityView></div>
        </div>
        
        
        <div class="ButtomArea">
            <div class="New" v-if="!RightTag(value)">
                <a-button class="NewBtn">+</a-button>
                <div>新增图像</div>
            </div>
            <div class="WeaponsArea" v-else="RightTag(value)">
                <div class="Weapons" @click="handleClick(1)"  :class="{ 'active': activeDiv === 1 }" >
                <img class="WeaponsImg" src="../../../public/img/武器1.png" />
                <div>刀把</div>
            </div>
            <div class="Weapons"  @click="handleClick(2)"  :class="{ 'active': activeDiv === 2 }">
                <img class="WeaponsImg" src="../../../public/img/武器2.png" />
                <div>科技刀</div>
            </div>
            <div class="Weapons"  @click="handleClick(3)"  :class="{ 'active': activeDiv === 3 }">
                <img class="WeaponsImg" src="../../../public/img/武器3.png" />
                <div>光刀</div>
            </div>
            </div>
            


        </div>
    </div>
</template>
<style scoped>
.Tag{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    line-height: 30px;
}
.Title{
    width: 50%;
}
p{
    color: blue;
    width: 50px;
    font-size: 10px;
    float: right;
    text-decoration: underline;
    
}
.MenuT{
    display: flex;
}
.MenuMain {
    padding: 20px;
    padding-top: 0;
    background-color: white;

}

.MenuTitle {
    text-align:left;
    font-size: 20px;
    width: 55px;
}
.WeaponsImg
{
    background-color: white;
    width: 60px;
    height: 60px;
    font-size: 30px;
    border-radius: 5px;
    margin-left: 5px;
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
.WeaponsArea
{
    display: flex;
    flex-wrap: wrap;
}
.Weapons{
    width: 70px;
    height: 90px;
    &:hover{
border: rgb(62, 52, 245) solid 1px;
}

}
.active {
    border: rgb(62, 52, 245) solid 1px;
}

</style>