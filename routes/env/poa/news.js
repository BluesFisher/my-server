const Mock = require('mockjs');
const Random = Mock.Random;
const express = require('express');
const router = express.Router();

let today_hot_topic = [];
let stat30DaysCountyBillboard = [];
let stat30DaysTrendBillboard = [];
let stat30DaysClassifyBillboard = [];
let stat30DaysPopWord = [];

makeStat30DaysPopWord = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"popWord": Random.cword(2, 3),    //新闻热词
			"popScore": Random.integer(1, 100),                         //新闻热度
		};
		aimData.push(demo);
	}
};

makeStat30DaysClassifyBillboard = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"classify": Random.cword(3, 5),  //新闻分类
			"poCount": Random.integer(1, 300),                          //新闻数量
			"percent": Random.integer(1, 100)/100     //百分比
		};
		aimData.push(demo);
	}
};

makeStat30DaysTrendBillboard = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"puttime": Random.datetime('yyyy-MM-dd'),  //新闻日期
			"poCount": Random.integer(1, 300),                          //新闻数量
		};
		aimData.push(demo);
	}
};

makeStat30DaysCountyBillboard = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"county": Random.county(),  //新闻区县
			"poCount": Random.integer(1, 300),                        //新闻数量
		};
		aimData.push(demo);
	}
};

makeTodayHotTopic = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"url": Random.url(),  //链接
			"title": Random.ctitle(6, 10), //标题
			"degree": Random.string('number', 1, 1),     //严重程度
			"date": Random.datetime('yyyy-MM-dd'),   //日期
			"order": Random.string('number', 1, 2),     //排名
		};
		aimData.push(demo);
	}
};

makeStat30DaysPopWord(stat30DaysPopWord, 10);
makeStat30DaysClassifyBillboard(stat30DaysClassifyBillboard, 10);
makeStat30DaysTrendBillboard(stat30DaysTrendBillboard, 10);
makeStat30DaysCountyBillboard(stat30DaysCountyBillboard, 10);
makeTodayHotTopic(today_hot_topic, 10);

router.post('/stat30DaysPopWord', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": stat30DaysPopWord
	}));
});

router.post('/stat30DaysClassifyBillboard', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": {
			"poTotal": Random.integer(1, 300),
			"rows": stat30DaysClassifyBillboard
		}
	}));
});

router.post('/stat30DaysTrendBillboard', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": stat30DaysTrendBillboard
	}));
});

router.post('/stat30DaysCountyBillboard', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": stat30DaysCountyBillboard
	}));
});

router.post('/today_hot_topic', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": {
			"curpage" :0,         //当前分页
			"pagesize": Random.integer(1, 20),        //每页数量
			"total": Random.integer(20, 40),         //总的数据数量
			"rows": today_hot_topic
		}
	}));
});

router.post('/30today_hot_topic', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": overview
	}));
});


module.exports = router;
