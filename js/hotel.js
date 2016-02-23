$(document).ready(function(){
    $('.btn.btn-primary.roomSelected').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    });
});

            // When the document is ready


var d = new Date();

var currDate = d.getDate();
var currMonth = d.getMonth();
var currYear = d.getFullYear();

var dateStr = currDate + "-" + currMonth + "-" + currYear; 
console.log(dateStr);

$(document).ready(function () {
    $('#datepicker').datepicker({
        format: "dd/mm/yyyy"});
    
    $('#datepicker').datepicker("setDate", new Date());
});


