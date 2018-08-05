<style scoped>
    .logo {
        margin-top: 20px;
        margin-bottom: -30px;
        height: 60px;
    }
    .index-btn{
        border: none;font-size: 1.3em;margin-right: 0.5em
    }
</style>
<template >

    <div class="layout" >

        <Layout :style="{minHeight: '100vh'}">


            <Layout>


                <Header :style="{background: '#fff',minHeight:'80px', boxShadow: '0px 2px 3px 2px rgba(0,0,0,.1)'}">
                    <Row type="flex" justify="center" align="bottom" class="code-row-bg">
                        <i-col span="5">
                        <img class="logo" :src="logoSrc"></i-col>
                    </Row>

                </Header>
                <Affix>
                <Header :style="{background: '#fff',minHeight:'50px', boxShadow: '0px 2px 3px 2px rgba(0,0,0,.1)'}">
                    <Row type="flex" justify="start" align="middle" class="code-row-bg" style="margin-left:20%">
                        <i-col  span="16">
                        <ButtonGroup size="large" style="margin-top: 0.6em" >
                            <Button type="ghost" class="index-btn" @click="toLink('')">首页</Button>
                            <Button type="ghost" class="index-btn"  @click="toLink('pic')">图片</Button>
                            <Button type="ghost" class="index-btn" @click="toLink('pic')">文章</Button>
                            <Button type="ghost" class="index-btn" @click="toLink('pic')">友链</Button>
                            <Button type="ghost" class="index-btn" @click="toLink('pic')">代码</Button>
                        </ButtonGroup>
                        </i-col>

                        <i-col span="8">
                        <i-input style="width: 100%;float:right;margin-left:30%;" >
                        <Button slot="append" icon="ios-search"></Button>
                        </i-input>
                        </i-col>
                    </Row>
                </Header>
                </Affix>


                    <card  :style="{padding: '1.5% 0% 1.5%'}">

                        <router-view></router-view>

                    </card>



            </Layout>

            <Footer style="text-align: center">2018 &copy; Leoric Power By Vue</Footer>

        </Layout>

    </div>

</template>
<script>
    import logoSrc from '../static/img/logo.png';
    import ICol from "iview/src/components/grid/col";
    import Card from "iview/src/components/card/card";

    export default {
        components: {
            Card,
            ICol
        },
        data() {
            return {
                logoSrc: logoSrc,
            };
        },
        computed: {
        },
        methods:{
            toLink:function (link) {
                this.$router.push({path:'/blog/'+link})
            },
            handleReachBottom:function () {
                console.log(1)
            }
        }
    }
</script>