// Задание №1
// class Bank{
//     constructor(credits, deposits){
//         this.credits = credits // in percent
//         this.deposits = deposits
//     }

//     give_credit(summ, term){
//         let forMonth = summ / term
//         forMonth += ((this.credits * summ) / 100)
//         return Math.round(forMonth)
//     }
// }

// const b1 = new Bank(12,10)
// console.log(b1.give_credit(500000, 12));


// Задание №2
// class Good{
//     constructor (name, price, category){
//         this.name = name
//         this.price = price
//         this.category = category
//     }

//     price_with_discount(percent){
//         this.price = this.price - Math.round((this.price * percent) / 100)
//         return this.price
//     }
// }
// class Shop{
//     constructor() {
//         this.goods = [];
//     }

//     addGood(...good){
//         this.goods.push(...good)
//         return this.goods
//     }

//     searchGood_byName(name){
//         const good = this.goods.find(g => g.name.toLowerCase() === name.toLowerCase())
//         return good ? true : false
//     }
//     searchGood_byCategory(category){
//         const good = this.goods.find(g => g.category.toLowerCase() === category.toLowerCase())
//         return good ? true : false
//     }
// }
// const g1 = new Good('Pen', 1000, 'School')
// // console.log(g1.price_with_discount(50));
// const g2 = new Good('Pencil', 500, 'School')

// const sh1 = new Shop()
// console.log(sh1.addGood(g1,g2));
// console.log(sh1.searchGood_byName('Pen'));
// console.log(sh1.searchGood_byCategory("Pen"));




// Задание №3

// const p = {
//     weekDays : 7,
//     monthDays: 30,
//     monthWeek: 4
// }
// for (let key in p){
//     console.log(`${key}: ${p[key]}`);
// }




// Задание №4

// class Phone {
//     constructor (brand, model, year, price){
//         this.brand = brand
//         this.model = model
//         this.year = year
//         this.price = price
//     }

//     printPhoneInfo(){
//         console.log('Pnone name | model | year of issue');
//         return `| ${this.brand} | ${this.model} | ${this.year} |`
//     }
// }

// const p1 = new Phone('Samsung', 'S23', '2023', 239000)
// const p2 = new Phone('iPhone', '16ProMax', '2024',250000)

// function Compare(ph1, ph2){
//     if (ph1.price > ph2.price){
//         console.log(`${ph1.brand} prices is bigger than ${ph2.brand}`);
//     } else if (ph1.price < ph2.price){
//         console.log(`${ph2.brand}  prices is bigger than ${ph1.brand}`);
//     } else{
//         console.log('They equal');
//     }
// }
// Compare(p1, p2)





// Доп задание №3

// const park = {
//     cars: [
//         {
//             brand : "Toyota Camry",
//             year : "2008"
//         },
//         {
//             brand : "Chevrolet Cobalt",
//             year : "2004"
//         },
//         {
//             brand : "Ford Mustang Shelby® GT500",
//             year : "2022"
//         },
//         {
//             brand : "Porsche panamera",
//             year : "2020"
//         }
//     ]
// }

// for (let i in park.cars){
//     console.log(`${park.cars[i].brand} was maden in ${park.cars[i].year}`);
// }