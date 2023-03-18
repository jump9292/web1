//참조를 가지고 있는 객체만 저장이 가능하다.
//객체형태를 중복없이 저장하려고 할때 유용하다.
//가비지 컬렉션


let arr = [1,2,3,4]
let arr2 = [5,6,7,8]
let obj = {arr, arr2}

let ws = new WeakSet();

ws.add(arr);
ws.add(arr2)
ws.add(obj)

console.log(ws.has(arr))
console.log(ws.has(arr2))

ws.delete(arr);
console.log(ws.has(arr))
console.log(ws.has(arr2))
console.log(ws.delete(obj))
console.log(ws.has(obj))


// ws.add(1111);
// ws.add("1111")
//ws.add(null);
// ws.add(function() {
// })
//TypeError: Invalid value used in weak set, 유효하지 않은 값.
//참조를 모니터링

// arr = null;

// console.log(ws)

