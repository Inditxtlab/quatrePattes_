

// let don10euros=document.getElementById("don10")
// let don20euros=document.getElementById("don20")
// let don50euros=document.getElementById("don50")

document.addEventListener('DOMContentLoaded',function() {
let unfois=document.getElementById("btn1")
let mensuel=document.getElementById("btn2")
let annuel=document.getElementById("btn3")

let btnred=document.getElementById("donnow")
let montant=document.getElementById("montant")
let frequence=document.getElementById("frequence")

document.getElementById("don10").addEventListener("click",()=>{
    donationIs("10")

})
document.getElementById("don20").addEventListener("click", ()=>{
    donationIs("20")
})
document.getElementById("don50").addEventListener("click",()=>{
    donationIs("30")

})


function donationIs(montant){
    if(unfois.checked){
        btnred.innerHTML=`Faire un don de ${montant}un fois`
    } else if (mensuel.checked){
        btnred.innerHTML=`Faire un don de ${montant} mensuel`
    } else if (annuel.checked){
        btnred.innerHTML=`Faire un don de ${montant} annuel`
    }

}

})
