let menulist=document.getElementById("menulist");
let cross=document.getElementById('cross');
let menu=document.getElementById('menu');
let talk=document.getElementById('talk');
let pop=document.getElementById('pop');
let crossoff=document.getElementById('crossoff');
menu.addEventListener('click',menufun);
function menufun(){
    cross.style.display='block';
    this.style.display='none';
    menulist.style.display='block'
}
cross.addEventListener('click',crossfun);
function crossfun(){
    menu.style.display='block';
    menulist.style.display='none';
    this.style.display='none';
}
talk.addEventListener('click',talkfun);
function talkfun(){
    pop.style.display='block';

}
crossoff.addEventListener('click',crossofffun);
function crossofffun(){
    pop.style.display='none';
    // this.style.display='none'
}