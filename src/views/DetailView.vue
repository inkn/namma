<script lang="ts" setup>
import { useProjectStore } from '@/stores/project';
import { toRefs } from 'vue';

const { curViewProject } = toRefs(useProjectStore());
</script>


<template>
  <div class="about">
    <h1>This is an deatail page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
