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
            viewAllEmployees();
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
            viewAllEmployees()
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

    function viewAllEmployees() {
        $.ajax({
            url: "/api/events",
            method: "GET"
        }).then(function (data) {

            $(".tbody").empty();

            for (let i = 0; i < data.length; i++) {
                let id = data[i].id;
                let name = data[i].name;
                let startTime = data[i].startTime;
                let endTime = data[i].endTime;
                $(`<tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${startTime}</td>
                <td>${endTime}</td>
                <td><button id="edit" class="btn-custom waves-effect waves-light btn-small">Edit</button>
                <button id="${id}" class="delete btn-custom waves-effect waves-light btn-small">Delete</button></td>
                </tr>`)
                    .appendTo(".tbody")
            }
        })
     
    };
    $(document).on("click", "#edit", function(event){
        console.log("im clicked")
        let selected = event.target.id
        $.ajax({
            url: "/api/events/",
            method: "PUT",
            data: ({id: selected, name:true})
        }).then(function(){
            renderAll()
        })
     
    })
    $(document).on("click", ".delete", function(event){
        console.log("clicked")
        let id = event.target.id
        $.ajax({
            url: "/api/events/" + id,
            method: "DELETE"

        }).then(()=>{
            viewAllEmployees();
        })
      
     
    })

    viewAllEmployees();

 


   function renderCalenderEvents(){
    $.ajax({
        url: "/api/events",
        method: "GET"
    }).then(function (data) {
        console.log(data)
    });
   }
    
   renderCalenderEvents()

   

}); //End of Document load Function