/*Import JS Functions*/
import { addCard } from './js/addTrip'
import { addTrip } from './js/addTrip'
import { exitForm } from './js/addTrip'
import { showPreview } from './js/preview'
import { exitPreview } from './js/preview'
import { tickBox } from './js/preview'
import { exitPopup } from './js/removeTrip'
import { removeTripPopup } from './js/removeTrip'
import { upcomingTrips } from './js/upcomingPastTrips'
import { pastTrips } from './js/upcomingPastTrips'
import { getData } from './js/geonamesAPI'
import { selectData } from './js/geonamesAPI'
import { getWeather } from './js/weatherbitAPI'
import { getTypicalWeather } from './js/weatherbitAPI'
import { getForecast } from './js/weatherbitAPI'
import { getImage } from './js/pixabayAPI'
import { defineImage } from './js/pixabayAPI'
/*Import CSS*/
import './styles/base.scss'
import './styles/buttons.scss'
import './styles/new-trip-form.scss'
import './styles/preview-trip.scss'
import './styles/remove-trip.scss'
import './styles/trip-card.scss'
/*Export JS Functions*/
export { addCard };
export { addTrip };
export { exitForm };
export { showPreview };
export { exitPreview };
export { tickBox };
export { exitPopup };
export { removeTripPopup };
export { upcomingTrips };
export { pastTrips };
export { getData };
export { selectData };
export { getWeather };
export { getTypicalWeather };
export { getForecast };
export { getImage };
export { defineImage };
/*Define Submit Button*/
const submit = document.getElementsByClassName("add-trip-button")[0];
/*Add Event Listener to Submit Button*/
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let city = document.getElementById("city").value;
    let api = "http://api.geonames.org/searchJSON?q=" + city + "&maxRows=1&username=abbieu"
    let pixabayApi = "https://pixabay.com/api/?key=28419899-1762e6fc3817223b7288327a2"+"&q="+encodeURIComponent(city)+"&image_type=photo";
    getData(api).then(data => {
        selectData(data).then (entry => {
            let typicalWeather = getTypicalWeather(entry);
            let forecastWeather = getForecast(entry);
            let pic = getImage(pixabayApi);
            return Promise.all([typicalWeather, forecastWeather, pic]);
        }).then (data => {
            let weatherData = getWeather(data);
            let image = defineImage(data)
            return Promise.all([weatherData, image]);
        }).then ( allData => {
            addCard(allData);
        })
    })
})