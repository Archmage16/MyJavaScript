// function aver_of_3(a, b, c) {
//     return (a + b + c) / 3;
// }
// console.log(aver_of_3(1, 2, 3));



// function compare_2_numbers(a,b,method){
//     switch(method) {
//         case '>':
//             return a > b
//             break
//         case '>=':
//             return a >= b
//             break
//         case '<':
//             return a < b
//             break
//         case '<=':
//             return a <= b
//             break
//         case '==':
//             return a==b
//             break
//         case '!=':
//             return a != b
//             break
//         default:
//             return "None"
//               }
// }

// console.log(compare_2_numbers(1,2,'<='));
 

// function abs_minus(a,b){
//     return Math.abs(a) - Math.abs(b)
// }
// console.log(abs_minus(1,2));


// function summ_numbers(...args){
//     let sum = 1
//     for (let i of args){
//         sum *= i
//     }
//     console.log(sum);
// }

// summ_numbers(1,2)
// summ_numbers(1,2,3,4,5)


// function summ_numbers(...args){
//     let pos = []
//     let neg = []
//     for (let i of args){
//         if (i > 0){
//             pos.push(i)
//         } else if (i < 0){
//             neg.push(i)
//         } else {
//             console.log("Its 0");
            
//         }
//     }
//     console.log(pos);
//     console.log(neg);
    
// };
// summ_numbers(1,2,3,-4,-5);


// function isPrimeRecursive(n, current = 2) {
//     if (n <= 1) return false; 
//     if (current === n) return true;
//     if (n % current === 0) return false;

//     return isPrimeRecursive(n, current + 1);
// }
// console.log(isPrimeRecursive(121));
