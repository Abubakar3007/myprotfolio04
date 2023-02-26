let box=document.getElementById('box')
let btn=document.getElementById('btn')
let cancel=document.getElementById('cancel')
btn.addEventListener('click',btnclick)
function btnclick(){
    box.style.display='block';
    console.log("hii")
}
cancel.addEventListener('click',cancelclick)
function cancelclick(){
    box.style.display='none'
}
window.addEventListener('click',outclick)
function outclick(e){
    if(e.target==box){
        box.style.display='none'
    }
}