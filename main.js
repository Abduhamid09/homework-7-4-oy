
function fn(...params) {
    target = 8
    let arr = []
    for (let i = 0; i < params.length; i++) {
        if (params[i] == target) {
            arr.push(i)
        }
    }
    console.log(arr);
}
fn(5, 7, 7, 8, 8, 10)


// 2 - masala


let obj1 = { num1: 1, num2: 2, num3: 3, num4: 4 }
let obj2 = { num5: 5, num6: 6, num7: 7, num8: 8 }
let result = Object.assign(obj1, obj2)
let result1 = Object.keys(result)
let result2 = Object.values(result)
let total = 0

for (let i = 0; i < result2.length; i++) {
    total = total + result2[i]
}
console.log(total)
console.log(result);
console.log(result2);
console.log(result1);


console.log("3-misol")


function fn(array) {
    let arr = [1, 2, 3, 4, 5]
    let max_value = Math.max(...arr)
    console.log(max_value + 'Max son');
    let a = max_value - array
    console.log(a + 'Farqi');




    let arr1 = [1, 2, 3, 4, 5]
    let min_value = Math.min(...arr1)
    console.log(min_value + 'min son');
    let b = parseInt(min_value - array)
    console.log(b + 'Farqi');
}
fn()
