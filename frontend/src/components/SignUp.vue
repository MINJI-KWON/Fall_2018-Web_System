<template>
    <div class="sign_up">
        <div id="blank"></div>
        <div class="center">
            <div class="sign_up_logo">
                <img src="../../public/img/login_img.png" width="402" height="214"/>
            </div>
            <div class="sign_up_input_box">
                <div class="sign_up_input_content">
                    <div class="sign_up_item">아이디</div>
                    <input class="sign_up_input" type="text" placeholder="사용자 ID" name="user_ID" id="user_ID">
                    <div class="sign_up_item">닉네임</div>
                    <input class="sign_up_input" type="text" placeholder="사용자 이름" name="user_name" id="user_name">
                    <div class="sign_up_item">비밀번호</div>
                    <input class="sign_up_input" type="password" placeholder="비밀번호" name="user_psw" id="user_psw">
                    <input class="sign_up_input"  type="password" placeholder="비밀번호 확인" name="user_psw-repeat">
                </div>
                <div class="sign_up_button_content">
                    <input class="sign_up_button" type="submit" value="가입">
                </div>
            </div>
            <div class="sign_up_privacy">By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignUp"
    }
</script>

<style scoped>
    #blank{
        float: left;
        height: 50%;
    }
    .sign_up_item{
        text-align: left;
        margin-left: 15%;
        margin-bottom: 2px;
    }
    #user_ID{
        margin-bottom: 15px;
    }
    #user_name{
        margin-bottom: 15px;
    }
    #user_psw{
        margin-bottom: 2px;
    }
    .center{
        position: relative;
        clear: both;
    }
    .sign_up{
        text-align: center;
    }
    .sign_up_logo{
        padding: 30px 0;
    }
    .sign_up_input_box{
        margin: 20px auto 0;
        border: 1px solid #eeeeef;
        background-color: #fbfbfb;
        width: 400px;
        height: 385px;
    }
    .sign_up_input_content{
        margin-top: 7%;
    }
    .sign_up_input{
        background-color: white;
        width: 70%;
        height: 40px;
        border: 1px solid #e3e3e3;
        border-radius: 4px;
    }
    .sign_up_button_content{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .sign_up_button{
        margin-top: 10px;
        font-size: 15px;
        font-weight: bold;
        background-color: #25b6d2;
        border: none;
        color: white;
        width: 70%;
        height: 35px;
        border-radius: 4px;
    }
    .sign_up_privacy{
        padding: 30px;
    }
</style>
