//setPrototypeOf
//parent
const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 : ", this.healthTime)
    },
    setHealth : function(newTime) {
        this.healthTime = newTime;
    }
}

//child obj
const healthChildObj = {
    getAge :  function() {
        return this.age;
    }
}

//Prototype 체인
Object.setPrototypeOf(healthChildObj, healthObj)

const childObj = Object.setPrototypeOf({
    age : 22
}, healthChildObj)

childObj.setHealth("11:55")
childObj.showHealth();
// console.log("childobj is ", childObj)
//이미 존재하는 메소드를 재사용할 수 있다. 상속
