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
                        <img v-for="(item, index) in list" :src="item" width="100%" :class="(index==list.length-1 && showFlag)?'bg-blur':''">

                    </Card>

                    <Button v-show="showFlag" class="btn" type="primary" @click="modalFlag=true" >
                        阅读更多
                    </Button>

                    <Modal
                            v-model="modalFlag"
                            title="請支持我們的網站，您的每一筆捐贈都會用於服務器建設"
                            @on-ok="ok" >
                        <p>二維碼</p>
                        <p>二維碼</p>
                        <p>二維碼</p>
                        <div slot="footer">
                            <Button type="dashed" size="large" long @click="modalFlag=false" >我沒有感情</Button>
                        </div>
                    </Modal>


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
                showFlag:true,
                modalFlag:false
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
        min-width: 10%;
        height: 50px;
        font-size:1.2em;
        -webkit-transform:translateY(-50%);
    }



</style>