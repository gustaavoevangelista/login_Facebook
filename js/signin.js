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

    if (email.length == 0 || password.length == 0) {
        alert('Please, fill in all fields.')
    } 
    else {
        //if email and password dont match -> alert error

        //else:
        console.log(data)
        fetch('http://localhost:8081/users', {
				method: 'GET',
				//body: JSON.stringify(data),
				headers: { 'Content-type': 'application/json;charset=UTF-8' }
			})
        
    }   
})