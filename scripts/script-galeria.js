$(document).ready(function() {
    var type = "mezcal botella";
    console.log(type);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=z66p0tujW19s183M7THj67b9kSIrfXvJ&limit=20";
    
    $.ajax ({
        url: queryURL,
        method: "GET"
    })
    .then((response) => {
        
        response.data.forEach(gif => {
            var marcaDiv = $(`<div class = 'marca-item'>`)

            var price = gif.images.original.height;
            var p = $("<p>").text("Precio: $" + price);

            var animated = gif.images.fixed_height.url;
            var still = gif.images.fixed_height_still.url;

            var marcaImage = $("<img>");
            marcaImage.attr("src", animated);
            marcaImage.attr("data-still", still);
            marcaImage.attr("data-animate", animated);
            marcaImage.attr("data-state", "animated");
            marcaImage.addClass("marca-image");

            marcaDiv.append(marcaImage);
            marcaDiv.append(p);

            $('#marcas').append(marcaDiv);

        })
    })

    $("#marcas").on("click", ".marca-image", function() {
        var state = $(this).attr("data-state");
        if(state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })
});