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

// function reponse() {

// score=0
// for (i=0; i<faux.length; i++){

// if (faux[i]=true){
//     score++
// }
// alert(score)
//     }
// }

// faux.forEach((element, index) => {
//     console.log(element)
//     element.addEventListener("click", (event)=>{
//         vert(event.target, index)
        

//     }) 
// });


// let vrai=document.querySelectorAll("#vrai")
// console.log(vrai); 
// vrai.forEach((element, index) => {
//     console.log(element)
//     element.addEventListener("click", ()=>{
//     }) 
// });



// vrai.forEach((reponse, index) => {
//     reponse.addEventListener("click",(event)=>{
//         vert(event.target)
//         messageKO(index)
//     })
// });

// faux.forEach((reponse, index) => {
//     reponse.addEventListener
//     ("click",(event)=>{
//         rouge(event.target)
//         messageOK(index)
//     })
    
// });

// function vert() {
// if(faux[n]===bonnereponse){
//         element.classList.add("vert")
// score++
//     }
// alert(score)}

// function rouge(reponse){
//    reponse.classList.add("rouge");
//    score=Math.max(0, score - 1);
//  }

// function messageKO(){
//     let messages=[
//         "Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.",
//         "Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé.",
//         "Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d'animaux."
//     ]
//     let index=0

//     if (i=0, i<vrai.length, i++){
//         vrai[index].innerHTML=messages[index]
//         alert(`Mauvaise réponse ! ${messages[index]}\n Vous avez maintenant ${score} point(s)`)
//     }
// }
// function messageOK() {
//     let msg=[
//         "Bonne réponse ! 85% des dons sont utilisés pour les animaux.",
//         "Exact ! Tous les animaux sont accueillis, peu importe leur santé.",
//         "Correct ! Les besoins sont immenses et chaque don est précieux."
//     ]; 
//     let index=0

//     if (index<=faux.length){
//         alert(`${msg[index]}. Votre score est de ${score}. Bravo!!`)
//     }
// }
//     // if(vrai[1]){
//     //     faux[1].textContent="Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé."
//     //     alert(`C'est incorrect ! Les refuges accueillent tous les animaux, quel que soit leur état. Votre score actuel est de 0 point(s).Vous avez maintenant ${score}point(s)`)
//     // }
//     // if (vrai[2]){
//     //     faux[2].textContent=`Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d'animaux.`
//     //     alert(`Incorrect ! Les besoins des associations sont énormes. Vous avez ${score}point(s) pour cette question.`)
//     // }

// //         faux[0].innerHTML="Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels."
// //         alert(`Bonne réponse ! 85% des dons sont utilisés pour les animaux. Votre score augmente ${score}!`)
// //     }
// //     if(faux[1]){
// //         faux[1].textContent="Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé."
// //         alert(`Exact ! Tous les animaux sont accueillis, peu importe leur santé. Votre score est maintenant de ${score} point(s) !`)
// //     }
// //     if (faux[2]){
// //         faux[2].textContent=`Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d'animaux.`
// //         alert(`Correct ! Les besoins sont immenses et chaque don est précieux. Vous avez ${score} en total! Bravo!!`)
// //     }
// // }

// // // vrai=reponse
// // // reponse=false
// // // let score=0

// // // vrai.addEventListener("click",()=>{
// // //     if(vrai[0]=reponse){
// // //         vrai[0].classList.add("rouge")
// // //         faux[0].textContent="Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels."
// // //         score=0
// // //     alert(`Mauvaise réponse ! N'oubliez pas, chez Quatre Pattes, 85% des dons sont utilisés pour les animaux. Vous avez maintenant ${score}point(s)`)
// // //     }
// // //     if(faux[0]!==reponse){
// // //         reponse=true
// // //         faux[0].classList.add("vert")
// // //         faux[0].textContent= "Bonne réponse: 'Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé'"
// // //         score+1
// // //     alert(`Bonne réponse : Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels. <br> Vous avez maintenant${score}point(s)`)
// // //     }})

// // // //     }

// // let faux= document.getElementById("faux")
// // faux.addEventListener("click",()=>{
// //     vert()

// // })



// // function vert() {
// // let bonnereponse=document.getElementsById("faux")
// // bonnereponse.classList.add("vert")
// // }

// // let vrai=false
// // let faux=true 
// // score=0
// // function messageOK(){
// //     if (vrai){

// //     }
// // }

// // function rouge(){
// //     let mauvaisereponse=document.getElementById("vrai")
// //     mauvaisereponse.classList.add("rouge")
// //

// let score = 0;
// bonnereponse = true;
// mauvaisereponse = false;

// // Assuming 'faux' is a global array, adjust if it's in a different scope
// let faux = []; // initialize faux

// // Example of pushing boolean values into faux array
// faux.push(true);
// faux.push(false);

// function vert(element, n) { // Add element and n as parameter
//   if (faux[n] === bonnereponse) {
//     n.classList.add("vert"); // Add vert class to the clicked element
//     score+1;
//   }
//   alert(score);

// Example usage within the event listener:
// Suppose we have:
// let vrai = document.querySelectorAll('.vrai');
// vrai.forEach((reponse, index) => {
//     reponse.addEventListener("click",(event)=>{
//         vert(event.target, index) // Pass the element and the current index n
//         //messageKO(index)
//     })
// });