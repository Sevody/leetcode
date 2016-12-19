/**
 * 冒泡排序
 * @param  {array} array [description]
 * @return {array}       [description]
 */
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

/**
 * 选择排序
 * @param  {array} array [description]
 * @return {array}       [description]
 */
var selectionSort = function(array) {
    console.time('selection sort:')
    for (let i = 0, len = array.length; i < len; i++) {
        let minPos = i
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[minPos]) minPos = j
        }
        [array[i], array[minPos]] = [array[minPos], array[i]]
    }
    console.timeEnd('selection sort:')
    return array
}

/**
 * 插入排序
 * @param {array} array [description]
 * @return {array} [description]
 */
var insertionSort = function(array) {
    console.time('insertion sort:')
    for (let i = 1, len = array.length; i < len; i++) {
        let target = array[i],
            j = i - 1
        while (j >= 0 && array[j] > target) {
            array[j+1] = array[j]
            j--
        }
        array[j+1] = target
    }
    console.timeEnd('insertion sort:')
    return array
}

/**
 * 快速排序
 * @param  {array} array [description]
 * @param  {int} left  [description]
 * @param  {int} right [description]
 * @return {array}       [description]
 */
var quickSort = function(array, left, right) {
    if (left < right) {
        let flag = left
        for (var i = left; i <= right; i++) {
            if (array[i] <= array[right]) {
                [array[flag], array[i]] = [array[i], array[flag]]
                flag++
            }
        }
        quickSort(array, left, flag - 2)
        quickSort(array, flag - 1, right)
    }
    return array
}

var mergeSort = function(array) {
    function splitArray(array) {
        if (array.length < 2) {
            return array
        }
        let middle = Math.floor(array.length / 2)
        let leftArr = array.slice(0, middle)
        let rightAee = array.slice(middle, array.length)
        return mergeArray
    }
    function mergeArray(array) {

    }
}

var test = (function(){
    let arr = Array.from({length: 100}, x => parseInt(Math.random()*100))
    console.time('quick sort:')
    let sortedArr = quickSort(arr, 0, arr.length-1)
    console.timeEnd('quick sort:')
    sortedArr.map((x, i, a) => {
        if (a[i] > a[i+1]) {
            console.warn('test fault')
        }
    })
    console.log('test success', sortedArr)
})()
