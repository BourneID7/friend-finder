$("#submit").on("click", function(event) {
    event.preventDefault();
        var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            $("#question1").val(),
            $("#question2").val(),
            $("#question3").val(),
            $("#question4").val(),
            $("#question5").val(),
            $("#question6").val(),
            $("#question7").val(),
            $("#question8").val(),
            $("#question9").val(),
            $("#question10").val()
        ]
    };
    $.post("/api/friends", newFriend)
    .then(function(data) {
        console.log(data);
    })
})