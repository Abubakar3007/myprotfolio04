var open=document.getElementById('open')
var box=document.getElementById('box')
open.addEventListener('click',openfun)
function openfun(){
    box.style.display='block'

}
var cross=document.getElementById('cross')
cross.addEventListener('click',crossfun)
function crossfun(){
    box.style.display='none'
}
var cancel=document.getElementById('cancel')
cancel.addEventListener('click',cancelfun)
function cancelfun(){
    box.style.display='none'
}
var del=document.getElementById('delete')
del.addEventListener('click',delfun)
function delfun(){
    // alert("do you want to delete")
    box.style.display='none'

}