export default {
  message: {
    hello: 'Привет',
    welcome: 'Добро пожаловать в наше приложение',
    // 其他俄语翻译...
  },
  select: {
    placeholder: 'selcet',
    noMatch: 'no Data',
    loading: 'loading'
  },
  notice: 'Уведомления',
  noticeMsg: window.notice_en_us,
  systemMaintaining: 'Технические работы...',
  comingSoon: 'Анонсы',
  lang: 'Русский',
  tv_lang:'en',
  languages: {
    zh_cn: '简体中文',
    zh_hk: '繁體中文',
    en_us: 'English',
    ko_kp: '한국어',
    ru_ru: 'русский'
  },
  login: 'Вход',
  logout: 'Выход',
  loginMsg: {
    error: 'Ошибка входа, попробуйте позже.',
    locked: 'IWallet не доступен. Выполните вход в IWallet затем обновите страницу!',
    nowallet: 'Для начала работы загрузите и установите кошелек IWallet, <a href="https://chrome.google.com/webstore/detail/kncchdigobghenbbaddojjnnaogfppfj">нажмите для загрузки</a>',
    notmain: 'Вы находитесь в тестовой сети, пожалуйста измените сеть на основную и обновите страницу!'
  },
  balance:'Баланс',
  accountTip:'Для смены пользователя - смените пользователя в IWallet и обновите страницу.',
  usedResource:'Ресурсы',
  dice: 'Кости',
  arena: 'Аукцион',
  dividend:'Дивиденды',
  rule: "Правила торговли",
  RuleMsg: {
    1: {
      title: 'О нас',
      list: {
        1: 'IOSTDEX - первая децентрализированная криптобиржа на платформе IOST'
      }
    },
    2: {
      title: 'Комиссия',
      list: {
        1: 'Комиссия за исполненный ордер 0.2%'
      }
    }


  },

  colon: ':',
  exchange: 'Биржа',
  account: 'Кабинет',
  nodata:'Нет данных',
  exchangeContent: {
    symbolInfo: {
      newPrice: 'Посл. цена',
      lastPrice: 'Посл. цена за час',
      lastVolumn: 'Объем за час',
      percent_24h: 'Суточн. изменение',
      volumn_24h: 'Суточный объем',
      amount_24h: 'Всего за сутки',
      maxprice_24h: 'Суточн. макс',
      minprice_24h: 'Суточн. мин',
      coindesc: 'Введение',
      symbolCode: 'Имя токена',
      maxSupply: 'Всего токенов',
      supply: 'Токены в обороте',
      website: 'Оф. сайт',
      scan: 'браузер',
      twitter: 'твиттер',
      telegram: 'телеграмм',
    },
    loginToSee:"Войдите чтобы увидеть данные",
    loginToTrade:"Войдите чтобы начать торговать",
    buy: "Покупка",
    sell: "Продажа",
    buyPrice: "Цена покупки",
    sellPrice: "Цена продажи",
    buyVolumn: "Кол-во",
    sellVolumn: "Кол-во",
    newList: 'Последние сделки',
    tokens: 'Пара',
    percent: 'Измен.',
    price: 'Цена',
    volumn: 'Кол-во',
    amount: 'Итого',
    time: 'Время',
    tradeAmount: 'Итого',
    balance: 'Баланс',
    toGetWin: 'Ожидается получение -+symbol+- -+symbolNum+-',
    tradeDetail: 'Транзакция',
    buyUser:"Покупатель",
    sellUser:"Продавец",
    calVolumn:"Кол-во",
    list: {
      myOrders: 'Мои ордера',
      hisOrders: 'История',
      symbolType: 'Токен',
      direction: 'Действие',
      orderTime: 'Дата',
      orderPrice: 'Цена',
      orderVolumn: 'Кол-во',
      finishVolumn: 'Конеч. цена',
      finishAmount: 'Конеч. кол-во',
      status: 'Статус',
      statusf1:"В обработке",
      status0:"Не исполнен",
      status1:"Испол. частично",
      status2:"Исполнен",
      status3:"Отменен",
      query:"Транз.",
      operation: 'Действия',
      orderHash: 'Хэш комиссии',
      finishTime: 'Дата исполнения',
      finishPrice: 'Цена исполнения',
      toUser: 'Для пользов.',
      fee: 'Комиссия',
      finishHash: 'Хэш'
    },

    info: {
      success:{
        buy: 'Ордер на покупку успешно размещен!',
        sell: 'Ордер на продажу успешно размещен!',
        cancel: 'Статус вывода:успешно!',
      },
      error:{
        emptyBuyPrice:'Пожалуйста,Укажите цену для покупки!',
        emptyBuyVolumn:'Пожалуйста,Укажите кол-во для покупки!',
        emptyAmount:'Пожалуйста,Введите кол-во!',
        limitAmount:"Минимальное кол-во 1 IOST!",
        balance:"-+symbol+-Недостаточно средств!",
        emptySellPrice:'Пожалуйста,Укажите цену для продажи!',
        emptySellVolumn:'Пожалуйста,Укажите кол-во для продажи!',

      }
    }
  },
  page:{
    totalRecords:"Всего -+totalRecords+- записей",
    first:"Домой",
    preview:"Назад",
    last:"Последн.",
    next:"Дальше"

  },
  all:"ALL",
  my:{
    all:"Все токены",
    nozero:"Доступные",
    totalAmount:"Общий баланс",
    frozen:"Заморожено",
    tradingAmount:"в сделке",
    amount:'Эквивалент',
    goTrade:'Торговать'

  },
  competition:"Конкурсы",
  competitionMsg:{
    beginTime:"Старт:",
    endTime:"Конец:",
    viewDetail:"Подробнее",
    totalPrize:"Общий приз",
    rank:"Ранг",
    account:"Аккаунт",
    amount:"Кол-во",
    prize:"Бонус"


  },
  communityApp:"Community App"
};
