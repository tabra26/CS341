var dropdownHoverHandle = function(event) {
    $("#dropdownStuff").show();
}

var dropdownStuffHandle = function(event){
    var clickedMonth = $(this).text(); //take in clicked month text
    $("#monthDropdown").text(clickedMonth); //set to month dropdown
    $("#dropdownStuff").hide(); //hide list again
}

$(function() {
    $("#monthDropdown").hover(dropdownHoverHandle);
    $("#dropdownStuff li").click(dropdownStuffHandle);
});