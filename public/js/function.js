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
        var startTime = $("#start-time").val().trim()
        var endTime = $("#end-time").val().trim()

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

        for (let i = 0; i < data.length; i++) {
            let name = data[i].name;
            $("#employee-select").append($(`<option value=${name}>${name}</option>`));
        }
        $("#employee-select").formSelect();
    });

    function viewAllEmployees(){
        $.ajax({
            url: "/api/employee",
            method: "GET"
        }).then(function (data) {
    
            $(".tbody").empty();
    
            for (let i = 0; i < data.length; i++) {
                let id = data[i].id;
                let name = data[i].name;
                $(`<tr>
                <td>${id}</td>
                <td>${name}</td>
                <td><button id="${id}" class="btn-custom waves-effect waves-light btn-small">Edit</button></td>
                </tr>`)
                .appendTo(".tbody")
            }
        })
    };

   viewAllEmployees();

    

}); //End of Document load Function