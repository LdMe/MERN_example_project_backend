const user= require('../../Model/user');
const config = require('../../Config/config');
const UserShowController= {
	showAll: function(req,res){
		//if(req.session.username){
			user.find().exec(function(err,users){
				if(err){
					return res.status(401).send(err);
				}
				return res.send(users);
			});
		//}
		
		
	},
	show: function(req,res){
		let temp =req.originalUrl.split("user/show/");
		let url= temp[temp.length - 1];
		url=config.ObjectId(url.split("/")[0]);
		let username = req.session.username;
		console.log(url);
		user.findOne({_id: config.ObjectId(url)},function(err,users){
				if(err){
					return res.status(500).send("could not search users");
				}
				if(!users){
					return res.status(204).send("no user found")
				}
				return res.send(users);
			
		});
	}
}
module.exports=UserShowController;