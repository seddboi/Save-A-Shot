// This is our Javascript:
var submit = document.getElementById("button");
var cityInput = document.getElementById("city");
var stateInput = document.getElementById("state");
var mapId = document.getElementById("map")
var cityName = document.getElementById("cityName");
var stateName = document.getElementById("stateName");
var namesOfStates = ['alabama','alaska', 'american samoa', 'arizona', 'arkansas', 'colorado', 'connecticut', 'delaware', 'district of columbia', 'florida', 'georgia', 'guam', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'marshall islands', 'massachusetts', 'michigan', 'micronesia', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'northern mariana islands', 'ohio', 'oklahoma', 'oregon', 'palau', 'pennsylvania', 'puerto rico', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'us virgin islands','u.s. virgin islands', 'virgin islands', 'vermont', 'virginia', 'washington', 'west Virginia', 'wisconsin', 'wyoming'];
var city_names = ["aberdeen", "abilene", "akron", "albany", "albuquerque", "alexandria", "allentown", "amarillo", "anaheim", "anchorage", "ann Arbor", "antioch", "apple valley", "appleton", "arlington", "arvada", "asheville", "athens", "atlanta", "atlantic city", "augusta", "aurora", "austin", "aakersfield", "baltimore", "barnstable", "baton rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
var cityNamesLowercase = city_names.map(city => city.toLowerCase());




var website = "https://api.vaccinateca.com/v1/locations.json";
var myMap; 
// var zip = 92101;
// var cityN = "Riverside";
// var state = "California";

// added a button trigger, which tests the validity of the state entry, which will lead to either the main results page, 
// the outside of california resident scheduler.thml page, or gives off an alert for a false state
$('#button').on('click', function(event){
    var stateSearch = $('#state').val().toLowerCase();
    var citySearch = $('#city').val().toLowerCase();
    var stateArrayCheck = namesOfStates.includes(stateSearch);
    var cityArrayCheck = cityNamesLowercase.includes(citySearch);
    // This checks the validity of the entries when searched
    // It first checks the validity of a correct city, if true, then it check for a valid state
    // the resulting page is determined by the State/territory entry
    if (!cityArrayCheck) {
        alert('Please enter a valid city');
    } else {
        if (!stateArrayCheck && stateSearch=='california') {
            $('#button').attr('href','results.html' );
        } else if (stateArrayCheck) {
            $('#button').attr('href', 'scheduler.html');
        } else {
            alert('Please enter a valid State/Territory');
        }
    }

    location.reload();
});

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

