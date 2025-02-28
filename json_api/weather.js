const KEY = "ffeda56192475cd336f29207a2bc7919";

let weather_btn = document.querySelector('#weather_btn')
let CITY = document.querySelector('#city');




weather_btn.onclick = (event) => {
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY.value}&appid=${KEY}&units=metric&lang=en`;

    async function getJSON(url){
        const resp = await fetch(url)
        return await resp.json()
    };

    getJSON(URL).then(data => {
        console.log(data);
        
        let post_article = document.createElement("article")

        let main_weather = document.createElement("h3")
        main_weather.textContent = `Weather in ${CITY.value} is ${data["weather"][0]["description"]}`
        let temperature = document.createElement("h3")
        temperature.textContent += `Temperature : ${data["main"]["temp"]}`
        let humidity = document.createElement("h3")
        humidity.textContent += `Humidity : ${data["main"]["humidity"]}`
        let wind_speed = document.createElement("h3")
        wind_speed.textContent += `Wind speed : ${data["wind"]["speed"]}`


        post_article.append(main_weather, temperature, humidity, wind_speed)
        document.querySelector("body").append(post_article)

        let q = [data["weather"][0]["description"], data["main"]["temp"], data["main"]["humidity"], data["wind"]["speed"]]
        window.localStorage.setItem("Astana", q)
    })
    
       
    
    
    
    event.preventDefault()
}

     


