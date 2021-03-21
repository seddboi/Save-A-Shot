// This is our Javascript:
var submit = document.getElementById("button");
var cityInput = document.getElementById("city");
var stateInput = document.getElementById("state");
var mapId = document.getElementById("map")
var cityName = document.getElementById("cityName");
var stateName = document.getElementById("stateName");

var website = "https://api.vaccinateca.com/v1/locations.json";
var myMap; 
// var zip = 92101;
// var cityN = "Riverside";
// var state = "California";

var dataSet = function(url){
    fetch(url).then(function(response){
        if(response.ok){
            response.json().then(data => {
                var locat = {};
                var cs = JSON.parse(localStorage.getItem("cityState"));
                var city = cs.city;
                var state = cs.state;

                myMap = L.map('map').setView([data.content[1].Latitude, data.content[1].Longitude], 10)
                cityName.innerHTML = city;
                stateName.innerHTML = state;

                for(var i = 0; i < data.content.length; i++){
                    var address = data.content[i].Address;
                    var lat = data.content[i].Latitude;
                    var long = data.content[i].Longitude;
                    var name  = data.content[i].Name;
                    
                    if("Availability Info" in data.content[i]){
                        var available = data.content[i]["Availability Info"][0];
                        if(available.includes("Yes")){
                            getLocations(address, lat, long, name, locat, city, state);
                        }
                    }
                    else{
                        continue;
                    }
                }
            })
        }
        else{
            console.log("error: " + response.statusText)
        }
    })
}

function getLocations(address, lat, long, name, arr, city, state){
    try{
        if(address) {
            cityL = city.toLowerCase();
            var ad = address.toLowerCase();
            if(ad.includes(cityL)){ 
                drawMap(lat, long, name, address)
                arr[name] = {};
                arr[name]["Address"] = address;
                arr[name]["Latitude"] = lat;
                arr[name]["Longitude"] = long;
                n = false;
                myMap.setView([lat, long], 10)
            }
        } else {
            console.log("this location does not have an address")
        }

    }catch(e){
        console.log("Error", e)
        console.log("paramets, ", address, lat, long, name, arr)
    }
}

// Starting from here the maps api section is here.
function drawMap(lat, long, name, address){
    L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ).addTo(myMap);
    
    try {
        var str = "<b>" + name + "</b>" + "<br>" + address;

        // var a = document.createElement("A");
        // var text = document.createTextNode(address);
        // a.setAttribute("href", "Https://maps.google.com/?q=" + address)
        // a.appendChild(text);
        // document.str.appendChild(a);

        L.marker([lat, long], {title: "city", riseOnHover: true}).addTo(myMap).bindPopup(str);
    } catch(e) {
        console.log("error creating marker", e)
    }
}

submit.addEventListener("click", function(){
    localStorage.setItem("cityState", JSON.stringify({"city":cityInput.value, "state":stateInput.value}))
})

window.addEventListener("load", function(){
    dataSet(website)
})

