const userForm= document.getElementById("form");
const usernameInput= document.getElementById("username");
const emailInput= document.getElementById("email");
const passwordInput= document.getElementById("pass");
const confirmInput= document.getElementById("confirm");

// Event listener
//in a webpage when we do specific tasks such as - mouse click, press submit button
function showError(input,message){
	const formControl=input.parentElement;
	formControl.className='form-control error'
	small.innerText=message;
}
function showSuccess(input){
	const formControl=input.parentElement;
	formControl.className='form-control success';
}
form.addEventListener('submit', function(e){
	e.preventDefault();// preventDefault, prevents the process of submiting
	
	if (usernameInput.value === ''){
		showError(usernameInput,'Username is required');
	}
	else {
		showSuccess(usernameInput);
	}
	if (emailInput.value === ''){
		showError(emailInput,'Email is required');
	}
	else {
		showSuccess(emailInput);
	}
	if (passwordInput.value === ''){
		showError(passwordInput,'Password is required');
	}
	else {
		showSuccess(PasswordInput);
	}
	if (confirmInput.value === ''){
		showError(confirmInput,'Password is required');
	}
	else {
		showSuccess(confirmInput);
	}
})