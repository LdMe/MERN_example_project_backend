const router=require('express').Router();
const UserEditController = require('../Controller/User/UserEditController');
const UserShowController = require('../Controller/User/UserShowController');
const VerificationController = require('../Controller/User/VerificationController');
const verify = require('../Controller/User/VerificationController');


router.post('/user/edit',verify,function(req,res) {
	return UserEditController.edit(req,res);
});
router.get('/user/show',function(req,res) {
	return UserShowController.showAll(req,res);
});
router.get('/user/show/*', function(req,res) {
	return UserShowController.show(req,res);
});
module.exports= router;