/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let zigzag = []
    let
};

var zQueue = function() {
    this.queue = []
}


var bubbleSort = function(array) {
    console.time('bubble sort:')
    for (let i = 0, len = array.length; i < len; i++) {
        for (let j = 0, len2 = len - i; j < len2; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    console.timeEnd('bubble sort:')
    return array
}

var test = (function(){
    let arr = Array.from({length: 100}, x => parseInt(Math.random()*100))
    let sortedArr = bubbleSort(arr)
    sortedArr.map((x, i, a) => {
        if (a[i] > a[i+1]) {
            console.warn('test fault')
        }
    })
    console.log('test success', sortedArr)
})()
