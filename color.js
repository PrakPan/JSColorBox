const getcolor=()=>{
    
const color=Math.random()*16777215;
const value=Math.floor(color);

const head=document.getElementById('heading');
head.innerHTML= '#'+value.toString(16);
const bgcolor=document.getElementsByClassName('main','container');
bgcolor[0].style.backgroundColor=head.innerHTML;


}
const button=document.getElementById('button');
    button.addEventListener('click',
    getcolor);
getcolor();