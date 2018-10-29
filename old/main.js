
// function myMap() {
//   var myCenter = new google.maps.LatLng(34.173310, -118.554197);
//   var mapOptions = {
//     center: myCenter,
//     zoom: 13,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   }
// 	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//   var marker = new google.maps.Marker({position: myCenter});
//   marker.setMap(map);
// }

// var slideIndex = 0;

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 1} 
//     x[slideIndex-1].style.display = "block"; 
//     setTimeout(carousel, 2000); // Change image every 2 seconds
// }


$(document).ready(function(){
  "use strict";

  var window_width   = $(window).width(),
  window_height      = window.innerHeight,
  header_height      = $(".default-header").height(),
  header_height_static = $(".site-header.static").outerHeight(),
  fitscreen        = window_height - header_height;


  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.active-works-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin: 100,
        dots: true
    });
    $('.active-banner-slider').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true
    });
    // Add smooth scrolling to Menu links

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });      
    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });
 });
