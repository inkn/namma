<template>
    <div class="modal" v-if="show" @click="closeModal($event)">
        <div class="modal-content" @click.stop>
            <slot></slot>
            <div class="Title"> 稀有度设置</div>
            <div class="RarityItemArea"> 
                <div class="RarityItem" @click="closeModal($event)">
                <div class="Raimg">
                    <div class="Person">11.6%</div>
                    <img class="RarityImg" src="../../../public/img/Rarity1.png" />
                    
                </div>
                <div class="ItemName">
                    <div class="NameTag">名称</div>
                    <div class="Name">
                        <p>鲨鱼衣</p>
                    </div>
                </div>
                <div class="RarityData">
                    <div class="RarityNum">
                        <div class="RareNum">稀有度</div>
                        <div class="RareNum">112</div>
                    </div>
                    <a-progress class="Rarepercent" :percent="0.5" :style="{width:'100%'}" :show-text="false" />
                    <div class="RarityTag">
                        <div class="RareTag">稀有</div>
                        <div class="RareTag">普通</div>
                    </div>
                </div>
            </div>
            <div class="RarityItem" @click="closeModal($event)">
                <div class="Raimg">
                    <div class="Person">11.6%</div>
                    <img class="RarityImg" src="../../../public/img/Rarity2.png" />
                    
                </div>
                <div class="ItemName">
                    <div class="NameTag">名称</div>
                    <div class="Name">
                        <p>科技服</p>
                    </div>
                </div>
                <div class="RarityData">
                    <div class="RarityNum">
                        <div class="RareNum">稀有度</div>
                        <div class="RareNum">112</div>
                    </div>
                    <a-progress class="Rarepercent" :percent="0.5" :style="{width:'100%'}" :show-text="false" />
                    <div class="RarityTag">
                        <div class="RareTag">稀有</div>
                        <div class="RareTag">普通</div>
                    </div>
                </div>
            </div>
            <div class="RarityItem" @click="closeModal($event)">
                <div class="Raimg">
                    <div class="Person">11.6%</div>
                    <img class="RarityImg" src="../../../public/img/Rarity3.png" />
                    
                </div>
                <div class="ItemName">
                    <div class="NameTag">名称</div>
                    <div class="Name">
                        <p>球服</p>
                    </div>
                </div>
                <div class="RarityData">
                    <div class="RarityNum">
                        <div class="RareNum">稀有度</div>
                        <div class="RareNum">112</div>
                    </div>
                    <a-progress class="Rarepercent" :percent="0.5" :style="{width:'100%'}" :show-text="false" />
                    <div class="RarityTag">
                        <div class="RareTag">稀有</div>
                        <div class="RareTag">普通</div>
                    </div>
                </div>
            </div>
            <div class="RarityItem" @click="closeModal($event)">
                <div class="Raimg">
                    <div class="Person">11.6%</div>
                    <img class="RarityImg" src="../../../public/img/Rarity4.png" />
                    
                </div>
                <div class="ItemName">
                    <div class="NameTag">名称</div>
                    <div class="Name">
                        <p>衬衫</p>
                    </div>
                </div>
                <div class="RarityData">
                    <div class="RarityNum">
                        <div class="RareNum">稀有度</div>
                        <div class="RareNum">112</div>
                    </div>
                    <a-progress class="Rarepercent" :percent="0.5" :style="{width:'100%'}" :show-text="false" />
                    <div class="RarityTag">
                        <div class="RareTag">稀有</div>
                        <div class="RareTag">普通</div>
                    </div>
                </div>
            </div>
           </div>
        </div>
        
    </div>
    <p class="RarityBtn" @click="openModal">稀有度设置</p>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
const show = ref(false);
const props = defineProps<{
    imageLoacl: string
}>();
const emit = defineEmits(['update:imageLoacl']);
const openModal = () => {
    show.value = true;
};

const closeModal = (event: MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains('modal-content')) {
        return;
    }
    show.value = false;
};
</script>
  
<style scoped>
.Title {
    width: 100%;
    padding: 10px;
    border-bottom: lightgray solid 1px
}
.RareNum{
    margin-left:5px;
    margin-right:5px;
    font-weight:bold;
}
.RareTag{
    font-size:10px;
    line-height:15px;
    color:gray;
    margin-left:5px;
    margin-right:5px;
}
.RarityTag{
    display:flex;
    justify-content: space-between;
    width:100%;
}
.RarityNum{
    display: flex;
    justify-content: space-between;
    width:100%;
}
.RarityData{
    display: flex;
    flex-wrap:wrap;
}
.Name {
    margin-right: 5px;
}

.NameTag {
    margin-left: 5px;
}

.ItemName {
    display: flex;
    justify-content: space-between;
    border-bottom: gray solid 1px;
}

.RarityImg {
    margin-top: 20px;
    margin-left: 10px;
    width: 100px;
    height: 100px
}

.Raimg {
    border-bottom: gray solid 1px;
}

.RarityItem {
    border: gray solid 3px;
    margin-top: 20px;
    margin-left: 20px;
    width: 140px;
    height: 220px;
    border-radius: 6px;

    &:hover {
        border: rgb(62, 52, 245) solid 3px;
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
    justify-content: flex-end;
    align-items: center;
    z-index: 1
}

.modal-content {
    background: #fff;
    width: 50%;
    height: 100%;
}

.RarityBtn {
    color: blue;
    width: 50px;
    font-size: 10px;
    float: right;
    text-decoration: underline;

}
.Person{ 
    position: absolute;
    font-size: 13px;
    width:40px;
    height:20px;
    background-color:lightgray;
    color: black;
    line-height: 20px;
    margin-top: 5px;
    margin-left: 85px;
    border-radius: 4px;
}
.RarityItemArea
{
    display: flex;
    flex-wrap: wrap;
}
</style>

