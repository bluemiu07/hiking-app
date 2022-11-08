function buttonClicked(){
    //Scroll effect
    window.scrollBy(0,1000);

    //Retrieve data
    var hill =document.getElementById("location").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${hill}&appid=9fd7a449d055dba26a982a3220f32aa2`)

    //Display data
    .then((response) => response.json())
    .then((data) => {
        var info=data
        document.getElementById("temp").innerHTML=info.main.temp
        document.getElementById("weather").innerHTML=info.weather[0].description
        document.getElementById("lat").innerHTML=info.coord.lat
        document.getElementById("long").innerHTML=info.coord.lon
        document.getElementById("wind").innerHTML=info.wind.speed

    });
}

