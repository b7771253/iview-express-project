<template>
    <Scroll  :on-reach-bottom="loadMorePic" :height="600" :distance-to-edge="[-10,-10]">
    <Row type="flex" justify="center" align="top" class="code-row-bg" style="padding:1%">
        <i-col span="6" v-for="oneList in pics" ref="list">
            <img :src="one" v-for="one in oneList" @click="openPic(one)" class="list-img">
        </i-col>
        <Modal :value="showBig" >
            <img :src="bigOne">
        </Modal>

    </Row>
    </Scroll>

</template>

<script>
    import ICol from "iview/src/components/grid/col";
    import pic1 from "../../static/img/b1.jpg";
    import pic2 from "../../static/img/f6.jpg";
    import pic3 from "../../static/img/logo.png";
    import pic4 from "../../static/img/head.jpeg";
    import Footer from "iview/src/components/layout/footer";
    import MyModal from "../leorics/myModal";

    let throttle = function (fn, delay) {
        let timer = null;

        return function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn();
            }, delay);
        }
    };

    let that;

    export default {
        components: {
            MyModal,
            Footer,
            ICol},
        name: "pic-index",
        data() {
            return {
                pics: [],
                getPics: [],
                scrollToBottom: true,
                showBig: false,
                bigOne: true,
            }
        },
        computed: {
            getIndex: function (str) {
                return 'list' + str;
            },
            pHeight:function () {

                return
            }
        },
        beforeCreate: function () {
            this.$Message.config({
                top: 250,
            });
            this.loadingMsgFuc = this.$Message.loading({
                content: '拼命加载中...',
                duration: 0
            });
        },
        beforeMount: function () {
            let pics = [];
            for (let i = 0; i < 4; i++) {    //模拟后台给的图片数组
                pics.push.apply(pics, [pic1, pic2, pic3, pic4])
            }
            let pList1, pList2, pList3, pList4;
            pList1 = [pic1]
            pList2 = [pic2]
            pList3 = [pic3]
            pList4 = [pic4]
            this.pics = [pList1, pList2, pList3, pList4];
        },
        mounted: function () {
            that = this;
            setTimeout(that.loadingMsgFuc, 500);

        },
        destroyed: function () {

         },
        methods: {
            loadMorePic: throttle(function () {
                that.loadingMsgFuc = that.$Message.loading({
                    content: '拼命加载中...',
                    duration: 0
                });
                that.getPics = [pic1, pic2, pic3, pic4, pic1, pic2, pic3, pic4];
                setTimeout(that.loadingMsgFuc, 500);

                that.loadOnePic();

            }, 200),
            loadOnePic: function () {
                if (this.getPics.length <= 0) {
                    return;
                }
                let one = this.getPics.pop();
                let min = 99999, min_i = 0;
                that.$refs.list.map(function (v, i) {
                    if (v.$el.offsetHeight < min) {
                        min = v.$el.offsetHeight;
                        min_i = i;
                    }
                })
                this.pics[min_i].push(one);
                setTimeout(this.loadOnePic, 0)
            },
            openPic: function (one) {
                this.showBig = true;
                this.bigOne = one;
                console.log(one)
            }
        }
    }

</script>

<style scoped>
    .list-img {
        width: 100%;
        padding: 0.8em;
        cursor: pointer;
        transition: all 0.3s;
    }

    .list-img:hover {
        transform: scale(1.05);
        padding: 0.0em;
        -webkit-box-shadow: 0 0 10px forestgreen;
        border: 1px solid green;
    }

    .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
    .ivu-modal-body{
        width: 1000px;
    }


    .vertical-center-modal img{
        width: 100%;
        /*max-width: 800px;*/
    }


</style>