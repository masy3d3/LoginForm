
let buttonShowForm = document.querySelector('.button-show-form'),
    wrapper= document.querySelector('.wrap-conteiner'),
    form = document.querySelector('.form-wrap'),
    closeForm = document.querySelector('.close'),
    
    slider = document.querySelector('.sign-slider'),
    signUpIntro = document.querySelector('.sign-up-welcom'),
    signInIntro = document.querySelector('.sign-in-welcom-back'),
    signUp = document.querySelector('.sign-up'),
    signIn = document.querySelector('.sign-in'),
   
    signUpButtonScroll = document.querySelector('.sign-up-welcom__button'),
    signInButtonScroll = document.querySelector('.sign-in-welcom-back__button'),
    signUpSubmit = document.querySelector('.sign-up__submit'),
    signInSubmit = document.querySelector('.sign-in__submit');
signInButtonScroll.onclick = ()=>{MoveSlider("right")};     
signUpButtonScroll.onclick = ()=>{MoveSlider("left")};

function MoveSlider(direction){
    if(direction == "left"){
    slider.classList.add('sign-slider--active');
    signUpIntro.style.opacity = "0";
    setTimeout(()=> {
        signInIntro.classList.add('sign-in-welcom-back--active');
    },200);
    signUp.style.display = "flex";
    signIn.classList.add('sign-in--hidden');
    setTimeout(()=> {
        signIn.style.display = "none";
        signUp.classList.add('sign-up--active'); 
        signInIntro.style.display = "flex";
        signUpIntro.classList.add('sign-up-welcom--hidden');},250);
    }else if(direction == "right"){
        slider.classList.remove('sign-slider--active');
        signUp.classList.remove('sign-up--active');signInIntro.classList.remove('sign-in-welcom-back--active');
        setTimeout(()=> {
            signUp.style.display = "none";
            
             
            signUpIntro.classList.remove('sign-up-welcom--hidden');
            
        },100); 
      
        setTimeout(()=> {
          signUpIntro.style.opacity = "1" ;
          signIn.classList.remove('sign-in--hidden');
          signIn.style.display = "flex";
           },250);  
    
           signIn.style.transform = "translateX(-100px)";
           
        }
}

buttonShowForm.onclick = (e)=>{
   if(e.target.className == "button-show-form")
    hidenButton();
}

document.onclick = (e)=>{
    e.preventDefault();
}

function hiddenForm(){ 
    wrapper.style.backgroundColor = "rgba(255,255,255)";
    setTimeout(()=>{
        form.style.opacity = '0';
        form.style.visibility = "hidden";
        
        setTimeout(()=>{
            form.style.display = "none";
            },100);
    },20);
    buttonShowForm.style.opacity = '1';
    buttonShowForm.style.visibility = "visible";
    setTimeout(()=>{
        buttonShowForm.style.display = "block";
    },150);
    document.onkeydown = null;   
}

function hidenButton(){
    buttonShowForm.style.opacity = '0';
    buttonShowForm.style.visibility = "hidden";
    setTimeout(()=>{
        buttonShowForm.style.display = "none";
    },100);
   // wrapper.style.backgroundColor = "rgba(0,0,0,0.1)";
    setTimeout(()=>{
        form.style.display = "block";
        setTimeout(()=>{
                form.style.opacity = '1';
                form.style.visibility = "visible";
            },20);
    },150);

    document.onkeydown = (e)=>{
        console.log(e);
        if(e.keyCode == 27){
            hiddenForm()
            
        }
    }
    closeForm.onclick = hiddenForm;
    wrapper.onclick = (e)=>{
        if(e.target.className == "wrap-conteiner")
        hiddenForm();
     }
}



