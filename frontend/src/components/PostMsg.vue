<template>
    <div class="post_msg">
        <vs-button @click="popupActivo=true" :color="colorx" type="flat" size="small">운동일지 작성</vs-button>
        <vs-popup class="exercise" title="운동일지 작성" :active.sync="popupActivo">
            <p>사진을 한 장만 첨부해주세요.</p>
            <SportsSel/>
            <input type="file" accept="image/*" id=button2 class="second">
            <img class="test" src="../../public/img/login_img.png"/>
            <vs-button type="flat">좋아요</vs-button>
            <vs-button type="flat">댓글</vs-button>
            <vs-button type="flat">작성 완료</vs-button>
            <vs-icon icon="favorite"></vs-icon>
            <vs-icon icon="favorite_border"></vs-icon>
        </vs-popup>
    </div>
</template>

<script>
    import SportsSel from "./SportsSel";
    export default {
        name: "PostMsg",
        components: {SportsSel},
        data() {
            return {
                colorx: '#808080',
                popupActivo: false,
                point: '#25b7d3'
            }
        }
    }
</script>

<style scoped>
    .post_msg{
        margin-top: 50px;
        margin-bottom: 30px;
        align-items: center;
        justify-content: center;
        display: inline-block;
    }
</style>
