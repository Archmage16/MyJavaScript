let b = document.querySelector("#Like");
let n = b.querySelector("#count");

let u50 = document.querySelector("#upgrade50")
let u100 = document.querySelector("#upgrade100")
let u1000 = document.querySelector("#upgrade1000")

let m = document.querySelector("#money")

let c1 = 0

b.onclick = () => {
    c1++;
    n.innerText = c1;
    if (c1 >= 50){
        u50.style.display = 'block';
    }
    if (c1 >= 100){
        u100.style.display = 'block'
    }
    if (c1 >= 1000){
        u1000.style.display = 'block'     
    }
};
let c = 0


u50.onclick = () =>{
    c1 -= 50
    n.innerText = c1;
    if (c1 < 0){
        c1 = 0
        n.innerText = c1;
    }
    if (c1 < 50){
        u50.style.display = 'none';
    } else{
        u50.style.display = 'block';
    }
    c += 10
    m.innerText = c;

};
u100.onclick = () =>{
    c1 -= 100
    n.innerText = c1;
    if (c1 < 0){
        c1 = 0
        n.innerText = c1;
    }
    if (c1 < 100){
        u100.style.display = 'none';
    } else{
        u100.style.display = 'block';
    }
    c += 100
    m.innerText = c;
};
u1000.onclick = () =>{
    c1 -= 1000
    n.innerText = c1;
    if (c1 < 0){
        c1 = 0
        n.innerText = c1;
    }
    if (c1 < 1000){
        u1000.style.display = 'none';
    } else{
        u1000.style.display = 'block';
    }
    c += 1000
    m.innerText = c;
};
