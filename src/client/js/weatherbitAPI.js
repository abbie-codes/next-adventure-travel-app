let getTypicalWeather = async (entry) => {
    try {
        let startDate = document.getElementById("departure-date").value;
        let endDate = document.getElementById("return-date").value;
        let startDay = startDate.slice(5,10);
        let endDay = endDate.slice(5,10);
        let api = "https://api.weatherbit.io/v2.0/normals?lat=" + entry.lat + "&lon=" + entry.lng + "&start_day=" + startDay + "&end_day=" + endDay + "&tp=daily&key=1827d590a26b4849bcb6a8f0e50028d1";
        const result = await fetch(api);
        const typicalData = await result.json();
        return typicalData;
    }
    catch (error) {
        console.log("error", error);
    }
}

let getForecast = async (entry) => {
    try {
        let city = document.getElementById("city").value;
        let api = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + city + "," + entry.code + "&key=1827d590a26b4849bcb6a8f0e50028d1";
        const result = await fetch(api);
        const forecastData = await result.json();
        return forecastData;
    }
    catch (error) {
        console.log("error", error);
    }
}

let getWeather = async (weather) => {
    try {
        let startDate = document.getElementById("departure-date").value;
        if (startDate == weather[1].data[0].valid_date){
            let weatherData = {
                temp: weather[1].data[0].temp,
                maxTemp: weather[1].data[0].max_temp,
                minTemp: weather[1].data[0].min_temp,
                windSpeed: weather[1].data[0].wind_spd,
                precip: weather[1].data[0].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[1].valid_date){
            let weatherData = {
                temp: weather[1].data[1].temp,
                maxTemp: weather[1].data[1].max_temp,
                minTemp: weather[1].data[1].min_temp,
                windSpeed: weather[1].data[1].wind_spd,
                precip: weather[1].data[1].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[2].valid_date){
            let weatherData = {
                temp: weather[1].data[2].temp,
                maxTemp: weather[1].data[2].max_temp,
                minTemp: weather[1].data[2].min_temp,
                windSpeed: weather[1].data[2].wind_spd,
                precip: weather[1].data[2].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[3].valid_date){
            let weatherData = {
                temp: weather[1].data[3].temp,
                maxTemp: weather[1].data[3].max_temp,
                minTemp: weather[1].data[3].min_temp,
                windSpeed: weather[1].data[3].wind_spd,
                precip: weather[1].data[3].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[4].valid_date){
            let weatherData = {
                temp: weather[1].data[4].temp,
                maxTemp: weather[1].data[4].max_temp,
                minTemp: weather[1].data[4].min_temp,
                windSpeed: weather[1].data[4].wind_spd,
                precip: weather[1].data[4].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[5].valid_date){
            let weatherData = {
                temp: weather[1].data[5].temp,
                maxTemp: weather[1].data[5].max_temp,
                minTemp: weather[1].data[5].min_temp,
                windSpeed: weather[1].data[5].wind_spd,
                precip: weather[1].data[5].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[6].valid_date){
            let weatherData = {
                temp: weather[1].data[6].temp,
                maxTemp: weather[1].data[6].max_temp,
                minTemp: weather[1].data[6].min_temp,
                windSpeed: weather[1].data[6].wind_spd,
                precip: weather[1].data[6].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[7].valid_date){
            let weatherData = {
                temp: weather[1].data[7].temp,
                maxTemp: weather[1].data[7].max_temp,
                minTemp: weather[1].data[7].min_temp,
                windSpeed: weather[1].data[7].wind_spd,
                precip: weather[1].data[7].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[8].valid_date){
            let weatherData = {
                temp: weather[1].data[8].temp,
                maxTemp: weather[1].data[8].max_temp,
                minTemp: weather[1].data[8].min_temp,
                windSpeed: weather[1].data[8].wind_spd,
                precip: weather[1].data[8].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[9].valid_date){
            let weatherData = {
                temp: weather[1].data[9].temp,
                maxTemp: weather[1].data[9].max_temp,
                minTemp: weather[1].data[9].min_temp,
                windSpeed: weather[1].data[9].wind_spd,
                precip: weather[1].data[9].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[10].valid_date){
            let weatherData = {
                temp: weather[1].data[10].temp,
                maxTemp: weather[1].data[10].max_temp,
                minTemp: weather[1].data[10].min_temp,
                windSpeed: weather[1].data[10].wind_spd,
                precip: weather[1].data[10].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[11].valid_date){
            let weatherData = {
                temp: weather[1].data[11].temp,
                maxTemp: weather[1].data[11].max_temp,
                minTemp: weather[1].data[11].min_temp,
                windSpeed: weather[1].data[11].wind_spd,
                precip: weather[1].data[11].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[12].valid_date){
            let weatherData = {
                temp: weather[1].data[12].temp,
                maxTemp: weather[1].data[12].max_temp,
                minTemp: weather[1].data[12].min_temp,
                windSpeed: weather[1].data[12].wind_spd,
                precip: weather[1].data[12].precip,
            }
        } else if (startDate == weather[1].data[13].valid_date){
            let weatherData = {
                temp: weather[1].data[13].temp,
                maxTemp: weather[1].data[13].max_temp,
                minTemp: weather[1].data[13].min_temp,
                windSpeed: weather[1].data[13].wind_spd,
                precip: weather[1].data[13].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[14].valid_date){
            let weatherData = {
                temp: weather[1].data[14].temp,
                maxTemp: weather[1].data[14].max_temp,
                minTemp: weather[1].data[14].min_temp,
                windSpeed: weather[1].data[14].wind_spd,
                precip: weather[1].data[14].precip,
            }
            return weatherData;
        } else if (startDate == weather[1].data[15].valid_date){
            let weatherData = {
                temp: weather[1].data[15].temp,
                maxTemp: weather[1].data[15].max_temp,
                minTemp: weather[1].data[15].min_temp,
                windSpeed: weather[1].data[15].wind_spd,
                precip: weather[1].data[15].precip,
            }
            return weatherData;
        } else {
            let weatherData = {
                temp: weather[0].data[0].temp,
                maxTemp: weather[0].data[0].max_temp,
                minTemp: weather[0].data[0].min_temp,
                windSpeed: weather[0].data[0].wind_spd,
                precip: weather[0].data[0].precip,
            }
            return weatherData;
        }
    }
    catch (error) {
        console.log("error", error);
    }
}

export { getWeather };
export { getTypicalWeather };
export { getForecast };