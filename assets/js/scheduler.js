// This is our Javascript:

var website = "https://api.vaccinateca.com/v1/locations.json"
var zip = 92101;

var dataSet = function(url){
    fetch(url).then(function(response){
        if(response.ok){
            response.json().then(data => {
                console.log(data)
                var count = 0;

                for(var i = 0; i < data.content.length; i++){
                    count++;
                    var address = data.content[i].Address;
                    
                    if("Availability Info" in data.content[i]){
                        var available = data.content[i]["Availability Info"][0];
                        if(available.includes("Yes")){
                            getLocations(zip, address);
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

function getLocations(zipCode, address){
    try{
        if(address.includes(zipCode)){//might need a function next here.
            console.log(address)
        }
    }catch{
        // need to add something since it returns undefined and might cause a problem later.
        console.log("Error")
    }
}

dataSet(website);

// Starting from here the maps api section is here.
// keep this for now this is using google maps and for the map on the website
// maybe use open street map instead

// var script = document.createElement("script");
// var mapArea = document.createElement("div");
// var key = "AIzaSyAA56LyLz0Je0lF6xwbl9DLhzuI_QOurJM"
// var mapsite = "https://maps.googleapis.com/maps/api/js?key=" + key + "&callback=initMap&libraries=&v=weekly"

// mapArea.id = "map";
// mapArea.style.height = "100%";
// script.src = mapsite;

// document.body.insertBefore(mapArea, document.body.firstChild)
// document.body.appendChild(script);

// let map;

// function initMap() {
//   map = new maps.Map(mapArea, {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// initMap();



