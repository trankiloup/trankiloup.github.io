jQuery(document).ready(function () {
    $('#button1').click(function () { $('p').css({ 'height': '500px' }) });
    $('#button2').click(function () { $('p').addClass('vert') })
    $('#button3').click(function () { $('p').removeClass('vert') })
    $('#button4').click(function () { $('p').hide() })
    $('#button5').click(function () { $('p').show() })

})