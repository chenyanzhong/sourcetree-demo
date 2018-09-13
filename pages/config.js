// 配置文件
const isLocal = false;
const testServer = false;

module.exports = {
  testServer: testServer,
  host: isLocal ? 'http://localhost:8080/' : testServer ? 'https://test.xmiles.cn/' : 'https://xmiles.cn/',

  pversion: '53',
  cversion: 53,
  cversionname: '1.0',
  channel: '1000',
  prdid: '17000',

  shareContent: {
    title: '我正在用微信步数兑换以下商品，助我一臂之力',
    imageUrl: 'https://img.xmiles.cn/wechat/shareicon.png',
    path: '/pages/index/index'
  }
}