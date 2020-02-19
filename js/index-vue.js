const pillTexts = [
  {
    title  : '爱链钱包APP',
    content: '区块链联盟钱包',
    url    : 'http://www.lanjingb.com/js/case/case1.html',
    clz    : 'tp5-yl1 rlt',
  },
  {
    title  : '纷享车链',
    content: '区块链汽车服务平台',
    url    : 'http://www.lanjingb.com/js/case/case15.html',
    clz    : 'tp5-yl2 rlt',
  },
  {
    title  : '新零售商业',
    content: '公共区块系统-钱包',
    url    : 'http://www.lanjingb.com/js/case/case12.html',
    clz    : 'tp5-yl3 rlt',
  },
  {
    title  : '健康云生活',
    content: '区块链商城,矿机,交易',
    url    : 'http://www.lanjingb.com/js/case/case14.html',
    clz    : 'tp5-yl4 rlt',
  },
  {
    title  : '竞拍平台APP',
    content: '多样化的竞拍平台',
    url    : 'http://www.lanjingb.com/js/case/case10.html',
    clz    : 'tp5-yl5 rlt',
  },
  {
    title  : '区块链-商城',
    content: '数字货币购物商城',
    url    : 'http://www.lanjingb.com/js/case/case17.html',
    clz    : 'tp5-yl6 rlt',
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


Vue.component('lj-button', {
  data: {},
  template: '<button type="button" class="lj-button" ><slot></slot></button>'
})

Vue.component('service-example', {
  props: ['list'],
  template: `
  <div class="tp5-y">
    <a v-bind:href="http://www.lanjingb.com/js/item.url" v-for="item in list">
      <div v-bind:class="http://www.lanjingb.com/js/item.clz">
          <section class="pill-text">
              <h4>{{ item.title }}</h1>
              <h6>{{ item.content }}</h6>
          </section>
      </div>
    </a>
  </div>`
})

new Vue({ el: '#component-1' });
new Vue({ el: '#component-2' });

var smallPost = new Vue({
  el: '#service-example',
  data: {
    list: getImageArr()
  }
})