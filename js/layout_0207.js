let act = document.querySelectorAll('.activate');
let con = document.querySelectorAll('.cont');

act[0].classList.add('on');
con[0].classList.add('view')

function see(a){
    for(let i=0; i<act.length; i++){
        act[i].classList.remove('on');
        con[i].classList.remove('view');
    }
    act[a].classList.add('on');
    con[a].classList.add('view');
}

// ==========================================

let hidden = document.querySelectorAll('.Hi');
let hm = document.querySelector('hidden_menu');

function mouse(b){
    hidden[b].classList.toggle('view');
}

// hidden.addEventListener('mouseover', ()=>{
//     if(hidden.classList.contains('view')){
//         hidden.classList.remove('view');
//     }else{
//         hidden.classList.add('view');
//     }
// })

// ==========================================

let ham = document.querySelectorAll('.ham_menu');
let nh = document.querySelectorAll('.nav_hide');

function visi(){
    ham[0].classList.toggle('anime1');
    ham[2].classList.toggle('anime2');
    ham[1].classList.toggle('invisible');
    nh[0].classList.toggle('block');
}

// ==========================================

let bigMenu = document.querySelectorAll('.menu-dep-btn');

let plus = document.querySelectorAll('.plus')
let midMenu = document.querySelectorAll('.plus>.menu-2dep-btn');
let smlMenuList = document.querySelectorAll('.dep3_list');

midMenu.forEach(function(dm) {
    dm.addEventListener('mouseover', function(){
        var panel = this.nextElementSibling; // this는 dm를 뜻함. 
        let dmn = document.querySelector('.menu-2dep-btn.mHei')
        
        if(dm.getAttribute('class') === 'menu-2dep-btn mHei'){
            panel.style.maxHeight = null;
            dmn.classList.remove('mHei');
        }else{
        for( item of smlMenuList ){
            if(item.style.maxHeight){
                item.style.maxHeight = null;
                dmn.classList.remove('mHei');
            }
        }
        dm.classList.add('mHei');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        }
        
    })
    dm.addEventListener('mouseout', function(){
        var panel = this.nextElementSibling; // this는 dm를 뜻함. 
        let dmn = document.querySelector('.menu-2dep-btn.mHei')
        
        if(dm.getAttribute('class') === 'menu-2dep-btn mHei'){
            panel.style.maxHeight = null;
            dmn.classList.remove('mHei');
        }else{
        for( item of smlMenuList ){
            if(item.style.maxHeight){
                item.style.maxHeight = null;
                dmn.classList.remove('mHei');
            }
        }
        dm.classList.add('mHei');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
})







