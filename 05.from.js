function addMark() {

    // let newData = [];
    //  for (let i = 0; i < arguments.length; i++) {
    //     newData.push(arguments[i] + "!");
    //  }
    //  console.log(newData)

    //arguments부터 from을 사용한다
    let newArray = Array.from(arguments); //가짜배열
    let newData = newArray.map(function (value) {
        return value + "!";
    })
    console.log(newData);
}
addMark(1,2,3,4,5)

//가변적 parma!!
