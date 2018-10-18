
function myMap() {
  var myCenter = new google.maps.LatLng(34.173310, -118.554197);
  var mapOptions = {
    center: myCenter,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({position: myCenter});
  marker.setMap(map);
}

var slideIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}