module.exports = function reverse (n) {
    if(n < 0) {
        n *= -1
    }
   let num  = Number(String(n).split('').reverse().join(''))
  return num
}
