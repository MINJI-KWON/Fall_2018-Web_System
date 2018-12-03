<template>
    <header class="sticky_header">
        <div class="sticky_header_logo">
            <img class="sticky_header_logo_name" src="../../public/img/fitfactory로고글씨.png"/>
            <img class="sticky_header_logo_icon" id="logo" src="../../public/img/iconfinder_gym_512534.svg" height="64" width="64"/>
        </div>

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <div class="sticky_header_right">
            <div class="search">
                <vs-input icon="search" placeholder="Search" v-model="search"/>
            </div>
            <div class="logout">
                <vs-button :color="colorx" type="flat" size="small">설정</vs-button>
                <vs-button :color="colorx" type="flat" size="small">로그아웃</vs-button>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "StickyHeader",
        data(){
            return{
                search:"",
                colorx: '#808080',
                point: '#25b7d3'
            }
        }
    }
</script>

<style scoped>
    .sticky_header{
        background-color: #fafafa;
    }
    .sticky_header_logo{
        text-align: left;
        margin-top: 3px;
        display: inline-block;
    }
    .sticky_header_logo_icon{
        margin-left: 5px;
    }
    .sticky_header_right{
        display: inline-block;
        text-align: right;
        margin-left: 200px;
    }
</style>
