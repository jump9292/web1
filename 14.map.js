// map & weakMap
// Array => set, weakset
// Object => map, weakMap

// map은 key,value


let wm = new WeakMap();
let myfun = function() {}
// 이 함숙 얼마나 실행됐지?를 알려고 할때,

wm.set(myfun,0);

// console.log(wm)

let cnt = 0;
for ( i = 0; i < 10; i++) {
    cnt = wm.get(myfun) //get value
    cnt++;
    wm.set(myfun, cnt);
}

console.log(wm.get(myfun));
myfun = null; //초기화 했을 때 가비지 컬렉션 대상이다.
console.log(wm.get(myfun));
console.log(wm.has(myfun));


