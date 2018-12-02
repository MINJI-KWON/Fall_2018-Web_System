<template>
    <div class="view_login">
        <Login/>
    </div>
</template>


<script>
    import Login from "../components/Login";
    export default {
        name: "ViewLogin",
        components: {Login},
        comments: Login
    }
</script>

<style scoped>
    .view_login{
        text-align: center;
    }
</style>
