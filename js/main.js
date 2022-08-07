import {new_register} from './connection.js'


function register(){
    var n = document.getElementById('name')
    var m = document.getElementById('mobile_no')
    var e = document.getElementById('email')
    var p = document.getElementById('password')
    var c = document.getElementById('confirm_pass')
    var r = document.getElementById('redirect')

    var name = n.value
    var mobile_no = m.value
    var email = e.value
    var password = p.value
    var confirm_pass = c.value
    var redirect = r.value
    
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