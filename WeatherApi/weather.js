class Weather {
    constructor(city, state) {
        this.apiKey = '63a1cfbe2521a8688e5a7bdcb6a57629';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from API

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=metric`);

        const weatherResponse = await response.json();

        return weatherResponse;
    }


    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }


}