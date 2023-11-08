import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  const curViewProject = ref()
  const setCurViewProject = (item: any) => {
    curViewProject.value = item
  }
  return { curViewProject, setCurViewProject }
})
