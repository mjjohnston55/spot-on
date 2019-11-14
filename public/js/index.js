$(document).ready(function(){
    $(".submit").on("click", function(){
        var value = $(".zippy").val()
        console.log(value)
        console.log(typeof(value))
    })
});