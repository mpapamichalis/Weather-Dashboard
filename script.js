
$("button").on("click", function (event) {
    event.preventDefault();
    var cityInput = $("#city").val().trim();
    var APIKey = "1a0d8629537110440965aa3936788ad4";

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + APIKey;
console.log(cityInput);

var queryURLToday = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + APIKey;
console.log(cityInput);

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

$(".col-md").show();
$(".date1").text((response.list[4].dt_txt).split(" ", 1));
var tempF1 = ((response.list[4].main.temp - 273.15) * 1.80 + 32).toFixed(2);
var day1temp = $("<p>").text("Temp: " + tempF1 + "°F");
var day1humidity = $("<p>").text("Humidity: " + response.list[4].main.humidity + "%");
var iconcode = response.list[4].weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
$('#icon1').attr('src', iconurl);
$(".day1").empty();
$(".day1").append(day1temp, day1humidity);

$(".date2").text((response.list[12].dt_txt).split(" ", 1));
var tempF2 = ((response.list[12].main.temp - 273.15) * 1.80 + 32).toFixed(2);
var day2temp = $("<p>").text("Temp: " + tempF2 + "°F");
var day2humidity = $("<p>").text("Humidity: " + response.list[12].main.humidity + "%");
var iconcode = response.list[12].weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
$('#icon2').attr('src', iconurl);
$(".day2").empty();
$(".day2").append(day2temp, day2humidity);

$(".date3").text((response.list[20].dt_txt).split(" ", 1));
var tempF3 = ((response.list[20].main.temp - 273.15) * 1.80 + 32).toFixed(2);
var day3temp = $("<p>").text("Temp: " + tempF3 + "°F");
var day3humidity = $("<p>").text("Humidity: " + response.list[20].main.humidity + "%");
var iconcode = response.list[20].weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
$('#icon3').attr('src', iconurl);
$(".day3").empty();
$(".day3").append(day3temp, day3humidity);

$(".date4").text((response.list[28].dt_txt).split(" ", 1));
var tempF4 = ((response.list[28].main.temp - 273.15) * 1.80 + 32).toFixed(2);
var day4temp = $("<p>").text("Temp: " + tempF4 + "°F");
var day4humidity = $("<p>").text("Humidity: " + response.list[28].main.humidity + "%");
var iconcode = response.list[28].weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
$('#icon4').attr('src', iconurl);
$(".day4").empty();
$(".day4").append(day4temp, day4humidity);

$(".date5").text((response.list[36].dt_txt).split(" ", 1));
var tempF5 = ((response.list[36].main.temp - 273.15) * 1.80 + 32).toFixed(2);
var day5temp = $("<p>").text("Temp: " + tempF5 + "°F");
var day5humidity = $("<p>").text("Humidity: " + response.list[36].main.humidity + "%");
var iconcode = response.list[36].weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
$('#icon5').attr('src', iconurl);
$(".day5").empty();
$(".day5").append(day5temp, day5humidity);

})

$.ajax({
    url: queryURLToday,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var queryURLUV = "http://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=" + APIKey;

   $.ajax({
      url: queryURLUV,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      
      var UVIndex = $(".UV-goes-here").addClass("card-text").text("UV Index: " + response.value);
    

  
  })
  
  $(".5day").show();

    var cardBody = $("<div>").addClass("card-body");
    var cityName = $("<h5>").addClass("card-title").text(response.name);
    var fToday = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(1);
    var tempToday = $("<p>").addClass("card-text").text("Temperature: " + fToday + "°F");
    var humidityToday = $("<p>").addClass("card-text").text("Humidity: " + response.main.humidity + "%");
    var windyToday = $("<p>").addClass("card-text").text("Wind Speed: " + ((response.wind.speed * 2.2369)).toFixed(1) + " MPH");
    
    var iconcode = response.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon').attr('src', iconurl);
    $("#icon").show();
    $(".today").addClass("card");
    cardBody.append(cityName, tempToday, humidityToday, windyToday);
    $(".today").append(cardBody);


})


});