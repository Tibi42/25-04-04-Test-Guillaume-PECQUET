# Partie 1: Questions Théoriques (Toutes ressources sont autorisées sauf l'utilisation d'LLMs. ex: ChatGPT, Bard, etc.)

NB: Les réponses doivent être courtes et concises.

## HTML

1. **Expliquez la différence entre les balises `<div>` et `<section>` en HTML5.**  
   _Réponse :_ <section> est fait pour contenir et decoupée en section la page HTML, les div sont faites pour contenir les autres balises tel h1 etc...

2. **Quelle est la différence entre les balises `<head>` et `<body>` dans un document HTML ?**  
   _Réponse :_ head contient les meta données de la page HTML

3. **À quoi sert la balise `<meta charset="UTF-8">` dans l'en-tête d'un document HTML ?**  
   _Réponse :_ La balise sert à définir l'encodage des caractères

4. **Expliquez la différence entre les balises `<ul>` et `<ol>` en HTML.**  
   _Réponse :_ la balise <ol> designe des listes organisées, la balise <ul> designe des liste non-organisées

5. **Comment peut-on créer un lien vers une autre page web en HTML ?**  
   _Réponse :_ on doit creé une balise <a link src:""> et designé la page html visée

## CSS

6. **Qu'est-ce que le "box model" en CSS et quelles sont ses composantes ?**  
   _Réponse :_ définit la structure et l'espacement des éléments HTML

7. **Quelle est la différence entre `margin` et `padding` en CSS ?**  
   _Réponse :_ margin pour la marge exterieur, padding pour la marge interieur

8. **Quelle propriété CSS permet de changer la couleur du texte ?**  
   _Réponse :_ la proprieté color : ;

9. **Comment centrer un élément horizontalement en CSS avec la propriété `margin` ?**  
   _Réponse :_ en declarant margin Xrem 0;

10. **Comment change-t-on la taille d'un texte en CSS ?**  
     _Réponse :_ en utilisant la proprieté font-size: Xrem;

11. **À quoi sert la propriété `background-color` en CSS ?**  
     _Réponse :_ sert a changer la couleur de fond de la balise dans la divou est appliqué cette propriété

12. **Expliquez comment fonctionne `display: flex` et citez deux propriétés associées.**  
     _Réponse :_ la propriete display flex met en ligne les objets html associé
    justify-content: center;
    test-align: ceneter;

## JavaScript

13. **Comment déclare-t-on une variable en JavaScript ?**
14. **Comment déclare-t-on une variable en JavaScript ?**  
     _Réponse :_ Une variable peut être déclarée en utilisant les mots-clés var, let ou const
    _Réponse :_ pour declarer une variable on ecrit :
    soit var nomDeLaVariable;
    const XXX = xxx;
    let XXX = xxx;

15. **Quelle est la différence entre `let` et `const` pour déclarer des variables ?**  
     _Réponse :_ const est constant une fois declarere on ne peut plus la changer, let peut etre changer

16. **Quelle est la différence entre `=`, `==` et `===` en JavaScript ?**  
     = est utilisé pour assigner une valeur à une variable
    == verifier leur égalite aprer conversion
    === verifier l'égalité stricte

17. **Comment faire une condition "si...sinon" en JavaScript ?**  
     _Réponse :_ For... if ... else

18. **Qu'est-ce qu'une fonction en JavaScript et comment la déclarer ?**  
     _Réponse :_ une fonction en JS est une suite d'instruction executé les unes a la suite des autres
    une fonction JS se declare par soit : function() soit par une fonction fléché : =>

19. **Comment accéder à un élément HTML depuis JavaScript ?**  
     _Réponse :_ on utilise document.queryselector ou document.getbyid ou document.getbyClass nom de l'elemeent HTML

20. **Quelle méthode utilise-t-on pour ajouter un événement à un bouton en JavaScript ?**  
     _Réponse :_ addEventListner.boutton

21. **Comment créer un tableau en JavaScript ?**  
     _Réponse :_ on cré un tableau : nom du tableau {} ou nom du tableau = [
    {
    clé1: x,
    nom: x,
    etc...
    }
    ]

22. **Quelle est la différence entre `innerText` et `innerHTML` en JavaScript ?**  
     _Réponse :_ innnerHTML injecte du HTML, innerText injecte du texte

23. **Comment changer le style CSS d'un élément avec JavaScript ?**  
     on utilise la propriété style de l'élément:  
     element.style.propriete = "valeur";

24. **Qu'est-ce qu'un commentaire en code et comment l'écrire en HTML, CSS et JavaScript ?**  
     _Réponse :_ un commentaire

25. **Comment utiliser `console.log()` et à quoi sert cette fonction ?**  
     _Réponse :_ le console.log permet de voir l'execution d'un element du code JavaScript dans l'inspectuer du Browser

26. **Comment parcourir un tableau en JavaScript ? Citez deux méthodes différentes.**  
     _Réponse :_ On peut parcourir un tableau en JavaScript en utilisant :  
     Une boucle for classique
    La méthode forEach

27. **Qu'est-ce qu'un événement en JavaScript ? Donnez un exemple d'utilisation.**  
     c'est une interaction ou un changement qui se produit dans le navigateur, comme un clic, un survol, ou une saisie clavier.  
     addEventListner(onclick)

28. **Comment sélectionner un élément HTML par son ID en JavaScript ?**  
     Réponse :document.getElementbyID("ID de l'eme,t HTML");

29. **Qu'est-ce qu'un objet en JavaScript et comment accéder à ses propriétés ?**  
     _Réponse :_ c'est une collection de paires clé-valeur.

30. **Pourquoi est-il important de valider les données d'un formulaire avant de les traiter ?**  
     pour éviter les erreurs, améliorer la sécurité et garantir que les données avant de les utilisés et de les stockées
