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
                           :data="data1"
                           @on-row-click="click"
                    ></Table>
                </div>

                <Page :total="1000" style="padding: 2em"/>

            </Content>

            <Footer class="layout-footer-center">2018 &copy; FindFun</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: false,
                columns1: [
                    {
                        title: '标题',
                        key: 'name',
                    },
                    {
                        title: '上传时间',
                        key: 'age',
                        maxWidth:100
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods:{
            click:function (data,index) {
                console.log(data,index)
                this.$router.push({name: 'v',query:{ id:'1'}});
            }
        }
    }
</script>
