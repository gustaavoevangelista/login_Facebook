let u = document.getElementById('user')
let p = document.getElementById('pass')
let l = document.getElementById('btnsignin')

l.addEventListener('click', function signin() {

    let email = u.value
    let password = p.value

     let data = {
        email: email,
        password: password
    } 

    //validation: fields cant be empty
    if (email.length == 0 || password.length == 0) {
        alert('Please, fill in all fields.')
    } 
    else {
        console.log(data)
        //search for data in database
        fetch('http://localhost:8081/users', {
				method: 'GET',
				//body: JSON.stringify(data),
				headers: { 'Content-type': 'application/json;charset=UTF-8' }
			}).then(res => {
				//redirect to "feed page"
				if (res.redirected) {
					const redirectUrl = res.url;

					window.location.href = redirectUrl;
				}
			})
    }   
})