let questions=document.querySelectorAll(".question");
console.log(questions);
questions.forEach((element, index)=>{
    let bonne=element.querySelector(".faux")
    let mauvaise=element.querySelector(".vrai")
})

    
let faux=document.querySelectorAll("#faux");
console.log(faux);
let vrai=document.querySelectorAll("#vrai");
console.log(vrai);

let score=0
let reponse=[]
totalquestions=questions.length
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

faux.forEach((element, index) => {
    element.addEventListener("click", ()=>{
        if(!reponse.includes(index))
            reponse.push(index)
        element.classList.add("vert")
        element.innerHTML=bonnesreponses[index]
    if (score<3){
        score++
    }
    if(reponse.length===2){
        alert(`Fin du quiz! Votre score final est : ${score} sur ${totalquestions} `)
    }
    bloquereponse(faux, vrai)

    alert(`${bonnesreponses[index]} Votre score: ${score}`)
        }); 
    })

vrai.forEach((element, index) => {
        element.addEventListener("click", ()=>{
            if(!reponse.includes(index)){
                reponse.push[index];
                element.classList.add("rouge");
            element.textContent=mauvaisesreponses[index]

}
        if(score>0 ){
            score--
        }
        if(reponse.length===2){
            alert(`Fin du quiz! Votre score final est : ${score} sur ${totalquestions} `)
        }


            alert(`${messageKO[index]} Votre score: ${score}`)
            
        })
    })


function bloquereponse (faux, vrai){
    faux.disabled=true
    vrai.disabled=true
}

