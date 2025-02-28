// function table_times(n){
//     for (let i = 1; i <= 9; i++){
//         console.log(n * i);
//     }
// }
// table_times(100)


// function calc(a,b,method){
//     switch(method) {
//         case '+':
//             return a + b
//             break
//         case '-':
//             return a - b
//             break
//         case '*':
//             return a * b
//             break
//         case '/':
//             return a / b
//             break
//         case '//':
//             return Math.floor(a / b)
//             break
//         case '%':
//             return a % b
//             break
//         default:
//             return "None"
//       }
// }

// console.log(calc(10, 4, "//"));


// function even_or_odd(a,b, t = true){
//     if (a > b){
//         let temp;
//         temp = a;
//         a = b;
//         b = temp;
//     }
//     let l = []
//     let o = []
//     for (let i = a; i <= b; i++){
//         if (i%2==0){
//             l.push(i)
//         } else{
//             o.push(i)
//         }
//     }
//     if (t){
//         console.log(l);
//     } else{
//         console.log(o);
//     }
// }
// even_or_odd(20,1,false)


// function is_palindrome(n){
//     let a = String(n)
//     let rev_n = ''
//     for (let i = a.length - 1; i >= 0; i--){
//         rev_n += a[i]
//     }
//     if (a === rev_n){
//         console.log(`${a} - is palindrome`);
//     } else{
//         console.log(`${a} - is not palindrome`);
//     }
// }
// is_palindrome(1221)
// is_palindrome(3123)




// function summ_numbers(...args){
//     let sum = 0
//     for (let i of args){
//         sum += i
//     }
//     console.log(sum);
// }

// summ_numbers(1,2)
// summ_numbers(1,2,3,4,5)


// function combine_numbers(...args){
//     let sum = ''
//     for (let i of args){
//         sum += i
//     }
//     console.log(sum);
// }
// combine_numbers(1,4,9)


// function max_of_num(...args){
//     let sum = []
//     for (let i of args){
//         sum.push(i)
//     }
//     let max = sum[0];
//     for (let i = 1; i < sum.length; i++) {
//         if (sum[i] > max) {
//             max = sum[i];
//         }
//     }
//     console.log(max);
// }
// max_of_num(1,4,9,1000)




// function fact(n){
//     if (n <= 2){
//         return n
//     } else{
//         n = n * fact(n-1)
//         return n
//     }
// }
// console.log(fact(6));