<template>
	<div>
        <form class="form-horizontal" role="form">
		  <div class="form-group">
		    <label for="name" class="col-sm-2 control-label">名字</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="name" value="dataform.name" v-model="dataform.name">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="describe" class="col-sm-2 control-label">事项</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="describe" value="dataform.describe" v-model='dataform.describe'>
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
	import http from '../../utils/HttpClient.js'
    export default {
       
       created(){
	       var self = this
	       http.post('selectperson',{id:self.$route.query.id}).then(res=>{
	       	console.log(res)
	       	this.$set(self.dataform, 'name', res.data.results[0].name)
	       	this.$set(self.dataform, 'describe', res.data.results[0].describe)
	       	//主要dataform的数据类型
	       	//https://cn.vuejs.org/v2/guide/list.html
	       })
       },
       data(){
        	return{
    			dataform:{},
        	}
        },
        methods:{
        	save(e){
        		e.preventDefault();
        		const content = '<p>保存成功</p>';
       			var self = this
       			this.$set(self.dataform, 'id', self.$route.query.id)
        		http.post('updateperson',self.dataform).then(res=>{
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
