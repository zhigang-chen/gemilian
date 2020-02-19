Vue.component('artical-post-mobile', {
  props: ['item'],
  template: `
    <section class="artical-post-mobile">
      <img v-bind:src="http://www.lanjingb.com/js/item.img" alt>
      <h1><a v-bind:href="http://www.lanjingb.com/js/item.link">{{item.title}}</h1>
      <h6><a v-bind:href="http://www.lanjingb.com/js/item.link">{{item.content}}</a></h6>
      <h2><a v-bind:href="http://www.lanjingb.com/js/item.link">{{item.linkName}}</a><img src="icon-1.png"/*tpa=http://www.lanjingb.com/js/img/page-caseB/icon.png*/ alt></h2>
    </section>
  `
})

Vue.component('artical-post', {
  props: ['item'],
  template: `
  <div class="tp1-e1">
    <div class="zuof">
      <a v-bind:href="http://www.lanjingb.com/js/item.link"><img v-bind:src="http://www.lanjingb.com/js/item.img" alt="" /></a>
    </div>
    <div class="top5-z">
      <div class="top52-tx2">
        <a v-bind:href="http://www.lanjingb.com/js/item.link">{{item.title}}</a>
      </div>
      <div class="top4-tx">
        <a v-bind:href="http://www.lanjingb.com/js/item.link">{{item.content}}</a></div>
      <div class="top52-tx3">
        <a v-bind:href="http://www.lanjingb.com/js/item.link">
          <spa class="jan1">继续阅读</spa><img src="icon-1.png"/*tpa=http://www.lanjingb.com/js/img/page-caseB/icon.png*/ alt="" />
        </a>
      </div>
    </div>
  </div>
  `
})

Vue.component('service-example-list', {
  props: ['item'],
  template: `
  <a v-bind:href="http://www.lanjingb.com/js/item.link">
    <div v-bind:class="http://www.lanjingb.com/js/item.clz" id="hua">
      <div class="top7-he">
        <div class="top1-e1">
          <p class="top1-ti1">{{item.title}}</p>
          <p class="top1-ti2">{{item.text}}</p>
        </div>
      </div>
    </div>
  </a>
  `
})

Vue.component('artical-title', {
  template: `
  <div class="bantu">
      <div class="b-kuang">
        <div class="b-txt1">蓝鲸BLOCKCHAIN</div>
        <div class="b-txt1">砥砺前行•深研的区块链技术应用价值</div>
        <div class="btn-w">
          <div class="t1-btn">
            <sp class="zt">欢迎来到 :</sp><br />
            蓝鲸 BLOCKCHAIN|区块链技术研究院<br />
            蓝鲸 BLOCKCHAIN
            区块链技术研究院，作为区块链价值应用研究，以支撑大规模的商业应用场景为方向，提供基于信任的区块链开发服务，广泛的赋能于金融服务、共享经济、医疗、零售、物流、媒体娱乐等众多行业；也可支持在中介交易等行业的颠覆性创新。蓝鲸BLOCKCHAIN
            致力于推动区块链技术在实体产业链中的落地，推进区块链商业化的未来。
          </div>
        </div>
      </div>
    </div>
  `
})

Vue.component('artical-title-mobile', {
  template: `
  <div>
    <section class="artical-title-mobile">
      <div class="">
        <h1>蓝鲸BLOCKCHAIN</h1>
        <h6>砥砺前行•深研</h6>
        <h6>区块链技术应用价值</h6>
      </div>
      <img src="home.png"/*tpa=http://www.lanjingb.com/js/img/page-caseB/home.png*/ alt>
    </section>
    <section class="artical-intro-mobile">
      <h1>欢迎来到:</h1>
      <h6>蓝鲸 BLOCKCHAIN|区块链技术研究院</h6>
      <p>
      蓝鲸 BLOCKCHAIN 区块链技术研究院，作为区块链价值应用研究，以支撑大规模的商业应用场景为方向，提供基于信任的区块链开发服务，广泛的赋能于金融服务、共享经济、医疗、零售、物流、媒体娱乐等众多行业；也可支持在中介交易等行业的颠覆性创新。蓝鲸BLOCKCHAIN
      致力于推动区块链技术在实体产业链中的落地，推进区块链商业化的未来。</p>
    </section>
  </div>
  `
})

const articals = [{
    img: 'top1-tu1-1.png'/*tpa=http://www.lanjingb.com/js/img/page-caseB/top1-tu1.png*/,
    title: '「蓝鲸BLOCKCHAIN」第021期 |区块链预言机搭建区块链与商业应用的联通桥梁',
    content: '如何链接区块链与现实世界，让技术价值落到实处，为其他行业服务？且看区块链云服务平台预言机功能模块。',
    link: 'https://www.jinse.com/bitcoin/291462.html',
    linkName: '继续阅读'
  },
  {
    img: 'top1-tu3-1.png'/*tpa=http://www.lanjingb.com/js/img/page-caseB/top1-tu3.png*/,
    title: '「蓝鲸BLOCKCHAIN」第020期 |区块链赋能供应链金融和数字积分让信用创造价值',
    content: '区块链云服务平台服务升级，提出了推出存证、溯源区块链解决方案。随着供应链金融区块链解决方案和数字积分区块链解决方案的诞生，区块链云服务平台的服务能力也得到了极大',
    link: 'https://www.jinse.com/bitcoin/290375.html',
    linkName: '继续阅读'
  },
  {
    img: 'top1-tu5-1.png'/*tpa=http://www.lanjingb.com/js/img/page-caseB/top1-tu5.png*/,
    title: '「蓝鲸BLOCKCHAIN」第019期 |区块链云服务上线新解决方案,全面升级服务能力',
    content: '随着服务范围的逐步扩大和企业用户的不断增长，当前的区块链云服务平台不断扩充技术与产品服务：全新升级解决方案版块，推出联盟链与公链等通用解决方案，以及存证、溯源、',
    link: 'https://www.jinse.com/bitcoin/290368.html',
    linkName: '继续阅读'
  },
  {
    img: 'top1-tu2-1.png'/*tpa=http://www.lanjingb.com/js/img/page-caseB/top1-tu2.png*/,
    title: '「蓝鲸BLOCKCHAIN」第017期 | 以区块链技术深度剖析联盟链及区块链应用情况',
    content: '区块链技术是当前最受关注的技术之一。本文从区块链技术的起源讲起，阐述了比特币、以太坊和其他公有链项目的应用，然后通过对联盟链的定义，引出国际主要联盟链组织的发起',
    link: 'https://www.jinse.com/bitcoin/290376.html',
    linkName: '继续阅读'
  },
  {
    img: 'top1-tu4-1.png'/*tpa=http://www.lanjingb.com/js/img/page-caseB/top1-tu4.png*/,
    title: '「蓝鲸BLOCKCHAIN」第016期 |利用结合现有产业链,实现区块链技术开发落地？',
    content: '俗话说得好“站在风口上，猪都会飞”，那么2018年最大风口无疑是“区块链”，区块链处在发展的初期，很多技术和商业模式还在探索之中。很多暴富神话、不可思议的逆袭',
    link: 'https://www.jinse.com/bitcoin/290371.html',
    linkName: '继续阅读'
  }
]



new Vue({
  el: '#artical-post',
  data: {
    list: articals
  }
})

const serviceExamples = [{
    link: 'http://www.lanjingb.com/js/page-house.html',
    clz: 'tp1-tb1',
    title: '区块链+',
    text: '房产ABS系统解决方案'
  },
  {
    link: 'http://www.lanjingb.com/js/page-shopping.html',
    clz: 'tp1-tb2',
    title: '区块链+',
    text: '电商购物 解决方案'
  },
  {
    link: 'http://www.lanjingb.com/js/page2.html',
    clz: 'tp1-tb3',
    title: '区块链+',
    text: '平台溯源/解决方案'
  }, 
  {
    link: 'http://www.lanjingb.com/js/art.html',
    clz: 'tp1-tb4',
    title: '区块链+',
    text: '艺术品数字资产交易所/解决方案'
  }
]

new Vue({
  el: '#service-sample-list',
  data: {
    sampleList: serviceExamples
  }
})

new Vue({
  el: '#title'
})