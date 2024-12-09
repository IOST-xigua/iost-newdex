export default {
  message: {
    hello: '你好',
    welcome: '欢迎使用我们的应用',
    // 其他中文翻译...
  },
  select: {
    placeholder: '请选择',
    noMatch: '无匹配数据',
    loading: '加载中'
  },
  notice: '公告',
  noticeMsg: window.notice_zh_cn,
  systemMaintaining: '系统维护中...',
  comingSoon: '开发中...',
  lang: '简体中文',
  tv_lang:'zh',
  languages: {
    zh_cn: '简体中文',
    zh_hk: '繁體中文',
    en_us: 'English',
    ko_kp: '한국어',
    ru_ru: 'русский'
  },
  login: '登录',
  logout: '登出',
  loginMsg: {
    error: '登录失败，请稍后再试',
    locked: 'iwallet钱包已锁定，解锁后请刷新该页面！',
    nowallet: '请先下载钱包，<a href="https://chrome.google.com/webstore/detail/kncchdigobghenbbaddojjnnaogfppfj">点击下载</a>',
    notmain: '当前钱包网络为测试网络，请切换到主网账号，再刷新该页！'
  },
  balance:'余额',
  accountTip:'如需切换账号，请在钱包（iWallet）内切换账号后，再次刷新页面。',
  usedResource:'已用资源',
  dice: '骰子',
  arena: '竞拍',
  dividend:'分红',
  rule: "交易规则",
  RuleMsg: {
    1: {
      title: '关于我们',
      list: {
        1: 'iDEX 致力于为 IOST 用户提供安全、快速和去中心化的交易体验，是重塑 IOST 生态系统的重要平台。未来，iDEX 还将不断优化功能、提升用户体验，并与更多 DeFi 项目和服务结合，推动 IOST 生态的进一步发展。通过 iDEX，用户不仅能够参与去中心化交易，还能够享受更丰富的金融服务，实现资产的自主管理和增值。'
      }
    },
    2: {
      title: '手续费',
      list: {
        1: '手续费比率为0.2%'
      }
    }


  },

  colon: '：',
  exchange: '交易',
  account: '账户名',
  nodata:'暂无数据',

  exchangeContent: {
    symbolInfo: {
      newPrice: '最新成交价',
      lastPrice: '上一小时成交均价',
      lastVolumn: '上一小时成交数量',
      percent_24h: '24小时涨跌幅',
      volumn_24h: '24小时成交数量',
      amount_24h: '24小时成交额',
      maxprice_24h: '24小时最高价',
      minprice_24h: '24小时最低价',
      coindesc:'币种介绍',
      symbolCode:'代币代码',
      maxSupply:'最大发行量',
      supply:'已发行量',
      website:'官方网址',
      scan: '浏览器',
      twitter: '推特',
      telegram: '电报',
    },
    loginToSee:"登录后可查看交易数据",
    loginToTrade:"登录后进行交易",
    buy: "买入",
    sell: "卖出",
    buyPrice: "买入价",
    sellPrice: "卖出价",
    buyVolumn: "买入量",
    sellVolumn: "卖出量",
    newList: '最新成交',
    tokens: '市场',
    percent: '涨跌',
    price: '价格',
    volumn: '数量',
    amount: '金额',
    time: '时间',
    tradeAmount: '交易额',
    balance: '余额',
    toGetWin: '预计获得-+symbol+- -+symbolNum+-个',
    tradeDetail: '交易明细',
    buyUser:"买方",
    sellUser:"卖方",
    calVolumn:"结算数量",
    list: {
      myOrders: '我的委托',
      hisOrders: '历史成交',
      refresh:'刷新',
      symbolType: '币种',
      direction: '方向',
      orderTime: '委托时间',
      orderPrice: '委托价',
      orderVolumn: '委托数量',
      finishVolumn: '成交量',
      finishAmount: '成交额',
      status: '状态',
      statusf1:"未处理",
      status0:"未成交",
      status1:"部分成交",
      status2:"全部成交",
      status3:"撤单",
      query:"查询",
      operation: '操作',
      orderHash: '委托哈希',
      finishTime: '成交时间',
      finishPrice: '成交价',
      toUser: '成交对象',
      fee: '手续费',
      finishHash: '成交哈希'
    },

    info: {
      success:{
        buy: '买入挂单成功，等待撮合！',
        sell: '卖出挂单成功，等待撮合！',
        cancel: '撤单成功！',
      },
      error:{
        emptyBuyPrice:'请输入买入价！',
        emptyBuyVolumn:'请输入买入量！',
        emptyAmount:'请输入交易额！',
        limitAmount:"最小交易额不能小于1 IOST！",
        balance:"-+symbol+-余额不足！",
        emptySellPrice:'请输入卖出价！',
        emptySellVolumn:'请输入卖出量！',

      }
    }
  },
  page:{
    totalRecords:"共-+totalRecords+-条记录",
    first:"首页",
    preview:"上一页",
    last:"尾页",
    next:"下一页"

  }
  ,
  all:"全部",
  my:{
    all:"所有币种",
    nozero:"非零资产",
    totalAmount:"当前资产总估值",
    frozen:"冻结中",
    tradingAmount:"交易中",
    amount:'估值',
    goTrade:'去交易'
  },
  competition:"交易大赛",
  competitionMsg:{
    beginTime:"开始时间：",
    endTime:"结束时间：",
    viewDetail:"查看详情",
    totalPrize:"奖池总金额",
    rank:"名次",
    account:"账号",
    amount:"成交额",
    prize:"奖金"


  },
  communityApp:"社区版APP"
};
