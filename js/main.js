import {register_new_user} from '.js/connection.js'
import {recover_pass} from '.js/connection.js'
import {login_user} from '.js/connection.js'

let r = document.getElementById('btn_register')

r.addEventListener("click", function signup(){
    let n = document.getElementById('name')
    let m = document.getElementById('mobile_no')
    let e = document.getElementById('email')
    let p = document.getElementById('password')
    let c = document.getElementById('confirm_pass')
    
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
            register_new_user()
            
        }
    }
})



let s = document.getElementById('submit')

s.addEventListener("click", function recover(){
    let e = document.getElementById('email')

    let email = e.value

    if (email.length == 0){
        alert('Please fill in the email field.')
    }

    else {
        // if email isnt registered: no email msg

        //else: welcome page recover_pass()
    }
})
    

let l = document.getElementById('btnsignin')

l.addEventListener("click", function login(){
    let e = document.getElementById('user')
    let p = document.getElementById('pass')

    let email = e.value
    let password = p.value

    if ((email.length == 0) || (password.length == 0)){
        alert('Please, fill in all fields.')
    }

    else {
        // if email and password dont match -> alert error
        //else login_user()
    }

})