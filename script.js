$("#btn1").on("click",function(event){
    event.preventDefault();
    $(".page1").attr("style","display: none");
    $(".page2").removeAttr("style");
    console.log("this function work !!!");
});

// var cities = JSON.parse(localStorage.getItem("city"));// || [];
// function showHistory () {
//   console.log("showHistory function works!", cities)
//   for (var i=0; i< cities.length; i++){
//       var a = $("<li>");
//       a.text(cities[i]);
//       $("#recentSearch").append(a);
//   }
// }
// showHistory()

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var userInput = $('#input').val().trim();

    // cities.push(userInput)
    // localStorage.setItem("city", JSON.stringify(cities));
    // showHistory()
    // console.log(cities)


var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +userInput+ "&appid=adb5289082d713294f40248da64a0cf5";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
  console.log("currentday:")
  console.log(response)
  var cityLon =response.coord.lon
  var cityLat =response.coord.lat
  var queryURL ="https://api.openweathermap.org/data/2.5/onecall?lat="+cityLat+"&lon="+cityLon+"&exclude=minutely,hourly,alerts&appid=adb5289082d713294f40248da64a0cf5"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log("5daysresponse:")
    console.log(response)
    var b =$("<div>")
    b.text("Today Weather("+userInput+")")
    var c=$("<div>")
    c.text("Temp:"+response.current.temp+"°F")
    var d=$("<div>")
    d.text("Humidity:"+response.current.humidity+"%")
    var e=$("<div>")
    e.text("Wind Speed:"+response.current.weather.wind_speed+"MPH")
    var f=$("<div>")
    f.text("UV Index:"+response.current.uvi)
    $("#currentWeather").append(b,c,d,e,f);
    
});
});
});