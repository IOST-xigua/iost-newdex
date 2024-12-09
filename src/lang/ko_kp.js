export default {
  message: {
    hello: '안녕하세요',
    welcome: '우리 애플리케이션에 오신 것을 환영합니다',
    // 其他韩语翻译...
  },
  select: {
    placeholder: 'selcet',
    noMatch: 'no Data',
    loading: 'loading'
  },
  notice: '공지',
  noticeMsg: window.notice_ko_kp,
  systemMaintaining: '시스템 유지 중...',
  comingSoon: '개발 중...',
  lang: '한국어',
  tv_lang:'ko',
  languages: {
    zh_cn: '简体中文',
    zh_hk: '繁體中文',
    en_us: 'English',
    ko_kp: '한국어',
    ru_ru: 'русский'
  },
  login: '로그인',
  logout: '로그 아웃',
  loginMsg: {
    error: '로그인에 실패 했습니다. 잠시 후 다시 시도하십시오',
    locked: 'iwallet 지갑이 잠겨 있습니다. 잠금 해제 후 페이지를 새로 고침하십시오!',
    nowallet: '먼저 지갑을 다운로드하고 <a href="https://chrome.google.com/webstore/detail/kncchdigobghenbbaddojjnnaogfppfj"> 다운로드하려면 클릭하십시오 </a>.',
    notmain: '현재 지갑 네트워크는 테스트 네트워크입니다. 기본 네트워크 계정으로 전환 한 다음 페이지를 새로 고침하십시오!'
  },
  balance:'균형',
  accountTip:'계정을 전환하려면 지갑 (iWallet)에서 계정을 다시 전환하고 페이지를 다시 새로 고침하십시오.',
  usedResource:'사용 된 자원',
  dice: '전갈',
  arena: '경매',
  dividend:'배당금',
  rule: "거래 규칙",
  RuleMsg: {
    1: {
      title: '회사 소개',
      list: {
        1: 'IOSTDEX는 최초의 IOST 분산 교환기입니다.'
      }
    },
    2: {
      title: '수수료',
      list: {
        1: '취급 수수료율은 0.2 %입니다.'
      }
    }


  },

  colon: ':',
  exchange: '거래',
  account: '계정 이름',
  nodata:'데이터가 없습니다.',
  exchangeContent: {
    symbolInfo: {
      newPrice: '최근 거래 가격',
      lastPrice: '지난 시간의 평균 가격',
      lastVolumn: '지난 1 시간 분량',
      percent_24h: '24 시간 변경',
      volumn_24h: '24 시간 볼륨',
      amount_24h: '24 시간 합계',
      maxprice_24h: '24 시간 높음',
      minprice_24h: '24H 낮음',
      coindesc: '소개',
      symbolCode: '토큰 코드',
      maxSupply: '최대 공급',
      supply: '공급',
      website: '사이트',
      scan: '브라우저',
      twitter: '트위터',
      telegram: '전보',
    },
    loginToSee:"거래 데이터를 표시하려면 로그인하십시오.",
    loginToTrade:"무역 로그인",
    buy: "사다",
    sell: "팔다",
    buyPrice: "구매 가격",
    sellPrice: "판매 가격",
    buyVolumn: "구매량",
    sellVolumn: "볼륨 판매",
    newList: '최신 거래',
    tokens: '코인명',
    percent: '변경',
    price: '가격',
    volumn: '볼륨',
    amount: '금액',
    time: '시간',
    tradeAmount: '금액',
    balance: '균형',
    toGetWin: '도착 예정 -+symbol+- -+symbolNum+-',
    tradeDetail: '거래 세부 정보',
    buyUser:"구매자",
    sellUser:"판매자",
    calVolumn:"결제 볼륨",
    list: {
      myOrders: '내 커미션',
      hisOrders: '연혁 주문',
      symbolType: '기호',
      direction: '방향',
      orderTime: '커미션 시간',
      orderPrice: '수수료 가격',
      orderVolumn: '주문 수',
      finishVolumn: '마감 볼륨',
      finishAmount: '마침 금액',
      status: '주',
      statusf1:"처리되지 않은",
      status0:"채워지지 않은",
      status1:"부분 거래",
      status2:"모든 거래",
      status3:"취소",
      query:"쿼리",
      operation: '조작',
      orderHash: '위원회 해시',
      finishTime: '거래 시간',
      finishPrice: '거래 가격',
      toUser: '트랜잭션 객체',
      fee: '수수료',
      finishHash: '마침 해시'
    },

    info: {
      success:{
        buy: '대기중인 주문을 성공적으로 구매하고 경기를 기다립니다.',
        sell: '대기중인 주문을 성공적으로 판매하고 경기를 기다립니다.',
        cancel: '성공적인 철수!',
      },
      error:{
        emptyBuyPrice:'입찰가를 입력하십시오!',
        emptyBuyVolumn:'구매 금액을 입력하십시오!',
        emptyAmount:'거래 금액을 입력하십시오!',
        limitAmount:"최소 거래 금액은 1 IOST보다 낮을 수 없습니다!",
        balance:"-+symbol+- 불균형!",
        emptySellPrice:'판매 가격을 입력하십시오!',
        emptySellVolumn:'판매 금액을 입력하십시오!',

      }
    }
  },
  page:{
    totalRecords:"총 -+totalRecords+- 기록",
    first:"집",
    preview:"이전",
    last:"마지막",
    next:"다음"

  },
  all:"모든",
  my:{
    all:"모든 통화",
    nozero:"0이 아닌 자산",
    totalAmount:"현재 자산 총 평가",
    frozen:"동결",
    tradingAmount:"거래 중",
    amount:'평가',
    goTrade:'거래'

  },
  competition:"거래 컨테스트",
  competitionMsg:{
    beginTime:"시작 시간 :",
    endTime:"종료 시간 :",
    viewDetail:"세부 사항보기",
    totalPrize:"총 상금 금액",
    rank:"순위",
    account:"계정",
    amount:"거래 금액",
    prize:"보너스"


  },
  communityApp:"커뮤니티 앱"

};
