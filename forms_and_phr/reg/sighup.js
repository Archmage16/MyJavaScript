const form = document.querySelector("#login_form");
form.onsubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const email = formData.get("Email")
    const password = formData.get("password")
    const password_repeat = formData.get("password_repeat")

    const password_label = document.querySelector("#password_label");
    const passwordCheck = /[0-9A-Za-z]+/;
    

    const emailCheck = /^([0-9A-Za-z_-]+)@([0-9A-Za-z_-]+)\.(com)/;
    const email_label = document.querySelector("#email_label");
    if ((password.toLowerCase() === password_repeat.toLowerCase() && (passwordCheck.test(password))) && (emailCheck.test(email))){
        password_label.innerHTML = '';
        password_label.innerHTML = 'Password repeat:';
        email_label.innerHTML = ''
        email_label.innerHTML = 'Email:'
        console.log("ok");
    }else if(password.toLowerCase() != password_repeat.toLowerCase() || !passwordCheck.test(password) || (password.length < 6) || (password === '')){
        let span = document.createElement("span")
        span.innerText = "Wrong password"
        password_label.append(span)
    }else if (!emailCheck.test(email)){
        let span = document.createElement("span")
        span.innerText = "Wrong email"
        email_label.append(span)
    }else{
        alert('Error')
    }
    
}
