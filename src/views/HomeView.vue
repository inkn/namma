<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useProjectStore } from '@/stores/project';

const router = useRouter();
const  { setCurViewProject } = useProjectStore();


const filterOptions = [
  {
    label: '全部',
    value: 'all',
  },
  {
    label: '最新',
    value: 'new',
  },
  {
    label: '最热',
    value: 'hot',
  },
  {
    label: '最多喜欢',
    value: 'like',
  },
  {
    label: '最多收藏',
    value: 'collect',
  },
  {
    label: '最多评论',
    value: 'comment',
  },
]

const filterValue = ref('all')



const list = ref([
  {
    name: '小猫',
    dataTime: '2023年8月24日',
    favor: 0,
    imgUrl: '/img/1.png',
  },
  {
    name: 'Azuki',
    dataTime: '2023年8月24日',
    favor: 5,
    imgUrl: '/img/2.png',
  },
  {
    name: '蛇蛇革命',
    dataTime: '2023年8月24日',
    favor: 5,
    imgUrl: '/img/3.png',
  },
  {
    name: '太空蛇',
    dataTime: '2023年8月24日',
    favor: 5,
    imgUrl: '/img/4.png',
  },
  {
    name: '看不见的朋友',
    dataTime: '2023年8月24日',
    favor: 5,
    imgUrl: '/img/5.png',
  },
  {
    name: '小猫',
    dataTime: '2023年8月24日',
    favor: 0,
    imgUrl: '/img/1.png',
  },
  {
    name: 'Azuki',
    dataTime: '2023年8月24日',
    favor: 5,
    imgUrl: '/img/2.png',
  },
  {
    name: '蛇蛇革命',
    dataTime: '2023年8月24日',
    favor: 5,
    imgUrl: '/img/3.png',
  },
  {
    name: '太空蛇',
    dataTime: '2023年8月24日',
    favor: 5,
    imgUrl: '/img/4.png',
  },
  {
    name: '看不见的朋友',
    dataTime: '2023年8月24日',
    favor: 5,
    imgUrl: '/img/5.png',
  },
  {
    name: '小猫',
    dataTime: '2023年8月24日',
    favor: 0,
    imgUrl: '/img/1.png',
  },
  {
    name: 'Azuki',
    dataTime: '2023年8月24日',
    favor: 5,
    imgUrl: '/img/2.png',
  },
  {
    name: '蛇蛇革命',
    dataTime: '2023年8月24日',
    favor: 5,
    imgUrl: '/img/3.png',
  },
  {
    name: '太空蛇',
    dataTime: '2023年8月24日',
    favor: 5,
    imgUrl: '/img/4.png',
  },
  {
    name: '看不见的朋友',
    dataTime: '2023年8月24日',
    favor: 5,
    imgUrl: '/img/5.png',
  },
])

const goToDetail = (item: any) => {
  console.log(item)
  setCurViewProject(item)
  router.push({
    path: '/detail',
    query: {
      name: encodeURIComponent(item.name),
    },
  })
}
</script>

<template>
  <div class="header">
    <div class="bg">
    </div>
    <div class="info">
      <div class="line-1">用数字藏品创作解锁你的想象力</div>
      <div class="line-2">Unlock Your lmagination with Digital Masterpieces</div>
      <router-link to="/create">
      <a-button type="primary" size="large" class="bg-btn">开始制作</a-button></router-link>
    </div>
  </div>
  <div class="content">
    <div class="filter">
      <a-select :style="{ width: '120px' }" v-model="filterValue">
        <a-option v-for="item in filterOptions" :value="item.value">
          {{ item.label }}
        </a-option>
      </a-select>
    </div>
    <div class="list">
      <template v-for="item in list" :key="item.name">
        <a-card class="item" hoverable @click="goToDetail(item)">
          <img class="item-img" :src="item.imgUrl" />
          <div class="info">
            <div class="title">{{ item.name }} </div>
            <div class="favor" v-if="item.favor"><i class="iconfont icon-xihuan"></i><span class="text">{{ item.favor
            }}</span></div>
            <div class="date-time">{{ item.dataTime }}</div>
          </div>
        </a-card>
      </template>
    </div>
  </div>
</template>

<style scoped >
.header {
  position: relative;

  .bg {
    background: url('../assets/img/banner.png') no-repeat center;
    background-size: cover;
    height: 500px;
  }

  .bg-btn {
    width: 200px;
    background: linear-gradient(to right bottom, #62b7e7, #5e66e6);
    border: 0;
  }

  .info {
    position: absolute;
    top: 160px;
    padding: 0 100px;

    .line-1 {
      font-size: 50px;
      color: #fff;
      font-weight: bold;
    }

    .line-2 {
      font-size: 16px;
      color: #bcb7bc;
      margin: 40px 0 40px;
    }
  }
}

.content {
  padding: 0 100px;
}

.list {
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: 300px;
  height: 360px;
  margin: 0 20px 20px 0;
  border-radius: 5px;
  border-color: transparent;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .info {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 10px 10px;

    .title {
      font-size: 16px;
      color: #000;
    }

    .date-time {
      font-size: 12px;
      color: #797979;
    }

    .favor {
      position: absolute;
      right: 20px;
      bottom: 16px;
      color: #f4b1b1;
      font-size: 20px;

      .text {
        font-size: 14px;
        color: #000;
        vertical-align: middle;
        margin-left: 4px;
      }
    }
  }

  .item-img {
    width: 100%;
  }

}

</style>

<style>

.list .arco-card-body {
  padding: 0!important;
}
</style>