
$(document).ready(function () {

    $("#save-1").click(function () {

        var newName = $("#newName").val().trim()

        $.ajax({
            url: "/api/employee",
            method: "POST",
            data: { name: newName }
        }).then(function (data) {
            clearText()
            console.log(data)
        })
    })
    function clearText(){
        $("#newName").val("")
    }

    $.ajax({
        url: "/api/employee",
        method: "GET"
    }).then(function (data) {
        $("#employee-select").empty()
        for( var i = 0; i > data.length; i++ ){
            $("#employee-select").append($("<option>").text(data[i].name))
        }
        console.log(data)
    })
   























})


