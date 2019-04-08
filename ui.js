class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details= document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.clouds = document.getElementById('w-clouds');
        this.wind = document.getElementById('w-wind');   
    }

    paint(weather) {
        this.location.textContent = weather.name + ', ' + weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png `); 
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
        this.clouds.textContent = `Cloudiness: ${weather.clouds.all}%`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed} m/sec`;
    }

}