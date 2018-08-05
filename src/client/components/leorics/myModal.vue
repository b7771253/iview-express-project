<template>
    <div :class="[visible?modalShow:modalHide,modal]" >
        <div class="modal-data">
            <p @click="value=false">一个很简单的模态对话框 </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-modal",
        data(){
            return{
                modalShow:'modalShow',
                modalHide:'modalHide',
                modal:'modal',
                visible:this.value
            }
        },
        props:{
            value:{
                type: Boolean,
                default: false
            }
        },
        watch:{
            value (val) {
                this.visible = val;
            },
        }
    }
</script>

<style scoped>
    /* 定义模态对话框外面的覆盖层样式 */
    .modal{
        position: absolute;   /* 使用绝对定位或固定定位  */
        left: 0px;
        top: 0px;
        width:100%;
        height:100%;
        text-align:center;
        z-index: 1000;
        background-color: #333;
        opacity: 0.5;   /* 背景半透明 */
    }
    .modalHide {
        visibility: hidden;
    }
    .modalShow {
        visibility: visible;
    }

    /* 模态框样式 */
    .modal-data{
        width:300px;
        margin: 100px auto;
        background-color: #fff;
        border:1px solid #000;
        padding:15px;
        text-align:center;
    }
</style>