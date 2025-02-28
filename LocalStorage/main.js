// // window.open()
// let btn = document.querySelector('#btn_open');
// let google;
// btn.onclick = () => {
//     google = window.open("https://google.com", 'Google');  
// };
// let cls = document.querySelector("#btn_cls");
// cls.onclick = () => google.close();


let inp = document.querySelector('#inp')
let store = document.querySelector ('#str')

store.onclick = () => {
    window.localStorage.setItem("Fio", inp.value)
}


let get_btn = document.querySelector('#get')

get_btn.onclick = () => {
    let item = window.localStorage.getItem('Fio');
    alert(item)
}

window.onload = () => {
    let name = window.localStorage.getItem('Fio');
    if(name){
        document.querySelector('#nnn').textContent = name
    }
}


function getCookies(){
    const cookies = document.cookie.split('; ');
    return cookies
}

function setCookies(name, value, days){
    const date = new Date()

    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name} = ${value}; excpires = ${date.toUTCString()}; path='/`
}

setCookies('name', 'd', 64)