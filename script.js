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