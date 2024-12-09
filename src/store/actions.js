import axios from '../axios/index.js'
import api from '@/config/api.js'
import {div} from '@/util/common.js'
// import IOST from 'https://cdn.jsdelivr.net/npm/iost@0.1.22/dist/iost.min.js'
import TronWeb from 'tronweb'
const actions = {
  socket_connect: ({state}, value) => {
    console.log('GlobalSocket connected')
  },
  socket_PubMessage: ({state}, result) => {
    if (result.hasOwnProperty('price')) {
      if (!isNaN(parseFloat(result.price))) {
        state.betPrice = parseFloat(result.price)
      }
    }
    if (result.hasOwnProperty('lock')) {
      for (let key in result.lock) {
        let rs
        if (typeof result.lock[key] === 'string' && result.lock[key].constructor === String) {
          rs = result.lock[key].split(' ')
          state.system[key] = parseFloat(rs[0])
          state.system[key + 'Symbol'] = rs[1]
        } else {
          state.system[key] = result.lock[key]
        }
      }
    }
  },
  socket_disconnect: ({state}, value) => {
    console.log('GlobalSocket disconnected')
  },
  setSystemLock: ({state}, lock) => {
    //console.log("lock",lock)
    for (let key in lock) {
      let rs
      if (typeof lock[key] === 'string' && lock[key].constructor === String) {
        rs = lock[key].split(' ')
        state.system[key] = parseFloat(rs[0])
        state.system[key + 'Symbol'] = rs[1]
      } else {
        state.system[key] = lock[key]
      }
    }
  },
  setNode: ({commit}, nodeId) => {
    commit('setNode', nodeId)
  },
  getReferrer: ({commit}) => {
    commit('getReferrer')
  },
  setSeed: ({commit}, value) => {
    commit('setSeed', value)
  },
  // 设置DICE投注账户的余额(从掷骰子socket中获取)
  setDiceAccount: async ({commit}, data) => {
    commit('setDiceAccount', data)
  },
  // 设置总供应量(从分红socket中获取)
  setMaxSupply: async ({commit}, data) => {
    commit('setMaxSupply', data)
  },
  // 设置流通量(从分红socket中获取)
  setSupply: async ({commit}, data) => {
    commit('setSupply', data)
  },
  // 用户登录
  login: async ({dispatch, commit, state}) => {
    try {
      // 如果没连接过scatter,进行连接
      // if (!state.connected) {
      //  state.connected = await ScatterJS.scatter.connect('best')
      // }


      let accountName = await IWalletJS.enable()
      //console.log("IWalletJS.network",IWalletJS.network)
      if(state.isDebug==false&&IWalletJS.network=="TESTNET"){
        accountName="";
        throw {type: 'notmain'}
      }
      // if (state.connected) {
      // 如果连接成功，则进行登录
      // let result = await ScatterJS.scatter.getIdentity({accounts: [state.network]})
      // state.currentAccount = result.accounts[0]
      state.currentAccount = {name: accountName}
      // console.log("heare",state.currentAccount)
      await dispatch('getAccount')
      commit('getReferrer')
      // }
      return ''
    } catch (err) {
       console.log('login err', err)
      if (err.toString().indexOf('defined') > 0||err.toString().indexOf('find variable') > 0) {
        throw {type: 'nowallet'}
      } else {
        throw err
      }
    }
  },
  //cy增加。获取代币余额
  getSymbolBalance: async ({dispatch, commit, state}, data) => {
    const rpc = new IOST.RPC(new IOST.HTTPProvider(state.iostNode));
    if(Array.isArray(data)){
      //批量获取方式
      let id=""
      let key_fields=[]
      let str="\"W10=\""
      for(let i=0;i<data.length;i++){
        key_fields.push({key:"TB"+state.currentAccount.name,field: data[i].symbol},{key:"TF"+state.currentAccount.name,field: data[i].symbol})
      }
      let query={"id":"token.iost","key_fields":key_fields,"by_longest_chain":true}
      let result=await rpc._provider.send('post', "getBatchContractStorage", query)
      console.log(result)

    }else {
      let symbol = data.symbol;
      if (state.currentAccount != null ) {
        // 获取当前账户默认虚拟币余额
        let result=await rpc.blockchain.getBalance(state.currentAccount.name, symbol, 1)
        let balance = result.balance
        // data[symbol] =transNum(balance)
        data[symbol] = balance
        data[symbol+"_frozen"]=result.frozen_balances

          // 更新currentAccount
        commit('setCurrentAccount', data)
        return data;



      }
    }
  },
  // 获取用户信息(账户各个代币余额，CPU,NET用量，锁仓金额，解锁中的金额)
  getAccount: async ({dispatch, commit, state}) => {
    const rpc = new IOST.RPC(new IOST.HTTPProvider(state.iostNode));
    if (state.currentAccount != null) {
      //const iost = new IOST.IOST();

      //iost.setRPC(rpc);

      let data = {}

      // 获取当前基本虚拟币余额,cpu,net
      await rpc.blockchain.getAccountInfo(state.currentAccount.name, false).then((result) => {
        //console.log(result)
        data['IOST'] = parseFloat(result.balance)
        data['gasInfo'] = result.gas_info
        data['ramInfo'] = result.ram_info

      }).catch((err) => {
        console.log('err getAccount,', err)
      })

      // data['UnLocking'] = 0
      // data['UnLockingSymbol'] = state.defaultSymbol
      // data['UnLockingTime'] = null
      // // 获取当前账户默认虚拟币余额
      // await rpc.blockchain.getBalance(state.currentAccount.name, "win",1).then((result) => {
      //   //console.log(result)
      //   let balance = result.balance
      //   data["win"] = parseFloat(balance)
      //   //data["UnLockingList"]=result.frozen_balances
      //
      //
      // }).catch((err) => {
      //   console.log('err getAccount,', err)
      // })

      // 把所有代币余额为空的附默认值0
      for (let i in state.currencies) {
        // 如果没有余额且没有历史记录
        if (data[state.currencies[i]] == null && state.currentAccount[state.currencies[i]] == null) {
          data[state.currencies[i]] = 0
        }
      }




      // 更新currentAccount
      commit('setCurrentAccount', data)
    }
  },
  // 获取当前委托信息
  getOrders: async ({commit, state}, query) => {
    try {
      let url = api.orders
      if (state.currentAccount != null) {
        query["user"]= state.currentAccount.name
      }else
        return null;

      let res = await axios.http.post(url,query)
      return res.data
    } catch (err) {
      console.log('getOrders err')
      throw err
    }
  },
  // 获取交易大赛列表
  getCompetion: async ({commit, state}) => {
    try {
      let url = api.competition

      let res = await axios.http.get(url)
      return res.data
    } catch (err) {
      console.log('getCompetion err')
      throw err
    }
  },
  // 获取交易大赛奖金明细列表
  getCompetionDetail: async ({commit, state},id) => {
    try {
      let url = api.competition+""+id

      let res = await axios.http.get(url)
      return res.data
    } catch (err) {
      console.log('getCompetionDetail err')
      throw err
    }
  },
  getTokens: async ({commit, state}) => {
    try {
      let url = api.chart+'/all/'
      let res = await axios.http.get(url)
      return res.data
    } catch (err) {
      console.log('getTokens err')
      throw err
    }
  },
  // 获取历史成交信息
  getHis: async ({commit, state}, query) => {
    try {
      let url = api.his
        if (state.currentAccount != null) {
            query["user"]= state.currentAccount.name
        }else
            return null;

        let res = await axios.http.post(url,query)
        return res.data
    } catch (err) {
      console.log('getHis err')
      throw err
    }
  },
  // 获取明细
  getDetail: async ({commit, state}, info) => {
    try {
      let url = api.exDetail + info
      let res = await axios.http.get(url)
      return res.data
    } catch (err) {
      console.log('getHis err')
      throw err
    }
  },

  //撤单
  cancelOrder:async ({dispatch, commit, state}, data) => {
    try {
      //获取种子。
      if (state.currentAccount != null) {
        //console.log(res.data,res.data.seed_hash);
        //开始下注
        let iost = IWalletJS.newIOST(IOST);

        let tx = iost.callABI(state.system.tradeContract.name, "cancellations", [data.symbol,data.id.toString()]);
        //console.log(tx)
        //tx.addApprove("iost", parseFloat(data.quantity));
        var transfer = function () {
          return new Promise(async function (resolve, reject) {
            await iost.signAndSend(tx)
                .on('success', function(result) {
                  console.log(result)
                  resolve({code: '0', msg: JSON.stringify(result)})
                  // msg=JSON.stringify(result)
                  //log("res: " + JSON.stringify(result));
                })
                .on('failed', function(failed) {
                  resolve({code: '1', msg: failed})
                  // msg=failed
                  // resultcode="1"
                });
          })
        }
        let result = await transfer();
        if(result.code=="1"){

          if(result.msg.hasOwnProperty("message")) {
            let errmsg=result.msg.message;
            let ar_reg=[/Uncaught exception: ([^\n]*)\n/,/throw '([\w\W]*)'/,/error: ([\w\W]*)Stack tree/]

            for(let i=0;i<ar_reg.length;i++){
              let reg=ar_reg[i]
              if(reg.test(errmsg))
              {
                errmsg=errmsg.match(reg)[1];
                break;
              }
            }
            throw String(errmsg)
          }
          else
            throw String(result.msg)
        }else
          return ''

      } else {
        throw String('without login')
      }
    } catch (err) {
      console.log('cancelOrder err',err)
      throw err
    }
  },
  //买入卖出代币
  tradeCoins: async ({dispatch, commit, state}, data) => {
    console.log('state-000000---',state)
    try {
      //获取种子。
      if (state.currentAccount != null) {
        //console.log(res.data,res.data.seed_hash);
        //开始下注
        let iost = IWalletJS.newIOST(IOST);

        let tx = iost.callABI(state.system.tradeContract.name, "entrust", [data.symbol,data.price, data.quantity,data.isbuy.toString()]);
        if(data.isbuy==1){

          let accountLimit=(data.price.mul(data.quantity).add(5/(1e8))).toFixed(7)


          tx.addApprove("iost", accountLimit);
        }else{
          tx.addApprove(data.symbol, data.quantity);
        }
        console.log('tx-0000=====', tx)
        //tx.addApprove("iost", parseFloat(data.quantity));
        var transfer = function () {
          return new Promise(async function (resolve, reject) {
            await iost.signAndSend(tx)
                .on('success', function(result) {
                  console.log(result)
                  resolve({code: '0', msg: JSON.stringify(result)})
                  // msg=JSON.stringify(result)
                  //log("res: " + JSON.stringify(result));
                })
                .on('failed', function(failed) {
                  resolve({code: '1', msg: failed})
                  // msg=failed
                  // resultcode="1"
                });
          })
        }
        let result = await transfer();
        if(result.code=="1"){

          if(result.msg.hasOwnProperty("message")) {
            let errmsg=result.msg.message;
            let ar_reg=[/Uncaught exception: ([^\n]*)\n/,/throw '([\w\W]*)'/,/error: ([\w\W]*)Stack tree/]

            for(let i=0;i<ar_reg.length;i++){
              let reg=ar_reg[i]
              if(reg.test(errmsg))
              {
                errmsg=errmsg.match(reg)[1];
                break;
              }
            }
            throw String(errmsg)
          }
          else
            throw String(result.msg)
        }else
          return ''

      } else {
        throw String('without login')
      }
    } catch (err) {
      console.log('tradeCoins err',err)
      throw err
    }
  },
  // 用户登出
  logout: async ({commit, state}) => {
    // 如果没连接过scatter,进行连接

    commit('logout')
  },
  setCurrentAccount: ({commit}, data) => {
    commit('setCurrentAccount', data)
  },
  // 获取用户信息
  getChainAccount: async ({dispatch, commit, state}) => {
    try {
      let tronweb=window.tronWeb
      let accountName = await tronweb.defaultAddress.base58;
      //console.log("ssss",accountName)
      if (accountName != null) {
        //console.log(tronweb)
        //const iost = new IOST.IOST();

        //iost.setRPC(rpc);

        //var balance = await tronWeb.trx.getBalance(state.currentAccount.name);
        // 获取当前基本虚拟币余额,cpu,net
        //console.log("余额",state.currentAccount.name,balance)
        //return;
        let result=await tronweb.trx.getAccount(accountName)
        if(result.hasOwnProperty("balance")){
          return {account:accountName,balance: parseFloat(result.balance/1000000)}
        }
        //console.log(result)
        // await tronWeb.trx.getAccountResources(state.currentAccount.name).then((result) => {
        //   //console.log(result)
        //   //data['trx'] = parseFloat(result.balance/1000000)
        //   data['netInfo'] = {total:result.freeNetLimit,used:result.freeNetUsed?result.freeNetUsed:0}
        //   data['energyInfo'] = {total:result.EnergyLimit?result.EnergyLimit:0,used:result.EnergyUsed?result.EnergyUsed:0}
        //   //data['ramInfo'] = result.ram_info
        //
        // }).catch((err) => {
        //   console.log('err getAccount,', err)
        // })

      }
    } catch (err) {
      console.log('getChainAccount', err)
      if (err.toString().indexOf('defined') > 0||err.toString().indexOf('find variable') > 0) {
        throw {type: 'nowallet'}
      } else {
        throw err
      }
    }
  },
  // 买入箱子
  wrap: async ({dispatch, commit, state}, data) => {
    try {
      if (state.currentAccount == null){
        return;
      }
      let tronweb = window.tronWeb;
      let contract = await tronweb.contract().at("");
      let amount=parseInt(data.num*state.boxValue)*1000000
      //console.log(amount)
      let option={
        feeLimit: 1000000000,
        callValue: amount,
        shouldPollResponse: false
      }
      let result = await contract.buy(data.num,inviteId).send(option);
      //console.log(result);

    } catch (err) {
      console.log('buyBox err')
      console.log(err)
      if(err.hasOwnProperty("error"))
        throw err.error
      else
        throw err;
    }
  },
}

export default actions



// WEBPACK FOOTER //
// ./src/store/actions.js