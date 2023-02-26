function update(){
    let main=document.getElementById('main')
    let date=new Date();
    let hr=date.getHours();
    if(hr<10){
        hr='0'+hr
    }
    main.children[1].innerHTML=hr
    let min=date.getMinutes();
    if(min<10){
        min='0'+min
    }
    main.children[2].innerHTML=min
    let sec=date.getSeconds();
    if(sec<10){
        sec='0'+sec
    }
    main.children[3].innerHTML=sec
}
let timetr
function clockstr(){
    if(!timetr){
        timetr=setInterval(update,1000)
    }
update()
}
function clockstp(){
    clearInterval(timetr);
    timetr=null
}
