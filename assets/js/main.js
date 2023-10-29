let tabs = document.getElementsByClassName('nav-link');
let nav = document.getElementsByClassName('nav-item');

//tabs
for(let i =0; i < tabs.length; i++){
    tabs[i].addEventListener('click',function(){
        for(let i =0 ; i < tabs.length; i++){
            tabs[i].classList.remove('active');
        }
        tabs[i].classList.add('active')
    })
}

//nav 
for(let i =0; i < nav.length; i++){
    nav[i].addEventListener('click',()=>{
        for(let i =0 ; i < nav.length; i++){
            nav[i].classList.remove('active');
        }
        nav[i].classList.add('active');
    })
}