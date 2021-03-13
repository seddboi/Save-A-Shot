// This is our Javascript:

var website = "https://api.vaccinateca.com/v1/locations.json"
var zip = 92101;

var dataSet = function(url){
    fetch(url).then(function(response){
        if(response.ok){
            response.json().then(data => {
                console.log(data)
                // console.log(data.content.length)
                console.log(data.content[1013]) // 3288
                // console.log(data.content[3288]["Availability Info"][0])
                // console.log(data.content[0].Address)
                // console.log(data.content[0].Address.slice(-5))
                var count = 0;

                for(var i = 0; i < data.content.length; i++){ //change "10" to "data.content.length"
                    count++;
                    
                    // var code = data.content[i].Address.slice(-5);
                    var address = data.content[i].Address;
                    
                    if("Availability Info" in data.content[i]){
                        var available = data.content[i]["Availability Info"][0];
                        if(available.includes("Yes")){
                            getLocations(zip, address);
                        }
                    }
                }
                // console.log(count++);
            })
        }
        else{
            console.log("error: " + response.statusText)
        }
    })
}

// Need to find out why there is an error on the includes protion of this function.
function getLocations(zipCode, address){
    console.log("working1")
    if(address.includes(zipCode)){
        console.log("working2")
        console.log(address)
    }
}

dataSet(website);