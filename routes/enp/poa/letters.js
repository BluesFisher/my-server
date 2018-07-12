const Mock = require('mockjs');
const Random = Mock.Random;
const express = require('express');
const router = express.Router();

let stat30DaysPollutionCategory = [
	{
		"pollutionCategory": "大气污染",
		"num": 143
	},
];

let stat30DaysHandlingStatistics = {
	"complaintSum": Random.string('number', 2, 3),
	"transactSum":  Random.string('number', 2, 3),
	"similarCompare": Random.string('number', 1, 2) + "%",
	"annularCompare": Random.string('number', 1, 2) + "%",
};

let stat30dayscounty = [
	{
		"countyname": "金牛防水有限公司位于安徽省",  //投诉企业名称
		"num": "20"                          //处理数量
	}
];

let sourcestatistics = [
	{
		"source": "滁州人民政府",  //信访来源名称
		"num": "60",               //信访数量
	}
];

let ComplaintComplaintList = [
	{
		"id": "41412431",  //主键唯一数据标识
		"plid ": "34qazwsx789",  //信访事件ID
		"title": "污染严重",  //信访投诉标题
		"ptttime": "2018/07/11",  //信访投诉时间
		"pollutionCategory": "土壤",  //污染类别
		"status": "已办理",  //办理状态
		"transactUnit": "",  //办理单位
		"source": "",  //来源
	}
];

let getLettersTSResult = [
	{
		"ptttime": "2018/06/14",  //来信时间
		"url": "http://t.cn/Rz0kPkp",  //新闻url
		"pollutionCategory": "烟尘",   //原因
		"transactUnit": "来安县环境保护局",  //办理单位
		"status": "不受理",     //办理状态
		"samecount":20,      //相似内容数量
		"content": "企业排放黑色烟雾"   //内容
	}
];

let getLettersSSResult = [
	{
		"company": "金牛防水公司",    //涉事公司
		"tscount":188,      //被投诉量
		"completedcount": 98     //处理量
	}
];

let today_lv_hotspot = [
	{
		"url": "url",  //链接
		"title": "title"  //标题
	}
];

makeTodayLvHotspot = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"url": Random.url(),  //链接
			"title": Random.ctitle(6, 10)  //标题
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
makeGetLettersTSResult(getLettersTSResult, 10);
makeComplaintComplaintList(ComplaintComplaintList, 10);
makeStat30DaysPollutionCategory(stat30DaysPollutionCategory, 5);
makeStat30DaysPollutionCategory(stat30dayscounty, 10);
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
