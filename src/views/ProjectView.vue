<template>
    <div class="article-container">
        <p class="article-title highlight">{{ store.selectedProject.title }}</p>
        <p class="description">{{ store.selectedProject.description }}</p>
        <div v-for="(detail, detailIndex) in store.selectedProject.details" :key="detailIndex" class="card-container" style="max-width: 1020px;">
            <div class="card">
                <div class="img-container col-md-8" :ref="'carouselContainer' + detailIndex">
                    <div v-if="detail.src.length === 1">
                        <img :src="imgSrc(detail.src[0])" class="carousel-img">
                    </div>
                    <div v-else>
                        <div :id="'carouselExampleIndicators' + detailIndex" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button v-for="(source, index) in detail.src" :key="'indicator-' + index"
                                        type="button" :data-bs-target="'#carouselExampleIndicators' + detailIndex"
                                        :data-bs-slide-to="index" :class="{ active: index === 0 }" aria-current="true"
                                        :aria-label="'Slide ' + (index + 1)"></button>
                            </div>
                            <div class="carousel-inner">
                                <div v-for="(source, index) in detail.src" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
                                    <img :src="imgSrc(source)" class="d-block w-100 carousel-img">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleIndicators' + detailIndex" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleIndicators' + detailIndex" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="title-container col-md-4">
                    <div class="card-title project-title">{{ detail.title }}</div>
                    <div class="card-text">{{ detail.description }}</div>
                </div>
            </div>
        </div>
        <span>
        <span v-if="store.selectedProject.blogUrl">
            <a :href="store.selectedProject.blogUrl" target="_blank">회고 살펴보기</a>
        </span> | 
        <a href="/">홈으로 돌아가기</a>
        </span>
    </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import { useProjectStore } from '@/stores/project';

const store = useProjectStore();

const imgSrc = function (mainImage) {
    return `src/assets/${mainImage}`
}

const setMaxHeightForCarousels = async () => {
    await nextTick();
    const carousels = document.querySelectorAll('.carousel-inner');
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        let maxHeight = 0;

        images.forEach(img => {
            img.onload = () => {
                if (img.clientHeight > maxHeight) {
                    maxHeight = img.clientHeight;
                    carousel.style.height = `${maxHeight}px`;
                }
            }
        });
    });
}

onMounted(() => {
    setMaxHeightForCarousels();
});
</script>
<style scoped>
.description {
    color: white; 
    width: 80%;
    max-width: 800px;
    margin-bottom: 50px;
    word-break: keep-all;
}

.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    word-break: keep-all;
    margin-bottom: 50px;
    flex-wrap: wrap;
    width: 100%;
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
    flex: 2;
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
    margin-bottom: 50px;
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

.carousel-inner {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
}

.carousel-inner img {
    max-height: 100%;
    object-fit: cover;
}

.title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
}

a {
    color: white;
    text-decoration: none;
}
</style>
