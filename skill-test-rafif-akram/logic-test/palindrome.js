function palindrome(string) {
    if (string.toUpperCase() == string.toUpperCase().split('').reverse().join('')) {
        return (string + ' # --> palindrome')
    }
    else {
        return (string + ' # --> not palindrome')
    }
}
console.log(palindrome("Radar"))
console.log(palindrome("Malam"))
console.log(palindrome("Kasur ini rusak"))
console.log(palindrome("Ibu Ratna antar ubi"))
console.log(palindrome("Malas"))
console.log(palindrome("Makan nasi goreng"))
console.log(palindrome("Balonku ada lima"))
