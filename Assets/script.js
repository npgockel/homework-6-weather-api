


$("#search").on("click", function() {
    var city = $("#city").val();
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d6746b3e28e79b150c827fa250bf066e";

    $.ajax({
      method: "GET",
      url: url
    }).then(function(response) {
      console.log(response);
      $("#search-history").prepend(response.name)
    });
  });

