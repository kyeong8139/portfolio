<template>
    <div class="article-container">
        <p class="article-title highlight">{{ store.selectedProject.title }}</p>
        <div v-for="detail in store.selectedProject.details" class="card-container" style="max-width: 1020px;">
            <div class="card gap-5">
                <div class="img-container col-md-8">
                    <img :src="imgSrc(detail.src)">
                </div>
                <div class="title-container col-md-3">
                    <div class="card-title project-title">{{ detail.title }}</div>
                    <div class="card-text">{{ detail.description }}</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useProjectStore } from '@/stores/project';

const store = useProjectStore();

const imgSrc = function(mainImage) {
    return `src/assets/${mainImage}`
}

</script>

<style scoped>
.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    word-break: keep-all;
    margin-bottom: 50px;
}

.article-container {
    background-color: #1F2544;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.highlight {
    display: inline;
    box-shadow: inset 0 -0.3em 0 rgba(255, 208, 236, 0.5);
    padding: 0.1em 0;
    line-height: 0.8;
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

.card-title {
    font-size: 3rem;
    margin-bottom: 0;
}

.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1080px;
    padding: 0 20px;
    box-sizing: border-box;
}

.card {
    background-color: white;
}
</style>