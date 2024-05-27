import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  
  const selectedProject = ref({})

  const project1 = {
    title : "크크루펌핑",
    introduce : "유튜브에 등록된 운동 영상을 기반으로 나만의 챌린지를 생성하고 운동 크루를 조직하는 웹사이트입니다.",
    mainImage : "kkrewpumping_main.png",
    detail : []
  }
  
  const projects = [project1]

  return { 
    projects,
    selectedProject
  }
})
