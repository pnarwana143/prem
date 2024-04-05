let slider=document.querySelector(".menu-icon");
let menuBtn=document.querySelector(".menu-btn");
let crossBtn=document.querySelector(".cross-btn");
let hide=document.querySelector(".slider-hide");
let activeBtn=document.querySelectorAll(".acive-button");
let active=document.querySelector(".acive");

menuBtn.addEventListener("click",()=>{
    slider.style.right="0";
    menuBtn.style.display="none";
    crossBtn.style.display="block";
    hide.style.display="block";

})
crossBtn.addEventListener("click",()=>{
    slider.style.right="-100vw";
    menuBtn.style.display="block"
    crossBtn.style.display="none"
    hide.style.display="none"
 
})
hide.addEventListener("click",()=>{
    slider.style.right="-100vw";
    hide.style.display="none";
    crossBtn.style.display="none";
    menuBtn.style.display="block";
})

activeBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        removeClass();
        btn.classList.add("active");
        
    })
    
})
function removeClass(){
    activeBtn.forEach((btn)=>{
        btn.classList.remove("active");
    }

    )
}