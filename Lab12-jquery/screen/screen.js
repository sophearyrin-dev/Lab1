$(function(){
    var width = 50;
    var height = 50;
    
    setInterval(function(){
        $("#circle").css({
            width : width + "10px",
            height : height + "10px"
        },250)
    },)
});
