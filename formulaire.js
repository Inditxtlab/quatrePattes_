// Creation d'un formulaire: 
// champs obligatoires > nom, mail, message 
// Validation 
// Message de confirmation 

// Premier pass: 
document.getElementById("formulaire").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e);
    ValidationForm();
})


// Fonction: 
// D'abord on apel les valeurs de nos elements pour apres les manipule, ainsi que les div ou on va afficher de messages 

function ValidationForm(){
    let nom=document.getElementById("inp1").value;
    let usermail=document.getElementById("inp2").value;
    let msg= document.getElementById("message").value;

let erreur_nom=document.getElementById("nom_erreur");
let erreur_mail=document.getElementById("mail_erreur");
let erreur_msg=document.getElementById("msg_erreur");

let Valid=true;
erreur_nom.innerHTML="";
erreur_mail.innerHTML="";
erreur_msg.innerHTML=""; 

if(nom===""){
    erreur_nom.innerHTML="Le nom est obligatoire"
    Valid=false
}
if(usermail===""){
    erreur_mail.innerHTML="L'adresse e-mail est obligatoire"
    Valid=false
}else if(!usermail.includes("@")){
    erreur_mail.innerHTML="Saisi une adresse e-mail valide"
    Valid=false
}
if (msg===""){
    erreur_msg.innerHTML="N'oublie pas saisir votre message"
    Valid=false
}
if (Valid){
    alert("Votre message a été envoyer!")
}
}
