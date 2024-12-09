const matutaions = {
  setNode: (state, nodeId) => {
    state.nodeId = nodeId
    state.network = window.nodes[nodeId]
    localStorage.setItem('nodeId', nodeId)
  },
  getReferrer: (state) => {
    let key = 'ref'
    let referrer
    let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
    let r = window.location.search.substr(1).match(reg)
    if (r != null) {
      referrer = unescape(r[2])
      localStorage.setItem('referrer', referrer)
      state.referrer = referrer
    } else {
      referrer = localStorage.getItem('referrer')
      if (referrer != null) {
        state.referrer = referrer
      } else {
        state.referrer = ''
      }
    }
  },
  setSeed: (state, value) => {
    let reg = /^[a-zA-Z0-9.]{0,20}$/
    if (reg.test(value)) {
      localStorage.setItem('seed', value)
      state.seed = value
    }
  },
  setSymbol: (state, value) => {
    if (state.currencies.indexOf(value) !== -1) {
      state.symbol = value
    }
  },
  setBonusLimitStatus: (state, value) => {
    state.bonusLimitStatus = value
  },
  logout: (state) => {
    state.currentAccount = null
    state.userBets = []
  },
  setDiceAccount: (state, data) => {
    //console.log("setdiceaccount",data)
    let flag = false
    for (let key in data) {
      state.system.diceAccount[key] = data[key]
      flag = true
    }
    if (flag) {
      state.system = Object.assign({}, state.system)
    }
  },
  setMaxSupply: (state, data) => {
    let maxSupply = data.split(' ')
    state.system.maxSupply = parseFloat(maxSupply[0])
    state.system.supplySymbol = maxSupply[1]
  },
  setSupply: (state, data) => {
    let supply = data.split(' ')
    state.system.supply = parseFloat(supply[0])
    state.system.supplySymbol = supply[1]
  },
  setCurrentAccount: (state, data) => {
    let flag = false
    for (let key in data) {
      state.currentAccount[key] = data[key]
      flag = true
    }
    if (flag) {
      state.currentAccount = Object.assign({}, state.currentAccount)
    }
  }
}

export default matutaions



// WEBPACK FOOTER //
// ./src/store/mutations.js