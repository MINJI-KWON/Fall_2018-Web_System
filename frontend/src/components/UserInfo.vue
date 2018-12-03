<template>
    <div class="user">
        <div class="user_photo">
            <img src="../../public/img/profile.jpg" id="photo" align="right">
        </div>

        <div class="user_profile">
            <div class="user_profile_data">
                <div id="user_id">이용자 아이디
                    <vs-button :color="point" type="flat" size="small" id="edit">프로필 편집</vs-button>
                    <post-msg/>
                </div>
                <div id="user_post_name">게시물 <post id="user_post_number">게시물 총 개수</post></div><br>
                <div id="user_name">이용자 닉네임</div>
                <div id="user_memo">이용자 메모</div>
            </div>
        </div>
    </div>
</template>

<script>
    import PostMsg from "./PostMsg";
    export default {
        name: "PersonalInfo",
        components: {PostMsg},
        data() {
            return {
                colorx: '#808080',
                point: '#25b7d3'
            }
        }
    }
</script>

<style scoped>
    #edit{
        margin-right: 5px;
    }
    .user{
        border-top: 1px solid #eeeeef;
    }
    .user_photo{
        display: inline-block;
    }
    .user_profile{
        display: inline-block;
        text-align: left;
    }
    .user_profile_data{
        margin-left: 100px;
    }
    #user_id{
        font-size: 24px;
        display: inline-block;
    }
    #user_post_name{
        font-size: 16px;
    }
    #user_post_number{
        font-size: 16px;
        font-weight: bold;
    }
    #user_name{
        font-weight: bold;
    }
    #photo{
        height: 170px;
        width: 170px;
        border-radius: 85px;
        border: 1px solid #eeeeef;
    }
</style>