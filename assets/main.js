let fechar = document.querySelector("fechar")
let modalinfosobremim = document.querySelector(".modal-infosobremim")
let modalamigos = document.querySelector(".modal-amigos")
let modalhobbies = document.querySelector(".modal-hobbies")
let clicksobremim = document.querySelector(".sobre-mim")
let clickamigos = document.querySelector(".amigos")
let clickhobbies = document.querySelector(".hobbies")

clicksobremim.addEventListener("focus", ()=>{
        modalamigos.style.bottom = "77rem"
        modalhobbies.style.bottom = "115rem"
        modalinfosobremim.style.bottom = "-1rem";
        console.log("sobre mim")
    });

clickamigos.addEventListener("focus", ()=>{
    modalinfosobremim.style.bottom="39rem"
    modalhobbies.style.bottom = "115rem"
    modalamigos.style.bottom = "37rem";
    console.log("oi amigos")
})

clickhobbies.addEventListener("focus", ()=>{
    modalinfosobremim.style.bottom = "39rem"
    modalamigos.style.bottom = "77rem"
    modalhobbies.style.bottom = "75rem";
    console.log("oi hobbies")
})

img_bg.addEventListener("focus", ()=>{
    modalinfosobremim.style.bottom = "39rem"
    modalamigos.style.bottom = "77rem"
    modalhobbies.style.bottom = "115rem"
})