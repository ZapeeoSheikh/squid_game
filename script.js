let banner_img=document.getElementById('banner-img');
let banner=1;
let music=new Audio('bk_music1.mp3');
let music2=new Audio('bk_music2.mp3');
let button=document.getElementById('btn');

function banner_change(){
         if(banner==1){
             banner_img.src='banner1.jpg';
         }
         else if(banner==2){
             banner_img.src='banner2.jpg';
         }
         else if(banner==3){
             banner_img.src='banner3.jpg';
         }
         else if(banner==4){
             banner_img.src='banner4.jpg';
         }
         else if(banner==5){
             banner_img.src='banner5.jpg';
         }
         else if(banner==6){
             banner_img.src='banner6.jpg';
         }
         else if(banner==7){
             banner_img.src='banner7.jpg';
         }
         else if(banner==8){
             banner_img.src='banner8.jpg';
         }
         else if(banner==9){
             banner_img.src='banner9.jpg';
         }
         else if(banner==10){
             banner_img.src='banner10.jpg';
         }
         else if(banner==11){
             banner_img.src='banner11.jpg';
            }
        

  
         if(banner<11){
             banner++;
         }
         else{
             banner=1;
         }
}

function flicker_effect(){
    let N=document.getElementById('N');
    let E=document.getElementById('E');
    let T=document.getElementById('T');
    let F=document.getElementById('F');
    let L=document.getElementById('L');
    let I=document.getElementById('I');
    let X=document.getElementById('X');

    
    let number=Math.ceil(Math.random()*40);
    if(number==1){
        N.classList.add('light-effect1');

    }
    if(number==2){
        N.classList.add('light-effect1');
    }
    if(number==3){
        E.classList.add('light-effect1');
    }
    if(number==4){
        T.classList.add('light-effect1');
    }
    if(number==5){
        F.classList.add('light-effect1');
    }
    if(number==6){
        L.classList.add('light-effect1');
    }
    if(number==7){
        I.classList.add('light-effect1');
    }
    if(number==8){
        X.classList.add('light-effect1');
    }
    if(number==9){
        N.classList.add('light-effect2');
    }
    if(number==10){
        E.classList.add('light-effect2');
    }
    if(number==11){
        T.classList.add('light-effect2');
        
    }
    if(number==12){
        F.classList.add('light-effect2');
        
    }   
    if(number==13){
        L.classList.add('light-effect2');
        
    }
    if(number==14){
        I.classList.add('light-effect2');
        
    }
    if(number==15){
        X.classList.add('light-effect2');
        
    }
    if(number>=16 && number<=20){
        F.classList.add('light-effect1');
        X.classList.add('light-effect1');
        
    }
    if(number>=20 && number<=23){
        T.classList.add('light-effect1');
        I.classList.add('light-effect1');   
    }

    if(number>=23 && number <=25){
        E.classList.add('light-effect1');
        N.classList.add('light-effect1');

        
    }
    if(number>=25 && number <=28){
        N.classList.add('light-effect1');
        X.classList.add('light-effect1');

        
    }
    if(number>=29 && number <=30){
        N.classList.add('light-effect2');
        E.classList.add('light-effect2');
        T.classList.add('light-effect2');
        F.classList.add('light-effect2');
        L.classList.add('light-effect2');
        I.classList.add('light-effect2');
        X.classList.add('light-effect2');


    }
    if(number>=31 && number <=36){
        N.classList.add('light-effect1');
        E.classList.add('light-effect1');
        T.classList.add('light-effect1');
        F.classList.add('light-effect1');
        L.classList.add('light-effect1');
        I.classList.add('light-effect1');
        X.classList.add('light-effect1');
1
    }
    

    setTimeout(() => {
        N.classList.remove('light-effect1');
        E.classList.remove('light-effect1');
        T.classList.remove('light-effect1');
        F.classList.remove('light-effect1');
        L.classList.remove('light-effect1');
        I.classList.remove('light-effect1');
        X.classList.remove('light-effect1');
        N.classList.remove('light-effect2');
        E.classList.remove('light-effect2');
        T.classList.remove('light-effect2');
        F.classList.remove('light-effect2');
        L.classList.remove('light-effect2');
        I.classList.remove('light-effect2');
        X.classList.remove('light-effect2');

    }, 1000);
    
 

}


let flag=0;
let banner_switch_speed=4000;
button.onclick=function(){

   if(flag==1)
   return;
   
   flag=1;

    music.play();
    music.loop=true; 
    // music2.play();
    
    setInterval(() => {
        banner_change();
    }, banner_switch_speed);
    
    setInterval(() => {
        flicker_effect();
    }, 300);

}
// button.onclick=function(){

// music2.play();

// }
