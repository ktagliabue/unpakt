// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require scrollreveal
//= require jquery.magnific-popup
//= require creative
//= require_tree .
$( ".input" ).focusin(function() {
  $( this ).find( "span" ).animate({"opacity":"0"}, 200);
});

$( ".input" ).focusout(function() {
  $( this ).find( "span" ).animate({"opacity":"1"}, 300);
});

$(".login").submit(function(){
  $(this).find(".submit i").removeAttr('class').addClass("fa fa-check").css({"color":"#fff"});
  $(".submit").css({"background":"#2ecc71", "border-color":"#2ecc71"});
  $(".feedback").show().animate({"opacity":"1", "bottom":"-80px"}, 400);
  $("input").css({"border-color":"#2ecc71"});
  return false;
});
