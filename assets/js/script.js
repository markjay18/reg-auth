// Get form, input, div attribute value
const email = document.getElementById('email')
const contact = document.getElementById('contact')
const pwd = document.getElementById('password')
const pwd2 = document.getElementById('password2')
const form = document.getElementById('form')
const errElement = document.getElementById('err')


form.addEventListener('submit', (e) => {
	// Message popup when inputs is valid or not
	let messages = []
	var emailArray = []
    var passwordArray = []
	// Email validation format
	var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	var upperCase = /[A-Z]/g
	var numbers = /[0-9]/g
	var lowerCase = /[a-z]/g
	// When email input format is correct
	if(email.value.match(mailFormat)){
		email.style.borderColor = "#1cb11c"
	}else{
	// When email input format is wrong
		messages.push('You have entered an invalid email address!')
		document.getElementById('message').style.display = "block"
		document.getElementById('invalid').style.display = "block"
		email.style.borderColor = "#d82828"
		errElement.style.color = "#d82828"
	}
	// When contact input is correct
	if(contact.value.length >= 11) {
		contact.style.borderColor = "#1cb11c"
	}else{
	// When contact input is wrong
		messages.push('Contact must contain at least 11 numbers!')
		document.getElementById('message').style.display = "block"
		document.getElementById('invalid').style.display = "block"
		contact.style.borderColor = "#d82828"
		errElement.style.color = "#d82828"
	}
	// Validate lowercase letters
	if(pwd.value.match(lowerCase)){
		// Do nothing
	}else{
	// If no lowercase letter
		messages.push('Password lowercase letter is required!')
		document.getElementById('message').style.display = "block"
		document.getElementById('invalid').style.display = "block"
		pwd.style.borderColor = "#d82828"
		errElement.style.color = "#d82828"
	}
	// Validate capital letters
	if(pwd.value.match(upperCase)){
		// Do nothing
	}else{
	// If no uppercase letter
		messages.push('Password uppercase letter is required!')
		document.getElementById('message').style.display = "block"
		document.getElementById('invalid').style.display = "block"
		pwd.style.borderColor = "#d82828"
		errElement.style.color = "#d82828"
	}
	// Validate numbers
	if(pwd.value.match(numbers)){
		// Do nothing
	}else{
	// If no number
		messages.push('Password number is required!')
		document.getElementById('message').style.display = "block"
		document.getElementById('invalid').style.display = "block"
		pwd.style.borderColor = "#d82828"
		errElement.style.color = "#d82828"
	}
	// When password input is correct
	if(pwd.value.length >= 8){
		pwd.style.borderColor = "#1cb11c"
	}else{
	// When passwords input is wrong
		messages.push('Password must contain at least 8 characters!')
		document.getElementById('message').style.display = "block"
		document.getElementById('invalid').style.display = "block"
		pwd.style.borderColor = "#d82828"
		errElement.style.color = "#d82828"
	}
	// If pwd is not equal
	if(pwd.value !== pwd2.value){
		messages.push('Password mismatch!')
		document.getElementById('message').style.display = "block"
		document.getElementById('invalid').style.display = "block"
		pwd2.style.borderColor = "#d82828"
		errElement.style.color = "#d82828"
	}else{
	// If pwd match
		pwd2.style.borderColor = "#1cb11c"
	}
	// Message push
	if(messages.length > 0){
		e.preventDefault()
		errElement.innerText = messages.join(', ')
	// Push Email and Password
	}else if (emailArray.indexOf(email.value) == -1){
		 emailArray.push(email.value)
         passwordArray.push(pwd.value)

         alert(email.value + "Thanks for registration. \n")
	}		
})
