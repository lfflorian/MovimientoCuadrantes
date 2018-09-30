var collapse1_Count = 0;
var collapse2_Count = 0;
var collapse3_Count = 0;
var collapse4_Count = 0;

$('#collapseOne').mousemove(function (event) {
    collapse1_Count++;
});

$('#collapseTwo').mousemove(function (event) {
    collapse2_Count++;
});

$('#collapseThree').mousemove(function (event) {
    collapse3_Count++;
});

$('#collapseFour').mousemove(function (event) {
    collapse4_Count++;
});

$('.movimientos').click(function() {
    calculatevalues();
});

$('.reset').click(function() {
    resetValues();
    calculatevalues();
});


function calculatevalues() {
    var sumatoria = collapse1_Count + collapse2_Count + collapse3_Count + collapse4_Count;
    setDisplay('.c1 .progress-bar', collapse1_Count, sumatoria);
    setDisplay('.c2 .progress-bar', collapse2_Count, sumatoria);
    setDisplay('.c3 .progress-bar', collapse3_Count, sumatoria);
    setDisplay('.c4 .progress-bar', collapse4_Count, sumatoria);
}

function setDisplay(display, dato, sumatoria) {
    var promedio = 0;
    if (dato != 0)
        var promedio = ((dato * 100) / sumatoria).toFixed(2);
   
    $(display).css('width', promedio +'%');
    $(display).text(promedio);
};

function resetValues() {
    collapse1_Count = 0;
    collapse2_Count = 0;
    collapse3_Count = 0;
    collapse4_Count = 0;
}

/*
    obtener cordenadas
    var msg = 'mensaje '
    msg += event.pageX + ',' + event.pageY;
*/