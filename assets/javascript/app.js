var characterArray = ["Aragorn", "Legolas", "Gandalf", "Gimli"];

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
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=gOkeGOoowuRgibEdfXeUeBagEsBGFJDx',
            type: 'GET',
        })
        .done(function(response) {
            displayGif(response);
        })
}