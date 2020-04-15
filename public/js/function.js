$(document).ready(function () {
    $("#save-empl").click(function () {
        
        var newName = $("#new-name").val();
       
        $.ajax({
            url: "/api/employee",
            method: "POST",
            data: {
                name: newName
            }
        }).then(function (data) {
            clearText();
            renderAllSchedules();
        });
    });

    $("#save-sched").click(function () {
        let employeeSelect = $("#employee-select option:selected").val()
        let startDate = $("#start-date").val()
        let endDate = $("#end-date").val()
        let startTime = $("#start-time").val()
        let endTime = $("#end-time").val()
        let color = $("#color-option option:selected").attr('value')
        
        $.ajax({
            url: "/api/events",
            method: "POST",
            data: {
                name: employeeSelect,
                startDate: startDate,
                endDate: endDate,
                startTime: startTime,
                endTime: endTime,
                color: color
            }
        }).then(function (data) {
            clearText();
            renderAllSchedules();
            renderCalenderEvents();
        });
    });

    function clearText() {
        $("#newName").val("");
        $("#start-date").val("");
        $("#end-date").val("");
        $("#start-time").val("");
        $("#end-time").val("");
    }

    function renderAllEmployees(){
        $.ajax({
            url: "/api/employee",
            method: "GET"
        }).then(function (data) {
    
            $("#employee-select").empty();
    
            for (let i = 0; i < data.length; i++) {
                let name = data[i].name;
                $(`<option value=${name}>${name}</option>`).appendTo('#employee-select')
            }
            $("#employee-select").formSelect();
        });
    }

    function renderAllSchedules() {
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
                let startDate = data[i].startDate;
                let endDate = data[i].endDate;
                
                $(`<tr>
                <td>${name}</td>
                <td>${startDate} ${startTime}</td>
                <td>${endDate} ${endTime}</td>
                <td class="right-align">
                <button id="edit" class="btn-custom waves-effect waves-light btn-small">Edit</button>
                <button id="${id}" class="delete-btn btn-custom waves-effect waves-light btn-small">Delete</button>
                </td>
                </tr>`)
                .appendTo(".tbody")
            }
        })
    };
/*
    $(document).on("click", "#edit", function (event) {
        let selected = event.target.id
        
        $.ajax({
            url: "/api/events/",
            method: "PUT",
            data: ({
                id: selected,
                name: true
            })
        }).then(function () {
            renderAllSchedules()
        })
    });
*/
    $(document).on("click", ".delete-btn", function (event) {
        let id = event.target.id
        $.ajax({
            url: "/api/events/" + id,
            method: "DELETE"
        }).then(() => {
            renderAllSchedules();
        })
    });

    
/*
    function renderCalenderEvents() {
        $.ajax({
            url: "/api/events",
            method: "GET"
        }).then(function (data) {
            console.log(data)
        });
    }
*/
    //Call functions on page load
    renderAllSchedules();
    renderAllEmployees();
    //renderCalenderEvents();
    

}); //End of Document load Function