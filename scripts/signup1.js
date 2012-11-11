function validate(){
	if(is_field_empty()){
		alert("Empty form cannot be submitted");
		return false;
	}
	if( check_email() && check_username() && check_password() && check_c_password()){
		alert("successful");
		return false;			
	}else{
		//alert("Not success");
		return false;				
	}
	//return true;
	return false;
}
function is_field_empty(){
	var email_value=document.getElementById("email").value;
	var username_value=document.getElementById("username").value;
	var password_value=document.getElementById("password").value;
	if(email_value== "" || username_value == "" || password_value == "" ){
		return true;
	}
	return false;
}
function check_email(){
	var pattern=new RegExp(/^[a-zA-Z0-9_.]+@+[a-z]+.+[a-z.]+$/);
	var email = document.getElementById("email");
	var email_value= email.value;
	if(pattern.test(email_value)){
		document.getElementById("email_error_area").innerHTML="";
		return true;
	}else{
		var message="Emails should be in proper format.";
		document.getElementById("email_error_area").innerHTML=message;
		return false;
	}
	return false;
	//alert(pattern.test("rajan@gmail.com"));			
}
function check_username(){
		var name_value = document.getElementById("username").value;
		var pattern = new RegExp(/^[\w]+[\w\d\._]{5,}$/);
		if(pattern.test(name_value)){
			document.getElementById("username_error_area").innerHTML="";	
			return true;
		}else{
			var  message = "Name  should be more than 5 chars, and not start with a number.";
			document.getElementById("username_error_area").innerHTML="Name should be greater than 5 characters";	
			return false;
		}
		return true;
}
function check_password(){
	var password_value=document.getElementById("password").value;
	//var cpassValue=document.getElementById("c_password").value;
	if(password_value.length<6){
		var message = "pass should be greater than 6 characters";	
		document.getElementById("password_error_area").innerHTML=message;
		return false;
	}else{
		document.getElementById("password_error_area").innerHTML="";
	}
	if(!isAlphaNumerics(password_value)){
		document.getElementById("password_error_area").innerHTML="password should be alphanumeric";	
			return false;
	}
	document.getElementById("password_error_area").innerHTML="";
	return true;
}
function check_c_password(){
	var password_value=document.getElementById("password").value;
	var c_password_value=document.getElementById("c_password").value;
	if(password_value!=c_password_value){
		document.getElementById("c_password_error_area").innerHTML="password should be equal.";	
		return false;			
	}
	document.getElementById("c_password_error_area").innerHTML="";	
	return true;
}

function isNumber(a){
	if(a>=0 && a<=9){
		return true;
						
	}else{
		return false;				
	}			
}
function isAlphaNumerics(checkString) {
     var regExp = /^[A-Za-z0-9]$/;
     if(checkString!= null && checkString!= "")
     {
       for(var i = 0; i < checkString.length; i++)
       {
         if (!checkString.charAt(i).match(regExp))
         {
           return false;
         }
       }
     }
     else
     {
       return false;
     }
     return true;
}