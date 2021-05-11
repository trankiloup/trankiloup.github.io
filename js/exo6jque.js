jQuery(document).ready(function () {
    $('textarea').hide();
    
        $('div').click(function () {$('div').hide();$('textarea').show()});
        $('button').click(function () { $("div").html(
            $("textarea").val()).show();$('form').hide() });
});
