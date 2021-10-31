function fizzBuzz(a) {
    let yokk = []
    for (let i = 1; i <= 20; i++) {
        if (i % 15 === 0) {
            yokk.push("FizzBuzz")
        } else if (i % 5 === 0) {
            yokk.push("Buzz")
        } else if (i % 3 === 0) {
            yokk.push("Fizz")
        } else {
            yokk.push(i)
        }
    }
    console.log(yokk.join(","))
}
fizzBuzz(20)