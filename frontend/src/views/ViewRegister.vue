<template>
    <div class="view_register">
        <SignUp/>
    </div>
</template>

<script>
    import SignUp from "../components/SignUp";
    export default {
        name: "ViewRegister",
        components: {SignUp}
    }
</script>

<style scoped>
    .view_register{
        text-align: center;
    }
</style>
