let fecharsobremim = document.querySelector(".fecharsobremim")
let fecharamigos = document.querySelector(".fecharamigos")
let modalinfosobremim = document.querySelector(".modal-infosobremim")
let modalamigos = document.querySelector(".modal-amigos")
let clicksobremim = document.querySelector(".sobre-mim")
let clickamigos = document.querySelector(".amigos")


// abrir modal sobre mim
clicksobremim.addEventListener("click", ()=>{
    modalamigos.style.bottom = "90rem";
    modalinfosobremim.style.bottom = "0";
});

// abrir modal amigos
clickamigos.addEventListener("focus", ()=>{
    modalinfosobremim.style.bottom="45rem";
    modalamigos.style.bottom = "44rem";
})



fecharsobremim.addEventListener("click", ()=>{
    modalinfosobremim.style.bottom = "45rem";
})

fecharamigos.addEventListener("click", ()=>{
    modalamigos.style.bottom = "90rem";
})
