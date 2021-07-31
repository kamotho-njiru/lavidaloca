function getSizeValue() {
    var selectedvalue = document.getElementById("size").value;
    return parseInt(selectedValue);
}

function getCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}

function getToppings() {
    var selectedCrust = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}

function getQuantity() {
    var selectedToppings = document.getElementById("quan").value;
    return parseInt(selectedquantity)
}

function getTotalAmount() {
    var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
    alert("You have Ordered" + getQuantity("") + " pizza." + "" + " The Total Amount is kshs " + (totalAmount) + "" + " Thank you for your order welcome again.");
    prompt("enter your location")
    alert("You delivery fee is 150/=")
    alert("You order will be delivered shortly")
    alert("Continue shoppping with us each and every time .")

}