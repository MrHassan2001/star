let stars=document.getElementById('stars');
let mon=document.getElementById('mon');
let mon3=document.getElementById('mon3');
let mon4=document.getElementById('mon4');
let mon5=document.getElementById('mon5');
let mon6=document.getElementById('mon6');
let nouvil=document.querySelector('.nouvil');
window.onscroll=function{
    let value=scrollY;
    console.log(value);
    mon.style.top=value+'px'

}
