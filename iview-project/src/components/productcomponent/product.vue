<template>
	<div>
        <button class='btn' @click='addproduct'>添加客户</button>        
        <datagurd api='person' delapi='delperson'></datagurd>    
	</div>
</template>
<script>
  import datagurd from '../datagurdcomponent/datagurd.vue'
  import http from '../../utils/HttpClient.js'
    export default {
       
        components:{
            datagurd
        },
        methods:{
        	addproduct(){
        		console.log(666)
        		this.$router.push('/index/addproduct')
        	}
        }

    }
</script>