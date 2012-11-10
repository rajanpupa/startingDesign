function login_click(){
	var username_value=document.getElementById("username").value;
	var password_value=document.getElementById("password").value;
	if(username_value=="webmaster" && password_value=="changeme!soon" ){
		alert("Hurray!!! simple but I step forward");
	}else{
		alert("Invalid ussername/password combination. Please try with valid credentials");
	}
	return false;
}