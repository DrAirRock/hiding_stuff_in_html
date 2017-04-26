

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "Paul") {
        alert("The secret Word is: Bannana ");
        return false;
    }
}
