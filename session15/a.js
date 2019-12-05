function validateRegister() {
	var username, password;
	username= document.getElementById('username').value;
	password= document.getElementById('password').value;
	if(username==''){
		alert('Plead input your name');
	}
if(password ==''){
	alert('Plead input your password');
}
if(username !='') && (password !=''))
{
	alert('REgisster succes');
}