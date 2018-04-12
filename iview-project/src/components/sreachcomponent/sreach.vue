<template>
    <div class="form-group">
		    <label for="name" class="col-sm-2 control-label"><span>请输入用戶名搜索</span></label>
		    <div class="col-sm-5">
		      <input type="text" class="form-control" value="dataform.name" v-model='dataform.name' @keyup="show($event)">
		    </div>
           
            <table cellspacing="0" cellpadding="0" border="0" class="table">
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
		  </div> 
</template>
<script>
    import http from '../../utils/HttpClient.js'
    export default {
       
        components:{
          
        },
        data(){
            return{
                dataform:{},
                data:{}
            }
        },
        methods:{
            show(e){
                var self = this
                console.log(self.dataform,e.timeStamp)
                var lastTime = event.timeStamp
                if(Object.keys(self.dataform).length==0 || self.dataform.name.length===0){
                        return false 
                     
                }
               
                setTimeout(function(){
                    
                    if(lastTime - e.timeStamp == 0){
                        if(self.dataform.name.length===0){
                            return false
                        }
                        http.post('sreachperson',self.dataform).then(res=>{
                            console.log(res)
                            if(res.data.results.length!==0){
                            self.data = res.data.results
                            }
                        }) 
                    }
                },800)
                
            }
        }

            
    }
</script>
