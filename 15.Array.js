// rest prameters, 매개변수 ...이들어갔다. 배열로 받는다.
// function checkNum() {
//     const argArray = Array.prototype.slice.call(arguments);
//     console.log(toString.call(argArray));
//     const result = argArray.every((v) => typeof v === "number")
//     console.log(result);
// }

function checkNum(...argArray) {
    console.log(toString.call(argArray));
    const result = argArray.every((v) => typeof v === "number")
    console.log(result);
}

const result = checkNum(10,2,3,4,5, false)
