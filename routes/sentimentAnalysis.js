const Mock = require('mockjs');
const Random = Mock.Random;
const express = require('express');
const router = express.Router();

let suddenEventsData = [
	{
		"name": "江苏化工厂滁州偷排300多吨废水 造成经济损失200余万元",
		"link": "http://365jia.cn/news/2014-08-29/7751FD4CD4319401.htm",
		"click": 143
	},
];

let hotSubjectsData = {
	"total": [
		["滁城人呼吸32天“森林空气”", "2018-3-28", 2, "596", "http://news.163.com/11/0124/09/6R5G6G3200014AEE.html"],
	],
	"air-env": [
		["雾霾来了 今秋滁州首现重污染","2018-4-9", 1, "456", "http://www.sohu.com/a/36416969_114967"],
	],
	"water-env": [
		["滁州北湖今年底将告别黑臭 整治见成效","2018-3-27", 2, "456", "http://ah.ifeng.com/a/20180327/6460850_0.shtml"],
	],
	"solid-waste": [
		["煞风景，滁城西涧路边垃圾成堆","2018-3-25", 3, "456", "http://www.chuzhou.gov.cn/2658583/60788083.html"],
	],
	"voice": [
		["滁州东大街变身早市菜场 致噪音扰民交通拥堵","2018-3-24", 2, "456", "http://mini.eastday.com/a/160927101235160.html"],
	],
	"earth-waste": [
		["滁州土壤发出“酸化”信号","2018-4-8", 1, "456", "http://news.hf365.com/system/2012/05/21/011534069.shtml"],
	],
	"others": [
		["滁州本月起开始征收环保税 初步认定纳税人580多家","2018-4-7", 3, "456", "http://www.ahwang.cn/chuzhou/news/20180116/1727989.shtml"]
	]
};

sentimentRankData = {
	"this-month": [
		["定远县", 3, "90"],
	],
	"pre-month": [
		["南谯区", 4, "456"],
	]
};


makeSuddenEventsData = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"name": Random.csentence(),
			"link": Random.url(),
			"click": Random.integer(1, 600),
		};
		aimData.push(demo);
	}
};

makeNewsMoudelData = (aimData, num) => {
	for (let item in aimData) {
		for (let i = 0; i < num; i++) {
			let demo = [
				Random.csentence(),
				Random.datetime('yyyy-MM-dd'),
				Random.integer(1, 5),
				Random.string('number', 1, 3),
				Random.url(),
			];
			aimData[item].push(demo);
		}
	}
};

makeSentimentRankData = (aimData, num) => {
	for (let item in aimData) {
		for (let i = 0; i < num; i++) {
			let demo = [
				Random.county(),
				Random.integer(1, 20),
				Random.string('number', 2, 3),
			];
			aimData[item].push(demo);
		}
	}
};

makeSuddenEventsData(suddenEventsData, 10);
makeNewsMoudelData(hotSubjectsData, 8);
makeSentimentRankData(sentimentRankData, 8);

router.get('/exampleData', function(req, res, next) {
	res.json(Mock.mock({
		"code": 1,
		suddenEventsData,
	}));
});

router.get('/newsData', function(req, res, next) {
	res.json(Mock.mock({
		"code": 1,
		hotSubjectsData,
		sentimentRankData,
	}));
});

module.exports = router;
