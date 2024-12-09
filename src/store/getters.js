const getters = {
  getBetPrice: (state) => {
    return state.betPrice
  },
  getCurrentAccount: (state) => {
    return state.currentAccount
  },
  getReferrer: (state) => {
    return state.referrer
  },
  getSymbol: (state) => {
    return state.symbol
  },
  getSupplies: (state) => {
    return {
      maxSupply: state.system.maxSupply,
      supplySymbol: state.system.supplySymbol,
      supply: state.system.supply
    }
  },
  getCoreSymbol: (state) => {
    return state.coreSymbol
  },
  getDefaultSymbol: (state) => {
    return state.defaultSymbol
  },
  getBetNumberLimit: (state) => (winPercent, symbol) => {
    //console.log("222",state.system.diceAccount)
    if (state.system.diceAccount[symbol] > 0) {
        //最多赢取奖池的1/5金额
      return Math.floor(10000 * state.system.diceAccount[symbol] / 5 / (98 / winPercent)) / 10000
    } else {
      return 0
    }
  }
}

export default getters



// WEBPACK FOOTER //
// ./src/store/getters.js