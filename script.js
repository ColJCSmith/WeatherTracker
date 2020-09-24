
$("#searchBtn").on("click", function() {
    var city = document.getElementById("#citySearch").value;
    console.log(city);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
    city + "&appid=cb4fab0db96e7f7f6bfb9ea6a60aa6aa"

});

latLong = function(){
    var city = document.querySelector("input").value;
    console.log(city);
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="
        + city + "&appid=cb4fab0db96e7f7f6bfb9ea6a60aa6aa"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            console.log(response);

            var lat = response.city.coord.lat;
            var long = response.city.coord.lat;
            console.log(lat, long);
}
