function outer() {
    let count = 0

    function inner() {
        count++;
        console.log(count)
    }

    return inner
}

const counter = outer() // returns the inner element but still access the count variables this is called forming a closure

counter()
counter()
counter()
