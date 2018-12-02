<template>
    <div class="sign_up">
            <div class="sign_up_el">
                <div class="logo">
                    <img class="logo_1" src="../../public/img/login_img.png"/>
                </div>
                <div class="sign_up_input_box">
                    <input class="sign_up_input" type="text" placeholder="사용자 ID" name="user_ID">
                </div>
                <div class="sign_up_input_box">
                    <input class="sign_up_input" type="text" placeholder="사용자 이름" name="user_name">
                </div>
                <div class="sign_up_input_box">
                    <input class="sign_up_input" type="password" placeholder="비밀번호" name="user_psw">
                </div>
                <div class="sign_up_input_box">
                    <input class="sign_up_input"  type="password" placeholder="비밀번호 확인" name="user_psw-repeat">
                </div>
                <div class="sign_up_input_box">
                    <input class="sign_up_button" type="submit" value="가입">
                </div>
            </div>
        <div class="sign_up_privacy">By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a></div>
    </div>
</template>

<script>
    export default {
        name: "SignUp",
        data(){
            return{
                point: '#25b7d3'
            }
        }
    }
</script>

<style scoped>
    .sign_up{
        text-align: center;
    }
    .sign_up_el{
        display: table-cell;
        vertical-align: middle;
        width: 80%;
        height: 20%;
        margin: 5px;
    }
    .sign_up_input{
        background-color: #f9f9f9;
        width: 70%;
        height: 45%;
        border: solid #e3e3e3;
        border-radius: 4px;
    }
    .sign_up_button{
        margin-top: 10px;
        font-size: 15px;
        font-weight: bold;
        background-color: #25b6d2;
        border: none;
        color: white;
        width: 70%;
        height: 45%;
        border-radius: 4px;
    }
</style>
