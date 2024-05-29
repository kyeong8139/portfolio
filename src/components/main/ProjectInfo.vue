<template>
    <div class="article-container">
        <p class="article-title highlight">PROJECTS</p>
        <div class="card-container">
            <div v-for="project in projectStore.projects" class="card mb-5 gap-5 container" style="max-width: 1080px;">
                <div class="row g-0">
                    <div class="title-container">
                        <div class="card-title project-title">{{ project.title }}</div>
                        <div class="card-text"><small class="text-body-secondary">{{ project.introduce }}</small></div>
                    </div>
                    <div class="col-md-8 img-container">
                        <img :src="imgSrc(project.mainImage)" class="img-fluid rounded-start" alt="메인 화면">
                    </div>
                    <div class="col-md-4">
                        <div class="card-body">
                            <div class="body-container">
                                <div>
                                    <div>{{ project.description }}</div>
                                </div>
                                <br>
                                <div>
                                    <ul v-for="(functionItem, index) in project.functions" :key="index">
                                        <ol>✔ {{ functionItem }}</ol>
                                    </ul>
                                </div>
                                <br>    
                                <div class="actions-container gap-3">
                                    <a class="btn btn-light" target="_blank" :href="project.githubUrl">깃허브</a> 
                                    <div v-if="project.url">
                                        <a class="btn btn-light" :href="project.url">바로가기</a> 
                                    </div>
                                    <div v-else>
                                        <button class="btn btn-light" @click="moveToDetail(project)">상세보기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
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

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&display=swap');

.title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
}

.project-title {
    font-family: "Do Hyeon", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.body-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.img-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.img-container img {
    width: auto; 
    max-width: 100%;
    height: auto; 
}

.actions-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-bottom: 10px;
}

.article-title {
    margin-bottom: 100px;
}

.article-container {
    background-color: #474F7A;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.card-title {
    font-size: 3rem;
    margin-bottom: 0;
}

ul {
    text-align: left;
}

ol {
    padding-left: 0px; 
}

.card-container {
display: flex;
flex-direction: column;
align-items: center;
gap: 50px;
width: 100%;
max-width: 1080px;
padding: 0 20px;
box-sizing: border-box;
}

.card {
    background-color: white;
}

.highlight {
    display: inline;
    box-shadow: inset 0 -0.3em 0 rgba(255, 208, 236, 0.5);
    padding: 0.1em 0; 
    line-height: 0.8;
}

</style>