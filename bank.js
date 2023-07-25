// function login()
// {
//     var uname = document.getElementById("ema").value;
//     var pwd = document.getElementById("pwd").value;
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if(ema =='')
//     {
//         alert("please enter user name.");
//     }
//     else if(pwd=='')
//     {
//         alert("enter the password");
//     }
// }

var form = document.getElementById("form")
var email = document.getElementById("ema")
var password = document.getElementById("pwd")

form.addEventListener('submit', validateInput
      
   
         )

function validateInput() {
   let emailValue = email.value.trim();
   let passwordValue = password.value.trim();

   if (emailValue == 'orijaesther10@gmail.com' & passwordValue == 'Icmaone' ) {
    alert("Login Successful!!!")

   }
   else{
      alert('Login Failed!!')
   }
}
function validateInput() {
   let emailValue = email.value.trim();
   let passwordValue = password.value.trim();

   if (emailValue == 'orijahelen003@gmail.com' & passwordValue == 'Icmaone' ) {
    alert("Login Successful!!!")

   }
   else{
      alert('Login Failed!!')
   }
}