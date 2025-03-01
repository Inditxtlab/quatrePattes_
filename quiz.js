let questions=document.querySelectorAll(".question");
console.log(questions)

let score=0
let reponse=[]
let totalquestions=0
let bonnesreponses=[
    "Bonne réponse : Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.",
    "Bonne réponse :Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé",
    "Bonne réponse : Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d'animaux."];

 let mauvaisesreponses=[
        "Mauvaise réponse : Vrai, les associations utilisent plus de 50% des dons pour leurs frais de fonctionnement",
        "Mauvaise réponse: Vrai, ils refusent les animaux malades car c'est trop coûteux",
        "Mauvaise réponse : Vrai, elles reçoivent beaucoup d'argent des donateurs",
        ]

    let messageKO=[
        "Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.",
        "Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé.",
        "Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d'animaux."
    ]

    let btnsolution=document.getElementById("quizsolution")
    function reinicie(){
        score=0
        reponse=[]

    questions.forEach((element)=>{
        let faux=element.querySelector(".faux")
        let vrai=element.querySelector(".vrai")
        faux.classList.remove("vert")
        vrai.classList.remove("rouge")
        faux.disabled=false
        vrai.disabled=false
        faux.innerHTML="Faux"
        vrai.innerHTML="Vrai"
        btnsolution.classList.remove("btn_don_red")
        btnsolution.innerHTML=""
    })
}

questions.forEach((element, index)=>{
    let faux=element.querySelector(".faux")
    let vrai=element.querySelector(".vrai")

faux.addEventListener("click", ()=>{
    choix_Reponse(index, faux, vrai, true)
})

vrai.addEventListener("click",()=>{
    choix_Reponse(index, faux, vrai, false)
})
})

function choix_Reponse(index, faux, vrai, isFaux){
        if(!reponse.includes(index)){
            reponse.push(index)
        }
        if(isFaux){
        faux.classList.add("vert")
        faux.innerHTML=bonnesreponses[index]
        score++
    }else{
        vrai.classList.add("rouge");
            vrai.textContent=mauvaisesreponses[index]
            score = Math.max(0, score - 1)
        }

        if(reponse.length===questions.length){
            let btnsolution=document.getElementById("quizsolution")
            btnsolution.classList.add("btn_don_red")
            btnsolution.innerHTML=`Fin du quiz! Votre score final est : ${score}  sur ${totalquestions}`
        
        }  
    }


document.getElementById("quizsolution").addEventListener("click",()=>{
    reinicie()
})