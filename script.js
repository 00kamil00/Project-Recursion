function fibs(n) {
    const result = [0, 1]
    
    if (n <= 0 ) {
        return []
    } else if (n === 1) {
        return [0]
    } else if (n === 2) {
        return [0, 1]
    }

    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result
}

console.log(fibs(8))



function fibsRec(n) {
    if (n <= 0) return []
    if (n === 1) return [0]
    if (n === 2) return [0, 1]

    const prev = fibsRec(n - 1)
    prev.push(prev[prev.length - 1] + prev[prev.length - 2])
    return prev
}

console.log(fibsRec(8))





function merge(left, right) {
    let result = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++    
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}



function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft, sortedRight)
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
