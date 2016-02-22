$(document).ready(function(){
    $('.btn.btn-primary.roomSelected').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    });
});

$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
});