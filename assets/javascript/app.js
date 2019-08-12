var characterArray = ["Aragorn", "Legolas", "Gandalf", "Gimli", "Frodo", "Bilbo", "Samwise", "Boromir", "Faromir", "Merry", "Pippin", "Balrog", "Shelob", "Gollum", "Smeagol"];

$(document).ready(function () {
    for (var i = 0; i < characterArray.length; i++) {
        $("#character-buttons").append("<button type='button' onclick='searchGif(\"" + characterArray[i] + "\")' class='btn btn-primary' value=' " + characterArray[i] + "'> " + characterArray[i] + " </button>");
    } //console.log("this works")
});

function characterButtonClicked() {
    var userInput = $('#character-input').val();
    searchGif(userInput);
}

function submitButtonClicked() {
    var userInput = $('#character-input').val();

    if (userInput) {
        $('#character-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}


function searchGif(gifName) {
    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search?q=lord+of+the+rings ' + gifName + ' &api_key=gOkeGOoowuRgibEdfXeUeBagEsBGFJDx',
        method: 'GET',
    })
        .done(function (response) {
            displayGif(response);
        })
}

function displayGif(response) {
    $('#characters').empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';

        image = '<div class="col-md-4">' + image + "</div>";
        $('#characters').append(image);
    }

    $('.movImage').on('click', function () {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });

}