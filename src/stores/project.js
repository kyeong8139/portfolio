import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  
  const selectedProject = ref({})

  const kkrewpumping = {
    title : "크크루펌핑",
    introduce : "2024.05 (2인 프로젝트)",
    description : "유튜브에 등록된 운동 영상을 기반으로 나만의 챌린지를 생성하고 운동 크루를 조직하는 웹사이트입니다. \n MySQL을 바탕으로 DB를 설계하였으며, 작성한 API 명세서를 토대로 한 Springboot MVC 구현 및 AWS 배포를 담당하였습니다.",
    mainImage : "kkrewpumping_main.png",
    githubUrl : "",
    functions : ["회원가입 및 로그인(카카오 로그인 지원)", "영상 및 챌린지 CRUD(유튜브 영상 검색을 통한 등록 지원)", "크루 등록 및 가입", 
            "운동 기록을 통한 랭킹 제공", "알림 메세지 기능", "AI 운동 추천 서비스"],
    details : [
      {
        title: "DB 설계",
        description: "ER 다이어그램을 이용하여 DB를 설계하였습니다. 도메인의 원자성을 지키기 위해 N : M 관계의 테이블의 경우 중계 테이블을 추가하였으며, 기본키가 아닌 후보키에 대해 종속성을 가지기 컬럼을 삭제하며 정규화를 진행하였습니다.",
        src: "/kkrewpumping/kkrew_schema.png"
      },
      {
        title : "API 명세서 작성",
        description : "HTTP METHOD와 API Path, request와 response의 데이터를 중심으로 API 명세서를 작성하였습니다.",
        src: "/kkrewpumping/kkrew_API.png"
      }
    ]
  }
  
  const wordle = {
    title : "wordledschool",
    introduce : "2023.02 (1인 프로젝트)",
    description : "수업 시간에 활용하기 위해 HTML, CSS, JavaScript를 처음 공부해서 만든 초등학교 영어단어 퀴즈 사이트입니다. 당시 유행하던 게임인 wordle에서 착안하여, 제출한 정답을 토대로 스펠링을 추측해가며 진행하는 게임입니다. Github를 통해 배포하였습니다.",
    mainImage : "wordledschool_main.png",
    githubUrl : "https://github.com/kyeong-lee/wordledschool",
    url : "https://kyeong-lee.github.io/wordledschool/",
    functions : ["학년별, 학기별 영어퀴즈 출제", "단어목록 엑셀파일 다운로드"]
  }

  const projects = [kkrewpumping, wordle]

  return { 
    projects,
    selectedProject
  }
})
