function showPreview(card) {
    let imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    const formSection = document.getElementById("form");
    formSection.style.display = "none";
    let packingList = document.getElementById('packing-list');
    let items = packingList.getElementsByTagName('li')
    for (let item of items) {
        item.innerHTML = '';
    }
    document.getElementById('preview-container').style.display = 'block';
    let cardTitle = card.getElementsByTagName('h2')[0].innerHTML;
    let tripTitle = document.getElementById('trip-title');
    tripTitle.innerHTML = cardTitle;
    let cardDate = card.getElementsByClassName('date')[0].innerHTML;
    let tripDate = document.getElementById('trip-date');
    tripDate.innerHTML = cardDate;
    let cardDays = card.getElementsByClassName('days')[0].innerHTML;
    let tripDays = document.getElementById('trip-days');
    tripDays.innerHTML = cardDays;
    if (card.getElementsByClassName('packing-item')[0]) {
        packingList.getElementsByTagName('li')[0].innerHTML = `<img src="/src/client/images/square.png" width="16px" onclick="return Client.tickBox(this)">&nbsp ${card.getElementsByClassName('packing-item')[0].innerText}`;
    } 
    if (card.getElementsByClassName('packing-item')[1]) {
        packingList.getElementsByTagName('li')[1].innerHTML = `<img src="/src/client/images/square.png" width="16px" onclick="return Client.tickBox(this)">&nbsp ${card.getElementsByClassName('packing-item')[1].innerText}`;
    }
    if (card.getElementsByClassName('packing-item')[2]) {
        packingList.getElementsByTagName('li')[2].innerHTML = `<img src="/src/client/images/square.png" width="16px" onclick="return Client.tickBox(this)">&nbsp ${card.getElementsByClassName('packing-item')[2].innerText}`;
    }
    if (card.getElementsByClassName('packing-item')[3]) {
        packingList.getElementsByTagName('li')[3].innerHTML = `<img src="/src/client/images/square.png" width="16px" onclick="return Client.tickBox(this)">&nbsp ${card.getElementsByClassName('packing-item')[3].innerText}`;
    }
    if (card.getElementsByClassName('packing-item')[4]) {
        packingList.getElementsByTagName('li')[4].innerHTML = `<img src="/src/client/images/square.png" width="16px" onclick="return Client.tickBox(this)">&nbsp ${card.getElementsByClassName('packing-item')[4].innerText}`;
    }
    if (card.getElementsByClassName('packing-item')[5]) {
        packingList.getElementsByTagName('li')[5].innerHTML = `<img src="/src/client/images/square.png" width="16px" onclick="return Client.tickBox(this)">&nbsp ${card.getElementsByClassName('packing-item')[5].innerText}`;
    }
    if (card.getElementsByClassName('packing-item')[6]) {
        packingList.getElementsByTagName('li')[6].innerHTML = `<img src="/src/client/images/square.png" width="16px" onclick="return Client.tickBox(this)">&nbsp ${card.getElementsByClassName('packing-item')[6].innerText}`;
    }
    if (card.getElementsByClassName('packing-item')[7]) {
        packingList.getElementsByTagName('li')[7].innerHTML = `<img src="/src/client/images/square.png" width="16px" onclick="return Client.tickBox(this)">&nbsp ${card.getElementsByClassName('packing-item')[7].innerText}`;
    }
    if (card.getElementsByClassName('packing-item')[8]) {
        packingList.getElementsByTagName('li')[8].innerHTML = `<img src="/src/client/images/square.png" width="16px" onclick="return Client.tickBox(this)">&nbsp ${card.getElementsByClassName('packing-item')[8].innerText}`;
    }
    if (card.getElementsByClassName('packing-item')[9]) {
        packingList.getElementsByTagName('li')[9].innerHTML = `<img src="/src/client/images/square.png" width="16px" onclick="return Client.tickBox(this)">&nbsp ${card.getElementsByClassName('packing-item')[9].innerText}`;
    }
    let temp = card.getElementsByClassName('temp-card')[0].innerHTML;
    let tempContainer = document.getElementById('temp');
    tempContainer.innerHTML = temp;
    let maxTemp = card.getElementsByClassName('max-temp-card')[0].innerHTML;
    let maxTempContainer = document.getElementById('max-temp');
    maxTempContainer.innerHTML = maxTemp;
    let minTemp = card.getElementsByClassName('min-temp-card')[0].innerHTML;
    let minTempContainer = document.getElementById('min-temp');
    minTempContainer.innerHTML = minTemp;
    let rain = card.getElementsByClassName('precip-card')[0].innerHTML;
    let rainContainer = document.getElementById('rain');
    rainContainer.innerHTML = rain;
    let wind = card.getElementsByClassName('wind-card')[0].innerHTML;
    let windContainer = document.getElementById('wind');
    windContainer.innerHTML = wind;
    let image = document.createElement('img');
    let imageSrc = card.getElementsByClassName('trip-card-image')[0].src;
    image.src = imageSrc;
    image.style.width = '95%';
    image.style.marginTop = '10%';
    imageContainer.style.width = '100%';
    imageContainer.appendChild(image);
}

function exitPreview() {
    document.getElementById('preview-container').style.display = 'none';
}

function tickBox(img) {
    if (img.src.includes('square.png')) {
        img.src = '/src/client/images/tick.png';
    } else {
        img.src = '/src/client/images/square.png';
    }
}

export { showPreview }
export { exitPreview }
export { tickBox }