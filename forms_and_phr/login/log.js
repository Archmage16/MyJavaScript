const form = document.querySelector("#login_form");
form.onsubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);

    const username = formData.get("username")
    const password = formData.get("password")

    if(username.toLowerCase() === 'admin' && password === "Qwerty132"){
        alert("Hi boss");
    } else{
        alert("You are not my boss ng!")
    }
}
/////
const temp = /^\+\d{11}$/;
const email = /^([0-9A-Za-z-_]+)@([0-9A-Za-z-_]+)\.([A-Za-z])/;
const phoneNum = "+77078081234"
console.log(temp.test(phoneNum));