$(document).ready(function(){
    $('.btn.btn-primary.roomSelected').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    });
});

$('#sandbox-container div').datepicker({
    todayBtn: true,
    clearBtn: true,
    daysOfWeekHighlighted: "5,6"
});