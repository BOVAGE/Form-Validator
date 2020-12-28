let usernameRegex = /\w{3,}/;
let passwordRegex = /.{6,}/;

const USERNAME = document.querySelector("input#username");
const PASSWORD1 = document.querySelector("input#password1");
const PASSWORD2 = document.querySelector("input#password2");
document.querySelector("input[type='submit']").addEventListener("click", validate);

function validate () {
	if (USERNAME.value.match(usernameRegex) == null) {
		document.querySelector("p.username").innerHTML = "Username must be at least 3 characters";
		USERNAME.classList.add("red");
	} else {
		USERNAME.classList.add("green");
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
	} else {
		PASSWORD2.classList.add("green");
	}
}