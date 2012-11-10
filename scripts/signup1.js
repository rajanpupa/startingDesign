function validate(){
	var email_value=document.getElementById("email").value;
	var username_value=document.getElementById("username").value;
	var password_value=document.getElementById("password").value;
	if(email_value== "" || username_value == "" || password_value == "" ){
		alert("Empty form cannot be submitted");
		
	}
	return false;
}