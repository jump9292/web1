// const myObj = {name : "crong", changedValue : 0}
// const proxy = new Proxy(myObj, {
const proxy = new Proxy({name : "crong", changedValue : 0}, {
    //target Object
    get : function(target, property, receiver) {
        console.log("get value")
        // return target[property];
        // return Reflect.get(target, property, receiver)
        return(property in target) ? target[property] : "anonymous"
    },
    set : function(target, property, value) {
        console.log('set value')
        target['changedValue']++; //input 값, 데이타 바인딩 작업
        target[property] = value;
    }
});

console.log(proxy.name);
console.log(proxy.changedValue);

// proxy.name = "jisu";
// console.log(proxy.name);

// 값을 인터셉션해서 추가적인 작업을 할 수 있다.

// console.log(proxy.name);
// console.log(toString.call(proxy)); //type을 알 수 있어.
// console.log(proxy);
// console.log(myObj);
// console.log(proxy === myObj);
// console.log(proxy.name === myObj.name);




