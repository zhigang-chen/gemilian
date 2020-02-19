const pillTexts = [{
    title: '爱链钱包APP',
    content: '区块链联盟钱包',
    url: 'http://www.lanjingb.com/js/case/case1.html',
  },
  {
    title: '纷享车链',
    content: '区块链汽车服务平台',
    url: 'http://www.lanjingb.com/js/case/case15.html'
  },
  {
    title: '新零售商业',
    content: '公共区块系统-钱包',
    url: 'http://www.lanjingb.com/js/case/case12.html'
  },
  {
    title: '健康云生活',
    content: '区块链商城,矿机,交易',
    url: 'http://www.lanjingb.com/js/case/case14.html'
  },
  {
    title: '竞拍平台APP',
    content: '多样化的竞拍平台',
    url: 'http://www.lanjingb.com/js/case/case10.html'
  },
  {
    title: '区块链-商城',
    content: '数字货币购物商城',
    url: 'http://www.lanjingb.com/js/case/case17.html'
  },
  {
    title: '新空测评',
    content: '区块链项目评级项目',
    url: 'http://www.lanjingb.com/js/case/case16.html'
  },
  {
    title: '一元夺宝',
    content: '一元夺宝APP平台',
    url: 'http://www.lanjingb.com/js/case/case.html'
  },
  {
    title: 'Bz Wellet',
    content: '区块链电子钱包',
    url: 'http://www.lanjingb.com/js/case/case5.html'
  },
  {
    title: 'EPay',
    content: '区块链多应用钱包系统',
    url: 'http://www.lanjingb.com/js/case/case3.html'
  },
  {
    title: 'iN钱包',
    content: '区块链电子钱包类型',
    url: 'http://www.lanjingb.com/js/case/case13.html'
  },
  {
    title: 'QQBTC',
    content: '区块链数字货币交易所',
    url: 'http://www.lanjingb.com/js/case/case2.html'
  },
  {
    title: 'QTC商城',
    content: '数字货币消费挖矿商城',
    url: 'http://www.lanjingb.com/js/case/case11.html'
  },
  {
    title: 'QYB社区钱包',
    content: '区块链研习社区钱包',
    url: 'http://www.lanjingb.com/js/case/case6.html'
  },
  {
    title: 'SCC',
    content: '区块链资产发行平台',
    url: 'http://www.lanjingb.com/js/case/case7.html'
  },
  {
    title: 'TNANHAI-TT',
    content: '区块链电子钱包',
    url: 'http://www.lanjingb.com/js/case/case4.html'
  },
  {
    title: 'UFE交易所',
    content: '交易所技术分享学院为一体的服务平台',
    url: 'http://www.lanjingb.com/js/case/case8.html'
  },
  {
    title: 'ZG交易所',
    content: '全球数字资产交易平台',
    url: 'http://www.lanjingb.com/js/case/case9.html'
  },
  {
    title: 'ATTGAS',
    content: '区块链币商城',
    url: 'http://www.lanjingb.com/js/case/case18.html'
  },
  {
    title: 'NEWERA',
    content: '新时代大学-众筹心愿学好课',
    url: 'http://www.lanjingb.com/js/case/case19.html'
  },
]

function getImageArr() {
  const arr = [];
  for (let i = 1; i <= 20; i++) {
    arr.push({
      img: `img/page-caseC/tp${i}.png`,
      ...pillTexts[i - 1]
    })
  }

  return arr;
}

var smallPost = new Vue({
  el: '#small-1',
  data: {
    list: getImageArr()
  }
})