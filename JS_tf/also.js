// function area_rectangle(a, b = a){
//     return a*b
// }
// console.log(area_rectangle(3,4));
// console.log(area_rectangle(3));


// function average_value(...args){
//     let sum = 0
//     let l = []
//     for (let i of args){
//         sum += i
//         l.push(i)
//     }
//     console.log(sum/l.length);
// }
// average_value(1,2,3,4,5)


// const time = new Date(); // Первая попытка
// console.log(`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`);
function time_seconds(seconds){
    return `${Math.floor(seconds / 3600)} : ${Math.floor((seconds % 3600) / 60)} : ${Math.floor(seconds%60)}`
}
console.log(time_seconds(4560));