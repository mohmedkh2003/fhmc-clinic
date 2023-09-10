const currentTime=()=>{
    const el=document.querySelector("h1.clock");
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    hh=hh<10?`0${hh}`:hh;
    mm=mm<10?`0${mm}`:mm;
    ss=ss<10?`0${ss}`:ss;

    let time=`${hh}:${mm}:${ss}`;
    el.innerText=time;
   
};
currentTime();
setInterval(currentTime,1000);

const dateHere=()=>{
    const dateT=document.querySelector("h1.date");
    let date=new Date();
    let dd=date.getDate();
    let mm=date.getMonth()+1;
    let yy=date.getFullYear();

    dd=dd<10?`0${dd}`:dd;
    mm=mm<10?`0${mm}`:mm;

    let time=`${dd}/${mm}/${yy}`;
    dateT.innerText=time;
}
dateHere();
setInterval(dateHere,86400);
