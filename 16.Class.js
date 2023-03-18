//ES6 Class, 가독성 면에서 좋다.
//es5
function Health(name) {
    this.name = name;
}

Health.prototype.showHealth = function() {
    console.log(this.name + "님 안녕하세요.")
    //this 컨텍스트에 prototpye 하위의 속서, 메소드 포함 객체를 만들 수 있다.
}

const h = new Health("crong") //객체를 제너레이트
h.showHealth(); //new키워드를 불렀을 때, h는 객체다

//es6
class Health_01 { //모습만 class, function, prototype 객체안에 보완된다.
    //모듈와 가독성 좋다.
    constructor(name, lastTime) { //class constructor 기본내장
        this.name = name;
        this.lastTime = lastTime;
    }
    showHealth() {
        console.log("안녕하세요." + this.name)
    }
}

const myHealth = new Health_01("crong")
// myHealth.showHealth();
console.log(myHealth)
console.log(toString.call(Health_01)) //[object Function]
