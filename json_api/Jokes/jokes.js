async function getJSON(url) {
    const resp = await fetch(url);
    return resp.json();
}

getJSON("https://v2.jokeapi.dev/joke/Any").then(data =>{
    console.log(data);
    let jokes_type = document.createElement('p');
    jokes_type.textContent = data['category'];
    let body = document.querySelector('body');
    body.append(jokes_type);
    
    if (data["type"] == 'twopart'){
        let setup = document.createElement('h3');
        setup.textContent = "- " + data['setup'];
        let delivery = document.createElement('h3');
        delivery.textContent = "- " + data['delivery']

        body.append(setup, delivery);

    } else{
        let joke = document.createElement('h3');
        joke.textContent = data['joke'];

        body.append(joke);
    }
})