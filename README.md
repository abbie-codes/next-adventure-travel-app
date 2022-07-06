# Travel Planner App - Next Adventure

This project is my Capstone project for Udacity's Front End Nanodegree Course. 

## Description

This travel planner app includes a landing page. The images and logos were created in Illustrator by me. 
The function of the travel app is to add an upcoming trip, by inputting the closest city, date and optional packing list the app builds a travel card containing: trip name, date of departure & return, how many days until the trip & how many days the trip is in total, the weather forecast (High and Low Temp) if the trip is within 16 days and the weather forecast (High and Low Temp) for typical weather climate in this location if the trip is after 16 days. The trip card will include an image associated to the closest city. 

After the card has been created you can click the card and get a larger preview of the trip which includes all of the card information, plus a checkable packing list of up to 10 items to pack. It also includes a more in-depth weather report with average temperature, highest temp, lowest temp, wind speed and how much rain is expected. 

### API Integration 

This project uses 3 external API's: 

* [GeonamesAPI](http://www.geonames.org/export/web-services.html) To retreive a latitude and longitude from a city name
* [WeatherbitAPI] (https://www.weatherbit.io/api) To get the weather forecast for the next 16 days from the latitude and longitude provided by Geonames API. If the travel date is too far in the future then I use a different API call from Weatherbit's API which provides typical weather data. 
* [PixabayAPI] (https://pixabay.com/api/docs/) To retrieve a photo for each location to add to the trip card. 

### Dependancies 

```
npm i express
npm i cors
npm i webpack
npm i sass
npm i body-parser
npm i -D @babel/core
npm i -D @babel/preset-env
npm i -D babel-loader
npm i -D clean-webpack-plugin
npm i -D css-loader
npm i -D jest
npm i -D sass-loader
npm i -D style-loader
npm i -D webpack-cli
npm i -D webpack-dev-server
npm i -D workbox-webpack-plugin
```

### Webpack

* This project uses Webpack 4 

### Workbox

* This project uses Workbox 

### Testing

* This project has been tested using [Jest](https://jestjs.io/)

### Running Locally 
To Start Server: 
```
npm run start 
```
To build project with webpack: 
```
npm run build-prod
```
To open in browser: 
```
npm run build-dev
```

## View the project online

This project has been deployed using Digital Ocean. To view the project please click the link below: 

## Authors

Abigail Unwin 

## Acknowledgments

This project was made by me but heavily influenced by:

* [Udacity](https://www.udacity.com/)

The icons in this project were downloaded from Flaticon and created by the following graphic designers: 

*[Hot Temperature icon created by bqlqn](https://www.flaticon.com/free-icons/temperature)
*[Cold Temperature icon created by bqlqn](https://www.flaticon.com/free-icons/cold)
*[Wind icon created by Vitaly Gorbachev](https://www.flaticon.com/free-icons/wind)
*[Water icon created by Good Ware](https://www.flaticon.com/free-icons/water)
*[Tent icon created by Freepik](https://www.flaticon.com/free-icons/tent)
*[Bin icon created by Freepik](https://www.flaticon.com/free-icons/trash)
*[Clock icon created by Those Icons](https://www.flaticon.com/free-icons/clock)
*[Checkbox icon created by designvector10](https://www.flaticon.com/free-icons/checkbox)
*[Tick icons created by Kirill Kazachek](https://www.flaticon.com/free-icons/tick)

Images used in this project were downloaded from Freepik and Adobe Stock and created by the following authors: 
*[Camping image created by jcomp](https://www.freepik.com/free-photo/rear-view-young-backpacker-couple-sitting-relax-front-tent-near-lake-with-coffee-set-making-fresh-coffee-grinder-while-camping-trip-summer-vacation_16307701.htm#query=camping&position=6&from_view=search)
*[Map image created by Tartila](https://as2.ftcdn.net/v2/jpg/02/74/59/79/1000_F_274597914_4aetfu1gWRK2M6b2lbxKtZb4qibho30j.jpg)
*[Camping image created by macrovector](https://www.freepik.com/free-vector/camping-place-cartoon-composition-with-yellow-tent-lamp-pot-with-dinner-fire-night-sky_13749110.htm#query=camping&position=10&from_view=search)
*[Wedding image created by iconicbestiary](https://www.freepik.com/free-vector/newlywed-couple-is-driving-car-their-honeymoon_1311191.htm#query=wedding&position=1&from_view=search)
*[New York image created by backupstudio](https://as2.ftcdn.net/v2/jpg/02/88/02/37/1000_F_288023776_cdkenXYsV0c3mMZRbCMjyguH2JpLPa5s.jpg)