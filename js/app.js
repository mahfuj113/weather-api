const API_KEY = `3fa6ac447d2a827d4763cccd973a8888`;
const searchTemperature = () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}
const setInnerText = (id,text)=>{
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText("city",temperature.name);
    setInnerText("temperature",temperature.main.temp)
    setInnerText("condition",temperature.weather[0].main)

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    console.log(temperature.weather[0].icon);
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute('src',url);

}