const Mock = require('mockjs');
const Random = Mock.Random;
const express = require('express');
const router = express.Router();

let overview = {
	"todayNewsNumber": Random.integer(1, 300),      //今日新闻量
	"todayLVNumber": Random.integer(1, 300),      //今日信访量
	"todayMaxNewsCountyName": Random.county(),  //今日新闻最多的区县名称
	"todayMaxLVCountyName": Random.county(),    //今日信访最多的区县名称
	"mainProblems": "空气质量" //主要问题类型
};

router.post('/overview', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": overview
	}));
});


module.exports = router;
