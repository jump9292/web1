// immutable Object 새로운 객체 만들기, 변경할 수 없는, 불변의 (=unchangeable)
const previousObj = {
    name : "crong",
    lastTime : "11:20"
}

const myHealth = Object.assign({}, previousObj, {
    "lastTime" : "12:30", //새로운 값으로 대체
    "name" :  "hounx",
    "age" : 99
})

console.log("myhealth is ", myHealth)
console.log(previousObj ===  myHealth)

//새로운 객체 반환할 때, 아주 유용하게 사용할 수 있다.
