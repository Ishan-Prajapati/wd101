

document.getElementById('regisform').addEventListener('submit',function event(e){
e.preventDefault();


//access the user data

const nme = document.getElementById('name').value
const email = document.getElementById('email').value
const pass = document.getElementById('password').value
const dob = document.getElementById('dob').value
const condition = document.getElementById('condition').checked ? 'yes' : 'no';

const row = document.createElement('tr')
row.innerHTML = `
<td>${nme}</td>
<td>${email}</td>
<td>${pass}</td>
<td>${dob}</td>
<td>${condition}</td>
`
document.getElementById('registereduser').appendChild(row)
document.getElementById('regisform').reset()
})

//ishan
