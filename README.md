# My PAL :books:

C'est une petite application créée lors d'une évaluation à la [Wild Code School](https://www.wildcodeschool.com/fr-FR/campus/marseille), et j'ai été inspirée par mon quotidien. La lecture et les bouquins, c'est un de mes passe-temps, et il est toujours important de noter ses prochaines lectures. :bookmark:

## Fonctionnalités

- :eye_speech_bubble: Partie recherche de livres par catégorie, et également par ISBN :mag: (l'identifiant unique d'un livre). 
- :bust_in_silhouette: Le but est de créer un compte utilisateur pour enregistrer ses prochaines lectures, sur une page profil. 
- :newspaper: Il y a un blog avec les infos d'[Actualitté.com](https://actualitte.com). 
- :school: Egalement une carte des librairies indépendantes à proximité de l'utilisateur. 

## Réalisation

Application en React.js avec des appels à l'API Google Books pour obtenir des couverture de livres ainsi que leurs infos. Création d'un backend correspondant avec Node.js. 
- Enregistrement des informations de l'utilisateur, ses livres dans sa Pile à Lire. 
- Et récupération des infos grâce à un web scraping d'[Actualitté](https://actualitte.com/thematique/35/chroniques). 
- Recherche par ISBN effectuée avec un appel Axios sur [Bibliosurf](https://www.bibliosurf.com/Presentation-de-l-API.html).
- Carte des libraires créée avec [Leaflet](https://leafletjs.com).


:construction: Bientôt déployée ! 
