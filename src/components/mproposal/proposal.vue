<template>
    <div class="proposal mWidth">
        <div class="pageName">
            <h4>{{pageName}}</h4>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="iphone">
                <el-input v-model="ruleForm.iphone" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item label="投诉公司" prop="company" v-if="type==2">
                <el-input v-model="ruleForm.company" placeholder="请输入投诉公司名称"></el-input>
            </el-form-item>
            <el-form-item :label=typeName prop="textarea" >
                <el-input
                type="textarea"
                :placeholder="'请输入'+typeName+'内容'"
                v-model="ruleForm.textarea"
                show-word-limit
                >
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import api from '@/api/api.js'
export default {
    props: ['type','pageName'],
    data () {
         var checkPhone = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('手机号不能为空'));
            } else {
            const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
            console.log(reg.test(value));
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入正确的手机号'));
            }
            }
        }
        return{
            typeName: '',
            ruleForm: {
                name:'',
                iphone: '',
                company: '',
                textarea: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                iphone: [
                    { required: true,validator: checkPhone, message: '请输入正确格式的手机号码', trigger: 'blur' }
                ],
                company: [
                    { required: true, message: '请输入投诉公司名称', trigger: 'blur' }
                ],
                textarea: [
                    { required: true, message: "请输入内容", trigger: 'blur' }
                ]
            }
        }
    },
    created() {
        if(this.type == 1){
            this.typeName = '建议'
        }
        if(this.type == 2){
            this.typeName = '投诉'
        }
        if(this.type == 3){
            this.typeName = '咨询'
        }

        this.rules.textarea[0].message = `请输入${this.typeName}内容`
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.sumbit()
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        async sumbit () {
            const params= {
                type: this.type,
                name: this.ruleForm.name,
                phone: this.ruleForm.iphone,
                company: this.ruleForm.company,
                title: this.ruleForm.textarea

            }
            const data = await this.https(api.inforadd(),params);
            if(data.code == '2000'){
                this.$message({
                    message: `${this.typeName}成功`,
                    type: 'success'
                });
                setTimeout(() => {
                    this.jump({path: '/'})
                }, 2000);
            }else{
                    this.$message.error(`${this.typeName}失败`);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './static/styles/global';
.proposal{
    padding:px2rem(20) px2rem(40) px2rem(20) 0;
    box-sizing: border-box;
    .pageName{
        text-align:  center;
        line-height: px2rem(40);
        font-size: px2rem(20);
    }
}
</style>


