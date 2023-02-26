let btn=document.getElementById('btn')
window.onscroll=function(){
    scrollfun()
}
function scrollfun(){
    if((document.body.scrollTop>40)||(documnet.documentElement.scrollTop>40)){
        btn.style.display='block'
    }
    else{
        btn.style.display='none'
    }
}
btn.addEventListener('click',btnclick)
function btnclick(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0
}