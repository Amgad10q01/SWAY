let topBtn = document.querySelector(".top")
let header = document.querySelector(".navbar")
window.addEventListener("scroll", ()=> {
    if(window.scrollY >= 100) {
        topBtn.style.right="20px";
        header.style.padding = "7px 0"
    }
    else {
        topBtn.style.right="-100%";
        header.style.padding = "18px 0"
    }
})

window.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})
