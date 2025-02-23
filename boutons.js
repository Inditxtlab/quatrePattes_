

let don10euros=document.getElementById("don10")
console.log(don10euros)
let don20euros=document.getElementById("don20")
console.log(don20euros)
let don50euros=document.getElementById("don50")
console.log(don50euros) 
let donMontant=document.querySelectorAll("#donations")
console.log(donMontant)

let btns_frequency=document.querySelectorAll("#containerbtns")
console.log(btns_frequency)
let unefois=document.getElementById("btn1")
console.log(unefois)
let mensuel=document.getElementById("btn2")
console.log(mensuel)
let annuel=document.getElementById("btn3")
console.log(annuel)

let btnred=document.getElementById("donnow")
console.log(btnred)
let montant=document.getElementById("montant")
console.log(montant)
let frequence=document.getElementById("frequence")
console.log(frequence)

montant=""
frequence="une fois"  


don10euros.addEventListener("click",()=>{
    montant="10euros"
    donationIs()
})
don20euros.addEventListener("click",()=>{
    montant="20 euros"
    donationIs()
})
don50euros.addEventListener("click",()=>{
    montant="50 euros"
    donationIs()
})


unefois.addEventListener("click", ()=>{
frequence="une fois"
donationIs()
})
mensuel.addEventListener("click",()=>{
frequence="mois"
donationIs()

})
annuel.addEventListener("click",()=>{
    frequence="an"
    donationIs()
})

btnred.addEventListener("click",()=>{
    if(montant&&frequence){
        alert(`Vous avez choisir de faire un don de : ${montant}/${frequence}. Merci pour votre soutien 🐶`)
    }else{
        alert(`Oups ! Veuillez sélectionner un montant et une fréquence avant de continuer. 😊`)}
    })


function donationIs(){
    btnred.innerText=`Faire un don de ${montant}/${frequence}`
}
