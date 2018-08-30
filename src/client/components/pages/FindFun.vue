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
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>主页</BreadcrumbItem>
                </Breadcrumb>

                <div style="min-height: 200px;">
                    <Table
                            border
                            :loading="loading"
                            :columns="columns1"
                            :data="titleList"
                            @on-row-click="click"
                    ></Table>
                </div>


                <Page :total="total" @on-change="choosePage" style="padding: 2em"/>

            </Content>

            <Footer class="layout-footer-center">2018 &copy; FindFun</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                page: 1,
                loading: false,
                columns1: [
                    {
                        title: '标题',
                        key: 'title',
                    }
                ],
                titleList: [],
                total: 0,
            }
        },
        mounted: function () {
            this.getTitleList()
        },
        computed: {},
        methods: {
            click: function (data, index) {
                console.log(data, index)

                this.$router.push({name: 'v', query: {id: data.id}});
            },
            getTitleList: function () {

                let v = this
                v.loading = true

                this.$axios.get('/api/getTitleList', {
                    params: {
                        page: this.page
                    }
                })
                    .then(function (response) {
                        console.log(response);
                        v.titleList = response.data.list
                        v.total = response.data.total
                        v.loading = false

                    })
                    .catch(function (error) {
                        console.log(error);
                        v.loading = false

                    });

            },
            choosePage: function (n) {
                console.log(n)
                this.page = n
                this.getTitleList()
            }
        }
    }
</script>
