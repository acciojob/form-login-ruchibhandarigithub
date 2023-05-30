function getFormvalue() {
	  var form = document.getElementById("form1");
  
  // Get the values of the first name and last name fields
  var firstName = form.fname.value;
  var lastName = form.lname.value;
  
  // Create the alert message
  var alertMessage =  firstName +" "+ lastName;
  
  // Display the alert message
  alert(alertMessage);


}
