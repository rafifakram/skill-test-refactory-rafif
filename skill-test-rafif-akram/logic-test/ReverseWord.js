function reverse(string) {
    let ReverseWord = string.split(" ").map(item => item.split("").reverse().join(""));
    return ReverseWord.join(" ");
}

console.log(reverse("I am A Great human"))