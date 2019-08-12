var characterArray = ["Aragorn", "Legolas", "Gandalf", "Gimli"];

$(document).ready(function () {
    for (var i = 0; i < characterArray.length; i++) {
        $("#character-buttons").append("button type='button' onClick='searchGif(/"" + characterArray[i] + " / ")' class='btn btn-primary' value=' " + characterArray[i] + " </button>"); 
    }
})