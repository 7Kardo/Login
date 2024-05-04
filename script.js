

var user = 'kardo'
var password = '12345'


var page = document.getElementById('page');

page.style.display = 'none';


var submit =document.getElementById('submit');

submit.addEventListener('click',function(){
  login()
})


function login(){
  var text = document.getElementById('text').value;
   
   

  var pass = document.getElementById('pass').value;

  if (text===''){
    alert('usarneme is required');
  }
  else if(pass===''){
    alert('password is required');
  }
  else{
   // alert(text +''+pass);
   
   if(text===user){
   if(pass===password){
     page.style.display = 'block';
   }
   else{
    alert('password is incorrect');
   }
  }
  else{
    alert('username is incorrect')
  }
}}



const btn = document.querySelector('#btn');
const back = document.querySelector('#back');


  btn.addEventListener('click', function() {
    back.classList.toggle('kardo');
  });