let city = $("#searchTerm").val();
// store api key
const apiKey = "&appid=1a0d8629537110440965aa3936788ad4";
let date = new Date();
$("#searchTerm").keypress(function (event) {

  if (event.keyCode === 13) {
    event.preventDefault();
    $("#searchBtn").click();
  }
});
$("#searchBtn").on("click", function () {
  $('#forecastH5').addClass('show');
  // get the value of the input from user
  city = $("#searchTerm").val();

  // clear input box
  $("#searchTerm").val("");
  // full url to call api
  const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
  $.ajax({
    url: queryUrl,
    method: "GET"
  })
  .then(function (response) {
    let tempF = (response.main.temp - 273.15) * 1.80 + 32;
    getCurrentConditions(response);
    getCurrentForecast(response);
    makeList();
  })
});
function getCurrentConditions(response) {
    // get the temperature and convert to fahrenheit 
    let tempF = (response.main.temp - 273.15) * 1.80 + 32;
    tempF = Math.floor(tempF);
    $('#currentCity').empty();
    // get and set the content 
    const card = $("<div>").addClass("card");
    const cardBody = $("<div>").addClass("card-body");
    const city = $("<h4>").addClass("card-title").text(response.name);
    const cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
    const temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempF + " °F");
    const humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");
    const wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
    const image = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png")