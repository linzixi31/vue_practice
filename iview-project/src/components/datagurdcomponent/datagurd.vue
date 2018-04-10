<template>
	    <table cellspacing="0" cellpadding="0" border="0" class="table" >
	    	<thead>
	    			<th v-for="(key,value) in data[0]" >{{value}}</th>
	    	</thead>
	    	<tbody class="ivu-table-tbody">
	    		<tr v-for="(item,idx) in data" :key='item.id' >
	    			<td v-for="(vals,key) in item" >
	    				{{vals}}
	    			</td>
	    			<td>
	    				<button type='button' class='btn btn-danger' @click='deletedata($event,item.id,idx)'>删除</button>
	    				<button type='button' class='btn' @click="redact($event,item.id)">编辑</button>
	    			</td>
	    		</tr>
	    	</tbody>
	    		
	    </table>
</template>
<script>
	import http from "../../utils/HttpClient.js"

    export default {
    		
    	    props:['api','delapi'],
    		data(){
    			return{
    				data:[]
    			}
    		},
    		created(){
	            console.log(666)
	        	http.get(this.api).then(res=>{
	                
	                this.data = res.data.results 
	                console.log(this.data)
	            })
        	},
        	methods:{
        		deletedata(e,id,idx){
        			console.log(e,idx)
        			this.data.splice(idx,1)
        			http.post(this.delapi,{id:id}).then(res=>{
        				console.log(res)
        			})
        		},
        		redact(e,id){
        			this.$router.push({
        				path:'/index/redact',
        				query: {id: id}
        			})
        		}
        	}

        }
</script>
