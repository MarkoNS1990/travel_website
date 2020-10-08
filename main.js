const subsBtn = document.querySelector('#subsBtn')
const input = document.querySelector('#input')

subsBtn.addEventListener('click',()=>input.value!=''?alert('Hvala na subscribe'):alert('Unesite email.'))