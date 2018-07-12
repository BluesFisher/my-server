const Mock = require('mockjs');
const Random = Mock.Random;
const express = require('express');
const router = express.Router();

let stat30DaysPollutionCategory = [];
let stat30DaysHandlingStatistics = {
	"complaintSum": Random.string('number', 2, 3),
	"transactSum":  Random.string('number', 2, 3),
	"similarCompare": Random.string('number', 1, 2) + "%",
	"annularCompare": Random.string('number', 1, 2) + "%",
};

let stat30dayscounty = [];
let sourcestatistics = [];
let ComplaintComplaintList = [];
let getLettersTSResult = [];
let getLettersSSResult = [];
let today_lv_hotspot = [];

makeTodayLvHotspot = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"url": Random.url(),  //链接
			"title": Random.ctitle(10, 20)  //标题
		};
		aimData.push(demo);
	}
};

makeGetLettersSSResult = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"company": Random.cword(4, 6),    //涉事公司
			"tscount": Random.integer(0, 300),      //被投诉量
			"completedcount": Random.integer(1, 200)     //处理量
		};
		aimData.push(demo);
	}
};

makeGetLettersTSResult = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"ptttime": Random.datetime('yyyy/MM/dd'),  //来信时间
			"url": Random.url(),  //新闻url
			"pollutionCategory": Random.cword(2, 4),   //原因
			"transactUnit": Random.cword(4, 6),  //办理单位
			"status": Mock.mock({"stat|1": ["已处理", "未处理", "处理中", "不受理"]}).stat,     //办理状态
			"samecount": Random.integer(1, 500),      //相似内容数量
			"content": Random.csentence()   //内容
		};
		aimData.push(demo);
	}
};

makeComplaintComplaintList = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"id": Random.id(),  //主键唯一数据标识
			"plid ": Random.id(),  //信访事件ID
			"title": Random.ctitle(4, 8),  //信访投诉标题
			"ptttime": Random.datetime('yyyy/MM/dd'),  //信访投诉时间
			"pollutionCategory": Random.cword(2, 3),  //污染类别
			"status": Mock.mock({"stat|1": ["已处理", "未处理", "处理中", "不受理"]}).stat,
			"transactUnit": Random.cword(4, 8),  //办理单位
			"source": Random.cword(4, 6),  //来源
		};
		aimData.push(demo);
	}
};

makeStat30DaysPollutionCategory = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"pollutionCategory": Random.csentence(),
			"num": Random.string('number', 1, 3),
		};
		aimData.push(demo);
	}
};

makeStat30dayscounty = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"countyname": Random.cword(2, 5),
			"num": Random.integer(1, 600),
		};
		aimData.push(demo);
	}
};

makeSourceStatistics = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"source": Random.cword(4, 9),
			"num": Random.string('number', 1, 3),
		};
		aimData.push(demo);
	}
};

makeTodayLvHotspot(today_lv_hotspot, 10);
makeGetLettersSSResult(getLettersSSResult, 10);
makeGetLettersTSResult(getLettersTSResult, 7);
makeComplaintComplaintList(ComplaintComplaintList, 10);
makeStat30DaysPollutionCategory(stat30DaysPollutionCategory, 5);
makeStat30dayscounty(stat30dayscounty, 10);
makeSourceStatistics(sourcestatistics, 5);

router.post('/today_lv_hotspot', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data":  today_lv_hotspot
	}));
});

router.post('/getLettersSSResult', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": {
			"rows": getLettersSSResult
		}
	}));
});

router.post('/getLettersTSResult', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": {
			"curpage" :0,         //当前分页
			"pagesize": Random.integer(1, 2),        //每页数量
			"total": Random.integer(3, 3),         //总的数据数量
			"rows": getLettersTSResult
		}
	}));
});

router.post('/ComplaintComplaintList', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": {
			"rows": ComplaintComplaintList
		}
	}));
});

router.post('/stat30DaysPollutionCategory', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": {
			"rows": stat30DaysPollutionCategory
		}
	}));
});

router.post('/stat30DaysHandlingStatistics', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": stat30DaysHandlingStatistics
	}));
});

router.post('/stat30dayscounty', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": {
			"rows": stat30dayscounty
		}
	}));
});

router.post('/source-statistics', function(req, res, next) {
	console.log(req);
	res.json(Mock.mock({
		"code": 0,
		"msg": null,
		"data": {
			"rows": sourcestatistics
		}
	}));
});


module.exports = router;
