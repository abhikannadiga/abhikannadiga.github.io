
document.addEventListener("scroll",()=>{
    document.querySelectorAll('.fade-up').forEach(el=>{
        let top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 60){
            el.classList.add("visible");
        }
    });
});
