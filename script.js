var cityArray = []; 
$("#btn1").on("click",function(event){
    event.preventDefault();
    $(".page1").attr("style","display: none");
    $(".page2").removeAttr("style");
    console.log("this function work !!!");
    var userInput = $('#input').val().trim();
    showHistory (userInput)
    
});
   
function showHistory (userInput) { 
 var city = JSON.parse(localStorage.getItem("recentSearch"));
//   cityArray=city;
  console.log("showHistory function works!  city:", city)
  console.log(userInput)
//localStorage.setItem("recentSearch", JSON.stringify(cityArray));
$("#recentSearch").empty();
if (city === null) {
    
    // $("#input").attr("value","orlando")
    cityArray.push(userInput);
    localStorage.setItem("recentSearch", JSON.stringify(cityArray));
    console.log("userInput:"+userInput,"cityArray:"+cityArray)
    // for (var i =1;i<10 ;i++ ){
    //     j=cityArray.length-i;
          var a = $("<li>");
          a.text(userInput);
          $("#recentSearch").append(a);
          $("#input").removeAttr("value")
}
else if(city !== null && userInput!==""){
    $("#input").removeAttr("value");
    cityArray=city;
    cityArray.push(userInput);
    localStorage.setItem("recentSearch", JSON.stringify(cityArray));
    console.log("userInput:"+userInput,"cityArray:"+cityArray)
for (var i =1;i<10 ;i++ ){
    var j=cityArray.length-i;
      var a = $("<li>");
      a.text(cityArray[j]);
      $("#recentSearch").append(a);
 }     
}
else {
    $("#input").removeAttr("value");
    cityArray.push(userInput);
    localStorage.setItem("recentSearch", JSON.stringify(cityArray));
    console.log("userInput:"+userInput,"cityArray:"+cityArray)
    for (var i =1;i<10 ;i++ ){
        j=cityArray.length-i;
          var a = $("<li>");
          a.text(cityArray[j]);
          $("#recentSearch").append(a);
}
}




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
    var currentDay=moment().format("L");
    var b =$("<div>")
    b.text(userInput+" Today/"+currentDay)
    var c=$("<div>")
    c.text("Temp:"+response.current.temp+"°F")
    var d=$("<div>")
    d.text("Humidity:"+response.current.humidity+"%")
    var e=$("<div>")
    e.text("Wind Speed:"+response.current.wind_speed+"MPH")
    var f=$("<div>")
    f.text("UV Index:"+response.current.uvi)
    $("#currentWeather").append(b,c,d,e,f);
    // if (response.daily[0].weather)
    var day1= $("<li>")
    day1.text(moment().add(1, 'days').format("L"))
    var weather1=$("<h6>") 
    weather1.text("Temp:"+response.daily[1].temp.day+"   Humidity:"+response.daily[1].humidity+"   UV Index"+response.daily[1].uvi)
    day1.append(weather1)
    var day2=$("<li>")
    day2.text(moment().add(2, 'days').format("L"))
    var weather2=$("<h6>") 
    weather2.text("Temp:"+response.daily[2].temp.day+"   Humidity:"+response.daily[2].humidity+"   UV Index"+response.daily[1].uvi)
    day2.append(weather2)
    var day3=$("<li>")
    day3.text(moment().add(3, 'days').format("L"))
    var weather3=$("<h6>") 
    weather3.text("Temp:"+response.daily[3].temp.day+"   Humidity:"+response.daily[3].humidity+"   UV Index"+response.daily[1].uvi)
    day3.append(weather3)
    var day4=$("<li>")
    day4.text(moment().add(4, 'days').format("L"))
    var weather4=$("<h6>") 
    weather4.text("Temp:"+response.daily[4].temp.day+"   Humidity:"+response.daily[4].humidity+"   UV Index"+response.daily[1].uvi)
    day4.append(weather4)
    var day5=$("<li>")
    day5.text(moment().add(5, 'days').format("L"))
    var weather5=$("<h6>") 
    weather5.text("Temp:"+response.daily[5].temp.day+"   Humidity:"+response.daily[5].humidity+"   UV Index"+response.daily[1].uvi)
    day5.append(weather5)
    $("#futureList").append(day1,day2,day3,day4,day5)
    
});
});
  };

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    $("#input").empty();
    $("#currentWeather").empty();
    $("#futureList").empty();
    var userInput = $('#input').val().trim();
    showHistory(userInput)
});
