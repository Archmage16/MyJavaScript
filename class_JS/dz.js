// class Building{
//     constructor(height, width, len, floors, under){
//         this.height = height;
//         this.width = width;
//         this.len = len;
//         this.floors = floors;
//         this.isUnder = under;
//     }
//     getArea(){
//         return this.width * this.len * this.floors;
//     }
//     addFloor(){
//         this.floors++;
//     }
//     removeFloor(){
//         this.floors--;
//     }
//     toggleIsUnder(){
//         this.isUnder = !this.isUnder;
//     }
// }

// const b1 = new Building(10, 10, 10, 10, false); // in meters
// console.log(b1.getArea());
// b1.addFloor();





// class Employee{
//     constructor(name = '', place = '', salary = 0){
//         this.name = name;
//         this.place = place;
//         this.salary = salary;
//     }
// }
// class Company{
//     constructor(name, employees){
//         this.name = name;
//         this.employees = [];
//         for (let i = 0; i < employees; i++){
//             this.employees.push(new Employee("Employee" + i, "Place" + i, Math.floor(Math.random() * 1000)));
//         }
//     }
//     averageSalary(){
//         let sum = 0;
//         this.employees.forEach(e => sum += e.salary);
//         return sum / this.employees.length;
//     }
// }
// let c1 = new Company("Samsung", 100);
// console.log(c1.averageSalary());





// class Client {
//     constructor(name, address, phone) {
//       this.name = name;
//       this.address = address;
//       this.phone = phone;
//     }
  
//     checkProperties() {
//       const missingProperties = [];
      
//       if (this.name === '') missingProperties.push('name');
//       if (this.address === '') missingProperties.push('address');
//       if (this.phone === '') missingProperties.push('phone');
  
//       if (missingProperties.length > 0) {
//         console.error(`Ошибка: отсутствуют свойства: ${missingProperties}`);
//         return false;
//       }
      
//       console.log("Все свойства присутствуют.");
//     }
//   }
  
//   const client1 = new Client("Igor", "Turkestan 4/1", "+7 777 777 77 77");
//   client1.checkProperties();
  
//   const client2 = new Client("Dasha", "", "");
//   client2.checkProperties();