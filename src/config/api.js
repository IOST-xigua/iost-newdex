const _socketUrl = import.meta.env.VITE_SOCKET_URL // https://ws.iostdex.club/
const _apiUrl = import.meta.env.VITE_API_URL // https://api.iostdex.club/
const _socketIostUrl = import.meta.env.VITE_SOCKET_IOST_URL // https://ws.iostdex.club/

export default {
  globalSocket: _socketUrl,
  diceSocket: _socketUrl + 'dice',
  bidSocket: _socketUrl + 'bid',
  dividendSocket: _socketUrl + 'dividend',
  serverSeed: _apiUrl + 'serverseed',
  getBalance: _apiUrl + 'getBalance',
  myBetsList: _apiUrl + 'dice/mybets/',
  bidRecord: _apiUrl + 'bid/id/',
  payoutLogs: _apiUrl + 'dividend/his/',
  rankList: _apiUrl + 'dice/contest/',
  iostWin: _socketIostUrl,
  orders: _apiUrl + 'trade/orders/',
  his: _apiUrl + 'trade/his/',
  exDetail: _apiUrl + 'trade/detail/',
  chart: _apiUrl + 'chart',
  competition: _apiUrl + 'trade/competition/',
  tradingAmount:_apiUrl +'trade/tradingAmount'
}



// WEBPACK FOOTER //
// ./src/config/api.js