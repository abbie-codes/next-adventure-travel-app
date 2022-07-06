function exitPopup() {
    document.getElementById("remove-trip").style.display = "none";
}

function removeTripPopup(bin) {
    document.getElementById("remove-trip").style.display = "block";
    const returnButton = document.getElementById("return-button");
    const removeTripButtom = document.getElementById("remove-trip-button");
    returnButton.addEventListener("click", Client.exitPopup);
    removeTripButtom.addEventListener("click", function(){
        bin.parentElement.parentElement.remove()
        exitPopup();
        document.getElementById('preview-container').style.display = 'none';
    });
    if(document.getElementById("new-trip-card").innerHTML == ""){
        document.getElementsByClassName("no-upcoming-trips")[0].style.display = "block";
    }
}

export { exitPopup }
export { removeTripPopup }