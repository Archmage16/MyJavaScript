// let f = document.querySelector("#h1");
// let s = document.querySelector("#h2");

// // console.log(f);
// // console.log(s);

// f.innerHTML = "HIII";
// f.style.fontSize = "52px";


// let h = document.querySelectorAll('h2')
// for (let i of h){
//     console.log(i)
// }


let f = document.querySelector("#h1");
let s = document.querySelector("#h2");
let th = document.querySelector("#h3");
let fr = document.querySelector("#h4");
const l = [f, s, th]
function t(){
    console.log("GLORP!!!");
}

for (let i of l){
    i.onclick = () => t()
}


fr.addEventListener('click', function(){
    console.log('!!!PROLG');
})


function clickFunc(e) {
    console.log(e);
    if (e.type === 'click'){
        console.log('YES');
    }
}