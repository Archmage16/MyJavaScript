// function sum(a,b){return a + b}

// const sum = (a,b) => a + b;
// console.log(sum(5,1))

// const l = [1,2,3,4,5];
// function l_summ(list, s = 0) {
//     for (let n of list){
//         s+=n
//     };
//     return s;
// }

// console.log(l_summ(l));


// function ret_all(...args){
//     for (let i of args){
//         console.log(i);
//     }
// }
// ret_all(l)


const years = [2020,2021,2023,2024]

// function year_is_leap(year){
//     if(year % 4 ===0){
//         if(year % 100 === 0){
//             return year % 400 === 0
//         } return true
//     }
//     return false
// }

// function year_is_leap(year){
//     return (year % 4 ===0 && (year % 100 !== 0 || year % 400 === 0));
// }
// function print_1(...year){
//     for (let i of year){
//         if (year_is_leap(i)) { 
//             console.log(i);
//         }
//     }
// }
// print_1(years)


// function countDigits(num){
//     num = Math.abs(num)
//     if (num > 10){
//         return 1
//     }
//     return 1 + countDigits(Math.floor(num / 10))
// }

