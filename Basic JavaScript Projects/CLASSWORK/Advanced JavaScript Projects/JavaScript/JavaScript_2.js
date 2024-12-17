//form validation//
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out.");
      return false;
    }
    let y = document.forms["myForm"]["flastname"].value;
    if (y == "") {
      alert("Name must be filled out.");
      return false;
    }
    let z = document.forms["myForm"]["email"].value;
    if (z == "") {
      alert("Email must be filled out.");
      return false;
    }
  }