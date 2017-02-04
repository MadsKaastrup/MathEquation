$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        alert("Submit prevented");
    });
});
