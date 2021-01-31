$("#btn1").on("click",function(event){
    event.preventDefault();
    $(".page1").attr("style","display: none");
    $(".page2").removeAttr("style");
    console.log("this function work !!!");
});
$("#searchBtn").on("click",function(event){
     event.preventDefault();
     var userInput =$("#input").val().trim();
     localStorage.setItem("city",userInput);
     $("#recentSearch").append("<li>");


console.log(userInput);
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +userInput+ "&appid=adb5289082d713294f40248da64a0cf5";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
  console.log("currentday:")
  console.log(response)
//   console.log(responsed.coord.lon)
  
});
// var lat=
// var lon=
// var queryURL ="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=minutely,hourly,alerts&appid=adb5289082d713294f40248da64a0cf5";
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly,alerts&appid=adb5289082d713294f40248da64a0cf5",
    //https://api.openweathermap.org/data/2.5/onecall?q=orlando&exclude=daily&appid=adb5289082d713294f40248da64a0cf5
    //api.openweathermap.org/data/2.5/forecast?q=orlando&appid=adb5289082d713294f40248da64a0cf5
    method: "GET"
}).then(function(response){
    console.log("5daysresponse:")
    console.log(response)
});
});
