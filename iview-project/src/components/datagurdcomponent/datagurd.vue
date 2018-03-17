<template>
	<div>
	    <table>
	    	<thead>
	    			<th v-for="(key,value) in data[0]">{{value}}</th>
	    	</thead>
	    	<tbody>
	    		<tr v-for="(key,item) in data">
	    			<td v-for="(key,value) in key">
	    				{{key}}
	    			</td>
	    		</tr>
	    	</tbody>
		    	
		    		
	    		
	    </table>
	    
	</div>
</template>
<script>
	import http from "../../utils/HttpClient.js"
    export default {
    		
    	    props:['api'],
    		data(){
    			return{
    				data:null
    			}
    		},
    		mounted(){
	            console.log(666)
	        	http.get(this.api).then(res=>{
	                
	                this.data = res.data.results
	                console.log(this.data)
	            })
        	}
        }
</script>
