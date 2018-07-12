const Mock = require('mockjs');
const Random = Mock.Random
const express = require('express');
const router = express.Router();

let suspicousEnterpriseRank = [];
let newsDetail = [];
let waterFactoryRankData = {
	"COD": [],
	"氨氮": [],
};
let waterRankData = {
	"COD": [],
	"氨氮": [],
};
let airRankData = {
	"烟尘": [],
	"SO2": [],
	"NOX": [],
};
let enterpriseCreditRank = [];

makeEnterpriseCreditRank = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"name": Random.cword(3, 7),
			"score": Random.integer(0, 100),
			"detail": {
				"punish": Random.integer(0, 100),
				"consensus": Random.integer(0, 100),
				"finance": Random.integer(0, 100),
				"product": Random.integer(0, 100),
				"toll": Random.integer(0, 100),
				"monitor": Random.integer(0, 100)
			}
		};
		aimData.push(demo);
	}
};

makeRankData = (aimData, num) => {
	for (let item in aimData) {
		for (let i = 0; i < num; i++) {
			let demo = [
				Random.cword(4, 7),
				Random.float(10, 100, 2, 2),
				Random.integer(-20, 80) + "%"
			];
			aimData[item].push(demo);
		}
	}
};

makeNewsDetail = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"region": Random.county(),
			"name": Random.cword(4, 7) + '有限公司',
			"type": Random.cword(2) + ' | ' + Random.integer(1, 6) + "号排口",
			"detailStart": "于" + Random.datetime('yyyy-MM-dd') + "开始停运检修;",
			"detailExpire": Random.datetime('yyyy-MM-dd') + "停运到期，距到期日剩余" + Random.integer(1, 100) +"天"
		};
		aimData.push(demo);
	}
};

makeSuspicousEnterpriseRankData = (aimData, num) => {
	for (let i = 0; i < num; i++) {
		let demo = {
			"name": Random.cword(2, 3),
			"type": Random.cword(2) + ' | ' + Random.cword(4),
			"time": Random.datetime('yyyy-MM-dd HH:mm') + '~' + Random.datetime('yyyy-MM-dd HH:mm'),
			"describe": Random.word(2, 3) + ': ' + Random.cword(4, 6),
		};
		aimData.push(demo);
	}
};

makeSuspicousEnterpriseRankData(suspicousEnterpriseRank, 10);
makeNewsDetail(newsDetail, 8);
makeRankData(waterFactoryRankData, 10);
makeRankData(waterRankData, 10);
makeRankData(airRankData, 10);
makeEnterpriseCreditRank(enterpriseCreditRank, 8);

router.get('/exampleData', function(req, res, next) {
	res.json(Mock.mock({
		"code": 1,
		"msg": null,
		"data": {
			suspicousEnterpriseRank,
			newsDetail,
			waterFactoryRankData,
			waterRankData,
			airRankData,
			enterpriseCreditRank,
		}
	}));
});

module.exports = router;
