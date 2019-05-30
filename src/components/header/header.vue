<template>
    <div>
        <header>
            <div class="title-left">VUWADMIN</div>
            <div class="title-right">
                <div>
                    <i>qwe</i>
                </div>
                <div>
                    <span>张某某</span>
                    <img src="@/assets/logo.png" alt="">
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name:"cnpheader"
}
</script>
<style lang="stylus" scoped>
    div
        header
            display: flex
            box-sizing: border-box
            // width: 100vw
            height: 60px
            background: #20a0ff
            line-height: 60px
            padding-right: 35px
            .title-left
                padding-left: 20px
                width: 210px
                border-right: 1px solid #5eb8de
                font-size:18px
                color: #fff
            .title-right
                flex:1
                display :flex
                justify-content :space-between
                align-items: center
                width: 100%
                box-sizing :border-box
                padding-left:22px
                div
                    display :flex
                    align-items :center
                    span
                        color: #fff
                        padding-right: 10px
                    img
                        width: 40px
                        height: 40px
                        border-radius: 50%
</style>

