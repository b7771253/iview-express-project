<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <MenuItem name="1">
                        <Icon type="md-person"/>
                        <span>{{ua}}</span>
                        <Button @click="uaEditFlag=true">修改</Button>
                        <Modal
                                v-model="uaEditFlag"
                                title="修改您的用戶標誌"
                        >
                            <Input v-model="ua"/>
                            <div slot="footer">
                                <Button type="primary" size="large" long @click="uaEditFlag=false;saveUserInfo()">確定
                                </Button>
                            </div>
                        </Modal>


                    </MenuItem>


                    <div style="float: right" v-if="isAdmin==99">
                        <Button type="primary" @click="createArticle()">創建文章</Button>
                        <span>      &nbsp;&nbsp;&nbsp;        </span>

                        <i-switch size="large" v-model="isEdit">
                            <span slot="open">编辑</span>
                            <span slot="close">预览</span>
                        </i-switch>
                    </div>


                </Menu>


            </Header>
            <div  class="demo-spin-container">
                <Content :style="{padding: '0 50px'}" v-if="isEdit">
                    <br>
                    <h2>編輯模式</h2>
                    <br>
                    <h3>標題 ：<Input style="width: auto" v-model="title"/></h3>
                    <br>

                    <h3>正文 ： </h3>

                    <br>
                    <div v-for="(item,index) in data1">
                        <i-input v-model="item.content">
                            <Select v-model="item.type" slot="prepend" style="width: 80px">
                                <Option value="0">文字</Option>
                                <Option value="1">圖片</Option>
                            </Select>
                            <Button slot="append" @click="data1.splice(index,1)"> -</Button>

                        </i-input>
                        <br>
                    </div>
                    <Button @click="data1.push({type:0,content:''})"> +</Button>


                    <br><br><br>

                    <h3>隱藏部分 ： </h3>
                    <br>

                    <div v-for="(item,index) in data2">
                        <i-input v-model="item.content">
                            <Select v-model="item.type" slot="prepend" style="width: 80px">
                                <Option value="0">文字</Option>
                                <Option value="1">圖片</Option>
                                <Option value="2">種子</Option>
                            </Select>
                            <Button slot="append" @click="data2.splice(index,1)"> -</Button>

                        </i-input>
                        <br>
                    </div>
                    <Button @click="data2.push({type:0,content:''})"> +</Button>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>


                    <Button long type="success" :loading="saveLoading" @click="save()"> 提交</Button>


                    <br>


                </Content>
                <Content :style="{padding: '0 50px'}" v-if="!isEdit">
                    <Breadcrumb :style="{margin: '20px 0'}">
                        <BreadcrumbItem to="/main">回到首頁</BreadcrumbItem>
                        <BreadcrumbItem>{{title}}</BreadcrumbItem>
                    </Breadcrumb>


                    <div style="min-height: 200px;">

                        <Card>

                            <div v-for="(item, index) in data1">

                                <img v-if="item.type==1" :src="item.content" width="100%"
                                     :class="(index==data1.length-1 && showFlag)?'bg-blur':''">

                                <h5 v-if="item.type==0">{{item.content}}</h5>

                            </div>

                            <!--<img v-for="(item, index) in list" :src="item" width="100%"-->
                            <!--:class="(index==list.length-1 && showFlag)?'bg-blur':''">-->
                            <div v-if="!showFlag" v-for="(item, index) in data2">

                                <img v-if="item.type==1" :src="item.content" width="100%">

                                <h5 v-if="item.type==0">{{item.content}}</h5>

                            </div>

                        </Card>

                        <Button v-show="showFlag" class="btn" type="primary" @click="modalFlag=true">
                            阅读更多
                        </Button>

                        <Modal
                                v-model="modalFlag"
                                title="請支持我們的網站，您的每一筆捐贈都會用於服務器建設"
                        >
                            <p>二維碼</p>
                            <p>二維碼</p>
                            <p>二維碼</p>
                            <div slot="footer">
                                <Button type="dashed" size="large" long @click="modalFlag=false">我沒有感情</Button>
                            </div>
                        </Modal>


                    </div>


                </Content>
                <Spin fix size="large"  v-if="loading"></Spin>
            </div>

            <br>
            <Footer class="layout-footer-center">2018 &copy; FindFun</Footer>
        </Layout>


    </div>
</template>

<script>
    export default {
        name: "v",
        data() {
            return {
                loading: false,
                uaEditFlag: false,
                ua: "",
                saveLoading: false,
                title: "标题",
                data1: [],
                data2: [],
                showFlag: true,
                modalFlag: false,
                isEdit: false,
                isAdmin: 0,
            }
        },
        computed: {},
        mounted: function () {
            this.aid = this.$route.query.id

            this.getUserInfo()

            this.getArticle()


        },
        methods: {
            getArticle: function () {

                let v = this

                v.loading = true

                this.$axios.get('/api/getArticle', {
                    params: {
                        id: this.aid,
                        ua: this.ua
                    }
                })
                    .then(function (response) {
                        console.log(response);
                        v.loading = false
                        let code = response.data.code
                        if (code == -1) {
                            v.$router.push({name: 'index'});
                        }
                        if (code == 99) {
                            v.isEdit = true
                        }
                        v.isAdmin = response.data.code
                        v.data1 = response.data.data1
                        v.data2 = response.data.data2
                        if (v.data2) {
                            v.showFlag = false
                        }
                        v.title = response.data.title

                    })
                    .catch(function (error) {
                        console.log(error);
                        v.loading = false
                    });

            },
            getUserInfo: function () {
                let ua = localStorage.getItem("ua")
                if (!ua) {
                    ua = btoa(navigator.userAgent).substr(0, 10)
                    let tmp = new Date().getTime()
                    ua = Math.ceil(parseInt(ua, 36) * Math.random()).toString(36) + tmp.toString(36)
                    ua = ua.toUpperCase()
                    localStorage.setItem("ua", ua)
                }
                this.ua = ua
                console.log(ua)
            },
            saveUserInfo: function () {
                localStorage.setItem("ua", this.ua)
                this.$router.go(0)
            },
            save: function () {
                let v = this
                v.saveLoading = true
                this.$axios.post('/api/saveArticle', {
                    id: this.aid,
                    ua: this.ua,
                    data1: this.data1,
                    data2: this.data2,
                    title: this.title
                })
                    .then(function (response) {
                        console.log(response);
                        v.saveLoading = false
                        let code = response.data.code
                        if (code == 0) {
                            v.$Message.success('保存成功');
                        } else {
                            v.$Message.error('保存失败');
                        }

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            createArticle: function () {
                let v = this
                this.$axios.get('/api/addArticle')
                    .then(function (response) {
                        let id = response.data.id
                        console.log(id);
                        v.$router.push({name: 'v', query: {id: id}});
                        v.$router.go(0)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            },

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

    .bg-blur {
        -webkit-filter: blur(5px) contrast(.8) brightness(.8);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px) contrast(.8) brightness(.8);
        transition: 1.0s filter;
    }

    .btn {
        position: absolute;
        display: block;
        bottom: 10%;
        left: 45%;
        min-width: 10%;
        height: 50px;
        font-size: 1.2em;
        -webkit-transform: translateY(-50%);
    }
    .demo-spin-container{
        display: inline-block;
        min-height: 400px;
        position: relative;
        border: 1px solid #eee;
    }


</style>