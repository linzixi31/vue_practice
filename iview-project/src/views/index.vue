<style >
html,body{height:100%; width:100%; overflow:hidden; margin:0;
padding:0;

}
body>div{
   height:100%; width:100%; 
}
   .layout{
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height:100%; width:100%;
    } 

    
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background:#363f50;
        border-radius: 3px;
        float: left;
        position: relative;
        p{
           color:#fff; 
           font-size: 24px;
        }
        
    }
    .layout-avatar{
        width: 160px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>
<template>

    <div class="layout">
        <Header :style="{background: '#363f50', boxShadow: '0 2px 3px 2px '}">
               <div class="layout-logo">
                   <p>YCGERP</p>
               </div>
               <div class="demo-avatar layout-avatar">
                    <Avatar icon="person" size="large" />
                    <Dropdown style="margin-left: 20px" @on-click='out()'>
                        <Button type="primary">
                            <span>{{username}}</span>
                            <Icon type="arrow-down-b"></Icon>
                        </Button>
                        <DropdownMenu slot="list" >
                            <DropdownItem>设置</DropdownItem>
                            <DropdownItem >退出</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
        </Header>
       <Layout>
       
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">

            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select='route'>
                
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        用户列表
                    </template>
                    <MenuItem name="1-1">用户</MenuItem>
                    <MenuItem name="1-2">搜索用户</MenuItem>
                    <!-- <MenuItem name="1-3">Option 3</MenuItem> -->
                </Submenu>
                <!-- <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </template>
                    <MenuItem name="2-1">Option 1</MenuItem>
                    <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </template>
                    <MenuItem name="3-1">Option 1</MenuItem>
                    <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu> -->
            </Menu>
        </Sider>
        </Layout>
        <Layout :style="{marginLeft: '200px',height:'100%'}">
            
            <Content :style="{padding: '0 16px 16px' }">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <router-view></router-view> 
                </Card>
                <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
            </Content>
             
        </Layout>
    </div>
</template>
<script>
    import './index.css';
    import router from '../router.js'
    import http from '../utils/HttpClient.js'
    export default {
        mounted(){
            console.log(this.$store)
            http.get('username',{token:window.localStorage.getItem('access_token')}).then(res=>{
                this.username = res.user
            })
        },
        data(){
            return {
                name:'',
                username:""
            }
        },
        methods: {
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            },
            changepage(e){
                console.log(e)
            },
            route(e){
                switch(e){
                    case '1-1' :
                    this.$router.push(
                            {
                                path:'/index/product'
                            }
                        )
                    break
                    case '1-2' :
                    this.$router.push(
                            {
                                path:"/index/sreach"
                            }
                        )
                    break

                }
            },
            out(){

                window.localStorage.removeItem('access_token')
                this.$router.push(
                    {
                        path:"/login"
                    }
                )
            }
        }
    }
</script>
