<template>
    <datagurd api='listPage'></datagurd>    
</template>
<script>
  import datagurd from '../datagurdcomponent/datagurd.vue'
  import http from '../../utils/HttpClient.js'
    export default {
       
        components:{
            datagurd
        }
    }
</script>