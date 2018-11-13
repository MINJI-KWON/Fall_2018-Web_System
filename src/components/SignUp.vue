<template>
    <div class="sign_up">
        <div class="sign_up_box">
            <div class="sign_up_el">
                <div class="sign_up_logo" align="center">
                    <h1>Service Name or Logo</h1>
                </div>
                <div class="sign_up_input_box">
                    <input class="sign_up_input" type="text" placeholder="사용자 ID" name="user_ID" required>
                </div>
                <div class="sign_up_input_box">
                    <input class="sign_up_input" type="text" placeholder="사용자 이름" name="user_name" required>
                </div>
                <div class="sign_up_input_box">
                    <input class="sign_up_input" type="password" placeholder="비밀번호" name="user_psw" required>
                </div>
                <div class="sign_up_input_box">
                    <input class="sign_up_input"  type="password" placeholder="비밀번호 확인" name="user_psw-repeat" required>
                </div>
                <div class="sign_up_input_box">
                    <input class="sign_up_button" type="submit" value="가입">
                </div>
            </div>
        </div>
        <div class="sign_up_privacy">By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a></div>
    </div>
</template>

<script>
    export default {
        name: "SignUp"
    }
</script>

<style scoped>
    h1{
        color: #6bbdfa;
        margin-bottom: 75px;
    }
    .sign_up{
        background-color: #f9f9f9;
        height: 600px;

    }
    .sign_up_box{
        display: table;
        position:relative;
        border: solid #e3e3e3;
        width: 30%;
        height: 100%;
        background-color: white;
        border-radius: 4px;
    }
    .sign_up_el{
        display: table-cell;
        vertical-align: middle;
        width: 80%;
        height: 20%;
        margin: 5px;
    }
    .sign_up_input_box{
        display: block;
        text-align: center;
        width: 100%;
        height: 10%;
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
        background-color: #6bbdfa;
        border: none;
        color: white;
        width: 70%;
        height: 45%;
        border-radius: 4px;
    }
    .sign_up_privacy{
        background-color: #f9f9f9;
    }
</style>