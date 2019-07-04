$('#ModalCenter').modal({ show: false})
$("#submit").on("click", function(event) {
    event.preventDefault();
        // convert question responses from string to int
        var q1 = parseInt($("#question1").val());
        var q2 = parseInt($("#question2").val());
        var q3 = parseInt($("#question3").val());
        var q4 = parseInt($("#question4").val());
        var q5 = parseInt($("#question5").val());
        var q6 = parseInt($("#question6").val());
        var q7 = parseInt($("#question7").val());
        var q8 = parseInt($("#question8").val());
        var q9 = parseInt($("#question9").val());
        var q10 = parseInt($("#question10").val());

        var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
            q7,
            q8,
            q9,
            q10
        ]
    };
    function validateForm() {
        if ($.trim($("#name").val()) === "" || $.trim($("#photo").val()) === "") {
            alert('Please fill in required fields.');
            return false;
        } else
        {
            $.post("/api/friends", newFriend, function(data) {

                console.log(data);
        
                // display modal with bestMatch
                $("#matchName").text(data.name);
                $("#matchImg").attr("src", data.photo);
                $('#ModalCenter').modal('show');
            });    
        
        }
    }
    validateForm();

});