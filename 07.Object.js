//obj 리터럴

function getObj() {
    const name = "crong";
    const getName = function() {
        return name;
    }
    const setName = function (newname) {
        name = newname;
    }

    const printName = function() {
        console.log(name)
    }

    return {
        // getName : getName,
        // setName : setName
        getName, setName
    }
}

let obj = getObj();
console.log(obj.getName());





