$(document).ready(function () {
    $("#save-1").click(function () {
        var newName = $("#newName").val().trim();

        $.ajax({
            url: "/api/employee",
            method: "POST",
            data: {
                name: newName
            }
        }).then(function (data) {
            clearText();
            console.log(data);
        });
    });
    $("#save-2").click(function () {
        var employeeSelect = $("#employee-select").val().trim();
        var startTime = $("#start-time").val()
        var endTime = $("#end-time").val()

        $.ajax({
            url: "/api/events",
            method: "POST",
            data: {

                name: employeeSelect,
                startTime: startTime,
                endTime: endTime
            }

        }).then(function (data) {
            clearText();
            console.log(data);
        });


    });

    function clearText() {
        $("#newName").val("");
    }

    $.ajax({
        url: "/api/employee",
        method: "GET"
    }).then(function (data) {
        $("#employee-select").empty();

        for (var i = 0; i < data.length; i++) {
            let name = data[i].name;
            $("#employee-select").append($(`<option value=${name}>${name}</option>`));
        }

        $("#employee-select").formSelect();
    });




    //$("#view-all").click(function () {



    //$.ajax({
    //url: "/api/employee",
    // method: "GET",
    //}).then(function (data) {
    // console.log("fuck")
    // $(".all-employees").empty();

    // for (var i = 0; i < data.length; i++) {
    // $(".all-employees").append($(`<td value=${name}>${name}</td>`))
    // }
    //$(".all-employees").formSelect()
    // })
    // })
});
