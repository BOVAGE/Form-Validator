// regex patterns
let usernameRegex = /\w{3,}/;
let emailRegex = /\w+@\w+\.\w{2,}/;
let passwordRegex = /.{6,}/;

// selects each input field
const USERNAME = document.querySelector("input#username");
const EMAIL = document.querySelector("input#email");
const PASSWORD1 = document.querySelector("input#password1");
const PASSWORD2 = document.querySelector("input#password2");

document.querySelector("form").addEventListener("submit", function (event) {
	// prevents form submission
	event.preventDefault();
	validate();
});

function validate () {
	// remove the correct and wrong signs on the elements
	USERNAME.classList = "";
	EMAIL.classList = "";
	PASSWORD1.classList = "";
	PASSWORD2.classList = "";
	// sets the error message to empty strings
	document.querySelector("p.username").innerHTML = " ";
	document.querySelector("p.email").innerHTML = " ";
	document.querySelector("p.password1").innerHTML = " ";
	document.querySelector("p.password2").innerHTML = " ";
	
	if (USERNAME.value.match(usernameRegex) == null) {
		document.querySelector("p.username").innerHTML = "Username must be at least 3 characters";
		USERNAME.classList.add("red");
	} else {
		USERNAME.classList.add("green");
	}
	
	if (EMAIL.value.match(emailRegex) == null) {
		document.querySelector("p.email").innerHTML = "Email is not valid";
		EMAIL.classList.add("red");
	} else {
		EMAIL.classList.add("green");
	}
	
	if (PASSWORD1.value.match(passwordRegex) == null) {
		document.querySelector("p.password1").innerHTML = "Password must be at least 6 characters";
		PASSWORD1.classList.add("red");
	} else {
		PASSWORD1.classList.add("green");
	}

	if (PASSWORD1.value !== PASSWORD2.value) {
		document.querySelector("p.password2").innerHTML = "Passwords do not match";
		PASSWORD2.classList.add("red");
	} else if (PASSWORD2.value == "") {
		document.querySelector("p.password2").innerHTML = "Password2 is required";
		PASSWORD2.classList.add("red");
	} else {
		PASSWORD2.classList.add("green");
	}
}