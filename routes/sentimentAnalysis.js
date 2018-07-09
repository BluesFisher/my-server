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

makeSuddenEventsData(suddenEventsData, 10);

router.get('/exampleData', function(req, res, next) {
	res.json(Mock.mock({
		"code": 1,
		suddenEventsData,
	}));
});

module.exports = router;
