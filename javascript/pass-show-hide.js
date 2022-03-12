/*
Adding functionality to password field such as changing input type and changing icon
It requires the below css code to work perfectly
It is a unicode for eye icon 
.form form .field i.active::before{
	content: "\f070";
	color:#333;
}
*/

const pswdField = document.querySelector(".form .field input[type='password']");
const toggleBtn = document.querySelector(".form .field i");
//Note go this way instead of adding addEventListener 
//cos it will deprive from some certain properties.
//So just attach the javascript event attribut to the object
toggleBtn.onclick = () =>{
	if(pswdField.type == "password"){
		pswdField.type = "text";
		toggleBtn.classList.add("active");
	}else{
		pswdField.type = "password";
		toggleBtn.classList.remove("active");
	}
}
