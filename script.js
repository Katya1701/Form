'use strict'

const login = document.getElementById('login');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('mail');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const progressLine = document.querySelector('.progress-line');
const inputField = document.querySelectorAll('.input-field');


//------------VALIDATION----------//

function validation() {

  let check = false

//--Login--//

  if (login.value.length > 1) {
    login.classList.add('true')
    check = true
  } else {
    login.classList.add('error')
    check = false
  }

//--Password--//

  if (password.value.length !== 0 ) {
      
    if (password.value === password2.value) {
      message.textContent = 'Пароль совпадает!'
      message.style.display = 'block'
      message.style.backgroundColor = '#31572c'
      password.classList.add('true')
      password2.classList.add('true')

      check = true
    } else if (password.value != password2.value) {
      message.textContent = 'Пароль не совпадает!'
      message.style.display = 'block'
      message.style.backgroundColor = '#ef233c'
      password.classList.add('error')
      password2.classList.add('error')

      check = false
    } else {
      console.log('пися')
    }
  } 
  
  else {
    check = false
  }

// Попробовать else if //


//--Email--//

  email.addEventListener('input', function () {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Кусь')
        email.classList.add('error')
    } else {
        email.setCustomValidity('')
        email.classList.add('true')
    }
  })

  if (email.value.length) {
    check = true
    
  } else {
    check = false
  }

//--Phone--//

    IMask(
      phone,
      {
        mask : '+{7} (000) 000-00-00'
      }
    );

    phone.oninput = function () {
      const w = this.offsetWidth;
      progressLine.style.width = ((w/19) * this.value.length ) + 'px';
      progressLine.style.backgroundColor = `rgb(${(255 - (255/19)* this.value.length)}, 137, 0)`;
    }

    if (phone.value.length !== 0) {
      phone.classList.add('true')
      check = true
    } else {
      phone.classList.add('error')
      check = false
    }

//--Object--//

    if (check) {
      let user = {
        login: login.value,
        password: password.value,
        email: email.value,
        phone: phone.value
      }
      console.log(user)
    }
}











