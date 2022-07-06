function upcomingTrips() {
    document.getElementsByClassName("upcoming-trips")[0].style.display = "block";
    document.getElementsByClassName("upcoming")[0].style.borderBottom = "4px solid #065dd8";
    document.getElementsByClassName("past-trips")[0].style.display = "none";
    document.getElementsByClassName("past")[0].style.borderBottom = "4px solid #bfbfbf";
    if(document.getElementById("new-trip-card").innerText == ""){
        document.getElementsByClassName("no-upcoming-trips")[0].style.display = "block";
    }
}

function pastTrips() {
    document.getElementsByClassName("past-trips")[0].style.display = "block";
    document.getElementsByClassName("past")[0].style.borderBottom = "4px solid #065dd8";
    document.getElementsByClassName("upcoming-trips")[0].style.display = "none";
    document.getElementsByClassName("upcoming")[0].style.borderBottom = "4px solid #bfbfbf";
    if(document.getElementById("past-trip-card").innerHTML == ""){
        document.getElementsByClassName("no-past-trips")[0].style.display = "block";
    }
}

export { upcomingTrips }
export { pastTrips }