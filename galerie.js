// //GALERIE INTERACTIF//
// Dans cette section, j'accède d'abord au DOM et récupère les éléments nécessaires en utilisant leur ID. J'utilise la méthode .getAttribute pour obtenir la valeur de la source, puis je stocke ces valeurs dans des variables. Ces variables sont ensuite utilisées dans des fonctions fléchées pour créer un événement au clic sur les images miniatures.

//getAttribute et creation de variables : 

let luna=document.getElementById("imgL").getAttribute('src'); 
console.log(luna)
let oscar=document.getElementById("imgO").getAttribute('src'); 
console.log(oscar)
let max=document.getElementById("imgM").getAttribute('src'); 


// Evenements, setAttribute et function : 
document.getElementById("imgL").addEventListener("click",()=>{
    changeImg(luna)
    document.getElementById("lune").innerHTML= "<p><span class='texte_galerie'>Luna </span><br><br>Trouvée dans la rue avec une patte cassée, Luna a été soignée et retrouvé sa joie de vivre. Elle coule maintenant  des jours heureux dans sa nouvelle famille.</p>"

})

document.getElementById("imgO").addEventListener("click",()=>{
    changeImg(oscar)
        document.getElementById("lune").innerHTML="<p><span class='texte_galerie'>Oscar</span><br><br>Abandonnée dans un forêt, Oscar était terrifié par les humains. Après des mois de patience et d’amour, il est devenu un chat confiant et affectueux.</p>"
})

document.getElementById("imgM").addEventListener("click",()=>{
    changeImg(max)
    document.getElementById("lune").innerHTML="<p><span class='texte_galerie'>Max</span><br><br>Ma a été adopté par une famille qui l'adore. Il a une passion surprenante pour les t-shirts et aime les porter lors de ses promenades.</p>"
})

function changeImg(source){
    document.getElementById("bigimg").setAttribute('src', source)
}