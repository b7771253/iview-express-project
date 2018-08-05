<template>
    <Form :model="formItem" :label-width="80">

        <!--<FormItem label="Select">-->
        <!--<Select v-model="formItem.select">-->
        <!--<Option value="beijing">New York</Option>-->
        <!--<Option value="shanghai">London</Option>-->
        <!--<Option value="shenzhen">Sydney</Option>-->
        <!--</Select>-->
        <!--</FormItem>-->
        <!--<FormItem label="DatePicker">-->
        <!--<Row>-->
        <!--<Col span="11">-->
        <!--<DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>-->
        <!--</Col>-->
        <!--<Col span="2" style="text-align: center">-</Col>-->
        <!--<Col span="11">-->
        <!--<TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>-->
        <!--</Col>-->
        <!--</Row>-->
        <!--</FormItem>-->

        <!--<FormItem label="Checkbox">-->
        <!--<CheckboxGroup v-model="formItem.checkbox">-->
        <!--<Checkbox label="Eat"></Checkbox>-->
        <!--<Checkbox label="Sleep"></Checkbox>-->
        <!--<Checkbox label="Run"></Checkbox>-->
        <!--<Checkbox label="Movie"></Checkbox>-->
        <!--</CheckboxGroup>-->
        <!--</FormItem>-->
        <!--<FormItem label="Switch">-->
        <!--<i-switch v-model="formItem.switch" size="large">-->
        <!--<span slot="open">On</span>-->
        <!--<span slot="close">Off</span>-->
        <!--</i-switch>-->
        <!--</FormItem>-->
        <!--<FormItem label="Slider">-->
        <!--<Slider v-model="formItem.slider" range></Slider>-->
        <!--</FormItem>-->

        <FormItem label="IDIP URL">
            <Input v-model="formItem.url" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                   placeholder="Enter URL"></Input>
        </FormItem>

        <FormItem label="环境">
            <RadioGroup v-model="formItem.radio">
                <Radio label="former">正式</Radio>
                <Radio label="test">测试</Radio>
            </RadioGroup>
            <Button type="primary" @click="submit()">提交</Button>
            <Spin fix v-if="submiting">正在提交...</Spin>
        </FormItem>
        <FormItem label="结果">
            <Input v-model="formItem.result" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder=""></Input>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data() {
            return {
                submiting: false,
                formItem: {
                    url: '',
                    radio: 'former',
                    time: '',
                    result: ''
                }
            }
        },
        methods: {
            submit: function () {
                let that = this;
                that.submiting = true;
                setTimeout(function () {
                    that.submiting = false;
                }, 3000)


                this.$axios.get('http://api.game.qq.com/studio/group_g/pubgm/a20180117insure/Insure.php',
                    {})
                    .then(function (res) {
                        console.log(res)
                    })
                    .catch(function (res) {
                        console.log(res)
                    })


            }
        }
    }
</script>