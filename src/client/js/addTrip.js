/*Show or Hide Form Section */
function addTrip(){
    const formSection = document.getElementById("form");
    formSection.style.display = 'block';
    document.getElementById('preview-container').style.display = 'none';
}

function exitForm(){
    const formSection = document.getElementById("form");
    formSection.style.display = "none";
}

/* Function to add new Trip Card on submit */
let addCard = function(data) {
    document.getElementsByClassName("no-upcoming-trips")[0].style.display = "none";
    let card = document.createElement("div");
    card.className = "trip-card";
    card.setAttribute("onclick", "Client.showPreview(this)");
    let cardPlaceholder = document.getElementById("new-trip-card");
    cardPlaceholder.appendChild(card);
    let cardImage = document.createElement("img");
    cardImage.className = "trip-card-image";
    cardImage.src = data[1].url;
    card.appendChild(cardImage);
    let cardContent = document.createElement("div");
    cardContent.className = "trip-card-content";
    card.appendChild(cardContent);
    let cardTitle = document.createElement("h2");
    cardTitle.innerHTML = document.getElementById("title").value;
    cardContent.appendChild(cardTitle);
    let departureDate = document.getElementById("departure-date").value;
    let returnDate = document.getElementById("return-date").value;
    let dDate = new Date(departureDate);
    let rDate = new Date(returnDate);
    let cardDate = document.createElement("p");
    cardDate.className = "date";
    cardDate.innerHTML = `${dDate.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })} - ${rDate.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })}`;
    cardContent.appendChild(cardDate);
    let cardWeather = document.createElement("p");
    cardWeather.className = "temp";
    cardWeather.innerHTML = `${data[0].maxTemp}°C High / ${data[0].minTemp}°C Low`;
    cardContent.appendChild(cardWeather);
    let cardDays = Math.round((rDate - dDate) / (1000 * 60 * 60 * 24));
    let cardDaysText = document.createElement("p");
    cardDaysText.className = "days";
    let todaysDate = new Date();
    let daysLeft = Math.round((dDate - todaysDate) / (1000 * 60 * 60 * 24));
    cardDaysText.innerHTML = `<img src="/src/client/images/clock.png">&nbsp ${cardDays} day Trip in ${daysLeft} days`;
    cardContent.appendChild(cardDaysText);
    let cardRemove = document.createElement("button");
    cardRemove.className = "bin";
    cardRemove.setAttribute("onclick","Client.removeTripPopup(this);");
    cardRemove.innerHTML = "<img src='/src/client/images/bin.png'><i>&nbsp Remove Trip</i>";
    cardContent.appendChild(cardRemove);
    const cardPackingList = document.createElement("div");
    cardPackingList.className = "packing-list-card";
    cardContent.appendChild(cardPackingList);
    if(document.getElementById("packing-item1").value != ""){
        let cardPackingItem = document.createElement("p");
        cardPackingItem.className = "packing-item";
        cardPackingItem.innerHTML = document.getElementById("packing-item1").value;
        cardPackingList.appendChild(cardPackingItem);
    }
    if(document.getElementById("packing-item2").value != ""){
        let cardPackingItemTwo = document.createElement("p");
        cardPackingItemTwo.className = "packing-item";
        cardPackingItemTwo.innerHTML = document.getElementById("packing-item2").value;
        cardPackingList.appendChild(cardPackingItemTwo);
    }
    if(document.getElementById("packing-item3").value != ""){
        let cardPackingItemThree = document.createElement("p");
        cardPackingItemThree.className = "packing-item";
        cardPackingItemThree.innerHTML = document.getElementById("packing-item3").value;
        cardPackingList.appendChild(cardPackingItemThree);
    }
    if(document.getElementById("packing-item4").value != ""){
        let cardPackingItemFour = document.createElement("p");
        cardPackingItemFour.className = "packing-item";
        cardPackingItemFour.innerHTML = document.getElementById("packing-item4").value;
        cardPackingList.appendChild(cardPackingItemFour);
    }
    if(document.getElementById("packing-item5").value != ""){
        let cardPackingItemFive = document.createElement("p");
        cardPackingItemFive.className = "packing-item";
        cardPackingItemFive.innerHTML = document.getElementById("packing-item5").value;
        cardPackingList.appendChild(cardPackingItemFive);
    }
    if(document.getElementById("packing-item6").value != ""){
        let cardPackingItemSix = document.createElement("p");
        cardPackingItemSix.className = "packing-item";
        cardPackingItemSix.innerHTML = document.getElementById("packing-item6").value;
        cardPackingList.appendChild(cardPackingItemSix);
    }
    if(document.getElementById("packing-item7").value != ""){
        let cardPackingItemSeven = document.createElement("p");
        cardPackingItemSeven.className = "packing-item";
        cardPackingItemSeven.innerHTML = document.getElementById("packing-item7").value;
        cardPackingList.appendChild(cardPackingItemSeven);
    }
    if(document.getElementById("packing-item8").value != ""){
        let cardPackingItemEight = document.createElement("p");
        cardPackingItemEight.className = "packing-item";
        cardPackingItemEight.innerHTML = document.getElementById("packing-item8").value;
        cardPackingList.appendChild(cardPackingItemEight);
    }
    if(document.getElementById("packing-item9").value != ""){
        let cardPackingItemNine = document.createElement("p");
        cardPackingItemNine.className = "packing-item";
        cardPackingItemNine.innerHTML = document.getElementById("packing-item9").value;
        cardPackingList.appendChild(cardPackingItemNine);
    }
    if(document.getElementById("packing-item10").value != ""){
        let cardPackingItemTen = document.createElement("p");
        cardPackingItemTen.className = "packing-item";
        cardPackingItemTen.innerHTML = document.getElementById("packing-item10").value;
        cardPackingList.appendChild(cardPackingItemTen);
    }
    let weatherSection = document.createElement("div");
    weatherSection.className = "weather-card";
    cardContent.appendChild(weatherSection);
    let maxTempCard = document.createElement("p");
    maxTempCard.className = "max-temp-card";
    maxTempCard.innerHTML = `${data[0].maxTemp}°C`;
    weatherSection.appendChild(maxTempCard);
    let minTempCard = document.createElement("p");
    minTempCard.className = "min-temp-card";
    minTempCard.innerHTML = `${data[0].minTemp}°C`;
    weatherSection.appendChild(minTempCard);
    let tempCard = document.createElement("p");
    tempCard.className = "temp-card";
    tempCard.innerHTML = `${data[0].temp}°C`;
    weatherSection.appendChild(tempCard);
    let precipCard = document.createElement("p");
    precipCard.className = "precip-card";
    precipCard.innerHTML = `${data[0].precip} mm/hr`;
    weatherSection.appendChild(precipCard);
    let windCard = document.createElement("p");
    windCard.className = "wind-card";
    windCard.innerHTML = `${data[0].windSpeed} km/hr`;
    weatherSection.appendChild(windCard);
    const formSection = document.getElementById("form");
    let items = formSection.getElementsByTagName("input");
    for (let i of items) {
        if (i.type !== "submit") {
            i.value = "";
        }
    }
    formSection.style.display = "none";
};

export { addCard }
export { addTrip }
export { exitForm }
