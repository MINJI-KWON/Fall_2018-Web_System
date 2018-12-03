<template>
    <div class="login">
        <div id="blank"></div>
        <div class="center">
            <div class="login_logo">
                <img src="../../public/img/login_img.png" width="402" height="214"/>
            </div>
            <div class="login_input_box">
                <div class="login_input_content">
                    <input class="login_input" type="text" placeholder="사용자 ID" name="user_ID" id="user_ID" ><br>
                    <input class="login_input" type="password" placeholder="비밀번호" name="user_psw" id="user_psw">
                </div>
                <div class="login_button_content">
                    <router-link to="/main/:userId"><input class="login_button" type="submit" value="로그인"></router-link><br>
                    <router-link to="/register" id=login_register_button>회원가입</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    #blank{
        float: left;
        height: 50%;
    }
    .login{
        text-align: center;
    }
    .center{
        position: relative;
        clear: both;
    }
    .login_logo{
        padding: 30px 0;
    }
    .login_input_box{
        margin: 20px auto 0;
        border: 1px solid #eeeeef;
        background-color: #fbfbfb;
        width: 400px;
        height: 250px;
    }
    .login_input_content{
        margin-top: 50px;
    }
    .login_button_content{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .login_input{
        border: 1px solid #e3e3e3;
        border-radius: 4px;
        background-color: white;
        width: 70%;
        height: 40px;
    }
    #user_ID{
        margin-bottom: 5px;
    }
    .login_button{
        font-size: 15px;
        font-weight: bold;
        background-color: #25b7d3;
        border: none;
        color: white;
        border-radius: 4px;
        width: 70%;
        height: 35px;
        margin-bottom: 15px;
    }
    #login_register_button{
        padding: 0 0 50px 0;
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
