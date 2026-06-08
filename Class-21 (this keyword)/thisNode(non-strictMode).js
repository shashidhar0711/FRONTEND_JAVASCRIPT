// NODE JS NON STRICT MODE WHICH IS THE DEFAULT ONE
// global
// console.log(this)

// function
function Test() {
    console.log(this)
}

Test()

// object

// let obj = {
//     name: 'shashi',
//     age: 27,
//     fn: function() {
//         console.log(this)
//     }
// }

// obj.fn()

// nested function

let obj = {
    name: 'shashi',
    age: 27,
    fn: function() {
        let nested = function() {
            console.log(this)
        }
        // console.log(this)
    }
}

console.log(obj.fn())