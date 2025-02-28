let number = document.querySelector("#number");
let Up1 = document.querySelector("#Up1");
let Up2 = document.querySelector("#Up2");

Up1.addEventListener("click", function(){
    if (parseInt(number.innerHTML) > 0) {
        number.innerHTML = parseInt(number.innerHTML) - 1;
    }
});
Up2.addEventListener("click", function(){
    if (parseInt(number.innerHTML) < 1000) {
        number.innerHTML = parseInt(number.innerHTML) + 1;
    }
});