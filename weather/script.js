// 8e644a76a975f196db59b4ed6593aaa6
let weatherBar = document.querySelector(".weather-bar");
// const mainContainer = document.querySelector(".main-container");
let button = document.querySelector("button");
let input = document.querySelector("input");

let userInput = input.value;


button.addEventListener("click", loadData)

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
    // 
    let today = document.querySelector(".today-weather");
    today.innerHTML = "";
    let cityName = document.createElement("h2");
    cityName.textContent = data.city.name
    today.appendChild(cityName);
    
    let weekName = document.createElement("h4");
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dt = data.list[0].dt;
    let d = new Date(dt * 1000);
    weekName.textContent = dayNames[d.getDay()];
    
    today.appendChild(weekName);
    
    let icon = document.createElement("img");
    let iconInConsole = data.list[0].weather[0].icon;
    icon.src = `http://openweathermap.org/img/wn/${iconInConsole}@2x.png`;
    today.appendChild(icon);
    
    let temperature = document.createElement("h3");
    temperature.textContent = `${data.list[0].main.temp.toFixed(0)}°`;
    today.appendChild(temperature);
    
    let tempName = document.createElement("h3");
    tempName.textContent = `${data.list[0].weather[0].main}`;
    today.appendChild(tempName);
    
    let characteristics = document.createElement("div");
    characteristics.setAttribute("class", "characteristics")
    today.appendChild(characteristics);
    
    
    let wind = document.createElement("h4");
    wind.textContent = `Wind: ${data.list[0].wind.speed}m/s`;
    characteristics.appendChild(wind);
    
    let pressure = document.createElement("h4");
    pressure.textContent = `Pressure:${data.list[0].main.pressure} hPa`
    characteristics.appendChild(pressure);
    
    
    let humidity = document.createElement("h4");
    humidity.textContent = `Humidity: ${data.list[0].main.humidity}%`;
    characteristics.appendChild(humidity);
    
    let cloudiness = document.createElement("h4");
    cloudiness.textContent = `Cloudiness: ${data.list[0].clouds.all}%`;
    characteristics.appendChild(cloudiness);
    
    
    // *****************************************************************//
    // *****************************day 2 *****************************//
    
    
    let section2 = document.querySelector(".second-container");
    section2.innerHTML="";
    let day2 = document.createElement("div");
    day2.setAttribute("class", "day2");
    section2.appendChild(day2);
    
    let weekName2 = document.createElement("h4");
    let dt2 = data.list[8].dt;
    let d2 = new Date(dt2 * 1000);
    weekName2.textContent = dayNames[d2.getDay()];
    day2.appendChild(weekName2);
    
    let icon2 = document.createElement("img");
    let iconInConsole2 = data.list[8].weather[0].icon;
    icon2.src = `http://openweathermap.org/img/wn/${iconInConsole2}@2x.png`;
    day2.appendChild(icon2);
    
    let temperature2 = document.createElement("h3");
    temperature2.textContent = `${data.list[8].main.temp.toFixed(0)}°`;
    day2.appendChild(temperature2);
    
    let tempName2 = document.createElement("h3");
    tempName2.textContent = `${data.list[8].weather[0].main}`;
    day2.appendChild(tempName2);
    
    
    // *****************************************************************//
    // *****************************day 3 *****************************//
    
    
    
    let day3 = document.createElement("div");
    day3.setAttribute("class", "day3");
    section2.appendChild(day3);
    
    let weekName3 = document.createElement("h4");
    let dt3 = data.list[16].dt;
    let d3 = new Date(dt3 * 1000);
    weekName3.textContent = dayNames[d3.getDay()];
    day3.appendChild(weekName3);
    
    let icon3 = document.createElement("img");
    let iconInConsole3 = data.list[16].weather[0].icon;
    icon3.src = `http://openweathermap.org/img/wn/${iconInConsole3}@2x.png`;
    day3.appendChild(icon3);
    
    let temperature3 = document.createElement("h3");
    temperature3.textContent = `${data.list[16].main.temp.toFixed(0)}°`;
    day3.appendChild(temperature3);
    
    let tempName3 = document.createElement("h3");
    tempName3.textContent = `${data.list[16].weather[0].main}`;
    day3.appendChild(tempName3);
    
    
    // *****************************************************************//
    // *****************************day 4 *****************************//
    
    let day4 = document.createElement("div");
    day4.setAttribute("class", "day4");
    section2.appendChild(day4);
    
    let weekName4 = document.createElement("h4");
    let dt4 = data.list[24].dt;
    let d4 = new Date(dt4 * 1000);
    weekName4.textContent = dayNames[d4.getDay()];
    day4.appendChild(weekName4);
    
    let icon4 = document.createElement("img");
    let iconInConsole4 = data.list[24].weather[0].icon;
    icon4.src = `http://openweathermap.org/img/wn/${iconInConsole4}@2x.png`;
    day4.appendChild(icon4);
    
    let temperature4 = document.createElement("h3");
    temperature4.textContent = `${data.list[24].main.temp.toFixed(0)}°`;
    day4.appendChild(temperature4);
    
    let tempName4 = document.createElement("h3");
    tempName4.textContent = `${data.list[24].weather[0].main}`;
    day4.appendChild(tempName4);
    
    
// *****************************************************************//
// *****************************day 5 *****************************//
let day5 = document.createElement("div");
day5.setAttribute("class", "day5");
section2.appendChild(day5);

let weekName5 = document.createElement("h5");
let dt5 = data.list[32].dt;
let d5 = new Date(dt5 * 1000);
weekName5.textContent = dayNames[d5.getDay()];
day5.appendChild(weekName5);

let icon5 = document.createElement("img");
let iconInConsole5 = data.list[32].weather[0].icon;
icon5.src = `http://openweathermap.org/img/wn/${iconInConsole5}@2x.png`;
day5.appendChild(icon5);

let temperature5 = document.createElement("h3");
temperature5.textContent = `${data.list[32].main.temp.toFixed(0)}°`;
day5.appendChild(temperature5);

let tempName5 = document.createElement("h3");
tempName5.textContent = `${data.list[32].weather[0].main}`;
day5.appendChild(tempName5);

    
    
}

