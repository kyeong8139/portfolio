<template>
      <aside>
        <ul>
          <li @click="scroll('introduce')">Introduce</li>
          <li @click="scroll('contact')">contact</li>
          <li @click="scroll('skills')">Skills</li>
          <li @click="scroll('project')">Projects</li>
          <li @click="scroll('career')">Career</li>
        </ul>
      </aside>
      <section>
        <div ref="introduceRef">
            <Introduction/>
        </div>
        <div ref="contactRef">
            <Contact/>
        </div>
        <div ref="skillsRef">
            <Skills/>
        </div>
        <div ref="projectRef">
            <ProjectInfo/>
        </div>
        <div ref="careerRef">
            <Career/>
        </div>
      </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Skills from '@/components/main/Skills.vue'
  import ProjectInfo from '@/components/main/ProjectInfo.vue'
  import Career from '@/components/main/Career.vue'
  import Introduction from '@/components/main/Introduction.vue'
  import Contact from '@/components/main/Contact.vue'
  
  const aboutMeRef = ref(null)
  const skillsRef = ref(null)
  const projectRef = ref(null)
  const careerRef = ref(null)
  
  const scroll = (refName) => {
    if (refName === 'aboutMe') {
      aboutMeRef.value.scrollIntoView({ behavior: "smooth" })
    } else if (refName === 'skills') {
      skillsRef.value.scrollIntoView({behavior : 'smooth'})
    } else if (refName === 'project') {
      projectRef.value.scrollIntoView({behavior : 'smooth'})
    } else if (refName === 'career') {
      careerRef.value.scrollIntoView({behavior : 'smooth'})
    }
    
  }
  </script>
  
  <style scoped>
  
  </style>
  