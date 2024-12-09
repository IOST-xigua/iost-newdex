export default {
  message: {
    hello: '你好',
    welcome: '歡迎使用我們的應用',
    // 其他繁体中文翻译...
  },
  select: {
    placeholder: '请选择',
    noMatch: '无匹配数据',
    loading: '加载中'
  },
  notice: '公告',
  noticeMsg: window.notice_zh_hk,
  systemMaintaining: '系統維護中...',
  comingSoon: '开发中...',
  lang: '繁體中文',
  tv_lang:'zh_TW',
  languages: {
    zh_cn: '简体中文',
    zh_hk: '繁體中文',
    en_us: 'English',
    ko_kp: '한국어',
    ru_ru: 'русский'
  },
  login: '登錄',
  logout: '登出',
  loginMsg: {
    error: '登錄失敗，請稍後再試',
    locked: 'iwallet錢包已鎖定，解鎖後請刷新該頁面！',
    nowallet: '請先下載錢包，<a href="https://chrome.google.com/webstore/detail/kncchdigobghenbbaddojjnnaogfppfj">點擊下載</a>\n',
    notmain: '當前錢包網絡為測試網絡，請切換到主網賬號，再刷新該頁！'
  },
  balance:'餘額',
  accountTip:'如需切換賬號，請在錢包（iWallet）內切換賬號後，再次刷新頁面。',
  usedResource:'已用資源',
  dice: '骰子',
  arena: '競拍',
  dividend:'分紅',
  rule: "交易規則",
  RuleMsg: {
    1: {
      title: '關於我們',
      list: {
        1: 'IOSTDEX為首家IOST去中心化交易所。'
      }
    },
    2: {
      title: '手續費',
      list: {
        1: '手續費比率為0.2%'
      }
    }


  },

  colon: '：',
  exchange: '交易',
  account: '賬戶名',
  nodata:'暫無數據',
  exchangeContent: {
    symbolInfo: {
      newPrice: '最新成交價',
      lastPrice: '上一小時成交均價',
      lastVolumn: '上一小時成交數量',
      percent_24h: '24小時漲跌幅',
      volumn_24h: '24小時成交數量',
      amount_24h: '24小時成交額',
      maxprice_24h: '24小時最高價',
      minprice_24h: '24小時最低價',
      coindesc:'幣種介紹',
      symbolCode:'代幣代碼',
      maxSupply:'最大發行量',
      supply:'已發行量',
      website:'官方網址',
      scan: '瀏覽器',
      twitter: '推特',
      telegram: '電報',      
    },
    loginToSee:"登錄後可查看交易數據",
    loginToTrade:"登錄後進行交易",
    buy: "買入",
    sell: "賣出",
    buyPrice: "買入價",
    sellPrice: "賣出價",
    buyVolumn: "買入量",
    sellVolumn: "賣出量",
    newList: '最新成交',
    tokens: '市場',
    percent: '漲跌',
    price: '價格',
    volumn: '数量',
    amount: '金額',
    time: '時間',
    tradeAmount: '交易額',
    balance: '餘額',
    toGetWin: '預計獲得-+symbol+- -+symbolNum+-個',
    tradeDetail: '交易明細',
    buyUser:"買方",
    sellUser:"賣方",
    calVolumn:"結算數量",
    list: {
      myOrders: '我的委託',
      hisOrders: '歷史成交',
      symbolType: '幣種',
      direction: '方向',
      orderTime: '委託時間',
      orderPrice: '委託價',
      orderVolumn: '委託數量',
      finishVolumn: '成交量',
      finishAmount: '成交額',
      status: '狀態',
      statusf1:"未處理",
      status0:"未成交",
      status1:"部分成交",
      status2:"全部成交",
      status3:"撤單",
      query:"查詢",
      operation: '操作',
      orderHash: '委托哈希',
      finishTime: '成交時間',
      finishPrice: '成交價',
      toUser: '成交對象',
      fee: '手續費',
      finishHash: '成交哈希'
    },

    info: {
      success:{
        buy: '買入掛單成功，等待撮合！',
        sell: '賣出掛單成功，等待撮合！',
        cancel: '撤單成功！',
      },
      error:{
        emptyBuyPrice:'請輸入買入價！',
        emptyBuyVolumn:'請輸入買入量！',
        emptyAmount:'請輸入交易額！',
        limitAmount:"最小交易額不能小於1 IOST！",
        balance:"-+symbol+-餘額不足！",
        emptySellPrice:'請輸入賣出價！',
        emptySellVolumn:'請輸入賣出量！',

      }
    }
  },
  page:{
    totalRecords:"共-+totalRecords+-條記錄",
    first:"首頁",
    preview:"上一頁",
    last:"尾頁",
    next:"下一頁"

  },
  all:"全部",
  my:{
    all:"所有幣種",
    nozero:"非零資產",
    totalAmount:"當前資產總估值",
    frozen:"凍結中",
    tradingAmount:"交易中",
    amount:'估值',
    goTrade:'去交易'

  },
  competition:"交易大賽",
  competitionMsg:{
    beginTime:"開始時間：",
    endTime:"結束時間：",
    viewDetail:"查看詳情",
    totalPrize:"獎池總金額",
    rank:"名次",
    account:"賬號",
    amount:"成交額",
    prize:"獎金"


  },
  communityApp:"社區版APP"
};
