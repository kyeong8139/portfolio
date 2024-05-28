<template>
  <nav id="navbar" class="navbar fixed-top px-3 mb-3">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#introduce">Introduce</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#skill">Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#project">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#career">Career</a>
      </li>
    </ul>
  </nav>
  <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
    <div ref="introduceRef" id="introduce">
      <Introduction />
    </div>
    <div ref="skillsRef" id="skill">
      <Skills />
    </div>
    <div ref="projectRef" id="project">
      <ProjectInfo />
    </div>
    <div ref="careerRef" id="career">
      <Career />
    </div>
  </div>
</template>

<script setup>
import Skills from '@/components/main/Skills.vue'
import ProjectInfo from '@/components/main/ProjectInfo.vue'
import Career from '@/components/main/Career.vue'
import Introduction from '@/components/main/Introduction.vue'

</script>

<style scoped>

.navbar {
  background-color: white;
}

.nav-pills {
    --bs-nav-pills-border-radius: var(--bs-border-radius);
    --bs-nav-pills-link-active-color: #FFD0EC;
    --bs-nav-pills-link-active-bg: white;
}

a {
  color: #474F7A;
  text-decoration: none;
}

</style>