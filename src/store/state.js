import IOST from '@/assets/images/logo/IOST.png'
import WIN from '@/assets/images/logo/WIN.png'

const nowDay = new Date()
nowDay.setHours(0)
nowDay.setMinutes(0)
nowDay.setSeconds(0)
nowDay.setMilliseconds(0)
const nowDayTimestamp = nowDay.valueOf()
const state = {
  nowDayTimestamp: nowDayTimestamp, // 当日0点时间戳
  startTime: window.startTime, // 数据开始时间
  iostNode: window.iostNode,
  connected: false, // scatter连接状态
  isDebug:window.isDebug,
  currentAccount: null, // 当前账号
  system: { // 我们的账号
    diceAccount: window.diceAccount,
    lockAccount: window.lockAccount,
    handlerContract:window.handlerContract,
    tradeContract:window.tradeContract,
    Locking: 0, // 已锁定总额
    LockingSymbol: window.defaultSymbol, // 锁定的币种
    UnLocking: 0, // 正在解锁总额
    UnLockingSymbol: window.defaultSymbol, // 解锁的币种,
    maxSupply: 0, // 总供应量
    supplySymbol: window.defaultSymbol,
    supply: 0 // 流通量
  },
  currencies: window.currencies, // 虚拟币种类
  minDiceLimit: {
    IOST: 20,
    WIN: 0.1
  },
  minSlotLimit: {
    IOST: 10,
    WIN: 100
  },
  currencyIcons: { // 币种图标
    IOST,
    WIN
  },
  contract: window.contract, // 不同币种对应合约的账户
  table: window.table, // 合约中的各个表
  symbol: window.coreSymbol, // 当前币种
  coreSymbol: window.coreSymbol, // 核心币种
  defaultSymbol: window.defaultSymbol, // 默认代币币种
  betPrice: -1, // 核心币种和默认代币的汇率
  referrer: localStorage.getItem('referrer') === null ? '' : localStorage.getItem('referrer'), // 推荐账号
  seed: localStorage.getItem('seed') === null ? '' : localStorage.getItem('seed'), // 种子
}

export default state



// WEBPACK FOOTER //
// ./src/store/state.js