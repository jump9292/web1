//Object assign method
const healthObj = {
    showHealth : function() {
        console.log("운동시간: " + this.healTime)
    }
}

// Object.create prototype 기반의 object를 만든다.
// object의 class method
const myHealth = Object.create(healthObj); //쉽게 object 객체를 만들 수 있다.
myHealth.healthTime = "11:20"
myHealth.name = "crong";
// console.log(myHealth);

const yourHealth  = Object.assign(Object.create(healthObj), {
    name : "crong",
    lastTime : "11:20"
});
console.log("yourHealth is " + yourHealth)

