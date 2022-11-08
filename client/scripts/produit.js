$(function () {
    $.ajax({
        url: "/produits",
        success: function( result ) {
            console.log(result)
        }
    });

});