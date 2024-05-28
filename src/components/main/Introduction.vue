<template>
    <div class="article-container">
        <div class="container" style="max-width: 1080px;">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="aboutme-container">
                        <div class="title-container">
                            <div class="card-title introduce-title">ABOUT ME</div>
                        </div>
                        <div class="body-container">
                            <p v-html="introduce"></p>
                        </div>
                        <div class="contact-container">
                            <p>Email <a href="mailto:kyeong8139@gmail.com">kyeong8139@gmail.com</a></p>
                            <p>Github <a href="https://github.com/kyeong8139">https://github.com/kyeong8139</a></p>
                            <p>Tistory <a href="https://kyeong8139.tistory.com/">디벨로퍼 벨롭스쿨</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 img-container">
                    <img src="/src/assets/leebokyeong.jpg" alt="증명사진">
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

const introduce = `안녕하세요. 백엔드 개발자 이보경입니다.<br>
             초등교사로 재직하던 당시, 수업에 활용할 웹사이트를 제작하려 프로그래밍을 시작하게 되었습니다.<br> 
             개발이 줄 수 있는 선한 영향력에 매력을 느껴 개발자의 길을 걷고 있습니다.<br>
             새로운 것을 배우는 데 겁이 없고, 배움을 바탕으로 나누는 것을 즐깁니다.`

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Do+Hyeon&display=swap');

.contact-container p {
    color: #81689D;
}

.aboutme-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;
    height: 100%;
    padding : 20px
}

.article-title {
    color : black;
    font-weight: 700;
}

.title-container {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 3rem;
}

.introduce-title {
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
    align-items: center;
}

.img-container img {
    width: auto; 
    max-width: 100%;
    height: auto; 
    border-radius: 50%;
}

.article-container {
    text-align: center;
    padding-top: 50px;
}

a {
    color: black;
    text-decoration: none;
    margin-left: 10px;
}

</style>