<template>
    <div class="article-container">
        <p class="article-title highlight">CAREER</p>
        <div class="card-container" style="max-width: 1080px;">
            <div class="card mb-5 gap-5 container">
                <div class="row g-0">
                    <div>
                        <div class="title-container">
                            <div class="card-title project-title">EDUCATION</div>
                            <div class="card-text"><small class="text-body-secondary"></small></div>
                        </div>
                        <div class="text-container">
                            <div class="col-3">
                                <small class="text-body-secondary">2024.01~ 현재 </small>
                                <p>삼성 청년 SW 아카데미</p>
                            </div>
                            <div class="col-9">
                                <p>삼성 청년 SW 아카데미의 자바 트랙에서 교육을 받고 있습니다. 또한, 알고리즘과 Computer Science 스터디를 꾸준히 진행하며 개인적인 역량을 키워가기 위해 노력하고 있습니다. 교육생 지역대표로 역임하며, 아카데미 교육생을 대상으로 한 사회 공헌 간식 배부 사업인 'SSAFY TOGETHER'의 기획 및 운영에 참가하였습니다.</p>
                            </div>
                        </div>
                        <hr>
                        <div class="text-container">
                            <div class="col-3">
                                <small class="text-body-secondary">2015.02 ~ 2019.02 </small>
                                <p>경인교육대학교</p>
                            </div>
                            <div class="col-9">
                                <p>초등교육학을 전공하며, 다양한 커뮤니케이션 스킬과 협업 경험을 쌓았습니다.</p>
                            </div>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
            <div class="card mb-5 gap-5 container">
                <div class="row g-0">
                    <div>
                        <div class="title-container">
                            <div class="card-title project-title">CAREER</div>
                            <div class="card-text"><small class="text-body-secondary"></small></div>
                        </div>
                        <div class="text-container">
                            <div class="col-3">
                                <small class="text-body-secondary">2019.03 ~ 2023.10 </small>
                                <p>초등교사</p>
                            </div>
                            <div class="col-9">
                                <p>프로그램을 개발 및 배포하여 수업에 활용하는 경험을 통해 프로그래밍에 입문하게 되었습니다.</p>
                            </div>
                        </div>
                        <br>
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

.text-container {
    display: flex;
    gap: 10px;
    padding-right: 30px;
    text-align: center;
    align-items: center;
    word-break: keep-all;
}

.card-container {
    display: flex;
    flex-direction: column;
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
    background-color: #1F2544;
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