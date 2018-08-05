<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>{{title}}</BreadcrumbItem>
                </Breadcrumb>

                <div style="min-height: 200px;">
                    <Card>
                        <img v-for="(item, index) in list" :src="item" width="100%" :class="(index==list.length-1 && flag)?'bg-blur':''">

                    </Card>

                    <Button v-show="flag" class="btn" type="primary" @click="flag=false" >
                        阅读更多
                    </Button>


                </div>



            </Content>

            <Footer class="layout-footer-center">2018 &copy; FindFun</Footer>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "v",
        data() {
            return {
                title: "标题",
                list: [
                    "http://game.gtimg.cn/images/hdl/cp/a20180731bbzt/bg3.jpg",
                    "http://game.gtimg.cn/images/hdl/cp/a20180731bbzt/bg3.jpg",
                    "http://game.gtimg.cn/images/hdl/cp/a20180731bbzt/bg3.jpg",
                ],
                flag:true
            }
        },
        computed: {},
        mounted: function () {
            console.log(this.$route.query)
        }
    }
</script>

<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-footer-center {
        text-align: center;
    }



    .bg {
        width: 100%;
        min-height: 10px;
        background-image: url('http://game.gtimg.cn/images/hdl/cp/a20180731bbzt/bg3.jpg');
        filter:blur(0px);
        color:#fff;
    }

    .bg-blur{
        -webkit-filter: blur(5px) contrast(.8) brightness(.8);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px) contrast(.8) brightness(.8);
        transition: 1.0s filter;
    }

    .btn{
        position: absolute;
        display: block;
        bottom: 10%;
        left: 45%;
        width: 10%;
        height: 50px;
        font-size:1.5em;
        -webkit-transform:translateY(-50%);
    }



</style>