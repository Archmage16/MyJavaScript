// let person = {
//     name : "Mark",
//     age : 45,
//     height: 174, 
//     weight : 70,
//     nation : "Britan"
// };
// person['name'] = 'Alex',
// person.name = 'Alex'



// for (let k in person){
//     console.log(k, person[k]);
// }


// Object.keys(person).forEach(k => {
//     console.log(k, person[k]);
// })





// class Rect {
//     #height
//     #width
//     constructor(leftTop, rightBottom){
//         this.leftTop = leftTop;
//         this.rightBottom = rightBottom;

//         this.leftBottom = [this.leftTop[0], this.rightBottom[1]];
//         this.rightTop = [this.rightBottom[0],this.leftTop[1]];

//         this.#height = this.height;
//         this.#width = this.width;//Math.abs(this.rightBottom[0] - this.leftTop[0])
//     }

//     get height(){
//         this.#height = Math.abs(this.leftTop[1] - this.rightBottom[1])
//         return this.#height
//     }
//     set height(new_height){
//         let difference = this.height - new_height

//         if (new_height > this.height){
//             this.leftTop[1] += difference;
//             this.rightTop[1] += difference;
//         } else{
//             this.leftTop[1] -= difference;
//             this.rightTop[1] -= difference;
//         }
//     }

//     get width(){
//         return this.width
//     }
// }





class Book{
    constructor(title, author, genre){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isRead = false
    }

    toggleIsRead() {
        this.isRead = !this.isRead;
    }
}

class BookShelf{
    constructor() {
        this.books = [];
    }


    addBook(...book){
        this.books.push(...book)
    }

    searchBook(title){
        const book = this.books.find(b => b.title.toLowerCase() === title.toLowerCase())
        return book ? true : false
    }

    removeBook(title){
        if (this.searchBook(title)){
            this.books = this.books.filter(b => b.title.toLowerCase() !== title.toLowerCase());
            return true
        } else{
            return false
        }
    }
}


const s1 = new BookShelf()
const b1 = new Book('Harry Potter', 'J.K.Rowling', 'Fantasy');
const b2 = new Book('Fahrenheit 451', 'Ray Bradbury', 'Distopian')
const b3 = new Book('Dead souls', 'Nikolay Gogol', 'Satire')

s1.addBook(b1,b2,b3);
s1.removeBook('Fahrenheit 451')