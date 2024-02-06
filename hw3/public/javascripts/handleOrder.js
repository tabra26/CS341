var orderButtonHandle = function(event) {
    var note = $("#specs").val(); //take in text from text box

    if (note.includes("vegan")) {
        alert("Warning: the cheesecakes contain dairy."); //print message if vegan
    }

    else {
        var topping = $("input:checked").val(); //take in topping value selected
        var quantity = $("#dropdownId").val(); //take in quantity value selected
        $("#dropdownId").remove();
        $("input[type='radio']").remove();
        $("label").remove();
        $("#specs").remove();
        $("#quantityTopping").remove();
        $("#notes").remove();
        $(this).remove();
        $("#cheesecake1").after(`<p>Thank you! Your order has been placed. Topping: ${topping} Quantity: ${quantity} Notes: ${note}</p>`); //add p tag to body specifying order
    }
}



$(function() {
    $("#orderButton").click(orderButtonHandle);
});