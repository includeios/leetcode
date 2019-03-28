/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let index = 1
  let resultString = ''
  const config = {
    1:'I',
    5:'V',
    10:'X',
    50:'L',
    100:'C',
    500:'D',
    1000:'M'
  }
  const toRoman = (index,chart)=>{
    let string = ''
    if (chart == 9) {
      string = config[index] + config[index*10]
    }
    else if (chart < 9 && chart > 4) {
      string = config[index*5]
      for (let i = 5; i < chart; i++) {
        string += config[index]
      }
    }
    else if (chart == 4) {
      string = config[index] + config[index * 5]
    }
    else {
      for (let i = 0; i < chart; i++) {
        string += config[index]
      }
    }

    return string
  }

  while(num >= 1){
    const chart = num % 10
    resultString = toRoman(index,chart)+resultString
    num = parseInt(num/10)
    index = index * 10
  }

  return resultString
};