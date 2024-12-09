export default {
  message: {
    hello: 'Hello',
    welcome: 'Welcome to our application',
    // 其他英文翻译...
  },
  select: {
    placeholder: 'selcet',
    noMatch: 'no Data',
    loading: 'loading'
  },
  notice: 'Notice',
  noticeMsg: window.notice_en_us,
  systemMaintaining: 'System Maintaining...',
  comingSoon: 'Coming Soon',
  lang: 'English',
  tv_lang:'en',
  languages: {
    zh_cn: '简体中文',
    zh_hk: '繁體中文',
    en_us: 'English',
    ko_kp: '한국어',
    ru_ru: 'русский'
  },
  login: 'Login',
  logout: 'Logout',
  loginMsg: {
    error: 'Login failed, Please try again later.',
    locked: 'The iwallet wallet is locked. Please refresh the page after unlocking!',
    nowallet: 'Please download the wallet first, <a href="https://chrome.google.com/webstore/detail/kncchdigobghenbbaddojjnnaogfppfj">click to download</a>',
    notmain: 'The current wallet network is the test network, please switch to the main network account, and then refresh the page!'
  },
  balance:'Balance',
  accountTip:'To switch accounts, please switch the account again in the wallet (iWallet) and refresh the page again.',
  usedResource:'Used Resources',
  dice: 'Dice',
  arena: 'Arena',
  dividend:'Dividend',
  rule: "Trading Rules",
  RuleMsg: {
    1: {
      title: 'About Us',
      list: {
        1: 'iDEX is committed to providing IOST users with a secure, fast, and decentralized trading experience, serving as an important platform for reshaping the IOST ecosystem. In the future, iDEX will continuously optimize its features and enhance user experience while collaborating with more DeFi projects and services to promote further development of the IOST ecosystem. Through iDEX, users can not only participate in decentralized trading but also enjoy a wider range of financial services, achieving independent asset management and value appreciation.'
      }
    },
    2: {
      title: 'Trading Fee',
      list: {
        1: 'The trading fee ratio is 0.2%'
      }
    }


  },

  colon: ':',
  exchange: 'Exchange',
  account: 'Account',
  nodata:'No Data',
  exchangeContent: {
    symbolInfo: {
      newPrice: 'Latest Price',
      lastPrice: 'Last Hour Price',
      lastVolumn: 'Last Hour Volume',
      percent_24h: '24H Change',
      volumn_24h: '24H Volume',
      amount_24h: '24H Total',
      maxprice_24h: '24H High',
      minprice_24h: '24H Low',
      coindesc: 'Introduction',
      symbolCode: 'Token Code',
      maxSupply: 'Max Supply',
      supply: 'Available Supply',
      website: 'Website',
      scan: 'Browser',
      twitter: 'Twitter',
      telegram: 'Telegram',
    },
    loginToSee:"Login to show trading data.",
    loginToTrade:"Login to trade",
    buy: "Buy",
    sell: "Sell",
    buyPrice: "Buy Price",
    sellPrice: "Sell Price",
    buyVolumn: "Buy Volume",
    sellVolumn: "Sell Volume",
    newList: 'Latest Deals',
    tokens: 'Pair',
    percent: 'Change',
    price: 'Price',
    volumn: 'Volume',
    amount: 'Amount',
    time: 'Time',
    tradeAmount: 'Amount',
    balance: 'Balance',
    toGetWin: 'Expected to get -+symbol+- -+symbolNum+-',
    tradeDetail: 'Transaction Details',
    buyUser:"Buyer",
    sellUser:"Seller",
    calVolumn:"Billing Volume",
    list: {
      myOrders: 'My Commission',
      hisOrders: 'History Orders',
      symbolType: 'Symbol',
      direction: 'Direction',
      orderTime: 'Commission Time',
      orderPrice: 'Commission Price',
      orderVolumn: 'Commission Volume',
      finishVolumn: 'Finish Volume',
      finishAmount: 'Finish Amount',
      status: 'Status',
      statusf1:"Unprocessed",
      status0:"Unfilled",
      status1:"Partial Dealed",
      status2:"All Dealed",
      status3:"Cancel",
      query:"Query",
      operation: 'Operation',
      orderHash: 'Commission Hash',
      finishTime: 'Finish Time',
      finishPrice: 'Finish Price',
      toUser: 'To User',
      fee: 'Fee',
      finishHash: 'Finish Hash'
    },

    info: {
      success:{
        buy: 'Buy order post successfully, wait for the match!',
        sell: 'Sell order post successfully, wait for the match!',
        cancel: 'Successful withdrawal!',
      },
      error:{
        emptyBuyPrice:'Please enter the buy price!',
        emptyBuyVolumn:'Please enter the buy volume!',
        emptyAmount:'Please enter the amount!',
        limitAmount:"The minimum amount cannot be less than 1 IOST!",
        balance:"-+symbol+-Insufficient balance!",
        emptySellPrice:'Please enter the sell price!',
        emptySellVolumn:'Please enter the sell volume!',

      }
    }
  },
  page:{
    totalRecords:"Total -+totalRecords+- Records",
    first:"Home",
    preview:"Previous",
    last:"Last",
    next:"Next"

  },
  all:"ALL",
  my:{
    all:"All Token",
    nozero:"Value>0 IOST",
    totalAmount:"Current Estimated Value",
    frozen:"Frozen",
    tradingAmount:"Trading",
    amount:'Valuation',
    goTrade:'Exchange'

  },
  competition:"Trading Contest",
  competitionMsg:{
    beginTime:"Start Time:",
    endTime:"End Time:",
    viewDetail:"View Details",
    totalPrize:"Total Prize",
    rank:"Rank",
    account:"Account",
    amount:"Amount",
    prize:"Bonus"


  },
  communityApp:"Community App"
};
