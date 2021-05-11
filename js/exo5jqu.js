jQuery(document).ready(function(){
    $("#img2").hide();
$("#img1").click(function(){$("#img2").toggle();$("#img1").toggle()});
$("#img2").click(function(){$("#img1").toggle();$("#img2").toggle()});


})