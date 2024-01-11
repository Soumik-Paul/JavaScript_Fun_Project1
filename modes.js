let v1= document.querySelector("#b1")
let p1= document.querySelector("#p1")
let mode = 1
v1.addEventListener("click",()=>{
    if(mode){
        mode = 0;
       // document.body.style.backgroundColor="black"
        v1.innerHTML="Dark Mode"
        p1.innerHTML="You are in Dark mode"
        document.body.classList.add("dark")
        document.body.classList.remove("white")
    }
    else{
        mode = 1;
        v1.innerHTML="Light Mode"
        p1.innerHTML="You are in Light mode"
       // document.body.style.backgroundColor="white"
        document.body.classList.remove("dark")
        document.body.classList.add("white")
        
    }
})