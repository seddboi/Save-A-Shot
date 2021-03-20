// This is our Javascript:

var website = "https://api.vaccinateca.com/v1/locations.json"
var zip = 92101;
var myMap; 

var dataSet = function(url){
    fetch(url).then(function(response){
        if(response.ok){
            response.json().then(data => {
                console.log(data)
                var count = 0;
                var locat = {};

                myMap = L.map('mapid').setView([data.content[1].Latitude, data.content[1].Longitude], 10)

                for(var i = 0; i < data.content.length; i++){
                    count++;
                    var address = data.content[i].Address;
                    var lat = data.content[i].Latitude;
                    var long = data.content[i].Longitude;
                    var name  = data.content[i].Name;
                    
                    if("Availability Info" in data.content[i]){
                        var available = data.content[i]["Availability Info"][0];
                        if(available.includes("Yes")){
                            
                                getLocations(zip, address, lat, long, name, locat);
                            
                            // console.log(lat)
                            // console.log(long)
                            // console.log(name)
                           
                            
                        }
                    }
                    else{
                        continue;
                    }
                }
                console.log(locat)
            })
        }
        else{
            console.log("error: " + response.statusText)
        }
    })
}

function getLocations(zipCode, address, lat, long, name, arr){
    try{
        if(address) {
            if(address.includes(zipCode)){//might need a function next here.
                console.log(address)
                drawMap(lat, long, name)
                arr[name] = {};
                arr[name]["Address"] = address;
                arr[name]["Latitude"] = lat;
                arr[name]["Longitude"] = long;
                n = false;
            }
        } else {
            console.log("this location does not have an address")
        }

    }catch(e){
        console.log("Error", e)
        console.log("paramets, ", zipCode, address, lat, long, name, arr)
    }
}

dataSet(website);// event listener is going to be need to call thsi when someone searchs zipcode.

// Starting from here the maps api section is here.

function drawMap(lat, long, name){
    console.log("working")
    //var mymap = L.map('mapid').setView([lat, long], 10);//51.505, -0.09], 13);

    L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ).addTo(myMap);

    console.log("name is", name)

    
    try {
        L.marker([lat, long], { title : "asdf"}).addTo(myMap);
    } catch(e) {
        console.log("error creating marker", e)
    }

    //const latlong = L.LatLng(lat, long)
    
    //var latlng = new L.LatLng(lat, long, 200)


    // var lonLat = new OpenLayers.LonLat(lat ,long)
    //       .transform(
    //         new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
    //         map.getProjectionObject() // to Spherical Mercator Projection
    //     );
    
    // var marker = new OpenLayer.Layer.Marker("mark");
    // mymap.addLayer(marker)
    // marker.addMarker(new OpenLayer.Marker(lonLat));
    // mymap.setCenter(lonLat, 10)

}

function addMarkers(obj){

}





