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
        modalamigos.style.bottom = "77rem";
        modalhobbies.style.bottom = "115rem";
        modalinfosobremim.style.bottom = "-1rem";
});

// abrir modal amigos
clickamigos.addEventListener("focus", ()=>{
    modalinfosobremim.style.bottom="39rem";
    modalhobbies.style.bottom = "115rem";
    modalamigos.style.bottom = "37rem";
})

// abrir modal hobbies
clickhobbies.addEventListener("focus", ()=>{
    modalinfosobremim.style.bottom = "39rem";
    modalamigos.style.bottom = "77rem";
    modalhobbies.style.bottom = "75rem";
})

fecharsobremim.addEventListener("click", ()=>{
    modalinfosobremim.style.bottom = "39rem";
    console.log("teste fechar sobre mim");
})

fecharamigos.addEventListener("click", ()=>{
    modalamigos.style.bottom = "77rem";
})

fecharhobbies.addEventListener("click", ()=>{
    modalhobbies.style.bottom = "115rem";
})