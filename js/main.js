import {new_register} from './connection.js'


function register(){
    let n = document.getElementById('name')
    let m = document.getElementById('mobile_no')
    let e = document.getElementById('email')
    let p = document.getElementById('password')
    let c = document.getElementById('confirm_pass')
    let r = document.getElementById('redirect')

    let name = n.value
    let mobile_no = m.value
    let email = e.value
    let password = p.value
    let confirm_pass = c.value
    
    
    if ((name.length == 0)  || (mobile_no.length == 0) || (email.length == 0) || (password.length == 0) || (confirm_pass.length == 0 )){
        alert('Please, fill in all fields.')
    }

    else{
        if(password == confirm_pass){
            alert('password matches')
            new_register(name, mobile_no, email, password)
            
        }
    }

}


function recover(){
    let e = document.getElementById('email')

    let email = e.value
    

    if (email.length == 0){
        alert('Please fill in the email field.')
    }

    else {
        // if email isnt registered: no email msg

        //else: welcome page
    }
}