
<template>
    <div class="window">
        <Row>
            <Col span="12">
            <img :src="img" ref="img">
            </Col>

            <Col span="12" class="win-right">
            <span ><p class="author">@Leoric   2018/1/26</p></span>
            <span ><h1 class="title">{{title}}</h1></span>
            <span ><p class="content" ref="content">
                {{content}}
            </p></span>
            </Col>

        </Row>

    </div>
</template>

<script>
    export default {
        name: "window",
        props:["img","title","content"],
        mounted:function () {  //加载数据和el之后执行
            let self = this
            setTimeout(function () {
                let h = self.$refs.img.offsetHeight - 75;

                self.$refs.content.style['-webkit-line-clamp']=Math.floor(h/18)

                //console.log(self.$refs.content.style['-webkit-line-clamp'] )

            }, 0)
        },
        data(){
            return{
            }
        }
    }
</script>

<style scoped>

    .window{
        margin: 1em 2em 1em 0.5em;
        padding-bottom: 2em;
        border-bottom: 1px solid rgb(229, 229, 229)
    }

    .window .win-right{
        padding-left: 1em;
        overflow:hidden;
    }

    .author{
        margin-top: 0.5em;
        font-size:small;
    }
    .title{
        margin-top: 0.3em;
        color: #1c2438;
        overflow:hidden;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        -webkit-text-overflow:ellipsis;
        -moz-text-overflow:ellipsis;
        white-space:nowrap;
    }
     .content{
        font-size:small;
         margin-top: 0.5em;
         word-break:break-all;
         display:-webkit-box;
         -webkit-line-clamp:3;
         -webkit-box-orient:vertical;
         overflow:hidden;
         line-height: 18px;
    }
   img{
        width: 100%;
        max-height: 300px;
    }


</style>