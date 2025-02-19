

let don10euros=document.getElementById("don10")
let don20euros=document.getElementById("don20")
let don50euros=document.getElementById("don50")


let unfois=document.getElementById("btn1")
let mensuel=document.getElementById("btn2")
let annuel=document.getElementById("btn3")

let btnrouge=document.getElementById("btnaffichage")
let montant=document.getElementById("montant")
let frequence=document.getElementById("frequence")

don10euros.addEventListener("click",(e)=>{
    if(don10euros && unfois){
        btnrouge.innerHTML="Faire un don de 10€/un fois"
    } else if (don10euros && mensuel){
        btnrouge.innerHTML="Faire un don de 10€/mensuel"
    }if (don10euros && annuel){
        btnrouge.innerHTML="Faire un don de 10€/Annuel"
    }

})

