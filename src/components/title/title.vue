<template>
    <div class='title'>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        name:'titles',
        props: {
            title: {
                type: String,
            }
        }
    }
</script>

<style lang="less" scoped>
.title{
    width:100%;
    height:50px;
    line-height:50px;
    padding-left:10px;
    box-sizing: border-box;
    // padding:10px;
}
</style>