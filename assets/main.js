let fecharsobremim = document.querySelector(".fecharsobremim")
let fecharamigos = document.querySelector(".fecharamigos")
let fecharhobbies = document.querySelector(".fecharhobbies")
let modalinfosobremim = document.querySelector(".modal-infosobremim")
let modalamigos = document.querySelector(".modal-amigos")
let modalhobbies = document.querySelector(".modal-hobbies")
let clicksobremim = document.querySelector(".sobre-mim")
let clickamigos = document.querySelector(".amigos")
let clickhobbies = document.querySelector(".hobbies")


// abrir modal sobre mim
clicksobremim.addEventListener("click", ()=>{
    modalamigos.style.bottom = "90rem";
    modalhobbies.style.bottom = "132rem";
    modalinfosobremim.style.bottom = "0";
});

// abrir modal amigos
clickamigos.addEventListener("focus", ()=>{
    modalinfosobremim.style.bottom="45rem";
    modalhobbies.style.bottom = "132rem";
    modalamigos.style.bottom = "44rem";
})

// abrir modal hobbies
clickhobbies.addEventListener("focus", ()=>{
    modalinfosobremim.style.bottom = "45rem";
    modalamigos.style.bottom = "90rem";
    modalhobbies.style.bottom = "88rem";
})

fecharsobremim.addEventListener("click", ()=>{
    modalinfosobremim.style.bottom = "45rem";
})

fecharamigos.addEventListener("click", ()=>{
    modalamigos.style.bottom = "90rem";
})

fecharhobbies.addEventListener("click", ()=>{
    modalhobbies.style.bottom = "132rem";
})