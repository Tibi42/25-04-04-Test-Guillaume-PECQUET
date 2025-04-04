// Fichier: app.js

// Tableau d'objets des personnes déjà enregistrées
const personnes = [
    {
        nom: "Dubois",
        prenom: "Baptiste",
        age: 28,
        profession: "Développeuse Web",
        dateNaissance: "1997-05-12"
    },
    {
        nom: "Martin",
        prenom: "Joshua",
        age: 35,
        profession: "Designer UX",
        dateNaissance: "1990-03-24"
    }
];

// 1. AFFICHAGE DES PERSONNES (5 points)
// Complétez cette fonction pour afficher toutes les personnes du tableau
// sous forme de "cartes" dans la section 1


function afficherPersonnes(listePersonnes = personnes) {
    const container = document.querySelector("#personnes-container");
    container.innerHTML = ""; 
    listePersonnes.forEach(function(personne) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <h2>${personne.nom}</h2>
            <p>${personne.prenom}</p>
            <p>${personne.age} ans</p>
            <p>${personne.profession}</p>
            <p>${personne.dateNaissance}</p>
        `;
        container.appendChild(cardElement);
    });
}


// 2. VALIDATION DU FORMULAIRE (5 points)
// Complétez cette fonction pour valider les données du formulaire
function validerFormulaire(event) {
    event.preventDefault(); 

    const nom = document.getElementById("name").value.trim();
    const prenom = document.getElementById("surname").value.trim();
    const age = document.getElementById("age").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const dateNaissance = document.getElementById("dob").value.trim();

    
    if (!nom || !prenom || age <= 0 || !profession || !dateNaissance) {
        alert("Veuillez remplir tous les champs correctement.");
        return false;
    }

    ajouterPersonne(nom, prenom, age, profession, dateNaissance);
    document.querySelector("form").reset(); 
    return true;
}

// 3. AJOUT D'UNE PERSONNE (5 points)
// Complétez cette fonction pour ajouter une nouvelle personne
function ajouterPersonne(nom, prenom, age, profession, dateNaissance) {
    const nouvellePersonne = {
        nom: nom,
        prenom: prenom,
        age: age,
        profession: profession,
        dateNaissance: dateNaissance
    }

    personnes.push(nouvellePersonne)
    afficherPersonnes();
   
    document.querySelector("form").reset();
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
    const inputValue = searchInput.value.toLowerCase();

    const resultats = personnes.filter(personne => {
        return (
        personne.nom.toLowerCase().includes(inputValue) ||
        personne.prenom.toLowerCase().includes(inputValue) ||
        personne.age.toString().includes(inputValue) ||
        personne.profession.toLowerCase().includes(inputValue)
    );
    })
    afficherPersonnes(resultats);
})

window.onload = afficherPersonnes();
document.querySelector("form").addEventListener("submit", validerFormulaire);