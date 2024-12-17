//displays message if fields aren't filled out//

function validateForm() {
  let x = document.forms["myForm"]["fistname", "lastname", "email", "phone", "message"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
