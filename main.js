
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

