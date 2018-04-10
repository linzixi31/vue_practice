<template>
	<div>
        <form class="form-horizontal" role="form">
		  <div class="form-group">
		    <label for="name" class="col-sm-2 control-label">名字</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="name" placeholder="请输入名字" v-model="dataform.name">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="describe" class="col-sm-2 control-label">事项</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="describe" placeholder="请输入事项" v-model='dataform.describe'>
		    </div>
		  </div>
		  <div class="form-group">
		    <div class="col-sm-offset-2 col-sm-10">
		      <button type="submit" class="btn btn-default" @click='save($event)'>保存</button>
		    </div>
		  </div>
		</form>   
 
	</div>
</template>
<script>
  import datagurd from '../datagurdcomponent/datagurd.vue'
  import http from '../../utils/HttpClient.js'
    export default {
       
        components:{
            datagurd
        },
        data(){
        	return{
    			dataform:{
    			}
        	}
        },
        methods:{
        	save(e){
                const content = '<p>保存成功</p>';
        		var self = this
        		e.preventDefault();
        		http.post('addperson',self.dataform).then(res=>{
        			console.log(res)
        			if(res.status){
        				this.$Modal.success({
                            content: content
                        });
        			}
        		})
        	}
        }

    }
</script>