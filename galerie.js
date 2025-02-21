// //GALERIE INTERACTIF//
// Ici j'ai d'abord accede au DOM et recupere les elements à utilise dans ma function par le ID. j'ai utilise la methode .getAttribute pour recupere la valeur de la source et apres j'ai stocke ces valeurs en variables que j'ai utilise dans les function fleche pour creer un evenement au clicke sur les images miniatures. 

//getAttribute et creation de variables : 

let luna=document.getElementById("imgL").getAttribute('src'); 
console.log(luna)
let oscar=document.getElementById("imgO").getAttribute('src'); 
console.log(oscar)
let max=document.getElementById("imgM").getAttribute('src'); 


// Evenements, setAttribute et function : 
document.getElementById("imgL").addEventListener("click",()=>{
    changeImg(luna)

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