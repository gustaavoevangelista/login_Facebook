function register(){
    var name = document.getElementById('name')
    var mobile_no = document.getElementById('mobile_no')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var confirm_pass = document.getElementById('confirm_pass')
    var redirect = document.getElementById('redirect')

    if ((name.value.length == 0)  || (mobile_no.value.length == 0) || (email.value.length == 0) || (password.value.length == 0) || (confirm_pass.value.length == 0 )){
        alert('Please, fill in all fields.')
    }

    else{
        if(password.value == confirm_pass.value){
            //new_register(name.value, mobile_no.value, email.value)
            redirect.href = 'login.html'
        }
    }


}