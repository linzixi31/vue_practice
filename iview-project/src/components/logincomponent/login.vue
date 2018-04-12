<template>
    <div style="background:#eee;padding: 20px;height:100%">
        <Card :style="{height:'300px',width:'400px',margin :'200px auto'}">
            <p slot="title">欢迎登陆</p>
            <Form ref="formInline" :model="formInline" :label-width="50">
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="Username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
    
</template>
<script>
import http from '../../utils/HttpClient.js'
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                var self = this
                this.$refs[name].validate((valid) => {
                    console.log(name)
                    http.post('user',self.formInline).then(res=>{
                        console.log(res)
                        if (res.token) {
                            window.localStorage.access_token=res.token
                            console.log(window.localStorage)
                            this.$router.push({path: '/index/product'});
                            this.$Message.success('Success!');
                        } else {
                            this.$Message.error('Fail!');
                        }
                    })
                    
                })

            }
        }
    }
</script>