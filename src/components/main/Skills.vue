<template>
    <div class="article-container">
        <p class="article-title highlight">SKILLS</p>
        <div class="card-container" style="max-width: 1020px;">
            <div class="card col-md-6 mb-5 gap-5 container" >
                <div class="row g-0">
                    <div col-md-6>
                        <div class="title-container">
                            <div class="card-title project-title">FRONTEND</div>
                            <div class="card-text"><small class="text-body-secondary"></small></div>
                        </div>
                        <div class="img-container">
                            <img src="/src/assets/vue_logo.png" alt="Vue.js">
                            <img src="/src/assets/frontlanguage.png" style="margin-bottom: 30px;" alt="HTML, CSS, JavaScript">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card col-md-6 mb-5 gap-5 container" >
                <div class="row g-0">
                    <div col-md-6>
                        <div class="title-container">
                            <div class="card-title project-title">BACKEND</div>
                            <div class="card-text"><small class="text-body-secondary"></small></div>
                        </div>
                        <div class="img-container">
                            <div class="img-row-container">
                                <img src="/src/assets/java_logo.png" alt="java">
                                <img src="/src/assets/spring_logo.png" alt="spring">
                            </div>
                            <div class="img-row-container">
                                <img src="/src/assets/aws_logo.png" alt="aws">
                                <img src="/src/assets/mysql_logo.png" alt="mysql">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


</template>

<script setup>
import { useRouter } from 'vue-router';
import { useProjectStore } from '../../stores/project';

const projectStore = useProjectStore();

const imgSrc = function (mainImage) {
    return `src/assets/${mainImage}`
}

const router = useRouter()

const moveToDetail = function (project) {
    projectStore.selectedProject = project
    router.push({ name: 'project' })
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&display=swap');

.card-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 60px;
    width: 90%;
}

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.img-container img {
    height: 100px;
    max-width: 80%;
}

.img-row-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.article-title {
    margin-bottom: 100px;
}

.article-container {
    background-color: #81689D;
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

.card {
    background-color: white;
}

.highlight {
    display: inline;
    box-shadow: inset 0 -0.3em 0 rgba(255, 208, 236, 0.5);
    padding: 0.1em 0; 
    line-height: 0.8;
}

@media (max-width: 768px) {
    .img-row-container {
        flex-direction: column;
    }

    .card-container {
        flex-direction: column;
        gap: 30px;
    }

    .img-container img {
        height: auto;
        max-width: 100%;
    }
}
</style>