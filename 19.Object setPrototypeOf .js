//setPrototpyeOf, Object assign과 비슷하다.

const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간: " + this.healthTime);
    },
    //메소드 추가
    setHealth : function(newTime) {
        this.healthTime = newTime;
    }
}

// const myHealth = { //일반객체
//     name : "crong",
//     lastTime : "11:20"
// }
//
// Object.setPrototypeOf(myHealth, healthObj); //prototype으로 간단히 지정할 수 있다.

const newObj = Object.setPrototypeOf({
    name : "crong",
    lastName : "11:20"
}, healthObj)

console.log("newObject => ", newObj)
// console.log("myhealth is ", myHealth)

//polyfill
//폴리필((웹 브라우저상의 기능을 구현하는 플러그인))
//그립겠지.. 아쉽겠지..
