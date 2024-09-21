document.getElementById('regisform').addEventListener('submit',function event(e){

    e.preventDefault();

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const pass = document.getElementById('password').value
    const dob = document.getElementById('dob').value
    const condition = document.getElementById('condition').checked;
    const submit = document.getElementById('submit')

   let objects = JSON.parse(localStorage.getItem('objects')) || [];
   objects.push({name,email,pass,dob,condition});
   
   localStorage.setItem('objects',JSON.stringify(objects));

   document.getElementById('regisform').reset();
     
   displayuserData();
});

function displayuserData(){
    const tablebody = document.getElementById('registereduser');
    tablebody.innerHTML = '';

    const objects = JSON.parse(localStorage.getItem('objects')) || [];

    objects.forEach(function(user,index){
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.pass}</td>
        <td>${user.dob}</td>
        <td>${user.condition}</td>
        `;

        tablebody.appendChild(row)

    })

} 
displayuserData();
// code for a age validation 

//==================================================================================
function agevalidate(todays,userDob){
let Uy = userDob[0];
let Um = userDob[1];
let Ud = userDob[2];



   let age = todays.getFullYear() - Uy;

   const month = (todays.getMonth()+1) - Um
   if(month<0 || (month === 0 && todays.getDate() < Ud ))
   {
    age--;
   }
   return age
}


let Birthdate = document.getElementById('dob');
Birthdate.addEventListener("change", ()=> {
    // console.log(Birthdate.value);
    const birthdate = Birthdate.value.split("-")

let todays = new Date();
let userDob = birthdate;
let age = agevalidate(todays,userDob)

if (age < 18 || age > 55) {
    Birthdate.setCustomValidity("Your age min and max in between of 18 and 55");
    return;
  } else {
    Birthdate.setCustomValidity("");
  }

})


//================================================================================

// const birthdate = document.getElementById('dob').value.split("-")
// console.log(birthdate);

// if(agevalidate(birthdate)){
//     console.log("valid age ")
// }
// else{
//     console.log("invalid age")
// }
