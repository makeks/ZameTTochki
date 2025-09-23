// console.log(123)
// //переменнные
// var nameVar = "value";
// let nameLet = 'Value';
// const nameConst = "Value";




// console.log(nameConst)

// let str = "Значение переменной nameVar = " + nameVar
// let str2 = 'Значение переменной nameVar = ' + nameVar
// let str3 = `Значение переменной nameVar =  + ${nameVar + 32}`
// let str4 = new String('Значение....')

// let num = 1
// let num2 = 1.1
// let num3 = new Number(3)

// let bool = true
// let bool2 = false

// let arr = [1, 2, 3, 4]
// let arr2 = new Array(["asd", 'asda'])
// let arr3 = [1, '4',true, [1,1,1]]

// let obj = {
//     name: 'Alex',
//     age: 24,
//     children: [
//         {
//             name: 'Kate',
//             age: 2,
//             children:[  ]
//         }
//     ]
// }




// console.log(person.name)
// console.log(person.children[0].name)

// function sum(x,y){
//     const result = x + y;
//     return result
// }
// const res = sum(1,2)
// console.log(res)

const btnNote = document.getElementById("btn-note")
console.log(btnNote)
function btnClichHandler(){
    console.log("Вы гэй")
}
btnNote.addEventListener('click',btnClichHandler)