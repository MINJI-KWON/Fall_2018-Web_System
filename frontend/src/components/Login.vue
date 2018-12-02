<template>
    <div class="login">
        <img class="login_logo" src="../../public/img/login_img.png" width="536" height="286"/>
        <div class="login_input_box">
            <input class="login_input" type="text" placeholder="사용자 ID" name="user_ID"><br>
            <input class="login_input" type="password" placeholder="비밀번호" name="user_psw"><br>
            <router-link to="/main/:userId"><input class="login_button" type="submit" value="로그인"></router-link><br>
            <router-link to="/register" id=login_register_button>회원가입</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    .login{
        text-align: center;
    }
    .login_logo{
        margin-top: 30px;
    }
    .login_input_box{
        margin-top: 30px;
    }
    .login_input{
        display: table-cell;
        width: 170px;
        height: 30px;
        border: solid #e3e3e3;
        border-radius: 4px;
    }
    .login_button{
        font-size: 15px;
        font-weight: bold;
        background-color: #25b6d2;
        border: none;
        color: white;
        width: 100px;
        height: 30px;
        border-radius: 4px;
    }
    #register_button a:link{
        font-size: small;
        font-weight: bold;
        color: #25b6d2;
        text-decoration: none;
    }
    #register_button a:visited{
        color: #25b6d2;
        text-decoration: none;
    }
    #register_button a:hover{
        color: black;
        text-decoration: underline;
    }
</style>
