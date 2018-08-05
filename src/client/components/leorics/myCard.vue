
<template>
    <div class="myCard">
        <h3 class="title"><span class="text">{{title}}</span></h3>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "my-card",
        props:["title"]
    }
</script>

<style scoped>
    .myCard {
        margin:10px 10px 20px 10px;
        height: auto;
        width: 100%;
        border: 1px solid rgb(229, 229, 229);
        box-sizing: border-box;
    }

    .myCard .title {
        margin-top: -1em;
        line-height: 2em;
        padding: 0 1em;
        text-align: center
    }

    .myCard .title .text {
        padding: 0 1em;
        background-color: #f5f7f9;
    }

    .myCard img {
        width: 100%;
        padding: 0.5em 3em;
    }
    .myCard p{
        width: 100%;
        text-align: center;
        padding:0em 3em 0.5em 3em;
        font-size: medium;
    }

    .myCard content{

    }
    .myCard content Button{
        margin:  0em 0em 0.6em 0.5em;
    }


</style>