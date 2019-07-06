$('#ModalCenter').modal({ show: false})
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