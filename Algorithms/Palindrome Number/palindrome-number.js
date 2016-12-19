/**
 * @param {number} x
 * @return {boolean}
 */
// with extra space
var isPalindrome = function(x) {
    let text = x.toString().split('');
    for (let i = 0, j = text.length - 1; i < j; i++) {
        if (text[i] !== text[j]) return false
        j--
    }
    return true
};
// without extra space
var isPalindrome = function(x) {
    if (x < 0) return false
    if (x < 10) return true
    if (x % 10 === 0) return false
    let suf = x % 10;
    let pre = parseInt(x / 10);
    while (pre > suf) {
        suf = suf * 10 + pre % 10
        pre = parseInt(pre / 10)
    }
    if (suf > pre) suf = parseInt(suf / 10)
    return suf === pre ? true : false
}
