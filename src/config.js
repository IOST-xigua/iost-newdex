window.languages = [
  'zh_cn', 'zh_hk', 'en_us', 'ko_kp','ru_ru'
]

window.isDebug=false //测试
window.iostNode=isDebug?'http://13.52.105.102:30001':'https://api.iost.io'
window.currencies = ['IOST'] // 虚拟币种类
window.coreSymbol = 'IOST' // 核心币种
window.defaultSymbol = 'HELLO_IOST' // 默认代币币种

window.socketUrl =isDebug?"http://test.com:800/":'https://ws.iostdex.club/'
window.apiUrl = isDebug?"http://test.com:801/api/":'https://api.iostdex.club/api/'
window.dSymbols = 'hello_iost' //默认socket币种

window.tradeContract= { // 交易所合约地址
  name: isDebug?'Contract3GtyY11gzFeZDn5Qy9QbRHZNBaSKJnkE62PhsSVpvRD3':'ContractAKVEAFWhWLeNQT8jVmtSLfh2QKeCH9sZhBs691PGV56t'
}
// ContractBqYBBN1JuvvcmbaWkbSv6Pa334UJinM9vTPWPC2hvUDL
Number.prototype.toFixed = function (fractionDigits) {

  //没有对fractionDigits做任何处理，假设它是合法输入
  return transNum(Math.round(this.mul(Math.pow(10, fractionDigits))).div(Math.pow(10, fractionDigits)));
};


Number.prototype.add = function (arg2) {
  let arg1 = transNum(this);
  arg2 = transNum(arg2)
  return arg1.add(arg2)
};

Number.prototype.sub = function (arg2) {
  arg2 = transNum(arg2)

  return this.add("-"+arg2 );
};

Number.prototype.mul = function (arg2) {
  let arg1 = transNum(this);
  arg2 = transNum(arg2)
  return arg1.mul(arg2)
};

Number.prototype.div = function (arg2) {
  let arg1 = transNum(this);
  arg2 = transNum(arg2)
  return arg1.div(arg2)
};

String.prototype.add = function (arg2) {
  let arg1 = transNum(this);
  arg2 = transNum(arg2)

  let r1 = 0, r2 = 0;
  if (arg1.indexOf(".") !== -1)
    r1 = arg1.split(".")[1].length;
  if (arg2.indexOf(".") !== -1)
    r2 = arg2.split(".")[1].length;
  let m = Math.pow(10, Math.max(r1, r2));

  return (Math.floor(arg1.mul(m)+arg2.mul(m)).div(m))
};

String.prototype.sub = function (arg2) {
  arg2 = transNum(arg2)

  return this.add("-"+arg2 );
};

String.prototype.mul = function (arg2) {
  let arg1 = transNum(this);
  arg2 = transNum(arg2)


  let m = 0;
  if (arg1.indexOf(".") !== -1)
    m += arg1.split(".")[1].length;
  if (arg2.indexOf(".") !== -1)
    m += arg2.split(".")[1].length;
  return arg1.replace(".", "") * arg2.replace(".", "") / Math.pow(10, m)
};

String.prototype.div = function (arg2) {
  let arg1 = transNum(this);
  arg2 = transNum(arg2)
  var e = 0;
  var f = 0;
  if (arg1.indexOf(".") !== -1)
    e += arg1.split(".")[1].length;
  if (arg2.indexOf(".") !== -1)
    f += arg2.split(".")[1].length;
  arg1 = arg1.replace(".", "");
  arg2 = arg2.replace(".", "");
  return (arg1 / arg2).mul(Math.pow(10, f - e));
};
transNum=function (num) {

  let str =Math.abs(num.toString());
  let fuhao=num<0?"-":''
  let reg = /^((-?\d+.?\d*)[Ee]{1}(-?\d+))$/;
  let zero = '';
  if (!reg.test(str)) {
    return fuhao+str
  } else {
    let arr = reg.exec(str);
    let len = Math.abs(arr[3])-1;
    for (let i = 0; i < len; i++) {
      zero += '0'
    }
    return fuhao+'0.' + zero + arr[2].replace(".", "")
  }
}
