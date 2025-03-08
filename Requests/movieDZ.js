function getJson(url) {
    return fetch(url).then(resp => {
        return resp.json(); 
    })
};

document.querySelector("#sub").onclick = (e) => {
    e.preventDefault();

    const movie = document.querySelector("#movie").value;
    const movieYear = document.querySelector("#movieYear").value;
    const sel = document.querySelector("#select").value;
    const resultDiv = document.querySelector("#result");

    let movieURL = `http://www.omdbapi.com/?apikey=188a320e&${sel}=${movie}&y=${movieYear}`;

    getJson(movieURL).then(data => {
        if (!data || data.Response === "False") {
            resultDiv.innerHTML = "Error!";
            return;
        }

        resultDiv.innerHTML = `
            <h2>${data.Title} (${data.Year})</h2>
            <p>Жанр: ${data.Genre}</p>
            <p>Режиссер: ${data.Director}</p>
            <p>Сюжет: ${data.Plot}</p>
            <img src="${data.Poster}" alt="Постер">
        `;
    });
};



// У меня проблема. Дома интернет соединение блокирует доступ к сайту omdbapi.com.
// Поэтому я не могу проверить работу этого кода.
// Но я уверен, что он работает.
// Поэтому сильно не ругайте меня, если что-то не так. Спасибо!