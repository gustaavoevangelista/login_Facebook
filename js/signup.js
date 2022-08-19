let r = document.getElementById('btn_register')

let n = document.getElementById('name')
let m = document.getElementById('mobile_no')
let e = document.getElementById('email')
let p = document.getElementById('password')
let c = document.getElementById('confirm_pass')

r.addEventListener('click', function signup() {
	let name = n.value
	let mobile_no = m.value
	let email = e.value
	let password = p.value
	let confirm_pass = c.value

	let data = {
		name: name,
		mobile_no: mobile_no,
		email: email,
		password: password
	}

	//validation: fields cant be empty
	if (
		name.length == 0 ||
		mobile_no.length == 0 ||
		email.length == 0 ||
		password.length == 0 ||
		confirm_pass.length == 0
	) {
		alert('Please, fill in all fields.')
	} else {
		//verify if the password and confirm_pass have the same value
		if (password == confirm_pass) {
			alert('Passwords match')
			console.log(data)
			//write the data in db
			fetch('http://localhost:8081/users', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: { 'Content-type': 'application/json;charset=UTF-8' }
	
			}).then(res => {
				//redirect to "feed page"
				if (res.redirected) {
					const redirectUrl = res.url;

					window.location.href = redirectUrl;
				}
			})
			
		}
	}
})
