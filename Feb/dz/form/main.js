let f = document.querySelector('#form')
f.onsubmit = (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    const ent = Object.fromEntries(d.entries());
    console.log(ent);
    if (ent['username'] === '') {
        alert('Name is required');
        return;
    }
    if (ent['email'] === '') {
        alert('Email is required');
        return;

    }
    if (ent['password'] === '') {
        alert('Password is required');
        return;

    }
    if (ent['password'] === ent['password_con']){
        f.style.display = 'none';
        document.querySelector('#result').style.display = 'block';
        document.querySelector('#result').innerHTML = `Добро Пожаловать ${ent['username']} !`;
    }else{
        document.querySelector('#result').style.display = 'block';
        document.querySelector('#result').innerHTML = `Пароли разные`;
    }
}