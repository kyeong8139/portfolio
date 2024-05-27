<template>
    <div>플젝</div>
    <div v-for="project in projectStore.projects">
        <img :src="imgSrc(project.mainImage)">
        <div>{{ project.title }}</div>
        <div>{{ project.introduce }}</div>
        <button @click="moveToDetail(project)">상세보기</button>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { useProjectStore } from '../../stores/project';

const projectStore = useProjectStore();

const imgSrc = function(mainImage) {
    return `src/assets/${mainImage}`
}

const router = useRouter()

const moveToDetail = function (project) {
    projectStore.selectedProject = project
    router.push({name : 'project'})
}

</script>