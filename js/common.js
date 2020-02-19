Vue.component('lj-nav-bar', {
  props: ['navs', 'current'],
  template: `
  <div class="czr-header" id="header">
  <div class="container czr-container">
    <nav class="navbar navbar-theme">
      <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse"
          aria-expanded="false" id="jzbut">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar" style="background:#3776ff;"></span>
          <span class="icon-bar" style="background:#3776ff;"></span>
          <span class="icon-bar" style="background:#3776ff;"></span>
        </button>
        <div class="navbar-brand-wrap">
          <a class="navbar-brand" href="http://www.lanjingb.com/js/index.html">
            <img src="../img/home-logo.png" alt="logo">
          </a>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="nav navbar-nav navbar-right" id="right-y">
          <li v-bind:id="item.text === current ? 'navl' : 'nav' + index" v-for="(item, index) in navs" :key="index"><a v-bind:href="http://www.lanjingb.com/js/item.link" class="j-header-link">{{item.text}}</a></li>
        </ul>
      </div>
    </nav>
  </div>
</div>
`
})

const navItems = [
  {
    text: '首页',
    link: 'http://www.lanjingb.com/js/index.html',
  },
  {
    text: 'APP开发',
    link: 'http://www.lanjingb.com/js/page-ping.html',
  },
  {
    text: '服务案例',
    link: 'http://www.lanjingb.com/js/page-caseC.html',
  },
  {
    text: '区块链+',
    link: 'http://www.lanjingb.com/js/page-caseB.html',
  },
  {
    text: '关于蓝鲸',
    link: 'http://www.lanjingb.com/js/page-far-eye.html',
  },
];

new Vue({
  el: '#lj-nav-bar',
  data: {
    nav: navItems
  }
})