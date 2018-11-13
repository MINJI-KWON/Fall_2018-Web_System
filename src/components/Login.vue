<template>
    <div class="login">
        <div class="login_bar">
                <div class="login_bar_el">
                    <form  v-on:submit.prevent="form_login">
                        <input class="input_id_pw" v-model="ID" type="text" placeholder="아이디"/>
                        <input class="input_id_pw" v-model="Password" type="text" placeholder="비밀번호"/>
                        <input id="login_button" type="submit" value="로그인">
                    </form>
                </div>
                <div class="login_bar_el" id=register_button><p class="content"><router-link to="/register">회원가입</router-link></p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    .login_bar{
        position:absolute;
        border: solid #6bbdfa;
    }

    .login_bar_el{
        display:inline-table;
        float: left;
        margin: 3px;
    }

    #login_button{
        background-color: white;
        color: #6bbdfa;
        font-weight: bold;
        cursor: pointer;
        margin: 1px;
    }

    #register_button a:link{
        font-size: small;
        font-weight: bold;
        color: #6bbdfa;
        text-decoration: none;
    }
    #register_button a:visited{
        color: #6bbdfa;
        text-decoration: none;
    }
    #register_button a:hover{
        color: black;
        text-decoration: underline;
    }

    .input_id_pw{
        margin: 1px;
        padding: 2px;
    }

    .content{
        margin:5px;
    }
</style>