let weatherBar = document.querySelector(".weather-bar");
let input = document.querySelector("input");
input.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        loadData();
    }
})

let userInput = input.value;


function loadData() {
    userInput = (input.value);
    console.log(userInput);
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=8e644a76a975f196db59b4ed6593aaa6&units=metric`);

    xhr.addEventListener('readystatechange', function () {

        if (xhr.readyState === xhr.DONE) {
            // console.log(xhr.responseText)
            let data = JSON.parse(xhr.responseText);

            console.log(data);
            formData(data);

        }
    });
    xhr.send(null);
}



function formData(data) {

    for (let i = 0; i < data.list.length; i += 8) {
        console.log(i)
        if (i == 0) {
            //add city name
            let today = document.querySelector(".today-weather");
            today.innerHTML = "";

            let cityName = document.createElement("h2");
            cityName.textContent = data.city.name;
            today.appendChild(cityName);
            console.log(cityName)

        }
        let today = document.querySelector(".today-weather");

        //add day, icon, temp, description
        let weekName = document.createElement("h4");
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let dt = data.list[i].dt;
        let d = new Date(dt * 1000);
        weekName.textContent = dayNames[d.getDay()];

        today.appendChild(weekName);

        let icon = document.createElement("img");
        let iconInConsole = data.list[i].weather[0].icon;
        icon.src = `http://openweathermap.org/img/wn/${iconInConsole}@2x.png`;
        today.appendChild(icon);

        let temperature = document.createElement("h3");
        temperature.textContent = `${data.list[i].main.temp}°`;
        today.appendChild(temperature);

        let tempName = document.createElement("h3");
        tempName.textContent = `${data.list[i].weather[0].main}`;
        today.appendChild(tempName);
        if (i == 0) {
            let today = document.querySelector(".today-weather");

            // add wind, pressure, humidity, cloudiness
            let characteristics = document.createElement("div");
            characteristics.setAttribute("class", "characteristics")
            today.appendChild(characteristics);


            let wind = document.createElement("h4");
            wind.textContent = `wind: ${data.list[i].wind.speed}m/s`;
            characteristics.appendChild(wind);

            let pressure = document.createElement("h4");
            pressure.textContent = `Pressure:${data.list[i].main.pressure} hPa`
            characteristics.appendChild(pressure);


            let humidity = document.createElement("h4");
            humidity.textContent = `humidity : ${data.list[i].main.humidity}`;
            characteristics.appendChild(humidity);

            let cloudiness = document.createElement("h4");
            cloudiness.textContent = `Cloudiness:${data.list[i].clouds.all}%`;
            characteristics.appendChild(cloudiness);


        }

    }
}