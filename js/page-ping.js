function getDeviceScreen() {
  return window.screen.width;
}

const pingPostText = [{
    title: 'APP开发',
    clz: 'bg-gray',
    titleImg: 'top4-ytu-1.png'/*tpa=http://www.lanjingb.com/js/img/index/top4-ytu.png*/,
    contentImg: 'top4-tu1-1.png'/*tpa=http://www.lanjingb.com/js/img/index/top4-tu1.png*/,
    content: `用金融主流的JAVA语言开发，实行分布式系统架构，基于硬件扩展可支持百万级并发业务电子钱包、挖矿平台、电商、期货交易应用等APP软件，并实现系统金融级安全性能。`,
    list: ['金融类APP开发', '钱包类APP开发', '交易所类系统开发', '商城类APP开发'],
    footer: '安全放心，稳健流畅，功能强大|支持全系应用开发，任意想法皆可开发。'
  },
  {
    title: '网站开发',
    clz: 'bg-white',
    titleImg: 'top4-ytu3-1.png'/*tpa=http://www.lanjingb.com/js/img/index/top4-ytu3.png*/,
    contentImg: 'top4-tu2-1.png'/*tpa=http://www.lanjingb.com/js/img/index/top4-tu2.png*/,
    content: `用金融主流的JAVA语言开发，实行分布式系统架构，基于硬件扩展可支持百万级并发业务电子钱包、挖矿平台、电商、期货交易应用等APP软件，并实现系统金融级安全性能。`,
    list: ['金融类APP开发', '钱包类APP开发', '交易所类系统开发', '商城类APP开发'],
    footer: '安全放心，稳健流畅，功能强大，支持全系应用开发，任意想法皆可开发。'
  },
  {
    title: '区块链开发',
    clz: 'bg-gray',
    titleImg: 'top4-ytu2-1.png'/*tpa=http://www.lanjingb.com/js/img/index/top4-ytu2.png*/,
    contentImg: 'top4-tu3-1.png'/*tpa=http://www.lanjingb.com/js/img/index/top4-tu3.png*/,
    content: `蓝鲸Blockchain提供区块链技术开发，搭建公链 ，私链，联盟链开发，智能合约开发，现实区块链 商业生态建设等服务，协助区块链落地应用，为企 业提供区块链商业化完美的解决方案`,
    list: ['公链开发', '私链搭建', '联盟链开发', '合约开发'],
    footer: '底层公链，应用DAPP•为企业打造区块链商业化落地应用解决方案。'
  }
]

// 介绍内容
Vue.component('ping-post', {
  props: ['data'],
  template: `
    <div class="content-item current">
      <div class="zuof">
        <img v-bind:src="data.contentImg" alt="" />
      </div>
      <div class="top5-z">
        <div class="top52-tx1"><img class="top52-21" v-bind:src="data.titleImg" /></div>
        <div class="top52-tx2">{{data.content}}</div>
        <div class="top52-tx3">
          <span class="jan1" v-for="http://www.lanjingb.com/js/item in data.list">{{item}}</span><br />
        </div>
        <div class="tp1-tx">{{data.footer}}</div>
      </div>
    </div>
  `
})

// 介绍内容　mobile
Vue.component('ping-post-mobile', {
  props: ['data'],
  template: `
   <section class="ping-post-mobile">
    <h1>{{data.title}}</h1>
    <img v-bind:src="data.contentImg"　alt/>
    <p>{{data.content}}</p>
    <h6 class="bt"><span v-for="http://www.lanjingb.com/js/item in data.list">{{item}}</span></h6>
    <h6 class="post-footer-mobile">{{data.footer}}</h6>
   </section>
  `
})

// 介绍
Vue.component('ping-card-mobile', {
  props: ['data'],
  template: `
   <section class="">
    <div class="post-header-mobile">
      <img v-bind:src="data.contentImg"　alt/>
      <div>
        <h1>{{data.title}}</h1>
        <p>{{data.content}}</p>
      </div>
    </div>
    <h6 class="bt"><span v-for="http://www.lanjingb.com/js/item in data.list">{{item}}</span><br /></h6>
    <h6 class="post-footer-mobile">{{data.footer}}</h6>
   </section>
  `
})

// 擅长技术类型
Vue.component('ping-good-at-mobile', {
  props: ['data'],
  template: `
  <section class="ping-good-at-mobile">
    <h1>{{data.title}}</h1>
    <p>
      <span v-for="(item, index) in data.items" :key="index">{{item}}</span>
    </p>
 </section>
  `
})

// 区块链开发服务
Vue.component('ping-list', {
  props: ['data'],
  template: `
  <div class="col-xs-12 col-sm-3 col-md-3 col-ld-3 top8-le">
    <div class="t-img1"><img v-bind:src="data.img"/*tpa=http://www.lanjingb.com/js/data.img*/ /></div>
    <div class="top8-xl">
      <div class="top8-le1">
        <p class="top8-xt2">{{data.text}}</p>
      </div>
    </div>
  </div>
  `
})

// 区块链开发服务
Vue.component('ping-list-mobile', {
  props: ['data'],
  template: `
  <section class="ping-list-mobile">
    <ul>
      <li>
        <img v-bind:src="data.img"/*tpa=http://www.lanjingb.com/js/data.img*/ alt />
        <span>{{data.text}}</span>
      </li>
    </ul>
  </section>`
})

// 区块链开发服务
Vue.component('ping-small-pill', {
  props: ['data'],
  template: `
  <div class="col-xs-12 col-sm-3 col-md-3 col-ld-3 top8-le">
    <div class="t-img1"><img v-bind:src="data.img"/*tpa=http://www.lanjingb.com/js/data.img*/ /></div>
    <div class="top8-xl">
      <div class="top8-le1">
        <p class="top8-xt2">{{data.text}}</p>
      </div>
    </div>
  </div>
  `
})

// 区块链开发服务
Vue.component('ping-small-pill-mobile', {
  props: ['data'],
  template: `
  <section class="ping-small-pill-mobile">
    <img v-bind:src="data.img"/*tpa=http://www.lanjingb.com/js/data.img*/ alt />
    <h6>{{data.text}}</h6>
  </section>
  `
})

// 技术优势
Vue.component('ping-div-pill-mobile', {
  props: ['data'],
  template: `
  <section class="ping-div-pill-mobile">
    <h1>{{data.title}}</h1>
    <h6>{{data.content}}</h6>
  </section>
  `
})

// 服务流程标题
Vue.component('ping-big-pill-title-mobile', {
  props: ['title'],
  template: `
  <h1 class="ping-big-pill-title-mobile">{{title}}</h1>
  `
})

// 服务流程内容
Vue.component('ping-big-pill-content-mobile', {
  props: ['props'],
  template: `
  <section class="ping-big-pill-content-mobile">
    <div>
      <label>{{props.id}}</label>
      <h2>{{props.title}}</h2>
    </div>
    <p>{{props.content}}</p>
  </section>
  `
})

// 服务流程组件
Vue.component('ping-big-pill-mobile', {
  props: ['data'],
  template: `
  <section class="ping-big-pill-mobile">
    <ping-big-pill-title-mobile v-bind:class="http://www.lanjingb.com/js/data.clz" v-bind:title="data.title"></ping-big-pill-title-mobile>
    <div class="ping-big-pill-content-mobile-container">
      <ping-big-pill-content-mobile v-bind:class="http://www.lanjingb.com/js/data.clz" v-bind:props="item" v-for="(item, index) in data.props" :key="index"></ping-big-pill-content-mobile>
    </div>
  </section>
  `
})


// 安全机智
Vue.component('ping-safe-engine-mobile', {
  props: ['data'],
  template: `
  <section class="ping-safe-engine-mobile">
    <img v-bind:src="data.img"/*tpa=http://www.lanjingb.com/js/data.img*/ alt />
    <h6>{{data.text}}</h6>
  </section>
  `
})

// 服务案例
Vue.component('service-example', {
  props: ['item'],
  template: `
  <div class="service-example rlt">
    <a v-bind:href="http://www.lanjingb.com/js/item.url">
      <img v-bind:src="http://www.lanjingb.com/js/item.img" alt />
      <div>
        <section class="pill-text">
          <h4>{{ item.title }}</h4>
          <h6>{{ item.content }}</h6>
        </section>
      </div>
    </a>
  </div>
  `
})


// 运行模型 content big
Vue.component('ping-run-content-big-mobile', {
  props: ['item'],
  template: `
  <section class="ping-run-content-big-mobile">
    <slot></slot>
  </section>
  `
})

// 运行模型 content small
Vue.component('ping-run-content-small-mobile', {
  props: ['texts'],
  template: `
  <section class="ping-run-content-small-mobile">
    <h6 v-for="(text, index) in texts.texts" :key="index">{{text}}</h6>
  </section>
  `
})

// 运行模型　pointer group
Vue.component('ping-run-pointer-group-mobile', {
  props: ['conneter'],
  template: `
  <section class="ping-run-pointer-group-mobile">
    <div class="ping-pointer-image-group">
      <img src="up.png"/*tpa=http://www.lanjingb.com/js/img/page-ping/up.png*/ alt>
      <img src="down.png"/*tpa=http://www.lanjingb.com/js/img/page-ping/down.png*/ alt>
    </div>
    <span>{{conneter.first}}<br/>{{conneter.last ? conneter.last : ''}}</span>
  </section>
  `
})

// 运行模型 mobile
Vue.component('ping-run-module-mobile', {
  props: ['data'],
  template: `
  <div>
    <section class="ping-run-module-mobile">
      <ping-run-content-big-mobile v-bind:class="http://www.lanjingb.com/js/data.clz">
        <ping-run-content-small-mobile v-bind:texts="content" v-for="(content, i) in data.contents" :key="i"></ping-run-content-small-mobile>
      </ping-run-content-big-mobile>
      <h6>{{data.title}}</h6>
    </section>
    <div class="ping-pointer-group-mobile">
      <ping-run-pointer-group-mobile v-bind:class="data.ptClz" v-bind:conneter="conneter" v-for="(conneter, index) in data.conneters" :key="index"></ping-run-pointer-group-mobile>
    </div>
  </div>
  
  `
})


// 运行模型　title
Vue.component('ping-run-title-mobile', {
  props: ['item'],
  template: `
  <section class="top7-title">
    <h1>{{item.title}}</h1>
    <label class="top1-lie top1-lie-mobile"><img src="top1-lie-1.png"/*tpa=http://www.lanjingb.com/js/img/page-ping/top1-lie.png*/ /></label>
    <h6>{{item.text}}</h6>
  </section>
  `
})


// 复用标题组件
Vue.component('ping-title', {
  props: ['item'],
  template: `
  <section class="top7-title">
    <h1>{{item.title}}</h1>
    <label class="top1-lie top1-lie-mobile"><img src="top1-lie-1.png"/*tpa=http://www.lanjingb.com/js/img/page-ping/top1-lie.png*/ /></label>
    <h6>{{item.text}}</h6>
  </section>
  `
})

new Vue({
  el: '#wrap',
  data: {
    data: pingPostText,
    width: getDeviceScreen()
  }
})


const pingListText = [{
    id: 0,
    img: 'top3-lg5-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top3-lg5.png*/,
    text: '证券化DAPP开发'
  },
  {
    id: 1,
    img: 'top3-lg6-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top3-lg6.png*/,
    text: '社交类DAPP开发'
  },
  {
    id: 2,
    img: 'top3-lg7-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top3-lg7.png*/,
    text: '游戏类DAPP开发'
  },
  {
    id: 3,
    img: 'top3-lg8-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top3-lg8.png*/,
    text: '钱包类DAPP开发'
  },
  {
    id: 4,
    img: 'top3-lg9-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top3-lg9.png*/,
    text: '竞猜类DAPP开发'
  }
]

// top8-xia
new Vue({
  el: '#list',
  data: {
    data: pingListText,
    width: getDeviceScreen()
  }
})

const pingSmallPillText = [{
    id: 0,
    img: 'top3-lg1-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top3-lg1.png*/,
    text: '智能合约开发',
  },
  {
    id: 1,
    img: 'top3-lg2-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top3-lg2.png*/,
    text: '公有链开发',
  },
  {
    id: 2,
    img: 'top3-lg3-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top3-lg3.png*/,
    text: '私有链开发',
  },
  {
    id: 3,
    img: 'top3-lg4-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top3-lg4.png*/,
    text: '联盟链开发',
  },
]

new Vue({
  el: '#small-pill',
  data: {
    data: pingSmallPillText,
    width: getDeviceScreen()
  }
})

const pingDivPillText = [{
    title: '跨链服务',
    content: '同/异构区块链之间可相互操作及通信'
  },
  {
    title: '合约定制',
    content: '多语言合约共存,依据行规规则提供标准化合约模板'
  },
  {
    title: '隐私保护',
    content: '多种数据脱敏,加密和封锁方保护用户隐私'
  },
  {
    title: '共识机制',
    content: 'DPos+BFT新算法,实现高交易吞吐量、可扩展和安全性'
  },
];

const pingBlockServiceTitle = {
  title: '区块链开发服务',
  text: '为企业打造区块链商业化落地应用解决方案'
}


new Vue({
  el: '#block-service',
  data: {
    title: pingBlockServiceTitle
  }
})


// 
const pingDivPillTitle = {
  title: '技术优势',
  text: '前进不止，成功研制并生双链生态系统'
}

new Vue({
  el: '#div-pill',
  data: {
    data: pingDivPillText,
    title: pingDivPillTitle
  }
})

const pingBigPillText = [{
    title: '售前',
    clz: 'purple',
    props: [{
        id: 2,
        title: '售前经理',
        content: '免费提供给您有：（项目思维导图，业务流程图，技术解决方案，功能清单，报价清单）'
      },
      {
        id: 1,
        title: '商务经理',
        content: `我们不仅懂商务，还是技术大咖！`
      }
    ]
  },
  {
    title: '售中',
    clz: 'red',
    props: [{
        id: 4,
        title: '产品经理',
        content: `提供：PRD说明书，UE交互设计 `
      },
      {
        id: 3,
        title: '项目经理',
        content: `我们提供：项目实施计划，项目管理计划，功能分解方案,应急策略….`
      },
      {
        id: 6,
        title: '开发工程师',
        content: `每一个参与的开发工程师，开发计划颗粒度单位到天，确保准时交工`
      },
      {
        id: 5,
        title: 'UI设计师',
        content: `专业美院设计师提供优秀的视觉交互设计`
      },
      // 服务案例
      {
        id: 8,
        title: '质量监督',
        content: `独有的质量监督团队帮您把后一道关`
      },
      {
        id: 7,
        title: '测试工程师',
        content: `测试用例，测试报告`
      }
    ]
  },
  {
    title: '售后',
    clz: 'green',
    props: [{
        id: 10,
        title: '项目经理',
        content: `项目经理参与项目售后不需要多说一句废话`
      },
      {
        id: 11,
        title: '售后客服',
        content: `7*12小时服务， 随时随地为项目保驾护航`
      }
    ]
  }
]


const safeEngineTitleItem = {
  title: '安全机制',
  text: ''
}

const safeEngineText = [{
    id: 0,
    img: 'top4-g1-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top4-g1.png*/,
    text: '数据传输安全',
  },
  {
    id: 1,
    img: 'top4-g2-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top4-g2.png*/,
    text: '防注入安全',
  },
  {
    id: 2,
    img: 'top4-g3-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top4-g3.png*/,
    text: '防信息丢失',
  },
  {
    id: 3,
    img: 'top4-g4-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top4-g4.png*/,
    text: '网络安全',
  },
  {
    id: 3,
    img: 'top4-g5-1.png'/*tpa=http://www.lanjingb.com/js/img/page-ping/top4-g5.png*/,
    text: '数据库灾备',
  },
]

new Vue({
  el: '#safe-engine',
  data: {
    titleEngine: safeEngineTitleItem,
    engine: safeEngineText
  }
})

// 服务流程
const bigPillTitleItem = {
  title: '专业服务流程',
  text: '10步法则协调运作•系统化、有方向、有条理规范服务体系'
}

new Vue({
  el: '#big-pill',
  data: {
    data: pingBigPillText,
    title: bigPillTitleItem
  }
})


const pillTexts = [{
    title: '爱链钱包APP',
    content: '区块链联盟钱包',
    url: 'http://www.lanjingb.com/js/case/case1.html',
    clz: 'tp5-yl1 rlt',
    img: 'tp1-1.png'/*tpa=http://www.lanjingb.com/js/img/index/tp1.png*/
  },
  {
    title: '纷享车链',
    content: '区块链汽车服务平台',
    url: 'http://www.lanjingb.com/js/case/case15.html',
    clz: 'tp5-yl2 rlt',
    img: 'tp2-1.png'/*tpa=http://www.lanjingb.com/js/img/index/tp2.png*/
  },
  {
    title: '新零售商业',
    content: '公共区块系统-钱包',
    url: 'http://www.lanjingb.com/js/case/case12.html',
    clz: 'tp5-yl3 rlt',
    img: 'tp3-1.png'/*tpa=http://www.lanjingb.com/js/img/index/tp3.png*/
  },
  {
    title: '健康云生活',
    content: '区块链商城,矿机,交易',
    url: 'http://www.lanjingb.com/js/case/case14.html',
    clz: 'tp5-yl4 rlt',
    img: 'tp4-1.png'/*tpa=http://www.lanjingb.com/js/img/index/tp4.png*/
  },
  {
    title: '竞拍平台APP',
    content: '多样化的竞拍平台',
    url: 'http://www.lanjingb.com/js/case/case10.html',
    clz: 'tp5-yl5 rlt',
    img: 'tp5-1.png'/*tpa=http://www.lanjingb.com/js/img/index/tp5.png*/
  },
  {
    title: '区块链-商城',
    content: '数字货币购物商城',
    url: 'http://www.lanjingb.com/js/case/case17.html',
    clz: 'tp5-yl6 rlt',
    img: 'tp6-1.png'/*tpa=http://www.lanjingb.com/js/img/index/tp6.png*/
  }
]

function getImageArr() {
  const arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push({
      ...pillTexts[i]
    })
  }

  return arr;
}

const serviceTitleItem = {
  title: '服务案例',
  text: '精选创造案例|阅•品鉴匠心'
}

new Vue({
  el: '#service-example',
  data: {
    service: getImageArr(),
    title: serviceTitleItem
  }
})


// 擅长技术类型

const goodAtTitleItem = {
  title: '擅长开发类型',
  text: 'APP应用类型 支持全系应用开发，任意想法皆可开发。'
}

const pingGoodAtText = [{
    title: '金融类APP开发',
    clz: 'purple',
    items: ['借贷型APP', 'P2P型APP', '供应链金融', '财务管理APP', '基金销售类APP', '支付类APP']
  },
  {
    title: '钱包类APP开发',
    clz: 'red',
    items: ['挖矿类APP', '商城类APP', 'VPay类APP', '数字银行类APP', '夺宝平台类APP', '消费即挖矿电商']
  },
  {
    title: '交易所类系统开发',
    clz: 'yellow',
    items: ['OTC类平台', 'C2C交易平台', '去中心交易所', '全域类交易所']
  },
  {
    title: '商场类APP开发',
    clz: 'green',
    items: ['竞猜类APP', '商城类APP', '数字货币购物商城APP', 'B2C购物商城APP', '直销电商平台']
  }
]

new Vue({
  el: '#good-at',
  data: {
    title: goodAtTitleItem,
    data: pingGoodAtText
  }
})


const runModuleData = [
  {
    title: '数据展示层',
    clz: 'border-dashed',
    ptClz: '',
    contents: [
      {
        texts: ['WEP Service Client','Ext JQueryBootstrap']
      }
    ],
    conneters: [
      {
        first: 'HTTP',
        last: 'Response'
      }
    ]
  },
  {
    title: '视觉层',
    clz: 'top-image',
    ptClz: 'pt-border ',
    contents: [
      {
        texts: ['Servlet  JSP','Velocity Freemark']
      }
    ],
    conneters: [
      {
        first: 'DTO',
        last: undefined
      }
    ]
  },
  {
    title: '数据控制层',
    clz: 'middile-image',
    ptClz: 'pt-border ',
    contents: [
      {
        texts: ['Sping MVC']
      }
    ],
    conneters: [
      {
        first: 'DTO',
        last: undefined
      }
    ]
  },
  {
    title: '业务处理层',
    clz: 'middile-image',
    ptClz: 'pt-border ',
    contents: [
      {
        texts: ['Sping MVC', 'Business Service', 'CXF Service']
      }
    ],
    conneters: [
      {
        first: 'DTO',
        last: undefined
      }
    ]
  },
  {
    title: '数据访问层',
    clz: 'end-image',
    ptClz: '',
    contents: [
      {
        texts: ['File Process(Luce ne)', 'DAO']
      }
    ],
    conneters: [
      {
        first: 'DTO',
        last: undefined
      },
      {
        first: 'Hibernate',
        last: 'JDBC'
      }
    ]
  },
  {
    title: '数据库文件系统',
    clz: 'border-dashed',
    ptClz: '',
    contents: [
      {
        texts: ['文档系统','Mysql Oracle']
      }
    ],
    conneters: []
  }
]

new Vue({
  el: '#run-module',
  data: {
    runModule:runModuleData
  }
})