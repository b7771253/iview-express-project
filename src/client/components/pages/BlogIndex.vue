<template>
    <Row>

        <Carousel v-model="cIndex" loop style="margin:2px">
        <CarouselItem>
            <div class="demo-carousel bg1">
                <div class="tag">2018/1/24</div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel bg2"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel bg3"></div>
        </CarouselItem>
    </Carousel>
        <Row style="margin-top: 5%">
            <Col span="16">

            <window :img="testImg2" :title="winTitle" :content="winContent"></window>
            <window :img="testImg" :title="winTitle" :content="winContent"></window>


            </Col>
            <Col span="8">
            <my-card title="About ME">
                <img src="./../../static/img/head.jpeg">
                <p>Leoric</p>
                <p>勤劳辛苦的小码农</p>
            </my-card>
            <my-card title="Contact ME">
                <content>
                    <Button type="ghost" icon="ios-email" >E-Mail</Button>
                    <Button type="ghost" icon="ios-chatbubble"  >WeChat</Button>
                    <Button type="ghost" icon="ios-list" >QQ</Button>
                </content>
            </my-card>

            <my-card title="TAG">
                <content >
                    <Button type="ghost">JavaScript</Button>
                    <Button type="ghost">HTML</Button>
                    <Button type="ghost" >CSS</Button>
                    <Button type="ghost" >Vue</Button>
                    <Button type="ghost" >iView</Button>
                    <Button type="ghost" >Webpack</Button>
                    <Button type="ghost" >Vuex</Button>
                    <Button type="ghost" >Tencent</Button>
                    <Button type="ghost" >Express</Button>
                </content>
            </my-card>

            </Col>
        </Row>

    </Row>
</template>

<script>
    import testImg2 from './../../static/img/head.jpeg';
    import testImg from '../../static/img/f10.jpg';
    import Card from "iview/src/components/card/card";
    import myCard from "./../leorics/myCard";
     import Window from "./../leorics/Window";
    export default {
        components: {
            Window,
            Card,myCard},
        data() {
            return {
                cIndex: 1,
                testImg:testImg,
                testImg2:testImg2,
                winTitle:'我本楚狂人，凤歌笑孔丘',
                winContent:'我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。                我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。                我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。我们一直在坚持着，不是为了改变这个世界，而是希望不被这个世界所改变。',
            };
        },
        beforeCreate:function () {
            this.$Message.config({
                top: 250,
            });
            this.loadingMsgFuc = this.$Message.loading({
                content: '拼命加载中...',
                duration: 0
            });

        },
        mounted:function () {
            setTimeout(this.loadingMsgFuc, 500);
        }
    }


</script>

<style scoped>
    .demo-carousel {
        height: 400px;
        width: 100%;
        position: relative
    }

    .demo-carousel .tag {
        position: absolute;
        right: 2%;
        bottom: 1%;
        font-size: medium;
        color: #dddee1;
    }


    .bg1 {
        background-image: url("./../../static/img/b1.jpg");
    }

    .bg2 {
        background-image: url("./../../static/img/b2.jpg");
    }

    .bg3 {
        background-image: url("./../../static/img/b3.jpg");
    }

</style>