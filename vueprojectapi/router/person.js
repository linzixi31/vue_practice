var db = require("../db/db");

module.exports = {
	reg: function(app){
		app.get('/person',function(req,res){

			var sql = "select * from `person`"
			db.select(sql,function(results){
                //console.log(results)
                res.send(results)
            });
		})
		app.post('/addperson',function(req,res){
			var sql = "INSERT INTO `person`.`person` (`name`, `describe`) VALUES ('"+ req.body.name
			+"', '"+ req.body.describe +"')"
			//console.log(req.body)
			db.select(sql,function(results){
				//console.log(results)
				res.send(results)
			})
		})
		app.post('/delperson',function(req,res){
			//console.log(req.body)
			var sql = "DELETE FROM `person`.`person` WHERE  `id`=" +req.body.id +"   LIMIT 1;"
			db.select(sql,function(results){
				//console.log(results)
				res.send(results)
			})
		})
		app.post('/selectperson',function(req,res){
			//console.log(req.body)
			var sql = "select * from `person` WHERE  `id`= " + req.body.id
			db.select(sql,function(results){
				//console.log(results)
				res.send(results)
			})
		})
		app.post("/updateperson",function(req,res){
			console.log(req.body)
			var sql = "UPDATE `person`.`person` SET `name`='"+req.body.name+"',`describe`='"+req.body.describe+"' WHERE  `id`="+req.body.id+"  LIMIT 1"
			db.select(sql,function(results){
				//console.log(results)
				res.send(results)
			})
		})
	}
}












































































